// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("sidebar").innerHTML = `
//  <div class="sidebar">
//             <ul>
//                 <li><a href="student_index.html">Home</a></li>
//                 <li><a href="comp_avalibility.html">Component Availability Check</a></li>
//                 <li><a href="reqst_comp.html">Request Hardware</a></li>
//                 <li><a href="status.html">Request Status</a></li>


//             </ul>
//         </div>
// `;
// });


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("sidebar").innerHTML = `
        <nav class="d-flex flex-column p-3 bg-dark text-white vh-50">
            <h4 class="text-center mb-4">Student Panel</h4>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a href="student_index.html" class="nav-link text-white"><i class="bi bi-house-door"></i> Home</a>
                </li>
                <li class="nav-item">
                    <a href="comp_avalibility.html" class="nav-link text-white"><i class="bi bi-search"></i> Component Availability</a>
                </li>
                <li class="nav-item">
                    <a href="reqst_comp.html" class="nav-link text-white"><i class="bi bi-tools"></i> Request Hardware</a>
                </li>
                <li class="nav-item">
                    <a href="issued_return_record.html" class="nav-link text-white"><i class="bi bi-arrow-return-left"></i> Issued/Return Record</a>
                </li>
            </ul>
        </nav>
    `;
});