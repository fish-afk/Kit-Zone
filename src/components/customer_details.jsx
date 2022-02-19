import React from 'react'


export default function Customer_details(props) {
  const sendemail = () => {
    window.Email.send({
      Host : "smtp.gmail.com",
      Username : "kitzone9090@gmail.com",
      Password : "osfrlnpqsmlfqxrj",
      To : 'mirzashihab2@gmail.com',
      From : "kitzone9090@gmail.com",
      Subject : "This is the subject",
      Body : `<p><u>${JSON.stringify(props.kit)}</u></p><br/><button class="btn btn-primary"><a href="instagram.com">click</a></button>`

  }).then(
    message => alert(message)
  );
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
          <form>
            <div className="mb-3">
              <label className="col-form-label">Your Names:</label>
              <input type="text" className="form-control" id="sender-name"></input>
            </div>
            <div className="mb-3">
              <label className="col-form-label">Phone Number:</label>
              <input type="phone-number" className="form-control" id="sender-name"></input>
            </div>
            <div className="mb-3">
              <label className="col-form-label">Whatsapp:</label>
              <input type="text" className="form-control" id="sender-name"></input>
            </div>
            <div className="mb-3">
              <label className="col-form-label">Other Contact Info:</label>
              <input type="text" placeholder="Optional" className="form-control" id="sender-name"></input>
            </div>
            <div className="mb-3">
              <label className="col-form-label">Address Line 1:</label>
              <input type="text" className="form-control" id="sender-name"></input>
            </div>
            <div className="mb-3">
              <label className="col-form-label">Address Line 2:</label>
              <input type="text" className="form-control" id="sender-name"></input>
            </div>
            <div className="mb-3">
              <label className="col-form-label">Expected Order collection date:</label>
              <input name="date" type="date" placeholder="please select a valid date" className="form-control"></input>
            </div>
            <div className="text-center">
              
            </div>
          </form>
          <div className="modal-footer">
          <button className="btn-danger">Quit</button>
          <button className="btn-secondary" onClick={sendemail}>Proceed to confirm</button>
          
          
          </div>
        </div>
        
      </div>
    </div>
    
  </div>
  
  </React.Fragment>

  );
}
