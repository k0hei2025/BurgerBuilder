import {configureStore, createSlice} from '@reduxjs/toolkit'


  const initialStore = { 
                  dataList: []
   }

//   const listDataHandler=async()=>{
        
         
//            const data = await  fetch(`https://user-management-407ec-default-rtdb.firebaseio.com/addUser.json`);
//            const resData = await data.json();
//            for (let key in resData){
//              initialStore.dataList.push({
//                objectId : key,
//                name : resData[key].data.name,
//                id : resData[key].id,
//                email : resData[key].data.email,
//                phone : resData[key].data.phone

//              })
//            }

      
//       }
 
//       listDataHandler()

   const userSlice = createSlice({
                  name : 'user-Management',
                  initialState : initialStore,
                  reducers :{
                                 
                                 add(state , action){
                                    
                                             const dataStore = {
                                                            id : action.payload().id,
                                                            name : action.payload().name,
                                                            email : action.payload().email,
                                                            phone : action.payload().phone

                                             }

                                             state.dataList.push(dataStore);

                                 },
                                 update(state , action){
                                       
                                       if (state.dataList.id === action.payload().id){     
                                        
                                        state.dataList.name = action.payload().name;
                                        state.dataList.email = action.payload().email;
                                        state.dataList.phone = action.payload().phone;
                                       }
                                 }
                  }
   })
     
  export const dataAction = userSlice.actions;


  const store = configureStore({
                 reducer : userSlice.reducer
               
  })

   export default store