import React from 'react';


const DonationCard = ({donation}) => {
    const {picture,category,description,category_bg,card_bg,text_button_bg}=donation;
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md" style={{backgroundColor:card_bg}}>
        <img src={picture} alt="" className="object-cover object-center w-full rounded-md h-72 rounded-lg" />
        <div className="mt-6 mb-2">
            <span className=" text-xs font-medium tracking-widest uppercase p-2 rounded-2xl" style={{ backgroundColor: category_bg }}>{category}</span>
            
        </div>
        <p className="p-3 rounded-xl" style={{backgroundColor:text_button_bg,opacity:.6}}>{description}</p>
    </div>
    );
};

export default DonationCard;