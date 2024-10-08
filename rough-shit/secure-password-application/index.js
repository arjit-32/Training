const express = require('express');
const bcrypt = require('bcrypt');
const rateLimit = require('express-rate-limit');
const crypto = require('crypto');
const speakeasy = require('speakeasy');
const QRCode = require('qrcode');
const app = express();
const port = 3000;
const SALT_ROUNDS = 10; 

// Middleware to parse JSON and URL encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let user = {
    email: 'user@example.com',
    password: 'oldPassword123',
    resetToken: null,
    resetTokenExpiry: null
};

const loginLimiter =  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 login requests per windowMs
    message: 'Too many login attempts, please try again after 15 minutes.'
});

// TO SHOW RATE LIMITING
app.post('/login', loginLimiter, (req,res)=>{
    res.send('Logged In');
});

// TO SHOW HASHING
app.post('/register', async (req,res) => {
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
    // Save the hashed password in database     
    res.status(201).json({ hashedPassword: hashedPassword }); 
})

// TO SHOW PASSWORD RECOVERY ( generating reset token )
app.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    // Simulated check in database
    if (email !== user.email) {
        return res.status(404).json({ message: 'User not found!' });
    }

    // Generate token and expiry
    user.resetToken = crypto.randomBytes(32).toString('hex');
    user.resetTokenExpiry = Date.now() + 15 * 60 * 1000; // 15 minutes expiry

    // Simulating sending the email
    const resetURL = `http://localhost:3000/reset-password?token=${user.resetToken}&email=${email}`;
    console.log(`Reset URL: ${resetURL}`);  

    res.json({ message: 'Password reset link generated (check console for the link).' });
});

// TO SHOW PASSWORD RECOVERY ( checking reset token )
app.post('/reset-password', (req, res) => {
    const { token, email, newPassword } = req.body;

    // Simulate user lookup and token validation
    if (email === user.email && user.resetToken === token && Date.now() < user.resetTokenExpiry) {
        // Reset the password
        user.password = newPassword;
        user.resetToken = null;  // Clear the token after successful reset
        user.resetTokenExpiry = null;

        res.json({ message: 'Password reset successful!' });
    } else {
        res.status(400).json({ message: 'Invalid or expired token.' });
    }
});


app.listen(port, ()=>{
    console.log(`secure-password-application running on port ${port}`);
})

