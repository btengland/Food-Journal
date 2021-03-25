import React, {Component} from 'react';
import {doughnut} from 'react-chartjs-2';



class Charts extends Component{
constructor(props){
    super(props);
    this.state = {
        chartData:props.chartData
            labels:[]
            
        }
    }

}

static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right'
}

render(){
    return (
        <div className="pieChart">
            <Chart chartData={this.state.chartData}     
            

        
    )
}

}

export default Charts;
