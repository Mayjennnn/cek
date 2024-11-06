//1.
function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }
  
  async function messages() {
    const msg = await helloWorld(); 
  }
  messages();
  


//2.

function ambilDataUser() {
    
    fetch("https://reqres.in/api/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        users.data.forEach(user => {
          console.log(`First Name: ${george}, Last Name: ${bluth}`);
        });
      })
      .catch((error) => {
       
        console.log("Error:", error);
      });
  }
  
ambilDataUser();



//3.
async function ambilDataUser() {
    try {
      const response = await fetch("https://reqres.in/api/users");
      
      const users = await response.json();     
    
      users.data.forEach(person => {
        console.log(`First Name: ${person.first_Name}, Last Name: ${person.last_Name}`);
      });
    } catch (error) {
      
      console.log("Error:", error);
    }
  }
  
  ambilDataUser();
  


//4.
const axios = require('axios');

async function ambilDataUser() {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    const users = response.data; 

    users.data.forEach(person => {
      console.log(`First Name: ${person.first_name}, Last Name: ${person.last_name}`);
    });
  } catch (error) {
    console.log("Error:", error);
  }
}

ambilDataUser();
