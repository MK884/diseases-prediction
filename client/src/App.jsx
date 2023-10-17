import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Box, Button, Container, Typography } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


function App() {
  const dropImage = () => {
    document.querySelector(".input-field").click();
  };
  const [image, setImage] = React.useState(null);
  const [filename, setFileName] = React.useState("No file Selected");
  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <Typography fontWeight={700} fontSize={26}>
          Upload Your Skin Photo
        </Typography>
        <Box
          component={"form"}
          onClick={() => dropImage()}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "2px dashed #1475cf",
            height: "30rem",
            width: "100%",
            borderRadius: "8px",
            cursor: "pointer",
            userSelect:'none',
            flexDirection: "column",
          }}
        >
          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            multiple='true'
            onChange={({ target:{ files  }}) =>{
              files[0] && setFileName(files[0].name)
              if(files){
                setImage(URL.createObjectURL(files[0]))
              }
            }
          
          }
          ></input>
          <CloudUploadIcon sx={{
            color:'#1475cf',
            fontSize:'8rem',
          }}/>
          <Typography>Click here to Upload Browse Media </Typography>

        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection:'column',
          alignItems: 'center',
          justifyContent: 'center',
          width:'100%',
        }}>{image && <>
          <img src={image} width={200} height={200} />
          <Typography>{filename}</Typography>
          <Button fontWeight={700} color='success'  variant="contained" fullWidth sx={{
            margin:'20px'
          }}>Get Your Result</Button>
        </>}</Box>
        
      </Container>
    </>
  );
}

export default App;
