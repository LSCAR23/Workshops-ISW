function substract_name(){
    var direct= window.location.search.substr(1);
    var direct_aux= direct.split("?");
    var direct_aux2=direct_aux[0].split("=");
    $("#welcome").html("<h5>Welcome "+direct_aux2[1]+"</h5");
    set_links(direct_aux2[1]);
    load_table(direct_aux2[1]);
}

function load_table(name){
    let rows="";
    let aux=localStorage.getItem("rides");
    const rides=JSON.parse(aux);
    for(var i =0;i<rides.length;i++){
        const current_ride=rides[i];
        if(current_ride["user"]==name){
            let row="<tr>";
            row+="<td>"+current_ride["name"]+"</td>";
            row+="<td>"+current_ride["from"]+"</td>";
            row+="<td>"+current_ride["to"]+"</td>";
            row+="<td><a href="+"/project_1/html/edit_ride.html?userName="+name+"?rideName="+current_ride["name"]+">Edit</a>-<a class='del' href="+"/project_1/html/dashboard.html?userName="+name+"?rideName="+current_ride["name"]+">Delete</a></td>";
            row+="</tr>"
            rows+=row;
        }
    }
    $("#main_table tr").remove();
    $("#main_table").append(rows);
}
function set_links(name){
    $("#see_b").attr("href","/project_1/html/new_ride.html?userName="+name);
    $("#set_b").attr("href","/project_1/html/settings.html?userName="+name);
    $(".plus_b").attr("href","/project_1/html/new_ride.html?userName="+name);
}

function delete_ride(ride_name){
    let bd_rides=JSON.parse(localStorage.getItem("rides"));
    for (let index = 0; index < bd_rides.length; index++) {
        const current_ride = bd_rides[index];
        if(current_ride["name"]==ride_name){
            bd_rides.splice(index,1);
            localStorage.setItem("rides",JSON.stringify(bd_rides));
            break;
        }
    }
} 

function exterminate(){
    var direct= window.location.search.substr(1);
    var direct_aux= direct.split("?");
    debugger;
    if(direct_aux.length>1){
        let direct_aux_2=direct_aux[1].split("=");
        delete_ride(direct_aux_2[1]);
    }
}
exterminate();
substract_name();
