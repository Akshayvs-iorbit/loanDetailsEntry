import React from 'react'
import Box from "@mui/material/Box";
import {
  Container,
  Select,
  MenuItem,
  Button,
  TextField,
 
  Typography,
  InputLabel,

} from "@mui/material";
import { CssBaseline } from "@mui/material";

import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";


const FormInputs = () => {
  return (
<FormControlLabel 
       sx={{ m: 2, minWidth: 400 }}
          
          control={<Checkbox checked={coborrow} />}
          label="is Coborrowed ?"
          labelPlacement="is Coborrowed or not?"
          onChange={(e) =>{handleCheckBox(e)}}

        />    
  )
}

export default FormInputs