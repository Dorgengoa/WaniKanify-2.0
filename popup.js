function save_popup() {
    var apiKey = $("#apiKey")[0].value;
    if (!apiKey) {
        $("#apiKeyControl").addClass("error");
         return;
    }
    
    $("#apiKeyControl").removeClass("error");

    var defaultOptions = {
        "wanikanify_apiKey": apiKey,
        "wanikanify_runOn": "onClick",
        "wanikanify_srs": ["apprentice", "guru", "master", "enlighten"],
        "wanikanify_removeNumbers": "Yes"
    }
    browser.storage.sync.set(defaultOptions, function() {
        browser.browserAction.setPopup({popup:""});
        window.close();
    });
}    

document.addEventListener('DOMContentLoaded', function() {
    $('#save').click(save_popup);
});
