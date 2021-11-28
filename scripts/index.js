(() => {
    const formHeadingElements = document.querySelectorAll(".form__subheading");

    Array.from(formHeadingElements).forEach((formHeadingElement) => {
        formHeadingElement.addEventListener("click", (event) => {
            const formContentContainer = formHeadingElement.nextElementSibling;

            formContentContainer.classList.toggle("form__content--show");
        })
    })
})();




(() => {

    const closeModalButtons = document.querySelectorAll(".modal__close");

    Array.from(closeModalButtons).forEach((closeModalButton) => {
        closeModalButton.addEventListener("click", () => {
            const currentOpenModal = document.querySelector(".modal--show");
            if (currentOpenModal) {
                currentOpenModal.classList.remove("modal--show");
            }
        })
    });

    const socialModalOpenButton = document.getElementById("js-social-modal-trigger");
    const socialModalContainer = document.getElementById("js-social-modal");

    socialModalOpenButton.addEventListener("click", (event) => {
        socialModalContainer.classList.add("modal--show");
    })

    const experienceModalOpenButton = document.getElementById("js-experience-modal-trigger");
    const experienceModalContainer = document.getElementById("js-experience-modal");

    experienceModalOpenButton.addEventListener("click", (event) => {
        experienceModalContainer.classList.add("modal--show");
    })
    
    const educationModalOpenButton = document.getElementById("js-education-modal-trigger");
    const educationModalContainer = document.getElementById("js-education-modal");

    educationModalOpenButton.addEventListener("click", (event) => {
        educationModalContainer.classList.add("modal--show");
    })
    
    const projectModalOpenButton = document.getElementById("js-project-modal-trigger");
    const projectModalContainer = document.getElementById("js-project-modal");

    projectModalOpenButton.addEventListener("click", (event) => {
        projectModalContainer.classList.add("modal--show");
    })
    
    const awardModalOpenButton = document.getElementById("js-award-modal-trigger");
    const awardModalContainer = document.getElementById("js-award-modal");

    awardModalOpenButton.addEventListener("click", (event) => {
        awardModalContainer.classList.add("modal--show");
    })
    
    const certificateModalOpenButton = document.getElementById("js-certificate-modal-trigger");
    const certificateModalContainer = document.getElementById("js-certificate-modal");

    certificateModalOpenButton.addEventListener("click", (event) => {
        certificateModalContainer.classList.add("modal--show");
    })

})();

