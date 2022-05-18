const pageNum = 12;
const pageName = "35";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번에는 유튜브 영상에 댓글을 달아 보겠습니다. 먼저, 유튜브를 실행해 주세요.";
const page2 = "유튜브를 실행하면 나오는 첫 화면입니다. 오늘은 디지털배움터의 영상에 댓글을 달아 볼게요. 돋보기 모양의 검색창을 눌러 줍니다.";
const page3 = "검색창에 디지털배움터를 입력합니다.";
const page4 = "검색 결과에 나오는 디지털배움터를 눌러 이동해 줍니다.";
const page5 = "디지털배움터 채널을 눌러 줍니다.";
const page6 = "디지털배움터 채널의 동영상들을 확인할 수 있습니다. 가장 위에 있는 동영상을 눌러 주세요.";
const page7 = "동영상이 재생됩니다. 싫어요, 좋아요, 공유, 구독, 댓글 등 다양한 기능을 이용할 수 있습니다.";
const page8 = "이제, 댓글을 눌러 댓글창으로 이동해 주세요.";
const page9 = "여러 사람들의 의견을 확인할 수 있는 댓글들을 살펴볼 수 있습니다. 이제, 저희도 한번 댓글을 달아 보도록 하겠습니다. 댓글 추가를 눌러 주세요.";
const page10 = "댓글 추가란에 입력하고 싶은 댓글을 적어 주세요.";
const page11 = "모두 적었다면, 종이비행기 모양의 전송 버튼을 눌러 주세요.";
const page12 = "이제, 내 댓글이 달린 것을 확인할 수 있습니다. 댓글을 통해 다양한 사람들과 소통할 수 있습니다. 모두 고생하셨습니다.";



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
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate2 = {
    startRateX: 0.8694444444444445, startRateY: 0.103125, endRateX: 0.7611111111111111, endRateY: 0.0421875
};

const coordinate3 = {
    startRateX: 0.125, startRateY: 0.0390625, endRateX: 0.9027777777777778, endRateY: 0.09375
};

const coordinate4 = {
    startRateX: 0.03333333333333333, startRateY: 0.0953125, endRateX: 0.8972222222222223, endRateY: 0.1671875
};

const coordinate5 = {
    startRateX: 0.022222222222222223, startRateY: 0.61875, endRateX: 0.9916666666666667, endRateY: 0.7703125
};

const coordinate6 = {
    startRateX: 0.016666666666666666, startRateY: 0.6734375, endRateX: 0.9777777777777777, endRateY: 0.8203125
};

const coordinate7 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate8 = {
    startRateX: 0.9861111111111112, startRateY: 0.821875, endRateX: 0.008333333333333333, endRateY: 0.6859375
};

const coordinate9 = {
    sstartRateX: 0.016666666666666666, startRateY: 0.515625, endRateX: 0.9888888888888889, endRateY: 0.615625
};

const coordinate10 = {
    startRateX: 0.025, startRateY: 0.7546875, endRateX: 0.9833333333333333, endRateY: 0.8453125
};

const coordinate11 = {
    startRateX: 0.8611111111111112, startRateY: 0.3765625, endRateX: 0.9861111111111112, endRateY: 0.4484375
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
