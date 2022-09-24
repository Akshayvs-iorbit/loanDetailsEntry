import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import UserSelectButton from './UserSelectButton';
//import { padding } from '@mui/system';
import "../App.css"
import { Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup'

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function UserSelect() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;


  const handleClick= () =>{
console.log("clicked");
  }

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...userEmail]);
        console.log('helo');
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (<><div className='userSelect'>
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 400, padding :1 }}
      open={open}
      onOpen={() => {
        
        setOpen(true);
       
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="User ID"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>

            ),
          }}
        />
      )}
      
    /><div className='searchbtn'>
    <ButtonGroup variant="contained">
    <Button  sx ={{padding :2 }} onClick={handleClick()}>Search</Button></ButtonGroup></div>
    <div><UserSelectButton />
    </div>
    </div>
    </>
  );
}

// Top films as rated by IMDb users. http://www.imdb.com/chart/top
const userEmail = [
  { title: 'Anna@startuplab.no', year: 1994 },
  { title: 'Per@bergersenbil.no', year: 1972 },
  { title: 'bergersenulleva@gmail.com', year: 1974 },
  { title: 'anjorneboe@msn.com', year: 2008 },
  { title: 'evensen.ine@gmail.com', year: 1957 },
  { title: "saeed@romskog.com", year: 1993 },
  { title: 'josteinlarsen@ymail.com', year: 1994 },
  {
    title: 'tomas.alme@hotmail.com',
    year: 2003,
  },
  { title: 'Sveinung.kjoren@gmail.com', year: 1966 },
  { title: 'Lisa.kjoren@gmail.com', year: 1999 },
  {
    title: 'Karhrinestangottesen@mail.com',
    year: 2001,
  },
  {
    title: 'Tho@kvale.no',
    year: 1980,
  },
  { title: 'Benja@finit.no', year: 1994 },
  { title: 'Ac@arctic.com', year: 2010 },
  {
    title: 'enornes@online.no',
    year: 2002,
  },
  { title: "Anne.wichstrom@gmail.com", year: 1975 },
  { title: 'Trulsheiberg@gmail.com', year: 1990 },
  { title: 'rb@eie.no', year: 1999 },
  { title: 'laila.bjornerud@hotmail.com', year: 1954 },
  {
    title: 'oysteini@online.no',
    year: 1977,
  },
  { title: 'vringnes@hotmail.com', year: 2002 },
  { title: 'pavith0206@gmail.com', year: 1995 },
  { title: 'raihan_@hotmail.com', year: 1991 },
  { title: "raihanilyas@gmail.com", year: 1946 },
  { title: 'Fredrikryenhauge@hotmail.com', year: 1997 },
  { title: 'mikaelmroed@gmail.com', year: 1995 },
  { title: 'snorre@klikkbar.no', year: 1994 },
  { title: 'Abelfam@me.com', year: 2001 },
  { title: 'Ulrikb@hotmail.no', year: 1998 },
  { title: 'Mats@wulffjensen.no', year: 1968 },
  { title: 'Ida@wulffjensen.no', year: 1998 },
  { title: 'Christinawiig@gmail.com', year: 2014 },
];
