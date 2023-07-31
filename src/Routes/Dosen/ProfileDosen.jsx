import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
} from "@chakra-ui/react";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";

const ProfileDosen = () => {
  const [data, setData] = useState([]);
  const [dataNilai, setDataNilai] = useState();
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    onValue(ref(db, `/dosen/${params.id}`), (snapshot) => {
      const data = snapshot.val();
      setData(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Text fontWeight={700} fontSize="20px" ml="30px">
            Profil Dosen
          </Text>
          <img
            style={{ borderRadius: "50%", boxSize: "150px", margin: "auto" }}
            src={data.profilePicture}
            alt={data.fullname}
          />
          <Table>
            <Thead>
              <Tr>
                <Td>Nama Lengkap</Td>
                <Td>{data.fullname}</Td>
              </Tr>
              <Tr>
                <Td>Jenis Kelamin</Td>
                <Td>{data.gender}</Td>
              </Tr>
              <Tr>
                <Td>Nomor Telepon</Td>
                <Td>{data.phoneNumber}</Td>
              </Tr>
              <Tr>
                <Td>Mata Kuliah</Td>
                <Td>{data.mataKuliah}</Td>
              </Tr>
            </Thead>
          </Table>
          <Button
            colorScheme="blue"
            onClick={() => navigate(`/dosen/edit/${params.id}`)}
            m="20px 0 20px 20px"
          >
            Edit Data
          </Button>
        </>
      )}
      <Footer />
    </>
  );
};

export default ProfileDosen;
