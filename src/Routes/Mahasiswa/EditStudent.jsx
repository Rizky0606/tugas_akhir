// TODO: answer here
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Input, Select, Text } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { db } from "../../firebase";
import { ref, onValue, update } from "firebase/database";

const EditStudent = () => {
  // TODO: answer here
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullname: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    programStudy: "",
    faculty: "",
  });
  const [loading, setLoading] = useState(true);
  // const [name, setName] = useState("");
  // const [address, setAddress] = useState();
  // const [phoneNumber, setPhoneNumber] = useState();
  // const [date, setDate] = useState();
  // const [gender, setGender] = useState("Male");
  // const [prody, setPrody] = useState("Ekonomi");
  // let faculty = "";

  // if (
  //   programStudy === "Ekonomi" ||
  //   programStudy === "Manajemen" ||
  //   programStudy === "Akuntansi"
  // ) {
  //   faculty = "Fakultas Ekonomi";
  // } else if (
  //   programStudy === "Administrasi Publik" ||
  //   programStudy === "Administrasi Bisnis" ||
  //   programStudy === "Hubungan Internasional"
  // ) {
  //   faculty = "Fakultas Ilmu Sosial dan Politik";
  // } else if (programStudy === "Teknik Sipil" || programStudy === "Arsitektur") {
  //   faculty = "Fakultas Teknik";
  // } else {
  //   faculty = "Fakultas Teknologi Informasi dan Sains";
  // }

  const handleChangeFullname = (e) => {
    setData((prevStudent) => ({
      ...prevStudent,
      fullname: e.target.value,
    }));
  };

  const handleChangeAddress = (e) => {
    setData((prevStudent) => ({
      ...prevStudent,
      address: e.target.value,
    }));
  };

  const handleChangePhoneNumber = (e) => {
    setData((prevStudent) => ({
      ...prevStudent,
      phoneNumber: e.target.value,
    }));
  };

  const handleChangeBirthDate = (e) => {
    setData((prevStudent) => ({
      ...prevStudent,
      birthDate: e.target.value,
    }));
  };

  const handleChangeGender = (e) => {
    setData((prevStudent) => ({
      ...prevStudent,
      gender: e.target.value,
    }));
  };

  const handleChangeProgramStudy = (e) => {
    setData((prevStudent) => ({
      ...prevStudent,
      programStudy: e.target.value,
    }));
  };

  const handleChangeFaculty = (e) => {
    setData((prevStudent) => ({
      ...prevStudent,
      faculty: e.target.value,
    }));
  };

  useEffect(() => {
    // fetch(`http://localhost:3001/student/${params.id}`)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setData(json);
    //     setLoading(false);
    //   });

    onValue(ref(db, `/student/${params.id}`), (snapshot) => {
      const data = snapshot.val();
      setData(data);
      setLoading(false);
    });
  }, []);

  const editData = (e) => {
    e.preventDefault();
    // fetch(`http://localhost:3001/student/${params.id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(() => {
    //     setLoading(false);
    //     navigate("/student");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    update(ref(db, `/student/${params.id}`), data);
    navigate("/student");
  };

  return (
    <>
      {/* TODO: answer here */}
      <Navbar />
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className="edit-student">
          <Text fontWeight={700} fontSize="20px" ml="30px">
            Edit Mahasiswa
          </Text>
          <form action="" id="form-student">
            <label>
              Nama Lengkap
              <Input
                type="text"
                data-testid="name"
                value={data.fullname}
                onChange={handleChangeFullname}
                required
              />
            </label>
            <label>
              Alamat
              <Input
                type="text"
                value={data.address}
                data-testid="address"
                onChange={handleChangeAddress}
                required
              />
            </label>
            <label>
              Nomor Telepon
              <Input
                type="text"
                value={data.phoneNumber}
                data-testid="phoneNumber"
                onChange={handleChangePhoneNumber}
                required
              />
            </label>
            <label>
              Tanggal Lahir
              <Input
                type="date"
                value={data.birthDate}
                data-testid="date"
                onChange={handleChangeBirthDate}
                required
              />
              <br />
            </label>

            <label>
              Jenis Kelamin
              <Select
                id="input-gender"
                value={data.gender}
                data-testid="gender"
                onChange={handleChangeGender}
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
                value={data.programStudy}
                data-testid="prody"
                onChange={handleChangeProgramStudy}
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
              mb="20px"
              colorScheme="blue"
              type="submit"
              data-testid="edit-btn"
              value="Edit student"
              id="add-btn"
              onClick={editData}
            >
              Edit Mahasiswa
            </Button>
          </form>
        </div>
      )}
      <Footer />
    </>
  );
};

export default EditStudent;
