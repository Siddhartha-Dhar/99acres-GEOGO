import { useSelector } from "react-redux"
import { getAllPosts, getIsFetchingPosts, getErrorPosts } from "./reduxStore/posts/reducers/postsReducer";
const PostsList = () => {
    const posts = useSelector(getAllPosts)
    const isFetching = useSelector(getIsFetchingPosts)


    console.log(posts)

    if (isFetching) {
        return <span>Loading...</span>
    }
    return (
        <div>
            <h2>Cities</h2>
            {posts.map(post => {
                return (
                    <div key={post._id}>

                        <h4>{post.name}</h4>
                        <h6>{post.createdAt}</h6>
                        <p>{post.updatedAt}</p>
                    </div>
                )



            })}
        </div>
    )
}
export default PostsList;