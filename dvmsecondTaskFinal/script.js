
const myImage1 = document.getElementById('buildingImage');
const myImage2 = document.getElementById('yellowImage');
const myImage3 = document.getElementById('shadowImage');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const scrollY2 = -0.25 * scrollY;
  const scrollY3 = -0.3 * scrollY;
  const scrollY4 = -0.25 * scrollY;
  myImage1.style.transform = `translateY(${scrollY2}px)`;
  myImage3.style.transform = `translateY(${scrollY3}px)`;
  myImage2.style.transform = `translateY(${scrollY4}px)`;

});
const companyCardsContainer = document.getElementById('companyCardsContainer');
function createCard([img]) {
  let code = `
        <div class="cardCompanies">
        <img src="${img}" class="cardCompaniesImage" width="170" height="80">
        </div>
    `
  companyCardsContainer.innerHTML += code;
}
let card1 = [img = "https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/optimized/rev-3bf3184/app/uploads/2022/10/Amazon.svg"]
createCard(card1);
let card2 = [img = "Beats.svg"]
createCard(card2);
let card3 = [img = "https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/optimized/rev-3bf3184/app/uploads/2022/10/Property-1GE.png"]
createCard(card3);
let card4 = [img = "NBC.svg"]
createCard(card4);
let card5 = [img = "CBS.svg"]
createCard(card5);
let card6 = [img = "LACounty.svg"]
createCard(card6);
let card7 = [img = "data:image/svg+xml;nitro-empty-id=NTMzOjE1OQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDE0MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"]
createCard(card7);
let card8 = [img = "data:image/svg+xml;nitro-empty-id=NTM2OjE1Nw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDE0MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"]
createCard(card8);
let card9 = [img = "data:image/svg+xml;nitro-empty-id=NTM5OjE3Mg==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAwIDI4MCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"]
createCard(card9);
let card10 = [img = "data:image/svg+xml;nitro-empty-id=NTQyOjE1Mw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDE0MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"]
createCard(card10);


const companyCardsContainer1 = document.getElementById('companyCardsContainer1');
function createCard1([img]) {
  let code1 = `
        <div class="cardCompanies1">
        <img src="${img}" class="cardCompaniesImage1" width="170" height="80">
        </div>
    `
  companyCardsContainer1.innerHTML += code1;
}
let Secondcard1 = [img = "https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/optimized/rev-3bf3184/app/uploads/2022/11/QE-white.svg"]
createCard1(Secondcard1);
let Secondcard2 = [img = "https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/optimized/rev-3bf3184/app/uploads/2022/11/PhysiciansFormula-1.svg"]
createCard1(Secondcard2);
let Secondcard3 = [img = "RedBarn.svg"]
createCard1(Secondcard3);
let Secondcard4 = [img = "Aerovironment2.svg"]
createCard1(Secondcard4);
let Secondcard5 = [img = "https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/source/rev-2134071/app/uploads/2022/11/Lipsmacker2.svg"]
createCard1(Secondcard5);
let Secondcard6 = [img = "TCE.svg"]
createCard1(Secondcard6);
let Secondcard7 = [img = "data:image/svg+xml;nitro-empty-id=Njc5OjE2Mw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDE0MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"]
createCard1(Secondcard7);
let Secondcard8 = [img = "data:image/svg+xml;nitro-empty-id=NjgyOjE4Mw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDE0MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"]
createCard1(Secondcard8);
let Secondcard9 = [img = "data:image/svg+xml;nitro-empty-id=NjgyOjE4Mw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDE0MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"]
createCard1(Secondcard9);
let Secondcard10 = [img = "data:image/svg+xml;nitro-empty-id=NjgyOjE4Mw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDE0MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"]
createCard1(Secondcard10);
let Secondcard11 = [img = "data:image/svg+xml;nitro-empty-id=NjgyOjE4Mw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDE0MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"]
createCard1(Secondcard11);

const discoveryButton = document.getElementById('discovery');
const discoveryDiv = document.getElementById('discoveryDiv');
const discoveryText = document.getElementById('discoveryToggleButton')
discoveryButton.classList.remove('bgColor');
discoveryDiv.classList.add('hidden')

