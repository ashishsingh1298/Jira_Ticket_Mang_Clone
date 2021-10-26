console.log("This script is working fine");
let addbtn = document.querySelector(".add");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textareaCont = document.querySelector(".textarea-cont");
let addFlag = false;
addbtn.addEventListener("click",(e)=>{
    // Display modal one first clicl, second click modal disappear
    addFlag = !addFlag;
    if(addFlag){
        modalCont.style.display = "flex";
    }else{
        modalCont.style.display = "none";
    }
})
modalCont.addEventListener("keydown",(e) => {
    let keyPress = e.key;
    if(keyPress === "Shift"){
        createTicket();
        addFlag = false;
        textareaCont.value = "";
        modalCont.style.display = "none";
    }
})
function createTicket() {
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML = `
    <div class="ticket-color"></div>
    <div class="ticket-id">#12wf32</div>
    <div class="ticket-text">Lorem ipsum dolor sit ame.</div>`;
    mainCont.appendChild(ticketCont);
}