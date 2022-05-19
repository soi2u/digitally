const pageNum = 13;
const pageName = "";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`./image/${j}.jpg`);
    audio = new Audio(`./audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "내 손안의 스마트폰 세상, 휴대폰 기본설정 실습에 오신 여러분, 환영합니다. 오늘은, 와이파이와, 블루투스 연결하는 방법을, 실습해보겠습니다. 휴대폰마다 구성이 다를수 있다는 점을, 참고해주세요. 화면을 누르면, 다음 화면으로, 넘어가게 됩니다. 화면을 눌러서, 다음 화면으로 넘어가주세요.";
const page2 = "먼저, 휴대폰에서, 톱니바퀴 모양의, 설정을 찾은 다음에, 눌러서 실행해주세요.";
const page3 = "설정 화면에서 연결을 눌러주세요.";
const page4 = "와이파이와, 블루투스 등이, 보입니다. 와이파이는, 인터넷 연결에 필요한 기능이고, 블루투스는, 다른 기기와의 연결에 필요한 기능입니다. 먼저 와이파이 옆에, 빈 공간을 눌러주세요.";
const page5 = "이제, 와이파이가 켜졌습니다. 그럼 와이파이를 한 번 눌러볼까요?";
const page6 = "위쪽에, 사용중이라는 글자와 함께, 파란색 표시가 되어있습니다. 즉,, 와이파이가 켜진 상태라는 뜻입니다. 이제, 사용 가능한 네트워크 중에, 하나를 눌러보겠습니다.";
const page7 = "보통, 와이파이는 비밀번호가 걸려있습니다. 해당 와이파이의 비밀번호는, 와이파이의 주인을 통해, 알 수 있습니다.예를 들어, 카페에서 연결할 경우, 카페 직원에게, 물어보면 됩니다. 비밀번호를 눌러주세요.";
const page8 = "입력할 수 있는, 휴대폰의 자판이 뜨면, 비밀번호를 입력해주시면 됩니다.";
const page9 = "휴대폰 화면, 왼쪽 위에, 뒤로가기 화살표를, 눌러주세요.";
const page10 = "이번에는, 블루투스를 눌러볼까요?";
const page11 = "와이파이와 마찬가지로, 화면 위쪽에는, 사용중이라는 글자와 함께, 파란색으로 표시가 되어있습니다. 이는, 블루투스가 켜져 있다는 말입니다. 블루투스 이어폰 등, 다양한 기기와 연결할수 있습니다. 이제, 블루투스를 연결할 기기를, 골라보겠습니다. 표시된 부분을 눌러주세요.";
const page12 = "연결중이라는 표시가 뜬 다음, 연결이 되면, 글자가 파란색으로, 바뀌게 됩니다. 이제, 무선이어폰과 같은, 블루투스 기기들을 연결해서 사용할수 있습니다. 이제, 여러분도 와이파이와 블루투스를 활용해보세요.";
const page13 = "모바일 네트워크 데이터의 사용 방법에 대해서는, 왕초보 스마트폰 기초 과정을, 참고해주세요.이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";

pageDescArray.push(page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13);

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
	coordinate13
);