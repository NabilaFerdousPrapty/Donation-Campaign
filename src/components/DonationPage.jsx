

const DonationPage = ({allDonation}) => {
     const {picture,category,description,category_bg,card_bg,text_button_bg,title}=allDonation;
    return (
        <div className="">
          <div className="h-64 max-w-lg p-6 rounded-md shadow-md flex gap-6  justify-between items-center" style={{backgroundColor:card_bg}}>
        <img src={picture} alt="" className=" object-center  rounded-md w-2/4 " />
        <div className="mt-6 mb-2">
            <span className=" text-xs font-medium tracking-widest uppercase p-2 rounded-2xl" style={{ backgroundColor: category_bg }}>{category}</span>
            <h2 className="text-3xl">{title}</h2>
            <button className="btn btn-primary">View Details</button>
            
        </div>
       
    </div>
    
        </div>
    );
};

export default DonationPage;