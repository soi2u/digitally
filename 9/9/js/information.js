const pageNum = 7;
const pageName = "9";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번에는 쿠팡에서 상품을 검색하는 실습을 진행해 보겠습니다. 먼저, 쿠팡 앱을 눌러 실행해 주세요.";
const page2 = "상품 검색을 위해 쿠팡 홈 화면에서 검색창을 눌러 주세요.";
const page3 = "이번 실습에서는 휴지를 검색해 보도록 하겠습니다. 검색창에 휴지를 입력하고 엔터를 눌러주세요.";
const page4 = "휴지를 검색하면, 쿠팡에서 판매되고 있는 다양한 상품이 나옵니다. 가장 위에 있는 상품을 눌러 볼게요.";
const page5 = "상품의 별점과 사진이 나옵니다. 화면을 아래로 내려 보겠습니다.";
const page6 = "상품의 자세한 정보를 확인할 수 있습니다. 화면을 한 번 더 아래로 내려 볼게요.";
const page7 = "상품 리뷰를 확인할 수 있습니다. 로그인하면 장바구니, 찜 등 더 다양한 기능을 이용할 수 있습니다. 모두 고생하셨습니다.";



pageDescArray.push(
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7
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
    startRateX: 0.013888888888888888, startRateY: 0.1640625, endRateX: 0.2, endRateY: 0.309375
};

const coordinate2 = {
    startRateX: 0.027777777777777776, startRateY: 0.090625, endRateX: 0.9833333333333333, endRateY: 0.1609375
};

const coordinate3 = {
    startRateX: 0.1111111111111111, startRateY: 0.040625, endRateX: 0.30277777777777776, endRateY: 0.090625
};

const coordinate4 = {
    startRateX: 0.9777777777777777, startRateY: 0.7421875, endRateX: 0.041666666666666664, endRateY: 0.5140625
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

coordinateArray.push(
    coordinate1,
    coordinate2,
    coordinate3,
    coordinate4,
    coordinate5,
    coordinate6,
    coordinate7
);
