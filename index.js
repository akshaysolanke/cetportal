// adding title to document
document.title = "State Common Entrance Test Cell | Government of Maharashtra";

const root = document.getElementById("root");

// adding the index.css link to html file
//const indexCssLink = document.createElement("link");
//indexCssLink.rel = "stylesheet";
//indexCssLink.href = "/style/index.css";
//document.head.appendChild(indexCssLink);

// ading the fontawesom file to html
//const fontawesomeLink = document.createElement("link")
//fontawesomeLink.rel="stylesheet"
//fontawesomeLink.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
//document.head.appendChild(fontawesomeLink)

// adding the boostrap bondle file to html
//const boostrapLink = document.createElement("link")
//boostrapLink.rel="stylesheet"
//boostrapLink.href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
//document.body.appendChild(boostrapLink)

//using function adding this link in simple way

function addLink(path) {
  const name = document.createElement("link");
  name.rel = "stylesheet";
  name.href = path;
  document.head.appendChild(name);
  return "successfully linked";
}
addLink("/style/index.css");
addLink(
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
);
addLink(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
);

//header
// create header tag
const header = document.createElement("header");
// append it to body by using id root
root.appendChild(header);

// create one div inside the header
const headerWrapper = document.createElement("div");

// add container to header
const headerContainer = document.createElement("div");
// css part
headerContainer.style.width = "80%";
headerContainer.className = "mx-auto";

headerWrapper.style.borderBottom = "1px solid #000";

headerWrapper.appendChild(headerContainer);
header.appendChild(headerWrapper);

// add navbar to header container
const headerNav = document.createElement("nav");
//css part
headerNav.style.padding = "5px 0px";
headerContainer.appendChild(headerNav);

// create ul for nav
const headerNavUl = document.createElement("ul");
// css part
headerNavUl.className = "d-flex justify-content-between p-0 m-0";
headerNavUl.style.listStyle = "none";
headerNav.appendChild(headerNavUl);

const array = [
  {
    title: "Skip to main content",
    icon: "fa-arrow-down",
    flex: 1,
  },
  {
    icon: "fa fa-volume-up",
    flex: 1,
  },
  {
    title: "A",
    flex: 1,
  },
  {
    icon: "fa-sitemap",
    flex: 1,
  },
  {
    icon: "fa fa-search",
    flex: 1,
  },
  {
    icon: "fa fa-youtube-play",
    flex: 0.3,
  },
  {
    icon: "fa fa-facebook-official",
    flex: 0.3,
  },
  {
    icon: "fa fa-instagram",
    flex: 0.3,
  },
  {
    title: "Twitter",
    icon: "fa fa-twitter",
    flex: 1,
  },
];

for (let i = 0; i < array.length; i++) {
  //create li div
  const headerNavUlLi = document.createElement("li");
  headerNavUlLi.style.felx = array[i].flex;
  //create a tag for li
  const headerAnchorTag = document.createElement("a");
  headerAnchorTag.className = "text-dark text-decoration-none";
  headerAnchorTag.href = "#";
  const itag = document.createElement("i");
  itag.className = `fa ${array[i].icon}`;
  headerAnchorTag.appendChild(itag);
  headerAnchorTag.append(array[i].title || "");
  headerNavUlLi.appendChild(headerAnchorTag);
  itag.style.color = "#163269";
  headerNavUl.appendChild(headerNavUlLi);
}

// header middle part
const headerMiddle = document.createElement("div");
headerMiddle.className = "container";
const headerMiddleWrapper = document.createElement("div");
headerMiddleWrapper.style.width = "60%";
headerMiddleWrapper.className = "d-flex mt-2";
// for checking purpose
headerMiddleWrapper.style.height = "100px";

// create first div for satyamevjayte logo
const satyMevJayteLogo = document.createElement("div");
satyMevJayteLogo.style.width = "100px";
satyMevJayteLogo.style.height = "100px";

// create img tag inside the satyMevJayteLogo
const satyMevJayteLogoImg = document.createElement("img");
satyMevJayteLogoImg.src = "/images/satyamev-logo.png";
satyMevJayteLogoImg.alt = "satyamev-logo";
satyMevJayteLogoImg.width = "100";
satyMevJayteLogoImg.height = "100";
satyMevJayteLogoImg.style.objectFit = "contain";

// create the div for CET logo and heading
const governmentDiv = document.createElement("div");
governmentDiv.style.width = "80%";
governmentDiv.className =
  "border-start border-dark d-flex align-items-center gap-3 ps-2";
//governmentDiv.style.borderLeft="1px solid #7A7A7A"

//crete a div for CET log
const cetLogo = document.createElement("div");
cetLogo.style.width = "100px";
cetLogo.style.height = "100px";

