import React from 'react'

export default function meal() {
    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];

      const mealist=DUMMY_MEALS.map(dish=>(
        <div>
        <div>{dish.name}</div>
        <div>{dish.description}</div>
        <div>{dish.price}</div>
        <div>{dish.name}</div>
        </div>
      ))
  return (
    <div>
      {mealist}
    </div>
  )
}
