import { useEffect } from 'react';
import { Post } from '../src/components/Blog/Post';
import { posts } from '../getAllPosts';
import CoverProfile from '../src/components/Profile/CoverProfile';
export default function IndexPage() {
    return (
        <>
            <div style={{ width: '50%' }}>
                <CoverProfile />
            </div>
            {posts.map((post) => (
                <Post key={post.link} post={post} />
            ))}
        </>
    );
}
