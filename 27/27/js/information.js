const pageNum = 15;
const pageName = "27";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 카카오톡의 이모티콘과, 테마를 함께 살펴보겠습니다. 휴대폰에서, 카카오톡을 찾은 다음에, 눌러서 실행해주세요.";
const page2 = "표시된 부분을, 눌러주세요.";
const page3 = "메세지를 보낼때, 이모티콘을 보내면, 더 즐겁게, 메세지를 주고받을수 있습니다.이모티콘을 눌러주세요.";
const page4 = "이모티콘을 결제하면, 이모티콘을 사용할수 있습니다. 결제는, 신중해야한다는 점을, 기억해주세요.이제, 제가 구매했던 이모티콘을, 함께 사용해볼까요? 닫기를 눌러주세요.";
const page5 = "채팅창을 선택해서, 이모티콘을 보내보겠습니다. 채팅창을, 눌러주세요.";
const page6 = "이모티콘 표시를 누르면, 이모티콘을 선택할수 있습니다.";
const page7 = "이모티콘을, 선택해볼까요?";
const page8 = "종이비행기 표시를 눌러서, 이모티콘을 전송해보겠습니다.";
const page9 = "이모티콘이, 전송되었습니다. 이제, 뒤로가기를 눌러서, 채팅창에는 어떻게 보이는지, 확인해보겠습니다.";
const page10 = "채팅창에, 전송된 이모티콘이, 보이고 있습니다. 이제, 마지막으로, 카카오톡 테마를, 살펴볼까요? 표시된 부분을, 눌러주세요.";
const page11 = "이번에는, 톱니바퀴 표시를, 눌러볼까요?";
const page12 = "테마를 눌러주세요.";
const page13 = "이렇게, 여러가지 테마를 사용해서, 휴대폰을 꾸밀수 있습니다.";
const page14 = "현재 여러분의 테마도, 확인할수 있으니, 참고해주세요.";
const page15 = "이제, 카카오톡을 사용하실때, 이모티콘과 테마변경 기능을, 활용해보세요.이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";


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
    page15
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
    startRateX: 0.20277777777777778, startRateY: 0.303125, endRateX: 0.022222222222222223, endRateY: 0.1671875
};

const coordinate2 = {
    startRateX: 0.7972222222222223, startRateY: 0.8703125, endRateX: 0.9888888888888889, endRateY: 0.91875
};

const coordinate3 = {
    startRateX: 0.5388888888888889, startRateY: 0.496875, endRateX: 0.7138888888888889, endRateY: 0.5796875
};

const coordinate4 = {
    startRateX: 0.8916666666666667, startRateY: 0.0390625, endRateX: 0.9722222222222222, endRateY: 0.0796875
};

const coordinate5 = {
    startRateX: 0.022222222222222223, startRateY: 0.2203125, endRateX: 0.5111111111111111, endRateY: 0.3078125
};

const coordinate6 = {
    startRateX: 0.8, startRateY: 0.8796875, endRateX: 0.8861111111111111, endRateY: 0.9234375
};

const coordinate7 = {
    startRateX: 0.03333333333333333, startRateY: 0.625, endRateX: 0.9694444444444444, endRateY: 0.9140625
};

const coordinate8 = {
    startRateX: 0.8888888888888888, startRateY: 0.4890625, endRateX: 0.9888888888888889, endRateY: 0.5390625
};

const coordinate9 = {
    startRateX: 0.025, startRateY: 0.0453125, endRateX: 0.11388888888888889, endRateY: 0.09375
};

const coordinate10 = {
    startRateX: 0.8305555555555556, startRateY: 0.875, endRateX: 0.9527777777777777, endRateY: 0.921875
};

const coordinate11 = {
    startRateX: 0.8916666666666667, startRateY: 0.04375, endRateX: 0.975, endRateY: 0.0953125
};

const coordinate12 = {
    startRateX: 0.027777777777777776, startRateY: 0.821875, endRateX: 0.31666666666666665, endRateY: 0.903125
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

const coordinate15 = {
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
    coordinate15
);
