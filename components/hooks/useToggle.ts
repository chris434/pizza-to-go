import { useState } from "react";
export default function (defaultValue: boolean) {
  const [toggle, setToggle] = useState(defaultValue);

  const toggleValue: any = () => {
    setToggle((currentValue: boolean) => (currentValue ? false : true));
  };
  return [toggle, toggleValue];
}
