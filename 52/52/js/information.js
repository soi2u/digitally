const pageNum = 11;
const pageName = "52";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "우리WON뱅킹의 원터치 알림 서비스를 이용해 보도록 하겠습니다. 먼저, 우리WON뱅킹 앱을 눌러 실행합니다.";
const page2 = "전체 메뉴를 확인하기 위해 우측 하단의 전체를 눌러 줍니다.";
const page3 = "부가서비스를 눌러 줍니다.";
const page4 = "통지서비스를 눌러 줍니다.";
const page5 = "WON알림을 눌러 줍니다..";
const page6 = "이용 약관 옆 버튼을 눌러 WON 알림 이용에 동의합니다.";
const page7 = "동의 후 알림 받기를 눌러 줍니다.";
const page8 = "기타 알림을 눌러 줍니다.";
const page9 = "만기 알림의 예금, 적금, 신탁 옆 버튼을 눌러 알림을 켜짐으로 돌려 줍니다.";
const page10 = "대출이자 납입 옆 버튼을 눌러 알림을 켜짐으로 돌려 줍니다. ";
const page11 = "원터치 알림이 설정되었습니다. 모두 고생하셨습니다.";


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
    page11
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
    startRateX: 0.7361111111111112, startRateY: 0.8796875, endRateX: 0.9027777777777778, endRateY: 0.9390625
};

const coordinate2 = {
    startRateX: 0.3861111111111111, startRateY: 0.371875, endRateX: 0.9111111111111111, endRateY: 0.4359375
};

const coordinate3 = {
    startRateX: 0.3888888888888889, startRateY: 0.4734375, endRateX: 0.9027777777777778, endRateY: 0.50625
};

const coordinate4 = {
    startRateX: 0.09722222222222222, startRateY: 0.3046875, endRateX: 0.9055555555555556, endRateY: 0.4703125
};

const coordinate5 = {
    startRateX: 0.325, startRateY: 0.8375, endRateX: 0.9305555555555556, endRateY: 0.946875
};

const coordinate6 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate7 = {
    startRateX: 0.1527777777777778, startRateY: 0.53125, endRateX: 0.8444444444444444, endRateY: 0.6015625
};

const coordinate8 = {
    startRateX: 0.1527777777777778, startRateY: 0.53125, endRateX: 0.8444444444444444, endRateY: 0.6015625
};
const coordinate9 = {
    startRateX: 0.1527777777777778, startRateY: 0.53125, endRateX: 0.8444444444444444, endRateY: 0.6015625
};
const coordinate10 = {
    startRateX: 0.1527777777777778, startRateY: 0.53125, endRateX: 0.8444444444444444, endRateY: 0.6015625
};

const coordinate11 = {
    startRateX: 0.1527777777777778, startRateY: 0.53125, endRateX: 0.8444444444444444, endRateY: 0.6015625
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
);
