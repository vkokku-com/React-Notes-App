var React = require('react');

var AddNote = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        addNote: React.PropTypes.func.isRequired
    },
    handleSubmit: function () {
        //get the value from the input with ref=note
        var newNote = this.refs.note.getDOMNode().value;
        // Reset the value from the input with ref=note
        this.refs.note.getDOMNode().value = '';
        this.props.addNote( newNote );
    },
    render: function () {
        return (
            <div className="input-group">
                <input type="text" className="form-control" ref="note" placeholder="Add new note"/>
              <span className="input-group-btn">
                  <button className="btn btn-default" type="button" onClick={this.handleSubmit}> Submit</button>
              </span>
            </div>
        );
    }
});

module.exports = AddNote;