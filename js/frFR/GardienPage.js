
// POST //

async function postGardienScolaire($formulaireValeurs, success, error) {
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

	var valeurPersonneNumeroTelephone = $formulaireValeurs.find('.valeurPersonneNumeroTelephone').val();
	if(valeurPersonneNumeroTelephone != null && valeurPersonneNumeroTelephone !== '')
		vals['personneNumeroTelephone'] = valeurPersonneNumeroTelephone;

	var valeurPersonneRelation = $formulaireValeurs.find('.valeurPersonneRelation').val();
	if(valeurPersonneRelation != null && valeurPersonneRelation !== '')
		vals['personneRelation'] = valeurPersonneRelation;

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
		url: '/api/gardien'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postGardienScolaireVals(vals, success, error) {
	$.ajax({
		url: '/api/gardien'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportGardienScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTImport_liste').val();
	if(json != null && json !== '')
		putimportGardienScolaireVals(JSON.parse(json), success, error);
}

function putimportGardienScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/gardien/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTFusion //

async function putfusionGardienScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTFusion_liste').val();
	if(json != null && json !== '')
		putfusionGardienScolaireVals(JSON.parse(json), success, error);
}

function putfusionGardienScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/gardien/fusion'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopie //

async function putcopieGardienScolaire($formulaireValeurs, pk, success, error) {
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

	var valeurPersonneNumeroTelephone = $formulaireValeurs.find('.valeurPersonneNumeroTelephone').val();
	if(valeurPersonneNumeroTelephone != null && valeurPersonneNumeroTelephone !== '')
		vals['personneNumeroTelephone'] = valeurPersonneNumeroTelephone;

	var valeurPersonneRelation = $formulaireValeurs.find('.valeurPersonneRelation').val();
	if(valeurPersonneRelation != null && valeurPersonneRelation !== '')
		vals['personneRelation'] = valeurPersonneRelation;

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

	putcopieGardienScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopieGardienScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/gardien/copie?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchGardienScolaire($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchGardienScolaireFiltres($formulaireFiltres);

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

	var valeurPersonnePrenom = $formulaireValeurs.find('.valeurPersonnePrenom').val();
	var removePersonnePrenom = $formulaireValeurs.find('.removePersonnePrenom').val() === 'true';
	var setPersonnePrenom = removePersonnePrenom ? null : $formulaireValeurs.find('.setPersonnePrenom').val();
	if(removePersonnePrenom || setPersonnePrenom != null && setPersonnePrenom !== '')
		vals['setPersonnePrenom'] = setPersonnePrenom;
	var addPersonnePrenom = $formulaireValeurs.find('.addPersonnePrenom').val();
	if(addPersonnePrenom != null && addPersonnePrenom !== '')
		vals['addPersonnePrenom'] = addPersonnePrenom;
	var removePersonnePrenom = $formulaireValeurs.find('.removePersonnePrenom').val();
	if(removePersonnePrenom != null && removePersonnePrenom !== '')
		vals['removePersonnePrenom'] = removePersonnePrenom;

	var valeurFamilleNom = $formulaireValeurs.find('.valeurFamilleNom').val();
	var removeFamilleNom = $formulaireValeurs.find('.removeFamilleNom').val() === 'true';
	var setFamilleNom = removeFamilleNom ? null : $formulaireValeurs.find('.setFamilleNom').val();
	if(removeFamilleNom || setFamilleNom != null && setFamilleNom !== '')
		vals['setFamilleNom'] = setFamilleNom;
	var addFamilleNom = $formulaireValeurs.find('.addFamilleNom').val();
	if(addFamilleNom != null && addFamilleNom !== '')
		vals['addFamilleNom'] = addFamilleNom;
	var removeFamilleNom = $formulaireValeurs.find('.removeFamilleNom').val();
	if(removeFamilleNom != null && removeFamilleNom !== '')
		vals['removeFamilleNom'] = removeFamilleNom;

	var valeurPersonnePrenomPrefere = $formulaireValeurs.find('.valeurPersonnePrenomPrefere').val();
	var removePersonnePrenomPrefere = $formulaireValeurs.find('.removePersonnePrenomPrefere').val() === 'true';
	var setPersonnePrenomPrefere = removePersonnePrenomPrefere ? null : $formulaireValeurs.find('.setPersonnePrenomPrefere').val();
	if(removePersonnePrenomPrefere || setPersonnePrenomPrefere != null && setPersonnePrenomPrefere !== '')
		vals['setPersonnePrenomPrefere'] = setPersonnePrenomPrefere;
	var addPersonnePrenomPrefere = $formulaireValeurs.find('.addPersonnePrenomPrefere').val();
	if(addPersonnePrenomPrefere != null && addPersonnePrenomPrefere !== '')
		vals['addPersonnePrenomPrefere'] = addPersonnePrenomPrefere;
	var removePersonnePrenomPrefere = $formulaireValeurs.find('.removePersonnePrenomPrefere').val();
	if(removePersonnePrenomPrefere != null && removePersonnePrenomPrefere !== '')
		vals['removePersonnePrenomPrefere'] = removePersonnePrenomPrefere;

	var valeurPersonneNumeroTelephone = $formulaireValeurs.find('.valeurPersonneNumeroTelephone').val();
	var removePersonneNumeroTelephone = $formulaireValeurs.find('.removePersonneNumeroTelephone').val() === 'true';
	var setPersonneNumeroTelephone = removePersonneNumeroTelephone ? null : $formulaireValeurs.find('.setPersonneNumeroTelephone').val();
	if(removePersonneNumeroTelephone || setPersonneNumeroTelephone != null && setPersonneNumeroTelephone !== '')
		vals['setPersonneNumeroTelephone'] = setPersonneNumeroTelephone;
	var addPersonneNumeroTelephone = $formulaireValeurs.find('.addPersonneNumeroTelephone').val();
	if(addPersonneNumeroTelephone != null && addPersonneNumeroTelephone !== '')
		vals['addPersonneNumeroTelephone'] = addPersonneNumeroTelephone;
	var removePersonneNumeroTelephone = $formulaireValeurs.find('.removePersonneNumeroTelephone').val();
	if(removePersonneNumeroTelephone != null && removePersonneNumeroTelephone !== '')
		vals['removePersonneNumeroTelephone'] = removePersonneNumeroTelephone;

	var valeurPersonneRelation = $formulaireValeurs.find('.valeurPersonneRelation').val();
	var removePersonneRelation = $formulaireValeurs.find('.removePersonneRelation').val() === 'true';
	var setPersonneRelation = removePersonneRelation ? null : $formulaireValeurs.find('.setPersonneRelation').val();
	if(removePersonneRelation || setPersonneRelation != null && setPersonneRelation !== '')
		vals['setPersonneRelation'] = setPersonneRelation;
	var addPersonneRelation = $formulaireValeurs.find('.addPersonneRelation').val();
	if(addPersonneRelation != null && addPersonneRelation !== '')
		vals['addPersonneRelation'] = addPersonneRelation;
	var removePersonneRelation = $formulaireValeurs.find('.removePersonneRelation').val();
	if(removePersonneRelation != null && removePersonneRelation !== '')
		vals['removePersonneRelation'] = removePersonneRelation;

	var valeurPersonneContactUrgence = $formulaireValeurs.find('.valeurPersonneContactUrgence').prop('checked');
	var removePersonneContactUrgence = $formulaireValeurs.find('.removePersonneContactUrgence').val() === 'true';
	var valeurPersonneContactUrgenceSelectVal = $formulaireValeurs.find('select.setPersonneContactUrgence').val();
	var valeurPersonneContactUrgence = null;
	if(valeurPersonneContactUrgenceSelectVal != null && valeurPersonneContactUrgenceSelectVal !== '')
		valeurPersonneContactUrgence = valeurPersonneContactUrgenceSelectVal == 'true';
	setPersonneContactUrgence = removePersonneContactUrgence ? null : valeurPersonneContactUrgence;
	if(removePersonneContactUrgence || setPersonneContactUrgence != null && setPersonneContactUrgence !== '')
		vals['setPersonneContactUrgence'] = setPersonneContactUrgence;
	var addPersonneContactUrgence = $formulaireValeurs.find('.addPersonneContactUrgence').prop('checked');
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
	setPersonneChercher = removePersonneChercher ? null : valeurPersonneChercher;
	if(removePersonneChercher || setPersonneChercher != null && setPersonneChercher !== '')
		vals['setPersonneChercher'] = setPersonneChercher;
	var addPersonneChercher = $formulaireValeurs.find('.addPersonneChercher').prop('checked');
	if(addPersonneChercher != null && addPersonneChercher !== '')
		vals['addPersonneChercher'] = addPersonneChercher;
	var removePersonneChercher = $formulaireValeurs.find('.removePersonneChercher').prop('checked');
	if(removePersonneChercher != null && removePersonneChercher !== '')
		vals['removePersonneChercher'] = removePersonneChercher;

	var valeurPhoto = $formulaireValeurs.find('.valeurPhoto').val();
	var removePhoto = $formulaireValeurs.find('.removePhoto').val() === 'true';
	var setPhoto = removePhoto ? null : $formulaireValeurs.find('.setPhoto').val();
	if(removePhoto || setPhoto != null && setPhoto !== '')
		vals['setPhoto'] = setPhoto;
	var addPhoto = $formulaireValeurs.find('.addPhoto').val();
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

	patchGardienScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchGardienScolaireFiltres($formulaireFiltres) {
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

		var filtrePersonneNumeroTelephone = $formulaireFiltres.find('.valeurPersonneNumeroTelephone').val();
		if(filtrePersonneNumeroTelephone != null && filtrePersonneNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'personneNumeroTelephone:' + filtrePersonneNumeroTelephone });

		var filtrePersonneRelation = $formulaireFiltres.find('.valeurPersonneRelation').val();
		if(filtrePersonneRelation != null && filtrePersonneRelation !== '')
			filtres.push({ name: 'fq', value: 'personneRelation:' + filtrePersonneRelation });

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

		var filtreGardienCle = $formulaireFiltres.find('.valeurGardienCle').val();
		if(filtreGardienCle != null && filtreGardienCle !== '')
			filtres.push({ name: 'fq', value: 'gardienCle:' + filtreGardienCle });

		var filtreFamilleTri = $formulaireFiltres.find('.valeurFamilleTri').val();
		if(filtreFamilleTri != null && filtreFamilleTri !== '')
			filtres.push({ name: 'fq', value: 'familleTri:' + filtreFamilleTri });

		var filtreGardienTri = $formulaireFiltres.find('.valeurGardienTri').val();
		if(filtreGardienTri != null && filtreGardienTri !== '')
			filtres.push({ name: 'fq', value: 'gardienTri:' + filtreGardienTri });

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

		var filtrePersonneOccupation = $formulaireFiltres.find('.valeurPersonneOccupation').val();
		if(filtrePersonneOccupation != null && filtrePersonneOccupation !== '')
			filtres.push({ name: 'fq', value: 'personneOccupation:' + filtrePersonneOccupation });

		var filtrePersonneMail = $formulaireFiltres.find('.valeurPersonneMail').val();
		if(filtrePersonneMail != null && filtrePersonneMail !== '')
			filtres.push({ name: 'fq', value: 'personneMail:' + filtrePersonneMail });

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

		var filtreGardienNomComplet = $formulaireFiltres.find('.valeurGardienNomComplet').val();
		if(filtreGardienNomComplet != null && filtreGardienNomComplet !== '')
			filtres.push({ name: 'fq', value: 'gardienNomComplet:' + filtreGardienNomComplet });
	}
	return filtres;
}

function patchGardienScolaireVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchGardienScolaireVals(filtres, vals, success, error);
}

function patchGardienScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/gardien?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getGardienScolaire(pk) {
	$.ajax({
		url: '/api/gardien/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Recherche //

async function rechercheGardienScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheGardienScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheGardienScolaireVals(filtres, success, error);
}

function rechercheGardienScolaireFiltres($formulaireFiltres) {
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

		var filtrePersonneNumeroTelephone = $formulaireFiltres.find('.valeurPersonneNumeroTelephone').val();
		if(filtrePersonneNumeroTelephone != null && filtrePersonneNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'personneNumeroTelephone:' + filtrePersonneNumeroTelephone });

		var filtrePersonneRelation = $formulaireFiltres.find('.valeurPersonneRelation').val();
		if(filtrePersonneRelation != null && filtrePersonneRelation !== '')
			filtres.push({ name: 'fq', value: 'personneRelation:' + filtrePersonneRelation });

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

		var filtreGardienCle = $formulaireFiltres.find('.valeurGardienCle').val();
		if(filtreGardienCle != null && filtreGardienCle !== '')
			filtres.push({ name: 'fq', value: 'gardienCle:' + filtreGardienCle });

		var filtreFamilleTri = $formulaireFiltres.find('.valeurFamilleTri').val();
		if(filtreFamilleTri != null && filtreFamilleTri !== '')
			filtres.push({ name: 'fq', value: 'familleTri:' + filtreFamilleTri });

		var filtreGardienTri = $formulaireFiltres.find('.valeurGardienTri').val();
		if(filtreGardienTri != null && filtreGardienTri !== '')
			filtres.push({ name: 'fq', value: 'gardienTri:' + filtreGardienTri });

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

		var filtrePersonneOccupation = $formulaireFiltres.find('.valeurPersonneOccupation').val();
		if(filtrePersonneOccupation != null && filtrePersonneOccupation !== '')
			filtres.push({ name: 'fq', value: 'personneOccupation:' + filtrePersonneOccupation });

		var filtrePersonneMail = $formulaireFiltres.find('.valeurPersonneMail').val();
		if(filtrePersonneMail != null && filtrePersonneMail !== '')
			filtres.push({ name: 'fq', value: 'personneMail:' + filtrePersonneMail });

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

		var filtreGardienNomComplet = $formulaireFiltres.find('.valeurGardienNomComplet').val();
		if(filtreGardienNomComplet != null && filtreGardienNomComplet !== '')
			filtres.push({ name: 'fq', value: 'gardienNomComplet:' + filtreGardienNomComplet });
	}
	return filtres;
}

function rechercheGardienScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/gardien?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereGardienScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-phone ');
			var $span = $('<span>').attr('class', '').text(o['gardienNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherGardienScolaireVals($formulaireFiltres, success, error);
}

function suggereGardienScolaireInscriptionCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['gardienCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCles_' + pk + '_gardienCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurInscriptionCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_inscriptionCles_" + pk + "_gardienCles_" + o['pk'] + "'); patchGardienScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'InscriptionCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#GardienScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheInscriptionScolaireVals(filtres, success, error);
}

// RechercheAdmin //

async function rechercheadminGardienScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheadminGardienScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheadminGardienScolaireVals(filtres, success, error);
}

