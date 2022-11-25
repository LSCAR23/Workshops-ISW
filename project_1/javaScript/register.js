$("#but_reg").click(()=>{
    let nom= $("#first_name").val();
    let ape=$("#last_name").val();
    let tel=$("#telefono").val();
    let nom_usu=$("#nickname").val();
    let contra=$("#password").val();
    let contra_conf=$("#confirm_password").val();
    let aux= localStorage.getItem("usuarios");
    let bd_users= JSON.parse(aux);
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
                        "nombre":nom,
                        "apellido":ape,
                        "telefono":try_cast.toString(),
                        "nombreUsu":nom_usu,
                        "contra":contra
                    };
                    bd_users.push(user);
                    localStorage.setItem("usuarios",JSON.stringify(bd_users));
                    alert("Se ha registrado correctamente.");
                    vaciar();
                }
            }
        }
    }
});
function vaciar(){
    $("#first_name").val("");
    $("#last_name").val("");
    $("#telefono").val("");
    $("#nickname").val("");
    $("#password").val("");
    $("#confirm_password").val("");
}