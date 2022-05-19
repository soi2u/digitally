const pageNum = 17;
const pageName = "";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`./image/${j}.jpg`);
    audio = new Audio(`./audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 카카오톡과 카카오페이를 활용해서, 친구에게 선물하는 방법을, 살펴보겠습니다.직접 선물을 결제하지는 마시고, 실습 과정을 통해서 연습하시면 되겠습니다. 나중에 선물하실때, 참고해주세요!먼저, 휴대폰에서 카카오톡을 찾아서, 실행해주세요.";
const page2 = "카카오톡에는 이렇게, 친구의 생일을 알려주는 기능이 있습니다.생일이나, 특별한 날에, 카카오톡 선물하기로, 마음을 표현해볼까요? 더보기를 눌러주세요.";
const page3 = "선물하기를 눌러주세요,";
const page4 = "음료 쿠폰을, 선물해보겠습니다. 브랜드를 눌러주세요.";
const page5 = "모바일교환권을 눌러주세요.";
const page6 = "카페 음료를, 선물해볼까요? 투썸플레이스를, 눌러주세요.";
const page7 = "선물을 골라볼까요? 화면을 넘겨주세요.";
const page8 = "딜라이트 펌킨슈페너를, 선택해볼까요?";
const page9 = "나에게 선물하기를 눌러주세요.";
const page10 = "수량과 금액을 확인한 후에, 나에게 선물하기를 눌러주세요.";
const page11 = "메시지카드 쓰기를 누르면, 메시지를 작성할수 있습니다. 메시지카드 쓰기를, 눌러주세요.";
const page12 = "원하는 문구로, 메시지를 수정해 주세요.";
const page13 = "원하는 문구로 수정했다면, 저장을 눌러 주세요.";
const page14 = "상품 화면을 밑으로 내리면, 결제 화면이 보입니다.";
const page15 = "등록한 카드를 이용해 결제해 보도록 하겠습니다. 카드 옆에 체크 표시를 누르면 등록한 카드로 결제가 됩니다.";
const page16 = "이제, 결제하기를 누르시면 선물을 결제할 수 있습니다. 실습에서는 결제하지 않고 다음 페이지로 넘어가도록 하겠습니다.";
const page17 = "선물을 보냈다는 알림과 함께 결제가 완료됩니다. 선물함으로 이동해 결제한 선물을 확인하실 수 있습니다. 모두 고생하셨습니다.";

pageDescArray.push(page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17);

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
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate2 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate3 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate4 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate5 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate6 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate7 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate8 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate9 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate10 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
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

const coordinate14 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate15 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate16 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate17 = {
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
    coordinate15,
    coordinate16,
    coordinate17
);