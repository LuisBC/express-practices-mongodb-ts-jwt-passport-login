export default {
  DB: {
    jwtSecret: process.env.JWT_SECRET || "somesecrettoken",
    URI:
      process.env.MONGODB_URI ||
      "mongodb://localhost/express-practices-mongodb-ts-jwt-passport-login",
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.PASSWORD,
  },
};
