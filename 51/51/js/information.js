const pageNum = 8;
const pageName = "51";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}


const page1 = "우리WON뱅킹의 통장 사본 조회 서비스를 이용해 보도록 하겠습니다. 우리WON뱅킹을 눌러 실행해 주세요.";
const page2 = "전체 메뉴를 확인하기 위해 우측 하단의 전체를 눌러 줍니다.";
const page3 = "계좌 조회를 눌러 줍니다.";
const page4 = "통장사본 조회를 눌러 줍니다.";
const page5 = "저축예금 부분을 눌러 더 자세하게 알아볼게요.";
const page6 = "통장사본 저장을 눌러 줍니다.";
const page7 = "통장사본 저장 페이지입니다. 한 번 눌러 넘어가 줄게요.";
const page8 = "확인을 누르면 통장 사본이 저장됩니다. 모두 고생하셨습니다.";

pageDescArray.push(
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8
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
    startRateX: 0.29444444444444445, startRateY: 0.1859375, endRateX: 0.5138888888888888, endRateY: 0.05
};

const coordinate2 = {
    startRateX: 0.7361111111111112, startRateY: 0.8796875, endRateX: 0.9027777777777778, endRateY: 0.9390625
};

const coordinate3 = {
    startRateX: 0.3861111111111111, startRateY: 0.371875, endRateX: 0.9111111111111111, endRateY: 0.4359375
};

const coordinate4 = {
    startRateX: 0.3888888888888889, startRateY: 0.4734375, endRateX: 0.9027777777777778, endRateY: 0.50625
};

const coordinate5 = {
    startRateX: 0.09722222222222222, startRateY: 0.3046875, endRateX: 0.9055555555555556, endRateY: 0.4703125
};

const coordinate6 = {
    startRateX: 0.325, startRateY: 0.8375, endRateX: 0.9305555555555556, endRateY: 0.946875
};

const coordinate7 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate8 = {
    startRateX: 0.1527777777777778, startRateY: 0.53125, endRateX: 0.8444444444444444, endRateY: 0.6015625
};



coordinateArray.push(
    coordinate1,
    coordinate2,
    coordinate3,
    coordinate4,
    coordinate5,
    coordinate6,
    coordinate7,
    coordinate8
);
