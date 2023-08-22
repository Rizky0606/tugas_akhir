// TODO: answer here
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
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

const Student = () => {
  // TODO: answer here
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState("Semua");

  const navigate = useNavigate();

  const loadPage = async () => {
    // const response = await fetch(" http://localhost:3001/student");
    // const json = await response.json();
    // setData(json);
    // setLoading(false);
    onValue(ref(db, "/student"), (snapshot) => {
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
    // fetch(` http://localhost:3001/student/${id}`, {
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
        remove(ref(db, `/student/${id}`));
        Swal.fire("Deleted!", "Student has been deleted.", "success");
      }
    });
  };

  const handleChangeFaculty = (e) => {
    setFilterData(e.target.value);
  };

  const filteredData = data?.filter((item) =>
    item.faculty.includes(filterData)
  );

  return (
    <>
      {/* TODO: answer here */}
      <Navbar />
      <div className="head-student">
        <Text fontWeight={700} fontSize="20px" ml="30px">
          Mahasiswa
        </Text>

        <Select
          w="50%"
          display="block"
          align="right"
          variant="filled"
          data-testid="filter"
          onChange={handleChangeFaculty}
          value={filterData}
        >
          <option value="Semua">Semua</option>
          <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
          <option value="Fakultas Ilmu Sosial dan Politik">
            Fakultas Ilmu Sosial dan Politik
          </option>
          <option value="Fakultas Teknik">Fakultas Teknik</option>
          <option value="Fakultas Teknologi Informasi dan Sains">
            Fakultas Teknologi Informasi dan Sains
          </option>
        </Select>
      </div>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <TableContainer>
          <Table variant="simple" id="table-student">
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>Nama Lengkap</Th>
                <Th>Fakultas</Th>
                <Th>Program Studi</Th>
                <Th>Aksi</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filterData === "Semua"
                ? data?.map((datas, index) => {
                    return (
                      <Tr key={index} className="student-data-row">
                        <Td>{index + 1}</Td>
                        <Td>
                          <Link to={`/student/profile/${datas.id}`}>
                            {datas.fullname}
                          </Link>
                        </Td>
                        <Td>{datas.faculty}</Td>
                        <Td>{datas.programStudy}</Td>
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
                  })
                : filteredData.map((datas, index) => {
                    return (
                      <tr key={index} className="student-data-row">
                        <Td>{index + 1}</Td>
                        <Td>
                          <Link to={`/student/profile/${datas.id}`}>
                            {datas.fullname}
                          </Link>
                        </Td>
                        <Td>{datas.faculty}</Td>
                        <Td>{datas.programStudy}</Td>
                        <Td>
                          <Button
                            type="button"
                            colorScheme="red"
                            className="delete-btn"
                            data-testid={`delete-${datas.id}`}
                            onClick={() => handleCLickDeleteButton(datas.id)}
                          >
                            Hapus
                          </Button>
                        </Td>
                      </tr>
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

export default Student;
