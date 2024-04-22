AOS.init();
import logoData from "./logo.json";

document.title = logoData.name;

window.onload = function () {
  const iconImage = document.querySelector(".card-header__logo-image");
  const name = document.querySelector(".card-header__name");
  const description = document.querySelector(".card-header__description");
  const textData = document.querySelector(".card-header__textData");
  const text = document.querySelector(".card-header__text");
  const text1 = document.querySelector(".card-header__text1");
  const text2 = document.querySelector(".card-header__text2");
  const text3 = document.querySelector(".card-header__text3");
  const text4 = document.querySelector(".card-header__text4");
  const text5 = document.querySelector(".card-header__text5");
  const text6 = document.querySelector(".card-header__text6");

  const linksList = document.querySelector(".card__links");
  const socialLinks = document.querySelector(".card__social-links");

  iconImage.src = logoData.icon;
  iconImage.alt =
    "Imagem da logo " + logoData.name;

  name.textContent = logoData.name;

  description.textContent = logoData.description;
  textData.textContent = logoData.textData;
  text.textContent = logoData.text;
  text1.textContent = logoData.text1;
  text2.textContent = logoData.text2;
  text3.textContent = logoData.text3;
  text4.textContent = logoData.text4;
  text5.textContent = logoData.text5;
  text6.textContent = logoData.text6;

  logoData.links.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    
    a.href = link.href;
    a.textContent = link.text;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    li.appendChild(a);
    linksList.appendChild(li);
  });

  logoData.socialLinks.forEach((socialLink) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");

    img.src = socialLink.icon;
    img.alt = socialLink.name + "logo";
    a.href = socialLink.href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    img.target = "_blank";
    img.rel = "noopener noreferrer";

    a.appendChild(img);
    li.appendChild(a);
    socialLinks.appendChild(li);
  });
};

