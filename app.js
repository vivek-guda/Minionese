var txtInp = document.querySelector("#inputArea");
var translatebtn = document.querySelector("#translatebtn");
var outputTxt = document.querySelector("#outputArea");
var retrybtn = document.querySelector("#retry");

var clickHandler = () => {
    var url = "https://api.funtranslations.com/translate/yoda.js" + "?text=" + txtInp.value;
    axios.get(url)
    .then(res => {
        var translatedText = res.data.contents.translated;
        outputTxt.innerText = translatedText;
    })
    .catch(() => {
        alert("Something went wrong. PLease try again later.");
    })
}

translatebtn.addEventListener("click",clickHandler);

retrybtn.addEventListener("click",() => {
    txtInp.value = "";
    outputTxt.value = "";
})
