const pageNum = 7;
const pageName = "49";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.jpg`);
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
    startRateX: 0.39166666666666666, startRateY: 0.6640625, endRateX: 0.6194444444444445, endRateY: 0.8078125
};

const coordinate2 = {
    startRateX: 0.05555555555555555, startRateY: 0.040625, endRateX: 0.9416666666666667, endRateY: 0.1015625
};

const coordinate3 = {
    startRateX: 0.10277777777777777, startRateY: 0.0375, endRateX: 0.8888888888888888, endRateY: 0.1046875
};

const coordinate4 = {
    startRateX: 0.005555555555555556, startRateY: 0.11875, endRateX: 0.9944444444444445, endRateY: 0.1796875
};

const coordinate5 = {
    startRateX: 0.9777777777777777, startRateY: 0.415625, endRateX: 0.03611111111111111, endRateY: 0.3359375
};

const coordinate6 = {
    startRateX: 0.49722222222222223, startRateY: 0.2328125, endRateX: 0.9611111111111111, endRateY: 0.3125
};

const coordinate7 = {
    startRateX: 0.041666666666666664, startRateY: 0.7828125, endRateX: 0.9555555555555556, endRateY: 0.859375
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
