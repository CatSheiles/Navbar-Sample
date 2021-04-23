const linkName = document.querySelector(".link-name");
const nameInput = document.querySelector(".name-input");

function setName(name) {
    linkName.innerText = "Welcome, "; //reset name after welcome, every time
    let nameInner = document.createElement("span");
    nameInner.innerText = name;
    nameInner.setAttribute("class", "name"); //give it a class so it can be styled
    linkName.appendChild(nameInner);
    nameInput.value = ""; //reset box after user inputs text
    return nameInner;
}

nameInput.addEventListener("change", () => {
    setName(nameInput.value);
})