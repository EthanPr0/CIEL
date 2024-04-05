function isAuthenticated() {
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith("ckicp=ckicp")) {
            return true;
        }
    }
    return false;
}

if (window.location.pathname !== "./../login-user/login-user.html" && !isAuthenticated()) {
    console.log("Utilisateur non authentifié. Redirection vers la page de connexion.");
    window.location.href = "./../login-user/login-user.html";
} else if (isAuthenticated()) {
    console.log("Utilisateur authentifié. Redirection vers la page protégée.");
}