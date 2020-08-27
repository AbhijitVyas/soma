$( document ).ready(function() {

    getSOMAMetrics();
});

function getSOMAMetrics() {
    $.get("https://ease-crc.github.io/soma/owl/current/SOMA.owl", function(owl_data) {
        $.ajax({
            url: "https://ontometrics.informatik.uni-rostock.de/ontologymetrics/ServletController",
            type: "POST",
            contentType: 'application/json',
            data: {
                text: owl_data,
                path: "C:\fakepath\DUL.owl",
                base: "on",
                store_aggreement: "on"
            },
            success: function(result){
                console.info("got metrics");
                console.info(result);
            },
            error: function(result){
                console.info("METRICS FAILURE");
                console.info(result);
            }
        });
    }, "text");
   
    
};

$("#releases").change(function(){
    
    getSOMAMetrics();
 
}).change();
