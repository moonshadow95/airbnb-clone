'use client'

import React, {useEffect} from 'react';
import EmptyState from "@/app/components/EmptyState";

interface ErrorStateProps {
  error: Error
}

const ErrorState: React.FC<ErrorStateProps> = (
  {
    error
  }) => {
  useEffect(() => {
    console.log(error)
  }, [error]);

  return (
    <EmptyState
      title={'Uh Oh'}
      subtitle={'Something went wrong!'}
    />
  )
};

export default ErrorState;