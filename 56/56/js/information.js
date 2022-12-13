const pageNum = 38;
const pageName = "56";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "우리WON뱅킹으로 계좌 만드는 법을 실습해 보겠습니다. 먼저, 우리WON뱅킹 앱을 눌러 실행해 주세요.";
const page2 = "우측 하단의 전체 버튼을 눌러 주세요.";
const page3 = "상품 가입을 눌러 주세요.";
const page4 = "입출금 상품 가입을 눌러 주세요.";
const page5 = "WON 통장 + 개인형 IRP 통장의 자세히 보기 버튼을 눌러 주세요.";
const page6 = "가입하기를 눌러 주세요.";
const page7 = "다음 버튼을 눌러 주세요.";
const page8 = "통신사 선택을 눌러 주세요.";
const page9 = "SKT를 눌러 주세요.";
const page10 = "전체 동의를 눌러 주세요.";
const page11 = "인증번호 요청 버튼을 눌러 주세요.";
const page12 = "인증번호 123456을 입력해 주세요.";
const page13 = "인증하기 버튼을 눌러 주세요.";
const page14 = "확인을 눌러 인증을 완료해 주세요.";
const page15 = "주민등록증이나 운전면허증 또는 모바일 운전면허증을 가지고 계신가요? 라는 질문에 예를 눌러 주세요.";
const page16 = "최근 한달이내에 입출금 통장을 만드셨나요? 라는 질문에 아니오를 눌러 주세요.";
const page17 = "다음을 눌러 주세요.";
const page18 = "확인을 눌러 계좌 개설을 진행해 주세요.";
const page19 = "신분증 촬영을 눌러 주세요.";
const page20 = "신분증 촬영을 진행해 주세요. 이번 실습에서는 운전면허증 부분을 선택해 넘어가도록 하겠습니다.";
const page21 = "신분증 확인하기 버튼을 눌러 주세요.";
const page22 = "은행/증권사 선택을 눌러 주세요.";
const page23 = "국민은행을 눌러 주세요.";
const page24 = "계좌번호 열세 자리를 입력해 주세요.";
const page25 = "계좌 비밀번호 네 자리를 입력해 주세요.";
const page26 = "계좌 인증을 눌러 넘어가 주세요.";
const page27 = "전체 동의를 눌러 주세요.";
const page28 = "선택 항목인, 개인 정보 수집 및 이용 동의서 옆의 체크 버튼을 눌러 동의해 주세요.";
const page29 = "동의하고 계속 진행합니다를 눌러 주세요.";
const page30 = "다음을 눌러 주세요.";
const page31 = "다시 한번, 다음을 눌러 주세요.";
const page32 = "마지막으로, 다음을 눌러 주세요.";
const page33 = "비밀번호 숫자 네 자리를 눌러 주세요.";
const page34 = "다시 한번, 비밀번호 숫자 네 자리를 눌러 주세요.";
const page35 = "다음을 눌러 넘어가 주세요.";
const page36 = "다시 한번, 다음을 눌러 주세요.";
const page37 = "확인을 눌러 가입을 완료해 주세요. 모두 고생하셨습니다.";


pageDescArray.push(
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    page9,
    page10,
    page11,
    page12,
    page13,
    page14,
    page15,
    page16,
    page17,
    page18,
);


const inputPage = [
    { page: 6, correctAnswer: "입금할 계좌 번호 열세 자리" },
    { page: 8, correctAnswer: "15300" },
];

function handleInput(pageNumber) {
    for (i = 0; i < inputPage.length; i++) {
        if (pageNumber === inputPage[i].page) {
            DrawInputBox(coordinateArray[pageNumber]);
            let answer = inputPage[i].correctAnswer;
            document.querySelector(".input-answer").addEventListener("keydown", function (event) {
                if (event.keyCode === 13) {
                    typeofAnswer = Number(this.value);
                    if (pageNumber === 5) {
                        if (4 <= this.value.length && this.value.length <= 13 && isNaN(typeofAnswer) === false) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 9) {
                        if (4 <= this.value.length && this.value.length <= 4 && isNaN(typeofAnswer) === false) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 10) {
                        if (5 <= this.value.length && this.value.length <= 13 && isNaN(typeofAnswer) === false) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    }
                }
            });
        }
    }
}

