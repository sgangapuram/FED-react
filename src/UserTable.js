import React from 'react';
import UserRow from './UserRow.js';

const UserTable = ({level1, level2, level3, userEmailUpdater, userNameUpdater}) =>
  <table border="1"
  cellPadding="4"
  cellSpacing="1"
  bgcolor="cyan">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th bgcolor="green">Enter New Email</th>
        <th bgcolor="green">Enter New Name</th>
      </tr>
    </thead>
    <tbody>
      <UserRow userList={level1} level="1" userEmailUpdater = {userEmailUpdater}  userNameUpdater={userNameUpdater}/>
      <UserRow userList={level2} level="2" userEmailUpdater = {userEmailUpdater}  userNameUpdater={userNameUpdater}/>
      <UserRow userList={level3} level="3" userEmailUpdater = {userEmailUpdater}  userNameUpdater={userNameUpdater}/>
    </tbody>
  </table>;

export default UserTable;