import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './index.css'
import Routers from './Routers/index.tsx'
import LoadingFallback from './Components/Loading.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {
      <Router>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
          {
              Routers.map((router, index) => (
                <Route  
                  key={index}
                  path={router.path}
                  element={<router.component />}
                />
              ))
            }
          </Routes>
        </Suspense>
      </Router>
    }
  </React.StrictMode>,
)
