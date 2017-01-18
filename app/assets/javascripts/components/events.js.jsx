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
  render: function(){
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>React Tutorial</h1>
          <p>by Thien</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <EventTable events={this.state.events} />
          </div>
        </div>
      </div>
    )
  },
});
