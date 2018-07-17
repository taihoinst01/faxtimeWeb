$(function () {
    var autocomplete_text = [
        "팩스타임은 뭐하는 곳인가요?",
        "팩스 전송 실패해도 과금 되나요?",
        "팩스는 최대 몇장까지 보낼 수 있나요?",
        "팩스 가격은 얼마인가요?",
        "팩스 전송에 대한 알림이 가능한가요?",
        "팩스는 최대 몇장까지 보낼 수 있나요?",
        "팩스를 한번에 몇 명에게 보낼 수 있나요?",
        "팩스 수신서비스가 무엇인가요?",
        "팩스 수신서비스 사용료는 얼마인가요?",
        "팩스 수신료 결제는 어떻게 하나요?",
        "팩스 수신번호는 지역번호를 꼭 사용해야 하나요?",
        "팩스 전송 성공 여부 알림이 가능한가요?",
        "팩스 전송 실패시 금액은 환불 되나요?",
        "팩스 전송시 첨부 파일 제한이 있나요?",
        "팩스 전송시 보낸 사람 팩스번호를 다른 번호로 할 수 있나요?",
        "SMS 가격은 얼마인가요?",
        "SMS는 몇글자까지 입력 할 수 있나요?",
        "LMS 가격은 얼마인가요?",
        "LMS는 몇글자까지 입력 할 수 있나요?",
        "MMS 가격은 얼마인가요?",
        "MMS는 몇글자까지 입력 할 수 있나요?",
        "단문 가격은 얼마인가요?",
        "단문은 몇글자까지 입력 할 수 있나요?",
        "장문 가격은 얼마인가요?",
        "장문은 몇글자까지 입력 할 수 있나요?",
        "팩스 미리보기 장수가 왜 틀리게 나오죠?",
        "알림톡이 무엇인가요?",
        "알림톡으로 보낼 수 있는 문자는 어떤건가요?",
        "알림톡과 문자메시지 차이점이 무엇인가요?",
        "알림톡 가격이 얼마인가요?",
        "알림톡과 친구톡 차이점은 무엇인가요?",
        "친구톡이 무엇인가요?",
        "친구톡 시간 제약 사항에 대해 알려주세요",
        "친구톡과 플러스친구 단체메시지와 무엇이 다른가요?",
        "친구톡 가격이 얼마인가요?",
        "발신번호가 무엇인가요?",
        "발신번호 사전등록제가 무엇인가요?",
        "발신번호 등록을 어떻게 하나요?"
    ];

    //keyboard action으로 담을 변수
    var keyboardText = '';  

    //input 출력
    $(".wc-shellinput").autocomplete({
        position: { my: "right bottom-25", at: "right" },
        source: function (request, response) {
            var results = $.ui.autocomplete.filter(autocomplete_text, request.term);
            response(results.slice(0, 5));  //갯수 제한 5개
        },
        focus: function (event, ui) {   //한글만 검색됬을시 자동검색창 닫히는 현상(버전업 버그라고함)
            return false;
        },
        open: function (event, ui) {
            $(document).on('click', '.ui-menu-item-wrapper', function () {
                $('.wc-shellinput').attr('value', $(this).text());
                $('.hiddenText').attr('value', $(this).text());
            }).on('keydown', '.wc-shellinput', function () {
                if ($('.ui-menu-item-wrapper').text()) {
                    keyboardText = $('.ui-state-active').text();
                }
            });
        },
        close: function (event, ui) {
            //keyboard일 경우 닫을때 담아준다
            $('.wc-shellinput').attr('value', keyboardText);
            $('.hiddenText').attr('value', keyboardText);
        }
    });
});
