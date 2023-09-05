import React, { useEffect, useState } from "react"

import "./Toast.scss"

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, onHide }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
    const timer = setTimeout(() => {
      setShow(false)
      onHide()
    }, duration)
    return () => clearTimeout(timer)
  }, [duration, onHide])

  const animationDuration = `${duration / 1000}s`

  return (
    <div className="toast-container">
      <div className={`toast ${show ? "show" : ""}`}>
        <div className="loader-bar">
          <div className="loader-fill" style={{ animationDuration }}></div>
        </div>
        <div className="toast-message">{message}</div>
      </div>
    </div>
  )
}

export default Toast
