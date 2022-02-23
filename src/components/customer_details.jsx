import React from 'react'
import {useState, useEffect} from 'react'
import Resource_data_service from "../fetch_resources"
import UserDataService from "../User-operations"
import {useUserContext} from "../Usercontext/usercontext"

export default function Customer_details(props) {
  const [desc, Setdesc] = useState({});
  const {auth} = useUserContext();

  const form = document.getElementById("details")
  

  useEffect(() => {
    Resource_data_service.getall_data().then((res) => {
      Setdesc(res.data);
    }).catch(() => {
      console.error("Failed to fetch resources.")
    })
  }, [])

  const Place_order = () => {

    const date = new Date().getDate();
    let data = {}
    let order = JSON.parse(localStorage.getItem("react-use-cart"));
    let items = [...order.items];

    let dated_items = [];

    for(let i = 0; i< items.length; i++){
      items[i]["date"] = date;
      items[i]["type"] = "normal kit";
      items[i]["order status"] = "pending";
      dated_items.push(items[i]);
    }

    data["orders"] = dated_items;
    data["uid"] = auth.currentUser.uid;
  
    UserDataService.post_Order(data).then((res) => {
      console.log(res)
    }).catch((error) => {
      console.log(error);
    });
  }

  const return_html = () => {
    return (
      `<div><p><u>${JSON.stringify(props.kit)}</u></p><br/><button class="btn btn-primary"><a href="instagram.com">click</a></button></div>`
    );
  }
  const sendemail = (e) => {
    e.preventDefault();
    const Name = form['sender-name'].value;
    const number = form['sender-number'].value;
    const Whatsapp = form['sender-whatsapp'].value;
    const other_contact = form['sender-other-contact-info'].value;
    const address = form['sender-address'].value;
    const further_address = form['sender-further-address'].value;
    const delivery_date = form['date-chosen'].value;

    
    window.Email.send({
      Host : "smtp.gmail.com",
      Username : "kitzone9090@gmail.com",
      Password : desc.smtp.pass,
      To : 'mirzashihab2@gmail.com',
      From : "kitzone9090@gmail.com",
      Subject : "Order Confirmation",
      Body : return_html()

  }).then(
    
    (message) => {if(message == "OK") {alert("Order confirmation email sent!");
    document.getElementById("custm").style.display = "none"
    Place_order()
    window.location.reload()}
    }
  ).catch((err) => {
    alert(err);
  });
      
    
  }

  return (

    <React.Fragment>
    <div className="modal fade" id="custm" aria-labelledby="emailModal" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title fw-bold" id="emailModal"><u>Customer Details</u></h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form id="details" onSubmit={sendemail}>
            <div className="mb-3">
              <label className="col-form-label">Your Names:</label>
              <input min="15" max="20" required className="form-control" id="sender-name"></input>
            </div>
            <div className="mb-3">
              <label className="col-form-label">Phone Number:</label>
              <input max="11" min="10" required className="form-control" id="sender-number"></input>
            </div>
            <div className="mb-3">
              <label className="col-form-label">Whatsapp:</label>
              <input max="11" min="10" required className="form-control" id="sender-whatsapp"></input>
            </div>
            <div className="mb-3">
              <label className="col-form-label">Other Contact Info:</label>
              <input max="10" required placeholder="Optional" className="form-control" id="sender-other-contact-info"></input>
            </div>
            <div className="mb-3">
              <label className="col-form-label">Address Line 1:</label>
              <input max="20" min="15" required className="form-control" id="sender-address"></input>
            </div>
            <div className="mb-3">
              <label className="col-form-label">Address Line 2:</label>
              <input max="20" min="15" required className="form-control" id="sender-further-address"></input>
            </div>
            <div className="mb-3">
              <label className="col-form-label">Expected Order collection date:</label>
              <input name="date" max="3" type="date" required placeholder="please select a valid date" id="date-chosen" className="form-control"></input>
            </div>
           
            <button className="btn-secondary" type="submit">Proceed to confirm</button>
          </form>
          <div className="modal-footer">
          
          
          
          </div>
        </div>
        
      </div>
    </div>
    
  </div>
  
  </React.Fragment>

  );
}
