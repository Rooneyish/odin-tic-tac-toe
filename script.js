const Gameboard = (function(){
    let gameboard=["","","","","","","","","",]

    const display=()=>{
        const board=document.querySelector('#gameboard');
        board.innerHTML=""
        gameboard.forEach((value,index)=>{
            const square= document.createElement('div');
            square.id=`square-${index}`;
            square.setAttribute('value',index);
            board.appendChild(square)
        }) 
        console.log('hello');
    }
    return {
        display,
    }
})();

Gameboard.display()