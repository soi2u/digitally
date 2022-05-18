const pageNum = 10;
const pageName = "5";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 실습에서는 내장된 카메라 앱을 살펴보도록 하겠습니다. 먼저, 휴대전화에 기본으로 설치되어 있는 카메라 앱을 실행해 줍니다.";
const page2 = "카메라 앱 화면입니다. 먼저 가운데 동그란 버튼을 눌러 촬영을 할 수 있습니다.";
const page3 = "다음으로, 비디오 카메라 모양의 버튼을 누르면 비디오 촬영을 할 수 있습니다.";
const page4 = "왼쪽의 회전 버튼을 누르면 카메라 전면, 후면을 설정할 수 있습니다.";
const page5 = "이제 왼쪽 상단의 메뉴 버튼을 눌러 보겠습니다.";
const page6 = "파노라마, 슬로우 모션 등 다양한 촬영을 할 수 있습니다. 뒤로가기 버튼을 눌러 돌아갑니다.";
const page7 = "왼쪽 시계 버튼을 눌러 보겠습니다.";
const page8 = "타이머를 설정해 원하는 타이밍에 사진을 찍을 수 있습니다.";
const page9 = "다시 화면으로 돌아가서, 번개 모양의 플래시 버튼을 눌러 보겠습니다.";
const page10 = "어두운 곳에서도 밝게 촬영할 수 있는 플래시 기능입니다. 카메라의 기본 기능에 대해서 살펴 보았습니다. 모두 고생하셨습니다.";


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
    startRateX: 0.7972222222222223, startRateY: 0.821875, endRateX: 0.9722222222222222, endRateY: 0.934375
};

const coordinate2 = {
    startRateX: 0.3888888888888889, startRateY: 0.8171875, endRateX: 0.6, endRateY: 0.93125
};

const coordinate3 = {
    startRateX: 0.6222222222222222, startRateY: 0.825, endRateX: 0.7722222222222223, endRateY: 0.9171875
};

const coordinate4 = {
    startRateX: 0.03611111111111111, startRateY: 0.8234375, endRateX: 0.20555555555555555, endRateY: 0.915625
};

const coordinate5 = {
    startRateX: 0.013888888888888888, startRateY: 0.0078125, endRateX: 0.10277777777777777, endRateY: 0.0546875
};

const coordinate6 = {
    startRateX: 0.011111111111111112, startRateY: 0.009375, endRateX: 0.1111111111111111, endRateY: 0.0515625
};

const coordinate7 = {
    startRateX: 0.1638888888888889, startRateY: 0.0046875, endRateX: 0.3055555555555556, endRateY: 0.06875
};

const coordinate8 = {
    startRateX: 0.09722222222222222, startRateY: 0.0015625, endRateX: 0.3472222222222222, endRateY: 0.084375
};

const coordinate9 = {
    startRateX: 0.8777777777777778, startRateY: 0.0078125, endRateX: 0.9944444444444445, endRateY: 0.0765625
};

const coordinate10 = {
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
    coordinate10

);
