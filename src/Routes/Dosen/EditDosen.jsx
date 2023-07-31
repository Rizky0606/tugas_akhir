// TODO: answer here
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Input, Select } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { db } from "../../firebase";
import { ref, onValue, update } from "firebase/database";

const EditDosen = () => {
  // TODO: answer here
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullname: "",
    phoneNumber: "",
    gender: "",
    mataKuliah: "",
  });
  const [loading, setLoading] = useState(true);

  // fetch(`http://localhost:3001/dosen/${params.id}`)
  //   .then((res) => res.json())
  //   .then((json) => {
  //     setData(json);
  //     setLoading(false);
  //   });

  useEffect(() => {
    onValue(ref(db, `/dosen/${params.id}`), (snapshot) => {
      const data = snapshot.val();
      setData(data);
      setLoading(false);
    });
  }, []);

  const editData = (e) => {
    e.preventDefault();
    // fetch(`http://localhost:3001/dosen/${params.id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(dosen),
    // })
    //   .then(() => {
    //     setLoading(false);
    //     navigate("/dosen");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    update(ref(db, `/dosen/${params.id}`), data);
    navigate("/dosen");
  };

  const handleChangeFullname = (e) => {
    setData((prevStudent) => ({
      ...prevStudent,
      fullname: e.target.value,
    }));
  };

  const handleChangeGender = (e) => {
    setData((prevStudent) => ({
      ...prevStudent,
      gender: e.target.value,
    }));
  };

  const handleChangePhoneNumber = (e) => {
    setData((prevStudent) => ({
      ...prevStudent,
      phoneNumber: e.target.value,
    }));
  };

  const handleChangeMataKuliah = (e) => {
    setData((prevStudent) => ({
      ...prevStudent,
      mataKuliah: e.target.value,
    }));
  };

  return (
    <>
      {/* TODO: answer here */}
      <Navbar />
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div>
          <form action="">
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
              Mata Kuliah
              <Input
                type="text"
                value={data.mataKuliah}
                data-testid="phoneNumber"
                onChange={handleChangeMataKuliah}
                required
              />
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

            <Button
              mb="20px"
              colorScheme="blue"
              type="submit"
              data-testid="edit-btn"
              id="add-btn"
              onClick={editData}
            >
              Edit Dosen
            </Button>
          </form>
        </div>
      )}
      <Footer />
    </>
  );
};

export default EditDosen;
