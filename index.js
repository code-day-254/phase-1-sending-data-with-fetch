// Add your code here

const submitData = {
    name: 'Steve',
    email: 'steve@steve.com',
  };
  
  fetch( 'http://localhost:3000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(submitData),
  })
  .then(response => response.json())
  .then(submitData => console.log(submitData))
  .catch(error => console.error("unauthorised access"));
//
let Data = {
    name: 'Sam',
    email: 'sam@sam.com',
  };
  
  fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(Data),
  })
  .then(response => response.json())
  .then(Data => console.log(Data))
  .catch(error => console.error("unauthorised access"));
  //
  const data = {
    name: 'Jim',
    email: 'jim@jim.com',
  };
  
  fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("unauthorised access"));