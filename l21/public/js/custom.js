let timer

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

     // $("#send").click(function(e){
     // 		e.preventDefault();
     // 		let smsForm = $("#sms");
     // 		let sms = smsForm.val();
     //      	$.ajax({

		   //        cache: false,
		   //        timeout: 60000,
		   //        url: "/chatajax/",
		   //        type: "POST",
		   //        data: {sms},


		   //        beforeSend: function () {
		   //        	console.log(sms);
		   //        },
		          
		   //        success: function (data, textStatus, jqXHR) {

		   //            var arr;
		   //            console.log(data);
		   //            smsForm.val('');

		   //            // try {
		   //            //     arr = JSON.parse(data);
		   //            //   console.log(arr);
		   //            //     if (arr['resalt']) {
		   //            //       deleteTr.remove();
		   //            //     } else {

		   //            //     }


		   //            // }catch (e) {
		              
		   //            //     if (arr['error'] != undefined) {
		                     
		   //            //     }else{
		                      
		   //            //     }

		   //            // }

		   //        },

		   //        complete: function (jqXHR, textStatus) {

		   //        },

		   //        error: function (data) {
		   //            console.log(data);
		   //        },

		   //    });
     //  });

    var socket = io();
    $("#send").click(function(e){
    	e.preventDefault();
    	socket.emit('chat message', 'Привіт');
    });
      
     


     console.log(1);
     // let timer = setInterval(()=>{
     // 	console.log('Test');
     // 	getSms();
     // }, 1000);

});

function getSms(){
	$.ajax({

      cache: false,
      timeout: 60000,
      url: "/chatajaxdata/",
      type: "POST",
      data: {},


      beforeSend: function () {
      },
      
      success: function (data, textStatus, jqXHR) {

          var arr;
          console.log(data);

          try {
              arr = JSON.parse(data);
              let html = '';
              arr.forEach((item)=>{
              	html += `<li><span class="user"> ${item.date} ${item.user}</span> ${item.sms}</li>`
              });

              $('#chat').html(html);
           
              console.log(arr);

          }catch (e) {
          	console.log(e)
          }

      },

      complete: function (jqXHR, textStatus) {

      },

      error: function (data) {
          console.log(data);
      },

  });
}
