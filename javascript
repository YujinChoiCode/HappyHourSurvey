function submitForm() {
    // 사용자 입력을 가져오기
    const name = document.getElementById("name").value;
    const gather = document.querySelector('input[name="gather"]:checked').value;
    const bbq = document.querySelector('input[name="bbq"]:checked').value;
    const opinion = document.getElementById("opinion").value;

    // 데이터 확인 (화면에 결과 표시)
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h2>응답 결과</h2>
        <p>이름: ${name}</p>
        <p>D동 집합 가능 여부: ${gather}</p>
        <p>글램핑장 참여 가능 여부: ${bbq}</p>
        <p>기타 의견: ${opinion}</p>
    `;

    // 추가적으로 서버로 데이터를 보내려면 AJAX 요청을 보낼 수 있습니다.
    // 예를 들어, 백엔드 서버가 있을 경우 이 데이터를 서버로 전송하는 코드를 추가합니다.
    // 서버가 없으면, 데이터를 로컬에 저장하거나 화면에 보여주는 기능으로 끝낼 수 있습니다.
}