discoveryButton.addEventListener('click', function () {
  discoveryDiv.classList.toggle('hidden');
  discoveryButton.classList.toggle('bgColor')
  discoveryText.classList.toggle('textColor')
});
const strategyButton = document.getElementById('strategy');
const strategyDiv = document.getElementById('strategyDiv');
const strategyText = document.getElementById('strategyToggleButton')
strategyButton.classList.remove('bgColor');
strategyDiv.classList.add('hidden')

strategyButton.addEventListener('click', function () {
  console.log('clicked')
  strategyDiv.classList.toggle('hidden');
  strategyButton.classList.toggle('bgColor')
  strategyText.classList.toggle('textColor')
});
const solutionsButton = document.getElementById('solutions');
const solutionsDiv = document.getElementById('solutionsDiv');
const solutionsText = document.getElementById('solutionsToggleButton')
solutionsButton.classList.remove('bgColor');
solutionsDiv.classList.add('hidden')

solutionsButton.addEventListener('click', function () {
  console.log('clicked')
  solutionsDiv.classList.toggle('hidden');
  solutionsButton.classList.toggle('bgColor')
  solutionsText.classList.toggle('textColor')
});
const responsiveButton = document.getElementById('responsive');
const responsiveDiv = document.getElementById('responsiveDiv');
const responsiveText = document.getElementById('responsiveToggleButton')
responsiveButton.classList.remove('bgColor');
responsiveDiv.classList.add('hidden')

responsiveButton.addEventListener('click', function () {
  console.log('clicked')
  responsiveDiv.classList.toggle('hidden');
  responsiveButton.classList.toggle('bgColor')
  responsiveText.classList.toggle('textColor')
});
const enterpriseButton = document.getElementById('enterprise');
const enterpriseDiv = document.getElementById('enterpriseDiv');
const enterpriseText = document.getElementById('enterpriseToggleButton')
enterpriseButton.classList.remove('bgColor');
enterpriseDiv.classList.add('hidden')

enterpriseButton.addEventListener('click', function () {
  console.log('clicked')
  enterpriseDiv.classList.toggle('hidden');
  enterpriseButton.classList.toggle('bgColor')
  enterpriseText.classList.toggle('textColor')
});
const marketingButton = document.getElementById('marketing');
const marketingDiv = document.getElementById('marketingDiv');
const marketingText = document.getElementById('marketingToggleButton')
marketingButton.classList.remove('bgColor');
marketingDiv.classList.add('hidden')

marketingButton.addEventListener('click', function () {
  console.log('clicked')
  marketingDiv.classList.toggle('hidden');
  marketingButton.classList.toggle('bgColor')
  marketingText.classList.toggle('textColor')
});
const companyCardsContainer2 = document.getElementById('companyCardsContainer2');
function createCard2([img, text]) {
  let code = `
          <div class="cardCompanies2">
          <span class="cardCompanies2ImageWrapper"><img src="${img}" class="cardCompanies2Image" width="62" height="80"></span>
          <span class="cardCompanies2Text">${text}</span>
          </div>
      `
  companyCardsContainer2.innerHTML += code;

}
let Thirdcard1 = [img = "https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/source/rev-2134071/app/uploads/2022/09/client-magento.svg", text = "Magento"
]

createCard2(Thirdcard1);
let Thirdcard2 = [img = "https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/source/rev-2134071/app/uploads/2022/09/icon-wordpress.svg", text = "Wordpress"
]

createCard2(Thirdcard2);
let Thirdcard3 = [img = "https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/source/rev-2134071/app/uploads/2022/09/icon-shopify.svg", text = "Shopify"
]

createCard2(Thirdcard3);
let Thirdcard4 = [img = "https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/source/rev-2134071/app/uploads/2023/01/icon-umbraco.svg", text = "Umbraco"
]

createCard2(Thirdcard4);
let Thirdcard5 = [img = "https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/source/rev-2134071/app/uploads/2022/09/microsoft-net.svg", text = "Microsoft .NET"
]

createCard2(Thirdcard5);
let Thirdcard6 = [img = "Property-1Sitefinity-2.svg", text = "Progress Sitefinity"
]

