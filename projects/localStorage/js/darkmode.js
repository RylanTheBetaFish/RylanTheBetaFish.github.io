let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    // add darkmode class to body
    document.body.classList.add('darkmode');
    // update local storage
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    // remove darkmode class from body
    document.body.classList.remove('darkmode');
    // update local storage
    localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
})