function firstArray(){
    let num = [];
        for(i=0;i<20;i++){
            num[i] = Math.floor(Math.random()*100);
        }

    document.querySelector('#sortArrays').textContent = num.join(' ');        
   
    let negativeNum = [];
       for(i=0;i<20;i++){
           negativeNum[i] = (num[i] * -1); 
       }
    document.querySelector('#negativeArrays').textContent = negativeNum.join(' ');
    
    let sucessor = [];
    for(i=0;i<20;i++){
        sucessor[i] = (num[i] + 1); 
    }
    document.querySelector('#oneMore').textContent = sucessor.join(' ');

    let par = [];
    let cont = 0 ;
    for(i=0;i<20;i++){
        if(num[i]%2 == 0){
           par[i] = num[i]; 
           cont++
        }
    }
    document.querySelector('#onlyPars').textContent = `${par.join(' ')} Total: ${cont}`;
    
    let sum= 0;
    for(i=0;i<20;i++){
        sum = sum +  num[i];
    }
    console.log(sum);
    document.querySelector('#sumArray').textContent = sum;
}

