function start() {

    $("#deco").on("click", function (event) {
        event.preventDefault();

        window.localStorage.clear();
        window.location = "/login";
    });

    $("#create").on("click", function () {
        var token = window.localStorage.getItem("token");
        var title = $("form input#title").val();
        var content = $("form textarea#content").val();
        var post = {
            title: title,
            content: content
        };

        $.ajax({
            method: "POST",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json;charset=UTF-8"
            },
            url: "/api/posts",
            data: JSON.stringify(post),
            success: function (data, status, xhr) {
                if (xhr.status === 201) {
                    $("form input#title").val("");
                    $("form textarea#content").val("");
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