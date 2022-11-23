const pageNum = 22;
const pageName = "33";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 유튜브 채널을 구독하는 방법과, 그리고 채널 소식 받기를 켜고, 끄는 방법을 알아보겠습니다. 단계마다 여러분의 핸드폰을 사용해서 따라해 주세요. 여러분의 핸드폰에서, 유튜브를 찾고 클릭해서, 유튜브 앱을 실행해주세요.";
const page2 = "유튜브를 실행하면 나오는 홈화면입니다. 상단메뉴의 돋보기 모양을 클릭해서, 검색을 할 수 있습니다.";
const page3 = "검색창에, 디지털배움터를 검색해보겠습니다. 검색창에 디지털배움터를 입력합니다.";
const page4 = "디지털배움터를 눌러주세요. 혹은, 검색창에 디지털배움터를 입력하고, 자판에서 돋보기 표시나, 엔터를 눌러주세요.";
const page5 = "검색결과 페이지가 나왔습니다. 제일 위에, 디지털배움터 채널이 바로 보이네요.";
const page6 = "구독자가 3천명, 동영상이 258개가 등록되어있네요. 채널을 클릭해주세요.";
const page7 = "디지털배움터 채널 메인페이지 입니다. 채널마다 홈화면이 있습니다. 홈버튼을 누르면, 채널 홈화면으로 이동합니다.";
const page8 = "상단에는 동영상, 재생목록, 채널, 정보 메뉴가 있습니다. 각 메뉴를 설명해드릴게요. 먼저, 동영상 탭을 눌러 주세요.";
const page9 = "동영상 탭에서는, 채널에 올라온 동영상을 리스트로 모아볼 수 있습니다. 다음은 재생목록 탭을 눌러 주세요.";
const page10 = "재생목록 탭에서는, 채널에 올라온 동영상들의 묶음, 즉 재생목록을, 한눈에 볼수 있습니다. 다음은 정보 탭을 클릭해보세요.";
const page11 = "채널의 정보탭에서는, 채널 소개 및, 채널의 공식 웹사이트, 블로그, 그리고 SNS를 확인 할 수 있습니다. 마지막으로 채널 탭을 눌러 주세요.";
const page12 = "채널탭에서는, 채널에서 운영중인 다른 채널을 확인 할 수 있습니다. 자매품 같은 느낌으로 생각해주시면 됩니다. 아쉽지만, 디지털배움터 채널에서 운영하는 다른 채널은 없네요! 이제, 본격적으로 채널 구독에 대해 실습하겠습니다. 디지털 배움터 홈으로 돌아가 주세요.";
const page13 = "모든 채널에는 구독버튼이 있습니다. 많은 유튜버들이 요청해주는, 구독과 좋아요에서, 구독하기가, 바로 여기에 표시된, 구독 버튼을, 클릭해달라는 것입니다. 구독 버튼을 눌러 주세요.";
const page14 = "구독버튼을 누르면, 구독버튼 자리가 구독중으로 바뀌고, 종모양 아이콘이 생깁니다. 종모양 아이콘으로 알림 설정을 할 수 있습니다. 이제 채널 구독이 완료되었습니다. 구독이 잘 되었는지, 구독페이지에서, 확인해보겠습니다. 하단 메뉴에서 구독버튼을 클릭해주세요.";
const page15 = "구독이 된 것을 확인할 수 있습니다. 다시 채널을 눌러서 디지털 배움터로 돌아가 주세요." 
const page16 = "혹시, 시도때도 없이 유튜브에서 날아오는 알림으로, 방해받은 적 있으신가요? 그럼, 꼭 필요한 설정이 있습니다. 이제, 알림 설정을 변경하는 방법을, 실습해보겠습니다. 화면 중앙의, 종모양을 클릭해서, 알림 설정을 변경해보겠습니다.";
const page17 = "종모양을 클릭하면 전체, 맞춤설정, 없음 중 선택할 수 있습니다. 채널마다 다르게 설정할 수 있습니다. 먼저, 전체를 눌러 볼게요.";
const page18 = "전체를 누르면, 전체 알림이 설정되며, 모든 알림을 수신하게 됩니다. 다시, 종모양을 눌러주세요.";
const page19 = "맞춤 설정을 눌러 볼게요.";
const page20= "맞춤 설정 알림을 누르면, 유튜브 앱에서 설정한 알림만, 맞춤으로 받아볼 수 있어요!";
const page21 = "마지막으로, 알림을 해제해 볼게요. 다시, 종 모양을 눌러 주세요.";
const page22 = "없음을 눌러 볼게요. 채널의 모든 알림을 해제할 수 있습니다. 채널 구독과 알림 설정에 대해서 알아봤어요. 모두 고생하셨습니다.";



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


