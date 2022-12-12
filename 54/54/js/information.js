const pageNum = 18;
const pageName = "54";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "우리WON뱅킹의 서비스 이용을 위한 간편 가입을 진행해 보겠습니다. 먼저, 우리WON뱅킹 앱을 눌러 실행해 주세요.";
const page2 = "시작하기를 눌러 주세요.";
const page3 = "전체 동의를 눌러 주세요.";
const page4 = "이름을 입력한 후 엔터를 눌러 주세요. 이번 실습에서는 한국인을 입력해 줍니다.";
const page5 = "생년월일 여섯 자리를 입력해 주세요.";
const page6 = "주민번호 뒷자리 한 자리를 입력해 주세요.";
const page7 = "통신사 버튼을 눌러 줍니다.";
const page8 = "KT를 선택해 줍니다.";
const page9 = "인증 요청을 눌러 주세요.";
const page10 = "인증하기를 눌러 주세요.";
const page11 = "우리WON 간편회원을 눌러 주세요.";
const page12 = "맞춤 준비 시작하기를 눌러 주세요.";
const page13 = "전체 동의를 눌러 주세요.";
const page14 = "다시 한번 전체 동의를 눌러 주세요.";
const page15 = "다음을 눌러 주세요.";
const page16 = "정보를 확인한 후 다음을 눌러 주세요.";
const page17 = "확인을 누르면 가입이 완료됩니다. 모두 고생하셨습니다.";

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
    page17
);


const inputPage = [
    { page: 3, correctAnswer: "한국인" },
    { page: 4, correctAnswer: "생년월일 여섯 자리" },
    { page: 5, correctAnswer: "주민번호 뒷자리 한 자리" },
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
    startRateX: 0.26666666666666666, startRateY: 0.03146374829001368, endRateX: 0.5, endRateY: 0.17647058823529413
};

const coordinate2 = {
    startRateX: 0.011111111111111112, startRateY: 0.8700410396716827, endRateX: 0.9972222222222222, endRateY: 0.9534883720930233
};

const coordinate3 = {
    startRateX: 0, startRateY: 0.2024623803009576, endRateX: 0.9972222222222222, endRateY: 0.265389876880985
};

const coordinate4 = {
    startRateX: 0.002777777777777778, startRateY: 0.32421340629274964, endRateX: 0.9972222222222222, endRateY: 0.39808481532147744
};

const coordinate5 = {
    startRateX: 0.030555555555555555, startRateY: 0.45964432284541723, endRateX: 0.4888888888888889, endRateY: 0.5047879616963065
};

const coordinate6 = {
    startRateX: 0.5194444444444445, startRateY: 0.4582763337893297, endRateX: 0.5833333333333334, endRateY: 0.5047879616963065
};

const coordinate7 = {
    startRateX: 0.03333333333333333, startRateY: 0.5718194254445964, endRateX: 0.9777777777777777, endRateY: 0.640218878248974
};

const coordinate8 = {
    startRateX: 0.005555555555555556, startRateY: 0.7674418604651163, endRateX: 0.9972222222222222, endRateY: 0.8290013679890561
};
const coordinate9 = {
    startRateX: 0.7361111111111112, startRateY: 0.667578659370725, endRateX: 0.9916666666666667, endRateY: 0.7564979480164159
};
const coordinate10 = {
    startRateX: 0.005555555555555556, startRateY: 0.9370725034199726, endRateX: 0.9944444444444445, endRateY: 1
};

const coordinate11 = {
    startRateX: 0.075, startRateY: 0.4829001367989056, endRateX: 0.9305555555555556, endRateY: 0.6771545827633378
};

const coordinate12 = {
    startRateX: 0.002777777777777778, startRateY: 0.9398084815321477, endRateX: 0.9972222222222222, endRateY: 1
};

const coordinate13 = {
    startRateX: 0.013888888888888888, startRateY: 0.2106703146374829, endRateX: 0.9972222222222222, endRateY: 0.27906976744186046
};

const coordinate14 = {
    startRateX: 0.013888888888888888, startRateY: 0.9179206566347469, endRateX: 0.9888888888888889, endRateY: 1
};

const coordinate15 = {
    startRateX: 0.2833333333333333, startRateY: 0.9151846785225718, endRateX: 0.9972222222222222, endRateY: 0.9986320109439124
};

const coordinate16 = {
    startRateX: 0.002777777777777778, startRateY: 0.9069767441860465, endRateX: 0.9972222222222222, endRateY: 0.9958960328317373
};

const coordinate17 = {
    startRateX: 0.011111111111111112, startRateY: 0.9138166894664843, endRateX: 0.9944444444444445, endRateY: 0.9986320109439124
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
    coordinate17
);
