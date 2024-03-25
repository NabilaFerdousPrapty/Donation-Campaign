import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../Layouts/MainLayout';
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistics from "../Pages/Statistics";
import ErrorPage from "../Pages/ErrorPage";
import DonationDetailsPage from "../Pages/DonationDetailsPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>,
          
        },
        {
          path:'/donation',
          element:<Donation/>
        },{
          path:'/statistics',
          element:<Statistics/>
        },
        {
          path:'/donation/:id',
          element:<DonationDetailsPage/>,
          loader:()=>fetch('../../public/donation.json')
        }
      ]
    },
  ]);
  export default router