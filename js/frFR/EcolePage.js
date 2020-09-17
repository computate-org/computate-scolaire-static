
// POST //

async function postEcole($formulaireValeurs, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			ajouterLueur($formulaireValeurs.next('button'));
			var url = data['pageUrlPk'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			ajouterErreur($formulaireValeurs.next('button'));
		};
	}

	var valeurPk = $formulaireValeurs.find('.valeurPk').val();
	if(valeurPk != null && valeurPk !== '')
		vals['pk'] = valeurPk;

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	if(valeurCree != null && valeurCree !== '')
		vals['cree'] = valeurCree;

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	if(valeurModifie != null && valeurModifie !== '')
		vals['modifie'] = valeurModifie;

	var valeurObjetId = $formulaireValeurs.find('.valeurObjetId').val();
	if(valeurObjetId != null && valeurObjetId !== '')
		vals['objetId'] = valeurObjetId;

	var valeurArchive = $formulaireValeurs.find('.valeurArchive').prop('checked');
	if(valeurArchive != null && valeurArchive !== '')
		vals['archive'] = valeurArchive;

	var valeurSupprime = $formulaireValeurs.find('.valeurSupprime').prop('checked');
	if(valeurSupprime != null && valeurSupprime !== '')
		vals['supprime'] = valeurSupprime;

	var valeurEcoleNom = $formulaireValeurs.find('.valeurEcoleNom').val();
	if(valeurEcoleNom != null && valeurEcoleNom !== '')
		vals['ecoleNom'] = valeurEcoleNom;

	var valeurEcoleEmplacement = $formulaireValeurs.find('.valeurEcoleEmplacement').val();
	if(valeurEcoleEmplacement != null && valeurEcoleEmplacement !== '')
		vals['ecoleEmplacement'] = valeurEcoleEmplacement;

	var valeurEcoleAdministrateurNom = $formulaireValeurs.find('.valeurEcoleAdministrateurNom').val();
	if(valeurEcoleAdministrateurNom != null && valeurEcoleAdministrateurNom !== '')
		vals['ecoleAdministrateurNom'] = valeurEcoleAdministrateurNom;

	var valeurEcoleMail = $formulaireValeurs.find('.valeurEcoleMail').val();
	if(valeurEcoleMail != null && valeurEcoleMail !== '')
		vals['ecoleMail'] = valeurEcoleMail;

	var valeurEcoleMailDe = $formulaireValeurs.find('.valeurEcoleMailDe').val();
	if(valeurEcoleMailDe != null && valeurEcoleMailDe !== '')
		vals['ecoleMailDe'] = valeurEcoleMailDe;

	var valeurEcoleMailA = $formulaireValeurs.find('.valeurEcoleMailA').val();
	if(valeurEcoleMailA != null && valeurEcoleMailA !== '')
		vals['ecoleMailA'] = valeurEcoleMailA;

	var valeurEcoleNumeroTelephone = $formulaireValeurs.find('.valeurEcoleNumeroTelephone').val();
	if(valeurEcoleNumeroTelephone != null && valeurEcoleNumeroTelephone !== '')
		vals['ecoleNumeroTelephone'] = valeurEcoleNumeroTelephone;

	var valeurEcoleAddresse = $formulaireValeurs.find('.valeurEcoleAddresse').val();
	if(valeurEcoleAddresse != null && valeurEcoleAddresse !== '')
		vals['ecoleAddresse'] = valeurEcoleAddresse;

	var valeurEcoleForm = $formulaireValeurs.find('.valeurEcoleForm').val();
	if(valeurEcoleForm != null && valeurEcoleForm !== '')
		vals['ecoleForm'] = valeurEcoleForm;

	var valeurEcoleNumero = $formulaireValeurs.find('.valeurEcoleNumero').val();
	if(valeurEcoleNumero != null && valeurEcoleNumero !== '')
		vals['ecoleNumero'] = valeurEcoleNumero;

	var valeurAnneeCles = [];
	$formulaireValeurs.find('input.valeurAnneeCles:checked').each(function(index) {
		valeurAnneeCles.push($(this).val());
	});
	if(valeurAnneeCles.length > 0)
		vals['anneeCles'] = valeurAnneeCles;

	var valeurRecuCles = [];
	$formulaireValeurs.find('input.valeurRecuCles:checked').each(function(index) {
		valeurRecuCles.push($(this).val());
	});
	if(valeurRecuCles.length > 0)
		vals['recuCles'] = valeurRecuCles;

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
		vals['inheritPk'] = valeurInheritPk;

	var valeurSessionId = $formulaireValeurs.find('.valeurSessionId').val();
	if(valeurSessionId != null && valeurSessionId !== '')
		vals['sessionId'] = valeurSessionId;

	var valeurUtilisateurId = $formulaireValeurs.find('.valeurUtilisateurId').val();
	if(valeurUtilisateurId != null && valeurUtilisateurId !== '')
		vals['utilisateurId'] = valeurUtilisateurId;

	var valeurUtilisateurCle = $formulaireValeurs.find('.valeurUtilisateurCle').val();
	if(valeurUtilisateurCle != null && valeurUtilisateurCle !== '')
		vals['utilisateurCle'] = valeurUtilisateurCle;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
		vals['objetTitre'] = valeurObjetTitre;

	$.ajax({
		url: '/api/ecole'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postEcoleVals(vals, success, error) {
	$.ajax({
		url: '/api/ecole'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchEcole($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchEcoleFiltres($formulaireFiltres);

	var vals = {};

	var valeurPk = $formulaireValeurs.find('.valeurPk').val();
	var removePk = $formulaireValeurs.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formulaireValeurs.find('.setPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	var addPk = $formulaireValeurs.find('.addPk').val();
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formulaireValeurs.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	var removeCree = $formulaireValeurs.find('.removeCree').val() === 'true';
	var setCree = removeCree ? null : $formulaireValeurs.find('.setCree').val();
	if(removeCree || setCree != null && setCree !== '')
		vals['setCree'] = setCree;
	var addCree = $formulaireValeurs.find('.addCree').val();
	if(addCree != null && addCree !== '')
		vals['addCree'] = addCree;
	var removeCree = $formulaireValeurs.find('.removeCree').val();
	if(removeCree != null && removeCree !== '')
		vals['removeCree'] = removeCree;

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	var removeModifie = $formulaireValeurs.find('.removeModifie').val() === 'true';
	var setModifie = removeModifie ? null : $formulaireValeurs.find('.setModifie').val();
	if(removeModifie || setModifie != null && setModifie !== '')
		vals['setModifie'] = setModifie;
	var addModifie = $formulaireValeurs.find('.addModifie').val();
	if(addModifie != null && addModifie !== '')
		vals['addModifie'] = addModifie;
	var removeModifie = $formulaireValeurs.find('.removeModifie').val();
	if(removeModifie != null && removeModifie !== '')
		vals['removeModifie'] = removeModifie;

	var valeurObjetId = $formulaireValeurs.find('.valeurObjetId').val();
	var removeObjetId = $formulaireValeurs.find('.removeObjetId').val() === 'true';
	var setObjetId = removeObjetId ? null : $formulaireValeurs.find('.setObjetId').val();
	if(removeObjetId || setObjetId != null && setObjetId !== '')
		vals['setObjetId'] = setObjetId;
	var addObjetId = $formulaireValeurs.find('.addObjetId').val();
	if(addObjetId != null && addObjetId !== '')
		vals['addObjetId'] = addObjetId;
	var removeObjetId = $formulaireValeurs.find('.removeObjetId').val();
	if(removeObjetId != null && removeObjetId !== '')
		vals['removeObjetId'] = removeObjetId;

	var valeurArchive = $formulaireValeurs.find('.valeurArchive').prop('checked');
	var removeArchive = $formulaireValeurs.find('.removeArchive').val() === 'true';
	var valeurArchiveSelectVal = $formulaireValeurs.find('select.setArchive').val();
	var valeurArchive = null;
	if(valeurArchiveSelectVal != null && valeurArchiveSelectVal !== '')
		valeurArchive = valeurArchiveSelectVal == 'true';
	setArchive = removeArchive ? null : valeurArchive;
	if(removeArchive || setArchive != null && setArchive !== '')
		vals['setArchive'] = setArchive;
	var addArchive = $formulaireValeurs.find('.addArchive').prop('checked');
	if(addArchive != null && addArchive !== '')
		vals['addArchive'] = addArchive;
	var removeArchive = $formulaireValeurs.find('.removeArchive').prop('checked');
	if(removeArchive != null && removeArchive !== '')
		vals['removeArchive'] = removeArchive;

	var valeurSupprime = $formulaireValeurs.find('.valeurSupprime').prop('checked');
	var removeSupprime = $formulaireValeurs.find('.removeSupprime').val() === 'true';
	var valeurSupprimeSelectVal = $formulaireValeurs.find('select.setSupprime').val();
	var valeurSupprime = null;
	if(valeurSupprimeSelectVal != null && valeurSupprimeSelectVal !== '')
		valeurSupprime = valeurSupprimeSelectVal == 'true';
	setSupprime = removeSupprime ? null : valeurSupprime;
	if(removeSupprime || setSupprime != null && setSupprime !== '')
		vals['setSupprime'] = setSupprime;
	var addSupprime = $formulaireValeurs.find('.addSupprime').prop('checked');
	if(addSupprime != null && addSupprime !== '')
		vals['addSupprime'] = addSupprime;
	var removeSupprime = $formulaireValeurs.find('.removeSupprime').prop('checked');
	if(removeSupprime != null && removeSupprime !== '')
		vals['removeSupprime'] = removeSupprime;

	var valeurEcoleNom = $formulaireValeurs.find('.valeurEcoleNom').val();
	var removeEcoleNom = $formulaireValeurs.find('.removeEcoleNom').val() === 'true';
	var setEcoleNom = removeEcoleNom ? null : $formulaireValeurs.find('.setEcoleNom').val();
	if(removeEcoleNom || setEcoleNom != null && setEcoleNom !== '')
		vals['setEcoleNom'] = setEcoleNom;
	var addEcoleNom = $formulaireValeurs.find('.addEcoleNom').val();
	if(addEcoleNom != null && addEcoleNom !== '')
		vals['addEcoleNom'] = addEcoleNom;
	var removeEcoleNom = $formulaireValeurs.find('.removeEcoleNom').val();
	if(removeEcoleNom != null && removeEcoleNom !== '')
		vals['removeEcoleNom'] = removeEcoleNom;

	var valeurEcoleEmplacement = $formulaireValeurs.find('.valeurEcoleEmplacement').val();
	var removeEcoleEmplacement = $formulaireValeurs.find('.removeEcoleEmplacement').val() === 'true';
	var setEcoleEmplacement = removeEcoleEmplacement ? null : $formulaireValeurs.find('.setEcoleEmplacement').val();
	if(removeEcoleEmplacement || setEcoleEmplacement != null && setEcoleEmplacement !== '')
		vals['setEcoleEmplacement'] = setEcoleEmplacement;
	var addEcoleEmplacement = $formulaireValeurs.find('.addEcoleEmplacement').val();
	if(addEcoleEmplacement != null && addEcoleEmplacement !== '')
		vals['addEcoleEmplacement'] = addEcoleEmplacement;
	var removeEcoleEmplacement = $formulaireValeurs.find('.removeEcoleEmplacement').val();
	if(removeEcoleEmplacement != null && removeEcoleEmplacement !== '')
		vals['removeEcoleEmplacement'] = removeEcoleEmplacement;

	var valeurEcoleAdministrateurNom = $formulaireValeurs.find('.valeurEcoleAdministrateurNom').val();
	var removeEcoleAdministrateurNom = $formulaireValeurs.find('.removeEcoleAdministrateurNom').val() === 'true';
	var setEcoleAdministrateurNom = removeEcoleAdministrateurNom ? null : $formulaireValeurs.find('.setEcoleAdministrateurNom').val();
	if(removeEcoleAdministrateurNom || setEcoleAdministrateurNom != null && setEcoleAdministrateurNom !== '')
		vals['setEcoleAdministrateurNom'] = setEcoleAdministrateurNom;
	var addEcoleAdministrateurNom = $formulaireValeurs.find('.addEcoleAdministrateurNom').val();
	if(addEcoleAdministrateurNom != null && addEcoleAdministrateurNom !== '')
		vals['addEcoleAdministrateurNom'] = addEcoleAdministrateurNom;
	var removeEcoleAdministrateurNom = $formulaireValeurs.find('.removeEcoleAdministrateurNom').val();
	if(removeEcoleAdministrateurNom != null && removeEcoleAdministrateurNom !== '')
		vals['removeEcoleAdministrateurNom'] = removeEcoleAdministrateurNom;

	var valeurEcoleMail = $formulaireValeurs.find('.valeurEcoleMail').val();
	var removeEcoleMail = $formulaireValeurs.find('.removeEcoleMail').val() === 'true';
	var setEcoleMail = removeEcoleMail ? null : $formulaireValeurs.find('.setEcoleMail').val();
	if(removeEcoleMail || setEcoleMail != null && setEcoleMail !== '')
		vals['setEcoleMail'] = setEcoleMail;
	var addEcoleMail = $formulaireValeurs.find('.addEcoleMail').val();
	if(addEcoleMail != null && addEcoleMail !== '')
		vals['addEcoleMail'] = addEcoleMail;
	var removeEcoleMail = $formulaireValeurs.find('.removeEcoleMail').val();
	if(removeEcoleMail != null && removeEcoleMail !== '')
		vals['removeEcoleMail'] = removeEcoleMail;

	var valeurEcoleMailDe = $formulaireValeurs.find('.valeurEcoleMailDe').val();
	var removeEcoleMailDe = $formulaireValeurs.find('.removeEcoleMailDe').val() === 'true';
	var setEcoleMailDe = removeEcoleMailDe ? null : $formulaireValeurs.find('.setEcoleMailDe').val();
	if(removeEcoleMailDe || setEcoleMailDe != null && setEcoleMailDe !== '')
		vals['setEcoleMailDe'] = setEcoleMailDe;
	var addEcoleMailDe = $formulaireValeurs.find('.addEcoleMailDe').val();
	if(addEcoleMailDe != null && addEcoleMailDe !== '')
		vals['addEcoleMailDe'] = addEcoleMailDe;
	var removeEcoleMailDe = $formulaireValeurs.find('.removeEcoleMailDe').val();
	if(removeEcoleMailDe != null && removeEcoleMailDe !== '')
		vals['removeEcoleMailDe'] = removeEcoleMailDe;

	var valeurEcoleMailA = $formulaireValeurs.find('.valeurEcoleMailA').val();
	var removeEcoleMailA = $formulaireValeurs.find('.removeEcoleMailA').val() === 'true';
	var setEcoleMailA = removeEcoleMailA ? null : $formulaireValeurs.find('.setEcoleMailA').val();
	if(removeEcoleMailA || setEcoleMailA != null && setEcoleMailA !== '')
		vals['setEcoleMailA'] = setEcoleMailA;
	var addEcoleMailA = $formulaireValeurs.find('.addEcoleMailA').val();
	if(addEcoleMailA != null && addEcoleMailA !== '')
		vals['addEcoleMailA'] = addEcoleMailA;
	var removeEcoleMailA = $formulaireValeurs.find('.removeEcoleMailA').val();
	if(removeEcoleMailA != null && removeEcoleMailA !== '')
		vals['removeEcoleMailA'] = removeEcoleMailA;

	var valeurEcoleNumeroTelephone = $formulaireValeurs.find('.valeurEcoleNumeroTelephone').val();
	var removeEcoleNumeroTelephone = $formulaireValeurs.find('.removeEcoleNumeroTelephone').val() === 'true';
	var setEcoleNumeroTelephone = removeEcoleNumeroTelephone ? null : $formulaireValeurs.find('.setEcoleNumeroTelephone').val();
	if(removeEcoleNumeroTelephone || setEcoleNumeroTelephone != null && setEcoleNumeroTelephone !== '')
		vals['setEcoleNumeroTelephone'] = setEcoleNumeroTelephone;
	var addEcoleNumeroTelephone = $formulaireValeurs.find('.addEcoleNumeroTelephone').val();
	if(addEcoleNumeroTelephone != null && addEcoleNumeroTelephone !== '')
		vals['addEcoleNumeroTelephone'] = addEcoleNumeroTelephone;
	var removeEcoleNumeroTelephone = $formulaireValeurs.find('.removeEcoleNumeroTelephone').val();
	if(removeEcoleNumeroTelephone != null && removeEcoleNumeroTelephone !== '')
		vals['removeEcoleNumeroTelephone'] = removeEcoleNumeroTelephone;

	var valeurEcoleAddresse = $formulaireValeurs.find('.valeurEcoleAddresse').val();
	var removeEcoleAddresse = $formulaireValeurs.find('.removeEcoleAddresse').val() === 'true';
	var setEcoleAddresse = removeEcoleAddresse ? null : $formulaireValeurs.find('.setEcoleAddresse').val();
	if(removeEcoleAddresse || setEcoleAddresse != null && setEcoleAddresse !== '')
		vals['setEcoleAddresse'] = setEcoleAddresse;
	var addEcoleAddresse = $formulaireValeurs.find('.addEcoleAddresse').val();
	if(addEcoleAddresse != null && addEcoleAddresse !== '')
		vals['addEcoleAddresse'] = addEcoleAddresse;
	var removeEcoleAddresse = $formulaireValeurs.find('.removeEcoleAddresse').val();
	if(removeEcoleAddresse != null && removeEcoleAddresse !== '')
		vals['removeEcoleAddresse'] = removeEcoleAddresse;

	var valeurEcoleForm = $formulaireValeurs.find('.valeurEcoleForm').val();
	var removeEcoleForm = $formulaireValeurs.find('.removeEcoleForm').val() === 'true';
	var setEcoleForm = removeEcoleForm ? null : $formulaireValeurs.find('.setEcoleForm').val();
	if(removeEcoleForm || setEcoleForm != null && setEcoleForm !== '')
		vals['setEcoleForm'] = setEcoleForm;
	var addEcoleForm = $formulaireValeurs.find('.addEcoleForm').val();
	if(addEcoleForm != null && addEcoleForm !== '')
		vals['addEcoleForm'] = addEcoleForm;
	var removeEcoleForm = $formulaireValeurs.find('.removeEcoleForm').val();
	if(removeEcoleForm != null && removeEcoleForm !== '')
		vals['removeEcoleForm'] = removeEcoleForm;

	var valeurEcoleNumero = $formulaireValeurs.find('.valeurEcoleNumero').val();
	var removeEcoleNumero = $formulaireValeurs.find('.removeEcoleNumero').val() === 'true';
	var setEcoleNumero = removeEcoleNumero ? null : $formulaireValeurs.find('.setEcoleNumero').val();
	if(removeEcoleNumero || setEcoleNumero != null && setEcoleNumero !== '')
		vals['setEcoleNumero'] = setEcoleNumero;
	var addEcoleNumero = $formulaireValeurs.find('.addEcoleNumero').val();
	if(addEcoleNumero != null && addEcoleNumero !== '')
		vals['addEcoleNumero'] = addEcoleNumero;
	var removeEcoleNumero = $formulaireValeurs.find('.removeEcoleNumero').val();
	if(removeEcoleNumero != null && removeEcoleNumero !== '')
		vals['removeEcoleNumero'] = removeEcoleNumero;

	var valeurAnneeCles = $formulaireValeurs.find('input.valeurAnneeCles:checked').val();
	if(valeurAnneeCles != null && valeurAnneeCles !== '')
		vals['addAnneeCles'] = valeurAnneeCles;

	var valeurRecuCles = $formulaireValeurs.find('input.valeurRecuCles:checked').val();
	if(valeurRecuCles != null && valeurRecuCles !== '')
		vals['addRecuCles'] = valeurRecuCles;

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	var removeInheritPk = $formulaireValeurs.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formulaireValeurs.find('.setInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	var addInheritPk = $formulaireValeurs.find('.addInheritPk').val();
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formulaireValeurs.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valeurSessionId = $formulaireValeurs.find('.valeurSessionId').val();
	var removeSessionId = $formulaireValeurs.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formulaireValeurs.find('.setSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	var addSessionId = $formulaireValeurs.find('.addSessionId').val();
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formulaireValeurs.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valeurUtilisateurId = $formulaireValeurs.find('.valeurUtilisateurId').val();
	var removeUtilisateurId = $formulaireValeurs.find('.removeUtilisateurId').val() === 'true';
	var setUtilisateurId = removeUtilisateurId ? null : $formulaireValeurs.find('.setUtilisateurId').val();
	if(removeUtilisateurId || setUtilisateurId != null && setUtilisateurId !== '')
		vals['setUtilisateurId'] = setUtilisateurId;
	var addUtilisateurId = $formulaireValeurs.find('.addUtilisateurId').val();
	if(addUtilisateurId != null && addUtilisateurId !== '')
		vals['addUtilisateurId'] = addUtilisateurId;
	var removeUtilisateurId = $formulaireValeurs.find('.removeUtilisateurId').val();
	if(removeUtilisateurId != null && removeUtilisateurId !== '')
		vals['removeUtilisateurId'] = removeUtilisateurId;

	var valeurUtilisateurCle = $formulaireValeurs.find('.valeurUtilisateurCle').val();
	var removeUtilisateurCle = $formulaireValeurs.find('.removeUtilisateurCle').val() === 'true';
	var setUtilisateurCle = removeUtilisateurCle ? null : $formulaireValeurs.find('.setUtilisateurCle').val();
	if(removeUtilisateurCle || setUtilisateurCle != null && setUtilisateurCle !== '')
		vals['setUtilisateurCle'] = setUtilisateurCle;
	var addUtilisateurCle = $formulaireValeurs.find('.addUtilisateurCle').val();
	if(addUtilisateurCle != null && addUtilisateurCle !== '')
		vals['addUtilisateurCle'] = addUtilisateurCle;
	var removeUtilisateurCle = $formulaireValeurs.find('.removeUtilisateurCle').val();
	if(removeUtilisateurCle != null && removeUtilisateurCle !== '')
		vals['removeUtilisateurCle'] = removeUtilisateurCle;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	var removeObjetTitre = $formulaireValeurs.find('.removeObjetTitre').val() === 'true';
	var setObjetTitre = removeObjetTitre ? null : $formulaireValeurs.find('.setObjetTitre').val();
	if(removeObjetTitre || setObjetTitre != null && setObjetTitre !== '')
		vals['setObjetTitre'] = setObjetTitre;
	var addObjetTitre = $formulaireValeurs.find('.addObjetTitre').val();
	if(addObjetTitre != null && addObjetTitre !== '')
		vals['addObjetTitre'] = addObjetTitre;
	var removeObjetTitre = $formulaireValeurs.find('.removeObjetTitre').val();
	if(removeObjetTitre != null && removeObjetTitre !== '')
		vals['removeObjetTitre'] = removeObjetTitre;

	patchEcoleVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchEcoleFiltres($formulaireFiltres) {
	var filtres = [];
	if($formulaireFiltres) {

		var filtrePk = $formulaireFiltres.find('.valeurPk').val();
		if(filtrePk != null && filtrePk !== '')
			filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

		var filtreCree = $formulaireFiltres.find('.valeurCree').val();
		if(filtreCree != null && filtreCree !== '')
			filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

		var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
		if(filtreModifie != null && filtreModifie !== '')
			filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

		var filtreObjetId = $formulaireFiltres.find('.valeurObjetId').val();
		if(filtreObjetId != null && filtreObjetId !== '')
			filtres.push({ name: 'fq', value: 'objetId:' + filtreObjetId });

		var $filtreArchiveCheckbox = $formulaireFiltres.find('input.valeurArchive[type = "checkbox"]');
		var $filtreArchiveSelect = $formulaireFiltres.find('select.valeurArchive');
		var filtreArchive = $filtreArchiveSelect.length ? $filtreArchiveSelect.val() : $filtreArchiveCheckbox.prop('checked');
		var filtreArchiveSelectVal = $formulaireFiltres.find('select.filtreArchive').val();
		var filtreArchive = null;
		if(filtreArchiveSelectVal !== '')
			filtreArchive = filtreArchiveSelectVal == 'true';
		if(filtreArchive != null && filtreArchive === true)
			filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

		var $filtreSupprimeCheckbox = $formulaireFiltres.find('input.valeurSupprime[type = "checkbox"]');
		var $filtreSupprimeSelect = $formulaireFiltres.find('select.valeurSupprime');
		var filtreSupprime = $filtreSupprimeSelect.length ? $filtreSupprimeSelect.val() : $filtreSupprimeCheckbox.prop('checked');
		var filtreSupprimeSelectVal = $formulaireFiltres.find('select.filtreSupprime').val();
		var filtreSupprime = null;
		if(filtreSupprimeSelectVal !== '')
			filtreSupprime = filtreSupprimeSelectVal == 'true';
		if(filtreSupprime != null && filtreSupprime === true)
			filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

		var filtreEcoleNom = $formulaireFiltres.find('.valeurEcoleNom').val();
		if(filtreEcoleNom != null && filtreEcoleNom !== '')
			filtres.push({ name: 'fq', value: 'ecoleNom:' + filtreEcoleNom });

		var filtreEcoleEmplacement = $formulaireFiltres.find('.valeurEcoleEmplacement').val();
		if(filtreEcoleEmplacement != null && filtreEcoleEmplacement !== '')
			filtres.push({ name: 'fq', value: 'ecoleEmplacement:' + filtreEcoleEmplacement });

		var filtreEcoleAdministrateurNom = $formulaireFiltres.find('.valeurEcoleAdministrateurNom').val();
		if(filtreEcoleAdministrateurNom != null && filtreEcoleAdministrateurNom !== '')
			filtres.push({ name: 'fq', value: 'ecoleAdministrateurNom:' + filtreEcoleAdministrateurNom });

		var filtreEcoleMail = $formulaireFiltres.find('.valeurEcoleMail').val();
		if(filtreEcoleMail != null && filtreEcoleMail !== '')
			filtres.push({ name: 'fq', value: 'ecoleMail:' + filtreEcoleMail });

		var filtreEcoleMailDe = $formulaireFiltres.find('.valeurEcoleMailDe').val();
		if(filtreEcoleMailDe != null && filtreEcoleMailDe !== '')
			filtres.push({ name: 'fq', value: 'ecoleMailDe:' + filtreEcoleMailDe });

		var filtreEcoleMailA = $formulaireFiltres.find('.valeurEcoleMailA').val();
		if(filtreEcoleMailA != null && filtreEcoleMailA !== '')
			filtres.push({ name: 'fq', value: 'ecoleMailA:' + filtreEcoleMailA });

		var filtreEcoleNumeroTelephone = $formulaireFiltres.find('.valeurEcoleNumeroTelephone').val();
		if(filtreEcoleNumeroTelephone != null && filtreEcoleNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'ecoleNumeroTelephone:' + filtreEcoleNumeroTelephone });

		var filtreEcoleAddresse = $formulaireFiltres.find('.valeurEcoleAddresse').val();
		if(filtreEcoleAddresse != null && filtreEcoleAddresse !== '')
			filtres.push({ name: 'fq', value: 'ecoleAddresse:' + filtreEcoleAddresse });

		var filtreEcoleForm = $formulaireFiltres.find('.valeurEcoleForm').val();
		if(filtreEcoleForm != null && filtreEcoleForm !== '')
			filtres.push({ name: 'fq', value: 'ecoleForm:' + filtreEcoleForm });

		var filtreEcoleNumero = $formulaireFiltres.find('.valeurEcoleNumero').val();
		if(filtreEcoleNumero != null && filtreEcoleNumero !== '')
			filtres.push({ name: 'fq', value: 'ecoleNumero:' + filtreEcoleNumero });

		var filtreAnneeCles = $formulaireFiltres.find('.valeurAnneeCles').val();
		if(filtreAnneeCles != null && filtreAnneeCles !== '')
			filtres.push({ name: 'fq', value: 'anneeCles:' + filtreAnneeCles });

		var filtreRecuCles = $formulaireFiltres.find('.valeurRecuCles').val();
		if(filtreRecuCles != null && filtreRecuCles !== '')
			filtres.push({ name: 'fq', value: 'recuCles:' + filtreRecuCles });

		var filtreInheritPk = $formulaireFiltres.find('.valeurInheritPk').val();
		if(filtreInheritPk != null && filtreInheritPk !== '')
			filtres.push({ name: 'fq', value: 'inheritPk:' + filtreInheritPk });

		var filtreId = $formulaireFiltres.find('.valeurId').val();
		if(filtreId != null && filtreId !== '')
			filtres.push({ name: 'fq', value: 'id:' + filtreId });

		var filtreClasseNomCanonique = $formulaireFiltres.find('.valeurClasseNomCanonique').val();
		if(filtreClasseNomCanonique != null && filtreClasseNomCanonique !== '')
			filtres.push({ name: 'fq', value: 'classeNomCanonique:' + filtreClasseNomCanonique });

		var filtreClasseNomSimple = $formulaireFiltres.find('.valeurClasseNomSimple').val();
		if(filtreClasseNomSimple != null && filtreClasseNomSimple !== '')
			filtres.push({ name: 'fq', value: 'classeNomSimple:' + filtreClasseNomSimple });

		var filtreClasseNomsCanoniques = $formulaireFiltres.find('.valeurClasseNomsCanoniques').val();
		if(filtreClasseNomsCanoniques != null && filtreClasseNomsCanoniques !== '')
			filtres.push({ name: 'fq', value: 'classeNomsCanoniques:' + filtreClasseNomsCanoniques });

		var filtreSessionId = $formulaireFiltres.find('.valeurSessionId').val();
		if(filtreSessionId != null && filtreSessionId !== '')
			filtres.push({ name: 'fq', value: 'sessionId:' + filtreSessionId });

		var filtreUtilisateurId = $formulaireFiltres.find('.valeurUtilisateurId').val();
		if(filtreUtilisateurId != null && filtreUtilisateurId !== '')
			filtres.push({ name: 'fq', value: 'utilisateurId:' + filtreUtilisateurId });

		var filtreUtilisateurCle = $formulaireFiltres.find('.valeurUtilisateurCle').val();
		if(filtreUtilisateurCle != null && filtreUtilisateurCle !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCle:' + filtreUtilisateurCle });

		var filtreSauvegardes = $formulaireFiltres.find('.valeurSauvegardes').val();
		if(filtreSauvegardes != null && filtreSauvegardes !== '')
			filtres.push({ name: 'fq', value: 'sauvegardes:' + filtreSauvegardes });

		var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
		if(filtreObjetTitre != null && filtreObjetTitre !== '')
			filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

		var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
		if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
			filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

		var filtreObjetTexte = $formulaireFiltres.find('.valeurObjetTexte').val();
		if(filtreObjetTexte != null && filtreObjetTexte !== '')
			filtres.push({ name: 'fq', value: 'objetTexte:' + filtreObjetTexte });

		var filtrePageUrlId = $formulaireFiltres.find('.valeurPageUrlId').val();
		if(filtrePageUrlId != null && filtrePageUrlId !== '')
			filtres.push({ name: 'fq', value: 'pageUrlId:' + filtrePageUrlId });

		var filtrePageUrlPk = $formulaireFiltres.find('.valeurPageUrlPk').val();
		if(filtrePageUrlPk != null && filtrePageUrlPk !== '')
			filtres.push({ name: 'fq', value: 'pageUrlPk:' + filtrePageUrlPk });

		var filtrePageUrlApi = $formulaireFiltres.find('.valeurPageUrlApi').val();
		if(filtrePageUrlApi != null && filtrePageUrlApi !== '')
			filtres.push({ name: 'fq', value: 'pageUrlApi:' + filtrePageUrlApi });

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

		var filtreSaisonCles = $formulaireFiltres.find('.valeurSaisonCles').val();
		if(filtreSaisonCles != null && filtreSaisonCles !== '')
			filtres.push({ name: 'fq', value: 'saisonCles:' + filtreSaisonCles });

		var filtreSessionCles = $formulaireFiltres.find('.valeurSessionCles').val();
		if(filtreSessionCles != null && filtreSessionCles !== '')
			filtres.push({ name: 'fq', value: 'sessionCles:' + filtreSessionCles });

		var filtreGroupeAgeCles = $formulaireFiltres.find('.valeurGroupeAgeCles').val();
		if(filtreGroupeAgeCles != null && filtreGroupeAgeCles !== '')
			filtres.push({ name: 'fq', value: 'groupeAgeCles:' + filtreGroupeAgeCles });

		var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
		if(filtreBlocCles != null && filtreBlocCles !== '')
			filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

		var filtreEnfantCles = $formulaireFiltres.find('.valeurEnfantCles').val();
		if(filtreEnfantCles != null && filtreEnfantCles !== '')
			filtres.push({ name: 'fq', value: 'enfantCles:' + filtreEnfantCles });

		var filtreScolaireTri = $formulaireFiltres.find('.valeurScolaireTri').val();
		if(filtreScolaireTri != null && filtreScolaireTri !== '')
			filtres.push({ name: 'fq', value: 'scolaireTri:' + filtreScolaireTri });

		var filtreEcoleTri = $formulaireFiltres.find('.valeurEcoleTri').val();
		if(filtreEcoleTri != null && filtreEcoleTri !== '')
			filtres.push({ name: 'fq', value: 'ecoleTri:' + filtreEcoleTri });

		var filtreEcoleNomCourt = $formulaireFiltres.find('.valeurEcoleNomCourt').val();
		if(filtreEcoleNomCourt != null && filtreEcoleNomCourt !== '')
			filtres.push({ name: 'fq', value: 'ecoleNomCourt:' + filtreEcoleNomCourt });

		var filtreEcoleNomComplet = $formulaireFiltres.find('.valeurEcoleNomComplet').val();
		if(filtreEcoleNomComplet != null && filtreEcoleNomComplet !== '')
			filtres.push({ name: 'fq', value: 'ecoleNomComplet:' + filtreEcoleNomComplet });
	}
	return filtres;
}

function patchEcoleVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchEcoleVals(filtres, vals, success, error);
}

function patchEcoleVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/ecole?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getEcole(pk) {
	$.ajax({
		url: '/api/ecole/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Recherche //

async function rechercheEcole($formulaireFiltres, success, error) {
	var filtres = rechercheEcoleFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheEcoleVals(filtres, success, error);
}

function rechercheEcoleFiltres($formulaireFiltres) {
	var filtres = [];
	if($formulaireFiltres) {

		var filtrePk = $formulaireFiltres.find('.valeurPk').val();
		if(filtrePk != null && filtrePk !== '')
			filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

		var filtreCree = $formulaireFiltres.find('.valeurCree').val();
		if(filtreCree != null && filtreCree !== '')
			filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

		var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
		if(filtreModifie != null && filtreModifie !== '')
			filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

		var filtreObjetId = $formulaireFiltres.find('.valeurObjetId').val();
		if(filtreObjetId != null && filtreObjetId !== '')
			filtres.push({ name: 'fq', value: 'objetId:' + filtreObjetId });

		var $filtreArchiveCheckbox = $formulaireFiltres.find('input.valeurArchive[type = "checkbox"]');
		var $filtreArchiveSelect = $formulaireFiltres.find('select.valeurArchive');
		var filtreArchive = $filtreArchiveSelect.length ? $filtreArchiveSelect.val() : $filtreArchiveCheckbox.prop('checked');
		var filtreArchiveSelectVal = $formulaireFiltres.find('select.filtreArchive').val();
		var filtreArchive = null;
		if(filtreArchiveSelectVal !== '')
			filtreArchive = filtreArchiveSelectVal == 'true';
		if(filtreArchive != null && filtreArchive === true)
			filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

		var $filtreSupprimeCheckbox = $formulaireFiltres.find('input.valeurSupprime[type = "checkbox"]');
		var $filtreSupprimeSelect = $formulaireFiltres.find('select.valeurSupprime');
		var filtreSupprime = $filtreSupprimeSelect.length ? $filtreSupprimeSelect.val() : $filtreSupprimeCheckbox.prop('checked');
		var filtreSupprimeSelectVal = $formulaireFiltres.find('select.filtreSupprime').val();
		var filtreSupprime = null;
		if(filtreSupprimeSelectVal !== '')
			filtreSupprime = filtreSupprimeSelectVal == 'true';
		if(filtreSupprime != null && filtreSupprime === true)
			filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

		var filtreEcoleNom = $formulaireFiltres.find('.valeurEcoleNom').val();
		if(filtreEcoleNom != null && filtreEcoleNom !== '')
			filtres.push({ name: 'fq', value: 'ecoleNom:' + filtreEcoleNom });

		var filtreEcoleEmplacement = $formulaireFiltres.find('.valeurEcoleEmplacement').val();
		if(filtreEcoleEmplacement != null && filtreEcoleEmplacement !== '')
			filtres.push({ name: 'fq', value: 'ecoleEmplacement:' + filtreEcoleEmplacement });

		var filtreEcoleAdministrateurNom = $formulaireFiltres.find('.valeurEcoleAdministrateurNom').val();
		if(filtreEcoleAdministrateurNom != null && filtreEcoleAdministrateurNom !== '')
			filtres.push({ name: 'fq', value: 'ecoleAdministrateurNom:' + filtreEcoleAdministrateurNom });

		var filtreEcoleMail = $formulaireFiltres.find('.valeurEcoleMail').val();
		if(filtreEcoleMail != null && filtreEcoleMail !== '')
			filtres.push({ name: 'fq', value: 'ecoleMail:' + filtreEcoleMail });

		var filtreEcoleMailDe = $formulaireFiltres.find('.valeurEcoleMailDe').val();
		if(filtreEcoleMailDe != null && filtreEcoleMailDe !== '')
			filtres.push({ name: 'fq', value: 'ecoleMailDe:' + filtreEcoleMailDe });

		var filtreEcoleMailA = $formulaireFiltres.find('.valeurEcoleMailA').val();
		if(filtreEcoleMailA != null && filtreEcoleMailA !== '')
			filtres.push({ name: 'fq', value: 'ecoleMailA:' + filtreEcoleMailA });

		var filtreEcoleNumeroTelephone = $formulaireFiltres.find('.valeurEcoleNumeroTelephone').val();
		if(filtreEcoleNumeroTelephone != null && filtreEcoleNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'ecoleNumeroTelephone:' + filtreEcoleNumeroTelephone });

		var filtreEcoleAddresse = $formulaireFiltres.find('.valeurEcoleAddresse').val();
		if(filtreEcoleAddresse != null && filtreEcoleAddresse !== '')
			filtres.push({ name: 'fq', value: 'ecoleAddresse:' + filtreEcoleAddresse });

		var filtreEcoleForm = $formulaireFiltres.find('.valeurEcoleForm').val();
		if(filtreEcoleForm != null && filtreEcoleForm !== '')
			filtres.push({ name: 'fq', value: 'ecoleForm:' + filtreEcoleForm });

		var filtreEcoleNumero = $formulaireFiltres.find('.valeurEcoleNumero').val();
		if(filtreEcoleNumero != null && filtreEcoleNumero !== '')
			filtres.push({ name: 'fq', value: 'ecoleNumero:' + filtreEcoleNumero });

		var filtreAnneeCles = $formulaireFiltres.find('.valeurAnneeCles').val();
		if(filtreAnneeCles != null && filtreAnneeCles !== '')
			filtres.push({ name: 'fq', value: 'anneeCles:' + filtreAnneeCles });

		var filtreRecuCles = $formulaireFiltres.find('.valeurRecuCles').val();
		if(filtreRecuCles != null && filtreRecuCles !== '')
			filtres.push({ name: 'fq', value: 'recuCles:' + filtreRecuCles });

		var filtreInheritPk = $formulaireFiltres.find('.valeurInheritPk').val();
		if(filtreInheritPk != null && filtreInheritPk !== '')
			filtres.push({ name: 'fq', value: 'inheritPk:' + filtreInheritPk });

		var filtreId = $formulaireFiltres.find('.valeurId').val();
		if(filtreId != null && filtreId !== '')
			filtres.push({ name: 'fq', value: 'id:' + filtreId });

		var filtreClasseNomCanonique = $formulaireFiltres.find('.valeurClasseNomCanonique').val();
		if(filtreClasseNomCanonique != null && filtreClasseNomCanonique !== '')
			filtres.push({ name: 'fq', value: 'classeNomCanonique:' + filtreClasseNomCanonique });

		var filtreClasseNomSimple = $formulaireFiltres.find('.valeurClasseNomSimple').val();
		if(filtreClasseNomSimple != null && filtreClasseNomSimple !== '')
			filtres.push({ name: 'fq', value: 'classeNomSimple:' + filtreClasseNomSimple });

		var filtreClasseNomsCanoniques = $formulaireFiltres.find('.valeurClasseNomsCanoniques').val();
		if(filtreClasseNomsCanoniques != null && filtreClasseNomsCanoniques !== '')
			filtres.push({ name: 'fq', value: 'classeNomsCanoniques:' + filtreClasseNomsCanoniques });

		var filtreSessionId = $formulaireFiltres.find('.valeurSessionId').val();
		if(filtreSessionId != null && filtreSessionId !== '')
			filtres.push({ name: 'fq', value: 'sessionId:' + filtreSessionId });

		var filtreUtilisateurId = $formulaireFiltres.find('.valeurUtilisateurId').val();
		if(filtreUtilisateurId != null && filtreUtilisateurId !== '')
			filtres.push({ name: 'fq', value: 'utilisateurId:' + filtreUtilisateurId });

		var filtreUtilisateurCle = $formulaireFiltres.find('.valeurUtilisateurCle').val();
		if(filtreUtilisateurCle != null && filtreUtilisateurCle !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCle:' + filtreUtilisateurCle });

		var filtreSauvegardes = $formulaireFiltres.find('.valeurSauvegardes').val();
		if(filtreSauvegardes != null && filtreSauvegardes !== '')
			filtres.push({ name: 'fq', value: 'sauvegardes:' + filtreSauvegardes });

		var filtreObjetTitre = $formulaireFiltres.find('.valeurObjetTitre').val();
		if(filtreObjetTitre != null && filtreObjetTitre !== '')
			filtres.push({ name: 'fq', value: 'objetTitre:' + filtreObjetTitre });

		var filtreObjetSuggere = $formulaireFiltres.find('.valeurObjetSuggere').val();
		if(filtreObjetSuggere != null && filtreObjetSuggere !== '')
			filtres.push({ name: 'q', value: 'objetSuggere:' + filtreObjetSuggere });

		var filtreObjetTexte = $formulaireFiltres.find('.valeurObjetTexte').val();
		if(filtreObjetTexte != null && filtreObjetTexte !== '')
			filtres.push({ name: 'fq', value: 'objetTexte:' + filtreObjetTexte });

		var filtrePageUrlId = $formulaireFiltres.find('.valeurPageUrlId').val();
		if(filtrePageUrlId != null && filtrePageUrlId !== '')
			filtres.push({ name: 'fq', value: 'pageUrlId:' + filtrePageUrlId });

		var filtrePageUrlPk = $formulaireFiltres.find('.valeurPageUrlPk').val();
		if(filtrePageUrlPk != null && filtrePageUrlPk !== '')
			filtres.push({ name: 'fq', value: 'pageUrlPk:' + filtrePageUrlPk });

		var filtrePageUrlApi = $formulaireFiltres.find('.valeurPageUrlApi').val();
		if(filtrePageUrlApi != null && filtrePageUrlApi !== '')
			filtres.push({ name: 'fq', value: 'pageUrlApi:' + filtrePageUrlApi });

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

		var filtreSaisonCles = $formulaireFiltres.find('.valeurSaisonCles').val();
		if(filtreSaisonCles != null && filtreSaisonCles !== '')
			filtres.push({ name: 'fq', value: 'saisonCles:' + filtreSaisonCles });

		var filtreSessionCles = $formulaireFiltres.find('.valeurSessionCles').val();
		if(filtreSessionCles != null && filtreSessionCles !== '')
			filtres.push({ name: 'fq', value: 'sessionCles:' + filtreSessionCles });

		var filtreGroupeAgeCles = $formulaireFiltres.find('.valeurGroupeAgeCles').val();
		if(filtreGroupeAgeCles != null && filtreGroupeAgeCles !== '')
			filtres.push({ name: 'fq', value: 'groupeAgeCles:' + filtreGroupeAgeCles });

		var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
		if(filtreBlocCles != null && filtreBlocCles !== '')
			filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

		var filtreEnfantCles = $formulaireFiltres.find('.valeurEnfantCles').val();
		if(filtreEnfantCles != null && filtreEnfantCles !== '')
			filtres.push({ name: 'fq', value: 'enfantCles:' + filtreEnfantCles });

		var filtreScolaireTri = $formulaireFiltres.find('.valeurScolaireTri').val();
		if(filtreScolaireTri != null && filtreScolaireTri !== '')
			filtres.push({ name: 'fq', value: 'scolaireTri:' + filtreScolaireTri });

		var filtreEcoleTri = $formulaireFiltres.find('.valeurEcoleTri').val();
		if(filtreEcoleTri != null && filtreEcoleTri !== '')
			filtres.push({ name: 'fq', value: 'ecoleTri:' + filtreEcoleTri });

		var filtreEcoleNomCourt = $formulaireFiltres.find('.valeurEcoleNomCourt').val();
		if(filtreEcoleNomCourt != null && filtreEcoleNomCourt !== '')
			filtres.push({ name: 'fq', value: 'ecoleNomCourt:' + filtreEcoleNomCourt });

		var filtreEcoleNomComplet = $formulaireFiltres.find('.valeurEcoleNomComplet').val();
		if(filtreEcoleNomComplet != null && filtreEcoleNomComplet !== '')
			filtres.push({ name: 'fq', value: 'ecoleNomComplet:' + filtreEcoleNomComplet });
	}
	return filtres;
}

function rechercheEcoleVals(filtres, success, error) {
	$.ajax({
		url: '/api/ecole?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereEcoleObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-school ');
			var $span = $('<span>').attr('class', '').text(o['ecoleNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherEcoleVals($formulaireFiltres, success, error);
}

function suggereEcoleAnneeCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-calendar-check ');
			var $span = $('<span>').attr('class', '').text(o['anneeNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['ecoleCle'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_anneeCles_' + pk + '_ecoleCle_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurAnneeCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_anneeCles_" + pk + "_ecoleCle_" + o['pk'] + "'); patchEcoleVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'AnneeCles']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'enleverLueur($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribuer)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#EcoleForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheAnneeScolaireVals(filtres, success, error);
}

function suggereEcoleRecuCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-file-invoice-dollar ');
			var $span = $('<span>').attr('class', '').text(o['paiementNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['ecoleCle'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_recuCles_' + pk + '_ecoleCle_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurRecuCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_recuCles_" + pk + "_ecoleCle_" + o['pk'] + "'); patchEcoleVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'RecuCles']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'enleverLueur($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribuer)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#EcoleForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheRecuScolaireVals(filtres, success, error);
}

// PUTImport //

async function putimportEcole($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTImport_liste').val();
	if(json != null && json !== '')
		putimportEcoleVals(JSON.parse(json), success, error);
}

function putimportEcoleVals(json, success, error) {
	$.ajax({
		url: '/api/ecole/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTFusion //

async function putfusionEcole($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTFusion_liste').val();
	if(json != null && json !== '')
		putfusionEcoleVals(JSON.parse(json), success, error);
}

function putfusionEcoleVals(json, success, error) {
	$.ajax({
		url: '/api/ecole/fusion'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopie //

async function putcopieEcole($formulaireValeurs, pk, success, error) {
	var vals = {};

	var valeurPk = $formulaireValeurs.find('.valeurPk').val();
	if(valeurPk != null && valeurPk !== '')
		vals['pk'] = valeurPk;

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	if(valeurCree != null && valeurCree !== '')
		vals['cree'] = valeurCree;

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	if(valeurModifie != null && valeurModifie !== '')
		vals['modifie'] = valeurModifie;

	var valeurObjetId = $formulaireValeurs.find('.valeurObjetId').val();
	if(valeurObjetId != null && valeurObjetId !== '')
		vals['objetId'] = valeurObjetId;

	var valeurArchive = $formulaireValeurs.find('.valeurArchive').prop('checked');
	if(valeurArchive != null && valeurArchive !== '')
		vals['archive'] = valeurArchive;

	var valeurSupprime = $formulaireValeurs.find('.valeurSupprime').prop('checked');
	if(valeurSupprime != null && valeurSupprime !== '')
		vals['supprime'] = valeurSupprime;

	var valeurEcoleNom = $formulaireValeurs.find('.valeurEcoleNom').val();
	if(valeurEcoleNom != null && valeurEcoleNom !== '')
		vals['ecoleNom'] = valeurEcoleNom;

	var valeurEcoleEmplacement = $formulaireValeurs.find('.valeurEcoleEmplacement').val();
	if(valeurEcoleEmplacement != null && valeurEcoleEmplacement !== '')
		vals['ecoleEmplacement'] = valeurEcoleEmplacement;

	var valeurEcoleAdministrateurNom = $formulaireValeurs.find('.valeurEcoleAdministrateurNom').val();
	if(valeurEcoleAdministrateurNom != null && valeurEcoleAdministrateurNom !== '')
		vals['ecoleAdministrateurNom'] = valeurEcoleAdministrateurNom;

	var valeurEcoleMail = $formulaireValeurs.find('.valeurEcoleMail').val();
	if(valeurEcoleMail != null && valeurEcoleMail !== '')
		vals['ecoleMail'] = valeurEcoleMail;

	var valeurEcoleMailDe = $formulaireValeurs.find('.valeurEcoleMailDe').val();
	if(valeurEcoleMailDe != null && valeurEcoleMailDe !== '')
		vals['ecoleMailDe'] = valeurEcoleMailDe;

	var valeurEcoleMailA = $formulaireValeurs.find('.valeurEcoleMailA').val();
	if(valeurEcoleMailA != null && valeurEcoleMailA !== '')
		vals['ecoleMailA'] = valeurEcoleMailA;

	var valeurEcoleNumeroTelephone = $formulaireValeurs.find('.valeurEcoleNumeroTelephone').val();
	if(valeurEcoleNumeroTelephone != null && valeurEcoleNumeroTelephone !== '')
		vals['ecoleNumeroTelephone'] = valeurEcoleNumeroTelephone;

	var valeurEcoleAddresse = $formulaireValeurs.find('.valeurEcoleAddresse').val();
	if(valeurEcoleAddresse != null && valeurEcoleAddresse !== '')
		vals['ecoleAddresse'] = valeurEcoleAddresse;

	var valeurEcoleForm = $formulaireValeurs.find('.valeurEcoleForm').val();
	if(valeurEcoleForm != null && valeurEcoleForm !== '')
		vals['ecoleForm'] = valeurEcoleForm;

	var valeurEcoleNumero = $formulaireValeurs.find('.valeurEcoleNumero').val();
	if(valeurEcoleNumero != null && valeurEcoleNumero !== '')
		vals['ecoleNumero'] = valeurEcoleNumero;

	var valeurAnneeCles = $formulaireValeurs.find('input.valeurAnneeCles:checked').val();
	if(valeurAnneeCles != null && valeurAnneeCles !== '')
		vals['anneeCles'] = [valeurAnneeCles];

	var valeurRecuCles = $formulaireValeurs.find('input.valeurRecuCles:checked').val();
	if(valeurRecuCles != null && valeurRecuCles !== '')
		vals['recuCles'] = [valeurRecuCles];

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
		vals['inheritPk'] = valeurInheritPk;

	var valeurSessionId = $formulaireValeurs.find('.valeurSessionId').val();
	if(valeurSessionId != null && valeurSessionId !== '')
		vals['sessionId'] = valeurSessionId;

	var valeurUtilisateurId = $formulaireValeurs.find('.valeurUtilisateurId').val();
	if(valeurUtilisateurId != null && valeurUtilisateurId !== '')
		vals['utilisateurId'] = valeurUtilisateurId;

	var valeurUtilisateurCle = $formulaireValeurs.find('.valeurUtilisateurCle').val();
	if(valeurUtilisateurCle != null && valeurUtilisateurCle !== '')
		vals['utilisateurCle'] = valeurUtilisateurCle;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
		vals['objetTitre'] = valeurObjetTitre;

	putcopieEcoleVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopieEcoleVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/ecole/copie?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

async function websocketEcole(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketEcole', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#EcoleForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = json['numFound'];
			var numPATCH = json['numPATCH'];
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-pink ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-school w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modifier écoles');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-pink ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
			$card.append($header);
			$header.append($i);
			$header.append($headerSpan);
			$header.append($x);
			$body.append($bar);
			$bar.append($progress);
			$card.append($body);
			$box.append($margin);
			$margin.append($card);
			$('.box-' + id).remove();
			if(numPATCH < numFound)
			$('.top-box').append($box);
			if(pk && pkPage && pk == pkPage) {;
				if(success)
					success(json);
			}
		});

		window.eventBus.registerHandler('websocketAnneeScolaire', function (error, message) {
			$('#Page_anneeCles').trigger('oninput');
			$('#Page_anneeCles_ajouter').text('ajouter une année');
			$('#Page_anneeCles_ajouter').removeClass('w3-disabled');
			$('#Page_anneeCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketRecuScolaire', function (error, message) {
			$('#Page_recuCles').trigger('oninput');
			$('#Page_recuCles_ajouter').text('ajouter un reçu');
			$('#Page_recuCles_ajouter').removeClass('w3-disabled');
			$('#Page_recuCles_ajouter').attr('disabled', false);
		});
	}
}
async function websocketEcoleInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherEcoleVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputEcole' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'Pk'));
			}
			var val = o['cree'];
			if(vars.includes('cree')) {
				$('.inputEcole' + pk + 'Cree').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'Cree').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'Cree'));
			}
			var val = o['modifie'];
			if(vars.includes('modifie')) {
				$('.inputEcole' + pk + 'Modifie').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'Modifie').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'Modifie'));
			}
			var val = o['objetId'];
			if(vars.includes('objetId')) {
				$('.inputEcole' + pk + 'ObjetId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'ObjetId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'ObjetId'));
			}
			var val = o['archive'];
			if(vars.includes('archive')) {
				$('.inputEcole' + pk + 'Archive').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'Archive').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'Archive'));
			}
			var val = o['supprime'];
			if(vars.includes('supprime')) {
				$('.inputEcole' + pk + 'Supprime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'Supprime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'Supprime'));
			}
			var val = o['ecoleNom'];
			if(vars.includes('ecoleNom')) {
				$('.inputEcole' + pk + 'EcoleNom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'EcoleNom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'EcoleNom'));
			}
			var val = o['ecoleEmplacement'];
			if(vars.includes('ecoleEmplacement')) {
				$('.inputEcole' + pk + 'EcoleEmplacement').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'EcoleEmplacement').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'EcoleEmplacement'));
			}
			var val = o['ecoleAdministrateurNom'];
			if(vars.includes('ecoleAdministrateurNom')) {
				$('.inputEcole' + pk + 'EcoleAdministrateurNom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'EcoleAdministrateurNom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'EcoleAdministrateurNom'));
			}
			var val = o['ecoleMail'];
			if(vars.includes('ecoleMail')) {
				$('.inputEcole' + pk + 'EcoleMail').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'EcoleMail').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'EcoleMail'));
			}
			var val = o['ecoleMailDe'];
			if(vars.includes('ecoleMailDe')) {
				$('.inputEcole' + pk + 'EcoleMailDe').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'EcoleMailDe').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'EcoleMailDe'));
			}
			var val = o['ecoleMailA'];
			if(vars.includes('ecoleMailA')) {
				$('.inputEcole' + pk + 'EcoleMailA').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'EcoleMailA').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'EcoleMailA'));
			}
			var val = o['ecoleNumeroTelephone'];
			if(vars.includes('ecoleNumeroTelephone')) {
				$('.inputEcole' + pk + 'EcoleNumeroTelephone').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'EcoleNumeroTelephone').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'EcoleNumeroTelephone'));
			}
			var val = o['ecoleAddresse'];
			if(vars.includes('ecoleAddresse')) {
				$('.inputEcole' + pk + 'EcoleAddresse').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'EcoleAddresse').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'EcoleAddresse'));
			}
			var val = o['ecoleForm'];
			if(vars.includes('ecoleForm')) {
				$('.inputEcole' + pk + 'EcoleForm').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'EcoleForm').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'EcoleForm'));
			}
			var val = o['ecoleNumero'];
			if(vars.includes('ecoleNumero')) {
				$('.inputEcole' + pk + 'EcoleNumero').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'EcoleNumero').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'EcoleNumero'));
			}
			var val = o['anneeCles'];
			if(vars.includes('anneeCles')) {
				$('.inputEcole' + pk + 'AnneeCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'AnneeCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'AnneeCles'));
			}
			var val = o['recuCles'];
			if(vars.includes('recuCles')) {
				$('.inputEcole' + pk + 'RecuCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'RecuCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'RecuCles'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputEcole' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputEcole' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'Id'));
			}
			var val = o['classeNomCanonique'];
			if(vars.includes('classeNomCanonique')) {
				$('.inputEcole' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'ClasseNomCanonique'));
			}
			var val = o['classeNomSimple'];
			if(vars.includes('classeNomSimple')) {
				$('.inputEcole' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'ClasseNomSimple'));
			}
			var val = o['classeNomsCanoniques'];
			if(vars.includes('classeNomsCanoniques')) {
				$('.inputEcole' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'ClasseNomsCanoniques'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputEcole' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'SessionId'));
			}
			var val = o['utilisateurId'];
			if(vars.includes('utilisateurId')) {
				$('.inputEcole' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'UtilisateurId'));
			}
			var val = o['utilisateurCle'];
			if(vars.includes('utilisateurCle')) {
				$('.inputEcole' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'UtilisateurCle'));
			}
			var val = o['sauvegardes'];
			if(vars.includes('sauvegardes')) {
				$('.inputEcole' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'Sauvegardes'));
			}
			var val = o['objetTitre'];
			if(vars.includes('objetTitre')) {
				$('.inputEcole' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'ObjetTitre'));
			}
			var val = o['objetSuggere'];
			if(vars.includes('objetSuggere')) {
				$('.inputEcole' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'ObjetSuggere'));
			}
			var val = o['objetTexte'];
			if(vars.includes('objetTexte')) {
				$('.inputEcole' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'ObjetTexte'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputEcole' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputEcole' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputEcole' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'PageUrlApi'));
			}
			var val = o['ecoleCle'];
			if(vars.includes('ecoleCle')) {
				$('.inputEcole' + pk + 'EcoleCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'EcoleCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'EcoleCle'));
			}
			var val = o['saisonCles'];
			if(vars.includes('saisonCles')) {
				$('.inputEcole' + pk + 'SaisonCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'SaisonCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'SaisonCles'));
			}
			var val = o['sessionCles'];
			if(vars.includes('sessionCles')) {
				$('.inputEcole' + pk + 'SessionCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'SessionCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'SessionCles'));
			}
			var val = o['groupeAgeCles'];
			if(vars.includes('groupeAgeCles')) {
				$('.inputEcole' + pk + 'GroupeAgeCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'GroupeAgeCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'GroupeAgeCles'));
			}
			var val = o['blocCles'];
			if(vars.includes('blocCles')) {
				$('.inputEcole' + pk + 'BlocCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'BlocCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'BlocCles'));
			}
			var val = o['enfantCles'];
			if(vars.includes('enfantCles')) {
				$('.inputEcole' + pk + 'EnfantCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'EnfantCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'EnfantCles'));
			}
			var val = o['scolaireTri'];
			if(vars.includes('scolaireTri')) {
				$('.inputEcole' + pk + 'ScolaireTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'ScolaireTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'ScolaireTri'));
			}
			var val = o['ecoleTri'];
			if(vars.includes('ecoleTri')) {
				$('.inputEcole' + pk + 'EcoleTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'EcoleTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'EcoleTri'));
			}
			var val = o['ecoleNomCourt'];
			if(vars.includes('ecoleNomCourt')) {
				$('.inputEcole' + pk + 'EcoleNomCourt').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'EcoleNomCourt').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'EcoleNomCourt'));
			}
			var val = o['ecoleNomComplet'];
			if(vars.includes('ecoleNomComplet')) {
				$('.inputEcole' + pk + 'EcoleNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEcole' + pk + 'EcoleNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEcole' + pk + 'EcoleNomComplet'));
			}
		});
	}
}
