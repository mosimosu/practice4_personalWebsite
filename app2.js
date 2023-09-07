const card = document.querySelector(".myPortrait");
const cardImg = document.querySelector(".myPortrait img");
const cardRadius = document.querySelector(".radius");

card.addEventListener("mousemove", (e) => {
  const rect = e.target.getBoundingClientRect();
  const distanceX = e.pageX - rect.x - rect.width / 2;
  const distanceY = e.pageY - rect.y - rect.height / 2;

  const x = Math.sqrt(Math.abs(distanceX));
  const y = Math.sqrt(Math.abs(distanceY));

  const num = {
    x: distanceX < 0 ? x : -x,
    y: distanceY > 0 ? y : -y,
  };

  card.style.transform = `translateZ(40px) rotateX(${num.y / 2}deg) rotateY(${
    num.x / 2
  }deg) scale(1.1)`;
  cardImg.style.transform = `translateX(${num.x / 2}px) translateY(${
    -num.y / 2
  }px)`;
  cardRadius.style.backgroundPosition = `${distanceX}px ${distanceY}px`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = `translateZ(0) rotateX(0deg) rotateY(0deg) scale(1.1)`;
  card.style = "none";
  cardImg.style.transform = `translateX(0px) translateY(0px)`;
  cardImg.style = "none";
});
