// Доступ к элементам для их стилизации
const stylingNavText = document.querySelectorAll(".nav-text");
const stylingSVG = document.querySelectorAll("svg");

// Стилизация элементов навигации при наведении
stylingNavText.forEach((item) => {
  item.addEventListener("mouseover", () =>
    item.classList.add("styling-nav-text")
  );
});
stylingNavText.forEach((item) => {
  item.addEventListener("mouseout", () =>
    item.classList.remove("styling-nav-text")
  );
});

// Стилизация элементов SVG при наведении (подвал сайта)
stylingSVG.forEach((item) => {
  item.addEventListener("mouseover", () => item.classList.add("styling-svg"));
});
stylingSVG.forEach((item) => {
  item.addEventListener("mouseout", () => item.classList.remove("styling-svg"));
});

// Удаление хэша из URL и прокрутка страницы к началу (при перезагрузке)
function removeHash() {
  history.pushState(
    "",
    document.title,
    window.location.pathname + window.location.search
  );
}

function scrollToBegin() {
  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  } else {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }
}

if (window.location.reload) {
  removeHash();
  scrollToBegin();
}
