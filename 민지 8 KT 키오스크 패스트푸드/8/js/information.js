const pageNum = 35;
const pageName = "8";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`./image/${j}.jpg`);
    audio = new Audio(`./audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 많은 매장에 설치되어 있는, 키오스크를 어떻게 사용하면 되는지, 연습해보도록 하겠습니다. 실제 키오스크 주문할때와, 차이가 있을수 있다는점, 참고해주세요. 다음 화면으로, 넘어가주세요.";
const page2 = "먼저, 휴대폰에서 플레이스토어를 눌러서, 실행해주세요. 아이폰을 사용하실 경우, 앱스토어를 실행해주세요.";
const page3 = "검색창을 눌러주세요.";
const page4 = "키오스크를 입력해주세요.";
const page5 = "키오스크를 눌러주세요.";
const page6 = "KT 키오스크 교육용 앱을 눌러주세요.";
const page7 = "다음과 같은 화면이 보이면, 설치를 눌러주세요.";
const page8 = "열기를 눌러주세요.";
const page9 = "키오스크를 연습하기 위해서는, 오디오 녹음 기능이 필요하다고 합니다. 허용을 눌러주세요.";
const page10 = "키오스크를 연습하기 위해서는, 휴대폰의, 사진, 미디어, 파일에 접근할 수 있는 권한이 필요하다고 합니다. 허용을 눌러주세요.";
const page11 = "키오스크 앱의, 대기화면입니다. 다음 화면으로, 넘어가주세요.";
const page12 = "키오스크 체험 교육에 오신 여러분, 환영합니다. 손가락 표시를 함께 눌러주세요.";
const page13 = "키오스크 교육 앱에서는, 생활 속에서 만나게 되는, 6가지 유형의 키오스크를 연습해볼 수 있습니다. 첫번째로, 패스트푸드 사용하기를, 연습해보도록 하겠습니다. 패스트푸드를 눌러주세요.";
const page14 = "패스트푸드점에서, 햄버거 주문하기를, 연습해보겠습니다. 화면의 아무 곳이나 눌러주세요.";
const page15 = "식사할 장소를 선택해보겠습니다. 매장에서 식사를 눌러주세요.";
const page16 = "식사할 장소를 골랐다면, 이제 주문을 해보도록 하겠습니다. 이 앱에서는, 빨간색 테두리 안에 있는 상품만, 선택할수 있습니다.단품을 누르면, 한가지 메뉴를, 선택할 수 있습니다. 통새우 버거를 눌러보겠습니다.";
const page17 = "이제, 세트를 선택해보겠습니다. 세트를 고르게 되면, 햄버거, 감자튀김, 음료수 등, 여러가지 음식을, 함께 먹을 수 있습니다. 세트를 눌러주세요.";
const page18 = "통새우 버거 세트를, 눌러주세요.";
const page19 = "음료수를, 추가로 선택하겠습니다. 음료를 눌러주세요.";
const page20 = "콜라를 선택해보겠습니다. 콜라를 눌러주세요.";
const page21 = "사이드는, 햄버거 외에, 추가적으로 먹을 수 있는 음식을 말합니다. 예를 들면, 감자튀김 등이 있습니다. 사이드를 눌러주세요.";
const page22 = "치킨랩을 선택해보겠습니다. 치킨랩을 눌러주세요.";
const page23 = "고른 음식을, 취소하고 싶을 때는, 삭제를 눌러주세요. 통새우 버거 세트를, 주문했기 때문에, 통새우 버거를, 삭제하고, 단품에서, 다른 버거를 주문해보겠습니다. 먼저, 통새우 버거 삭제를, 눌러주세요.";
const page24 = "단품을 눌러주세요.";
const page25 = "더블 베이컨 버거를, 주문내역에 담아보겠습니다. 더블 베이컨 버거를, 눌러주세요.";
const page26 = "이제, 장바구니 추가를 눌러서, 주문한 음식을, 확인해보겠습니다. 장바구니 추가를, 눌러주세요.";
const page27 = "장바구니에서, 메뉴를 더 추가해보겠습니다. 감자튀김을 눌러주세요.";
const page28 = "감자튀김을, 선택했기 때문에, 체크표시가 되었습니다. 이제, 오렌지주스를 추가해보겠습니다. 오렌지주스를, 눌러주세요.";
const page29 = "모두 선택하였다면, 결제하기를 눌러서, 결제해보도록 하겠습니다. 결제하기를 눌러주세요.";
const page30 = "주문한 음식을, 모두 확인할 수 있습니다. 주문한 음식이 맞다면, 결제하기를 눌러주세요.";
const page31 = "키오스크 기계는, 주로, 카드 결제만 가능합니다. 현금 결제는, 카운터에서 가능합니다. 결제 연습을 위해, 확인을 눌러주세요.";
const page32 = "포인트를 적립하면, 나중에 할인을 받을 수 있습니다. 확인을 눌러서, 다음 화면으로 넘어가겠습니다."
const page33 = "실제로 결제할때는, 다음과 같은 화면이 나오면, 카드를 기계에 꽂아주시면 됩니다. 이 시간에는, 결제완료를, 눌러보겠습니다.";
const page34 = "주문이 완료되었습니다. 주문번호가 불리게 되면, 음식을 받으러 가시면 됩니다. 이제, 집모양을 눌러서, 다시 처음 화면으로 돌아가겠습니다.";
const page35 = "이제, 패스트푸드점에서 키오스크를 직접 사용해보세요.이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";


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
    page28,
    page29,
    page30,
    page31,
    page32,
    page33,
    page34,
    page35
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

const coordinate29 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate30 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate31 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate32 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate33 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate34 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate35 = {
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
    coordinate28,
    coordinate29,
    coordinate30,
    coordinate31,
    coordinate32,
    coordinate33,
    coordinate34,
    coordinate35
);
