import React from 'react';


import '../assets/components/Categories.scss'

const Categories = ({children, title}) =>{
    return (

        <div className="categories">
            <h3 className="categories__title">{title}</h3>
            {children}
        </div>

    )
}

export default Categories;