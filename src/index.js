import { homePage } from "./homepage";
import { aboutPage } from "./about";

function constants () {
    const content = document.getElementById('content');

    const navBar = () => {
        let header = document.getElementById('header');
        let titleName = document.createElement('div');
        titleName.classList.add('title-name');
        titleName.textContent = 'Savory Spoon';
        header.appendChild(titleName);
        console.log('navBar is being imported');

        let buttons = document.querySelectorAll('button');
        let buttonsArray = Array.from(buttons);

        let homeBtn = buttonsArray.find(button =>
            button.textContent.includes('Home'));
        homeBtn.classList.add('home-button');
        homeBtn.addEventListener('click', () => {
            content.innerHTML = '';
            homePage();
        })

        let aboutBtn = buttonsArray.find(button =>
            button.textContent.includes('About'));
        aboutBtn.classList.add('about-button');
        aboutBtn.addEventListener('click', () => {
            content.innerHTML = '';
            aboutPage();
        })
        

        let menuBtn = buttonsArray.find(button =>
            button.textContent.includes('Menu'));
        menuBtn.classList.add('menu-button');

        let reserveBtn = buttonsArray.find(button =>
            button.textContent.includes('Reservations'));
        reserveBtn.classList.add('reserve-button');
    }

    const footer = () => {
        let body = document.querySelector('body');

        let footer = document.createElement('footer');
        footer.classList.add('footer');
        footer.textContent = 'Developed by RSW';

        body.appendChild(footer);
    }

    return  navBar(),
            footer();
}


document.addEventListener('DOMContentLoaded', () => {
    constants();
    aboutPage();
});
