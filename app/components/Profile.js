var React = require('react');
var Router = require('react-router');

var Profile = React.createClass({

    mixins: [
        Router.State
    ],
    getInitialState: function () {
        return {
            bio: {},
            notes: [],
            repos: []
        }
    },
    render: function () {
        var username = this.getParams().username;
        return (
            <div className="row">
                <div className="col-md-4">
                    User Profile Component: ---> {username}
                </div>
                <div className="col-md-4">
                    Repos Components
                </div>
                <div className="col-md-4">
                    Notes Component
                </div>
            </div>
        );
    }

});


module.exports = Profile;