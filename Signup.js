import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import './Signup.css';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name: "",email: "", password: "",cpassword:""}) 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
      const  {name,email,password}=credentials;
        const response = await fetch("http://localhost:5000/signup", {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({name ,email,password})
        });
        const json = await response.json()
        console.log(json);
        
        if(json.success){
          
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate("/");
             props.showAlert('Invalid Detail',"danger")

        }
        else 
        {
          
            // props.showAlert('Invalid Detail',"danger")
            props.showAlert("Account Created Successfully","success");
        }
      };
      
      
   

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div>
      <h1 className='tosign'>SIGN UP</h1>
      <div className="container-sign">
        <form className="form1" onSubmit={handleSubmit}>
          <div className="for-group">
            <label for="exampleInputEmail1" className='singn'>Enter your Name</label>
            <input
              type="text"
              className="for-control"
              id="name"
              name="name"
              onChange={onChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="for-group">
            <label for="exampleInputPassword1" className='singn'>Enter your Email</label>
            <input
              type="email"
              className="for-control"
              id="email"
              name="email"
              onChange={onChange}
              aria-describedby="emailHelp"

            />
          </div>
          <div className="for-group">
            <label for="exampleInputPassword1"className='singn'>Password</label>
            <input
              type="password"
              className="for-control"
              id="exampleInputPassword1"
              name="password"
              onChange={onChange}
              minLength={3} required
              

            />
          </div>
          <div className="for-group">
  <label for="exampleInputPassword1" className='singn'>Confirm Password</label>
  <input
    type="password"
    className="for-control"
    id="cpassword"
    name="cpassword"
    onChange={onChange}
    minLength={3} required
  />
</div>

          
        
          <div className="for-group for-check">
            <input
              type="checkbox"
              className="for-check-input"
              id="exampleCheck1"
              
              onChange={onChange}
            />
            <label className="for-check-label" for="exampleCheck1" >
              Check me out
            </label>
          </div>
          <button type="submit" className="btnfill">
            Submit
          </button>
        </form>
      </div>
      
    </div>
  );
  };


export default Signup
