function substract_name(){
    var direct= window.location.search.substr(1);
    var direct_U=direct.split("=");
    return direct_U[1]
}
$("#welcome").html("<h5>Welcome "+substract_name()+"</h5");
$("#cancel").attr("href","/project_1/html/dashboard.html?userName="+substract_name());
$("#back_b").attr("href","/project_1/html/dashboard.html?userName="+substract_name());
$("#but_dash").attr("href","/project_1/html/dashboard.html?userName="+substract_name());
$("#but_rid").attr("href","/project_1/html/new_ride.html?userName="+substract_name());

function fill_spaces(){
    debugger;
    let bd_users=JSON.parse(localStorage.getItem("usuarios"));
    let user_name=substract_name();
    for (let index = 0; index < bd_users.length; index++) {
        const current_user = bd_users[index];
        if(current_user["nombreUsu"]==user_name){
            $("#first_name").val(current_user["name"]);
            $("#last_name").val(current_user["lastName"]);
            $("#telefono").val(current_user["phone"]);
            $("#nickname").val(current_user["nombreUsu"]);
            $("#password").val(current_user["contra"]);
            $("#confirm_password").val(current_user["contra"]);
        }
    }
}

$("#but_reg").click(()=>{
    let nom= $("#first_name").val();
    let ape=$("#last_name").val();
    let tel=$("#telefono").val();
    let nom_usu=$("#nickname").val();
    let contra=$("#password").val();
    let contra_conf=$("#confirm_password").val();
    let bd_users= delete_user();
    if(nom=="" || ape=="" ||tel==""||nom_usu==""||contra==""||contra_conf==""){
        alert("Verifique los datos.");
    }else{
        if(contra!=contra_conf){
            alert("Las contraseñas no coinsiden.");
        }else{
            let val=false;
            for (let index = 0; index < bd_users.length; index++) {
                if(bd_users[index]["nombreUsu"]==nom_usu){
                    val=true;
                } 
            }
            if(val){
                alert("El nombre de usuario "+nom_usu+" ya existe.")
            }else{
                let try_cast= parseInt(tel);
                if(!(Number.isInteger(try_cast))){
                    alert("Verifique el número telefonico");
                }else{
                    const user={
                        "name":nom,
                        "lastName":ape,
                        "phone":try_cast.toString(),
                        "nombreUsu":nom_usu,
                        "contra":contra
                    };
                    bd_users.push(user);
                    localStorage.setItem("usuarios",JSON.stringify(bd_users));
                    alert("Se han guerdado los cambios correctamente.");
                }
            }
        }
    }
});

function delete_user(){
    let bd_users=JSON.parse(localStorage.getItem("usuarios"));
    let user_name=substract_name();
    for (let index = 0; index < bd_users.length; index++) {
        const current_user = bd_users[index];
        if(current_user["nombreUsu"]==user_name){
            bd_users.splice(index,1);
            break;
        }
    }
    return bd_users;
} 
fill_spaces();