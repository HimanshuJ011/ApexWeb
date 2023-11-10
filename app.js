const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');


const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the HTML form
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/contact.html');
// });

app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve your HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/service', (req, res) => {
    res.sendFile(path.join(__dirname, 'service.html'));
});

app.get('/Product/1',(req, res)=>{
    res.sendFile(path.join(__dirname, 'Product/Solar On Grid System.html'));
})
app.get('/Product/2',(req, res)=>{
    res.sendFile(path.join(__dirname, 'Product/Solar off Grid System.html'));
})
app.get('/Product/3',(req, res)=>{
    res.sendFile(path.join(__dirname, 'Product/Solar Hybrid System.html'));
})
app.get('/Product/4',(req, res)=>{
    res.sendFile(path.join(__dirname, 'Product/Solar Street light.html'));
})
app.get('/Product/5',(req, res)=>{
    res.sendFile(path.join(__dirname, 'Product/Solar Water Heater.html'));
})
app.get('/Product/6',(req, res)=>{
    res.sendFile(path.join(__dirname, 'Product/Solar Agriculture Pump.html'));
})
// Handle form submission
app.post('/send', (req, res) => {
    const { full_name, email, contactNo, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail', // e.g., 'Gmail' or use a mailtrap.io account
        auth: {
            user: '', // Email
            pass: '', // App key from gmail 2FA 
        },
    });

    const mailOptions = {
        from: email,
        to: '', // Email
        subject: 'Contact Form Submission',
        text: `

        Customer Details :-

        Name:  ${full_name}
        Email:  ${email}
        Mobile No. : ${contactNo}

        Message: ${message}
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email: ' + error);
            res.send('Error sending email');
        } else {
            console.log('Email sent:');
        }
        res.redirect('/home');
    });
});

// Start the server
const port = 9696; // You can change the port if needed
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
