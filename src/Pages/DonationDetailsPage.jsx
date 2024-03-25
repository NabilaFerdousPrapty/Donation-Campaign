import { useLoaderData, useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { getTheStoredMoney, saveTheDonationMoney } from "../hooks/HandleLocalStorage";

const notify = () => toast.success('Thank You for You help');

const DonationDetailsPage = () => {
    const donations = useLoaderData();
const { id } = useParams();
const {price}=useParams()
const priceInt=price
 const handleDonationMoney=()=>{
    saveTheDonationMoney(priceInt)
   notify();

 }
// console.log(id, donations);
const donation=donations.find(donation=>donation.id==id);
console.log(donation);
    return (
        <div className="flex justify-center items-center">
            <div className="max-w-screen-2xl p-4 shadow-md ">
	<div className="flex justify-between pb-4 border-bottom">
		
	</div>
	<div className="space-y-4">
    <div className="space-y-2 relative">
        <img src={donation.picture} alt="" className=" w-full rounded-md " />
        <div className="bg-black bg-opacity-80 ">
            <button onClick={handleDonationMoney}className="btn btn-secondary absolute left-2 bottom-4">Donate:tk {donation.price}</button>
            <Toaster />
        </div>
    </div>
    <div className="space-y-2">
        <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-xl font-semibold ">{donation.title}</h3>
        </a>
        <p className="leading-snug ">{donation.description}</p>
    </div>
</div>

</div>
        </div>
    );
};

export default DonationDetailsPage;