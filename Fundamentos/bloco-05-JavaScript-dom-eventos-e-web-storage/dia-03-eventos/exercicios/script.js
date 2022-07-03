function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // 1

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
 
function creatCalendar(array){

    const elementDays = document.getElementById('days');
    for(let index = 0; index < decemberDaysList.length; index +=1){
        let day = decemberDaysList[index]
        const elementLi = document.createElement('li');
        elementLi.innerText = day;
        
  
        if (day === 24 || day === 31){
            elementLi.className = 'day holiday';
            elementDays.appendChild(elementLi);
        }
        else if (day === 4 || day === 11 || day === 18){
            elementLi.className = 'day friday';
            elementDays.appendChild(elementLi);
        }
        else if (day === 25){
            elementLi.className = 'day holiday friday';
            elementDays.appendChild(elementLi);
        }
        else{
            elementLi.className = 'day';
        elementDays.appendChild(elementLi);
        }
    }
}
creatCalendar();

//2  

function addButtonHolidays(string){
const locationButtonHtml = document.querySelector('.buttons-container');
const elementButton = document.createElement('button');
elementButton.innerText = 'Feriados';
elementButton.id = 'btn-holiday';
locationButtonHtml.appendChild(elementButton);
}
addButtonHolidays()

//3

function displayHolidays() {
    let holidayButton = document.getElementById('btn-holiday');
    let holidays = document.querySelectorAll('.holiday')
    let color = 'rgb(238,238,238)';
    let setNewColor = 'red';
    
    holidayButton.addEventListener('click', function(){
        for(let index = 0; index < holidays.length; index += 1){
            if(holidays[index].style.backgroundColor === color){
                holidays[index].style.color = color;
            }
            else{
                holidays[index].style.color = setNewColor;
            }
        }
    })
}
displayHolidays()

//4

function addButtonFriday (_string){
const localDoBotao = document.getElementsByTagName('div')[2];
const botao = document.createElement('button');
botao.innerText = 'Sexta-feira'
botao.id = 'btn-friday';
localDoBotao.appendChild(botao);
}
addButtonFriday('Sexta-feira');

//5

function somentHolidays (){
const modifButton = document.getElementById('btn-friday');
const fridays = document.getElementsByClassName('friday');
let backgroundColor = 'rgb(238,238,238)';
let setNewColor = '#008000';
let color = 'white'

modifButton.addEventListener('click', function(){
for(let index = 0; index < fridays.length; index += 1){
    if(fridays[index].style.backgroundColor === backgroundColor){
        fridays[index].style.backgroundColor = backgroundColor;
    }
    else{
        fridays[index].style.backgroundColor = setNewColor;
        fridays[index].style.color = color;
        fridays[index].style.borderRadius = '10px'
    }
}
})
}
somentHolidays();
