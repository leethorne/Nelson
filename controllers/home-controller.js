// var Principal = require("../models/principal.js")
var Report = require("../models/report.js")
var Teacher = require("../models/teacher.js")
var postmark = require("postmark");
var client = new postmark.Client("58f59a04-aea3-462c-b08e-27680bf7a227");

var StudentReport = [];
var teacherList = [];
// var principalId = 0;
var reportId = 0;
var teacherId = 0;



StudentReport.push(new Report(reportId++, "Someone is a victim of constant bullying in your classm Miss Smith", "Mis Smith", "david@kayoventures.com"), );
StudentReport.push(new Report(reportId++, "Someone is a victim of constant bullying in your classm Miss Smith", "Mr. John", "david@kayoventures.com"));
StudentReport.push(new Report(reportId++, "Someone is a victim of constant bullying in your classm Miss Smith", "Mr. Billy", "david@kayoventures.com"));
StudentReport.push(new Report(reportId++, "Someone is a victim of constant bullying in your classm Miss Smith", "Miss ", "david@kayoventures.com"));
StudentReport.push(new Report(reportId++, "Someone is a victim of constant bullying in your classm Miss Smith", "Mis Smith", "david@kayoventures.com"));

teacherList.push(new Teacher(teacherId++, "Mr Smith", "david@kayoventures.com" ));
teacherList.push(new Teacher(teacherId++, "Mr Smith", "david@kayoventures.com" ));
teacherList.push(new Teacher(teacherId++, "Mr Smith", "david@kayoventures.com" ));
teacherList.push(new Teacher(teacherId++, "Mr Smith", "david@kayoventures.com" ));
teacherList.push(new Teacher(teacherId++, "Mr Smith", "david@kayoventures.com" ));

function showTeacher(req, res) {
  res.json({teacherList})
}

function index(req, res) {
  res.json({ StudentReport })
}

function emailReport(req, res) {
  var body = req.body.content
  client.sendEmail({
    "From": "david@schoolpatron.com", 
    "To": "david@kayoventures.com", 
    "Subject": "Nelson Bully Submission", 
    "TextBody": body
  });
  
  client.sendEmail();
  res.json({message: "sent"})
}



function show(req, res) {

}

function create(req, res) {
  var body = req.body

  StudentReport.push(new Report(reportId++, body.content, body.teacherName, "david@kayoventures.com"));

  res.json({ StudentReport })

}
function update(req, res) {

}

function destroy(res, res) {

}

module.exports = {
  showTeacher: showTeacher,
  index: index,
  emailReport: emailReport,
  show: show,
  create: create,
  update, update,
  destroy: destroy

}