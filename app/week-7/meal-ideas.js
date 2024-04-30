
"use client"
import React, {useState, useEffect} from 'react';

 async function fetchMealIdeas(ingredient) {
   const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}';
   const response = await fetch(url);
   const data = await response.json();
   return data.meals || [];
 } 

 const MealIdeas = ({ ingredient }) => {
    const [mealIdeas, setMealIdeas] = useState([]);

    useEffect(() => {
        if (ingredient) {
            const loadMealIdeas = async () => {
                const fetchedMealIdeas = await fetchMealIdeas(ingredient);
                setMealIdeas(fetchedMealIdeas);
            };
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas for "{ingredient}"</h2>
            <ul>
                {mealIdeas.length > 0 ? (
                    mealIdeas.map((meal) => (
                        <li key={meal.idMeal}>
                            {meal.strMeal}
                            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100px', height: '100px' }} />
                        </li>
                    ))
                ) : <p>No meals found for this ingredient.</p>}
            </ul>
        </div>
    );
};

export default MealIdeas;