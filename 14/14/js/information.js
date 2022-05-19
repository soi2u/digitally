const pageNum = 16;
const pageName = "14";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "생활 속 불편을 신고할 수 있는 안전신문고 앱을 실습해 보도록 하겠습니다. 앱스토어를 실행해 주세요.";
const page2 = "앱스토어 검색 버튼을 눌러 안전신문고를 검색해 주세요.";
const page3 = "안전신문고를 눌러 줍니다.";
const page4 = "설치 버튼을 눌러 안전신문고 앱 설치를 진행합니다.";
const page5 = "설치가 완료되었다면, 열기를 눌러 안전신문고 앱을 실행합니다.";
const page6 = "안전신문고의 공지를 읽고, 예 버튼을 눌러 주세요.";
const page7 = "앱 접근 권한 안내를 읽고, 확인 버튼을 눌러 주세요.";
const page8 =
    "안전신문고에 위치 정보를 허용하기 위해 허용 버튼을 눌러 주세요.";
const page9 =
    "안전신문고에 전화 기능을 허용하기 위해 허용 버튼을 눌러 주세요.";
const page10 =
    "안전신문고에 미디어 기능을 허용하기 위해 허용 버튼을 눌러 주세요.";
const page11 = "안전신문고에 촬영 기능을 허용하기 위해 허용 버튼을 눌러 주세요.";
const page12 = "안전신문고에 녹음 기능을 허용하기 위해 허용 버튼을 눌러 주세요.";
const page13 = "안전신문고의 첫 화면에서는 안전 신고를 할 수 있습니다. 생활 불편 신고를 눌러 다음으로 넘어가 볼게요.";
const page14 = "생활불편신고는 생활 환경을 방해하는 불편을 신고할 수 있습니다. 불법 주정차 신고를 눌러 다음으로 넘어가 줄게요.";
const page15 = "불법 주정차 신고는 주차 금지 지역에 불법으로 주정차된 차량을 신고할 수 있습니다. 이제 코로나 19 신고를 눌러 볼게요.";
const page16 = "코로나 19 신고에서는 코로나 방역 수칙 위반을 신고할 수 있습니다. 모두 고생하셨습니다.";


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
);


const inputPage = [{ page: 1, correctAnswer: "안전신문고" }];

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
    startRateX: 0.20555555555555555, startRateY: 0.6796875, endRateX: 0, endRateY: 0.5484375
};

const coordinate2 = {
    startRateX: 0.058333333333333334, startRateY: 0.0359375, endRateX: 0.9416666666666667, endRateY: 0.109375
};

const coordinate3 = {
    startRateX: 0.013888888888888888, startRateY: 0.1140625, endRateX: 0.6583333333333333, endRateY: 0.18125
};

const coordinate4 = {
    startRateX: 0.40555555555555556, startRateY: 0.2875, endRateX: 0.5888888888888889, endRateY: 0.3359375
};

const coordinate5 = {
    startRateX: 0.7944444444444444, startRateY: 0.3328125, endRateX: 0.6472222222222223, endRateY: 0.278125
};

const coordinate6 = {
    startRateX: 0.4166666666666667, startRateY: 0.7015625, endRateX: 0.5888888888888889, endRateY: 0.7453125
};

const coordinate7 = {
    startRateX: 0.4166666666666667, startRateY: 0.7546875, endRateX: 0.5944444444444444, endRateY: 0.8140625
};

const coordinate8 = {
    startRateX: 0.6861111111111111, startRateY: 0.5359375, endRateX: 0.7833333333333333, endRateY: 0.58125
};

const coordinate9 = {
    startRateX: 0.6861111111111111, startRateY: 0.5359375, endRateX: 0.7833333333333333, endRateY: 0.58125
};

const coordinate10 = {
    startRateX: 0.6861111111111111, startRateY: 0.5359375, endRateX: 0.7833333333333333, endRateY: 0.58125
};

const coordinate11 = {
    startRateX: 0.6861111111111111, startRateY: 0.5359375, endRateX: 0.7833333333333333, endRateY: 0.58125
};

const coordinate12 = {
    startRateX: 0.6861111111111111, startRateY: 0.5359375, endRateX: 0.7833333333333333, endRateY: 0.58125
};

const coordinate13 = {
    startRateX: 0.25833333333333336, startRateY: 0.1015625, endRateX: 0.49722222222222223, endRateY: 0.165625
};

const coordinate14 = {
    startRateX: 0.7444444444444445, startRateY: 0.16875, endRateX: 0.49722222222222223, endRateY: 0.1046875
};

const coordinate15 = {
    startRateX: 0.7583333333333333, startRateY: 0.1015625, endRateX: 0.9861111111111112, endRateY: 0.16875
};

const coordinate16 = {
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
    coordinate16
);
