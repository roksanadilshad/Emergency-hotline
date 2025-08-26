function getNumber(id){
     const heartCountNumber = parseInt(document.getElementById(id).innerText);
     return heartCountNumber;
}
function getTotal(id, value){
    const total = document.getElementById(id).innerText = value;
    return total;
}
// document.getElementById('heart-btn').addEventListener('click', function(){
//     const heartCount = gethearts('heart-count');

//     const totalHeart = heartCount + 1;
//    getTotal('heart-count', totalHeart)

   
// })
 const heartBtns = document.getElementsByClassName('heart-btn');

  for (let btn of heartBtns) {
    btn.addEventListener('click', function() {
         const heartCount = getNumber('heart-count');

          const totalHeart = heartCount + 1;
          getTotal('heart-count', totalHeart)
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
})
// ambulance call porjonto hoise