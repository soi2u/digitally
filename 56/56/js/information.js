const pageNum = 38;
const pageName = "56";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "우리WON뱅킹으로 계좌 만드는 법을 실습해 보겠습니다. 먼저, 우리WON뱅킹 앱을 눌러 실행해 주세요.";
const page2 = "우측 하단의 전체 버튼을 눌러 주세요.";
const page3 = "상품 가입을 눌러 주세요.";
const page4 = "입출금 상품 가입을 눌러 주세요.";
const page5 = "WON 통장 + 개인형 IRP 통장의 자세히 보기 버튼을 눌러 주세요.";
const page6 = "가입하기를 눌러 주세요.";
const page7 = "다음 버튼을 눌러 주세요.";
const page8 = "통신사 선택을 눌러 주세요.";
const page9 = "SKT를 눌러 주세요.";
const page10 = "전체 동의를 눌러 주세요.";
const page11 = "인증번호 요청 버튼을 눌러 주세요.";
const page12 = "인증번호 123456을 입력해 주세요.";
const page13 = "인증하기 버튼을 눌러 주세요.";
const page14 = "확인을 눌러 인증을 완료해 주세요.";
const page15 = "주민등록증이나 운전면허증 또는 모바일 운전면허증을 가지고 계신가요? 라는 질문에 예를 눌러 주세요.";
const page16 = "최근 한달이내에 입출금 통장을 만드셨나요? 라는 질문에 아니오를 눌러 주세요.";
const page17 = "다음을 눌러 주세요.";
const page18 = "확인을 눌러 계좌 개설을 진행해 주세요.";
const page19 = "신분증 촬영을 눌러 주세요.";
const page20 = "신분증 촬영을 진행해 주세요. 이번 실습에서는 운전면허증 부분을 선택해 넘어가도록 하겠습니다.";
const page21 = "신분증 확인하기 버튼을 눌러 주세요.";
const page22 = "은행/증권사 선택을 눌러 주세요.";
const page23 = "국민은행을 눌러 주세요.";
const page24 = "계좌번호 열세 자리를 입력해 주세요.";
const page25 = "계좌 비밀번호 네 자리를 입력해 주세요.";
const page26 = "계좌 인증을 눌러 넘어가 주세요.";
const page27 = "전체 동의를 눌러 주세요.";
const page28 = "선택 항목인, 개인 정보 수집 및 이용 동의서 옆의 체크 버튼을 눌러 동의해 주세요.";
const page29 = "동의하고 계속 진행합니다를 눌러 주세요.";
const page30 = "다음을 눌러 주세요.";
const page31 = "다시 한번, 다음을 눌러 주세요.";
const page32 = "마지막으로, 다음을 눌러 주세요.";
const page33 = "비밀번호 숫자 네 자리를 눌러 주세요.";
const page34 = "다시 한번, 비밀번호 숫자 네 자리를 눌러 주세요.";
const page35 = "다음을 눌러 넘어가 주세요.";
const page36 = "다시 한번, 다음을 눌러 주세요.";
const page37 = "확인을 눌러 가입을 완료해 주세요. 모두 고생하셨습니다.";


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
    page35,
    page36,
    page37,
);


const inputPage = [
    { page: 6, correctAnswer: "입금할 계좌 번호 열세 자리" },
    { page: 8, correctAnswer: "15300" },
];

function handleInput(pageNumber) {
    for (i = 0; i < inputPage.length; i++) {
        if (pageNumber === inputPage[i].page) {
            DrawInputBox(coordinateArray[pageNumber]);
            let answer = inputPage[i].correctAnswer;
            document.querySelector(".input-answer").addEventListener("keydown", function (event) {
                if (event.keyCode === 13) {
                    typeofAnswer = Number(this.value);
                    if (pageNumber === 5) {
                        if (4 <= this.value.length && this.value.length <= 13 && isNaN(typeofAnswer) === false) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 9) {
                        if (4 <= this.value.length && this.value.length <= 4 && isNaN(typeofAnswer) === false) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 10) {
                        if (5 <= this.value.length && this.value.length <= 13 && isNaN(typeofAnswer) === false) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    }
                }
            });
        }
    }
}

const coordinate1 = {
    startRateX: 0.5138888888888888, startRateY: 0.14774281805745554, endRateX: 0.23333333333333334, endRateY: 0.016415868673050615
};

const coordinate2 = {
    startRateX: 0.7944444444444444, startRateY: 0.9179206566347469, endRateX: 0.9972222222222222, endRateY: 0.9890560875512996
};

const coordinate3 = {
    startRateX: 0.25277777777777777, startRateY: 0.2024623803009576, endRateX: 0.4777777777777778, endRateY: 0.36662106703146374
};

const coordinate4 = {
    startRateX: 0.36666666666666664, startRateY: 0.36662106703146374, endRateX: 0.9972222222222222, endRateY: 0.42544459644322846
};

const coordinate5 = {
    startRateX: 0.05277777777777778, startRateY: 0.17236662106703146, endRateX: 0.9416666666666667, endRateY: 0.49794801641586867
};

const coordinate6 = {
    startRateX: 0.33611111111111114, startRateY: 0.9001367989056087, endRateX: 0.6666666666666666, endRateY: 0.9890560875512996
};

const coordinate7 = {
    startRateX: 0.25833333333333336, startRateY: 0.8987688098495212, endRateX: 0.9972222222222222, endRateY: 0.9890560875512996
};

