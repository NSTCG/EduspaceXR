document.addEventListener("DOMContentLoaded", function () {
	const navLinks = document.querySelectorAll(".nav-link");
	navLinks.forEach(function (link) {
		link.addEventListener("click", function (event) {
			event.preventDefault();
			const targetPanelId = this.getAttribute("href").substring(1);
			showPanel(targetPanelId);
		});
	});
});

function showPanel(panelId) {
	const panels = document.querySelectorAll(".panel");
	panels.forEach(function (panel) {
		panel.style.display = "none";
	});
	const panel = document.getElementById(panelId);
	if (panel) {
		panel.style.display = "block";
	}
}
