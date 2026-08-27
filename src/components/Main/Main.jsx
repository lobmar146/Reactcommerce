import { Routes, Route } from 'react-router-dom'
import Home from '../../routes/Home'

function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  )
}

export default Main
