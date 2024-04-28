const Database = require('../../database/database');

class UserModel {
    constructor() {
        this.db = new Database();
    }

    async getUserById(userId) {
        return this.db.fetchWhere('users', 'id', userId, ['*']);
    }

    async createUser(userData) {
        return this.db.insert('users', userData);
    }

    async updateUser(userId, userData) {
        return this.db.updateWhere('users', Object.keys(userData), Object.values(userData), 'id', userId);
    }

    async deleteUser(userId) {
        return this.db.deleteWhere('users', 'id', userId);
    }

    // Additional methods for user-related operations
}

module.exports = UserModel;