const inputPage = [{ page: 2, correctAnswer: "디지털배움터" }];

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
    startRateX: 0.7611111111111111, startRateY: 0.0359375, endRateX: 0.8833333333333333, endRateY: 0.0921875
};

const coordinate3 = {
    startRateX: 0.13055555555555556, startRateY: 0.0421875, endRateX: 0.9, endRateY: 0.090625
};

const coordinate4 = {
    sstartRateX: 0.002777777777777778, startRateY: 0.096875, endRateX: 0.03333333333333333, endRateY: 0.125
};

const coordinate5 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate6 = {
    startRateX: 0.9916666666666667, startRateY: 0.7125, endRateX: 0, endRateY: 0.5390625
};

const coordinate7 = {
    startRateX: 0.002777777777777778, startRateY: 0.546875, endRateX: 1, endRateY: 0.7203125
};

const coordinate8 = {
    startRateX: 0.12777777777777777, startRateY: 0.0890625, endRateX: 0.3277777777777778, endRateY: 0.1671875
};

const coordinate9 = {
    startRateX: 0.3194444444444444, startRateY: 0.09375, endRateX: 0.5277777777777778, endRateY: 0.1703125
};

const coordinate10 = {
    startRateX: 0.8277777777777777, startRateY: 0.1046875, endRateX: 0.9972222222222222, endRateY: 0.15625
};

const coordinate11 = {
    startRateX: 0.6666666666666666, startRateY: 0.0953125, endRateX: 0.8638888888888889, endRateY: 0.1671875
};

const coordinate12 = {
    startRateX: 0.4888888888888889, startRateY: 0.10625, endRateX: 0, endRateY: 0.0328125
};

const coordinate13 = {
    startRateX: 0.3, startRateY: 0.471875, endRateX: 0.7055555555555556, endRateY: 0.51875
};

const coordinate14 = {
    startRateX: 0.6083333333333333, startRateY: 0.871875, endRateX: 0.8027777777777778, endRateY: 0.9390625
};

const coordinate15 = {
    startRateX: 0.016666666666666666, startRateY: 0.115625, endRateX: 0.21944444444444444, endRateY: 0.240625
};

const coordinate16 = {
    startRateX: 0, startRateY: 0.478125, endRateX: 0.9972222222222222, endRateY: 0.5140625
};

const coordinate17 = {
    startRateX: 0.23333333333333334, startRateY: 0.46875, endRateX: 0.6444444444444445, endRateY: 0.534375
};

const coordinate18 = {
    startRateX: 0.5388888888888889, startRateY: 0.4640625, endRateX: 0.6722222222222223, endRateY: 0.525
};

const coordinate19 = {
    startRateX: 0.24444444444444444, startRateY: 0.5390625, endRateX: 0.6444444444444445, endRateY: 0.609375
};

const coordinate20 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate21 = {
    startRateX: 0.5555555555555556, startRateY: 0.46875, endRateX: 0.6611111111111111, endRateY: 0.5203125
};

const coordinate22 = {
    startRateX: 0.5555555555555556, startRateY: 0.46875, endRateX: 0.6611111111111111, endRateY: 0.5203125
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