createCard2(Thirdcard6);
let Thirdcard7 = [img = "data:image/svg+xml;nitro-empty-id=OTEyOjE5NA==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgODIgOTUiIHdpZHRoPSI4MiIgaGVpZ2h0PSI5NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4=", text = "Magento"
]

createCard2(Thirdcard7);
let Thirdcard8 = [img = "data:image/svg+xml;nitro-empty-id=OTE2OjE5Ng==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgODMgODMiIHdpZHRoPSI4MyIgaGVpZ2h0PSI4MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4=", text = "Magento"
]

createCard2(Thirdcard8);
let Thirdcard9 = [img = "data:image/svg+xml;nitro-empty-id=OTIwOjE5MA==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzggODciIHdpZHRoPSI3OCIgaGVpZ2h0PSI4NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4=", text = "Magento"
]

createCard2(Thirdcard9);
let Thirdcard10 = [img = "data:image/svg+xml;nitro-empty-id=OTI0OjE5MA==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTY0IDE2NiIgd2lkdGg9IjE2NCIgaGVpZ2h0PSIxNjYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+", text = "Magento"
]

createCard2(Thirdcard10);
let Thirdcard11 = [img = "data:image/svg+xml;nitro-empty-id=OTI4OjE5OQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzggNzciIHdpZHRoPSI3OCIgaGVpZ2h0PSI3NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4=", text = "Magento"
]

createCard2(Thirdcard11);
let Thirdcard12 = [img = "data:image/svg+xml;nitro-empty-id=OTMyOjIyMQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+", text = "Magento"
]

createCard2(Thirdcard12);
const companyCardsContainer3 = document.getElementById('companyCardsContainer3');
function createCard3([img, text]) {
  let code = `
        <div class="cardCompanies3">
        <span class="cardCompanies3ImageWrapper"><img src="${img}" class="cardCompanies3Image" width="62" height="80"></span>
        <span class="cardCompanies3Text">${text}</span>
        </div>
    `
  companyCardsContainer3.innerHTML += code;

}
let Fourthcard1 = [img = "https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/source/rev-2134071/app/uploads/2023/01/Shape.png", text = "Drupal"
]
createCard3(Fourthcard1);
let Fourthcard2 = [img = "https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/source/rev-2134071/app/uploads/2022/09/icon-sitecore.svg", text = "Sitecore"
]
createCard3(Fourthcard2);
let Fourthcard3 = [img = "https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/source/rev-2134071/app/uploads/2022/09/icon-kentico.svg", text = "Kinetico"
]
createCard3(Fourthcard3);
let Fourthcard4 = [img = "icon-react.svg", text = "React JS"
]
createCard3(Fourthcard4);
let Fourthcard5 = [img = "https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/source/rev-2134071/app/uploads/2022/09/icon-apple.svg", text = "Apple iOS"
]
createCard3(Fourthcard5);
let Fourthcard6 = [img = "https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/source/rev-2134071/app/uploads/2022/09/icon-android.svg", text = "Android"
]
createCard3(Fourthcard6);
let Fourthcard7 = [img = "data:image/svg+xml;nitro-empty-id=OTY2OjE3NQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjYgODYiIHdpZHRoPSI2NiIgaGVpZ2h0PSI4NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4=", text = "Drupal"
]
createCard3(Fourthcard7);
let Fourthcard8 = [img = "data:image/svg+xml;nitro-empty-id=OTcwOjE5Mw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgODMgODMiIHdpZHRoPSI4MyIgaGVpZ2h0PSI4MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4=", text = "Drupal"
]
createCard3(Fourthcard8);
let Fourthcard9 = [img = "data:image/svg+xml;nitro-empty-id=OTc0OjE5MA==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgODMgODMiIHdpZHRoPSI4MyIgaGVpZ2h0PSI4MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4=", text = "Drupal"
]
createCard3(Fourthcard9);
let Fourthcard10 = [img = "data:image/svg+xml;nitro-empty-id=OTc4OjE4Nw==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgODcgNzciIHdpZHRoPSI4NyIgaGVpZ2h0PSI3NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4=", text = "Drupal"
]
createCard3(Fourthcard10);
let Fourthcard11 = [img = "data:image/svg+xml;nitro-empty-id=OTgyOjE4OA==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgODMiIHdpZHRoPSI3MCIgaGVpZ2h0PSI4MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4=", text = "Drupal"
]
createCard3(Fourthcard11);
let Fourthcard12 = [img = "data:image/svg+xml;nitro-empty-id=OTg2OjE5MA==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgODUgNDgiIHdpZHRoPSI4NSIgaGVpZ2h0PSI0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4=", text = "Drupal"
]
createCard3(Fourthcard12);

