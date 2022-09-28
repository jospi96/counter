function checkInt(num){
    
    if(!Number.isInteger(num)){
        const nodo= document.createTextNode(num.toFixed(2));
        return nodo;
    }else{
        const nodo= document.createTextNode(num);

        return nodo;
    }
}

    function texRed(paragrafer){

        if(Number(paragrafer.textContent<0)){
            paragrafer.setAttribute("Id","paragrafer-red");
            operator.setAttribute("Id","operator-red");
           }else{
            paragrafer.removeAttribute("Id");
            operator.removeAttribute("Id");
           }
        }
