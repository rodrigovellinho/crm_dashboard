"use client";

import { SelectHTMLAttributes, forwardRef } from "react";

const selectOptions = [
  {
    label: "a",
    value: "a1",
  },
  {
    label: "b",
    value: "b1",
  },
  {
    label: "c",
    value: "c1",
  },
];

interface SelectOptionsProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const SelectOptions = forwardRef<HTMLSelectElement, SelectOptionsProps>(
  ({ ...rest }, ref) => {
    return (
      <select
        className="w-full rounded border border-zinc-200  bg-white p-2"
        {...rest}
        ref={ref}
      >
        {selectOptions.map((option) => (
          <option key={option.value}>{option.label}</option>
        ))}
      </select>
    );
  },
);

export default SelectOptions;
