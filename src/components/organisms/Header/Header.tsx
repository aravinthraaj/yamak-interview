"use client"
import React from "react"

import "./Header.scss"
// import 'global.scss'

import { useNavigate, useLocation } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className={"headerWrapper"}>
      <header className={"header"}>
        <nav>
          <li
            className={location.pathname === "/" ? "active" : ""}
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className={location.pathname === "/todo" ? "active" : ""}
            onClick={() => navigate("/todo")}
          >
            Todo
          </li>
          <li
            className={location.pathname === "/about" ? "active" : ""}
            onClick={() => navigate("/about")}
          >
            About
          </li>
        </nav>
      </header>
    </div>
  )
}

export default Header
