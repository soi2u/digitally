const pageNum = 20;
const pageName = "24";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 지난 시간에 이어서, 카카오톡을 실습해보겠습니다.카카오톡을, 처음 접해보시는 분들은, 카카오톡 실습의, 첫번째 시간에 참여하신 뒤에, 이번시간에 참여하시는 방향을, 권장드립니다.그럼, 카카오톡 프로필 변경하는 방법을, 함께 살펴볼까요?다음 화면으로, 넘어가주세요.";
const page2 = "먼저, 카카오톡을 찾은 다음, 눌러서 실행해주세요.";
const page3 = "제일 위에, 여러분의 프로필이 보입니다. 그리고, 생일인 친구들이 보이고, 그 밑으로는, 자주 연락하는 친구들을, 즐겨찾기 해두었습니다. 그러면 먼저, 프로필을 한번 변경해볼까요?프로필을 눌러주세요.";
const page4 = "프로필 편집을 눌러주세요.";
const page5 = "프로필 편집에서는, 사진과, 이름, 상태메세지, 배경화면, 그리고 프로필음악까지 변경할수 있는데요, 먼저, 프로필 사진을 바꾸려면, 표시된 부분을 눌러주세요.";
const page6 = "앨범에서 사진 및, 동영상 선택을 누르면, 여러분의 앨범에 있는 사진으로, 프로필을 변경할수 있습니다.";
const page7 = "저는, 제 앨범속 사진 중에서, 표시된 사진을 선택해보겠습니다.";
const page8 = "프로필 사진을, 간단히 편집할수도 있습니다. 이번 시간에는, 수정하지 않도록 하겠습니다. 확인을 눌러주세요.";
const page9 = "변경이 완료되었습니다. 이제, 상태메세지를 바꿔볼까요? 표시된 부분을 눌러주세요.";
const page10 = "여러분이 기록하고 싶은 메세지를, 기록한 다음, 확인을 눌러주세요.";
const page11 = "배경사진을 바꾸고 싶을땐, 카메라 표시를 눌러주세요.";
const page12 = "앨범에서 사진 및, 동영상 선택을, 눌러볼까요?";
const page13 = "표시된 사진으로, 변경해보겠습니다. 사진을 눌러주세요.";
const page14 = "확인을 눌러주세요.";
const page15 = "프로필음악을 바꾸고 싶을땐, 음표 표시를, 눌러주세요.";
const page16 = "노래 위젯 변경이 가능하고, 왼쪽 위에, 연필 표시를 누르면, 노래도 변경할수 있습니다.";
const page17 = "수정이 완료되면, 완료를 눌러주세요.";
const page18 = "이번엔, 톱니바퀴 표시를, 눌러주세요.";
const page19 = "여러분이 카카오톡을 사용하기 위해서, 로그인했던 이메일 계정을, 확인할수 있고, 카카오톡의 ID를 설정할수 있습니다. 이제, 뒤로가기를, 눌러주세요.";
const page20 = "프로필 수정이 완료되었습니다.이제 여러분의 프로필도, 꾸며보세요. 이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";


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
    startRateX: 0.016666666666666666, startRateY: 0.1609375, endRateX: 0.20277777777777778, endRateY: 0.30625
};

const coordinate3 = {
    startRateX: 0.3861111111111111, startRateY: 0.209375, endRateX: 0.005555555555555556, endRateY: 0.103125
};

const coordinate4 = {
    startRateX: 0.3888888888888889, startRateY: 0.790625, endRateX: 0.6055555555555555, endRateY: 0.915625
};

const coordinate5 = {
    startRateX: 0.5416666666666666, startRateY: 0.6140625, endRateX: 0.6305555555555555, endRateY: 0.68125
};

const coordinate6 = {
    startRateX: 0.11944444444444445, startRateY: 0.446875, endRateX: 0.5722222222222222, endRateY: 0.4984375
};

const coordinate7 = {
    startRateX: 0.325, startRateY: 0.3859375, endRateX: 0.6777777777777778, endRateY: 0.575
};

const coordinate8 = {
    startRateX: 0.8777777777777778, startRateY: 0.0109375, endRateX: 0.9833333333333333, endRateY: 0.0640625
};

const coordinate9 = {
    startRateX: 0.2111111111111111, startRateY: 0.7328125, endRateX: 0.7888888888888889, endRateY: 0.7828125
};

const coordinate10 = {
    startRateX: 0.8388888888888889, startRateY: 0.046875, endRateX: 0.9916666666666667, endRateY: 0.0953125
};

const coordinate11 = {
    startRateX: 0.025, startRateY: 0.8609375, endRateX: 0.1527777777777778, endRateY: 0.925
};

const coordinate12 = {
    startRateX: 0.12222222222222222, startRateY: 0.5078125, endRateX: 0.5694444444444444, endRateY: 0.4453125
};

const coordinate13 = {
    startRateX: 0.32222222222222224, startRateY: 0.5734375, endRateX: 0, endRateY: 0.3953125
};

const coordinate14 = {
    startRateX: 0.8666666666666667, startRateY: 0.0578125, endRateX: 0.9888888888888889, endRateY: 0.0109375
};

const coordinate15 = {
    startRateX: 0.18333333333333332, startRateY: 0.8546875, endRateX: 0.28055555555555556, endRateY: 0.9203125
};

const coordinate16 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate17 = {
    startRateX: 0.8611111111111112, startRateY: 0.046875, endRateX: 0.9777777777777777, endRateY: 0.096875
};

const coordinate18 = {
    startRateX: 0.8555555555555555, startRateY: 0.0375, endRateX: 0.9916666666666667, endRateY: 0.1015625
};

const coordinate19 = {
    startRateX: 0.03611111111111111, startRateY: 0.046875, endRateX: 0.1, endRateY: 0.0953125
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
