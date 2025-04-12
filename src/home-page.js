export function homePage () {

    const navBar = () => {
        let header = document.getElementById('header');
        let titleName = document.createElement('div');
        titleName.classList.add('title-name');
        header.appendChild(titleName);
        console.log('navBar is being imported');

        let buttons = document.querySelectorAll('button');
        let reserveBtn = Array.from(buttons).find(button =>
            button.textContent.includes('Reservations')
        );
        reserveBtn.classList.add('reserve-button');
    }

    return navBar;
}
