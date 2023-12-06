import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Contact } from './Components/Contact';
//import NavBar from './Components/NavBar';
// import { Banner } from './Components/Banner';
import  ProjectPage  from './Components/ProjectPage';
// import NoPage from './Components/NoPage';
import Home from './Components/Home';


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      
        <Route path='/' element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectPage />} />
         {/*<Route path="*" element={<NoPage />} />  */}
         
      
     </Routes>
   </BrowserRouter>
);
}

export default App;

      

