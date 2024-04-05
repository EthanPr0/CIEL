var op = "6d/69/6c/6c/65/72/2e/6d/61/69/6e/74/65/6e/61/6e/63/65/21";
var un = "john";

function dpf(obfuscated) {
    var parts = obfuscated.split('/');

    var ps = '';
    for (var i = 0; i < parts.length; i++) {
        ps += String.fromCharCode(parseInt(parts[i], 16));
    }

    return ps;
}

function getUsername() {
    return "john";
}

function checkPassword(){var a=document.getElementById("password").value;var b=document.getElementById("username").value;var c=dpf(op);var d=getUsername();if(a===c&&b===d){var e="ckicp=ckicp; path=/";document.cookie=e;window.location.href="./../acces/user.html";}else{alert("Mot de passe ou utilisateur incorrect. Veuillez réessayer.");}}