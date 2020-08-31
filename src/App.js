import React from 'react';
import './App.css';
import UserTable from './UserTable';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      level1: [
        {
          name: 'Rod',
          email: 'rod@abc.com'
        },
        {
          name: 'Dave',
          email: 'dave@def.com'
        }
      ],
      level2: [
        {
          name: 'Bill',
          email: 'bill@abc.com'
        },
        {
          name: 'Bob',
          email: 'bob@def.com'
        }
      ],
      category: "Super Users"
    }
  }
  render() {
    return (
      <>
        <p>
          User Category: {this.state.category}
        </p>
        <p>
          <button onClick={() => {
            // this.state.category = 'some new category';
            this.setState( {category: 'Mega Super Users'} );
          }}>
            update state variable
          </button>
        </p>
        <UserTable
          level1={this.state.level1}
          level2={this.state.level2}
          random={123}
        />
      </>
    );
  }
}