//create img tag for cet logo
const cetLogoImg = document.createElement("img");
cetLogoImg.src = "/images/cet_cell-removebg-preview.png";
cetLogoImg.alt = "/cet_cell-removebg-preview";
cetLogoImg.style.width = "100px";
cetLogoImg.style.height = "100px";
cetLogoImg.style.padding = "5px";
cetLogoImg.style.objectFit = "contain";

// create the div for heading section
const governmentDivContent = document.createElement("div");
governmentDivContent.style.flex = 1;

// create the div for heading
const governmentDivContentH1 = document.createElement("h1");
governmentDivContentH1.innerText = "GOVERNMENT OF MAHARASHTRA";
governmentDivContentH1.style.fontSize = "22px";
governmentDivContentH1.className = "fw-bold";
governmentDivContentH1.style.color = "#163269";

// create the second heading to governmentDivContent
const governmentDivContentH5 = document.createElement("h5");
governmentDivContentH5.innerText = "State Common Entrance Test Cell";
governmentDivContentH5.style.fontSize = "20px";
governmentDivContentH5.style.fontWeight = "500";
governmentDivContentH5.style.color = "#163269";

// create the div for gov logo
const governmentLogo = document.createElement("div");
governmentLogo.width = "100px";
governmentLogo.height = "100px";

// create img tag inside the governmentLogo
const governmentLogoImg = document.createElement("img");
governmentLogoImg.src = "/images/Seal_of_Maharashtra.svg.png";
governmentLogoImg.alt = "";
governmentLogoImg.style.width = "100px";
governmentLogoImg.style.height = "100px";
governmentLogoImg.objectFit = "contain";

// apending elements
governmentLogo.appendChild(governmentLogoImg);
cetLogo.appendChild(cetLogoImg);
governmentDiv.appendChild(cetLogo);
governmentDiv.appendChild(governmentDivContent);
governmentDivContent.appendChild(governmentDivContentH1);
governmentDivContent.appendChild(governmentDivContentH5);
satyMevJayteLogo.appendChild(satyMevJayteLogoImg);
headerMiddleWrapper.appendChild(satyMevJayteLogo);
headerMiddleWrapper.appendChild(governmentDiv);
headerMiddleWrapper.appendChild(governmentLogo);
header.appendChild(headerMiddle);
headerMiddle.appendChild(headerMiddleWrapper);
//console.log(headerMiddle)
//console.log(headerMiddleWrapper)

//  bottom header stared
const headerBottom = document.createElement("div");
headerBottom.width = "100%";
//headerBottom.style.height = "90px";
headerBottom.style.backgroundColor = "#163269";
headerBottom.className = "mt-2 py-2";

// create the headerBottom nav
const headerBottomNav = document.createElement("nav");
headerBottomNav.className =
  "w-75 mx-auto align-items-center justify-content-between d-flex";

// create ul tag inside the headerBottomNav
const headerBottomNavUl = document.createElement("ul");
headerBottomNavUl.style.listStyle = "none";
headerBottomNavUl.className = "d-flex justify-content-between w-75 m-0 ";

// create array for nav

const headerBottomNavUlLiList = [
  "Home",
  "About Us",
  "CETs",
  "CAP",
  "Downloads",
  "Statics",
  "Online System",
  "Event",
  "Contact",
];

// function for array
headerBottomNavUlLiList.forEach(function (ele) {
  const headerBottomNavUlLi = document.createElement("li");
  const headerBottomNavUlLiAtag = document.createElement("a");
  headerBottomNavUlLiAtag.href = "#";
  headerBottomNavUlLiAtag.innerText = ele;
  headerBottomNavUlLiAtag.className =
    "text-decoration-none text-white a_headerLi";
  headerBottomNavUlLi.appendChild(headerBottomNavUlLiAtag);
  headerBottomNavUl.appendChild(headerBottomNavUlLi);
});

// create btn tag inside the nav
const headerBottomNavBtn = document.createElement("button");
headerBottomNavBtn.type = "button";
headerBottomNavBtn.innerText = "Ask Pragati";
headerBottomNavBtn.className = "text-white p-1 px-2 m-2";
headerBottomNavBtn.style.border = "1px solid #808080";
headerBottomNavBtn.style.background = "#01205D";

// create img tag to btn
const headerBottomNavBtnImg = document.createElement("img");
headerBottomNavBtnImg.src = "/images/Ask-Pragati-9.png";
headerBottomNavBtnImg.alt = "";
headerBottomNavBtnImg.width = "35";

// appending elements
headerBottomNavBtn.appendChild(headerBottomNavBtnImg);
headerBottom.appendChild(headerBottomNav);
headerBottomNav.appendChild(headerBottomNavUl);
headerBottomNav.appendChild(headerBottomNavBtn);
header.appendChild(headerBottom);

