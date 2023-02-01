let lotto_v1 = (lotto,mykey) =>{
    let match = 0;
    let msg = `아쉽지만, 다음기회에!!`;

    for (let i =0; i<3; ++i) {
        for (let j = 0; j<3; ++j){
            if (lotto[i]===mykey[j]){++match;}
        }
    }
    if (match === 3 ) {msg = `당첨!! 상금100만원!!`}
    else if(match === 2 ) {msg = `2개 일치`}
    else if(match === 1){msg = `1개 일치`}
//두 변수에 배열에 해당 값이 일치하면 출력하는 경우
    //따로 값을 저장하는 변수를 만들고 조건이 만족하여 반복문이 끝난경우
    //값을 저장한 변수를 가지고 다른 조건을 돌리는것이기 때문에
    // 위치가 그렇게 중요하지않음(어디있든 다됨)

    document.write(msg+`<br>`);
};

let computeTax = (marry,sale) => {
    // let mar = ['Y','y',`Yes`,`yes`,'네','결혼했습니다']
    // console.log(mar == marry); --> 타입(자료구조가 다름) 성립이 되지않아 실행이 불가능

    switch (marry === 'Y') {
        case true :
            switch (sale < 6000) {
                case true :
                    document.write(`납부 금액 : ${sale * 0.15}만원 입니다<br>`);
                    break;
                default :
                    document.write(`납부 금액 : ${sale * 0.35}만원 입니다<br>`)
            }break;
    
        default: switch (sale < 3000) {
            case true : document.write(`납부 금액 : ${sale*0.1}만원 입니다<br>`);break
            default : document.write(`납부 금액 : ${sale*0.25}만원 입니다<br>`);break
        }
    }
};

let numcatch = (num1) => {

    let num2 =  0;
    while (true) {
        num2 = parseInt(prompt(`임의의 숫자 3자리는?`));

                if (num2 > num1) {result = `추측한 숫자가 큽니다<br>`;}
                else if(num2 < num1){result = `추측한 숫자가 작습니다<br>`;}
                else {document.write(`빙고! 숫자를 맞췄습니다<br>`);break}
                alert(result)
    }
};

let numcount = () => {
    let result1 = `범위 밖 값`

    if (num<10000) {result1 = `10000미만`}
    else if (num<20000) {result1 = `10000~20000사이`}
    else if (num<30000) {result1 = `20000~30000사이`}

    document.write(result1,`<br>`)
};

let cardcheck = (cardnum) => {
    let result = `잘못된 카드번호입니다`;
    let cdnum = cardnum[1] + cardnum[2] + cardnum[3] + cardnum[4] + cardnum[5];

    if (cardnum[0] === `4`) {
        result = `visa - `;
        if (cdnum === `04825`) {
            result += `비씨카드`
        } else if (cdnum === `38676`) {
            result += `신한카드`
        } else if (cdnum === `57973`) {
            result += `국민은행`
        }
    } else if (cardnum[0] === `5`) {
        result = `마스터카드 - `;
        switch (cdnum) {
            case `15594` :
                result += `신한카드`;
                break;
            case `24353` :
                result += `외환카드`;
                break;
            case `40926` :
                result += `국민은행`;
                break;

        }
    } else if (cardnum[0] === `3` && cardnum[1] === `5`) {
        cdnum = cardnum[2] + cardnum[3] + cardnum[4] + cardnum[5]
        switch (cdnum) {
            case `6317` :
                result = `NH농협카드`;
                break;
            case `6901` :
                result = `신한카드`;
                break;
            case `6912` :
                result = `KB국민카드`;
                break;

        }
    }
    document.write(result,`<br>`)
};
let checkTime = (daytime) => {
    let result = `잘못입력하셨습니다`;

    switch (daytime) {
        case 'morning hours' :
            result = `아침시간 (7-12)`;
            break;
        case 'midday' :
            result = `점심시간 (12-1)`;
            break;
        case 'afternoon hours' :
            result = `오후 (1-6)`;
            break;
        case 'evening hours' :
            result = `저녁시간 (6-9)`;
            break;
        case 'night hous' :
            result = `밤시간 (9-12)`;
            break;
        case 'midnight' :
            result = `자정시간 (12)`;
            break;
        case 'early morning hours' :
            result = `새벽시간 (12-5)`;
            break;
        case 'small hours' :
            result = `새벽 (1-3)`;
            break;
        case 'dawn' :
            result = `해뜰력 (5-7)`;
            break;

    }
    document.write(result, `<br>`)
};

let computeInvestment = (account,interest) =>{
    let sum = account;
    let year = 0;

    while(true) {
        if (sum > account*2) {break;}
        sum += sum*(interest/100);
        ++year;
        console.log(year,sum) //찍어보고 싶으면 작성할 것
    }
    return `${year} / ${parseInt(sum)}`;
};


//  ((년도 - 1)*365 + (년도 - 1)/4 - (년도 - 1)/100 + (년도 - 1)/400 + 1) % 7
//zeller의 공식을 이용하면 특정날짜의 요일을 알 수 있음
let calendar = (year) =>{
    let day = parseInt(((year - 1)*365 + (year - 1)/4 - (year - 1)/100 + (year - 1)/400 + 1) % 7);

    //평년 : 365일  윤년 : 366일 따라서, 전년도 윤년이었다면 day에 한번 더 +1해야 함
    // if(윤년조건) ++day;

    result = `<strong>January${year}</strong><br>`;
    result += `---------------------------------------<br>`;
    result += `Sun&nbsp;&nbsp;&nbsp;Mon&nbsp;&nbsp;&nbsp;
               Tue&nbsp;&nbsp;&nbsp;Wed&nbsp;&nbsp;&nbsp;
               Thu&nbsp;&nbsp;&nbsp;Fri&nbsp;&nbsp;&nbsp;Sat <br>`;
//계산한 요일만큼 공백 출력
    for (let i = 0; i<=day; ++i){
        result += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
    }

    for (let i = 1+day; i <= 31 + day; ++i){
        result += `&nbsp;&nbsp;&nbsp;${i -day}&nbsp;&nbsp;&nbsp;`;
        if (i % 7 === 0) {result += '<br>'}
    }

    document.write(result,`<br>`)
    document.write(`요일숫자 : `, day ,`<br>`)
}
//<pre>를 이용해서 달력틀을 잡고 if랑 for를 가지고 조건을 걸어 만든다