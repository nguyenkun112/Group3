// AJAX INIT
function $$$(id) {
	return document.getElementById(id);
}


function khoitao_ajax()
{
	var x;
	try 
	{
		x	=	new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch(e)
	{
    	try 
		{
			x	=	new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(f) { x	=	null; }
  	}
	if	((!x)&&(typeof XMLHttpRequest!="undefined"))
	{
		x=new XMLHttpRequest();
  	}
	return  x;
}



function close_poup(){
		
		$("#show_info_2").remove();
		 $("#close_luu_2").remove();
		   $("#khung_bg_view").hide();
		    $("#khung_bg_view").css('height',0);
			
			}
		function close_thong_bao_show(){
		 $("#show_info").remove();
						$("#close_luu").remove();
			
			}		
			
	function close_khung_popup2(){
		$("#show_info_2").remove();
		 $("#close_luu_2").remove();
		   $("#khung_bg_view").hide();
		   $("#khung_bg_view").css('height',0);
		   $("#show_thong_tin").html('')
		   clearInterval(counter);		
	}			

function kiem_trthongtin(wth){
	
 var aheight = $("#lay_thong_tin_nam_hinh").height();
 $("#khung_bg_view").css('height',(aheight));
 var noidung=$.trim($("#show_thong_tin").html());
 if(noidung!=''){
 $("#khung_bg_view").show();
 }
 
 
	var myWidth;
	var myHeight;
	var chia;
	var moi;var hedu;var hemoi;
	
	if(typeof(window.innerWidth) == 'number'){ 
	//Non-IE 
		 myWidth = window.innerWidth;
		 myHeight = window.innerHeight; 
	} else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) { 
		 //IE 6+ in 'standards compliant mode' 
		 myWidth = document.documentElement.clientWidth; 
		 myHeight = document.documentElement.clientHeight; 
	} else if(document.body && (document.body.clientWidth || document.body.clientHeight)) { 
		 //IE 4 compatible 
		 myWidth = document.body.clientWidth; 
		 myHeight = document.body.clientHeight; 
	} 
	$("#lay_thong_tin_nam_hinh").attr('myWidth',myWidth);
	$("#lay_thong_tin_nam_hinh").attr('pupupWidth',wth);
	$("#lay_thong_tin_nam_hinh").attr('myHeight',myHeight);
	
var viewPortHeight = parseInt(document.documentElement.clientHeight);
	var scrollHeight = parseInt(document.body.getBoundingClientRect().top);		
		
		 var cont = document.getElementById('popup_photo');	  
		var dai=cont.offsetHeight.toString();
		if(dai<100){
			thu=250;
			}else{
		hedu =parseInt(viewPortHeight-dai);
		hemoi=hedu/2;
		thu=Math.abs(scrollHeight)+hemoi;
		}

		chia=myWidth-wth;
		moi=chia/2;
		
		$(".popup_photo").css("top",Math.abs(thu)+"px");
		$(".popup_photo").css("left",moi+"px");
		
}
function pageLoad(){

 var cont = document.getElementById('popup_photo');	  
var rong=cont.offsetWidth.toString();
kiem_trthongtin();

}

/*function set_chieucao(loai){
	
	var hedu;var hemoi;
	var viewPortHeight = parseInt(document.documentElement.clientHeight);
	var scrollHeight = parseInt(document.body.getBoundingClientRect().top);		
var cont = document.getElementById('popup_photo');	  
		var dai=cont.offsetHeight.toString();
		if(dai<100){
			thu=250;
			}else{
		hedu =parseInt(viewPortHeight-dai);
		hemoi=hedu/2;
		thu=Math.abs(scrollHeight)+hemoi;
		}
	
	if(dai<viewPortHeight){
	$(".popup_photo").css("top",Math.abs(thu)+"px");	
	}else{
		$(".popup_photo").css("top","10px");
			if(loai!='chay'){
			$('html, body').animate({scrollTop: '0px'}, 800);
			}
		}
	
}



$(window).scroll(function () { 

		set_chieucao('chay');
		
    });

*/
function khoitao_ajax()
{
	var x;
	try 
	{
		x	=	new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch(e)
	{
    	try 
		{
			x	=	new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(f) { x	=	null; }
  	}
	if	((!x)&&(typeof XMLHttpRequest!="undefined"))
	{
		x=new XMLHttpRequest();
  	}
	return  x;
}
function	Forward(url)
{
	window.location.href = url;
}
function	_postback()
{
	return void(1);
}

//đã được load hoàn tất. 
jQuery(window).load(function(){ 
    jQuery(window).resize(function(){ 
	
    });
});

//tìm kiếm
function click_tim_kiem(page){
showLoader();

var list=$query("#contact-form");

   $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=tim_kiem&page='+page+'&'+list,
        dataType: "html",
        success: function(data){
			
                  showResult("load_tim_kiem",data);
        }
    });
	return false;
}

//Gởi mail
function send_res(frmContactContact)
{
	txtName = frmContactContact.txtName.value
	txtEmail = frmContactContact.txtEmail.value	
	txtContent=frmContactContact.txtContent.value
	txtSubject=frmContactContact.txtSubject.value
	if(!txtName)
	{
		alert("Vui lòng nhập họ tên !");
		frmContactContact.txtName.focus();
		return false;
	}
	
	
	if(!txtEmail || !txtEmail.match(/^([-\d\w][-.\d\w]*)?[-\d\w]@([-\w\d]+\.)+[a-zA-Z]{2,6}$/) )
	{
		alert("Vui lòng nhập đúng định dạng email !");
		frmContactContact.txtEmail.focus();
		return false;
	}
	if(!txtSubject)
	{
		
		alert("Vui lòng nhập tiêu đề !");
		frmContactContact.txtSubject.focus();
		return false;
	}
	if(!txtContent)
	{
		alert("Vui lòng nhập nội dung !");
		frmContactContact.txtContent.focus();
		return false;
	}
	else
	{
		var	query	=	"act=send_res&txtName="+txtName+"&txtEmail="+txtEmail+"&txtSubject="+txtSubject+"&txtContent="+txtContent;
		var http 	=	khoitao_ajax();
		try
		{
			http.open("POST", "/action.php");
			http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			http.setRequestHeader("Cache-control", "no-cache");		
			http.onreadystatechange = function()
			{
				if (http.readyState == 4)
				{
					if (http.status == 200)
					{
						x = $.trim(http.responseText);
						if (x.substring(0,2) == "OK")
						{
							alert(x.substring(3));
							window.location.href = "";
						}
						else 
						{
							alert(x);
						}
						
					}
					else
					{
							return false;
					}
				}
			}
			http.send(query);
		}
		catch (e)
		{
		}
		return false;
	}
}
//Gửi mail giao tận nhà
function send_giaove(frmGiaovetannha)
{
	txtName = frmGiaovetannha.txtName.value
	txtTel = frmGiaovetannha.txtTel.value
	txtAddress = frmGiaovetannha.txtAddress.value
	txtEmail = frmGiaovetannha.txtEmail.value	
	txtContent=frmGiaovetannha.txtContent.value
	if(!txtName)
	{
		frmGiaovetannha.txtName.focus();
		$("#ten_alert").html("* Vui lòng cho biết tên");
		return false;
	}
	else{
		$("#ten_alert").html("");
		}
	if(!txtTel)
	{
		frmGiaovetannha.txtTel.focus();
		$("#sdt_alert").html("* Vui lòng cho biết số điện thoại");
		return false;
	}
	else{
		$("#sdt_alert").html("");
		}
	if(!txtAddress)
	{
		frmGiaovetannha.txtAddress.focus();
		$("#diachi_alert").html("* Vui lòng cho biết địa chỉ");
		return false;
	}
	else{
		$("#diachi_alert").html("");
		}
	if(!txtEmail)
	{
		frmGiaovetannha.txtEmail.focus();
		$("#email_alert").html("* Vui lòng cho biết email");
		return false;
	}
	else{
		$("#email_alert").html("");
		}
	if(!txtEmail || !txtEmail.match(/^([-\d\w][-.\d\w]*)?[-\d\w]@([-\w\d]+\.)+[a-zA-Z]{2,6}$/) )
	{
		frmGiaovetannha.txtEmail.focus();
		$("#email_alert").html("* Vui lòng nhập đúng email");
		return false;
	}
	else
	{
		var	query	=	"act=send_giaove&txtName="+txtName+"&txtTel="+txtTel+"&txtEmail="+txtEmail+"&txtContent="+txtContent+"&txtAddress="+txtAddress;
		var http 	=	khoitao_ajax();
		try
		{
			http.open("POST", "/action.php");
			http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			http.setRequestHeader("Cache-control", "no-cache");		
			http.onreadystatechange = function()
			{
				if (http.readyState == 4)
				{
					if (http.status == 200)
					{
						x = $.trim(http.responseText);
						if (x.substring(0,2) == "OK")
						{
							alert(x.substring(3));
							window.location.href = "";
						}
						else 
						{
							alert(x);
						}
						
					}
					else
					{
							return false;
					}
				}
			}
			http.send(query);
		}
		catch (e)
		{
		}
		return false;
	}
}


//Gởi mail đăng ký khuyến mãi
function send_dk(frmContactdk)
{
	txtEmail = frmContactdk.txtEmail.value	
	if(!txtEmail)
	{
		alert("Vui lòng nhập email !");
		frmContactdk.txtEmail.focus();
		return false;
	}
	email=txtEmail;
	if (!email.match(/^([-\d\w][-.\d\w]*)?[-\d\w]@([-\w\d]+\.)+[a-zA-Z]{2,6}$/)){
		alert('Địa chỉ email không hợp lệ.');
		frmContactdk.txtEmail.focus();
		return false;
		
	}
	else
	{
		var	query	=	"act=send_dk&txtEmail="+txtEmail;
		var http 	=	khoitao_ajax();
		try
		{
			http.open("POST", "/action.php");
			http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			http.setRequestHeader("Cache-control", "no-cache");		
			http.onreadystatechange = function()
			{
				if (http.readyState == 4)
				{
					if (http.status == 200)
					{
						x = $.trim(http.responseText);
						if (x.substring(0,2) == "OK")
						{
							alert(x.substring(3));
							window.location.href = "";
						}
						else 
						{
							alert(x);
						}
						
					}
					else
					{
							return false;
					}
				}
			}
			http.send(query);
		}
		catch (e)
		{
		}
		return false;
	}
}


$.extend({
  ajaxIt : function(query, lnk, callbackFnk){    
	var http 	=	khoitao_ajax();
	try
	{
	  http.open("POST", lnk);
	  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	  http.setRequestHeader("Cache-control", "no-cache");		
	  http.onreadystatechange = function()
	  {
		  if (http.readyState == 4)
		  {
			  if (http.status == 200)
			  {
				  // Callback
				  if(typeof callbackFnk == 'function'){
					  x = http.responseText;
					  callbackFnk.call(this, x);
				  }
				  //---------
			   }
				else
				{
					alert('Có lỗi hệ thống. Xin vui lòng thử lại sau');
				}
			}
		}
		http.send(query);
	}
	catch (e)
	{
	}
	return false;
  }
});
function show_notify(msg)
{
	$.ajaxIt("act=show_thong_bao&msg="+encodeURIComponent(msg),'/action.php',function(x)
	{
		$("#luu_result").html(x);
	});
}
//gui dat hang
function gui_dat_hang()
{
	$("#loading").fadeIn();
	var pttt = "Chuyển khoản ngân hàng";
	var thanh_toan = $(".thanh_toan:checked").val();
	if (thanh_toan == 'thu_tien') 
		pttt = "Nhân viên bưu điện thu tiền khi giao hàng";
	if (thanh_toan == 'chuyen_tien')
		pttt = "Chuyển tiền qua bưu điện";
	var noi_dung = encodeURIComponent(document.getElementById("txt_noi_dung_mail").value + "<table><tbody><tr><td class='center'>"+ pttt + "</td></tr></tbody></table>" + "</div>");
	var tong_tien = document.getElementById("txt_tong_tien").value;
	var	query	=	"act=send_don_dat&tong=" + tong_tien + "&noi_dung=" + noi_dung;
	var http 	=	khoitao_ajax();
	try
	{
		http.open("POST", "/action.php");
		http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		http.setRequestHeader("Cache-control", "no-cache");		
		http.onreadystatechange = function()
		{
			if (http.readyState == 4)
			{
				if (http.status == 200)
				{
					$("#loading").fadeOut();
					x = http.responseText;
					$("#dialog-message .msgtxt").html(x);					
					show_notify(x);
					var counter = setInterval(function()		
					{			
						clearInterval(counter);			
						window.location = "";
					}, 3000);
					
				}
			}
		}
		http.send(query);
	}
	catch (e)
	{
	}
	return false;
}

//dang ky
function load_frm_dang_ky()
{
	var query = 'act=load_frm_dang_ky';
	$.ajaxIt(query,'/action.php',function(x)
	{
		$("#luu_result").html(x);
		$(".thoangbao_mgs").css("top","5%");
		$(".thoangbao_mgs").css("left","30%");
	});
}
//dang ky
function load_frm_dang_nhap()
{
	var query = 'act=load_frm_dang_nhap';
	$.ajaxIt(query,'/action.php',function(x)
	{
		$("#luu_result").html(x);
		$(".thoangbao_mgs").css("top","5%");
		$(".thoangbao_mgs").css("left","30%");
	});
}
//dang ky ok
function dang_ky_ok()
{
	if ($("#txt_password_dk").val() != $("#password2").val())
	{
		$("#txt_password_dk").focus();
		show_notify("Xin vui lòng nhập lại mật khẩu.");
		$(".thoangbao_mgs").css("top","40%");
		$(".thoangbao_mgs").css("left","40%");
		return false;
	}
	
	var query = $query(".table_dangtin")+"&act=kiem_tra_dk";
	$.ajaxIt(query,'/action.php',function(x)
	{
		show_notify(x);
		$(".thoangbao_mgs").css("top","40%");
		$(".thoangbao_mgs").css("left","40%");
	});
}
//kt login
function kt_login()
{
	if ($("#txt_username").val() == '' || $("#txt_username").val() == 'Tên đăng nhập')
	{
		$("#txt_username").focus();
		show_notify("Bạn phải nhập tên đăng nhập.");
		return false;
	}
	if ($("#txt_password").val() == '')
	{
		$("#txt_password").focus();
		show_notify("Bạn phải nhập mật khẩu.");
		return false;
	}
	
	var query = 'act=login&username='+$("#txt_username").val()+"&password="+$("#txt_password").val();
	$.ajaxIt(query,'/action.php',function(x)
	{
		x= $.trim(x);
		if (x.substring(0,2) == 'OK')
		{
			show_notify(x.substring(3));
			var counter = setInterval(function()		
			{			
				clearInterval(counter);	
				window.location = window.location;
			}, 3000);
		}
		else
			show_notify(x);
	}); 
	return false;
}
//thoat
function kt_logout()
{
	var query = 'act=logout';
	$.ajaxIt(query,'/action.php',function(x)
	{
		show_notify("Bạn đã đăng xuất thành công. <br />Xin chào và hẹn gặp lại bạn.");
		var counter = setInterval(function()
		{
			clearInterval(counter);	
			window.location = window.location;
		}, 3000);
	});
	return false;
}
function $query(obj)
{
	var query = "";
	$(obj).find("input").each(function(i){
		if (($(obj).find("input").eq(i).attr("type") != "checkbox") && ($(obj).find("input").eq(i).attr("type") != "button") && ($(obj).find("input").eq(i).attr("type") != "submit") && ($(obj).find("input").eq(i).attr("type") != "radio") )
		{
			var t = $(obj).find("input").eq(i);
			query += "&"+t.attr("name")+"="+encodeURIComponent(t.attr("value"));
		}
		else
		{
			if ($(obj).find("input").eq(i).attr("type") == "checkbox")
			{
				var t = $(obj).find("input").eq(i);
				if (t.attr("id") != '')
					query += "&"+t.attr("id")+"="+t.attr("checked");
				else if (t.attr('name') != '')
					query += "&"+t.attr("name")+"="+t.attr("checked");
			}
			else if ($(obj).find("input").eq(i).attr("type") == "radio")
			{
				var t = $(obj).find("input").eq(i);
				if (t.is(":checked"))
				{
					if (t.attr("id") != '')
						query += "&"+t.attr("id")+"="+t.attr("value");
					else if (t.attr('name') != '')
						query += "&"+t.attr("name")+"="+t.attr("value");
				}
			}
		}
	});
	
	$(obj).find("textarea").each(function(i){
		var t = $(obj).find("textarea").eq(i);
		if (t.attr("id") != '')
			query += "&"+t.attr("id")+"="+encodeURIComponent(t.attr("value"));
		else if (t.attr('name') != '')
			query += "&"+t.attr("name")+"="+encodeURIComponent(t.attr("value"));
	});
	
	$(obj).find("select").each(function(i){
		var t = $(obj).find("select").eq(i);
		if (t.attr("id") != '')
			query += "&"+t.attr("id")+"="+encodeURIComponent(t.attr("value"));
		else if (t.attr('name') != '')
			query += "&"+t.attr("name")+"="+encodeURIComponent(t.attr("value"));
	});
	
	return query.substring(1);
}
function addToCart (itemId)
{
	var query = 'id='+itemId;
	$.ajaxIt(query,'/cart.php',function(x)
	{
		if (x != 'NO')
		{
			var kq = x.split("$$$$");
			var text = '<a href="/gio-hang/" style="color:#5a5e69;font-weight:bold;"><span style="color:#18819B;font-weight:bold;font-size:14px;">Giỏ hàng của bạn : </span>'+kq[0]+' sản phẩm</a>';
			
			$("#totalAmount").html(text);
			show_notify("Đã thêm vào giỏ hàng");
		}
		else
			show_notify("Vui lòng đăng nhập để mua hàng !");
	});
}
//thay doi thong tin user
function load_frm_change_detail()
{
	var query = 'act=load_frm_change_detail';
	$.ajaxIt(query,'/action.php',function(x)
	{
		$("#luu_result").html(x);
		$(".thoangbao_mgs").css("top","5%");
		$(".thoangbao_mgs").css("left","30%");
	});
}
function change_detail_ok()
{
	if ($("#txt_password_dk").val() != $("#password2").val())
	{
		$("#txt_password_dk").focus();
		show_notify("Xin vui lòng nhập lại mật khẩu.");
		$(".thoangbao_mgs").css("top","40%");
		$(".thoangbao_mgs").css("left","40%");
		return false;
	}
	
	var query = $query(".table_dangtin")+"&act=kiem_tra_change_detail";
	$.ajaxIt(query,'/action.php',function(x)
	{
		show_notify(x);
		$(".thoangbao_mgs").css("top","40%");
		$(".thoangbao_mgs").css("left","40%");
	});
}
//quen mat khau
function reset_mk()
{
	txtEmail = document.getElementById("txt_email").value;
	if(!txtEmail)
	{
		alert("Vui lòng nhập họ tên !");
		return false;
	}
	email=txtEmail;
	if (!email.match(/^([-\d\w][-.\d\w]*)?[-\d\w]@([-\w\d]+\.)+[a-zA-Z]{2,6}$/)){
		alert('Địa chỉ email không hợp lệ.');
		return false;
	}
	var query = "txt_email="+document.getElementById("txt_email").value;
	var http 	=	khoitao_ajax();
	try
	{
		http.open("POST", "/z_action/quenmk.php");
		http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		http.setRequestHeader("Cache-control", "no-cache");		
		http.onreadystatechange = function()
		{
			if (http.readyState == 4)
			{
				if (http.status == 200)
				{
					var x = http.responseText;
					alert(x);
					window.location.href = "";
				}
				else
				{
						return false;
				}
			}
		}
		http.send(query);
	}
	catch (e)
	{
	}
}




function doShow(tagId)

{

	//alert ("show");

	var obj = document.getElementById(tagId);

	obj.style.display = "inline";

}





function doHide(tagId)

{

	//alert ("hide");

	document.getElementById(tagId).style.display = "none";

}





function doView(tagId)

{

	if(document.getElementById(tagId).style.display == "none")

	{

		doShow(tagId);

	}

	else

		doHide(tagId);

}


function set_lang(lang)
{ 
	//show_notify("Đã thay đổi ngôn ngữ hiển thị"); 
    var data="set_lang=1&lang="+lang;
    $.ajax({
		    url: 'index.php',
			type: "POST",
 			data: data,
 			success: function (html) {
				{
					setInterval(window.location.href = "/projets/", 8000);
				}
                
 			}
    });
}