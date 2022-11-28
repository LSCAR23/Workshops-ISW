function substract_name(){
    var direct= window.location.search.substr(1);
    var direct_aux= direct.split("?");
    var direct_U=direct_aux[0].split("=");
    var direct_R=direct_aux[1].split("=");
    return [direct_U[1],direct_R[1]];
}
function fill_spaces(){
    let bd_rides=JSON.parse(localStorage.getItem("rides"));
    let ride_name=substract_name()[1];
    for (let index = 0; index < bd_rides.length; index++) {
        const current_ride = bd_rides[index];
        if(current_ride["name"]==ride_name){
            $("#name").val(current_ride["name"]);
            $("#from").val(current_ride["from"]);
            $("#end").val(current_ride["to"]);
            $("#in_des").val(current_ride["description"]);
            $("#departure").val(current_ride["departure"]);
            $("#arrival").val(current_ride["arrival"]);
            let days=current_ride["days"];
            for (let index = 0; index < days.length; index++) {
                switch (days[index]) {
                    case "M": 
                        $("#cbox_Mon").prop("checked",true);
                        break;
                    case "TU":
                        $("#cbox_tues").prop("checked",true);
                        break
                    case "W":
                        $("#cbox_wedn").prop("checked",true);
                        break;
                    case "TH":
                        $("#cbox_thur").prop("checked",true);
                        break
                    case "F":
                        $("#cbox_fri").prop("checked",true);
                        break;
                    case "S":
                        $("#cbox_sat").prop("checked",true);
                        break
                    case "SU":
                        $("#cbox_sun").prop("checked",true);
                        break
                    default:
                        break;
                }
                
            }
            break; 
        }
    }
}

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
                "user":substract_name()[0],
                "name":name,
                "from":start,
                "to":end,
                "description":description,
                "departure":departure,
                "arrival":arrival,
                "days":fill_days()
            }
            delete_ride();
            const aux_db2=delete_ride();
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
                alert("Los datos se han actualizado correctamente");
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

function delete_ride(){
    let bd_rides=JSON.parse(localStorage.getItem("rides"));
    let ride_name=substract_name()[1];
    for (let index = 0; index < bd_rides.length; index++) {
        const current_ride = bd_rides[index];
        if(current_ride["name"]==ride_name){
            bd_rides.splice(index,1);
            break;
        }
    }
    return bd_rides;
}   

$("#welcome").html("<h5>Welcome "+substract_name()[0]+"</h5");
$("#cancel").attr("href","/project_1/html/dashboard.html?userName="+substract_name()[0]);
$("#back_b").attr("href","/project_1/html/dashboard.html?userName="+substract_name()[0]);
fill_spaces();