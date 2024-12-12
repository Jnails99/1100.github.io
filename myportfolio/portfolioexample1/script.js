document.addEventListener("DOMContentLoaded", () =>{
    gsap.registerplugin(ScrollTrigger)

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((teme) =>{
        lenis.raf(time * 750);
    })
    gsap.ticker.lagSmoothing(0);

    function splitTextIntoSpans(selector){
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            const [firstDigit, secondDigit] = elememt.
            innerText;
            elememt.innerHTML = `
        <div class="first">
            <span class="first">${firstDigit}</span><span 
            class="second">${secondDigit}</span>
        </div>
        `;
        });
    }

    function populateGallery() {
        const imageContainers = document.querySelectorAll
        (".images");
        imageContainers.forEach((container) => {
            for (let j = 0; j < imagesPerProject; j++) {
                if (imageIndex > totalImages) imageIndex = 1;
                const imageContainer = document.createElement
                ("div");
                imageContainer.classList.add("img");

                const img = document.createElement("img");
                img.src = `./images/img${imageIndex}.jpg`;
                img.alt = `Project Image ${imageIndex}`;
                imageContainer.appendChild(img);

                container.appendChild(imageContainer);
                imageIndex++;
            }
        });
    }

    splitTextIntoSpans(".mask h1");
    const imagesPerProject = 6;
    const totalImages = 50;
    let imageIndex =1;
    populateGallery();

    ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
            gsap.set(".progress-bar",{
                scaleY: self.progress,
            })
        }
    })

    const previewImg = document.querySelector(".preview-img img");
    const imgElements = document.querySelectorAll(".img Img");
    imgElements.forEach((img) => {
        ScrollTrigger.create({
            trigger: img,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: () => (previewImg.src = img.src),
            onEnterBack: () => (previewImg.src = img.src),

        })
    })
})