// mobile menu popup
const popup = document.querySelector('.popup');
const list = document.querySelector('.second-header .list');
const hamburger = document.querySelector('.hamburger');

function menuPopup(){
    popup.contains(list) ? popup.removeChild(list):popup.appendChild(list);
    popup.classList.toggle('menu');
};
hamburger.addEventListener('click',menuPopup);
popup.addEventListener('click',menuPopup);

//programs object list
const programs=[
    {
        image:'images/intro.png',
        heading: 'Intoduction',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia ut, eveniet possimus nam facilis quae dolores aut eum inventore nemo minus assumenda!'
    },
    {
        image:'images/cryptography.png',
        heading: 'Cryptography',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia ut, eveniet possimus nam facilis quae dolores aut eum inventore nemo minus assumenda!'
    },
    {
        image:'images/smartContract.png',
        heading: 'Smart Contracts',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia ut, eveniet possimus nam facilis quae dolores aut eum inventore nemo minus assumenda!'
    },
    {
        image:'images/coding.jpeg',
        heading: 'Blockchain Development',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia ut, eveniet possimus nam facilis quae dolores aut eum inventore nemo minus assumenda!'
    },
   
];

const programContainer = document.querySelector('.program-list');
const joinBtn = document.querySelector('.join');

for(let i = 0; i< programs.length;i++){
    const div = document.createElement('div');
    div.classList.add('program-card');
    div.innerHTML = `
            <img src="${programs[i].image}" alt="blockchain-icon">
            <h3 class="red">${programs[i].heading}</h3>
            <p class=" describe white">${programs[i].description}</p>`;
    programContainer.appendChild(div);
}

// Lecturers object list
const lecturers = [
    {
        name:'Henry Ugwu',
        picture:'images/Henry-CEO.jpg',
        position:'An engineer and founder of Herox Tech-hub',
        specialization: 'Henry has vast knowledge of blockchain and  machine learning.He designed a vision software called herox. He is also a visiting professor of Harvard University.',
    },
    {
        name:'Lawrence Page',
        picture:'images/Page.jpg',
        position:'Computer scientist and Co-founder of Google',
        specialization: 'Page was the chief executive officer of Google from 1997 until August 2001, then from April 2011 until July 2015 when he moved to become CEO of Alphabet Inc.',
    },
    {
        name:'Brendan Eich',
        picture:'images/Eich.jpg',
        position:'A computer programmer and technology executive',
        specialization: 'He created the JavaScript programming language and co-founded the Mozilla project, the Mozilla Foundation, and the Mozilla Corporation.',
    },
    {
        name:'Philip Emeagwali',
        picture:'images/Philip.png',
        position:'Computer scietist won the Gordon Bell Prize - the Nobel Prize for computation',
        specialization: 'His computers are currently being used to forecast the weather and to predict the likelihood and effects of future global warming.',
    },
    {
        name:'Tang Xiaoou',
        picture:'images/Tang.jpg',
        position:'computer scientist and the founder of SenseTime, an artificial intelligence company.',
        specialization: 'He is a Chinese billionaire and remains a professor at the Chinese University of Hong Kong with the Department of Information Engineering.',
    },
    {
        name:'Vitalik Buterin',
        picture:'images/vitalik-B.jpg',
        position:'Co-creator of Ethereum, a blockchain platform for decentralized financial applications.',
        specialization: "He became the world's youngest crypto billionaire at age 27 when Ether, Ethereum's native cryptocurrency, first crossed $3,000 per coin in May 2021.",
    },
];

const gridContainer = document.querySelector('.lecturer-grid');
const moreBtn = document.querySelector('.more');
window.addEventListener('resize',()=> location.reload());

for(let i=0;i<lecturers.length;i++){
    const div = document.createElement('div');
    div.classList.add('lecturer');
// add another class while on mobile.
    if(i > 1 && window.innerWidth <= 768 ){
        div.classList.add('mobile-more') ;    
    }
    
    div.innerHTML = `
    <div class="lecturer-pix">
                    <img src="images/behind-pix-bg.png" alt="" class="behind">
                    <img src="${lecturers[i].picture}" alt="" class="front">
                </div>
               <div class="specialization">
                    <h2 class="opaque">${lecturers[i].name}</h2>
                    <p class="red">${lecturers[i].position}</p>
                    <hr>
                    <p class="opaque">${lecturers[i].specialization}</p>
                </div>`;
gridContainer.insertBefore(div,moreBtn);
}

// display more elements when more button is clicked in mobile
const display = document.querySelectorAll('.mobile-more');
const moreLessBtn = document.querySelectorAll('.more');

function mobileDisplay(){
    display.forEach(n => n.classList.toggle('mobile-more'));
    moreLessBtn.forEach(n => n.classList.toggle('non-display'))
}