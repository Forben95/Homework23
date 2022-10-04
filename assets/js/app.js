    let secret = Math.random();

    secret = secret * 100;
    secret = Math.floor(secret) + 1;

    let attempt = 10;

    function answer() {

        let variant = +variantInput.value;

        if(attempt == 0) {
            yourVariant.innerHTML = (`Спроби закінчились! Ви програли! Правильне число ${secret}`);
            return;
        }

        if (variant == secret) {
            yourVariant.innerHTML = (`Вітаю! Ви виграли!`);
            return;
        } else if (variant > secret) {
            yourVariant.innerHTML = (`Ваш варіант ${variant} менше мого числа`);
        } else if (variant < secret) {
            yourVariant.innerHTML = (`Ваш варіант ${variant} більше мого числа`);
        }

       attempt--;

       attemptOutput.innerHTML = attempt;

    }