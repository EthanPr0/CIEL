function md5(plainText) {
    return CryptoJS.MD5(plainText).toString();
}


const storedAdminUsername = "admin";
const storedAdminPasswordHash = "3acc4227585a2cdeb5147db5f6f02c7c"; 

function authenticateAdmin(a,b){if(a===storedAdminUsername){var c=md5(b);if(c===storedAdminPasswordHash){var e="ckicpadm=ckicpadm; path=/";document.cookie=e;window.location.href="./../reussite/reussite.html";}else{alert("Identifiants incorrects.");}}else{alert("Identifiants incorrects.");}}


function checkPassword() {
    var inputPassword = document.getElementById("password").value;
    var inputUsername = document.getElementById("username").value;
    authenticateAdmin(inputUsername, inputPassword);
}
