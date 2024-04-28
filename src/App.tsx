import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"
import AppWrapper from "./components/App/AppWrapper/AppWrapper"

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="u" element={<AppWrapper />}>
          <Route
            path="dashboard"
            element={
              <div>
                <h1>Dashboard</h1>
              </div>
            }
          />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
