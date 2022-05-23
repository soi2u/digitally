const pageNum = 14;
const pageName = "12";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 실습에서는 만보기 앱을 실습해 보도록 하겠습니다. 먼저, 앱스토어를 눌러 실행해 주세요.";
const page2 = "검색창에 만보기를 입력합니다.";
const page3 = "확인 또는 만보기 어플을 눌러 다음 화면으로 넘어갑니다.";
const page4 = "만보기 앱의 검색 결과입니다. 설치를 눌러 만보기 앱을 설치해 줍니다.";
const page5 = "설치를 완료했다면, 열기를 눌러 앱을 실행해 줍니다.";
const page6 = "만보기 앱의 메인 화면입니다. 시작 버튼을 눌러 볼게요.";
const page7 = "시작 버튼을 누르면 만보기 앱에 걸음수가 표시됩니다. 이제 다시 중지를 눌러 볼게요.";
const page8 =
    "이번에는 점 세 개 모양의 메뉴 버튼을 눌러 볼게요.";
const page9 =
    "제일 위에 있는 수정 버튼을 눌러 볼게요.";
const page10 =
    "날짜를 수정할 수 있습니다. 취소를 눌러 메인 화면으로 돌아갑니다.";
const page11 = "다음은 공유 버튼을 눌러 볼게요.";
const page12 =
    "블루투스, 인스타그램 등 다양한 SNS로 공유할 수 있습니다. 뒤로가기를 눌러 줄게요.";
const page13 =
    "마지막으로 설정을 눌러 볼게요.";
const page14 =
    "모드, 자동 시작, 테마 등 다양한 설정을 할 수 있습니다. 모두 고생하셨습니다.";

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
    page14
);


const inputPage = [{ page: 3, correctAnswer: "만보기" },
                  

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
    startRateX: 0.011111111111111112, startRateY: 0.2953125, endRateX: 0.21666666666666667, endRateY: 0.4390625
};

const coordinate2 = {
    startRateX: 0.8, startRateY: 0.028125, endRateX: 0.9861111111111112, endRateY: 0.125
};

const coordinate3 = {
    startRateX: 0.11944444444444445, startRateY: 0.04375, endRateX: 0.8888888888888888, endRateY: 0.096875
};

const coordinate4 = {
    startRateX: 0.11944444444444445, startRateY: 0.04375, endRateX: 0.8888888888888888, endRateY: 0.096875
};

const coordinate5 = {
    startRateX: 0.019444444444444445, startRateY: 0.46875, endRateX: 0.9833333333333333, endRateY: 0.5765625
};

const coordinate6 = {
    startRateX: 0.12222222222222222, startRateY: 0.1015625, endRateX: 0.8861111111111111, endRateY: 0.153125
};

const coordinate7 = {
    startRateX: 0.08611111111111111, startRateY: 0.03125, endRateX: 0.9138888888888889, endRateY: 0.109375
};

const coordinate8 = {
    startRateX: 0.025, startRateY: 0.240625, endRateX: 0.9833333333333333, endRateY: 0.34375
};

const coordinate9 = {
    startRateX: 0.14166666666666666, startRateY: 0.23125, endRateX: 0.28888888888888886, endRateY: 0.2875
};

const coordinate10 = {
    startRateX: 0.4666666666666667, startRateY: 0.2875, endRateX: 0.2722222222222222, endRateY: 0.2328125
};

const coordinate11 = {
    startRateX: 0.33611111111111114, startRateY: 0.15625, endRateX: 0.5666666666666667, endRateY: 0.2265625
};

const coordinate12 = {
    startRateX: 0.5638888888888889, startRateY: 0.1625, endRateX: 0.7694444444444445, endRateY: 0.215625
};

const coordinate13 = {
    startRateX: 0.5638888888888889, startRateY: 0.1625, endRateX: 0.7694444444444445, endRateY: 0.215625
};

const coordinate14 = {
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
    coordinate14
);
