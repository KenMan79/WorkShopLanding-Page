
let sendButton = document.querySelector("#bookHourBtn");
sendButton.addEventListener("click", scheduleAppt);
  
function scheduleAppt() {
    let userName = document.querySelector("#username").value;
    let nameEx = /^\w{3,25}$/g;
    let dateEx = /^\d{4}\/\d{2}\/\d{2} \d{2}\:\d{2}$/g;
    console.log(userName.match(nameEx));
    if (!userName.match(nameEx)){
        $.notify("Invalid Input!", "error");
        return;
    }else{
    let instructorList = document.querySelector("#lecturer");
    let instructor = instructorList.options[instructorList.selectedIndex].text;
    let [instructorFirstName, instructorLastName] = instructor.split(' ');
    let dateTime = document.querySelector("#datetime").value;
    let [fullDate, time] = dateTime.split(" ");
    let [year, month, date] = fullDate.split("/");
    let newAppt = (`${instructorFirstName} - ${month}/${date} - ${time}`);
    //console.log(newAppt);
    if (dateTime.match(dateEx)){
    let newLi = document.createElement("li");
    let newSpan = document.createElement("span");
    let newI = document.createElement('i');
    newI.className = "fas fa-chevron-circle-right";
    
    let apptList = document.querySelector("#appt-list");

    newSpan.textContent = newAppt;
    console.log(newSpan.innerHTML);

    apptList.append(newLi);
    newLi.append(newSpan);
    newLi.append(newI);
    //console.log(newI);

    let consultNum = document.querySelector(".box-footer span").innerText;
    let consultNum2 = document.querySelector(".box-footer span");
    //console.log(consultNum);
    consultNum++;
    //console.log(consultNum);
    updatedConsultNum = consultNum;
    //console.log(updatedConsultNum);
    consultNum2.innerText = updatedConsultNum;
    //console.log(updatedConsultNum);
    $.notify("Access granted", "success");
        }else
        $.notify("Invalid Input!", "error");
    }

}
