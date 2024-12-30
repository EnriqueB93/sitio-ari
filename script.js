const btnNext = document.getElementById("next");
const btnBack = document.getElementById("back");
const banners = document.querySelectorAll(".banners");
let active = 0;
const currentBanner = banners.length;

btnNext.addEventListener("click", () => {
	const activeOld = document.querySelector(".active");
	activeOld.classList.remove("active");

	active = active >= currentBanner - 1 ? 0 : active + 1;
	banners[active].classList.add("active");
});

btnBack.onclick = () => {
	const activeOld = document.querySelector(".active");
	activeOld.classList.remove("active");

	active = active <= 0 ? currentBanner - 1 : active - 1;
	banners[active].classList.add("active");
};
