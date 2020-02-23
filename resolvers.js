const { AuthenticationError } = require("apollo-server");

const user = {
  _id: "1",
  name: "Yoshiji",
  email: "yoshiji@example.com",
  picture: "https://via.placeholder.com/150/0000FF/808080?Text=Digital.com"
};

const authenticated = next => (root, args, ctx, info) => {
  if (!ctx.currentUser) {
    throw new AuthenticationError("You must be logged in");
  }
  return next(root, args, ctx, info);
};

module.exports = {
  Query: {
    me: authenticated((root, args, ctx) => ctx.currentUser)
  }
};
