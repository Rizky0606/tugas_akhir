import React from "react";
import { useState, useEffect } from "react";
// TODO: answer here
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Routes/Home";
import AddStudent from "./Routes/Mahasiswa/AddStudent";
import Student from "./Routes/Mahasiswa/Student";
import ProfileStudent from "./Routes/Mahasiswa/ProfileStudent";
import EditStudent from "./Routes/Mahasiswa/EditStudent";
import NotFound from "./Routes/NotFound";
import Dosen from "./Routes/Dosen/Dosen";
import AddDosen from "./Routes/Dosen/AddDosen";
import ProfileDosen from "./Routes/Dosen/ProfileDosen";
import EditDosen from "./Routes/Dosen/EditDosen";
import Login from "./Routes/Login";
import "./styles/style.css";

import { auth } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (result) => {
      if (result) {
        setIsLogin(true);
        return;
      }
      setIsLogin(false);
    });
  }, []);

  return (
    <>
      {isLogin ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />

          <Route path="/student/add" element={<AddStudent />} />
          <Route path="/student/profile/:id" element={<ProfileStudent />} />
          <Route path="/student/edit/:id" element={<EditStudent />} />

          <Route path="/dosen" element={<Dosen />} />
          <Route path="/dosen/add" element={<AddDosen />} />
          <Route path="/dosen/profile/:id" element={<ProfileDosen />} />
          <Route path="/dosen/edit/:id" element={<EditDosen />} />

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </> // TODO: replace this
  );
};

export default App;
