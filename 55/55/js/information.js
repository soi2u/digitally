const pageNum = 19;
const pageName = "55";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "우리WON뱅킹으로 계좌 이체 하는 법을 실습해 보겠습니다. 먼저, 우리WON뱅킹 앱을 눌러 실행해 주세요.";
const page2 = "이체 버튼을 눌러 주세요.";
const page3 = "다시 한번, 이체를 눌러 주세요.";
const page4 = "우리 은행으로 설정 되어 있는 은행 선택 버튼을 누르면 은행을 변경할 수 있습니다. 우리 은행을 눌러 주세요.";
const page5 = "다시 우리 은행을 선택해 주세요.";
const page6 = "입금할 계좌 번호 버튼을 눌러 주세요.";
const page7 = "입금할 계좌 번호 열세 자리를 입력해 주세요.";
const page8 = "보낼 금액 버튼을 눌러 주세요.";
const page9 = "보낼 금액을 입력해 주세요. 이번에는 15300을 입력해 보겠습니다.";
const page10 = "확인을 눌러 주세요.";
const page11 = "키패드에서 비밀번호 첫 번째 자리를 눌러 주세요.";
const page12 = "키패드에서 비밀번호 두 번째 자리를 눌러 주세요.";
const page13 = "키패드에서 비밀번호 세 번째 자리를 눌러 주세요.";
const page14 = "키패드에서 비밀번호 네 번째 자리를 눌러 주세요.";
const page15 = "입력 완료를 눌러 주세요.";
const page16 = "다시 한번 확인을 눌러 주세요.";
const page17 = "이체하기를 눌러 주세요.";
const page18 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";


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
    startRateX: 0.005555555555555556, startRateY: 0.9370725034199726, endRateX: 0.9944444444444445, endRateY: 1
};
const coordinate12 = {
    startRateX: 0.005555555555555556, startRateY: 0.9370725034199726, endRateX: 0.9944444444444445, endRateY: 1
};
const coordinate13 = {
    startRateX: 0.005555555555555556, startRateY: 0.9370725034199726, endRateX: 0.9944444444444445, endRateY: 1
};
const coordinate14 = {
    startRateX: 0.005555555555555556, startRateY: 0.9370725034199726, endRateX: 0.9944444444444445, endRateY: 1
};

const coordinate15 = {
    startRateX: 0.005555555555555556, startRateY: 0.9370725034199726, endRateX: 0.9944444444444445, endRateY: 1
};

const coordinate16 = {
    startRateX: 0.005555555555555556, startRateY: 0.9370725034199726, endRateX: 0.9944444444444445, endRateY: 1
};

const coordinate17 = {
    startRateX: 0.005555555555555556, startRateY: 0.9370725034199726, endRateX: 0.9944444444444445, endRateY: 1
};

const coordinate18 = {
    startRateX: 0.005555555555555556, startRateY: 0.9370725034199726, endRateX: 0.9944444444444445, endRateY: 1
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