// Main tag started from here,create main div
const main = document.createElement("main");
//notice section
const mainNotice = document.createElement("section");
mainNotice.className = "container my-2 d-flex gap-2";
mainNoticeAnnouncementBtn = document.createElement("button");
mainNoticeAnnouncementBtn.innerText = "Announcement";
mainNoticeAnnouncementBtn.style.background = "#EEC641";
mainNoticeAnnouncementBtn.className = "btn text-white fw-bold";

// create a marque tag inside the notice section
const mainNoticeMarquee = document.createElement("marquee");
mainNoticeMarquee.innerText =
  "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2023-24 (English/Marathi)";
mainNoticeMarquee.style.background = "#F1F1F1";
mainNoticeMarquee.setAttribute("scrollAmount", 15, 0);
mainNoticeMarquee.behavior = "";
mainNoticeMarquee.direction = "";
mainNoticeMarquee.style.lineHeight = "2.3";
mainNoticeMarquee.className = "p-0 m-0";

// create new element to pop infinite
//blink img
const blinkImg = document.createElement("img");
blinkImg.src = "/images/blinknew.gif";
blinkImg.alt = "";
blinkImg.style.marginLeft = "5px";

// appending main tag elements
mainNoticeMarquee.appendChild(blinkImg);
mainNotice.appendChild(mainNoticeAnnouncementBtn);
mainNotice.appendChild(mainNoticeMarquee);
main.appendChild(mainNotice);
//main.appendChild(banner)
root.appendChild(main);

//banner part
const banner = document.createElement("div");
banner.style.width = "100%";
banner.style.height = "400px";
banner.style.display = "flex";

// create left banner
const bannerLeft = document.createElement("div");
bannerLeft.style.width = "75%";
bannerLeft.style.height = "100%";
bannerLeft.style.background = "green";
bannerLeft.style.background = "url(/images/leftBanner.png)";
bannerLeft.style.backgroundRepeat = "no-repeat";
bannerLeft.style.backgroundSize = "cover";
bannerLeft.className = "position-relative";

// create a number of departments and courses
const bannerLeftCourseNumbers = document.createElement("div");
bannerLeftCourseNumbers.className = "row m-0 position-absolute";
bannerLeftCourseNumbers.style.background = "#EEC641";
bannerLeftCourseNumbers.style.bottom = "-84px";
bannerLeftCourseNumbers.style.width = "100%";

function cardNumber(title, descriptionText, background, columns) {
  const card = document.createElement("div");
  // card.style.width = "33%";
  card.className = `col-12-col-lg-${columns || 4} text-center text-white py-2`;
   card.style.width = "33%";
  
  if (background) {
    card.style.background = background;
  } 

  // create num
  const titleH5 = document.createElement("h5");
  titleH5.className = "count";
  titleH5.setAttribute("data-count", title);
  titleH5.innerText = 0;
  titleH5.style.fontSize = "30px";

  // create description
  const description = document.createElement("p");
  description.className = "m-0";
  description.innerText = descriptionText;

  // appending child
  card.appendChild(titleH5);
  card.appendChild(description);
  //return card
  return card;
}

bannerLeftCourseNumbers.appendChild(cardNumber(6, "Number of Departments"));
bannerLeftCourseNumbers.appendChild(
  cardNumber(19, "Number of CETs", "#163269")
);
bannerLeftCourseNumbers.appendChild(cardNumber(61, "Number of Courses"));

// create right banner
const bannerRight = document.createElement("div");
bannerRight.style.width = "25%";
bannerRight.style.height = "100%";
bannerRight.className = "p-3";
bannerRight.style.position = "relative";
bannerRight.style.background =
  "linear-gradient(180deg, rgba(22,50,105,0.8) 10%, rgba(238,198,65,1) 100%)";

