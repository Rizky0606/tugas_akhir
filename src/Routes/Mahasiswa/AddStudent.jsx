// TODO: answer here
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Select, Text } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { set, ref } from "firebase/database";
import { db } from "../../firebase";
import { uid } from "uid";

const AddStudent = () => {
  // TODO: answer here
  const [name, setName] = useState("");
  const [profile, setProfile] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [date, setDate] = useState();
  const [gender, setGender] = useState("Laki - Laki");
  const [prody, setPrody] = useState("Ekonomi");
  const navigate = useNavigate();

  const uuid = uid();

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
    id: uuid,
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
    // fetch("http://localhost:3001/student", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(student),
    // })
    //   .then(() => {
    //     navigate("/student");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    set(ref(db, `/student/${uuid}`), student);
    navigate("/student");
  };

  return (
    <>
      {/* TODO: answer here */}
      <Navbar />
      <Text fontWeight={700} fontSize="20px" ml="30px">
        Tambah Mahasiswa
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
          Alamat
          <Input
            type="text"
            data-testid="address"
            onChange={(e) => setAddress(e.target.value)}
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
          Tanggal Lahir
          <Input
            type="date"
            data-testid="date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <br />
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
          Program Studi
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
          Tambah Mahasiswa
        </Button>
      </form>
      <Footer />
    </>
  );
};

export default AddStudent;
