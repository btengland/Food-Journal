import '../../reset.css'
import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'

const Linegraph = (props) => {
    const [graphData, setGraphData] = useState([])


    // const allergens = props.meals.meals
    // .map(i => !i.allergens ? null : i.allergens.split(','))
    // .forEach((allergenArr, i, arr) => {
    // if(allergenArr) {
    //     allergenArr.forEach((str, i, arr) => {
    //         if(i === 0) {
    //             arr[i] = str.substring(1)
    //         }
    //         if(i === arr.length -1) {
    //             arr[i] = str.substring(0, str.length - 2)
    //         }
    //     })
    // }

    //     // if() {}
    // })
    // .reduce((acc, allergenArr) => {
    //     if (!allergenArr) { return acc }
    //     else {
    //        allergenArr.forEach(allergen => {
    //             acc.push(allergen)
    //         })
    //         return acc
    //     }
    // }, [])
    const ratings = props.meals.meals.map(i => i.rating)
    const dates = props.meals.meals.map(i => i._date.substring(0, 10))

    // useEffect(() => {
    //     setGraphData({
    //         labels: dates,
    //         datasets: [
    //             {
    //                 label: 'Feeling',
    //                 fill: false,
    //                 lineTension: 0.0,
    //                 backgroundColor: '#3e7e',
    //                 borderColor: 'RGB(0,0,0,1)',
    //                 borderWidth: 2,
    //                 data: ratings
    //             }
    //         ]
    //     })

    // }, [dates, ratings])

//this gives an infinite loop of errors ^^


    return (
        <div>
            <Line
                data={graphData}
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