const BUILDERS = (() => {

    const buildFormItemElement = (titleValue, subtitleValue, uuid) => {
        const container = document.createElement("div");
        container.classList.add("form__item");

        const infoContainer = document.createElement("div");
        
        const titleElement = document.createElement("p");
        titleElement.classList.add("form__item-title");
        titleElement.textContent = titleValue;

        const subtitleElement = document.createElement("p");
        subtitleElement.classList.add("form__item-subtitle");
        subtitleElement.textContent = subtitleValue;

        const removeElement = document.createElement("p");
        removeElement.classList.add("form__item-remove");
        removeElement.innerHTML = "&times;";
        removeElement.addEventListener("click", (event) => {
            const element = document.getElementById(uuid);
            element.remove();
            container.remove();
        })

        infoContainer.append(titleElement, subtitleElement);
        container.append(infoContainer, removeElement);
        
        return container;
    }

    const buildSocialElement = ({
        ["social-network-type"]: socialNetworkType,
        ["social-network-username"]: socialNetworkUsername,
        ["uuid"]: uuid
    }) => {
        const socialContainer = document.createElement("div");
        socialContainer.classList.add("cv__social");
        socialContainer.setAttribute("id", uuid);
        
        const socialIconElement = document.createElement("img");
        socialIconElement.classList.add("cv__social-icon");
        socialIconElement.src = [
            "twitter", "github", "instagram", "linkedin"
        ].includes(socialNetworkType.trim().toLowerCase()) 
            ? `assets/images/${socialNetworkType.trim().toLowerCase()}.svg`
            : `assets/images/link.svg`;

        const socialContentElement = document.createElement("p");
        socialContentElement.classList.add("cv__social-content");
        socialContentElement.textContent = socialNetworkUsername.trim();

        socialContainer.append(socialIconElement, socialContentElement);
        
        return socialContainer;
    }

    const buildSocialFormItemElement = ({
        ["social-network-type"]: socialNetworkType,
        ["social-network-username"]: socialNetworkUsername,
        ["uuid"]: uuid
    }) => {
        return buildFormItemElement(socialNetworkType, socialNetworkUsername, uuid)
    }

    const buildExperienceElement = ({
        ["experience-company"]: experienceCompany,
        ["experience-role"]: experienceRole,
        ["experience-company-website"]: epxperienceCompanyWebsite,
        ["experience-start-date"]: experienceStartDate,
        ["experience-end-date"]: experienceEndDate,
        ["experience-summary"]: experienceSummary,
        ["uuid"]: uuid
    }) => {
        const experienceContainer = document.createElement("div");
        experienceContainer.classList.add("cv__experience");
        experienceContainer.setAttribute("id", uuid);

        const experienceHeadContainer = document.createElement("div");
        experienceHeadContainer.classList.add("cv__experience-head");

        const experienceBodyContainer = document.createElement("div");
        experienceBodyContainer.classList.add("cv__experience-body");

        const experienceLeftContainer = document.createElement("div");
        experienceLeftContainer.classList.add("cv__experience-left");

        const experienceCompanyElement = document.createElement("p");
        experienceCompanyElement.classList.add("cv__experience-company");
        experienceCompanyElement.textContent = experienceCompany;

        const experienceRoleElement = document.createElement("p");
        experienceRoleElement.classList.add("cv__experience-role");
        experienceRoleElement.textContent = experienceRole;

        const experienceRangeElement = document.createElement("p");
        experienceRangeElement.classList.add("cv__experience-range");
        experienceRangeElement.textContent = new Date(experienceStartDate).toLocaleDateString("vi-VN");
        if (experienceEndDate) {
            experienceRangeElement.textContent += ` - ${new Date(experienceEndDate).toLocaleDateString("vi-VN")}`;
            experienceRangeElement.textContent = `(${experienceRangeElement.textContent})`;
        }

        if (experienceSummary) {
            experienceBodyContainer.innerHTML = marked(experienceSummary);
        }

        experienceLeftContainer.append(experienceCompanyElement, experienceRoleElement);
        experienceHeadContainer.append(experienceLeftContainer, experienceRangeElement);
        experienceContainer.append(experienceHeadContainer, experienceBodyContainer);

        return experienceContainer;
    }

    const buildExperienceFormItemElement = ({
        ["experience-company"]: experienceCompany,
        ["experience-role"]: experienceRole,
        ["experience-company-website"]: epxperienceCompanyWebsite,
        ["experience-start-date"]: experienceStartDate,
        ["experience-end-date"]: experienceEndDate,
        ["experience-summary"]: experienceSummary,
        ["uuid"]: uuid
    }) => {
        return buildFormItemElement(experienceCompany, experienceRole, uuid);
    }

    const buildEducationElement = ({
        ["education-institution"]: educationInstitution,
        ["education-fos"]: educationFos, 
        ["education-degree-type"]: educationDegreeType,
        ["education-gpa"]: educationGpa,
        ["education-start-date"]: educationStartDate,
        ["education-end-date"]: educationEndDate,
        ["uuid"]: uuid
    }) => {
        const educationContainer = document.createElement("div");
        educationContainer.classList.add("cv__education");
        educationContainer.setAttribute("id", uuid)

        const educationLeftContainer = document.createElement("div");
        educationLeftContainer.classList.add("cv__education-left");

        const educationRightContainer = document.createElement("div");
        educationRightContainer.classList.add("cv__education-right");

        const educationInstitutionElement = document.createElement("p");
        educationInstitutionElement.classList.add("cv__education-institution");
        educationInstitutionElement.textContent = educationInstitution;

        const educationRangeElement = document.createElement("p");
        educationRangeElement.classList.add("cv__education-range");
        educationRangeElement.textContent = new Date(educationStartDate).toLocaleDateString("vi-VN");
        if (educationEndDate) {
            educationRangeElement.textContent += ` - ${new Date(educationEndDate).toLocaleDateString("vi-VN")}`;
            educationRangeElement.textContent = `(${educationRangeElement.textContent})`;
        }

        const educationFosElement = document.createElement("p");
        educationFosElement.classList.add("cv__education-fos");
        educationFosElement.textContent = `${educationDegreeType} ${educationFos}`;

        educationLeftContainer.append(educationInstitutionElement, educationFosElement);
        educationRightContainer.append(educationRangeElement);

        if (educationGpa) {
            const educationGpaElement = document.createElement("p");
            educationGpaElement.classList.add("cv__education-gpa");
            educationGpaElement.textContent = educationGpa;

            educationRightContainer.appendChild(educationGpaElement);
        }

        educationContainer.append(educationLeftContainer, educationRightContainer);

        return educationContainer;
    }

    const buildEducationFormItemElement = ({
        ["education-institution"]: educationInstitution,
        ["education-fos"]: educationFos, 
        ["education-degree-type"]: educationDegreeType,
        ["education-gpa"]: educationGpa,
        ["education-start-date"]: educationStartDate,
        ["education-end-date"]: educationEndDate,
        ["uuid"]: uuid
    }) => {
        return buildFormItemElement(educationInstitution, educationFos, uuid);
    }

    const buildProjectElement = ({
        ["project-title"]: projectTitle,
        ["project-website"]: projectWebsite,
        ["project-start-date"]: projectStartDate,
        ["project-end-date"]: projectEndDate,
        ["project-summary"]: projectSummary,
        ["uuid"]: uuid
    }) => {
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("cv__project");
        projectContainer.setAttribute("id", uuid)

        const projectHeadContainer = document.createElement("div");
        projectHeadContainer.classList.add("cv__project-head");

        const projectBodyContainer = document.createElement("div");
        projectBodyContainer.classList.add("cv__project-body");

        const projectLeftContainer = document.createElement("div");
        projectLeftContainer.classList.add("cv__project-left");

        const projectTitleElement = document.createElement("p");
        projectTitleElement.classList.add("cv__project-title");
        projectTitleElement.textContent = projectTitle;

        const projectRangeElement = document.createElement("p");
        projectRangeElement.classList.add("cv__project-range");
        projectRangeElement.textContent = new Date(projectStartDate).toLocaleDateString("vi-VN");
        if (projectEndDate) {
            projectRangeElement.textContent += ` - ${new Date(projectEndDate).toLocaleDateString("vi-VN")}`;
            projectRangeElement.textContent = `(${projectRangeElement.textContent})`;
        }

        projectLeftContainer.appendChild(projectTitleElement);

        if (projectWebsite) {
            const projectWebsiteElement = document.createElement("p");
            projectWebsiteElement.classList.add("cv__project-url");
            projectWebsiteElement.textContent = projectWebsite;
            projectLeftContainer.appendChild(projectWebsiteElement);
        }

        if (projectSummary) {
            projectBodyContainer.innerHTML = marked(projectSummary);
        }

        projectHeadContainer.append(projectLeftContainer, projectRangeElement);
        projectContainer.append(projectHeadContainer, projectBodyContainer);

        return projectContainer;
    }

    const buildProjectFormItemElement = ({
        ["project-title"]: projectTitle,
        ["project-website"]: projectWebsite,
        ["project-start-date"]: projectStartDate,
        ["project-end-date"]: projectEndDate,
        ["project-summary"]: projectSummary,
        ["uuid"]: uuid
    }) => {
        return buildFormItemElement(
            projectTitle, 
            projectSummary.length > 20 ? projectSummary.slice(0, 20) + "..." : projectSummary, 
            uuid
        )
    }

    const buildAwardElement = ({
        ["award-name"]: awardName,
        ["award-authority"]: awardAuthority,
        ["award-date"]: awardDate,
        ["uuid"]: uuid
    }) => {
        const awardContainer = document.createElement("div");
        awardContainer.classList.add("cv__award");
        awardContainer.setAttribute("id", uuid);

        const awardLeftContainer = document.createElement("div");
        awardLeftContainer.classList.add("cv__award-left");

        const awardTitleElement = document.createElement("p");
        awardTitleElement.classList.add("cv__award-title");
        awardTitleElement.textContent = awardName;

        const awardAuthorityElement = document.createElement("p");
        awardAuthorityElement.classList.add("cv__award-authority");
        awardAuthorityElement.textContent = awardAuthority;

        const awardTimeElement = document.createElement("p");
        awardTimeElement.classList.add("cv__award-time");
        awardTimeElement.textContent = new Date(awardDate).toLocaleDateString("vi-VN");

        awardLeftContainer.append(awardTitleElement, awardAuthorityElement);
        awardContainer.append(awardLeftContainer, awardTimeElement);

        return awardContainer;
    }

    const buildAwardFormItemElement = ({
        ["award-name"]: awardName,
        ["award-authority"]: awardAuthority,
        ["award-date"]: awardDate,
        ["uuid"]: uuid
    }) => {
        return buildFormItemElement(awardName, awardAuthority, uuid);
    }

    const buildCertificateElement = ({
        ["certificate-name"]: certificateName,
        ["certificate-authority"]: certificateAuthority,
        ["certificate-date"]: certificateDate,
        ["uuid"]: uuid
    }) => {
        const certificateContainer = document.createElement("div");
        certificateContainer.classList.add("cv__certificate");
        certificateContainer.setAttribute("id", uuid);

        const certificateLeftContainer = document.createElement("div");
        certificateLeftContainer.classList.add("cv__certificate-left");

        const certificateTitleElement = document.createElement("p");
        certificateTitleElement.classList.add("cv__certificate-title");
        certificateTitleElement.textContent = certificateName;

        const certificateAuthorityElement = document.createElement("p");
        certificateAuthorityElement.classList.add("cv__certificate-authority");
        certificateAuthorityElement.textContent = certificateAuthority;

        const certificateTimeElement = document.createElement("p");
        certificateTimeElement.classList.add("cv__certificate-time");
        certificateTimeElement.textContent = new Date(certificateDate).toLocaleDateString("vi-VN");

        certificateLeftContainer.append(certificateTitleElement, certificateAuthorityElement);
        certificateContainer.append(certificateLeftContainer, certificateTimeElement);

        return certificateContainer;
    }

    const buildCertificateFormItemElement = ({
        ["certificate-name"]: certificateName,
        ["certificate-authority"]: certificateAuthority,
        ["certificate-date"]: certificateDate,
        ["uuid"]: uuid
    }) => {
        return buildFormItemElement(certificateName, certificateAuthority, uuid);
    }


    return {
        buildSocialElement,
        buildSocialFormItemElement,
        buildExperienceElement,
        buildExperienceFormItemElement,
        buildEducationElement,
        buildEducationFormItemElement,
        buildProjectElement,
        buildProjectFormItemElement,
        buildAwardElement,
        buildAwardFormItemElement,
        buildCertificateElement,
        buildCertificateFormItemElement,
    }

})();

