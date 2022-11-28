function substract_name(){
    debugger;
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
$("#welcome").html("<h5>Owner: "+substract_name()[0]+"</h5");
$("#back_b").attr("href","/project_1/html/index.html?userName="+substract_name()[0]);
fill_spaces();