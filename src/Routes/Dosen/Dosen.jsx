// TODO: answer here
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import {
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Text,
} from "@chakra-ui/react";
import Swal from "sweetalert2";
import { db } from "../../firebase";
import { ref, onValue, remove } from "firebase/database";

const Dosen = () => {
  // TODO: answer here
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loadPage = async () => {
    // const response = await fetch("http://localhost:3001/dosen");
    // const json = await response.json();
    // setData(json);
    // setLoading(false);

    onValue(ref(db, "/dosen"), (snapshot) => {
      setData([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((datas) => {
          setData((oldArray) => [...oldArray, datas]);
          setLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    loadPage();
  }, []);

  const handleCLickDeleteButton = (id) => {
    // fetch(`http://localhost:3001/dosen/${id}`, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then(() => {
    //     loadPage();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        remove(ref(db, `/dosen/${id}`));
        Swal.fire("Deleted!", "Dosen has been deleted.", "success");
      }
    });
  };

  return (
    <>
      {/* TODO: answer here */}
      <Navbar />
      <Text fontWeight={700} fontSize="20px" ml="30px">
        Dosen
      </Text>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <TableContainer>
          <Table variant="simple" id="table-student">
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>Nama Lengkap</Th>
                <Th>Mata Kuliah</Th>
                <Th>Nomor Telepon</Th>
                <Th>Aksi</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((datas, index) => {
                return (
                  <Tr key={index} className="student-data-row">
                    <Td>{index + 1}</Td>
                    <Td>
                      <Link to={`/dosen/profile/${datas.id}`}>
                        {datas.fullname}
                      </Link>
                    </Td>
                    <Td>{datas.mataKuliah}</Td>
                    <Td>{datas.phoneNumber}</Td>
                    <Td>
                      <Button
                        colorScheme="red"
                        type="button"
                        className="delete-btn"
                        data-testid={`delete-${datas.id}`}
                        onClick={() => {
                          handleCLickDeleteButton(datas.id);
                        }}
                      >
                        Hapus
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      )}
      <Footer />
    </>
  );
};

export default Dosen;
