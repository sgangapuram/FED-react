import React from 'react';

const Page2DumbComponent = ({person, updateFname, updateLname, updateBothFlname}) => 
   <div>
       
    {person.fname}
    {person.lname}
       <button
        onClick ={() => {
            updateFname('Bob ');

        }}>
           update fname</button>
       <button
        onClick ={() => {
            updateLname('Barker ');
        }}
       >
           update lname</button>
       <button
        onClick ={() => {
            updateBothFlname('Jennifer ', 'lorenz ');
        }}>
           update both fname lname</button>
   </div>

export default Page2DumbComponent;