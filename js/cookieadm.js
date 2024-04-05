function isAuthenticated() {
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith("ckicpadm=ckicpadm")) {
            return true;
        }
    }
    return false;
}

if (window.location.pathname !== "./../acces/user.html" && !isAuthenticated()) {
    console.log("Utilisateur non authentifié. Redirection vers la page de connexion.");
    window.location.href = "./../acces/user.html";
} else if (isAuthenticated()) {
    console.log("Utilisateur authentifié. Redirection vers la page protégée.");
}