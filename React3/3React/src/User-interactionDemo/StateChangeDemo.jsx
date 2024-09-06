import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const StateChangeDemo = () => {
    //state
    // let a =10;
    let [a,setA]=useState(10);
    let [username, setUsername]= useState("Uju");
    let [person,setPerson]= useState({pid:100, name:"uju",city:"hyd"})
    let [skills,setSkills]= useState(['css','js'])
    //handler function
    function handleIncrement()
    {
        setA(a+1)
    }

    function handleDecrement()
    {
        setA(a-1);
    }

    function handleChangeUsername()
    {
        setUsername("Ujwala")
    }

    function handlePerson()
    {
        setPerson({...person,pid:200,city:"mumbai"}); //when u want remaining values same we use spread operator
    }

    function addSkill()
    {
        setSkills([...skills,"Angular"]);
    }

    function deleteSkill()
    {
        let copyskills=[...skills];
        copyskills.pop();
        setSkills(copyskills);
    }

  return (
    <div className='text-center'>

      <h1 className='display-3 text-warning'>State Change demo</h1>
      {/* Handle Increment */}
      <h1>value of a is {a}</h1>
      <button className='btn btn-primary' onClick={handleIncrement}>Change state</button>
       {/* HandleDecrement */}
      <button className='btn btn-danger' onClick={handleDecrement}>Change state</button>
     {/* Username */}
      <h1>{username}</h1>
      <button className='btn btn-primary' onClick={handleChangeUsername}>Change Username</button>
      
    {/* Person Data */}
    <h1>{person.pid}</h1>
    <h1>{person.name}</h1>
    <h1>{person.city}</h1>
    <button className="btn btn-warning" onClick={handlePerson}>Change person data</button>
    
     {/* Skills state */}
     {skills.map(skill=><h1 key={skill} className='text-info'>{skill}</h1>)}
    

     <button className="btn btn-success" onClick={addSkill}> Add Skill</button>
      
     <button className="btn btn-danger" onClick={deleteSkill}> Delete Skill</button>
    </div>
  )
}

export default StateChangeDemo;
