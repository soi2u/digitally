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
    startRateX: 0.25833333333333336, startRateY: 0.015047879616963064, endRateX: 0.5055555555555555, endRateY: 0.17510259917920656
};

const coordinate2 = {
    startRateX: 0.7972222222222223, startRateY: 0.9220246238030095, endRateX: 0.9972222222222222, endRateY: 0.9972640218878249
};

const coordinate3 = {
    startRateX: 0.36944444444444446, startRateY: 0.3693570451436389, endRateX: 0.9972222222222222, endRateY: 0.426812585499316
};

const coordinate4 = {
    startRateX: 0.36666666666666664, startRateY: 0.47606019151846785, endRateX: 0.9972222222222222, endRateY: 0.5129958960328317
};

const coordinate5 = {
    startRateX: 0.002777777777777778, startRateY: 0.292749658002736, endRateX: 0.9972222222222222, endRateY: 0.47058823529411764
};

const coordinate6 = {
    startRateX: 0.3, startRateY: 0.8809849521203831, endRateX: 0.9972222222222222, endRateY: 0.987688098495212
};

const coordinate7 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate8 = {
    startRateX: 0.04722222222222222, startRateY: 0.5362517099863201, endRateX: 0.9444444444444444, endRateY: 0.6196990424076607
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
