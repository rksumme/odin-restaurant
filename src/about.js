import "./styles-about.css";

export function aboutPage () {
    console.log("about Page is being imported");

    const content = document.getElementById('content');

    const buildAboutGrid = () => {
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('about-container');
        content.appendChild(contentDiv);

        const picDiv = document.createElement('div');
        picDiv.classList.add('picture-panel');
        const aboutDiv = document.createElement('div');
        aboutDiv.classList.add('about-section');
        contentDiv.appendChild(picDiv);
        contentDiv.appendChild(aboutDiv);
    }

    const buildAboutText = () => {
        const aboutDiv = document.querySelector('.about-section');

        const aboutTitle = document.createElement('div');
        aboutTitle.classList.add('about-title');
        aboutTitle.textContent = 'About Savory Spoon';
        aboutDiv.appendChild(aboutTitle);

        const aboutParagraph = document.createElement('div');
        aboutParagraph.classList.add('about-paragraph');
        aboutDiv.appendChild(aboutParagraph);

        const aboutDescription1 = document.createElement('p');
        aboutDescription1.classList.add('description1');
        aboutDescription1.textContent = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean. Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Purus est efficitur laoreet mauris pharetra vestibulum fusce.\r\n';

        const aboutDescription2 = document.createElement('p');
        aboutDescription2.classList.add('description2');
        aboutDescription2.textContent = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean. Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Purus est efficitur laoreet mauris pharetra vestibulum fusce.'
        aboutParagraph.appendChild(aboutDescription1);
        aboutParagraph.appendChild(aboutDescription2);

        const contactContainer = document.createElement('div');
        contactContainer.classList.add('contact-container');
        aboutDiv.appendChild(contactContainer);

        const contactLine1 = document.createElement('div');
        contactLine1.classList.add('contact-line');
        contactContainer.appendChild(contactLine1);

        const locationImg = document.createElement('div');
        locationImg.classList.add('location-icon');
        contactLine1.appendChild(locationImg);

        const locationText = document.createElement('p');
        locationText.classList.add('location-text');
        locationText.textContent = '700 Greenville Street, Dallas, TX'
        contactLine1.appendChild(locationText);

        const contactLine2 = document.createElement('div');
        contactLine2.classList.add('contact-line');
        contactContainer.appendChild(contactLine2);

        const phoneImg = document.createElement('div');
        phoneImg.classList.add('phone-icon');
        contactLine2.appendChild(phoneImg);

        const phoneText = document.createElement('p');
        phoneText.classList.add('phone-text');
        phoneText.textContent = '800-000-000';
        contactLine2.appendChild(phoneText);

        const contactLine3 = document.createElement('div');
        contactLine3.classList.add('contact-line');
        contactContainer.appendChild(contactLine3);

        const emailImg = document.createElement('div');
        emailImg.classList.add('email-icon');
        contactLine3.appendChild(emailImg);

        const emailText = document.createElement('p');
        emailText.classList.add('email-text');
        emailText.textContent = 'savoryspoon@example.com';
        contactLine3.appendChild(emailText);
    }

    return  buildAboutGrid(),
            buildAboutText();
}