import React from 'react';

const outputRows = (userList, level, userEmailUpdater, userNameUpdater) => 
userList.map((user, index) =>
      <tr key={index}>
        <td>{user.name}</td>
        <td>{user.email}</td>

        <td>
            <input  
            // id={`nameInput${level}${index}`}
            type="text"
            value={user.email}
            onChange={
                (event) => {
                    userEmailUpdater(index, event.target.value, level);
                    }         
            }
            />
        </td>

         <td>
            <input  
            // id={`nameInput${level}${index}`}
            type="text"
            value={user.name}
            onChange={
                (event) => {
                    userNameUpdater(index, event.target.value, level);
                    }   
            }
            />
        </td>
      </tr>
    );

const UserRow = ({level, userList, userEmailUpdater, userNameUpdater}) => <>
  <tr>
    <th colSpan="4">Level {level}</th>
  </tr>
  {outputRows(userList, level, userEmailUpdater, userNameUpdater)}
</>;
export default UserRow;