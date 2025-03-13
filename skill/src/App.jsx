
import React, { Component } from 'react'
import './App.css'
class App extends Component {

showsignin(){
  let popup = document.getElementById("popup");
  popup.style.display='block'

  let popupcontent = document.getElementById("popupcontent");
  popupcontent.style.display = "block";

  let signup = document.getElementById("signup");
  signup.style.display = "none";

}
closesignin(event){
  if(event.target.id === 'popup'){
  let popup = document.getElementById("popup");
  popup.style.display='none'
}
}
showsignup(){
  let popup = document.getElementById("popup");
  popup.style.display='block'

  let signup = document.getElementById("signup");
  signup.style.display = "block";

  
  let popupcontent = document.getElementById("popupcontent");
  popupcontent.style.display = "none";
}


  render() {
    return ( 
  <div id="container">

      <div id='popup' onClick={this.closesignin}>
        <div id='popupwindow'>
          <div className='popupheader' >LOGIN</div>
          <div className='popupcontent'> 
            <label className='usernamelabel'>User Name*</label>
            <input type='text' id='username' placeholder='enter username'></input>
            <label className='passwordlabel'>Pass word*</label>
            <input type='text' id='password' placeholder='enter password'></input>
            <div className='forgetpasswordlabel'>Forget <label>Password?</label></div>
            <button className='signinbutton'>Signin</button>
            <div className='downdiv'>Don't have an account? <label onClick={this.showsignup}>SINGUP NOW</label> </div>
            
          </div>
        <div id='signup' >
          <label>Fullname</label>
          <input type='text' id='fullname'></input>
          <label> Email</label>
          <input type='email' id='email'></input>
         <label>  Role </label>
         <select id='role' defaultValue={0}>
          <option value= {0}>Select role </option>
          <option value= {1}>Admin </option>
          <option value= {2}>Employeer</option>
          <option value= {3}>Job seeker</option>
         </select>
          <label>Password</label>
          <input type='password' id='password'></input>
          <label>Confirm Password</label>
          <input type='password' id='confirmpassword'></input>
          <button>Register</button>
          <div> Already have an account <span> </span></div>

          </div>  
        </div>
      </div>


     <div id = 'header'>
        <img className='logo' src="New folder/img/photo_2024-12-31_10-55-40.jpg"></img>
        <div className='logotext'><span>JOB</span> PORTAL</div>
        <img  className='signin' src="New folder/img/photo_2024-12-31_10-55-40.jpg" onClick={this.showsignin}></img>
        <label className='signintext' onClick={this.showsignin}>Signin</label>
      </div>



      <div id = "middle">
        <div className="text1">INDIA'S #1 JOB PLATFORM</div>
        <div className="text2">Your Job Search Ends Here</div>
        <div className="text3">Discover Career Oportunities</div>
        <div className="SearchBar">
          <input type='text' placeholder='search jobs by "Skill"' className='searchs'></input>
          <input type='text' placeholder='Job Location' className='jobloc'></input>
          <button className='searchButt'>Search JObs</button>
        </div>
      </div>


      <div id = "footer">
        <div className="footertext">Copyright @2024.All rights reserved</div>
        <div className='sicons'>
            <i class="fa fa-facebook"></i>
            <i class="fa fa-whatsapp"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-linkedin"></i>
            
        </div>

      </div>
  </div>
      
    )
  }
}
export default App;