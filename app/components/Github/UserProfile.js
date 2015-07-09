var React = require('react');

var UserProfile = React.createClass({


    render: function () {
        return (
            <div>
                <h3>User Profile</h3>
                User Name : {this.props.username}
                <hr />

                bio: {this.props.bio}
            </div>
        )
    }
});

module.exports =  UserProfile;
