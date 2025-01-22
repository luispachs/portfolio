let burgerButton = document.getElementsByClassName("burger-button");
for(let button  of burgerButton){
    let elem = button as HTMLElement;


    let target:HTMLElement = elem.parentElement?.querySelector(".nav") as HTMLElement;
    if(navigator["userAgentData"].mobile){
        button.addEventListener("touchstart",(e)=>{showMenu(e,target)});
    }else{
        button.addEventListener("click",(e)=>{showMenu(e,target)});
    }
}


function showMenu(e:Event,target:HTMLElement){
    target.classList.toggle('show')
}