import React, { useState } from "react"
import "./Input.css"

interface MaterialInputProps {
  label: string
  type?: string
  value: string
  onChange: (value: string) => void
}

const MaterialInput: React.FC<MaterialInputProps> = ({
  label,
  type = "text",
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value)

  const labelClass = value || isFocused ? "float" : ""

  return (
    <div className="input-wrapper">
      <input
        type={type}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className="input"
      />
      <label className={labelClass}>{label}</label>
      <div className="underline" />
    </div>
  )
}

export default MaterialInput
