var name = document.querySelector("#contact_name");
var email = document.querySelector("#contact_email");
var message = document.querySelector("#contact_message");
var submit = document.getElementById("submit");

var num = name.value;
var ema = email.value;
var msg = message.value;

submit.addEventListener("click", async () => {
    alert(msg)
    var req = await fetch("http://localhost:8181/api/v1", {
        method: "POST",
        body: JSON.stringify({
            message: msg,
            email:ema,
            name: num,
        })
    })
    var res = await req.json();
    console.log(res);
})