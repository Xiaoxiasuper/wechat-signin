$(function(){
    $("form[name='signin']").submit(function () {
        var password = $("input[name='password']").val();
        var chatPassword = $("input[name='chatPassword']").val();
        if(password==chatPassword){
            return true;
        }else{
            alert("no");
            return false;
        }

    })
})