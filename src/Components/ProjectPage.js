import  NavBar  from "../Components/NavBar";
import { Link } from 'react-router-dom';
import React from "react";


function ProjectPage() {
    
  
    return (
      <div >
        <NavBar />
  
        <div className="project">
          <h2>Hi, I have worked for JnJ Summit Courses</h2>
          <p>I have gained valuable experience at Johnson & Johnson Summit Courses, where I spearheaded the migration of 
            the user interface (UI) from jQuery to React.js. This involved not only the UI migration but also substantial CSS 
            enhancements.</p>
          <p></p>
          <p>Additionally, I excelled in creating intricate interactive forms and implementing robust validation procedures using 
            the Formik and Yup libraries. My role extended to efficiently retrieving and managing data from APIs through the 
            use of Axios, contributing to the seamless operation of web applications.</p>
        </div>
        <Link to="/">
        <button id="buck" style={{ backgroundColor: '#007bff', border: '2px solid black', borderRadius: '5px', marginTop: '50px', marginLeft: '600px'  }}>Back to Home</button>
        </Link>
      </div>
    );
  }
  
  export default ProjectPage;
  



