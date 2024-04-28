const Database = require('../../database/database');

class AuthModel {
    constructor() {
        this.db = new Database();
    }

    async findUserByEmail(email) {
        const user = await this.db.fetchWhere('am_user','email', email, '*');
        if(user.length > 0) {
            return user[0];
        }
        return null;
    }

    async createUser(userData) {
        const create = await this.db.insert('am_user', userData);
        if(create) {
            return true;
        }
        return false;
    }

    async activateUser(userId){
        const activate = await this.db.updateWhere('am_user', ['status'], ['Active'], 'user_id', userId);

        if(activate == 1){
            return true;
        }
        return false;
    }

    async comparePasswords(plainPassword, hashedPassword) {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }

    async createToken(userId, token){
        const create = await this.db.insert("am_tokens",
        {
            user_id: userId,
            token: token
        });

        if(create){
            return true;
        }
        return false;
    }
    async updateToken(userId, token){
        const update = await this.db.updateWhere("am_tokens", ['token'], [token], 'user_id', userId );
        if(update > 0){
            return true;
        }
        return false;
    }

    async removeToken(userId){
        const remove = await this.db.deleteWhere('am_tokens', 'user_id', userId);
        if(remove > 0){
            return true;
        }
        return false;
    } 

    async verifyToken(token){
        const check = await this.db.fetchWhere('am_tokens', 'token', token, '*');
        if(check.length == 1){
            return check[0];
        }
        return null;
    }
}

module.exports = AuthModel;
