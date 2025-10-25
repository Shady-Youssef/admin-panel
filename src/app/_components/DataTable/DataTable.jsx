'use client';
import React, { useMemo } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Pagination from '@mui/material/Pagination';
import { Box, Button, Chip, styled, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '32rem',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius:'10px',
  boxShadow:'1px 1px 2px 2px #444'

};


const StyledDataGrid = styled(DataGrid)(() => ({
  '& .even-row': {
    backgroundColor: 'white',
  },
  '& .odd-row': {
    backgroundColor: '#EAEEF3',
  },
  '& .MuiDataGrid-row:hover': {
    backgroundColor: '#EAEEF3',
  },
}));



export default function DataTable({ rows }) {
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 10,
    page: 0,
  });

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
const columns = [
  { field: 'email', headerName: 'Email', width: 230 },
  { field: 'phone', headerName: 'Phone Number', width: 200 },
  { field: 'postcode', headerName: 'Post Code', width: 130 },
  { field: 'vendor', headerName: 'Vendor Type', width: 130 },
  { field: 'service', headerName: 'Service Offering', width: 200 },
  { field: 'signup', headerName: 'SignUP Date', width: 130 },
  { field: 'status', headerName: 'Status', width: 130 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 130,
    renderCell: (params) => (
      <div>
 <EditOutlinedIcon
        sx={{
          color: '#1C1B1F',
          cursor: 'pointer',
          ml: 2,
          mt: 2,
        }}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
          slotProps={{
        backdrop: {
        style: { backgroundColor: '#c2c2c213' }, 
      },
  }}
      >
         
        <Box sx={style}>


        
          <Box sx={{mb:2}}>
            
            <Box sx={{mb:1,display:'flex', alignItems:'center', justifyContent:'space-between'}}>

          <Box sx={{display:'flex', alignItems:'center'}}>
            <PersonOutlineOutlinedIcon sx={{fontSize:'1.7rem'}}></PersonOutlineOutlinedIcon>

            <Typography  id="modal-modal-title" variant="h6" component="span">
            User Details
          </Typography>

          </Box>
          <Box>
          <Box>
            <Button onClick={handleClose}> <CloseOutlinedIcon sx={{color:'#000', fontSize:'1rem'}}></CloseOutlinedIcon> </Button>
          </Box>
          </Box>
            </Box>

            <Typography sx={{fontWeight:'600'}} id="modal-modal-title" variant="h6" component="h2">
            CleanPro Solutions
          </Typography>

            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <Box sx={{display:'flex', alignItems:'end' }}>
                <Box>
                <EmailOutlinedIcon sx={{fontSize:'1rem', mr:1, color:'#AEAEAE'}}></EmailOutlinedIcon>
              </Box>
              <Box>
                <Box>
                <Typography sx={{color:'#AEAEAE'}} variant="body1" color="initial">contact@cleanpro.com</Typography>
              </Box>
              </Box>
              </Box>
        <Box >
             <Chip size='small' sx={{mr:1,px:1}} label="Customer" />
           <Chip size='small'  sx={{px:1}} label="invited" />
        </Box>
            </Box>
          </Box>
                  <Divider component="li" />



              <Box  sx={{my:2}}>
            <Typography sx={{my:1,fontWeight:'600', fontSize:'1.1rem'}}  id="modal-modal-title" variant="h6" component="h2">
            Contact Information
          </Typography>

           <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
             <Box sx={{display:'flex', alignItems:'end' }}>
                <Box>
                <EmailOutlinedIcon sx={{fontSize:'1rem', mr:1}}></EmailOutlinedIcon>
              </Box>
              <Box>
               <Box>
                <Typography sx={{color:'#AEAEAE'}} variant="body1" color="initial">lisa.anderson@email.com</Typography>
              </Box>
              </Box>
              </Box>
              
                 <Box sx={{display:'flex', alignItems:'end' }}>
                <Box>
                <LocalPhoneOutlinedIcon sx={{fontSize:'1rem', mr:1}}></LocalPhoneOutlinedIcon>
              </Box>
              <Box>
               <Box >
             <Typography variant="body1" color="#AEAEAE">+61-2-9876-5432</Typography>
        </Box>
              </Box>
              </Box>
       
            </Box>

           <Box sx={{mt:2, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
               <Box sx={{display:'flex', alignItems:'end' }}>
                <Box>
                <LocationOnOutlinedIcon sx={{fontSize:'1rem', mr:1}}></LocationOnOutlinedIcon>
              </Box>
              <Box>
               <Box>
                <Typography variant="body1" color="#AEAEAE">United Kingdom</Typography>
              </Box>
              </Box>
              </Box>
              
               <Box sx={{display:'flex', alignItems:'end' }}>
                <Box>
                <CalendarMonthOutlinedIcon sx={{fontSize:'1rem', mr:1}}></CalendarMonthOutlinedIcon>
              </Box>
              <Box>
               <Box >
             <Typography variant="body1" color="#AEAEAE">Signed up 1/30/2024</Typography>
        </Box>
              </Box>
              </Box>
        
            </Box>
          </Box>
          <Divider component="li" />

            <Box  sx={{my:2}}>
            <Typography sx={{my:1,fontWeight:'600', fontSize:'1.1rem'}}  id="modal-modal-title" variant="h6" component="h2">
            Customer Deals
          </Typography>

          <Box>
             <Box sx={{display:'flex', alignItems:'end' }}>
                <Box>
                <PersonOutlineOutlinedIcon sx={{ mr:1}}></PersonOutlineOutlinedIcon>
              </Box>
              <Box>
               <Box>
                <Typography variant="body1" color="initial">individual</Typography>
              </Box>
              </Box>
              </Box>
            
            <Typography sx={{my:1,fontWeight:'600', fontSize:'1.1rem'}}  id="modal-modal-title" variant="h6" component="h2">
            User Details
          </Typography>

          <Box sx={{display:'flex'}}>
            <Typography sx={{mr:2}} variant="body1" color="#AEAEAE">housekeeping</Typography>
            <Typography variant="body1" color="#AEAEAE">car valet</Typography>
          </Box>
            
          </Box>

          </Box>
          <Divider component="li" />
          <Box  sx={{my:2}}>

            <Box sx={{display:'flex', justifyContent:'space-between'}}>
               <Box sx={{display:'flex', alignItems:'center' }}>
                <Box>
                <ChatBubbleOutlineOutlinedIcon sx={{fontSize:'1.2rem', mr:1, mt:1}}></ChatBubbleOutlineOutlinedIcon>
              </Box>
              <Box>
               <Box>
              <Typography sx={{my:1, fontSize:'1.1rem'}}  id="modal-modal-title" variant="h6" component="h2">
            Internal Notes
          </Typography>
              </Box>
              </Box>
              </Box>
               <Box sx={{display:'flex', alignItems:'center' }}>
                <Box>
                <EditOutlinedIcon sx={{ mr:1}}></EditOutlinedIcon>
              </Box>
              <Box>
               <Box>
              <Typography sx={{my:1, fontSize:'1.1rem'}}  id="modal-modal-title" variant="h6" component="h2">
            Edit
          </Typography>

              </Box>
              </Box>
              </Box>
             
            </Box>

          
            <TextField
            sx={{width:'100%'}}
          id="filled-multiline-static"
          // label="Multiline"
          multiline
          rows={4}
          defaultValue="No Note Added Yet"
          variant="filled"
        />
          

          </Box>

              <Box sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                        <Button sx={{borderRadius:'100px', textTransform:'capitalize',  fontSize:'20px'}} variant="contained" color="info">
                            Onboard
                          </Button>
                        <Button sx={{ bgcolor:'#E11B1B',borderRadius:'100px', textTransform:'capitalize',  fontSize:'20px'}} variant="contained" >
                            Reject
                          </Button>
              </Box>
            </Box>
          

      </Modal>
      </div>
      
     
    ),
  },
];
  return (
    <>
      <Paper sx={{ width: '100%' }}>
        <StyledDataGrid
          rows={rows}
          columns={columns}
          checkboxSelection 
          disableRowSelectionOnClick
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0
              ? 'even-row'
              : 'odd-row'
          }
          pagination
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10, 20, 50]}
          sx={{ border: '1px solid #BCC2C8' }}
        />
      </Paper>

      <Pagination
        sx={{ mt: 1 }}
        count={Math.ceil(rows.length / paginationModel.pageSize)}
        variant="outlined"
        shape="rounded"
      />
    </>
  );
}
