import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DealsEntry from './DealsEntry';
import LoanDetails from './LoanDetails';
import { Container } from '@mui/system';
import UserSelect from './UserSelect';
import { createTheme } from '@mui/material/styles';
import Clogo from './Clogo';

function TabPanel(props) {
  const { children, value, index, ...other } = props;


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: '',   width: 1400 }}>
        <Container maxWidth="xl">
      <AppBar position="relative">
        <Tabs
            
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          aria-label="full width tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Deals Entry" {...a11yProps(1)} />
          <Tab label="Loan Details" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'y-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <Clogo />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <DealsEntry />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <UserSelect /><LoanDetails/>
        </TabPanel>
      </SwipeableViews>
      </Container>
    </Box>
  );
}
