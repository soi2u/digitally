const pageNum = 10;
const pageName = "48";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "오늘은 편리하게 금융 서비스를 이용할 수 있는 우리은행의 공식 앱 우리WON뱅킹을 실습해 보겠습니다. 먼저, 플레이스토어를 눌러 실행해 주세요.";
const page2 = "앱스토어 검색창을 눌러 줍니다.";
const page3 = "우리은행을 입력해 줍니다.";
const page4 = "우리WON뱅킹을 눌러 설치 화면으로 이동합니다.";
const page5 = "우리WON뱅킹 앱을 설치해 줍니다.";
const page6 = "우리WON뱅킹 앱의 설치가 끝났다면, 열기를 눌러 실행해 줍니다.";
const page7 = "우리WON뱅킹 앱의 실행 화면입니다. 한번 클릭해 넘어가 줍니다.";
const page8 = "우리WON뱅킹 앱에서 기기의 사진, 미디어, 파일 등에 접근할 수 있도록 허용을 눌러 줍니다.";
const page9 = "우리WON뱅킹 앱에서 전화를 걸고 관리하도록 허용을 눌러 줍니다.";
const page10 = "마지막으로 확인을 눌러 우리WON뱅킹 앱 설치를 완료합니다. 모두 고생하셨습니다.";


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

const coordinate8 = {
    startRateX: 0.13333333333333333, startRateY: 0.521875, endRateX: 0.8638888888888889, endRateY: 0.5828125
};

const coordinate9 = {
    startRateX: 0.14166666666666666, startRateY: 0.4984375, endRateX: 0.8666666666666667, endRateY: 0.571875
};

const coordinate10 = {
    startRateX: 0.09722222222222222, startRateY: 0.8484375, endRateX: 0.9194444444444444, endRateY: 0.9421875
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
    coordinate10
);
