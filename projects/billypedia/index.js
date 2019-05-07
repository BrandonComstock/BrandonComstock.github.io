/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('.quote').css('color', 'BLUE').css('font-style', 'BOLD');
        // uncomment this to inspect all available data; delete when done //
        $('#section-quotes').prependTo('#sections');
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        // let topRated = data.discography.topRated;
        // _.forEach(topRated, function(recording) {
        //     console.log(recording);
        // });
        $('#image-billy').attr('src', 'images/billy/billy-1.jpg');
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            console.log(recording);
        });
        
        var createTable = function(people){
            var createRow = function(person){
                var $row = $("<tr>");
                var $nameFirst = $("<td>").text(person.nameFirst);
                var $nameLast = $("<td>").text(person.nameLast);
                $row.append($nameFirst);
                $row.append($nameLast);
                return $row;
            }
            var $table = $("<table>");
            var $rows = people.map(createRow);
            $table.append($rows);
            return $table;
        };
        let people = [{nameFirst: "John", nameLast: "Doe"}, {nameFirst: "Dick", nameLast: "Jones"}]
        createTable(people).appendTo("body");

        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});