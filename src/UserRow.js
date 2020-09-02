import React from 'react';

const outputRows = (userList, level, updateUserProp) => 
userList.map((user, index) =>
      <tr key={index}>
        <td>{user.name}</td>
        <td>{user.email}</td>

        <td>
            <input  
              onChange={
                (event) => {
                             updateUserProp(index, level, event.target.value);
                          }
              }
              value={user.name} 
              type="text" 
              />
              <input type="checkbox" onChange={
                (event) => {
                  console.log(event.target.checked);
               }
              }
              />click here
              <input  
              onChange={
                (event) => {
                             updateUserProp(index, level, event.target.value);
                          }
              }
              value={user.email} 
              type="text" 
              />
        </td>
      </tr>
    );

const UserRow = ({level, userList, updateUserProp}) => <>
  <tr>
    <th colSpan="4">Level {level}</th>
  </tr>
  {outputRows(userList, level, updateUserProp)}
</>;

export default UserRow;