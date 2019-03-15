import axios from 'axios';

export const search = (value) => dispatch => {
    axios.get(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${value}&p=1`)
    .then(res => dispatch({
      type:'UPDATE_STATE',
      payload:{
          data: res.data.results.sort((a,b)=>(b.title < a.title)),
          expectResults:true
      }
    })
  );
}
