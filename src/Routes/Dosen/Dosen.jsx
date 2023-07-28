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
} from "@chakra-ui/react";

const Dosen = () => {
  // TODO: answer here
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loadPage = async () => {
    const response = await fetch("http://localhost:3001/dosen");
    const json = await response.json();
    setData(json);
    setLoading(false);
  };

  useEffect(() => {
    loadPage();
  }, []);

  const handleCLickDeleteButton = (id) => {
    fetch(`http://localhost:3001/dosen/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        loadPage();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* TODO: answer here */}
      <Navbar />
      <div>
        <h2>All Dosen</h2>
      </div>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <TableContainer>
          <Table variant="simple" id="table-student">
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>Full Name</Th>
                <Th>Mata Kuliah</Th>
                <Th>Phone Number</Th>
                <Th>Option</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((datas) => {
                return (
                  <Tr key={datas.id} className="student-data-row">
                    <Td>{datas.id}</Td>
                    <Td>
                      <Link to={`/dosen/${datas.id}`}>{datas.fullname}</Link>
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
                        Delete
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
