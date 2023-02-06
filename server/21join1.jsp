<%@page contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" %>
<%
    // 21form.html에서 보낸 폼 데이터 출력하기
    // 클라이언트가 전송한 폼 데이터를 JSP에서 가져올려면
    // request.getParmeter(폼요소이름)를 이용하면됨
    //단, 전송되는 값이 한글인 경우
    //request.setCharacterEncoding("utf-8");로 설정해야함
    //jsp로 넘어온 정보 중에 한글로 기입된 정보들은 파일이 깨져서 들어온다
    //특수 기호는 jsp에서 문제없이 출력된다
    request.setCharacterEncoding("utf-8"); //얘는 그냥 요렇게 작성만 하면 된다.

    String uid = request.getParameter("uid");
    String pwd = request.getParameter("repwd");
    String name = request.getParameter("name");
    String gender = request.getParameter("gender");
    // 다른 script 또는 div 에서 작업을 하더라도
    // name 같은상태라면 jsp에서 에러가 발생하지 않는다
    // (안좋은점은 정보가 중복되거나 작업하는데 혼선이 생길 수 있다 생각함)
    if (gender.equals("m")) gender = "남자";
    else gender = "여자";
    // 변수명으로 작성해야한다 
    // -> 전송되는 변수명으로 값이 실행되는 부분이 아니다
    // 값을 받아오기위해선 전송하는 변수명이 아닌 지정된 변수명으로 진행해야한다
%>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JSP 처리결과</title>
</head>
<body>
        <h1>JSP 처리결과</h1>
        <p>아이디 : <% out.print(uid); %></p>
        <!--out.print(uid); 이렇게 작성시 %뒤에 =이 붙으면 안된다 -->
        <p>비밀번호 : <%=pwd %></p>
        <p>이름 : <%=name %></p>
        <p>성별 : <%=gender %></p>
</body>
</html>