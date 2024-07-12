import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/public/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='my-32'>
            <h2 className='text-5xl font-bold'>Job Category List</h2>
            <p className='text-slate-700 mt-4 mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='w-3/4 mx-auto flex justify-between gap-6'>
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;