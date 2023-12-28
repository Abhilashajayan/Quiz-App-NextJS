// SkeletonLoader.tsx

import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonLoader: React.FC = () => {
  return (
    <div>
      <Skeleton height={30} width={200} />
      <Skeleton height={200} />
    </div>
  );
};

export default SkeletonLoader;
