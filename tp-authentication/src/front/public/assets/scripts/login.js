function start() {
    $("form #connect").on("click", function (event) {
        var email = $("#email").val();
        var password = $("#password").val();
        var user = {
            email: email,
            password: password
        };

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
    });
}

$(window).on("load", start);