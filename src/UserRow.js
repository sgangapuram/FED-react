import React from 'react';
const UserRow = ({level, userList}) => <>
  <tr>
    <th colSpan="2">Level {level}</th>
  </tr>
  {
    userList.map((user, index) =>
      <tr key={index}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    )
  }
</>;
export default UserRow;