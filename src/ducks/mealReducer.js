const initialState = {
    meals: []
}

const ADD_MEAL = "ADD_MEAL"
const GET_MEALS = "GET_MEALS"

export function addMeal (meal) {
    return {
        type: ADD_MEAL,
        payload: meal
    }
}

export function getMeals (meals) {
    return {
        type: GET_MEALS,
        payload: meals
    }
}

export default function mealReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_MEAL:
            return {...state, meals: action.payload}  
        case GET_MEALS: 
            return {...state, meals: action.payload}
        default:
            return state      
    }
}
