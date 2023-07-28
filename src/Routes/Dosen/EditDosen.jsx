// TODO: answer here
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Input, Select } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const EditDosen = () => {
  // TODO: answer here
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [mataKuliah, setMataKuliah] = useState();
  const [gender, setGender] = useState("Male");

  let dosen = {
    fullname: name,
    phoneNumber: phoneNumber,
    gender: gender,
    mataKuliah: mataKuliah,
  };

  fetch(`http://localhost:3001/dosen/${params.id}`)
    .then((res) => res.json())
    .then((json) => {
      setData(json);
      setLoading(false);
    });

  const editData = () => {
    fetch(`http://localhost:3001/dosen/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dosen),
    })
      .then(() => {
        setLoading(false);
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
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div>
          <img
            style={{ borderRadius: "50%", boxSize: "150px", margin: "auto" }}
            src={data.profilePicture}
            alt={data.fullname}
          />
          <form action="">
            <label>
              Fullname
              <Input
                type="text"
                data-testid="name"
                value={data.fullname}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Phone Number
              <Input
                type="text"
                value={data.phoneNumber}
                data-testid="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </label>
            <label>
              Mata Kuliah
              <Input
                type="text"
                value={data.mataKuliah}
                data-testid="phoneNumber"
                onChange={(e) => setMataKuliah(e.target.value)}
                required
              />
            </label>

            <label>
              Gender
              <Select
                id="input-gender"
                value={data.gender}
                data-testid="gender"
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
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
