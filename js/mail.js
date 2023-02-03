let emailNL = document.getElementById("subnewsletterinput");
let btnNL = document.getElementById("subnewsletterbutton");

let nameC = document.getElementById("nameinput");
let emailC = document.getElementById("emailinput");
let phoneC = document.getElementById("phoneinput");
let messageC = document.getElementById("messageinput");
let btnC = document.getElementById("buttoninput");

btnNL &&
    btnNL.addEventListener("click", () => {
        Email.send({
            SecureToken: "41b9b013-4dcf-47b9-a01c-3b0d539c145f",
            To: "codeinfluencer@gmail.com", //sp
            From: "markwilsonne@gmail.com",
            Subject: "Subscription from SpaciousPlace.co.ke",
            Body: `New newsletter subscription from ${emailNL.value}. Please add them to the mailing list.`,
        }).then((message) => alert("Subscription Added"));
    });

btnC &&
    btnC.addEventListener("click", () => {
        Email.send({
            SecureToken: "41b9b013-4dcf-47b9-a01c-3b0d539c145f",
            To: "codeinfluencer@gmail.com", //sp
            From: "markwilsonne@gmail.com",
            Subject: "Message from SpaciousPlace.co.ke",
            Body: "Name: " +
                nameC +
                "\nEmail: " +
                emailC +
                "\nPhone: " +
                phoneC +
                "\nMessage: " +
                messageC,
        }).then((message) => alert("Message Sent"));
    });