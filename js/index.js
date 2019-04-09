window.addEventListener('load', () => {
    changeMode();
    let isDay = true;
    const changeModeSelector = document.querySelectorAll(".calculator-container__switch img");
    
    let i = 0;
 function change() {
  
  var doc = document.body;
  var colorTop = ["#a1c4fd", "#a18cd1", "#fad0c4", "#fbc2eb"];
  var colorBottom = ["#c2e9fb","#fbc2eb", "#ffd1ff", "#a6c1ee"];
  
  doc.style.backgroundImage= `linear-gradient(to top, ${colorTop[i]} 0%, ${colorBottom[i]} 100%)`;
  i = (i + 1) % colorTop.length;
}
setInterval(change, 1000);



   changeModeSelector[0].addEventListener('click', function() {
       isDay = !isDay;
       changeMode(isDay,this);
   });

   function changeMode(isDay) {
    const calculatorHead = document.querySelectorAll('.calculator-container__head');
    const changeModeSelector = document.querySelectorAll(".calculator-container__switch img");
    const changeBottomSelector = document.querySelectorAll(".calculator-container__bottom");
    const changeBottomButtonSelector = document.querySelectorAll(".calculator-container__bottom .button");
    const typedNumbers = document.querySelector(".calculator-container__Result");
    const res = document.querySelector('.calculator-container__mid');
    const symbolsArray = ['+/-', '%','/','*','-','+','='];
    let resArray=[];
    let sym = '';
    let leftOperand = [];
    let RightOperand = [];
    changeBottomButtonSelector.forEach((item,index) => {
        item.addEventListener('click', function() {
          let result;
            console.log(this.getAttribute("value"));
            switch(this.getAttribute("value")) {
                case '+': 
                case '-':               
                case '*': 
                case '/': 
                case '%': {
                    sym = this.getAttribute("value");
                    leftOperand = resArray.splice(0,resArray.length);                 
                }
                break;
                case '^': {
                    resArray=[];
                    leftOperand=[];
                    typedNumbers.innerHTML=''; 
                    res.innerHTML = '';
                    return;     
                }
                break;
                case '=': {
                    if (resArray.length==0) return;
                    //console.log(leftOperand);
                    //console.log('parseFloat(leftOperand.join())', parseFloat(leftOperand.join()));
                    result = eval(parseFloat(leftOperand.join(''))+ sym + parseFloat(resArray.join('')));
                    res.append(result);
                }
                break;
                default: {
                    resArray.push(this.getAttribute("value"));
                    //console.log('resArray',resArray);
                }
            }
            typedNumbers.append(this.getAttribute("value"));
            
        })
    });

    ////this code is repetative !!  needs optimization


    const calHeadStyleElement = calculatorHead[0].style;
    calHeadStyleElement.backgroundSize = "cover";
    calHeadStyleElement.height = "250px";
    calHeadStyleElement.width = "500px";
    if(isDay) {
        calHeadStyleElement.backgroundImage = "url(/bg.19f8c1d4.png)";
        changeModeSelector[0].src = '/night_mode.b1fdd766.png';
        changeBottomSelector[0].style.backgroundColor = "white";
        
        changeBottomButtonSelector.forEach((item,index) => {
            changeBottomButtonSelector[index].style.color = "black";
            changeBottomButtonSelector[index].style.backgroundImage = "background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);"
        })
        
    } else {
        calHeadStyleElement.backgroundImage = "url(/Bitmap.f6dbe94f.png)";
        
        changeModeSelector[0].src = '/day_mode.e505210c.png';
        changeBottomSelector[0].style.backgroundColor = "black";
        changeBottomButtonSelector.forEach((item,index )=> {
            changeBottomButtonSelector[index].style.color = "gray";
            changeBottomButtonSelector[index].style.backgroundImage = "background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);"
        })
       
    }
    
   }
});
