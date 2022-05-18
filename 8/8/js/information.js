const pageNum = 12;
const pageName = "8";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "다양한 상품을 찾아보고 구매할 수 있는 쿠팡 앱을 실습해 보겠습니다. 먼저, 앱스토어에 접속해 줍니다.";
const page2 = "앱스토에서 검색창을 눌러 줍니다.";
const page3 = "검색창에 쿠팡을 검색합니다.";
const page4 = "설치를 눌러 쿠팡 앱 설치를 진행해 줍니다.";
const page5 = "설치가 완료되었다면, 열기를 눌러 쿠팡 앱을 실행합니다.";
const page6 = "쿠팡 앱 이용을 위한 권한 동의 화면입니다. 확인을 눌러 쿠팡 홈으로 넘어갑니다.";
const page7 = "쿠팡 홈 화면입니다. 먼저, 카테고리 버튼을 눌러 보겠습니다.";
const page8 =
    "다양한 상품을 카테고리별로 확인할 수 있습니다. 다음으로는, 돋보기 모양의 검색 버튼을 눌러 보겠습니다.";
const page9 =
    "원하는 상품을 검색할 수 있는 검색 화면입니다. 이제 뒤로가기 버튼을 눌러 홈으로 돌아갑니다.";
const page10 =
    "하단의 마이 쿠팡 버튼을 눌러 줍니다.";
const page11 = "로그인을 하면 주문 목록, 찜한 상품, 리뷰 관리, 결제 수단 관리 등 다양한 기능을 이용할 수 있습니다. 마지막으로 장바구니 버튼을 눌러 주세요.";
const page12 = "로그인을 하면 장바구니 기능을 이용할 수 있습니다. 모두 고생하셨습니다.";

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
    startRateX: 0, startRateY: 0.5359375, endRateX: 0.23333333333333334, endRateY: 0.6921875
};

const coordinate2 = {
    startRateX: 0.05555555555555555, startRateY: 0.0375, endRateX: 0.9444444444444444, endRateY: 0.1078125
};

const coordinate3 = {
    startRateX: 0.04722222222222222, startRateY: 0.1171875, endRateX: 0.28888888888888886, endRateY: 0.178125
};

const coordinate4 = {
    startRateX: 0.7833333333333333, startRateY: 0.1390625, endRateX: 0.9555555555555556, endRateY: 0.203125
};

const coordinate5 = {
    startRateX: 0.7833333333333333, startRateY: 0.1390625, endRateX: 0.9555555555555556, endRateY: 0.203125
};

const coordinate6 = {
    startRateX: 0.3888888888888889, startRateY: 0.8546875, endRateX: 0.6083333333333333, endRateY: 0.9078125
};

const coordinate7 = {
    startRateX: 0.03333333333333333, startRateY: 0.8765625, endRateX: 0.1638888888888889, endRateY: 0.93125
};

const coordinate8 = {
    startRateX: 0.21388888888888888, startRateY: 0.875, endRateX: 0.3861111111111111, endRateY: 0.9328125
};

const coordinate9 = {
    startRateX: 0.016666666666666666, startRateY: 0.0390625, endRateX: 0.1, endRateY: 0.0921875
};

const coordinate10 = {
    startRateX: 0.6277777777777778, startRateY: 0.8734375, endRateX: 0.775, endRateY: 0.940625
};

const coordinate11 = {
    startRateX: 0.8222222222222222, startRateY: 0.871875, endRateX: 0.9833333333333333, endRateY: 0.9328125
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
