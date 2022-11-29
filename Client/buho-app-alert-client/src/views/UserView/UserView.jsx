


  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { UserContextProvider } from "../../contexts/UserContext";
  import axios from "axios";
  
  const UserView = ({ userId, picturePath }) => {
    const [user, setUser] = useState(null);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);

  
    const getUser = async () => {
      const response = await fetch(`http://localhost:3500/api/auth/users/${_id}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setUser(data);
    };
  
    useEffect(() => {
      getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
    if (!user) {
      return null;
    }
  
    const {
      username,
      email,
    } = user;
  
    return (
      null
    );
  };
  
  export default UserView;