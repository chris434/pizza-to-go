import { useState } from "react";
export default function (value: {
  defaultValue: string | boolean;
  values: string | boolean[];
}) {
  const { defaultValue, values } = value;
  const [toggle, setToggle] = useState(defaultValue);

  function toggleValue() {
    setToggle((currentValue) =>
      values[0] != currentValue ? values[0] : values[1]
    );
  }
  return [toggle, toggleValue];
}
