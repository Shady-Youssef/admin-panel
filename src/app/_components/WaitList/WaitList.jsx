'use client'
import { Grid, Typography, Container, Box, Chip, InputBase, alpha, TextField, Button } from '@mui/material'
import React, { useMemo } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';

import DataTable from '../DataTable/DataTable';
import Image from 'next/image';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function WaitList() {

  const [searchText, setSearchText] = React.useState('');

    const rows = [
  { id: 1, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'-'},
  { id: 2, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 3, phone: '+44 20 7946 0958', email: 'Albertwatson@gmail.com', postcode: 'OX1 2JD', vendor:'OX1 2JD', service:'Housekeeping', signup:'11/10/2023',status:'Rejected'},
  { id: 4, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 5, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 6, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 7, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 8, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 9, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 10, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 11, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 12, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 13, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 14, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 15, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 16, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 17, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 18, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 19, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 20, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 21, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 22, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 23, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 24, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 25, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 26, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 27, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 28, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 29, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 30, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 31, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 32, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 33, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 34, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 35, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 36, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 37, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 38, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 39, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 40, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 41, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 42, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 43, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 44, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 45, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 46, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 47, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 48, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
  { id: 49, phone: '+44 20 7946 0958', email: 'jonesadam@gmail.com', postcode: 'SW1A 1AA', vendor:'Independent', service:'Housekeeping', signup:'01/05/2024',status:'Onboarded'},
  { id: 50, phone: '+44 20 7946 0958', email: 'Gler@app.com', postcode: 'M1 1AE', vendor:'Company', service:'Window Cleaning', signup:'21/03/2025',status:'Onboarded'},
 
];

      const handleClick = () => {
    console.info('You clicked the Chip.');
  };

const handleSearch = (e) => {
  
  setSearchText(e.target.value);
};

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  
    const [checked, setChecked] = React.useState([true, false]);
    const [independent, setIndependent] = React.useState([true, false]);
    const [company, setCompany] = React.useState([true, false]);
    const [housekeeping, setHouseKeeping] = React.useState([true, false]);
    const [windowCleaning, setWindowCleaning] = React.useState([true, false]);
    const [carValet, setCarValet] = React.useState([true, false]);

  // const handleChange1 = (event) => {
  //   setChecked([event.target.checked, event.target.checked]);
  // };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };
  const handleChange4 = (event) => {
    setIndependent([checked[0], event.target.checked]);
  };
    const handleChange5 = (event) => {
    setCompany([event.target.checked, checked[1]]);
  };
  

  const handleChange6 = (event) => {
    setHouseKeeping([checked[0], event.target.checked]);
  };
  const handleChange7 = (event) => {
    setWindowCleaning([checked[0], event.target.checked]);
  };
  const handleChange8 = (event) => {
    setCarValet([checked[0], event.target.checked]);
  };
  const status = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Onboarded"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Rejected"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );
  const vendor = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Independent"
        control={<Checkbox checked={independent[1]} onChange={handleChange4} />}
      />
      <FormControlLabel
        label="Company"
        control={<Checkbox checked={company[0]} onChange={handleChange5} />}
      />
    </Box>
  );
  const service = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="HouseKeeping"
        control={<Checkbox checked={housekeeping[1]} onChange={handleChange6} />}
      />
      <FormControlLabel
        label="Window Cleaning"
        control={<Checkbox checked={windowCleaning[1]} onChange={handleChange7} />}
      />
      <FormControlLabel
        label="Car Valet"
        control={<Checkbox checked={carValet[1]} onChange={handleChange8} />}
      />
    </Box>
  );

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


  return <>
  <Container sx={{mt:5}} maxWidth>
    <Grid container spacing={3}>
      
        <Grid sx={{mr:{xs:0, md:3},p:2, bgcolor:'#F4F7F9', width:{xs:'100%', md:'auto'}}} size={{xs:12, md:3}}>
            <Box component={'aside'} sx={{display:'flex', justifyContent:'space-between', flexDirection:'column' , height:'100%', textAlign:{xs:'center', md:'left'}}} >
                <Box>
                    <Image src="/images/logo.svg" alt="logo" width={150} height={38} />
                </Box>
                <Box sx={{py:{xs:2,md:0}}}>
                    <Typography sx={{fontWeight:'700'}} variant="body1" color="#324054"> Postcode</Typography>
                    <TextField
                    value={'ZIP'}
                    sx={{bgcolor:'#FFFFFF'}}
                    />
                </Box>
                <Box sx={{py:{xs:2,md:0}}}>
                    <Typography sx={{fontWeight:'700'}} variant="body1" color="#324054"> Registration Status</Typography>
                        <Box sx={{display:'flex', justifyContent:{xs:'center', md:'flex-start'}}}>
                    {status}
                    </Box>
                </Box>
                <Box sx={{py:{xs:2,md:0}}}>
                    <Typography sx={{fontWeight:'700'}} variant="body1" color="#324054"> Date Registered</Typography>
                    <Box sx={{display:'flex', flexDirection:{xs:'column', xl:'row', gap:3}}}>
                    <Box sx={{display:'flex', justifyContent:{xs:'center', md:'flex-start'}}}>
                        <LocalizationProvider  dateAdapter={AdapterDayjs}>
                    <DemoContainer sx={{width:'200px'}} components={['DatePicker']}>
                    <DatePicker label="Start" />
                    </DemoContainer>
                    </LocalizationProvider>
                    </Box>
                    
                    <Box sx={{display:'flex', justifyContent:{xs:'center', md:'flex-start'}}}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer  sx={{width:'200px'}} components={['DatePicker']}>
                    <DatePicker label="End" />
                    </DemoContainer>
                    </LocalizationProvider>
                    </Box>
                    </Box>
                </Box>
                    <Box sx={{py:{xs:2,md:0}}}>
                    <Typography sx={{fontWeight:'700'}} variant="body1" color="#324054"> Vendor Type</Typography>
                        <Box sx={{display:'flex', justifyContent:{xs:'center', md:'flex-start'}}}>
                    {vendor}
                    </Box>
                </Box>
                <Box sx={{py:{xs:2,md:0}}}>
                     <Typography sx={{fontWeight:'700'}} variant="body1" color="#324054"> Service Offering</Typography>
                        <Box sx={{display:'flex', justifyContent:{xs:'center', md:'flex-start'}}}>
                    {service}
                    </Box>
                </Box>
                <Box sx={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                    <Button sx={{borderRadius:'100px', py:2, px:3}} variant="contained">Filter</Button>
                </Box>
                

                
            </Box>
        </Grid>

        <Grid sx={{mx:3}} size={{xs:12, md:9}} >
                    <Typography sx={{fontWeight:400, mb:3, mt:2}} variant="h4" color="#12153A">Waitlist</Typography>
            <Box  sx={{display:'flex', justifyContent:'space-between', mb:2}}>
                <Box>
            <Typography component={'span'}  sx={{fontWeight:500}} variant="body1" > <Chip sx={{bgcolor:'#C8D5D9', borderRadius:'8px', color:'#4E4636'}} label="Service Providers" onClick={handleClick} /> </Typography>
            <Typography component={'span'}  sx={{fontWeight:500}} variant="body1" > <Chip sx={{borderRadius:'8px', color:'#4E4636'}} variant="outlined" label="Customers" onClick={handleClick} /> </Typography>
                </Box>

                <Box>
                    <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color:'#262626'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search User"
              inputProps={{ 'aria-label': 'search user' }}
              sx={{border:'2px solid #D3D8DD'}}
              value={searchText}
              onChange={handleSearch}
            />
          </Search>
                </Box>
            </Box>
              <DataTable rows={filteredRows}/>
        </Grid>
  </Grid>
  </Container>
  </>
}
