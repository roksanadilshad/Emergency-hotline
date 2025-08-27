const callHistory = [];
function getNumber(id){
     const heartCountNumber = parseInt(document.getElementById(id).innerText);
     return heartCountNumber;
}
function getTotal(id, value){
    const total = document.getElementById(id).innerText = value;
    return total;
}
function getText(index){
     const texts = document.getElementsByClassName('copy-text');
     return texts[index].innerText;
}
// document.getElementById('heart-btn').addEventListener('click', function(){
//     const heartCount = gethearts('heart-count');

//     const totalHeart = heartCount + 1;
//    getTotal('heart-count', totalHeart)

   
// })
 const heartBtns = document.getElementsByClassName('heart-btn');//heart 

  for (let btn of heartBtns) {
    btn.addEventListener('click', function() {
         const heartCount = getNumber('heart-count');

          const totalHeart = heartCount + 1;
          getTotal('heart-count', totalHeart);


    });
  }
  
  document.getElementById('emergency-call').addEventListener('click', function(){
    const coinCount = getNumber('coin-count');

    const totalCoin = coinCount - 20;
    

    if(coinCount <= 0 || coinCount < 20){
        alert("You don't have sufficient 'Coin'");
        return;
    }
    else{
        alert('📞 Calling National Emergency 999...')
    }
    
        getTotal('coin-count', totalCoin);

        const data = {
            name: 'National Emergency',
            number: '999',
            date: new Date().toLocaleTimeString()

        }
        callHistory.push(data);

   
})
  document.getElementById('police-call').addEventListener('click', function(){
    const coinCount = getNumber('coin-count');
    const totalCoin = coinCount - 20;
    if(coinCount <= 0 || coinCount < 20){
        alert("You don't have sufficient 'Coin'");
        return;
    }
    else{
        alert('📞 Calling Police Helpline 999...')
    }
        getTotal('coin-count', totalCoin);
        const data = {
            name: 'police Helpline',
            number: '999',
            date: new Date().toLocaleTimeString()

        }
        callHistory.push(data);
})
  document.getElementById('Fire-service').addEventListener('click', function(){
    const coinCount = getNumber('coin-count');
    const totalCoin = coinCount - 20;
    if(coinCount <= 0 || coinCount < 20){
        alert("You don't have sufficient 'Coin'");
        return;
    }
    else{
        alert('📞...  Calling Fire Service 999')
    }
        getTotal('coin-count', totalCoin);
        const data = {
            name: 'Fire Service',
            number: '999',
            date: new Date().toLocaleTimeString()

        }
        callHistory.push(data);
        
})
  document.getElementById('ambulance-service').addEventListener('click', function(){
    const coinCount = getNumber('coin-count');
    const totalCoin = coinCount - 20;
    if(coinCount <= 0 || coinCount < 20){
        alert("You don't have sufficient 'Coin'");
        return;
    }
    else{
        alert('📞...  Calling Ambulance Service 1994-999999')
    }
        getTotal('coin-count', totalCoin);
        const data = {
            name: 'Ambulance Service',
            number: '1994-999999',
            date: new Date().toLocaleTimeString()

        }
        callHistory.push(data);
        
})
  document.getElementById('women-and-child-helpline').addEventListener('click', function(){
    const coinCount = getNumber('coin-count');
    const totalCoin = coinCount - 20;
    if(coinCount <= 0 || coinCount < 20){
        alert("You don't have sufficient 'Coin'");
        return;
    }
    else{
        alert('📞...  Calling Women and Child Helpline 109')
    }
        getTotal('coin-count', totalCoin);
        const data = {
            name: 'Women and Child Helpline',
            number: '109',
            date: new Date().toLocaleTimeString()

        }
        callHistory.push(data);
        
})
  document.getElementById('anticoraption-helpline').addEventListener('click', function(){
    const coinCount = getNumber('coin-count');
    const totalCoin = coinCount - 20;
    if(coinCount <= 0 || coinCount < 20){
        alert("You don't have sufficient 'Coin'");
        return;
    }
    else{
        alert('📞...  Calling Anticoraption Helpline 106')
    }
        getTotal('coin-count', totalCoin);
        const data = {
            name: 'Anticoraption Helpline',
            number: '106',
            date: new Date().toLocaleTimeString()

        }
        callHistory.push(data);
        
})
  document.getElementById('electricity-helpline').addEventListener('click', function(){
    const coinCount = getNumber('coin-count');
    const totalCoin = coinCount - 20;
    if(coinCount <= 0 || coinCount < 20){
        alert("You don't have sufficient 'Coin'");
        return;
    }
    else{
        alert('📞...  Calling Electricity Helpline 16216')
    }
        getTotal('coin-count', totalCoin);
        const data = {
            name: 'Electricity Helpline',
            number: '16216',
            date: new Date().toLocaleTimeString()

        }
        callHistory.push(data);
        
})
  document.getElementById('brack-helpline').addEventListener('click', function(){
    const coinCount = getNumber('coin-count');
    const totalCoin = coinCount - 20;
    if(coinCount <= 0 || coinCount < 20){
        alert("You don't have sufficient 'Coin'");
        return;
    }
    else{
        alert('📞...  Calling Brack Helpline 16445')
    }
        getTotal('coin-count', totalCoin);
        const data = {
            name: 'Brack Helpline',
            number: '16445',
            date: new Date().toLocaleTimeString()

        }
        callHistory.push(data);
        
})
  document.getElementById('bd-railway-helpline').addEventListener('click', function(){
    const coinCount = getNumber('coin-count');
    const totalCoin = coinCount - 20;
    if(coinCount <= 0 || coinCount < 20){
        alert("You don't have sufficient 'Coin'");
        return;
    }
    else{
        alert('📞...  Calling Bangladesh Railway Helpline 163')
    }
        getTotal('coin-count', totalCoin);
        const data = {
            name: 'Bangladesh Railway Helpline',
            number: '163',
            date: new Date().toLocaleTimeString()

        }
        callHistory.push(data);
        
})


