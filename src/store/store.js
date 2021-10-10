import {configureStore, createSlice} from '@reduxjs/toolkit'


  const initialStore = { 
                  dataList: []
   }


   const userSlice = createSlice({
                  name : 'user-Management',
                  initialState : initialStore,
                  reducers :{
                                 
                                 add(state , action){
                                    
                                const storeObject = {
                          name : action.payload.name,
                       email : action.payload.email,
                     phone : action.payload.phone,
                                  mail : action.payload.mail,
                                  
                             }

                        state.dataList.push(storeObject);

                                 },
                              
                  }
   })
     
  export const dataAction = userSlice.actions;


  export const  addDataToFireBase=async(userDataPacket)=>{
       


        const data = await  fetch(`https://user-management-407ec-default-rtdb.firebaseio.com/addUser.json`,{
       
      method:"POST",
      body:JSON.stringify({
            id : new Date().getTime(),
          data : { userDataPacket,
                  mainPacket
                 }
                  headers : {
        'Content-Type' : 'application/json'
      }
    });
    const resData = await data.json();
    console.log(resData)
    console.log(userDataPacket);
  }


  
  const store = configureStore({
                 reducer : userSlice.reducer
               
  })

   export default store
