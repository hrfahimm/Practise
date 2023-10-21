/** @format */

const SingleBlog = ({ params }) => {
    //console.log(params.segments);
    const [year, id] = params.segments || [];
    return (
        <div>
            SingleBlog {year || new Date().getFullYear()} --- {id}
        </div>
    );
};

export default SingleBlog;
