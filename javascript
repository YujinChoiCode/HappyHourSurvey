function submitForm() {
    // 사용자 입력을 가져오기
    const name = document.getElementById("name").value;
    const gather = document.querySelector('input[name="gather"]:checked').value;
    const bbq = document.querySelector('input[name="bbq"]:checked').value;
    const opinion = document.getElementById("opinion").value;

    // 데이터를 Google Apps Script로 전송
    fetch('https://https://script.google.com/a/macros/kentech.ac.kr/s/AKfycbxPXLv1S7DXFw0kQLPO8eqfGdXOs0J7s1ivUwjmwqJLj2k1GrXeSqE-xTzWlBnaG0UNmw/exec', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": name,
            "gather": gather,
            "bbq": bbq,
            "opinion": opinion
        })
    })
    .then(response => response.json())
    .then(data => {
        // 결과 표시
        const resultDiv = document.getElementById("result");
        if (data.result === "success") {
            resultDiv.innerHTML = "<p>설문이 성공적으로 제출되었습니다!</p>";
        } else {
            resultDiv.innerHTML = "<p>설문 제출에 실패했습니다.</p>";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "<p>설문 제출에 오류가 발생했습니다.</p>";
    });
}
