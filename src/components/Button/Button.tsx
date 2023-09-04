"use client"
import React, { FC, ButtonHTMLAttributes } from "react"
import "./Button.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  variant?: string
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "default",
  ...props
}) => {
  const getVariant = (children: string) => {
    switch (variant) {
      case "add":
        return <>{children}</>
      case "remove":
        return <>{children}</>
      case "error":
        return <>{children}</>
      default:
        return children
    }
  }

  return (
    <button {...props} className={`button ${variant}`}>
      {getVariant(children)}
    </button>
  )
}

export default Button
