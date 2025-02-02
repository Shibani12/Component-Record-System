const categoryData = {
    Microcontrollers: [
        { value: "Arduino Uno", label: "Arduino Uno" },
        { value: "Raspberry Pi", label: "Raspberry Pi" }
    ],
    Motors: [
        { value: "Stepper Motors", label: "Stepper Motors" },
        { value: "Servo Motors", label: "Servo Motors" },
        { value: "DC Motors", label: "DC Motors" }
    ],
    Sensors: [
        { value: "Temperature Sensor", label: "Temperature Sensor" },
        { value: "Ultrasonic Sensor", label: "Ultrasonic Sensor" },
        { value: "Light Sensor", label: "Light Sensor" }
    ]
};

// Populate components based on selected category
const categorySelect = document.getElementById("category");
const componentsSelect = document.getElementById("components");

categorySelect.addEventListener("change", function () {
    const selectedCategory = this.value;
    componentsSelect.innerHTML = '<option value="" disabled>-- Select Components --</option>';

    if (categoryData[selectedCategory]) {
        categoryData[selectedCategory].forEach(component => {
            const option = document.createElement("option");
            option.value = component.value;
            option.textContent = component.label;
            componentsSelect.appendChild(option);
        });
    }
});

// Handle form submission
document.getElementById('requestForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const userName = document.getElementById('user').value;
    const category = document.getElementById('category').value;
    const selectedComponents = Array.from(componentsSelect.selectedOptions).map(option => option.value);

    if (!userName || !category || selectedComponents.length === 0) {
        alert('Please fill out all fields before submitting.');
        return;
    }

    // Store data in localStorage
    const requestData = JSON.parse(localStorage.getItem('requests')) || [];
    requestData.push({
        name: userName,
        components: selectedComponents.join(', '),
        status: "Pending"
    });
    localStorage.setItem('requests', JSON.stringify(requestData));

    // Redirect to status page
    window.location.href = "status.html";
});