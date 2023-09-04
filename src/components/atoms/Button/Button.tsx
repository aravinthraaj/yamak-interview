"use client"
import React, { FC, ButtonHTMLAttributes } from "react"
import { IconTrashX, IconPlus } from "@tabler/icons-react"
import "./Button.scss"

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
        return (
          <>
            <IconPlus color="#45a049" size={28} stroke={1} />
            <div className="mobile">{children}</div>
          </>
        )
      case "remove":
        return (
          <>
            <IconTrashX color="#f44336" size={28} stroke={1} />
            <div className="mobile">{children}</div>
          </>
        )
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
