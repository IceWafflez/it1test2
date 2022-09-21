import './index.css';
import React, { useState } from "react";
import ikon1 from '../images/icons8.png'


const Landing = () => {
    // du trenger python scriptet test.py kjørende lokalt for å bruke denne funksjonen
    //callbar funksjon som sendes til flask serveren med innebygd fetch funksjon
    const handleSubmit = data => {

      
      const headers = new Headers();

      headers.append("Content-Type", "application/json")

      fetch("http://127.0.0.1:8080/test", {
          "method" : "POST",
          "headers": {
              'Content-Type': 'application/json',
          },
          "body": JSON.stringify({
              "test": "tom",
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
        <div>
        <h1>Main page</h1>
        </div>

        <div class="grid-container">
        <div>
            <img src={ikon1}></img>
        </div>
        <div>2</div>
        <div>3</div>  
        
    
        </div>
        <button
         onClick={handleSubmit}>
             <span>
                Trykk her for server
             </span>
             
           </button>
    </div>
    </>
    )}
  export default Landing;