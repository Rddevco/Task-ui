"use client";
import React, { useEffect, useState } from 'react'
import { fetchPostTitle } from '../utils/FetchData'; //importing from utils

function FetchPost() {

const [title,setTitle] = useState("...loading");

useEffect(() => {
async function getData() {
    const fetchedTitle = await fetchPostTitle();  // function from utils fetchposttile.
    setTitle(fetchedTitle);
}

 getData();
},[]);


  return (
    <div className="text-center mt-10 p-5 bg-gray-100 rounded-lg shadow-md">FetchPost
<h1 className="text-xl font-bold text-blue-600">GET API TITLE</h1>
<p className='text-purple-800 text-lg'>{title}</p>
    </div>
  );
}

export default FetchPost