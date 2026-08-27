(function () {
	var form = document.getElementById("form-contacto");
	var aviso = document.getElementById("aviso-formulario");

	if (!form || !aviso) {
		return;
	}

	form.addEventListener("submit", function (event) {
		event.preventDefault();

		if (!form.checkValidity()) {
			form.reportValidity();
			return;
		}

		form.hidden = true;
		aviso.hidden = false;
		aviso.focus();
	});
})();
