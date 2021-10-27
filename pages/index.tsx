import React from 'react'
import CategoryList from '../src/components/Global/CategoryList'
import SearchForm from '../src/components/Global/Forms/SearchForm'
import Header from '../src/components/Global/Header'


export default function Home() {
  return (
    <div className="h-screen flex items-center">
        <div className="container mx-auto">
          <Header {...{title: "Welcome to wyzesearch", description: 'search with wyzesearch articles, books, movie reviews and top stories'}}/>
          <SearchForm />
          <CategoryList />
        </div>
    </div>
  )
}
