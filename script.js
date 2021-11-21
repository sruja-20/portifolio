window.addEventListener("load",function(){
  console.log("hello xyz");
  var about = document.getElementById("About");
  var edu = document.getElementById("education");
  var main = document.getElementById("main_content");
  var tech = document.getElementById('tech');
  var contact = document.getElementById('ctc');
  about.addEventListener("click",function(){
    var innerhtml = '<div class="intro">\
       <div class="about-content">\
         <h3>Hello I\'m</h3>\
         <h1>Srujan K B</h1>\
         <p>lives in shimoga,karnataka</p>\
         <div class="stud">\
           <p>Student</p>\
         </div>\
         <p>B.tech(computer science)</p>\
         <p>Cricket lover</p>\
       </div>\
    </div>';
    main.innerHTML=innerhtml;
  });
  edu.addEventListener("click",function(){
    var innerhtml = '<div class="intro" id="main_content">\
      <div class="edu">\
      <div class="tenth">\
         <h3>10TH</h3>\
         <p>went to jawahar navodaya vidyala gajnur,shimoga and secured 9.2 c.g.p.a in 10th class</p>\
      </div>\
      <div class="twelth">\
         <h3>12TH</h3>\
         <p>continued my study in jawahar navodaya vidyala gajnur,shimoga in science stream and secured 88% in 12th</p>\
      </div>\
      <div class="btech">\
         <h3>B.tech</h3>\
         <p>i\'m currently pursuing my b.tech computerscience in 3rd year at dayanand sagar collage of enginering and secured 9.15 c.g.p.a in 4th sem</p>\
      </div>\
          </div>\
    </div>';
    main.innerHTML=innerhtml;
  });
  tech.addEventListener("click",function(){
    innerhtml = '<div class="intro" id="main_content">\
      <div class="head">\
        <h2>Technical skills</h2>\
      </div>\
      <div class="skill">\
        <div class="python">\
        <h3>Python</h3>\
        <p>Data-Structure in python</p>\
        <p>Web access through python</p>\
        <p>Data processing</p>\
          </div>\
          <div class="frontend">\
            <h3>Front End</h3>\
            <p>Hypertext markup language</p>\
            <p>Cascading style sheet</p>\
            <p>Java script</p>\
          </div>\
      </div>\
  </div>';
  main.innerHTML=innerhtml;
  });
  contact.addEventListener("click",function(){
    innerhtml='  <div class="intro" id="main_content">\
        <div class="contact">\
          <form class="contact-form" action="index.html" method="post">\
            <input type="text" name="name" placeholder="Name" class="txt">\
            <br>\
            <input type="email" name="email" placeholder="@gmail.com" class="txt">\
            <br>\
            <textarea name="message" rows="8" cols="40" placeholder="Your message" class="txtarea"></textarea>\
            <br>\
            <input type="button"  value="Send" class="btn">\
          </form>\
        </div>\
      </div>';
      main.innerHTML=innerhtml;
  });
});
