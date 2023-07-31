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

const ProfileStudent = () => {
  const [data, setData] = useState([]);
  const [dataNilai, setDataNilai] = useState();
  const [loading, setLoading] = useState(true);
  // const [filterData, setFilterData] = useState("semester1");
  const params = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch(`http://localhost:3001/student/${params.id}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setData(json);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    onValue(ref(db, `/student/${params.id}`), (snapshot) => {
      const data = snapshot.val();
      setData(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Navbar />
      {/* <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            ml="30px"
          >
            
            <Text>Nama : {data.fullname}</Text>
            <Text>Address : {data.address}</Text>
            <Text>Birth Date : {data.birthDate}</Text>
            <Text>Gender : {data.gender}</Text>
            <Text>Phone Number : {data.phoneNumber}</Text>
            <Text>Faculty : {data.faculty}</Text>
            <Text>Program Study : {data.programStudy}</Text>
            <br />
          </Box> */}
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Text fontWeight={700} fontSize="20px" ml="30px">
            Profile Mahasiswa
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
                <Td>Alamat</Td>
                <Td>{data.address}</Td>
              </Tr>
              <Tr>
                <Td>Tanggal Lahir</Td>
                <Td>{data.birthDate}</Td>
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
                <Td>Fakultas</Td>
                <Td>{data.faculty}</Td>
              </Tr>
              <Tr>
                <Td>Program Studi</Td>
                <Td>{data.programStudy}</Td>
              </Tr>
            </Thead>
          </Table>

          {/* <Text m="20px 0 20px 20px">Semester 1</Text>
          <Table>
            <Thead>
              <Tr>
                <Th>Mata Kuliah</Th>
                <Th>Nilai</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataNilai?.map((nilai) => {
                return (
                  <>
                    <Tr key={0}>
                      <Td>Bahasa Inggris</Td>
                      <Td>{nilai.semester1[0].bahasaInggris}</Td>
                    </Tr>
                    <Tr key={1}>
                      <Td>Agama</Td>
                      <Td>{nilai.semester1[0].agama}</Td>
                    </Tr>
                    <Tr key={2}>
                      <Td>Bahasa Indonesia</Td>
                      <Td>{nilai.semester1[0].bahasaIndonesia}</Td>
                    </Tr>
                    <Tr key={3}>
                      <Td>Pancasila</Td>
                      <Td>{nilai.semester1[0].pancasila}</Td>
                    </Tr>
                    <Tr key={4}>
                      <Td>Matematika</Td>
                      <Td>{nilai.semester1[0].matematika}</Td>
                    </Tr>
                  </>
                );
              })}
            </Tbody>
          </Table>

          <Text m="20px 0 20px 20px">Semester 2</Text>
          <Table border={1}>
            <Thead>
              <Tr>
                <Th>Mata Kuliah</Th>
                <Th>Nilai</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataNilai?.map((nilai) => {
                return (
                  <>
                    <Tr key={0}>
                      <Td>Bahasa Inggris</Td>
                      <Td>{nilai.semester2[0].bahasaInggris}</Td>
                    </Tr>
                    <Tr key={1}>
                      <Td>Agama</Td>
                      <Td>{nilai.semester2[0].agama}</Td>
                    </Tr>
                    <Tr key={2}>
                      <Td>Bahasa Indonesia</Td>
                      <Td>{nilai.semester2[0].bahasaIndonesia}</Td>
                    </Tr>
                    <Tr key={3}>
                      <Td>Pancasila</Td>
                      <Td>{nilai.semester2[0].pancasila}</Td>
                    </Tr>
                    <Tr key={4}>
                      <Td>Matematika</Td>
                      <Td>{nilai.semester2[0].matematika}</Td>
                    </Tr>
                  </>
                );
              })}
            </Tbody>
          </Table>

          <Text m="20px 0 20px 20px">Semester 3</Text>
          <Table border={1}>
            <Thead>
              <Tr>
                <Th>Mata Kuliah</Th>
                <Th>Nilai</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataNilai?.map((nilai) => {
                return (
                  <>
                    <Tr key={0}>
                      <Td>Bahasa Inggris</Td>
                      <Td>{nilai.semester3[0].bahasaInggris}</Td>
                    </Tr>
                    <Tr key={1}>
                      <Td>Agama</Td>
                      <Td>{nilai.semester3[0].agama}</Td>
                    </Tr>
                    <Tr key={2}>
                      <Td>Bahasa Indonesia</Td>
                      <Td>{nilai.semester3[0].bahasaIndonesia}</Td>
                    </Tr>
                    <Tr key={3}>
                      <Td>Pancasila</Td>
                      <Td>{nilai.semester3[0].pancasila}</Td>
                    </Tr>
                    <Tr key={4}>
                      <Td>Matematika</Td>
                      <Td>{nilai.semester3[0].matematika}</Td>
                    </Tr>
                  </>
                );
              })}
            </Tbody>
          </Table> */}

          <Button
            colorScheme="blue"
            onClick={() => navigate(`/student/edit/${params.id}`)}
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

export default ProfileStudent;
