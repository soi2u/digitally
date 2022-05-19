const pageNum = 18;
const pageName = "9";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`./image/${j}.jpg`);
    audio = new Audio(`./audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간은, KT 키오스크 교육용 앱을 통해서, 키오스크를 연습해보는 두번째 시간입니다.실제 키오스크 주문할때와, 차이가 있을수 있다는점, 참고해주세요.KT 키오스크 교육용 앱을, 눌러서, 실행해주세요.";
const page2 = "키오스크 앱의, 대기화면입니다. 다음 화면으로, 넘어가주세요.";
const page3 = "키오스크 체험 교육, 처음 화면입니다. 손가락 표시를 눌러주세요.";
const page4 = "실습할 키오스크를, 선택하는 화면입니다. 이번 시간은, 카페 키오스크를, 연습해보겠습니다. 카페를 눌러주세요.";
const page5 = "패스트푸드점과 마찬가지로, 매장내 주문과, 포장 주문이, 따로 있습니다. 매장내 주문을 눌러보세요.";
const page6 = "다음과 같은, 화면이 나타나면, 주문을 할 수 있습니다. 시원한 커피, 아이스아메리카노를 골라볼까요?";
const page7 = "음식을 고르면, 다음과 같은 화면이, 나오게 됩니다. 매장컵은, 머그컵 등을 말하고, 개인컵은, 직접 가져온 컵을 말하고, 일회용컵은, 한번만 사용할 수 있는 종이컵이나 플라스틱 컵을 말합니다. 그럼, 매장컵을 선택해볼까요?";
const page8 = "이제, 커피를 몇 잔 주문할지와, 크기를 고를 수 있습니다. s는 small로 가장 작은 크기, m은 medium으로 중간 크기, l은 large로 가장 큰 크기를 말합니다.그럼, small 사이즈를 선택해볼까요?";
const page9 = "모두 골랐다면, 주문하기를 눌러주세요.";
const page10 = "이제, 디저트를 눌러보겠습니다.";
const page11 = "빵을 눌러보겠습니다.";
const page12 = "수량은, 한 개 그대로 두고, 주문하기를 눌러보겠습니다.";
const page13 = "장바구니에 모두 담았다면, 이제, 주문 완료를 눌러보겠습니다.";
const page14 = "선택한 음식이 맞는지, 확인 후에, 주문하기를 눌러보겠습니다.";
const page15 = "키오스크 기계는, 주로, 카드 결제만 가능합니다. 현금 결제는, 카운터에서 가능합니다. 결제 연습을 위해, 확인을 눌러주세요.";
const page16 = "실제로 결제할때는, 다음과 같은 화면이 나오면, 카드를 기계에 꽂아주시면 됩니다. 이 시간에는, 결제완료를, 눌러보겠습니다.";
const page17 = "다음과 같은 화면이 나오면, 결제가, 완료된 것입니다. 주문번호가 불려지면, 음식을 받으러 가면 됩니다.확인하셨다면, 다음 화면으로, 넘어가주세요.";
const page18 = "이제, 실제 카페에서도, 키오스크를 사용해보실 수 있습니다. 이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";


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
    page18
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
    coordinate18
);
