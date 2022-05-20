const pageNum = 14;
const pageName = "13";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "카카오지하철에서 출발지와 도착지를 설정해 편하게 이동할 수 있도록 실습해 보겠습니다. 먼저, 카카오지하철을 실행합니다.";
const page2 = "카카오지하철 시작 화면입니다. 상단의 역명 검색, 즐겨찾기 부분을 눌러 주세요.";
const page3 = "광화문에서 신도림까지 가는 경로를 찾아보도록 하겠습니다. 검색창에 광화문을 입력해 주세요.";
const page4 = "5호선 광화문을 눌러 줍니다.";
const page5 = "출발 버튼을 눌러 광화문을 출발지로 지정합니다.";
const page6 = "이제 신도림역을 도착지로 지정해 보겠습니다. 도착을 눌러 줍니다.";
const page7 = "역명 검색 부분에 신도림을 입력해 줍니다.";
const page8 =
    "1,2호선 신도림을 눌러 줍니다.";
const page9 =
    "광화문에서 신도림까지 이동하는 경로입니다. 자동으로 넘어가니 기다려 주세요.";
const page10 =
    "광화문에서 신도림까지 이동하는 최단 시간 경로가 나옵니다. 최소 환승 버튼도 눌러 볼게요.";
const page11 = "최소 환승 경로입니다. 최단 시간, 최소 환승 경로를 모두 확인했다면 도착 시간을 카카오톡으로 공유해 볼게요. 톡 공유 버튼을 누릅니다.";
const page12 = "오전 10시 12분까지 도착한다고 합니다. 이번 실습에서는 x를 눌러 전 화면으로 돌아가 줄게요.";
const page13 = "마지막으로 오른쪽 하단 지도 버튼을 눌러 줍니다.";
const page14 = "광화문부터 신도림까지의 경로가 지도로 보여집니다. 모두 고생하셨습니다.";


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


const inputPage = [{ page: 2, correctAnswer: "광화문" },
                  { page: 6, correctAnswer: "신도림" }];

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
    startRateX: 0.005555555555555556, startRateY: 0.1609375, endRateX: 0.23055555555555557, endRateY: 0.3140625
};

const coordinate2 = {
    startRateX: 0.11388888888888889, startRateY: 0.0421875, endRateX: 0.5055555555555555, endRateY: 0.0875
};

const coordinate3 = {
    startRateX: 0.11944444444444445, startRateY: 0.0421875, endRateX: 0.9611111111111111, endRateY: 0.0859375
};

const coordinate4 = {
    startRateX: 0.016666666666666666, startRateY: 0.1140625, endRateX: 0.175, endRateY: 0.159375
};

const coordinate5 = {
    startRateX: 0.26666666666666666, startRateY: 0.44375, endRateX: 0.37222222222222223, endRateY: 0.50625
};

const coordinate6 = {
    startRateX: 0.11944444444444445, startRateY: 0.0921875, endRateX: 0.25277777777777777, endRateY: 0.1328125
};

const coordinate7 = {
    startRateX: 0.11666666666666667, startRateY: 0.0453125, endRateX: 0.9638888888888889, endRateY: 0.084375
};

const coordinate8 = {
    startRateX: 0.013888888888888888, startRateY: 0.1109375, endRateX: 0.175, endRateY: 0.1625
};

const coordinate9 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate10 = {
    startRateX: 0.2111111111111111, startRateY: 0.040625, endRateX: 0.425, endRateY: 0.09375
};

const coordinate11 = {
    startRateX: 0.2361111111111111, startRateY: 0.815625, endRateX: 0.4583333333333333, endRateY: 0.8609375
};

const coordinate12 = {
    startRateX: 0.7277777777777777, startRateY: 0.3234375, endRateX: 0.8388888888888889, endRateY: 0.3875
};

const coordinate13 = {
    startRateX: 0.9833333333333333, startRateY: 0.915625, endRateX: 0.8305555555555556, endRateY: 0.840625
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
