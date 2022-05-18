const pageNum = 12;
const pageName = "43";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 실습에서는 당근마켓 앱을 둘러보도록 하겠습니다. 먼저, 당근마켓을 눌러 실행해 줍니다.";
const page2 = "당근마켓 홈 화면이 나옵니다. 홈, 동네생활, 내 근처, 채팅, 나의 당근 페이지가 있습니다. 하나씩 눌러보도록 할게요. 동네생활을 눌러 줍니다.";
const page3 = "내 동네로 설정된 지역의 글들이 나옵니다. 잃어버린 물건이 있을 때 확인하거나, 주운 물건이 있을 때는 글을 올려 보는 것도 좋을 것 같네요! 다음은 내 근처를 눌러 줍니다.";
const page4 = "내 근처에 있는 지도 정보를 확인할 수 있습니다. 다음은, 채팅을 확인해 보겠습니다. 채팅을 눌러 주세요.";
const page5 = "다른 사람들과 나눈 채팅을 확인할 수 있습니다. 거래할 때 유용하게 사용될 거예요. 다음으로 나의 당근을 눌러 줍니다.";
const page6 = "내 동네 설정, 동네 인증, 판매 또는 구매 내역, 관심 목록 등 내 정보를 수정하고, 물품을 확인할 수 있습니다. 이제 홈으로 다시 돌아가 볼게요.";
const page7 = "이제, 중고 물품을 검색해 보도록 하겠습니다. 우측 상단의 메뉴 버튼을 눌러 주세요.";
const page8 =
    "이번 실습에서는 올라온 디지털기기를 확인해 볼게요. 디지털기기를 눌러 줍니다.";
const page9 =
    "다양한 디지털기기를 확인할 수 있습니다. 그중 하나를 눌러 줍니다.";
const page10 =
    "판매하는 기기의 정보를 확인할 수 있습니다. 채팅하기를 누르면 판매자와 대화를 할 수 있습니다. 오늘은, 찜을 먼저 눌러 볼게요. 왼쪽 하단의 하트 모양을 눌러 줍니다.";
const page11 = "오른쪽 상단의 공유 버튼을 누르면 상품 정보를 공유할 수 있습니다.";
const page12 =
    "이상으로, 당근마켓 실습을 마치도록 하겠습니다. 모두 고생하셨습니다.";

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
    startRateX: 0.5972222222222222, startRateY: 0.6578125, endRateX: 0.8111111111111111, endRateY: 0.8234375
};

const coordinate2 = {
    startRateX: 0.4361111111111111, startRateY: 0.946875, endRateX: 0.15555555555555556, endRateY: 0.8546875
};

const coordinate3 = {
    startRateX: 0.37777777777777777, startRateY: 0.85, endRateX: 0.6361111111111111, endRateY: 0.9390625
};

const coordinate4 = {
    startRateX: 0.5638888888888889, startRateY: 0.859375, endRateX: 0.8416666666666667, endRateY: 0.934375
};

const coordinate5 = {
    startRateX: 0.7666666666666667, startRateY: 0.85625, endRateX: 1, endRateY: 0.9390625
};

const coordinate6 = {
    startRateX: 0.20833333333333334, startRateY: 0.934375, endRateX: 0.002777777777777778, endRateY: 0.8578125
};

const coordinate7 = {
    startRateX: 0.75, startRateY: 0.0359375, endRateX: 0.9055555555555556, endRateY: 0.1125
};

const coordinate8 = {
    startRateX: 0.005555555555555556, startRateY: 0.1171875, endRateX: 0.3388888888888889, endRateY: 0.28125
};

const coordinate9 = {
    startRateX: 0.002777777777777778, startRateY: 0.278125, endRateX: 1, endRateY: 0.109375
};

const coordinate10 = {
    startRateX: 0.1638888888888889, startRateY: 0.928125, endRateX: 0, endRateY: 0.85
};

const coordinate11 = {
    startRateX: 0.7277777777777777, startRateY: 0.0015625, endRateX: 0.9305555555555556, endRateY: 0.1171875
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
