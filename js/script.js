$("button").click(function () {
    var html = '<i id="loading" class="fa fa-spinner fa-spin fa-3x"></i>';
    $("#quotetext").html(html);
    $.getJSON("https://andruxnet-random-famous-quotes.p.mashape.com/endpoint?mashape-key=mFRfHTOUp0mshWC5yVHhoPWdVYOvp1mULMMjsn7Dglyj7jydgf&cat=famous",
        function (result) {
            html = '<p>“' + result.quote + '”</p>';
            html += '<p id="autor">- ' + result.author + '</p>';
            $("#quotetext").html(html);
        });
});
