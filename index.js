const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// middlewear
app.use(express.json());

// basic route
app.get('/', (req, res) => {
    res.json({ message: 'Hello Express' });
});

//start server
// app.listen(PORT, () => {
//     console.log(`Server is runninggggg on http://localhost:${PORT}`);
// });
try {
    app.listen(PORT, () => {
        console.log(`Server is runninggggg on http://localhost:${PORT}`);
    });
} catch (error) {
    console.error('Failed to start server:', error);
}