/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Charlie Chaplin");
// var awesomeThoughts = "I am daisy and I am AWESOME!";
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace("AWESOME", "Fun");
// console.log(funThoughts);
// $("#main").append(funThoughts);

$("#main").append(internationalizeButton);
var work = {
    "jobs": [
        {
            "employer": "北大医疗信息技术有限公司",
            "title": "出纳",
            "location": "苏州",
            "dates": "2014.8~2015.3",
            "description": "负责方正旗下几家公司的出纳日常工作，包括不限于日常网银及现金收付款、银行开销户、开具银承票据、报送资金日本/周报/月报、每月出具银行余额调节表、账实核对、固定资产盘点、折旧等工作。在此过程与各银行进行对接，有较强的沟通解决问题的能力",
            "url": "http://www.pku-hit.com/"
        },
        {
            "employer": "方正国际软件有限公司",
            "title": "费用会计",
            "location": "苏州",
            "dates": "2015.3~2017.6",
            "description": "由上家公司内部调转至方正国际，职位是费用会计。日常工作包含但不限于日常出纳工作（资金调转、开销户、开具银承票据、报送资金报表、与银行对接等）、费用会计（审核公司员工报销单据发票、对日常费用进行审核）、税务专员（开具发票、每月进行报税、报送相关税务报表）、固定资产会计（折旧、盘点）",
            "url": "http://www.founderinternational.com/"
        }
    ]
}
var projects = {
    "projects": [
        {
            "title": "Sample projects",
            "dates": "2017.6~2018.1",
            "description": "学习前端入门的各个项目练习",
            "images": ["images/scenery-22.png", "images/scenery-1.png", "images/scenery-2.png", "images/scenery-24.png"],
            "url": "https://coding.net/u/daisywu926/project"
        }
    ]
}
var bio = {
    "name": "daisy",
    "role": "Web Develop",
    "contacts": {
        "mobile": "18052403787",
        "email": "1038916478@qq.com",
        "location": "苏州",
        "github": "daisywu926"
    },
    "biopic": "images/daisy.jpg",
    "welcomeMessage": "welcome to my blog!",
    "skills": ["web", "Accounting", "sing"]
}
var education = {
    "schools": [
        {
            "name": "Henan University",
            "location": "开封",
            "degree": "bachelor",
            "dates": "2010.9~2014.6",
            "url": "http://www.henu.edu.cn/",
            "majors": ["Finance", "Monetary Science", "Accounting"
            ]
        }
    ],
    "onlineCourses": [
        {
            "title": "web development",
            "school": "Udacity",
            "dates": "2017.6~2018.1",
            "url": "https://cn.udacity.com/"
        }
    ]
}

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", "Daisy wu");
    var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
    $("#header").prepend(formattedName, formattedRole);
    function inName(name) {
        name = name.split(" ");
        console.log(name);
        name[1] = name[1].toUpperCase();
        name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
        return name[0] + " " + name[1];
    }
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg, formattedBioPic);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            var formattedSkills = HTMLskills.replace("%data%", [skill]);
            $("#skills").append(formattedSkills);
        })
    }
}
bio.display();
work.display = function () {
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedWorkEmployerWorkTitle = formattedWorkEmployer + formattedWorkTitle;
        var formattedWorkLocation = HTMLworkDates.replace("%data%", job.location);
        formattedWorkDates = HTMLworkLocation.replace("%data%", job.dates);
        formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedWorkEmployerWorkTitle, formattedWorkLocation, formattedWorkDates, formattedWorkDescription);
        $(".work-entry:last").find("a").attr("href", job.url).attr("target", "_blank");
    })
}
work.display();
projects.display = function () {
    projects.projects.forEach(function (project) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);
        $(".project-entry:last").find("a").attr("href", project.url).attr("target", "_blank");
        if (project.images.length > 0) {
            project.images.forEach(function (image) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", [image]);
                $(".project-entry:last").append(formattedProjectImage);
            })
        }
    })
}
projects.display();
education.display = function () {
    education.schools.forEach(function (school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedSchoolNameDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);
        $(".education-entry").find("a").attr("href", school.url).attr("target", "_blank");
    })
    education.onlineCourses.forEach(function (onlineCourse) {
        $("#education").append(HTMLonlineClasses);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
        $(".online-entry:last").append(formattedOnlineTitleSchool, formattedOnlineDates, formattedOnlineURL);
        $(".online-entry").find("a").attr("href", onlineCourse.url).attr("target", "_blank");
    })
}
education.display();
$("#mapDiv").append(googleMap);
// $("#main").append(bio.name);
// bio.location = "suzhou";
// $("#main").append(bio.location);
// bio ["school"] = "henan university";
// $("#main").append(bio ["school"]);
