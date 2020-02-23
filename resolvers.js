const user = {
  _id: "1",
  name: "Yoshiji",
  email: "yoshiji@example.com",
  picture: "https://via.placeholder.com/150/0000FF/808080?Text=Digital.com"
};

module.exports = {
  Query: {
    me: () => user
  }
};
