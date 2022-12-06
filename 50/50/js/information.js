const pageNum = 13;
const pageName = "50";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "우리WON뱅킹의 국민 비서 서비스를 이용해 보도록 하겠습니다. 먼저, 홈 화면의 우리WON뱅킹 앱을 실행해 줍니다.";
const page2 = "전체 메뉴를 확인하기 위해 우측 하단의 전체를 눌러 줍니다.";
const page3 = "생활혜택을 눌러 줍니다.";
const page4 = "생활금융 버튼을 눌러 줍니다.";
const page5 = "국민비서를 눌러 넘어가 줍니다.";
const page6 = "국민비서 알림 서비스 신청 화면입니다. 스크롤을 내려 아래로 내려가 줍니다.";
const page7 = "건강검진을 눌러 체크해 줍니다.";
const page8 = "국세고지서 발송 안내를 눌러 체크해 줍니다.";
const page9 = "알림 설정하기를 눌러 국민비서 알림 서비스 신청을 완료해 줍니다.";
const page10 = "전체 동의하기 버튼을 눌러 줍니다.";
const page11 = "전체 동의 버튼을 눌러 줍니다.";
const page12 = "전체 동의가 완료되었다면, 다음 버튼을 눌러 넘어가 줍니다.";
const page13 = "신청이 완료되었습니다. 확인 버튼을 누르면 종료됩니다. 모두 고생하셨습니다.";

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
    page13
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
    startRateX: 0.5361111111111111, startRateY: 0.18265440210249673, endRateX: 0.2361111111111111, endRateY: 0.017082785808147174
};

const coordinate2 = {
    startRateX: 0.7388888888888889, startRateY: 0.88125, endRateX: 0.9055555555555556, endRateY: 0.9453125
};

const coordinate3 = {
    startRateX: 0.6194444444444445, startRateY: 0.225, endRateX: 0.8222222222222222, endRateY: 0.371875
};

const coordinate4 = {
    startRateX: 0.08888888888888889, startRateY: 0.4921875, endRateX: 0.39444444444444443, endRateY: 0.546875
};

const coordinate5 = {
    startRateX: 0.39166666666666666, startRateY: 0.43125, endRateX: 0.8972222222222223, endRateY: 0.4890625
};

const coordinate6 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate7 = {
    startRateX: 0.09166666666666666, startRateY: 0.3875, endRateX: 0.9222222222222223, endRateY: 0.45625
};

const coordinate8 = {
    startRateX: 0.09444444444444444, startRateY: 0.3921875, endRateX: 0.9222222222222223, endRateY: 0.465625
};

const coordinate9 = {
    startRateX: 0.1, startRateY: 0.84375, endRateX: 0.9333333333333333, endRateY: 0.946875
};

const coordinate10 = {
    startRateX: 0.1, startRateY: 0.0875, endRateX: 0.9027777777777778, endRateY: 0.15625
};

const coordinate11 = {
    startRateX: 0.1, startRateY: 0.853125, endRateX: 0.9111111111111111, endRateY: 0.9328125
};

const coordinate12 = {
    startRateX: 0.3388888888888889, startRateY: 0.8390625, endRateX: 0.9027777777777778, endRateY: 0.94375
};

const coordinate13 = {
    startRateX: 0.1, startRateY: 0.834375, endRateX: 0.9055555555555556, endRateY: 0.94375
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
    coordinate13
);
