import './index.scss';
import React, { useState } from "react";
import ikon1 from '../images/icons8.png'
import album from '../images/album.jpeg'


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
        
        <br /><br /><br /><br /><br />
        <div className='to-side'>
            <div className='to-side-innhold'>
                <h1>Få alle bildene dine på et sekund</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor vitae dolor nec aliquet. Nulla faucibus rutrum eros, non vestibulum urna tristique nec. Aenean in arcu faucibus nibh bibendum consectetur. Nulla maximus purus tempor eros fringilla, eu ultrices elit euismod. Etiam iaculis tincidunt scelerisque. Suspendisse vulputate sodales volutpat. Phasellus eget scelerisque justo. Fusce quis ipsum lectus. Ut et eleifend mi. In ornare eleifend orci, et imperdiet sapien convallis sit amet. Mauris eleifend nunc nec laoreet interdum. Sed euismod sodales neque et tincidunt. Vestibulum mollis, orci a iaculis tristique, augue risus consectetur enim, nec elementum turpis tellus a purus. Nulla efficitur vestibulum leo.</p>
            </div>
            <div className='to-side-innhold'>

                <img src={album} alt="" />
            </div>
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