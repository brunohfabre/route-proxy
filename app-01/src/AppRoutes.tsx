import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NoMatch } from "./pages/NoMatch";
import { Test } from "./pages/Test";

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/app-01'>
        <Route path='' element={<Home />} />
        <Route path='test' element={<Test />} />
      </Route>

      <Route path='*' element={<NoMatch />} />
    </Routes>
  )
}