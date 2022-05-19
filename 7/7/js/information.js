const pageNum = 13;
const pageName = "7";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "미세먼지 현황을 알 수 있는 미세미세 앱을 실습해 보도록 하겠습니다. 먼저, 앱스토어를 실행합니다.";
const page2 = "앱스토어 검색창을 클릭합니다.";
const page3 = "검색창에 미세미세를 입력하고 엔터를 눌러주세요.";
const page4 = "설치 버튼을 눌러 미세미세 앱을 설치합니다.";
const page5 = "설치가 완료되었다면, 열기를 눌러 실행합니다.";
const page6 = "미세미세 앱에 위치 정보 제공을 허용하기 위해 허용 버튼을 눌러 줍니다.";
const page7 = "미세미세 앱의 장점을 설명한 글입니다. 더이상 보지 않기를 누릅니다.";
const page8 =
    "화면에 현재 위치가 반영된 미세먼지 현황이 제공됩니다. 화면을 아래로 내려 볼게요.";
const page9 =
    "아래에서는 시간별로 더욱 자세한 미세먼지 정보가 제공됩니다. 다시 화면을 위로 올려 보겠습니다.";
const page10 =
    "홈 화면에서 우측 상단 지도 버튼을 눌러 주세요.";
const page11 = "미세먼지 현황이 표시된 지도가 보여집니다. x 버튼을 눌러 홈으로 돌아가 주세요.";
const page12 = "이번에는, 지도 옆 공유 버튼을 눌러 주세요.";
const page13 = "미세먼지 현황을 공유할 수 있습니다. 모두 고생하셨습니다.";


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


const inputPage = [{ page: 2, correctAnswer: "미세미세" }];

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
    startRateX: 0, startRateY: 0.54375, endRateX: 0.2361111111111111, endRateY: 0.684375
};

const coordinate2 = {
    startRateX: 0.12777777777777777, startRateY: 0.0375, endRateX: 0.8888888888888888, endRateY: 0.109375
};

const coordinate3 = {
    startRateX: 0.030555555555555555, startRateY: 0.1125, endRateX: 0.9555555555555556, endRateY: 0.1765625
};

const coordinate4 = {
    startRateX: 0.4027777777777778, startRateY: 0.4375, endRateX: 0.5833333333333334, endRateY: 0.490625
};

const coordinate5 = {
    startRateX: 0.6555555555555556, startRateY: 0.3359375, endRateX: 0.8027777777777778, endRateY: 0.3859375
};

const coordinate6 = {
    startRateX: 0.6583333333333333, startRateY: 0.534375, endRateX: 0.8111111111111111, endRateY: 0.5859375
};

const coordinate7 = {
    startRateX: 0.55, startRateY: 0.696875, endRateX: 0.9027777777777778, endRateY: 0.7578125
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
    startRateX: 0.675, startRateY: 0.05, endRateX: 0.7888888888888889, endRateY: 0.103125
};

const coordinate11 = {
    startRateX: 0.9083333333333333, startRateY: 0.040625, endRateX: 1, endRateY: 0.10625
};

const coordinate12 = {
    startRateX: 0.8, startRateY: 0.0515625, endRateX: 0.8722222222222222, endRateY: 0.1015625
};

const coordinate13 = {
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
    coordinate13
);
