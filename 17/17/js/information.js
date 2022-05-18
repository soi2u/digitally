const pageNum = 8;
const pageName = "17";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 실습에서는 119 앱에서 소방 안전을 익혀 보도록 하겠습니다. 메인 화면에서 소방 안전 익히기 탭을 눌러 주세요.";
const page2 = "소방 안전 익히기 화면입니다. 먼저, 소화기 사용법을 알아보겠습니다. 소화기 모양의 소화기 사용법 버튼을 눌러 줍니다.";
const page3 = "소화기 사용법을 그림과 설명으로 보여 줍니다. 동영상으로도 확인할 수 있습니다. 이제 다시 소방 안전 익히기 탭을 눌러 줄게요.";
const page4 = "이제 소화전 사용법을 알아보겠습니다. 호스 모양의 소화전 사용법 버튼을 눌러 줍니다.";
const page5 = "소화전 사용법을 그림과 설명으로 보여 줍니다. 소화전 사용법 또한 동영상으로도 확인할 수 있습니다. 다시 소방 안전 익히기 탭을 눌러 줄게요.";
const page6 = "마지막으로 심폐소생술에 대해 알아보겠습니다. 하트 모양 심폐소생술 버튼을 눌러 줍니다.";
const page7 = "심폐소생술에 대해 알아볼 수 있습니다. 심폐소생술도 동영상으로 더욱 쉽게 배워 볼 수 있습니다. 이제, 하단의 메인 화면 버튼을 눌러 홈으로 돌아갈게요.";
const page8 =
    "메인 화면으로 돌아왔습니다. 119 앱을 통해 다양한 응급 조치 방법을 배워 볼 수 있습니다. 모두 고생하셨습니다.";


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
    startRateX: 0.49444444444444446, startRateY: 0.928125, endRateX: 0.25277777777777777, endRateY: 0.865625
};

const coordinate2 = {
    startRateX: 0.058333333333333334, startRateY: 0.19375, endRateX: 0.31666666666666665, endRateY: 0.3421875
};

const coordinate3 = {
    startRateX: 0.2611111111111111, startRateY: 0.8640625, endRateX: 0.4888888888888889, endRateY: 0.9265625
};

const coordinate4 = {
    startRateX: 0.375, startRateY: 0.19375, endRateX: 0.6305555555555555, endRateY: 0.3390625
};

const coordinate5 = {
    startRateX: 0.2722222222222222, startRateY: 0.8609375, endRateX: 0.4777777777777778, endRateY: 0.9234375
};

const coordinate6 = {
    startRateX: 0.6861111111111111, startRateY: 0.1890625, endRateX: 0.9444444444444444, endRateY: 0.3375
};

const coordinate7 = {
    startRateX: 0.20833333333333334, startRateY: 0.9203125, endRateX: 0.03611111111111111, endRateY: 0.8671875
};

const coordinate8 = {
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
    coordinate8
);
