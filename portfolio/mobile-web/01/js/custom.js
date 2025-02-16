$(function () {
  // Include Html Files
  $(".gnb-include").load("../include/gnb.html");

  // Slick Slider (Pet Note)
  $(".treatment-history-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
  });

  // Slick Slider (Doctor Talk)
  $(".doctor-talk-ranking-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
  });

  // Button Active (book mark)
  $(".btn-book-mark").click(function () {
    $(this).toggleClass("active");
  });
  // Button Active (like)
  $(".btn-like").click(function () {
    $(this).toggleClass("active");
  });

  // Doctor Talk Detail Answer Show-Hide
  $(".btn-all-answer").click(function () {
    $(".answer-hide .answer-item").toggle();
    $(this).toggleClass("active");
  });

  // Slick Slider (Front Banner)
  $(".front-banner-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
  });

  // Slick Slider (Doctor Talk Section)
  $(".doctor-talk-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });

  // Slick Slider (Pet Card)
  $(".pet-card-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });

  // Alram Clear Button
  $('.btn-clear-all').click(function(){
    $('.alarm-item').remove()
    $(this).hide()
    if ($('.alarm-item').length == 0) {
      $('.no-alarm').show();
    }
  })

  $('.btn-clear').click(function(){
    $(this).parent().remove()
    if ($('.alarm-item').length == 0) {
      $('.no-alarm').show();
      $('.btn-clear-all').hide()
    }
  })

  // Sign Up Check Box
  $('.chk-all').click(function(){
    $(".agree-chk").prop("checked", this.checked);
  })
});
