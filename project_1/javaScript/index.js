$("#but_find").click(()=>{
    let rows="";
    let aux=localStorage.getItem("rides");
    const rides=JSON.parse(aux);
    for(var i =0;i<rides.length;i++){
        const current_ride=rides[i];
        if(current_ride["from"]==$("#from").val() && current_ride["to"]==$("#to").val()){
            let row="<tr>";
            row+="<td>"+current_ride["user"]+"</td>";
            row+="<td>"+current_ride["from"]+"</td>";
            row+="<td>"+current_ride["to"]+"</td>";
            row+="<td>"+"View"+"</td>";
            row+="</tr>"
            rows+=row;
        }
    }
    $("#table_rides tr").remove();
    $("#table_rides").append(rows);
});

function add_localstorage(){
    localStorage.setItem("usuarios",'{{}}');
    var aux_1=[{user:"703030937",from:"Limon",to:"San Jose"},{user:"703030938",from:"Limo",to:"San Jos"}];
    localStorage.setItem("rides",JSON.stringify(aux_1));
}
add_localstorage();