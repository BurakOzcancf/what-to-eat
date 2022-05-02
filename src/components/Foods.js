import React from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from './context'

const Foods = () => {
    const { foods, title,setValue,setSearch,search } = React.useContext(MainContext)
    function handleSubmit(e) {
        e.preventDefault()
        setValue(search)
        setSearch("")
    }
    return (
        <section>
            <h2 className='text-3xl text-center font-medium'> {title} </h2>
            <form onSubmit={handleSubmit} className='absolute w-80 top-40 left-1/2 -translate-x-1/2'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Let's find what to" className='w-60 rounded-xl px-2 py-1' type="text" />
                <input type='submit' value='Eat' className='bg-favicon font-Dancing ml-1 rounded-xl w-10 px-2 py-1 text-white' />
            </form>
            {
                foods && 
                <div className="max-w-7xl m-auto grid grid-cols-1 p-4 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                        {foods.map(item => 
                            <Link className='relative' key={item.id} to={`/food/${item.id}`}>
                                <h1 className='absolute p-2 w-full h-full bg-gradient-to-t from-zinc-900
                                text-white rounded-xl to-transparent flex justify-center
                                items-end hover:transition-all pb-2 hover:opacity-0'> {item.title} </h1>
                                <img className='rounded-xl' src={item.image} alt={item.image} />
                            </Link>
                        )} 
                </div>
            }
      </section>
  )
}

export default Foods