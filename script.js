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
  document.getElementsByClassName("question").addEventListener("click", function () {
    this.classList.toggle("active");
    document.getElementsByClassName("answer").classList.toggle("active");
  });

});
