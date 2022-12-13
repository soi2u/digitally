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
const page12 = "키패드에서 비밀번호 두 번째 자리를 눌러 주세요.";
const page13 = "키패드에서 비밀번호 세 번째 자리를 눌러 주세요.";
const page14 = "키패드에서 비밀번호 네 번째 자리를 눌러 주세요.";
const page15 = "입력 완료를 눌러 주세요.";
const page16 = "다시 한번 확인을 눌러 주세요.";
const page17 = "이체하기를 눌러 주세요.";
const page19 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";
const page20 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";
const page21 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";
const page22 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";
const page23 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";
const page24 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";
const page25 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";
const page26 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";
const page27 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";
const page28 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";
const page29 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";
const page30 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";
const page31 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";
const page31 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";
const page32 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";
const page33 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";
const page34 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";
const page35 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";
const page36 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";
const page37 = "확인을 누르면 이체가 완료됩니다. 모두 고생하셨습니다.";


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
