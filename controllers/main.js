const login = (req, res) => {
	res.status(200).json({ message: "login works" })
}

const register = (req, res) => {
	res.status(200).json({ message: "login works" })
}

module.exports = {
	login,
	register
}