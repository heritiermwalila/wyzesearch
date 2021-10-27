import { useRouter } from 'next/dist/client/router'
import React from 'react'
import {MdArticle, MdWebStories} from 'react-icons/md'
import { ImBooks } from 'react-icons/im'
import { RiMovie2Fill } from 'react-icons/ri'
import { ICategory } from '../../lib/lib'


const IconJSX = {
    articles: <MdArticle size={50}/>,
    books: <ImBooks size={50} />,
    movies: <RiMovie2Fill size={50} />,
    stories: <MdWebStories size={50} />
}

interface CategoryItemProps {
    category: ICategory
}

export default function CategoryItem({category}: CategoryItemProps) {
    const router = useRouter()
    return (
        <div className="w-1/4 cursor-pointer" onClick={() => router.push({
            pathname: '/search',
            query: {q: category?.key}
        })}>
          <div className="mr-2 bg-gray-300 py-5 text-center rounded-md">
              <div className="flex justify-center items-center">
                  {IconJSX?.[category?.key]}
              </div>
              <span>{category?.name}</span>
          </div>
        </div>
    )
}
