import React,{createContext,useState,useEffect} from 'react'

import {fetchDataFromApi} from '../utils/api'

export const Context= createContext()

 export const AppContextProvider=(props)=>{
    const[loading,setloading]=useState(false)
    const[searchResult,setsearchResult]=useState([])
    const[selectCategories,setselectCategories]=useState("New")
    const[mobileMenu,setmobileMenu]=useState(false)


    useEffect(()=>{
     fetchSelectedCategoryData(selectCategories)
    },[selectCategories])

    const fetchSelectedCategoryData=(query)=>{
        setloading(true)
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            console.log(contents);
            setsearchResult(contents)
            setloading(false)
        })

    }
    return (
        <Context.Provider value={{
            loading,
        setloading,
        searchResult,
        setsearchResult,
        selectCategories,
        setselectCategories,
        mobileMenu,
        setmobileMenu,}}>
            {props.children}
        </Context.Provider>
    )

}


export default AppContextProvider; 