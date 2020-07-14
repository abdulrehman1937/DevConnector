const express = require('express');
const db = require('./config/db');
const { connect } = require('mongoose');
const connectDB = require('./config/db');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/post');
const auth = require('./routes/api/auth');
const app = express();
connectDB();
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Api running'));
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/profile', profile);
app.use('/api/post', posts);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
