function bilgiGoster() {

    var ad = document.getElementById("ad").value.trim();
    var soyad = document.getElementById("soyad").value.trim();
    var dogumTarihi = document.getElementById("dogumTarihi").value;
    var cinsiyetSecili = document.querySelector('input[name="cinsiyet"]:checked');

    // Boş alan kontrolü
    if (ad === "" || soyad === "" || dogumTarihi === "" || !cinsiyetSecili) {
        alert("Lütfen tüm alanları doldurunuz!");
        return;
    }

    // Yaş hesaplama
    var bugun = new Date();
    var dogum = new Date(dogumTarihi);
    var yas = bugun.getFullYear() - dogum.getFullYear();

    var ayFarki = bugun.getMonth() - dogum.getMonth();
    if (ayFarki < 0 || (ayFarki === 0 && bugun.getDate() < dogum.getDate())) {
        yas--;
    }

    if (yas >= 18) {
        alert(
            "Ad: " + ad + "\n" +
            "Soyad: " + soyad + "\n" +
            "Yaş: " + yas + "\n" +
            "Cinsiyet: " + cinsiyetSecili.value
        );
    } else {
        alert("18 yaşından küçükler için bilgiler gösterilemez!");
    }
}

function temizle() {
    document.getElementById("ad").value = "";
    document.getElementById("soyad").value = "";
    document.getElementById("dogumTarihi").value = "";

    var radioButtons = document.getElementsByName("cinsiyet");
    for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
    }
}