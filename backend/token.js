const jwt = require('jsonwebtoken');

// Secret key (keep this secret in .env in a real project)
const SECRET_KEY = 'your_secret_key'; // replace with process.env.SECRET_KEY in production

// Function to generate a token
function generateToken(user) {
  const payload = {
    id: user.id,
    username: user.username,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '7d' }); // Token expires in 1 hour
  return token;
}

// Example usage:
const user = { id: 1, username: 'root' };
const token = generateToken(user);
console.log('JWT Token:', token);
function verifyToken(token) {
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      console.log('Decoded token:', decoded);
      return decoded; // Decoded payload (user data)
    } catch (err) {
      console.error('Token verification failed:', err);
      return null;
    }
  }
  
  // Example usage
  const decodedData = verifyToken(token);
  console.log('Decoded data:', decodedData);