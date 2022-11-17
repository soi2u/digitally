const pageNum = 14;
const pageName = "2";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 실습에서는 네이버 지도를 이용해 서울역부터 신도림역까지 길찾기를 해 보도록 하겠습니다. 먼저, 네이버 지도 앱을 눌러 실행해 주세요.";
const page2 = "파란색 길찾기 버튼을 눌러 길찾기를 시작합니다.";
const page3 = "내 위치로 설정된 부분을 눌러 출발지를 새로 입력해 주도록 하겠습니다.";
const page4 = "검색창에 서울역을 검색합니다.";
const page5 = "서울역 1호선을 눌러 출발지를 지정해 줍니다.";
const page6 = "서울역이 출발지로 지정되었습니다. 도착지 입력 버튼을 눌러 줍니다.";
const page7 = "도착지에 신도림역을 검색합니다.";
const page8 =
    "신도림역 1호선을 눌러 도착지를 지정해 줍니다.";
const page9 =
    "서울역 1호선부터 신도림역 1호선까지 가는 길찾기가 설정되었습니다. 먼저, 대중교통을 이용한 경로를 확인할 수 있습니다. 버스를 이용하는 경로를 알아볼게요. 버스 버튼을 눌러 줍니다.";
const page10 =
    "버스 버튼을 누르면 버스만 이용하는 경로를 확인할 수 있습니다. 다음은 지하철을 이용하는 경로를 알아볼게요. 지하철 버튼을 눌러 줍니다.";
const page11 = "지하철 버튼을 누르면 지하철만 이용하는 경로를 확인할 수 있습니다. 다음은 자동차 버튼을 눌러 볼게요.";
const page12 =
    "자동차 모양의 버튼을 누르면 차로 이동하는 경로를 확인할 수 있습니다. 다음은 걷는 사람 모양 버튼을 눌러 볼게요.";
const page13 =
    "걷는 사람 모양의 버튼을 누르면 도보로 이동하는 경로를 확인할 수 있습니다. 마지막으로 자전거 모양을 눌러 볼게요.";
const page14 =
    "자전거 모양의 버튼을 누르면 자전거로 이동할 수 있는 경로를 확인할 수 있습니다. 모두 고생하셨습니다.";

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


const inputPage = [{ page: 3, correctAnswer: "서울역" },
                  { page: 6, correctAnswer: "신도림역" }];

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
