const pageNum = 13;
const pageName = "18";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번에는 네이버에서 검색을 해 보도록 하겠습니다. 먼저, 화면에서 네이버 앱을 실행해 주세요.";
const page2 = "네이버 앱 화면입니다. 이번 실습에서는 날씨는 검색해 보도록 할게요. 검색창을 눌러 줍니다.";
const page3 = "검색창에  날씨를 입력해 주세요.";
const page4 = "날씨를 검색하기 위해서, 검색 결과의 날씨를 클릭해 줍니다.";
const page5 = "네이버에서 날씨를 검색한 결과입니다. 다양한 정보가 있는 것을 확인할 수 있습니다. 이제, 오른쪽 상단의 점 세 개를 눌러 볼게요.";
const page6 = "통합 검색, view, 이미지, 지식인, 뉴스 등 정보를 다양하게 나누어 볼 수 있습니다. 이번에는 뉴스를 눌러 볼게요. ";
const page7 = "날씨의 뉴스 검색 결과입니다. 날씨에 대한 정보 중 뉴스에 관한 정보만 확인할 수 있습니다. 이제, 최신순을 눌러 볼게요.";
const page8 =
    "날씨에 대한 기사를 최신 순서로 확인할 수 있습니다. 이번에는 오래된 순을 눌러 볼게요.";
const page9 =
    "날씨에 대한 기사를 오래된 순서로 확인할 수 있습니다. 더욱 자세히 보기 위해, 옵션을 눌러 볼게요.";
const page10 =
    "기간, 유형, 언론사 등 다양하게 확인할 수 있습니다. 상단의 초록색 N 모양을 눌러 다시 네이버 앱 초기 화면으로 돌아가 보겠습니다.";
const page11 = "네이버 앱 메인 화면으로 돌아왔습니다. 이번에는 원하지 않는 정보를 삭제해 보겠습니다. 검색창을 눌러 줍니다.";
const page12 = "날씨에서 내일 날씨를 제외하고 확인하고 싶을 때, 날씨 뒤에 -내일을 넣어 검색해 주세요.";
const page13 = "날씨 -내일에 대한 검색 결과입니다. 내일이 들어간 정보를 제외하고 날씨를 확인할 수 있습니다. 모두 고생하셨습니다.";


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


const inputPage = [{ page: 2, correctAnswer: "날씨" },
                  { page: 11, correctAnswer: "날씨-내일" }];

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
    startRateX: 0.2111111111111111, startRateY: 0.5390625, endRateX: 0.4083333333333333, endRateY: 0.6921875
};

const coordinate2 = {
    startRateX: 0.058333333333333334, startRateY: 0.2359375, endRateX: 0.9416666666666667, endRateY: 0.3125
};

const coordinate3 = {
    startRateX: 0.11944444444444445, startRateY: 0.04375, endRateX: 0.25555555555555554, endRateY: 0.1
};

const coordinate4 = {
    startRateX: 0.019444444444444445, startRateY: 0.125, endRateX: 0.25833333333333336, endRateY: 0.175
};

const coordinate5 = {
    startRateX: 0.8777777777777778, startRateY: 0.115625, endRateX: 0.9972222222222222, endRateY: 0.1703125
};

const coordinate6 = {
    startRateX: 0.7305555555555555, startRateY: 0.1734375, endRateX: 0.8527777777777777, endRateY: 0.2171875
};

const coordinate7 = {
    startRateX: 0.21666666666666667, startRateY: 0.309375, endRateX: 0.4083333333333333, endRateY: 0.3515625
};

const coordinate8 = {
    startRateX: 0.6361111111111111, startRateY: 0.3546875, endRateX: 0.4, endRateY: 0.3078125
};

const coordinate9 = {
    startRateX: 0.8111111111111111, startRateY: 0.3125, endRateX: 0.9944444444444445, endRateY: 0.353125
};

const coordinate10 = {
    startRateX: 0.016666666666666666, startRateY: 0.0484375, endRateX: 0.13333333333333333, endRateY: 0.096875
};

const coordinate11 = {
    startRateX: 0.06944444444444445, startRateY: 0.2484375, endRateX: 0.8416666666666667, endRateY: 0.30625
};

const coordinate12 = {
    startRateX: 0.1111111111111111, startRateY: 0.0375, endRateX: 0.9888888888888889, endRateY: 0.10625
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
