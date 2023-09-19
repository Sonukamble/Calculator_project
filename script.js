
document.addEventListener("DOMContentLoaded", function () {
    let screen = document.querySelector('input');
    let buttons = document.querySelectorAll('.btn');
    let equal_btn = document.querySelector(".equal-btn");
    let cancel_btn = document.querySelector('.cancel-btn');

    buttons.forEach(function(item){
        item.addEventListener('click', function(e){
            let value = e.target.textContent; // Use textContent to get the text of the button
            screen.value += value; // Append the value to the input field instead of replacing it
        });
    });

    equal_btn.addEventListener('click', function () {
        try {
            let expression = screen.value;
            let result = eval(expression);
            if (isNaN(result) || !isFinite(result)) {
                throw new Error('Invalid input');
            }

            screen.value = result;
        } catch (error) {
            screen.value = 'Error';
        }
    });

    cancel_btn.addEventListener('click', function () {
        screen.value = ''; // Clear the input field
    });
});
