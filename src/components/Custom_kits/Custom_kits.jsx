import React from 'react'
import Socials_area from "../Home_page/socials_area"
export default function Custom_kits() {
  return (

<React.Fragment>
    <div className="container bg-dark mt-5">

    
<form className="mt-5">
<div className="input-group mb-3 mt-5">
<span className="input-group-text bg-dark text-white">Sport :</span>
<select>
      <option value="S">Soccer</option>
    </select>
</div>

    
    <div className="input-group mb-3 mt-5">
    <span className="input-group-text bg-dark text-white">Team name :</span>
  <input type="text" className="form-control" required placeholder="Please enter a valid team" aria-label="Username" aria-describedby="basic-addon1"></input>
</div>

<div className="input-group mb-3 mt-5">
<span className="input-group-text bg-dark text-white">Type :</span>
<select required>
      <option value="Home">Home</option>
      <option value="Away">Away</option>
      <option value="Third">Third</option>
    </select>
</div>

<div className="input-group mb-3 mt-5">
<span className="input-group-text bg-dark text-white">Name :</span>
  <input type="text" className="form-control" placeholder="Name to be printed on shirt (Optional)" aria-label="Username" aria-describedby="basic-addon1"></input>
</div>

<div className="input-group mb-3 mt-5">
<span className="input-group-text bg-dark text-white">Number :</span>
  <input type="text" className="form-control" placeholder="Number to be printed on shirt (Optional)" aria-label="Username" aria-describedby="basic-addon1"></input>
</div>



<div className="input-group">
<span className="input-group-text bg-dark text-white">Description :</span>
  <textarea className="form-control" placeholder="Give a further description like: Color, Home, Away or Third kit, e.t.c..." aria-label="With textarea"></textarea>
</div>
<div>

  <div className="cotainer row">
      <div className="col-5"><span></span></div>
      <button className="btn btn-primary col-2 my-3" type="submit">Submit </button>
  </div>
</div>

</form>

</div>
<Socials_area/>
</React.Fragment>

  );
}
