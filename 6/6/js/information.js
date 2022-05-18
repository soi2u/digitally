const pageNum = 15;
const pageName = "6";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "다양한 영상을 시청할 수 있는 유튜브 앱을 알아보도록 하겠습니다. 먼저, 휴대전화에서 유튜브를 실행해 주세요.";
const page2 = "유튜브 실행 화면입니다. 다음으로 넘어가 주세요.";
const page3 = "유튜브 앱 첫 화면입니다. 먼저, 구독 버튼을 눌러 주세요.";
const page4 = "구독 중인 채널을 한눈에 볼 수 있습니다. 아래에서는 다양한 추천 구독 채널도 확인할 수 있습니다. 이제, 구독 버튼 옆 보관함 버튼을 눌러 주세요.";
const page5 = "보관함에서는 시청 기록, 내 동영상, 나중에 볼 동영상 등 다양한 유튜브 영상 목록을 확인할 수 있습니다. 홈 버튼을 눌러 다시 홈으로 돌아가 주세요.";
const page6 = "다시 홈으로 돌아와서, 오른쪽 상단의 종 모양 알림 버튼을 눌러 보겠습니다.";
const page7 = "유튜브 알림을 확인할 수 있습니다. 다양한 활동을 한다면 유튜브 알림이 표시될 거예요. 이제, 오른쪽 상단의 돋보기 모양을 눌러 줍니다. ";
const page8 = "유튜브 영상을 검색할 수 있는 기능입니다. 뒤로가기를 눌러 다시 돌아가겠습니다.";
const page9 =
    "이제 홈에서, 노래 모음 영상을 찾아보도록 하겠습니다. 검색 버튼을 눌러 주세요.";
const page10 =
    "검색창에 노래를 검색해 줍니다.";
const page11 = "노래 모음을 눌러 영상을 찾아볼게요.";
const page12 = "다양한 유튜브 영상이 나오는 것을 확인할 수 있습니다. 그중 하나를 눌러 보겠습니다.";
const page13 = "이 영상이 좋다면, 좋아요 버튼을 눌러 주세요.";
const page14 = "이 영상을 공유하고 싶다면, 공유 버튼을 눌러 주시면 됩니다.";
const page15 = "다양한 방법으로 영상을 공유할 수 있습니다. 모두 고생하셨습니다.";


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
    startRateX: 0.19722222222222222, startRateY: 0.5390625, endRateX: 0.4083333333333333, endRateY: 0.6921875
};

const coordinate2 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate3 = {
    startRateX: 0.6361111111111111, startRateY: 0.8640625, endRateX: 0.7638888888888888, endRateY: 0.9421875
};

const coordinate4 = {
    startRateX: 0.825, startRateY: 0.865625, endRateX: 0.9722222222222222, endRateY: 0.9453125
};

const coordinate5 = {
    startRateX: 0.16111111111111112, startRateY: 0.9359375, endRateX: 0.03611111111111111, endRateY: 0.8671875
};

const coordinate6 = {
    startRateX: 0.6555555555555556, startRateY: 0.0328125, endRateX: 0.7416666666666667, endRateY: 0.0953125
};

const coordinate7 = {
    startRateX: 0.7861111111111111, startRateY: 0.0390625, endRateX: 0.9, endRateY: 0.096875
};

const coordinate8 = {
    startRateX: 0.1111111111111111, startRateY: 0.0859375, endRateX: 0.030555555555555555, endRateY: 0.0421875
};

const coordinate9 = {
    startRateX: 0.7611111111111111, startRateY: 0.0421875, endRateX: 0.8666666666666667, endRateY: 0.0890625
};

const coordinate10 = {
    startRateX: 0.1527777777777778, startRateY: 0.0421875, endRateX: 0.4027777777777778, endRateY: 0.084375
};

const coordinate11 = {
    startRateX: 0.10555555555555556, startRateY: 0.2328125, endRateX: 0.36666666666666664, endRateY: 0.2890625
};

const coordinate12 = {
    startRateX: 0.002777777777777778, startRateY: 0.165625, endRateX: 0.9972222222222222, endRateY: 0.559375
};

const coordinate13 = {
    startRateX: 0.03888888888888889, startRateY: 0.5359375, endRateX: 0.17777777777777778, endRateY: 0.6296875
};

const coordinate14 = {
    startRateX: 0.5416666666666666, startRateY: 0.6328125, endRateX: 0.4, endRateY: 0.54375
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
