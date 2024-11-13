const express = require('express');
const app = express();
app.set('view engine', 'ejs');// Set EJS as the template engine
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'



const MARKETING = {
    name: 'Digimarketing',
    address: '232 Digimon Rd, Dragonview, AN 33442',
    history: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Curabitur sit amet mauris. Ut ultricies arcu vel risus. Vivamus euismod odio vitae velit fermentum, et sollicitudin tortor mollis. Aenean eget nisi volutpat, fermentum libero a, tempor nisi. Nulla facilisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Curabitur sit amet mauris. Ut ultricies arcu vel risus. Vivamus euismod odio vitae velit fermentum, et sollicitudin tortor mollis. Aenean eget nisi volutpat, fermentum libero a, tempor nisi. Nulla facilisi.',
    staff: [
        { name: 'Tai', title: 'CEO', URL: 'https://i.postimg.cc/xTNJVztf/person-1.jpg', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.' },
        { name: 'Matt', title: 'MD', URL: 'https://i.postimg.cc/rmd0yRMN/person-4.jpg', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.' },
        { name: 'Kevin', title: 'ED', URL: 'https://i.postimg.cc/3NmkmMyy/person-5.jpg', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.' },
        { name: 'Sara', title: 'VP', URL: 'https://i.postimg.cc/y8XN7X9H/person-3.jpg', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.' },
        { name: 'Chloe', title: 'Intern', URL: 'https://i.postimg.cc/j5k5Gxfn/person-2.jpg', about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.' }
    ],
    portfolio: [
        { project: 'McDonalds',  timeSpan: '48 hours from meeting to completion!', rating: '5★', URL: 'https://i.postimg.cc/Gt5xZx2H/mickeyds.jpg' },
        { project: 'Pink Hydration', timeSpan: '24 hours from meeting to completion!', rating: '5★', URL: 'https://i.postimg.cc/0ymzs0Qh/lustersas.jpg' },
        { project: 'Coca-Cola', timeSpan: '24 hours from meeting to completion!', rating: '5★', URL: 'https://i.postimg.cc/vB8Fjz1r/coke-ads.jpg' }
    ],
    external: [
        { website: 'facebook', link: 'www.facebook.com/digimarketing' },
        { website: 'instagram', link: 'www.instagram.com/digimarketing' },
        { website: 'youtube', link: 'www.youtube.com/digimarketing' }
    ],
    contact: [
        { email: 'Digimarketing@gmail.com', phone: '555-555-5555' }
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