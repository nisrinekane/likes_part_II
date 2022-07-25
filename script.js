// function to increment likes
function increment(element) {
    element.innerText++;
}

// change "like" text to plural if over 1
function changeText(element) {
    // fetch previous sibling: number of likes
    let likeNum = element.previousElementSibling.innerText;
    // if over 1 change text to plural
    if (likeNum >= 2) {
        element.innerText = 'likes';
    }
}

