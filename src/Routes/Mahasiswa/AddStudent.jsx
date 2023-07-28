// TODO: answer here
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Select } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AddStudent = () => {
  // TODO: answer here
  const [name, setName] = useState("");
  const [profile, setProfile] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [date, setDate] = useState();
  const [gender, setGender] = useState("Male");
  const [prody, setPrody] = useState("Ekonomi");
  const navigate = useNavigate();

  let faculty = "";
  if (prody === "Ekonomi" || prody === "Manajemen" || prody === "Akuntansi") {
    faculty = "Fakultas Ekonomi";
  } else if (
    prody === "Administrasi Publik" ||
    prody === "Administrasi Bisnis" ||
    prody === "Hubungan Internasional"
  ) {
    faculty = "Fakultas Ilmu Sosial dan Politik";
  } else if (prody === "Teknik Sipil" || prody === "Arsitektur") {
    faculty = "Fakultas Teknik";
  } else {
    faculty = "Fakultas Teknologi Informasi dan Sains";
  }

  let student = {
    fullname: name,
    profilePicture: profile,
    address: address,
    phoneNumber: phoneNumber,
    birthDate: date,
    gender: gender,
    faculty: faculty,
    programStudy: prody,
  };
  const addStudent = (e) => {
    e.preventDefault();
    fetch("https://6481574829fa1c5c50314a49.mockapi.io/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then(() => {
        navigate("/student");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* TODO: answer here */}
      <Navbar />
      <h1>Add Student</h1>
      <form action="" id="form-student">
        <label>
          Fullname
          <Input
            type="text"
            data-testid="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Profile Picture
          <Input
            type="text"
            data-testid="profilePicture"
            onChange={(e) => setProfile(e.target.value)}
            required
          />
        </label>
        <label>
          Address
          <Input
            type="text"
            data-testid="address"
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Phone Number
          <Input
            type="text"
            data-testid="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Birth Date
          <Input
            type="date"
            data-testid="date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <br />
        </label>

        <label>
          Gender
          <Select
            id="input-gender"
            data-testid="gender"
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
          <br />
        </label>

        <label>
          Program Study
          <Select
            id="input-prody"
            data-testid="prody"
            onChange={(e) => setPrody(e.target.value)}
            required
          >
            <option value="Ekonomi">Ekonomi</option>
            <option value="Manajemen">Manajemen</option>
            <option value="Akuntansi">Akuntansi</option>
            <option value="Administrasi Publik">Administrasi Publik</option>
            <option value="Administrasi Bisnis">Administrasi Bisnis</option>
            <option value="Hubungan Internasional">
              Hubungan Internasional
            </option>
            <option value="Teknik Sipil">Teknik Sipil</option>
            <option value="Arsitektur">Arsitektur</option>
            <option value="Matematika">Matematika</option>
            <option value="Fisika">Fisika</option>
            <option value="Informatika">Informatika</option>
          </Select>
        </label>
        <br />
        <Button
          colorScheme="blue"
          type="submit"
          data-testid="add-btn"
          value="Add student"
          id="add-btn"
          onClick={addStudent}
        >
          Add student
        </Button>
      </form>
      <Footer />
    </>
  );
};

export default AddStudent;
