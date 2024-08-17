'use client';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHook';
import { fetchPosts } from '@/store/features/post-fetching';
import { useEffect } from 'react';

export const SementicTest = () => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log(posts);

  return (
    <div className="flex flex-col items-center gap-4">
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
};
