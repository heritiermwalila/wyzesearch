import React from 'react'

interface HeaderProps {
    title: string;
    description?: string;
}
export default function Header({title, description}: HeaderProps) {
    return (
        <div className="text-center pb-4">
            <h1 className="text-3xl font-bold">{title}</h1>
            {description && <p className="text-gray-600">{description}</p>}
        </div>
    )
}
