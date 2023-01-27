let lotto_v1 = (lotto,mykey) =>{
    let match = 0;
    let msg = `아쉽지만, 다음기회에!!`;

    for (let i =0; i<3; ++i) {
        for (let j = 0; i<3; ++i){
            if (lotto[i]===mykey[j]){++match;}
        }
    }
    if (match == 1){msg = `1개 일치`}
    else if(match ==2 ) {msg = `2개 일치`}
    else if(match ==3 ) {msg = `당첨!! 상금100만원!!`}
    else {`${msg}`}
    document.write(msg+`<br>`);
};