setInterval(updateClock, 1000);
function updateClock() {
    const clock = document.getElementById("alarm");
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    clock.innerHTML = `${hours>9?hours:'0'+hours}:${minutes>9?minutes:'0'+minutes}:${seconds>9?seconds:'0'+seconds}`;
}
function addAlarm() {
    const hours = document.getElementById("hours").value;
    const minutes = document.getElementById("minutes").value;
    const alarmItem = document.createElement("div");
    alarmItem.className = "alarm-item";
    const timeDisplay = document.createElement("span");
    timeDisplay.innerHTML = `${hours}:${minutes}`;
    alarmItem.appendChild(timeDisplay);
    const toggleSwitch = document.createElement("div");
    toggleSwitch.className = "toggle-switch";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `switch-${Date.now()}`;  
    const label = document.createElement("label");
    label.setAttribute("for", checkbox.id);
    label.innerHTML = "Toggle";
    toggleSwitch.appendChild(checkbox);
    toggleSwitch.appendChild(label);
    alarmItem.appendChild(toggleSwitch);
    const trashIcon = document.createElement("div");
    trashIcon.className = "trash-icon";
    const deleteButton = document.createElement("input");
    deleteButton.type = "image";
    deleteButton.src = "./bin.png"; 
    deleteButton.alt = "Delete";
    deleteButton.height = "30";
    deleteButton.onclick = function() {
        deleteAlarm(alarmItem); 
    };
    trashIcon.appendChild(deleteButton);
    alarmItem.appendChild(trashIcon);
    document.getElementById("alarm-list").appendChild(alarmItem);
}

function deleteAlarm(alarmItem) {
    alarmItem.remove();
}
