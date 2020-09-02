import React from 'react';

const outputRows = (userList, level, updateUserProp) => 
userList.map((user, index) =>
      <tr key={index}>
        <td>{user.name}</td>
        <td>{user.email}</td>

        <td>
            <input  id={`userProp${level}${index}`} type="text" />
            <button onClick={
                     () => {
                       const propName = document.getElementById(`userProp${level}${index}`).value
                        updateUserProp(index, level, document.getElementById(`userProp${level}${index}`).value);
                        }
            }>update</button>
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