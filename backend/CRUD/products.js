const helpers = require('./helpers.js');
const dataBaseHelper = require('../database.js');
// TODO: format returns better

module.exports = {

    /**
	 * GET All Notes.
	 *
	 * This function retrieves all available notes and sends them as a JSON response.
	 *
	 * @param {Object} req - The request object (not used in this function).
	 * @param {Object} res - The response object to send back the list of notes.
	 * @returns {void}
	 */
	getUsersNotes: async function(req, res) {
		try {
			const userID = req.params.userID;
			const response = await dataBaseHelper.getUserNotes(userID);
			if (response.success === false) {
				res.status(415).json({"success":false, "message":response.msg, "notes":[]});
			} else {
				res.status(200).json({"success":true, "message":"", "notes":response.notes});
			}
		} catch (error) {
			console.log(error.message);
			res.status(400).json({"success":false, "message":error.message, "notes":[]});
		}
	}

};
