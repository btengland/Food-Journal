import '../../reset.css'
import React, {useState, useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { chartColors } from "./Colors"

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
    
  }, []); 

  let numofOnions = 0;
  for (let k =0; k < allergens.length; k++){
    if (allergens[k] === "Onions"){
      numofOnions++
    }
  }

  let numofGluten = 0;
  for (let k =0; k < allergens.length; k++){
    if (allergens[k] === "Gluten"){
      numofGluten++
    }
  }
  let numofDairy = 0;
  for (let k =0; k < allergens.length; k++){
    if (allergens[k] === "Dairy"){
      numofDairy++
    }
  }
  let numofRawVegetables = 0;
  for (let k =0; k < allergens.length; k++){
    if (allergens[k] === "Raw Vegetables"){
      numofRawVegetables++
    }
  }
  let numofNuts = 0;
  for (let k =0; k < allergens.length; k++){
    if (allergens[k] === "Nuts"){
      numofNuts++
    }
  }
  let numofCaffeine = 0;
  for (let k =0; k < allergens.length; k++){
    if (allergens[k] === "Caffeine"){
      numofCaffeine++
    }
  }
    let numofShellfish = 0;
  for (let k =0; k < allergens.length; k++){
    if (allergens[k] === "Shellfish"){
      numofShellfish++
    }
  }
  let numofRedMeat = 0;
  for (let k =0; k < allergens.length; k++){
    if (allergens[k] === "Red Meat"){
      numofRedMeat++
    }
  }
  let numofFructoseSugar = 0;
  for (let k =0; k < allergens.length; k++){
    if (allergens[k] === "Fructose(Sugar)"){
      numofFructoseSugar++
    }
  }
  let numofPopcorn = 0;
  for (let k =0; k < allergens.length; k++){
    if (allergens[k] === "Popcorn"){
      numofPopcorn++
    }
  }
  let numofSoy = 0;
  for (let k =0; k < allergens.length; k++){
    if (allergens[k] === "Soy"){
      numofSoy++
    }
  }
  let numofCitrus = 0;
  for (let k =0; k < allergens.length; k++){
    if (allergens[k] === "Citrus"){
      numofCitrus++
    }
  }
  let numofBeans = 0;
  for (let k =0; k < allergens.length; k++){
    if (allergens[k] === "Beans"){
      numofBeans++
    }
  }
  let numofGarlic = 0;
  for (let k =0; k < allergens.length; k++){
    if (allergens[k] === "Garlic"){
      numofGarlic++
    }
  }
  let numofEggs = 0;
  for (let k =0; k < allergens.length; k++){
    if (allergens[k] === "Eggs"){
      numofEggs++
    }
  }
  
// console.log(allergens)
 


  useEffect (() =>{
    setDoughnutData({
      labels: ["Gluten",'Onions'],
      datasets: [{
  
        label:"",
        fill: true,
        backgroundColor:chartColors,
        borderColor: chartColors,
        borderWidth: 1,
        data:[numofGluten,numofOnions]
        
  
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