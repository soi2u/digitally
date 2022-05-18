const pageNum = 27;
const pageName = "46";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 실습에서는 여행 정보를 알아볼 수 있는 오디 앱을 실습해 보도록 하겠습니다. 먼저, 휴대폰에 설치된 앱스토어를 눌러 실행해 주세요.";
const page2 = "검색창을 눌러 줍니다.";
const page3 = "검색창에 오디를 입력합니다.";
const page4 = "확인을 눌러 검색 결과 페이지로 이동합니다.";
const page5 = "설치를 눌러 설치를 진행합니다.";
const page6 = "설치가 완료되었다면, 열기를 눌러 앱을 실행합니다.";
const page7 = "여행 정보 제공을 위한 위치 정보 사용 안내입니다. 확인을 눌러 줍니다.";
const page8 =
    "앱 접근 권한 허용 안내입니다. 확인을 눌러 줄게요.";
const page9 =
    "위치 정보에 접근하는 것을 허용하기 위해 허용을 눌러 줍니다.";
const page10 =
    "미디어 파일 정보에 접근하는 것을 허용하기 위해 허용을 눌러 줍니다.";
const page11 = "오디에 대한 설명 페이지입니다. 화면을 넘겨 넘어가 주세요.";
const page12 =
    "이번에도 화면을 옆으로 넘겨 넘어가 줄게요.";
const page13 =
    "마지막으로 화면을 넘겨 주세요.";
const page14 = "여행 play 시작하기 버튼을 눌러 앱을 시작해 보겠습니다.";
const page15 = "이벤트 페이지에서는 왼쪽 상단의 다시 보지 않기를 눌러 주세요. 다시 보지 않기를 누르면 다음에는 이 페이지를 보지 않을 수 있어요.";
const page16 = "오디 앱의 메인 페이지입니다. 돋보기 모양의 검색 버튼을 눌러 원하는 여행지를 찾아볼게요.";
const page17 = "검색창에서는 인기검색어와 추천 태그를 확인할 수 있습니다. 이번에는 직접 검색하기 위해 '검색어를 입력하세요'라고 적힌 검색창에 제주도를 검색해 주세요.";
const page18 = "열린관광지 - 제주도를 선택합니다.";
const page19 = "돋보기 모양의 검색 버튼을 눌러 줍니다.";
const page20 = "관광지 검색 결과에서 열린관광지 - 제주도를 찾아 눌러 주세요.";
const page21 = "제주도의 다양한 관광지에 대한 정보가 나와 있습니다. 가장 위에 있는 관광지를 눌러 볼게요.";
const page22 = "먼저, 오른쪽 상단의 공유 버튼을 누르면 여행 정보를 다른 사람에게 공유할 수 있습니다.";
const page23 = "카카오톡, 페이스북, 트위터 등 다양한 SNS로 공유할 수 있습니다. ";
const page24 = "더하기 버튼을 눌러 목록을 담아 볼게요.";
const page25 = "목록에 추가되었습니다. 재생 버튼을 눌러 실행해 볼게요.";
const page26 = "추가된 재생 목록을 확인할 수 있습니다. X를 눌러 돌아가 볼게요.";
const page27 = "이외에도 두번 째 다운로드 버튼을 누르면 내용을 다운로드 받을 수 있고, 세번 째 재생 버튼을 누르면 오디오를 바로 재생할 수 있습니다. 모두 고생하셨습니다.";


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


const inputPage = [{ page: 2, correctAnswer: "오디" },
                  { page: 16, correctAnswer: "제주도" }];

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
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate2 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate3 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate4 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
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
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate12 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
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
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate19 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate20 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
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
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate24 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate25 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate26 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
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
