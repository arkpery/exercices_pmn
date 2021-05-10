function start() {
    var token = window.localStorage.getItem("token");

    $("#deco").on("click", function(event){
        event.preventDefault();
        
        window.localStorage.clear();
        window.location = "/login";
    });

    $.ajax({
        method: "GET",
        dataType: "json",
        headers: {
            "Authorization": token
        },
        url: "/api/posts",
        success: function (data, status, xhr) {
            console.log(xhr);
            if (xhr.status === 200) {
                var tab = data;
                var template = '<div class="accordion-item w-100">\
                                    <h2 class="accordion-header w-100"  id="headingOne" >\
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"\
                                            aria-expanded="true" aria-controls="collapseOne">\
                                            ((title))\
                                        </button>\
                                    </h2>\
                                    <div id="collapseOne" class="accordion-collapse collapse show">\
                                        <div class="accordion-body">\
                                            ((content))\
                                        </div>\
                                    </div>\
                                </div>';

                for (var i = 0; i < tab.length; i++){
                    var item = tab[i];
                    var str = template.replace("((title))", item.title);

                    str = str.replace("((content))", item.content);
                    $("#post_list").append($(str));
                }
            }
        },
        error: function (xhr, status, error) {
            var message = xhr.responseJSON.message;

            alert(message);
        }
    });
}

$(window).on("load", start);