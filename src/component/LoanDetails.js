import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import { useEffect, useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

//import IconButton from "@mui/material/IconButton";
//import SvgIcon from "@mui/material/SvgIcon";
import Stack from "@mui/material/Stack";
//import axios from "axios";

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
  
} from "@mui/material";
import { postApit } from "../webservice";
//import { textAlign } from '@mui/system';
import Clogo from "./Clogo";
function LoanDetails() {
  const loanData = {
    bankName: "",
    outstandingAmt: "",
    interestRate: "",
    interestType: "",
    loanType: "",
    term: "0",
    properties: "",
    additionalSecurities: "",
    isCoborrowed: "",
  };

  const [inputField, setInputField] = useState(loanData);
  //const [coborrow, setCoborrow] = useState({ isChecked: false, radio: "" })
  const [coborrow, setCoborrow] = useState(false);



  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    let newField = { ...inputField };
    newField.isCoborrowed = coborrow;
    setInputField(newField);

    //console.log(coborrow);
  }, [coborrow]);

  // useEffect(()=>{

  //     console.log();
  //     let newField = { ...inputField}
  //     newField.interestType = 'fixed'

  //   }, []);

  const handleChange = (e) => {
    let newField = { ...inputField };
    newField[e.target.name] = e.target.value;
    setInputField(newField);

    // console.log(e.target.name + ":" + e.target.value);
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
        console.log("respo", response);
        alert("Succesfully Saved  ");
        setInputField({
          bankName: "",
          outstandingAmt: "",
          interestRate: "",
          interestType: "",
          loanType: "",
          term: "",
          properties: "",
          additionalSecurities: "",
          isCoborrowed: "",
        });
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
    } else if (inputField.interestRate > 30) {
      alert("Interest Rate inside 1%-30%");
    } else if (inputField.interestRate <= -1) {
      alert("Interest Rate inside 1%-30%");
    } else if (!inputField.interestType) {
      alert("Interest Type cannot be empty");
    } else if (!inputField.loanType) {
      alert("Loan Type cannot be empty ");
    } else if (!inputField.term) {
      alert("Term cannot be empty ");
    } else if (!inputField.properties) {
      alert("Properties cannot be empty ");
    } else if (!inputField.loanType) {
      alert("Loan Type cannot be empty ");
    } else {
      setOpen(!open);
      let inputF = inputField;
      // let coBrw = coborrow;
      e.preventDefault();
      console.log(inputF);
      //console.log("isCoborowed:" + coBrw);
      addLoan();
      //alert("Succesfully Saved  ");

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
              fontFamily: "monospace",
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
                    fontFamily: "monospace",
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
                        {/* <em>None</em> */}
                      </MenuItem>
                      <MenuItem value={"Avida Finans AB NUF"}>
                        Avida Finans AB NUF
                      </MenuItem>
                      <MenuItem value={"Bank Norweigian ASSBI"}>
                        Bank Norweigian AS
                      </MenuItem>
                      <MenuItem value={"Nordax Bank AB"}>
                        Nordax Bank AB
                      </MenuItem>
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

                <div>
                  <FormControl sx={{ m: 2, minWidth: 400 }}>
                    <InputLabel id="simple-select-autowidth-label">
                      Interest Type
                    </InputLabel>
                    <Select
                      // labelId="simple-select-autowidth-label"
                      // id="simple-select-autowidth"
                         // eslint-disable-next-line
                      name="interestType"
                      onChange={(e) => handleChange(e)}
                      value={inputField.interestType}
                      label="Intrest Type"
                    >
                      <MenuItem
                        //name=""
                        value={inputField.interestType}
                        onChange={(e) => handleChange(e)}
                      ></MenuItem>
                      <MenuItem value={"fixed"}>Fixed</MenuItem>
                      <MenuItem value={"floating"}>Floating</MenuItem>
                    </Select>
                  </FormControl>
                </div>
             
                {inputField.interestType == "fixed" ? (
                  <FormControl sx={{ m: 2, minWidth: 400 }}>
                    <TextField
                      id="outlined-basic"
                      label="Term"
                      variant="outlined"
                      type="number"
                      name="term"
                      onChange={(e) => handleChange(e)}
                      value={inputField.term}
                    />
                  </FormControl>
                ) : (
                  <></>
                )}

                <div>
                  <FormControl sx={{ m: 2, minWidth: 400 }}>
                    <InputLabel id="simple-select-autowidth-label">
                      Loan Type
                    </InputLabel>
                    <Select
                      // labelId="simple-select-autowidth-label"
                      // id="simple-select-autowidth"
                      name="loanType"
                      onChange={(e) => handleChange(e)}
                      value={inputField.loanType}
                      label="Loan Type"
                    >
                      <MenuItem
                        //name="bankName"
                        value={inputField.loanType}
                        onChange={(e) => handleChange(e)}
                      ></MenuItem>
                      <MenuItem value={"unsecured"}>Unsecured</MenuItem>
                      <MenuItem value={"mortgage"}>Mortgage</MenuItem>
                    </Select>
                  </FormControl>
                </div>

              

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

                <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
              </FormControl>
            </form>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}

export default LoanDetails;
