import React from 'react';

// const Page1 = () => <div>I am Page 1</div>;
  
async function postData(url = 'https://gorest.co.in/public-api/users/8', 
data = {"name":"Srinivas Peddana", "email":"allasani.Srinivas@15ce.com", "status":"Active"}) {
const response = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', 
    'Authorization' : '3f6612b74d9ae24c5e60f610262d52344c2d904023f6aaa7aa63507242eff1eb'
  },
  body: JSON.stringify(data)
}).then(data=> console.log("--------"+JSON.stringify(data)));
}

export default postData;