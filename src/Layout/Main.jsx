import { Outlet } from "react-router-dom";
import Footer from "../pages/home/Shared/Footer/Footer";
import Navbar from "../pages/home/Shared/Navbar/Navbar";

 
 const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
 };
 
 export default Main;