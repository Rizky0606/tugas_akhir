// TODO: answer here
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Select, Text } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { set, ref } from "firebase/database";
import { db } from "../../firebase";
import { uid } from "uid";

const AddDosen = () => {
  // TODO: answer here
  const [name, setName] = useState("");
  const [profile, setProfile] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [gender, setGender] = useState("Laki -Laki");
  const [mataKuliah, setMataKuliah] = useState("Bahasa Inggris");
  const navigate = useNavigate();

  const uuid = uid();

  let dosen = {
    id: uuid,
    fullname: name,
    profilePicture: profile,
    phoneNumber: phoneNumber,
    gender: gender,
    mataKuliah: mataKuliah,
  };
  const addDosen = (e) => {
    e.preventDefault();
    // fetch("https://6481574829fa1c5c50314a49.mockapi.io/dosen", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(dosen),
    // })
    //   .then(() => {
    //     navigate("/dosen");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    set(ref(db, `/dosen/${uuid}`), dosen);
    navigate("/dosen");
  };

  return (
    <>
      {/* TODO: answer here */}
      <Navbar />
      <Text fontWeight={700} fontSize="20px" ml="30px">
        Tambah Dosen
      </Text>
      <form action="" id="form-student">
        <label>
          Nama Lengkap
          <Input
            type="text"
            data-testid="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Foto Profil
          <Input
            type="text"
            data-testid="profilePicture"
            onChange={(e) => setProfile(e.target.value)}
            required
          />
        </label>

        <label>
          Nomor Telepon
          <Input
            type="text"
            data-testid="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>

        <label>
          Jenis Kelamin
          <Select
            id="input-gender"
            data-testid="gender"
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="Laki - Laki">Laki - Laki</option>
            <option value="Perempuan">Perempuan</option>
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
          Tambah Dosen
        </Button>
      </form>
      <Footer />
    </>
  );
};

export default AddDosen;
