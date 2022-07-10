import React from 'react'
import { NavLink } from 'react-router-dom'
import './Blog.scss'

const Blog = () => {
  return (
    <div className='blog'>
        <div className="container">
            <div className="header__block">
                <h2 className="h2">
                    Блог    
                </h2>
                <div className="header__blog__tags">
                     <span className='header__blog__tags'>Mac</span>  
                     <span className='header__blog__tags'>iPhone</span>  
                     <span className='header__blog__tags'>Watch</span>  
                     <span className='header__blog__tags'>iPad</span>  
                     <span className='header__blog__tags'>Аксессуары</span>  
                </div>
                <NavLink to='#' className='header__block__link'><span className='header__block__point'></span>Больше постов</NavLink>
            </div>
            <div className="blog__posts">
                <NavLink to='#' className="post__card"></NavLink>
            </div>
            <div className='blog__subheader'>Популярное в блоге</div>
            <div className="blog__popular__posts">
                <NavLink to='#' className="post__card"></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Blog