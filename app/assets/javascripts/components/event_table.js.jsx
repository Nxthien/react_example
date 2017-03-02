var EventTable = React.createClass({

  componentDidMount: function(){
    console.log(this.props.events)
  },
  handleDelete: function(event){
    this.props.handleDelete(event)
  },
  handleUpdate: function(old_event,event){
    this.props.handleUpdate(event)
  },
  render: function() {
    var events = [];
    this.props.events.forEach(function(event) {
      events.push(<Event event={event}
      key={'event' + event.id} handleDeleteEvent={this.handleDelete} handeUpdateEvent={this.handleUpdate} />);
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
