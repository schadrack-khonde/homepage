const mobile_data = [

    {title: `Discover innovative ways to decorate` ,
     para: ` We provide unmatched quality, comfort, and style for property owners across the country. 
     Our experts combine form and function in bringing your vision to life. Create a room in your 
     own style with our collection and make your property a reflection of you and what you love.`,
    bgUrl: `url("./images/mobile-image-hero-1.jpg")`,
    }
    ,
    { title: "We are available all across the globe" ,
     para: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
     Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
     store locator. Any questions? Don't hesitate to contact us today.` ,
     bgUrl: `url("./images/mobile-image-hero-2.jpg")`,
    }
    ,
    { title: "Manufactured with the best materials" ,
     para: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
     to ensure that every product is made as perfect and as consistent as possible. With three decades of 
     experience in this industry, we understand what customers want for their home and office.` ,
      bgUrl: `url("./images/mobile-image-hero-3.jpg")`,
    }
];


const desktop_data =
[

    { title: `Discover innovative ways to decorate` ,
    para: ` We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form and function in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`,
   bgUrl: `url("./images/desktop-image-hero-1.jpg")`,
   }
   ,
   { title: "We are available all across the globe" ,
    para: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.` ,
    bgUrl: `url("./images/desktop-image-hero-2.jpg")`,
   }
   ,
   { title: "Manufactured with the best materials" ,
    para: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.` ,
     bgUrl: `url("./images/desktop-image-hero-3.jpg")`,
   },

]


const hamburgerMenu = document.getElementById('hamburger');
const navigation_container = document.getElementsByClassName('navigation-container')[0];

/*will look how to select the all after */
const link_element1 = document.getElementsByClassName('link-element')[0];
const link_element2 = document.getElementsByClassName('link-element')[1];
const link_element3 = document.getElementsByClassName('link-element')[2];
const link_element4 = document.getElementsByClassName('link-element')[3];
const span_bar1 = document.getElementsByClassName('span-bar')[0];
const span_bar2 = document.getElementsByClassName('span-bar')[1];
const span_bar3 = document.getElementsByClassName('span-bar')[2];
const span_bar4 = document.getElementsByClassName('span-bar')[3];
const links = document.getElementsByClassName('links')[0];
const logo = document.getElementsByClassName('logo')[0];
let checker = true;
const header_section = document.getElementsByClassName('header-section')[0];
/* on click change the Hamburger menu to close and display the links */
hamburgerMenu.addEventListener('click', ()=>{
    
    if(checker){
        logo.style.display = 'none';
        hamburgerMenu.src = './images/icon-close.svg';
        navigation_container.style.backgroundColor = 'hsl(0, 0%, 100%)';
        link_element1.style.color = 'hsl(0, 0%, 0%)';
        link_element2.style.color = 'hsl(0, 0%, 0%)';
        link_element3.style.color = 'hsl(0, 0%, 0%)';
        link_element4.style.color = 'hsl(0, 0%, 0%)';

        span_bar1.style.backgroundColor = 'hsl(0, 0%, 0%)';
        span_bar2.style.backgroundColor = 'hsl(0, 0%, 0%)';
        span_bar3.style.backgroundColor = 'hsl(0, 0%, 0%)';
        span_bar4.style.backgroundColor = 'hsl(0, 0%, 0%)';
        links.style.display = 'flex';
        
        


        checker = false;
    }else{
        logo.style.display = 'block';
        hamburgerMenu.src = './images/icon-hamburger.svg';
        navigation_container.style.backgroundColor = 'transparent';
        link_element1.style.color= 'hsl(0, 0%, 100%)';
        link_element2.style.color = 'hsl(0, 0%, 100%)';
        link_element3.style.color = 'hsl(0, 0%, 100%)';
        link_element4.style.color = 'hsl(0, 0%, 100%)';

        span_bar1.style.backgroundColor = 'hsl(0, 0%, 100%)';
        span_bar2.style.backgroundColor = 'hsl(0, 0%, 100%)';
        span_bar3.style.backgroundColor = 'hsl(0, 0%, 100%)';
        span_bar4.style.backgroundColor = 'hsl(0, 0%, 100%)';
        links.style.display = 'none';


        checker = true;
    }

})



/*onclick to change the bg-image of furniture container and update the text from the data array of object */
const para = document.getElementById('para');
const title = document.getElementById('title');
const furnitureBg = document.getElementsByClassName('furniture-img')[0];
const left = document.getElementById('left');
const right = document.getElementById('right');

const screenWidth = window.screen.width;

let movementValue = 0;

left.addEventListener('click', ()=>{
    
   if(movementValue === 0){
       movementValue = mobile_data.length - 1;
   }else if(movementValue >= 0 && movementValue <= mobile_data.length - 1){
       movementValue--;
   }
    if(window.screen.width <= 800){
        furnitureBg.style.backgroundImage = mobile_data[movementValue].bgUrl;
        para.innerText = mobile_data[movementValue].para;
        title.innerText = mobile_data[movementValue].title;

    }else if( window.screen.width > 800){
        furnitureBg.style.backgroundImage = desktop_data[movementValue].bgUrl; 
        para.innerText = desktop_data[movementValue].para;
        title.innerText = desktop_data[movementValue].title;
    }
  
})

right.addEventListener('click', ()=>{
    if(movementValue >=  0 && movementValue < mobile_data.length - 1){
        movementValue ++;
    }else if(movementValue === mobile_data.length - 1 ){
        movementValue = 0 ;
    }
    if(  window.screen.width <= 800 ){
       
        furnitureBg.style.backgroundImage = mobile_data[movementValue].bgUrl;
        para.innerText = mobile_data[movementValue].para;
        title.innerText = mobile_data[movementValue].title;

    }else if( window.screen.width > 800){
        furnitureBg.style.backgroundImage = desktop_data[movementValue].bgUrl; 
        para.innerText = desktop_data[movementValue].para;
        title.innerText = desktop_data[movementValue].title;
    }
  
})























































