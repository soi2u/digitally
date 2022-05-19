const pageNum = 30;
const pageName = "22";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "두뇌 운동을 위한 루모시티 앱을 체험해 보겠습니다. 먼저, 앱스토어를 실행해 주세요.";
const page2 = "앱스토어 검색창에 루모시티를 검색해 주세요.";
const page3 = "루모시티를 눌러 검색해 줍니다.";
const page4 = "설치 버튼을 눌러 루모시티 앱을 설치해 주세요.";
const page5 = "설치가 완료되었다면 열기를 눌러 실행해 주세요.";
const page6 = "루모시티의 시작 화면입니다. 시작하기를 눌러 앱을 시작해 볼게요.";
const page7 = "루모시티에 대한 설명입니다. 다음을 눌러 주세요.";
const page8 =
    "이메일과 생년월일을 적어 주세요.";
const page9 =
    "모두 적었다면, 가입하기를 눌러 주세요.";
const page10 =
    "성별 버튼을 눌러 성별을 선택해 주세요.";
const page11 = "학력 버튼을 눌러 학력을 선택해 주세요.";
const page12 = "직업 버튼을 눌러 직업을 선택해 주세요.";
const page13 = "검색을 눌러 검색 경로를 선택해 주세요.";
const page14 = "모두 완료되었다면, 다음을 눌러 넘어가 주세요.";
const page15 = "루모시티의 테스트에 대한 설명입니다. 다음을 눌러 주세요.";
const page16 = "루모시티의 기능에 대한 설명입니다. 다음을 눌러 주세요.";
const page17 = "루모시티의 프로그램에 대한 설명입니다. 다음을 눌러 주세요.";
const page18 = "첫 테스트인 스피드 카드입니다. 정보 식별 능력이라고 적혀 있습니다. 시작하기를 눌러 시작해 볼게요.";
const page19 = "설명 화면입니다. 설명에 따라서 진행해 주세요.";
const page20 = "설명이 끝났다면, 테스트를 진행해 주세요.";
const page21 = "첫 테스트가 끝났다면, 다음 테스트를 시작하기 버튼을 눌러 진행해 주세요.";
const page22 = "설명 화면을 따라서 진행해 주세요.";
const page23 = "설명이 끝났다면, 테스트를 진행해 주세요.";
const page24 = "두 번째 테스트가 끝났다면, 다음 테스트를 시작하기 버튼을 눌러 진행해 주세요.";
const page25 = "설명에 따라서 테스트를 진행해 주세요.";
const page26 = "테스트가 끝나면 첫 테스트의 결과가 나옵니다. 다음 버튼을 눌러 주세요.";
const page27 = "두 번째 테스트의 결과가 나옵니다. 다음 버튼을 눌러 주세요.";
const page28 = "세 번째 테스트의 결과가 나옵니다. 다음 버튼을 눌러 주세요.";
const page29 = "한정 트레이닝 진행을 눌러 주세요. 프리미엄 체험을 누르시면 결제가 될 수도 있으니 주의해 주세요.";
const page30 = "맞춤 테스트가 완료되었습니다. 하루에 세 가지 두뇌 운동을 할 수 있습니다. 모두 고생하셨습니다.";


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
    page30

);


const inputPage = [{ page: 1, correctAnswer: "루모시티" }];

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
    startRateX: 0.013888888888888888, startRateY: 0.546875, endRateX: 0.20833333333333334, endRateY: 0.684375
};

const coordinate2 = {
    startRateX: 0.15555555555555556, startRateY: 0.04375, endRateX: 0.6555555555555556, endRateY: 0.096875
};

const coordinate3 = {
    startRateX: 0.15555555555555556, startRateY: 0.121875, endRateX: 0.3388888888888889, endRateY: 0.1703125
};

const coordinate4 = {
    startRateX: 0.7666666666666667, startRateY: 0.1265625, endRateX: 0.9777777777777777, endRateY: 0.21875
};

const coordinate5 = {
    startRateX: 0.7666666666666667, startRateY: 0.1265625, endRateX: 0.9777777777777777, endRateY: 0.21875
};

const coordinate6 = {
    startRateX: 0.35, startRateY: 0.7734375, endRateX: 0.6694444444444444, endRateY: 0.8234375
};

const coordinate7 = {
    startRateX: 0.38333333333333336, startRateY: 0.8453125, endRateX: 0.6305555555555555, endRateY: 0.909375
};

const coordinate8 = {
    startRateX: 0.24722222222222223, startRateY: 0.3625, endRateX: 0.7472222222222222, endRateY: 0.540625
};

const coordinate9 = {
    startRateX: 0.23055555555555557, startRateY: 0.5546875, endRateX: 0.7805555555555556, endRateY: 0.6546875
};

const coordinate10 = {
    startRateX: 0.041666666666666664, startRateY: 0.540625, endRateX: 0.18611111111111112, endRateY: 0.6
};

const coordinate11 = {
    startRateX: 0.05277777777777778, startRateY: 0.6078125, endRateX: 0.16111111111111112, endRateY: 0.6625
};

const coordinate12 = {
    startRateX: 0.041666666666666664, startRateY: 0.6625, endRateX: 0.18055555555555555, endRateY: 0.7359375
};

const coordinate13 = {
    startRateX: 0.05277777777777778, startRateY: 0.7328125, endRateX: 0.6472222222222223, endRateY: 0.7953125
};

const coordinate14 = {
    startRateX: 0.21388888888888888, startRateY: 0.84375, endRateX: 0.7861111111111111, endRateY: 0.9265625
};

const coordinate15 = {
    startRateX: 0.3138888888888889, startRateY: 0.8421875, endRateX: 0.6861111111111111, endRateY: 0.909375
};

const coordinate16 = {
    startRateX: 0.3138888888888889, startRateY: 0.8421875, endRateX: 0.6861111111111111, endRateY: 0.909375
};

const coordinate17 = {
    startRateX: 0.3138888888888889, startRateY: 0.8421875, endRateX: 0.6861111111111111, endRateY: 0.909375
};

const coordinate18 = {
    startRateX: 0.3416666666666667, startRateY: 0.8484375, endRateX: 0.6694444444444444, endRateY: 0.909375
};

const coordinate19 = {
    startRateX: 0.8694444444444445, startRateY: 0.9203125, endRateX: 0.625, endRateY: 0.834375
};

const coordinate20 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate21 = {
    startRateX: 0.65, startRateY: 0.9078125, endRateX: 0.3638888888888889, endRateY: 0.85
};

const coordinate22 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate23 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate24 = {
    startRateX: 0.35555555555555557, startRateY: 0.8484375, endRateX: 0.6833333333333333, endRateY: 0.909375
};

const coordinate25 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate26 = {
    startRateX: 0.33611111111111114, startRateY: 0.8484375, endRateX: 0.6722222222222223, endRateY: 0.9125
};

const coordinate27 = {
    startRateX: 0.33611111111111114, startRateY: 0.8484375, endRateX: 0.6722222222222223, endRateY: 0.9125
};

const coordinate28 = {
    startRateX: 0.33611111111111114, startRateY: 0.8484375, endRateX: 0.6722222222222223, endRateY: 0.9125
};

const coordinate29 = {
    startRateX: 0.18055555555555555, startRateY: 0.7609375, endRateX: 0.8222222222222222, endRateY: 0.803125
};

const coordinate30 = {
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
    coordinate22,
    coordinate23,
    coordinate24,
    coordinate25,
    coordinate26,
    coordinate27,
    coordinate28,
    coordinate29,
    coordinate30
);
