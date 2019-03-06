
var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'https://farm1.staticflickr.com/28/49684002_3890beba97.jpg'

    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: 'https://ssl-gfx.filmweb.pl/po/68/78/6878/7389475.3.jpg'
    },
    {
        id: 3,
        title: 'Rocky IV',
        desc: 'Film opowiadające hostorię boksera',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51MbbQCig0L.jpg'
    },
    {
        id: 4,
        title: 'Wojownicze Żółwie ninja',
        desc: 'Film o bohaterskich żółwiach',
        img: 'https://ssl-gfx.filmweb.pl/po/66/87/646687/7630291.3.jpg'
    }
];

var Movie = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        img: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement('li', {}, 
                React.createElement(MovieTitle, { title: this.props.title}, ),
                React.createElement(MovieDesc, { desc: this.props.desc}, ),
                React.createElement(MovieImg, { img: this.props.img })
            )
        )
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    }
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    }
});

var MovieImg = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement('img', { src: this.props.img })
        )
    }
});

var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },

    render: function() {
        var moviesElements = this.props.movies.map(function (movie) {
            return React.createElement(Movie, { key: movie.id, title: movie.title, desc: movie.desc, img: movie.img },
            );
        });
        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, moviesElements)
            )
        )
    }  
});



var element = React.createElement(MoviesList, {movies: movies});

ReactDOM.render(element, document.getElementById('app'));