
import "./login.scss"
import { NavLink } from "react-router-dom"
import React from "react";
import { useRef } from "react";
import { forwardRef } from "react";
import { useHistory } from "react-router-dom";


const Field = React.forwardRef(({label, type, ph, style}, ref) => {
  return (
    <div>
      
      <label> {label}</label>
      <input ref={ref} type={type} placeholder={ph} className={style} />
    </div>
  );
});

const Form = ({onSubmit}) => {
  const mailRef = React.useRef();
  const passwordRef = React.useRef();
  const handleSubmit = e => {
      e.preventDefault();
      const data = {
          mail: mailRef.current.value,
          password: passwordRef.current.value
      };
      onSubmit(data);
  };

  return (
    <div className='login-container'>
    <div className='login-child'>
        <h1> Logg inn</h1>
        {/* <p>Denne siden finnes ikke eller er slettet</p>
        <NavLink to="/"><button className="button">take me home</button></NavLink> */}

<form onSubmit={handleSubmit}>
              
              {/* vet ikke om vi trenger denne*/}
            <input type="hidden" name="remember" defaultValue="true" />

              <div className="">
                <div>
                 <label>       
                 
                 <Field 
                 ref={mailRef} ph="Brukernavn" type="text" />  
                  </label>
                </div>
                <div>
                  <label>
                    <Field 
                    ref={passwordRef} ph="Password" type="password" />
                  </label>
           
                </div>
              </div>
              
 
              <div>
                <button
                  type="submit"
                  className=""
                >
                  Logg inn
                </button>
              </div>
            </form>
          </div>
</div>
  )}


const LoginComponent = () => {

    const handleSubmit = data => {

      
      const headers = new Headers();

      headers.append("Content-Type", "application/json")

      fetch("http://127.0.0.1:8080/test", {
          "method" : "POST",
          "headers": {
              'Content-Type': 'application/json',
          },
          "body": JSON.stringify({
            "test": "test",
            "mail": data.mail,
            "password": data.password
          }) // et javascript-object kan vi gjøre til JSON med json-stringify
      }).then(function(response) {
      
          response.json().then(function(json) {

              console.log(response)
              alert(json.test)
              
          })
      });
  
  }
  
  return (
    <>
      <div>
       <Form onSubmit={handleSubmit} />
      </div>
    </>
  ); }
  
export default LoginComponent