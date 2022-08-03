chrome.tabs.executeScript(
  {
    code: 'document.querySelector("body").innerText',
  },
  function (result) {
    // After executing 'code' (callback)

    //이 문서에서 body 태그 아래에 있는 모든 텍스트를 가져온다
    var bodyText = result[0];
    //bodyText의 모든 단어를 추출하고, 그 단어의 숫자를 센다
    var bodyNum = bodyText.split(' ').length;
    //bodyText에서 자신이 알고 있는 단어(the)가 몇번 등장하는지 체크한다
    var myNum = bodyText.match(
      new RegExp('\\b(the|is|was|of)\\b', 'gi')
    ).length;

    var per = (myNum / bodyNum) * 100;
    per = per.toFixed(2);

    //id 값이 result인 태그에 결과를 추가한다
    document.querySelector('#result').innerText =
      myNum + '/' + bodyNum + '(' + per + '%)';
  }
);
