import axios from 'axios';
import $ from 'jquery';
import {dispatch} from 'react-redux';



// httpClient.defaults.timeout = 720000;

export const dropdown = (option) => {
return {
  type: 'OPTION_CHANGE',
  option: option
	}
};


export const fetchList = (id) => {
	return function(dispatch){
		axios.get(`/upgrade_testing/list/${id}`).then(
				res=> dispatch({
					type:'FETCH_LIST',
					payload:res
				})
			)
	   }
  }

export const executeFile = (fileName) => {
  return ((dispatch)=>{
    axios.post('/upgrade_testing/execute',{file_name:fileName}).then(
      res=> {
        console.log(res,"res aa gaya");
        dispatch({
        type:'EXECUTE_FILE',
        payload:res
      })
    }
    ).catch(err=>console.log(err))
  })
  }



    // return (dispatch)=>{
    //     $.ajax({
    //     method: "POST",
    //     url: "/execute",
    //     dataType: "json",
    //     data:{fileName},
    //     sucess:((data)=>{
    //       console.log("data->",data);
    //       return dispatch({
    //             type:'EXECUTE_FILE',
    //             payload:data
    //           })
    //         })
    //     })
    //    }
