function getValueById(id) {
  const getEle = document.getElementById(id);
  const getValue = getEle.value;
  return getValue;
}

document.getElementById("logIn").addEventListener("click", function () {
  let email = getValueById("email-input");
  let pass = getValueById("pass-input");
  if (email === "donate@gmail.com" && pass === "123456") {
    window.location.href = "index.html";
  } else {
    let div1 = document.getElementById("description-div");
    let newP = document.createElement("p");
    newP.innerHTML = `
      <p class="text-danger">The password is wrong!<p>
      `;
    div1.appendChild(newP);
  }
});
