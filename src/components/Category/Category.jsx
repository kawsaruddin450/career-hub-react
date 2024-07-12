import React from 'react';

const Category = ({category}) => {
    const {logo, category_name, availability} = category;
    return (
        <div className='p-10 rounded-xl bg-blue-100 text-left'>
            <h2 className='text-xl font-bold'>{category_name}</h2>
            <p>{availability}</p>
        </div>
    );
};

export default Category;