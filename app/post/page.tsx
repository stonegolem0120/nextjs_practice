
import NavBar from '@/components/navbar'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState} from 'react';

export default async function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("http://localhost:3000/apis/posts/getAllPost");
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, []);
  return (
    <main>
      <div>  
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
        </div>
    </main>
  )
}
