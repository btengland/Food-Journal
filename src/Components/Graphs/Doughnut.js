import '../../reset.css'
import React, {useState, useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2'
import { connect } from 'react-redux'

const Doughnutgraph = (props) => {
  const [doughnutData, setDoughnutData] = useState([])
  
  
  // const doughnutDataMapped = props.meals.meals.map(i => i.allergens)
  
  

  const allergens = props.meals.meals.reduce((acc, mealObj) => {
    const invalidChars = ['\'', '"', '{', '}']
  
    if (mealObj.allergens) {
      const allergensArr = mealObj.allergens.split(',')
      
      for (let i = 0; i < allergensArr.length; i++) {
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

// console.log(allergens)
 


  useEffect (() =>{
    setDoughnutData({
      labels: allergens,
      datasets: [{
  
        label:"",
        fill: true,
        backgroundColor:'#CD5C5C',
        borderColor: '#39B51E',
        borderWidth: 1,
        data: allergens,
        
  
      }]
    })
  },[])
  
  return (
    <div>
      <Doughnut
      data={doughnutData}
      options ={{
        title:{
          display:true,
          text:"Reoccuring Allergens",
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








// import gql from 'graphql-tag';
// import graphql2chartjs from 'graphql2chartjs';
// import {Doughnut} from 'react-chartjs-2';
// import {Query} from 'react-apollo';


// const doughnutGiveUp = () => (
//   <Query query={gql`
//   query {
//     reocccuring_allergens{
//       label: allergens
//       data: count
//     }
//   }`}>
//   {({ loading, error, data}) => {
//     if (data) {
//       const g2c = new graphql2chartjs(data, 'doughnut');
//       return <Doughnut data={g2c.data} />
//     } else {
//         return 'Loading/error';
//       }
//     }
//   } 
//   </Query>  
   
// )

// export default doughnutGiveUp