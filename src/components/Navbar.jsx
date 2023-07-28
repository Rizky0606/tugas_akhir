// TODO: answer here
import { Link } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.clear();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // TODO: answer here
    <div className="navbar">
      <Link to="/">
        <h1 data-testid="home-page">Student Portal</h1>
      </Link>
      <Link to="/student" data-testid="student-page">
        All Student
      </Link>
      <Link to="/dosen">All Dosen</Link>
      <Link to="/student/add" data-testid="add-page">
        Add Student
      </Link>
      <Link to="/dosen/add" data-testid="add-page">
        Add Dosen
      </Link>
      {user ? (
        <>
          <Text fontSize="2xl">{user.displayName}</Text>
          <img
            src={user?.photoURL}
            alt={user.displayName}
            style={{ borderRadius: "50%", height: "40px", width: "40px" }}
          />
          <Button onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
