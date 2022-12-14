const pageNum = 14;
const pageName = "53";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "우리WON뱅킹의 전기 요금 납부 서비스를 이용해 보도록 하겠습니다. 먼저, 우리WON뱅킹 앱을 눌러 실행합니다.";
const page2 = "전체 메뉴를 확인하기 위해 우측 하단의 전체를 눌러 줍니다.";
const page3 = "공과금을 눌러 줍니다.";
const page4 = "생활요금/기타를 눌러 줍니다.";
const page5 = "전기요금 납부를 눌러 줍니다.";
const page6 = "고객번호를 입력합니다. 이번 실습에서는 1234567890으로 입력해 볼게요.";
const page7 = "고객번호를 입력했다면, 조회를 눌러 다음 페이지로 넘어갑니다.";
const page8 = "출금 계좌 선택을 위해 계좌 번호 선택 버튼을 누릅니다.";
const page9 = "하단의 계좌를 눌러 출금 계좌로 선택해 줍니다.";
const page10 = "계좌 비밀번호를 입력해 줍니다. 숫자 4자리를 입력해주세요.";
const page11 = "연락처를 작성합니다. 연락처를 숫자만 사용해 입력해 주세요.";
const page12 = "납부하기를 눌러 전기 요금 납부를 완료합니다.";
const page13 = "확인을 누르면 전기 요금 납부가 완료됩니다. 모두 고생하셨습니다.";


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
    page13
);


const inputPage = [
    { page: 5, correctAnswer: "고객번호 10자리 숫자" },
    { page: 9, correctAnswer: "비밀번호 숫자 4자리" },
    { page: 10, correctAnswer: "연락처 숫자만" },
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
    startRateX: 0.24722222222222223, startRateY: 0.015047879616963064, endRateX: 0.5222222222222223, endRateY: 0.17647058823529413
};

const coordinate2 = {
    startRateX: 0.7916666666666666, startRateY: 0.9233926128590971, endRateX: 0.9972222222222222, endRateY: 0.9986320109439124
};

const coordinate3 = {
    startRateX: 0, startRateY: 0.5020519835841313, endRateX: 0.375, endRateY: 0.5581395348837209
};

const coordinate4 = {
    startRateX: 0.36666666666666664, startRateY: 0.7564979480164159, endRateX: 0.9972222222222222, endRateY: 0.8125854993160054
};

const coordinate5 = {
    startRateX: 0.36944444444444446, startRateY: 0.9384404924760602, endRateX: 0.9944444444444445, endRateY: 0.9890560875512996
};

const coordinate6 = {
    startRateX: 0.041666666666666664, startRateY: 0.5075239398084815, endRateX: 0.9527777777777777, endRateY: 0.5759233926128591
};

const coordinate7 = {
    startRateX: 0.058333333333333334, startRateY: 0.5937072503419972, endRateX: 0.9416666666666667, endRateY: 0.6580027359781122
};

const coordinate8 = {
    startRateX: 0.027777777777777776, startRateY: 0.7606019151846786, endRateX: 0.9527777777777777, endRateY: 0.8290013679890561
};
const coordinate9 = {
    startRateX: 0.013888888888888888, startRateY: 0.8303693570451436, endRateX: 0.9777777777777777, endRateY: 0.9357045143638851
};
const coordinate10 = {
    startRateX: 0.044444444444444446, startRateY: 0.6456908344733242, endRateX: 0.9416666666666667, endRateY: 0.7099863201094391
};

const coordinate11 = {
    startRateX: 0.04722222222222222, startRateY: 0.7756497948016415, endRateX: 0.9444444444444444, endRateY: 0.8372093023255814
};

const coordinate12 = {
    startRateX: 0.002777777777777778, startRateY: 0.905608755129959, endRateX: 0.9972222222222222, endRateY: 0.9890560875512996
};

const coordinate13 = {
    startRateX: 0.9972222222222222, startRateY: 0.9917920656634747, endRateX: 0.2638888888888889, endRateY: 0.9069767441860465
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
