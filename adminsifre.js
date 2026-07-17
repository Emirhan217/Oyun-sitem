function kontrolEt() {
    // Kullanıcının yazdığı şifreyi alıyoruz
    var girilenSifre = document.getElementById("password-input").value;
    
    // Belirlediğiniz şifre ile karşılaştırıyoruz
    if (girilenSifre === "Kral Ayhan 123") {
        // Şifre doğruysa giriş formunu gizle, admin içeriğini göster
        document.getElementById("login-form").style.display = "none";
        document.getElementById("admin-icerik").style.display = "block";
    } else {
        // Şifre yanlışsa hata mesajını göster
        document.getElementById("hata-mesaji").style.display = "block";
    }
}
