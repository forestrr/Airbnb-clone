import React from 'react'

function Footer() {
    return (
    <div className="">
       <div className="grid grid-cols-1 md:grid-cols-4  gap-y-10 
          text-gray-600 px-32 bg-gray-100 py-14 ">
           <div className="space-y-4 text-xs text-gray-800" >
                <h5 className="font-bold">ABOUT</h5>             
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Airbnb2021</p>
                <p>Investor</p>
                <p>Airbnb plus</p>
           </div>
           <div className="space-y-4 text-xs text-gray-800" >
                <h5 className="font-bold">COMMUNITY</h5>             
           <p>Host your home</p>
            <p>Host an Online Experience</p>
            <p>Responsible Hosting</p>
            <p>Resouce Center</p>

           </div>
           <div className="space-y-4 text-xs text-gray-800" >
                <h5 className="font-bold">HOST</h5>             
           <p>Diversity and Belongings</p>
            <p>Against Discrimination</p>
            <p>Accessiblity</p>
            <p>Airbnb Associates</p>
            <p>Frontline Stays</p>
  
           </div>
           <div className="space-y-4 text-xs text-gray-800" >
                <h5 className="font-bold">SUPPORT</h5>             
            <p>Our COVID-19 Response</p>
            <p>Help Center</p>
            <p>Cancellation options</p>
            <p>Neighborhood support</p>
            <p>Trust and Safety</p>                          
           </div>
       </div>
    </div>                    
    )
}

export default Footer



