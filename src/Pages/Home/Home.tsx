import React, { useState } from "react"

import { useNavigate } from "react-router-dom"

import Button from "components/atoms/Button"
import Toast from "components/atoms/Toast"

const Home: React.FC = () => {
  const [showToast, setShowToast] = useState(false)
  const navigate = useNavigate()

  const handleToastHide = () => {
    setShowToast(false)
  }

  const simulateError = () => {
    try {
      setShowToast(true)
      throw new Error("This is a simulated error.")
    } catch (e: any) {
      console.log(e.message)
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}
    >
      Home
      <Button onClick={() => navigate("/todo")}>Go to Todo App</Button>
      <Button variant="error" onClick={simulateError}>
        Simulate Error
      </Button>
      {showToast && (
        <Toast
          message="Simulated error check console for log"
          duration={5000}
          onHide={handleToastHide}
        />
      )}
    </div>
  )
}

export default Home
