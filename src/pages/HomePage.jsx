import React from 'react'
import './styles/HomePage.css'
import FormTrainer from '../components/HomePage/FormTrainer'

const HomePage = () => {
    return (
        <div>
        <h1> <img className='home_title' src="./pokedex.png" alt="" /> </h1>
        <h2>Hi trainer</h2>
        <p>Too see the information of the pokemon tell me your trainer name </p>
        <FormTrainer/>
        </div>

    )
}

export default HomePage