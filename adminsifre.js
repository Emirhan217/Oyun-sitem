function kontrolEt() {
    // Kullanıcının kutuya yazdığı şifreyi al
    var girilenSifre = document.getElementById("password-input").value;
    
    // Şifre kontrolü
    if (girilenSifre === "Kral Ayhan 123") {
        // Şifre doğruysa giriş kutusunu gizle, admin panelini göster
        document.getElementById("login-form").style.display = "none";
        document.getElementById("admin-icerik").style.display = "block";
    } else {
        // Şifre yanlışsa giriş kutusunu gizleme, sadece hata mesajını göster
        document.getElementById("hata-mesaji").style.display = "block";
    }
}
