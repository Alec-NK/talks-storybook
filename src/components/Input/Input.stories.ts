import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";
import { fn } from "@storybook/test";

const input: Meta<typeof Input> = {
  title: "Componentes/Input",
  component: Input,
};

export default input;

type InputStory = StoryObj<typeof input>;

export const AlekFumasa: InputStory = {
  args: {
    label: "feijao",
    onChange: fn(),
    value: "teste",
    errorText: "E-mail inválido!",
  },
};
