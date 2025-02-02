// navbar and sidebar
// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("navbar").innerHTML = `
//         <nav>
//             <div>
//                 <h1>Component Record System</h1>
//             </div>
//             <a href="login.html">
//                 <button class="logout-button">Logout</button>
//             </a>
//         </nav>
//     `;
// });

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("navbar").innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark" style=" background: linear-gradient(135deg, #ec370a, #372212); shadow">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold" href="staff_index.html">Component Record System</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="login.html">
                                <button class="btn btn-danger">Logout</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
});


