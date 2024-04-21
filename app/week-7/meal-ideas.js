import React, {useState, useEffect} from 'react';

 async function fetchMealIdeas(ingredient) {
   const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}';
   const response = await fetch(url);
   const data = await response.json();
   return data.meals || [];
 } 

 async function fetchMealDetails(mealId) {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealId}');
    const data = await response.json();
    return data.meals[0];
 }
 const MealIdea = ({ ingredient }) =>{
    const [mealIdeas, setMealIdeas] = useState([]);
    const [SelectedMealId, setSelectedMealId] = useState(null);
    const [mealDetails, setMealDetails] = useState ({});
    
    useEffect(() => {
        const loadMealIdeas = async () => {
            const fetchedMeadIdeas = await fetchMealIdeas(ingredient);
            setMealIdeas(fetchedMealIdeas);
            setSelectedMealId(null);
        };

        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);
    
    const handleSelectMeal = async (mealId) => {
        if (selectedMealId === mealId) {
            setSelectedMealId(null);
            setMealDetails({});
        } else {
            const details = await fetchMealDetails(mealId);
            setMealDetails(details);
            setSelectedMealId(mealId);
        }
    };

    return (
        <div>
            <h2>Meal Ideas for "{ingredient}"</h2>
            {mealIdeas.length > 0 ? (
                <ul>
                    {mealIdeas.map((meal) => (
                        <React.Fragment key={meal.idMeal}>
                            <li onClick={() => handleSelectMeal(meal.idMeal)}>
                                <strong>{meal.strMeal}</strong>
                                <img onScroll={meal.strMealThumb} alt={meal.strMeal} style={{width:'100px', height: '100px'}} />
                            </li>
                            {selectedMealId === meal.idMeal && (
                                <ul>
                                    {Object.keys(mealDetails).filter(key => keystartsWith('strIngredient') && mealDetails[key]).map(key => (
                                        <li key={key}>{mealDetails[key]}</li>
                                    ))}
                                </ul>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            ) : (
                <p>No meals found for this ingredient.</p>
            )}
        </div>
    );
 };
export default MealIdeas;