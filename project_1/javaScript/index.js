$("#but_find").click(()=>{
    find_ride();
});

function find_ride(){
    let rows="";
    let aux=localStorage.getItem("rides");
    const rides=JSON.parse(aux);
    for(var i =0;i<rides.length;i++){
        const current_ride=rides[i];
        if(current_ride["from"]==$("#from option:selected").text() && current_ride["to"]==$("#to option:selected").text()){
            let row="<tr>";
            row+="<td>"+current_ride["user"]+"</td>";
            row+="<td>"+current_ride["from"]+"</td>";
            row+="<td>"+current_ride["to"]+"</td>";
            row+="<td>"+"<a href="+"/project_1/html/see_ride.html?userName="+current_ride["user"]+"?rideName="+current_ride["name"]+">View</a>"+"</td>";
            row+="</tr>"
            rows+=row;
        }
    }
    $("#table_rides tr").remove();
    $("#table_rides").append(rows);
}

function add_localstorage(){
    if(localStorage.length==0){
        var aux_2=[{"name":"Oscar","lastName":"Lara","phone":"83105790","nombreUsu":"10scar","contra":"123"}];
        localStorage.setItem("usuarios",JSON.stringify(aux_2));
        var aux_1=[{"user": "10scar", "name": "Gym", "from": "casa", "to": "gym", "description": "blabalabla", "departure": "08:11","arrival": "08:40","days": ["M", "TU", "W", "TH", "F", "S"]}];
        localStorage.setItem("rides",JSON.stringify(aux_1));
    }
}
add_localstorage();

function fill_select(key,select,val){
    let opts="";
    let aux=localStorage.getItem("rides");
    const rides=JSON.parse(aux);
    let aux_1=[];
    for(var i =0;i<rides.length;i++){
        const current_ride=rides[i];
        aux_1.push(current_ride[key]);
    }
    let aux_2={};
    for(var i =0;i<aux_1.length;i++){
        if(!(aux_1[i] in aux_2) && val){
            aux_2[aux_1[i]]=aux_1[i];
            opts+="<option value="+aux_1[i]+">"+aux_1[i]+"</option>";
        }else{
            if(!(aux_1[i] in aux_2) && $("#from option:selected").text()==rides[i]["from"]){
                aux_2[aux_1[i]]=aux_1[i];
                opts+="<option value="+aux_1[i]+">"+aux_1[i]+"</option>";
            }
        }
    }
    $(select+" option").remove();
    $(select).append(opts);
}

fill_select("from","#from",true);
fill_select("to","#to",false);
$(document).on('change', '#from', function(event) {
    fill_select("to","#to",false);
});
find_ride();

