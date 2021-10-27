import React from "react";
import {MdArticle, MdWebStories} from 'react-icons/md'
import { ImBooks } from 'react-icons/im'
import { RiMovie2Fill } from 'react-icons/ri'
import { useRouter } from "next/dist/client/router";

interface CategoryListProps {}
export default function CategoryList({}: CategoryListProps) {
    const router = useRouter()
  return (
    <div className="flex justify-center items-center h-2/4 w-2/4 mx-auto my-5">
      <div className="w-1/4 cursor-pointer" onClick={() => router.push({
          pathname: '/search',
          query: {q: 'articles'}
      })}>
        <div className="mr-2 bg-gray-300 py-5 text-center rounded-md">
            <div className="flex justify-center items-center">
                <MdArticle size={50}/>
            </div>
            <span>Articles</span>
        </div>
      </div>
      <div className="w-1/4 cursor-pointer" onClick={() => router.push({
          pathname: '/search',
          query: {q: 'books'}
      })}>
        <div className="mr-2 bg-gray-300 py-5 text-center rounded-md">
            <div className="flex justify-center items-center">
                <ImBooks size={50} />
            </div>
            <span>Books</span>
        </div>
      </div>
      <div className="w-1/4 cursor-pointer" onClick={() => router.push({
          pathname: '/search',
          query: {q: 'movie+reviews'}
      })}>
        <div className="mr-2 bg-gray-300 py-5 text-center rounded-md">
            <div className="flex justify-center items-center">
                <RiMovie2Fill size={50} />
            </div>
            <span>Movie reviews</span>
        </div>
      </div>
      <div className="w-1/4 cursor-pointer" onClick={() => router.push({
          pathname: '/search',
          query: {q: 'top+stories'}
      })}>
        <div className="bg-gray-300 py-5 text-center rounded-md">
            <div className="flex justify-center items-center">
                <MdWebStories size={50} />
            </div>
            <span>Top stories</span>
        </div>
      </div>
    </div>
  );
}
