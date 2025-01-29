let hardwareDatabase = [
    { name: "Laptop", availability: "Available" },
    { name: "Projector", availability: "Out of Stock" },
    { name: "Tablet", availability: "Available" },
    { name: "Printer", availability: "Available" },
];

function loadHardwareOptions() {
    const hardwareSelect = document.getElementById("hardwareSelect");
    hardwareSelect.innerHTML = ""; // Clear existing options

    hardwareDatabase.forEach(hardware => {
        const option = document.createElement("option");
        option.value = hardware.name;
        option.textContent = hardware.name;
        hardwareSelect.appendChild(option);
    });
}

// Update hardware availability
document.getElementById("updateButton").addEventListener("click", function () {
    const selectedHardware = document.getElementById("hardwareSelect").value;
    const newAvailability = document.getElementById("availabilitySelect").value;

    // Find and update the hardware in the database
    hardwareDatabase = hardwareDatabase.map(hardware => {
        if (hardware.name === selectedHardware) {
            return { ...hardware, availability: newAvailability };
        }
        return hardware;
    });

    alert(`Availability of ${selectedHardware} updated to: ${newAvailability}`);
    performSearch(); // Refresh search results
});

// Load hardware options on page load
window.onload = function () {
    loadHardwareOptions();
};
