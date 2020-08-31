import React from 'react';
import './App.css';
import UserTable from './UserTable';

export default class App extends React.Component {  
  
  // console.log('does this work');
  
  constructor(props) {
    super(props);

    this.state = {
      level1: [],
      level2: [],
      level3: [],
      category: "Super Users"
    }
  }

  updateUserEmail(index, newEmailAddress) {
    console.log(index);
    console.log(newEmailAddress);
  }

  componentDidMount() {
    fetch('https://gorest.co.in/public-api/users')
    .then((response) => response.json())
    .then((json) => {

      const level1Users = json.data.slice(0, 5);
      const level2Users = json.data.slice(5, 10);
      const level3Users = json.data.slice(10, 15);

      this.setState({
        level1: level1Users,
        level2: level2Users,
        level3: level3Users
      });

    });
  }

  render() {
    console.log(typeof (this.updateUserEmail));
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

        {
          (this.state.level1.length > 0) ?
            <UserTable 
              level1={this.state.level1} 
              level2={this.state.level2} 
              level3={this.state.level3} 
              userEmailUpdater={this.updateUserEmail}
            /> : 
            <p>no data to display</p>
        }

      </>
    );
  }
}