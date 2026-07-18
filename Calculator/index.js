const display = document.getElementById('display');
const clearBtn = document.getElementById('clear');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (value === '=') {
            try {
                display.value = eval(display.value);    
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    });
});

clearBtn.addEventListener('click', () => {
    display.value = '';
});