(() => {

    const socialForm = document.getElementById("js-social-form");
    
    socialForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formProps = Object.fromEntries(formData);
        formProps.uuid = uuidv4();

        const socialContainer = document.getElementById("js-socials");
        const socialElement = BUILDERS.buildSocialElement(formProps);
        socialContainer.appendChild(socialElement);

        const socialFormItemContainer = document.getElementById("js-socials-form-items");
        const socialFormItemElement = BUILDERS.buildSocialFormItemElement(formProps);
        socialFormItemContainer.appendChild(socialFormItemElement);
    })

    const experienceForm = document.getElementById("js-experience-form");
    
    experienceForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formProps = Object.fromEntries(formData);
        formProps.uuid = uuidv4();

        const experienceContainer = document.getElementById("js-experiences");
        const experienceElement = BUILDERS.buildExperienceElement(formProps);
        experienceContainer.appendChild(experienceElement);

        const experienceFormItemContainer = document.getElementById("js-experiences-form-items");
        const experienceFormItemElement = BUILDERS.buildExperienceFormItemElement(formProps);
        experienceFormItemContainer.appendChild(experienceFormItemElement);
    })

    const educationForm = document.getElementById("js-education-form");

    educationForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formProps = Object.fromEntries(formData);
        formProps.uuid = uuidv4();

        const educationContainer = document.getElementById("js-educations");
        const educationElement = BUILDERS.buildEducationElement(formProps);
        educationContainer.appendChild(educationElement);

        const educationFormItemContainer = document.getElementById("js-educations-form-items");
        const educationFormItemElement = BUILDERS.buildEducationFormItemElement(formProps);
        educationFormItemContainer.appendChild(educationFormItemElement);
    })

    const projectForm = document.getElementById("js-project-form");

    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formProps = Object.fromEntries(formData);
        formProps.uuid = uuidv4();

        const projectContainer = document.getElementById("js-projects");
        const projectElement = BUILDERS.buildProjectElement(formProps);
        projectContainer.appendChild(projectElement);

        const projectFormItemContainer = document.getElementById("js-projects-form-items");
        const projectFormItemElement = BUILDERS.buildProjectFormItemElement(formProps);
        projectFormItemContainer.appendChild(projectFormItemElement);
    })

    const awardForm = document.getElementById("js-award-form");

    awardForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formProps = Object.fromEntries(formData);
        formProps.uuid = uuidv4();

        const awardContainer = document.getElementById("js-awards");
        const awardElement = BUILDERS.buildAwardElement(formProps);
        awardContainer.appendChild(awardElement);

        const awardFormItemContainer = document.getElementById("js-awards-form-items");
        const awardFormItemElement = BUILDERS.buildAwardFormItemElement(formProps);
        awardFormItemContainer.appendChild(awardFormItemElement);
    })

    const certificateForm = document.getElementById("js-certificate-form");

    certificateForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formProps = Object.fromEntries(formData);
        formProps.uuid = uuidv4();

        const certificateContainer = document.getElementById("js-certificates");
        const certificateElement = BUILDERS.buildCertificateElement(formProps);
        certificateContainer.appendChild(certificateElement);

        const certificateFormItemContainer = document.getElementById("js-certificates-form-items");
        const certificateFormItemElement = BUILDERS.buildCertificateFormItemElement(formProps);
        certificateFormItemContainer.appendChild(certificateFormItemElement);
    })

})();

