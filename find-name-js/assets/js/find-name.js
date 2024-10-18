// Kullanıcıya listeye kaç adet isim eklemek istediğini soralım. 
// Kullanıcı cevabına göre isimleri girelim ve daha sonra console'da yazdıralım. (isimler birden fazla eklenebilir)
// Kullanıcıya liste içinden hangi ismi aradığını soralım.
// Kullanıcının vereceği cevaba göre "... ismi listenizde .... adet bulundu" gibi mesaj çıkartalım.

function isimListesi() {
  let isimler = [];
  
  let adet = Number(prompt("Kaç adet isim eklemek istersiniz?"), 10);

  for (let i = 0; i < adet; i++) {
    let isim = prompt((i + 1) + ". Ekleyeceğin ismi gir:");
    isimler.push(isim); 
  }

  console.log(`Girilen isimler: ${isimler}`);

  let arananIsim = prompt("Hangi ismi arıyorsun?");

  let miktar = 0;
  for (let i = 0; i < isimler.length; i++) {
    if (isimler[i] === arananIsim) {
      miktar++;
    }
  }

  if (miktar > 0) {
    console.log(`${arananIsim} ismi listenizde ${miktar} adet bulundu.`);
  } else {
    console.log(`${arananIsim} ismi listenizde bulunamadı.`);
  }
}

isimListesi();
