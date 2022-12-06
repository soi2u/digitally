const pageNum = 14;
const pageName = "50";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "우리WON뱅킹의 국민 비서 서비스를 이용해 보도록 하겠습니다. 먼저, 홈 화면의 우리WON뱅킹 앱을 실행해 줍니다.";
const page2 = "전체 메뉴를 확인하기 위해 우측 하단의 전체를 눌러 줍니다.";
const page3 = "생활혜택을 눌러 줍니다.";
const page4 = "생활금융 버튼을 눌러 줍니다.";
const page5 = "국민비서를 눌러 넘어가 줍니다.";
const page6 = "국민비서 알림 서비스 신청 화면입니다. 스크롤을 내려 아래로 내려가 줍니다.";
const page7 = "건강검진을 눌러 체크해 줍니다.";
const page8 = "국세고지서 발송 안내를 눌러 체크해 줍니다.";
const page9 = "알림 설정하기를 눌러 국민비서 알림 서비스 신청을 완료해 줍니다.";
const page10 = "전체 동의하기 버튼을 눌러 줍니다.";
const page11 = "전체 동의 버튼을 눌러 줍니다.";
const page12 = "전체 동의가 완료되었다면, 다음 버튼을 눌러 넘어가 줍니다.";
const page13 = "신청이 완료되었습니다. 확인 버튼을 누르면 종료됩니다. 모두 고생하셨습니다.";

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
    page13
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
    startRateX: 0.23333333333333334, startRateY: 0.15047879616963064, endRateX: 0.5194444444444445, endRateY: 0.005471956224350205
};

const coordinate2 = {
    startRateX: 0.7833333333333333, startRateY: 0.9274965800273598, endRateX: 0.9972222222222222, endRateY: 0.9986320109439124
};

const coordinate3 = {
    startRateX: 0.6555555555555556, startRateY: 0.20656634746922026, endRateX: 0.9027777777777778, endRateY: 0.3748290013679891
};

const coordinate4 = {
    startRateX: 0, startRateY: 0.506155950752394, endRateX: 0.36944444444444446, endRateY: 0.5690834473324213
};

const coordinate5 = {
    startRateX: 0.3638888888888889, startRateY: 0.4363885088919289, endRateX: 0.9972222222222222, endRateY: 0.506155950752394
};

const coordinate6 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate7 = {
    startRateX: 0, startRateY: 0.38850889192886456, endRateX: 0.9972222222222222, endRateY: 0.454172366621067
};

const coordinate8 = {
    startRateX: 0, startRateY: 0.387140902872777, endRateX: 0.9972222222222222, endRateY: 0.46238030095759236
};

const coordinate9 = {
    startRateX: 0.9972222222222222, startRateY: 0.9931600547195623, endRateX: 0, endRateY: 0.8919288645690835
};

const coordinate10 = {
    startRateX: 0, startRateY: 0.0560875512995896, endRateX: 0.9916666666666667, endRateY: 0.1326949384404925
};

const coordinate11 = {
    startRateX: 0, startRateY: 0.8974008207934336, endRateX: 0.9972222222222222, endRateY: 0.9931600547195623
};

const coordinate12 = {
    startRateX: 0.2972222222222222, startRateY: 0.896032831737346, endRateX: 0.9972222222222222, endRateY: 0.9972640218878249
};

const coordinate13 = {
    startRateX: 0.008333333333333333, startRateY: 0.8974008207934336, endRateX: 0.9916666666666667, endRateY: 0.9931600547195623
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
    coordinate13
);
