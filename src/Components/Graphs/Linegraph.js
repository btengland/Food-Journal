import '../../reset.css'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'

const Linegraph = (props) => {
   

    

//this gives an infinite loop of errors ^^


    return (
        <div>
            <Line
                data={{
                    labels: props.meals.meals.map(i => i._date.substring(0, 10)),
                    datasets: [
                        {
                            label: 'Feeling',
                            fill: false,
                            lineTension: 0.0,
                            backgroundColor: '#3e7e',
                            borderColor: 'RGB(0,0,0,1)',
                            borderWidth: 2,
                            data: props.meals.meals.map(i => i.rating)
                        }
                    ]
                }}
                height={20}
                width={100}
                options={{
                    title: {
                        display: true,
                        text: 'After Meal Feeling',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
    )
}



const mapStateToProps = state => state

export default connect(mapStateToProps)(Linegraph)