import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'

const Pagenotfound = () => {
  return (
    <Layout tittle={'Go back Page not found'}>
<div className='pnf'>
  <h1 className='pnf-tittle'>404</h1>
  <h2 className='pnf-heading'>Oops ! page Not Found</h2>
  <Link to='/' className='pnf-btn'>
    Go back
  </Link>

</div>

    </Layout>
  )
}

export default Pagenotfound