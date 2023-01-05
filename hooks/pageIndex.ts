import { useState } from 'react'


export default function usePageIndexState(page: number = 1) {
    const [ currentPage, setCurrentPage ] = useState(page);

    const handlePageIncrement = () => {
        setCurrentPage(currentPage + 1);
    };
    
    const handlePageDecrement = () => {
        setCurrentPage(currentPage - 1);
    };

    return [ currentPage, handlePageIncrement, handlePageDecrement ];
}