var React = require('react');

var Notes = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        notes: React.PropTypes.array.isRequired
    },
    render: function () {
        return (
            <div>
                <h3> Notes </h3>
            </div>
        )
    }
});

module.exports = Notes;
