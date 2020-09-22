export default {
    validateEmail: (email) => {  
      return fetch("127.0.0.1:5000/validate/email", {
        method: "post",
        body: JSON.stringify({email:email}),
        headers: {
          "Content-Type": "application/json",
        }
      }).then((res) => res.json())
      .then((data) => data);
  
   
  }

}
  