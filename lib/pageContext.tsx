import { createContext, useContext, useEffect, useState } from 'react';

let pageState;

type PageContextType = {
    page: number;
}

const pageContextDefaultValue: PageContextType = {
    page: 1
}

const PageContext = createContext<PageContextType>(pageContextDefaultValue);

export const PageProvider = ({ value, children }) => {
    const { page }: PageContextType = value;

    useEffect(() => {
        if (!pageState && page) {
            pageState = page;
        }
    }, [page]);


    return (
        <PageContext.Provider value={ value }>
            { children }
        </PageContext.Provider>
    )
}

export const useCurrentPage = () => useContext(PageContext);

export function usePageIndexState(page: number = 1) {
    const [ currentPage, setCurrentPage ] = useState(
        pageState || 1
    );

    const handlePageIncrement = () => {
        setCurrentPage(currentPage + 1);
    };
    
    const handlePageDecrement = () => {
        setCurrentPage(currentPage - 1);
    };

    return [ currentPage, handlePageIncrement, handlePageDecrement ];
}