// create the function to right card
function IconTitleCard(icon, titleString, background) {
  let card = document.createElement("div");
  card.className = "d-flex text-white align-items-center gap-3 mt-3";
  let leftBox = document.createElement("div");
  leftBox.style.width = "70px";
  leftBox.style.height = "70px";
  leftBox.className =
    "bg-white rounded-pill d-flex align-items-center justify-content-center";
  // create a div for icon background
  const subDivLeft = document.createElement("div");
  subDivLeft.style.width = "50px";
  subDivLeft.style.height = "50px";
  subDivLeft.style.background = background;
  subDivLeft.className =
    "d-flex align-items-center justify-content-center rounded-pill";
  subDivLeft.innerHTML = `<i class="fa ${icon}" style="font-size:30px;" aria-hidden="true"></i>`;
  leftBox.appendChild(subDivLeft);

  // create right box
  let rightBox = document.createElement("div");
  rightBox.style.flex = 1;
  //create h6 heading
  const title = document.createElement("h6");
  title.style.lineHeight = "22px";
  title.style.fontSize = "18px";
  title.style.fontWeight = "600";
  title.innerText = titleString;
  // create blink tag
  // const blinkImg=document.createElement("img")
  // blinkImg.style.width="20px"
  // blinkImg.style.height="15px"
  // blinkImg.className="d-flex"
  // blinkImg.style.background=blinkImg

  //appending elements

  rightBox.appendChild(title);
  // rightBox.appendChild(blinkImg)
  card.appendChild(leftBox);
  card.appendChild(rightBox);
  return card;
}
bannerRight.appendChild(
  IconTitleCard(
    "fa-user-circle-o",
    "Candidate Registration A.Y 2024-25",
    "#0E8F52"
  )
);
bannerRight.appendChild(
  IconTitleCard("fa-users", "Candidate Help Module", "#FFB859")
);
bannerRight.appendChild(
  IconTitleCard(
    "fa-graduation-cap",
    "Foreign Candidate Registration Portal",
    "#163269"
  )
);
bannerRight.appendChild(
  IconTitleCard(
    "fa-id-card",
    "Admissions Regulating Authority (ARA) Website",
    "#EE6A41"
  )
);

// create div for right banner below section
const bannerRightCourseNumbers = document.createElement("div");
bannerRightCourseNumbers.className = "row position-absolute mt-2 ";
bannerRightCourseNumbers.style.bottom = "-84px";
bannerRightCourseNumbers.style.left = "12px";
bannerRightCourseNumbers.style.width="100%"
bannerRightCourseNumbers.appendChild(
  cardNumber(4000, "Number of institutes", "#163269", 12)
);

// appending section for banner

bannerLeft.appendChild(bannerLeftCourseNumbers);
banner.appendChild(bannerLeft);
banner.appendChild(bannerRight);
bannerRight.appendChild(bannerRightCourseNumbers);
main.appendChild(banner);

//count part 
const count = document.querySelectorAll(".count")
count.forEach(function(counter){
  function updateCounter() {
    const finalValue = Number(counter.getAttribute("data-count"))
    const oldValue = Number(counter.innerText.replace(",", ""))
    const incrementValue = finalValue / 100

    if (oldValue < finalValue) {
        counter.innerText = Math.ceil(incrementValue + oldValue).toLocaleString()
        setTimeout(updateCounter, 1)
    } else {
        counter.innerText = `${finalValue > 1000 ? `${finalValue.toLocaleString()}+` : finalValue}`
    }
}

updateCounter()


})

// the about section is started from here 

// fixed background image 
const aboutSection = document.createElement("div")
aboutSection.style.background="url(/images/aboutBg.jpg)"
aboutSection.style.backgroundPosition="center 0px"
aboutSection.style.backgroundSize="cover"
aboutSection.style.backgroundRepeat="no-repeat"
aboutSection.style.backgroundAttachment="fixed"


// create div for white color
const aboutSectionOverlay = document.createElement("div")
aboutSectionOverlay.style.background="#ffffffd9"
aboutSectionOverlay.style.padding="70px 0px"

//create the container 
const aboutSectionContainer = document.createElement("div")
aboutSectionContainer.className="w-75 mx-auto"
aboutSectionContainer.style.marginTop="84px"

// creating row
const aboutSectionContainerRow=document.createElement("div")
aboutSectionContainerRow.className="row"

// creating column for row
const aboutSectionContainerRowLeft=document.createElement("div")
aboutSectionContainerRowLeft.className="col-12 col-lg-5"

// create a img div
const imgDiv = document.createElement("div")
imgDiv.style.borderLeft="12px solid #163269"
imgDiv.style.borderBottom="15px solid #163269"

//create img tag
const aboutSectionContainerRowLeftImg=document.createElement("img")
aboutSectionContainerRowLeftImg.src="../images/3684-removebg-preview-1.png"
aboutSectionContainerRowLeftImg.alt=""
aboutSectionContainerRowLeftImg.style.width="100%"
aboutSectionContainerRowLeftImg.style.height="250px"


imgDiv.appendChild(aboutSectionContainerRowLeftImg)
aboutSectionContainerRowLeft.appendChild(imgDiv)

// create right column
const aboutSectionContainerRowRight= document.createElement("div")
aboutSectionContainerRowRight.className="col-12 col-lg-7 px-4"
// create h5 tag 
const h5Tag = document.createElement("h2")
h5Tag.innerText="About CET Cell"
h5Tag.className="fs-2"
h5Tag.style.color="#16327D"
aboutSectionContainerRowRight.appendChild(h5Tag)

const paragraph1 = document.createElement("p")
paragraph1.className="my-4"
paragraph1.innerText="The Government of Maharashtra has established State Common Entrance Test Cell as per Section 10 of the Maharashtra Unaided Private Professional Educational Institutions (Regulation of Admissions and Fees) Act ,2015. The CET Cell conducts various entrance exams for Admission to Professional courses in the state of Maharashtra, India."

