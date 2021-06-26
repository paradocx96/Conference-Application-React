//Name : Malwatta H.G.
//ID : IT19240848
//Group : REG_WE_03

export default function AuthHeader() {
    const user = JSON.parse(sessionStorage.getItem('user'));

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}
