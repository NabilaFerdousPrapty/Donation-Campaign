import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const DonationCards = () => {
    const [donations,setDonations]=useState([]);
    useEffect(()=>{
        fetch('/public/donation.json')
        .then(response=>response.json())
        .then(donations=>setDonations(donations,console.log(donations)))
    },[])

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-10 pb-8">
           {
            donations.map((donation,ind)=><DonationCard donation={donation} key={ind}></DonationCard>)
           }
        </div>
    );
};

export default DonationCards;