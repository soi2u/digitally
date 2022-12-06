const pageNum = 13;
const pageName = "53";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "우리WON뱅킹의 원터치 알림 서비스를 이용해 보도록 하겠습니다. 먼저, 우리WON뱅킹 앱을 눌러 실행합니다.";
const page2 = "전체 메뉴를 확인하기 위해 우측 하단의 전체를 눌러 줍니다.";
const page3 = "부가서비스를 눌러 줍니다.";
const page4 = "통지서비스를 눌러 줍니다.";
const page5 = "WON알림을 눌러 줍니다.";
const page6 = "이용 약관 옆 버튼을 눌러 WON 알림 이용에 동의합니다.";
const page7 = "동의 후 알림 받기를 눌러 줍니다.";
const page8 = "기타 알림을 눌러 줍니다.";
const page9 = "만기 알림의 예금, 적금, 신탁 옆 버튼을 눌러 알림을 켜짐으로 돌려 줍니다.";
const page10 = "대출이자 납입 옆 버튼을 눌러 알림을 켜짐으로 돌려 줍니다. ";
const page11 = "원터치 알림이 설정되었습니다. 모두 고생하셨습니다.";


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
    page11
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
    startRateX: 0.25555555555555554, startRateY: 0.02051983584131327, endRateX: 0.5083333333333333, endRateY: 0.17236662106703146
};

const coordinate2 = {
    startRateX: 0.8027777777777778, startRateY: 0.9233926128590971, endRateX: 0.9972222222222222, endRateY: 0.9931600547195623
};

const coordinate3 = {
    startRateX: 0.7166666666666667, startRateY: 0.2051983584131327, endRateX: 0.9972222222222222, endRateY: 0.3693570451436389
};

const coordinate4 = {
    startRateX: 0.36666666666666664, startRateY: 0.4883720930232558, endRateX: 0.002777777777777778, endRateY: 0.4377564979480164
};

const coordinate5 = {
    startRateX: 0.3638888888888889, startRateY: 0.3707250341997264, endRateX: 0.9972222222222222, endRateY: 0.4473324213406293
};

const coordinate6 = {
    startRateX: 0.9916666666666667, startRateY: 0.23803009575923392, endRateX: 0, endRateY: 0.15868673050615595
};

const coordinate7 = {
    startRateX: 0.005555555555555556, startRateY: 0.9110807113543091, endRateX: 0.9972222222222222, endRateY: 0.9931600547195623
};

const coordinate8 = {
    startRateX: 0.4861111111111111, startRateY: 0.07934336525307797, endRateX: 0.9944444444444445, endRateY: 0.14227086183310533
};
const coordinate9 = {
    startRateX: 0.002777777777777778, startRateY: 0.3009575923392613, endRateX: 0.9972222222222222, endRateY: 0.3652530779753762
};
const coordinate10 = {
    startRateX: 0, startRateY: 0.5170998632010944, endRateX: 0.9972222222222222, endRateY: 0.6935704514363885
};

const coordinate11 = {
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
);
