const pageNum = 28;
const pageName = "6";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`./image/${j}.jpg`);
    audio = new Audio(`./audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 서초구, 키오스크 연습용 앱을 활용해서, 키오스크로 음식 주문하기 실습을, 진행해보겠습니다. 실제 키오스크 주문할때와, 차이가 있을수 있다는점, 참고해주세요. 이제, 다음 화면으로, 넘어가주세요.";
const page2 = "먼저, 휴대폰에서 플레이스토어를 눌러서, 실행해주세요. 아이폰을 사용하실 경우, 앱스토어를 실행해주세요.";
const page3 = "검색창에, 키오스크 교육용 앱을, 입력해주시고, 해당 검색어 옆에, 돋보기 표시를 눌러주세요.";
const page4 = "서초구 키오스크 교육용 앱을, 눌러주세요.";
const page5 = "설치를 눌러주세요.";
const page6 = "열기를 눌러주세요."
const page7 = "허용을 눌러주세요.";
const page8 = "허용을 눌러주세요.";
const page9 = "키오스크 앱의, 대기화면입니다. 실제 앱에서는, 음성 안내를 위해, 구글에서 제공하는, 오디오 서비스 연결을, 허용해주세요.다음 화면으로, 넘어가주세요.";
const page10 = "이제, 키오스크를 한번 체험해볼까요? 활동할때, 앱에서 자체적으로, 음성 안내를 제공하고 있습니다.저와 함께 연습할땐, 스피커 표시를, 한번 눌러서, 끄셔도 됩니다.혼자서 연습할땐, 소리를 키고 연습해주세요.다음 화면으로, 넘어가주세요.";
const page11 = "먼저, 패스트푸드를 눌러주세요.";
const page12 = "보통, 패스트푸드점의 키오스크는, 이렇게, 대표하는 메뉴를, 처음화면에 걸어놓습니다. 키오스크에서는, 카드결제만 가능하다고 하네요. 그럼, 화면의 아무곳이나, 눌러볼까요?";
const page13 = "매장에서 식사할지, 아니면 포장할지 선택할수 있는, 화면입니다. 매장에서 식사를 눌러볼까요?";
const page14 = "빨간 테두리 안에 있는 메뉴만, 선택 가능합니다. 다음 화면으로, 넘어가주세요.";
const page15 = "먼저, 더블패티버거를, 장바구니에 담아볼까요? 더블패티버거를 눌러주세요.";
const page16 = "세트를 선택해보겠습니다.";
const page17 = "세트메뉴의, 구성품을 선택해볼까요? 먼저, 감자튀김을 담아주세요.";
const page18 = "이제, 탄산음료를 담아주세요.";
const page19 = "메뉴를 선택한다음, 장바구니 추가를 눌러주세요.";
const page20 = "이번에는, 치즈스틱을, 담아볼까요?";
const page21 = "이제, 주문완료를 눌러주세요.";
const page22 = "주문을 취소하려면, 삭제를 눌러주시면 됩니다. 삭제를 눌러볼까요?";
const page23 = "치즈스틱이 사라졌네요. 가격을 확인한 후에, 결제하기를 눌러주세요.";
const page24 = "실제로 키오스크에서 주문할때는, 이 단계에서, 카드를 투입구에 넣어주시면 되는데요, 지금은 우선, 카드그림을 눌러볼까요?";
const page25 = "결제가 완료되었다고 합니다! 다음 페이지로, 넘어가주세요.";
const page26 = "주문번호를, 꼭 기억해주세요. 실제로 주문하실 때는, 주문번호가 전광판에 뜨면, 음식을 받으러가시면 됩니다. 다음 화면으로, 넘어가주세요.";
const page27 = "패스트푸드점 키오스크 체험은, 여기까지입니다. 이제, 패스트푸드점에서도, 한번 주문해보세요.";
const page28 = "이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";


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
    page19,
    page20,
    page21,
    page22,
    page23,
    page24,
    page25,
    page26,
    page27,
    page28
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

const coordinate20 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate21 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate22 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate23 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate24 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate25 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate26 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate27 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate28 = {
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
    coordinate19,
    coordinate20,
    coordinate21,
    coordinate22,
    coordinate23,
    coordinate24,
    coordinate25,
    coordinate26,
    coordinate27,
    coordinate28
);
