const pageNum = 22;
const pageName = "47";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "오늘은 여행 정보를 알아볼 수 있는 대한민국 구석구석 앱을 실습해 보겠습니다. 먼저, 플레이스토어를 눌러 실행해 주세요.";
const page2 = "앱스토어 검색창을 눌러 줍니다.";
const page3 = "대한민국구석구석을 입력해 줍니다.";
const page4 = "대한민국구석구석을 눌러 설치 화면으로 이동합니다.";
const page5 = "대한민국구석구석을 설치해 줍니다.";
const page6 = "대한민국구석구석 설치가 끝났다면, 열기를 눌러 실행해 줍니다.";
const page7 = "대한민국구석구석 앱 사용 권한 안내입니다. 확인을 눌러 줍니다.";
const page8 = "위치 정보를 제공하기 위해 확인을 눌러 줍니다.";
const page9 = "미디어 정보를 제공하기 위해 확인을 눌러 줍니다.";
const page10 = "푸시 알림은 취소를 눌러 주세요.";
const page11 = "대한민국구석구석 앱의 시작 화면입니다. 메뉴를 눌러 알아보도록 할게요.";
const page12 = "다양한 메뉴가 있습니다. 인기 있는 여행 정보부터 알아볼게요. 인기 탭을 눌러 줍니다.";
const page13 = "인기 있는 여행 정보가 나옵니다. 지역을 선택해 더 자세한 정보를 알아보겠습니다. 지역 선택을 눌러 줄게요.";
const page14 = "부산의 여행 정보를 알아볼게요. 부산을 눌러 주세요.";
const page15 = "부산의 인기 여행 정보가 나옵니다. 인기순을 누르면, 최신순이 아닌 인기순으로 정렬할 수 있습니다.";
const page16 = "이제, 코스별로 알아보도록 할게요. 다시 메뉴 버튼을 눌러 줍니다.";
const page17 = "코스를 눌러 이동해 줍니다.";
const page18 = "코스별로 소개된 여행지가 나옵니다. 이제, 더 자세한 특정 지역의 코스를 알아볼게요. 지역 선택을 눌러 줍니다.";
const page19 = "마찬가지로 부산의 코스를 찾아 볼게요. 부산을 눌러 줍니다.";
const page20 = "부산의 코스별 여행지가 나옵니다. 마지막으로, 축제를 알아 볼게요. 메뉴 버튼을 눌러 주세요.";
const page21 = "축제를 눌러 이동해 주세요.";
const page22 = "다양한 축제 정보가 나옵니다. 앱을 이용해 다양한 여행 정보를 알아보세요. 모두 고생하셨습니다.";

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
    page22
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
    startRateX: 0.39166666666666666, startRateY: 0.6640625, endRateX: 0.6194444444444445, endRateY: 0.8078125
};

const coordinate2 = {
    startRateX: 0.05555555555555555, startRateY: 0.040625, endRateX: 0.9416666666666667, endRateY: 0.1015625
};

const coordinate3 = {
    startRateX: 0.10277777777777777, startRateY: 0.0375, endRateX: 0.8888888888888888, endRateY: 0.1046875
};

const coordinate4 = {
    startRateX: 0.005555555555555556, startRateY: 0.11875, endRateX: 0.9944444444444445, endRateY: 0.1796875
};

const coordinate5 = {
    startRateX: 0.9777777777777777, startRateY: 0.415625, endRateX: 0.03611111111111111, endRateY: 0.3359375
};

const coordinate6 = {
    startRateX: 0.49722222222222223, startRateY: 0.2328125, endRateX: 0.9611111111111111, endRateY: 0.3125
};

const coordinate7 = {
    startRateX: 0.041666666666666664, startRateY: 0.7828125, endRateX: 0.9555555555555556, endRateY: 0.859375
};

const coordinate8 = {
    startRateX: 0.65, startRateY: 0.5296875, endRateX: 0.8444444444444444, endRateY: 0.6015625
};

const coordinate9 = {
    startRateX: 0.65, startRateY: 0.5296875, endRateX: 0.8444444444444444, endRateY: 0.6015625
};

const coordinate10 = {
    startRateX: 0.49722222222222223, startRateY: 0.4859375, endRateX: 0.06666666666666667, endRateY: 0.565625
};

const coordinate11 = {
    startRateX: 0.4666666666666667, startRateY: 0.46875, endRateX: 0.4666666666666667, endRateY: 0.46875
};

const coordinate12 = {
    startRateX: 0.11944444444444445, startRateY: 0.440625, endRateX: 0.9638888888888889, endRateY: 0.48125
};

const coordinate13 = {
    startRateX: 0.019444444444444445, startRateY: 0.4171875, endRateX: 0.9777777777777777, endRateY: 0.48125
};

const coordinate14 = {
    startRateX: 0.06111111111111111, startRateY: 0.5765625, endRateX: 0.9333333333333333, endRateY: 0.6625
};

const coordinate15 = {
    startRateX: 0.6583333333333333, startRateY: 0.29375, endRateX: 0.8138888888888889, endRateY: 0.3390625
};

const coordinate16 = {
    startRateX: 0.8444444444444444, startRateY: 0.034375, endRateX: 1, endRateY: 0.096875
};

const coordinate17 = {
    startRateX: 0.1111111111111111, startRateY: 0.48125, endRateX: 0.9583333333333334, endRateY: 0.5203125
};

const coordinate18 = {
    startRateX: 0.03333333333333333, startRateY: 0.4109375, endRateX: 0.9722222222222222, endRateY: 0.478125
};

const coordinate19 = {
    startRateX: 0.06666666666666667, startRateY: 0.5703125, endRateX: 0.9305555555555556, endRateY: 0.6671875
};

const coordinate20 = {
    startRateX: 0.8777777777777778, startRateY: 0.0328125, endRateX: 1, endRateY: 0.0984375
};

const coordinate21 = {
    startRateX: 0.10833333333333334, startRateY: 0.5171875, endRateX: 0.9694444444444444, endRateY: 0.5625
};

const coordinate22 = {
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
    coordinate21,
    coordinate22
);
