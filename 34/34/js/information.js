const pageNum = 12;
const pageName = "34";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../${pageName}/image/${j}.png`);
    audio = new Audio(`../${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 유튜브 동영상에 좋아요 싫어요를 표현하는 방법을, 실습하겠습니다. 각 단계마다, 여러분의 핸드폰을 사용해서 따라해 주세요. 여러분의 휴대폰에서, 유튜브를 찾고 클릭해서, 유튜브 앱을 실행해주세요.";
const page2 = "유튜브를 실행하면 나오는 홈화면입니다. 좋아요 싫어요 실습은, 디지털배움터의 홍보영상을 보면서 실습해 보겠습니다.";
const page3 = "상단메뉴의 돋보기 모양을 클릭해서, 검색을 시작하겠습니다. 검색어는 디지털배움터로 해볼게요. 휴대폰으로 직접 따라해보세요.";
const page4 = "검색창에 디지털배움터를 입력하세요.";
const page5 = "디지털배움터를 눌러주세요. 혹은, 검색창에 디지털배움터를 입력하고, 자판에서 돋보기 표시나, 엔터를 눌러주세요.";
const page6 = "검색어에 따라,검색결과 페이지가 나옵니다. 디지털배움터를 검색하니 디지털배움터 채널이 나오네요. 디지털배움터 채널을 클릭해서 들어가보겠습니다.";
const page7 = "채널 홈에서, 가장 먼저 보이는, 동영상을 시청하면서, 좋아요 기능과, 싫어요 기능을 알려드리겠습니다. 리스트의 동영상을 클릭하여, 재생해주세요.";
const page8 = "동영상 재생이 시작되었습니다. 모든 영상들은, 박스와 같은 구조입니다. 동영상 재생영역의 아래에는, 제목, 조회수, 등록일, 태그가 보이네요. 그리고 동영상마다, 박스와 같은 기능들이 모여있는, 메뉴바가 있습니다. 이번 시간에 알아 볼, 좋아요 버튼과, 싫어요 버튼도 여기에 있습니다.";
const page9 = "바로 여기, 엄지를, 위로 올린 모양의 아이콘과, 엄지를, 아래로 내린 모양의 아이콘이 있습니다. 엄지척 그림이, 좋아요 이고, 엄지를 내린 그림이, 싫어요 입니다. 이제, 좋아요 버튼을, 눌러보겠습니다.";
const page10 = "엄지척 아이콘이, 검은색으로 변했습니다. 그리고 화면 하단에, '좋아요 표시한 동영상에 추가됨' 이라는 안내 메세지를, 확인 할 수 있습니다. 좋아요를 클릭했지만, 마음이 바뀌었다면, 이번에는 싫어요를 클릭해보겠습니다.";
const page11 = "엄지내린 아이콘이, 검은색으로 변합니다. 하단에, '동영상에 싫어요 표시를 했습니다' 라는 안내메세지를, 확인할 수 있습니다. 이제 테스트를 했으니, 다시, 좋아요를 클릭할게요. 저는 광희씨가 나온, 디지털배움터 동영상이 좋습니다.";
const page12 = "이제, 동영상을 아래로 내려서, 유튜브 메뉴가 보이게 해보겠습니다. 영상 부분을 살짝 눌러서, 화면을 밑으로 드래그해주세요. 시청중이던 동영상을 끌어내려도, 화면의 하단에서, 동영상이, 재생 되고 있을거에요. 이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 저와 함께, 여러분의 휴대폰으로, 직접, 실습해보세요! 감사합니다.";



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


const inputPage = [{ page: 3, correctAnswer: "디지털배움터" }];

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
    startRateX: 0.7555555555555555, startRateY: 0.034375, endRateX: 0.8722222222222222, endRateY: 0.096875
};

const coordinate4 = {
    startRateX: 0.1, startRateY: 0.040625, endRateX: 0.9055555555555556, endRateY: 0.0875
};

const coordinate5 = {
    startRateX: 0.016666666666666666, startRateY: 0.0921875, endRateX: 0.9833333333333333, endRateY: 0.165625
};

const coordinate6 = {
    startRateX: 0.025, startRateY: 0.5578125, endRateX: 0.9833333333333333, endRateY: 0.715625
};

const coordinate7 = {
    startRateX: 0, startRateY: 0.671875, endRateX: 0.9888888888888889, endRateY: 0.828125
};

const coordinate8 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate9 = {
    startRateX: 0.008333333333333333, startRateY: 0.43125, endRateX: 0.23333333333333334, endRateY: 0.5203125
};

const coordinate10 = {
    startRateX: 0.19166666666666668, startRateY: 0.43125, endRateX: 0.4027777777777778, endRateY: 0.5265625
};

const coordinate11 = {
    startRateX: 0.019444444444444445, startRateY: 0.5265625, endRateX: 0.22777777777777777, endRateY: 0.4328125
};

const coordinate12 = {
    startRateX: 0.9805555555555555, startRateY: 0.3375, endRateX: 0.016666666666666666, endRateY: 0.0328125
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
