// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("sidebar").innerHTML = `
// <div class="sidebar">
//     <ul>
//         <li><a href="staff_index.html">Home</a></li>
//         <li><a href="comp_avalibility.html">Component Availability Check</a></li>
//         <li><a href="update_hardware_avail.html">Update Hardware Availability</a></li>
//         <li><a href="reqst_compo_update.html">Request Status Update</a></li>
//         <li><a href="return_record.html">Return Record</a></li>
//     </ul>
// </div>
// `;
// });

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("sidebar").innerHTML = `
        <nav class="d-flex flex-column p-3 bg-dark text-white vh-50">
            <h4 class="text-center mb-4">Staff Panel</h4>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a href="staff_index.html" class="nav-link text-white"><i class="bi bi-house-door"></i> Home</a>
                </li>
                <li class="nav-item">
                    <a href="comp_avalibility.html" class="nav-link text-white"><i class="bi bi-search"></i> Component Availability</a>
                </li>
                <li class="nav-item">
                    <a href="update_hardware_avail.html" class="nav-link text-white"><i class="bi bi-tools"></i> Update Hardware</a>
                </li>
                <li class="nav-item">
                    <a href="reqst_compo_update.html" class="nav-link text-white"><i class="bi bi-card-checklist"></i> Request Status</a>
                </li>
                <li class="nav-item">
                    <a href="return_record.html" class="nav-link text-white"><i class="bi bi-arrow-return-left"></i> Return Record</a>
                </li>
            </ul>
        </nav>
    `;
});
