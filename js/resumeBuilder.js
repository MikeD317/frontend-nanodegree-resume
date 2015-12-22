/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name" : "Mike Davenport",
	"role" : "Front-End Web Developer",
	"contacts" : {
		"mobile" : "203-274-2679",
		"email" : "mtdavenport317@gmail.com",
		"location" : "Stamford, CT",
		"twitter" : "@MikeD317",
		"github" : "MikeD317"
	},
	"biopic" : "images/mtd.jpg",
	"welcome message" : "Welcome to my online resume!",
	"skills" : ["Operations", "Strategic Planning", "Financial Analysis", "Front-End Web Development"]
}

var education = {
	"schools" : [
	{
		"name" : "Harvard Business School",
		"location" : "Allston, MA",
		"major" : ["Finance"],
		"dates" : "2000 - 2002",
		"degree" : "M.B.A",
		"url" : "http://www.hbs.edu"
	},
	{
		"name" : "Northwestern University School of Law",
		"location" : "Chicago, IL",
		"major" : ["Corporate Law"],
		"dates" : "1994 - 1997",
		"degree" : "J.D.",
		"url" : "http://www.law.northwestern.edu"
	},
	{
		"name" : "Duke University",
		"location" : "Durham, NC",
		"major" : ["Economics"],
		"dates" : "1990 - 1994",
		"degree" : "A.B.",
		"url" : "https://duke.edu"
	}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud804-nd"
		},
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud304-nd"
		},
		{
			"title" : "Responsive Web Design Fundamentals",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud893-nd"
		}

	]
}

var work = {
	"jobs": [
	{
		"employer" : "The Brooklawn Group",
		"title" : "Principal Consultant", 
		"location" : "Stamford, CT",
		"dates" : "2014 - Current",
		"description" : "The Brooklawn Group is a hospitality-focused consulting firm. It provides strategic and operational advice to drive value for all of its clients’ stakeholders."
	},

	{
		"employer" : "Wyndham Vacation Rentals, N.A.",
		"title" : "Vice President, Strategy", 
		"location" : "Parsippany, NJ",
		"dates" : "2011 - 2013",
		"description" : "Led creation of newest business unit strategic operating plan, while acquiring many of North America’s largest vacation rental companies.  Served as “chief of staff” reporting to division President, growing business from 0 to over 9,000 units in 3 years, achieving largest vacation rental company status in North America, with over $200M in gross revenue."
	},
	{
		"employer" : "Wyndham Exchange & Rentals",
		"title" : "Vice President, Strategic Planning", 
		"location" : "Parsippany, NJ",
		"dates" : "2009 - 2011",
		"description" : "Managed strategic planning process for $1.6B revenue and $350M EBITDA Global Timeshare Exchange business (RCI and The Registry Collection) and thirty-five European Vacation Rentals brands."
	},
	{
		"employer" : "Starwood Hotels & Resort",
		"title" : "Vice President, Global Operations Planning", 
		"location" : "White Plains, NY",
		"dates" : "2007 - 2009",
		"description" : "Led series of special projects reporting to President of Hotel Group to drive revenue and operating margins for $20B revenue unit.  Provided ad-hoc analytical support on variety of operations related issues."
	},
	{
		"employer" : "Starwood Hotels & Resort",
		"title" : "Vice President, Business Development, Real Estate Grouop", 
		"location" : "White Plains, NY",
		"dates" : "2006 - 2007",
		"description" : "Managed team tasked with improving development processes and assisted with development of new business relationships."
	},
	{
		"employer" : "Starwood Hotels & Resort",
		"title" : "Hotel Manager, Sheraton San Diego", 
		"location" : "San Diego, CA",
		"dates" : "2005 - 2006",
		"description" : "Led 400 associates in Front Office, Housekeeping, Guest Services & Activities and Engineering departments for $120M wholly owned Starwood resort."
	},
	{
		"employer" : "Starwood Hotels & Resort",
		"title" : "Director of Operations, North America", 
		"location" : "White Plains, NY",
		"dates" : "2002 - 2005",
		"description" : "Assisted with daily operations and financial controls as member of Chairman’s MBA Program, while reporting directly to President of North America Division, with $10B in revenue and 20,000 associates."
	},
	{
		"employer" : "Hinshaw & Culbertson",
		"title" : "Attorney, Business Department", 
		"location" : "Minneapolis, MN",
		"dates" : "1997 - 2000",
		"description" : "Participated in diverse corporate law matters as associate in Business Department."
	}
	]
}

var projects = {
	"projects" :[
	{
		"title" : "Portfolio Site",
		"dates" : "2015",
		"description" : "Website to host the portfolio of projects from Front-End Nanodegree program.",
		"images" : ["http://placehold.it/50/50"]
	},
	{
		"title" : "Online Resume",
		"dates" : "2015",
		"description" : "Online resume to showcase work experience, education, bio, and projects",
		"images" : ["http://placehold.it/50/50"]
	}
	]
}

bio.display = function() {
	
	
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").prepend(formattedPicture);

	var formattedMessage = HTMLwelcomeMsg.replace(("%data%"), bio["welcome message"]);
	$("#header").append(formattedMessage);

	var formattedMobile = HTMLmobile.replace(("%data%"), bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace(("%data%"), bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedLocation = HTMLlocation.replace(("%data%"), bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedTwitter = HTMLtwitter.replace(("%data%"), bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);

	var formattedGithub = HTMLgithub.replace(("%data%"), bio.contacts.github);
	$("#footerContacts").append(formattedGithub);

	var formattedMobile = HTMLmobile.replace(("%data%"), bio.contacts.mobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace(("%data%"), bio.contacts.email);
	$("#footerContacts").append(formattedEmail);

	var formattedLocation = HTMLlocation.replace(("%data%"), bio.contacts.location);
	$("#footerContacts").append(formattedLocation);

	var formattedTwitter = HTMLtwitter.replace(("%data%"), bio.contacts.twitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedGithub = HTMLgithub.replace(("%data%"), bio.contacts.github);
	$("#footerContacts").append(formattedGithub);

	var len = bio.skills.length;
	if (len > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < len; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
}

bio.display();

education.display = function() {
	for (var i = 0; i < education.schools.length; i++) {
			
			$("#education").append(HTMLschoolStart);
			
			var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedURL = HTMLonlineURL.replace("%data%", education.schools[i].url);

			$(".education-entry:last").append(formattedName);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajor);
			$(".education-entry:last").append(formattedDegree);
			$(".education-entry:last").append(formattedURL);
		}
	
	$("#education").append(HTMLonlineClasses);

	for (var i = 0; i < education.onlineCourses.length; i++) {
		
			$("#education").append(HTMLschoolStart);		
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

			$(".education-entry:last").append(formattedTitle);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedURL);
			$(".education-entry:last").append(formattedSchool);			
			}
}

education.display();

work.display = function () {
	for (var job in work.jobs) {
		if (work.jobs.hasOwnProperty(job)){
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);

		}
	}
}

work.display();

projects.display = function() {
	for (var project in projects.projects) {
		if (projects.projects.hasOwnProperty(project)) {
			
			$("#projects").append(HTMLprojectStart);
			
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);
			
			if (projects.projects[project].images.length > 0) {
		
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}

		
	}
	}
}

projects.display();

//$("#main").append(internationalizeButton);

// function inName() {
// 	var new_name = bio.name.trim().split(" ");
// 	var first_name = new_name[0][0].toUpperCase() + new_name[0].slice(1).toLowerCase();
// 	var last_name = new_name[1].toUpperCase();
// 	return first_name + " " + last_name;

// }

$("#mapDiv").append(googleMap);