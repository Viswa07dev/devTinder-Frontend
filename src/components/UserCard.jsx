import React from 'react'
import { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removeFeed } from '../utils/feedSlice'

const UserCard = ({user}) => {
  const {firstName,lastName, photoUrl,age,gender,about,_id} = user
  const dispatch = useDispatch();

  const handleSendRequest = async(status,userId) => {
    try{
      const res = await axios.post(BASE_URL+"/request/send/" + status + "/" + userId, {}, {withCredentials: true});
      dispatch(removeFeed(userId));
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src={photoUrl}
      alt="photo"
      className="h-96 w-full object-cover" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
   {age && gender && <p>{age + " " + gender}</p>}
   {about && <p>{about}</p>}
    <div className="card-actions justify-center my-4">
      <button className="btn btn-primary" onClick={()=>handleSendRequest("ignore",_id)}>Ignore</button>
      <button className="btn btn-secondary" onClick={()=>handleSendRequest("interested",_id)}>Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard