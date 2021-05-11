function start() {
    var components = [{
            url: "/",
            id: "home"
        },{
            url: "/signout",
            id: "signout"
        },
        {
            url: "/login",
            id: "connect",
        },
        {
            url: "/register",
            id: "register"
        },
        {
            url: "/post/create",
            id: "create_post",
            roles: ["ADMIN"]
        },
        {
            url: "/post",
            id: "post_list",
            roles: ["ADMIN", "USER"]
        },
        {
            url: "/admin/post",
            id: "admin_post_list",
            roles: ["ADMIN"]
        }
    ];
    var token = window.localStorage.getItem("token");
    var role = null;

    function InitApp(components, role = null) {
        var location = window.location.pathname || "/";
        var component = null;

        for (var i = 0; i < components.length; i++) {
            var tmp = components[i];
            var id = "#" + tmp.id;

            if (tmp.url === location) {
                if (tmp.roles != null && tmp.roles.length > 0) {
                    if (tmp.roles.indexOf(role) > -1) {
                        component = tmp;
                    }
                    else {
                        $(id).remove();
                    }
                } else {
                    component = tmp;
                }
            } else {
                $(id).remove();
            }
        }

        if (!component) {
            var event = document.createEvent("Event");
            var key = "created_" + "not_found"

            event.initEvent(key, true, true);

            window.dispatchEvent(event);

            console.log("event fired");
            return ({
                id: "not_found"
            });
        }
        else {
            $("#not_found").remove();
        }

        var event = document.createEvent("Event");
        var key = "created_" + component.id

        event.initEvent(key, true, true);

        window.dispatchEvent(event);

        console.log("event fired");
        return (component);
    }

    if (token !== null) {
        $.ajax({
            method: "GET",
            dataType: "json",
            url: "/api/user/right",
            headers: {
                "Authorization": token
            },
            success: function (data, status, xhr) {
                if (xhr.status === 200) {
                    role = data.role;

                    var tmp = InitApp(components, role);

                    $("#" + tmp.id).removeClass("d-none");
                    $(document.body).fadeIn(800);

                    //   $(document.body).removeClass("d-none");
                }
            },
            error: function (xhr, status, error) {
                var message = xhr.responseJSON.message;

                alert(message);
            }
        });
    } else {
        var tmp = InitApp(components);

        $("#" + tmp.id).removeClass("d-none");
        $(document.body).fadeIn(800);


        //   $(document.body).removeClass("d-none");
    }
}

$(window).on("load", start);