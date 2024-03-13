// select element
const selectElement = function(element)
{
    return document.querySelector(element);
};

//select all elements into an array
const selectElements = function(element)
{
    return document.querySelectorAll(element);
};

const menu = selectElement('.menu');
const body = selectElement('body');

menu.addEventListener('click', function()
{
    body.classList.toggle('open');
});
//Pre-load
const image = selectElement('.hero');
const bigImg = document.createElement("img");
bigImg.onload = function(){
    try {
        image.style.backgroundImage = "url(" +this.src + ")";
    } catch (error) {
        
    }
    
};
bigImg.src = "./pic/intro-final.jpg";

// parallax
window.addEventListener('scroll', function()
{
    const parallax = selectElements('.parallax');
    let scrollPosition = window.pageYOffset;
    let count = 0;

    parallax.forEach(element => {
        if(this.innerWidth > 758){
        count++;
        element.style.transform = 'translateY(' +scrollPosition *(-0.5-(count*0.3)) +'px)';
        }
    });
    
});

// Scroll Reveal libary script
window.sr = ScrollReveal();
sr.reveal('.animate-left', {
    origin:'left',
    duration:1000,
    distance:'25rem',
    delay:300
});

sr.reveal('.animate-right', {
    origin:'right',
    duration:1000,
    distance:'25rem',
    delay:600
});

sr.reveal('.animate-top', {
    origin:'top',
    duration:1000,
    distance:'1rem',
    delay:600
});

sr.reveal('.animate-bottom', {
    origin:'bottom',
    duration:2000,
    distance:'5rem',
    delay:600
});

//COLOR PRODUCT


const cards = selectElements('.container-products .card');
const item_bg = function(index){
    return cards.item(index).querySelector(".icon").querySelector(".item")
};
const colors = function(index){
    return cards.item(index).querySelector(".product-colors").querySelectorAll("span")
};

const clickk = selectElements('.container-products .card .product-colors span');
clickk.forEach(element => {
    element.addEventListener('click',function()
    {
        //console.log(indexInParent(element.parentNode.parentNode.parentNode.parentNode.parentNode));
        colors(indexInParent(element.parentNode.parentNode.parentNode.parentNode.parentNode)).forEach(remove_element => {
            remove_element.classList.remove("active");
        });          
        element.classList.add("active");
        item_bg(indexInParent(element.parentNode.parentNode.parentNode.parentNode.parentNode)).style.backgroundImage = "url(" + element.getAttribute("data-pic") + ")";

    });
});



function indexInParent(node) {
    var children = node.parentNode.childNodes;
    var num = 0;
    for (var i=0; i<children.length; i++) {
         if (children[i]==node) return num;
         if (children[i].nodeType==1) num++;
    }
    return -1;
}

//Color product changing end


