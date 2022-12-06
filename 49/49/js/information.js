const pageNum = 8;
const pageName = "49";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "오늘은 우리WON뱅킹을 큰 글씨로 이용하는 방법에 대해 실습해 보도록 하겠습니다. 먼저, 우리WON뱅킹 앱을 눌러 실행해 줍니다.";
const page2 = "마이 메뉴를 눌러 줍니다.";
const page3 = "톱니바퀴 모양의 환경 설정 버튼을 눌러 줍니다.";
const page4 = "큰 글씨 설정 버튼을 눌러 켜짐 상태로 돌려 줍니다.";
const page5 = "확인을 눌러 큰 글씨 설정을 완료해 줍니다.";
const page6 = "큰 글씨 설정이 완료되었습니다. 뒤로가기를 눌러 적용이 되었는지 확인해 볼게요.";
const page7 = "큰 글씨 모드 적용이 완료되었습니다. 모두 고생하셨습니다.";

pageDescArray.push(
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7
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
    startRateX: 0.5194444444444445, startRateY: 0.16142270861833105, endRateX: 0.24166666666666667, endRateY: 0.0027359781121751026
};

const coordinate2 = {
    startRateX: 0.002777777777777778, startRateY: 0.3064295485636115, endRateX: 0.26666666666666666, endRateY: 0.47058823529411764
};

const coordinate3 = {
    startRateX: 0.7361111111111112, startRateY: 0, endRateX: 0.8833333333333333, endRateY: 0.07934336525307797
};

const coordinate4 = {
    startRateX: 0, startRateY: 0.387140902872777, endRateX: 0.9972222222222222, endRateY: 0.506155950752394
};

const coordinate5 = {
    startRateX: 0.08055555555555556, startRateY: 0.6114911080711354, endRateX: 0.9194444444444444, endRateY: 0.6908344733242134
};

const coordinate6 = {
    startRateX: 0.002777777777777778, startRateY: 0.07523939808481532, endRateX: 0.17777777777777778, endRateY: 0
};

const coordinate7 = {
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
    coordinate7
);
