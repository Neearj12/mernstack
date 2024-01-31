import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Helmet from "react-helmet";
import { Toaster } from 'react-hot-toast';



const Layout = ({children,tittle,description,keywords,author}) => {
  return (
    <div>
       <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author}/>
        <title>{tittle}</title>
            </Helmet>
     <Header/>
        <main style={{minHeight:'70vh'}}>
        <Toaster />
        {children}
        </main>
   <Footer/>
    </div>
  )
}

Layout.defaultProps={
  tittle:'Ecommerce app shop-now',
  description:'mern stack Project',
  keyword:"mern,react,node,mongodb",
  author:"Techinfoyt",
}

export default Layout