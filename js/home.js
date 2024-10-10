// add money to the account

// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        // prevent page reload after form submit
        event.preventDefault();
        console.log('money add button clicked');
    });

    // step-2: get money to be added to the account
    const addMoneyInput = 