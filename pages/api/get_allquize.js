const mongoose = require('mongoose');

var add_quize = require('./server_model/add_quize');


export default function handler(req, res) {

	mongoose.connect('mongodb+srv://rajonhossaindhaka:3MfTD6daYp5djh5i@cluster0.nodwt.mongodb.net/shikhonschool')
		.then(data => {
			console.log("connecting successfully");
		})
		.catch(error => {
			console.log("error");
		})


	try {

		add_quize.find({}, function (err, data) {
			if (!err) {
				res.status(200).json({ data: data })
			}
		})


	} catch (err) {
		console.log(err);
	}



}
