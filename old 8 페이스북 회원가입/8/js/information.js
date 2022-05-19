const pageNum = 32;
const pageName = "";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`./image/${j}.jpg`);
    audio = new Audio(`./audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 페이스북을 처음 사용하시는 분들을 위해서, 회원가입을 실습해보도록 하겠습니다. 과정이 조금 복잡하기 때문에, 한단계 한단계, 천천히 진행해봅시다. 다음 화면으로, 넘어가주세요.";
const page2 = "먼저, 휴대폰에서 플레이스토어를 눌러서, 실행해주세요. 아이폰을 사용하실 경우, 앱스토어를 실행해주세요.";
const page3 = "검색창에, 페이스북을 입력해주세요.";
const page4 = "페이스북을, 눌러주세요.";
const page5 = "설치를, 눌러주세요.";
const page6 = "열기를, 눌러주세요.";
const page7 = "이제, 페이스북을 시작해볼까요?다음 화면으로, 넘어가주세요.";
const page8 = "페이스북에 회원가입이 필요하신 분들은, 새 페이스북 계정 만들기를 눌러주세요.";
const page9 = "다음을, 눌러주세요.";
const page10 = "저는 우선, 연락처 접근을 거부하겠습니다. 나중에, 친구를 추가할때, 다시 설정해보도록, 하겠습니다.";
const page11 = "미리 만들어둔, 구글 계정으로, 시작해보겠습니다. 이메일 계정을, 눌러주세요. 이 이메일 계정이, 여러분의 아이디가 됩니다.해당 이메일을 사용하기를 원하지 않으신다면, 빈공간을 눌러주셔도 됩니다.";
const page12 = "이름을 입력한 후에, 다음을 눌러주세요.";
const page13 = "생일을 선택한 다음, 다음을 눌러주세요.";
const page14 = "성별을 선택하고, 다음을 눌러주세요.";
const page15 = "휴대폰 번호나, 이메일 주소로 가입이 가능합니다. 이번 시간에는, 이메일 주소로 가입을, 눌러보겠습니다.";
const page16 = "본인을 확인할수 있는, 이메일을 입력해주시고, 다음을 눌러주세요. 아이디로 선택했던, 이메일을 적어주셔도 됩니다.초반에, 아이디로 이메일을 선택했던 분들은, 그대로 두시면 됩니다.";
const page17 = "비밀번호를 입력해주세요.";
const page18 = "다음을 눌러주세요.";
const page19 = "가입하기를, 눌러주세요.";
const page20 = "나중에 하기를, 눌러주세요.";
const page21 = "이메일 주소와, 비밀번호를 확인한 다음, 확인을 눌러주세요. 이메일 주소와 비밀번호는, 꼭 기억해주세요.";
const page22 = "업로드 안함을, 눌러주세요.";
const page23 = "마찬가지로, 업로드 안함을, 눌러주세요.";
const page24 = "아까 입력한, 여러분의 이메일로, 본인인증을 위한, 인증코드가 발송됩니다. 이메일을 열어서, 확인한다음, 코드를 입력해주세요.";
const page25 = "확인을, 눌러주세요.";
const page26 = "시작하기를, 눌러주세요.";
const page27 = "여기서는, 허용을 눌러야, 다음 단계로, 넘어갈수 있습니다. 허용을, 눌러주세요.";
const page28 = "허용을, 눌러주세요.";
const page29 = "페이스북이, 휴대폰 연락처에서 친구 목록을 불러온 다음, 친구 추가를 할수 있도록 안내해줍니다. 하지만, 친구는 나중에 추가해보겠습니다. 건너뛰기를 눌러주세요.";
const page30 = "건너뛰기를 눌러주세요.";
const page31 = "필요없는 기능이므로, 사용 안함을, 눌러주세요.";
const page32 = "이제, 페이스북을 사용할 준비가, 완료되었습니다. 다양한 기능을 배우게 될, 페이스북 실습, 두번째 시간도 함께해주세요. 이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";

pageDescArray.push(page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20, page21, page22, page23, page24, page25, page26, page27, page28, page29, page30, page31, page32);

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

const coordinate28 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate29 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate30 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate31 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate32 = {
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
    coordinate27,
    coordinate28,
    coordinate29,
    coordinate30,
    coordinate31,
    coordinate32
);