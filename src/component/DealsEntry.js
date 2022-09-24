import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";

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

import Container from "@mui/material/Container";

import OutlinedInput from "@mui/material/OutlinedInput";
import { postApit } from "../webservice";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Clogo from "./Clogo";
import { style } from "@mui/system";
import "../App.css"

function DealsEntry() {
  const [form, setForm] = useState({
    bankName: "",
    date: "",
    date1: "",
    timeStamp: "",
    source: "",
    productName: "",
    lendingArea: "",
    membershipRequirements: "",

    fixedTerm: "",

    nom: "",
    minLtv: "",
    minReplay: "",
    maxAge: "",
    maxDuration: "",
    establish: "",
    establishFee: "",
    monthlyFee: "",
    availabiltiyFeeMonth: "",

    productBundle: "",
    restriction: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;

    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  };
  const showData = () => {
    // console.log("form:", form);
    addLoan();
  };

  async function addLoan() {
   
    {/* let clinsjToken = await AsyncStorage.getItem('clinsjToken');
  let userId = await AsyncStorage.getItem('userId');
  setspinnervisible(true);
  let data = {
    bankName: choosebank,
    outstandingAmt: parseFloat(amount),
    interestRate: parseFloat(interest.replace('%', '')),
    interestType: isFixed ? 'fixed' : 'floating',
    loanType: 'unsecured',
    term: isFixed ? slidervalue.toString() + 'Y' : '0Y',
    isCoborrowed: false,
  };
  let header = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + clinsjToken,
    },
  };*/}

    await postApit("/deal", form)
      .then((response) => {
        setForm({
          bankName: "",
          validTo: "",
          validFrom: "",
          timeStamp: "",
          source: "",
          productName: "",
          lendingArea: "",
          membershipRequirements: "",

          fixedTerm: "",

          nom: "",
          minLtv: "",
          minReplay: "",
          maxAge: "",
          maxDuration: "",
          establish: "",
          establishFee: "",
          monthlyFee: "",
          availabiltiyFeeMonth: "",

          productBundle: "",
          restriction: "",
        });
        console.log("set", response);
        alert("Succesfully Saved");
        //navigation.navigate('IncomeInformationScreen');
      })
      .catch((error) => {
        //navigation.navigate('LoginScreen',{errorFlag:true});
        console.log("error", error);
      });
  }

  const onSubmit = (e) => {
    e.preventDefault();
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
              width: 900,
              justifyContent: "center",
              marginBottom: 5,
              fontFamily: "monospace",
              fontweight: 400,
            }}
          >
            <form onSubmit={onSubmit}>
              <label>
                <h1>Manual Deal Capture</h1>
              </label>
              <label>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    width: 800,
                    maxWidth: "100%",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <FormControl sx={{ m: 1, width: 400 }}>
                    <InputLabel id="simple-select-autowidth-label">
                      Bankname
                    </InputLabel>
                    <Select
                      labelId="simple-select-autowidth-label"
                      id="simple-select-autowidth-label"
                      value1={form}
                      onChange={onChange}
                      name="bankName"
                      value={form.bankName}
                      input={<OutlinedInput label="Name" />}
                    >
                      <option aria-label="none" value="Fixed term" />
                      <option value={"Bank of America"}>Bank of America</option>
                      <option value={"Asian Development Bank"}>
                        Asian Development Bank
                      </option>
                      <option value={"Bank for International Settlements"}>
                        Bank for International Settlements
                      </option>
                    </Select>
                  </FormControl>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "right",
                      width: 200,
                      maxWidth: "100%",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Clogo />
                  </Box>
                </Box>
              </label>

              <label>
                <br />
                <br />
                Deal Validity
              </label>

              <label>
                <br />
                <br />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: 600,
                    maxWidth: "100%",
                    // "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    fullWidth
                    focused 
                    id="outlined-uncontrolled"
                    label="Valid from date"
                    type="date"
                    onChange={onChange}
                    name="validFrom"
                    value={form.validFrom}
                    p
                  />
                  <TextField
                    fullWidth
                    focused 
                    id="outlined-uncontrolled"
                    label="Valid to date"
                    type="date"
                    onChange={onChange}
                    name="validTo"
                    value={form.validTo}
                    p
                  />
                  &nbsp;&nbsp;&nbsp; &nbsp;
                  <Box
                    sx={{
                      display: "flex",

                      width: 600,
                      maxWidth: "100%",
                      "&&> :not(style)": { m: 50 },
                    }}
                  ></Box>
                  <TextField
                  focused 
                    id="outlined-uncontrolled"
                    fullWidth
                    label="Timestamp"
                    type="time"
                    onChange={onChange}
                    name="timeStamp"
                    value={form.timeStamp}
                    p
                  />
                </Box>
              </label>

              <label>
                <br />
                <br />
                Deal Info
              </label>
              <label>
                <br />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: 800,
                    maxWidth: "100%",
                    "& > :not(style)": { m: 3 },
                  }}
                >
                  <TextField
                    fullWidth
                    label="Source"
                    onChange={onChange}
                    name="source"
                    value={form.source}
                    p
                  />

                  <TextField
                    fullWidth
                    label="ProductName"
                    onChange={onChange}
                    name="productName"
                    value={form.productName}
                    p
                  />
                </Box>
              </label>
              <label>
                <br />

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: 600,
                    maxWidth: "100%",
                    "& > :not(style)": { m: 3 },
                  }}
                >
                  <TextField
                    fullWidth
                    label="Lending Area(s)"
                    onChange={onChange}
                    name="lendingArea"
                    value={form.lendingArea}
                    p
                  />

  
                  <FormControl sx={{ m: 2, minWidth: 400 }}>
                    <InputLabel id=" outlined-basic">
                      Membership Requirements                    
                      </InputLabel>
                    <Select
                       labelId="simple-select-autowidth-label"
                      // id="simple-select-autowidth"
                      name="membershipRequirements"
                      onChange={(e) => onChange(e)}
                      value={form.membershipRequirements}
                      label="membershipRequirements"
                    >
                      <MenuItem
                        //name="bankName"
                        value={form.membershipRequirements}
                        onChange={(e) => onChange(e)}
                      >
                        {/* <em>None</em> */}
                      </MenuItem>
                      <MenuItem value={"Credit Institutions"}>Credit Institutions</MenuItem>
                      <MenuItem value={"Insurance Company"}>Insurance Company</MenuItem>
                      <MenuItem value={"Credit rating agencies"}>Credit rating agencies</MenuItem>
                    </Select>
                  </FormControl>
                

                  {/* <FormControl sx={{ m: 2, width: 400 }}>
                    <InputLabel id="simple-select-autowidth-label">
                      MembershipRequirements
                    </InputLabel>
                    <Select
                      labelId="simple-select-autowidth-label"
                      id="simple-select-autowidth-label"
                      onChange={onChange}
                      name="membershipRequirements"
                      value={form.membershipRequirements}
                      input={<OutlinedInput label="Name" />}
                    >
                      <option aria-label="none" value="Fixed term" />
                      <option value={"Credit Institutions"}>
                        Credit Institutions
                      </option>
                      <option value={"Insurance Company"}>
                        Insurance Company
                      </option>
                      <option value={"Credit rating agencies"}>
                        Credit rating agencies
                      </option>
                    </Select>
                  </FormControl> */}
                </Box> 
              </label>

              <label>
                <br />
                <br />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: 800,
                    maxWidth: "100%",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <Button variant="contained" color="error">
                    Floating
                  </Button>
                  <FormControl sx={{ m: 1, width: 400 }}>
                    <InputLabel id="demo-simple-select-label">
                      Fixed term
                    </InputLabel>
                    <Select
                      name="fixedTerm"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={form.fixedTerm}
                      onChange={onChange}
                      input={<OutlinedInput label="Name" />}
                    >
                      <option aria-label="none" value="Fixed term" />
                      <option value={"10"}>Ten</option>
                      <option value={"20"}>Twenty</option>
                      <option value={"30"}>Thirty</option>
                    </Select>
                  </FormControl>

                  <Button variant="contained" color="error">
                    Open Credit
                  </Button>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "right",
                      width: 300,
                      maxWidth: "100%",
                      justifyContent: "flex-end",
                    }}
                  >
                    <label>
                      &nbsp;
                      <div className="item1">/
                      <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">
                          Special Condition
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          form={form}
                          //onChange={onChange}
                        >
                          <FormControlLabel
                            value="Greenloan"
                            control={<Radio />}
                            label="Greenloan"
                          />
                          <FormControlLabel
                            value="First Home Loan only"
                            control={<Radio />}
                            label="First Home Loan only"
                          />
                          <FormControlLabel
                            value="Only for Youth"
                            control={<Radio />}
                            label="Only for Youth"
                          />
                          <FormControlLabel
                            value="Also for Holiday homes"
                            control={<Radio />}
                            label="Also for Holiday homes"
                          />
                          <FormControlLabel
                            value="Construction Lending"
                            control={<Radio />}
                            label="Construction Lending"
                          />
                          <FormControlLabel
                            value="interim Finance"
                            control={<Radio />}
                            label="interim Finance"
                          />
                        </RadioGroup>
                      </FormControl>
                      </div>
                    </label>
                  </Box>
                </Box>
              </label>

              <label>
                <br />
                <br />

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: 500,
                    maxWidth: "100%",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    fullWidth
                    label="Nom Interest Rate"
                    type="number"
                    onChange={onChange}
                    name="nom"
                    value={form.nom}
                    p
                  />

                  <TextField
                    fullWidth
                    label="Min LTV"
                    type="number"
                    onChange={onChange}
                    name="minLtv"
                    value={form.minLtv}
                    p
                  />

                  <TextField
                    fullWidth
                    label="Min Replacement Cap"
                    type="number"
                    onChange={onChange}
                    name="minReplay"
                    value={form.minReplay}
                    p
                  />
                </Box>
              </label>
              <label>
                <br />
                <br />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: 500,
                    maxWidth: "100%",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    fullWidth
                    label="Max Age"
                    type="number"
                    onChange={onChange}
                    name="maxAge"
                    value={form.maxAge}
                    p
                  />

                  <TextField
                    fullWidth
                    label=" Max Duration Year"
                    type="number"
                    onChange={onChange}
                    name="maxDuration"
                    value={form.maxDuration}
                    p
                  />
                </Box>
              </label>
              <label>
                <br />
                <br />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: 500,
                    maxWidth: "100%",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    fullWidth
                    label="Establishment Fee"
                    type="number"
                    onChange={onChange}
                    name="establish"
                    value={form.establish}
                    p
                  />

                  <TextField
                    fullWidth
                    label="Establishment Fee %"
                    type="number"
                    onChange={onChange}
                    name="establishFee"
                    value={form.establishFee}
                    p
                  />
                </Box>
              </label>
              <label>
                <br />
                <br />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: 500,
                    maxWidth: "100%",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    fullWidth
                    label="Monthly Fee"
                    type="number"
                    onChange={onChange}
                    name="monthlyFee"
                    value={form.monthlyFee}
                    p
                  />

                  <TextField
                    fullWidth
                    label="Availability fee %/month"
                    type="number"
                    onChange={onChange}
                    name="availabiltiyFeeMonth"
                    value={form.availabiltiyFeeMonth}
                    p
                  />
                </Box>
              </label>
              <label>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: 500,
                    maxWidth: "100%",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <br />
                  <br />
                  <Button variant="contained" color="error">
                    No Product Bundle Required
                  </Button>

                  <TextField
                    fullWidth
                    label="Product Bundle"
                    onChange={onChange}
                    name="productBundle"
                    value={form.productBundle}
                    p
                  />
                </Box>
              </label>
              <label>
                <br />
                <br />
                <Box
                  sx={{
                    width: 700,
                    maxWidth: "100%",
                  }}
                >
                  <TextField
                    fullWidth
                    label="Restriction text-multiline"
                    onChange={onChange}
                    name="restriction"
                    value={form.restriction}
                  />
                </Box>
              </label>

              <label>
                <br />
                <Stack spacing={75} direction="row">
                  <Button
                    variant="contained"
                    sx={{
                      m: 1,
                      backgroundColor: "#212121",
                      borderRadius: 10,
                      height: 40,
                    }}
                  >
                    End this special Deal
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      m: 2,
                      backgroundColor: "#424242",
                      borderRadius: 10,
                      height: 40,
                    }}
                    onClick={showData}
                  >
                    Save this special Deal
                  </Button>
                </Stack>
              </label>
            </form>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}
export default DealsEntry;