const paragraph2 = document.createElement("p")
paragraph2.innerText="Its primary purpose is to facilitate the admission process for Professional courses such as Engineering, Management, Pharmacy, Agriculture, law, Medical, AYUSH & Fine Arts ."
// appending the about section element

aboutSectionContainerRowRight.appendChild(paragraph1)
aboutSectionContainerRowRight.appendChild(paragraph2)
aboutSectionContainerRow.appendChild(aboutSectionContainerRowLeft)
aboutSectionContainerRow.appendChild(aboutSectionContainerRowRight)
aboutSectionContainer.appendChild(aboutSectionContainerRow)
aboutSectionOverlay.appendChild(aboutSectionContainer) 
aboutSection.appendChild(aboutSectionOverlay)

main.appendChild(aboutSection)

// table section started
const tableBackground = document.createElement("div")
tableBackground.style.backgroundColor="#EAEAEA"
tableBackground.className="w-100"


// create container for table 
const menuContainer=document.createElement("div")
menuContainer.className="w-75 m-auto py-3"

menuContainer.innerHTML=`<nav class="nav justify-content-between " style="font-size:16px">
<button type="button" class=" px-4 py-2 bg-white border-0  a_about_btn" aria-current="page" >All</button>
<button type="button" class=" px-4 py-2 bg-white border-0 a_about_btn" >Technical Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 a_about_btn" >Higher Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 a_about_btn" >Agriculture Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 a_about_btn" >Fine Art Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 a_about_btn" >Medical Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 a_about_btn" >AYUSH</button>
</nav>`

window.onload=function(){
  const aboutBtn = document.querySelector(".a_about_btn")
  aboutBtn.classList.remove("bg-white")
  aboutBtn.classList.add("bg-warning")
  dynamicData([{
    id:1,
    course:"	All CET’s",
    Subject:"Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 06-02-2024",
    isNew:true,
    date:"06/02/2024",
    download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/CET-Reg-2nd-Extenstion-Notice-1.pdf"

  },
  {
    id:2,
    course:"LLB 3 Yrs",
    Subject:"Important Notice for Preparatory Passed Candidates has been displayed on the website kindly check",
    isNew:true,
    date:"02/02/2024",
    download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Important-Notices_Preperatory-CET-2024-1.pdf"

  },
  {
    id:3,
    course:"LLB 3 Yrs",
    Subject:"Important Notice for Preparatory Passed Candidates.",
    date:"02/02/2024",
    download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Important-Notices_Preperatory-CET-2024.pdf"

  },
  {
    id:4,
    course:"All CET's ",
    Subject:"User Manual Video for CET Registration A.Y. 2024-25",
    date:"31/01/2024",
    download:"https://www.youtube.com/watch?v=UuJSWbIoyGQ"

  },
  {
    id:5,
    course:"MAH- AAC (Fine Art) ",
    Subject:"MAH- AAC (Fine Art) CET 2024 Online Application Notice No.1 (English/Marathi)",
    date:"30/01/2024	",
    download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Online-Application-Notice.pdf"

  },
  {
    id:6,
    course:"All CET's ",
    Subject:"Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 29-01-2024",
    date:"29/01/2024",
    download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice-1.pdf"

  },
  {
    id:7,
    course:"	Higher Courses ",
    Subject:"IMP : CLARITY ABOUT BED (2Yr. RegularCourse) , BED-MED (3Yr.Int.Course) and Ba/BScBEd (4Yr. Int.Course ).",
    date:"12/01/2024	",
    download:"https://www.youtube.com/watch?v=UuJSWbIoyGQ"

  },
  {
    id:8,
    course:"All CET's ",
    Subject:"As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
    date:"11/01/2024",
    download:"NULL"

  },
  {
    id:9,
    course:"All CET's ",
    Subject:"Activity Schedule for all CET Registration for A.Y. 2024-25",
    date:"11/01/2024",
    download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/English-Notice-CET-2024.pdf"

  },
  {
    id:10,
    course:"MHT CET, MBA/MMS, MCA, M.Arch, M.HMCT, B.HMCT, B.Design",
    Subject:"Click Here To View Syllabus of All Courses Under Technical Education A.Y. 2024-25",
    date:"01/01/2024",
    download:"https://cetcell.mahacet.org/wp-content/uploads/2023/08/Technical_Education_CET_syllabus2024-25.pdf"

  },
  {
    id:11,
    course:"All CET's ",
    Subject:"	Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
    date:"13/12/2023	",
    download:"https://cetcell.mahacet.org/wp-content/uploads/2023/08/CETCELL_Tentative_CET_Schedule2024-25.pdf"

  }])
  
}

