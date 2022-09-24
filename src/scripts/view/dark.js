const darkModeKey = 'DARK-MODE';

const darkLightMode = () => {
  if (typeof (Storage) !== 'undefined') {
    const button = document.querySelector('footer-bar');
    const darkArea = document.querySelector('main-content');

    button.insertText = 'dark';

    if (localStorage.getItem(darkModeKey) === null) {
      localStorage.setItem(darkModeKey, 'light');
    }

    const darkMode = () => {
      darkArea.contentPage.style.backgroundColor = 'black';
      darkArea.contentPage.style.color = 'white';
      button.insertText = 'light';
      localStorage.setItem(darkModeKey, 'dark');
    };

    const lightMode = () => {
      darkArea.contentPage.style.backgroundColor = 'white';
      darkArea.contentPage.style.color = 'black';
      button.insertText = 'dark';
      localStorage.setItem(darkModeKey, 'light');
    };

    if (localStorage.getItem(darkModeKey) === 'dark') {
      darkMode();
    }

    const checkDark = () => {
      const theme = localStorage.getItem(darkModeKey);
      if (theme === 'light') {
        darkMode();
      } else {
        lightMode();
      }
    };

    button.darkEvent = checkDark;
  }
};

export default darkLightMode;
