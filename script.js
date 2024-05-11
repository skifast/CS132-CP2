/**
 * Valerie 
 * May 10, 2024
 * This is the Javascript code for the About me page. Functions to change text,
 * image, and captions as the user scrolls . There is also code for button clicks
 * and dropdown selections.
 */

"use strict";
(function() {
    const MINVALUE = 0;
    const SPACERVALUE = 50;

    const FIRSTMIN = MINVALUE;
    const SECONDMIN = MINVALUE + SPACERVALUE;
    const THIRDMIN = MINVALUE + SPACERVALUE * 2;
    const FOURTHMIN = MINVALUE + SPACERVALUE * 3;
    const FIFTHMIN = MINVALUE + SPACERVALUE * 4;
    const SIXTHMIN = MINVALUE + SPACERVALUE * 5;
    const SEVENTHMIN = MINVALUE + SPACERVALUE * 6;
    const EIGHTHMIN = MINVALUE + SPACERVALUE * 7;
    const EIGHTHMAX = MINVALUE + SPACERVALUE * 8;

    function changeTextOnScroll(){
        const dynamicText = document.getElementById("dynamic-paragraph");
        const dropDown = document.getElementById("drop-down");
        const sport = dropDown.value;
        const endButton = document.getElementById("end-button");
        const dynamicImg = document.getElementById("dynamic-img");

        const thresholds = [FIRSTMIN, SECONDMIN, THIRDMIN, FOURTHMIN, FIFTHMIN, SIXTHMIN, SEVENTHMIN, EIGHTHMIN, EIGHTHMAX];

        const textContentArray = [
            "Hello! My name is Valerie, but you can call me \n\
            Val. This page is all about my life, where I come from, and my hobbies. \n\
            Scroll down to view the slides. I hope you enjoy!",
            "Hello, my name is Val \n\
            I am from Bozeman, Montana. Bozeman is known for its wildlife \n\
            and scenery. It is nearby Yellowstone and Glacier National \n\
            Parks. It is also close to epic skiing and snowboarding \n\
            at resorts like Big Sky and Bridger Bowl.",
            "Some of the wildlife native to this area include moose, bighorn \n\
            sheep, and elk. There is plenty to do in Montana. We don't have \n\
            impressive malls or Trader Joe's, but there is an endless amount \n\
            to do outside. \n\
            Tourists come from far and wide to hunt, fish, \n\
            hike and camp. \n\
            If you go camping, a common pastime in Montana, \n\
            you should bring (and be prepared to use) bearspray because you \n\
            will be in bear country. Don't leave your food, including \n\
            toothpaste, close to where you sleep at night!",
            " I went to my local high school, but only for two years. \n\
            I decided to go to boarding school in Massachusetts \n\
            . I was hoping to \n\
            take more challenging math classes, to refine my writing, and \n\
            to learn professionalism. Deerfield Academy had \n\
            a strict dress code and kept me on an intense schedule. \n\
            Right around this time, I found that \n\
            programming is the perfect mix of math and art. \n\
            I started taking programming classes at my new school. \n\
            I quickly realized that I wanted to major in computer science \n\
            in college. ",
            "In my senior year of high school, I applied and was \n\
            granted admission to Caltech, \n\
            a school that loves math and science as much as I do. It was \n\
            an easy decision where I would attend university. I am a senior \n\
            now and the classes I am currently taking are \n\
            art history, drawing & painting, \n\
            web development, computational mathematics, machine learning, and hiking \n\
            It's going to be a great term and I am excited \n\
            to be graduating in June!",
            "Use the selector to choose a sport you would like \n\
            to read about",
            "Since I grew up close to two ski areas, I ski raced \n\
            on the weekends. My favorite events were speed events where skiers \n\
            frequently reached speeds of over 60 miles per hour. I spent \n\
            quite a bit of time practicing racing through gates and also \n\
            skiiing black diamonds, through chutes, and off cliffs. Use the drop down \n\
            menu to read about my other sports",
            "I played soccer from a young age as well. My position \n\
            was goalkeeper because I got to direct the whole team and make \n\
            dramatic diving saves. \n\
            The weather in Montana \n\
            is frequently not very pleasant. I played in rain, mud, and even \n\
            snow! I was excited to be a part of the Caltech women's soccer \n\
            team and even broke two of the school records!",
            "In high school, I decided to try crew, mostly because my friends \n\
            were doing it. It turned out to be an intense sport. It required huge amounts of \n\
            both cardio and strength. It was totally an exercise in discipline. Our \n\
            boats were ranked by speed and there were usally 6 boats. I raced in the \n\
            second boat. There were 5 people in the boat, including the coxwain who \n\
            steered and coached, but did not row. In 2018, my boat won the New England \n\
            Championship! We beat over 60 other boats to take home the gold",
            "Thanks for visiting! Click the button for a surprise"

        ];
        console.log(window.scrollY);
        for (let i = 1; i < thresholds.length - 1; i++) {
            if (window.scrollY > thresholds[i] && window.scrollY < thresholds[i + 1]) {
                dynamicText.textContent = textContentArray[i];
                if(i > 5 && i < 7){
                    if(sport == "Ski Racing"){
                        dynamicText.textContent = textContentArray[6];
                    } else if(sport == "Soccer"){
                        dynamicText.textContent = textContentArray[7];
                    } else if(sport == "Crew"){
                        dynamicText.textContent = textContentArray[8];
                    }
                }
                if(i == 7){
                    dynamicText.textContent = textContentArray[9];
                }
                if(window.scrollY > thresholds[5] && window.scrollY < thresholds[5 + 1]){
                    dynamicText.style.display = "none";
                    dropDown.style.display = "block";
                }
                else{
                    dynamicText.style.display = "block";
                    dropDown.style.display = "none";
                }
                if(window.scrollY > thresholds[7] && window.scrollY < thresholds[7 + 1]){
                    
                    endButton.style.display = "block";
                    dynamicImg.style.display = "none";
                }
                else{
                    endButton.style.display = "none";
                }

                break;
            }
        }
    }

    function changeImageOnScroll(){
        const dynamicImg = document.getElementById("dynamic-img");
        const dropDown = document.getElementById("drop-down");
        const sport = dropDown.value;

        const thresholds = [FIRSTMIN, SECONDMIN, THIRDMIN, FOURTHMIN, FIFTHMIN, SIXTHMIN, SEVENTHMIN, EIGHTHMIN, EIGHTHMAX];

        for (let i = 0; i < thresholds.length - 1; i++) {
            if (window.scrollY > thresholds[i] && window.scrollY < thresholds[i + 1]) {
                switch (i) {
                    case 1: 
                        dynamicImg.src = "bigsky.png";
                        dynamicImg.alt = "An image of Lone Mountain, https://static01.nyt.com/images/2008/01/03/travel/escapes/28bigksy650.1.jpg?quality=75&auto=webp&disable=upscale";
                        break;
                    case 2:
                        dynamicImg.src = "grizzlybear.jpeg";
                        dynamicImg.alt = "An image of a grizzlybear, https://outsidebozeman.com/nature/prepare-the-bear";
                        break;
                    case 3:
                        dynamicImg.src = "deerfield.jpeg";
                        dynamicImg.alt = "An image of the main school building at Deerfield Academy, https://www.niche.com/k12/deerfield-academy-deerfield-ma/";
                        break;
                    case 4:
                        dynamicImg.src = "caltech.png";
                        dynamicImg.alt = "An image of the Caltech gene pool, https://transitinglosangeles.com/2021/01/30/caltech/"
                        dynamicImg.style.display = "block";
                        break;
                    case 5:
                        dynamicImg.style.display = "none";
                        break;
                    case 6:
                        dynamicImg.style.display = "block";
                        if (sport === "Ski Racing") {
                            dynamicImg.src = "ski.jpg";
                        } else if (sport === "Soccer") {
                            dynamicImg.src = "soccer.jpg";
                        } else if (sport === "Crew") {
                            dynamicImg.src = "rowing.jpg";
                        }
                        break;
                }
                break;
            }
        }
    }

    function changeCaptionOnScroll(){
        const dynamicCaption = document.getElementById("dynamic-caption");
        const dropDown = document.getElementById("drop-down");
        const sport = dropDown.value;

        const thresholds = [SECONDMIN, THIRDMIN, FOURTHMIN, FIFTHMIN, SIXTHMIN, SEVENTHMIN, EIGHTHMIN, EIGHTHMAX];

        const textContentArray = [
            "Lone Peak at Big Sky, a popular skiing destination.",
            "A ferocious grizzly bear-don't get too close!",
            "The Main School Building at Deerfield Academy",
            "The Gene Pool at Caltech",
            "",
            "Ski racing in Montana",
            "Playing soccer for Caltech",
            "Winning the rowing New England Chaptionships"
        ];
        for (let i = 0; i < thresholds.length - 1; i++) {
            if(i < 5){
                if (window.scrollY > thresholds[i] && window.scrollY < thresholds[i + 1]) {
                    dynamicCaption.textContent = textContentArray[i];
                    if (textContentArray[i] === "") {
                        dynamicCaption.style.display = "none";
                    } else {
                        dynamicCaption.style.display = "block";
                    }
                    break;
                }
            }
            else{
                dynamicCaption.style.display = "block";
                if(sport === "Ski Racing" && window.scrollY > SIXTHMIN && window.scrollY < SEVENTHMIN){
                    dynamicCaption.display = textContentArray[5];
                } else if(sport == "Soccer" && window.scrollY > SIXTHMIN && window.scrollY < SEVENTHMIN){
                    dynamicCaption.display = textContentArray[6];
                } else if (sport == "Crew" && window.scrollY > SIXTHMIN && window.scrollY < SEVENTHMIN){
                    dynamicCaption.display = textContentArray[7];
                }
            }
        }
    }

    function changeSportOnDropdown(){
        const dropDown = document.getElementById("drop-down");
        const sport = dropDown.value;
        const dynamicImg = document.getElementById("dynamic-img");

        if(sport === "Ski Racing" && window.scrollY > SIXTHMIN && window.scrollY < SEVENTHMIN){
            dynamicImg.src = "ski.jpg";
        } else if(sport == "Soccer" && window.scrollY > SIXTHMIN && window.scrollY < SEVENTHMIN){
            dynamicImg.src = "soccer.jpg";
        } else if (sport == "Crew" && window.scrollY > SIXTHMIN && window.scrollY < SEVENTHMIN){
            dynamicImg.src = "rowing.jpg"
        }
    }

    function buttonClicked(){
        let dynamicSection = document.getElementById('dynamic-section');
        let img = document.createElement('img');
        img.src = 'waffle.png';
        img.alt = 'A picture of my furry friend';
        dynamicSection.appendChild(img);
        document.body.style.overflow = 'hidden';
    }

    window.addEventListener("scroll", function() {
        changeTextOnScroll();
        changeImageOnScroll();
        changeCaptionOnScroll();
        changeSportOnDropdown();
    });

    document.getElementById("end-button").addEventListener("click", buttonClicked);
})(); 