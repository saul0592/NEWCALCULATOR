const buttons = document.querySelectorAll('#Operation input');

buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        const numero_1 = parseFloat(document.getElementById('number1').value);
        const numero_2 = parseFloat(document.getElementById('number2').value);
        const userName = document.getElementById('name').value;
        const operation = event.target.id;
        const Answer = document.getElementById('Answer');

        let resultado_final;
        switch(operation) {
            case 'Addition':
                resultado_final = numero_1 + numero_2;
                break;
            case 'Rest':
                resultado_final = numero_1 - numero_2;
                break;
            case 'Multiplication':
                resultado_final = numero_1 * numero_2;
                break;
            case 'Division':
                if (numero_2 !== 0) {
                    resultado_final = numero_1 / numero_2;
                } else {
                    resultado_final = "There is no division by 0";
                }
                break;
        }

        Answer.textContent = "HI " + userName + " your answer is " + resultado_final;
    });
});
