const AuthController = (SET => {

    const submitLogin = () => {
        $("#form_login").validate({
            rules: {
                username: "required",
                password: "required"
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET._baseURL()}api/login`,
                    type: "POST",
                    dataType: "JSON",
                    data: $(form).serialize(),
                    beforeSend: xhr => {
                        SET._buttonLoader("#btn_signin");
                    },
                    success: function(data, message, res) {
                        var statusCode = res.status;
                        if (statusCode === 200 && data.is_login === 1){
                            window.location.href = `${SET._baseURL()}movies`;
                            toastr['success'](' Successfully!', 'Berhasil Masuk👋 ', {
                                positionClass: 'toast-bottom-right',
                                closeButton: true,
                                tapToDismiss: true,
                            });
                        }
                    },
                    error: err => {
                        let error = err.responseJSON.message;
                        toastr['error'](error, 'Error! 👋 ', {
                            positionClass: 'toast-bottom-right',
                            closeButton: true,
                            tapToDismiss: true,
                        });
                    },
                    complete: () => {
                        SET._closeButtonLoader("#btn_signin");
                    }
                });
            }
        });
    };

    return {
        init: () => {
            submitLogin();
        }
    };
})(SettingController);
