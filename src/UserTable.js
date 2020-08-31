import React from 'react';
import UserRow from './UserRow.js';
const UserTable = ({level1, level2}) =>
  <table border="1">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <UserRow userList={level1} level="1"/>
      <UserRow userList={level2} level="2"/>
    </tbody>
  </table>;
export default UserTable;