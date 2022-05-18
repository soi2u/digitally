const pageNum = 21;
const pageName = "38";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "오늘은 카카오 아이디를 이용해 웹툰, 소설 등 여가를 즐길 수 있는 카카오페이지를 실습해 보도록 하겠습니다. 먼저, 앱스토어를 눌러 실행해 줍니다.";
const page2 = "앱스토어 검색창을 눌러 줍니다.";
const page3 = "카카오페이지를 입력해 줍니다.";
const page4 = "카카오페이지를 눌러 설치 화면으로 이동합니다.";
const page5 = "카카오페이를 설치해 줍니다.";
const page6 = "카카오페이 설치가 끝났다면, 열기를 눌러 실행해 줍니다.";
const page7 = "카카오페이지의 앱 사용 권한 안내입니다. 저장공간을 활용하기 위해 확인을 눌러 줍니다.";
const page8 = "카카오계정으로 로그인해 줄게요. 카카오 계정으로 로그인을 클릭합니다.";
const page9 = "카카오페이지를 이용하기 위해 전체 동의하기를 눌러 줍니다.";
const page10 = "동의하기를 눌렀다면, 동의하고 계속하기를 눌러 다음으로 넘어가 주세요.";
const page11 = "이용 약관에 대한 설명입니다. 필수 약관만 모두 동의해 볼게요. 첫 번째, 서비스 약관에 동의해 줍니다.";
const page12 = "두번 째, 개인정보 수집에 동의해 줍니다.";
const page13 = "세번 째, 카카페이지 유료서비스 이용 약관에 동의해 줍니다.";
const page14 = "마지막으로 개인 정보 제공에 동의해 줍니다.";
const page15 = "필수 약관에 모두 동의했다면, 동의하고 가입하기를 눌러 줍니다.";
const page16 = "확인을 눌러 카카오페이지를 실행합니다.";
const page17 = "사용할 닉네임과 프로필을 확인해 줍니다. 이번에는 카카오톡 프로필 그대로 이용해 볼게요. 저장을 눌러 줍니다.";
const page18 = "다시 보지 않기를 눌러 줍니다.";
const page19 = "확인을 눌러 가입 축하 선물을 받아 줍니다.";
const page20 = "이벤트 페이지는 아니오를 눌러 넘어가 줄게요.";
const page21 = "카카오페이지 가입이 완료되었습니다. 다음 시간에는 카카오페이지를 둘러볼게요. 모두 고생하셨습니다.";

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
    page21
);


const inputPage = [{ page: 2, correctAnswer: "카카오페이지" }];

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
    startRateX: 0.6083333333333333, startRateY: 0.8015625, endRateX: 0.3972222222222222, endRateY: 0.6734375
};

const coordinate2 = {
    startRateX: 0.9388888888888889, startRateY: 0.103125, endRateX: 0.058333333333333334, endRateY: 0.034375
};

const coordinate3 = {
    startRateX: 0.9888888888888889, startRateY: 0.1046875, endRateX: 0.011111111111111112, endRateY: 0.028125
};

const coordinate4 = {
    startRateX: 0.005555555555555556, startRateY: 0.10625, endRateX: 0.9833333333333333, endRateY: 0.1890625
};

const coordinate5 = {
    startRateX: 0.013888888888888888, startRateY: 0.3328125, endRateX: 0.008333333333333333, endRateY: 0.3328125
};

const coordinate6 = {
    startRateX: 0.9722222222222222, startRateY: 0.3109375, endRateX: 0.49722222222222223, endRateY: 0.2375
};

const coordinate7 = {
    startRateX: 0.9722222222222222, startRateY: 0.3109375, endRateX: 0.49722222222222223, endRateY: 0.2375
};

const coordinate8 = {
    startRateX: 0.075, startRateY: 0.815625, endRateX: 0.9277777777777778, endRateY: 0.890625
};

const coordinate9 = {
    startRateX: 0.06111111111111111, startRateY: 0.284375, endRateX: 0.9472222222222222, endRateY: 0.3421875
};

const coordinate10 = {
    startRateX: 0.041666666666666664, startRateY: 0.64375, endRateX: 0.9555555555555556, endRateY: 0.7234375
};

const coordinate11 = {
    startRateX: 0.03611111111111111, startRateY: 0.1265625, endRateX: 0.9638888888888889, endRateY: 0.190625
};

const coordinate12 = {
    startRateX: 0.03333333333333333, startRateY: 0.1828125, endRateX: 0.9583333333333334, endRateY: 0.2453125
};

const coordinate13 = {
    startRateX: 0.03333333333333333, startRateY: 0.240625, endRateX: 0.9694444444444444, endRateY: 0.303125
};

const coordinate14 = {
    startRateX: 0.027777777777777776, startRateY: 0.296875, endRateX: 0.9694444444444444, endRateY: 0.3578125
};

const coordinate15 = {
    startRateX: 0.03333333333333333, startRateY: 0.6234375, endRateX: 0.9666666666666667, endRateY: 0.696875
};

const coordinate16 = {
    startRateX: 0.5694444444444444, startRateY: 0.55, endRateX: 0.7833333333333333, endRateY: 0.63125
};

const coordinate17 = {
    startRateX: 0.03333333333333333, startRateY: 0.425, endRateX: 0.9694444444444444, endRateY: 0.4875
};

const coordinate18 = {
    startRateX: 0.49444444444444446, startRateY: 0.9375, endRateX: 0, endRateY: 0.88125
};

const coordinate19 = {
    startRateX: 0.08055555555555556, startRateY: 0.5921875, endRateX: 0.9083333333333333, endRateY: 0.6546875
};

const coordinate20 = {
    startRateX: 0.08611111111111111, startRateY: 0.5796875, endRateX: 0.5166666666666667, endRateY: 0.646875
};

const coordinate21 = {
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
    coordinate21
);
