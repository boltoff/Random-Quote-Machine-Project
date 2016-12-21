$(document).ready(function () {
    $("#getquotebutton").click(function () {
        var html = '<i id="loading" class="fa fa-spinner fa-spin fa-3x"></i>';
        $("#quotetext").html(html);
        $.getJSON("https://andruxnet-random-famous-quotes.p.mashape.com/endpoint?mashape-key=mFRfHTOUp0mshWC5yVHhoPWdVYOvp1mULMMjsn7Dglyj7jydgf&cat=famous",
            function (result) {
                html = '<p id="quote">“' + result.quote + '”</p>';
                html += '<p id="autor">- ' + result.author + '</p>';
                $("#quotetext").html(html);
            });
    });
    $("#twitbutton").click(function () {
        var quotestr = $("#quote").text();
        var autorstr = $("#autor").text();
        var req;
        var elemlng = quotestr.length + autorstr.length;
        if (elemlng > 140) {
            var diflng = elemlng - 140;
            var slicelng = quotestr.length - diflng - 3;
            var quotestr = quotestr.slice(0, slicelng - 1);
            req = quotestr + "...”" + autorstr;
        } else {
            req = quotestr + autorstr;
        }
        var encReq = encodeURIComponent(req);
        var uri_req = "https://twitter.com/intent/tweet?text=" + encReq;
        window.open(uri_req, "_blank");
    });
});
