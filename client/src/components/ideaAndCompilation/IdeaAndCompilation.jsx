import React from 'react'
import { NavLink } from 'react-router-dom'
import { idea } from '../../mockData/ideaAndCompilation.js'
import './IdeaAndCompilation.scss'

const IdeaAndCompilation = () => {
    return (
        <div className='ideas__and__compilation'>
            <div className="container">
                <div className="header__block">
                    <h2 className="h2">Идеи и подборки</h2>
                </div>
                <div className="ideas__and__compilation__plates">
                    {idea.map((item, i) => (
                        <NavLink to='#' className='idea__plate' key={i}>
                            <span className='idea__plate__text'>{item.name}</span>
                            <img src={item.img} alt="img" className='idea__plate__img' />
                        </NavLink>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default IdeaAndCompilation