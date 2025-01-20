import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();

const auth = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    return res.status(403).json({ err: 'Authorization header missing' });
  }

  // const token = authHeader.split(' ')[1];
  // if (!token) {
  //   return res.status(403).json({ err: 'Token missing in Authorization header' });
  // }
  try {
    jwt.verify(authHeader, process.env.JWT_SECRET, (err, user) => {
      // console.log('*****')
      // console.log
      if (err) return res.sendStatus(403);
      req.user = user;

      next();
    });
  } catch (error) {
    res.status(401).json({ err: error.message });
  }
};

export { auth };
