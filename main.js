const signsHolder = document.querySelector(".signs-holder");
const question = document.querySelector(".question");

let usedQuestions = [];

const roadSigns = [
  {
    id: 0,
    title: "Yo'l bering",
    imgSrc: "./images/signs/yol_bering.gif"
  },
  {
    id: 1,
    title: "Turar-joy dahasi",
    imgSrc: "./images/signs/aholi_punkti.gif"
  },
  {
    id: 2,
    title: "Asosiy yolning oxiri",
    imgSrc: "./images/signs/asosiy_tugash.gif"
  },
  {
    id: 3,
    title: "Asosiy yo’lning yo’nalishi",
    imgSrc: "./images/signs/asosiy_yol_sxemasi.gif"
  },
  {
    id: 4,
    title: "Asosiy yol",
    imgSrc: "./images/signs/asosiy_yol.gif"
  },
  {
    id: 5,
    title: "Avtomagistral",
    imgSrc: "./images/signs/avtomagistral.gif"
  },
  {
    id: 6,
    title: "Avtomagistral oxiri",
    imgSrc: "./images/signs/avtomagistral_tugashi.gif"
  },
  {
    id: 7,
    title: "Velosiped yolkasi",
    imgSrc: "./images/signs/velosiped_yolkasi.gif"
  },
  {
    id: 8,
    title: "Transport vositalarini yuvish joyi",
    imgSrc: "./images/signs/avtomoyka.gif"
  },
  {
    id: 9,
    title: "Texnik xizmat ko’rsatish joyi",
    imgSrc: "./images/signs/avtoservis.gif"
  },
  {
    id: 10,
    title: "Aylanma harakatlanish",
    imgSrc: "./images/signs/aylanma_yol.gif"
  },
  {
    id: 11,
    title: "Belgilangan yo’nalishli transport vositalari uchun mo’ljallangan bo’lak",
    imgSrc: "./images/signs/belgilangan_yonalishli_transport_yolak.gif"
  },
  {
    id: 12,
    title: "Yonilg’i shaxobchasi",
    imgSrc: "./images/signs/benzin.gif"
  },
  {
    id: 13,
    title: "Bir izli temir yo’l",
    imgSrc: "./images/signs/bir_izli_temir.gif"
  },
  {
    id: 14,
    title: "Bolalar",
    imgSrc: "./images/signs/bolalar.gif"
  },
  {
    id: 15,
    title: "Oxiri berk yo’l, ko’cha",
    imgSrc: "./images/signs/boshi_berk_kocha.gif"
  },
  {
    id: 16,
    title: "Boshqa xavf-xatar",
    imgSrc: "./images/signs/boshqa_xavf.gif"
  },
  {
    id: 17,
    title: "Chapga burilish taqiqlanadi",
    imgSrc: "./images/signs/burilish_taqiqlanadi.gif"
  },
  {
    id: 18,
    title: "Eng kam tezlik belgilangan yo’lning oxiri",
    imgSrc: "./images/signs/eng_kam_tezlik_oxiri.gif"
  },
  {
    id: 19,
    title: "Avtomobillarni ko’rikdan o’tkazish joyi",
    imgSrc: "./images/signs/estakada.gif"
  },
  {
    id: 20,
    title: "Harakatlanish taqiqlangan",
    imgSrc: "./images/signs/faqat_odamlaga.gif"
  },
  {
    id: 21,
    title: "Harakatlanish chapga",
    imgSrc: "./images/signs/harakatlanish_chapga.gif"
  },
  {
    id: 22,
    title: "Harakatlanish o'nga",
    imgSrc: "./images/signs/harakatlanish_onga.gif"
  },
  {
    id: 23,
    title: "Harakatlanish o'nga yoki tog'riga",
    imgSrc: "./images/signs/harakatlanish_onga_togriga.gif"
  },
  {
    id: 24,
    title: "Harakatlanish tasviri",
    imgSrc: "./images/signs/harakatlanish_tasviri.gif"
  },
  {
    id: 25,
    title: "Harakatlanish tog'riga",
    imgSrc: "./images/signs/harakatlanish_togriga.gif"
  },
  {
    id: 26,
    title: "Ichimlik suvi",
    imgSrc: "./images/signs/ichimlik_suvi.gif"
  },
  {
    id: 27,
    title: "Ikki tomonlama harakatlanish",
    imgSrc: "./images/signs/ikki_tomonlama_xarakatlanish.gif"
  },
  {
    id: 28,
    title: "Dam olish joyi",
    imgSrc: "./images/signs/kemping.gif"
  },
  {
    id: 29,
    title: "Kirish taqiqlangan",
    imgSrc: "./images/signs/kirish_taqiqlanadi.gif"
  },
  {
    id: 30,
    title: "Mehmonxona",
    imgSrc: "./images/signs/kasalxona.gif"
  },
  {
    id: 31,
    title: "Kotarma koprik",
    imgSrc: "./images/signs/kotarma_koprik.gif"
  },
  {
    id: 32,
    title: "Cheklangan balandlik",
    imgSrc: "./images/signs/maksimal_balandlik.gif"
  },
  {
    id: 33,
    title: "Cheklangan kenglik",
    imgSrc: "./images/signs/maksimal_kenglik.gif"
  },
  {
    id: 34,
    title: "Vazn cheklangan",
    imgSrc: "./images/signs/maksimal_ogrlik.gif"
  },
  {
    id: 35,
    title: "Cheklangan uzunlik",
    imgSrc: "./images/signs/maksimal_uzunlik.gif"
  },
  {
    id: 36,
    title: "Avtobus va trolleybus to’xtash joyi",
    imgSrc: "./images/signs/marshrut.gif"
  },
  {
    id: 37,
    title: "Mexanik transport vositalarining harakatlanishi taqiqlangan",
    imgSrc: "./images/signs/mexanik_taqiqlangan.gif"
  },
  {
    id: 38,
    title: "Mototsikllar harakatlanishi taqiqlangan",
    imgSrc: "./images/signs/motosikl_taqiqlanadi.gif"
  },
  {
    id: 39,
    title: "Eng kam oraliq",
    imgSrc: "./images/signs/oraliq_masofa.gif"
  },
  {
    id: 40,
    title: "Oshxona",
    imgSrc: "./images/signs/oshxona.gif"
  },
  {
    id: 41,
    title: "Ot-arava harakatlanishi taqiqlangan",
    imgSrc: "./images/signs/ot_arava_taqiqlanadi.gif"
  },
  {
    id: 42,
    title: "To’xtab turish joyi",
    imgSrc: "./images/signs/parkovka.gif"
  },
  {
    id: 43,
    title: "Pastlab uchuvchi samolyotlar",
    imgSrc: "./images/signs/pastlab_uchuvchi_samolyot.gif"
  },
  {
    id: 44,
    title: "Piyodalar o’tish joyi",
    imgSrc: "./images/signs/piyodalar_otish_joyi.gif"
  },
  {
    id: 45,
    title: "Piyodalar yo’lkasi",
    imgSrc: "./images/signs/piyodalar_yolagi.gif"
  },
  {
    id: 46,
    title: "Shlagbaumsiz temir yo’l kesishmasi",
    imgSrc: "./images/signs/poyezd.gif"
  },
  {
    id: 47,
    title: "Qayrilish ta'qiqlanadi",
    imgSrc: "./images/signs/qayrilish_taqiqlanadi.gif"
  },
  {
    id: 48,
    title: "Boshqa qatnov qismiga qayta tizilishning boshlang’ich ko’rsatkichi",
    imgSrc: "./images/signs/qayta_tizilish_sxemasi.gif"
  },
  {
    id: 49,
    title: "Quvib o’tish taqiqlanadi",
    imgSrc: "./images/signs/quvib_otish_taqiqlanadi.gif"
  },
  {
    id: 50,
    title: "Quvib o’tish ta'qiqlangan hududning oxiri",
    imgSrc: "./images/signs/quvib_otish_taqiqlanadi_tugadi.gif"
  },
  {
    id: 51,
    title: "Radar",
    imgSrc: "./images/signs/radar.jpg"
  },
  {
    id: 52,
    title: "Ro’paradagi harakatlanishga nisbatan imtiyoz",
    imgSrc: "./images/signs/ropara_imtiyo.gif"
  },
  {
    id: 53,
    title: "Ro’para harakatlanishning ustunligi",
    imgSrc: "./images/signs/ropara_ustunlik.gif"
  },
  {
    id: 54,
    title: "Shlagbaumli temir yo'l kesishmasi",
    imgSrc: "./images/signs/shlakbaumli_temiryol.gif"
  },
  {
    id: 55,
    title: "Sirpanchiq yo’l",
    imgSrc: "./images/signs/sirpanchiq_yol.gif"
  },
  {
    id: 56,
    title: "Sohilga chiqish",
    imgSrc: "./images/signs/soxilga_chiqish.gif"
  },
  {
    id: 57,
    title: "To’xtamasdan harakatlanish taqiqlangan",
    imgSrc: "./images/signs/stop.gif"
  },
  {
    id: 58,
    title: "Svetofor tartibga soladi",
    imgSrc: "./images/signs/svetofor.gif"
  },
  {
    id: 59,
    title: "Ta’mirlash ishlari",
    imgSrc: "./images/signs/tamirlash_ishlari.gif"
  },
  {
    id: 60,
    title: "Ta’sir oralig’i",
    imgSrc: "./images/signs/tasir_doirasi.gif"
  },
  {
    id: 61,
    title: "Taksi to’xtab turish joyi",
    imgSrc: "./images/signs/taxi.gif"
  },
  {
    id: 62,
    title: "Telefon",
    imgSrc: "./images/signs/telefon.gif"
  },
  {
    id: 63,
    title: "Temir yo’l kesishmasining yaqinligi haqida ogohlantirish",
    imgSrc: "./images/signs/temiryol_kesishmasining_yaqinligi.gif"
  },
  {
    id: 64,
    title: "Yuqori tezlik cheklangan",
    imgSrc: "./images/signs/tezlik-cheklangan.gif"
  },
  {
    id: 65,
    title: "Tik nishablik",
    imgSrc: "./images/signs/tik_nishablik.gif"
  },
  {
    id: 66,
    title: "Tik balandlik",
    imgSrc: "./images/signs/tik_qiyalik.gif"
  },
  {
    id: 67,
    title: "Tirkama bilan harakatlanish taqiqlangan",
    imgSrc: "./images/signs/tirkama_taqiq.gif"
  },
  {
    id: 68,
    title: "Xojatxona",
    imgSrc: "./images/signs/toilet.gif"
  },
  {
    id: 69,
    title: "Tonnel",
    imgSrc: "./images/signs/tonnel.gif"
  },
  {
    id: 70,
    title: "Tosh otilishi",
    imgSrc: "./images/signs/tosh_otilishi.gif"
  },
  {
    id: 71,
    title: "Toshlar tushishi",
    imgSrc: "./images/signs/tosh_tushishi.gif"
  },
  {
    id: 72,
    title: "To’siqni o’ngdan yoki chapdan chetlab o’tish",
    imgSrc: "./images/signs/tosiq_chap_ili_ong.gif"
  },
  {
    id: 73,
    title: "To’siqni chapdan chetlab o’tish",
    imgSrc: "./images/signs/tosiq_chapdan.gif"
  },
  {
    id: 74,
    title: "To’siqni chapdan o'ngdan chetlab o'tish",
    imgSrc: "./images/signs/tosiq_ongdan.gif"
  },
  {
    id: 75,
    title: "Tovush moslamalaridan foydalanish ta'qiqlangan",
    imgSrc: "./images/signs/tovushli_signal.gif"
  },
  {
    id: 76,
    title: "To’xtab turish ta'qiqlangan",
    imgSrc: "./images/signs/toxtab_turish.gif"
  },
  {
    id: 77,
    title: "To’xtash taqiqlangan",
    imgSrc: "./images/signs/toxtash_taqiqlanadi.gif"
  },
  {
    id: 78,
    title: "Transport vositasini to’xtab turish joyiga qo’yish usuli",
    imgSrc: "./images/signs/toxtash_usuli.gif"
  },
  {
    id: 79,
    title: "Traktorlar harakatlanishi taqiqlangan",
    imgSrc: "./images/signs/traktor.gif"
  },
  {
    id: 80,
    title: "Tramvay yo’li bilan kesishuv",
    imgSrc: "./images/signs/tramvay_kesishuv.gif"
  },
  {
    id: 81,
    title: "Tramvay to’xtash joyi",
    imgSrc: "./images/signs/tramvay.gif"
  },
  {
    id: 82,
    title: "Transport vositasining turi",
    imgSrc: "./images/signs/transport_vositasi_turi.gif"
  },
  {
    id: 83,
    title: "Turar-joy dahasining oxiri",
    imgSrc: "./images/signs/turar_joy_tugash.gif"
  },
  {
    id: 84,
    title: "Mol haydab o’tish",
    imgSrc: "./images/signs/uy_hayvonlari.gif"
  },
  {
    id: 85,
    title: "Velosipedda harakatlanish ta'qiqlangan",
    imgSrc: "./images/signs/velik_taqiqlanadi.gif"
  },
  {
    id: 86,
    title: "Velosiped yo’lkasi bilan kesishuv",
    imgSrc: "./images/signs/velosiped.gif"
  },
  {
    id: 87,
    title: "Piyodalarning yer ostidan o’tish joyi",
    imgSrc: "./images/signs/yer_osti_yoli.gif"
  },
  {
    id: 88,
    title: "Piyodalarning yer ustidan o’tish joyi",
    imgSrc: "./images/signs/yer_usti_yoli.gif"
  },
  {
    id: 89,
    title: "Yonlama shamol",
    imgSrc: "./images/signs/yonlama_shamol.gif"
  },
  {
    id: 90,
    title: "Yovvoyi hayvonlar",
    imgSrc: "./images/signs/yovvoyi_hayvonlar.gif"
  },
  {
    id: 91,
    title: "Yuk avtomobillarida quvib o’tish taqiqlangan",
    imgSrc: "./images/signs/yuk_avtomobil_quvish_taqiqlanadi.gif"
  },
  {
    id: 92,
    title: "Yuk avtommobillarida quvib o’tish taqiqlangan hududning oxiri",
    imgSrc: "./images/signs/yuk_avtomobil_quvish_taqiqlanadi_oxiri.gif"
  },
  {
    id: 93,
    title: "Tirbandlik",
    imgSrc: "./images/signs/tirbandlik.gif"
  },
  {
    id: 94,
    title: "Notekis yo’l",
    imgSrc: "./images/signs/notekis_yol.gif"
  },
  {
    id: 95,
    title: "Barcha cheklovlarning oxiri",
    imgSrc: "./images/signs/barcha.gif"
  },
  {
    id: 96,
    title: "Tavsiya etilgan tezlik",
    imgSrc: "./images/signs/tavsiya_etilgan_tezlik.gif"
  },
  {
    id: 97,
    title: "Surat va video",
    imgSrc: "./images/signs/surat_foto.png"
  },
  {
    id: 98,
    title: "Falokatli holatlar uchun kirish yo’li",
    imgSrc: "./images/signs/xatar_yol.gif"
  },
  {
    id: 99,
    title: "Shifoxona",
    imgSrc: "./images/signs/shifoxona.gif"
  },
  {
    id: 100,
    title: "Yuqori tezlik cheklangan hududning oxiri",
    imgSrc: "./images/signs/maksimal_tezlik_tugadi.gif"
  },
];

