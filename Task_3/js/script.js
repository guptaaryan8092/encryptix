

document.addEventListener('DOMContentLoaded', () => {
    

    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));
    const colorChangeBtn = document.querySelector('.color-change-btn');
    const calculator = document.querySelector('.calculator');
    
    let displayValue = '';
    const colors = ['orange', 'purple', 'brown','blue','Turquoise'];
    let currentColorIndex = 0;

    const clickSound = new Audio('mp3/My Video.mp3'); // Path to your sound file

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            clickSound.play(); // Play sound on button click

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

    // Color change button event listener
    colorChangeBtn.addEventListener('click', () => {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        calculator.style.backgroundColor = colors[currentColorIndex];
    });
});

// Working of Theme
let isDarkMode = false;

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;
}