function dynamicData(tableAllData=[]){
  
  tableAllData.forEach(function(ele){
    const tableBodyTr = document.createElement("tr")
   const tableBodyTrData1= document.createElement("td")
   tableBodyTrData1.innerText=ele.id
   tableBodyTrData1.style.textAlign="center"
   const tableBodyTrData2=document.createElement("td")
   tableBodyTrData2.innerText=ele.course
   const tableBodyTrData3 = document.createElement("td")
   tableBodyTrData3.innerText=ele.Subject
   // create new img tag
   const newImg= document.createElement("img")
   newImg.src="/images/blinknew.gif"
   newImg.alt="new"
   if(ele.isNew){
    tableBodyTrData3.appendChild(newImg)
   }
   const tableBodyTrData4 = document.createElement("td")
   tableBodyTrData4.innerText=ele.date
   const tableBodyTrData5 = document.createElement("td")
   tableBodyTrData5.style.textAlign="center"
   tableBodyTrData5.style.cursor="pointer"
   const openLink = `<a href="${ele.download}" target="_blank"><i><i class="fa fa-file-pdf-o fw-bold" aria-hidden="true"></i></a>`
   tableBodyTrData5.innerHTML=openLink
  
  // appending the table data element 
   tableBodyTr.appendChild(tableBodyTrData1)
    tableBodyTr.appendChild(tableBodyTrData2)
    tableBodyTr.appendChild(tableBodyTrData3)
    tableBodyTr.appendChild(tableBodyTrData4)
    tableBodyTr.appendChild(tableBodyTrData5)
    tableBody.appendChild(tableBodyTr)
  })
}

