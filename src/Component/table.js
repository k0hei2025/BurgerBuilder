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



const columns = [
  { id: 'ID', label: 'ID', minWidth: '11px' },
  { name: 'NAME', label: 'NAME', minWidth: '40px' },
 
];



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



 
  const [listState , setListState] = useState([]);
  
        
  
        const listDataHandler=async()=>{
        
          const listData = [];
           const data = await  fetch(`https://user-management-407ec-default-rtdb.firebaseio.com/addUser.json`);
           const resData = await data.json();
           for (let key in resData){
             listData.push({
               objectId : key,
               name : resData[key].data.payload.name,
               id : resData[key].id,
               email : resData[key].data.payload.email,
               phone : resData[key].data.payload.phone

             })
           }
                
           setListState(listData);


         }
          listDataHandler()
        

        const deleteHandler=(selectedTar)=>{
          fetch(`https://user-management-407ec-default-rtdb.firebaseio.com/addUser/${selectedTar}.json`,{
          method: 'DELETE'   
          }).then(()=>{
 setListState(prev=>prev.filter(key => key.objectId !== selectedTar) )

          })
       
        }
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };




  // if (listState === null){

  // }
  let data = (  <Fragment>
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
                         <div style={{
                           textAlign:'right',
                           color:'white'
                         }} >
                         <Button variant='contained'  style={{ color:'white', backgroundColor:Green[500]}}><NavLink to='/page3'>View</NavLink></Button>
                         <Button variant='contained' style={{ color:'white', backgroundColor:Indigo[500]}} > <NavLink style={{color:'white'}} to="page1">Edit</NavLink></Button>
                         <Button variant='contained' onClick={deleteHandler.bind(this , ls.objectId)} style={{ color:'white', backgroundColor:Red[500]}}>Delete</Button>
                         </div>
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
        count={listState.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Fragment>)
   
   if (listState === null){
   data = <Spinner/>
   }  
   

  return (
 data
  );
}
