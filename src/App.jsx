import React from 'react'
import './App.css'
import {ColorModeContext, useMode} from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import {Topbar, Sidebar, Dashboard, Team, Invoices, Contacts, Bar, Form, Line, Pie, FAQ, Geography, Calendar }from './scenes'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}> 
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app" >
          <Sidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route  path='/' element={<Dashboard />}/>
              <Route  path='/team' element={<Team />}/>
              <Route  path='/contacts' element={<Contacts />}/>
              <Route  path='/invoices' element={<Invoices />}/>
              <Route  path='/form' element={<Form />}/>
              <Route  path='/faq' element={<FAQ />}/>
              <Route  path='/bar' element={<Bar />}/>
              <Route  path='/pie' element={<Pie />}/>
              <Route  path='/line' element={<Line />}/>
              <Route  path='/geography' element={<Geography />}/>
              <Route  path='/calendar' element={<Calendar />}/> 
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App