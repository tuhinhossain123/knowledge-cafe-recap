import PropTypes from 'prop-types';


const Bookmark = ({ bookmarks }) => {
    const { title } = bookmarks;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded'>
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;