import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [redingTime, setReadingTime] = useState(0);


  const handleAdToBookmark = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookMarks(newBookmark)
  }

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = redingTime + time;
    setReadingTime(newReadingTime);

    // remove the read blog from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookMarks(remainingBookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex container mx-auto'>
        <Blogs handleAdToBookmark={handleAdToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} redingTime={redingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
