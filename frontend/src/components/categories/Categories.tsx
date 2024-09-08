import { CategoryData, CategoryProps } from '@/schema/category/types/types'
import React from 'react'
import { Category } from '../category/Category';

export const Categories : React.FC<CategoryProps> = ({categoryData}) => {
  return (
    <div id = "categories" className = "flex justify-center items-center">
        {categoryData.map((categoryData : CategoryData) => {
            const {id, attributes} = categoryData;
            return <Category id = {id} attributes = {attributes}/>
        })}
    </div>
  )
}
