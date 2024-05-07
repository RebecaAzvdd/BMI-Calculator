const calculate = document.getElementById('calculate');

function bmi () {
    const name = document.getElementById('name').value;
    const heigth = document.getElementById('heigth').value;
    const weigth = document.getElementById('weigth').value;
    const results = document.getElementById('results');

    if(name !== '' && heigth !== '' && weigth !== ''){
        
        const valueBMI = (weigth / (heigth * heigth)).toFixed(1);

        let classification = "";

        if(valueBMI < 18.5){
            classification = 'low weigth';
        }else if (valueBMI < 25) {
            classification = 'with ideal weigth';
        }else if (valueBMI < 30) {
            classification = 'slightly above weigth';
        }else if (valueBMI < 35) {
            classification = 'with degree obesity I';
        }else if (valueBMI < 40) {
            classification = 'with degree obesity II';
        }else [
            classification = 'with degree obesity III. find a doctor'
        ]

        results.textContent = `${name} your BMI is ${valueBMI} and you are ${classification}`;
    }else {
        results.textContent = 'fill in all fields';
    }
}

calculate.addEventListener('click', bmi);
