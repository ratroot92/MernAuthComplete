export default {
  getTodos: () => {
    return fetch(process.env.DEVELOPMENT_SERVER_ADDRESS+"user/todos").then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else {
        return { message: { msgBody: "unAuthorized" }, msgError: true };
      }
    });
  },

  postTodo: (todo) => {
    return fetch(process.env.DEVELOPMENT_SERVER_ADDRESS+"user/todo", {
      method: "post",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else {
        return { message: { msgBody: "unAuthorized" }, msgError: true };
      }
    });
  },
};
