

const initialdata = {
	show : "Header is componsent rajon"
}


function reducers (state=initialdata, action){
	
	switch(action.type) {
    	case "success_data":
      		return { show:  action.payload };
   default: 
      return state; 
  }


}



export default reducers;