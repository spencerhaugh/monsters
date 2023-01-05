import Button from '@mui/material/Button';

const Pagination = ({ pageTotal, pageIndex, handlePageDecrement, handlePageIncrement }) => {
    return (
        <div className='button-container'>
            <Button 
                variant='outlined' 
                color='info'
                sx={{ mr: 2 }}
                disabled={ pageIndex === 1 }
                onClick={ () => handlePageDecrement() }
            >
                Previous
            </Button>
                <span>
                    { `${pageIndex} of ${pageTotal}` }
                </span>
            <Button 
                variant='outlined' 
                color='info'
                sx={{ ml: 2 }}
                disabled={ pageIndex === pageTotal }
                onClick={ () => handlePageIncrement() }
            >
                Next
            </Button>
        </div>
    )
}

export default Pagination