const imageCursorDiv1 = document.getElementById('imageCursorDiv1')
const imageCursorDiv2 = document.getElementById('imageCursorDiv2')
const hoverImage1 = document.getElementById('hoverImage1')
const hoverImage2 = document.getElementById('hoverImage2')
// window.onpointermove = (e)=>{
// };
const scrollFunc = () => {
  const horScroller = document.getElementById("companyCardsContainer");
  if (document.getElementById("companyCardsContainer").getBoundingClientRect().top != 84.6666) {
    let tempValue = document.getElementById("companyCardsContainer").getBoundingClientRect().top - 84.6666717529297;
    let tempValueActual = tempValue * 0.2
    horScroller.style.transform = `translateX(${tempValueActual}px)`
  }
  const horScroller1 = document.getElementById("companyCardsContainer1");
  if (document.getElementById("companyCardsContainer").getBoundingClientRect().top != 84.6666) {
    let tempValue = - document.getElementById("companyCardsContainer").getBoundingClientRect().top + 84.6666717529297;
    let tempValueActual = tempValue * 0.2
    horScroller1.style.transform = `translateX(${tempValueActual}px)`
  }
  const horScroller2 = document.getElementById("companyCardsContainer2");
  if (document.getElementById("companyCardsContainer2").getBoundingClientRect().top != 84.6666) {
    let tempValue = document.getElementById("companyCardsContainer2").getBoundingClientRect().top - 84.6666717529297;
    let tempValueActual = tempValue * 0.2
    horScroller2.style.transform = `translateX(${tempValueActual}px)`
  }
  const horScroller3 = document.getElementById("companyCardsContainer3");
  if (document.getElementById("companyCardsContainer2").getBoundingClientRect().top != 84.6666) {
    let tempValue = - document.getElementById("companyCardsContainer2").getBoundingClientRect().top + 84.6666717529297;
    let tempValueActual = tempValue * 0.2
    horScroller3.style.transform = `translateX(${tempValueActual}px)`
  }
};
window.addEventListener("scroll", scrollFunc);
window.addEventListener("pointermove", (e) => {
  const { clientX, clientY } = e;
  hoverImage1.style.top = `${clientY}px`;
  hoverImage1.style.left = `${clientX}px`;
  hoverImage2.style.top = `${clientY}px`;
  hoverImage2.style.left = `${clientX}px`;

});
imageCursorDiv1.addEventListener('mouseenter', function (e) {
  hoverImage1.style.opacity = .5;
})
imageCursorDiv1.addEventListener('mouseleave', function (e) {
  hoverImage1.style.opacity = 0;
})
imageCursorDiv2.addEventListener('mouseenter', function (e) {
  hoverImage2.style.opacity = .5;
})
imageCursorDiv2.addEventListener('mouseleave', function (e) {
  hoverImage2.style.opacity = 0;
})

