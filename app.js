var answers = [];

function recordAnswers(qNo, ans, nQNo) {
  answers[qNo - 1] = ans;
  if (nQNo > 0) {
    jQuery(" .modal-body .container .row").removeClass("active");
    jQuery(".q" + nQNo).addClass("active");
  } else {
    var [ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10] = answers;
    if ((ans1, ans2, ans4, ans6, ans8, ans9 == 1)) {
      jQuery(".modal-body .container .row").removeClass("active");
      jQuery(".modal-body .container .resultOne").addClass("active");
    } else if ((ans1, ans2, ans4 == 1)) {
      jQuery(".modal-body .container .row").removeClass("active");
      jQuery(".modal-body .container .resultTwo").addClass("active");
    } else {
      jQuery(".modal-body .container .row").removeClass("active");
      jQuery(".modal-body .container .resultThree").addClass("active");
    }
  }
}
function reset() {
  var answers = [];
  jQuery(" .modal-body .container .row").removeClass("active");
  jQuery(" .modal-body .container .q1").addClass("active");
}
