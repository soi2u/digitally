const pageNum = 12;
const pageName = "32";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 카카오톡을 확인할때, 상대방에게서, 채팅방 말풍선 옆에, 1 표시가 사라지지 않고, 읽는 방법을, 연습해보겠습니다. 먼저, 휴대폰에서, 카카오톡을 찾아서, 실행해주세요.";
const page2 = "채팅 표시를 눌러주세요.";
const page3 = "카카오톡을 주고 받으면, 말풍선 옆에, 1이라는 숫자가 붙습니다.이는, 친구가 내 카카오톡을 확인했는지 확인하지 않았는지, 알수있는 표시입니다.내 친구에게서, 1이 사라지지 않게하고, 카카오톡을 읽어보도록 하겠습니다. 다음 화면으로, 넘어가주세요.";
const page4 = "휴대폰 상단을 살짝 누른 상태에서, 상태바를 끌어내려주세요.";
const page5 = "표시된 부분을, 끌어내려주세요.";
const page6 = "와이파이는, 켜두었지만, 휴대폰 모바일 데이터를 꺼두었습니다.비행기 탑승모드를 누르면, 모든 통신연결이, 끊어지게 됩니다. 비행기 탑승모드를, 눌러주세요.";
const page7 = "이제, 모든 연결이, 차단되었습니다. 오른쪽 상단에는, 비행기 표시가 나타났습니다.퀵패널을 다시 올려주세요.";
const page8 = "채팅이 한개 와있습니다.채팅방을 눌러볼까요?";
const page9 = "저에게는, 메세지 옆에, 1이 없어졌습니다. 하지만, 채팅을 보낸, 상대방에게는, 1이 남아있다고 합니다. 다시, 상태바를 끌어내려볼까요?";
const page10 = "다시 퀵패널을 열어서, 비행기 탑승 모드를, 눌러주세요. 그러면, 비행기 탑승 모드가 종료됩니다.";
const page11 = "휴대폰에서 뒤로가기를 한번 누르면, 해당 화면이 나오게 됩니다. 비행기 탑승모드가 종료 되면서, 와이파이 표시가 자동으로 돌아왔습니다. 다시 한번, 친구에게서 온, 메시지를 확인해봅시다. 퀵패널을 위로 올려서, 채팅방으로 돌아가주세요.";
const page12 = "이제, 친구에게서도, 1이 사라졌다고 합니다. 제 휴대폰에서는, 원래대로, 1이 사라진 상태입니다.이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";


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
    page12
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
    startRateX: 0.002777777777777778, startRateY: 0.1625, endRateX: 0.25, endRateY: 0.3125
};

const coordinate2 = {
    startRateX: 0.18888888888888888, startRateY: 0.859375, endRateX: 0.42777777777777776, endRateY: 0.9375
};

const coordinate3 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate4 = {
    startRateX: 0.005555555555555556, startRateY: 0.003125, endRateX: 1, endRateY: 0.115625
};

const coordinate5 = {
    startRateX: 0.008333333333333333, startRateY: 0.1125, endRateX: 0.9888888888888889, endRateY: 0.16875
};

const coordinate6 = {
    startRateX: 0.39166666666666666, startRateY: 0.4671875, endRateX: 0.6111111111111112, endRateY: 0.6328125
};

const coordinate7 = {
    startRateX: 0.8583333333333333, startRateY: 0.6625, endRateX: 0.9944444444444445, endRateY: 0.7171875
};

const coordinate8 = {
    startRateX: 0.005555555555555556, startRateY: 0.21875, endRateX: 0.9944444444444445, endRateY: 0.3203125
};

const coordinate9 = {
    startRateX: 0.9916666666666667, startRateY: 0.0390625, endRateX: 0.2611111111111111, endRateY: 0
};

const coordinate10 = {
    startRateX: 0.4, startRateY: 0.48125, endRateX: 0.6083333333333333, endRateY: 0.6140625
};

const coordinate11 = {
    startRateX: 0.002777777777777778, startRateY: 0.6578125, endRateX: 0.9833333333333333, endRateY: 0.7171875
};

const coordinate12 = {
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
    coordinate12
);
