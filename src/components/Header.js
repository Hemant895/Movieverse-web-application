import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import {Link}  from "react-router-dom";
function Header() {
  return (
    <div className=" sticky top-0 text-3xl flex justify-between text-red-500 font-bold items-center  p-3 border-b-2 border-gray-500">
    <span>Movie<span className="text-white">Verse</span></span>
    <h1 className='text-lg text-white cursor-pointer'>
        <Button> <Link to={'/addmovie'}><AddIcon className='mr-1 '/><span className="text-white">
       Add New</span></Link></Button></h1> 
    </div>
  )
}

export default Header
