// $(document).ready(function () {
//     $(window).scroll(function () {
//       /* Скроллировать фоновые слои с разной скоростью */
//       let winTop = $(window).scrollTop();
//       $(".parallax").css(
//         "background-position", "120px "+ (500 - winTop *2) +"px,"+
//         "center " + (-90 -(winTop * 0.5)) + "px"
//       );
//     });
//   });

(function ($, undefined) {
  $(window).scroll(function () {
     // якщо відбувається скролінг
    /* Скроллировать фоновые слои с разной скоростью */
    let winTop = $(window).scrollTop();
    $(".parallax").css(
      "background-position",
      "120px " +
        (520 - winTop * 2) +
        "px," +
        "center " +
        (-20 - winTop * 0.5) +
        "px"
    );
    if ($(window).scrollTop() > 200) {
      $(".navbar").css("opacity", "0.5");
    } else {
      $(".navbar").css("opacity", "1");
    }

   
    $(".slideanim").each(function () {
      // для кожного блоку з класом slideanim
      let pos = $(this).offset().top; // считываем его координату по оси Y в окне браузера
      if (pos < $(window).scrollTop() + 400) {
        //якщо до верху сторінки залишається 400px,
        $(this).addClass("slide"); //додаємо до блоку клас slide з анімацією
      }
    });
  });
})(jQuery);
