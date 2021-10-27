import React from 'react'
import {RiSearch2Line} from 'react-icons/ri'
import { useApp } from '../../../app/context/AppProvider'

interface SearchFormProps {}
export default function SearchForm({}: SearchFormProps) {

    const [query, setQuery] = React.useState<string>()

    const {onSearch} = useApp()

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {

        event?.preventDefault()
        if(!query) {
         return  alert('Invalid query')
        }
        onSearch(query)

    }

    return (
        <div className="w-2/4 mx-auto">
            <form onSubmit={onSubmitHandler} className="border-2 rounded-md flex items-center">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="py-4 px-4 w-full rounded-md"
                    onChange={event => setQuery(event?.target?.value)}
                />
                <button className="px-3 cursor-pointer" type="submit">
                    <RiSearch2Line size={25} />
                </button>
            </form>
        </div>
    )
}
