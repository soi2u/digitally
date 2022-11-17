const pageNum = 11;
const pageName = "3";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 실습에서는 기차 예매를 편하게 할 수 있도록 도와주는 코레일톡 앱 설치를 해 보도록 하겠습니다. 먼저, 앱 스토어에 접속해 주세요.";
const page2 = "앱스토어에서 앱을 검색할 수 있는 검색창을 눌러, 코레일톡을 입력합니다.";
const page3 = "코레일톡을 눌러 앱 설치 화면으로 넘어갑니다.";
const page4 = "설치 버튼을 눌러 코레일톡 앱을 설치합니다.";
const page5 = "설치가 완료되었다면, 열기를 눌러 코레일톡 앱을 실행해 줍니다.";
const page6 = "접근 권한 설정을 위해 네를 눌러 줍니다.";
const page7 = "코레일톡 앱이 사진, 미디어, 파일에 접근할 수 있도록 허용 버튼을 눌러 줍니다.";
const page8 =
    "코레일톡 앱이 위치 정보에 접근할 수 있도록 허용 버튼을 눌러 줍니다.";
const page9 =
    "코레일톡 앱에서 제공하는 공지입니다. 읽었다면 오늘 하루 다시 보지 않기 버튼을 눌러 줍니다.";
const page10 =
    "닫기를 눌러 홈 화면으로 이동합니다.";
const page11 = "코레일톡 앱 설치가 완료되었습니다. 모두 고생하셨습니다.";

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


const inputPage = [
    { page: 1, correctAnswer: "코레일톡" },
];

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
    startRateX: 0.011111111111111112, startRateY: 0.5484375, endRateX: 0.20555555555555555, endRateY: 0.6921875
};

const coordinate2 = {
    startRateX: 0.06111111111111111, startRateY: 0.034375, endRateX: 0.9472222222222222, endRateY: 0.1109375
};

const coordinate3 = {
    startRateX: 0.025, startRateY: 0.121875, endRateX: 0.49444444444444446, endRateY: 0.1734375
};

const coordinate4 = {
    startRateX: 0.4222222222222222, startRateY: 0.353125, endRateX: 0.5694444444444444, endRateY: 0.403125
};

const coordinate5 = {
    startRateX: 0.6555555555555556, startRateY: 0.2515625, endRateX: 0.7944444444444444, endRateY: 0.296875
};

const coordinate6 = {
    startRateX: 0.6416666666666667, startRateY: 0.675, endRateX: 0.8194444444444444, endRateY: 0.740625
};

const coordinate7 = {
    startRateX: 0.675, startRateY: 0.534375, endRateX: 0.7916666666666666, endRateY: 0.584375
};

const coordinate8 = {
    startRateX: 0.675, startRateY: 0.534375, endRateX: 0.7916666666666666, endRateY: 0.584375
};

const coordinate9 = {
    startRateX: 0.030555555555555555, startRateY: 0.8140625, endRateX: 0.5555555555555556, endRateY: 0.8546875
};

const coordinate10 = {
    startRateX: 0.002777777777777778, startRateY: 0.8671875, endRateX: 0.9972222222222222, endRateY: 0.9359375
};

const coordinate11 = {
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
    coordinate11
);
