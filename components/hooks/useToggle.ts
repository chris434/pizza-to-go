import { useState } from "react";
export default function (value: { defaultValue: string; values: string[] }) {
  const { defaultValue, values } = value;
  const [toggle, setToggle] = useState(defaultValue);

  const toggleValue: any = () => {
    setToggle((currentValue: string) =>
      values[0] != currentValue ? values[0] : values[1]
    );
  };
  return [toggle, toggleValue];
}
