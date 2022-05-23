const pageNum = 14;
const pageName = "31";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 카카오톡의 무료통화기능인, 보이스톡과 페이스톡을 직접 사용해보도록 하겠습니다.와이파이가 켜져있는 것을, 확인하신 후에, 다음 화면으로, 넘어가주세요.";
const page2 = "휴대폰에서, 카카오톡을 찾은 다음, 눌러서 실행해주세요.";
const page3 = "통화하고 싶은, 친구의 프로필을, 눌러주세요.";
const page4 = "통화하기를 눌러 주세요.";
const page5 = "보이스톡을 눌러 주세요.";
const page6 = "카카오톡 통화의 권한을 허용하기 위해 허용을 눌러 줍니다.";
const page7 = "이제, 상대와 보이스톡을 할 수 있습니다. 빨간색 종료 버튼을 눌러 전 화면으로 돌아갑니다.";
const page8 = "다시 한번 통화하기를 눌러 볼게요.";
const page9 = "이번에는 페이스톡을 눌러 줍니다.";
const page10 = "페이스톡을 위해 허용을 눌러 촬영 권한을 허용해 줄게요.";
const page11 = "영상 통화로 연결이 됩니다. ";
const page12 = "";
const page13 = "";
const page14 = "";


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
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate2 = {
    startRateX: 0.016666666666666666, startRateY: 0.159375, endRateX: 0.21944444444444444, endRateY: 0.3203125
};

const coordinate3 = {
    startRateX: 0.019444444444444445, startRateY: 0.6953125, endRateX: 0.6944444444444444, endRateY: 0.778125
};

const coordinate4 = {
    startRateX: 0.5305555555555556, startRateY: 0.7828125, endRateX: 0.7722222222222223, endRateY: 0.93125
};

const coordinate5 = {
    startRateX: 0.18888888888888888, startRateY: 0.784375, endRateX: 0.5333333333333333, endRateY: 0.9375
};

const coordinate6 = {
    startRateX: 0.6305555555555555, startRateY: 0.5046875, endRateX: 0.8472222222222222, endRateY: 0.5859375
};

const coordinate7 = {
    startRateX: 0.34444444444444444, startRateY: 0.7703125, endRateX: 0.6694444444444444, endRateY: 0.9171875
};

const coordinate8 = {
    startRateX: 0.5166666666666667, startRateY: 0.7828125, endRateX: 0.7583333333333333, endRateY: 0.9328125
};

const coordinate9 = {
    startRateX: 0.49166666666666664, startRateY: 0.7796875, endRateX: 0.7944444444444444, endRateY: 0.934375
};

const coordinate10 = {
    startRateX: 0.8472222222222222, startRateY: 0.5859375, endRateX: 0.6277777777777778, endRateY: 0.5125
};

const coordinate11 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
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
