let educationBtn                    = document.getElementById('education');
let competencesBtn                  = document.getElementById('competences');
let infosBtn                        = document.getElementById('infos');
let carouselContainerEducation      = document.querySelector('.carousel-container-education');
let carouselContainerCompetences    = document.querySelector('.carousel-container-competences');
let carouselContainerInfos          = document.querySelector('.carousel-container-infos');
let titleCarousel                   = document.querySelector('h1');


console.log(carouselContainerInfos);
competencesBtn.style.backgroundColor = 'gray';
infosBtn.style.backgroundColor = 'gray';



carouselContainerCompetences.style.display = 'none';
carouselContainerInfos.style.display       = 'none';


educationBtn.addEventListener('click', function () {
    titleCarousel.textContent = 'Mon Education';
    carouselContainerEducation.style.display   = 'flex';
    carouselContainerCompetences.style.display = 'none';
    carouselContainerInfos.style.display       = 'none';
    educationBtn.style.backgroundColor = 'rgb(30, 84, 245)';
    competencesBtn.style.backgroundColor = 'gray';
    infosBtn.style.backgroundColor = 'gray';
});

competencesBtn.addEventListener('click', function () {
    titleCarousel.textContent = 'Mes Compétences';
    carouselContainerEducation.style.display    = 'none';
    carouselContainerInfos.style.display        = 'none';
    carouselContainerCompetences.style.display  = 'flex';
    competencesBtn.style.backgroundColor = 'rgb(30, 84, 245)';
    educationBtn.style.backgroundColor = 'gray';
    infosBtn.style.backgroundColor = 'gray';


});


infosBtn.addEventListener('click', function () {
    titleCarousel.textContent = 'Infos sur moi';
    carouselContainerEducation.style.display    = 'none';
    carouselContainerInfos.style.display        = 'flex';
    carouselContainerCompetences.style.display  = 'none';
    educationBtn.style.backgroundColor = 'gray';
    competencesBtn.style.backgroundColor = 'gray';
    infosBtn.style.backgroundColor = 'rgb(30, 84, 245)';
});
