
// POST //

async function postMereScolaire($formulaireValeurs, success, error) {
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

	var valeurPersonnePrenom = $formulaireValeurs.find('.valeurPersonnePrenom').val();
	if(valeurPersonnePrenom != null && valeurPersonnePrenom !== '')
		vals['personnePrenom'] = valeurPersonnePrenom;

	var valeurFamilleNom = $formulaireValeurs.find('.valeurFamilleNom').val();
	if(valeurFamilleNom != null && valeurFamilleNom !== '')
		vals['familleNom'] = valeurFamilleNom;

	var valeurPersonnePrenomPrefere = $formulaireValeurs.find('.valeurPersonnePrenomPrefere').val();
	if(valeurPersonnePrenomPrefere != null && valeurPersonnePrenomPrefere !== '')
		vals['personnePrenomPrefere'] = valeurPersonnePrenomPrefere;

	var valeurPersonneMail = $formulaireValeurs.find('.valeurPersonneMail').val();
	if(valeurPersonneMail != null && valeurPersonneMail !== '')
		vals['personneMail'] = valeurPersonneMail;

	var valeurPersonneNumeroTelephone = $formulaireValeurs.find('.valeurPersonneNumeroTelephone').val();
	if(valeurPersonneNumeroTelephone != null && valeurPersonneNumeroTelephone !== '')
		vals['personneNumeroTelephone'] = valeurPersonneNumeroTelephone;

	var valeurPersonneOccupation = $formulaireValeurs.find('.valeurPersonneOccupation').val();
	if(valeurPersonneOccupation != null && valeurPersonneOccupation !== '')
		vals['personneOccupation'] = valeurPersonneOccupation;

	var valeurPersonneSms = $formulaireValeurs.find('.valeurPersonneSms').prop('checked');
	if(valeurPersonneSms != null && valeurPersonneSms !== '')
		vals['personneSms'] = valeurPersonneSms;

	var valeurPersonneRecevoirMail = $formulaireValeurs.find('.valeurPersonneRecevoirMail').prop('checked');
	if(valeurPersonneRecevoirMail != null && valeurPersonneRecevoirMail !== '')
		vals['personneRecevoirMail'] = valeurPersonneRecevoirMail;

	var valeurPersonneContactUrgence = $formulaireValeurs.find('.valeurPersonneContactUrgence').prop('checked');
	if(valeurPersonneContactUrgence != null && valeurPersonneContactUrgence !== '')
		vals['personneContactUrgence'] = valeurPersonneContactUrgence;

	var valeurPersonneChercher = $formulaireValeurs.find('.valeurPersonneChercher').prop('checked');
	if(valeurPersonneChercher != null && valeurPersonneChercher !== '')
		vals['personneChercher'] = valeurPersonneChercher;

	var valeurPhoto = $formulaireValeurs.find('.valeurPhoto').val();
	if(valeurPhoto != null && valeurPhoto !== '')
		vals['photo'] = valeurPhoto;

	var valeurInscriptionCles = [];
	$formulaireValeurs.find('input.valeurInscriptionCles:checked').each(function(index) {
		valeurInscriptionCles.push($(this).val());
	});
	if(valeurInscriptionCles.length > 0)
		vals['inscriptionCles'] = valeurInscriptionCles;

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
		url: '/api/mere'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postMereScolaireVals(vals, success, error) {
	$.ajax({
		url: '/api/mere'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportMereScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTImport_liste').val();
	if(json != null && json !== '')
		putimportMereScolaireVals(JSON.parse(json), success, error);
}

function putimportMereScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/mere/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTFusion //

async function putfusionMereScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTFusion_liste').val();
	if(json != null && json !== '')
		putfusionMereScolaireVals(JSON.parse(json), success, error);
}

function putfusionMereScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/mere/fusion'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopie //

async function putcopieMereScolaire($formulaireValeurs, pk, success, error) {
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

	var valeurPersonnePrenom = $formulaireValeurs.find('.valeurPersonnePrenom').val();
	if(valeurPersonnePrenom != null && valeurPersonnePrenom !== '')
		vals['personnePrenom'] = valeurPersonnePrenom;

	var valeurFamilleNom = $formulaireValeurs.find('.valeurFamilleNom').val();
	if(valeurFamilleNom != null && valeurFamilleNom !== '')
		vals['familleNom'] = valeurFamilleNom;

	var valeurPersonnePrenomPrefere = $formulaireValeurs.find('.valeurPersonnePrenomPrefere').val();
	if(valeurPersonnePrenomPrefere != null && valeurPersonnePrenomPrefere !== '')
		vals['personnePrenomPrefere'] = valeurPersonnePrenomPrefere;

	var valeurPersonneMail = $formulaireValeurs.find('.valeurPersonneMail').val();
	if(valeurPersonneMail != null && valeurPersonneMail !== '')
		vals['personneMail'] = valeurPersonneMail;

	var valeurPersonneNumeroTelephone = $formulaireValeurs.find('.valeurPersonneNumeroTelephone').val();
	if(valeurPersonneNumeroTelephone != null && valeurPersonneNumeroTelephone !== '')
		vals['personneNumeroTelephone'] = valeurPersonneNumeroTelephone;

	var valeurPersonneOccupation = $formulaireValeurs.find('.valeurPersonneOccupation').val();
	if(valeurPersonneOccupation != null && valeurPersonneOccupation !== '')
		vals['personneOccupation'] = valeurPersonneOccupation;

	var valeurPersonneSms = $formulaireValeurs.find('.valeurPersonneSms').prop('checked');
	if(valeurPersonneSms != null && valeurPersonneSms !== '')
		vals['personneSms'] = valeurPersonneSms;

	var valeurPersonneRecevoirMail = $formulaireValeurs.find('.valeurPersonneRecevoirMail').prop('checked');
	if(valeurPersonneRecevoirMail != null && valeurPersonneRecevoirMail !== '')
		vals['personneRecevoirMail'] = valeurPersonneRecevoirMail;

	var valeurPersonneContactUrgence = $formulaireValeurs.find('.valeurPersonneContactUrgence').prop('checked');
	if(valeurPersonneContactUrgence != null && valeurPersonneContactUrgence !== '')
		vals['personneContactUrgence'] = valeurPersonneContactUrgence;

	var valeurPersonneChercher = $formulaireValeurs.find('.valeurPersonneChercher').prop('checked');
	if(valeurPersonneChercher != null && valeurPersonneChercher !== '')
		vals['personneChercher'] = valeurPersonneChercher;

	var valeurPhoto = $formulaireValeurs.find('.valeurPhoto').val();
	if(valeurPhoto != null && valeurPhoto !== '')
		vals['photo'] = valeurPhoto;

	var valeurInscriptionCles = $formulaireValeurs.find('input.valeurInscriptionCles:checked').val();
	if(valeurInscriptionCles != null && valeurInscriptionCles !== '')
		vals['inscriptionCles'] = [valeurInscriptionCles];

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

	putcopieMereScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopieMereScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/mere/copie?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchMereScolaire($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchMereScolaireFiltres($formulaireFiltres);

	var vals = {};

	var valeurPk = $formulaireValeurs.find('.valeurPk').val();
	var removePk = $formulaireValeurs.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formulaireValeurs.find('.setPk').val();
	var addPk = $formulaireValeurs.find('.addPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formulaireValeurs.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valeurCree = $formulaireValeurs.find('.valeurCree').val();
	var removeCree = $formulaireValeurs.find('.removeCree').val() === 'true';
	var setCree = removeCree ? null : $formulaireValeurs.find('.setCree').val();
	var addCree = $formulaireValeurs.find('.addCree').val();
	if(removeCree || setCree != null && setCree !== '')
		vals['setCree'] = setCree;
	if(addCree != null && addCree !== '')
		vals['addCree'] = addCree;
	var removeCree = $formulaireValeurs.find('.removeCree').val();
	if(removeCree != null && removeCree !== '')
		vals['removeCree'] = removeCree;

	var valeurModifie = $formulaireValeurs.find('.valeurModifie').val();
	var removeModifie = $formulaireValeurs.find('.removeModifie').val() === 'true';
	var setModifie = removeModifie ? null : $formulaireValeurs.find('.setModifie').val();
	var addModifie = $formulaireValeurs.find('.addModifie').val();
	if(removeModifie || setModifie != null && setModifie !== '')
		vals['setModifie'] = setModifie;
	if(addModifie != null && addModifie !== '')
		vals['addModifie'] = addModifie;
	var removeModifie = $formulaireValeurs.find('.removeModifie').val();
	if(removeModifie != null && removeModifie !== '')
		vals['removeModifie'] = removeModifie;

	var valeurObjetId = $formulaireValeurs.find('.valeurObjetId').val();
	var removeObjetId = $formulaireValeurs.find('.removeObjetId').val() === 'true';
	var setObjetId = removeObjetId ? null : $formulaireValeurs.find('.setObjetId').val();
	var addObjetId = $formulaireValeurs.find('.addObjetId').val();
	if(removeObjetId || setObjetId != null && setObjetId !== '')
		vals['setObjetId'] = setObjetId;
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
	var setArchive = removeArchive ? null : valeurArchive;
	var addArchive = $formulaireValeurs.find('.addArchive').prop('checked');
	if(removeArchive || setArchive != null && setArchive !== '')
		vals['setArchive'] = setArchive;
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
	var setSupprime = removeSupprime ? null : valeurSupprime;
	var addSupprime = $formulaireValeurs.find('.addSupprime').prop('checked');
	if(removeSupprime || setSupprime != null && setSupprime !== '')
		vals['setSupprime'] = setSupprime;
	if(addSupprime != null && addSupprime !== '')
		vals['addSupprime'] = addSupprime;
	var removeSupprime = $formulaireValeurs.find('.removeSupprime').prop('checked');
	if(removeSupprime != null && removeSupprime !== '')
		vals['removeSupprime'] = removeSupprime;

	var valeurPersonnePrenom = $formulaireValeurs.find('.valeurPersonnePrenom').val();
	var removePersonnePrenom = $formulaireValeurs.find('.removePersonnePrenom').val() === 'true';
	var setPersonnePrenom = removePersonnePrenom ? null : $formulaireValeurs.find('.setPersonnePrenom').val();
	var addPersonnePrenom = $formulaireValeurs.find('.addPersonnePrenom').val();
	if(removePersonnePrenom || setPersonnePrenom != null && setPersonnePrenom !== '')
		vals['setPersonnePrenom'] = setPersonnePrenom;
	if(addPersonnePrenom != null && addPersonnePrenom !== '')
		vals['addPersonnePrenom'] = addPersonnePrenom;
	var removePersonnePrenom = $formulaireValeurs.find('.removePersonnePrenom').val();
	if(removePersonnePrenom != null && removePersonnePrenom !== '')
		vals['removePersonnePrenom'] = removePersonnePrenom;

	var valeurFamilleNom = $formulaireValeurs.find('.valeurFamilleNom').val();
	var removeFamilleNom = $formulaireValeurs.find('.removeFamilleNom').val() === 'true';
	var setFamilleNom = removeFamilleNom ? null : $formulaireValeurs.find('.setFamilleNom').val();
	var addFamilleNom = $formulaireValeurs.find('.addFamilleNom').val();
	if(removeFamilleNom || setFamilleNom != null && setFamilleNom !== '')
		vals['setFamilleNom'] = setFamilleNom;
	if(addFamilleNom != null && addFamilleNom !== '')
		vals['addFamilleNom'] = addFamilleNom;
	var removeFamilleNom = $formulaireValeurs.find('.removeFamilleNom').val();
	if(removeFamilleNom != null && removeFamilleNom !== '')
		vals['removeFamilleNom'] = removeFamilleNom;

	var valeurPersonnePrenomPrefere = $formulaireValeurs.find('.valeurPersonnePrenomPrefere').val();
	var removePersonnePrenomPrefere = $formulaireValeurs.find('.removePersonnePrenomPrefere').val() === 'true';
	var setPersonnePrenomPrefere = removePersonnePrenomPrefere ? null : $formulaireValeurs.find('.setPersonnePrenomPrefere').val();
	var addPersonnePrenomPrefere = $formulaireValeurs.find('.addPersonnePrenomPrefere').val();
	if(removePersonnePrenomPrefere || setPersonnePrenomPrefere != null && setPersonnePrenomPrefere !== '')
		vals['setPersonnePrenomPrefere'] = setPersonnePrenomPrefere;
	if(addPersonnePrenomPrefere != null && addPersonnePrenomPrefere !== '')
		vals['addPersonnePrenomPrefere'] = addPersonnePrenomPrefere;
	var removePersonnePrenomPrefere = $formulaireValeurs.find('.removePersonnePrenomPrefere').val();
	if(removePersonnePrenomPrefere != null && removePersonnePrenomPrefere !== '')
		vals['removePersonnePrenomPrefere'] = removePersonnePrenomPrefere;

	var valeurPersonneMail = $formulaireValeurs.find('.valeurPersonneMail').val();
	var removePersonneMail = $formulaireValeurs.find('.removePersonneMail').val() === 'true';
	var setPersonneMail = removePersonneMail ? null : $formulaireValeurs.find('.setPersonneMail').val();
	var addPersonneMail = $formulaireValeurs.find('.addPersonneMail').val();
	if(removePersonneMail || setPersonneMail != null && setPersonneMail !== '')
		vals['setPersonneMail'] = setPersonneMail;
	if(addPersonneMail != null && addPersonneMail !== '')
		vals['addPersonneMail'] = addPersonneMail;
	var removePersonneMail = $formulaireValeurs.find('.removePersonneMail').val();
	if(removePersonneMail != null && removePersonneMail !== '')
		vals['removePersonneMail'] = removePersonneMail;

	var valeurPersonneNumeroTelephone = $formulaireValeurs.find('.valeurPersonneNumeroTelephone').val();
	var removePersonneNumeroTelephone = $formulaireValeurs.find('.removePersonneNumeroTelephone').val() === 'true';
	var setPersonneNumeroTelephone = removePersonneNumeroTelephone ? null : $formulaireValeurs.find('.setPersonneNumeroTelephone').val();
	var addPersonneNumeroTelephone = $formulaireValeurs.find('.addPersonneNumeroTelephone').val();
	if(removePersonneNumeroTelephone || setPersonneNumeroTelephone != null && setPersonneNumeroTelephone !== '')
		vals['setPersonneNumeroTelephone'] = setPersonneNumeroTelephone;
	if(addPersonneNumeroTelephone != null && addPersonneNumeroTelephone !== '')
		vals['addPersonneNumeroTelephone'] = addPersonneNumeroTelephone;
	var removePersonneNumeroTelephone = $formulaireValeurs.find('.removePersonneNumeroTelephone').val();
	if(removePersonneNumeroTelephone != null && removePersonneNumeroTelephone !== '')
		vals['removePersonneNumeroTelephone'] = removePersonneNumeroTelephone;

	var valeurPersonneOccupation = $formulaireValeurs.find('.valeurPersonneOccupation').val();
	var removePersonneOccupation = $formulaireValeurs.find('.removePersonneOccupation').val() === 'true';
	var setPersonneOccupation = removePersonneOccupation ? null : $formulaireValeurs.find('.setPersonneOccupation').val();
	var addPersonneOccupation = $formulaireValeurs.find('.addPersonneOccupation').val();
	if(removePersonneOccupation || setPersonneOccupation != null && setPersonneOccupation !== '')
		vals['setPersonneOccupation'] = setPersonneOccupation;
	if(addPersonneOccupation != null && addPersonneOccupation !== '')
		vals['addPersonneOccupation'] = addPersonneOccupation;
	var removePersonneOccupation = $formulaireValeurs.find('.removePersonneOccupation').val();
	if(removePersonneOccupation != null && removePersonneOccupation !== '')
		vals['removePersonneOccupation'] = removePersonneOccupation;

	var valeurPersonneSms = $formulaireValeurs.find('.valeurPersonneSms').prop('checked');
	var removePersonneSms = $formulaireValeurs.find('.removePersonneSms').val() === 'true';
	var valeurPersonneSmsSelectVal = $formulaireValeurs.find('select.setPersonneSms').val();
	var valeurPersonneSms = null;
	if(valeurPersonneSmsSelectVal != null && valeurPersonneSmsSelectVal !== '')
		valeurPersonneSms = valeurPersonneSmsSelectVal == 'true';
	var setPersonneSms = removePersonneSms ? null : valeurPersonneSms;
	var addPersonneSms = $formulaireValeurs.find('.addPersonneSms').prop('checked');
	if(removePersonneSms || setPersonneSms != null && setPersonneSms !== '')
		vals['setPersonneSms'] = setPersonneSms;
	if(addPersonneSms != null && addPersonneSms !== '')
		vals['addPersonneSms'] = addPersonneSms;
	var removePersonneSms = $formulaireValeurs.find('.removePersonneSms').prop('checked');
	if(removePersonneSms != null && removePersonneSms !== '')
		vals['removePersonneSms'] = removePersonneSms;

	var valeurPersonneRecevoirMail = $formulaireValeurs.find('.valeurPersonneRecevoirMail').prop('checked');
	var removePersonneRecevoirMail = $formulaireValeurs.find('.removePersonneRecevoirMail').val() === 'true';
	var valeurPersonneRecevoirMailSelectVal = $formulaireValeurs.find('select.setPersonneRecevoirMail').val();
	var valeurPersonneRecevoirMail = null;
	if(valeurPersonneRecevoirMailSelectVal != null && valeurPersonneRecevoirMailSelectVal !== '')
		valeurPersonneRecevoirMail = valeurPersonneRecevoirMailSelectVal == 'true';
	var setPersonneRecevoirMail = removePersonneRecevoirMail ? null : valeurPersonneRecevoirMail;
	var addPersonneRecevoirMail = $formulaireValeurs.find('.addPersonneRecevoirMail').prop('checked');
	if(removePersonneRecevoirMail || setPersonneRecevoirMail != null && setPersonneRecevoirMail !== '')
		vals['setPersonneRecevoirMail'] = setPersonneRecevoirMail;
	if(addPersonneRecevoirMail != null && addPersonneRecevoirMail !== '')
		vals['addPersonneRecevoirMail'] = addPersonneRecevoirMail;
	var removePersonneRecevoirMail = $formulaireValeurs.find('.removePersonneRecevoirMail').prop('checked');
	if(removePersonneRecevoirMail != null && removePersonneRecevoirMail !== '')
		vals['removePersonneRecevoirMail'] = removePersonneRecevoirMail;

	var valeurPersonneContactUrgence = $formulaireValeurs.find('.valeurPersonneContactUrgence').prop('checked');
	var removePersonneContactUrgence = $formulaireValeurs.find('.removePersonneContactUrgence').val() === 'true';
	var valeurPersonneContactUrgenceSelectVal = $formulaireValeurs.find('select.setPersonneContactUrgence').val();
	var valeurPersonneContactUrgence = null;
	if(valeurPersonneContactUrgenceSelectVal != null && valeurPersonneContactUrgenceSelectVal !== '')
		valeurPersonneContactUrgence = valeurPersonneContactUrgenceSelectVal == 'true';
	var setPersonneContactUrgence = removePersonneContactUrgence ? null : valeurPersonneContactUrgence;
	var addPersonneContactUrgence = $formulaireValeurs.find('.addPersonneContactUrgence').prop('checked');
	if(removePersonneContactUrgence || setPersonneContactUrgence != null && setPersonneContactUrgence !== '')
		vals['setPersonneContactUrgence'] = setPersonneContactUrgence;
	if(addPersonneContactUrgence != null && addPersonneContactUrgence !== '')
		vals['addPersonneContactUrgence'] = addPersonneContactUrgence;
	var removePersonneContactUrgence = $formulaireValeurs.find('.removePersonneContactUrgence').prop('checked');
	if(removePersonneContactUrgence != null && removePersonneContactUrgence !== '')
		vals['removePersonneContactUrgence'] = removePersonneContactUrgence;

	var valeurPersonneChercher = $formulaireValeurs.find('.valeurPersonneChercher').prop('checked');
	var removePersonneChercher = $formulaireValeurs.find('.removePersonneChercher').val() === 'true';
	var valeurPersonneChercherSelectVal = $formulaireValeurs.find('select.setPersonneChercher').val();
	var valeurPersonneChercher = null;
	if(valeurPersonneChercherSelectVal != null && valeurPersonneChercherSelectVal !== '')
		valeurPersonneChercher = valeurPersonneChercherSelectVal == 'true';
	var setPersonneChercher = removePersonneChercher ? null : valeurPersonneChercher;
	var addPersonneChercher = $formulaireValeurs.find('.addPersonneChercher').prop('checked');
	if(removePersonneChercher || setPersonneChercher != null && setPersonneChercher !== '')
		vals['setPersonneChercher'] = setPersonneChercher;
	if(addPersonneChercher != null && addPersonneChercher !== '')
		vals['addPersonneChercher'] = addPersonneChercher;
	var removePersonneChercher = $formulaireValeurs.find('.removePersonneChercher').prop('checked');
	if(removePersonneChercher != null && removePersonneChercher !== '')
		vals['removePersonneChercher'] = removePersonneChercher;

	var valeurPhoto = $formulaireValeurs.find('.valeurPhoto').val();
	var removePhoto = $formulaireValeurs.find('.removePhoto').val() === 'true';
	var setPhoto = removePhoto ? null : $formulaireValeurs.find('.setPhoto').val();
	var addPhoto = $formulaireValeurs.find('.addPhoto').val();
	if(removePhoto || setPhoto != null && setPhoto !== '')
		vals['setPhoto'] = setPhoto;
	if(addPhoto != null && addPhoto !== '')
		vals['addPhoto'] = addPhoto;
	var removePhoto = $formulaireValeurs.find('.removePhoto').val();
	if(removePhoto != null && removePhoto !== '')
		vals['removePhoto'] = removePhoto;

	var valeurInscriptionCles = $formulaireValeurs.find('input.valeurInscriptionCles:checked').val();
	if(valeurInscriptionCles != null && valeurInscriptionCles !== '')
		vals['addInscriptionCles'] = valeurInscriptionCles;

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	var removeInheritPk = $formulaireValeurs.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formulaireValeurs.find('.setInheritPk').val();
	var addInheritPk = $formulaireValeurs.find('.addInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formulaireValeurs.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valeurSessionId = $formulaireValeurs.find('.valeurSessionId').val();
	var removeSessionId = $formulaireValeurs.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formulaireValeurs.find('.setSessionId').val();
	var addSessionId = $formulaireValeurs.find('.addSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formulaireValeurs.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valeurUtilisateurId = $formulaireValeurs.find('.valeurUtilisateurId').val();
	var removeUtilisateurId = $formulaireValeurs.find('.removeUtilisateurId').val() === 'true';
	var setUtilisateurId = removeUtilisateurId ? null : $formulaireValeurs.find('.setUtilisateurId').val();
	var addUtilisateurId = $formulaireValeurs.find('.addUtilisateurId').val();
	if(removeUtilisateurId || setUtilisateurId != null && setUtilisateurId !== '')
		vals['setUtilisateurId'] = setUtilisateurId;
	if(addUtilisateurId != null && addUtilisateurId !== '')
		vals['addUtilisateurId'] = addUtilisateurId;
	var removeUtilisateurId = $formulaireValeurs.find('.removeUtilisateurId').val();
	if(removeUtilisateurId != null && removeUtilisateurId !== '')
		vals['removeUtilisateurId'] = removeUtilisateurId;

	var valeurUtilisateurCle = $formulaireValeurs.find('.valeurUtilisateurCle').val();
	var removeUtilisateurCle = $formulaireValeurs.find('.removeUtilisateurCle').val() === 'true';
	var setUtilisateurCle = removeUtilisateurCle ? null : $formulaireValeurs.find('.setUtilisateurCle').val();
	var addUtilisateurCle = $formulaireValeurs.find('.addUtilisateurCle').val();
	if(removeUtilisateurCle || setUtilisateurCle != null && setUtilisateurCle !== '')
		vals['setUtilisateurCle'] = setUtilisateurCle;
	if(addUtilisateurCle != null && addUtilisateurCle !== '')
		vals['addUtilisateurCle'] = addUtilisateurCle;
	var removeUtilisateurCle = $formulaireValeurs.find('.removeUtilisateurCle').val();
	if(removeUtilisateurCle != null && removeUtilisateurCle !== '')
		vals['removeUtilisateurCle'] = removeUtilisateurCle;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	var removeObjetTitre = $formulaireValeurs.find('.removeObjetTitre').val() === 'true';
	var setObjetTitre = removeObjetTitre ? null : $formulaireValeurs.find('.setObjetTitre').val();
	var addObjetTitre = $formulaireValeurs.find('.addObjetTitre').val();
	if(removeObjetTitre || setObjetTitre != null && setObjetTitre !== '')
		vals['setObjetTitre'] = setObjetTitre;
	if(addObjetTitre != null && addObjetTitre !== '')
		vals['addObjetTitre'] = addObjetTitre;
	var removeObjetTitre = $formulaireValeurs.find('.removeObjetTitre').val();
	if(removeObjetTitre != null && removeObjetTitre !== '')
		vals['removeObjetTitre'] = removeObjetTitre;

	patchMereScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchMereScolaireFiltres($formulaireFiltres) {
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

		var filtrePersonnePrenom = $formulaireFiltres.find('.valeurPersonnePrenom').val();
		if(filtrePersonnePrenom != null && filtrePersonnePrenom !== '')
			filtres.push({ name: 'fq', value: 'personnePrenom:' + filtrePersonnePrenom });

		var filtreFamilleNom = $formulaireFiltres.find('.valeurFamilleNom').val();
		if(filtreFamilleNom != null && filtreFamilleNom !== '')
			filtres.push({ name: 'fq', value: 'familleNom:' + filtreFamilleNom });

		var filtrePersonnePrenomPrefere = $formulaireFiltres.find('.valeurPersonnePrenomPrefere').val();
		if(filtrePersonnePrenomPrefere != null && filtrePersonnePrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'personnePrenomPrefere:' + filtrePersonnePrenomPrefere });

		var filtrePersonneMail = $formulaireFiltres.find('.valeurPersonneMail').val();
		if(filtrePersonneMail != null && filtrePersonneMail !== '')
			filtres.push({ name: 'fq', value: 'personneMail:' + filtrePersonneMail });

		var filtrePersonneNumeroTelephone = $formulaireFiltres.find('.valeurPersonneNumeroTelephone').val();
		if(filtrePersonneNumeroTelephone != null && filtrePersonneNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'personneNumeroTelephone:' + filtrePersonneNumeroTelephone });

		var filtrePersonneOccupation = $formulaireFiltres.find('.valeurPersonneOccupation').val();
		if(filtrePersonneOccupation != null && filtrePersonneOccupation !== '')
			filtres.push({ name: 'fq', value: 'personneOccupation:' + filtrePersonneOccupation });

		var $filtrePersonneSmsCheckbox = $formulaireFiltres.find('input.valeurPersonneSms[type = "checkbox"]');
		var $filtrePersonneSmsSelect = $formulaireFiltres.find('select.valeurPersonneSms');
		var filtrePersonneSms = $filtrePersonneSmsSelect.length ? $filtrePersonneSmsSelect.val() : $filtrePersonneSmsCheckbox.prop('checked');
		var filtrePersonneSmsSelectVal = $formulaireFiltres.find('select.filtrePersonneSms').val();
		var filtrePersonneSms = null;
		if(filtrePersonneSmsSelectVal !== '')
			filtrePersonneSms = filtrePersonneSmsSelectVal == 'true';
		if(filtrePersonneSms != null && filtrePersonneSms === true)
			filtres.push({ name: 'fq', value: 'personneSms:' + filtrePersonneSms });

		var $filtrePersonneRecevoirMailCheckbox = $formulaireFiltres.find('input.valeurPersonneRecevoirMail[type = "checkbox"]');
		var $filtrePersonneRecevoirMailSelect = $formulaireFiltres.find('select.valeurPersonneRecevoirMail');
		var filtrePersonneRecevoirMail = $filtrePersonneRecevoirMailSelect.length ? $filtrePersonneRecevoirMailSelect.val() : $filtrePersonneRecevoirMailCheckbox.prop('checked');
		var filtrePersonneRecevoirMailSelectVal = $formulaireFiltres.find('select.filtrePersonneRecevoirMail').val();
		var filtrePersonneRecevoirMail = null;
		if(filtrePersonneRecevoirMailSelectVal !== '')
			filtrePersonneRecevoirMail = filtrePersonneRecevoirMailSelectVal == 'true';
		if(filtrePersonneRecevoirMail != null && filtrePersonneRecevoirMail === true)
			filtres.push({ name: 'fq', value: 'personneRecevoirMail:' + filtrePersonneRecevoirMail });

		var $filtrePersonneContactUrgenceCheckbox = $formulaireFiltres.find('input.valeurPersonneContactUrgence[type = "checkbox"]');
		var $filtrePersonneContactUrgenceSelect = $formulaireFiltres.find('select.valeurPersonneContactUrgence');
		var filtrePersonneContactUrgence = $filtrePersonneContactUrgenceSelect.length ? $filtrePersonneContactUrgenceSelect.val() : $filtrePersonneContactUrgenceCheckbox.prop('checked');
		var filtrePersonneContactUrgenceSelectVal = $formulaireFiltres.find('select.filtrePersonneContactUrgence').val();
		var filtrePersonneContactUrgence = null;
		if(filtrePersonneContactUrgenceSelectVal !== '')
			filtrePersonneContactUrgence = filtrePersonneContactUrgenceSelectVal == 'true';
		if(filtrePersonneContactUrgence != null && filtrePersonneContactUrgence === true)
			filtres.push({ name: 'fq', value: 'personneContactUrgence:' + filtrePersonneContactUrgence });

		var $filtrePersonneChercherCheckbox = $formulaireFiltres.find('input.valeurPersonneChercher[type = "checkbox"]');
		var $filtrePersonneChercherSelect = $formulaireFiltres.find('select.valeurPersonneChercher');
		var filtrePersonneChercher = $filtrePersonneChercherSelect.length ? $filtrePersonneChercherSelect.val() : $filtrePersonneChercherCheckbox.prop('checked');
		var filtrePersonneChercherSelectVal = $formulaireFiltres.find('select.filtrePersonneChercher').val();
		var filtrePersonneChercher = null;
		if(filtrePersonneChercherSelectVal !== '')
			filtrePersonneChercher = filtrePersonneChercherSelectVal == 'true';
		if(filtrePersonneChercher != null && filtrePersonneChercher === true)
			filtres.push({ name: 'fq', value: 'personneChercher:' + filtrePersonneChercher });

		var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
		if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

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

		var filtreMereCle = $formulaireFiltres.find('.valeurMereCle').val();
		if(filtreMereCle != null && filtreMereCle !== '')
			filtres.push({ name: 'fq', value: 'mereCle:' + filtreMereCle });

		var filtreFamilleTri = $formulaireFiltres.find('.valeurFamilleTri').val();
		if(filtreFamilleTri != null && filtreFamilleTri !== '')
			filtres.push({ name: 'fq', value: 'familleTri:' + filtreFamilleTri });

		var filtreMereTri = $formulaireFiltres.find('.valeurMereTri').val();
		if(filtreMereTri != null && filtreMereTri !== '')
			filtres.push({ name: 'fq', value: 'mereTri:' + filtreMereTri });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtreEcoleCles = $formulaireFiltres.find('.valeurEcoleCles').val();
		if(filtreEcoleCles != null && filtreEcoleCles !== '')
			filtres.push({ name: 'fq', value: 'ecoleCles:' + filtreEcoleCles });

		var filtreAnneeCles = $formulaireFiltres.find('.valeurAnneeCles').val();
		if(filtreAnneeCles != null && filtreAnneeCles !== '')
			filtres.push({ name: 'fq', value: 'anneeCles:' + filtreAnneeCles });

		var filtreSaisonCles = $formulaireFiltres.find('.valeurSaisonCles').val();
		if(filtreSaisonCles != null && filtreSaisonCles !== '')
			filtres.push({ name: 'fq', value: 'saisonCles:' + filtreSaisonCles });

		var filtreSessionCles = $formulaireFiltres.find('.valeurSessionCles').val();
		if(filtreSessionCles != null && filtreSessionCles !== '')
			filtres.push({ name: 'fq', value: 'sessionCles:' + filtreSessionCles });

		var filtreAgeCles = $formulaireFiltres.find('.valeurAgeCles').val();
		if(filtreAgeCles != null && filtreAgeCles !== '')
			filtres.push({ name: 'fq', value: 'ageCles:' + filtreAgeCles });

		var filtrePersonneNomComplet = $formulaireFiltres.find('.valeurPersonneNomComplet').val();
		if(filtrePersonneNomComplet != null && filtrePersonneNomComplet !== '')
			filtres.push({ name: 'fq', value: 'personneNomComplet:' + filtrePersonneNomComplet });

		var filtrePersonneNomCompletPrefere = $formulaireFiltres.find('.valeurPersonneNomCompletPrefere').val();
		if(filtrePersonneNomCompletPrefere != null && filtrePersonneNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'personneNomCompletPrefere:' + filtrePersonneNomCompletPrefere });

		var filtrePersonneNomFormel = $formulaireFiltres.find('.valeurPersonneNomFormel').val();
		if(filtrePersonneNomFormel != null && filtrePersonneNomFormel !== '')
			filtres.push({ name: 'fq', value: 'personneNomFormel:' + filtrePersonneNomFormel });

		var filtrePersonneRelation = $formulaireFiltres.find('.valeurPersonneRelation').val();
		if(filtrePersonneRelation != null && filtrePersonneRelation !== '')
			filtres.push({ name: 'fq', value: 'personneRelation:' + filtrePersonneRelation });

		var filtreMereNomComplet = $formulaireFiltres.find('.valeurMereNomComplet').val();
		if(filtreMereNomComplet != null && filtreMereNomComplet !== '')
			filtres.push({ name: 'fq', value: 'mereNomComplet:' + filtreMereNomComplet });
	}
	return filtres;
}

function patchMereScolaireVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchMereScolaireVals(filtres, vals, success, error);
}

function patchMereScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/mere?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getMereScolaire(pk) {
	$.ajax({
		url: '/api/mere/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Recherche //

async function rechercheMereScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheMereScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheMereScolaireVals(filtres, success, error);
}

function rechercheMereScolaireFiltres($formulaireFiltres) {
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

		var filtrePersonnePrenom = $formulaireFiltres.find('.valeurPersonnePrenom').val();
		if(filtrePersonnePrenom != null && filtrePersonnePrenom !== '')
			filtres.push({ name: 'fq', value: 'personnePrenom:' + filtrePersonnePrenom });

		var filtreFamilleNom = $formulaireFiltres.find('.valeurFamilleNom').val();
		if(filtreFamilleNom != null && filtreFamilleNom !== '')
			filtres.push({ name: 'fq', value: 'familleNom:' + filtreFamilleNom });

		var filtrePersonnePrenomPrefere = $formulaireFiltres.find('.valeurPersonnePrenomPrefere').val();
		if(filtrePersonnePrenomPrefere != null && filtrePersonnePrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'personnePrenomPrefere:' + filtrePersonnePrenomPrefere });

		var filtrePersonneMail = $formulaireFiltres.find('.valeurPersonneMail').val();
		if(filtrePersonneMail != null && filtrePersonneMail !== '')
			filtres.push({ name: 'fq', value: 'personneMail:' + filtrePersonneMail });

		var filtrePersonneNumeroTelephone = $formulaireFiltres.find('.valeurPersonneNumeroTelephone').val();
		if(filtrePersonneNumeroTelephone != null && filtrePersonneNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'personneNumeroTelephone:' + filtrePersonneNumeroTelephone });

		var filtrePersonneOccupation = $formulaireFiltres.find('.valeurPersonneOccupation').val();
		if(filtrePersonneOccupation != null && filtrePersonneOccupation !== '')
			filtres.push({ name: 'fq', value: 'personneOccupation:' + filtrePersonneOccupation });

		var $filtrePersonneSmsCheckbox = $formulaireFiltres.find('input.valeurPersonneSms[type = "checkbox"]');
		var $filtrePersonneSmsSelect = $formulaireFiltres.find('select.valeurPersonneSms');
		var filtrePersonneSms = $filtrePersonneSmsSelect.length ? $filtrePersonneSmsSelect.val() : $filtrePersonneSmsCheckbox.prop('checked');
		var filtrePersonneSmsSelectVal = $formulaireFiltres.find('select.filtrePersonneSms').val();
		var filtrePersonneSms = null;
		if(filtrePersonneSmsSelectVal !== '')
			filtrePersonneSms = filtrePersonneSmsSelectVal == 'true';
		if(filtrePersonneSms != null && filtrePersonneSms === true)
			filtres.push({ name: 'fq', value: 'personneSms:' + filtrePersonneSms });

		var $filtrePersonneRecevoirMailCheckbox = $formulaireFiltres.find('input.valeurPersonneRecevoirMail[type = "checkbox"]');
		var $filtrePersonneRecevoirMailSelect = $formulaireFiltres.find('select.valeurPersonneRecevoirMail');
		var filtrePersonneRecevoirMail = $filtrePersonneRecevoirMailSelect.length ? $filtrePersonneRecevoirMailSelect.val() : $filtrePersonneRecevoirMailCheckbox.prop('checked');
		var filtrePersonneRecevoirMailSelectVal = $formulaireFiltres.find('select.filtrePersonneRecevoirMail').val();
		var filtrePersonneRecevoirMail = null;
		if(filtrePersonneRecevoirMailSelectVal !== '')
			filtrePersonneRecevoirMail = filtrePersonneRecevoirMailSelectVal == 'true';
		if(filtrePersonneRecevoirMail != null && filtrePersonneRecevoirMail === true)
			filtres.push({ name: 'fq', value: 'personneRecevoirMail:' + filtrePersonneRecevoirMail });

		var $filtrePersonneContactUrgenceCheckbox = $formulaireFiltres.find('input.valeurPersonneContactUrgence[type = "checkbox"]');
		var $filtrePersonneContactUrgenceSelect = $formulaireFiltres.find('select.valeurPersonneContactUrgence');
		var filtrePersonneContactUrgence = $filtrePersonneContactUrgenceSelect.length ? $filtrePersonneContactUrgenceSelect.val() : $filtrePersonneContactUrgenceCheckbox.prop('checked');
		var filtrePersonneContactUrgenceSelectVal = $formulaireFiltres.find('select.filtrePersonneContactUrgence').val();
		var filtrePersonneContactUrgence = null;
		if(filtrePersonneContactUrgenceSelectVal !== '')
			filtrePersonneContactUrgence = filtrePersonneContactUrgenceSelectVal == 'true';
		if(filtrePersonneContactUrgence != null && filtrePersonneContactUrgence === true)
			filtres.push({ name: 'fq', value: 'personneContactUrgence:' + filtrePersonneContactUrgence });

		var $filtrePersonneChercherCheckbox = $formulaireFiltres.find('input.valeurPersonneChercher[type = "checkbox"]');
		var $filtrePersonneChercherSelect = $formulaireFiltres.find('select.valeurPersonneChercher');
		var filtrePersonneChercher = $filtrePersonneChercherSelect.length ? $filtrePersonneChercherSelect.val() : $filtrePersonneChercherCheckbox.prop('checked');
		var filtrePersonneChercherSelectVal = $formulaireFiltres.find('select.filtrePersonneChercher').val();
		var filtrePersonneChercher = null;
		if(filtrePersonneChercherSelectVal !== '')
			filtrePersonneChercher = filtrePersonneChercherSelectVal == 'true';
		if(filtrePersonneChercher != null && filtrePersonneChercher === true)
			filtres.push({ name: 'fq', value: 'personneChercher:' + filtrePersonneChercher });

		var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
		if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

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

		var filtreMereCle = $formulaireFiltres.find('.valeurMereCle').val();
		if(filtreMereCle != null && filtreMereCle !== '')
			filtres.push({ name: 'fq', value: 'mereCle:' + filtreMereCle });

		var filtreFamilleTri = $formulaireFiltres.find('.valeurFamilleTri').val();
		if(filtreFamilleTri != null && filtreFamilleTri !== '')
			filtres.push({ name: 'fq', value: 'familleTri:' + filtreFamilleTri });

		var filtreMereTri = $formulaireFiltres.find('.valeurMereTri').val();
		if(filtreMereTri != null && filtreMereTri !== '')
			filtres.push({ name: 'fq', value: 'mereTri:' + filtreMereTri });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtreEcoleCles = $formulaireFiltres.find('.valeurEcoleCles').val();
		if(filtreEcoleCles != null && filtreEcoleCles !== '')
			filtres.push({ name: 'fq', value: 'ecoleCles:' + filtreEcoleCles });

		var filtreAnneeCles = $formulaireFiltres.find('.valeurAnneeCles').val();
		if(filtreAnneeCles != null && filtreAnneeCles !== '')
			filtres.push({ name: 'fq', value: 'anneeCles:' + filtreAnneeCles });

		var filtreSaisonCles = $formulaireFiltres.find('.valeurSaisonCles').val();
		if(filtreSaisonCles != null && filtreSaisonCles !== '')
			filtres.push({ name: 'fq', value: 'saisonCles:' + filtreSaisonCles });

		var filtreSessionCles = $formulaireFiltres.find('.valeurSessionCles').val();
		if(filtreSessionCles != null && filtreSessionCles !== '')
			filtres.push({ name: 'fq', value: 'sessionCles:' + filtreSessionCles });

		var filtreAgeCles = $formulaireFiltres.find('.valeurAgeCles').val();
		if(filtreAgeCles != null && filtreAgeCles !== '')
			filtres.push({ name: 'fq', value: 'ageCles:' + filtreAgeCles });

		var filtrePersonneNomComplet = $formulaireFiltres.find('.valeurPersonneNomComplet').val();
		if(filtrePersonneNomComplet != null && filtrePersonneNomComplet !== '')
			filtres.push({ name: 'fq', value: 'personneNomComplet:' + filtrePersonneNomComplet });

		var filtrePersonneNomCompletPrefere = $formulaireFiltres.find('.valeurPersonneNomCompletPrefere').val();
		if(filtrePersonneNomCompletPrefere != null && filtrePersonneNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'personneNomCompletPrefere:' + filtrePersonneNomCompletPrefere });

		var filtrePersonneNomFormel = $formulaireFiltres.find('.valeurPersonneNomFormel').val();
		if(filtrePersonneNomFormel != null && filtrePersonneNomFormel !== '')
			filtres.push({ name: 'fq', value: 'personneNomFormel:' + filtrePersonneNomFormel });

		var filtrePersonneRelation = $formulaireFiltres.find('.valeurPersonneRelation').val();
		if(filtrePersonneRelation != null && filtrePersonneRelation !== '')
			filtres.push({ name: 'fq', value: 'personneRelation:' + filtrePersonneRelation });

		var filtreMereNomComplet = $formulaireFiltres.find('.valeurMereNomComplet').val();
		if(filtreMereNomComplet != null && filtreMereNomComplet !== '')
			filtres.push({ name: 'fq', value: 'mereNomComplet:' + filtreMereNomComplet });
	}
	return filtres;
}

function rechercheMereScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/mere?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereMereScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-female ');
			var $span = $('<span>').attr('class', '').text(o['mereNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherMereScolaireVals($formulaireFiltres, success, error);
}

function suggereMereScolaireInscriptionCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['mereCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCles_' + pk + '_mereCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurInscriptionCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_inscriptionCles_" + pk + "_mereCles_" + o['pk'] + "'); patchMereScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'InscriptionCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#MereScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheInscriptionScolaireVals(filtres, success, error);
}

// RechercheAdmin //

async function rechercheadminMereScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheadminMereScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheadminMereScolaireVals(filtres, success, error);
}

function rechercheadminMereScolaireFiltres($formulaireFiltres) {
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

		var filtrePersonnePrenom = $formulaireFiltres.find('.valeurPersonnePrenom').val();
		if(filtrePersonnePrenom != null && filtrePersonnePrenom !== '')
			filtres.push({ name: 'fq', value: 'personnePrenom:' + filtrePersonnePrenom });

		var filtreFamilleNom = $formulaireFiltres.find('.valeurFamilleNom').val();
		if(filtreFamilleNom != null && filtreFamilleNom !== '')
			filtres.push({ name: 'fq', value: 'familleNom:' + filtreFamilleNom });

		var filtrePersonnePrenomPrefere = $formulaireFiltres.find('.valeurPersonnePrenomPrefere').val();
		if(filtrePersonnePrenomPrefere != null && filtrePersonnePrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'personnePrenomPrefere:' + filtrePersonnePrenomPrefere });

		var filtrePersonneMail = $formulaireFiltres.find('.valeurPersonneMail').val();
		if(filtrePersonneMail != null && filtrePersonneMail !== '')
			filtres.push({ name: 'fq', value: 'personneMail:' + filtrePersonneMail });

		var filtrePersonneNumeroTelephone = $formulaireFiltres.find('.valeurPersonneNumeroTelephone').val();
		if(filtrePersonneNumeroTelephone != null && filtrePersonneNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'personneNumeroTelephone:' + filtrePersonneNumeroTelephone });

		var filtrePersonneOccupation = $formulaireFiltres.find('.valeurPersonneOccupation').val();
		if(filtrePersonneOccupation != null && filtrePersonneOccupation !== '')
			filtres.push({ name: 'fq', value: 'personneOccupation:' + filtrePersonneOccupation });

		var $filtrePersonneSmsCheckbox = $formulaireFiltres.find('input.valeurPersonneSms[type = "checkbox"]');
		var $filtrePersonneSmsSelect = $formulaireFiltres.find('select.valeurPersonneSms');
		var filtrePersonneSms = $filtrePersonneSmsSelect.length ? $filtrePersonneSmsSelect.val() : $filtrePersonneSmsCheckbox.prop('checked');
		var filtrePersonneSmsSelectVal = $formulaireFiltres.find('select.filtrePersonneSms').val();
		var filtrePersonneSms = null;
		if(filtrePersonneSmsSelectVal !== '')
			filtrePersonneSms = filtrePersonneSmsSelectVal == 'true';
		if(filtrePersonneSms != null && filtrePersonneSms === true)
			filtres.push({ name: 'fq', value: 'personneSms:' + filtrePersonneSms });

		var $filtrePersonneRecevoirMailCheckbox = $formulaireFiltres.find('input.valeurPersonneRecevoirMail[type = "checkbox"]');
		var $filtrePersonneRecevoirMailSelect = $formulaireFiltres.find('select.valeurPersonneRecevoirMail');
		var filtrePersonneRecevoirMail = $filtrePersonneRecevoirMailSelect.length ? $filtrePersonneRecevoirMailSelect.val() : $filtrePersonneRecevoirMailCheckbox.prop('checked');
		var filtrePersonneRecevoirMailSelectVal = $formulaireFiltres.find('select.filtrePersonneRecevoirMail').val();
		var filtrePersonneRecevoirMail = null;
		if(filtrePersonneRecevoirMailSelectVal !== '')
			filtrePersonneRecevoirMail = filtrePersonneRecevoirMailSelectVal == 'true';
		if(filtrePersonneRecevoirMail != null && filtrePersonneRecevoirMail === true)
			filtres.push({ name: 'fq', value: 'personneRecevoirMail:' + filtrePersonneRecevoirMail });

		var $filtrePersonneContactUrgenceCheckbox = $formulaireFiltres.find('input.valeurPersonneContactUrgence[type = "checkbox"]');
		var $filtrePersonneContactUrgenceSelect = $formulaireFiltres.find('select.valeurPersonneContactUrgence');
		var filtrePersonneContactUrgence = $filtrePersonneContactUrgenceSelect.length ? $filtrePersonneContactUrgenceSelect.val() : $filtrePersonneContactUrgenceCheckbox.prop('checked');
		var filtrePersonneContactUrgenceSelectVal = $formulaireFiltres.find('select.filtrePersonneContactUrgence').val();
		var filtrePersonneContactUrgence = null;
		if(filtrePersonneContactUrgenceSelectVal !== '')
			filtrePersonneContactUrgence = filtrePersonneContactUrgenceSelectVal == 'true';
		if(filtrePersonneContactUrgence != null && filtrePersonneContactUrgence === true)
			filtres.push({ name: 'fq', value: 'personneContactUrgence:' + filtrePersonneContactUrgence });

		var $filtrePersonneChercherCheckbox = $formulaireFiltres.find('input.valeurPersonneChercher[type = "checkbox"]');
		var $filtrePersonneChercherSelect = $formulaireFiltres.find('select.valeurPersonneChercher');
		var filtrePersonneChercher = $filtrePersonneChercherSelect.length ? $filtrePersonneChercherSelect.val() : $filtrePersonneChercherCheckbox.prop('checked');
		var filtrePersonneChercherSelectVal = $formulaireFiltres.find('select.filtrePersonneChercher').val();
		var filtrePersonneChercher = null;
		if(filtrePersonneChercherSelectVal !== '')
			filtrePersonneChercher = filtrePersonneChercherSelectVal == 'true';
		if(filtrePersonneChercher != null && filtrePersonneChercher === true)
			filtres.push({ name: 'fq', value: 'personneChercher:' + filtrePersonneChercher });

		var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
		if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

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

		var filtreMereCle = $formulaireFiltres.find('.valeurMereCle').val();
		if(filtreMereCle != null && filtreMereCle !== '')
			filtres.push({ name: 'fq', value: 'mereCle:' + filtreMereCle });

		var filtreFamilleTri = $formulaireFiltres.find('.valeurFamilleTri').val();
		if(filtreFamilleTri != null && filtreFamilleTri !== '')
			filtres.push({ name: 'fq', value: 'familleTri:' + filtreFamilleTri });

		var filtreMereTri = $formulaireFiltres.find('.valeurMereTri').val();
		if(filtreMereTri != null && filtreMereTri !== '')
			filtres.push({ name: 'fq', value: 'mereTri:' + filtreMereTri });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtreEcoleCles = $formulaireFiltres.find('.valeurEcoleCles').val();
		if(filtreEcoleCles != null && filtreEcoleCles !== '')
			filtres.push({ name: 'fq', value: 'ecoleCles:' + filtreEcoleCles });

		var filtreAnneeCles = $formulaireFiltres.find('.valeurAnneeCles').val();
		if(filtreAnneeCles != null && filtreAnneeCles !== '')
			filtres.push({ name: 'fq', value: 'anneeCles:' + filtreAnneeCles });

		var filtreSaisonCles = $formulaireFiltres.find('.valeurSaisonCles').val();
		if(filtreSaisonCles != null && filtreSaisonCles !== '')
			filtres.push({ name: 'fq', value: 'saisonCles:' + filtreSaisonCles });

		var filtreSessionCles = $formulaireFiltres.find('.valeurSessionCles').val();
		if(filtreSessionCles != null && filtreSessionCles !== '')
			filtres.push({ name: 'fq', value: 'sessionCles:' + filtreSessionCles });

		var filtreAgeCles = $formulaireFiltres.find('.valeurAgeCles').val();
		if(filtreAgeCles != null && filtreAgeCles !== '')
			filtres.push({ name: 'fq', value: 'ageCles:' + filtreAgeCles });

		var filtrePersonneNomComplet = $formulaireFiltres.find('.valeurPersonneNomComplet').val();
		if(filtrePersonneNomComplet != null && filtrePersonneNomComplet !== '')
			filtres.push({ name: 'fq', value: 'personneNomComplet:' + filtrePersonneNomComplet });

		var filtrePersonneNomCompletPrefere = $formulaireFiltres.find('.valeurPersonneNomCompletPrefere').val();
		if(filtrePersonneNomCompletPrefere != null && filtrePersonneNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'personneNomCompletPrefere:' + filtrePersonneNomCompletPrefere });

		var filtrePersonneNomFormel = $formulaireFiltres.find('.valeurPersonneNomFormel').val();
		if(filtrePersonneNomFormel != null && filtrePersonneNomFormel !== '')
			filtres.push({ name: 'fq', value: 'personneNomFormel:' + filtrePersonneNomFormel });

		var filtrePersonneRelation = $formulaireFiltres.find('.valeurPersonneRelation').val();
		if(filtrePersonneRelation != null && filtrePersonneRelation !== '')
			filtres.push({ name: 'fq', value: 'personneRelation:' + filtrePersonneRelation });

		var filtreMereNomComplet = $formulaireFiltres.find('.valeurMereNomComplet').val();
		if(filtreMereNomComplet != null && filtreMereNomComplet !== '')
			filtres.push({ name: 'fq', value: 'mereNomComplet:' + filtreMereNomComplet });
	}
	return filtres;
}

function rechercheadminMereScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/admin/mere?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereMereScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-female ');
			var $span = $('<span>').attr('class', '').text(o['mereNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherMereScolaireVals($formulaireFiltres, success, error);
}

function suggereMereScolaireInscriptionCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['mereCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCles_' + pk + '_mereCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurInscriptionCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_inscriptionCles_" + pk + "_mereCles_" + o['pk'] + "'); patchMereScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'InscriptionCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#MereScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheInscriptionScolaireVals(filtres, success, error);
}

async function websocketMereScolaire(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketMereScolaire', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#MereScolaireForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-pink ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-female w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modifier mères');
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
			if(numPATCH < numFound) {
				var $old_box = $('.box-' + id);
				if(!$old_box.size()) {
					$('.top-box').append($box);
				} else if($old_box && $old_box.attr('data-numPATCH') < numFound) {
					$('.box-' + id).remove();
					$('.top-box').append($box);
				}
			} else {
				$('.box-' + id).remove();
			}
			if(pk && pkPage && pk == pkPage) {
				if(success)
					success(json);
			}
		});

		window.eventBus.registerHandler('websocketInscriptionScolaire', function (error, message) {
			$('#Page_inscriptionCles').trigger('oninput');
			$('#Page_inscriptionCles_ajouter').text('ajouter une inscription');
			$('#Page_inscriptionCles_ajouter').removeClass('w3-disabled');
			$('#Page_inscriptionCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketInscriptionScolaire', function (error, message) {
			$('#Page_inscriptionCles').trigger('oninput');
			$('#Page_inscriptionCles_ajouter').text('ajouter une inscription');
			$('#Page_inscriptionCles_ajouter').removeClass('w3-disabled');
			$('#Page_inscriptionCles_ajouter').attr('disabled', false);
		});
	}
}
async function websocketMereScolaireInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherMereScolaireVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputMereScolaire' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'Pk'));
			}
			var val = o['cree'];
			if(vars.includes('cree')) {
				$('.inputMereScolaire' + pk + 'Cree').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'Cree').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'Cree'));
			}
			var val = o['modifie'];
			if(vars.includes('modifie')) {
				$('.inputMereScolaire' + pk + 'Modifie').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'Modifie').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'Modifie'));
			}
			var val = o['objetId'];
			if(vars.includes('objetId')) {
				$('.inputMereScolaire' + pk + 'ObjetId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'ObjetId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'ObjetId'));
			}
			var val = o['archive'];
			if(vars.includes('archive')) {
				$('.inputMereScolaire' + pk + 'Archive').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'Archive').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'Archive'));
			}
			var val = o['supprime'];
			if(vars.includes('supprime')) {
				$('.inputMereScolaire' + pk + 'Supprime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'Supprime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'Supprime'));
			}
			var val = o['personnePrenom'];
			if(vars.includes('personnePrenom')) {
				$('.inputMereScolaire' + pk + 'PersonnePrenom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'PersonnePrenom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'PersonnePrenom'));
			}
			var val = o['familleNom'];
			if(vars.includes('familleNom')) {
				$('.inputMereScolaire' + pk + 'FamilleNom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'FamilleNom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'FamilleNom'));
			}
			var val = o['personnePrenomPrefere'];
			if(vars.includes('personnePrenomPrefere')) {
				$('.inputMereScolaire' + pk + 'PersonnePrenomPrefere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'PersonnePrenomPrefere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'PersonnePrenomPrefere'));
			}
			var val = o['personneMail'];
			if(vars.includes('personneMail')) {
				$('.inputMereScolaire' + pk + 'PersonneMail').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'PersonneMail').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'PersonneMail'));
			}
			var val = o['personneNumeroTelephone'];
			if(vars.includes('personneNumeroTelephone')) {
				$('.inputMereScolaire' + pk + 'PersonneNumeroTelephone').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'PersonneNumeroTelephone').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'PersonneNumeroTelephone'));
			}
			var val = o['personneOccupation'];
			if(vars.includes('personneOccupation')) {
				$('.inputMereScolaire' + pk + 'PersonneOccupation').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'PersonneOccupation').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'PersonneOccupation'));
			}
			var val = o['personneSms'];
			if(vars.includes('personneSms')) {
				$('.inputMereScolaire' + pk + 'PersonneSms').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'PersonneSms').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'PersonneSms'));
			}
			var val = o['personneRecevoirMail'];
			if(vars.includes('personneRecevoirMail')) {
				$('.inputMereScolaire' + pk + 'PersonneRecevoirMail').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'PersonneRecevoirMail').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'PersonneRecevoirMail'));
			}
			var val = o['personneContactUrgence'];
			if(vars.includes('personneContactUrgence')) {
				$('.inputMereScolaire' + pk + 'PersonneContactUrgence').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'PersonneContactUrgence').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'PersonneContactUrgence'));
			}
			var val = o['personneChercher'];
			if(vars.includes('personneChercher')) {
				$('.inputMereScolaire' + pk + 'PersonneChercher').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'PersonneChercher').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'PersonneChercher'));
			}
			var val = o['photo'];
			if(vars.includes('photo')) {
				if(val === undefined)
					val = null;
				$('.imgMereScolaire' + pk + 'Photo').each(function() {
					if(val !== $(this).attr('src'))
						$(this).attr('src', val);
				});
				$('.inputMereScolaire' + pk + 'Photo').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'Photo').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'Photo'));
			}
			var val = o['inscriptionCles'];
			if(vars.includes('inscriptionCles')) {
				$('.inputMereScolaire' + pk + 'InscriptionCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'InscriptionCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'InscriptionCles'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputMereScolaire' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputMereScolaire' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'Id'));
			}
			var val = o['classeNomCanonique'];
			if(vars.includes('classeNomCanonique')) {
				$('.inputMereScolaire' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'ClasseNomCanonique'));
			}
			var val = o['classeNomSimple'];
			if(vars.includes('classeNomSimple')) {
				$('.inputMereScolaire' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'ClasseNomSimple'));
			}
			var val = o['classeNomsCanoniques'];
			if(vars.includes('classeNomsCanoniques')) {
				$('.inputMereScolaire' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'ClasseNomsCanoniques'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputMereScolaire' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'SessionId'));
			}
			var val = o['utilisateurId'];
			if(vars.includes('utilisateurId')) {
				$('.inputMereScolaire' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'UtilisateurId'));
			}
			var val = o['utilisateurCle'];
			if(vars.includes('utilisateurCle')) {
				$('.inputMereScolaire' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'UtilisateurCle'));
			}
			var val = o['sauvegardes'];
			if(vars.includes('sauvegardes')) {
				$('.inputMereScolaire' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'Sauvegardes'));
			}
			var val = o['objetTitre'];
			if(vars.includes('objetTitre')) {
				$('.inputMereScolaire' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'ObjetTitre'));
			}
			var val = o['objetSuggere'];
			if(vars.includes('objetSuggere')) {
				$('.inputMereScolaire' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'ObjetSuggere'));
			}
			var val = o['objetTexte'];
			if(vars.includes('objetTexte')) {
				$('.inputMereScolaire' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'ObjetTexte'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputMereScolaire' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputMereScolaire' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputMereScolaire' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'PageUrlApi'));
			}
			var val = o['mereCle'];
			if(vars.includes('mereCle')) {
				$('.inputMereScolaire' + pk + 'MereCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'MereCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'MereCle'));
			}
			var val = o['familleTri'];
			if(vars.includes('familleTri')) {
				$('.inputMereScolaire' + pk + 'FamilleTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'FamilleTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'FamilleTri'));
			}
			var val = o['mereTri'];
			if(vars.includes('mereTri')) {
				$('.inputMereScolaire' + pk + 'MereTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'MereTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'MereTri'));
			}
			var val = o['utilisateurCles'];
			if(vars.includes('utilisateurCles')) {
				$('.inputMereScolaire' + pk + 'UtilisateurCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'UtilisateurCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'UtilisateurCles'));
			}
			var val = o['ecoleCles'];
			if(vars.includes('ecoleCles')) {
				$('.inputMereScolaire' + pk + 'EcoleCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'EcoleCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'EcoleCles'));
			}
			var val = o['anneeCles'];
			if(vars.includes('anneeCles')) {
				$('.inputMereScolaire' + pk + 'AnneeCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'AnneeCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'AnneeCles'));
			}
			var val = o['saisonCles'];
			if(vars.includes('saisonCles')) {
				$('.inputMereScolaire' + pk + 'SaisonCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'SaisonCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'SaisonCles'));
			}
			var val = o['sessionCles'];
			if(vars.includes('sessionCles')) {
				$('.inputMereScolaire' + pk + 'SessionCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'SessionCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'SessionCles'));
			}
			var val = o['ageCles'];
			if(vars.includes('ageCles')) {
				$('.inputMereScolaire' + pk + 'AgeCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'AgeCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'AgeCles'));
			}
			var val = o['personneNomComplet'];
			if(vars.includes('personneNomComplet')) {
				$('.inputMereScolaire' + pk + 'PersonneNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'PersonneNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'PersonneNomComplet'));
			}
			var val = o['personneNomCompletPrefere'];
			if(vars.includes('personneNomCompletPrefere')) {
				$('.inputMereScolaire' + pk + 'PersonneNomCompletPrefere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'PersonneNomCompletPrefere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'PersonneNomCompletPrefere'));
			}
			var val = o['personneNomFormel'];
			if(vars.includes('personneNomFormel')) {
				$('.inputMereScolaire' + pk + 'PersonneNomFormel').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'PersonneNomFormel').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'PersonneNomFormel'));
			}
			var val = o['personneRelation'];
			if(vars.includes('personneRelation')) {
				$('.inputMereScolaire' + pk + 'PersonneRelation').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'PersonneRelation').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'PersonneRelation'));
			}
			var val = o['mereNomComplet'];
			if(vars.includes('mereNomComplet')) {
				$('.inputMereScolaire' + pk + 'MereNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMereScolaire' + pk + 'MereNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputMereScolaire' + pk + 'MereNomComplet'));
			}
		});
	}
}
