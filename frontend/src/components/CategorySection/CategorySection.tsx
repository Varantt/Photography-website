import React from 'react';
import {CATEGORIES} from '@/schema/category/queries/categories'
import { useQuery } from '@apollo/client';
import { Loading } from '../status/loading/Loading';
import { Error } from '../status/error/Error';
import { Categories } from '../categories/Categories';
import { CategoryData } from '@/schema/category/types/types';
 
export const CategorySection : React.FC = () => {

  const {loading, error, data} = useQuery(CATEGORIES);

   if (loading) {
     return <Loading />;
   }

   if (error) {
     return <Error message={error.message} />;
   }

   const fetchedCategories : CategoryData[] = data.categories.data;
   console.log(data);
  return (
    <div id = "categories">
      <h1>Some of my category of work</h1>

      <Categories categoryData = {fetchedCategories}/>

    </div>
  )
}
