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
} from "@chakra-ui/react";

const ProfileStudent = () => {
  const [data, setData] = useState();
  const [dataNilai, setDataNilai] = useState();
  const [loading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState("semester1");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://6481574829fa1c5c50314a49.mockapi.io/student/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch(`https://6481574829fa1c5c50314a49.mockapi.io/student/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setDataNilai(json.nilai);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Navbar />
          <h1>Nama : {data.fullname}</h1>
          <h1>Address : {data.address}</h1>
          <h1>Birth Date : {data.birthDate}</h1>
          <h1>Gender : {data.gender}</h1>
          <h1>Phone Number : {data.phoneNumber}</h1>
          <h1>Faculty : {data.faculty}</h1>
          <h1>Program Study : {data.programStudy}</h1>
          <br />

          <Text m="20px 0 20px 20px">Semester 1</Text>
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
          </Table>

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
