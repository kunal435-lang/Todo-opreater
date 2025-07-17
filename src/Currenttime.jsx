import React from 'react'


let CurrentTime = () => { 
    let time = new Date();
    
  return (
     <div>
      
      <p>Date: {time.toLocaleDateString()} -{""}</p>
       <p>Time: {time.toLocaleTimeString()} -{""}</p>
  
    </div>
    
    
  )
}

export default CurrentTime;
