const pageNum = 18;
const pageName = "16";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "위급한 상황에서 119에 빠르게 신고하고, 소방 안전을 익힐 수 있는 119 앱을 실습해 보도록 하겠습니다. 앱스토어를 실행해 주세요.";
const page2 = "앱스토어 검색창에 119를 입력해 주세요.";
const page3 = "119신고를 눌러 앱 설치 화면으로 넘어갑니다.";
const page4 = "설치를 눌러 119신고 앱 설치를 진행해 줍니다.";
const page5 = "설치가 완료되었다면, 열기를 눌러 실행해 줍니다.";
const page6 = "119 앱에서 위치 정보를 확인할 수 있도록 허용을 눌러 줍니다.";
const page7 = "119 앱에서 미디어를 활용할 수 있도록 허용을 눌러 줍니다.";
const page8 =
    "119 앱에서 전화를 걸 수 있도록 허용을 눌러 줍니다.";
const page9 =
    "119 앱에서 주소록에 접근할 수 있도록 허용을 눌러 줍니다.";
const page10 =
    "이용 약관에 대한 설명입니다. 제 1조를 읽고 하얀 빈칸를 눌러 체크 표시를 해 주세요.";
const page11 = "제 2조를 읽고 하얀 빈칸를 눌러 체크 표시를 해 주세요.";
const page12 = "제 3조를 읽고 하얀 빈칸를 눌러 체크 표시를 해 주세요.";
const page13 = "모두 동의했다면, 주황색 동의하기 버튼을 눌러 주세요.";
const page14 = "119신고 앱 첫 화면입니다. 오늘은 화재 신고를 예시로 해 볼게요. 화재 신고 버튼을 눌러 줍니다.";
const page15 = "화재 신고 화면입니다. 화재 신고 내용을 적어 줍니다.";
const page16 = "사진을 첨부하기 위해 파일 첨부를 눌러 주세요.";
const page17 = "사진을 첨부할 때는 사진 촬영 또는 다양한 기능을 활용하여 첨부해 주시면 됩니다. 이번에는 x를 눌러 돌아가도록 할게요.";
const page18 = "이후, 전송을 눌러 주시면 됩니다. 실습이기 때문에 이번에는 전송을 누르지 않고 마무리하겠습니다. 모두 고생하셨습니다.";


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
    page18
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
    startRateX: 0, startRateY: 0.5453125, endRateX: 0.24444444444444444, endRateY: 0.6859375
};

const coordinate2 = {
    startRateX: 0.7083333333333334, startRateY: 0.1015625, endRateX: 0.05555555555555555, endRateY: 0.040625
};

const coordinate3 = {
    startRateX: 0.002777777777777778, startRateY: 0.10625, endRateX: 0.37777777777777777, endRateY: 0.1890625
};

const coordinate4 = {
    startRateX: 0.5666666666666667, startRateY: 0.403125, endRateX: 0.4361111111111111, endRateY: 0.3546875
};

const coordinate5 = {
    startRateX: 0.6527777777777778, startRateY: 0.2484375, endRateX: 0.7916666666666666, endRateY: 0.2984375
};

const coordinate6 = {
    startRateX: 0.6805555555555556, startRateY: 0.534375, endRateX: 0.7861111111111111, endRateY: 0.5859375
};

const coordinate7 = {
    startRateX: 0.6805555555555556, startRateY: 0.534375, endRateX: 0.7861111111111111, endRateY: 0.5859375
};

const coordinate8 = {
    startRateX: 0.6805555555555556, startRateY: 0.534375, endRateX: 0.7861111111111111, endRateY: 0.5859375
};

const coordinate9 = {
    startRateX: 0.6805555555555556, startRateY: 0.534375, endRateX: 0.7861111111111111, endRateY: 0.5859375
};

const coordinate10 = {
    startRateX: 0.8777777777777778, startRateY: 0.31875, endRateX: 0.975, endRateY: 0.3734375
};

const coordinate11 = {
    startRateX: 0.8861111111111111, startRateY: 0.5203125, endRateX: 0.9638888888888889, endRateY: 0.56875
};

const coordinate12 = {
    startRateX: 0.8694444444444445, startRateY: 0.790625, endRateX: 0.9777777777777777, endRateY: 0.853125
};

const coordinate13 = {
    startRateX: 0.35555555555555557, startRateY: 0.8671875, endRateX: 0.65, endRateY: 0.93125
};

const coordinate14 = {
    startRateX: 0.08333333333333333, startRateY: 0.4640625, endRateX: 0.4361111111111111, endRateY: 0.6890625
};

const coordinate15 = {
    startRateX: 0.03333333333333333, startRateY: 0.184375, endRateX: 0.9666666666666667, endRateY: 0.4171875
};

const coordinate16 = {
    startRateX: 0.011111111111111112, startRateY: 0.4078125, endRateX: 0.3277777777777778, endRateY: 0.4859375
};

const coordinate17 = {
    startRateX: 0.8111111111111111, startRateY: 0.2515625, endRateX: 0.8944444444444445, endRateY: 0.309375
};

const coordinate18 = {
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
    coordinate18
);
