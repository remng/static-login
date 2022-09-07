const imagem = document.querySelector("img");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const btnEntrar = document.querySelector("button[type='submit']");
const spanMsgEmail = document.querySelector("#msg-email");

imagem.addEventListener("click", function () {
  if (!imagem.src.includes("loginimage2")) {
    imagem.src = "./assets/images/loginimage2.png";
  } else {
    imagem.src = "./assets/images/loginimage.png";
  }
});

inputEmail.addEventListener("keyup", function () {
  if (inputEmail.value == "") {
    spanMsgEmail.innerText = "Enter some value in the email field";
  } else {
    spanMsgEmail.innerText = "";
  }
});

inputPassword.addEventListener("keyup", function () {
  const msgSpan = document.querySelector("#msgPassword");
  if (inputPassword.value.length < 8) {
    const span = document.createElement("span");
    const message = document.createTextNode(
      "Password must be at least 8 characters long."
    );
    span.appendChild(message);
    span.setAttribute("id", "msgPassword");

    if (!msgSpan) {
      inputPassword.insertAdjacentElement("afterend", span);
    } else {
      msgSpan.innerText = "Password must be at least 8 characters long.";
    }
  } else {
    msgSpan.innerText = "";
  }
});

btnEntrar.addEventListener("click", function (event) {
  event.preventDefault();
  const spanMsgPass = document.querySelector("#msgPassword");

  if(spanMsgPass.childNodes.length != 0 || spanMsgEmail.childNodes.length != 0){
      alert("Complete all the fields correctly!")
  } else {
    alert("Welcome!")
  }
});
