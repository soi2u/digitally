const pageNum = 10;
const pageName = "1";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`./image/${j}.jpg`);
    audio = new Audio(`./audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "내 손안의 스마트폰 세상, 휴대폰 기본설정 실습에 오신 여러분, 환영합니다. 오늘은, 휴대폰 소리 및, 진동 설정을, 해보겠습니다. 휴대폰마다 구성이 다를수 있다는 점을, 참고해주세요. 화면을 누르면, 다음 화면으로, 넘어가게 됩니다. 화면을 눌러서, 다음 화면으로 넘어가주세요.";
const page2 = "먼저, 휴대폰에서, 톱니바퀴 모양의, 설정을 찾은 다음에, 눌러서 실행해주세요.";
const page3 = "모든 휴대폰은, 기본적으로 설정을 할수 있습니다. 휴대폰의 기종에 따라, 기본적으로 제공되는, 기능과 구성이, 차이가 있을 수 있습니다. 다음 화면으로, 넘어가주세요.";
const page4 = "소리 설정을 해볼까요? 소리 및 진동을 눌러주세요.";
const page5 = "저는, 진동으로 설정이 되어있습니다. 소리를 한 번 눌러볼까요?";
const page6 = "소리에 파란색 표시가 되면서, 이제, 진동이 아니라, 소리가 들리게 됩니다.소리와 진동을, 같이 사용하고 싶으시다면, 표시된 부분을 눌러주세요.";
const page7 = "마찬가지로, 파란색으로 켜짐 표시가 되었습니다. 이제, 휴대폰 상단을 살짝 눌러서, 아래쪽으로 내려볼까요?";
const page8 = "이부분은, 설정을 빠르게 변경할수 있는, 퀵패널이라고 합니다. 퀵패널에 대해서는, 다음 시간에 자세하게 실습해보겠습니다. 여기에서도, 간편하게 소리 및 진동설정을 할수 있습니다.";
const page9 = "이 표시를 누르면, 소리 및 진동, 그리고 무음 설정까지 간편하게 진행할수 있습니다. 유용한 기능이니, 참고해주세요.";
const page10 = "이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";


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
    page10
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
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate3 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate4 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate5 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate6 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate7 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate8 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate9 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate10 = {
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
    coordinate10
);
