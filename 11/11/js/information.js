const pageNum = 13;
const pageName = "11";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "지하철 정보를 편리하게 확인할 수 있는 카카오지하철 앱을 실습해 보도록 하겠습니다. 앱스토어를 실행해 주세요.";
const page2 = "검색창에 카카오지하철을 입력해 줍니다.";
const page3 = "카카오 지하철을 눌러 설치 페이지로 이동합니다.";
const page4 = "설치를 눌러 설치를 진행해 줍니다.";
const page5 = "설치가 완료되었다면, 열기를 눌러 실행해 줍니다.";
const page6 = "카카오지하철의 시작 페이지입니다. 시작하기를 눌러 시작해 줍니다.";
const page7 = "카카오지하철의 홈 화면입니다. 서울역을 눌러 기능을 살펴볼게요.";
const page8 =
    "출발을 누르면 서울역을 출발지로 지정할 수 있습니다.";
const page9 =
    "경유를 누르면 서울역을 경유지로 지정할 수 있습니다.";
const page10 =
    "도착을 누르면 서울역을 도착지로 지정할 수 있습니다.";
const page11 = "이제 상세 버튼을 눌러 상세 정보를 알아볼게요.";
const page12 = "서울역의 상세 정보를 확인할 수 있습니다. 서울역은 1, 4호선과 경의중앙선, 공항 철도가 있고, 자세한 시간도 보입니다. 출구 정보 또한 확인할 수 있습니다. 화면을 아래로 내려볼게요. ";
const page13 = "시설 번호와 전화번호 또한 확인할 수 있습니다. 모두 고생하셨습니다.";


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
    page13
);


const inputPage = [{ page: 1, correctAnswer: "카카오지하철" }];

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
    startRateX: 0.008333333333333333, startRateY: 0.546875, endRateX: 0.23055555555555557, endRateY: 0.6890625
};

const coordinate2 = {
    startRateX: 0.05555555555555555, startRateY: 0.0390625, endRateX: 0.9333333333333333, endRateY: 0.103125
};

const coordinate3 = {
    startRateX: 0.03888888888888889, startRateY: 0.11875, endRateX: 0.7833333333333333, endRateY: 0.178125
};

const coordinate4 = {
    startRateX: 0.058333333333333334, startRateY: 0.390625, endRateX: 0.9444444444444444, endRateY: 0.453125
};

const coordinate5 = {
    startRateX: 0.5055555555555555, startRateY: 0.284375, endRateX: 0.95, endRateY: 0.346875
};

const coordinate6 = {
    startRateX: 0.4027777777777778, startRateY: 0.815625, endRateX: 0.6, endRateY: 0.8703125
};

const coordinate7 = {
    startRateX: 0.42777777777777776, startRateY: 0.378125, endRateX: 0.5694444444444444, endRateY: 0.41875
};

const coordinate8 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate9 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate10 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate11 = {
    startRateX: 0.6333333333333333, startRateY: 0.3265625, endRateX: 0.7333333333333333, endRateY: 0.3875
};

const coordinate12 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate13 = {
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
    coordinate13
);
