import React from 'react'

interface SearchFormProps {}
export default function SearchForm({}: SearchFormProps) {
    return (
        <div className="w-2/4 mx-auto">
            <form action="" className="border-2 rounded-md">
                <input type="text" placeholder="Search..." className="py-4 px-4 w-full rounded-md"/>
            </form>
        </div>
    )
}
