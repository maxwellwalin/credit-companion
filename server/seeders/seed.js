const db = require('../config/connection');
// Import seeds
const { User } = require('../models');

db.once('open', async () => {
  try {
    // Await seeds
    await User.deleteMany();
    await User.create({
      username: "Daniel",
      email: "daniel@testmail.com",
      password: "password12345",
    });

    await User.create({
      username: "Maxwell",
      email: "maxwell@testmail.com",
      password: "password12345",
    });

    await User.create({
      username: "Jesus",
      email: "jesus@testmail.com",
      password: "password12345",
    });

    await User.create({
      username: "Parth",
      email: "parth@testmail.com",
      password: "password12345",
    });

    process.exit(0);
  } catch (err) {
    throw err;
  }
});
