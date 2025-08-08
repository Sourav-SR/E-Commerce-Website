const sliderWrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Blazer",
        price: 256,
        colors: [
            {
                code: "white",
                img: "./images/blazer.png",
            },
            {
                code: "green",
                img: "./images/blazer2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Crater",
        price: 299,
        colors: [
            {
                code: "black",
                img: "./images/crater.png"
            },
            {
                code: "#bdbdbd",
                img: "./images/crater2.png"
            },
        ],
    },
    {
        id: 3,
        title: "Airforce",
        price: 199,
        colors: [
            {
                code: "black",
                img: "./images/air.png"
            },
            {
                code: "darkblue",
                img: "./images/air2.png"
            },
        ],
    },
    {
        id: 4,
        title: "Hippie",
        price: 256,
        colors: [
            {
                code: "grey",
                img: "./images/hippie.png"
            },
            {
                code: "black",
                img: "./images/hippie2.png"
            },
        ],
    },
    {
        id: 5,
        title: "Jordans",
        price: 199,
        colors: [
            {
                code: "orange",
                img: "./images/jordan.png"
            },
            {
                code: "green",
                img: "./images/jordan2.jpg"
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImage = document.querySelector(".productImage");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColor = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = products[index]

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = choosenProduct.price+"$";
        currentProductImage.src = choosenProduct.colors[0].img;

        currentProductColor.forEach((color,index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColor.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImage.src = choosenProduct.colors[index].img;
    });
});

currentProductSize.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSize.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
})

const paymentButton = document.querySelector(".productBtn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".closeBtn");

paymentButton.addEventListener("click",()=>{
    payment.style.display = "flex";
});

close.addEventListener("click",()=>{
    payment.style.display = "none";
});