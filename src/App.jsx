import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './component/Navbar'
import Content_1 from './component/Content_1'
import P2 from './component/P2'
import P3 from './component/P3'

function App() {

  return (
    <>
      <div className="p1">
        <div className="img1">
          <Navbar />
          <Content_1 />
        </div>
      </div>
      <div className="p2">
        <P2 />
      </div>
      <div className="p3">
        <P3/>
      </div>
      
    </>
  )
}

export default App
