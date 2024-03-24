import Banner from "../components/Banner";
import bg from '../assets/donation-box-and-charity-concept-human-hands-putting-money-cash-love-and-heart-to-donation-box-together-helping-doing-charity-illustration-free-vector.jpg'
import DonationCards from "../components/DonationCards";

const Home = () => {
    return (
        <>
         <div className="relative">
        <div className="absolute inset-0 bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${bg})`, opacity: 0.2}}></div>
        <div className="relative z-10">
         <Banner/>
        
        </div>
      </div>
         <DonationCards/>
        </>
       
      
    );
};

export default Home;