const pageNum = 19;
const pageName = "7";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`./image/${j}.jpg`);
    audio = new Audio(`./audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 지난 시간에 이어서, 카페 키오스크 체험을, 함께 해보겠습니다. 서초구 키오스크 연습용 앱의, 첫번째 튜토리얼에, 참여하신 뒤에, 이번시간에 참여하시는 방향을, 권장드립니다. 실제 키오스크 주문할때와, 차이가 있을수 있다는점, 참고해주세요. 다음 화면으로, 넘어가주세요.";
const page2 = "먼저, 서초 키오스크 교육앱을, 휴대폰에서 실행해주세요.";
const page3 = "카페를 눌러주세요.";
const page4 = "패스트푸드점과 마찬가지로, 매장에서 먹기와, 포장하기를 선택할수 있는데요, 이번 시간에는, 매장에서 먹기를 눌러볼까요?";
const page5 = "커피, 차, 에이드주스, 디저트와 같이, 다양한 메뉴선택이 가능한데요, 먼저, 카페모카를 눌러보겠습니다.";
const page6 = "한잔 더 추가해볼까요? 더하기 표시를 눌러주세요.";
const page7 = "수량과, 금액이 변경되었습니다. 이제, 결제를 눌러볼까요?";
const page8 = "메뉴를 변경하고 싶을땐, 취소를 눌러주세요.";
const page9 = "카페모카가, 장바구니에서 사라졌습니다. 이번에는 초코라떼를 눌러볼까요?";
const page10 = "이제, 결제를 눌러주세요.";
const page11 = "키오스크에서는, 카드결제만 가능하기 때문에, 카드를 눌러주세요.";
const page12 = "실제 키오스크를 사용하실때는, 이 순서에서, 카드를 투입구에 넣어주시면 됩니다. 다음 화면으로, 넘어가주세요.";
const page13 = "스탬프는, 카페에서, 쿠폰처럼 사용할수 있는데요, 적립을 원하실 경우, 예를 눌러주세요.";
const page14 = "적립을 위해, 휴대폰 번호를 입력해주세요. 실습 앱에서는, 아무번호나, 눌러주셔도 됩니다.";
const page15 = "이제, 확인을 눌러주세요.";
const page16 = "예,를 눌러주세요.";
const page17 = "스탬프가 적립되었습니다. 대부분의 카페는, 이렇게 적립할수 있는, 서비스를 제공하는데, 스탬프를 적립한 카페에서는, 혜택을 받을수 있습니다. 다음 화면으로, 넘어가주세요.";
const page18 = "주문이 완료되었습니다. 실제로 주문하실 때는, 영수증에 주문번호를 확인해주세요. 그리고, 번호가 불리면, 음료를 받으시면 됩니다.";
const page19 = "이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";


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
    page15,
    page16,
    page17,
    page18,
    page19
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

const coordinate18 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate19 = {
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
    coordinate17,
    coordinate18,
    coordinate19
);
