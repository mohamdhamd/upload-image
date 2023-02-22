$(".sub").click(function(){
    var name =document.getElementById("name").value;
//     localStorage.setItem("name",name);
    var username =document.getElementById("username").value;
// localStorage.setItem("username",username);

//     $(".h1").html(name)
//     $(".p").html("@"+username)

//     $(".items").css({"margin-bottom":"-100%","display":"none"});

//     $(".hero").fadeIn(700);
//     $(".hero").css({"margin-top":"0%"});
    if(name == ""){
        alert("please Enter your name")
    }else{
        var name =document.getElementById("name").value;
        localStorage.setItem("name",name);
        var username =document.getElementById("username").value;
    localStorage.setItem("username",username);
    // console.log(name+"---"+username)
    
        $(".h1").html(name)
        $(".p").html("@"+username)
        // $(".items").fadeOut(100);
        $(".items").css({"margin-bottom":"-100%","display":"none"});
    
        $(".hero").fadeIn(700);
        $(".hero").css({"margin-top":"0%"});
    }
    if(username== ""){
        alert("please Enter your username")
    }else{
        var name =document.getElementById("name").value;
        localStorage.setItem("name",name);
        var username =document.getElementById("username").value;
    localStorage.setItem("username",username);
    // console.log(name+"---"+username)
    
        $(".h1").html(name)
        $(".p").html("@"+username)
        // $(".items").fadeOut(100);
        $(".items").css({"margin-bottom":"-100%","display":"none"});
    
        $(".hero").fadeIn(700);
        $(".hero").css({"margin-top":"0%"});
    }
    

})




















let profilePic =document.getElementById("profile-pic");
let inputFile =document.getElementById("input-file");


inputFile.onchange = function(){
    profilePic.src=URL.createObjectURL(inputFile.files[0])
}
