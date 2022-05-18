const pageNum = 12;
const pageName = "36";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번에는 네이버 앱을 통해 여러 가지 날씨 정보를 알아보겠습니다. 먼저, 네이버 앱을 눌러 실행합니다.";
const page2 = "네이버 앱에 접속했다면, 홈 화면에서 메뉴 버튼을 찾아 눌러 줍니다.";
const page3 = "메뉴에서 날씨 버튼을 눌러 주세요."
const page4 = "이제 날씨 정보를 확인할 수 있습니다. 더 정확한 결과를 위해, GPS 버튼을 클릭해서 위치를 설정해 줍니다. GPS는 내 위치를 스마트폰 스스로 알아낼 수 있게 해 줍니다.";
const page5 = "그러면, 이렇게 현재 날씨와 미세먼지, 자외선, 강수 등 다양한 정보를 한눈에 확인할 수 있습니다. 화면을 내려 볼게요.";
const page6 = "화면을 내리면 주간 예보도 확인할 수 있습니다. 언제 비가 오는지, 날씨는 어떤지도 확인할 수 있습니다. 이번에는, 다른 지역의 날씨를 알아볼까요? 예를 들어, 부산 해운대 여행을 한다고 가정했을 때, 날씨를 알아보기 위해 검색해 봅시다! 돋보기 모양의 검색 버튼을 눌러 주세요.";
const page7 = "검색창에 날씨를 확인하고 싶은 곳을 적어 줍니다. 이번 실습에서는 부산이라고 입력하고 엔터를 눌러주세요.";
const page8 = "그러면, 이렇게 부산의 지역들이 나옵니다. 해운대를 확인할 예정이니, 해운대구를 눌러 줍니다.";
const page9 = "해운대로 지역이 설정이 되고, 해운대 지역의 날씨 정보를 확인할 수 있습니다. 이제 화면을 내려 볼게요.";
const page10 = "화면을 내리면 시간대별 날씨, 강수 정보, 주간 예보 등 다양한 날씨 정보를 확인할 수 있습니다. 미세먼지 정보도 확인해 볼게요. 미세먼지 탭을 눌러 줍니다.";
const page11 = "원하는 지역의 미세먼지 현황을 알 수 있습니다. 나갈 때 참고하면 좋겠네요! 마지막으로, 뉴스 탭을 눌러 보도록 하겠습니다.";
const page12 = "날씨에 대한 뉴스들을 확인할 수 있습니다. 외출, 또는 여행 계획을 짤 때 활용할 수 있습니다. 모두 고생하셨습니다.";



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
    page12
);


const inputPage = [{ page: 6, correctAnswer: "부산" }];

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
    startRateX: 0.6027777777777777, startRateY: 0.659375, endRateX: 0.7888888888888889, endRateY: 0.8296875
};

const coordinate2 = {
    startRateX: 0.019444444444444445, startRateY: 0.03125, endRateX: 0.14166666666666666, endRateY: 0.1171875
};

const coordinate3 = {
    startRateX: 0.5194444444444445, startRateY: 0.7296875, endRateX: 0.002777777777777778, endRateY: 0.6578125
};

const coordinate4 = {
    startRateX: 0.26944444444444443, startRateY: 0.0296875, endRateX: 0.7305555555555555, endRateY: 0.109375
};

const coordinate5 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate6 = {
    startRateX: 0.9166666666666666, startRateY: 0.0796875, endRateX: 0.9083333333333333, endRateY: 0.0734375
};

const coordinate7 = {
    startRateX: 0.05, startRateY: 0.159375, endRateX: 0.9527777777777777, endRateY: 0.240625
};

const coordinate8 = {
    startRateX: 0.7361111111111112, startRateY: 0.4203125, endRateX: 0.7361111111111112, endRateY: 0.421875
};

const coordinate9 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate10 = {
    startRateX: 0.45555555555555555, startRateY: 0.03125, endRateX: 0.675, endRateY: 0.09375
};

const coordinate11 = {
    startRateX: 0.8388888888888889, startRateY: 0.09375, endRateX: 0.9972222222222222, endRateY: 0.15625
};

const coordinate12 = {
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
    coordinate12
);
