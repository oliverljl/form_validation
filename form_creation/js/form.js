var flag_0 = 'false';
var flag_1 = 'false';
$(document).ready(function(){
	    validation(); 
		});

function validation(){
		$("#name").on('change keydown paste input',function(){
		if($(this).val().toString().length<=2)
		{
		var p = document.getElementById("error_name");
    	p.style.display = "block";
    	var pic = document.getElementById("no");
    	pic.style.display = "inline-block";
    	var pic1 = document.getElementById("yes");
    	pic1.style.display = "none";
    	flag_0 = false;
 		}
		else{
		var p = document.getElementById("error_name");
   	    p.style.display = "none";
    	var pic = document.getElementById("no");
    	pic.style.display = "none";
    	var pic1 = document.getElementById("yes");
    	pic1.style.display = "inline-block";
    	flag_0 = true;
		}
		});	

		$("#email").on('change keydown paste input',function(){
		var x = $(this).val();
	    var atpos = x.indexOf("@");
	    var dotpos = x.lastIndexOf(".");
		if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
		{
		var p = document.getElementById("error_email");
        p.style.display = "block";
 		var pic = document.getElementById("no1");
        pic.style.display = "inline-block";
   		var pic1 = document.getElementById("yes1");
        pic1.style.display = "none";
        flag_1= false;
		}
		else{
		var p = document.getElementById("error_email");
 	    p.style.display = "none";
 	    var pic = document.getElementById("no1");
 	    pic.style.display = "none";
 	    var pic1 = document.getElementById("yes1");
 	    pic1.style.display = "inline-block";
 	    flag_1 = true;
	 	}
		});

		$("#pwd").on('change keydown paste input',function(){
		if($(this).val().toString().length<=8)
		{
		var p = document.getElementById("error_pwd");
    	p.style.display = "block";
    	var pic = document.getElementById("no2");
    	pic.style.display = "inline-block";
    	var pic1 = document.getElementById("yes2");
    	pic1.style.display = "none";
    	flag_2 = false;
 		}
		else{
		var p = document.getElementById("error_pwd");
   	    p.style.display = "none";
    	var pic = document.getElementById("no2");
    	pic.style.display = "none";
    	var pic1 = document.getElementById("yes2");
    	pic1.style.display = "inline-block";
    	flag_2 = true;
		}
		});	

		$("#sex").on('change keydown paste input',function(){
		if($(this).val()==null)
		{
		var p = document.getElementById("error_sex");
    	p.style.display = "block";
    	var pic = document.getElementById("no3");
    	pic.style.display = "inline-block";
    	var pic1 = document.getElementById("yes3");
    	pic1.style.display = "none";
    	flag_2 = false;
 		}
		else{
		var p = document.getElementById("error_sex");
   	    p.style.display = "none";
    	var pic = document.getElementById("no3");
    	pic.style.display = "none";
    	var pic1 = document.getElementById("yes3");
    	pic1.style.display = "inline-block";
    	flag_2 = true;
		}
		});	

		if(flag_0==true&&flag_1==true&&flag_2==true&&flag_3==true
			&&flag_4==true
			){
			return true;
		}
		else{return false;}
}

function mysubmit(){
	if(validation())
	{   
		document.getElementById('my_form').action='success.html';
	}
	else{
	
		}
}
