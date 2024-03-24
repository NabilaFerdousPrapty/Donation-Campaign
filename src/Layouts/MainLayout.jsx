import { Outlet } from "react-router-dom";




import Navbar from './../Pages/Shared/NavBar/Navbar';
import Footer from "../Pages/Shared/Footer/Footer";


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