let correctQuestions = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

window.addEventListener('load', function() {
  let randomQuestionId = getRandomInt(101);
  question.textContent = roadSigns[randomQuestionId].title;
  question.setAttribute('data-question-id', roadSigns[randomQuestionId].id);

  usedQuestions.push(roadSigns[randomQuestionId].id);
});

function questionGenerator() {
  let randomQuestionId = getRandomInt(101);

  if(usedQuestions.includes(randomQuestionId)) {
    questionGenerator();
  } else {
    question.textContent = roadSigns[randomQuestionId].title;
    question.setAttribute('data-question-id', roadSigns[randomQuestionId].id);
    usedQuestions.push(roadSigns[randomQuestionId].id);
  }
}

function checkSign(signId) {
  if(signId == question.dataset.questionId) {
    alert('Togri javob');
    let clickedBtn = document.querySelector(`#sign-number-${signId}`);
    clickedBtn.disabled = true;
    clickedBtn.style.opacity = '10%';
    correctQuestions++;
    if(correctQuestions == roadSigns.length) {
      alert('Siz yuttingiz!');
    };
    questionGenerator();
  } else {
    alert('Notogri javob');
  }
}

roadSigns.forEach(function(sign) {
  let roadSignBtn = document.createElement('button');
  roadSignBtn.setAttribute('class', 'road-sign-btn');
  roadSignBtn.setAttribute('data-sign-id', sign.id);
  roadSignBtn.setAttribute('id', `sign-number-${sign.id}`);
  
  let roadSignImg = document.createElement('img');
  roadSignImg.setAttribute('src', sign.imgSrc);
  roadSignImg.setAttribute('class', 'road-sign-img');

  roadSignBtn.appendChild(roadSignImg);

  roadSignBtn.addEventListener('click', function() {
    checkSign(sign.id);
  });

  signsHolder.appendChild(roadSignBtn);
});