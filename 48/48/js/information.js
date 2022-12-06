const pageNum = 11;
const pageName = "48";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "오늘은 편리하게 금융 서비스를 이용할 수 있는 우리은행의 공식 앱 우리WON뱅킹을 실습해 보겠습니다. 먼저, 플레이스토어를 눌러 실행해 주세요.";
const page2 = "앱스토어 검색창을 눌러 줍니다.";
const page3 = "우리은행을 입력해 줍니다.";
const page4 = "우리WON뱅킹을 눌러 설치 화면으로 이동합니다.";
const page5 = "우리WON뱅킹 앱을 설치해 줍니다.";
const page6 = "우리WON뱅킹 앱의 설치가 끝났다면, 열기를 눌러 실행해 줍니다.";
const page7 = "우리WON뱅킹 앱의 실행 화면입니다. 한번 클릭해 넘어가 줍니다.";
const page8 = "우리WON뱅킹 앱에서 기기의 사진, 미디어, 파일 등에 접근할 수 있도록 허용을 눌러 줍니다.";
const page9 = "우리WON뱅킹 앱에서 전화를 걸고 관리하도록 허용을 눌러 줍니다.";
const page10 = "마지막으로 확인을 눌러 우리WON뱅킹 앱 설치를 완료합니다. 모두 고생하셨습니다.";


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


const inputPage = [{ page: 2, correctAnswer: "우리은행" }];

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
    startRateX: 0.005555555555555556, startRateY: 0.01971090670170828, endRateX: 0.2861111111111111, endRateY: 0.19448094612352168
};

const coordinate2 = {
    startRateX: 0.025, startRateY: 0.08278580814717477, endRateX: 0.975, endRateY: 0.01971090670170828
};

const coordinate3 = {
    startRateX: 0.1, startRateY: 0.02102496714848883, endRateX: 0.9972222222222222, endRateY: 0.08804204993429698
};

const coordinate4 = {
    startRateX: 0.008333333333333333, startRateY: 0.08409986859395532, endRateX: 0.9972222222222222, endRateY: 0.15637319316688567
};

const coordinate5 = {
    startRateX: -0.002777777777777778, startRateY: 0.278580814717477, endRateX: 0.9972222222222222, endRateY: 0.3495400788436268
};

const coordinate6 = {
    startRateX: 0.48055555555555557, startRateY: 0.1800262812089356, endRateX: 0.9972222222222222, endRateY: 0.2706964520367937
};

const coordinate7 = {
    startRateX: -0.002777777777777778, startRateY: 0.017082785808147174, endRateX: 0.9972222222222222, endRateY: 0.9592641261498029
};

const coordinate8 = {
    startRateX: 0.044444444444444446, startRateY: 0.5295663600525624, endRateX: 0.9527777777777777, endRateY: 0.607095926412615
};

const coordinate9 = {
    startRateX: 0.041666666666666664, startRateY: 0.5085413929040736, endRateX: 0.9583333333333334, endRateY: 0.5834428383705651
};

const coordinate10 = {
    startRateX: -0.002777777777777778, startRateY: 0.8764783180026281, endRateX: 0.9972222222222222, endRateY: 0.9697766097240473
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
