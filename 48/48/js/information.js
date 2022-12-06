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
    startRateX: -0.002777777777777778, startRateY: 0.0027359781121751026, endRateX: 0.2972222222222222, endRateY: 0.19015047879616964
};

const coordinate2 = {
    startRateX: 0.9638888888888889, startRateY: 0.06566347469220246, endRateX: 0.03611111111111111, endRateY: 0.0013679890560875513
};

const coordinate3 = {
    startRateX: 0.10555555555555556, startRateY: 0.0013679890560875513, endRateX: 0.9944444444444445, endRateY: 0.06703146374829001
};

const coordinate4 = {
    startRateX: -0.002777777777777778, startRateY: 0.06566347469220246, endRateX: 0.9972222222222222, endRateY: 0.1491108071135431
};

const coordinate5 = {
    startRateX: 0.002777777777777778, startRateY: 0.2708618331053352, endRateX: 0.9972222222222222, endRateY: 0.3543091655266758
};

const coordinate6 = {
    startRateX: 0.49722222222222223, startRateY: 0.16963064295485636, endRateX: 0.9972222222222222, endRateY: 0.265389876880985
};

const coordinate7 = {
    startRateX: 0.9694444444444444, startRateY: 0.9958960328317373, endRateX: 0.025, endRateY: 0.0027359781121751026
};

const coordinate8 = {
    startRateX: 0.05277777777777778, startRateY: 0.533515731874145, endRateX: 0.95, endRateY: 0.6019151846785226
};

const coordinate9 = {
    startRateX: 0.9527777777777777, startRateY: 0.5868673050615595, endRateX: 0.04722222222222222, endRateY: 0.5129958960328317
};

const coordinate10 = {
    startRateX: 0.011111111111111112, startRateY: 0.8905608755129959, endRateX: 0.9888888888888889, endRateY: 0.9958960328317373
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
