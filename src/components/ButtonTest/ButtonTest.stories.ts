import { Meta, StoryObj } from "@storybook/react";
import { ButtonTest } from ".";

const button: Meta<typeof ButtonTest> = {
  title: "Example/Batata",
  component: ButtonTest,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default button;

type ButtonStory = StoryObj<typeof button>;

export const Primary: ButtonStory = {
  args: {
    children: "Teste texto",
    type: "primary",
    onChange: () => console.log("teste"),
  },
};

export const Danger: ButtonStory = {
  args: {
    children: "Mudou",
    type: "danger",
  },
};
