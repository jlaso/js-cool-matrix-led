/** The constructor for CoolLedMatrix **/
function CoolLedMatrix(container, id, symbol) {

    this.id = id;
    var width = 121;
    var html = '<div class="led" id="led_' + id + '" style="' +
        'position: absolute;' +
        'top: 0;' +
        'left: ' + id * (width + 10) + 'px;' +
        'width: ' + width + 'px;' +
        'height: ' + width + 'px;' +
        'border-radius: 4px; ' +
        'padding-left: 7px;' +
        'padding-bottom: 7px;' +
        'box-shadow: 0 1px 0 #fff, inset 0 1px #555;' +
        'border: 1px solid #333;' +
        'background: rgb(56, 56, 56);' + /* Old browsers */
        'background: -moz-linear-gradient(top, rgba(56, 56, 56, 1) 0%, rgba(33, 33, 33, 1) 100%);' + /* FF3.6+ */
        'background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(56, 56, 56, 1)), color-stop(100%, rgba(33, 33, 33, 1)));' + /* Chrome,Safari4+ */
        'background: -webkit-linear-gradient(top, rgba(56, 56, 56, 1) 0%, rgba(33, 33, 33, 1) 100%);' + /* Chrome10+,Safari5.1+ */
        'background: -o-linear-gradient(top, rgba(56, 56, 56, 1) 0%, rgba(33, 33, 33, 1) 100%);' + /* Opera 11.10+ */
        'background: -ms-linear-gradient(top, rgba(56, 56, 56, 1) 0%, rgba(33, 33, 33, 1) 100%);' + /* IE10+ */
        'background: linear-gradient(to bottom, rgba(56, 56, 56, 1) 0%, rgba(33, 33, 33, 1) 100%);' + /* W3C */
        'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#383838", endColorstr="#212121", GradientType=0);' + /* IE6-9 */
        ">" +
        '<ul style="list-style: none; margin: 0; padding: 0;">';
    for (var i = 0; i <= 120; i++) {
        html += "<li></li>";
    }
    html += "</ul></div>";
    $(container).append(html);

    this.reset = function () {
        $("#led_" + this.id + " ul li").each(function (index) {
            $(this).removeClass();
        });
    };

    this.draw = function (symbol) {
        this.reset();
        $("#led_" + this.id + " ul li").each(function (index) {
            if (symbol.data[index] == 1) {
                $(this).addClass(symbol.colorClass);
            }
        });
    };

    this.draw(symbol);
}

var symbols = {
    cross: {
        colorClass: "red",
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
            0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0,
            0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0,
            0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
            0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
            0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
            0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0,
            0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0,
            0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ]
    },
    warning: {
        colorClass: "yellow",
        data: [
            0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
            0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0,
            0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
            0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0,
            0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0,
            0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
            0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
            1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ]
    },
    alert: {
        colorClass: "red",
        data: [
            0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
            0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
            0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
            0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
            0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
            0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
            0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
            0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ]
    },
    ok: {
        colorClass: "green",
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
            0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
            0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0,
            1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0,
            1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0,
            0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
            0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
            0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ]
    },
    block: {
        colorClass: "yellow",
        cross: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ]
    }
};

