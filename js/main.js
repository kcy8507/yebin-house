// function scrollDisable() {
//   $("body")
//     .addClass("scrollDisable")
//     .on("scroll touchmove mousewheel", function (e) {
//       e.preventDefault();
//     });
// }
// function scrollAble() {
//   $("body").removeClass("scrollDisable").off("scroll touchmove mousewheel");
// }

$(".nav__toggle").click(function () {
  $("#popup__nav").toggle();
  //overflow클래스를 만들어서 body에 따로.addclass
});
$(".cancel")
  .unbind("click")
  .bind("click", function () {
    $("#popup__nav").toggle();
  });
//스크롤 방지 기능 아직 안했음!!
