export default {
  login: (user) => {
    console.log(
      " %c *** login[/user/login][POST] *** ",
      "font-size: 12px; font-weight: bold;color:green"
    );
    console.log({ user });
    let username = user["username"][0];
    let password = user["password"][0];

    return fetch("127.0.0.1:5000/user/login", {
      method: "post",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else {
        return { isAuthenticated: false, user: { username: "", role: "" } };
      }
    });
  },

  register: (user) => {
    console.log(
      " %c *** register[/user/register][POST] *** ",
      "font-size: 12px; font-weight: bold;color:green"
    );
    return fetch("127.0.0.1:5000/user/register", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  logout: () => {
    console.log(
      " %c *** logout[/user/login][POST] *** ",
      "font-size: 12px; font-weight: bold;color:green"
    );
    return fetch("127.0.0.1:5000/user/logout")
      .then((res) => res.json())
      .then((data) => data);
  },
  /*
! Sync backend and frontend (even after browser closes)
! call this function with context API
*/
  isAuthenticated: () => {
    return fetch("127.0.0.1:5000user/authenticated")
      .then((res) => {
        console.log(
          " %c *** isAuthenticated[/user/authenticated][GET] *** ",
          "font-size: 12px; font-weight: bold;color:green"
        );
        if (res.status !== 401) {
          return res.json().then((data) => data);
        } else {
          return { isAuthenticated: false, user: { username: "", role: "" } };
        }
      })
      .then((data) => data);
  },
};
