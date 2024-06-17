const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTextBtn = document.getElementById("custom-text");

const hscFileBtn = document.getElementById("hsc-file");
const hscBtn = document.getElementById("hsc-button");
const hscTextBtn = document.getElementById("hsc-text");

const sscFileBtn = document.getElementById("ssc-file");
const sscBtn = document.getElementById("ssc-button");
const sscTextBtn = document.getElementById("ssc-text");

const semFileBtn = document.getElementById("sem-file");
const semBtn = document.getElementById("sem-button");
const semTextBtn = document.getElementById("sem-text");

const submitBtn = document.getElementById("submit-btn");
const uploadDocuments = document.getElementById("sectionUploadDocuments");

const name1El = document.getElementById("name1");
const nameErrMsgEl = document.getElementById("nameErrMsg");

name1El.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
        nameErrMsgEl.textContent.color = "red";
    } else {
        nameErrMsgEl.textContent = "";
    }
});

const dateOfBirthEl = document.getElementById("dateOfBirth");
const dobErrMsgEl = document.getElementById("dobErrMsg");

dateOfBirthEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        dobErrMsgEl.textContent = "Required*";
    } else {
        dobErrMsgEl.textContent = "";
    }
});


const emailEl = document.getElementById("email");
const emailErrMsgEl = document.getElementById("emailErrMsg");

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        if ((event.target.value).includes("@")) {
            emailErrMsgEl.textContent = "";
        } else {
            emailErrMsgEl.textContent = "Invalid Email";
        }
    }
});

const fatherName1El = document.getElementById("fatherName1");
const fatherErrMsgEl = document.getElementById("fatherErrMsg");

fatherName1El.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        fatherErrMsgEl.textContent = "Required*";
    } else {
        fatherErrMsgEl.textContent = "";
    }
});

const motherName1El = document.getElementById("motherName1");
const motherErrMsgEl = document.getElementById("motherErrMsg");

motherName1El.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        motherErrMsgEl.textContent = "Required*";
    } else {
        motherErrMsgEl.textContent = "";
    }
});

const genderEl = document.getElementById("gender");
const genderErrMsgEl = document.getElementById("genderErrMsg");

genderEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        genderErrMsgEl.textContent = "Required*";
    } else {
        genderErrMsgEl.textContent = "";
    }
});

const nationalityEl = document.getElementById("nationality");
const nationalityErrMsgEl = document.getElementById("nationalityErrMsg");

nationality.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nationalityErrMsg.textContent = "Required*";
    } else {
        nationalityErrMsg.textContent = "";
    }
});

const homeAddressEl = document.getElementById("homeAddress");
const homeAddressErrMsgEl = document.getElementById("homeAddressErrMsg");

homeAddressEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        homeAddressErrMsgEl.textContent = "Required*";
    } else {
        homeAddressErrMsgEl.textContent = "";
    }
});

const telephoneMobileEl = document.getElementById("telephoneMobile");
const telephoneMobileErrMsgEl = document.getElementById("telephoneMobileErrMsg");

telephoneMobileEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        telephoneMobileErrMsgEl.textContent = "Required*";
    } else {
        telephoneMobileErrMsgEl.textContent = "";
    }
});

const hscEl = document.getElementById("hsc");
const hscErrMsgEl = document.getElementById("hscErrMsg");

hscEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        hscErrMsgEl.textContent = "Required*";
    } else {
        hscErrMsgEl.textContent = "";
    }
});

const hscBoardEl = document.getElementById("hscBoard");
const hscStatusErrMsgEl = document.getElementById("hscStatusErrMsg");

hscBoardEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        hscStatusErrMsgEl.textContent = "Required*";
    } else {
        hscStatusErrMsgEl.textContent = "";
    }
});

const hscScoreEl = document.getElementById("hscScore");
const hscScoreErrMsgEl = document.getElementById("hscScoreErrMsg");

hscScoreEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        hscScoreErrMsgEl.textContent = "Required*";
    } else {
        hscScoreErrMsgEl.textContent = "";
    }
});

const sscStatusEl = document.getElementById("sscStatus");
const sscStatusErrMsgEl = document.getElementById("sscStatusErrMsg");

sscStatusEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        sscStatusErrMsgEl.textContent = "Required*";
    } else {
        sscStatusErrMsgEl.textContent = "";
    }
});

const sscBoardEl = document.getElementById("sscBoard");
const sscBoardErrMsgEl = document.getElementById("sscBoardErrMsg");

sscBoardEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        sscBoardErrMsgEl.textContent = "Required*";
    } else {
        sscBoardErrMsgEl.textContent = "";
    }
});

const sscScoreEl = document.getElementById("sscScore");
const sscScoreErrMsgEl = document.getElementById("sscScoreErrMsg");

sscScoreEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        sscScoreErrMsgEl.textContent = "Required*";
    } else {
        sscScoreErrMsgEl.textContent = "";
    }
});

const currentPursuingEl = document.getElementById("currentPursuing");
const currentPursuingErrMsgEl = document.getElementById("currentPursuingErrMsg");

currentPursuingEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        currentPursuingErrMsgEl.textContent = "Required*";
    } else {
        currentPursuingErrMsgEl.textContent = "";
    }
});

const photoEl = document.getElementById("photo");
const photoErrMsgEl = document.getElementById("photoErrMsg");

photoEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        photoErrMsgEl.textContent = "Required*";
    } else {
        photoErrMsgEl.textContent = "";
    }
});

const hscMarkSheetEl = document.getElementById("hscMarkSheet");
const hscMarkSheetErrMsgEl = document.getElementById("hscMarkSheetErrMsg");

hscMarkSheetEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        hscMarkSheetErrMsgEl.textContent = "Required*";
    } else {
        hscMarkSheetErrMsgEl.textContent = "";
    }
});

const sscMarkSheetEl = document.getElementById("sscMarkSheet");
const sscMarkSheetErrMsgEl = document.getElementById("sscMarkSheetErrMsg");

sscMarkSheetEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        sscMarkSheetErrMsgEl.textContent = "Required*";
    } else {
        sscMarkSheetErrMsgEl.textContent = "";
    }
});

customBtn.addEventListener("click", function() {
    realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
    const fileSize = realFileBtn.files[0].size / 4096;
    if (realFileBtn.value) {
        customTextBtn.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        if (fileSize > 4) {
            alert('File size exceeds 4MB');
            while (fileSize > 4) {
                customTextBtn.innerHTML = "No file choosen";
            }
        }
    } else {
        customTextBtn.innerHTML = "No file choosen";
    }
});

hscBtn.addEventListener("click", function() {
    hscFileBtn.click();
});

hscFileBtn.addEventListener("change", function() {
    const fileSize = hscFileBtn.files[0].size / 1024 / 1024 / 1024 / 1024;
    if (hscFileBtn.value) {
        hscTextBtn.innerHTML = hscFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        if (fileSize > 4) {
            alert('File size exceeds 4MB');
            while (fileSize > 4) {
                hscTextBtn.innerHTML = "No file choosen";
            }
        }
    } else {
        hscTextBtn.innerHTML = "No file choosen";
    }
});

sscBtn.addEventListener("click", function() {
    sscFileBtn.click();
});

sscFileBtn.addEventListener("change", function() {
    const fileSize = sscFileBtn.files[0].size / 1024 / 1024 / 1024 / 1024;
    if (sscFileBtn.value) {
        sscTextBtn.innerHTML = sscFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        if (fileSize > 4) {
            alert('File size exceeds 4MB');
            while (fileSize > 4) {
                sscTextBtn.innerHTML = "No file choosen";
            }
        }
    } else {
        sscTextBtn.innerHTML = "No file choosen";
    }
});

semBtn.addEventListener("click", function() {
    semFileBtn.click();
});

semFileBtn.addEventListener("change", function() {
    const fileSize = semFileBtn.files[0].size / 1024 / 1024 / 1024 / 1024;
    if (semFileBtn.value) {
        semTextBtn.innerHTML = semFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        if (fileSize > 4) {
            alert('File size exceeds 4MB');
            while (fileSize > 4) {
                semTextBtn.innerHTML = "No file choosen";
            }
        }
    } else {
        semTextBtn.innerHTML = "No file choosen";
    }
});

/*submitBtn.addEventListener("click", function() {
    alert('You have submitted successfully');
});*/

let formData = {
    realFileBtn: "",
    hscFileBtn: "",
};

const photoFile = document.getElementById("photo");
const personalDetailsFormEl = document.getElementById("personalDetailsForm");

function validateDataForm(formData) {
    let {
        name,
        dateOfBirth,
        email,
        fatherName,
        motherName,
        gender,
        nationality,
        homeAddress,
        telephoneMobile
    } = formData;
    if (name === "") {
        nameErrMsg.textContent = "Required*";
    }
    if (dateOfBirth === "") {
        dobErrMsg.textContent = "Required*";
    }
    if (email === "") {
        emailErrMsg.textContent = "Required*";
    }
    if (fatherName === "") {
        fatherErrMsg.textContent = "Required*";
    }
    if (motherName === "") {
        motherErrMsg.textContent = "Required*";
    }
    if (gender === "") {
        genderErrMsg.textContent = "Required*";
    }
    if (nationality === "") {
        nationalityErrMsg.textContent = "Required*";
    }
    if (homeAddress === "") {
        homeAddressErrMsg.textContent = "Required*";
    }
    if (telephoneMobile === "") {
        telephoneMobileErrMsg.textContent = "Required*";
    }

    personalDetailsFormEl.addEventListener("submit", function(event) {
        event.preventDefault();
        validateDataForm(formData);
    })

}
const uploadDocumentsBtn = document.getElementById("uploadDocuments");

uploadDocumentsBtn.addEventListener("submit", function(event) {
    event.preventDefault();
    validateDataForm(formData);
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "*Required";
    } else {
        if ((event.target.value).includes("@")) {
            emailErrMsgEl.textContent = "";
        } else {
            emailErrMsgEl.textContent = "Invalid email";
        }
    }
});