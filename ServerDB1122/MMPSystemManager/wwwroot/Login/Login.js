$(document).ready(function() {
    $("#btu").click(function(){
        var username=$("#username").val();
        var password = $("#password").val();
       // var c = { "LoginId": username, "LoginPasswd": password};   //��¼
        //var c = {
        //    "AdminNumber": "12345", "AdminId": "12346798513", "AdminGrade": "2", "AdminName": "zhang", "AdminPasswd": "mima", "AdminContactPhone": "1234567879", "AdminContactEmail": "123456@qq.com"
        //    , "AdminOnline": "1", "AdminPicture": "c:/df", "AdminIdPict": "c:/df", "Remark": "c:/df"
        //};                //����
        var c = { "admin": "100" };             //��ȡȫ��
        var c = { "Id": "12345" };             //ɾ��
        $.post("../Api/SystemApi/Delete",
            c,
            function (data) {
                
                alert(data);
                window.location.href='index.html';
             
            }
        )
    })
});

/*

*/