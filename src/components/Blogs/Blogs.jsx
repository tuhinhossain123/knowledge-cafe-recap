import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({ handleAdToBookmark, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(rsc => rsc.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3 mt-8">
           
            {
                blogs.map(blog => <Blog key={blog.id} handleAdToBookmark={handleAdToBookmark} handleMarkAsRead={handleMarkAsRead} blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.prototype = {
    handleAdToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blogs;