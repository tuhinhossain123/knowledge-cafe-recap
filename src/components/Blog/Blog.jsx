import PropTypes, { symbol } from 'prop-types';
import { FaBookmark } from 'react-icons/fa';



const Blog = ({ blog, handleAdToBookmark, handleMarkAsRead }) => {
    const { id, title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 rounded' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center gap-6'>
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button className='ml-2 text-2xl' onClick={() => handleAdToBookmark(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold mb-4'>{title}</h2>
            <p className='space-x-4 mb-6'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>

            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-purple-500 font-bold underline'>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAdToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;