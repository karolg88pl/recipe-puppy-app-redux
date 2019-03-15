const initialState = {
  data:[],
  expectResults: false
}

export default function(state = initialState, action){
  switch(action.type){
    case 'UPDATE_STATE':
      return{
        data: action.payload.data,
        expectResults: action.payload.expectResults
      }
    default:
      return state;
  }
}
