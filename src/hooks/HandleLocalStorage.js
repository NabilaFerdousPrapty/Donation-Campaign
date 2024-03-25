const getTheStoredMoney=()=>{
    const storedDonationMoney=localStorage.getItem('donation-Money');
    if (storedDonationMoney) {
        return JSON.parse(storedDonationMoney)
    }
    return []
}
const saveTheDonationMoney =money => {
    const allStoredDonationMoney = getTheStoredMoney();
    allStoredDonationMoney.push(money);
    localStorage.setItem('donation-Money', JSON.stringify(allStoredDonationMoney));
}

export {getTheStoredMoney,saveTheDonationMoney}