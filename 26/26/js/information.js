const pageNum = 6;
const pageName = "26";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 지난 시간에 이어서, 카카오톡 친구 목록에서, 친구 찾기 연습을, 해보겠습니다. 다음 화면으로, 넘어가주세요.";
const page2 = "휴대폰에서, 카카오톡을 찾은 다음, 눌러서 실행해주세요.";
const page3 = "친구목록에서, 대화할 친구를 찾을때, 돋보기를 누르면 쉽게 찾을수 있습니다. 돋보기를 눌러볼까요?";
const page4 = "검색창과, 그 밑에는, 최근에 검색한 친구들의, 이름이 보이네요. 찾고싶은 친구의 이름을, 검색해보세요.";
const page5 = "상대방의 프로필이, 검색되었습니다.이번에는, 통화하기를 눌러볼까요?";
const page6 = "일반 통화와, 무료통화 보이스톡, 페이스톡이 가능합니다. 이 부분은, 다음시간에 함께 실습해보겠습니다.이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";

pageDescArray.push(
    page1,
    page2,
    page3,
    page4,
    page5,
    page6
);


const inputPage = [{ page: 3, correctAnswer: "김수연" }];

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
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate2 = {
    startRateX: 0.019444444444444445, startRateY: 0.1796875, endRateX: 0.20833333333333334, endRateY: 0.2953125
};

const coordinate3 = {
    startRateX: 0.5944444444444444, startRateY: 0.053125, endRateX: 0.6888888888888889, endRateY: 0.090625
};

const coordinate4 = {
    startRateX: 0.1527777777777778, startRateY: 0.0515625, endRateX: 0.6222222222222222, endRateY: 0.09375
};

const coordinate5 = {
    startRateX: 0.5611111111111111, startRateY: 0.809375, endRateX: 0.7138888888888889, endRateY: 0.9015625
};

const coordinate6 = {
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
    coordinate6
);
