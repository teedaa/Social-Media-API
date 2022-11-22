const { connect, connection } = require('mongoose');


const connectionString =
//   process.env.MONGODB_URI || ADD THIS LATER!;

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
