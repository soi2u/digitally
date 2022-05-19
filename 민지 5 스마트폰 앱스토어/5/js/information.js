const pageNum = 17;
const pageName = "5";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`./image/${j}.jpg`);
    audio = new Audio(`./audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "내 손안의 스마트폰 세상, 앱스토어 실습에 오신것을 환영합니다.앱스토어에서는, 스마트폰의 필수 요소인, 어플리케이션, 줄여서 앱을 설치할 수 있습니다.크게는, 안드로이드 운영체제에서 사용하는, 구글 플레이 스토어와, ios운영체제에서 사용하는, 앱스토어가 있습니다. 이제, 다음 화면으로, 넘어가주세요.";
const page2 = "이번에는, 여러분의 휴대폰에 있는 앱스토어를 열어보겠습니다. 모든 스마트폰에는, 기본적으로, 앱스토어가 있습니다. 화면을 위로 살짝 올리거나, 옆으로 살짝 움직여보겠습니다.";
const page3 = "제 휴대폰에는, 플레이스토어가 설치되어 있네요. 안드로이드 운영체제를 기반으로 하는, 갤럭시 휴대폰 등은, 보통 플레이스토어가 설치되어 있습니다. 1,2초정도 살짝 눌러볼까요?";
const page4 = "홈화면에 추가를 누르면, 휴대폰의 맨처음 화면, 즉 홈화면에 추가가 됩니다.";
const page5 = "홈화면에 제대로 보여지고 있네요! 이제, 플레이스토어를 눌러서, 실행해보겠습니다. 플레이스토어 실행은 물론이고, 대부분의 앱 실행은, 와이파이가 켜져있을 때 가능하니, 참고해주세요.";
const page6 = "플레이스토어의, 처음 화면입니다. 앱을 한 번 찾아볼까요? 먼저, 검색창을 눌러주세요.";
const page7 = "본격적으로 앱을 사용하시기에 앞서,휴대폰 운영체제와 기종에 따라, 사용가능한 앱이 차이가 날수 있다는 점을, 참고해주세요.저는, 날씨를 자주 찾아보기 때문에, 믿을만한 날씨 정보 앱이, 필요합니다.검색창에, 날씨를 입력한 다음, 잠시 대기하거나, 엔터키를 눌러주세요.";
const page8 = "날씨를 입력하니까, 이렇게 목록이 나오게 되는데요, 여기서 날씨알리미를 눌러주세요. 표시된 부분을 눌러주시면 됩니다.";
const page9 = "기상청 날씨알리미를, 눌러주세요. 표시된 부분을 눌러주시면 됩니다.";
const page10 = "설치를 눌러주세요.";
const page11 = "설치가 다 되었다면, 열기를 눌러주세요.";
const page12 = "앱을 열었더니, 날씨알리미에서, 내 위치를 확인하기 위해, 휴대폰에 접근한다고 하네요. 앱 사용 중에만 허용을 누르면, 앱을 사용할 때만, 위치 조회가 가능합니다. 이번만 허용을 누르면, 앱을 다시 킬 때, 다시 허용을 해야 합니다. 그리고, 거부를 하게 되면, 사용이 불가능합니다. 다른 앱들도 마찬가지로, 권한을 확인할수 있으니, 참고해주세요. 이제, 다음 화면으로, 넘어가주세요.";
const page13 = "개인정보 보호를 위해서, 앱 사용중에만 허용이나, 이번만 허용을 눌러주겠습니다.";
const page14 = "날씨알리미에 접속이 되었습니다. 간단하게 살펴보면, 현재 온도와, 시간대별 날씨, 그리고 주간 날씨도 확인할 수 있네요.";
const page15 = "이제, 휴대폰의 뒤로가기를 눌러서, 앱을 나가보도록 하겠습니다. 표시된 부분을 눌러주세요.";
const page16 = "휴대폰의 화면에, 날씨알리미가 설치된 것을 확인할 수 있습니다.그리고, 설치한 앱을 찾기 힘드실 때, 휴대폰 내에서 검색이 가능하니 참고해주세요.";
const page17 = "이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";


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
    page17
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
    coordinate17
);
