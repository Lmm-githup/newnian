 // (time是判断日，zhucetime是注册日)   
function time(time,zhucetime){
  return new Promise((res,rej)=>{
	if(Date.parse(zhucetime) <= Date.parse(time)){
	     res("yes");
	   }else{
	     res("no");
	  }
	})
}