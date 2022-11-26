var name="";
function substract_name(){
    var direct= window.location.search.substr(1);
    var direct_aux= direct.split("=");
    return direct_aux[1];
}

$("#welcome").html("<h5>Welcome "+substract_name()+"</h5");
$("#cancel").attr("href","/project_1/html/dashboard.html?userName="+substract_name());
$("#back_b").attr("href","/project_1/html/dashboard.html?userName="+substract_name());
$("#but_dash").attr("href","/project_1/html/dashboard.html?userName="+substract_name());
$("#but_set").attr("href","/project_1/html/settings.html?userName="+substract_name());
$("#save").click(()=>{
    let name=$("#name").val();
    let start=$("#from").val();
    let end=$("#end").val();
    let description= $("#in_des").val();
    let departure=$("#departure").val();
    let arrival=$("#arrival").val();

    if(name=="" || start=="" || end=="" ||description=="" ||departure=="" ||arrival==""){
        alert("Por favor verifique los datos.");
    }else{
        if(verificar_time()){
            const new_ride={
                "user":substract_name(),
                "name":name,
                "from":start,
                "to":end,
                "description":description,
                "departure":departure,
                "arrival":arrival,
                "days":fill_days()
            }
            const aux_db=localStorage.getItem("rides");
            const aux_db2=JSON.parse(aux_db);
            let val=false;
            for (let index = 0; index < aux_db2.length; index++) {
                if(aux_db2[index]["name"]==name){
                    val=true;
                } 
            }
            if(val){
                alert("El ride "+name+" ya existe.")
            }else{
                aux_db2.push(new_ride);
                localStorage.setItem("rides",JSON.stringify(aux_db2));
                $("#name").val("");
                $("#from").val("");
                $("#end").val("");
                $("#in_des").val("");
                $("#departure").val("");
                $("#arrival").val("");
                $("#cbox_Mon").prop("checked",false);
                $("#cbox_tues").prop("checked",false);
                $("#cbox_wedn").prop("checked",false);
                $("#cbox_thur").prop("checked",false);
                $("#cbox_fri").prop("checked",false);
                $("#cbox_sat").prop("checked",false);
                $("#cbox_sun").prop("checked",false);
                alert("Los datos se han guardado correctamente");
            }
            
        }else{
            alert("La hora de llegada no puede ser menor ni igual a la hora de salida.");
        }
    }  
});

function verificar_time(){
    let departure=$("#departure").val();
    let arrival=$("#arrival").val();
    let dep_aux=departure.split(":");
    let arr_aux=arrival.split(":");
    let dep_aux2=parseInt(dep_aux[0]+dep_aux[1]);
    let arr_aux2=parseInt(arr_aux[0]+arr_aux[1]);
    if(dep_aux2>=arr_aux2){
        return false;
    }else{
        return true;
    }
}

function fill_days(){
    let days=[];
    if($("#cbox_Mon").prop("checked")){
        days.push($("#cbox_Mon").attr("data-day"))
    }
    if($("#cbox_tues").prop("checked")){
        days.push($("#cbox_tues").attr("data-day"))
    }
    if($("#cbox_wedn").prop("checked")){
        days.push($("#cbox_wedn").attr("data-day"))
    }
    if($("#cbox_thur").prop("checked")){
        days.push($("#cbox_thur").attr("data-day"))
    }
    if($("#cbox_fri").prop("checked")){
        days.push($("#cbox_fri").attr("data-day"))
    }
    if($("#cbox_sat").prop("checked")){
        days.push($("#cbox_sat").attr("data-day"))
    }
    if($("#cbox_sun").prop("checked")){
        days.push($("#cbox_sun").attr("data-day"))
    }
    return days;
}