let paragraphs = document.getElementsByTagName("p");

//Inject class .lead to all paragraphs
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].classList.add("lead");
}