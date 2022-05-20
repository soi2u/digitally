const pageNum = 10;
const pageName = "28";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 카카오톡으로, 정보를 공유해보도록 하겠습니다. 휴대폰에서, 네이버앱을 찾아서, 실행해주세요.네이버앱이 없으신 분들은, 인터넷 앱을 통해, 네이버에 접속해주세요.";
const page2 = "검색창을 눌러주세요.";
const page3 = "검색창에, 맛집을 입력한 다음, 엔터키를 눌러주세요.";
const page4 = "다양한 맛집이, 검색되었습니다.표시된 맛집을 눌러볼까요?";
const page5 = "카카오톡으로, 링크를 보내기 위해서, 공유를 눌러볼게요.";
const page6 = "카카오톡을 눌러주세요.";
const page7 = "이번 시간은, 연습 차원에서, 나와의 채팅방으로, 링크를 보내볼까요? 내 프로필 옆에, 동그라미를 눌러주세요.";
const page8 = "이제, 확인을 눌러볼까요?";
const page9 = "카카오톡 채팅방에, 링크가 공유되었습니다. 이제, 친구에게도 한번 공유해보세요";
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


const inputPage = [{ page: 2, correctAnswer: "맛집" }];

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
    startRateX: 0.2222222222222222, startRateY: 0.159375, endRateX: 0.3972222222222222, endRateY: 0.3140625
};

const coordinate2 = {
    startRateX: 0.18888888888888888, startRateY: 0.2484375, endRateX: 0.8305555555555556, endRateY: 0.3046875
};

const coordinate3 = {
    startRateX: 0.10277777777777777, startRateY: 0.0375, endRateX: 0.7888888888888889, endRateY: 0.1109375
};

const coordinate4 = {
    startRateX: 0.9805555555555555, startRateY: 0.8671875, endRateX: 0.022222222222222223, endRateY: 0.55625
};

const coordinate5 = {
    startRateX: 0.7361111111111112, startRateY: 0.4375, endRateX: 0.9972222222222222, endRateY: 0.525
};

const coordinate6 = {
    startRateX: 0.65, startRateY: 0.38125, endRateX: 0.85, endRateY: 0.4984375
};

const coordinate7 = {
    startRateX: 0.9888888888888889, startRateY: 0.38125, endRateX: 0.8611111111111112, endRateY: 0.2890625
};

const coordinate8 = {
    startRateX: 0.8416666666666667, startRateY: 0.0375, endRateX: 0.9888888888888889, endRateY: 0.1
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
