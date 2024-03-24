import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default MainLayout;