import React from 'react'

const Student = (props) => {
    console.log(props)
  return (
    <>
     <div>Student props</div>
      <h1>Name:{props.Name}</h1>
      <h1>address:{props.address}</h1>
      {/* <h1>School:{props.studen.school}</h1> */}
    </>
   
  )
}

export default Student