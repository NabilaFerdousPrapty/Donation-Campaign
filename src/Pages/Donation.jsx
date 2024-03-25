import { useEffect, useState } from 'react';
import DonationPage from '../components/DonationPage';

const Donation = () => {
    const [allDonations, setAllDonations] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('/donation.json')
            .then(response => response.json())
            .then(allDonations => setAllDonations(allDonations));
    }, []);

    const showAll = () => {
        setDataLength(allDonations.length);
    };

    return (
        <>
            <div className='grid md:grid-cols-2 grid-cols-1 px-10 gap-5'>
                {allDonations.slice(0, dataLength).map((donation, idx) => (
                    <DonationPage allDonation={donation} key={idx} />
                ))}
            </div>
            <div className={dataLength===allDonations.length ? `hidden`: `text-center py-8`}>
                <button onClick={showAll} className="btn btn-primary">Show All</button>
            </div>
        </>
    );
};

export default Donation;
