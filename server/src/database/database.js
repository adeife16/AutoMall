const mysql = require('mysql2/promise');

class Database {
    constructor() {
        // change your database credentials here
        this.pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'automall_db',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }

    async executeQuery(query, values = []) {
        const [rows] = await this.pool.execute(query, values);
        return rows;
    }

    async fetch(table) {
        const query = `SELECT * FROM ${table}`;
        return this.executeQuery(query);
    }

    async fetchWhere(table, whereField, whereValue, fields) {
        const query = `SELECT ${fields} FROM ${table} WHERE ${whereField} = ?`;
        return this.executeQuery(query, [whereValue]);
    }

    async selectWhere(table, selectFields, whereClauses) {
        const selectFieldsStr = selectFields.join(',');
        const whereConditions = whereClauses.map(clause => `${clause.field} ${clause.operator} ?`).join(' AND ');
        const query = `SELECT ${selectFieldsStr} FROM ${table} WHERE ${whereConditions}`;
        const values = whereClauses.map(clause => clause.value);
        return this.executeQuery(query, values);
    }

    async insert(table, data) {
        const fields = Object.keys(data).join(',');
        const values = Object.values(data).map(() => '?').join(',');
        const query = `INSERT INTO ${table} (${fields}) VALUES (${values})`;
        const params = Object.values(data);
        return this.executeQuery(query, params);
    }

    async updateWhere(table, updateFields, updateValues, whereField, whereValue) {
        const setFields = updateFields.map(field => `${field} = ?`).join(',');
        const query = `UPDATE ${table} SET ${setFields} WHERE ${whereField} = ?`;
        const params = [...updateValues, whereValue];
        return this.executeQuery(query, params);
    }

    async deleteWhere(table, whereField, whereValue) {
        const query = `DELETE FROM ${table} WHERE ${whereField} = ?`;
        return this.executeQuery(query, [whereValue]);
    }

    async customQuery(tables, fields, whereClauses) {
        const query = `SELECT ${fields} FROM ${tables} WHERE ${whereClauses}`;
        return this.executeQuery(query);
    }

    async directQuery(query) {
        return this.executeQuery(query);
    }

    async selectWhereJoin(table, selectFields, joins, whereClauses) {
        const selectFieldsStr = selectFields.join(',');
        const joinStatements = joins.map(join => `${join.type} JOIN ${join.table} ON ${join.on}`).join('');
        const whereConditions = whereClauses.map(clause => `${clause.field} ${clause.operator} ?`).join(' AND ');
        const query = `SELECT ${selectFieldsStr} FROM ${table}${joinStatements} WHERE ${whereConditions}`;
        const values = whereClauses.map(clause => clause.value);
        return this.executeQuery(query, values);
    }

    async selectJoin(table, selectFields, joins) {
        const selectFieldsStr = selectFields.join(',');
        const joinStatements = joins.map(join => `${join.type} JOIN ${join.table} ON ${join.on}`).join('');
        const query = `SELECT ${selectFieldsStr} FROM ${table}${joinStatements}`;
        return this.executeQuery(query);
    }

    async updateJoin(table, updateFields, joins, whereCondition) {
        const updateStatements = Object.keys(updateFields).map(field => `${field} = :${field}`).join(', ');
        const joinStatements = joins.map(join => `${join.type} JOIN ${join.table} ON ${join.on}`).join('');
        const query = `UPDATE ${table} SET ${updateStatements}${joinStatements} WHERE ${whereCondition}`;

        const bindValues = {};
        for (const [field, value] of Object.entries(updateFields)) {
            bindValues[field] = value;
        }

        const [rows] = await this.pool.query(query, bindValues);
        return rows.affectedRows;
    }

    async fetchSingleValue(table, column, conditions) {
        const whereConditions = Object.keys(conditions).map(key => `${key} = ?`).join(' AND ');
        const query = `SELECT ${column} FROM ${table} WHERE ${whereConditions} LIMIT 1`;

        const values = Object.values(conditions);
        const [result] = await this.pool.execute(query, values);
        return result.length > 0 ? result[0][column] : null;
    }

    async incrementColumn(table, column, conditions) {
        const setConditions = Object.keys(conditions).map(key => `${key} = ?`).join(' AND ');
        const query = `UPDATE ${table} SET ${column} = ${column} + 1 WHERE ${setConditions}`;

        const values = Object.values(conditions);
        const [result] = await this.pool.execute(query, values);
        return result.affectedRows > 0;
    }

    async searchMultipleOr(table, searchFields, searchTerm, selectFields = ['*']) {
        const selectFieldsStr = selectFields.join(',');
        const whereConditions = searchFields.map(field => `${field} LIKE ?`).join(' OR ');
        const query = `SELECT ${selectFieldsStr} FROM ${table} WHERE ${whereConditions}`;
        const values = searchFields.map(() => `%${searchTerm}%`);
        return this.executeQuery(query, values);
    }

    async countWhere(table, whereField, whereValue) {
        const query = `SELECT COUNT(*) FROM ${table} WHERE ${whereField} = ?`;
        const [count] = await this.pool.execute(query, [whereValue]);
        return count[0]['COUNT(*)'];
    }

    async fetchWithMultipleConditions(table, selectFields = ['*'], whereClauses = [], orderConditions = []) {
        const selectFieldsStr = selectFields.join(',');
        const whereConditions = whereClauses.map(clause => `${clause.field} ${clause.operator} ${clause.value}`).join(' AND ');
        const orderStatements = orderConditions.map(clause => `${clause.field} ${clause.direction}`).join(', ');

        let query = `SELECT ${selectFieldsStr} FROM ${table}`;

        if (whereConditions) {
            query += ` WHERE ${whereConditions}`;
        }

        if (orderStatements) {
            query += ` ORDER BY ${orderStatements}`;
        }

        return this.executeQuery(query);
    }

    async close() {
        await this.pool.end();
    }
}

module.exports = Database;