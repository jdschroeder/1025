jQuery(document).ready(function() {
    function sumTotalScore() {
        var totalScore = 0;
        $(".rowscore").each(function() { totalScore += parseInt($(this).html()); });
        $("#totalscore").html(totalScore);
    }
    function calculateRowScore(row) {
        var rowScore = 0;
        var checkedBoxes = $("input[data-distance=" + row + "]:checked");
        if(checkedBoxes.length == 6) { rowScore += parseInt(row); } // Calculate bonus for scoring all six at a distance
        $(checkedBoxes).each(function(box) { rowScore += parseInt($(this).attr("data-points")); });
        $(".rowscore[data-distance=" + row + "]").html(rowScore);
    }
    $("input[type=checkbox]").on("change", function() {
        calculateRowScore($(this).attr('data-distance')); // Calculate scores a row at a time for efficiency
        $("label[for=" + $(this).attr("id") + "] i").toggleClass("fa-square-o").toggleClass("fa-check-square-o");
        sumTotalScore(); // Re-sum total score after a row has changed
    });
}, $);