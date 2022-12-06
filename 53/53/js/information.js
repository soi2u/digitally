const pageNum = 14;
const pageName = "53";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "우리WON뱅킹의 전기 요금 납부 서비스를 이용해 보도록 하겠습니다. 먼저, 우리WON뱅킹 앱을 눌러 실행합니다.";
const page2 = "전체 메뉴를 확인하기 위해 우측 하단의 전체를 눌러 줍니다.";
const page3 = "공과금을 눌러 줍니다.";
const page4 = "생활요금/기타를 눌러 줍니다.";
const page5 = "전기요금 납부를 눌러 줍니다.";
const page6 = "고객번호를 입력합니다. 이번 실습에서는 1234567890으로 입력해 볼게요.";
const page7 = "고객번호를 입력했다면, 조회를 눌러 다음 페이지로 넘어갑니다.";
const page8 = "출금 계좌 선택을 위해 계좌 번호 선택 버튼을 누릅니다.";
const page9 = "하단의 계좌를 눌러 출금 계좌로 선택해 줍니다.";
const page10 = "계좌 비밀번호를 설정해 줍니다. 이번 실습에서는 1234로 설정하겠습니다.";
const page11 = "연락처를 작성합니다. 이번 실습에서는 01012345678로 작성해 주세요. ";
const page12 = "납부하기를 눌러 전기 요금 납부를 완료합니다.";
const page13 = "확인을 누르면 전기 요금 납부가 완료됩니다. 모두 고생하셨습니다.";


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

const coordinate12 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate13 = {
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
    coordinate13
);
