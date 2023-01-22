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

			add_quize.findByIdAndUpdate({ _id: req.body._id }, { "actives": req.body.allow }, function (err, result) {

				if (err) {
					res.status(200).json({ data: err })
				}
				else {
					res.status(200).json({ data: result })
				}

			})
		}


	} catch (err) {
		console.log(err);
	}



}
