var React = require('react');
var Router = require('react-router');
var UserProfile = require('./Github/UserProfile');
var Repos = require('./Github/Repos');
var Notes = require('./Notes/Notes');

var Profile = React.createClass({

    mixins: [
        Router.State
    ],
    getInitialState: function () {
        return {
            bio: {name: 'test'},
            notes: ['note1', 'note2', 'note3'],
            repos: [1,2 ,3]
        }
    },
    render: function () {
        var username = this.getParams().username;
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={username} bio={this.state.bio} />
                </div>
                <div className="col-md-4">
                    <Repos username={username} repos={this.state.repos} />
                </div>
                <div className="col-md-4">
                    <Notes username={username} repos={this.state.notes} />
                </div>
            </div>
        );
    }

});


module.exports = Profile;