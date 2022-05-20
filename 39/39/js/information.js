const pageNum = 27;
const pageName = "39";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "오늘은 일정을 쉽게 정리할 수 있는 캘린더 앱에 대해 알아보도록 하겠습니다. 먼저, 앱스토어를 눌러 실행해 주세요.";
const page2 = "앱스토어에서 검색창을 눌러 주세요.";
const page3 = "검색창에 캘린더를 입력해 주세요.";
const page4 = "엔터를 눌러 검색 결과 화면으로 넘어가 주세요.";
const page5 = "설치 버튼을 눌러 네이버 캘린더 앱을 설치해 주세요.";
const page6 = "설치가 끝났다면, 열기 버튼을 눌러 앱을 실행해 주세요.";
const page7 = "네이버 캘린더를 처음 실행하면 나오는 화면입니다. 설명을 읽고 옆으로 넘겨 주세요.";
const page8 = "마찬가지로, 설명을 읽고 옆으로 넘겨 주세요.";
const page9 = "한 번 더 설명을 읽고 옆으로 넘겨 주세요.";
const page10 = "마지막으로 설명을 읽고 옆으로 넘겨 주세요.";
const page11 = "네이버 캘린더에 대한 간단한 설명입니다. x를 눌러 네이버 캘린더의 메인 화면으로 이동해 주세요.";
const page12 = "날씨 정보 제공을 위해 확인을 눌러 주세요.";
const page13 = "위치 정보 제공을 위해 확인을 눌러 주세요.";
const page14 = "네이버캘린더의 메인 화면입니다. 오늘 날짜의 달력이 보입니다. 먼저, 오른쪽 상단의 버튼을 눌러 볼게요.";
const page15 = "더욱 자세한 일정을 확인할 수 있도록 일주일 단위로 정리된 달력이 보입니다. 다시 오른쪽 상단의 버튼을 눌러 돌아가 볼게요.";
const page16 = "이번에는 다른 달을 확인해 볼게요. 왼쪽 상단의 달까지 표시된 날짜를 눌러 줍니다.";
const page17 = "위아래로 내리며 전체 달력을 확인할 수 있습니다. 취소를 눌러 돌아가 보겠습니다.";
const page18 = "이제 일정을 추가해 볼게요. 오른쪽 하단의 + 버튼을 눌러 줍니다.";
const page19 = "이번 실습에서는 장보기 일정을 등록해 보겠습니다. 먼저, 일정을 입력해 볼게요. 일정을 입력하는 칸에 장보기를 입력해 주세요.";
const page20 = "다음으로 시간을 설정해 보겠습니다. 시간이 적힌 버튼을 눌러 주세요.";
const page21 = "시작 시간을 오후 한 시로 정해 볼게요. 위아래로 움직여 한 시로 변경해 줍니다.";
const page22 = "끝나는 시간은 네 시로 설정해 볼게요. 위아래로 움직여 네 시로 변경해 줍니다.";
const page23 = "설정이 모두 완료되었다면, 장소 버튼을 눌러 주세요.";
const page24 = "동네 마트로 장을 보러 가는 일정을 설정해 볼게요. 장소 입력 칸에 동네 마트를 입력해 줍니다.";
const page25 = "마지막으로 메모 칸에 정보를 입력해 주세요. 이번에는 간장 사기를 입력해 동네 마트로 간장을 사러 가는 장보기 일정을 등록해 보겠습니다.";
const page26 = "이제, 오른쪽 상단의 확인 버튼을 눌러 주세요.";
const page27 = "장보기 일정이 등록된 것을 확인할 수 있습니다. 이상으로 네이버 캘린더 실습을 마치겠습니다. 모두 고생하셨습니다.";


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
    page27
);


const inputPage = [{ page: 2, correctAnswer: "캘린더" },
                  { page: 18, correctAnswer: "장보기" },
                   { page: 23, correctAnswer: "동네 마트" },
                   { page: 24, correctAnswer: "간장 사기" }
                  ];

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
    startRateX: 0.3888888888888889, startRateY: 0.665625, endRateX: 0.6138888888888889, endRateY: 0.8109375
};

const coordinate2 = {
    startRateX: 0.05555555555555555, startRateY: 0.03125, endRateX: 0.95, endRateY: 0.109375 
};

const coordinate3 = {
    startRateX: 0.12222222222222222, startRateY: 0.040625, endRateX: 0.8972222222222223, endRateY: 0.0984375
};

const coordinate4 = {
    startRateX: 0.05555555555555555, startRateY: 0.03125, endRateX: 0.95, endRateY: 0.109375
};

const coordinate5 = {
    startRateX: 0.7555555555555555, startRateY: 0.21875, endRateX: 0.9888888888888889, endRateY: 0.31875
};

const coordinate6 = {
    startRateX: 0.7555555555555555, startRateY: 0.21875, endRateX: 0.9888888888888889, endRateY: 0.31875
};

const coordinate7 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate8 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate9 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate10 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate11 = {
    startRateX: 0.11666666666666667, startRateY: 0.0953125, endRateX: 0.002777777777777778, endRateY: 0.04375
};

const coordinate12 = {
    startRateX: 0.7222222222222222, startRateY: 0.528125, endRateX: 0.9361111111111111, endRateY: 0.603125
};

const coordinate13 = {
    startRateX: 0.6305555555555555, startRateY: 0.515625, endRateX: 0.85, endRateY: 0.6015625
};

const coordinate14 = {
    startRateX: 0.6305555555555555, startRateY: 0.515625, endRateX: 0.85, endRateY: 0.6015625
};

const coordinate15 = {
    startRateX: 0.6305555555555555, startRateY: 0.515625, endRateX: 0.85, endRateY: 0.6015625
};

const coordinate16 = {
    startRateX: 0.10555555555555556, startRateY: 0.0421875, endRateX: 0.38055555555555554, endRateY: 0.10625
};

const coordinate17 = {
    startRateX: 0.43333333333333335, startRateY: 0.76875, endRateX: 0.6416666666666667, endRateY: 0.8359375
};

const coordinate18 = {
    startRateX: 0.43333333333333335, startRateY: 0.76875, endRateX: 0.6416666666666667, endRateY: 0.8359375
};

const coordinate19 = {
    startRateX: 0.022222222222222223, startRateY: 0.1234375, endRateX: 0.8333333333333334, endRateY: 0.1953125
};

const coordinate20 = {
    startRateX: 0.002777777777777778, startRateY: 0.2078125, endRateX: 0.9944444444444445, endRateY: 0.29375
};

const coordinate21 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate22 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate23 = {
    startRateX: 0.005555555555555556, startRateY: 0.7078125, endRateX: 0.9972222222222222, endRateY: 0.6421875
};

const coordinate24 = {
    startRateX: 0.008333333333333333, startRateY: 0.3015625, endRateX: 0.9777777777777777, endRateY: 0.375
};

const coordinate25 = {
    startRateX: 0.008333333333333333, startRateY: 0.3015625, endRateX: 0.9777777777777777, endRateY: 0.375
};

const coordinate26 = {
    startRateX: 0.8388888888888889, startRateY: 0.1046875, endRateX: 0.9972222222222222, endRateY: 0.0203125
};

const coordinate27 = {
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
    coordinate27
);
