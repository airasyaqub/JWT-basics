const jwt = require('jsonwebtoken');
const { createCustomError } = require('../errors/custom-error');






const login = async (req, res) => {
	const {
		username, passwd 
	} = req.body;
	if (username && passwd) {
		const id = new Date().getDate();
		const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
			expiresIn: '30d',
		})
		return res.status(200).json({ message: "login works", token: token });
	} else {
		throw createCustomError("Please provide username/password", 400);
	} 
}


const dashboard = async (req, res) => {
	const { username } = req.user;
	const luckyNumber = Math.floor(Math.random()*100);
	res.status(200).json({ message: `Hello ${username}`, secret: `Here is your secret lucky number ${luckyNumber}` })
}

module.exports = {
	login,
	dashboard
}