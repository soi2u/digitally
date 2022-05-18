const pageNum = 13;
const pageName = "1";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "편하게 길을 찾고 교통 정보를 알아볼 수 있는 네이버 지도 설치를 실습해 보도록 하겠습니다. 먼저, 구글 앱스토어에 접속해 줍니다.";
const page2 = "구글 앱스토어에 접속했다면, 검색 버튼을 눌러 줍니다.";
const page3 = "검색창에 네이버지도를 입력합니다.";
const page4 = "네이버 지도를 설치합니다.";
const page5 = "설치가 완료되었다면, 열기를 눌러 네이버 지도를 실행해 줍니다.";
const page6 = "네이버 지도 앱을 처음 설치했을 때 보이는 안내 페이지입니다. 화면을 넘겨 넘어가 주세요.";
const page7 = "주행 정보 안내 페이지도 화면을 넘겨 넘어가 주세요.";
const page8 =
    "즐겨찾기 기능에 대한 안내 페이지입니다. 이제 시작하기 버튼을 눌러 네이버 지도 앱을 시작해 줍니다.";
const page9 =
    "네이버 지도 앱에 위치 정보를 공유하기 위해 허용 버튼을 눌러 주세요.";
const page10 =
    "위치 정보 공유를 위해서는 사용자의 동의가 필요합니다. 확인을 눌러 동의 화면으로 넘어가 주세요.";
const page11 = "네이버 지도의 위치 정보 사용을 위해 동의 버튼을 눌러 주세요.";
const page12 =
    "네이버 지도 앱에서 공지 또는 이벤트 정보 알림을 받을 수 있는 권한 허용 동의입니다. 이번 실습에서는 아니오를 누르고 넘어가도록 하겠습니다.";
const page13 =
    "이제 네이버 지도의 설치 및 권한 동의가 완료되었습니다. 모두 고생하셨습니다.";

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
    startRateX: 0.7944444444444444, startRateY: 0.6625, endRateX: 0.9888888888888889, endRateY: 0.821875
};

const coordinate2 = {
    startRateX: 0.9472222222222222, startRateY: 0.1, endRateX: 0.06666666666666667, endRateY: 0.04375
};

const coordinate3 = {
    startRateX: 0.9861111111111112, startRateY: 0.1, endRateX: 0.022222222222222223, endRateY: 0.0390625
};

const coordinate4 = {
    startRateX: 0.7638888888888888, startRateY: 0.125, endRateX: 0.9722222222222222, endRateY: 0.2046875
};

const coordinate5 = {
    startRateX: 0.7638888888888888, startRateY: 0.125, endRateX: 0.9722222222222222, endRateY: 0.2046875
};

const coordinate6 = {
    startRateX: 0.9027777777777778, startRateY: 0.0890625, endRateX: 0.9694444444444444, endRateY: 0.0453125
};

const coordinate7 = {
    startRateX: 0.9027777777777778, startRateY: 0.0890625, endRateX: 0.9694444444444444, endRateY: 0.0453125
};

const coordinate8 = {
    startRateX: 0.28888888888888886, startRateY: 0.8578125, endRateX: 0.7027777777777777, endRateY: 0.934375
};

const coordinate9 = {
    startRateX: 0.6722222222222223, startRateY: 0.540625, endRateX: 0.7972222222222223, endRateY: 0.5859375
};

const coordinate10 = {
    startRateX: 0.7166666666666667, startRateY: 0.5484375, endRateX: 0.8583333333333333, endRateY: 0.5875
};

const coordinate11 = {
    startRateX: 0.55, startRateY: 0.5421875, endRateX: 0.9305555555555556, endRateY: 0.609375
};

const coordinate12 = {
    startRateX: 0.5416666666666666, startRateY: 0.53125, endRateX: 0.7666666666666667, endRateY: 0.5859375
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
