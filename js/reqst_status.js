document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById('statusTableBody');

    if (tableBody) { // Ensure the table exists
        const requestData = JSON.parse(localStorage.getItem('requests')) || [];

        // Populate table
        requestData.forEach(request => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${request.name}</td>
                <td>${request.components}</td>
                <td>${request.status}</td>
            `;
            tableBody.appendChild(row);
        });
    } else {
        console.error("Element #statusTableBody not found!");
    }
});
