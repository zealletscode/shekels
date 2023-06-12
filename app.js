const form = document.querySelector('form');
const taskInput = document.querySelector('#taskinput');
const maleRadioButton = document.getElementById('male');
const femaleRadioButton = document.getElementById('female');
const answer = document.querySelector('.text');


form.addEventListener('submit', runEvent);

function runEvent(e) {
    if (taskInput.value <= 5 &&  maleRadioButton.checked){
      console.log('Boy');
      answer.innerHTML = '<p>Receives: <span class ="text-blue-500">5 SHEKELS OF SILVER! <span></p>'
    } else if (taskInput.value <= 5 && femaleRadioButton.checked){
      console.log('Girl');
      answer.innerHTML = '<p>Receives: <span class ="text-blue-500">3 SHEKELS OF SILVER! <span></p>'

    } else if(taskInput.value > 5 && taskInput.value <= 20 && maleRadioButton.checked){
      console.log('Man');
      answer.innerHTML = '<p>Receives: <span class ="text-blue-500">20 SHEKELS OF SILVER! <span></p>'
    } else if(taskInput.value > 5 && taskInput.value <= 20 && femaleRadioButton.checked){
      console.log('Woman');
      answer.innerHTML = '<p>Receives: <span class ="text-blue-500">10 SHEKELS OF SILVER! <span></p>'

    }else if(taskInput.value > 20 && taskInput.value <= 60 && maleRadioButton.checked){
      console.log('OldMan');
      answer.innerHTML = '<p>Receives: <span class ="text-blue-500">50 SHEKELS OF SILVER! <span></p>'
    } else if(taskInput.value > 20 && taskInput.value <= 60 && femaleRadioButton.checked){
      console.log('OldWoman');
      answer.innerHTML = '<p>Receives: <span class ="text-blue-500">20 SHEKELS OF SILVER! <span></p>'

    }else if(taskInput.value > 60 && maleRadioButton.checked){
      console.log('OldMan');
      answer.innerHTML = '<p>Receives: <span class ="text-blue-500">15 SHEKELS OF SILVER! <span></p>'
    } else if(taskInput.value > 60  && femaleRadioButton.checked){
      console.log('OldWoman');
      answer.innerHTML = '<p>Receives: <span class ="text-blue-500"> 10 SHEKELS OF SILVER! <span></p>'

    }else if(taskInput.value === ''){
      console.log('No');
      answer.innerHTML ='<pre class="text-green-600">Please enter a number!</pre>';
    }else{
      console.log('wrong');
      answer.innerHTML = '<span class="text-red-600">No Gender Selected!</span>'
    }


//clear input
    setTimeout(() => {
      taskInput.value = '';
        refreshPage() 
    }, 5000);
    //clearbtn
    
    e.preventDefault();
}


function refreshPage() {
  location.reload();
}
