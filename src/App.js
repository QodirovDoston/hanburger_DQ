// import { Button, Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import About from "../src/companents/About/About";
import Boshqacha from "./companents/BoshqachaNavbar/Boshqacha";
import TableData from "./companents/DinamicTable/TableData";
import FormData from "./companents/Form/FormData";
import NavbarAdd from "./companents/Navbar/NavbarAdd";
// import MuiNavbar2 from "./companents/Navbar2/MuiNavbar2";

function App() {

  return (
    <>
    <NavbarAdd/>
    {/* <MuiNavbar2/> */}

  <Routes>
    <Route path="/form" element={<FormData/>}/>
    <Route path="/table" element={<TableData/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
    <Boshqacha/>
    </>
  );
}

export default App;
