var friends = [
    {name: "dave", favcolor: "blue", favnumber: "67"},
    {name: "john", favcolor: "green", favnumber: "89"},
    {name: "nick", favcolor: "black", favnumber: "48"},
    {name: "chuck", favcolor: "orange", favnumber: "55"},
    {name: "george", favcolor: "blue", favnumber: "22"}
];

$().ready(function() {

    var tbody = $("#tb");

    for(var friend of friends) {
        var row = "<tr>";
        row += "<td>" + friend.name + "</td>";
        row += "<td>" + friend.favcolor + "</td>";
        row += "<td>" + friend.favnumber + "</td>";
        row += "</tr>";

        tbody.append(row);
    }
})