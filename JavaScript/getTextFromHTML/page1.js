/*
		1. 테스트 명 : HTML <input>의 text를 가져오기
		2. 결과 표시 :
			1) HTML : H1의 텍스트가 변경됨.
			2) debugger-ui : 해당없음.

		3. 알게된 점 : 해당없음.
*/

function getText() {
	document.getElementById("sectionName").innerText = document.getElementById("inputedText").value;
}
