const { createCustomError } = require('../errors/custom-error');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (authHeader && authHeader.startsWith('Bearer')) {
		const token = authHeader.split(' ')[1];
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			req.user = decoded;
			next();
		} catch (error) {
			console.log(error);
			throw createCustomError("Invalid token provided", StatusCodes.UNAUTHORIZED);
		}
	} else {
		throw createCustomError("NO auth token provided", StatusCodes.UNAUTHORIZED);
	}
}


module.exports = authMiddleware;