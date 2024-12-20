const students = {
    "1": { name: "AFEEF RAHMATHULLA M T", pdf: "https://drive.google.com/file/d/1iGwIbhiTq2-SKGbFSPyEErA9VzmiuamU/view?usp=drive_link" },
    "2": { name: "ANSHAM AHMED", pdf: "https://drive.google.com/file/d/1Pfm05ICa4nS-Hl-J5eJIkkNQdnb2jjD0/view?usp=drive_link" },
    "3": { name: "ASHFAQ BIN ASHRAF", pdf: "https://drive.google.com/file/d/193SunAT6fJjccX7rujsMev80ty-TScvR/view?usp=drive_link" },
    "4": { name: "ESSA K S", pdf: "https://drive.google.com/file/d/1bi63120MmUSKTizsr7o1p1su8PocLQLr/view?usp=drive_link" },
    "5": { name: "MOHAMMED FAHEEM THAYYIL", pdf: "https://drive.google.com/file/d/1dQfqzhOpxEfuCaklKuTu8Ef4xAdV0wbw/view?usp=drive_link" },
    "6": { name: "MOHAMMED RAMIN", pdf: "https://drive.google.com/file/d/1g6vT_mC3phBPnW6TnvqCkSL5GBJOCj1P/view?usp=drive_link" },
    "7": { name: "MOHAMMED SHIBIL T", pdf: "https://drive.google.com/file/d/1ihlR5le9lrfVOpzgS04n3g0buTE3GYdk/view?usp=drive_link" },
    "8": { name: "MOHAMMED SINAN", pdf: "https://drive.google.com/file/d/1EBSadZSaQ2k13A5qht-8wHW8D5e0x4P3/view?usp=drive_link" },
    "9": { name: "MUHAMED SAHAL P", pdf: "https://drive.google.com/file/d/1OEzTjJoQJZLiFVIyOkg3RZfMDQJ4y-Xy/view?usp=drive_link" },
    "10":{ name: "MUHAMMED JASIL C", pdf: "https://drive.google.com/file/d/1LtcEkJepsOl4Tfalk-86EKLgAe99UK_0/view?usp=drive_link" },
    "11":{ name: "MUHAMMED RIHAN K", pdf: "https://drive.google.com/file/d/1RQPJU5_hJrIdlmLOJKxq3gKJkAQ19Wpw/view?usp=drive_link"},
    "12":{name:  "OSAMA KHAN", pdf:"https://drive.google.com/file/d/1BRRqpRQBOEpDEuadVSfWyt6h5_Idse-V/view?usp=drive_link"},
    "13":{name:  "RAZA MUHSIN", pdf:"https://drive.google.com/file/d/1WRpHxjWj5-ocn8l0Tgjew5rwP4hSU23x/view?usp=drive_link"},
    "14":{name:  "RAZAL MEHJOOB K T", pdf:"https://drive.google.com/file/d/1s3BPPQ4hFQp179X6Mwnl80H0JdYOMKUa/view?usp=drive_link"},
    "15":{name:  "RAZI IBRAHIM C", pdf:"https://drive.google.com/file/d/161VOqtjZHi0jHjBDag6SMD69vMFWfMfC/view?usp=drive_link"},
    "16":{name:  "SRIGOVIND M", pdf:"https://drive.google.com/file/d/1kf6scNfMNe4kVbFsohdsw6x45s10pyQj/view?usp=drive_link"},
    "17":{name:  "VASEEM HUSSAIN P", pdf:"https://drive.google.com/file/d/1aiFyj-Hk8HF--q03XSK4uYiOhZVjxDNq/view?usp=drive_link"},
    "18":{name:  "AFLIHA SWALIHA", pdf:"https://drive.google.com/file/d/1cvUmIraFItN2jOBrdZwodKRK_Z4P7-eM/view?usp=drive_link"},
    "19":{name:  "AHLAM HUSSEIN PULAYAKALATHIL", pdf:"https://drive.google.com/file/d/1zk8U2-_gmEqfJgP1-0suYabqXkDFja57/view?usp=drive_link"},
    "20":{name:  "AMNA IQBAL P", pdf:"https://drive.google.com/file/d/1wINEUB_zz1zpZr_KuH1CwwFzLSVE6XY8/view?usp=drive_link"},
    "21":{name:  "AMRA AMINA P", pdf:"https://drive.google.com/file/d/14EVLIaVD7v3PKtN61cxRxymo8WtoeJiS/view?usp=drive_link"},
    "22":{name:  "AYISHA YUMNA", pdf:"https://drive.google.com/file/d/1hF_R8QQYGHPNiuqQn7KOD_q4RXUhJXtQ/view?usp=drive_link"},
    "23":{name:  "FATHIMA ZIYA K T", pdf:"https://drive.google.com/file/d/1N5QTuVDF-vSM2Ecyd1lSKBTtw2XpjmbJ/view?usp=drive_link"},
    "24":{name:  "FATHIMATH HIBA A", pdf:"https://drive.google.com/file/d/1PoMv6uYBKjWhBKJ__6fC939q84RK3tzn/view?usp=drive_link"},
    "25":{name:  "FATHIMATH MINHA E", pdf:"https://drive.google.com/file/d/1nONeNGgkqa4KrAZfsKlc4rXX0SNbsXIc/view?usp=drive_link"},
    "26":{name:  "FIDA P", pdf:"https://drive.google.com/file/d/1ouXmtdDbsTl77MXOEcXqBSW8J-BY8kNs/view?usp=drive_link"},
    "27":{name:  "HAIFA FATHIMA", pdf:"https://drive.google.com/file/d/1rudUWle3FdjIk_bdumUA6wnCRXEoNWAO/view?usp=drive_link"},
    "28":{name:  "HANEENA CHIRAYATH", pdf:"https://drive.google.com/file/d/1rFQBnIGpphEZ5rzS1KiZ6_OxG_XDsvpR/view?usp=drive_link"},
    "29":{name:  "KHANSA PARVEZ", pdf:"https://drive.google.com/file/d/1fm3ZY0jXcsKuxzlbs7HlEvzlueRXWg2S/view?usp=drive_link"},
    "30":{name:  "MILSHA RAHMAN K M", pdf:"https://drive.google.com/file/d/1HXKSytEQ1kQDJgSZOPquxQZsVMMtwvJS/view?usp=drive_link"},
    "31":{name:  "MIZBA FATHIMA M H", pdf:"https://drive.google.com/file/d/1jGwmd0inv6HPkz4BQHaRohQVyIsFKJyo/view?usp=drive_link"},
    "32":{name:  "NEHA LATHEEF P", pdf:"https://drive.google.com/file/d/1wYu5yQP1BNy-LTgP4tLVwE9krqVH9X0-/view?usp=drive_link"},
    "33":{name:  "RIDHA", pdf:"https://drive.google.com/file/d/12Jl0jngNe1saVw1p8JzJoWOIyuZkej7s/view?usp=drive_link"},
    "34":{name:  "SAFFANAH", pdf:"https://drive.google.com/file/d/1NyZkmLBwisgr59wSKRxtDA8zRC-u2JHm/view?usp=drive_link"},
    "35":{name:  "SHADA FATHIMA", pdf:"https://drive.google.com/file/d/17F5Yx8u7Xeya0VCmjOIEhj2VK-bO7nnH/view?usp=drive_link"},
    "36":{name:  "SHAZA FATHIMA P V", pdf:"https://drive.google.com/file/d/1mXerGhHAB4-w5dVgS6dNuF60TjXy7Kja/view?usp=drive_link"},


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
