import React , {useState, useEffect} from 'react'
import db from '../Firebase/firebase'
import '../Styles/Feed.css'
import MessageSender from '../Components/MessageSender'
import Post from '../Components/Post'
import StoryReel from '../Components/StoryReel'


function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        db.collection("posts")
        .orderBy('timestamp', 'desc')
        .onSnapshot( (snapshot) =>
            setPosts(snapshot.docs.map( (doc) => ({
                id: doc.id, 
                data: doc.data()
            })))
        );
    }, []);

    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            {
                posts.map( (post) => (
                <Post 
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    image={post.data.image}
                    timestamp={post.data.timestamp}
                    username={post.data.username} 
                />
                ))
            }
        </div>
    )
}

export default Feed
