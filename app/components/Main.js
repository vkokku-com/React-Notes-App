 var React =  require('react');

var Main = React.createClass({
    render: function(){
        return (
        <div>
            hello World
        </div>
        )
    }
});


 React.render(<Main />, document.getElementById('app'));