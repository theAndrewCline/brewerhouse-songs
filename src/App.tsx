import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import MarvelousLight from './songs/MarvelousLight'

const Home = () => (
  <div className="flex flex-col container mx-auto mt-8 justify-center items-center">
    <h1 className="text-4xl font-bold">Song List</h1>
    <ul className="flex flex-col justify-center items-center my-4">
      <li className="p-4 my-2 text-2xl hover:shadow hover:bg-indigo-500 hover:text-white ease-in-out duration-200 rounded">
        <Link to="/marvelous">Marvelous Light</Link>
      </li>
      <li className="p-4 my-2 text-2xl hover:shadow hover:bg-indigo-500 hover:text-white ease-in-out duration-200 rounded">
        <Link to="/center">Be The Center</Link>
      </li>
    </ul>
  </div>
)

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/marvelous" element={<MarvelousLight />}></Route>
        <Route path="/center" element={<MarvelousLight />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  </Router>
)

export default App
