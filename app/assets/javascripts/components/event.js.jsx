var Event = React.createClass({
  getInitialState: function() {
    return{
      edit: false
    }
  },
  propTypes: {
    name: React.PropTypes.string,
    event_date: React.PropTypes.string,
    place: React.PropTypes.string,
    description: React.PropTypes.string
  },
  handleDelete: function(e){
    e.preventDefault();
    $.ajax({
      url: "/events/"+ this.props.event.id,
      method: "DELETE",
      dataType: "JSON",
      success: function(){
        this.props.handleDeleteEvent(this.props.event);
      }.bind(this)
    })
  },
  handleToggle: function(e){
    e.preventDefault();
    this.setState({edit: !this.state.edit});
  },
  recordValue: function(fields){
    return ReactDOM.findDOMNode(this.refs[fields]).value;
  },
  handleUpdate: function(e){
    e.preventDefault();
    alert(this.validRecord())
    if(this.validRecord()){
      var event_data = {
        name: this.recordValue("name"),
        description: this.recordValue("description"),
        date: this.recordValue("date"),
        place: this.recordValue("place")
      };
      $.ajax({
        method: "PUT",
        url: "/events/"+ this.props.event.id,
        data: {event: event_data},
        success: function(data){
          this.props.handeUpdateEvent(this.props.event, data),
          this.setState({edit: false});
        }.bind(this),
      });
    }
  },
  validRecord: function() {
    console.log("This is name:" + this.recordValue("name"))
    console.log("This is place:" + this.recordValue("place"))
    console.log("This is date:"  + this.recordValue("date"))
    console.log("This is description:" + this.recordValue("description"))
    if (this.recordValue("name") &&
        this.recordValue("place") &&
        this.recordValue("date") &&
        this.recordValue("description")) {
      return true;
    } else {
      return false;
    }
  },
  eventRow: function(){
    var event = this.props.event;
    return(
      <tr>
        <td>{event.name}</td>
        <td>{event.event_date}</td>
        <td>{event.place}</td>
        <td>{event.description}</td>
        <td>
          <a className="btn btn-primary" onClick={this.handleToggle} >Edit</a>
          <a className="btn btn-danger" onClick={this.handleDelete} >Delete</a>
        </td>
      </tr>
    );
  },
  eventForm: function(){
    var event = this.props.event ;
    return(
      <tr>
        <td>
          <input className="form-control" type="text" defaultValue={event.name} ref="name"></input>
        </td>
        <td>
          <input className="form-control" type="text" defaultValue={event.event_date} ref="place"></input>
        </td>
        <td>
          <input className="form-control" type="text" defaultValue={event.place} ref="date"></input>
        </td>
        <td>
          <input className="form-control" type="text" defaultValue={event.description} ref="description"></input>
        </td>
        <td>
          <a className="btn btn-success" onClick={this.handleUpdate}>Update</a>
          <a className="btn btn-danger" onClick={this.handleToggle}>Cancel</a>
        </td>
      </tr>
    )
  },
  render: function(){
    if(this.state.edit){
      return(this.eventForm());
    }else{
      return(this.eventRow());
    }
  }
});
