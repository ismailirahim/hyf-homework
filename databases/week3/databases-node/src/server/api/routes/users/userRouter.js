'use strict';

const sql = require('./../../../db');
// router setup
const express = require('express');
const router = express.Router({ mergeParams: true });

function handleError(res, error) {
	res.status(500);
	res.end(
		JSON.stringify({
			message: 'A SQL error occurred.',
			error: error.sqlMessage
		})
	);
}

router.get('/test', (req, res, next) => {
	console.log(req.body);
	// query parameters
	console.log(req.query);
	sql.query(`SELECT * FROM \`homework_week3_DB\`.users;`, function(error, result) {
		res.setHeader('Content-Type', 'application/json');
		if (error) return handleError(res, error);
		res.end(JSON.stringify(result));
	});
});

router.post('/', (req, res, next) => {
	// Create the sql that inserts a new user into the database. The data is gotten from the req.body
	// Find the fields from the database-node-api.sql
	let values = [
		req.body.email,
		req.body.password,
		req.body.create_time,
		req.body.age,
		req.body.name,
		req.body.country
	];
	console.log(values);
	let msql = `INSERT INTO users (email, password, create_time, age, name, country) VALUES (?,?,?,?,?,?);`;
	console.log(msql);
	sql.query(msql, values, (err, result) => {
		if (err) console.log(err);
		console.log('Number of records inserted: ' + result.affectedRows);
	});
});

router.get('/', (req, res, next) => {
	/**
	 * If a specific query parameter is specified, return specific users in a specific way:
	 */
	// Create the sql that returns all users

	for (const key in req.query) {
		// api/users?country=denmark should return users that come from denmark
		if (key == 'country') {
			let msql = `SELECT * FROM users WHERE country = '${req.query[key]}'`;
			sql.query(msql, (err, result) => {
				if (err) throw err;
				console.log(result);
				res.send(result);
			});
		} else if (key == 'age') {
			//api/users?age=31 should return users that are 31
			let msql = `SELECT * FROM users WHERE age = ${parseInt(req.query[key])}`;
			sql.query(msql, (err, result) => {
				console.log('this is my sql-query', msql);
				if (err) throw err;
				res.send(result);
			});
		} else if (key == 'sort' && 'order') {
			// api/users?sort=name&order=asc should return users sorted after the sort query parameter should be ordered after the order query parameter
			let keys = Object.keys(req.query);
			let msql = `SELECT name FROM users
			ORDER BY '${keys[0]}' '${keys[1]}'`;
			sql.query(msql, (err, result) => {
				if (err) throw err;
				res.send(result);
			});
		} else if (key == 'min-age' && 'max-age') {
			// api/users?min-age=29&max-age=31 should return users that are between 29 and 31
			let keysValue = Object.values(req.query);
			let msql = `SELECT * FROM users WHERE age BETWEEN ${keysValue[0]} AND ${keysValue[1]};`;
			sql.query(msql, (err, result) => {
				if (err) throw err;
				res.send(result);
			});
		}
	}
});

router.get('/:email', (req, res, next) => {
	// get the email after api/users/some-email
	// Create the sql that returns a specific user matching the email
	let msql = `SELECT * FROM users WHERE email LIKE '${req.params.email}';`;
	sql.query(msql, (err, result) => {
		if (err) throw err;
		res.send(result);
	});
});

router.put('/:email', (req, res, next) => {
	// Create the sql that updates information about a user matching the email
	let msql = `UPDATE users SET age = ? WHERE email = ?`;
	let data = [ 12, req.params.email ];
	sql.query(msql, data, (err, result, fields) => {
		if (err) throw err;
		res.send(result.affectedRows + ' record(s) updated');
	});
});

router.delete('/:email', (req, res, next) => {
	// Create the sql that removes the user matching the email
	let msql = `DELETE FROM users WHERE email=?;`;
	sql.query(msql, [ req.params.email ], (err, result) => {
		if (err) throw err;
		console.log('Deleted Row(s):', results.affectedRows);
	});
});

module.exports = router;
