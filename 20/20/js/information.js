const pageNum = 16;
const pageName = "20";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 실습에서는 다나와 앱을 통해 TV 가격을 비교해 보도록 할게요. 먼저, 다나와 앱을 실행해 줍니다.";
const page2 = "다나와 앱의 홈 화면입니다. TV 검색을 위해 검색창을 눌러 볼게요.";
const page3 = "검색어를 입력하는 부분에 TV를 적어 볼게요.";
const page4 = "아래에 보이는 TV 상품을 눌러 이동하겠습니다.";
const page5 = "다양한 TV 검색 결과가 나옵니다. 카테고리를 보면 제조사, 화면 크기, 기술, 해상도 등 다양한 옵션을 기준으로 확인할 수 있습니다. 제조사 기준으로 되어 있는 카테고리를 화면 크기를 기준으로 변경해 볼게요. 화면 크기를 눌러 줍니다.";
const page6 = "화면 크기를 기준으로 검색된 결과입니다. 다음은, 화면 기술을 눌러 볼게요.";
const page7 = "화면 기술을 기준으로 검색된 결과입니다. 마지막으로 해상도를 눌러 볼게요.";
const page8 =
    "해상도를 기준으로 TV를 검색한 결과입니다. 이제, 제조사 기준의 결과로 다시 돌아가 볼게요. 제조사를 눌러 줍니다.";
const page9 =
    "제조사 별로 TV 상품을 확인할 수 있습니다. 이번에는 삼성전자의 TV를 확인해 볼게요. 삼성전자를 눌러 줍니다.";
const page10 =
    "삼성 전자의 tv들이 보입니다. 인기순 버튼을 누르면 다른 기준으로도 정렬할 수 있습니다. 인기순 버튼을 눌러 볼게요.";
const page11 = "신상품순, 낮은 가격순, 높은 가격순 등 다양한 기준으로 상품을 확인할 수 있습니다. x를 눌러 다시 돌아가 줄게요.";
const page12 = "이제, 삼성전자의 상품 중 하나를 골라 볼게요. 가장 위에 있는 상품을 골라 줍니다.";
const page13 = "고른 tv 상품의 별점을 확인할 수 있고, 최저가를 확인할 수 있습니다. 이제 화면을 아래로 내려 볼게요.";
const page14 = "아래로 내리면, 쇼핑몰 별로 가장 낮은 가격을 확인할 수 있습니다.";
const page15 = "상품 정보를 누르면, 상품 정보를 확인할 수 있습니다.";
const page16 = "상품 의견을 누르면, 상품 후기를 확인할 수 있습니다. 모두 고생하셨습니다.";

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
    page16
);


const inputPage = [{ page: 2, correctAnswer: "TV" }];

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
    startRateX: 0.002777777777777778, startRateY: 0.153125, endRateX: 0.23333333333333334, endRateY: 0.3078125
};

const coordinate2 = {
    startRateX: 0.2388888888888889, startRateY: 0.0421875, endRateX: 0.9638888888888889, endRateY: 0.0953125
};

const coordinate3 = {
    startRateX: 0.08611111111111111, startRateY: 0.0328125, endRateX: 0.8805555555555555, endRateY: 0.1046875
};

const coordinate4 = {
    startRateX: 0.03611111111111111, startRateY: 0.109375, endRateX: 0.4666666666666667, endRateY: 0.21875
};

const coordinate5 = {
    startRateX: 0.03611111111111111, startRateY: 0.109375, endRateX: 0.4666666666666667, endRateY: 0.21875
};

const coordinate6 = {
    startRateX: 0.13055555555555556, startRateY: 0.721875, endRateX: 0.013888888888888888, endRateY: 0.6921875
};

const coordinate7 = {
    startRateX: 0.002777777777777778, startRateY: 0.7390625, endRateX: 0.25, endRateY: 0.7796875
};

const coordinate8 = {
    startRateX: 0.008333333333333333, startRateY: 0.596875, endRateX: 0.11944444444444445, endRateY: 0.625
};

const coordinate9 = {
    startRateX: 0.5027777777777778, startRateY: 0.5484375, endRateX: 0.6472222222222223, endRateY: 0.584375
};

const coordinate10 = {
    startRateX: 0.2722222222222222, startRateY: 0.484375, endRateX: 0.4361111111111111, endRateY: 0.53125
};

const coordinate11 = {
    startRateX: 0.8444444444444444, startRateY: 0.4046875, endRateX: 0.9972222222222222, endRateY: 0.465625
};

const coordinate12 = {
    startRateX: 0.9888888888888889, startRateY: 0.1953125, endRateX: 0.013888888888888888, endRateY: 0.5953125
};

const coordinate13 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate14 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate15 = {
    startRateX: 0.35833333333333334, startRateY: 0.0421875, endRateX: 0.5305555555555556, endRateY: 0.09375
};

const coordinate16 = {
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
    coordinate16
);
