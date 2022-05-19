const pageNum = 17;
const pageName = "";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`./image/${j}.jpg`);
    audio = new Audio(`./audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "이번 시간에는, 소셜네트워킹서비스, SNS를 함께 살펴보겠습니다. 많은 사람들이, 소통을 위해서 사용하는 SNS에는, 대표적으로 인스타그램, 페이스북, 트위터가 있습니다. 오늘은 이 세가지 SNS를, 간단하게 살펴보겠습니다. 이제, 다음 화면으로, 넘어가주세요.";
const page2 = "이번 시간에는, 휴대폰으로 직접 하시기보다는, 튜토리얼을 잘 따라와주세요. 먼저, 인스타그램을 살펴볼까요? 인스타그램을 눌러주세요.";
const page3 = "인스타그램은, 이렇게, 사진을 올리고, 간단하게 글을 작성할 수 있습니다. 자신이 찍은 사진을, 다른 사람들과 공유하는것이, 주된 소통방법이라고 볼수 있습니다. 클릭해서, 다음 페이지로, 넘어가주세요.";
const page4 = "왼쪽부터, 하트는, 좋아요를 누르는 기능이고, 말풍선은, 댓글을 적는 기능입니다. 종이비행기 표시는, 게시글을 공유하는 기능입니다.";
const page5 = "이번에는, 돋보기 표시를 눌러볼까요?";
const page6 = "돋보기 표시를 누르면, 다양한 사람들의 게시글을, 모아볼수도 있습니다. 이번에는, 제일 오른쪽에, 프로필 사진을, 눌러볼까요?";
const page7 = "계정을, 살펴보겠습니다. 여기서 팔로워는, 저의 사진을 보기 위해서, 저의 계정을 친구추가한 사람들입니다. 팔로잉은, 제가 친구추가한 사람들입니다. 그리고 그 밑에는, 제가 올렸던 사진들을 모아볼수 있게 되어있네요. 이것을 피드라고 합니다. 이제, 다음 화면으로, 넘어가주세요.";
const page8 = "이번엔, 트위터를 들어가볼까요? 트위터를 눌러주세요.";
const page9 = "트위터의 홈화면입니다. 사진보다는, 글이 위주인 것을 확인할수 있습니다. 다음 화면으로, 넘어가주세요.";
const page10 = "왼쪽부터, 댓글 기능, 리트윗 기능, 좋아요 기능, 공유 기능입니다. 이 중에서 리트윗 기능은, 여러분의 트위터에, 해당 게시글을 똑같이 올릴수 있는 기능입니다. 다음 화면으로, 넘어가주세요.";
const page11 = "이제, 표시된 부분을 눌러볼까요?";
const page12 = "이렇게, 글을 작성할수 있습니다. 트윗하기를 누르면, 여러분의 트위터에 글이 게시됩니다. 다음 페이지로, 넘어가주세요.다음 화면으로, 넘어가주세요.";
const page13 = "마지막으로, 페이스북을 살펴보겠습니다. 페이스북을 눌러주세요.";
const page14 = "이 화면을, 페이스북의 뉴스피드라고 합니다. 친구들의 게시글을 확인할수 있고, 친구 외에 다른 여러 계정의 글도 확인이 가능합니다. 내가 팔로우한 페이지 좋아요를 누를수도 있고, 댓글을 달거나, 친구들에게 공유할수도 있습니다. 다음 화면으로, 넘어가주세요.";
const page15 = "이 화면은, 저의 친구에게 게시글을 공유받은 화면입니다. 페이스북은, 이런식으로 공유가 간편하다는 장점이 있습니다.";
const page16 = "이렇게, 카드뉴스 형식으로, 홍보글을 올리기도 합니다.그리고, 다른사람의 소식을 보고 싶을땐, 표시된 부분을 통해서, 확인할수 있습니다. 더 자세한 기능은, 다음 시간에 다시 실습해보도록 하겠습니다.";
const page17 = "여기까지, 세가지 SNS를 살펴보았습니다. 많은 사람들이, 사용하는만큼, 보안도 조심해야한다는 점을, 꼭 기억해주세요.이상으로, 이번 시간에 준비한 실습을 마치겠습니다. 감사합니다.";

pageDescArray.push(page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12,page13,page14,page15,page16,page17);

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