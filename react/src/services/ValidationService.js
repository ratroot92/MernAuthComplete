export default {
    validateEmail: (email) => {  
      return fetch(process.env.DEVELOPMENT_SERVER_ADDRESS+"/validate/email", {
        method: "post",
        body: JSON.stringify({email:email}),
        headers: {
          "Content-Type": "application/json",
        }
      }).then((res) => res.json())
      .then((data) => data);
  
   
  }

}
  