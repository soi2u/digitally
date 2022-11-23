const pageNum = 12;
const pageName = "37";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "안녕하세요. 이번 시간에는 네이버 앱을 사용한 정보검색을 실습해보겠습니다. 이제, 휴대폰에서 네이버 앱을 열어주세요.";
const page2 = "먼저, 디지털배움터와 관련된 뉴스를 검색해보고, 최근 3개월간 보도된 뉴스들만 모아서 보는 방법과, 최신 뉴스가 먼저 나오도록 검색하는 방법을 실습하겠습니다. 검색어를 입력할 검색창 부분을 클릭해주세요.";
const page3 = "검색창에 디지털배움터를 입력해 주세요."
const page4 = "이제 돋보기 모양을 눌러 검색하거나, 디지털배움터를 눌러 이동해 주세요.";
const page5 = "검색결과 페이지입니다. 검색창 아래에 점3개로 된 버튼을 클릭하면 검색옵션이 열립니다. 클릭해 보세요.";
const page6 = "검색결과에서 뉴스만 보고싶다면, 검색 옵션에서 뉴스를 클릭해주세요.";
const page7 = "이제, 검색결과에서 디지털배움터와 관련된 뉴스만 보입니다. 검색 옵션 기능을 활용하여, 최근 3개월간 보도 된 뉴스만 보이도록 하겠습니다. 옵션 버튼을 클릭해주세요.";
const page8 = "옵션창이 열렸습니다. 기간을 3개월로 클릭해주세요. 이제, 3개월간 보도 된 뉴스만 검색결과에 노출됩니다.";
const page9 = "설정을 마치셨다면, 옵션창을 닫아 주세요.";
const page10 = "이제 3개월 동안의 기사를 확인할 수 있습니다. 왼쪽 상단을 보면, 지금 뉴스는 관련도순으로 정렬되어 있습니다. 최신순을 눌러 최신 뉴스를 확인해 볼게요.";
const page11 = "이제 오래된순을 눌러 오래된 기사도 확인해 볼게요.";
const page12 = "뉴스가 오래된 순서로 보입니다. 이렇게 옵션을 이용해 편리하게 네이버 뉴스를 검색해 보세요. 모두 고생하셨습니다.";



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


const inputPage = [{ page: 2, correctAnswer: "디지털배움터" }];

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
    startRateX: 0.5944444444444444, startRateY: 0.653125, endRateX: 0.8111111111111111, endRateY: 0.8359375
};

const coordinate2 = {
    startRateX: 0.019444444444444445, startRateY: 0.21875, endRateX: 0.9833333333333333, endRateY: 0.3328125
};

const coordinate3 = {
    startRateX: 0.11388888888888889, startRateY: 0.0328125, endRateX: 0.8666666666666667, endRateY: 0.1125
};

const coordinate4 = {
    startRateX: 0.025, startRateY: 0.0359375, endRateX: 0.9833333333333333, endRateY: 0.1796875
};

const coordinate5 = {
    startRateX: 0.8638888888888889, startRateY: 0.1078125, endRateX: 1, endRateY: 0.1921875
};

const coordinate6 = {
    startRateX: 0.7111111111111111, startRateY: 0.16875, endRateX: 1, endRateY: 0.228125
};

const coordinate7 = {
    startRateX: 0.7972222222222223, startRateY: 0.1859375, endRateX: 1, endRateY: 0.25625
};

const coordinate8 = {
    startRateX: 0.1388888888888889, startRateY: 0.3046875, endRateX: 0.30833333333333335, endRateY: 0.3484375
};

const coordinate9 = {
    startRateX: 0.8638888888888889, startRateY: 0.1984375, endRateX: 1, endRateY: 0.2578125
};

const coordinate10 = {
    startRateX: 0.20277777777777778, startRateY: 0.1921875, endRateX: 0.4361111111111111, endRateY: 0.259375
};

const coordinate11 = {
    startRateX: 0.39166666666666666, startRateY: 0.1953125, endRateX: 0.8083333333333333, endRateY: 0.2578125
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
