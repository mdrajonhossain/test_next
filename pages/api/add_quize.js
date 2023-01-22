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

		if (req.method === 'POST') {

			const bal = new add_quize({
				cata_id: req.body.cata_id,
				question: req.body.question,
				question_options: req.body.question_options,
				answer: req.body.answer,
				actives: req.body.actives,
				admin_user_id: req.body.cata_id
			})
			bal.save(function (err, result) {
				if (err) {
					res.status(200).json({ data: err })
				} else {
					res.status(200).json({ data: result })
				}
			})
		}

	} catch (err) {
		console.log(err);
	}



}
