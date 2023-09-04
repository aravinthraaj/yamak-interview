import React, { useState, useRef, useEffect } from "react"
import "./Select.css"

interface CustomSelectProps {
  options: string[]
  defaultValue: string
  onChange: (selectedOption: string) => void
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  defaultValue,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string>(defaultValue)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
    onChange(option)
  }

  return (
    <div className="custom-select-container" ref={containerRef}>
      <div className="custom-select-header" onClick={toggleOpen}>
        {selectedOption}
        {isOpen ? <span>▲</span> : <span>▼</span>}
      </div>
      {isOpen && (
        <ul className="custom-select-list">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className={option === selectedOption ? "selected" : ""}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CustomSelect
