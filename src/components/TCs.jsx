import React from 'react'
import Socials_area from "./Home_page/socials_area"

export default function TCs() {
  return (
      <React.Fragment>
    <div className="container bg-dark text-white mt-5">

<br/><br/>
    <h1 className="text-warning"><u>Terms</u></h1>
    <ul className="fs-5 mt-3">
        <li><u>Kit </u>-  this refers to the products we sell, it could not only be a soccer kit, but rather any other type of shirt or hoodie.</li>
        <li><u>printed/custom kit- </u> A printed kit is a user customised kit that has custom features like the name, text printed on kit. As a side note, this kit can also be a default kit which is not shown on any of the showcasing pages.</li>
        <li><u>Expected order collection date</u> This is the date that you are sure you will collect your placed order with full payment.</li>
        
    </ul>
    <br/><br/>
    <h1 className="text-warning mt-5"><u>Conditions</u></h1>
    <ul className="fs-5 mt-3">
        <li>50% or half payment MUST be done to confirm your order, if you are willing to pay via mobile money or EFT</li>
        <li>NO returns can be made on customised or printed kits...</li>
        <li>In the event of cancellations, NO cancellations can be made once half payment is fulfilled.</li>
        <li>No deliveries can be made by us, so you will have to manually collect your placed order, but this might change, so please contact us after placing order to let you know where to collect or if we will deliver...</li>
        <li>Orders should be made using this site, and not using our socials/contacts, unless you want to make queries or confirm something, then please feel free to contact us.</li>
        <li>Customised kits have no specific prices, these are going to be told once you place your order through the <a href="/custom-kits">Custom kits</a> section.</li>

    </ul>
    
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    
</div>
<Socials_area />
</React.Fragment>
  )
}
