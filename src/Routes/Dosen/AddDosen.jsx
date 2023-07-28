// TODO: answer here
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Select } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AddDosen = () => {
  // TODO: answer here
  const [name, setName] = useState("");
  const [profile, setProfile] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [gender, setGender] = useState("Male");
  const [mataKuliah, setMataKuliah] = useState("Bahasa Inggris");
  const navigate = useNavigate();

  let dosen = {
    fullname: name,
    profilePicture: profile,
    phoneNumber: phoneNumber,
    gender: gender,
    mataKuliah: mataKuliah,
  };
  const addDosen = (e) => {
    e.preventDefault();
    fetch("https://6481574829fa1c5c50314a49.mockapi.io/dosen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dosen),
    })
      .then(() => {
        navigate("/dosen");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* TODO: answer here */}
      <Navbar />
      <h1>Add Dosen</h1>
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
          Phone Number
          <Input
            type="text"
            data-testid="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
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
          Mata Kuliah
          <Select
            id="input-matkul"
            onChange={(e) => setMataKuliah(e.target.value)}
            required
          >
            <option value="Bahasa Inggris">Bahasa Inggris</option>
            <option value="Pancasila">Pancasila</option>
            <option value="Matematika">Matematika</option>
            <option value="Bahasa Indonesia">Bahasa Indonesia</option>
            <option value="Agama">Agama</option>
            <option value="Penulisan Ilmiah">Penulisan Ilmiah</option>
            <option value="Akhlak dan Etika">Akhlak dan Etika</option>
            <option value="Aplikasi Kewirausahaan">
              Aplikasi Kewirausahaan
            </option>
          </Select>
        </label>
        <br />
        <Button
          colorScheme="blue"
          type="submit"
          data-testid="add-btn"
          id="add-btn"
          onClick={addDosen}
        >
          Add Dosen
        </Button>
      </form>
      <Footer />
    </>
  );
};

export default AddDosen;
