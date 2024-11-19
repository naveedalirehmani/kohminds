const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = (id) => {
  const element = document.getElementById(id),
    text = element.innerText.split("");

  element.innerText = "";

  text.forEach((value, index) => {
    const outer = document.createElement("span");

    outer.className = "outer";

    const inner = document.createElement("span");

    inner.className = "inner";

    inner.style.animationDelay = `${rand(-5000, 0)}ms`;

    const letter = document.createElement("span");

    letter.className = "letter";

    letter.innerText = value;

    letter.style.animationDelay = `${index * 1000}ms`;

    inner.appendChild(letter);

    outer.appendChild(inner);

    element.appendChild(outer);
  });
};

enhance("channel-link");

const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting, hoverType = "") => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`,
  };

  trailer.animate(keyframes, {
    duration: 800,
    fill: "forwards",
  });

  // Set the hover type for custom behavior
  trailer.setAttribute("data-hover", hoverType);
};

window.onmousemove = (e) => {
  const interactable = e.target.closest(".interactable"),
    interacting = interactable !== null;

  // Set hoverType to "address" if the interactable element is the address
  const hoverType =
    interactable && interactable.classList.contains("address") ? "address" : "";

  animateTrailer(e, interacting, hoverType);
};
