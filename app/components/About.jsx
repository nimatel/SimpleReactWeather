var React = require('react')

//var About = React.createClass({
//    render: function (){
//        return (
//            <h3>About Component</h3>
//        );
//    }
//});

var About = (props) => {
        return (
            <div>
                <h3>About</h3>
                <p>welcome to the about page!</p>
            </div>
        )
};

module.exports = About;
