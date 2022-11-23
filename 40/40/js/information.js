const pageNum = 37;
const pageName = "40";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "오늘은 몸을 건강하게 관리할 수 있는 보건소 헬스 케어 앱을 실습해 보겠습니다. 먼저, 앱스토어를 눌러 실행해 주세요.";
const page2 = "앱 검색을 위해 검색창을 눌러 주세요.";
const page3 = "검색창에 보건소모바일헬스케어를 검색해 주세요.";
const page4 = "보건소모바일헬스케어를 눌러 다음 화면으로 넘어갑니다.";
const page5 = "설치 버튼을 눌러 앱을 설치해 줍니다.";
const page6 = "설치가 모두 끝났다면, 열기를 눌러 실행해 줍니다.";
const page7 = "앱 접근 권한에 대한 안내입니다. 내용을 읽은 후 확인을 줄러 주세요.";
const page8 =
    "앱이 위치 정보에 접근할 수 있도록 허용을 눌러 줍니다.";
const page9 =
    "앱이 촬영 기능에 접근할 수 있도록 허용을 눌러 줍니다.";
const page10 =
    "앱이 미디어 파일 정보에 접근할 수 있도록 허용을 눌러 줍니다.";
const page11 = "앱이 메시지 정보에 접근할 수 있도록 허용을 눌러 줍니다.";
const page12 =
    "앱이 전화 정보에 접근할 수 있도록 허용을 눌러 줍니다.";
const page13 =
    "앱이 주소록 정보에 접근할 수 있도록 허용을 눌러 줍니다.";
const page14 = "앱이 오디오 정보에 접근할 수 있도록 허용을 눌러 줍니다.";
const page15 = "보건소 모바일 헬스 케어 앱에 대한 설명입니다. 옆으로 넘겨 다음 화면으로 이동해 주세요.";
const page16 = "마찬가지로 옆으로 넘겨 다음 화면으로 이동해 주세요.";
const page17 = "한 번 더 옆으로 넘겨 다음 화면으로 이동해 주세요.";
const page18 = "모바일 헬스케어 로그인하기를 눌러 로그인 페이지로 이동해 주세요.";
const page19 = "이제 로그인을 진행해 보겠습니다. 이번 실습에서는 카카오톡 계정을 통해 로그인해 볼게요. 하단의 카카오톡 버튼을 눌러 주세요.";
const page20 = "모바일 헬스 케어의 약관입니다. 전체 동의하기를 눌러 주세요.";
const page21 = "전체 동의하기를 눌렀다면, 동의하고 계속하기 버튼을 눌러 넘어가 주세요.";
const page22 = "이제, 이름을 입력하는 칸에 이름을 입력해 줍니다.";
const page23 = "이름을 입력했다면, 다음을 눌러 넘어가 주세요.";
const page24 = "모든 약관에 동의해야 하기 때문에, 모두 동의합니다 버튼을 눌러 줄게요.";
const page25 = "약관에 동의했다면, 다음을 눌러 넘어가 주세요.";
const page26 = "성별을 선택해 주세요.";
const page27 = "성별을 선택했다면, 다음을 눌러 넘어가 주세요.";
const page28 = "생년월일을 입력해 주세요.";
const page29 = "생년월일을 입력했다면, 설정을 눌러 주세요.";
const page30 = "이제, 다음을 눌러 이동해 주세요.";
const page31 = "키를 입력해 주세요.";
const page32 = "체중을 입력해 주세요.";
const page33 = "다음을 눌러 다음 페이지로 이동해 주세요.";
const page34 = "활동 계수를 선택해 주세요.";
const page35 = "선택했다면 다음을 눌러 다음 페이지로 이동해 주세요.";
const page36 = "이제 가입이 완료되었습니다. 모바일 헬스케어 로그인하기를 눌러 메인 화면으로 이동해 주세요.";
const page37 = "모바일 헬스케어의 홈 화면입니다. 이상으로, 이번 실습을 마치겠습니다. 모두 고생하셨습니다.";


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
    page37

);


const inputPage = [{ page: 2, correctAnswer: "보건소모바일헬스케어" },
{ page: 21, correctAnswer: "이름을" },
];

function handleInput(pageNumber) {
    for (i = 0; i < inputPage.length; i++) {
        if (pageNumber === inputPage[i].page) {
            DrawInputBox(coordinateArray[pageNumber]);
            let answer = inputPage[i].correctAnswer;
            let typeofAnswer;
            document.querySelector(".input-answer").addEventListener("keydown", function (event) {
                if (event.keyCode === 13) {
                    typeofAnswer = Number(this.value);
if (pageNumber === 21) {
                        if (2 <= this.value.length && this.value.length <= 5 && isNaN(typeofAnswer) === true) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
} else if (pageNumber === 2) {
                        if (this.value === answer) {
                            handleClickBox();
                        } else {
                        }
                    }
                    }
                });
            }
        }
    }





const coordinate1 = {
    startRateX: 0.4027777777777778, startRateY: 0.6546875, endRateX: 0.5972222222222222, endRateY: 0.8140625
};

const coordinate2 = {
    startRateX: 0.05277777777777778, startRateY: 0.0359375, endRateX: 0.9472222222222222, endRateY: 0.10625
};

