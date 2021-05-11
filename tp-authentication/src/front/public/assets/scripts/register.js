function start() {

    function redirectOnConnect(){
        var token = window.localStorage.getItem("token");

        if (token && token.length){
            window.location = "/post";
        }
    }

    $("form #register").on("click", function (event) {
        var email = $("form input#email").val();
        var password = $("form input#password").val();
        var user = {
            email: email,
            password: password
        };

        $.ajax({
            contentType: "application/json;charset=utf-8",
            method: "POST",
            url: "/api/user/register",
            data: JSON.stringify(user),
            success: function (data, status, xhr) {
                if (xhr.status === 201) {
                    $.ajax({
                        method: "POST",
                        contentType: "application/json;charset=utf-8",
                        url: "/api/user/login",
                        data: JSON.stringify(user),
                        success: function (data, status, xhr) {
                            if (xhr.status === 200) {
                                var token = data.token;

                                window.localStorage.setItem("token", token);
                                window.location = "/post";
                            }
                        },
                        error: function (xhr, status, error) {
                            var message = xhr.responseJSON.message;

                            alert(message);
                        }
                    });
                }
            },
            error: function (xhr, status, error) {
                var message = xhr.responseJSON.message;

                alert(message);
            }
        });
    });

    redirectOnConnect();
}

$(window).on("created_register", start);
