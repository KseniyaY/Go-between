$(function(){
    login();
    register();
    setup();

});


var loginEmail = $('#loginEmail');
var loginPassword = $('#loginPassword');

function login(){

    $('#btn').on('click', function(){

        var person = {
            email: loginEmail.val(),
            password: loginPassword.val()
        };

        $.ajax({
            url: "/",
            type: "POST",
            data: person,
            success: function(){
                window.location.href = "/users"
            },
            error: function(){
                $('.error').append("register first!!");
            }
        });
    });

}



function setup(){

    $('#saveData').on('click', function(){

        var email = $('#email');
        var firstName = $('#firstName');
        var secondName = $('#secondName');
        var birthday = $('#birthday');
        var sex = $('input:radio[name=sex]:checked').val();
        var sexualPreferences = $('input:radio[name=sexualPreferences]:checked').val();
        var place = $('#place');
        var education = $('#education');
        var profession = $('#profession');
        var interests = [];
        var personalInfo = $('#personalInfo');
        var password = $('#password');
        var confirmPassword = $('#confirm-password');

        var otherInterest = $('#otherInterests').val();
        $('#other').val(otherInterest);
        $.each($('input[name=interests]:checked'),function(){
            interests.push($(this).val())
        });

        var data = {
            email: email.val(),
            password: password.val(),
            firstName: firstName.val(),
            secondName: secondName.val(),
            birthday: birthday.val(),
            sex: sex,
            sexualPreferences: sexualPreferences,
            location: place.val(),
            education: education.val(),
            profession: profession.val(),
            interests: interests,
            personalInfo: personalInfo.val()
        };

        $.ajax({
            url: "/settings",
            type: "POST",
            data: data,
            success: function(){
                window.location.href = "/user"
            },
            error: function(){
                alert('error saving new user')
            }

        });
    });

}

function register(){

    $('#register').on('click', function(){

        var email = $('#email');
        var firstName = $('#firstName');
        var secondName = $('#secondName');
        var password = $('#password');

        var data = {
            email: email.val(),
            firstName: firstName.val(),
            secondName: secondName.val(),
            password: password.val()
        };

        $.ajax({
            url: "/registration",
            type: "POST",
            data: data,
            success: function(){
                window.location.href = "/settings"
            },
            error: function(){
                alert('error saving new user')
            }

        });
    });
}

