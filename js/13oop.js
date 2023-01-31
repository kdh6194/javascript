class User3 {
    _userid = '';
    #passwd = '';//private 속성으로 선언
    _name = '';
    _email = '';
     constructor(userid, passwd,name,email) {
         this._userid = userid;
        this.#passwd = passwd;
        this._name = name;
        this._email = email;
     }
}
class SungJuk1 {//값만 다루는 클래스 : VO,DTO
    #name = '';
    #kor = '';
    #eng = '';
    #math = '';
    #tot = 0;
    #avg = 0;
    #grade = '';

    constructor(name, kor, eng, math) {
        this.#name = name;
        this.#kor = kor;
        this.#eng = eng;
        this.#math = math;
        this.#tot = 0;
        this.#avg = 0;
        this.#grade = '';
    }
    set name(name) {this.#name = name;}
    get name() {return this.#name;}
    set kor(kor) {this.#kor = kor;}
    get kor() {return this.#kor;}
    set eng(eng) {this.#eng = eng;}
    get eng() {return this.#eng;}
    set math(math) {this.#math = math;}
    get math() {return this.#math;}
    set tot(tot) {this.#tot = tot;}
    get tot() {return this.#tot;}
    set avg(avg) {this.#avg = avg;}
    get avg() {return this.#avg;}
    set grade(grade) {this.#grade = grade;}
    get grade() {return this.#grade;}
    toString() { // 원래는 값만 다루는 클래스에서 출력을 담당도 한다
        return `이름 : ${this.#name} 국어 : ${this.#kor}, 영어 : ${this.#eng}, 수학 : ${this.#math}
                총점 : ${this.#tot}, 평균 : ${this.#avg}, 학점 : ${this.#grade}<br>`;
    }//toString은 객체가 가지고있는 정보나 값들을 문자열로 만들어 리턴하는 메소드
}
class SungJukService1 {//기능만 하는 클래스 : Service,DAO,Util
    static computeSungJuk = function (sj) { //객체생성 없이 바로 메서드 호출 가능
        sj.tot = sj.kor + sj.eng + sj.math
        sj.avg = parseInt(sj.tot / 3)

        switch (parseInt(sj.avg / 10)) {
            case 10 :
            case 9 :
                sj.grade = '수';
                break;
            case 8 :
                sj.grade = '우';
                break;
            case 7 :
                sj.grade = '미';
                break;
            case 6 :
                sj.grade = '양';
                break;
            default :
                sj.grade = '가';
                break;
        }
    }
}