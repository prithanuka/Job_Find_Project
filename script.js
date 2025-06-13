/*======================   NAVBAR MENU CLICK EVENT   =======================*/

$(document).ready(function(){
    // var navlink = '.navlinks li a ';
    // $(".cmn").on('click',function(){     
    //     $(".cmn").each(function(){
    //       $(".cmn").removeClass('active');
    //   });
    //      $(this).addClass('active');
    // });
   

/*======================     TOGGLE MENU CLICK EVENT      ======================*/

    $("#hamburger").click(function() {
        $("#hamburger").toggleClass("ham-active");
        $(".navlinks").toggleClass("navlink-active");
       
      });
    });

/*======================     CONTACT FORM VALIDATION      =======================*/


console.log("jquery and validation loaded");

$(".form-btn").click(function(){
  $("#mssgform").validate({
    rules: {
      firstname: {
          required:true,
          minlength:4   
      },
      lastname: {
        required:true,
        minlength:3
      },
      email: {
          required:true,
          email:true
      },
      query:{
          required:true,
          minlength:80,
          maxlength:250
      },
    },
    messages:{
      firstname:{
          required:"!! Please enter your first name",
          minlength:"!! This field must contain 4 characters",
      },
      lastname:{
        required:"!! Please enter your last name",
        minlength:"!! This field must contain 3 characters",
      },
      email:{
          required:"!! Please enter your email address",
          email:"!! Please enter a valid email address",
      },
      query:{
          required:"!! Please write your message",
          minlength:"!! Your message should be of atleast 80 characters",
          maxlength:"!! Your message should not exceed 250 characters"
      },
      errorPlacement: function(error, element) {
        if (element.attr("firstname") == "firstname" ) 
            error.appendTo('#nameError');
        if (element.attr("lastname") == "lastname") 
          error.appendTo('#surnameError');
        if (element.attr("email") == "email") 
          error.appendTo('#emailError');
        if (element.attr("query") == "query") 
          error.appendTo('#mssgError');
      }
    },
    submitHandler: function (form, event) {
      alert("Submitted Successfully!");
      event.preventDefault();
          let first_name = $("#firstname").val();
          let last_name = $("#lastname").val();
          let user_email = $("#email").val();
          let user_mssg = $("#query").val();
          localStorage.setItem("firstname", first_name);
          localStorage.setItem("lastname", last_name);
          localStorage.setItem("email", user_email);
          localStorage.setItem("message", user_mssg);
          window.location.href = "message.html";
    },
    invalidHandler: function(event, validator) {
      alert("Form is invalid, not submitting!");
    },
  });
});


/*======================     JOBAPPLY FORM VALIDATION      =======================*/