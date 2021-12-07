// User Interface Logic
$(document).ready(function() {
    $("#pig-latin").submit(function(event) {
        event.preventDefault();
        const inputtedSentence = $("#input").val();
        const latinword = pigLatin(inputtedSentence);
        $("#output").html(latinword)
    })
})