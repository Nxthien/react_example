var Events = React.createClass({
  getInitialState: function(){
    return {
      events: []
    };
  },
  componentDidMount: function(){
    this.getDataFromApi();
  },
  getDataFromApi: function(){
    var self = this;
    $.ajax({
      url: '/events',
      success: function(data){
        self.setState({
          events: data
        });
      },
      error: function(xhr, status, error){
        alert("cant get data from API:" , error)
      }
    });
  },
  handleSearch: function(events){
    this.setState({events: events});
  },
  handleAdd: function(event){
    var events = this.state.events;
    events.push(event);
    this.setState({events: events});
  },
  handleDelete: function(event){
    var events = this.state.events.slice();
    index = this.state.events.indexOf(event);
    events.splice(index, 1);
    this.replaceState({events: events});
  },
  handleUpdate: function(old_event, event){
    var events = this.state.events.slice();
    var index = events.indexOf(old_event);
    events.splice(index, 1, event);
    this.setState({ events: events });
  },
  render: function(){
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>React Tutorial</h1>
          <p>by Thien</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <SearchForm handleSearch={this.handleSearch} />
          </div>
          <div className="col-md-8">
            <NewForm handleAdd={this.handleAdd} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <EventTable events={this.state.events} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
          </div>
        </div>
      </div>
    )
  },
});
