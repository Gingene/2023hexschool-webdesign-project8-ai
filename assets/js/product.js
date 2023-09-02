async function productRender() {
  const productNav = document.querySelector("#productNav");
  const product0 = document.querySelector("#product0");
  const productImage1 = document.querySelector("#product-Image1");
  const productImage2 = document.querySelector("#product-Image2");
  const product1 = document.querySelector("#product1");
  const product2 = document.querySelector("#product2");
  let product0Node = product0.children[1].children[1].children[0];
  let product1Node = product1.children[0].children[2].children;
  let product2Node = product2.children[0].children[2].children;
  // 接收的資料
  const data = await getRenderData();
  for (let i of productNav.children) {
    i.children[0].addEventListener("click", (e) => {
      let number = e.target.dataset.number;
      e.preventDefault();
      e.stopPropagation();
      removeProductActive();
      e.target.classList.add("active");
      // console.log(data[number]);
      // 第1區
      productImage1.style.backgroundImage = `url(${data[number].image.p1})`;
      productImage2.style.backgroundImage = `url(${data[number].image.p2})`;
      product0Node.children[0].innerText = data[number].name;
      product0Node.children[1].innerText = data[number].type;
      product0Node.children[2].innerText = data[number].function;
      // 第2區
      product1.children[0].children[0].children[0].childNodes[2].textContent =
        data[number].function;
      product1.children[0].children[1].innerText = data[number].info.title;
      product1Node[0].children[1].innerText = data[number].info.content1;
      product1Node[1].children[1].innerText = data[number].info.content2;
      product1Node[2].children[1].innerText = data[number].info.content3;
      product1Node[3].children[1].innerText = data[number].info.content4;
      product1Node[4].children[1].innerText = data[number].info.content5;
      // 第3區
      product2Node[0].children[0].children[0].children[1].innerText =
        data[number].comments.user1;
      product2Node[1].children[0].children[0].children[1].innerText =
        data[number].comments.user2;
      product2Node[2].children[0].children[0].children[1].innerText =
        data[number].comments.user3;
      for (let i = 0; i < product2Node.length; i++) {
        product2Node[i].children[0].children[1].innerText =
          data[number].comments.typeName;
      }
    });
  }
}

async function getRenderData() {
  let res = await fetch(
    "https://raw.githubusercontent.com/Gingene/JSON_API/main/forHexschool_project8.json"
  );
  let data = res.json();
  return data;
}

function removeProductActive() {
  const productNav = document.querySelector("#productNav");
  for (let i of productNav.children) {
    i.children[0].classList.remove("active");
  }
}

export default productRender;
