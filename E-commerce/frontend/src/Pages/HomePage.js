import React from 'react'
import Layout from '../Components/Layout/Layout'
import { useAuth } from '../context/Auth'

const HomePage = () => {
  const [auth,setauth]=useAuth()
  return (
    <Layout tittle={'Best offers'}>
    <h1>Homepage</h1>
    <pre>{JSON.stringify(auth, null,4)}</pre>
    </Layout>
  )
}

export default HomePage