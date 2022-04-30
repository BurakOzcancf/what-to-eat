import React, { useContext, useState } from 'react'
import axios from 'axios'
import { MainContext } from './context'
import { useNavigate, useParams } from 'react-router-dom'

const FoodsDetails = () => {
    const { baseURL } = useContext(MainContext)
    const params = useParams() 
    const [food, setFood] = useState(null)
    let navigate = useNavigate()
    React.useEffect(() => {
        axios
            .get(`${baseURL}${params.det}/information?apiKey=${process.env.REACT_APP_API}`)
            .then((response) => {
                setFood(response.data);
            });
    }, [baseURL,params]);
    
    console.log(food)
    

  return (
      <div>
          <button className='bg-slate-500 text-white py-2 px-4 rounded-xl ml-5' onClick={() => navigate("/")} >Back</button>
               {food &&
              <div className='p-10'>
                  <img className='m-auto rounded-xl' src={food.image} alt={food.image} />
                  <h2 className='pt-10 pb-4 text-3xl text-center font-semibold'>{food.title}</h2>
                  <ul className='list-disc py-3'>  {food.extendedIngredients.map((item,index) => <li key={index}>{item.name} {item.measures.metric.amount} {item.measures.metric.unitShort} </li>)} </ul>
                  <span> Ready in {food.readyInMinutes} minutes, </span>
                  <span> {food.glutenFree &&"Gluten Free,"} </span>
                  <span> Servings: {food.servings} </span>
                  <ol className='list-decimal py-5'>
                       {food.analyzedInstructions[0].steps.map((item,index)=> <li key={index}> {item.step} </li> )} 
                  </ol>
                  <h3 className='text-2xl font-semibold text-center'>Bon Appetit</h3>
              </div>}     
    </div>
  )
}

export default FoodsDetails