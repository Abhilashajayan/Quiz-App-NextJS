import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonLoader: React.FC = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <Skeleton width='100%' height='50vh' />
      <h1 className='text-5xl mt-4'>Loading...</h1>
      <Skeleton width='100%' height='50vh' />
    </div>
  );
};

export default SkeletonLoader;
