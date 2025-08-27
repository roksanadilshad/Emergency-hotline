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
            name: 'emergency-call',
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
        alert('📞 Calling police 999...')
    }
        getTotal('coin-count', totalCoin);
        const data = {
            name: 'police-call',
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
        alert('📞...  Calling Fire-service 999')
    }
        getTotal('coin-count', totalCoin);
        const data = {
            name: 'Fire-service',
            number: '999',
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
