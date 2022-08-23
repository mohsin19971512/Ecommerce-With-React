import axios from 'axios';
import React, { useRef } from 'react';
import { checkLogin } from '../store/productSlice';
import { useDispatch } from 'react-redux';





export default function Login() {
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch()

    const handelSubmtiLogin = (event)=>{
        event.preventDefault();
        dispatch(
            checkLogin({
            email: email.current.value,
            password: password.current.value,
          })
        );
        email.current.value = null;
        password.current.value = null;
    }


  return (
    <div className="container">
      <form onSubmit={handelSubmtiLogin} style={{width:"50%",margin:"auto" ,marginTop:"50px"}}>
        <div className="form-outline mb-4">
          <input type="email" id="email" ref={email} className="form-control" />
          <label className="form-label" >
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="password" ref={password} className="form-control" />
          <label className="form-label">
            Password
          </label>
        </div>



        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <a href="/register">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}
