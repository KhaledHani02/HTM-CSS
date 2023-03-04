var telegram_bot_id = "DA MODIFICARE";
var chat_id = DA MODIFICARE;

function sendtelegram () {
var nome, Phone, nump,data;
    nome = document.getElementById("nome").value;
    nump = document.getElementById("numP").value;
    Phone = document.getElementById("phone").value;
    data = document.getElementById("data").value;
    message = "Nome: " + nome + "\nNumero Persone: " + nump + "\nPhone: " + Phone +"\nData:"+ data ;
    console.log(message);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });

    return false;
};
