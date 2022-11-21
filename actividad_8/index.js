$("#enviar").click(()=>{
    let usuario={nombre:$("#nombre").val(),apellido:$("#apellido").val(),telefono:$("#telefono").val()};
    if (localStorage.length==0) {
        localStorage.setItem("usuario_1",JSON.stringify(usuario));
    }else{
        let ind=parseInt(localStorage.key(0).split("_")[1])+1;
        localStorage.setItem("usuario_"+String(ind),JSON.stringify(usuario));
    }
});


