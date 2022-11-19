$("#but_log").click(()=>{
    let user_name=$("#user_name").val();
    let password=$("#pass").val();
    let val=false;
    let users_bd=JSON.parse(localStorage.getItem("usuarios"));
    for (let index = 0; index < users_bd.length; index++) {
        const element = users_bd[index];
        if(element["nombreUsu"]== user_name&& element["contra"]==password){
            val=true;
        }
    }
    if(val){
        $("#but_log").attr("href","/project_1/html/dashboard.html");
    }else{
        alert("Datos incorrectos.");
    }
});