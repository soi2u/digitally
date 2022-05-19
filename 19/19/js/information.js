const pageNum = 15;
const pageName = "19";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "오늘은 가격 비교 앱 다나와를 실습해 보겠습니다. 앱스토어를 눌러 주세요.";
const page2 = "앱스토어 검색창을 눌러 다나와를 검색해 주세요.";
const page3 = "다나와를 눌러 설치 페이지로 넘어갑니다.";
const page4 = "설치 버튼을 눌러 설치를 시작합니다.";
const page5 = "설치가 완료되었다면, 열기를 눌러 실행합니다.";
const page6 = "다나와 앱의 이벤트 알림 설정 안내입니다. 이번에는 동의안함을 누르고 넘어가 주세요.";
const page7 = "다나와 이벤트 알림이 수신 거부 되었습니다. 확인을 눌러 주세요.";
const page8 =
    "오늘은 로그인을 하지 않고 다나와 앱을 둘러보겠습니다. 나중에 볼게요를 눌러 주세요.";
const page9 =
    "다나와 앱의 메인 화면입니다. 왼쪽 상단의 메뉴 버튼을 눌러 주세요.";
const page10 =
    "다나와 앱의 메뉴 화면입니다. 최근 본 상품, 관심 상품, 카테고리 등을 확인할 수 있습니다. x를 눌러 메인 화면으로 돌아갈게요.";
const page11 = "홈으로 돌아왔습니다. 이제, 돋보기 모양의 검색창을 눌러 줄게요.";
const page12 = "원하는 상품을 검색할 수 있고, 아래에는 최근 검색어가 보입니다. 최근 본 상품을 눌러 볼게요.";
const page13 = "최근 본 상품을 확인할 수 있습니다. 이제 왼쪽 하단의 닫기를 눌러 줄게요.";
const page14 = "메인 화면으로 돌아왔습니다. 화면을 아래로 내려 볼게요.";
const page15 = "실시간 LIVE, 특가 등 다양한 쇼핑을 즐길 수 있습니다. 모두 고생하셨습니다.";


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
    page15
);


const inputPage = [{ page: 1, correctAnswer: "다나와" }];

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
    startRateX: 0.008333333333333333, startRateY: 0.525, endRateX: 0.21666666666666667, endRateY: 0.6953125
};

const coordinate2 = {
    startRateX: 0.07222222222222222, startRateY: 0.0375, endRateX: 0.7861111111111111, endRateY: 0.1078125
};

const coordinate3 = {
    startRateX: 0.05, startRateY: 0.11875, endRateX: 0.9388888888888889, endRateY: 0.1734375
};

const coordinate4 = {
    startRateX: 0.4166666666666667, startRateY: 0.29375, endRateX: 0.5722222222222222, endRateY: 0.3390625
};

const coordinate5 = {
    startRateX: 0.8, startRateY: 0.3375, endRateX: 0.6555555555555556, endRateY: 0.29375
};

const coordinate6 = {
    startRateX: 0.4444444444444444, startRateY: 0.6390625, endRateX: 0.18333333333333332, endRateY: 0.6078125
};

const coordinate7 = {
    startRateX: 0.4, startRateY: 0.6015625, endRateX: 0.6111111111111112, endRateY: 0.646875
};

const coordinate8 = {
    startRateX: 0.25, startRateY: 0.5734375, endRateX: 0.7194444444444444, endRateY: 0.621875
};

const coordinate9 = {
    startRateX: 0.011111111111111112, startRateY: 0.04375, endRateX: 0.11944444444444445, endRateY: 0.096875
};

const coordinate10 = {
    startRateX: 0.8944444444444445, startRateY: 0.040625, endRateX: 0.9833333333333333, endRateY: 0.096875
};

const coordinate11 = {
    startRateX: 0.8583333333333333, startRateY: 0.046875, endRateX: 0.9694444444444444, endRateY: 0.0984375
};

const coordinate12 = {
    startRateX: 0.5972222222222222, startRateY: 0.1296875, endRateX: 0.9083333333333333, endRateY: 0.1890625
};

const coordinate13 = {
    startRateX: 0.1527777777777778, startRateY: 0.925, endRateX: 0.013888888888888888, endRateY: 0.8859375
};

const coordinate14 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate15 = {
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
    coordinate15
);
