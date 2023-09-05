import React from "react"
import "./App.scss"
import Header from "components/organisms/Header/Header"
import Routes from "Routes/Routes"

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes />
      </main>
    </div>
  )
}

export default App
