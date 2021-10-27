import React from 'react'
import LatestArticles from '../Article/LatestArticles'
import MostPopularBook from '../Book/MostPopularBook'
import LatestMovieReview from '../Movie/LatestMovieReview'
import LatestTopStories from '../Storie/LatestTopStories'

export type SearchType = 'articles' | 'books' | 'movie reviews' | 'top stories'

interface SearchResultProps {
    type: SearchType
}
export default function SearchResult({type}: SearchResultProps) {

    switch (type) {
        case 'articles': {
            return <LatestArticles />
        }

        case 'books': {
            return <MostPopularBook />
        }

        case 'movie reviews': {
            return <LatestMovieReview />
        }

        case 'top stories': {
            return <LatestTopStories />
        }
    
        default:
            return (
                <div>
                    <h2>Invalid search type</h2>
                </div>
            )
    }
    
}
