export function constants () {

    const navBar = () => {
        let header = document.getElementById('header');
        let titleName = document.createElement('div');
        titleName.classList.add('title-name');
        titleName.textContent = 'Savory Spoon';
        header.appendChild(titleName);
        console.log('navBar is being imported');

        let buttons = document.querySelectorAll('button');
        let reserveBtn = Array.from(buttons).find(button =>
            button.textContent.includes('Reservations')
        );
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
