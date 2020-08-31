import React from 'react';
import UserRow from './UserRow.js';

const UserTable = ({level1, level2, level3, userEmailUpdater}) =>
  <table border="1"
  cellPadding="4"
  cellSpacing="1">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Enter New Email</th>
      </tr>
    </thead>
    <tbody>
      <UserRow userList={level1} level="1" userEmailUpdater = {userEmailUpdater}/>
      <UserRow userList={level2} level="2" userEmailUpdater = {userEmailUpdater}/>
      <UserRow userList={level3} level="3" userEmailUpdater = {userEmailUpdater}/>
    </tbody>
  </table>;

export default UserTable;