window.addEventListener("scroll", () => {
  let scrolllingValue = window.pageYOffset;
  if (scrolllingValue > 0) {
    document.getElementsByClassName("macnhilunga")[0].style.background = "white";
    document.getElementsByClassName("logoimgnav")[0].style.filter = "brightness(0)"
    document.getElementsByClassName("logoimgnav")[0].style.width = "73px";
    document.getElementsByClassName("logoimgnav")[0].style.height = "17.7px";
    document.getElementsByClassName("main-logo")[0].style.height = "17.7px";

    let navbarAnchors = document.getElementsByClassName("navbarAnchor");
    for (let items of navbarAnchors) {
      items.style.color = "#000";
    }
    let hamLines = document.getElementsByClassName("hamLine");
    for (let line of hamLines) {
      line.style.background = "#000";
    }
    document.getElementsByTagName("header")[0].style.height = "60px";
  } else {
    document.getElementsByClassName("macnhilunga")[0].style.background = "transparent";
    document.getElementsByClassName("logoimgnav")[0].style.removeProperty("filter");
    let navbarAnchors = document.getElementsByClassName("navbarAnchor");
    document.getElementsByClassName("logoimgnav")[0].style.width = "132px";
    document.getElementsByClassName("logoimgnav")[0].style.height = "32px";
    document.getElementsByClassName("main-logo")[0].style.height = "32px";
    for (let items of navbarAnchors) {
      items.style.color = "#fff";
    }
    document.getElementsByTagName("header")[0].style.height = "120px";
    let hamLines = document.getElementsByClassName("hamLine");
    for (let line of hamLines) {
      line.style.background = "#fff";
    }
  }
});
let hamOpened = false;
const openHam = () => {
  if (!hamOpened) {
    document.getElementsByClassName("hamLine")[0].style.opacity = "0";
    document.getElementsByClassName("hamLine")[3].style.opacity = "0";
    document.getElementsByClassName("hamLine")[1].style.transform = "rotate(45deg)";
    document.getElementsByClassName("hamLine")[2].style.transform = "rotate(-45deg)";
    document.getElementsByClassName("hamburgerMenuOpened")[0].style.opacity = "1";
    document.getElementsByClassName("hamburgerMenuOpened")[0].style.top = "0";
    let hamLines = document.getElementsByClassName("hamLine");
    for (let line of hamLines) {
      line.style.background = "#000";
    }
    hamOpened = true;
  }
  else {
    document.getElementsByClassName("hamLine")[0].style.opacity = "1";
    document.getElementsByClassName("hamLine")[3].style.opacity = "1";
    document.getElementsByClassName("hamLine")[1].style.transform = "rotate(0deg)";
    document.getElementsByClassName("hamLine")[2].style.transform = "rotate(0deg)";
    document.getElementsByClassName("hamburgerMenuOpened")[0].style.opacity = "0";
    document.getElementsByClassName("hamburgerMenuOpened")[0].style.top = "-100%";
    let hamLines = document.getElementsByClassName("hamLine");
    for (let line of hamLines) {
      line.style.background = "#fff";
    }
    hamOpened = false;
  }
};
const hamMenu = document.getElementsByClassName("hamburgerMenu")[0];
hamMenu.addEventListener("click", openHam);






let lastScrollTop = 0;
const onScroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let scrollDirection;

  if (scrollTop > lastScrollTop) {
    scrollDirection = "down";
  } else {
    scrollDirection = "up";
  }

  lastScrollTop = scrollTop;
  if (scrollDirection === "down") {


    let awardText = document.getElementsByClassName('section4-first-first-first')[0]
    if (document.getElementsByClassName('section4-first-first-first')[0].getBoundingClientRect().top < 400) {
      awardText.classList.remove('animateHidden')
      awardText.classList.remove('translateAnimation')
    } 
    // console.log(document.getElementsByClassName('section4-first-first-first')[0].getBoundingClientRect().top);

  
    let awardText1 = document.getElementsByClassName('section4-first-first-second')[0]
    if (document.getElementsByClassName('section4-first-first-second')[0].getBoundingClientRect().top < 400) {
      awardText1.classList.remove('animateHidden')
      awardText1.classList.remove('translateAnimation')
    } 


    let awardText2 = document.getElementsByClassName('section4-first-first-second')[1]
    if (document.getElementsByClassName('section4-first-first-second')[1].getBoundingClientRect().top < 400) {
      awardText2.classList.remove('animateHidden')
      awardText2.classList.remove('translateAnimation')
    } 

    let awardText3 = document.getElementsByClassName('section4-first-first-second')[2]
    if (document.getElementsByClassName('section4-first-first-second')[2].getBoundingClientRect().top < 400) {
      awardText3.classList.remove('animateHidden')
      awardText3.classList.remove('translateAnimation')
    } 
   

    let awardText4 = document.getElementsByClassName('section4-first-first-second')[3]
    if (document.getElementsByClassName('section4-first-first-second')[3].getBoundingClientRect().top < 400) {
      awardText4.classList.remove('animateHidden')
      awardText4.classList.remove('translateAnimation')
    } 

}
}
window.addEventListener("scroll" , onScroll);






