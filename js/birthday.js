// 点击按钮聚焦
    function focus(){
     var val = $("#text").val();
	 console.log(val)
     $("#text").val("").focus().val(val);
     $('.sec3').css("height",$(document).height()+"px")
    }
    // 判断星座
     function xingzuo(month,date) {
		if (month == 1 && date >=20 || month == 2 && date <=18) {value = "水瓶座";}
		if (month == 1 && date > 31) {value = "Huh?";}
		if (month == 2 && date >=19 || month == 3 && date <=20) {value = "双鱼座";}
		if (month == 2 && date > 29) {value = "Say what?";}
		if (month == 3 && date >=21 || month == 4 && date <=19) {value = "白羊座";}
		if (month == 3 && date > 31) {value = "OK. Whatever.";}
		if (month == 4 && date >=20 || month == 5 && date <=20) {value = "金牛座";}
		if (month == 4 && date > 30) {value = "I'm soooo sorry!";}
		if (month == 5 && date >=21 || month == 6 && date <=21) {value = "双子座";}
		if (month == 5 && date > 31) {value = "Umm ... no.";}
		if (month == 6 && date >=22 || month == 7 && date <=22) {value = "巨蟹座";}
		if (month == 6 && date > 30) {value = "Sorry.";}
		if (month == 7 && date >=23 || month == 8 && date <=22) {value = "狮子座";}
		if (month == 7 && date > 31) {value = "Excuse me?";}
		if (month == 8 && date >=23 || month == 9 && date <=22) {value = "室女座";}
		if (month == 8 && date > 31) {value = "Yeah. Right.";}
		if (month == 9 && date >=23 || month == 10 && date <=22) {value = "天秤座";}
		if (month == 9 && date > 30) {value = "Try Again.";}
		if (month == 10 && date >=23 || month == 11 && date <=21) {value = "天蝎座";}
		if (month == 10 && date > 31) {value = "Forget it!";}
		if (month == 11 && date >=22 || month == 12 && date <=21) {value = "人马座";}
		if (month == 11 && date > 30) {value = "Invalid Date";}
		if (month == 12 && date >=22 || month == 1 && date <=19) {value = "摩羯座";}
		if (month == 12 && date > 31) {value = "No way!";}
    }

 // 判断两个时间相差多少天
 function howday(starttime,endtime){
    var date3=endtime.getTime()-starttime.getTime() //时间差的毫秒数
	var days=Math.floor(date3/(24*3600*1000))//计算出相差天数
	alert(" 相差 "+days+"天 ")
 }

 // 判断相差年月日
 function howtime(start,current){
           // var start = new Date(zhucetime);//初始化输入时间
			var startYear = start.getFullYear();//获取输入年份
			var startMonth = start.getMonth() + 1;//获取输入月份
			var startDay = start.getDate();//获取输入日期
		 
			// var current = new Date();//当前时间
			var currentYear = current.getFullYear();//获取当前年份
			var currentMonth = current.getMonth() + 1;//获取当前月份
			var currentDay = current.getDate();//获取当前日期
			var years = 0;//声明一个年数变量
			var months = currentMonth - startMonth + (currentYear - startYear) * 12;//总月
			if (currentMonth * 100 + currentDay < startMonth * 100 + startDay) {
				months--;//如果结束日期小月输入日期，月数要-1
			}
			years = Math.floor(months / 12);//取整计算年数
		    months = months % 12;//取余计算月数
			var middleDate = new Date(start);//中间时间
			middleDate.setFullYear(startYear + years);//设置中间时间年份
			middleDate.setMonth(start.getMonth() + months);//设置中间时间月份
			var days =  Math.floor( ( current.getTime()- middleDate.getTime()) / 24 / 60/ 60 / 1000);//计算天数
		    // alert('已经过去了'+years+'年'+months+'月'+days+'天');
		    howtimes = years+'年'+months+'月'+days+'天'
 }