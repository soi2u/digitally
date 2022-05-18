const pageNum = 18;
const pageName = "41";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 실습에서는 안 쓰는 물건들을 판매하고, 필요한 중고 물건을 쉽게 구입할 수 있는 당근마켓 앱 회원가입을 실습해 보도록 하겠습니다. 먼저, 앱스토어를 눌러 실행해 주세요.";
const page2 = "검색을 위해 검색창을 눌러 주세요.";
const page3 = "검색창에 당근마켓을 입력해 주세요.";
const page4 = "당근마켓을 눌러 설치 페이지로 이동해 주세요.";
const page5 = "설치 버튼을 눌러 당근마켓을 설치해 주세요.";
const page6 = "설치가 완료되었다면, 열기를 눌러 당근마켓 앱을 실행해 주세요.";
const page7 = "당근마켓 앱을 시작하기 위해 시작하기를 눌러 주세요.";
const page8 =
    "허용을 눌러 당근마켓 앱에 위치 정보를 제공합니다.";
const page9 =
    "현재 위치를 선택해 주세요.";
const page10 =
    "당근마켓을 이용하기 위해 모두 동의를 눌러 줍니다.";
const page11 = "약관에 동의했다면, 시작하기를 눌러 당근마켓을 시작해 볼게요.";
const page12 =
    "휴대폰 번호를 인증하기 위해 입력칸에 휴대폰 번호를 입력합니다.";
const page13 =
    "입력했다면, 인증번호 받기를 눌러 주세요.";
const page14 = "인증번호가 자동으로 입력되는 것을 기다리거나, 문자로 도착한 인증번호를 입력한 후 확인을 눌러 주세요.";
const page15 = "이제, 프로필을 입력해 볼게요. 입력칸에 닉네임을 입력해 주세요.";
const page16 = "닉네임을 입력했다면, 다음을 눌러 넘어가 주세요.";
const page17 = "이상으로 당근마켓 가입이 모두 완료되었습니다. 고생하셨습니다.";
const page18 = "이상으로 당근마켓 가입이 모두 완료되었습니다. 고생하셨습니다.";

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
    startRateX: 0.4, startRateY: 0.6640625, endRateX: 0.5972222222222222, endRateY: 0.80625
};

const coordinate2 = {
    startRateX: 0.002777777777777778, startRateY: 0.0375, endRateX: 1, endRateY: 0.1140625
};

const coordinate3 = {
    startRateX: 0.002777777777777778, startRateY: 0.0375, endRateX: 1, endRateY: 0.1140625
};

const coordinate4 = {
    startRateX: 0.9972222222222222, startRateY: 0.1109375, endRateX: 0, endRateY: 0.203125
};

const coordinate5 = {
    startRateX: 0, startRateY: 0.41875, endRateX: 1, endRateY: 0.3203125
};

const coordinate6 = {
    startRateX: 0.5, startRateY: 0.2375, endRateX: 1, endRateY: 0.309375
};

const coordinate7 = {
    startRateX: 0, startRateY: 0.85, endRateX: 0.9944444444444445, endRateY: 0.74375
};

const coordinate8 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate9 = {
    startRateX: 0.65, startRateY: 0.5234375, endRateX: 0.8472222222222222, endRateY: 0.5984375
};

const coordinate10 = {
    startRateX: 0.013888888888888888, startRateY: 0.6265625, endRateX: 0.9916666666666667, endRateY: 0.5609375
};

const coordinate11 = {
    startRateX: 1, startRateY: 0.825, endRateX: 0.002777777777777778, endRateY: 0.984375
};

const coordinate12 = {
    startRateX: 0.002777777777777778, startRateY: 0.2390625, endRateX: 1, endRateY: 0.353125
};

const coordinate13 = {
    startRateX: 0, startRateY: 0.428125, endRateX: 1, endRateY: 0.3453125
};

const coordinate14 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate15 = {
    startRateX: 0.9916666666666667, startRateY: 0.528125, endRateX: 0.002777777777777778, endRateY: 0.4296875
};

const coordinate16 = {
    startRateX: 0.9916666666666667, startRateY: 0.528125, endRateX: 0.002777777777777778, endRateY: 0.4296875
};

const coordinate17= {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate18= {
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
    coordinate14,
    coordinate15,
    coordinate16,
    coordinate17,
    coordinate18
);
