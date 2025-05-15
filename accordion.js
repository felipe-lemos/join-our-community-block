/**
 * Frontend accordion behavior for Join Our Community Block
 */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".faq5_list").forEach(function (list) {
    list.addEventListener("click", function (e) {
      const question = e.target.closest(".faq5_question");
      if (!question || !list.contains(question)) return;
      const item = question.closest(".faq5_accordion");
      if (!item) return;
      // Toggle open class
      if (item.classList.contains("open")) {
        item.classList.remove("open");
      } else {
        // Close others
        list
          .querySelectorAll(".faq5_accordion.open")
          .forEach(function (openItem) {
            openItem.classList.remove("open");
          });
        item.classList.add("open");
      }
    });
  });
});
