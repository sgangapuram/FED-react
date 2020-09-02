import React from 'react';
import UserRow from './UserRow.js';

const UserTable = ({level1, level2, level3, updateUserProp}) => //userEmailUpdater, userNameUpdater}) =>
  <table border="1"
  cellPadding="4"
  cellSpacing="1"
  bgcolor="cyan">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th bgcolor="green">Edit Name/Email(include @ to be valid)</th>
      </tr>
    </thead>
    <tbody>
      <UserRow userList={level1} level="1" updateUserProp ={updateUserProp} />
      <UserRow userList={level2} level="2" updateUserProp ={updateUserProp} />
      <UserRow userList={level3} level="3" updateUserProp ={updateUserProp} />
    </tbody>
  </table>;

export default UserTable;