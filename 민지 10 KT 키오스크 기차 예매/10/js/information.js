const pageNum = 33;
const pageName = "10";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`./image/${j}.jpg`);
    audio = new Audio(`./audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 키오스크 교육용 앱을 활용해서, 열차표 예매하기를, 연습해보도록 하겠습니다. 실제 키오스크 사용할때와, 차이가 있을수 있다는점, 참고해주세요. 그럼, KT 키오스크 교육용 앱을, 눌러서, 실행해주세요.";
const page2 = "키오스크 앱의, 대기화면입니다. 다음 화면으로, 넘어가주세요.";
const page3 = "손가락 표시를, 눌러주세요.";
const page4 = "실습할 키오스크를, 선택하는 화면입니다. 교통예매(열차)를 눌러주세요.";
const page5 = "이제, 기차예매를, 직접 연습해보도록 하겠습니다. 가운데에 있는, 기차예매 체험하기를 눌러주세요.";
const page6 = "예매 화면입니다. 먼저, 서울을 눌러주세요.";
const page7 = "용산역을 선택해보겠습니다. 용산을 눌러주세요.";
const page8 = "확인을 눌러주세요.";
const page9 = "이제, 부산을 눌러주세요.";
const page10 = "대전역을 선택해보겠습니다. 대전을 눌러주세요.";
const page11 = "확인을 눌러주세요.";
const page12 = "출발지와 도착지가, 변경된 것을, 확인할 수 있습니다. 이제, 출발일을 선택해보겠습니다. 출발일을 눌러주세요.";
const page13 = "이렇게, 달력이 나타나면, 먼저, 날짜를 선택해보도록 하겠습니다. 6일 토요일을, 눌러주세요.";
const page14 = "이제, 출발 시간을 선택하겠습니다. 12시를 눌러주세요.";
const page15 = "선택을 완료하면, 초록색으로 표시가 된 것을, 알 수 있습니다. 확인을 눌러주세요.";
const page16 = "이번에는, 승객 연령과, 좌석수를, 선택해보도록 하겠습니다. 승객 연령 및 좌석수를 눌러주세요.";
const page17 = "어른 1명, 경로 1명을 선택해보도록 하겠습니다. 어른 옆에, 더하기 표시를 눌러주세요.";
const page18 = "이번에는, 경로 옆에 더하기 표시를 눌러 주세요."
const page19 = "모두 선택하면, 위쪽에, 어른 1명, 경로 1명이 표시된 것을, 알 수 있습니다. 확인을 눌러주세요.";
const page20 = "선택을 완료했다면, 열차 조회하기를 눌러주세요.";
const page21 = "이제, 좌석의 유형을 선택해보도록 하겠습니다. 이번에는, 일반실을 선택해보겠습니다. 일반실을 눌러주세요.";
const page22 = "초록색 체크 표시가, 된 것을 확인할 수 있습니다. 선택완료를 눌러주세요.";
const page23 = "이번에는, 좌석을 선택해보겠습니다. 현재 남은 좌석은, 56석중에 6석이라고 합니다. 그 중에서, 2개의 좌석을 선택해보겠습니다. 먼저, 12 C 좌석을, 눌러주세요.";
const page24 = "선택이 되었다면, 초록색 표시로 변경이 됩니다. 다음에는, 12 D 좌석을, 눌러주세요.";
const page25 = "마찬가지로, 초록색 표시로 변경되었습니다. 이제, 선택 완료를 눌러주세요.";
const page26 = "이제, 결제하기만 남았습니다. 결제금액을 확인해주시고, 카드의 할부 기간을 선택하도록 하겠습니다. 일시불을 눌러주세요.";
const page27 = "선택이 다 되었다면, 결제하기를 눌러주세요.";
const page28 = "키오스크 기계의 특성상, 신용카드 결제만 가능합니다. 현금 결제는, 직원을 통해서 가능하니, 참고해주세요. 표시된 화면을, 눌러주세요.";
const page29 = "실제로 결제할때는, 다음과 같은 화면이 나오면, 카드를 기계에 꽂아주시면 됩니다. 이 시간에는, 결제시작을 눌러주세요.";
const page30 = "결제 완료를 눌러주세요.";
const page31 = "티켓이 나오고 있는, 화면입니다. 화면을 눌러주세요.";
const page32 = "모든 순서가, 완료되었습니다. 이제 티켓이 발급 되면, 기차를 타실 수 있게 됩니다. 완료를 눌러서, 처음 화면으로 돌아가겠습니다.";
const page33 = "이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";

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
    page32,
    page33,
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
    coordinate33
);
