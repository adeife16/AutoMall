class AuthMiddleware {
  async authenticateToken(req, res, next) {
    const token = req.header('x-auth-token');

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    }
    catch (error) {
      return res.status(403).json({ message: 'Invalid token' });
    }
  }
}

module.exports = AuthMiddleware;
