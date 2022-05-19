const pageNum = 12;
const pageName = "15";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 실습에서는 안전신문고 앱을 통해 불법 주정차를 신고해 보도록 하겠습니다. 먼저, 안전신문고 앱을 실행해 주세요.";
const page2 = "첫 화면은 안전 신고로 보여집니다. 불법 주정차 신고를 위해 상단의 불법 주정차 버튼을 눌러 이동하겠습니다.";
const page3 = "불법 주정차 신고 화면입니다. 먼저, 유형을 선택해 보겠습니다. 유형 선택 버튼을 눌러 주세요.";
const page4 = "다양한 불법 주정차 유형이 보입니다. 이번 실습에서는 어린이 보호 구역 불법 주정차를 신고해 볼게요. 어린이 보호 구역을 눌러 줍니다.";
const page5 = "어린이 보호 구역 불법 주정차에 대한 설명입니다. 읽고 확인을 눌러 주세요.";
const page6 = "이제 촬영, 앨범 버튼을 눌러 사진을 선택해 보겠습니다.";
const page7 = "사진 촬영 또는 안전 신고 갤러리를 이용할 수 있습니다. 이번 시간에는 x를 눌러 뒤로 돌아가 보겠습니다.";
const page8 =
    "다음으로, 위치 찾기 버튼을 눌러 발생 지역을 선택해 보겠습니다.";
const page9 =
    "위치를 선택했다면, 위치 선택 버튼을 눌러 주세요.";
const page10 =
    "마지막으로 내용 칸에 불법 주정차 내용을 적어 주시면 됩니다. 어린이 보호 구역 불법 주청자 신고 내용을 적어 주세요.";
const page11 = "이제, 신고 내용 공유를 동의해 주세요.";
const page12 = "제출 버튼을 누르면 신고가 완료됩니다. 이번 시간에는 실습이기 때문에 제출을 하지 않고 마치도록 하겠습니다. 모두 고생하셨습니다.";


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
    page12
);


const inputPage = [{ page: 9, correctAnswer: "내용을" }];

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
    startRateX: 0, startRateY: 0.15625, endRateX: 0.24444444444444444, endRateY: 0.3140625
};

const coordinate2 = {
    startRateX: 0.5027777777777778, startRateY: 0.0984375, endRateX: 0.7416666666666667, endRateY: 0.171875
};

const coordinate3 = {
    startRateX: 0.6944444444444444, startRateY: 0.196875, endRateX: 0.9638888888888889, endRateY: 0.2453125
};

const coordinate4 = {
    startRateX: 0.325, startRateY: 0.44375, endRateX: 0.675, endRateY: 0.4953125
};

const coordinate5 = {
    startRateX: 0.17222222222222222, startRateY: 0.7328125, endRateX: 0.46111111111111114, endRateY: 0.7796875
};

const coordinate6 = {
    startRateX: 0.7305555555555555, startRateY: 0.2953125, endRateX: 0.9305555555555556, endRateY: 0.340625
};

const coordinate7 = {
    startRateX: 0.8083333333333333, startRateY: 0.2484375, endRateX: 0.8972222222222223, endRateY: 0.3109375
};

const coordinate8 = {
    startRateX: 0.9638888888888889, startRateY: 0.409375, endRateX: 0.6944444444444444, endRateY: 0.353125
};

const coordinate9 = {
    startRateX: 0.3333333333333333, startRateY: 0.7328125, endRateX: 0.6722222222222223, endRateY: 0.8
};

const coordinate10 = {
    startRateX: 0.9666666666666667, startRateY: 0.659375, endRateX: 0.041666666666666664, endRateY: 0.4875
};

const coordinate11 = {
    startRateX: 0.4388888888888889, startRateY: 0.8265625, endRateX: 0.013888888888888888, endRateY: 0.775
};

const coordinate12 = {
    startRateX: 0.14444444444444443, startRateY: 0.859375, endRateX: 0.3861111111111111, endRateY: 0.9265625
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
    coordinate12
);
