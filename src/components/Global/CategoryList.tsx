import React from "react";
import {MdArticle, MdWebStories} from 'react-icons/md'
import { ImBooks } from 'react-icons/im'
import { RiMovie2Fill } from 'react-icons/ri'
import { useRouter } from "next/dist/client/router";
import { useApp } from "../../app/context/AppProvider";
import CategoryItem from "./CategoryItem";

interface CategoryListProps {}
export default function CategoryList({}: CategoryListProps) {
  const {categories, isLoading} = useApp()

  if(isLoading){
    return <div className="flex justify-center items-center h-2/4 w-2/4 mx-auto my-5">
      <h4>loading categories...</h4>
    </div>
  }

  return (
    <div className="flex justify-center items-center h-2/4 w-2/4 mx-auto my-5">
      {
        categories?.map(category => <CategoryItem {...{category}} key={category?.key} />)
      }
      
    </div>
  );
}
