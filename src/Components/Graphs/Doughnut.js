import '../../reset.css'
import React, {useState, useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2'
import { connect } from 'react-redux'

const Doughnutgraph = (props) => {
  const [doughnutData, setDoughnutData] = useState([])


  
  const doughnutData = props.meals.meals  
  
  
  const allergens = doughnutData.reduce((acc, mealObj) => {
    const invalidChars = ['\'', '"', '{', '}']
  
    if (mealObj.allergens) {
      const allergensArr = mealObj.allergens.split(',')
      
      for (i = 0; i < allergensArr.length; i++) {
        for (let j = 0; j < allergensArr[i].length; j++) {
        
          if (invalidChars.includes(allergensArr[i][j])) {
            allergensArr[i] = allergensArr[i].replace(allergensArr[i][j], '')
            i--;
            break;
          }
        }
      }
      return [...acc, ...allergensArr]
    } else {
      return acc;
    }
  }, []) 


  useEffect (() =>{
    setDoughnutData({
      labels: allergens,
      datasets: [{
  
        label:"Reoccuring Allergens",
        data:[],
        backgroundColor:
  
      }]
    })
  })
  
  return (
    <div>
      <Doughnut
      data={doughnutData}
      options ={{
        title:{
          display:true,
          text:"text for naming",
          fontSize:20,
        },
        legend:{
          display:true,
          position:'right'
        }
      }}
      />
    </div>
  )
  }

  const mapStateToProps = state => state
  export default connect(mapStateToProps)(Doughnutgraph)







// import {Subscription} from 'react-apollo';
// import gql from 'graphql-tag';
// import graphql2chartjs from 'graphql2chartjs';
// import React, {Component} from 'react';
// import {doughnut} from 'react-chartjs-2';


// const Chart = () => (
//   <Subscription
//     subscription={gql`
//       subscription {
//         foods: allergens {
//           label: 
//           rating: 
//         }
//       }`}
//     }

//     {({data} => {
//       if (data) {
//         const g2c = new graphql2chartjs(data, 'doughnut');
//         return (<doughnut data={g2c.data} />);
//       }
//       return null;
//     }
//   </Subscription>
// );

// query {
//   foods : allergens {
//     label:
//     data:
//   }
// }