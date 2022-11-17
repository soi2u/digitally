const pageNum = 18;
const pageName = "10";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "버스를 더욱 편리하게 이용할 수 있도록 도와주는 카카오버스 앱을 실습해 보겠습니다. 먼저, 앱스토어를 실행해 주세요.";
const page2 = "앱스토어 검색창에 카카오버스를 입력하고 엔터를 눌러주세요.";
const page3 = "카카오버스를 눌러 설치 페이지로 이동합니다.";
const page4 = "설치 버튼을 눌러 카카오버스 설치를 진행합니다.";
const page5 = "설치가 완료되었다면, 열기를 눌러 실행해 줍니다.";
const page6 = "카카오버스 앱의 시작 페이지입니다. 시작하기 버튼을 눌러 주세요.";
const page7 = "카카오버스 홈 화면입니다. 정보를 얻기 위해 버스를 검색해 볼게요. 검색창을 눌러 줍니다.";
const page8 =
    "341 버스를 알아보도록 하겠습니다. 검색창에 341을 입력합니다.";
const page9 =
    "341 버스를 클릭합니다.";
const page10 =
    "341 버스의 실시간 정보가 나옵니다. 정보 버튼을 눌러 더욱 자세하게 알아보도록 할게요.";
const page11 = "341 버스의 운행 시간, 지역, 배차 간격 등 자세한 정보가 나옵니다. 뒤로가기 버튼을 눌러 돌아갈게요.";
const page12 = "이번에는 지도 버튼을 눌러 볼게요.";
const page13 = "341 버스가 운행하는 경로를 확인할 수 있습니다. 뒤로가기 버튼을 눌러 홈으로 이동합니다.";
const page14 = "별 모양 버튼을 누르면 즐겨찾기로 지정됩니다. 별 모양 버튼을 눌러 주세요.";
const page15 = "341 버스가 즐겨찾기로 지정되었습니다. 내 주변 정류장을 누르면 내 위치와 가까이 있는 341 버스 정류장을 알 수 있습니다.";
const page16 = "위치 정보를 제공하기 위해 승인을 누릅니다.";
const page17 = "카카오버스가 위치 정보를 확인할 수 있도록 허용을 눌러 줍니다.";
const page18 = "위치가 지정되고, 주변 정류장으로 변경되었습니다. 모두 고생하셨습니다.";

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
    page16,
    page17,
    page18
);


const inputPage = [{ page: 1, correctAnswer: "카카오버스" },
                  { page: 7, correctAnswer: "341" }];

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
    startRateX: 0.22777777777777777, startRateY: 0.6578125, endRateX: 0.044444444444444446, endRateY: 0.5546875
};

const coordinate2 = {
    startRateX: 0.05277777777777778, startRateY: 0.040625, endRateX: 0.9444444444444444, endRateY: 0.1015625
};

const coordinate3 = {
    startRateX: 0.002777777777777778, startRateY: 0.1109375, endRateX: 0.9972222222222222, endRateY: 0.1859375
};

const coordinate4 = {
    startRateX: 0.058333333333333334, startRateY: 0.3546875, endRateX: 0.9388888888888889, endRateY: 0.4046875
};

const coordinate5 = {
    startRateX: 0.6527777777777778, startRateY: 0.25, endRateX: 0.7944444444444444, endRateY: 0.296875
};

const coordinate6 = {
    startRateX: 0.39166666666666666, startRateY: 0.8109375, endRateX: 0.6166666666666667, endRateY: 0.871875
};

const coordinate7 = {
    startRateX: 0.1361111111111111, startRateY: 0.0421875, endRateX: 0.5222222222222223, endRateY: 0.090625
};

const coordinate8 = {
    startRateX: 0.1, startRateY: 0.0421875, endRateX: 0.33611111111111114, endRateY: 0.0921875
};

const coordinate9 = {
    startRateX: 0.005555555555555556, startRateY: 0.203125, endRateX: 0.9833333333333333, endRateY: 0.2890625
};

const coordinate10 = {
    startRateX: 0.20833333333333334, startRateY: 0.215625, endRateX: 0.4111111111111111, endRateY: 0.2703125
};

const coordinate11 = {
    startRateX: 0.08333333333333333, startRateY: 0.0859375, endRateX: 0.019444444444444445, endRateY: 0.0453125
};

const coordinate12 = {
    startRateX: 0.46111111111111114, startRateY: 0.2171875, endRateX: 0.6527777777777778, endRateY: 0.2703125
};

const coordinate13 = {
    startRateX: 0.08888888888888889, startRateY: 0.0890625, endRateX: 0.011111111111111112, endRateY: 0.0375
};

const coordinate14 = {
    startRateX: 0.7, startRateY: 0.2140625, endRateX: 0.7861111111111111, endRateY: 0.2671875
};

const coordinate15 = {
    startRateX: 0.7222222222222222, startRateY: 0.315625, endRateX: 0.9666666666666667, endRateY: 0.3578125
};

const coordinate16 = {
    startRateX: 0.7638888888888888, startRateY: 0.515625, endRateX: 0.875, endRateY: 0.553125
};

const coordinate17 = {
    startRateX: 0.6777777777777778, startRateY: 0.5359375, endRateX: 0.7861111111111111, endRateY: 0.5859375
};

const coordinate18 = {
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
    coordinate16,
    coordinate17,
    coordinate18
);
