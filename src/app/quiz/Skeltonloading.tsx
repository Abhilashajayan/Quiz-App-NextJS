import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonLoader: React.FC = () => {
  return (
    <div className='h-screen h-full w-screen'>
      <Skeleton className='w-screen h-full  ' />
      <h1 className='flex  justify-center text-5xl'>Loading...</h1>
      <Skeleton className='w-screen h-screen' />
    </div>
  );
};

export default SkeletonLoader;
