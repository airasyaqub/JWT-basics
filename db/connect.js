const mongoose = require("mongoose");


const connectToDB = (connectionUrl) => {
	return mongoose.connect(connectionUrl, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})
}

module.exports = connectToDB;
