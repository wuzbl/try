$(document).ready(function() {
    $("#btu").click(function(){
        var username=$("#username").val();
        var password = $("#password").val();
       // var c = { "LoginId": username, "LoginPasswd": password};   //��¼
        //var c = {
        //  "admin": "6534", "AdminId": "854261", "AdminGrade": "2", "AdminName": "zhang", "AdminPasswd": "mima", "AdminContactPhone": "1234567879", "AdminContactEmail": "123456@163,com"
        //  , "AdminPicture": "c:/df", "AdminIdPict": "c:/df", "Remark": "c:/df"
        //};                //����admin   �� ����
//          var c = {
 //             "userinfo": "12", "UserName": "zhang", "UserWechatName": "zhang", "UserId": "625449456", "UserContactPhone": "1234567879", "UserContactEmail": "123456@163,com"
//              , "UserFacepict": "c:/df", "UserPicTime": "c:/df", "Remark": "very"
//         };                //����userinfo
    //   var c = { "admin": "100" };             //��ȡȫ��
        var c = { "Id": "12" };             //ɾ��
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