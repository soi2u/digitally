const pageNum = 8;
const pageName = "25";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 지난 시간에 이어서, 카카오톡의 기능을, 살펴보겠습니다. 카카오톡에서, 친구추가 하는법을, 알아볼까요? 다음 화면으로, 넘어가주세요.";
const page2 = "휴대폰에서, 카카오톡을 찾은 다음, 눌러서 실행해주세요.";
const page3 = "친구를 어떻게 추가하는지, 확인해볼까요? 사람표시를 눌러주세요.";
const page4 = "다양한 방법으로, 친구추가를 할수 있습니다. 기본적으로, 휴대폰 번호를 저장한 상대라면, 카카오톡도 자동으로 추가되지만, 연락처를 직접 입력해서, 추가하기도 가능합니다. 한번, 눌러볼까요?";
const page5 = "이렇게, 이름과, 번호를 입력해서, 친구를 추가할수 있습니다. 이제, 뒤로가기를 눌러주세요.";
const page6 = "아이디로 추가하기를 누르면, 휴대폰 번호를 모르는 상태에서도, 추가가 가능합니다. 아이디로 추가를, 눌러볼까요?";
const page7 = "이렇게, 아이디를 입력해서 추가할수 있고, 그 밑에는, 여러분의 아이디를, 확인할수 있습니다. 여러분의 휴대폰에서도, 확인해보세요. 이제 뒤로가기를 눌러 카카오톡 첫 화면으로 이동하겠습니다.";
const page8 = "이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";


pageDescArray.push(
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8
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
    startRateX: 0.20277777777777778, startRateY: 0.2953125, endRateX: 0.025, endRateY: 0.171875
};

const coordinate3 = {
    startRateX: 0.6944444444444444, startRateY: 0.0484375, endRateX: 0.7805555555555556, endRateY: 0.090625
};

const coordinate4 = {
    startRateX: 0.25555555555555554, startRateY: 0.1109375, endRateX: 0.49166666666666664, endRateY: 0.2296875
};

const coordinate5 = {
    startRateX: 0.10833333333333334, startRateY: 0.090625, endRateX: 0.03333333333333333, endRateY: 0.046875
};

const coordinate6 = {
    startRateX: 0.5444444444444444, startRateY: 0.1140625, endRateX: 0.6972222222222222, endRateY: 0.21875
};

const coordinate7 = {
    startRateX: 0.10833333333333334, startRateY: 0.0875, endRateX: 0.030555555555555555, endRateY: 0.0453125
};

const coordinate8 = {
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
    coordinate8
);
