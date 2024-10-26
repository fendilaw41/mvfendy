var APP_URL = $(".app_url").val() + "/"

const SettingController = (() => {

    return {
        _publicURL: () => {
            return APP_URL;
        },

        _baseURL: () => {
            return APP_URL;
        },

        _closeGlobalLoader: () => {
            $(".preloader").fadeOut();
        },

        _contentLoader: (container) => {
            $(container).block({
                message: `
                    <div class="loader-wrapper" style="height: 300px">
                      <div class="loader-container">
                        <div class="ball-pulse loader-primary">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                `,
                overlayCSS: {
                    backgroundColor: "#fff",
                    opacity: 0.8,
                    cursor: "wait",
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: "transparent",
                },
            });
        },

        _buttonLoader: (button) => {
            $(button).attr('disabled', true);
        },

        _closePageLoader: () => {
            $.unblockUI();
        },

        _closeSelectedElement: (el) => {
            $(el).unblock();
        },

        _bottomNotif: () => {
            return {
                progressBar: true,
                closeButton: true,
                positionClass: "toast-bottom-full-width",
                preventDuplicates: true,
                timeOut: "2000",
            };
        },
        _toastSuccess: (res) => {
            toastr['success'](res.message, ' Successfully', {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                closeButton: true,
                tapToDismiss: true,
            });
        },
        _toastAdd: () => {
            toastr['success']("", ' Successfully Submit', {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                closeButton: true,
                tapToDismiss: true,
            });
        },
        _toastUpdate: () => {
            toastr['success']("", ' Successfully Updated', {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                closeButton: true,
                tapToDismiss: true,
            });
        },
        _toastError: () => {
            toastr['error']("", 'Error', {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                closeButton: true,
                tapToDismiss: true,
            });
        },

        _bottomRightNotif: () => {
            return {
                progressBar: true,
                closeButton: true,
                positionClass: "toast-bottom-right",
                preventDuplicates: true,
                timeOut: "2000",
            };
        },

        _bottomLeftNotif: () => {
            return {
                progressBar: true,
                closeButton: true,
                positionClass: "toast-bottom-left",
                preventDuplicates: true,
                timeOut: "2000",
            };
        },

        _closeContentLoader: (container) => {
            $(container).unblock();
        },

        _closeButtonLoader: (button) => {
            $(button).attr('disabled', false);
        },

        _closePageLoader: () => {
            $.unblockUI();
        },

        _positiveNumber: (num) => {
            return Math.abs(num);
        },

        _negativeNumber: (num) => {
            return Math.abs(num) * -1;
        },

        _realCurrency: (num) => {
            return parseFloat(num).toLocaleString(["ban", "id"]);
        },

        _positiveCurrency: (num) => {
            return Math.abs(num).toLocaleString(["ban", "id"]);
        },

        _negativeCurrency: (num) => {
            let new_num = Math.abs(num) * -1;

            new_num.toLocaleString(["ban", "id"]);
        },

        _replaceEnter: (text) => {
            return text.replace(/(\r\n|\n|\r)/gm, "<br>");
        },

        _filterNull: (text) => {
            if (text === null) {
                return "";
            } else {
                return text;
            }
        },

        _replaceNull: (text) => {
            if (text === null) {
                return "-";
            } else {
                return text;
            }
        },

        _replaceNullToZero: (text) => {
            if (text === null) {
                return 0;
            } else {
                return text;
            }
        },

        _openOption: () => {
            $("#btn_option").on("click", function () {
                $("#option_container").toggle();
            });
        },

        _dateFormat: (date) => {
            let d = new Date(date),
                month = "" + (d.getMonth() + 1),
                day = "" + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;

            return [year, month, day].join("-");
        },

        _timeFormat: (time) => {
            let new_time = time.split(":");
            let hours = new_time[0];
            let minuets = new_time[1];

            return [hours, minuets].join(":");
        },

        _dateTimeFormat: (datetime) => {
            let d = new Date(datetime),
                month = "" + (d.getMonth() + 1),
                day = "" + d.getDate(),
                year = d.getFullYear(),
                hours = "" + d.getHours(),
                minutes = "" + d.getMinutes(),
                seconds = "" + d.getSeconds();

            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;
            if (hours.length < 2) hours = "0" + hours;
            if (minutes.length < 2) minutes = "0" + minutes;
            if (seconds.length < 2) seconds = "0" + seconds;

            return `${[year, month, day].join("-")} ${[
                hours,
                minutes,
                seconds,
            ].join(":")}`;
        },

        _safeObject: (obj) => {
            try {
                return obj();
            } catch (e) {
                return "-";
            }
        },

        _cardLoader: (container) => {
            $(container).block({
                message: `
                    <div>
                      <div class="loader-container">
                        <div class="ball-pulse-sync loader-purple">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                `,
                overlayCSS: {
                    backgroundColor: "#fff",
                    opacity: 0.8,
                    cursor: "wait",
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: "transparent",
                    height: "100%",
                    width: "100%",
                },
            });
        },

        _closeCardLoader: (container) => {
            $(container).unblock();
        },
    };
})();