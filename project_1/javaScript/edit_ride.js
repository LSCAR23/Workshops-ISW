function substract_name(){
    var direct= window.location.search.substr(1);
    var direct_aux= direct.split("=");
    $("#welcome").html("<h5>Welcome "+direct_aux[1]+"</h5");
    load_table(direct_aux[1]);
}
substract_name();