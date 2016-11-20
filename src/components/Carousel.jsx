import React, {Component} from 'react';

class Carousel extends Component {

  constructor(props){
    super(props);
    this.goalType = this.goalType.bind(this);
  }

  goalType (goal) {
    if(goal.private === false){
      return (
        <h5> Public </h5>
      )
    } else {
      return (
        <h5> Private </h5>
      )
    }
  }

  render() {
    console.log("Rendering Carousel")
    console.log("???", this.props.goalInfo);
    let goal = this.props.goalInfo[0];
    console.log("MAYBE:???", goal.name);

    return (
      <div id="carousel-example-generic" className="carousel slide">
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="item active">
            <div className="container main-content">
                {this.props.goalInfo.map((goal, index) => {
                  return (
                    <div className="goals-template" key={index}>
                      <h1> {goal.name} </h1>
                      {this.goalType(goal)}
                      <div className="progress">
                        <div className="progress-bar progress-bar-success" style={{width: "35%"}}>
                          <span className="sr-only">35% Complete (success)</span>
                        </div>
                        <div className="progress-bar progress-bar-warning progress-bar-striped" style={{width: "20%"}}>
                          <span className="sr-only">20% Complete (warning)</span>
                        </div>
                        <div className="progress-bar progress-bar-danger" style={{width: "10%"}}>
                          <span className="sr-only">10% Complete (danger)</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
            <div className="carousel-caption">
              <h1>Slide 1</h1>
              <p>Slide 1 Description</p>
            </div>
         </div>

          <div className="item">
            <div className="container main-content">
            </div>
            <div className="carousel-caption">
              <h1>Slide 2</h1>
              <p>Slide 2 Description</p>
            </div>
          </div>

          <div className="item">
            <div className="container main-content">
            </div>
            <div className="carousel-caption">
              <h1>Slide 3</h1>
              <p>Slide 3 Description</p>
            </div>
          </div>

        </div>
      <a className="left carousel-control " href="#carousel-example-generic" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left white" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right white" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      </div>
    );
  }

}
export default Carousel;
