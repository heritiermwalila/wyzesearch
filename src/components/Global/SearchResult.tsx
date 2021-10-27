import React from 'react'
import LatestArticles from '../Article/LatestArticles'
import MostPopularBook from '../Book/MostPopularBook'
import LatestMovieReview from '../Movie/LatestMovieReview'
import LatestTopStories from '../Storie/LatestTopStories'

export type SearchType = 'articles' | 'books' | 'movies' | 'stories'

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

        case 'movies': {
            return <LatestMovieReview />
        }

        case 'stories': {
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
