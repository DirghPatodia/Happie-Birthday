const content = document.querySelector('.content');

const title = document.querySelector('.title');

const buttons = document.querySelector('.btn-group');

const yesBtn = document.querySelector('#yes-btn');

const noBtn = document.querySelector('#no-btn');



const contentRect = content.getBoundingClientRect();

const noBtnRect = noBtn.getBoundingClientRect();

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (contentRect.width - noBtnRect.width));

    const j = Math.floor(Math.random() * (contentRect.height - noBtnRect.height));

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
})  


