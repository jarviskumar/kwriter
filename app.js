const boldKey = document.querySelector(".bold");
const italicKey = document.querySelector(".italic");
const blueKey = document.querySelector(".textBlue");
const whiteKey = document.querySelector(".textWhite");
const clearKey = document.querySelector(".clearScr");
const textBox = document.getElementById("textBox");
const removeStyle = document.querySelector(".removeStyle")
boldKey.addEventListener("click",()=>{
    textBox.classList.add("bold");
});
italicKey.addEventListener("click",()=>{
    textBox.classList.add("italic");
});

blueKey.addEventListener("click",()=>{
    textBox.classList.add("blue");
    textBox.classList.remove("white");
});
whiteKey.addEventListener("click",()=>{
    textBox.classList.add("white");
    textBox.classList.remove("blue");
});
removeStyle.addEventListener("click",()=>{
    textBox.classList.remove("bold");
    textBox.classList.remove("italic");
});
clearKey.addEventListener("click",()=>{
    textBox.value = ""
    console.log("clear")
});
