import React, { Component } from 'react';
import { send } from '@emailjs/browser';

export default class Modal extends Component{

    async send_email(){
      const close_btn = document.getElementById("closeit");
      const KEYS ={
        service_key: "service_8h3v6ew",
        template_key: "template_ud2ti7c",
        user_key: "user_uBwPjYzKVYr2jLKE17pNV"

      } 

      let params ={
        org_name:"kit-zone.org",
        from_name : document.getElementById("sender-name").value,
        to_name :"Saad",
        message :document.getElementById("message-text").value
        
       }
      if(params.from_name.length < 3 || params.message.length < 50){

        window.alert("-> name should be atleast 3 characters\n-> Message should be at least 50 charachters long")

      }else{
        await send(KEYS.service_key, KEYS.template_key, params, KEYS.user_key ).then((response) => {
         
         if(response.status == 200){
           close_btn.click();
           alert("Email has been sent successfully");

         }else{
           close_btn.click();
           alert("An error occured while trying to send an email...\n" + response.status);
         }
        })
        .catch(()=>{
          close_btn.click();
          alert("An error occured")
        })
      }
    }
    render(){
        return(
            <div className="modal fade" id="email" aria-labelledby="emailModal" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="emailModal">Compose Email</h5>
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
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="closeit">Close</button>
                  <button type="button" onClick={this.send_email} className="btn btn-primary">Send Email</button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}