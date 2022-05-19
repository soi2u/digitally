const pageNum = 19;
const pageName = "11";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`./image/${j}.jpg`);
    audio = new Audio(`./audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 은행 ATM기를, 실습해보도록 하겠습니다. ATM기는, 은행에서 주로 사용하는 기계를 말하는데요, 현금을 인출할 수도 있고, 계좌이체를 하거나, 각종 세금 납부를 할 수 있습니다.실제 키오스크를 사용할때와, 차이가 있을수 있다는점, 참고해주세요. 그럼, KT 키오스크 교육용 앱을 눌러서, 실행해주세요.";
const page2 = "키오스크 앱의, 대기화면입니다. 다음 화면으로, 넘어가주세요.";
const page3 = "키오스크 체험 교육, 처음 화면입니다. 손가락 표시를 눌러주세요.";
const page4 = "ATM을 눌러주세요.";
const page5 = "빨간색 점선 표시가 되어 있는 항목들을 연습해 볼 수 있습니다. 먼저, 예금 인출을 연습해 보겠습니다. 예금 인출은, 내 통장에 있는 현금을 찾을 수 있는 기능입니다. 예금 인출을 눌러 주세요.";
const page6 = "카드출금을 눌러주세요.";
const page7 = "실제 은행에서, 다음과 같은, 화면이 보이면, 카드를 기계에 넣고, 확인을 눌러주시면 됩니다. 확인을 눌러주세요.";
const page8 = "카드의 비밀번호를, 누르는 화면입니다. 이번 시간에는, 임의로 정해진, 숫자를 따라서, 눌러볼까요? 먼저, 숫자 2를 누르겠습니다.";
const page9 = "숫자 5를 눌러보겠습니다.";
const page10 = "숫자 8을 눌러보겠습니다.";
const page11 = "숫자 0을 눌러보겠습니다.";
const page12 = "비밀번호 입력이 완료되었다면, 확인을 눌러보겠습니다.";
const page13 = "이제, 현금을 인출해보겠습니다. 금액을 선택하면, 그 금액만큼, 현금을 인출할 수 있습니다. 10만원을 눌러주세요.";
const page14 = "출금 내용을 확인한 후에, 확인을 눌러주세요.";
const page15 = "휴대폰으로 실습하실땐, 완료가 될때까지 기다려주세요.화면을 눌러서, 다음 화면으로 넘어가주세요.";
const page16 = "ATM기로 거래를 하면, 명세표라는 일종의 영수증을 받게 됩니다. 명세표에는, 개인정보가 있기 때문에, 발급 받으실 경우에는, 확인 후에 파쇄기에 넣어주시거나, 잘 버려주셔야 합니다. 이번 시간에는, 아니오를 누르겠습니다.";
const page17 = "실제로 ATM기로 거래를 마친 다음에는, 카드를 꼭 챙겨가셔야합니다.이제, 다음 화면으로 넘어가주세요.";
const page18 = "이제, 모든 거래가 완료되었습니다. 화면을 한 번 눌러서, 처음 화면으로 돌아가겠습니다.";
const page19 = "이번 시간에는, 예금인출에 대해서 연습해보았습니다. 이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";

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
    page19
);


const inputPage = [{ page: null, correctAnswer: null }];

function handleInput(pageNumber) {
    for (i = 0; i < inputPage.length; i++) {
        if (pageNumber === inputPage[i].page) {
            DrawInputBox(coordinateArray[pageNumber]);
            let answer = inputPage[i].correctAnswer;
            document.querySelector(".input-answer").addEventListener("keydown", function (event) {
                if (event.keyCode === 13) {
                    if (this.value === answer) {
                        handleClickBox();
                    } else if (this.value !== answer) {
                        alert(RETRY_MESSAGE);
                    }
                }
            });
        }
    }
}

const coordinate1 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate2 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate3 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate4 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate5 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate6 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate7 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate8 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate9 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate10 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate11 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate12 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate13 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate14 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate15 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate16 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate17 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate18 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate19 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
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
    coordinate18,
    coordinate19
);
