
const pageNum = 12;
const pageName = "";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`./image/${j}.jpg`);
    audio = new Audio(`./audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "내 손안의 스마트폰 세상, 휴대폰 기본설정 실습에 오신, 여러분, 환영합니다. 오늘은, 휴대폰 디스플레이 설정을, 해보겠습니다. 휴대폰마다 구성이 다를수 있다는 점을, 참고해주세요. 화면을 누르면, 다음 화면으로, 넘어가게 됩니다. 화면을 눌러서, 다음 화면으로 넘어가주세요.";
const page2 = "먼저, 휴대폰에서, 톱니바퀴 모양의, 설정을 찾은 다음에, 눌러서 실행해주세요";
const page3 = "모든 휴대폰은, 기본적으로 설정을 할수 있습니다. 휴대폰의 기종에 따라, 기본적으로 제공되는, 기능과 구성이 차이가 있을 수 있습니다. 다음 화면으로, 넘어가주세요.";
const page4 = "이제, 화면 디스플레이를 설정해보겠습니다. 디스플레이를 눌러주세요.";
const page5 = "화면 디스플레이를 누르면, 화면의 밝기와 글자 등을, 설정할 수 있습니다. 밝기를 한 번 조정해보겠습니다. 파란색 막대기를, 옆으로 왔다갔다 하면서, 눈이 편한 밝기로 조정해보세요.";
const page6 = "이제, 화면 밝기를, 자동으로 조정해보겠습니다. 밝기 최적화 옆에, 빈 공간을눌러볼까요?";
const page7 = "밝기 최적화 옆에, 빈 공간이 파란색으로 표시가 되면서, 밝기 밑에 막대기 표시에, 파란색이 자동으로 줄어들었습니다. 주변의 환경에 따라, 화면의 밝기가 자동으로 조절됩니다. 이제, 글자 크기와 스타일을 눌러볼까요?";
const page8 = "여기서, 글꼴과 글자의 굵기, 글자의 크기를 조절할 수 있습니다. 동그라미 표시를, 왼쪽 오른쪽으로 움직여서, 글자 크기를 조절해봅시다. 동그라미 표시를, 제일 오른쪽으로, 이동해주세요.";
const page9 = "글자 크기가, 확대되었습니다. 이제, 뒤로가기를 눌러서, 변경되었는지, 확인해볼까요? 뒤로가기를 눌러주세요.";
const page10 = "글자가 커진것을, 확인할수 있습니다. 마지막으로, 휴대폰 배터리를, 절약하기 위해서, 화면 자동 꺼짐 시간을, 설정해보겠습니다.";
const page11 = "15초를 선택하면, 휴대폰을 사용하지 않고 가만히 두게 될 때, 15초가 지나면, 화면이 자동으로 꺼지게 됩니다. 이제, 휴대폰의 화면을, 여러분에게 맞게, 설정해보세요.";
const page12 = "이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";

pageDescArray.push(page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12);

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
