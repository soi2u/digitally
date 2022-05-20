const pageNum = 14;
const pageName = "45";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 실습에서는 온라인 쇼핑 앱인 11번가에서 상품을 검색해 보도록 하겠습니다. 먼저, 11번가를 눌러 실행해 주세요.";
const page2 = "11번가 메인 홈이 실행됩니다. 이제, 검색창을 눌러 주세요.";
const page3 = "이번 시간에는 휴지를 검색해 보도록 할게요. 검색창에 휴지를 입력해 주세요.";
const page4 = "휴지를 입력했다면, 검색 결과에 휴지 또는 돋보기 모양 버튼을 눌러 주세요.";
const page5 = "검색 결과가 보입니다. 상품을 다른 기준으로 정렬해 볼게요. 필터를 눌러 줍니다.";
const page6 = "랭킹순이 기본 설정으로 되어 있습니다. 인기순으로 변경해 상품을 확인해 볼게요. ";
const page7 = "인기순으로 정렬된 상품이 보입니다. 가장 위에 있는 상품을 눌러 볼게요.";
const page8 =
    "상품 화면입니다. 화면을 아래로 내려 더 자세한 정보를 알아볼게요.";
const page9 =
    "배송 옵션과 혜택 등 다양한 상품 정보를 알아볼 수 있습니다. 하트를 누르면 찜을 할 수 있습니다. 이번 실습에서는 로그인을 하지 않았으니, 공유 버튼만 눌러 보도록 할게요.";
const page10 =
    "공유 버튼을 누르면 다양한 메신저 또는 링크로 공유할 수 있는 공유 링크가 나옵니다. 이번 실습에서는 뒤로가기를 눌러 돌아갈게요.";
const page11 = "화면을 조금 더 내리면 상품 설명이 나옵니다. 다음은 리뷰를 눌러 볼게요.";
const page12 =
    "리뷰를 누르면 상품에 대한 리뷰를 별점과 글로 확인할 수 있습니다. 다음은 QNA를 눌러 볼게요.";
const page13 =
    "QNA를 누르면 상품에 대한 문의를 남길 수 있습니다. 마지막으로, 판매자 정보를 눌러 볼게요";
const page14 = "판매자정보를 누르면 판매자에 대한 정보와 A/S정보 등을 확인할 수 있습니다. 모두 고생하셨습니다.";

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
    page14
);


const inputPage = [{ page: 2, correctAnswer: "휴지" }];

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
    startRateX: 0.575, startRateY: 0.665625, endRateX: 0.8055555555555556, endRateY: 0.834375
};

const coordinate2 = {
    startRateX: 0.19166666666666668, startRateY: 0.04375, endRateX: 0.85, endRateY: 0.1
};

const coordinate3 = {
    startRateX: 0.1, startRateY: 0.090625, endRateX: 0.8555555555555555, endRateY: 0.165625
};

const coordinate4 = {
    startRateX: 0, startRateY: 0.0828125, endRateX: 0.9972222222222222, endRateY: 0.2296875
};

const coordinate5 = {
    startRateX: 0.8027777777777778, startRateY: 0.1625, endRateX: 0.9972222222222222, endRateY: 0.24375
};

const coordinate6 = {
    startRateX: 0.3611111111111111, startRateY: 0.3328125, endRateX: 0.9972222222222222, endRateY: 0.409375
};

const coordinate7 = {
    startRateX: 0, startRateY: 0.2359375, endRateX: 0.9972222222222222, endRateY: 0.5296875
};

const coordinate8 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate9 = {
    startRateX: 0.5, startRateY: 0.7640625, endRateX: 0.9972222222222222, endRateY: 0.840625
};

const coordinate10 = {
    startRateX: 0.3611111111111111, startRateY: 0.990625, endRateX: 0, endRateY: 0.940625
};

const coordinate11 = {
    startRateX: 0.25, startRateY: 0.0421875, endRateX: 0.5, endRateY: 0.1125
};

const coordinate12 = {
    startRateX: 0.4722222222222222, startRateY: 0.0375, endRateX: 0.775, endRateY: 0.1125
};

const coordinate13 = {
    startRateX: 0.7388888888888889, startRateY: 0.0421875, endRateX: 0.9888888888888889, endRateY: 0.1140625
};

const coordinate14 = {
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
    coordinate14
);
