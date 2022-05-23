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


const inputPage = [{ page: 1, correctAnswer: "만보기" },
                  

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
    startRateX: 0.2361111111111111, startRateY: 0.6859375, endRateX: 0.002777777777777778, endRateY: 0.5390625
};

const coordinate2 = {
    startRateX: 0.15555555555555556, startRateY: 0.040625, endRateX: 0.7194444444444444, endRateY: 0.1046875
};

const coordinate3 = {
    startRateX: 0.008333333333333333, startRateY: 0.18125, endRateX: 0.9972222222222222, endRateY: 0.265625
};

const coordinate4 = {
    startRateX: 0.7722222222222223, startRateY: 0.20625, endRateX: 0.9944444444444445, endRateY: 0.315625
};

const coordinate5 = {
    startRateX: 0.7777777777777778, startRateY: 0.2328125, endRateX: 0.9944444444444445, endRateY: 0.34375
};

const coordinate6 = {
    startRateX: 0.075, startRateY: 0.753125, endRateX: 0.9194444444444444, endRateY: 0.8203125
};

const coordinate7 = {
    startRateX: 0.075, startRateY: 0.753125, endRateX: 0.9194444444444444, endRateY: 0.8203125
};

const coordinate8 = {
    startRateX: 0.8555555555555555, startRateY: 0.03125, endRateX: 1, endRateY: 0.0953125
};

const coordinate9 = {
    startRateX: 0.7555555555555555, startRateY: 0.0890625, endRateX: 0.9916666666666667, endRateY: 0.15625
};

const coordinate10 = {
    startRateX: 0.49444444444444446, startRateY: 0.734375, endRateX: 0.6777777777777778, endRateY: 0.815625
};

const coordinate11 = {
    startRateX: 0.7416666666666667, startRateY: 0.1484375, endRateX: 0.9944444444444445, endRateY: 0.2140625
};

const coordinate12 = {
    startRateX: 0, startRateY: 0.94375, endRateX: 0.38055555555555554, endRateY: 0.9921875
};

const coordinate13 = {
    startRateX: 0.7472222222222222, startRateY: 0.2125, endRateX: 0.9972222222222222, endRateY: 0.2671875
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
