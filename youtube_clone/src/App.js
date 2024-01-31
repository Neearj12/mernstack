import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {AppContextProvider} from './context/contextApi'
import Header from './components/Header' 
import Feed from './components/Feed'
import SearchResult from './components/SearchResult'
import VideoDetails from './components/VideoDetail'

const App = () => {
  return (
    <AppContextProvider>
         <BrowserRouter>
         <div className="flex flex-col h-full">
          <Header/>
          <Routes>
            <Route path='/' exact element={<Feed/>}/>
            <Route path='/SearchResult/:searchQuery' element={<SearchResult/>}/>
            <Route path='/video/:id' element={<VideoDetails/>}/>
          </Routes>
         </div>
         </BrowserRouter>
    </AppContextProvider>
   
  )
}

export default App