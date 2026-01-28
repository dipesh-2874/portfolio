import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Body from './components/Body'

function App() {

  return (
    <div className='bg-zinc-950'>
      <Loader />
      <Navbar />
      <Body />
    </div>
  )
}

export default App
