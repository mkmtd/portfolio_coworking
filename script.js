document.addEventListener("DOMContentLoaded", function () {
  //ハンバーガーメニュー
  document
    .getElementById("hamburger_btn")
    .addEventListener("click", function () {
      this.classList.toggle("active");
      document.getElementById("nav").classList.toggle("active");
    });

  document.getElementById("nav").addEventListener("click", function () {
    this.classList.remove("active");
    document.getElementById("hamburger_btn").classList.remove("active");
  });

  //Q&Aドロップダウン（仮コード）
  document.getElementById("question_01").addEventListener("click", function () {
    this.classList.toggle("active");
    document.getElementById("answer_01").classList.toggle("active");
  });

  document.getElementById("question_02").addEventListener("click", function () {
    this.classList.toggle("active");
    document.getElementById("answer_02").classList.toggle("active");
  });

  document.getElementById("question_03").addEventListener("click", function () {
    this.classList.toggle("active");
    document.getElementById("answer_03").classList.toggle("active");
  });
});
