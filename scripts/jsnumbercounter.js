$().ready(function() {

    $("#plus").click(function() {
        var nbr = $("label").val();
        nbr += 1;
        $("label").text(nbr);
    })

    $("#minus").click(function() {
        var nbr = $("label").val();
        nbr -=1;
        $("label").text(nbr);
    })
})