function computegrade (kor,eng,math) {
    let grd = '가';
    tot = kor + eng + math;
    avg = parseInt(tot / 3);
    switch (parseInt(avg/10)){
        case 10 :
        case 9 : grd = '수'; break
        case 8 : grd = '우'; break
        case 7 : grd = '미'; break
        case 6 : grd = '양'; break
    }
    return `총점 : ${tot} 평균 : ${avg} 등급 : ${grd}<br>`;
}

function showAMPM (time) {
    let hour = time[0] + time[1];

    if (hour < 12) {return `am ${time}입니다<br>`}
    return `pm ${time}입니다<br>`
}

function showStarPyramid(floor) {
    let result = '';
    for (let i = 1; i < floor; ++i) {
        for (let j = floor; j > i; --j) {
            result += `*`;
        }
        result += '<br>';
    }
    return result;
}
function computLeapYear(year){
    let result1 = `평년 입니다<br>`;

    if ((year%4 === 0)||(year%100 !== 0&&year%400 === 0 )){return `${year}년은 윤년입니다<br>`}
    return `${year}년은 ${result1}`
}