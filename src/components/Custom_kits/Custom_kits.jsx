import React from 'react'
import Socials_area from "../Home_page/socials_area"


export default function Custom_kits() {
  let kit = {};
  

  const submit_details = () => {
    let sport = document.getElementById("sport").value;
    let teamname = document.getElementById("teamname").value;
    let type = document.getElementById("type").value;
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let description= document.getElementById("description").value;

    const name_refresh = () => {return(name == undefined ? "" : name)};
    const number_refresh = () => {return(number == undefined ? "" : number)};

    kit["sport"] = sport;
    kit["teamname"] = teamname;
    kit["type"] = type;
    kit["name"] = name_refresh();
    kit["number"] =  number_refresh();
    kit["description"] = description;


    localStorage.setItem("custom_kit", JSON.stringify(kit));
  }

  return (
        <React.Fragment>
            <div className="container bg-dark mt-5">

            
        <form className="mt-5">
        <div className="input-group mb-3 mt-5">
        <span className="input-group-text bg-dark text-white">Sport :</span>
        <select id="sport">
              <option value="S">Soccer</option>
        </select>
        </div>

            
            <div className="input-group mb-3 mt-5">
            <span className="input-group-text bg-dark text-white">Team name :</span>
          <input id="teamname" 
          type="text" className="form-control" 
          required placeholder="Please enter a valid team" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div className="input-group mb-3 mt-5">
        <span className="input-group-text bg-dark text-white">Type :</span>
        <select required id="type">
              <option value="Home">Home</option>
              <option value="Away">Away</option>
              <option value="Third">Third</option>
        </select>
        </div>

        <div className="input-group mb-3 mt-5">
        <span className="input-group-text bg-dark text-white">Name :</span>
          <input id="name" type="text" className="form-control" placeholder="Name to be printed on shirt (Optional)" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div className="input-group mb-3 mt-5">
        <span className="input-group-text bg-dark text-white">Number :</span>
          <input id="number" type="text" className="form-control" placeholder="Number to be printed on shirt (Optional)" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>



        <div className="input-group">
        <span className="input-group-text bg-dark text-white">Description :</span>
          <textarea id="description" required className="form-control" placeholder="Give a further description like: The Size of the kit, e.t.c.." aria-label="With textarea"></textarea>
        </div>
        <div>

          <div className="cotainer row">
              <div className="col-5"><span></span></div>
              <button onClick={submit_details} className="btn btn-primary col-2 my-3" type="submit">Submit </button>
          </div>
        </div>

        </form>

        </div>
        <Socials_area/>
        </React.Fragment>

  );
}
