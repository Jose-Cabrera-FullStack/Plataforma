import React from 'react'; 

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          slidersLabels: ["A"],
          sumOfCustomWeights: 0,
          slidersWeights: []
        };
      }
      componentDidMount() {
        const slidersLabels = this.state.slidersLabels;
        const slidersWeights = [];
        for (var i = 0; i < slidersLabels.length; ++i)
          slidersWeights[slidersLabels[i]] = 0;
        this.setState({ slidersWeights });
      }
    
      render() {
        return (
          <div>
            {this.generateSliders()}
            <span> Total Weights: {this.state.sumOfCustomWeights} </span>
          </div>
        );
      }
      generateSliders() {
        const slidersLabels = this.state.slidersLabels;
        var sliders = [];
        for (var i = 0; i < slidersLabels.length; ++i) {
          sliders.push(
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <span style={{ fontSize: "16px", marginBottom: "6px" }}>
                {" "}
                {slidersLabels[i]} ({this.state.slidersWeights[slidersLabels[i]]})%
              </span>
              <input
                id={slidersLabels[i]}
                type="range"
                defaultValue="0"
                min="0"
                max="100"
                className="slider"
                onChange={this.handleSliderChange.bind(this)}
                step="1"
              />
            </div>
          );
        }
         return sliders;
      }
      handleSliderChange(event) {
        //console.log(event.target.value, " ", event.target.id);
        var id = event.target.id;
        var value = event.target.value;
        const slidersWeights = this.state.slidersWeights;
        slidersWeights[id] = parseInt(value);
        var sumOfCustomWeights = 0;
        const slidersLabels = this.state.slidersLabels;
        for (var i = 0; i < slidersLabels.length; i++)
          sumOfCustomWeights += slidersWeights[slidersLabels[i]];
        this.setState({ slidersWeights, sumOfCustomWeights });
      }
    }
    

export default NameForm;
  