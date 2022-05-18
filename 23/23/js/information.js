const pageNum = 16;
const pageName = "23";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "약 먹는 시간을 알려 주는 테이크 앱을 실습해 보겠습니다. 먼저, 앱스토어를 실행해 주세요.";
const page2 = "검색창에 테이크를 입력해 주세요.";
const page3 = "테이크를 눌러 검색해 줍니다.";
const page4 = "약 모양의 테이크 앱을 설치 버튼을 눌러 설치해 줍니다.";
const page5 = "설치가 완료되었다면, 열기를 눌러 실행해 줍니다.";
const page6 = "테이크 앱의 첫 화면입니다. 더하기 버튼을 눌러 약을 추가해 볼게요.";
const page7 = "먼저, 사진을 등록해 보겠습니다. 약 모양의 사진 버튼을 눌러 주세요.";
const page8 =
    "테이크 앱이 미디어를 활용할 수 있도록 허용을 눌러 주세요.";
const page9 =
    "앨범에서 약을 선택하거나, 뒤로 가기를 눌러 돌아와 주세요.";
const page10 =
    "이번에는, 약 이름을 입력해 볼게요. 약 이름을 입력해 주세요 아래 칸에 약 이름을 입력해 주세요. 이번 실습에서는 감기약이라고 적어 볼게요.";
const page11 = "약 이름을 적었다면, 복용 타입을 선택해 주세요. 요일별 또는 주기별로 설정할 수 있습니다.";
const page12 = "화면을 아래로 내려, 원하는 복용 요일을 선택해 주세요.";
const page13 = "복용 요일을 정했다면, 원하는 복용 시간을 설정해 주세요.";
const page14 = "마지막으로 약에 대한 메모를 적어 주세요.";
const page15 = "모두 적었다면, 저장 버튼을 눌러 완료해 주세요.";
const page16 = "감기약이 등록된 것을 확인할 수 있습니다. 테이크 앱을 이용하면 편리하게 약 복용 시간을 관리할 수 있습니다. 모두 고생하셨습니다.";


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
    page16
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
    startRateX: 0.23055555555555557, startRateY: 0.68125, endRateX: 0.008333333333333333, endRateY: 0.5484375
};

const coordinate2 = {
    startRateX: 0.16111111111111112, startRateY: 0.0421875, endRateX: 0.6222222222222222, endRateY: 0.1015625
};

const coordinate3 = {
    startRateX: 0.03333333333333333, startRateY: 0.1125, endRateX: 0.31666666666666665, endRateY: 0.1859375
};

const coordinate4 = {
    startRateX: 0.7888888888888889, startRateY: 0.6203125, endRateX: 0.9555555555555556, endRateY: 0.69375
};

const coordinate5 = {
    startRateX: 0.7888888888888889, startRateY: 0.6203125, endRateX: 0.9555555555555556, endRateY: 0.69375
};

const coordinate6 = {
    startRateX: 0.8055555555555556, startRateY: 0.7375, endRateX: 0.9861111111111112, endRateY: 0.8453125
};

const coordinate7 = {
    startRateX: 0.013888888888888888, startRateY: 0.1671875, endRateX: 0.3111111111111111, endRateY: 0.3328125
};

const coordinate8 = {
    startRateX: 0.6888888888888889, startRateY: 0.5328125, endRateX: 0.7861111111111111, endRateY: 0.5859375
};

const coordinate9 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate10 = {
    startRateX: 0.03888888888888889, startRateY: 0.38125, endRateX: 0.48055555555555557, endRateY: 0.44375
};

const coordinate11 = {
    startRateX: 0.9388888888888889, startRateY: 0.58125, endRateX: 0.06388888888888888, endRateY: 0.5203125
};

const coordinate12 = {
    startRateX: 0.027777777777777776, startRateY: 0.1828125, endRateX: 0.9722222222222222, endRateY: 0.3296875
};

const coordinate13 = {
    startRateX: 0.1388888888888889, startRateY: 0.296875, endRateX: 0.9, endRateY: 0.54375
};

const coordinate14 = {
    startRateX: 0.027777777777777776, startRateY: 0.5453125, endRateX: 0.9888888888888889, endRateY: 0.7625
};

const coordinate15 = {
    startRateX: 0.8305555555555556, startRateY: 0.0421875, endRateX: 0.9583333333333334, endRateY: 0.096875
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