document.addEventListener("click",function(event){
  const isBtn = event.target.classList.contains("a_about_btn")

  if(isBtn){
    const title=event.target.innerText

    const existingBtn = document.querySelectorAll(".a_about_btn")
    existingBtn.forEach((ele)=> {
      ele.classList.add("bg-white")
      const isExist = ele.classList.contains("bg-warning")
      if(isExist) {
        event.target.classList.add("bg-white")
        ele.classList.remove("bg-warning")
      }
    })
    event.target.classList.remove("bg-white")
    event.target.classList.add("bg-warning")
    tableBody.innerHTML=""

    switch(title) {
      case "Technical Education":
      return dynamicData([
        {
          id: 1,
          course:"All CET's ",
          Subject:"	Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 06-02-2024",
          date:"06/02/2024	",
          download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/CET-Reg-2nd-Extenstion-Notice-1.pdf"
      
        },
        {
          id: 2,
          course:"All CET's ",
          Subject:"	User Manual Video for CET Registration A.Y. 2024-25",
          date:"31/01/2024",
          download:"https://www.youtube.com/watch?v=UuJSWbIoyGQ"
      
        },
        {
          id: 3,
          course:"All CET's ",
          Subject:"	Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 29-01-2024",
          date:"29/01/2024",
          download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice-1.pdf"
      
        },
        {
          id: 4,
          course:"All CET's ",
          Subject:"	As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
          date:"11/01/2024",
          download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/CET-Reg-2nd-Extenstion-Notice-1.pdf"
      
        },
        {
          id: 5,
          course:"All CET's ",
          Subject:"	Activity Schedule for all CET Registration for A.Y. 2024-25",
          date:"11/01/2024",
          download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/English-Notice-CET-2024.pdf"
      
        },
        {
          id: 6,
          course:"MHT CET, MBA/MMS, MCA, M.Arch, M.HMCT, B.HMCT, B.Design",
          Subject:"	Click Here To View Syllabus of All Courses Under Technical Education A.Y. 2024-25",
          date:"01/01/2024",
          download:"https://cetcell.mahacet.org/wp-content/uploads/2023/08/Technical_Education_CET_syllabus2024-25.pdf"
      
        },
        {
          id: 7,
          course:"All CET's ",
          Subject:"Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25	",
          date:"13/12/2023",
          download:"https://cetcell.mahacet.org/wp-content/uploads/2023/08/CETCELL_Tentative_CET_Schedule2024-25.pdf"
      
        },
        
    ])
    case "Higher Education":
      return dynamicData([
          {
              id: 1,
              course: "	All CET’s",
              Subject:"Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 06-02-2024.",
              date:"06/02/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/CET-Reg-2nd-Extenstion-Notice-1.pdf"
          },
          {
              id: 2,
              course: "2 LLB 3 Yrs",
              Subject: "Important Notice for Preparatory Passed Candidates has been displayed on the website kindly check",
              isNew: true,
              date: "02/02/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Important-Notices_Preperatory-CET-2024-1.pdf"
          },
          {
              id: 3,
              course: "2	LLB 3 Yrs",
              Subject: "Important Notice for Preparatory Passed Candidates.",
              isNew: true,
              date: "02/02/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Important-Notices_Preperatory-CET-2024.pdf"
          },
          {
              id: 4,
              course: "	All CET’s",
              Subject: "User Manual Video for CET Registration A.Y. 2024-25",
              date: "29/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 5,
              course: "	All CET’s",
              Subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi)",
              date: "29/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 6,
              course: "Higher Courses",
              Subject: "IMP : CLARITY ABOUT BED (2Yr. RegularCourse) , BED-MED (3Yr.Int.Course) and Ba/BScBEd (4Yr. Int.Course ).",
              date: "12/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Public-Notice.pdf"
          },
          {
              id: 7,
              course: "	All CET’s",
              Subject: "As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
              date: "11/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
             
          },
          {
              id: 8,
              course: "	All CET’s",
              Subject: "Activity Schedule for all CET Registration for A.Y. 2024-25",
              date: "29/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 9,
              course: "	All CET’s",
              Subject: "Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
              isNew: true,
              date: "13/12/2023	",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/08/CETCELL_Tentative_CET_Schedule2024-25.pdf"
          },
      ])
  case "Agriculture Education":
      return dynamicData([
          {
              id: 1,
              course: "Agriculture",
              Subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi)",
              isNew: true,
              date: "06/02/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/CET-Reg-2nd-Extenstion-Notice-1.pdf"
          },
          {
              id: 2,
              course: "Agriculture",
              Subject: "User Manual Video for CET Registration A.Y. 2024-25",
      
              date: "31/01/2024",
              download: "https://www.youtube.com/watch?v=UuJSWbIoyGQ"
          },
          {
              id: 3,
              course: "Agriculture",
              Subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 29-01-2024",
              
              date: "29/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice-1.pdf"
          },
          {
              id: 4,
              course: "Agriculture",
              Subject: "As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
             
              date: "11/01/2024",
              
          },
          {
              id: 5,
              course: "Agriculture",
              Subject: "Activity Schedule for all CET Registration for A.Y. 2024-25",
              
              date: "11/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 6,
              course: "Agriculture",
              Subject: "Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
              isNew: true,
              date: "13/12/2023",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
      ])
  case "Fine Art Education":
      return dynamicData([
          {
              id: 1,
              course: "All CET’s",
              Subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 06-02-2024",
              isNew: true,
              date: "29/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 2,
              course: "All CET’s",
              Subject: "User Manual Video for CET Registration A.Y. 2024-25",
              
              date: "31/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 3,
              course: "MAH- AAC (Fine Art)",
              Subject: "MAH- AAC (Fine Art) CET 2024 Online Application Notice No.1 (English/Marathi)",
              isNew: true,
              date: "30/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 4,
              course: "All CET’s",
              Subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 29-01-2024",
              
              date: "29/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 5,
              course: "All CET’s",
              Subject: "As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
             
              date: "11/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 6,
              course: "All CET’s",
              Subject: "Activity Schedule for all CET Registration for A.Y. 2024-25",
             
              date: "11/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 7,
              course: "All CET’s",
              Subject: "Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
              
              date: "13/12/2023	",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
      ])
  case "Medical Education":
      return dynamicData([
          {
              id: 1,
              course: "B.Sc (Nursing)",
              Subject: "MH-Nursing CET-2024 Online Application Notice No.1 (English/Marathi)",
             
              date: "29/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 2,
              course: "	All CET's",
              Subject: "User Manual Video for CET Registration A.Y. 2024-25",
              isNew: true,
              date: "31/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 3,
              course: "	All CET's",
              Subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 29-01-2024",
              
              date: "29/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 4,
              course: "	All CET's",
              Subject: "As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
              isNew: true,
              date: "11/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 5,
              course: "	All CET's",
              Subject: "Activity Schedule for all CET Registration for A.Y. 2024-25",
              
              date: "11/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 6,
              course: "	All CET's",
              Subject: "Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
             
              date: "13/12/2023",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
      ])
  case "AYUSH":
      return dynamicData([
          {
              id: 1,
              course: "All CET’s",
              Subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 06-02-2024",
         
              date: "06/02/2024	",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 2,
              course: "All CET’s",
              Subject: "User Manual Video for CET Registration A.Y. 2024-25",
             
              date: "31/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 3,
              course: "All CET’s",
              Subject: "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 29-01-2024",
              isNew: true,
              date: "29/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 4,
              course: "All CET’s",
              Subject: "As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
             
              date: "11/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 5,
              course: "All CET’s",
              Subject: "Activity Schedule for all CET Registration for A.Y. 2024-25",
              isNew: true,
              date: "29/01/2024",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
          {
              id: 6,
              course: "All CET’s",
              Subject: "Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
           
              date: "13/12/2023",
              download: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice.pdf"
          },
      ])
  default:
      return dynamicData([
        {
          id:1,
          course:"	All CET’s",
          Subject:"Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 06-02-2024",
          isNew:true,
          date:"06/02/2024",
          download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/CET-Reg-2nd-Extenstion-Notice-1.pdf"
      
        },
        {
          id:2,
          course:"LLB 3 Yrs",
          Subject:"Important Notice for Preparatory Passed Candidates has been displayed on the website kindly check",
          isNew:true,
          date:"02/02/2024",
          download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Important-Notices_Preperatory-CET-2024-1.pdf"
      
        },
        {
          id:3,
          course:"LLB 3 Yrs",
          Subject:"Important Notice for Preparatory Passed Candidates.",
          date:"02/02/2024",
          download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Important-Notices_Preperatory-CET-2024.pdf"
      
        },
        {
          id:4,
          course:"All CET's ",
          Subject:"User Manual Video for CET Registration A.Y. 2024-25",
          date:"31/01/2024",
          download:"https://www.youtube.com/watch?v=UuJSWbIoyGQ"
      
        },
        {
          id:5,
          course:"MAH- AAC (Fine Art) ",
          Subject:"MAH- AAC (Fine Art) CET 2024 Online Application Notice No.1 (English/Marathi)",
          date:"30/01/2024	",
          download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Online-Application-Notice.pdf"
      
        },
        {
          id:6,
          course:"All CET's ",
          Subject:"Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 29-01-2024",
          date:"29/01/2024",
          download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice-1.pdf"
      
        },
        {
          id:7,
          course:"	Higher Courses ",
          Subject:"IMP : CLARITY ABOUT BED (2Yr. RegularCourse) , BED-MED (3Yr.Int.Course) and Ba/BScBEd (4Yr. Int.Course ).",
          date:"12/01/2024	",
          download:"https://www.youtube.com/watch?v=UuJSWbIoyGQ"
      
        },
        {
          id:8,
          course:"All CET's ",
          Subject:"As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
          date:"11/01/2024",
          download:"NULL"
      
        },
        {
          id:9,
          course:"All CET's ",
          Subject:"Activity Schedule for all CET Registration for A.Y. 2024-25",
          date:"11/01/2024",
          download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/English-Notice-CET-2024.pdf"
      
        },
        {
          id:10,
          course:"MHT CET, MBA/MMS, MCA, M.Arch, M.HMCT, B.HMCT, B.Design",
          Subject:"Click Here To View Syllabus of All Courses Under Technical Education A.Y. 2024-25",
          date:"01/01/2024",
          download:"https://cetcell.mahacet.org/wp-content/uploads/2023/08/Technical_Education_CET_syllabus2024-25.pdf"
      
        },
        {
          id:11,
          course:"All CET's ",
          Subject:"	Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
          date:"13/12/2023	",
          download:"https://cetcell.mahacet.org/wp-content/uploads/2023/08/CETCELL_Tentative_CET_Schedule2024-25.pdf"
      
        }
      ])
    }
  }
})


// appending for table section 
tableBackground.appendChild(menuContainer)
aboutSection.appendChild(tableBackground)

// create dynamic table 
const table = document.createElement("table")
table.style.width="100%"
table.className="table my-2 table-bordered border-dark border-end"
const tableHead = document.createElement("thead")
const tableHeadTr = document.createElement("tr")
const tableBody = document.createElement("tbody")
const tableHeadData = [{ title: "SN", width: 20}, { title: "Course Name", width: 200 }, { title: "Subject", width: 500 }, { title: "Published Date", width: 150 }, { title: "Download", width: 50 }]

tableHeadData.forEach(function(th){
  const tableHeadTrTh = document.createElement("th")
  tableHeadTrTh.className="bg-warning"
  if(th.title==="SN"){
    tableHeadTrTh.style.textAlign="center"
  }
  tableHeadTrTh.innerText=th.title
  tableHeadTrTh.style.width=`$(th.width)px`
  tableHeadTrTh.style.fontWeight="400"
  tableHeadTr.appendChild(tableHeadTrTh)
})
// button part
const loadMoreBtn = document.createElement("button")
loadMoreBtn.innerText="Load More"
loadMoreBtn.className="fw-bold px-3 py-1 text-white border-0"
loadMoreBtn.style.backgroundColor="#204590"
// appending table section 
table.appendChild(tableHead)
table.appendChild(tableBody)
tableHead.appendChild(tableHeadTr)
menuContainer.appendChild(table)
menuContainer.appendChild(loadMoreBtn)



// last part 
const bundleScript = document.createElement("script");
bundleScript.src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
bundleScript.integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM";
bundleScript.crossOrigin="anonymous";

document.body.appendChild(bundleScript);
