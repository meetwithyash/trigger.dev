import { parse } from "@conform-to/zod";
import { ActionArgs, json } from "@remix-run/server-runtime";
import { z } from "zod";
import { prisma } from "~/db.server";
import { CreateEndpointService } from "~/services/endpoints/createEndpoint.server";
import { requireUserId } from "~/services/session.server";

const ParamsSchema = z.object({
  environmentParam: z.string(),
});

export const bodySchema = z.object({
  clientSlug: z.string(),
  url: z.string().url("Must be a valid URL"),
});

export async function action({ request, params }: ActionArgs) {
  const userId = await requireUserId(request);
  const { environmentParam } = ParamsSchema.parse(params);

  const formData = await request.formData();
  const object = Object.fromEntries(formData.entries());
  console.log("object", object);

  const submission = parse(formData, { schema: bodySchema });

  console.log(submission);

  if (!submission.value || submission.intent !== "submit") {
    return json(submission);
  }

  try {
    const environment = await prisma.runtimeEnvironment.findUnique({
      include: {
        organization: true,
        project: true,
      },
      where: {
        id: environmentParam,
      },
    });

    if (!environment) {
      throw new Error("Environment not found");
    }

    const service = new CreateEndpointService();
    const result = await service.call({
      id: submission.value.clientSlug,
      url: submission.value.url,
      environment,
    });
    return json(result);
  } catch (e) {
    return json(e, { status: 400 });
  }
}
