const pageNum = 12;
const pageName = "29";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 카카오톡으로, 친구와 대화하는 법을, 알려드리겠습니다. 개인 채팅방과, 그룹 채팅방을 어떻게 만드는지, 함께 연습해볼까요? 다음 화면으로, 넘어가주세요.";
const page2 = "휴대폰에서, 카카오톡을 찾은 다음, 눌러서 실행해주세요.";
const page3 = "대화하고자 하는, 친구의 프로필을 눌러주세요.";
const page4 = "1대1 채팅을, 눌러주세요.";
const page5 = "이제, 친구와 대화를 나눌수 있습니다. 메시지를, 보내볼까요? 표시된 부분을 눌러주세요.";
const page6 = "안녕하세요. 라고 입력한 다음, 엔터키를 눌러주세요.";
const page7 = "종이비행기 표시를 눌러서, 카톡을 보내보겠습니다.";
const page8 = "카톡이 발송되었습니다.이제, 친구와 대화를 나눠보세요.이번에는, 그룹 채팅방을 만들어볼까요? 뒤로가기를 눌러주세요.";
const page9 = "오른쪽 위에, 더하기 표시가 있는, 말풍선 표시를 눌러주세요.";
const page10 = "일반채팅을 눌러주세요.";
const page11 = "함께 대화하고 싶은 친구들을 선택한 다음, 오른쪽 위에 확인을 눌러주세요. 그러면, 그룹 채팅방이 만들어지게 됩니다.이제, 여러분의 휴대폰으로, 채팅방을 만들어보세요.";
const page12 = "이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";


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


const inputPage = [{ page: 5, correctAnswer: "안녕하세요" }];

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
    startRateX: 0.013888888888888888, startRateY: 0.15625, endRateX: 0.21388888888888888, endRateY: 0.3265625
};

const coordinate3 = {
    startRateX: 0.005555555555555556, startRateY: 0.1015625, endRateX: 0.6694444444444444, endRateY: 0.2109375
};

const coordinate4 = {
    startRateX: 0.2777777777777778, startRateY: 0.7984375, endRateX: 0.44722222222222224, endRateY: 0.909375
};

const coordinate5 = {
    startRateX: 0.13055555555555556, startRateY: 0.86875, endRateX: 0.7944444444444444, endRateY: 0.93125
};

const coordinate6 = {
    startRateX: 0.10555555555555556, startRateY: 0.48125, endRateX: 0.8027777777777778, endRateY: 0.546875
};

const coordinate7 = {
    startRateX: 0.9, startRateY: 0.8703125, endRateX: 1, endRateY: 0.9359375
};

const coordinate8 = {
    startRateX: 0.019444444444444445, startRateY: 0.03125, endRateX: 0.11944444444444445, endRateY: 0.1015625
};

const coordinate9 = {
    startRateX: 0.6805555555555556, startRateY: 0.0359375, endRateX: 0.7916666666666666, endRateY: 0.0984375
};

const coordinate10 = {
    startRateX: 0.09722222222222222, startRateY: 0.1015625, endRateX: 0.30277777777777776, endRateY: 0.2359375
};

const coordinate11 = {
    startRateX: 0.8361111111111111, startRateY: 0.0375, endRateX: 0.9833333333333333, endRateY: 0.0984375
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
