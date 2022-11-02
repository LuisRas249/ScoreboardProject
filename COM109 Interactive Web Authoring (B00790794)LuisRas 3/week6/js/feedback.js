

$(document).ready(function () {

    $("#showElements").click(function () {
        var output = "";
        $('#course input, #course select').each(
            function (index) {
                var input = $(this);
                output += 'Type: ' + input.attr('type') + 'Name: ' + input.attr('name') + 'Value: ' + input.val() + '\n';
            }
        );
        alert(output);
    });
});