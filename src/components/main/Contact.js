 import React from 'react';
 const Contact =()=>{
    return (
        <div><h1>Contact</h1>
            <form>
                <input type="text" placeholder="Name" className="border-amber-950 border p-4 m-5" required />
                <input type="email" placeholder="Email"  className="border-amber-950 border p-4 m-5" required /> 
               
                <button type="submit" className="bg-blue-500 p-4 m-4 rounded-2xl">Submit</button>   
            </form>
        </div>
    )
}

export default Contact;