const coordinate8 = {
    startRateX: 0.03888888888888889, startRateY: 0.15321477428180574, endRateX: 0.37222222222222223, endRateY: 0.21751025991792067
};

const coordinate9 = {
    startRateX: 0.002777777777777778, startRateY: 0.6730506155950753, endRateX: 0.9972222222222222, endRateY: 0.7359781121751026
};
const coordinate10 = {
    startRateX: 0.002777777777777778, startRateY: 0.22024623803009577, endRateX: 0.9944444444444445, endRateY: 0.2982216142270862
};
const coordinate11 = {
    startRateX: 0, startRateY: 0.5143638850889193, endRateX: 0.9972222222222222, endRateY: 0.6224350205198358
};
const coordinate12 = {
    startRateX: 0.027777777777777776, startRateY: 0.6662106703146374, endRateX: 0.6861111111111111, endRateY: 0.7209302325581395
};
const coordinate13 = {
    startRateX: 0.6666666666666666, startRateY: 0.6607387140902873, endRateX: 0.9527777777777777, endRateY: 0.7264021887824897
};
const coordinate14 = {
    startRateX: 0.06111111111111111, startRateY: 0.5376196990424077, endRateX: 0.9361111111111111, endRateY: 0.6114911080711354
};

const coordinate15 = {
    startRateX: 0.04722222222222222, startRateY: 0.2448700410396717, endRateX: 0.5, endRateY: 0.320109439124487
};

const coordinate16 = {
    startRateX: 0.49166666666666664, startRateY: 0.38303693570451436, endRateX: 0.9472222222222222, endRateY: 0.45690834473324216
};

const coordinate17 = {
    startRateX: 0.005555555555555556, startRateY: 0.9110807113543091, endRateX: 0.9972222222222222, endRateY: 0.9917920656634747
};

const coordinate18 = {
    startRateX: 0.49444444444444446, startRateY: 0.5813953488372093, endRateX: 0.9583333333333334, endRateY: 0.66484268125855
};

const coordinate19 = {
    startRateX: 0.005555555555555556, startRateY: 0.9151846785225718, endRateX: 0.9944444444444445, endRateY: 0.9986320109439124
};

const coordinate20 = {
    startRateX: 0.06388888888888888, startRateY: 0.046511627906976744, endRateX: 0.925, endRateY: 0.31053351573187415
};

const coordinate21 = {
    startRateX: 0.3055555555555556, startRateY: 0.905608755129959, endRateX: 0.9972222222222222, endRateY: 0.9849521203830369
};

const coordinate22 = {
    startRateX: 0.008333333333333333, startRateY: 0.3036935704514364, endRateX: 0.9805555555555555, endRateY: 0.3734610123119015
};

const coordinate23 = {
    startRateX: 0.4444444444444444, startRateY: 0.6169630642954856, endRateX: 0.9972222222222222, endRateY: 0.6922024623803009
};

const coordinate24 = {
    startRateX: 0.05, startRateY: 0.45690834473324216, endRateX: 0.9416666666666667, endRateY: 0.521203830369357
};

const coordinate25 = {
    startRateX: 0.044444444444444446, startRateY: 0.6087551299589603, endRateX: 0.95, endRateY: 0.6716826265389877
};

const coordinate26 = {
    startRateX: 0, startRateY: 0.9069767441860465, endRateX: 0.9972222222222222, endRateY: 0.9890560875512996
};

const coordinate27 = {
    startRateX: 0.002777777777777778, startRateY: 0.15595075239398085, endRateX: 0.9972222222222222, endRateY: 0.2188782489740082
};

const coordinate28 = {
    startRateX: 0.05, startRateY: 0.3064295485636115, endRateX: 0.9472222222222222, endRateY: 0.4186046511627907
};

const coordinate29 = {
    startRateX: 0.002777777777777778, startRateY: 0.9151846785225718, endRateX: 0.9972222222222222, endRateY: 0.9931600547195623
};

const coordinate30 = {
    startRateX: 0.005555555555555556, startRateY: 0.9233926128590971, endRateX: 0.9972222222222222, endRateY: 0.9986320109439124
};

const coordinate31 = {
    startRateX: 0.005555555555555556, startRateY: 0.9233926128590971, endRateX: 0.9972222222222222, endRateY: 0.9986320109439124
};

const coordinate32 = {
    startRateX: 0.31666666666666665, startRateY: 0.8905608755129959, endRateX: 0.975, endRateY: 0.9917920656634747
};

const coordinate33 = {
    startRateX: 0.04722222222222222, startRateY: 0.3844049247606019, endRateX: 0.9472222222222222, endRateY: 0.45690834473324216
};

const coordinate34 = {
    startRateX: 0.05, startRateY: 0.47606019151846785, endRateX: 0.9555555555555556, endRateY: 0.5499316005471956
};

const coordinate35 = {
    startRateX: 0, startRateY: 0.9233926128590971, endRateX: 0.9972222222222222, endRateY: 0.9972640218878249
};

const coordinate36 = {
    startRateX: 0.041666666666666664, startRateY: 0.5294117647058824, endRateX: 0.9583333333333334, endRateY: 0.6073871409028728
};

const coordinate37 = {
    startRateX: 0.9694444444444444, startRateY: 0.960328317373461, endRateX: 0.9694444444444444, endRateY: 0.960328317373461
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
    coordinate35,
    coordinate36,
    coordinate37,
);
