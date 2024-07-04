document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));
    let displayValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            switch (value) {
                case 'AC':
                    displayValue = '';
                    display.textContent = '0';
                    break;
                case 'DEL':
                    displayValue = displayValue.slice(0, -1);
                    display.textContent = displayValue || '0';
                    break;
                case '%':
                    displayValue = (parseFloat(displayValue) / 100).toString();
                    display.textContent = displayValue;
                    break;
                case '=':
                    try {
                        displayValue = eval(displayValue);
                        display.textContent = displayValue;
                    } catch {
                        display.textContent = 'Error';
                        displayValue = '';
                    }
                    break;
                default:
                    if (display.textContent === '0') {
                        display.textContent = '';
                    }
                    displayValue += value;
                    display.textContent = displayValue;
            }
        });
    });
});
let isDarkMode = false;

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;
}