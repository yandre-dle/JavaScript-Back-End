function index(req, res) {
    res.render('index.hbs');
}

function about(req, res) {
    res.render('about.hbs');
}

function create(req, res) {
    res.render('create.hbs');
}

function details(req, res) {
    let id = req.params.id;

    const cube = {
        id: 1,
        name: 'cube1',
        description: 'cube 1 description',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41IpdljUeKL.jpg',
        difficultyLevel: 1
    }

    res.render('details.hbs', cube);
}

module.exports = {
    index,
    about,
    create, 
    details
};