//coppy btn

const btns = document.querySelectorAll('.copy-btn');

for(const btn of btns){
    btn.addEventListener('click', async function () {
        const index = btn.getAttribute('data-copy-target');
        const text = getText(index);

        await navigator.clipboard.writeText(text);
        alert('Copied: ' + text)
        
    })
}
 const copyBtns = document.getElementsByClassName('copy-btn');//heart 

  for (let btn of copyBtns) {
    btn.addEventListener('click', function() {
         const  copyCount = getNumber('copy-count');

          const totalHeart =  copyCount + 1;
          getTotal('copy-count', totalHeart);


    });
  }

//history

const callBtns = document.getElementsByClassName('history-btn');
//const historyContainer = document.getElementById('')
for(const btn of callBtns){
    btn.addEventListener('click', function () {
      const historyContainer = document.getElementById('history-container');
     
      historyContainer.innerHTML = '';

    for(const data of callHistory){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex justify-between items-center bg-[#FAFAFA] mb-[8px] mt-[16px] p-4 rounded-[8px]">
                <div>
                    <h3>${data.name}</h3>
                    <p>${data.number}</p>
                </div>
                <p>${data.date}</p>
             </div>
        `;

        historyContainer.appendChild(div);
    }
    
})
}
document.getElementById('clear-history-btn').addEventListener('click', function(){
 const clearHistory = document.getElementById('history-container');
clearHistory.innerHTML = '';
 
})

// document.getElementById('copy-btn').addEventListener('click',  async function(){
//     const text = getText('copy-text');

//     await navigator.clipboard.writeText(text);

//          alert('Copied:' + text);
// });

// document.getElementById('copy-btn-2').addEventListener('click',  async function(){
//     const text = getText('copy-text-2');

//     await navigator.clipboard.writeText(text);

//          alert('Copied:' + text);
// });
// document.getElementById('copy-btn-3').addEventListener('click',  async function(){
//     const text = getText('copy-text-3');

//     await navigator.clipboard.writeText(text);

//          alert('Copied:' + text);
// });
