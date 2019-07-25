$(document).ready(function(){

    $("#sendUserInfoByGet").click(function(){
        var userInfo = {
            userName : $("#userNameFieldGet").val(),
            userSurname : $("#userSurameFieldGet").val(),
            userAge : $("#userAgeFieldGet").val(),
            userAddress : $("#userAddressFieldGet").val()
        };

        var ageInputGet = $("#userAgeFieldGet");
        ageInputGet.focus(cleanInput);

        if (userInfo.userAge > 0 && userInfo.userAge < 100){
            for (var key in userInfo) {
            userInfo[key] += '.ValidatedByGET';
            };
    
            $.get('/userGet?userName='+userInfo.userName+'&userSurname='+userInfo.userSurname+'&userAge='+userInfo.userAge+'&userAddress='+userInfo.userAddress);
        } else { 
            ageInputGet.val("");
            ageInputGet.addClass("warning");
            ageInputGet.attr("placeholder", "You have entered impossible age");
        };
    });


    $("#sendUserInfoByPost").click(function(){
        var userInfo = {
            userName : $("#userNameFieldPost").val(),
            userSurname : $("#userSurameFieldPost").val(),
            userAge : $("#userAgeFieldPost").val(),
            userAddress : $("#userAddressFieldPost").val()
        };

        var ageInputPost = $("#userAgeFieldPost");
        ageInputPost.focus(cleanInput);

        if (userInfo.userAge > 0 && userInfo.userAge < 100){
            for (var key in userInfo) {
            userInfo[key] += '.ValidatedByPOST';
            };

            //This code works correctly
            //
            var xhr = new XMLHttpRequest();
            xhr.open('POST','/userPost');
            
            xhr.setRequestHeader('Content-type','application/json'); 
            xhr.send(JSON.stringify(userInfo));


            //This code returns empty object:
            //
            // $.post("/userPost", userInfo);
            

            //This code returns error "Bad request"
            //in versions 1.5 and later and returns 
            //empty object in erlier ones:
            //
            // $.ajax({
            //     type: "POST",
            //     url: "/userPost",
            //     headers: {
            //         'Content-Type':'application/json'
            //     },
            //     data: "json=" + escape(JSON.stringify(userInfo)),
            // });

        } else { 
            ageInputPost.val("");
            ageInputPost.addClass("warning");
            ageInputPost.attr("placeholder", "You have entered impossible age");
        };
    });

    function cleanInput(){
        $(this).removeClass("warning");
        $(this).attr("placeholder", "");
    };

})