
// POST //

async function postEnfantScolaire($formulaireValeurs, success, error) {
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

	var valeurPersonneDateNaissance = $formulaireValeurs.find('.valeurPersonneDateNaissance').val();
	if(valeurPersonneDateNaissance != null && valeurPersonneDateNaissance !== '')
		vals['personneDateNaissance'] = valeurPersonneDateNaissance;

	var valeurPersonneAgeEnSeptembre = $formulaireValeurs.find('.valeurPersonneAgeEnSeptembre').val();
	if(valeurPersonneAgeEnSeptembre != null && valeurPersonneAgeEnSeptembre !== '')
		vals['personneAgeEnSeptembre'] = valeurPersonneAgeEnSeptembre;

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
		url: '/api/enfant'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postEnfantScolaireVals(vals, success, error) {
	$.ajax({
		url: '/api/enfant'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportEnfantScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTImport_liste').val();
	if(json != null && json !== '')
		putimportEnfantScolaireVals(JSON.parse(json), success, error);
}

function putimportEnfantScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/enfant/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTFusion //

async function putfusionEnfantScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTFusion_liste').val();
	if(json != null && json !== '')
		putfusionEnfantScolaireVals(JSON.parse(json), success, error);
}

function putfusionEnfantScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/enfant/fusion'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopie //

async function putcopieEnfantScolaire($formulaireValeurs, pk, success, error) {
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

	var valeurPersonneDateNaissance = $formulaireValeurs.find('.valeurPersonneDateNaissance').val();
	if(valeurPersonneDateNaissance != null && valeurPersonneDateNaissance !== '')
		vals['personneDateNaissance'] = valeurPersonneDateNaissance;

	var valeurPersonneAgeEnSeptembre = $formulaireValeurs.find('.valeurPersonneAgeEnSeptembre').val();
	if(valeurPersonneAgeEnSeptembre != null && valeurPersonneAgeEnSeptembre !== '')
		vals['personneAgeEnSeptembre'] = valeurPersonneAgeEnSeptembre;

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

	putcopieEnfantScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopieEnfantScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/enfant/copie?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchEnfantScolaire($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchEnfantScolaireFiltres($formulaireFiltres);

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

	var valeurPersonneDateNaissance = $formulaireValeurs.find('.valeurPersonneDateNaissance').val();
	var removePersonneDateNaissance = $formulaireValeurs.find('.removePersonneDateNaissance').val() === 'true';
	var setPersonneDateNaissance = removePersonneDateNaissance ? null : $formulaireValeurs.find('.setPersonneDateNaissance').val();
	var addPersonneDateNaissance = $formulaireValeurs.find('.addPersonneDateNaissance').val();
	var setMoment = setPersonneDateNaissance ? moment(setPersonneDateNaissance, 'DD-MM-YYYY') : null; 
	var addMoment = addPersonneDateNaissance ? moment(addPersonneDateNaissance, 'DD-MM-YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setPersonneDateNaissance = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addPersonneDateNaissance = s;
	} 
	if(removePersonneDateNaissance || setPersonneDateNaissance != null && setPersonneDateNaissance !== '')
		vals['setPersonneDateNaissance'] = setPersonneDateNaissance;
	if(addPersonneDateNaissance != null && addPersonneDateNaissance !== '')
		vals['addPersonneDateNaissance'] = addPersonneDateNaissance;
	var removePersonneDateNaissance = $formulaireValeurs.find('.removePersonneDateNaissance').val();
	if(removePersonneDateNaissance != null && removePersonneDateNaissance !== '')
		vals['removePersonneDateNaissance'] = removePersonneDateNaissance;

	var valeurPersonneAgeEnSeptembre = $formulaireValeurs.find('.valeurPersonneAgeEnSeptembre').val();
	var removePersonneAgeEnSeptembre = $formulaireValeurs.find('.removePersonneAgeEnSeptembre').val() === 'true';
	var setPersonneAgeEnSeptembre = removePersonneAgeEnSeptembre ? null : $formulaireValeurs.find('.setPersonneAgeEnSeptembre').val();
	var addPersonneAgeEnSeptembre = $formulaireValeurs.find('.addPersonneAgeEnSeptembre').val();
	if(removePersonneAgeEnSeptembre || setPersonneAgeEnSeptembre != null && setPersonneAgeEnSeptembre !== '')
		vals['setPersonneAgeEnSeptembre'] = setPersonneAgeEnSeptembre;
	if(addPersonneAgeEnSeptembre != null && addPersonneAgeEnSeptembre !== '')
		vals['addPersonneAgeEnSeptembre'] = addPersonneAgeEnSeptembre;
	var removePersonneAgeEnSeptembre = $formulaireValeurs.find('.removePersonneAgeEnSeptembre').val();
	if(removePersonneAgeEnSeptembre != null && removePersonneAgeEnSeptembre !== '')
		vals['removePersonneAgeEnSeptembre'] = removePersonneAgeEnSeptembre;

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

	patchEnfantScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchEnfantScolaireFiltres($formulaireFiltres) {
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

		var filtrePersonneDateNaissance = $formulaireFiltres.find('.valeurPersonneDateNaissance').val();
		if(filtrePersonneDateNaissance != null && filtrePersonneDateNaissance !== '')
			filtres.push({ name: 'fq', value: 'personneDateNaissance:' + filtrePersonneDateNaissance });

		var filtrePersonneAgeEnSeptembre = $formulaireFiltres.find('.valeurPersonneAgeEnSeptembre').val();
		if(filtrePersonneAgeEnSeptembre != null && filtrePersonneAgeEnSeptembre !== '')
			filtres.push({ name: 'fq', value: 'personneAgeEnSeptembre:' + filtrePersonneAgeEnSeptembre });

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

		var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
		if(filtreEnfantCle != null && filtreEnfantCle !== '')
			filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

		var filtreFamilleTri = $formulaireFiltres.find('.valeurFamilleTri').val();
		if(filtreFamilleTri != null && filtreFamilleTri !== '')
			filtres.push({ name: 'fq', value: 'familleTri:' + filtreFamilleTri });

		var filtreEnfantTri = $formulaireFiltres.find('.valeurEnfantTri').val();
		if(filtreEnfantTri != null && filtreEnfantTri !== '')
			filtres.push({ name: 'fq', value: 'enfantTri:' + filtreEnfantTri });

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

		var filtrePersonneDateNaissanceDAnnee = $formulaireFiltres.find('.valeurPersonneDateNaissanceDAnnee').val();
		if(filtrePersonneDateNaissanceDAnnee != null && filtrePersonneDateNaissanceDAnnee !== '')
			filtres.push({ name: 'fq', value: 'personneDateNaissanceDAnnee:' + filtrePersonneDateNaissanceDAnnee });

		var filtrePersonneDateNaissanceMoisDAnnee = $formulaireFiltres.find('.valeurPersonneDateNaissanceMoisDAnnee').val();
		if(filtrePersonneDateNaissanceMoisDAnnee != null && filtrePersonneDateNaissanceMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'personneDateNaissanceMoisDAnnee:' + filtrePersonneDateNaissanceMoisDAnnee });

		var filtrePersonneDateNaissanceJourDeSemaine = $formulaireFiltres.find('.valeurPersonneDateNaissanceJourDeSemaine').val();
		if(filtrePersonneDateNaissanceJourDeSemaine != null && filtrePersonneDateNaissanceJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'personneDateNaissanceJourDeSemaine:' + filtrePersonneDateNaissanceJourDeSemaine });

		var filtreEnfantNomComplet = $formulaireFiltres.find('.valeurEnfantNomComplet').val();
		if(filtreEnfantNomComplet != null && filtreEnfantNomComplet !== '')
			filtres.push({ name: 'fq', value: 'enfantNomComplet:' + filtreEnfantNomComplet });
	}
	return filtres;
}

function patchEnfantScolaireVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchEnfantScolaireVals(filtres, vals, success, error);
}

function patchEnfantScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/enfant?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getEnfantScolaire(pk) {
	$.ajax({
		url: '/api/enfant/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Recherche //

async function rechercheEnfantScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheEnfantScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheEnfantScolaireVals(filtres, success, error);
}

function rechercheEnfantScolaireFiltres($formulaireFiltres) {
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

		var filtrePersonneDateNaissance = $formulaireFiltres.find('.valeurPersonneDateNaissance').val();
		if(filtrePersonneDateNaissance != null && filtrePersonneDateNaissance !== '')
			filtres.push({ name: 'fq', value: 'personneDateNaissance:' + filtrePersonneDateNaissance });

		var filtrePersonneAgeEnSeptembre = $formulaireFiltres.find('.valeurPersonneAgeEnSeptembre').val();
		if(filtrePersonneAgeEnSeptembre != null && filtrePersonneAgeEnSeptembre !== '')
			filtres.push({ name: 'fq', value: 'personneAgeEnSeptembre:' + filtrePersonneAgeEnSeptembre });

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

		var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
		if(filtreEnfantCle != null && filtreEnfantCle !== '')
			filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

		var filtreFamilleTri = $formulaireFiltres.find('.valeurFamilleTri').val();
		if(filtreFamilleTri != null && filtreFamilleTri !== '')
			filtres.push({ name: 'fq', value: 'familleTri:' + filtreFamilleTri });

		var filtreEnfantTri = $formulaireFiltres.find('.valeurEnfantTri').val();
		if(filtreEnfantTri != null && filtreEnfantTri !== '')
			filtres.push({ name: 'fq', value: 'enfantTri:' + filtreEnfantTri });

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

		var filtrePersonneDateNaissanceDAnnee = $formulaireFiltres.find('.valeurPersonneDateNaissanceDAnnee').val();
		if(filtrePersonneDateNaissanceDAnnee != null && filtrePersonneDateNaissanceDAnnee !== '')
			filtres.push({ name: 'fq', value: 'personneDateNaissanceDAnnee:' + filtrePersonneDateNaissanceDAnnee });

		var filtrePersonneDateNaissanceMoisDAnnee = $formulaireFiltres.find('.valeurPersonneDateNaissanceMoisDAnnee').val();
		if(filtrePersonneDateNaissanceMoisDAnnee != null && filtrePersonneDateNaissanceMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'personneDateNaissanceMoisDAnnee:' + filtrePersonneDateNaissanceMoisDAnnee });

		var filtrePersonneDateNaissanceJourDeSemaine = $formulaireFiltres.find('.valeurPersonneDateNaissanceJourDeSemaine').val();
		if(filtrePersonneDateNaissanceJourDeSemaine != null && filtrePersonneDateNaissanceJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'personneDateNaissanceJourDeSemaine:' + filtrePersonneDateNaissanceJourDeSemaine });

		var filtreEnfantNomComplet = $formulaireFiltres.find('.valeurEnfantNomComplet').val();
		if(filtreEnfantNomComplet != null && filtreEnfantNomComplet !== '')
			filtres.push({ name: 'fq', value: 'enfantNomComplet:' + filtreEnfantNomComplet });
	}
	return filtres;
}

function rechercheEnfantScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/enfant?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereEnfantScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-child ');
			var $span = $('<span>').attr('class', '').text(o['enfantNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherEnfantScolaireVals($formulaireFiltres, success, error);
}

function suggereEnfantScolaireInscriptionCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enfantCle'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCles_' + pk + '_enfantCle_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurInscriptionCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_inscriptionCles_" + pk + "_enfantCle_" + o['pk'] + "'); patchEnfantScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'InscriptionCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#EnfantScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheInscriptionScolaireVals(filtres, success, error);
}

// RechercheAdmin //

async function rechercheadminEnfantScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheadminEnfantScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheadminEnfantScolaireVals(filtres, success, error);
}

function rechercheadminEnfantScolaireFiltres($formulaireFiltres) {
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

		var filtrePersonneDateNaissance = $formulaireFiltres.find('.valeurPersonneDateNaissance').val();
		if(filtrePersonneDateNaissance != null && filtrePersonneDateNaissance !== '')
			filtres.push({ name: 'fq', value: 'personneDateNaissance:' + filtrePersonneDateNaissance });

		var filtrePersonneAgeEnSeptembre = $formulaireFiltres.find('.valeurPersonneAgeEnSeptembre').val();
		if(filtrePersonneAgeEnSeptembre != null && filtrePersonneAgeEnSeptembre !== '')
			filtres.push({ name: 'fq', value: 'personneAgeEnSeptembre:' + filtrePersonneAgeEnSeptembre });

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

		var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
		if(filtreEnfantCle != null && filtreEnfantCle !== '')
			filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

		var filtreFamilleTri = $formulaireFiltres.find('.valeurFamilleTri').val();
		if(filtreFamilleTri != null && filtreFamilleTri !== '')
			filtres.push({ name: 'fq', value: 'familleTri:' + filtreFamilleTri });

		var filtreEnfantTri = $formulaireFiltres.find('.valeurEnfantTri').val();
		if(filtreEnfantTri != null && filtreEnfantTri !== '')
			filtres.push({ name: 'fq', value: 'enfantTri:' + filtreEnfantTri });

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

		var filtrePersonneDateNaissanceDAnnee = $formulaireFiltres.find('.valeurPersonneDateNaissanceDAnnee').val();
		if(filtrePersonneDateNaissanceDAnnee != null && filtrePersonneDateNaissanceDAnnee !== '')
			filtres.push({ name: 'fq', value: 'personneDateNaissanceDAnnee:' + filtrePersonneDateNaissanceDAnnee });

		var filtrePersonneDateNaissanceMoisDAnnee = $formulaireFiltres.find('.valeurPersonneDateNaissanceMoisDAnnee').val();
		if(filtrePersonneDateNaissanceMoisDAnnee != null && filtrePersonneDateNaissanceMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'personneDateNaissanceMoisDAnnee:' + filtrePersonneDateNaissanceMoisDAnnee });

		var filtrePersonneDateNaissanceJourDeSemaine = $formulaireFiltres.find('.valeurPersonneDateNaissanceJourDeSemaine').val();
		if(filtrePersonneDateNaissanceJourDeSemaine != null && filtrePersonneDateNaissanceJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'personneDateNaissanceJourDeSemaine:' + filtrePersonneDateNaissanceJourDeSemaine });

		var filtreEnfantNomComplet = $formulaireFiltres.find('.valeurEnfantNomComplet').val();
		if(filtreEnfantNomComplet != null && filtreEnfantNomComplet !== '')
			filtres.push({ name: 'fq', value: 'enfantNomComplet:' + filtreEnfantNomComplet });
	}
	return filtres;
}

function rechercheadminEnfantScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/admin/enfant?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereEnfantScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-child ');
			var $span = $('<span>').attr('class', '').text(o['enfantNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherEnfantScolaireVals($formulaireFiltres, success, error);
}

function suggereEnfantScolaireInscriptionCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enfantCle'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCles_' + pk + '_enfantCle_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurInscriptionCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_inscriptionCles_" + pk + "_enfantCle_" + o['pk'] + "'); patchEnfantScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'InscriptionCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#EnfantScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheInscriptionScolaireVals(filtres, success, error);
}

async function websocketEnfantScolaire(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketEnfantScolaire', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#EnfantScolaireForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-orange ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-child w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modifier enfants');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-orange ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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
async function websocketEnfantScolaireInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherEnfantScolaireVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputEnfantScolaire' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'Pk'));
			}
			var val = o['cree'];
			if(vars.includes('cree')) {
				$('.inputEnfantScolaire' + pk + 'Cree').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'Cree').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'Cree'));
			}
			var val = o['modifie'];
			if(vars.includes('modifie')) {
				$('.inputEnfantScolaire' + pk + 'Modifie').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'Modifie').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'Modifie'));
			}
			var val = o['objetId'];
			if(vars.includes('objetId')) {
				$('.inputEnfantScolaire' + pk + 'ObjetId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'ObjetId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'ObjetId'));
			}
			var val = o['archive'];
			if(vars.includes('archive')) {
				$('.inputEnfantScolaire' + pk + 'Archive').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'Archive').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'Archive'));
			}
			var val = o['supprime'];
			if(vars.includes('supprime')) {
				$('.inputEnfantScolaire' + pk + 'Supprime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'Supprime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'Supprime'));
			}
			var val = o['personnePrenom'];
			if(vars.includes('personnePrenom')) {
				$('.inputEnfantScolaire' + pk + 'PersonnePrenom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'PersonnePrenom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'PersonnePrenom'));
			}
			var val = o['familleNom'];
			if(vars.includes('familleNom')) {
				$('.inputEnfantScolaire' + pk + 'FamilleNom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'FamilleNom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'FamilleNom'));
			}
			var val = o['personnePrenomPrefere'];
			if(vars.includes('personnePrenomPrefere')) {
				$('.inputEnfantScolaire' + pk + 'PersonnePrenomPrefere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'PersonnePrenomPrefere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'PersonnePrenomPrefere'));
			}
			var val = o['personneDateNaissance'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('personneDateNaissance')) {
				$('.inputEnfantScolaire' + pk + 'PersonneDateNaissance').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'PersonneDateNaissance').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'PersonneDateNaissance'));
			}
			var val = o['personneAgeEnSeptembre'];
			if(vars.includes('personneAgeEnSeptembre')) {
				$('.inputEnfantScolaire' + pk + 'PersonneAgeEnSeptembre').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'PersonneAgeEnSeptembre').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'PersonneAgeEnSeptembre'));
			}
			var val = o['photo'];
			if(vars.includes('photo')) {
				if(val === undefined)
					val = null;
				$('.imgEnfantScolaire' + pk + 'Photo').each(function() {
					if(val !== $(this).attr('src'))
						$(this).attr('src', val);
				});
				$('.inputEnfantScolaire' + pk + 'Photo').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'Photo').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'Photo'));
			}
			var val = o['inscriptionCles'];
			if(vars.includes('inscriptionCles')) {
				$('.inputEnfantScolaire' + pk + 'InscriptionCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'InscriptionCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'InscriptionCles'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputEnfantScolaire' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputEnfantScolaire' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'Id'));
			}
			var val = o['classeNomCanonique'];
			if(vars.includes('classeNomCanonique')) {
				$('.inputEnfantScolaire' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'ClasseNomCanonique'));
			}
			var val = o['classeNomSimple'];
			if(vars.includes('classeNomSimple')) {
				$('.inputEnfantScolaire' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'ClasseNomSimple'));
			}
			var val = o['classeNomsCanoniques'];
			if(vars.includes('classeNomsCanoniques')) {
				$('.inputEnfantScolaire' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'ClasseNomsCanoniques'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputEnfantScolaire' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'SessionId'));
			}
			var val = o['utilisateurId'];
			if(vars.includes('utilisateurId')) {
				$('.inputEnfantScolaire' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'UtilisateurId'));
			}
			var val = o['utilisateurCle'];
			if(vars.includes('utilisateurCle')) {
				$('.inputEnfantScolaire' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'UtilisateurCle'));
			}
			var val = o['sauvegardes'];
			if(vars.includes('sauvegardes')) {
				$('.inputEnfantScolaire' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'Sauvegardes'));
			}
			var val = o['objetTitre'];
			if(vars.includes('objetTitre')) {
				$('.inputEnfantScolaire' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'ObjetTitre'));
			}
			var val = o['objetSuggere'];
			if(vars.includes('objetSuggere')) {
				$('.inputEnfantScolaire' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'ObjetSuggere'));
			}
			var val = o['objetTexte'];
			if(vars.includes('objetTexte')) {
				$('.inputEnfantScolaire' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'ObjetTexte'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputEnfantScolaire' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputEnfantScolaire' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputEnfantScolaire' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'PageUrlApi'));
			}
			var val = o['enfantCle'];
			if(vars.includes('enfantCle')) {
				$('.inputEnfantScolaire' + pk + 'EnfantCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'EnfantCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'EnfantCle'));
			}
			var val = o['familleTri'];
			if(vars.includes('familleTri')) {
				$('.inputEnfantScolaire' + pk + 'FamilleTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'FamilleTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'FamilleTri'));
			}
			var val = o['enfantTri'];
			if(vars.includes('enfantTri')) {
				$('.inputEnfantScolaire' + pk + 'EnfantTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'EnfantTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'EnfantTri'));
			}
			var val = o['utilisateurCles'];
			if(vars.includes('utilisateurCles')) {
				$('.inputEnfantScolaire' + pk + 'UtilisateurCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'UtilisateurCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'UtilisateurCles'));
			}
			var val = o['ecoleCles'];
			if(vars.includes('ecoleCles')) {
				$('.inputEnfantScolaire' + pk + 'EcoleCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'EcoleCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'EcoleCles'));
			}
			var val = o['anneeCles'];
			if(vars.includes('anneeCles')) {
				$('.inputEnfantScolaire' + pk + 'AnneeCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'AnneeCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'AnneeCles'));
			}
			var val = o['saisonCles'];
			if(vars.includes('saisonCles')) {
				$('.inputEnfantScolaire' + pk + 'SaisonCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'SaisonCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'SaisonCles'));
			}
			var val = o['sessionCles'];
			if(vars.includes('sessionCles')) {
				$('.inputEnfantScolaire' + pk + 'SessionCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'SessionCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'SessionCles'));
			}
			var val = o['ageCles'];
			if(vars.includes('ageCles')) {
				$('.inputEnfantScolaire' + pk + 'AgeCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'AgeCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'AgeCles'));
			}
			var val = o['personneNomComplet'];
			if(vars.includes('personneNomComplet')) {
				$('.inputEnfantScolaire' + pk + 'PersonneNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'PersonneNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'PersonneNomComplet'));
			}
			var val = o['personneNomCompletPrefere'];
			if(vars.includes('personneNomCompletPrefere')) {
				$('.inputEnfantScolaire' + pk + 'PersonneNomCompletPrefere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'PersonneNomCompletPrefere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'PersonneNomCompletPrefere'));
			}
			var val = o['personneNomFormel'];
			if(vars.includes('personneNomFormel')) {
				$('.inputEnfantScolaire' + pk + 'PersonneNomFormel').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'PersonneNomFormel').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'PersonneNomFormel'));
			}
			var val = o['personneDateNaissanceDAnnee'];
			if(vars.includes('personneDateNaissanceDAnnee')) {
				$('.inputEnfantScolaire' + pk + 'PersonneDateNaissanceDAnnee').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'PersonneDateNaissanceDAnnee').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'PersonneDateNaissanceDAnnee'));
			}
			var val = o['personneDateNaissanceMoisDAnnee'];
			if(vars.includes('personneDateNaissanceMoisDAnnee')) {
				$('.inputEnfantScolaire' + pk + 'PersonneDateNaissanceMoisDAnnee').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'PersonneDateNaissanceMoisDAnnee').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'PersonneDateNaissanceMoisDAnnee'));
			}
			var val = o['personneDateNaissanceJourDeSemaine'];
			if(vars.includes('personneDateNaissanceJourDeSemaine')) {
				$('.inputEnfantScolaire' + pk + 'PersonneDateNaissanceJourDeSemaine').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'PersonneDateNaissanceJourDeSemaine').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'PersonneDateNaissanceJourDeSemaine'));
			}
			var val = o['enfantNomComplet'];
			if(vars.includes('enfantNomComplet')) {
				$('.inputEnfantScolaire' + pk + 'EnfantNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varEnfantScolaire' + pk + 'EnfantNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputEnfantScolaire' + pk + 'EnfantNomComplet'));
			}
		});
	}
}
