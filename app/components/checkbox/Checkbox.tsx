import React from "react";
import "./Checkbox.css";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  id,
}) => {
  return (
    <div className="custom-checkbox">
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label data-testid={id} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
