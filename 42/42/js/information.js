const pageNum = 16;
const pageName = "42";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 실습에서는 의약품 정보를 한눈에 알아볼 수 있는 의약품 검색 앱을 둘러 보겠습니다. 먼저, 플레이스토어를 눌러 접속해 주세요.";
const page2 = "검색을 위해 검색창을 눌러 주세요.";
const page3 = "검색창에 의약품 검색을 입력해 주세요.";
const page4 = "의약품 검색을 눌러 설치 페이지로 넘어가 주세요.";
const page5 = "의약품 검색 앱의 설치 페이지입니다. 설치를 눌러 앱 설치를 진행합니다.";
const page6 = "열기를 눌러 앱을 실행합니다.";
const page7 = "의약품 검색 앱의 메인 페이지입니다. 먼저, 의약품 정보 검색을 눌러 볼게요.";
const page8 =
    "제품, 성분, 회사명 또는 코드 등을 입력해 의약품을 검색할 수 있는 페이지입니다. 홈 버튼을 눌러 홈으로 돌아가 주세요.";
const page9 =
    "다음은, 모양으로 약 찾기 버튼을 눌러 주세요.";
const page10 =
    "약의 모양, 제형, 색상, 식별표시를 입력해 의약품을 찾을 수 있습니다. 다시 홈 버튼을 눌러 홈으로 돌아가 주세요.";
const page11 = "이번에는 약물 음식 상호작용을 눌러 주세요.";
const page12 =
    "성분과 제품명을 입력해 약물과 음식 간의 상호작용을 알 수 있습니다. 부작용을 검색할 때 이용하면 편리하게 이용할 수 있습니다. 다시 홈 버튼을 눌러 홈으로 돌아가 주세요.";
const page13 =
    "다음은, 임신 중 약물 사용 버튼을 눌러 볼게요.";
const page14 = "의약품 정보를 입력해 임신 중 복용할 수 있는 약물인지 확인할 수 있습니다. 홈 버튼을 눌러 홈으로 돌아가 주세요.";
const page15 = "마지막으로 응급처치를 눌러 주세요."
const page16 = "다양한 위급 상황에서 응급 처치를 할 수 있는 방법을 확인할 수 있습니다. 다음 시간에는 약을 직접 검색해 보도록 할게요. 모두 고생하셨습니다."


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


const inputPage = [{ page: 2, correctAnswer: "의약품검색" }];

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
    startRateX: 0.625, startRateY: 0.8109375, endRateX: 0.38333333333333336, endRateY: 0.665625
};

const coordinate2 = {
    startRateX: 0.058333333333333334, startRateY: 0.0390625, endRateX: 0.9527777777777777, endRateY: 0.103125
};

const coordinate3 = {
    startRateX: 0.058333333333333334, startRateY: 0.0390625, endRateX: 0.9527777777777777, endRateY: 0.103125
};

const coordinate4 = {
    startRateX: 0.002777777777777778, startRateY: 0.1046875, endRateX: 1, endRateY: 0.1859375
};

const coordinate5 = {
    startRateX: 1, startRateY: 0.4375, endRateX: 0, endRateY: 0.3234375
};

const coordinate6 = {
    startRateX: 0.49722222222222223, startRateY: 0.2296875, endRateX: 0.9694444444444444, endRateY: 0.3203125
};

const coordinate7 = {
    startRateX: 0, startRateY: 0.3953125, endRateX: 0.33611111111111114, endRateY: 0.6203125
};

const coordinate8 = {
    startRateX: 0.7472222222222222, startRateY: 0.0328125, endRateX: 0.9972222222222222, endRateY: 0.0921875
};

const coordinate9 = {
    startRateX: 0.34444444444444444, startRateY: 0.3921875, endRateX: 0.6722222222222223, endRateY: 0.6296875
};

const coordinate10 = {
    startRateX: 0.8694444444444445, startRateY: 0.0890625, endRateX: 1, endRateY: 0.0375
};

const coordinate11 = {
    startRateX: 0.6666666666666666, startRateY: 0.4, endRateX: 0.9972222222222222, endRateY: 0.6234375
};

const coordinate12 = {
    startRateX: 0.8777777777777778, startRateY: 0.0390625, endRateX: 1, endRateY: 0.090625
};

const coordinate13 = {
    startRateX: 0.3416666666666667, startRateY: 0.625, endRateX: 0.6694444444444444, endRateY: 0.8609375
};

const coordinate14 = {
    startRateX: 0.85, startRateY: 0.03125, endRateX: 1, endRateY: 0.09375
};
const coordinate15 = {
    startRateX: 0.6722222222222223, startRateY: 0.6234375, endRateX: 1, endRateY: 0.7359375
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
