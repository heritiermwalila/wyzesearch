import { useRouter } from "next/dist/client/router";
import React from 'react'
import SearchResult, { SearchType } from '../src/components/Global/SearchResult'
import withPageHeader from '../src/hoc/withPageHeader'

function Search() {
    const {query} = useRouter()

    return (
        <div>
            <div className="text-center">
                <h1>Wizesearch articles:</h1>
            </div>
        <SearchResult {...{type: query?.q as SearchType }} />
        </div>
        
    )
}


export default withPageHeader(Search)