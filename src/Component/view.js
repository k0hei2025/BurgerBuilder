import React, { Fragment, useState  , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useSelector , useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import Indigo from '@material-ui/core/colors/indigo'
import Green from '@material-ui/core/colors/green'
import Red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green';
import { NavLink } from 'react-router-dom';

import Spinner from './spinner'




const useStyles = makeStyles({
  root: {
    width: '50%',
    backgroundColor:'#FFA900'
  },
  container: {
    maxHeight: 440,
    backgroundColor:'#628395'
  },
  coloumContainer:{
     backgroundColor:'#FFA900'
  }
});

export default function StickyHeadTable() {



  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const rows = useSelector((state)=>state)
  const [listState , setListState] = useState([]);
  
   
  
        const listDataHandler=async()=>{
        
          const listData = [];
           const data = await  fetch(`https://user-management-407ec-default-rtdb.firebaseio.com/addUser.json`);
           const resData = await data.json();
           for (let key in resData){
             listData.push({
               objectId : key,
               name : resData[key].data.name,
               id : resData[key].id,
               email : resData[key].data.email,
               phone : resData[key].data.phone

             })
           }

           setListState(listData);


         }
          listDataHandler()
         

       
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

if (listState === null){
   <Spinner/>
  }

  return (
                 <Fragment>
                                  <Button variant='contained' color='primary' ><NavLink to='./page1' style={{color:'white'}}>Add User</NavLink></Button>
  
           
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              
                <TableCell
                 
                  align="center"
                 
                   className={classes.coloumContainer}
                >
                 ID
                </TableCell>

             <TableCell
                 
                  align="center"
                 
                   className={classes.coloumContainer}
                >
                 NAME
                </TableCell>
   
   <TableCell
                 
                  align="center"
                 
                   className={classes.coloumContainer}
                >
                 Email
                </TableCell>
   
   <TableCell
                 
                  align="center"
                 
                   className={classes.coloumContainer}
                >
                 Phone No
                </TableCell>
   


            </TableRow>
          </TableHead>
   
          <TableBody>
         
             {listState.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((ls) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={ls.objectId}>
                 
                    
                    
                       <Fragment>
                         
                        <TableCell align='center'  >
                       
                         {ls.id} </TableCell>
                        <TableCell align='center'  > {ls.name}  
                       
                         </TableCell>
                        
                        <TableCell align='center'  > {ls.email}  
                       
                         </TableCell>
                        
                        <TableCell align='center'  > {ls.phone}  
                       
                         </TableCell>
                        
  
                    
                   
                        
                    
                     
                    </Fragment>
                    
                 
                </TableRow>
              );
            })} 
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
          </Fragment>
  );
}
