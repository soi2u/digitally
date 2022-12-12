const pageNum = 23;
const pageName = "4";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "코레일톡 앱 설치에 이어, 코레일톡 앱을 이용해 용산역부터 대전역까지 이동할 때 이용할 수 있는 열차를 조회해 보겠습니다. 먼저, 출발지를 설정해 보겠습니다. 출발 버튼을 눌러 주세요.";
const page2 = "용산을 찾아 눌러 주세요.";
const page3 = "출발지가 용산으로 설정되었습니다. 이제 도착을 눌러 도착지를 설정해 줍니다.";
const page4 = "대전을 찾아 눌러 주세요.";
const page5 = "대전으로 도착지가 설정되었습니다. 이제 출발일을 눌러 출발일을 설정해 보겠습니다.";
const page6 = "18일을 조회해 보겠습니다. 18을 눌러 주세요.";
const page7 = "이제 시간을 설정해 보겠습니다. 다섯 시 이후의 열차를 조회하기 위해 05시를 눌러 줍니다.";
const page8 =
    "이제 인원을 설정해 줍니다. 승객 연령 및 좌석수를 눌러 주세요.";
const page9 =
    "두 명이 탈 수 있는 자리를 조회합니다. 어른 옆의 + 버튼을 눌러 2로 만들어 주세요.";
const page10 =
    "인원까지 설정했다면, 열차를 조회해 보도록 하겠습니다. 열차 조회하기 버튼을 눌러 줍니다.";
const page11 = "이용 안내를 읽고, 오늘 하루 다시 보지 않기를 눌러 주세요.";
const page12 = "확인 버튼을 눌러 좌석 조회로 이동합니다.";
const page13 = "용산부터 대전까지 가는 열차가 조회되었습니다. 아래로 화면을 내려 다양한 시간과 열차 유형을 확인할 수 있습니다.";
const page14 = "이제 좌석을 조회해 보겠습니다. 무궁화호 1501 열차의 좌석을 조회해 볼게요. 가격 버튼을 눌러 줍니다.";
const page15 = "이용 안내를 읽고 확인을 눌러 줍니다.";
const page16 = "좌석 선택 버튼을 눌러 좌석을 선택합니다.";
const page17 = "1호차 좌석 화면이 먼저 나옵니다. 다른 칸도 확인하기 위해 상단의 1호차 버튼을 눌러 줍니다.";
const page18 = "1호차부터 6호차까지 다양한 좌석이 있습니다. 이번 실습에서는 6호차를 눌러 좌석을 확인하겠습니다.";
const page19 = "원하는 좌석을 선택해 줍니다. 이번 실습에서는 17번을 좌석을 눌러 볼게요.";
const page20 = "인원을 두 명으로 설정했으므로, 원하는 좌석을 한 곳 더 선택해 줍니다. 18번 좌석을 선택해 주세요.";
const page21 = "모두 선택했다면 선택 완료를 눌러 줍니다.";
const page22 = "모두 완료했다면 예매 버튼을 눌러 예매 페이지로 넘어갑니다.";
const page23 = "예매를 위한 로그인 화면이 보입니다. 오늘은 좌석 조회까지만 확인해보도록 하겠습니다. 모두 고생하셨습니다.";

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
    page19,
    page20,
    page21,
    page22,
    page23,
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
    startRateX: 0.13055555555555556, startRateY: 0.1765625, endRateX: 0.36666666666666664, endRateY: 0.2828125
};

const coordinate2 = {
    startRateX: 0.475, startRateY: 0.45, endRateX: 0.6, endRateY: 0.509375
};

const coordinate3 = {
    startRateX: 0.6555555555555556, startRateY: 0.1734375, endRateX: 0.8416666666666667, endRateY: 0.28125
};

const coordinate4 = {
    startRateX: 0.011111111111111112, startRateY: 0.7671875, endRateX: 0.4638888888888889, endRateY: 0.8125
};

const coordinate5 = {
    startRateX: 0.9333333333333333, startRateY: 0.490625, endRateX: 0.06666666666666667, endRateY: 0.35
};

const coordinate6 = {
    startRateX: 0.5, startRateY: 0.3765625, endRateX: 0.6055555555555555, endRateY: 0.4953125
};

const coordinate7 = {
    startRateX: 0.5861111111111111, startRateY: 0.3734375, endRateX: 0.6972222222222222, endRateY: 0.4421875
};

const coordinate8 = {
    startRateX: 0.10277777777777777, startRateY: 0.471875, endRateX: 0.8888888888888888, endRateY: 0.628125
};

const coordinate9 = {
    startRateX: 0.8805555555555555, startRateY: 0.3796875, endRateX: 0.9583333333333334, endRateY: 0.4140625
};

const coordinate10 = {
    startRateX: 0.55, startRateY: 0.7671875, endRateX: 0.9444444444444444, endRateY: 0.8515625
};

const coordinate11 = {
    startRateX: 0.08055555555555556, startRateY: 0.54375, endRateX: 0.5944444444444444, endRateY: 0.590625
};

const coordinate12 = {
    startRateX: 0.3972222222222222, startRateY: 0.6171875, endRateX: 0.6055555555555555, endRateY: 0.68125
};

const coordinate13 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate14 = {
    startRateX: 0.5833333333333334, startRateY: 0.45, endRateX: 0.7916666666666666, endRateY: 0.5125
};

const coordinate15 = {
    startRateX: 0.35555555555555557, startRateY: 0.5265625, endRateX: 0.6694444444444444, endRateY: 0.5921875
};

const coordinate16 = {
    startRateX: 0.6777777777777778, startRateY: 0.6953125, endRateX: 0.9416666666666667, endRateY: 0.7546875
};

const coordinate17 = {
    startRateX: 0.030555555555555555, startRateY: 0.1140625, endRateX: 0.9694444444444444, endRateY: 0.1625
};

const coordinate18 = {
    startRateX: 0.019444444444444445, startRateY: 0.3453125, endRateX: 0.28888888888888886, endRateY: 0.4046875
};

const coordinate19 = {
    startRateX: 0.7888888888888889, startRateY: 0.665625, endRateX: 0.9027777777777778, endRateY: 0.7328125
};

const coordinate20 = {
    startRateX: 0.65, startRateY: 0.6625, endRateX: 0.7583333333333333, endRateY: 0.7390625
};

const coordinate21 = {
    startRateX: 0.3277777777777778, startRateY: 0.8453125, endRateX: 0.6722222222222223, endRateY: 0.9359375
};

const coordinate22 = {
    startRateX: 0.35833333333333334, startRateY: 0.7671875, endRateX: 0.6472222222222223, endRateY: 0.8453125
};

const coordinate23 = {
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
    coordinate19,
    coordinate20,
    coordinate21,
    coordinate22,
    coordinate23,
);
