import React from 'react'
import {useState, useEffect} from 'react'
import Resource_data_service from "../fetch_resources"
import UserDataService from "../User-operations"
import {useUserContext} from "../Usercontext/usercontext"
import { useCart } from 'react-use-cart';

// custom hook to get the current pathname in React

export default function Customer_details(props) {
  const [desc, Setdesc] = useState({});
  const {auth} = useUserContext();
  const {emptyCart} = useCart();

  const form = document.getElementById("details")
  
  const getpath = () => {
    let path = window.location.pathname;
    return path;
  }

  useEffect(() => {
    Resource_data_service.getall_data().then((res) => {
      Setdesc(res.data);
    }).catch(() => {
      alert("Failed to fetch resources.")
    })
  }, [])


  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
      }
      return result;
    }

 
  const Place_order = async () => {
    const nowDate = new Date();
    const date = nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate();

    const delivery_date = form['date-chosen'].value;
    const Name = form['sender-name'].value;
    const number = form['sender-number'].value;
    const Whatsapp = form['sender-whatsapp'].value;
    const other_contact = form['sender-other-contact-info'].value;
    const address = form['sender-address'].value;
    const further_address = form['sender-further-address'].value;
   

    if(getpath() == "/cart"){
        
        let data = {}
        let order = JSON.parse(localStorage.getItem("react-use-cart"));
        let items = [...order.items];

        let dated_items = [];

        for(let i = 0; i< items.length; i++){
          items[i]["date"] = date;
          items[i]["order_type"] = "normal kit";
          items[i]["order_status"] = "pending";
          items[i]["delivery_date"] = delivery_date;
          items[i]["Contact"] = Whatsapp + " and "+ other_contact;
          items[i]["address"] = address + " || " + further_address;

          
          dated_items.push(items[i]);
        }

        data["orders"] = dated_items;
        data["uid"] = auth.currentUser.uid;
      
        await UserDataService.post_Order(data).then((res) => {
          console.log(res)
          emptyCart()
          window.location.reload()
        }).catch((error) => {
          console.log(error);
        });
      }
      else if(getpath() == "/custom-kits"){
        
        let order = JSON.parse(localStorage.getItem("custm_kit"));

        order["date"] = date;
        order["order_type"] = "custom kit";
        order["order_status"] = "pending";
        order["delivery_date"] = delivery_date;
        order["quantity"] = 1;
        order["Contact"] = Whatsapp + " and "+ other_contact;
        order["address"] = address + " || " + further_address;
        order["_id"] = makeid(12);
        let arr_order = [order]

        let body = {
          "uid": auth.currentUser.uid,
          "orders": arr_order
        }
        await UserDataService.post_Order(body).then((res) => {
          console.log(res)
          window.location.reload()
        }).catch((error) => {
          console.log(error);
        });
      }
  }

  const return_html = () => {
    return (
      `<div><p>Hello there! This is an order confirmation email.</p>
       <p color="yellow">If you recieved this email, you order has been placed. Please support us by following our instagram page</p><br/>
      <button class="btn btn-primary"><a href="instagram.com/kitzone_" color="yellow">click here</a></button><br/>
      <p>If you were not expecting this email, kindly ignore it.</p></div>`
    );
  }
  const sendemail = (e) => {
    e.preventDefault();
    

    
    window.Email.send({
      Host : "smtp.gmail.com",
      Username : "kitzone9090@gmail.com",
      Password : desc.smtp.pass,
      To : 'mirzashihab2@gmail.com',
      From : "kitzone9090@gmail.com",
      Subject : "Order Confirmation",
      Body : return_html()

  }).then(
    
    (message) => {if(message == "OK") {
      Place_order()
      alert("Order confirmation email sent!\n You may now close this dialog box");
    
    }
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
