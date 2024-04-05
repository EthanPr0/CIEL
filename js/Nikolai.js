function sha256(plainText) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plainText);
    return crypto.subtle.digest('SHA-256', data)
        .then(buffer => {
            const hashArray = Array.from(new Uint8Array(buffer));
            return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        });
}

const storedUsername = "Nikolai";
const storedPasswordHash = "b97b389d85bdcf94a04c31a91d6ee0dcb5072694b66dd0ee73b4085b2372ce0e";

function authenticate(username, password){if(username === storedUsername){sha256(password).then(hashedPassword=>{if(hashedPassword === storedPasswordHash){var cn="ckicpn=ckicpn; path=/" ;document.cookie=cn;console.log("Nikolai réussi.");window.location.href = "./../reussite_cachée/reussite_cachee.html";} else {alert("Identifiants incorrects.");}});} else {alert("Identifiants incorrects.");}}

function checkPassword() {
    var inputPassword = document.getElementById("password").value;
    var inputUsername = document.getElementById("username").value;
    authenticate(inputUsername, inputPassword);
}
