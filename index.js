function hideModal() {
    document.getElementById("modal").style.pointerEvents = "none";   
    document.getElementById("modal").style.opacity = 0;   
}

function showModal() {
    document.getElementById("modal").style.pointerEvents = "all";   
    document.getElementById("modal").style.opacity = 1;   
}

function showMenu() {
    document.getElementById("drop-menu").style.display = "flex";
    setTimeout(() => {
        document.getElementById("drop-menu").style.height = "25%";
        document.body.onclick = (ev) => {
            ev.preventDefault();
            const target = ev.path[0];
            if(!target.classList.contains("drop-menu") && !target.classList.contains("drop-menu-item")) {
                hideMenu();
                document.body.onclick = undefined;
            }
        }    
    }, 0);
}

function hideMenu() {
    document.getElementById("drop-menu").style.height = 0;
    setTimeout(() => {
        document.getElementById("drop-menu").style.display = "none";
    }, 230);
}

document.getElementById("buy-btn").onclick = (ev) => {
    ev.preventDefault();
    showModal();
}

document.getElementById("modal").onclick = (ev) => {
    const target = ev.path[0];
    if(target.classList.contains("modal") || target.classList.contains("close-modal-btn")) {
        hideModal();
    }
}; 

document.getElementById("menu-icon").onclick = (ev) => {
    showMenu();
}

const text_subject =  document.getElementById("type_subject");
const text_project = document.getElementById("type_project");
const list = document.getElementById("list");

document.getElementById("btn-add").onclick = (ev) => {
    ev.preventDefault();

    const para = document.createElement("div");
    para.classList.add("list-item");
    para.innerHTML = `
<p class="subjects" style="text-decoration: none; font-weight:700; text-align:left;">${text_subject.value} </p>
<p class="projects" style="color: #92E3A9; font-weight:400; text-align:left;"> (${text_project.value})</p>
`;
    list.appendChild(para);

    text_subject.value = "";
    text_project.value = "";
}    
