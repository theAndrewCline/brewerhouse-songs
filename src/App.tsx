import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom'
import MarvelousLight from './songs/MarvelousLight'
import Center from './songs/Center'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col container mx-auto mt-8 justify-center items-center">
      <h1 className="text-4xl font-bold">Song List</h1>
      <ul className="flex flex-col justify-center items-center my-4">
        <li
          onClick={() => {
            navigate('/marvelous')
          }}
          className="p-4 my-2 text-2xl hover:shadow hover:bg-indigo-500 hover:text-white ease-in-out duration-200 rounded"
        >
          Marvelous Light
        </li>
        <li
          onClick={() => {
            navigate('/center')
          }}
          className="p-4 my-2 text-2xl hover:shadow hover:bg-indigo-500 hover:text-white ease-in-out duration-200 rounded"
        >
          Be The Center
        </li>
      </ul>
    </div>
  )
}

const App = () => (
  <div>
    <Router>
      <div>
        <Routes>
          <Route path="/marvelous" element={<MarvelousLight />}></Route>
          <Route path="/center" element={<Center />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  </div>
)

export default App
