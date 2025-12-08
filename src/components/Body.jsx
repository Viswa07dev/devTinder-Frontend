import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Body = () => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData) return;
    try{
      const res = await axios.get(BASE_URL + "/profile/view", {withCredentials: true});
      // console.log("Fetched user data:", res.data);
      dispatch(addUser(res.data));
    }
    catch(err){
      if(err.status === 401){
        navigate("/login");
      }
    console.error(err);
  }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
       <NavBar/>
       <Outlet/>
       <Footer/>
    </div>
  )
}

export default Body