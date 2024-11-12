const express = require('express');
const app = express();
app.set('view engine', 'ejs');// Set EJS as the template engine
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'



const MARKETING = {
    name: 'Digimarketing',
    address: '232 Digimon Rd, Dragonview, AN 33442',
    history: 'loream - fill in later',
    staff: [
        {name: 'Tai', title: 'CEO', about : '1' },
        {name: 'Matt', title: 'MD', about: '2' },
        {name: 'Kevin', title: 'ED', about: '3' },
        {name: 'Sara', title: 'VP', about: '4' },
        {name: 'Chloe', title: 'Intern', about: '5' }
    ],
    portfolio: [
        {project: 1, timeSpan: 1, rating: 0},
        {project: 2, timeSpan: 2, rating: 1},
        {project: 3, timeSpan: 3, rating: 2}
    ],
    external: [
        {website: 'facebook', link: 'www.facebook.com'},
        {website: 'instagram', link: 'www.instagram.com'},
        {website: 'youtube', link: 'www.youtube.com'}
    ],
    contact: [
        {email: 'Digimarketing@gmail.com', phone: '555-555-5555'}
    ]
};

// Route for homepage
app.get('/', (req, res) => {
    res.render('home.ejs', MARKETING);
});

// Route for homepage
app.get('/history', (req, res) => {
    res.render('history.ejs', MARKETING);
});

// Route for staff
app.get('/staff', (req, res) => {
    res.render('staff.ejs', MARKETING);
});

// Route for portfolio
app.get('/portfolio', (req, res) => {
    res.render('portfolio.ejs', MARKETING);
});

// Route for external
app.get('/external', (req, res) => {
    res.render('external.ejs', MARKETING);
});

// Route for contact us
app.get('/contact', (req, res) => {
    res.render('contact.ejs', MARKETING);
});


app.listen(3000);