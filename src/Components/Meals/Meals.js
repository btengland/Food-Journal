import React, { useState, useEffect } from 'react'
import { addMeal } from '../../ducks/mealReducer'
import { connect } from 'react-redux'
import axios from 'axios'

const Meals = (props) => {
    const [date, setDate] = useState('')
    const [mealType, setMealType] = useState('')
    const [foodItems, setFoodItems] = useState([])
    const [mood, setMood] = useState(0)

    const handleMeal = async (e) => {
        e.preventDefault()
        try {
            const meal = await axios.post('/api/foods', {mealType, date, foodItems, mood})
            props.addMeal(meal.data)
            setDate('')
            setMealType('')
            setFoodItems([])
            setMood(0)
        }
        catch (err) {console.log(err)}

    }

    return (
        <form className='meal-input'>
            <label>
                Meal Date:
               <input type='date' onChange={e => setDate(e.target.value)} />
            </label>
            <label>
                Meal Type:
               <select className='drop-down' onChange={e => setMealType(e.target.value)}>
                    <option value=''>--Please Choose A Meal--</option>
                    <option value='Breakfast'> Breakfast </option>
                    <option value='Lunch'> Lunch </option>
                    <option value='Dinner'> Dinner </option>
                    <option value='Snack'> Snack </option>
                </select>
            </label>
            <section className='allergin-list'>
                <p> What Was In Your Meal? </p>
                <div className='allergins'>
                    <label>
                        <input type='checkbox' value='Gluten' onChange={e => setFoodItems([...foodItems, e.target.value])} />
                        Gluten
                    </label>
                    <label>
                        <input type='checkbox' value='Onions' onChange={e => setFoodItems([...foodItems, e.target.value])} />
                        Onions
                    </label>
                    <label>
                        <input type='checkbox' value='Dairy' onChange={e => setFoodItems([...foodItems, e.target.value])} />
                        Dairy
                    </label>
                    <label>
                        <input type='checkbox' value='Raw Vegetables' onChange={e => setFoodItems([...foodItems, e.target.value])} />
                        Raw Vegetables
                    </label>
                    <label>
                        <input type='checkbox' value='Nuts' onChange={e => setFoodItems([...foodItems, e.target.value])} />
                        Nuts
                    </label>
                    <label>
                        <input type='checkbox' value='Caffeine' onChange={e => setFoodItems([...foodItems, e.target.value])} />
                        Caffeine
                    </label>
                    <label>
                        <input type='checkbox' value='Shellfish' onChange={e => setFoodItems([...foodItems, e.target.value])} />
                        Shellfish
                    </label>
                    <label>
                        <input type='checkbox' value='Red Meat' onChange={e => setFoodItems([...foodItems, e.target.value])} />
                        Red Meat
                    </label>
                    <label>
                        <input type='checkbox' value='Fructose' onChange={e => setFoodItems([...foodItems, e.target.value])} />
                        Fructose(sugar)
                    </label>
                    <label>
                        <input type='checkbox' value='Popcorn' onChange={e => setFoodItems([...foodItems, e.target.value])} />
                        Popcorn
                    </label>
                    <label>
                        <input type='checkbox' value='Soy' onChange={e => setFoodItems([...foodItems, e.target.value])} />
                        Soy
                    </label>
                    <label>
                        <input type='checkbox' value='Citrus' onChange={e => setFoodItems([...foodItems, e.target.value])} />
                        Citrus
                    </label>
                    <label>
                        <input type='checkbox' value='Beans' onChange={e => setFoodItems([...foodItems, e.target.value])} />
                        Beans
                    </label>
                    <label>
                        <input type='checkbox' value='Garlic' onChange={e => setFoodItems([...foodItems, e.target.value])} />
                        Garlic
                    </label>
                    <label>
                        <input type='checkbox' value='Eggs' onChange={e => setFoodItems([...foodItems, e.target.value])} />
                        Eggs
                    </label>

                </div>
            </section>
            <section className='mood-rating'>
                <p> How Are You Feeling? </p>
                <div className='rating'>
                    <input type='radio' id='1' value={1} onClick={e => setMood(e.target.value)} />
                    <label for='1' > 1 </label>

                    <input type='radio' id='2' value={2} onClick={e => setMood(e.target.value)} />
                    <label for='2' > 2 </label>

                    <input type='radio' id='3' value={3} onClick={e => setMood(e.target.value)} />
                    <label for='3' > 3 </label>

                    <input type='radio' id='4' value={4} onClick={e => setMood(e.target.value)} />
                    <label for='4' > 4 </label>

                    <input type='radio' id='5' value={5} onClick={e => setMood(e.target.value)} />
                    <label for='5' > 5 </label>

                    <input type='radio' id='6' value={6} onClick={e => setMood(e.target.value)} />
                    <label for='6' > 6 </label>

                    <input type='radio' id='7' value={7} onClick={e => setMood(e.target.value)} />
                    <label for='7' > 7 </label>

                    <input type='radio' id='8' value={8} onClick={e => setMood(e.target.value)} />
                    <label for='8' > 8 </label>

                    <input type='radio' id='9' value={9} onClick={e => setMood(e.target.value)} />
                    <label for='9' > 9 </label>

                    <input type='radio' id='10' value={10} onClick={e => setMood(e.target.value)} />
                    <label for='10' > 10 </label>
                </div>
            </section>

            <button onClick={handleMeal} > Submit </button>

        </form>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {addMeal})(Meals)