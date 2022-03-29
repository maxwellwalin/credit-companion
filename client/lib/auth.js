import decode from 'jwt-decode';

class AuthService {
    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            return (decoded.exp < Date.now() / 1000) ? true : false;
        } catch (err) {
            return false;
        }
    }

    getToken() {
        return localStorage.getItem('id_token') || null;
    }

    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
        // window.history.back();
    }

    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
}

export default new AuthService();