var EventTable = React.createClass({
  handleDelete: function(event){
    alert("sss")
    var events = this.state.events.slide();
    index = events.indexOf(event);
    events.splice(index, 1);
    this.replaceState({events: events});
  },
  render: function() {
    var events = [];
    this.props.events.forEach(function(event) {
      events.push(<Event event={event}
      key={'event' + event.id} handleDeleteEvent={this.handleDelete} />);
    }.bind(this));
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-2">Name</th>
            <th className="col-md-2">Date</th>
            <th className="col-md-2">Place</th>
            <th className="col-md-3">Description</th>
            <th className="col-md-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {events}
        </tbody>
      </table>
    )
  }
});
