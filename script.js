
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
        img: 'turtles.jpg'
    }
];

var Movie = React.createClass({
    propTypes: {
        key: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        img: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement('li', { key: this.props.movie.id },
                React.createElement(MovieTitle, {}, this.props.movie.title),
                React.createElement(MovieDesc, {}, this.props.movie.desc),
                React.createElement(MovieImg, { src: this.props.movie.img })
            )
        )
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render: function() {
        React.createElement('h2', {}, this.props.movie.title)
    }
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },

    render: function() {
        React.createElement('p', {}, this.props.movie.desc)
    }
});

var MovieImg = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired
    },

    render: function() {
        React.createElement('img', { src: this.props.movie.img })
    }
});

var MovieList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },

    render: function() {
        
    }
});



var element =
    React.createElement(Movie, {key: movie_id, });

ReactDOM.render(element, document.getElementById('app'));