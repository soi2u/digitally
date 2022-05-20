const pageNum = 20;
const pageName = "44";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번에는 쇼핑 앱 위메프로 원하는 상품을 찾아보도록 하겠습니다. 먼저, 위메프 앱을 눌러 실행해 주세요.";
const page2 = "위메프 홈이 보입니다. 검색을 위해 돋보기 모양 검색 버튼을 눌러 주세요.";
const page3 = "검색창 아래에는 최근 검색어와 추천 검색어가 보입니다. 원하는 상품을 검색하기 위해 검색창을 눌러 줍니다.";
const page4 = "휴지를 입력해 줍니다.";
const page5 = "아래 검색 목록에서 휴지를 눌러 검색 결과로 이동합니다.";
const page6 = "휴지를 검색한 결과입니다. 검색 필터를 조정하기 위해 조정 모양 버튼을 눌러 주세요.";
const page7 = "배송 옵션을 설정할 수 있습니다. 먼저, 당일배송을 눌러 볼게요.";
const page8 =
    "당일배송이 가능한 상품을 확인할 수 있습니다. 다음은 무료배송을 눌러 볼게요.";
const page9 =
    "당일배송과 무료배송이 가능한 상품들이 보여집니다. 다음은 정렬을 눌러 볼게요.";
const page10 =
    "원하는 순서로 상품을 정렬할 수 있습니다. 이번에는 판매많은순을 눌러 판매수가 많은 상품들을 먼저 확인해 볼게요.";
const page11 = "판매많은순으로 상품이 정렬되었습니다. 다음은 카테고리를 변경해 볼게요. 카테고리를 눌러 줍니다.";
const page12 =
    "지금은 카테고리가 전체로 설정되어 있습니다. 생활용품을 눌러 생활용품 카테고리에 있는 상품들을 알아볼게요.";
const page13 =
    "이제 모든 설정이 끝났습니다. x를 눌러 상품 페이지로 돌아가 볼게요.";
const page14 = "설정한 옵션으로 보여지는 상품들입니다. 가장 위에 있는 상품을 눌러 볼게요.";
const page15 = "화면을 아래로 내리면 상품의 상세 정보를 알 수 있습니다.";
const page16 = "상품의 상세정보 화면입니다. 이번에는 구매정보를 눌러 볼게요.";
const page17 = "상품의 배송 정보, 필수 정보 등 다양한 정보를 확인할 수 있습니다. 다음은 리뷰를 눌러 상품의 리뷰를 살펴볼게요.";
const page18 = "상품의 리뷰와 별점이 누릅니다. 평점높은순을 눌러 볼게요.";
const page19 = "높은별점순으로 리뷰를 확인할 수 있습니다. 마지막으로 평점낮은순을 눌러볼게요.";
const page20 = "별점이 낮은 리뷰 순서로 확인할 수 있습니다. 모두 고생하셨습니다.";

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
    page20
);


const inputPage = [{ page: 3, correctAnswer: "휴지" }];

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
    startRateX: 0.013888888888888888, startRateY: 0.5296875, endRateX: 0.2222222222222222, endRateY: 0.6828125
};

const coordinate2 = {
    startRateX: 0.12777777777777777, startRateY: 0.45625, endRateX: 0.8444444444444444, endRateY: 0.5109375
};

const coordinate3 = {
    startRateX: 0.1361111111111111, startRateY: 0.0390625, endRateX: 0.8444444444444444, endRateY: 0.0953125
};

const coordinate4 = {
    startRateX: 0.1361111111111111, startRateY: 0.0390625, endRateX: 0.8444444444444444, endRateY: 0.0953125
};

const coordinate5 = {
    startRateX: 0.005555555555555556, startRateY: 0.1078125, endRateX: 0.9944444444444445, endRateY: 0.165625
};

const coordinate6 = {
    startRateX: 0.9111111111111111, startRateY: 0.4734375, endRateX: 0.9972222222222222, endRateY: 0.525
};

const coordinate7 = {
    startRateX: 0.1527777777777778, startRateY: 0.16875, endRateX: 0.9972222222222222, endRateY: 0.234375
};

const coordinate8 = {
    startRateX: 0.15555555555555556, startRateY: 0.3625, endRateX: 0.9972222222222222, endRateY: 0.4375
};

const coordinate9 = {
    startRateX: 0.14722222222222223, startRateY: 0.4359375, endRateX: 0.9972222222222222, endRateY: 0.50625
};

const coordinate10 = {
    startRateX: 0.1527777777777778, startRateY: 0.2953125, endRateX: 0.9972222222222222, endRateY: 0.375
};

const coordinate11 = {
    startRateX: 0.15555555555555556, startRateY: 0.7046875, endRateX: 0.9972222222222222, endRateY: 0.7828125
};

const coordinate12 = {
    startRateX: 0.1527777777777778, startRateY: 0.365625, endRateX: 0.9972222222222222, endRateY: 0.4359375
};

const coordinate13 = {
    startRateX: 0.8694444444444445, startRateY: 0.0375, endRateX: 0.9972222222222222, endRateY: 0.09375
};

const coordinate14 = {
    startRateX: 0.002777777777777778, startRateY: 0.3890625, endRateX: 0.9972222222222222, endRateY: 0.6328125
};

const coordinate15 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate16 = {
    startRateX: 0.2388888888888889, startRateY: 0.109375, endRateX: 0.5277777777777778, endRateY: 0.184375
};

const coordinate17 = {
    startRateX: 0.5055555555555555, startRateY: 0.1140625, endRateX: 0.7805555555555556, endRateY: 0.1796875
};

const coordinate18 = {
    startRateX: 0.6027777777777777, startRateY: 0.609375, endRateX: 0.7944444444444444, endRateY: 0.65625
};

const coordinate19 = {
    startRateX: 0.7888888888888889, startRateY: 0.540625, endRateX: 0.9861111111111112, endRateY: 0.5921875
};

const coordinate20 = {
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
    coordinate20
);
