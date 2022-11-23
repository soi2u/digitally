const pageNum = 11;
const pageName = "30";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 여러분의 카카오톡 보안을 지키기 위해서, 잠금하는 방법을 알려드리겠습니다. 다음 화면으로, 넘어가주세요.";
const page2 = "휴대폰에서, 카카오톡을 찾은 다음, 눌러서 실행해주세요.";
const page3 = "이제, 설정에 들어가서, 화면잠금을 진행해보겠습니다. 톱니바퀴 표시를, 눌러주세요.";
const page4 = "전체 설정을 눌러주세요.";
const page5 = "개인 및 보안을 눌러주세요.";
const page6 = "화면잠금을 눌러주세요.";
const page7 = "비밀번호를 눌러서, 비밀번호를 설정해주세요. 혹은, 패턴으로 설정하기도 가능합니다. 비밀번호나 패턴을 잊어버리면, 카카오 톡을 삭제했다가, 다시 설치해야 하므로, 꼭 기억해주세요.";
const page8 = "비밀번호가 잘 적용되었는지, 확인하기 위해서, 카카오톡을 다시 실행해보겠습니다. 다음 화면으로, 넘어가주세요.";
const page9 = "카카오톡을 눌러주세요.";
const page10 = "이제, 화면이 잠금되었습니다. 설정했던 비밀번호를 입력해주세요.여러분의 휴대폰에서도, 카카오톡을 다시 실행하면, 잠금화면이 되어있을 것입니다.";
const page11 = "이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";


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
    page11
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
    startRateX: 0.19722222222222222, startRateY: 0.3015625, endRateX: 0.019444444444444445, endRateY: 0.1703125
};

const coordinate3 = {
    startRateX: 0.8666666666666667, startRateY: 0.03125, endRateX: 1, endRateY: 0.1015625
};

const coordinate4 = {
    startRateX: 0.48333333333333334, startRateY: 0.21875, endRateX: 0.725, endRateY: 0.278125
};

const coordinate5 = {
    startRateX: 0.011111111111111112, startRateY: 0.384375, endRateX: 0.9638888888888889, endRateY: 0.446875
};

const coordinate6 = {
    startRateX: 0, startRateY: 0.4765625, endRateX: 0.9972222222222222, endRateY: 0.5796875
};

const coordinate7 = {
    startRateX: 0.019444444444444445, startRateY: 0.1828125, endRateX: 0.9861111111111112, endRateY: 0.25625
};

const coordinate8 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate9 = {
    startRateX: 0.008333333333333333, startRateY: 0.159375, endRateX: 0.21944444444444444, endRateY: 0.3171875
};

const coordinate10 = {
    startRateX: 0.11388888888888889, startRateY: 0.1390625, endRateX: 0.9111111111111111, endRateY: 0.43125
};

const coordinate11 = {
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
    coordinate11
);
