import axios from 'axios';

axios.post('https://sserver-ruby.vercel.app/register', userData)
  .then((response) => {
    // Handle successful response
    console.log(response.data);
  })
  .catch((error) => {
    // Handle error
    console.error(error.message);
    console.error(error.response.data);
  });
