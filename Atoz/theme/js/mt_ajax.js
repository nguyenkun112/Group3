// JavaScript Document
function showLoader() {
	$("#loading_result").html("<div style=\"position:fixed; top:50%; right:50%; text-align:center; width:90px; height:70px; padding-top:20px; z-index:99999999 \"><img src='/images/loading-icon1.gif'></div>").hide().fadeIn(10);
	block = true;
}
function closeLoader() {
	$("#loading_result").html("").hide().fadeOut('slow');
	block = false;
}
function showResult(type,data) {
	closeLoader();
	$("#"+type+"").html(data).hide().fadeIn('slow');
	block = false;
}


function load_duan_trang(hien_thi,page){
showLoader();
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=du_an&mod=duan&hien_thi='+hien_thi+'&page='+page,
        dataType: "html",
        success: function(data){
           showResult("du_an_load",data);

        }
    });
	
	 $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=du_an&mod=page&hien_thi='+hien_thi+'&page='+page,
        dataType: "html",
        success: function(data){
           showResult("du_an_load_page",data);

        }
    });
	return false;
}



function load_duan_trang1(hien_thi,page){
showLoader();
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=du_an1&mod=duan&hien_thi='+hien_thi+'&page='+page,
        dataType: "html",
        success: function(data){
           showResult("du_an_load1",data);

        }
    });
	
	 $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=du_an1&mod=page&hien_thi='+hien_thi+'&page='+page,
        dataType: "html",
        success: function(data){
           showResult("du_an_load_page1",data);

        }
    });
	return false;
}




function load_duan_trang2(hien_thi,page){
showLoader();
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=du_an2&mod=duan&hien_thi='+hien_thi+'&page='+page,
        dataType: "html",
        success: function(data){
           showResult("du_an_load2",data);

        }
    });
	
	 $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=du_an2&mod=page&hien_thi='+hien_thi+'&page='+page,
        dataType: "html",
        success: function(data){
           showResult("du_an_load_page2",data);

        }
    });
	return false;
}



function load_duan_trang3(hien_thi,page){
showLoader();
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=du_an3&mod=duan&hien_thi='+hien_thi+'&page='+page,
        dataType: "html",
        success: function(data){
           showResult("du_an_load3",data);

        }
    });
	
	 $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=du_an3&mod=page&hien_thi='+hien_thi+'&page='+page,
        dataType: "html",
        success: function(data){
           showResult("du_an_load_page3",data);

        }
    });
	return false;
}











function loadduantrang(hien_thi,page){
showLoader();
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=duan&mod=duann&hien_thi='+hien_thi+'&page='+page,
        dataType: "html",
        success: function(data){
           showResult("duanload",data);

        }
    });
	
	 $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=duan&mod=page&hien_thi='+hien_thi+'&page='+page,
        dataType: "html",
        success: function(data){
           showResult("duanloadpage",data);

        }
    });
	return false;
}





function load_duan_trang4(hien_thi,page){
showLoader();
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=du_an4&mod=duan&hien_thi='+hien_thi+'&page='+page,
        dataType: "html",
        success: function(data){
           showResult("du_an_load4",data);

        }
    });
	
	 $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=du_an4&mod=page&hien_thi='+hien_thi+'&page='+page,
        dataType: "html",
        success: function(data){
           showResult("du_an_load_page4",data);

        }
    });
	return false;
}




function load_duan_trang5(hien_thi,page){
showLoader();
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=du_an5&mod=duan&hien_thi='+hien_thi+'&page='+page,
        dataType: "html",
        success: function(data){
           showResult("du_an_load5",data);

        }
    });
	
	 $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=du_an5&mod=page&hien_thi='+hien_thi+'&page='+page,
        dataType: "html",
        success: function(data){
           showResult("du_an_load_page5",data);

        }
    });
	return false;
}



function load_duan_trang6(hien_thi,page){
showLoader();
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=du_an6&mod=duan&hien_thi='+hien_thi+'&page='+page,
        dataType: "html",
        success: function(data){
           showResult("du_an_load6",data);

        }
    });
	
	 $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=du_an6&mod=page&hien_thi='+hien_thi+'&page='+page,
        dataType: "html",
        success: function(data){
           showResult("du_an_load_page6",data);

        }
    });
	return false;
}











function loadduantrang(hien_thi,page){
showLoader();
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=duan&mod=duann&hien_thi='+hien_thi+'&page='+page,
        dataType: "html",
        success: function(data){
           showResult("duanload",data);

        }
    });
	
	 $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=duan&mod=page&hien_thi='+hien_thi+'&page='+page,
        dataType: "html",
        success: function(data){
           showResult("duanloadpage",data);

        }
    });
	return false;
}
