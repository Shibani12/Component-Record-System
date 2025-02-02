// document.addEventListener("DOMContentLoaded", function () {
//     const requestTable = document.getElementById("updateRequestTable");
//     let requestData = JSON.parse(localStorage.getItem("requests")) || [];

//     // Populate the table with pending requests
//     function loadRequests() {
//         requestTable.innerHTML = ""; // Clear table before updating
//         requestData.forEach((request, index) => {
//             const row = document.createElement("tr");
//             row.innerHTML = `
//                 <td>${request.name}</td>
//                 <td>${request.components}</td>
//                 <td>
//                     <select class="statusSelect" data-index="${index}">
//                         <option value="Pending" ${request.status === "Pending" ? "selected" : ""}>Pending</option>
//                         <option value="Approved" ${request.status === "Approved" ? "selected" : ""}>Approved</option>
//                         <option value="Rejected" ${request.status === "Rejected" ? "selected" : ""}>Rejected</option>
//                     </select>
//                 </td>
//                 <td><button class="updateBtn btn btn-primary" data-index="${index}">Update</button></td>
//             `;
//             requestTable.appendChild(row);
//         });

//         attachUpdateEvent();
//     }

//     // Attach event listeners to update buttons
//     function attachUpdateEvent() {
//         document.querySelectorAll(".updateBtn").forEach(button => {
//             button.addEventListener("click", function () {
//                 const index = this.getAttribute("data-index");
//                 const newStatus = document.querySelector(`.statusSelect[data-index="${index}"]`).value;

//                 requestData[index].status = newStatus; // Update status
//                 localStorage.setItem("requests", JSON.stringify(requestData)); // Save updated requests
//                 alert("Request status updated!");
//                 loadRequests(); // Reload table
//             });
//         });
//     }

//     loadRequests(); // Load requests on page load
// });

document.addEventListener("DOMContentLoaded", function () {
    const requestTable = document.getElementById("updateRequestTable");
    let requestData = JSON.parse(localStorage.getItem("requests")) || [];

    // Populate the table with pending requests
    function loadRequests() {
        requestTable.innerHTML = ""; // Clear table before updating
        requestData.forEach((request, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${request.name}</td>
                <td>${request.components}</td>
                <td>
                    <select class="statusSelect" data-index="${index}">
                        <option value="Pending" ${request.status === "Pending" ? "selected" : ""}>Pending</option>
                        <option value="Approved" ${request.status === "Approved" ? "selected" : ""}>Approved</option>
                        <option value="Rejected" ${request.status === "Rejected" ? "selected" : ""}>Rejected</option>
                    </select>
                </td>
                <td>
                    <button class="updateBtn btn btn-primary" data-index="${index}">Update</button>
                    <button class="deleteBtn btn btn-danger" data-index="${index}">Delete</button>
                </td>
            `;
            requestTable.appendChild(row);
        });

        attachEventListeners();
    }

    // Attach event listeners for update and delete actions
    function attachEventListeners() {
        document.querySelectorAll(".updateBtn").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                const newStatus = document.querySelector(`.statusSelect[data-index="${index}"]`).value;

                requestData[index].status = newStatus; // Update status
                localStorage.setItem("requests", JSON.stringify(requestData)); // Save updated requests
                alert("Request status updated!");
                loadRequests(); // Reload table
            });
        });

        document.querySelectorAll(".deleteBtn").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");

                if (confirm("Are you sure you want to delete this request?")) {
                    requestData.splice(index, 1); // Remove request from the array
                    localStorage.setItem("requests", JSON.stringify(requestData)); // Save updated list
                    alert("Request deleted successfully!");
                    loadRequests(); // Reload table
                }
            });
        });
    }

    loadRequests(); // Load requests on page load
});
