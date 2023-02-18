import { useState, useCallback } from 'react';

const useToggleState = (initialState = false) => {
  const [toggleState, setToggleState] = useState(initialState);

  const handleToggle = useCallback(() => setToggleState((prev) => !prev), []);

  return [toggleState, handleToggle];
};

export default useToggleState;
