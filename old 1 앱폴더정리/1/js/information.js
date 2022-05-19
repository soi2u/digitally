const pageNum = 12;
const pageName = "";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`./image/${j}.jpg`);
    audio = new Audio(`./audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 보너스로, 휴대폰의 앱을 정리할수 있는, 꿀팁을 공유드리도록 하겠습니다. 휴대폰 기종마다, 차이가 있을수 있다는점을, 참고해주세요. 먼저, 앱들이 모여있는, 화면으로 이동해볼까요? 화면을, 움직여주세요.";
const page2 = "정리가 되지 않은, 앱들이 있습니다. 먼저, 네이버 지도앱을, 살짝 눌러볼까요?";
const page3 = "앱을, 1,2초정도 누른다음, 드래그 해주세요. 여러분의 휴대폰에서, 적당한 앱을 골라서, 함께 해주세요.";
const page4 = "이렇게, 앱을 겹쳐지게 해보겠습니다.";
const page5 = "폴더가 생성되었습니다. 이번에는, 폴더 이름을 변경해볼까요?";
const page6 = "교통이라고 입력해주세요.";
const page7 = "이제, 해당 폴더에, 앱을 추가해볼까요? 더하기 표시를, 눌러주세요.";
const page8 = "원하는 앱을, 선택한 다음, 추가할수 있습니다. 이제, 뒤로가기 화살표를 눌러주세요.";
const page9 = "카카오 버스앱도, 드래그해서 폴더에 담아보겠습니다.";
const page10 = "화면의 아무곳이나 눌러주세요.";
const page11 = "카카오 지하철앱도, 같은 방법으로 이동해보겠습니다.";
const page12 = "네개의 앱이, 한 폴더에 정리된 것을, 확인할수 있습니다. 매우 유용한 기능이니, 여러분도 한번 활용해보세요.";

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