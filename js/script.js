const xmark = document.getElementById("x-mark");
xmark.style.display = "none";

const sideBarButton = document.getElementById("side-bar");
sideBarButton.addEventListener("click", function () {
  document.getElementById("nav-links").style.display = "block";
  document.getElementById("x-mark").style.display = "block";
  document.getElementById("side-bar").style.display = "none";
});

xmark.addEventListener("click", function () {
  document.getElementById("nav-links").style.display = "none";
  document.getElementById("x-mark").style.display = "none";
  document.getElementById("side-bar").style.display = "block";
});

// show gallary content
const showGallary = document.getElementById("show-gallary");
function showGallaryBox(imgSerial) {
  const col = document.createElement("div");
  col.classList.add("col");
  col.innerHTML = `
  <div class="gallary-box card h-100 p-4 onmouseover='showDetailes()'">
    <img
      class="img-fluid"
      src="images/illustrators/illustrator-${imgSerial}.png"
      alt=""
    />
    <a class="position-absolute" href="#">
    </a>
    <p class="show">show detailes</p>
    </div>
    `;
  showGallary.appendChild(col);
}

showGallaryBox(1);
showGallaryBox(2);
showGallaryBox(3);

showGallaryBox(1);
showGallaryBox(2);
showGallaryBox(3);

showGallaryBox(1);
showGallaryBox(2);
showGallaryBox(3);

const showMoreButton = document.getElementById("show-more");
showMoreButton.addEventListener("click", function () {
  showGallaryBox(1);
  showGallaryBox(2);
  showGallaryBox(3);

  showGallaryBox(2);
  showGallaryBox(1);
  showGallaryBox(3);

  showGallaryBox(1);
  showGallaryBox(3);
  showGallaryBox(2);

  showGallaryBox(3);
  showGallaryBox(1);
  showGallaryBox(2);

  showGallaryBox(1);
  showGallaryBox(2);
  showGallaryBox(3);

  showGallaryBox(2);
  showGallaryBox(1);
  showGallaryBox(3);

  showGallaryBox(1);
  showGallaryBox(3);
  showGallaryBox(2);

  showGallaryBox(3);
  showGallaryBox(1);
  showGallaryBox(2);

  showGallaryBox(1);
  showGallaryBox(3);
  showGallaryBox(2);

  showGallaryBox(3);
  showGallaryBox(1);
  showGallaryBox(2);

  showGallaryBox(1);
  showGallaryBox(3);
  showGallaryBox(2);

  showGallaryBox(3);
  showGallaryBox(1);
  showGallaryBox(2);

  showGallaryBox(1);
  showGallaryBox(3);
  showGallaryBox(2);

  showGallaryBox(3);
  showGallaryBox(1);
  showGallaryBox(2);

  showGallaryBox(1);
  showGallaryBox(3);
  showGallaryBox(2);

  showMoreButton.style.display = "none";
});

function pricingTable(iconId, categoryName, price) {
  const pricingSection = document.getElementById("pricing-section");
  const col = document.createElement("div");
  col.classList.add("col");
  col.innerHTML = `
    <div class="price-box shadow-sm mx-2 py-5 text-center">
      <!-- price icon image  -->
      <div class="price-icon">
        <img class="img-fluid" src="images/icons/p${iconId}.png" alt="" />
      </div>

      <h4 class="category-name">${categoryName}</h4>

      <!-- category of service  -->
      <ul class="category-service text-start">
        <li class="price-item">
          <i class="fa-solid fa-check"></i>
          1 Home Page
        </li>
        <li class="price-item">
          <i class="fa-solid fa-check"></i>
          2 Home Page Design
        </li>
        <li class="price-item">
          <i class="fa-solid fa-check"></i>
          Unlimited Inner Page
        </li>
        <li class="price-item">
          <i class="fa-solid fa-check"></i>
          50 Elelments
        </li>
        <li class="price-item">
          <i class="fa-solid fa-check"></i>
          Support
        </li>
      </ul>

      <!-- order now -->
      <button class="order-now">
        <i class="fa-solid fa-dollar-sign"></i>
        <span>${price}</span><span>Order</span>
      </button>
    </div>
  `;

  // append child
  pricingSection.appendChild(col);
}

pricingTable(1, "Silver", 30);
pricingTable(2, "Enterprise", 750);
pricingTable(3, "Golden", 120);

function contactAddress(iconId, title, address1, address2) {
  const contactSection = document.getElementById("contact-address");
  const col = document.createElement("div");
  col.classList.add("col");
  col.innerHTML = `
    <div class="contact-info text-center p-4">
      <div class="contact-icon">
        <i class="${iconId}"></i>
      </div>
      <h4 class="pt-4 pb-3 mb-0">${title}</h4>
      <p>${address1}</p>
      <p>${address2}</p>
    </div>
  `;

  // append child
  contactSection.appendChild(col);
}

contactAddress(
  "fa-solid fa-phone-flip",
  "Phone Number",
  "+435-64773728",
  "+062-35363782588"
);
contactAddress(
  "fa-solid fa-envelope",
  "Mail Address",
  "Apoyoxo@gmail.com",
  "Vestorygasmo@gmail.com"
);
contactAddress(
  "fa-solid fa-location-dot",
  "Office Address",
  "FA - 154 Careon Street,",
  "California, USA"
);
