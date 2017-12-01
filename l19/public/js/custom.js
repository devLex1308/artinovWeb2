$(document).ready(function(){
    $('.share__text').customScroll();

    $('.deleteUser').click(function(e){
    	e.preventDefault();
    	//alert("Ви хочете видалити користувача з id =" + $(this).attr('data-userid'));
    	let rezalt = confirm("Ви хочете видалити користувача з id =" + $(this).attr('data-userid'));
    	if(rezalt){
    		let deleteTr = $(this).parent().parent();
    		let userId = $(this).attr('data-userid');
    		$.ajax({

			    cache: false,
			    timeout: 60000,
			    url: "/user/deleteajax/" + userId,
			    type: "POST",
			    data: {},


			    beforeSend: function () {
			    },
			    
			    success: function (data, textStatus, jqXHR) {

			        var arr;
			        console.log(data);

			        try {
			            arr = JSON.parse(data);
			        	console.log(arr);
			            if (arr['resalt']) {
			            	deleteTr.remove();
			            } else {

			            }


			        }catch (e) {
			        
			            if (arr['error'] != undefined) {
			               
			            }else{
			                
			            }

			        }

			    },

			    complete: function (jqXHR, textStatus) {

			    },

			    error: function (data) {
			        console.log(data);
			    },

			});
    	}
    });
});