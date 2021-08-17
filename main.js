import './style.scss';
let [first , second , third] = ['Quality Assurance','Security','Bad Example'];
let main = `<h1>An outline on quality assurance and security </h1>
<p>The security and QA is an important factor in keeping our websites safe from attacks and to keep our code easier to read and understand.</p>
<p>It can be divided in to three parts</p> 
<ol>
<li>${first}.</li>
<li>${second}.</li>
<li>${third}.</li>
`;

document.querySelector('#app').innerHTML = `${main}`;

let header = `<ul>
<li><a href="./views/quality_assurance.html"> Quality Assurance</a></li>
<li><a href="./views/security.html">Security</a></li>
<li><a href="./views/bad_example.html">Bad Example</a></li>
</ul>
`;
document.querySelector('#header').innerHTML = `${header}`;

