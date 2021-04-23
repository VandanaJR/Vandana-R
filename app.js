const mail= document.querySelector(".mail-id")

console.log(mail.innerText)
mail.addEventListener("click",()=>copyToClipboad(mail))

function copyToClipboad(data){
    const el =document.createElement("textarea");
    el.value=data.innerText;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    data.setAttribute("data-tooltip", "Copied !");
}