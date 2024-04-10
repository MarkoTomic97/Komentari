import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarComponent from "./components/NavbarComponent";
import ListComentsComponent from "./components/ListComentsComponent";

function App() {
 

  return (
    <>
      <BrowserRouter>
      <NavbarComponent/>
      <Routes>
      // http://localhost:3000
        <Route path='/' element={<ListComentsComponent/>}></Route>
      // http://localhost:3000/comments
        <Route path='/comments' element={<ListComentsComponent/>}></Route>

      </Routes>
      </BrowserRouter>
    </>  
  )
}

export default App;
