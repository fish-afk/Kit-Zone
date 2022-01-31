import React, { Component } from 'react';
import { send } from '@emailjs/browser';

export default class Modal extends Component{

    send_email(){
      
      let params ={
        org_name:"kit-zone.org",
        from_name : document.getElementById("sender-name").value,
        to_name :"Saad",
        message :document.getElementById("message-text").value
        
       }
      send("service_8h3v6ew", "template_ud2ti7c", params, "user_uBwPjYzKVYr2jLKE17pNV").then((res) => {
        res.status == 200 ? window.alert("Email sent successfully"): window.alert("An error occured");
      })
    }
    render(){
        return(
            <div className="modal fade" id="email" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Compose Email</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="col-form-label">Your Names:</label>
                      <input type="text" className="form-control" id="sender-name"></input>
                    </div>
                    <div className="mb-3">
                      <label className="col-form-label">Message:</label>
                      <textarea className="form-control" id="message-text"></textarea>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" onClick={this.send_email} className="btn btn-primary">Send Email</button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}