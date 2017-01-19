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
        alert("ss")
        this.props.handleDeleteEvent(this.props.event);
      }
    })
  },
  handleToggle: function(e){
    e.preventDefault();
    this.setState.edit = !this.state.edit;
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
        </td>
        <td>
          <a className="btn btn-danger" onClick={this.handleDelete} >Delete</a>
        </td>
      </tr>
    )
  },
  eventForm: function(){
    <tr>
      <td>
        <input className="form-control" type="text" defaultValue={this.props.event.name} ref="name"></input>
      </td>
      <td>
        <input className="form-control" type="text" defaultValue={this.props.event.place} ref="place"></input>
      </td>
      <td>
        <input className="form-control" type="text" defaultValue={this.props.event.date} ref="date"></input>
      </td>
      <td>
        <input className="form-control" type="text" defaultValue={this.props.event.description} ref="description"></input>
      </td>
      <td>
        <a className="btn btn-primary">Update</a>
      </td>
      <td>
        <a className="btn btn-danger" onClick={this.handleToggle}>Cancel</a>
      </td>
    </tr>
  },
  render: function(){
    if(this.state){
      this.eventForm();
    }else {

      this.eventRow();
    }
  }
});
