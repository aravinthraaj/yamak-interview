import React, { FC, useState } from "react"

import "./Checkbox.scss"

const Checkbox: FC<CheckboxProps> = ({ onChange, checked = false }) => {
  const [isChecked, setIsChecked] = useState(checked)

  const toggleCheck = () => {
    const newCheckedState = !isChecked
    setIsChecked(newCheckedState)

    if (onChange) {
      onChange(newCheckedState)
    }
  }

  return (
    <div
      className={`checkbox ${isChecked ? "checked" : ""}`}
      onClick={toggleCheck}
    >
      <div className="tick-mark"></div>
    </div>
  )
}

export default Checkbox
