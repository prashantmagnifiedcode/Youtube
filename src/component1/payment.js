import React from 'react'
const Payment=()=>{
    return(
        <>
        <div className="Payment-container">
    <div className="Payment-card">
        <div className="Payment-form">
            <div className="Payment-left-side"> <span className="Payment-success">Success</span>
                <div className="Payment-image">
                     <img src="https://imgur.com/QrKJmrf.jpg"/> </div>
                <div className="Payment-debit-card">
                    <div className="Payment-card_name"> <small>Cardholder name</small> <span className="Payment-user_name">John Doe</span> </div>
                    <div className="Payment-num_expiry">
                        <div className="Payment-card_number"> <small>Card Number</small> <span className="Payment-set_card_number">0000 0000 0000 0000</span> </div>
                        <div className="Payment-card_cvv"> <small>Valid upto</small> <span className="Payment-user_card_cvv">MM/YYYY</span> </div>
                    </div>
                </div>
            </div>
            <div className="Payment-right-side">
                <h3>Payment details</h3>
                <div className="Payment-input-text"> <input type="text" id="user_name_input" onkeyup="userName(this.value)" placeholder="Username" require/> <span>Cardholder name</span> </div>
                <div className="Payment-input-text"> <input type="text" id="user_card_number_input" placeholder="0000 0000 0000 0000" onkeyup="userCardNumber(this.value)" data-slots="0" data-accept="\d" require/> <span>Card number</span> </div>
                <div className="Payment-input-div">
                    <div className="Payment-input-text"> <input type="text" onkeyup="usercardcvv(this.value)" placeholder="MM/YYYY" data-slots="MY" require/> <span>Valid upto</span> </div>
                    <div className="Payment-input-text "> <input type="text" placeholder="000" data-slots="0" data-accept="\d" size="3" require/> <span>CVV</span> </div>
                </div>
                <div className="Payment-button"> <button className="Payment-click-pay">Pay $25.99</button> </div>
            </div>
        </div>
    </div>
</div>   
        
        </>
    )
}
export default Payment;