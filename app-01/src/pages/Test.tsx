import { useNavigate } from "react-router-dom"

export function Test() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>App 01 - test</h1>

      <button type='button' onClick={() => window.location.href = '/app-02'}>go to app-02</button>
    </div>
  )
}