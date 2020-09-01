import React from 'react';
import './App.css';
import UserTable from './UserTable';

class App extends React.Component {  
 constructor(props) {
    super(props);

    this.state = {
      level1: [],
      level2: [],
      level3: [],
      category: "Super Users"
    }
    this.updateUserEmail = this.updateUserEmail.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
  }

  // updateUserProp(index, level, newProp) {

  //   const levelToChange = 'level' +level;
  //   const newLevel = [...this.state[levelToChange]];
  //   newLevel[index][propName] = newProp;

  //   this.setState({[levelToChange]: newLevel});
  // }

  updateUserEmail(index, newEmailAddress, level) {

    const levelToChange = 'level' +level;
    const newLevel = [...this.state[levelToChange]];
    newLevel[index].email = newEmailAddress;

    this.setState({[levelToChange]: newLevel});
  }

  updateUserName(index, newName, level) {

    const levelToChange = 'level' +level;
    const newLevel = [...this.state[levelToChange]];
    newLevel[index].name = newName;

    this.setState({[levelToChange]: newLevel});
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
              userNameUpdater={this.updateUserName}
            /> : 
            <p>no data to display</p>
        }

      </>
    );
  }
}

export default App;