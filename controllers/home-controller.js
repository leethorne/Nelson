// var Principal = require("../models/principal.js")
var Report = require("../models/report.js")
var Teacher = require("../models/teacher.js")
var postmark = require("postmark");

var client = new postmark.Client("58f59a04-aea3-462c-b08e-27680bf7a227");

var StudentReport = [];
var teacherList = [];

var reportId = 0;
var teacherId = 0;


StudentReport.push(new Report(reportId++, "Someone is a victim of constant bullying in your classm Miss Smith", "Mis Smith", "david@kayoventures.com"));

teacherList.push(new Teacher(teacherId++, "Mr. Daugherty", "david@kayoventures.com" ));
teacherList.push(new Teacher(teacherId++, "Miss. Estrada", "david@kayoventures.com" ));
teacherList.push(new Teacher(teacherId++, "Miss Forehan-Kelly", "david@kayoventures.com" ));
teacherList.push(new Teacher(teacherId++, "Mr. Grenier", "david@kayoventures.com" ));
teacherList.push(new Teacher(teacherId++, "Mr.Haley", "david@kayoventures.com" ));

function showTeacher(req, res) {
  res.json({teacherList})
}

function index(req, res) {
  res.json({ StudentReport })
}

function emailReport(req, res) {
  var body = req.body.content
  var teacher = req.body.teacherName
  var dt = new Date();
  var utcDate = dt.toUTCString();

  client.sendEmail({
    "From": "david@schoolpatron.com", 
    "To": "david@kayoventures.com", 
    "Subject": "Nelson Bully Submission", 
    "TextBody": teacher + ", The following message was submitted on: " + body + " " + utcDate, 
    

  }, function(error, result) {
      if(error) {
        console.log("Unable to send via postmark: " + error.message);
        return;
      } 
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