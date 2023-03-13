
import { useEffect, useState } from "react";
import UserDataService from "../services/UserService";
// import axios from "axios";
const MyProfile = () => {
  // const [profile, setProfile] = useState({});
  const getProfile = () => {
    UserDataService.MyInfo()
      .then((response) => {
        // const token = localStorage.getItem('jwtToken');
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        console.log(response.data);
        // setProfile(response.data.)
      })
      .catch((err) => {
        console.error(err);
      });
  }
  useEffect(() => {
    getProfile()
  }, []);
  return (
    <h1>My profile</h1>
  )
};
export default MyProfile;