import React from 'react'

export default function Accordion() {
  return (

    <div className="container-fluid bg-dark mt-5">
        <header className="text-white text-center"> ... </header>
    <div className="accordion bg-dark" id="accordionExample">
  <div className="accordion-item bg-dark text-white">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed bg-dark text-white border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About us...
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Kit zone is your one stop sport shop/online store for a variety of brand new sports shirts/t-shirts/hoodies.
        Here, you will find selected kits, sports wear and many other types of upper body clothing. Note that we only offer shirts/t-shirts or hoodies and no other type of cothing.
        We ensure quality in our customer service and support. For further queries on what we offer, you will find our socials <a href='#socials-area'>below
          </a>.
      </div>
    </div>
  </div>
  <div className="accordion-item bg-dark text-white">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed bg-dark text-white border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Deliveries & Payments...
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        When it comes to deliveries, we currently do not deliver. We will let you know the place to collect what you ordered.
         However, if the customer is within close proximity,
        we might give it a second thought, hence we advise you to enter the correct address details on the website when placing an
        order. <br/><br/><strong>NO payments are collected through this website</strong> . Payments can be done with cash on delivery, mobile money (momo, airtel money e.t.c) or EFT. If you intend pay via 
        mobile money or EFT, please first place and confirm your order, and then contact us through the same socials given <a href="socials-area">below </a> 
        before paying.
      </div>
    </div>
  </div>
  <div className="accordion-item bg-dark text-white">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed bg-dark text-white border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Our coverage...
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Kitzone is designed and created to only be of service in Lusaka city of Zambia. We are a small business situated in Lusaka, so we have very little coverage at the time being, hence we will only accept orders from
        the residents of Lusaka. If you feel the need to confirm if you can place an order, after considering your location, please feel free to contact us...
      </div>
    </div>
  </div>
</div>
<footer className="text-center"> FAQs </footer>
</div>
  )
}
