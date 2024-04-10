import React from 'react'
import './styles/HomePage.css'
import FormTrainer from '../components/HomePage/FormTrainer'

const HomePage = () => {
    return (
        <>
            <div className='home_container'>
            <h1> <img className='home_title' src="./pokedex.png" alt="" /> </h1>
            <h2 className='home_hi'>Hi trainer!</h2>
            <p className='home_information'>Too see the information of the pokemon tell me your trainer name </p>
            <FormTrainer/>
            </div>

            <div className='home_content_lines'>  
            <header className='home_line_one'>
            </header>
            <section className="home_line_two" >
                <div>
                    <div className="home_sphere1">
                        <div className="home_sphere2">
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </>

    )
}

export default HomePage