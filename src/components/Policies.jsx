import React from 'react'
import Socials_area from "./Home_page/socials_area"
export default function Policies
() {
  return (
      <React.Fragment>
    <div className="container bg-dark text-white mt-5">
        <br/><br/><br/><br/>
    <h1 className="text-warning"><u>Payment policies</u></h1>
        <ul className="fs-5 mt-3">
            <li>50 % or half payment must be done for you to confirm you order/s .</li>
            <li>Payments are not collected directly through this website, we mainly collect through cash, mobile money or EFT.</li>
            <li>IF you choose the cash option, you can pay in full on collecting your order</li>
            <li>If you want to go with mobile money, please contact us first and we will let you know how to place you payment..</li>
            
        </ul>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    <Socials_area />
    </React.Fragment>
  )
}
