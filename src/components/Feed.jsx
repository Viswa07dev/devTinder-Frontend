import React from 'react'
import UserCard from './UserCard'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { addFeed } from '../utils/feedSlice'

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store)=>store.feed);
  // console.log(feed,"feed");
  
  const getFeed = async() => {
    if(feed) return;
    try{
     const res = await axios.get(BASE_URL+"/feed", {withCredentials: true});
    //  console.log(res);
     
     // console.log("Feed data:", res.data);
     // Dispatch an action to store feed data in Redux store
     dispatch(addFeed(res.data.data));
    }catch(err){
      console.error(err);
    }
  }

  useEffect(()=>{
    getFeed();
  },[]);

  if(!feed) return;

  if(feed<=0){
    return (
      <div className='flex justify-center my-10'>
        <h1 className='text-3xl font-bold'>No more new users to show</h1>
      </div>
    )
  }

  return (
    feed && ( 
    <div className='flex justify-center my-10'>
      <UserCard user={feed && feed[0]} />
    </div>
    )
  )
}

export default Feed