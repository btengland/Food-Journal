import '../../reset.css'

const Graphs = () => {
    return (
        <div>Graphs</div>
    )
}

export default Graphs

// const allergens = data.reduce((acc, mealObj) => {
// 	const invalidChars = ['\'', '"', '{', '}']

// 	if (mealObj.allergens) {
// 		const allergensArr = mealObj.allergens.split(',')
		
// 		for (i = 0; i < allergensArr.length; i++) {
// 			for (let j = 0; j < allergensArr[i].length; j++) {
			
// 				if (invalidChars.includes(allergensArr[i][j])) {
// 					allergensArr[i] = allergensArr[i].replace(allergensArr[i][j], '')
// 					i--;
// 					break;
// 				}
// 			}
// 		}
// 		return [...acc, ...allergensArr]
// 	} else {
// 		return acc;
// 	}
// }, []) 

// console.log(allergens)