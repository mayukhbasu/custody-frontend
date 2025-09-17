// components/AppRoutes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RemoteWrapper from '../remote-wrapper';

import HelloWorld from '../pages/HelloWorld';

const AppRoutes = () => (
  <Routes>
    

  <Route path="/" element={
    <HelloWorld/>
  } />
   {['inventory','royalty', 'order'].map((route) => (
  <Route
    key={route}
    path={`/${route}`}
    element={
      
        <React.Suspense fallback="Loading...">
          <RemoteWrapper name={route} />
        </React.Suspense>
      
    }
  />
))}
  </Routes>
);

export default AppRoutes;
