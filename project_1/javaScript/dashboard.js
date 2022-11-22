function substract_name(){
    var direct= window.location.search.substr(1);
    var direct_aux= direct.split("=");
    $("#welcome").html("<h5>Welcome "+direct_aux[1]+"</h5");
    load_table(direct_aux[1]);
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
            row+="<td><a data-ride="+current_ride["name"]+" data-user="+name+" href="+"/project_1/html/edit_ride.html"+">Edit</a>-Delete</td>";
            row+="</tr>"
            rows+=row;
        }
    }
    $("#main_table tr").remove();
    $("#main_table").append(rows);
}
substract_name();