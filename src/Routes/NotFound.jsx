// TODO: answer here
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* TODO: answer here */}
        <h1 style={{ fontSize: "30px" }}>404 | Not Found</h1>
        <Button
          mb="20px"
          mt="20px"
          colorScheme="blue"
          data-testid="back"
          onClick={() => navigate(-1)}
        >
          Take Me Back
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
