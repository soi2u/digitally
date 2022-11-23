const pageNum = 16;
const pageName = "21";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "촬영 앱 스노우를 실습해 보도록 하겠습니다. 앱스토어를 실행해 주세요.";
const page2 = "앱스토어 검색창에 스노우를 검색해 주세요.";
const page3 = "스노우를 눌러 설치 화면으로 넘어가 주세요.";
const page4 = "설치 버튼을 눌러 스노우 앱을 설치해 주세요.";
const page5 = "설치가 완료되었다면, 열기를 눌러 스노우 앱을 실행해 보겠습니다.";
const page6 = "이용 약관 동의 화면입니다. 동의하고 시작 옆의 체크 버튼을 눌러 주세요.";
const page7 = "스노우 앱의 필수 권한 설명입니다. 계속하기 버튼을 눌러 주세요.";
const page8 =
    "스노우가 미디어에 접근할 수 있도록 허용을 눌러 주세요.";
const page9 =
    "스노우가 촬영 작업을 할 수 있도록 허용을 눌러 주세요,";
const page10 =
    "스노우 앱의 첫 화면입니다. 우측 상단의 회전 버튼을 눌러 볼게요.";
const page11 = "카메라의 전면, 후면이 변경됩니다. 이제 이펙트를 눌러 볼게요.";
const page12 = "이펙트를 누르면 사진을 꾸밀 수 있는 다양한 효과가 나옵니다. 뒤로 가기를 눌러 첫 화면으로 돌아갈게요.";
const page13 = "이번에는 필터를 눌러 보도록 하겠습니다.";
const page14 = "사진을 다양하게 보정할 수 있는 필터가 나옵니다. 좌측의 아래로 내리기 버튼을 눌러 첫 화면으로 돌아가겠습니다.";
const page15 = "마지막으로, 하단의 비디오 버튼을 눌러 주세요.";
const page16 = "사진에서 비디오로 촬영 모드가 전환되었습니다. 기본 카메라뿐만 아니라, 다양한 보정과 이펙트가 있는 스노우를 통해 다양한 사진을 찍을 수 있습니다. 고생하셨습니다. ";

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
    startRateX: 0.011111111111111112, startRateY: 0.54375, endRateX: 0.21388888888888888, endRateY: 0.678125
};

const coordinate2 = {
    startRateX: 0.06388888888888888, startRateY: 0.0421875, endRateX: 0.6805555555555556, endRateY: 0.0953125
};

const coordinate3 = {
    startRateX: 0.044444444444444446, startRateY: 0.1171875, endRateX: 0.43333333333333335, endRateY: 0.1765625
};

const coordinate4 = {
    startRateX: 0.5694444444444444, startRateY: 0.3984375, endRateX: 0.4222222222222222, endRateY: 0.3546875
};

const coordinate5 = {
    startRateX: 0.6555555555555556, startRateY: 0.2484375, endRateX: 0.7944444444444444, endRateY: 0.3
};

const coordinate6 = {
    startRateX: 0.30833333333333335, startRateY: 0.771875, endRateX: 0.7055555555555556, endRateY: 0.8296875
};

const coordinate7 = {
    startRateX: 0.3333333333333333, startRateY: 0.5140625, endRateX: 0.6666666666666666, endRateY: 0.5609375
};

const coordinate8 = {
    startRateX: 0.6777777777777778, startRateY: 0.5171875, endRateX: 0.7916666666666666, endRateY: 0.5703125
};

const coordinate9 = {
    startRateX: 0.6722222222222223, startRateY: 0.4953125, endRateX: 0.7944444444444444, endRateY: 0.55625
};

const coordinate10 = {
    startRateX: 0.8861111111111111, startRateY: 0.0140625, endRateX: 0.9805555555555555, endRateY: 0.0640625
};

const coordinate11 = {
    startRateX: 0.20555555555555555, startRateY: 0.7640625, endRateX: 0.3527777777777778, endRateY: 0.86875
};

const coordinate12 = {
    startRateX: 0.15, startRateY: 0.94375, endRateX: 0.29444444444444445, endRateY: 0.9921875
};

const coordinate13 = {
    startRateX: 0.7972222222222223, startRateY: 0.7734375, endRateX: 0.95, endRateY: 0.8734375
};

const coordinate14 = {
    startRateX: 0.37777777777777777, startRateY: 0.9171875, endRateX: -0.002777777777777778, endRateY: 0.840625
};

const coordinate15 = {
    startRateX: 0.5861111111111111, startRateY: 0.8734375, endRateX: 0.7694444444444445, endRateY: 0.9296875
};

const coordinate16 = {
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
    coordinate16
);
