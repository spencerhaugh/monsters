import Button from '@mui/material/Button';

const Pagination = ({ pageTotal, pageIndex, setPageIndex}) => {
  return (
    <div className='button-container'>
                <Button 
                    variant='outlined' 
                    color='info'
                    sx={{ mr: 2 }}
                    disabled={pageIndex === 1}
                    onClick={() => setPageIndex(pageIndex - 1)}
                >
                    Previous
                </Button>
                    <span>
                        {`${pageIndex} of ${pageTotal}`}
                    </span>
                <Button 
                    variant='outlined' 
                    color='info'
                    sx={{ ml: 2 }}
                    disabled={pageIndex === pageTotal}
                    onClick={() => setPageIndex(pageIndex + 1)}
                >
                    Next
                </Button>
            </div>
  )
}

export default Pagination