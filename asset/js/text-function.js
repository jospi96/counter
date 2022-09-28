function checkInt(num){
    if(!Number.isInteger(num)){
        return num.toFixed(2);
    }else{
        return num;
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
