let cl = console.log; //=> first class function


(function(){
    const cards = Array.from(document.querySelectorAll(".timeline-section li"));
    
    function isCardInViewport(card){
        let rect = card.getBoundingClientRect();
        return((rect.top >= 0) && 
               (rect.left >= 0) && 
               (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) &&
               (rect.right <= (window.innerWidth || document.documentElement.clientWidth)));
    }

    function slideIn(){
        cards.forEach(card =>{
            if(isCardInViewport(card)){
                card.classList.add("slide-in");
            }else{
                card.classList.remove("slide-in");
            }
        })
    }

    window.addEventListener("load", slideIn);
    window.addEventListener("scroll", slideIn);
    window.addEventListener("resize", slideIn);
})();

