import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import Stack from "@mui/material/Stack";
import axios from 'axios';

//import FormInputs from './component/FormInputs';
import {
  Select,
  Button,
  TextField,
  FormControl,
  Checkbox,
  InputLabel,
  MenuItem,
  FormControlLabel,
  Avatar,
} from "@mui/material";
import { postApit } from "./webservice";
//import { textAlign } from '@mui/system';
import Clogo from "./component/Clogo";

function App() {
  const loanData = {
    bankName: "",
    outstandingAmt: "",
    interestRate: "",
    interestType: "",
    loanType: "",
    term: "",
    properties: "",
    additionalSecurities: "",
    isCoborrowed: "",
  };

  const [inputField, setInputField] = useState(loanData);
  //const [coborrow, setCoborrow] = useState({ isChecked: false, radio: "" })
  const [coborrow, setCoborrow] = useState(false);

  useEffect(() => {
    let newField = { ...inputField };
    newField.isCoborrowed = coborrow;
    setInputField(newField);

    console.log(coborrow);
  }, [coborrow]);

  const handleChange = (e) => {
    let newField = { ...inputField };
    newField[e.target.name] = e.target.value;
    setInputField(newField);

    console.log(e.target.name + ":" + e.target.value);
  };

  const handleCheckBox = (e) => {
    e.preventDefault();
    setCoborrow(e.target.checked);
  };

 

  async function addLoan() {
    // let clinsjToken = await AsyncStorage.getItem('clinsjToken');
    //let userId = await AsyncStorage.getItem('userId');
    // setspinnervisible(true);
    // let data = {
    //   bankName: choosebank,
    //   outstandingAmt: parseFloat(amount),
    //   interestRate: parseFloat(interest.replace('%', '')),
    //   interestType: isFixed ? 'fixed' : 'floating',
    //   loanType: 'unsecured',
    //   term: isFixed ? slidervalue.toString() + 'Y' : '0Y',
    //   isCoborrowed: false,
    // };
    // let header = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: 'Bearer ' + clinsjToken,
    //   },
    // };
   

    await postApit("/loan", inputField)
      .then((response) => {
        //navigation.navigate('IncomeInformationScreen');
      })
      .catch((error) => {
        //navigation.navigate('LoginScreen',{errorFlag:true});
        console.log(error);
      });
  }

  const handleSubmit = (e) => {
    if (!inputField.bankName) {
      alert("Bank Name cannot be empty");
    } else if (!inputField.outstandingAmt) {
      alert("Outstanding Amount cannot be empty");
    } else if (!inputField.interestRate) {
      alert("Interest Rate cannot be empty");
    } else if (!inputField.interestType) {
      alert("Interest Type cannot be empty");
    } else if (!inputField.loanType) {
      alert("Loan Type cannot be empty ");
    } else if (!inputField.term) {
        alert("Term cannot be empty ");
      }
      else if (!inputField.properties) {
        alert("Properties cannot be empty ");
      }
      else if (!inputField.loanType) {
        alert("Loan Type cannot be empty ");
      }
     else {


    let inputF = inputField;
   // let coBrw = coborrow;
    e.preventDefault();
    console.log(inputF);
    //console.log("isCoborowed:" + coBrw);
    addLoan()
    alert("Succesfully Saved  ");

    console.log("loans :" + inputField.loanData);
    }
  };

  return (
    <>
      <React.Fragment>
        <CssBaseline />

        <Container maxWidth="md">
          <Box
            sx={{
              padding: 5,
              display: "flex",
              marginTop: 5,
              boxShadow: 10,
              borderRadius: 5,
              width: 800,
              justifyContent: "center",
              marginBottom: 5,
              fontfamily: "Poppins",
              fontweight: 400,
            }}
          >
            <form>
              <FormControl>
                <FormControl
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between ",
                  }}
                >
                  <h1>Loan Details</h1>
                  <Stack direction="row" spacing={2}>
                             <Clogo />

                  </Stack>
                </FormControl>
                <div>
                  <FormControl sx={{ m: 2, minWidth: 400 }}>
                    <InputLabel id="simple-select-autowidth-label">
                      Bank Name
                    </InputLabel>
                    <Select
                      // labelId="simple-select-autowidth-label"
                      // id="simple-select-autowidth"
                      name="bankName"
                      onChange={(e) => handleChange(e)}
                      value={inputField.bankName}
                      label="Bank-Name"
                    >
                      <MenuItem
                        //name="bankName"
                        value={inputField.bankName}
                        onChange={(e) => handleChange(e)}
                      >
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Bank One"}>Bank One</MenuItem>
                      <MenuItem value={"Bank Two"}>Bank Two</MenuItem>
                      <MenuItem value={"Bank Three"}>Bank Three</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <FormControl sx={{ m: 2, minWidth: 400 }}>
                  <TextField
                    type="number"
                    id="outlined-basic"
                    label="Outstanding Amount"
                    variant="outlined"
                    name="outstandingAmt"
                    onChange={(e) => handleChange(e)}
                    value={inputField.outstandingAmt}
                  />
                </FormControl>

                <FormControl sx={{ m: 2, minWidth: 400 }}>
                  <TextField
                    type="number"
                    id="outlined-basic"
                    label="Interest Rate "
                    variant="outlined"
                    onChange={(e) => handleChange(e)}
                    name="interestRate"
                    value={inputField.interestRate}
                  />
                </FormControl>

                <FormControl sx={{ m: 2, minWidth: 400 }}>
                  <TextField
                    id="outlined-basic"
                    label="Interest Type"
                    name="interestType"
                    variant="outlined"
                    onChange={(e) => handleChange(e)}
                    value={inputField.interestType}
                  />
                </FormControl>

                <FormControl sx={{ m: 2, minWidth: 400 }}>
                  <TextField
                    id="outlined-basic"
                    label="Loan Type"
                    variant="outlined"
                    name="loanType"
                    onChange={(e) => handleChange(e)}
                    value={inputField.loanType}
                  />
                </FormControl>

                <FormControl sx={{ m: 2, minWidth: 400 }}>
                  <TextField
                    id="outlined-basic"
                    label="Term"
                    variant="outlined"
                    name="term"
                    onChange={(e) => handleChange(e)}
                    value={inputField.term}
                  />
                </FormControl>

                <FormControl sx={{ m: 2, minWidth: 400 }}>
                  <TextField
                    id="outlined-basic"
                    label="Properties"
                    variant="outlined"
                    name="properties"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    value={inputField.properties}
                  />
                </FormControl>

                <FormControl sx={{ m: 2, minWidth: 400 }}>
                  <TextField
                    id="outlined-basic"
                    label="Additional Securities"
                    variant="outlined"
                    name="additionalSecurities"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    value={inputField.additionalSecurities}
                  />
                </FormControl>

                <FormControlLabel
                  sx={{ m: 2, minWidth: 400 }}
                  control={<Checkbox checked={coborrow} />}
                  label="is Coborrowed ?"
                  labelPlacement="is Coborrowed or not?"
                  onChange={(e) => {
                    handleCheckBox(e);
                  }}
                />

                <Button
                  sx={{
                    m: 1,
                    minWidth: 200,
                    marginBottom: 5,
                    lineheight: 28,
                    background: "#505868",
                  }}
                  variant="contained"
                  onClick={handleSubmit}
                >
                  SAVE
                </Button>
              </FormControl>
            </form>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}

export default App;
