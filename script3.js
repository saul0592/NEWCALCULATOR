
const buttons = document.querySelectorAll('button');


buttons.forEach(button => {
    button.addEventListener('click', function() {
        const color = this.id;
        changeBackgroundColor(color);
    });
});


function changeBackgroundColor(color) {
    const body = document.querySelector('body');
    switch (color) {
        case 'Red':
            body.style.backgroundColor = 'red';
            break;
        case 'Blue':
            body.style.backgroundColor = 'blue';
            break;
        case 'Purple':
            body.style.backgroundColor = 'purple';
            break;
        case 'Orange':
            body.style.backgroundColor = 'orange';
            break;
        case 'Pink':
            body.style.backgroundColor = 'pink';
            break;
        case 'Black':
            body.style.backgroundColor = 'black';
            break;
        default:
            body.style.backgroundColor = 'white'; 
    }
}

