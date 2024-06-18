//  import React, { useState } from 'react'

// const App = () => {
//   let [a,b]= useState("false")
//   return (
//     <div className="hello">
//       <h1>{a+"hey"}</h1>

//     </div>

//   )
// }

// export default App
// import React from 'react'


//   function MyButton(){
//     return(
//       <button> i'm a button</button>
//     );
//   }

// export default function MyApp(){
//   return(
//     <div> 
// <h1> welcome to my app</h1>
//   <MyButton/>
//     </div>
    
//   );
// }
// import React from 'react'
import React from 'react'
// import { useState } from 'react'
// import User from './User.jsx';
// import { Profile } from './Profile.jsx';
// import Student from './Student.jsx';
import Navigation from './Components/Navigation';
import Shoe from './Components/Shoe';

function App(){


  // const[data,setData]=useState(null)
  // const[print,setPrint]=useState(false)

//  const[data,setData]=useState(0)
//  function updatedName(){
//   setData(data+1)
// }

//  let[name,setValue]=useState("Bibash")
//    function updateName(){
//     setValue("Ghanindra")
//   }
  // function getData(val){
  //   console.log(val.target.value)
  //   setData(val.target.value)
  //   setPrint(false)
  // }
  return (
    
    <div>
    

    <Navigation />
<Shoe />








     {/* {
print?
<h1>{data}</h1>
:null
     } */}
      
        
     
    {/* <input type="text" onChange={getData} />  */}
        {/* <h1> {data}</h1> */}
        {/* <Profile />
        <User /> */}
        
        {/* using arrow function to use alert directly   */}
        {/* <button onClick={()=>alert("Hello arrow function")}>Click Me</button> */}
   
   {/* <button onClick={updatedName}>Increase Number</button> */}
{/* <Student name={"Bibash"} studen={{school:"panchayat",age:22}} /> */}
   {/* <Student Name={name}/>
   <Student address={"urlabari"}/>
   <button onClick={(updateName)}>update Name</button>
    */}
    {/* <button onClick={()=>setPrint(true)}>print Value</button> */}
    </div>
  );
}
 
export default App;

