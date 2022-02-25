import React from 'react'
import  useEffect from 'react'
import Socials_area from "../Home_page/socials_area"
import { useUserContext } from "../../Usercontext/usercontext";
import Customer_details from "../customer_details";

export default function Custom_kits() {
  const { user } = useUserContext();

  let kit = {};

  useEffect(() => {
    document.getElementById("next").disabled = true
  }, [])

  const submit_details = (e) => {
    e.preventDefault();
    let sport = document.getElementById("sport").value;
    let teamname = document.getElementById("teamname").value;
    let type = document.getElementById("type").value;
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let description= document.getElementById("description").value;

    if(user.email != undefined && user.emailVerified == true) {
      
            if(sport !== "" && type !== "" && teamname.length > 4 && name.length > 3
              && description.length > 6){
              
            
            const number_refresh = () => {return(number == undefined ? "" : number)};

            kit["sport"] = sport;
            kit["teamname"] = teamname;
            kit["type"] = type;
            kit["name"] = name;
            kit["number"] =  number_refresh();
            kit["description"] = description;
            
            localStorage.setItem("custm_kit", JSON.stringify(kit));
            document.getElementById("next").disabled = false;

            }else{
              document.getElementById("teamname").style.border = "4px solid red";
              document.getElementById("description").style.border = "4px solid red";
              alert("Please fill in all obligatory fields with minimum 5 characters...")
            }
    }else{
      if(user.email == undefined){
            document.getElementById("acc").click();document.getElementById("burger").click();
            alert("Please log in first...")
      }else{
        alert("Please Verify Your Email...")
      }
    }
  
  }

  return (
        <React.Fragment>
            <div className="container-fluid bg-dark mt-5">

            
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
          <input required id="name" type="text" className="form-control" placeholder="Name printed on shirt-Optional" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div className="input-group mb-3 mt-5">
        <span className="input-group-text bg-dark text-white">Number :</span>
          <input id="number" type="text" className="form-control" placeholder="Number printed on shirt-Optional" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>



        <div className="input-group">
        <span className="input-group-text bg-dark text-white">Description :</span>
          <textarea id="description" required className="form-control" placeholder="Give a further description like: The Size of the kit, e.t.c.." aria-label="With textarea"></textarea>
        </div>
        <div className="">

          <div className=" text-center">
              
              <button  onClick={submit_details} className="btn btn-primary m-4" type="submit" >Submit </button>
              <button id="next" data-bs-toggle="modal" data-bs-target="#custm" type="button" className="btn btn-success">Next</button>
          </div>
        </div>

        </form>
        
 
        </div>
        <Customer_details kit={kit}/>
        <Socials_area/>
        
        </React.Fragment>

  );
}
