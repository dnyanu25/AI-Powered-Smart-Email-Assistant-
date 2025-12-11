console.log("email writer ");


function findComposeToolbar(){
  const selectors=['.btc','.aDh','[role="dialog"]','.gU.Up',];

    for (const selector of selectors){
        const toolbar=document.querySelector(selector);

        if(toolbar){
            return toolbar;
        }
        return  null;
    }
}

function createAIButton()
{
    const button =document.createElement('div');
    button.className='T-I J-J5-Ji aoO v7 T-I-atl L3';
    button.style.marginRight='8px';
    button.innerHTML="ReplyByAI"
    button.setAttribute('role','button');
    button.setAttribute('data-tooltip','Generate Ai reply');
    return button;
}
function injectButton(){
   const existingButton =document.querySelector('.ai-reply-button');
   if(existingButton) existingButton.remove();

   const toolbar=findComposeToolbar();
   if(!toolbar)
   {
    console.log("Toolbar not Found");
    return;
   }
   console.log("Toolbar found create ai button");

   const button =createAIButton()
   button.classList.add('ai-reply-button');

   button.addEventListener('click',async() =>{
       
   });


   toolbar.insertBefore(button,toolbar.firstChild);
}
const  observer=new MutationObserver((mutations)=> {

    for(const mutation of mutations){
        const addedNodes = Array.from(mutation.addedNodes)//conatin node added to the dom
        const hasComposeElements =addedNodes.some(node=>
                node.nodeType === node.ELEMENT_NODE &&(node.matches('.aDh,.btC,[role="dialog"')
                ||node.querySelector('.aDh,.btc,[role="dialog"]'))
                
        ); 
    
       if(hasComposeElements){
        console.log("compose Window Detected");
        setTimeout(injectButton,500);
       }

    }
});


observer.observe(document.body,{
    childList:true,
    subtree:true
})
