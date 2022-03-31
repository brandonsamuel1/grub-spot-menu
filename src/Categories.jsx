import React from 'react';

const Categories = ({ categories, filteredData }) => {
    return (
        <div className='btn-container'>
            {categories.map((category, i) => {
                return (
                    <button key={i} type='button' className='filter-btn' onClick={() => filteredData(category)}>
                        {category}
                    </button>
                )
            })}
        </div>
    )
}

export default Categories;