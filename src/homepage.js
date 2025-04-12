import "./styles-home.css";

export function homePage () {
    console.log("homePage is being imported");
    
    const content = document.getElementById('content');

    const heroImg = () => {
        let imgDiv = document.createElement('div');
        imgDiv.classList.add('hero-img');
        content.appendChild(imgDiv);
    }

    const welcomeBox = () => {
        let welcome = document.createElement('div');
        welcome.classList.add('welcome');
        welcome.textContent = 'Welcome!'
        content.appendChild(welcome);

        let reservation = document.createElement('button');
        reservation.classList.add('welcome-button');
        reservation.textContent = 'Make a reservation';
        welcome.appendChild(reservation);
    }

    return  heroImg(),
            welcomeBox();
}