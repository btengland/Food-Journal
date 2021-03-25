import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';



class Charts extends Component{
constructor(){
    super(props);
    this.state = {
        chartData:{
            labels:[]
            
        }
    }

}


render(){
    return (
        <div className="chart">
            <Bar
  data={data}
  width={100}
  height={50}
  options={{ maintainAspectRatio: false }}
/>
        </div>
    )
}

}

export default Charts;