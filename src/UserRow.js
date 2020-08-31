import React from 'react';

const outputRows = (userList, level, userEmailUpdater) => 
userList.map((user, index) =>
      <tr key={index}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
            <input  id={`emailInput${level}${index}`} type="text" />
            <button onClick={
                     () => {
                                 userEmailUpdater(index, document.getElementById(`emailInput${level}${index}`).value);
                        }
            }>update</button>
        </td>
      </tr>
    );

const UserRow = ({level, userList, userEmailUpdater}) => <>
  <tr>
    <th colSpan="2">Level {level}</th>
  </tr>
  {outputRows(userList, level, userEmailUpdater)}
</>;
export default UserRow;