const coordinate3 = {
    startRateX: 0.12222222222222222, startRateY: 0.0296875, endRateX: 0.8916666666666667, endRateY: 0.109375
};

const coordinate4 = {
    startRateX: 0.008333333333333333, startRateY: 0.1078125, endRateX: 0.9916666666666667, endRateY: 0.1875
};

const coordinate5 = {
    startRateX: 0.7333333333333333, startRateY: 0.1125, endRateX: 1, endRateY: 0.2234375
};

const coordinate6 = {
    startRateX: 0.7333333333333333, startRateY: 0.1125, endRateX: 1, endRateY: 0.2234375
};

const coordinate7 = {
    startRateX: 0.06944444444444445, startRateY: 0.8078125, endRateX: 0.9333333333333333, endRateY: 0.871875
};

const coordinate8 = {
    startRateX: 0.6472222222222223, startRateY: 0.5234375, endRateX: 0.8527777777777777, endRateY: 0.60625
};

const coordinate9 = {
    startRateX: 0.6472222222222223, startRateY: 0.5234375, endRateX: 0.8527777777777777, endRateY: 0.60625
};

const coordinate10 = {
    startRateX: 0.6472222222222223, startRateY: 0.5234375, endRateX: 0.8527777777777777, endRateY: 0.60625
};

const coordinate11 = {
    startRateX: 0.6472222222222223, startRateY: 0.5234375, endRateX: 0.8527777777777777, endRateY: 0.60625
};

const coordinate12 = {
    startRateX: 0.6472222222222223, startRateY: 0.5234375, endRateX: 0.8527777777777777, endRateY: 0.60625
};

const coordinate13 = {
    startRateX: 0.6472222222222223, startRateY: 0.5234375, endRateX: 0.8527777777777777, endRateY: 0.60625
};

const coordinate14 = {
    startRateX: 0.6472222222222223, startRateY: 0.5234375, endRateX: 0.8527777777777777, endRateY: 0.60625
};

const coordinate15 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate16 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate17 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate18 = {
    startRateX: 0.005555555555555556, startRateY: 0.8125, endRateX: 0.9972222222222222, endRateY: 0.875
};

const coordinate19 = {
    startRateX: 0.04722222222222222, startRateY: 0.7125, endRateX: 0.22777777777777777, endRateY: 0.796875
};

const coordinate20 = {
    startRateX: 0.05277777777777778, startRateY: 0.3078125, endRateX: 0.9333333333333333, endRateY: 0.375
};

const coordinate21 = {
    startRateX: 0.03611111111111111, startRateY: 0.615625, endRateX: 0.9722222222222222, endRateY: 0.7015625
};

const coordinate22 = {
    startRateX: 0.06666666666666667, startRateY: 0.246875, endRateX: 0.925, endRateY: 0.3109375
};

const coordinate23 = {
    startRateX: 0.005555555555555556, startRateY: 0.825, endRateX: 0.9972222222222222, endRateY: 0.9015625
};

const coordinate24 = {
    startRateX: 0.10277777777777777, startRateY: 0.571875, endRateX: 0.8861111111111111, endRateY: 0.6515625
};

const coordinate25 = {
    startRateX: 0.005555555555555556, startRateY: 0.8328125, endRateX: 0.9972222222222222, endRateY: 0.8984375
};

const coordinate26 = {
    startRateX: 0.002777777777777778, startRateY: 0.821875, endRateX: 0.9944444444444445, endRateY: 0.9109375
};

const coordinate27 = {
    startRateX: 0, startRateY: 0.809375, endRateX: 1, endRateY: 0.9046875
};

const coordinate28 = {
    startRateX: 0.8666666666666667, startRateY: 0.353125, endRateX: 0.8666666666666667, endRateY: 0.3515625
};

const coordinate29 = {
    startRateX: 0.030555555555555555, startRateY: 0.2921875, endRateX: 0.9722222222222222, endRateY: 0.4640625
};

const coordinate30 = {
    startRateX: 0.011111111111111112, startRateY: 0.8140625, endRateX: 0.9972222222222222, endRateY: 0.9171875
};

const coordinate31 = {
    startRateX: 0.05, startRateY: 0.28125, endRateX: 0.4777777777777778, endRateY: 0.4328125
};

const coordinate32 = {
    startRateX: 0.4666666666666667, startRateY: 0.28125, endRateX: 0.9166666666666666, endRateY: 0.4484375
};

const coordinate33 = {
    startRateX: 0.011111111111111112, startRateY: 0.8125, endRateX: 0.9972222222222222, endRateY: 0.90625
};

const coordinate34 = {
    startRateX: 0.03333333333333333, startRateY: 0.3265625, endRateX: 0.9833333333333333, endRateY: 0.73125
};

const coordinate35 = {
    startRateX: 0, startRateY: 0.8125, endRateX: 1, endRateY: 0.90625
};

const coordinate36 = {
    startRateX: 0.008333333333333333, startRateY: 0.809375, endRateX: 0.9888888888888889, endRateY: 0.9015625
};

const coordinate37 = {
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
    coordinate37
);
