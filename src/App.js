import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router';
import AppRouter from './routers/AppRouter';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

const App = () => (
  <Wrapper>
    <AppRouter/>
  </Wrapper>
)

export default App;