
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({ bookmarks, redingTime }) => {
    return (

        <div className='md:w-1/3 bg-gray-300 ml-4 mt-8'>
            <div className='bg-white m-5 p-8  rounded'>
                <h4 className='text-4xl font-bold mb-4 text-center'>Reading Time: {redingTime}</h4>
            </div>

            <h2 className='text-2xl text-center font-bold'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmarks={bookmark}></Bookmark>)
            }

        </div>

    )
}
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    redingTime: PropTypes.number
}
export default Bookmarks