(() => {

    const profilePictureInput = document.getElementById("profile-picture");
    const profilePictureURLInput = document.getElementById("profile-picture-external");
    const profilePictureElement = document.getElementById("js-profile-picture");

    profilePictureInput.addEventListener("change", (event) => {
        
        Array.from(event.target.files).forEach((file) => {
            if (!file.type.startsWith("image/")) {
                return;
            }

            const reader = new FileReader();
            reader.onload = (event) => {
                profilePictureElement.src = event.target.result;
            }
            reader.readAsDataURL(file);
        })
    })

    profilePictureURLInput.addEventListener("input", (event) => {
        profilePictureElement.src = event.target.value;
    })

    const lastNameInput = document.getElementById("last-name");
    const lastNameElement = document.getElementById("js-last");

    lastNameInput.addEventListener("input", (event) => {
        lastNameElement.textContent = event.target.value;
    })

    const firstNameInput = document.getElementById("first-name");
    const firstNameElement = document.getElementById("js-first");

    firstNameInput.addEventListener("input", (event) => {
        firstNameElement.textContent = event.target.value;
    })

    const subtitleInput = document.getElementById("subtitle");
    const subtitleElement = document.getElementById("js-subtitle");

    subtitleInput.addEventListener("input", (event) => {
        subtitleElement.textContent = event.target.value;
    })

    const dateOfBirthInput = document.getElementById("dob");
    const dateOfBirthElement = document.getElementById("js-dob");

    dateOfBirthInput.addEventListener("input", (event) => {
        dateOfBirthElement.textContent = new Date(event.target.value).toLocaleDateString("vi-VN");
    })

    const addressInput = document.getElementById("address");
    const addressElement = document.getElementById("js-address");

    addressInput.addEventListener("input", (event) => {
        addressElement.textContent = event.target.value;
    })

    const phoneInput = document.getElementById("phone");
    const phoneElement = document.getElementById("js-phone");

    phoneInput.addEventListener("input", (event) => {
        phoneElement.textContent = event.target.value;
    })

    const emailInput = document.getElementById("email");
    const emailElement = document.getElementById("js-email");

    emailInput.addEventListener("input", (event) => {
        emailElement.textContent = event.target.value;
    })

    // SOCIAL

    // OBJECTIVE

    const objectiveContentInput = document.getElementById("objective-content");
    const objectiveContentElement = document.getElementById("js-objective-content");

    objectiveContentInput.addEventListener("input", (event) => {
        objectiveContentElement.textContent = event.target.value;
    })

    // EXPERIENCE

    const workExperienceHeadingInput = document.getElementById("work-experience-heading");
    const workExperienceHeadingElement = document.getElementById("js-work-experience-heading");

    workExperienceHeadingInput.addEventListener("input", (event) => {
        workExperienceHeadingElement.textContent = event.target.value;
    })

    // EDUCATION

    const educationHeadingInput = document.getElementById("education-heading");
    const educationHeadingElement = document.getElementById("js-education-heading");

    educationHeadingInput.addEventListener("input", (event) => {
        educationHeadingElement.textContent = event.target.value;
    })

    // PROJECT

    const projectHeadingInput = document.getElementById("project-heading");
    const projectHeadingElement = document.getElementById("js-project-heading");

    projectHeadingInput.addEventListener("input", (event) => {
        projectHeadingElement.textContent = event.target.value;
    })

    // AWARD

    const awardHeadingInput = document.getElementById("award-heading");
    const awardHeadingElement = document.getElementById("js-award-heading");

    awardHeadingInput.addEventListener("input", (event) => {
        awardHeadingElement.textContent = event.target.value;
    })

    // CERTIFICATE

    const certificateHeadingInput = document.getElementById("certificate-heading");
    const certificateHeadingElement = document.getElementById("js-certificate-heading");

    certificateHeadingInput.addEventListener("input", (event) => {
        certificateHeadingElement.textContent = event.target.value;
    })

})();

(() => {

    const downloadPDFElement = document.getElementById("js-download-pdf");

    downloadPDFElement.addEventListener("click", (event) => {
        const doc = new jspdf.jsPDF({
            format: "a4",
            orientation: "portrait",
            unit: "mm"
        });

        html2canvas(document.getElementById("cv")).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const imgProps= doc.getImageProperties(imgData);
            const pdfWidth = doc.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            doc.save(`CV-${new Date().toLocaleDateString("vi-VN")}.pdf`);
        })
    })

})();