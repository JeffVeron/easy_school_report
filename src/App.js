
import classes from "./App.module.css";
import AdminSignUp from "./components/AminSignUp";
import { Routes , Route } from "react-router-dom";
import Homepage from "./components/HomePage";

function App() {
 

  return (
   
     <div className={classes.app}>
       <Routes>
       <Route exact path="/" element={<Homepage />}></Route>
       <Route exact path="/signup" element={<AdminSignUp />}></Route>
      </Routes>
       
    </div>
  )
   

}

export default App;
