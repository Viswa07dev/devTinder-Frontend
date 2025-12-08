import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addConnection } from '../utils/connectionSlice'

const Connections = () => {
 const dispatch = useDispatch();
 const connections = useSelector((store)=>store.connection);
    const fetchConnections = async () => {
        try{
           const res = await axios.get(BASE_URL+"/user/connections", {withCredentials: true});
           console.log(res);
           dispatch(addConnection(res.data.data) );
        }
        catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
        fetchConnections();
    },[])

    if(!connections) return;

    if(connections.length===0) return <h1>No Connections Found</h1>;

  return (
    <div className='text-center my-10'> 
        <h1 className='text-3xl text-white font-bold m-5'>Connections</h1>

        {
            connections.map((connection)=>{
                const {_id,firstName,lastName,photoUrl,age,gender,about} = connection;
                return (
                   <div key={_id} className='flex m-4 p-4 rounded-lg bg-base-300 w-1/3 mx-auto'>
                    <div>
                        <img className='w-29 h-32 rounded-full' src={photoUrl} alt="photo" />
                    </div>
                    <div className='text-left mx-4'>
                        <h2 className='text-xl font-bold'>{firstName + " "+ lastName}</h2>
                        {age && gender && <p>{age +", "+ gender}</p>}   
                        <p className='mt-2'>{about}</p>
                    </div>
                     </div>
                )
            })
        }
       
    </div>
  )
}

export default Connections