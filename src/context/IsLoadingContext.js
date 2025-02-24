import React from 'react';
// Create a new context with default values.
const IsLoadingContext = React.createContext({
  isLoading: false,
  setIsLoading: () => {},
});

export default IsLoadingContext;