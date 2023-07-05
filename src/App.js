import Footer from "./Components/Footer";
import Header from "./Components/Header";
// import './App.css';
import HelloWorld from "./Components/HelloWorld";

// React router imports
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

function Home(){
  return <h1 className="">This is the homepage.</h1>;
}

function About(){
  return <h1 className="">This is the About page.</h1>;
}

function App(){
  return(
    <div>
      <Header/>
      <HelloWorld/>
      <Router>
          <ul>
            <li>
              <Link to='/' className="text-blue-500">Home</Link>
            </li>
            <li>
              <Link to='/about' className="text-blue-500">About</Link>
            </li>
          </ul>
          {/* The below changes the content displayed */}


          <Routes>
            <Route path='/' element={<Home/>}>
            </Route>
            <Route path="/about" element={<About/>}>

            </Route>
          </Routes>
        
      </Router>

      <Footer/>
    </div>
  )
}

export default App;