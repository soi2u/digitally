const pageNum = 12;
const pageName = "3";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`./image/${j}.jpg`);
    audio = new Audio(`./audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "내 손안의 스마트폰 세상, 휴대폰 기본설정 실습에 오신 여러분, 환영합니다. 오늘은, 휴대폰 알림설정을, 해보겠습니다. 휴대폰마다 구성이 다를수 있다는 점을, 참고해주세요. 화면을 누르면, 다음 화면으로, 넘어가게 됩니다. 화면을 눌러서, 다음 화면으로 넘어가주세요.";
const page2 = "먼저, 휴대폰에서, 톱니바퀴 모양의, 설정을 찾은 다음에, 눌러서 실행해주세요";
const page3 = "알림을 눌러주세요.";
const page4 = "이제, 휴대폰의 앱에서, 보내는 알림을, 끄거나 킬수 있습니다. 더보기를 눌러볼까요?";
const page5 = "가장 최근에 사용한, 앱이 보입니다. 이 외에, 다른 앱에서 오는, 알림을 끄고 싶다면, 어떻게 해야할까요? 가장 최근에 사용을, 눌러주세요.";
const page6 = "전체를 눌러주세요.";
const page7 = "전체 앱이, 보이고 있습니다. 특정 앱의, 알림을 끄고 싶으시다면, 여기서 꺼주시면 됩니다. 저는, 갤러리 앱에서 보내는, 알림을 꺼보겠습니다. 파란색 표시된 부분을, 눌러주세요.";
const page8 = "파란색 불이, 꺼진것을 확인할수 있습니다. 이번에는, 휴대폰의 모든 알림을, 무음으로 전환해볼까요?";
const page9 = "뒤로가기를 눌러주세요.";
const page10 = "방해금지를 눌러주세요.";
const page11 = "이 표시를 누르면, 모든 알림이 무음처리됩니다. 유용한 기능이니, 참고해주세요.";
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
