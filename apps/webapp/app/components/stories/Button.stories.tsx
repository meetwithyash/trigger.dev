import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Button } from "../primitives/Buttons";
import {
  ArrowLeftIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Header1 } from "../primitives/Headers";
import { NamedIcon } from "../primitives/NamedIcon";
import {
  ExclamationCircleIcon,
  LightBulbIcon,
  ServerIcon,
} from "@heroicons/react/24/solid";

const meta: Meta<typeof ButtonList> = {
  title: "Primitives/Buttons",
  component: ButtonList,
  decorators: [withDesign],
};

export default meta;

type Story = StoryObj<typeof ButtonList>;

export const Basic: Story = {
  args: {
    primary: "Primary button",
  },

  render: (args) => <ButtonList {...args} />,
};

Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/jBqUJJ2d4lU6aSeKIIOBMY/Trigger.dev?type=design&node-id=1759%3A2827&t=e3AwZEA5bMHRVjFb-1",
  },
};

function ButtonList({ primary }: { primary: string }) {
  return (
    <div className="flex gap-24 p-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-start gap-2">
          <Header1 className="mb-1">Small size</Header1>
          <Button variant="primary/small">Primary button</Button>
          <Button variant="secondary/small">Secondary button</Button>
          <Button variant="tertiary/small">Tertiary button</Button>
          <Button variant="danger/small">Danger button</Button>
        </div>
        <div className="flex flex-col items-start gap-2">
          <Header1 className="mb-1">Small size, icon left</Header1>
          <Button variant="primary/small" LeadingIcon={ArrowLeftIcon}>
            Primary button
          </Button>
          <Button variant="secondary/small" LeadingIcon={ArrowLeftIcon}>
            Secondary button
          </Button>
          <Button variant="tertiary/small" LeadingIcon={ArrowLeftIcon}>
            Tertiary button
          </Button>
          <Button variant="danger/small" LeadingIcon={ArrowLeftIcon}>
            Danger button
          </Button>
        </div>
        <div className="flex flex-col items-start gap-2">
          <Header1 className="mb-1">Small size, icon right</Header1>
          <Button variant="primary/small" TrailingIcon={ArrowRightIcon}>
            Primary button
          </Button>
          <Button variant="secondary/small" TrailingIcon={ArrowRightIcon}>
            Secondary button
          </Button>
          <Button
            variant="tertiary/small"
            trailingIconClassName="text-red-500"
            TrailingIcon={ArrowRightIcon}
          >
            Tertiary button
          </Button>
          <Button variant="danger/small" TrailingIcon={ArrowRightIcon}>
            Danger button
          </Button>
        </div>
        <div className="flex flex-col items-start gap-2">
          <Header1 className="mb-1">Small size, shortcut</Header1>
          <Button variant="primary/small" shortcut="⌘S">
            Primary button
          </Button>
          <Button variant="secondary/small" shortcut="⌘S">
            Secondary button
          </Button>
          <Button variant="tertiary/small" shortcut="⌘S">
            Tertiary button
          </Button>
          <Button variant="danger/small" shortcut="⌘S">
            Danger button
          </Button>
        </div>
        <div className="flex flex-col items-start gap-2">
          <Header1 className="mb-1">Small size, image icon</Header1>
          <Button LeadingIcon="airtable" variant="primary/small">
            Connect to Airtable
          </Button>
          <Button LeadingIcon="github" variant="primary/small">
            Connect to GitHub
          </Button>
          <Button TrailingIcon="slack" variant="primary/small">
            Connect to Slack
          </Button>
          <Button TrailingIcon="warning" variant="primary/small">
            Connect to Slack
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-start gap-2">
          <Header1 className="mb-1">Medium size</Header1>
          <Button variant="primary/medium">Primary button</Button>
          <Button variant="secondary/medium">Secondary button</Button>
          <Button variant="tertiary/medium">Tertiary button</Button>
          <Button variant="danger/medium">Danger button</Button>
        </div>
        <div className="flex flex-col items-start gap-2">
          <Header1 className="mb-1">Medium size, icon left</Header1>
          <Button variant="primary/medium" LeadingIcon={ArrowLeftIcon}>
            Primary button
          </Button>
          <Button variant="secondary/medium" LeadingIcon={ArrowLeftIcon}>
            Secondary button
          </Button>
          <Button variant="tertiary/medium" LeadingIcon={ArrowLeftIcon}>
            Tertiary button
          </Button>
          <Button variant="danger/medium" LeadingIcon={ArrowLeftIcon}>
            Danger button
          </Button>
        </div>
        <div className="flex flex-col items-start gap-2">
          <Header1 className="mb-1">Medium size, icon right</Header1>
          <Button variant="primary/medium" TrailingIcon={ArrowRightIcon}>
            Primary button
          </Button>
          <Button variant="secondary/medium" TrailingIcon={ArrowRightIcon}>
            Secondary button
          </Button>
          <Button variant="tertiary/medium" TrailingIcon={ArrowRightIcon}>
            Tertiary button
          </Button>
          <Button variant="danger/medium" TrailingIcon={ArrowRightIcon}>
            Danger button
          </Button>
        </div>
        <div className="flex flex-col items-start gap-2">
          <Header1 className="mb-1">Medium size, shortcut</Header1>
          <Button variant="primary/medium" shortcut="⌘S">
            Primary button
          </Button>
          <Button variant="secondary/medium" shortcut="⌘S">
            Secondary button
          </Button>
          <Button variant="tertiary/medium" shortcut="⌘S">
            Tertiary button
          </Button>
          <Button variant="danger/medium" shortcut="⌘S">
            Danger button
          </Button>
        </div>
        <div className="flex flex-col items-start gap-2">
          <Header1 className="mb-1">Medium size, named icon</Header1>
          <Button LeadingIcon="airtable" variant="primary/medium">
            Connect to Airtable
          </Button>
          <Button LeadingIcon="github" variant="primary/medium">
            Connect to GitHub
          </Button>
          <Button TrailingIcon="slack" variant="primary/medium">
            Connect to Slack
          </Button>
          <Button LeadingIcon="warning" variant="primary/medium">
            Connect to Slack
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <Header1 className="mb-1">Icon only</Header1>
        <Button variant="primary/small" LeadingIcon={ArrowRightIcon} />
        <Button variant="secondary/small" LeadingIcon={LightBulbIcon} />
        <Button variant="tertiary/small" LeadingIcon={ServerIcon} />
        <Button variant="danger/small" LeadingIcon={ExclamationTriangleIcon} />
        <Button variant="primary/medium" LeadingIcon={ArrowRightIcon} />
        <Button variant="secondary/medium" LeadingIcon={LightBulbIcon} />
        <Button variant="tertiary/medium" LeadingIcon={ServerIcon} />
        <Button variant="danger/medium" LeadingIcon={ExclamationTriangleIcon} />
      </div>
    </div>
  );
}