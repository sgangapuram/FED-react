import React from 'react';

const outputRows = (userList, level, userEmailUpdater, userNameUpdater) => 
userList.map((user, index) =>
      <tr key={index}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
            <input  id={`emailInput${level}${index}`} type="text" />
            <button onClick={
                     () => {
                            userEmailUpdater(index, document
                                .getElementById(`emailInput${level}${index}`)
                                .value, level);
                        }
            }>update</button>
        </td>

         <td>
            <input  id={`nameInput${level}${index}`} type="text" />
            <button onClick={
                     () => {
                        userNameUpdater(index, document
                                .getElementById(`nameInput${level}${index}`)
                                .value, level);
                        }
            }>update</button>
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