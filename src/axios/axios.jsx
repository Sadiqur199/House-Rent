import axios from 'axios';

axios.post('http://localhost:5000/register', userData)
  .then((response) => {
    // Handle successful response
    console.log(response.data);
  })
  .catch((error) => {
    // Handle error
    console.error(error.message);
    console.error(error.response.data);
  });
