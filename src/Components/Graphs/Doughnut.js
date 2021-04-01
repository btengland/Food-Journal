import '../../reset.css'
import React, {useState, useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { chartColors } from "./Colors"

const Doughnutgraph = (props) => {
  const [doughnutData, setDoughnutData] = useState([])
 
   
  

  const allergens = props.meals.meals.reduce((acc, mealObj) => {
    const invalidChars = ['\'', '"', '{', '}']
  
    if (mealObj.allergens && mealObj.rating > 6) {
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
   


  useEffect (() =>{
    setDoughnutData({
      labels: ["Gluten",'Onions','Dairy','Raw Vegetables','Nuts','Caffeine','Shellfish','Red Meat','Fructose (Sugar)','Popcorn','Soy','Citrus','Beans','Garlic','Eggs'],
      datasets: [{
  
        label:"",
        fill: true,
        backgroundColor:chartColors,        
        borderColor:chartColors,
        borderWidth: 1,
        data:[numofGluten,numofOnions,numofDairy,numofRawVegetables,numofNuts,numofCaffeine,numofShellfish,numofRedMeat,numofFructoseSugar,numofPopcorn,numofSoy,numofCitrus,numofBeans,numofGarlic,numofEggs]
        
  
      }]
    })
  },[])
  
  return (
    <div>
      <Doughnut
                    data={{
                        labels: ["Gluten",'Onions','Dairy','Raw Vegetables','Nuts','Caffeine','Shellfish','Red Meat','Fructose (Sugar)','Popcorn','Soy','Citrus','Beans','Garlic','Eggs'],
                        datasets: [
                            {
                                label: 'LABEL TEST',
                                
                                data: [numofGluten,numofOnions,numofDairy,numofRawVegetables,numofNuts,numofCaffeine,numofShellfish,numofRedMeat,numofFructoseSugar,numofPopcorn,numofSoy,numofCitrus,numofBeans,numofGarlic,numofEggs
                                ],
                                
                                backgroundColor:chartColors,
                                borderColor:chartColors,
                            },
                        ],
                    }}
                    height={400}
                    width={400}
                    options={{                      
                        title: {
                          display: true,
                          text: "                   Reoccuring Allergens",
                          fontSize: 30,
                        },
                        legend:{
                          display: true,
                          position: 'left',
                        }
                    }}
                />
    </div>
  )
  }

  const mapStateToProps = state => state
  export default connect(mapStateToProps)(Doughnutgraph)

