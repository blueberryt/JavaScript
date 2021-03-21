"use strict";
function judgeUserType435(user) {
    switch (user.gender) {
        case "male":
            var u0 = user;
            return "user type is UserA435";
        case "female":
            var u1 = user;
            return "user type is UserB435";
        case "non-binary":
            var u2 = user;
            return "user type is UserC435";
        default:
            var u3 = user;
            return "user type is never";
    }
}