const coordinate1 = {
    startRateX: 0.24722222222222223, startRateY: 0.0027359781121751026, endRateX: 0.5166666666666667, endRateY: 0.17647058823529413
};

const coordinate2 = {
    startRateX: 0.32222222222222224, startRateY: 0.20383036935704515, endRateX: 0.6777777777777778, endRateY: 0.2708618331053352
};

const coordinate3 = {
    startRateX: 0.04722222222222222, startRateY: 0.4172366621067031, endRateX: 0.5027777777777778, endRateY: 0.5006839945280438
};

const coordinate4 = {
    startRateX: 0.05277777777777778, startRateY: 0.31600547195622436, endRateX: 0.425, endRateY: 0.4062927496580027
};

const coordinate5 = {
    startRateX: 0.005555555555555556, startRateY: 0.6183310533515732, endRateX: 0.4305555555555556, endRateY: 0.6949384404924761
};

const coordinate6 = {
    startRateX: 0.4, startRateY: 0.3146374829001368, endRateX: 0.9444444444444444, endRateY: 0.4076607387140903
};

const coordinate7 = {
    startRateX: 0.041666666666666664, startRateY: 0.615595075239398, endRateX: 0.9722222222222222, endRateY: 0.6894664842681258
};

const coordinate8 = {
    startRateX: 0.041666666666666664, startRateY: 0.4117647058823529, endRateX: 0.9472222222222222, endRateY: 0.5157318741450069
};
const coordinate9 = {
    startRateX: 0.041666666666666664, startRateY: 0.4117647058823529, endRateX: 0.9472222222222222, endRateY: 0.5157318741450069
};
const coordinate10 = {
    startRateX: 0.9888888888888889, startRateY: 0.987688098495212, endRateX: 0.002777777777777778, endRateY: 0.9179206566347469
};
const coordinate11 = {
    startRateX: 0, startRateY: 0.7277701778385773, endRateX: 0.9972222222222222, endRateY: 0.9343365253077975
};
const coordinate12 = {
    startRateX: 0, startRateY: 0.7277701778385773, endRateX: 0.9972222222222222, endRateY: 0.9343365253077975
};
const coordinate13 = {
    startRateX: 0, startRateY: 0.7277701778385773, endRateX: 0.9972222222222222, endRateY: 0.9343365253077975
};
const coordinate14 = {
    startRateX: 0, startRateY: 0.7277701778385773, endRateX: 0.9972222222222222, endRateY: 0.9343365253077975
};

const coordinate15 = {
    startRateX: 0.5, startRateY: 0.9370725034199726, endRateX: 0.9944444444444445, endRateY: 0.9972640218878249
};

const coordinate16 = {
    startRateX: 0.002777777777777778, startRateY: 0.9138166894664843, endRateX: 0.9944444444444445, endRateY: 0.9917920656634747
};

const coordinate17 = {
    startRateX: 0.49444444444444446, startRateY: 0.9151846785225718, endRateX: 0.9972222222222222, endRateY: 0.9917920656634747
};

const coordinate18 = {
    startRateX: 0.002777777777777778, startRateY: 0.908344733242134, endRateX: 0.9972222222222222, endRateY: 0.9931600547195623
};



coordinateArray.push(
    coordinate1,
    coordinate2,
    coordinate3,
    coordinate4,
    coordinate5,
    coordinate6,
    coordinate7,
    coordinate8,
    coordinate9,
    coordinate10,
    coordinate11,
    coordinate12,
    coordinate13,
    coordinate14,
    coordinate15,
    coordinate16,
    coordinate17,
    coordinate18
);
