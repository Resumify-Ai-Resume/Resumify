const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors package
// const UserModel = require('./models/User') // TODO to be refactored

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes


// MongoDB connection (replace with your credentials if needed)
const mongoURI = 'mongodb://localhost:27017/user'; // Assuming your database is named 'user'

mongoose.connect(mongoURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB!'))
.catch(error => {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process if the connection fails
});



// User schema // TODO to be refactored 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    uid: String,
});

const User = mongoose.model('User', userSchema);

// Signup route
app.post('/signup', async (req, res) => {
    try {
        const { name, email, uid } = req.body;

        // Check if the user already exists based on email or uid (optional)
        const existingUser = await User.findOne({ $or: [{ email }, { uid }] });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        const newUser = new User({ name, email, uid });
        await newUser.save();
        res.status(201).json({ message: 'User created!' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
});

app.get('/user/:uid', async (req, res) => {
    try {
      const user = await User.findOne({ uid: req.params.uid }); // Find user by UID
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user); // Send user as JSON response
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});



// Start the server
const PORT = process.env.PORT || 3001; // Use environment variable for port
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
