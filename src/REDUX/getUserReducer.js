const initialState={
user:[]
}

const getUserReducer=(state=initialState,action)=>{
    switch(action.type){
      case 'GET_USER':
        return state;
        default:
          return state;
    }
}
export default getUserReducer;