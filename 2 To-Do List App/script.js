function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskValue;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "okay";
    removeBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = ""; // Clear input field after adding
}
