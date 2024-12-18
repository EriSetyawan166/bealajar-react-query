import './App.css'
import { useQuery } from 'react-query'
import { fetchPosts } from './services/api';
import { posts } from './types';

function App() {
  const { data, isLoading, isError, error } = useQuery('posts', fetchPosts);

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error:  {(error as { message: string }).message}</span>
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post: posts) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
