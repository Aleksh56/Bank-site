import React, {useState, useEffect} from 'react'
import axios from 'axios';
import styles from '../style'

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20')
            .then(res => {
                setLoading(false)
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },)
    return (
        <div className={`${styles.container} ${styles.flexCenter} py-[90px] flex-col`}>
            <h4 className={`${styles.heading1} mb-[50px]`}>Our Blog</h4>
            <ul>
                { loading ?
                    posts.map(post => (
                        <li key={post.id} className='px-7 py-2 border-2 border-gray-500 rounded-md m-2 w-[80vw] text-xl'>{post.id}{'.'} {post.title}</li>
                    ))
                    : <h2 className='text-2xl'>Loading...</h2>
                }
            </ul>
        </div>
      )
}

export default Blog