// Focus Number Box
$('#mkey').on('focusin',function(){
    $('.mkeyText').addClass('activeMkey');
});
$('#mkey').on('focusout', function(){
    if (!this.value) {
        $('.mkeyText').removeClass('activeMkey'); 
    }
});
$(".submit").click(()=>{
    var mkey = $("#mkey").val();
    if(!mkey){
        alert("Enter mkey");
    }else{
        var settings = {
            "url": "https://robicircle.vercel.app/apiValidation",
            "method": "POST",
            "data": /*JSON.stringify(*/{
              "mkey": mkey
            },
          };
          $.ajax(settings).done(function (response) {
            if(response.statusCode == 200){
                var url = "https://robicircle.vercel.app/home";
                window.location = url;
            }else{
                alert(response.message);
            }
          });
    }
});