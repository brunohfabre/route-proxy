import { useNavigate } from "react-router-dom"

export function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>app 01 - home</h1>

      <button type='button' onClick={() => navigate('test')}>go to test</button>
    </div>
  )
}