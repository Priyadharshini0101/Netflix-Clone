import React, { useState } from "react";
import { logo } from "../assets/index.js";
import { Helmet } from "react-helmet";
import {login,signup} from '../firebase.js'
import { useNavigate} from "react-router-dom";

function Login() {
  const [signState, setSignState] = useState("Sign Up");
  const [name,setName]=useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]=useState("")
  const [loading,setLoading] = useState(false)
  
const navigate = useNavigate()
  const user_auth = async(event) =>{
    event.preventDefault()
    setLoading(true)
    if(signState === "Sign Up"){
      console.log("login")
      await login(email,password)
    
    
    }else{
     
      console.log("register")
      await signup(name,email,password)
     
    }

   setLoading(false)
  }

 
  return (
    <>
      <Helmet>
        <title>{signState == "Sign Up"  ? "Sign In" : "Sign Up"} - Netflix</title>
        <meta name="description" content={``}></meta>
      </Helmet>
    {loading ? (
            <div className="flex h-screen w-full justify-center items-center">
              <div
                className="inline-block h-[60px] w-[60px] text-[#e50914] animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              ></div>
            </div>
          ): (
      <>
            <div className="bg w-full px-[50px] z-[1]  flex justify-between fixed text-sm">
        <div className=" flex items-center gap-[50px]">
          <img
            src={logo}
            alt="Netflix logo"
            className="h-[25px] ml-[25px] my-[20px]"
          ></img>
        </div>
      </div>

      <div className="h-[100vh] px-[20%] py-[8%] items-center justify-center flex background-login">
        <div className="flex flex-col  w-[100%] max-w-[450px] bg-[rgba(0,0,0,0.75)] rounded-lg p-[60px] ">
          <h1 className="text-[32px] font-semibold mb-[28px]  ">
            {signState == "Sign In" ? "Sign Up" : "Sign In"}
          </h1>

          <form className="flex flex-col gap-[25px]">
            {signState == "Sign In" ? (
              <input
                className=" placeholder:text-[16px]  text-[16px]  w-[100%] h-[50px] bg-[#333] text-white border-0 outline-0 rounded-lg p-[16px]"
                type="text"
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              ></input>
            ) : (
              ""
            )}
            <input
              className=" placeholder:text-[16px] text-[16px]  w-[100%] h-[50px] bg-[#333] text-white border-0 outline-0 rounded-lg p-[16px]"
              type="email"
              placeholder="Email"
              onChange={(e) =>setEmail(e.target.value)}
              value={email}
            ></input>
            <input
              className=" placeholder:text-[16px] text-[16px]  w-[100%] h-[50px] bg-[#333] text-white border-0 outline-0 rounded-lg p-[16px]"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <button type="submit" onClick={user_auth} className="mt-[20px] cursor-pointer w-[100%] border-0 outline-0 p-[16px] bg-[#e50914] text-white rounded-lg text-[16px] ">
              {signState == "Sign In" ? "Sign Up" : "Sign In"}
            </button>
            <div className="flex items-cener justify-between text-[#b3b3b3] text-[13px]">
              <div className="flex items-center gap-[5px]">
                <input className="w-[18px] h-[18px]" type="checkbox"></input>
                <label htmlFor="">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className="mt-[40px] text-[#737373]">
            {signState  == "Sign In"? (
              <p>
                New to Netflix?{" "}
                <span
                  className="ml-[6px] text-[#fff] font-semibold cursor-pointer"
                  onClick={() =>{ setSignState("Sign Up")
                    console.log(signState)
                  }}
                >
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p>
                Already have account?{" "}
                <span
                  className="ml-[6px] text-[#fff] font-semibold cursor-pointer"
                  onClick={() => {setSignState("Sign In")
                    console.log(signState)
                  }}
                >
                  Sign In Now
                </span>
              </p>
            )}{" "}
          </div>
          
        </div>
      </div>
      </>)}
    </>
  );
}

export default Login;
