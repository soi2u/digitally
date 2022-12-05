const pageNum = 7;
const pageName = "49";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "오늘은 편리하게 금융 서비스를 이용할 수 있는 우리은행 앱을 더 크게 볼 수 있도록 설정해 보겠습니다. 먼저, 우리WON뱅킹을 실행합니다.";
const page2 = "마이 메뉴를 눌러 줍니다.";
const page3 = "톱니바퀴 모양의 환경설정을 눌러 줍니다.";
const page4 = "큰 글씨 설정 버튼을 눌러 켜짐으로 돌려 줍니다.";
const page5 = "큰 글씨 화면이 적용되었습니다. 확인을 눌러 주세요.";
const page6 = "뒤로가기 버튼을 눌러 화면이 적용되었는지 확인해 주세요.";
const page7 = "큰 글씨 화면이 적용되었습니다. 모두 고생하셨습니다.";


pageDescArray.push(
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
);


const inputPage = [{ page: 3, correctAnswer: "우리은행" }];

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
    startRateX: 0.3111111111111111, startRateY: 0.05625, endRateX: 0.10277777777777777, endRateY: 0.175
};

const coordinate2 = {
    startRateX: 0.14166666666666666, startRateY: 0.034375, endRateX: 0.8638888888888889, endRateY: 0.0890625
};

const coordinate3 = {
    startRateX: 0.2111111111111111, startRateY: 0.034375, endRateX: 0.9, endRateY: 0.090625
};

const coordinate4 = {
    startRateX: 0.08611111111111111, startRateY: 0.096875, endRateX: 0.9083333333333333, endRateY: 0.1578125
};

const coordinate5 = {
    startRateX: 0.10555555555555556, startRateY: 0.2828125, endRateX: 0.8861111111111111, endRateY: 0.346875
};

const coordinate6 = {
    startRateX: 0.475, startRateY: 0.1859375, endRateX: 0.9555555555555556, endRateY: 0.26875
};

const coordinate7 = {
    startRateX: 0.08611111111111111, startRateY: 0.028125, endRateX: 0.9111111111111111, endRateY: 0.946875
};





coordinateArray.push(
    coordinate1,
    coordinate2,
    coordinate3,
    coordinate4,
    coordinate5,
    coordinate6,
    coordinate7
);
