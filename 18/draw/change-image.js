const changeButton = document.querySelector(".change-btn");
const imageArray = [];

const codeDescription = document.querySelector(".code-area-desc");
const pageNum = 13;
const pageName = "18";

for (i = 1; i <= pageNum; i++) {
    imageArray.push(`../${pageName}/image/${i}.png`);
}
imageVariable = 0;
loadBackgroundImage(imageVariable);
handleCodeDesc(pageName, imageVariable);

changeButton.addEventListener("click", function () {
    imageVariable += 1;
    if (imageVariable < pageNum) {
        loadBackgroundImage(imageVariable);
        handleCodeDesc(pageName, imageVariable);
        console.log(imageVariable);
    } else {
        console.log("last page");
    }
});

function loadBackgroundImage(page) {
    drawCanvas.style.backgroundImage = `url(${imageArray[page]})`;
    paintedCanvas.style.backgroundImage = `url(${imageArray[page]})`;
}

function handleCodeDesc(pageTitle, pageCount) {
    codeDescription.innerText = `${pageTitle} 콘텐츠의 ${pageCount} 번째 페이지`;
}