function rechercheadminGardienScolaireFiltres($formulaireFiltres) {
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

		var filtrePersonneNumeroTelephone = $formulaireFiltres.find('.valeurPersonneNumeroTelephone').val();
		if(filtrePersonneNumeroTelephone != null && filtrePersonneNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'personneNumeroTelephone:' + filtrePersonneNumeroTelephone });

		var filtrePersonneRelation = $formulaireFiltres.find('.valeurPersonneRelation').val();
		if(filtrePersonneRelation != null && filtrePersonneRelation !== '')
			filtres.push({ name: 'fq', value: 'personneRelation:' + filtrePersonneRelation });

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

		var filtreGardienCle = $formulaireFiltres.find('.valeurGardienCle').val();
		if(filtreGardienCle != null && filtreGardienCle !== '')
			filtres.push({ name: 'fq', value: 'gardienCle:' + filtreGardienCle });

		var filtreFamilleTri = $formulaireFiltres.find('.valeurFamilleTri').val();
		if(filtreFamilleTri != null && filtreFamilleTri !== '')
			filtres.push({ name: 'fq', value: 'familleTri:' + filtreFamilleTri });

		var filtreGardienTri = $formulaireFiltres.find('.valeurGardienTri').val();
		if(filtreGardienTri != null && filtreGardienTri !== '')
			filtres.push({ name: 'fq', value: 'gardienTri:' + filtreGardienTri });

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

		var filtrePersonneOccupation = $formulaireFiltres.find('.valeurPersonneOccupation').val();
		if(filtrePersonneOccupation != null && filtrePersonneOccupation !== '')
			filtres.push({ name: 'fq', value: 'personneOccupation:' + filtrePersonneOccupation });

		var filtrePersonneMail = $formulaireFiltres.find('.valeurPersonneMail').val();
		if(filtrePersonneMail != null && filtrePersonneMail !== '')
			filtres.push({ name: 'fq', value: 'personneMail:' + filtrePersonneMail });

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

		var filtreGardienNomComplet = $formulaireFiltres.find('.valeurGardienNomComplet').val();
		if(filtreGardienNomComplet != null && filtreGardienNomComplet !== '')
			filtres.push({ name: 'fq', value: 'gardienNomComplet:' + filtreGardienNomComplet });
	}
	return filtres;
}

function rechercheadminGardienScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/admin/gardien?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereGardienScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-phone ');
			var $span = $('<span>').attr('class', '').text(o['gardienNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherGardienScolaireVals($formulaireFiltres, success, error);
}

function suggereGardienScolaireInscriptionCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['gardienCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCles_' + pk + '_gardienCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurInscriptionCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_inscriptionCles_" + pk + "_gardienCles_" + o['pk'] + "'); patchGardienScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'InscriptionCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#GardienScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheInscriptionScolaireVals(filtres, success, error);
}

async function websocketGardienScolaire(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketGardienScolaire', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#GardienScolaireForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = json['numFound'];
			var numPATCH = json['numPATCH'];
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-yellow ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-phone w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modifier gardiens');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-yellow ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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
async function websocketGardienScolaireInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherGardienScolaireVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputGardienScolaire' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'Pk'));
			}
			var val = o['cree'];
			if(vars.includes('cree')) {
				$('.inputGardienScolaire' + pk + 'Cree').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'Cree').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'Cree'));
			}
			var val = o['modifie'];
			if(vars.includes('modifie')) {
				$('.inputGardienScolaire' + pk + 'Modifie').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'Modifie').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'Modifie'));
			}
			var val = o['objetId'];
			if(vars.includes('objetId')) {
				$('.inputGardienScolaire' + pk + 'ObjetId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'ObjetId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'ObjetId'));
			}
			var val = o['archive'];
			if(vars.includes('archive')) {
				$('.inputGardienScolaire' + pk + 'Archive').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'Archive').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'Archive'));
			}
			var val = o['supprime'];
			if(vars.includes('supprime')) {
				$('.inputGardienScolaire' + pk + 'Supprime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'Supprime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'Supprime'));
			}
			var val = o['personnePrenom'];
			if(vars.includes('personnePrenom')) {
				$('.inputGardienScolaire' + pk + 'PersonnePrenom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'PersonnePrenom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'PersonnePrenom'));
			}
			var val = o['familleNom'];
			if(vars.includes('familleNom')) {
				$('.inputGardienScolaire' + pk + 'FamilleNom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'FamilleNom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'FamilleNom'));
			}
			var val = o['personnePrenomPrefere'];
			if(vars.includes('personnePrenomPrefere')) {
				$('.inputGardienScolaire' + pk + 'PersonnePrenomPrefere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'PersonnePrenomPrefere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'PersonnePrenomPrefere'));
			}
			var val = o['personneNumeroTelephone'];
			if(vars.includes('personneNumeroTelephone')) {
				$('.inputGardienScolaire' + pk + 'PersonneNumeroTelephone').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'PersonneNumeroTelephone').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'PersonneNumeroTelephone'));
			}
			var val = o['personneRelation'];
			if(vars.includes('personneRelation')) {
				$('.inputGardienScolaire' + pk + 'PersonneRelation').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'PersonneRelation').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'PersonneRelation'));
			}
			var val = o['personneContactUrgence'];
			if(vars.includes('personneContactUrgence')) {
				$('.inputGardienScolaire' + pk + 'PersonneContactUrgence').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'PersonneContactUrgence').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'PersonneContactUrgence'));
			}
			var val = o['personneChercher'];
			if(vars.includes('personneChercher')) {
				$('.inputGardienScolaire' + pk + 'PersonneChercher').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'PersonneChercher').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'PersonneChercher'));
			}
			var val = o['photo'];
			if(vars.includes('photo')) {
				if(val === undefined)
					val = null;
				$('.imgGardienScolaire' + pk + 'Photo').each(function() {
					if(val !== $(this).attr('src'))
						$(this).attr('src', val);
				});
				$('.inputGardienScolaire' + pk + 'Photo').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'Photo').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'Photo'));
			}
			var val = o['inscriptionCles'];
			if(vars.includes('inscriptionCles')) {
				$('.inputGardienScolaire' + pk + 'InscriptionCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'InscriptionCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'InscriptionCles'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputGardienScolaire' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputGardienScolaire' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'Id'));
			}
			var val = o['classeNomCanonique'];
			if(vars.includes('classeNomCanonique')) {
				$('.inputGardienScolaire' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'ClasseNomCanonique'));
			}
			var val = o['classeNomSimple'];
			if(vars.includes('classeNomSimple')) {
				$('.inputGardienScolaire' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'ClasseNomSimple'));
			}
			var val = o['classeNomsCanoniques'];
			if(vars.includes('classeNomsCanoniques')) {
				$('.inputGardienScolaire' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'ClasseNomsCanoniques'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputGardienScolaire' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'SessionId'));
			}
			var val = o['utilisateurId'];
			if(vars.includes('utilisateurId')) {
				$('.inputGardienScolaire' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'UtilisateurId'));
			}
			var val = o['utilisateurCle'];
			if(vars.includes('utilisateurCle')) {
				$('.inputGardienScolaire' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'UtilisateurCle'));
			}
			var val = o['sauvegardes'];
			if(vars.includes('sauvegardes')) {
				$('.inputGardienScolaire' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'Sauvegardes'));
			}
			var val = o['objetTitre'];
			if(vars.includes('objetTitre')) {
				$('.inputGardienScolaire' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'ObjetTitre'));
			}
			var val = o['objetSuggere'];
			if(vars.includes('objetSuggere')) {
				$('.inputGardienScolaire' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'ObjetSuggere'));
			}
			var val = o['objetTexte'];
			if(vars.includes('objetTexte')) {
				$('.inputGardienScolaire' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'ObjetTexte'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputGardienScolaire' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputGardienScolaire' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputGardienScolaire' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'PageUrlApi'));
			}
			var val = o['gardienCle'];
			if(vars.includes('gardienCle')) {
				$('.inputGardienScolaire' + pk + 'GardienCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'GardienCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'GardienCle'));
			}
			var val = o['familleTri'];
			if(vars.includes('familleTri')) {
				$('.inputGardienScolaire' + pk + 'FamilleTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'FamilleTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'FamilleTri'));
			}
			var val = o['gardienTri'];
			if(vars.includes('gardienTri')) {
				$('.inputGardienScolaire' + pk + 'GardienTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'GardienTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'GardienTri'));
			}
			var val = o['utilisateurCles'];
			if(vars.includes('utilisateurCles')) {
				$('.inputGardienScolaire' + pk + 'UtilisateurCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'UtilisateurCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'UtilisateurCles'));
			}
			var val = o['ecoleCles'];
			if(vars.includes('ecoleCles')) {
				$('.inputGardienScolaire' + pk + 'EcoleCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'EcoleCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'EcoleCles'));
			}
			var val = o['anneeCles'];
			if(vars.includes('anneeCles')) {
				$('.inputGardienScolaire' + pk + 'AnneeCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'AnneeCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'AnneeCles'));
			}
			var val = o['saisonCles'];
			if(vars.includes('saisonCles')) {
				$('.inputGardienScolaire' + pk + 'SaisonCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'SaisonCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'SaisonCles'));
			}
			var val = o['sessionCles'];
			if(vars.includes('sessionCles')) {
				$('.inputGardienScolaire' + pk + 'SessionCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'SessionCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'SessionCles'));
			}
			var val = o['ageCles'];
			if(vars.includes('ageCles')) {
				$('.inputGardienScolaire' + pk + 'AgeCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'AgeCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'AgeCles'));
			}
			var val = o['personneNomComplet'];
			if(vars.includes('personneNomComplet')) {
				$('.inputGardienScolaire' + pk + 'PersonneNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'PersonneNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'PersonneNomComplet'));
			}
			var val = o['personneNomCompletPrefere'];
			if(vars.includes('personneNomCompletPrefere')) {
				$('.inputGardienScolaire' + pk + 'PersonneNomCompletPrefere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'PersonneNomCompletPrefere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'PersonneNomCompletPrefere'));
			}
			var val = o['personneNomFormel'];
			if(vars.includes('personneNomFormel')) {
				$('.inputGardienScolaire' + pk + 'PersonneNomFormel').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'PersonneNomFormel').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'PersonneNomFormel'));
			}
			var val = o['personneOccupation'];
			if(vars.includes('personneOccupation')) {
				$('.inputGardienScolaire' + pk + 'PersonneOccupation').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'PersonneOccupation').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'PersonneOccupation'));
			}
			var val = o['personneMail'];
			if(vars.includes('personneMail')) {
				$('.inputGardienScolaire' + pk + 'PersonneMail').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'PersonneMail').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'PersonneMail'));
			}
			var val = o['personneSms'];
			if(vars.includes('personneSms')) {
				$('.inputGardienScolaire' + pk + 'PersonneSms').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'PersonneSms').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'PersonneSms'));
			}
			var val = o['personneRecevoirMail'];
			if(vars.includes('personneRecevoirMail')) {
				$('.inputGardienScolaire' + pk + 'PersonneRecevoirMail').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'PersonneRecevoirMail').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'PersonneRecevoirMail'));
			}
			var val = o['gardienNomComplet'];
			if(vars.includes('gardienNomComplet')) {
				$('.inputGardienScolaire' + pk + 'GardienNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varGardienScolaire' + pk + 'GardienNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputGardienScolaire' + pk + 'GardienNomComplet'));
			}
		});
	}
}
