const pageNum = 12;
const pageName = "3";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`./image/${j}.jpg`);
    audio = new Audio(`./audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "내 손안의 스마트폰 세상, 휴대폰 기본설정 실습에 오신 여러분, 환영합니다. 오늘은, 퀵패널 실습을, 해보겠습니다. 휴대폰마다 구성이 다를수 있다는 점을, 참고해주세요. 화면을 누르면, 다음 화면으로, 넘어가게 됩니다. 화면을 눌러서, 다음 화면으로 넘어가주세요.";
const page2 = "먼저, 휴대폰에서, 표시된 부분을, 살짝 눌러서, 아래로 내려주세요.";
const page3 = "휴대폰의 상단바에는, 시간과 날짜, 그리고 배터리 등의 상태가 나타납니다. 표시된 부분을, 살짝 누른 상태에서, 아래로 끌어내리기 해주세요.";
const page4 = "자주 사용하는 기능의, 빠른 설정을 도와주는 메뉴입니다. 간단하게, 퀵패널이라고, 부르고 있습니다. 먼저, 세로라고 되어있는, 자물쇠 표시는, 화면을 세로로 고정하는, 기능입니다. 휴대폰을 옆으로 돌리면, 화면이 자동으로 옆으로 넓어지면서, 돌아갈때가 있습니다. 바로, 이것을 방지하는 기능입니다. 현재는, 화면이 고정되어있는 상태입니다.";
const page5 = "세로로 설정된 버튼을, 한번 누르면, 자동 회전으로, 변경됩니다. 이렇게 되면, 화면을 옆으로 돌려만주면, 가로로 긴 화면을 볼 수 있습니다. 휴대폰을 움직일때마다, 돌아가는 화면이 싫으시다면, 한번 더 눌러서, 세로로 설정해주세요. 화면이, 고정됩니다.";
const page6 = "손전등을 키면, 어두운 곳에서도 휴대폰으로 밝게 비출 수 있습니다. 한번더 누르면, 종료됩니다.";
const page7 = "절전 모드를 누르면, 휴대폰의 배터리를 아낄 수 있도록, 자동으로 조절이 됩니다. 제 휴대폰에는, 이미 설정이 되어있습니다.";
const page8 = "비행기 탑승 모드는, 인터넷과 전화를, 모두 이용할 수 없게, 차단하는 기능입니다. 이 기능의 활용방법은, 다음 시간에 실습해보겠습니다.";
const page9 = "탑승모드가 켜지면, 이렇게 비행기 표시가 나타납니다.";
const page10 = "그 위에, 전원 버튼을 누르면, 휴대폰을 종료할수 있고, 톱니바퀴 모양의, 설정버튼을 누르면, 휴대폰 설정 화면으로 이동할수 있습니다.";
const page11 = "휴대폰 하단에는, 실행중인 앱을 모아볼수 있는 버튼과, 휴대폰 홈화면으로 돌아갈수 있는 홈버튼, 그리고 뒤로가기 버튼이 있습니다. 이제, 뒤로가기를 눌러서, 퀵패널을 종료하겠습니다.";
const page12 = "이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";


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
