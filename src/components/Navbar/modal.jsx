import React, { Component } from 'react';
import { send } from '@emailjs/browser';
import Recaptcha from 'react-recaptcha';
import Resource_data_service from "../../fetch_resources"

export default class Modal extends Component{
    constructor(props) {
      super(props)
      this.handleSend = this.handleSend.bind(this);
      this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
      this.verifyCallback = this.verifyCallback.bind(this);
      this.state ={
        isVerified: false
      }
    }

    handleSend(){
      if(this.state.isVerified === true){
        this.send_email();
      }else{
        alert("please verify that you are a human..")
      }
    }

    verifyCallback(response){
      if(response){
        this.setState({isVerified:true})
      }
    }

    recaptchaLoaded(){
      console.log("captcha loaded");
    }
    get_time(){

     let time = localStorage.getItem("time");
     let currentTime = new Date();
     let hour = currentTime.getHours();
     if(time === undefined || hour - time < 0){
       
       localStorage.setItem("time", hour);
       return "First_time";

     }else{
       console.log(hour - parseInt(time))
       return( hour - parseInt(time))
     }
    }
    cooldown=()=>{
     
      let new_time = new Date();
      if(this.get_time() === "First_time"){
        return false;
      }else{
        if(this.get_time() <= 3 && this.get_time() >= 0){
          return true;
        }else if(this.get_time() > 3){
          localStorage.setItem("time", String(new_time.getHours()));
          return false;
        }
      }

    }
    async send_email(e){
      
      let KEYS = null;
      const close_btn = document.getElementById("closeit");
      await Resource_data_service.getall_data(true).then((response) => {
        
        
        let service_key = response.data.emailjs.service_key
        let template_key = response.data.emailjs.template_key;
        let user_key = response.data.emailjs.user_key;

        KEYS ={
          service_key: service_key,
          template_key: template_key,
          user_key: user_key
        }
        
      }).catch(() => {
        console.error("Failed to fetch resources.")
      })

      let params ={
        org_name:"kit-zone-server",
        from_name : document.getElementById("sender-name").value,
        to_name :"Saad",
        message :document.getElementById("message-text").value
        
       }
      if(params.from_name.length < 3 || params.message.length < 50){

        window.alert("-> name should be atleast 3 characters\n-> Message should be at least 50 characters long")

      }else{
        
        await send(KEYS.service_key, KEYS.template_key, params, KEYS.user_key ).then((response) => {
         
         if(response.status === 200){
          
          close_btn.click()
           window.location.reload();
           alert("Email has been sent successfully,\nThank you for your feedback!");

          

         }else{
          close_btn.click()
           alert("An error occured while trying to send an email...\n" + response.status);
           
         }
        })
        .catch(()=>{
          close_btn.click()
          alert("An error occured")
        })
      }
      
      
    }
    render(){
      
        return(
          <React.Fragment>
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
                    <div className="text-center">
                      <h5>You can only send 1 email every 3 hours...</h5>
                    </div>
                  </form>
                  <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="closeit">Close</button>
                  <button type="submit" disabled={this.cooldown()} onClick={this.handleSend} id="send-btn" className="btn btn-primary">Send Email</button>
                  <div className="container">
                  <Recaptcha
                    sitekey="6LcG040eAAAAAPPkBhrS0IueBZQE-NFurLvxb0XV"
                     render="unexplicit" onloadCallback={this.recaptchaLoaded}
                     verifyCallback={this.verifyCallback}
                  />
                  </div>
                  
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
          
          </React.Fragment>
        );

      
    }
}