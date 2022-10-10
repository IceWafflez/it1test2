
import "./404.scss"

import { NavLink } from "react-router-dom"
export default function Feil() {
    return (
        
  

        <>
   
        <br /><br /> <br />
 

        





        <div className="min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid-rows-2 md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            
            <div className="sm:ml-6">
              <div className="sm:border-b sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"><span> <p className="text-4xl  font-bold tracking-tight text-indigo-600 sm:text-5xl">404</p></span>Page not found </h1>
                <p className="mt-1 text-base text-gray-500">Siden du leter etter finnes ikke, eller finnes på en annen adresse.</p>
              </div>
              <div className="align-center mt-10 space-x-2  sm:pl-6">
              <NavLink to="/">
                <a
                  href=""
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Go back home
                </a></NavLink> 
   
                <a
                
                  
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Contact support
                </a>   
              </div>
            </div>
          </main>
        </div>
      </div>
    
        
        </>
      
    )
  }