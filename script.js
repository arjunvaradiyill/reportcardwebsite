const students = {
    "1": { name: "AFEEF RAHMATHULLA M T", pdf: "https://drive.google.com/file/d/1xgNJ62pGhon6j2k1ilha_OVH7yjWwRpP/view?usp=drive_link" },
    "2": { name: "ANSHAM AHMED", pdf: "https://drive.google.com/file/d/1scJr2sCcc6UhUcXdLXmiYXsnmMT0zwX1/view?usp=drive_link" },
    "3": { name: "ASHFAQ BIN ASHRAF", pdf: "https://drive.google.com/file/d/1_e1t2jqrD1dDhenaKrU8rmRZfurJVDol/view?usp=drive_link" },
    "4": { name: "ESSA K S", pdf: "https://drive.google.com/file/d/1C2LgA-jrARmAjeLSAV5QrQdgDbg7bzqB/view?usp=sharing" },
    "5": { name: "MOHAMMED FAHEEM THAYYIL", pdf: "https://drive.google.com/file/d/1X8xRXcRdJ2XSylhnqSPuEIzuFafoieZl/view?usp=drive_link" },
    "6": { name: "MOHAMMED RAMIN", pdf: "https://drive.google.com/file/d/18JVvto36R2peSk1qn2A72mnAklkW6Rzl/view?usp=sharing" },
    "7": { name: "MOHAMMED SHIBIL T", pdf: "https://drive.google.com/file/d/1mCiNqPb63gZ3zcQDQjyZXvdnuScZU_aC/view?usp=drive_link" },
    "8": { name: "MOHAMMED SINAN", pdf: "https://drive.google.com/file/d/1QOOEVBkC1v6ZgzH611lc3_K8wvLHS-U8/view?usp=drive_link" },
    "9": { name: "MUHAMED SAHAL P", pdf: "https://drive.google.com/file/d/16O268Awj96NOOcNLjiBmcQCFP7XUFRc9/view?usp=drive_link" },
    "10":{ name: "MUHAMMED JASIL C", pdf: "https://drive.google.com/file/d/1FgB_ktVe1ChqA-q-TVmYV5ALKq_Pq5hX/view?usp=drive_link" },
    "11":{ name: "MUHAMMED RIHAN K", pdf: "https://drive.google.com/file/d/1x7CgBRL-loaL0DcYQaEhXVY7YDKbarrn/view?usp=drive_link"},
    "12":{name:  "OSAMA KHAN", pdf:"https://drive.google.com/file/d/1P8Dj7aAk2COYN1CiAUmJmkkltw7lqvX0/view?usp=drive_link"},
    "13":{name:  "RAZA MUHSIN", pdf:"https://drive.google.com/file/d/1IMPJ8va3ZKJwAIFESUWWIbiDt39amp7N/view?usp=drive_link"},
    "14":{name:  "RAZAL MEHJOOB K T", pdf:"https://drive.google.com/file/d/1Kz4ScSjbtj7iNt8UqHvuBZvZsU0aJg91/view?usp=drive_link"},
    "15":{name:  "RAZI IBRAHIM C", pdf:"https://drive.google.com/file/d/1dLbAvxY_XodERLbJf-4zxof_3Frp4jGx/view?usp=drive_link"},
    "16":{name:  "SRIGOVIND M", pdf:"https://drive.google.com/file/d/1EMUCjR5WBeN9cuVP3pe26GH5smisw02S/view?usp=drive_link"},
    "17":{name:  "VASEEM HUSSAIN P", pdf:"https://drive.google.com/file/d/1rjqw_gfVOMBVvPWrTDP2E-WUgMydlr3-/view?usp=drive_link"},
    "18":{name:  "AFLIHA SWALIHA", pdf:"https://drive.google.com/file/d/1PETMv2j6Knm8L5CoQyndYrV7ciVTlz6t/view?usp=drive_link"},
    "19":{name:  "AHLAM HUSSEIN PULAYAKALATHIL", pdf:"https://drive.google.com/file/d/13_iEbD2CijKtg2Jrs6wA9AJfpEF8AZ7_/view?usp=drive_link"},
    "20":{name:  "AMNA IQBAL P", pdf:"https://drive.google.com/file/d/1E-IXwPsFApV7X5EDI2a8fa5b9CykUJxS/view?usp=drive_link"},
    "21":{name:  "AMRA AMINA P", pdf:"https://drive.google.com/file/d/1lNKGYGxw9qpWQk6kFmvyDMHxyDH-9YsO/view?usp=drive_link"},
    "22":{name:  "AYISHA YUMNA", pdf:"https://drive.google.com/file/d/1SmooeYPoQiPw2e1PkymwS0n-0614Jrhg/view?usp=drive_link"},
    "23":{name:  "FATHIMA ZIYA K T", pdf:"https://drive.google.com/file/d/1SOHNhw89w80mX_1pzrKyQk0tfFoRx4eR/view?usp=drive_link"},
    "24":{name:  "FATHIMATH HIBA A", pdf:"https://drive.google.com/file/d/1GpmNq6etFrbWu9bZ7y75nCPB91RUcy3r/view?usp=drive_link"},
    "25":{name:  "FATHIMATH MINHA E", pdf:"https://drive.google.com/file/d/1gMsT9IIShRP8LQlXJQxIRUGq5BS8e59Y/view?usp=drive_link"},
    "26":{name:  "FIDA P", pdf:"https://drive.google.com/file/d/1gMsT9IIShRP8LQlXJQxIRUGq5BS8e59Y/view?usp=drive_link"},
    "27":{name:  "HAIFA FATHIMA", pdf:"https://drive.google.com/file/d/1iu5GmZnLsLUAw4qo1iIDsh8Zo0B_perP/view?usp=drive_link"},
    "28":{name:  "HANEENA CHIRAYATH", pdf:"https://drive.google.com/file/d/19krCcyc1K1x_OziOT27HXK1AXgV3WP7f/view?usp=drive_link"},
    "29":{name:  "KHANSA PARVEZ", pdf:"https://drive.google.com/file/d/10C2CA4bFYYMNHRWyT_ob99Qu2BrC1u-j/view?usp=drive_link"},
    "30":{name:  "MILSHA RAHMAN K M", pdf:"https://drive.google.com/file/d/1R7e9fiaR-9wlqL-UmZv1lIIyd5zfj_z7/view?usp=drive_link"},
    "31":{name:  "MIZBA FATHIMA M H", pdf:"https://drive.google.com/file/d/1MfRGIMeB98C55RqH0AhBvlmEaCNvrOmx/view?usp=drive_link"},
    "32":{name:  "NEHA LATHEEF P", pdf:"https://drive.google.com/file/d/1nfQSsvA0dQv_ASTUpDT4jt6M0K0xZxDR/view?usp=drive_link"},
    "33":{name:  "RIDHA", pdf:"https://drive.google.com/file/d/1WCHJP3f33Zgx4TgZReV62GUhaxytxPrI/view?usp=drive_link"},
    "34":{name:  "SAFFANAH", pdf:"https://drive.google.com/file/d/1vIFGOmhiPwgzo03vYKycgw9IY0W7Nmd7/view?usp=drive_link"},
    "35":{name:  "SHADA FATHIMA", pdf:"https://drive.google.com/file/d/1h5BFXcEMZ7QGa9xwoX6XaEV1lUJXx9qX/view?usp=drive_link"},
    "36":{name:  "SHAZA FATHIMA P V", pdf:"https://drive.google.com/file/d/1r3hv5k_t-mVCz08cCHn7auQJEz4xzn51/view?usp=drive_link"},


    // Continue for all students...
};

function fetchProgressCard() {
    const rollNumber = document.getElementById("roll-number").value.trim(); // Get roll number input
    const resultDisplay = document.getElementById("result-display");
    resultDisplay.innerHTML = ""; // Clear previous result

    // Check if the roll number exists in the students object
    if (students[rollNumber]) {
        const student = students[rollNumber];
        resultDisplay.innerHTML = `
            <div class="result-item">
                <p>Student Name: <strong>${student.name}</strong></p>
                <a href="${student.pdf}" target="_blank" class="download-btn">Download Your Report</a>
            </div>
        `;
    } else {
        resultDisplay.innerHTML = "<p class='error-message'>Roll number not found. Please check and try again.</p>";
    }
}
