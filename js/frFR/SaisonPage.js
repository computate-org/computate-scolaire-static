
// POST //

async function postSaisonScolaire($formulaireValeurs, success, error) {
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

	var valeurSaisonDateDebut = $formulaireValeurs.find('.valeurSaisonDateDebut').val();
	if(valeurSaisonDateDebut != null && valeurSaisonDateDebut !== '')
		vals['saisonDateDebut'] = valeurSaisonDateDebut;

	var valeurSaisonFuture = $formulaireValeurs.find('.valeurSaisonFuture').prop('checked');
	if(valeurSaisonFuture != null && valeurSaisonFuture !== '')
		vals['saisonFuture'] = valeurSaisonFuture;

	var valeurAnneeCle = $formulaireValeurs.find('.valeurAnneeCle').val();
	if(valeurAnneeCle != null && valeurAnneeCle !== '')
		vals['anneeCle'] = valeurAnneeCle;

	var valeurSessionCles = [];
	$formulaireValeurs.find('input.valeurSessionCles:checked').each(function(index) {
		valeurSessionCles.push($(this).val());
	});
	if(valeurSessionCles.length > 0)
		vals['sessionCles'] = valeurSessionCles;

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

	var valeurSaisonEte = $formulaireValeurs.find('.valeurSaisonEte').prop('checked');
	if(valeurSaisonEte != null && valeurSaisonEte !== '')
		vals['saisonEte'] = valeurSaisonEte;

	var valeurSaisonHiver = $formulaireValeurs.find('.valeurSaisonHiver').prop('checked');
	if(valeurSaisonHiver != null && valeurSaisonHiver !== '')
		vals['saisonHiver'] = valeurSaisonHiver;

	$.ajax({
		url: '/api/saison'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSaisonScolaireVals(vals, success, error) {
	$.ajax({
		url: '/api/saison'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportSaisonScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTImport_liste').val();
	if(json != null && json !== '')
		putimportSaisonScolaireVals(JSON.parse(json), success, error);
}

function putimportSaisonScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/saison/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTFusion //

async function putfusionSaisonScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTFusion_liste').val();
	if(json != null && json !== '')
		putfusionSaisonScolaireVals(JSON.parse(json), success, error);
}

function putfusionSaisonScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/saison/fusion'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopie //

async function putcopieSaisonScolaire($formulaireValeurs, pk, success, error) {
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

	var valeurSaisonDateDebut = $formulaireValeurs.find('.valeurSaisonDateDebut').val();
	if(valeurSaisonDateDebut != null && valeurSaisonDateDebut !== '')
		vals['saisonDateDebut'] = valeurSaisonDateDebut;

	var valeurSaisonFuture = $formulaireValeurs.find('.valeurSaisonFuture').prop('checked');
	if(valeurSaisonFuture != null && valeurSaisonFuture !== '')
		vals['saisonFuture'] = valeurSaisonFuture;

	var valeurAnneeCle = $formulaireValeurs.find('input.valeurAnneeCle:checked').val();
	if(valeurAnneeCle != null && valeurAnneeCle !== '')
		vals['anneeCle'] = valeurAnneeCle;

	var valeurSessionCles = $formulaireValeurs.find('input.valeurSessionCles:checked').val();
	if(valeurSessionCles != null && valeurSessionCles !== '')
		vals['sessionCles'] = [valeurSessionCles];

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

	var valeurSaisonEte = $formulaireValeurs.find('.valeurSaisonEte').prop('checked');
	if(valeurSaisonEte != null && valeurSaisonEte !== '')
		vals['saisonEte'] = valeurSaisonEte;

	var valeurSaisonHiver = $formulaireValeurs.find('.valeurSaisonHiver').prop('checked');
	if(valeurSaisonHiver != null && valeurSaisonHiver !== '')
		vals['saisonHiver'] = valeurSaisonHiver;

	putcopieSaisonScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopieSaisonScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/saison/copie?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSaisonScolaire($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchSaisonScolaireFiltres($formulaireFiltres);

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

	var valeurSaisonDateDebut = $formulaireValeurs.find('.valeurSaisonDateDebut').val();
	var removeSaisonDateDebut = $formulaireValeurs.find('.removeSaisonDateDebut').val() === 'true';
	var setSaisonDateDebut = removeSaisonDateDebut ? null : $formulaireValeurs.find('.setSaisonDateDebut').val();
	var addSaisonDateDebut = $formulaireValeurs.find('.addSaisonDateDebut').val();
	var setMoment = setSaisonDateDebut ? moment(setSaisonDateDebut, 'DD-MM-YYYY') : null; 
	var addMoment = addSaisonDateDebut ? moment(addSaisonDateDebut, 'DD-MM-YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setSaisonDateDebut = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addSaisonDateDebut = s;
	} 
	if(removeSaisonDateDebut || setSaisonDateDebut != null && setSaisonDateDebut !== '')
		vals['setSaisonDateDebut'] = setSaisonDateDebut;
	if(addSaisonDateDebut != null && addSaisonDateDebut !== '')
		vals['addSaisonDateDebut'] = addSaisonDateDebut;
	var removeSaisonDateDebut = $formulaireValeurs.find('.removeSaisonDateDebut').val();
	if(removeSaisonDateDebut != null && removeSaisonDateDebut !== '')
		vals['removeSaisonDateDebut'] = removeSaisonDateDebut;

	var valeurSaisonFuture = $formulaireValeurs.find('.valeurSaisonFuture').prop('checked');
	var removeSaisonFuture = $formulaireValeurs.find('.removeSaisonFuture').val() === 'true';
	var valeurSaisonFutureSelectVal = $formulaireValeurs.find('select.setSaisonFuture').val();
	var valeurSaisonFuture = null;
	if(valeurSaisonFutureSelectVal != null && valeurSaisonFutureSelectVal !== '')
		valeurSaisonFuture = valeurSaisonFutureSelectVal == 'true';
	var setSaisonFuture = removeSaisonFuture ? null : valeurSaisonFuture;
	var addSaisonFuture = $formulaireValeurs.find('.addSaisonFuture').prop('checked');
	if(removeSaisonFuture || setSaisonFuture != null && setSaisonFuture !== '')
		vals['setSaisonFuture'] = setSaisonFuture;
	if(addSaisonFuture != null && addSaisonFuture !== '')
		vals['addSaisonFuture'] = addSaisonFuture;
	var removeSaisonFuture = $formulaireValeurs.find('.removeSaisonFuture').prop('checked');
	if(removeSaisonFuture != null && removeSaisonFuture !== '')
		vals['removeSaisonFuture'] = removeSaisonFuture;

	var valeurAnneeCle = $formulaireValeurs.find('input.valeurAnneeCle:checked').val();
	if(valeurAnneeCle != null && valeurAnneeCle !== '')
		vals['setAnneeCle'] = valeurAnneeCle;

	var valeurSessionCles = $formulaireValeurs.find('input.valeurSessionCles:checked').val();
	if(valeurSessionCles != null && valeurSessionCles !== '')
		vals['addSessionCles'] = valeurSessionCles;

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

	var valeurSaisonEte = $formulaireValeurs.find('.valeurSaisonEte').prop('checked');
	var removeSaisonEte = $formulaireValeurs.find('.removeSaisonEte').val() === 'true';
	var valeurSaisonEteSelectVal = $formulaireValeurs.find('select.setSaisonEte').val();
	var valeurSaisonEte = null;
	if(valeurSaisonEteSelectVal != null && valeurSaisonEteSelectVal !== '')
		valeurSaisonEte = valeurSaisonEteSelectVal == 'true';
	var setSaisonEte = removeSaisonEte ? null : valeurSaisonEte;
	var addSaisonEte = $formulaireValeurs.find('.addSaisonEte').prop('checked');
	if(removeSaisonEte || setSaisonEte != null && setSaisonEte !== '')
		vals['setSaisonEte'] = setSaisonEte;
	if(addSaisonEte != null && addSaisonEte !== '')
		vals['addSaisonEte'] = addSaisonEte;
	var removeSaisonEte = $formulaireValeurs.find('.removeSaisonEte').prop('checked');
	if(removeSaisonEte != null && removeSaisonEte !== '')
		vals['removeSaisonEte'] = removeSaisonEte;

	var valeurSaisonHiver = $formulaireValeurs.find('.valeurSaisonHiver').prop('checked');
	var removeSaisonHiver = $formulaireValeurs.find('.removeSaisonHiver').val() === 'true';
	var valeurSaisonHiverSelectVal = $formulaireValeurs.find('select.setSaisonHiver').val();
	var valeurSaisonHiver = null;
	if(valeurSaisonHiverSelectVal != null && valeurSaisonHiverSelectVal !== '')
		valeurSaisonHiver = valeurSaisonHiverSelectVal == 'true';
	var setSaisonHiver = removeSaisonHiver ? null : valeurSaisonHiver;
	var addSaisonHiver = $formulaireValeurs.find('.addSaisonHiver').prop('checked');
	if(removeSaisonHiver || setSaisonHiver != null && setSaisonHiver !== '')
		vals['setSaisonHiver'] = setSaisonHiver;
	if(addSaisonHiver != null && addSaisonHiver !== '')
		vals['addSaisonHiver'] = addSaisonHiver;
	var removeSaisonHiver = $formulaireValeurs.find('.removeSaisonHiver').prop('checked');
	if(removeSaisonHiver != null && removeSaisonHiver !== '')
		vals['removeSaisonHiver'] = removeSaisonHiver;

	patchSaisonScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSaisonScolaireFiltres($formulaireFiltres) {
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

		var filtreSaisonDateDebut = $formulaireFiltres.find('.valeurSaisonDateDebut').val();
		if(filtreSaisonDateDebut != null && filtreSaisonDateDebut !== '')
			filtres.push({ name: 'fq', value: 'saisonDateDebut:' + filtreSaisonDateDebut });

		var $filtreSaisonFutureCheckbox = $formulaireFiltres.find('input.valeurSaisonFuture[type = "checkbox"]');
		var $filtreSaisonFutureSelect = $formulaireFiltres.find('select.valeurSaisonFuture');
		var filtreSaisonFuture = $filtreSaisonFutureSelect.length ? $filtreSaisonFutureSelect.val() : $filtreSaisonFutureCheckbox.prop('checked');
		var filtreSaisonFutureSelectVal = $formulaireFiltres.find('select.filtreSaisonFuture').val();
		var filtreSaisonFuture = null;
		if(filtreSaisonFutureSelectVal !== '')
			filtreSaisonFuture = filtreSaisonFutureSelectVal == 'true';
		if(filtreSaisonFuture != null && filtreSaisonFuture === true)
			filtres.push({ name: 'fq', value: 'saisonFuture:' + filtreSaisonFuture });

		var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
		if(filtreAnneeCle != null && filtreAnneeCle !== '')
			filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

		var filtreSessionCles = $formulaireFiltres.find('.valeurSessionCles').val();
		if(filtreSessionCles != null && filtreSessionCles !== '')
			filtres.push({ name: 'fq', value: 'sessionCles:' + filtreSessionCles });

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

		var filtreSaisonCle = $formulaireFiltres.find('.valeurSaisonCle').val();
		if(filtreSaisonCle != null && filtreSaisonCle !== '')
			filtres.push({ name: 'fq', value: 'saisonCle:' + filtreSaisonCle });

		var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
		if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

		var filtreScolaireTri = $formulaireFiltres.find('.valeurScolaireTri').val();
		if(filtreScolaireTri != null && filtreScolaireTri !== '')
			filtres.push({ name: 'fq', value: 'scolaireTri:' + filtreScolaireTri });

		var filtreEcoleTri = $formulaireFiltres.find('.valeurEcoleTri').val();
		if(filtreEcoleTri != null && filtreEcoleTri !== '')
			filtres.push({ name: 'fq', value: 'ecoleTri:' + filtreEcoleTri });

		var filtreAnneeTri = $formulaireFiltres.find('.valeurAnneeTri').val();
		if(filtreAnneeTri != null && filtreAnneeTri !== '')
			filtres.push({ name: 'fq', value: 'anneeTri:' + filtreAnneeTri });

		var filtreSaisonTri = $formulaireFiltres.find('.valeurSaisonTri').val();
		if(filtreSaisonTri != null && filtreSaisonTri !== '')
			filtres.push({ name: 'fq', value: 'saisonTri:' + filtreSaisonTri });

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

		var filtreEcoleNom = $formulaireFiltres.find('.valeurEcoleNom').val();
		if(filtreEcoleNom != null && filtreEcoleNom !== '')
			filtres.push({ name: 'fq', value: 'ecoleNom:' + filtreEcoleNom });

		var filtreEcoleNomComplet = $formulaireFiltres.find('.valeurEcoleNomComplet').val();
		if(filtreEcoleNomComplet != null && filtreEcoleNomComplet !== '')
			filtres.push({ name: 'fq', value: 'ecoleNomComplet:' + filtreEcoleNomComplet });

		var filtreEcoleEmplacement = $formulaireFiltres.find('.valeurEcoleEmplacement').val();
		if(filtreEcoleEmplacement != null && filtreEcoleEmplacement !== '')
			filtres.push({ name: 'fq', value: 'ecoleEmplacement:' + filtreEcoleEmplacement });

		var filtreEcoleAddresse = $formulaireFiltres.find('.valeurEcoleAddresse').val();
		if(filtreEcoleAddresse != null && filtreEcoleAddresse !== '')
			filtres.push({ name: 'fq', value: 'ecoleAddresse:' + filtreEcoleAddresse });

		var filtreEcoleNumeroTelephone = $formulaireFiltres.find('.valeurEcoleNumeroTelephone').val();
		if(filtreEcoleNumeroTelephone != null && filtreEcoleNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'ecoleNumeroTelephone:' + filtreEcoleNumeroTelephone });

		var filtreEcoleForm = $formulaireFiltres.find('.valeurEcoleForm').val();
		if(filtreEcoleForm != null && filtreEcoleForm !== '')
			filtres.push({ name: 'fq', value: 'ecoleForm:' + filtreEcoleForm });

		var filtreEcoleNumero = $formulaireFiltres.find('.valeurEcoleNumero').val();
		if(filtreEcoleNumero != null && filtreEcoleNumero !== '')
			filtres.push({ name: 'fq', value: 'ecoleNumero:' + filtreEcoleNumero });

		var filtreEcoleAdministrateurNom = $formulaireFiltres.find('.valeurEcoleAdministrateurNom').val();
		if(filtreEcoleAdministrateurNom != null && filtreEcoleAdministrateurNom !== '')
			filtres.push({ name: 'fq', value: 'ecoleAdministrateurNom:' + filtreEcoleAdministrateurNom });

		var filtreAnneeDebut = $formulaireFiltres.find('.valeurAnneeDebut').val();
		if(filtreAnneeDebut != null && filtreAnneeDebut !== '')
			filtres.push({ name: 'fq', value: 'anneeDebut:' + filtreAnneeDebut });

		var filtreAnneeFin = $formulaireFiltres.find('.valeurAnneeFin').val();
		if(filtreAnneeFin != null && filtreAnneeFin !== '')
			filtres.push({ name: 'fq', value: 'anneeFin:' + filtreAnneeFin });

		var filtreAnneeFraisInscription = $formulaireFiltres.find('.valeurAnneeFraisInscription').val();
		if(filtreAnneeFraisInscription != null && filtreAnneeFraisInscription !== '')
			filtres.push({ name: 'fq', value: 'anneeFraisInscription:' + filtreAnneeFraisInscription });

		var $filtreSaisonEteCheckbox = $formulaireFiltres.find('input.valeurSaisonEte[type = "checkbox"]');
		var $filtreSaisonEteSelect = $formulaireFiltres.find('select.valeurSaisonEte');
		var filtreSaisonEte = $filtreSaisonEteSelect.length ? $filtreSaisonEteSelect.val() : $filtreSaisonEteCheckbox.prop('checked');
		var filtreSaisonEteSelectVal = $formulaireFiltres.find('select.filtreSaisonEte').val();
		var filtreSaisonEte = null;
		if(filtreSaisonEteSelectVal !== '')
			filtreSaisonEte = filtreSaisonEteSelectVal == 'true';
		if(filtreSaisonEte != null && filtreSaisonEte === true)
			filtres.push({ name: 'fq', value: 'saisonEte:' + filtreSaisonEte });

		var $filtreSaisonHiverCheckbox = $formulaireFiltres.find('input.valeurSaisonHiver[type = "checkbox"]');
		var $filtreSaisonHiverSelect = $formulaireFiltres.find('select.valeurSaisonHiver');
		var filtreSaisonHiver = $filtreSaisonHiverSelect.length ? $filtreSaisonHiverSelect.val() : $filtreSaisonHiverCheckbox.prop('checked');
		var filtreSaisonHiverSelectVal = $formulaireFiltres.find('select.filtreSaisonHiver').val();
		var filtreSaisonHiver = null;
		if(filtreSaisonHiverSelectVal !== '')
			filtreSaisonHiver = filtreSaisonHiverSelectVal == 'true';
		if(filtreSaisonHiver != null && filtreSaisonHiver === true)
			filtres.push({ name: 'fq', value: 'saisonHiver:' + filtreSaisonHiver });

		var filtreSaisonNomCourt = $formulaireFiltres.find('.valeurSaisonNomCourt').val();
		if(filtreSaisonNomCourt != null && filtreSaisonNomCourt !== '')
			filtres.push({ name: 'fq', value: 'saisonNomCourt:' + filtreSaisonNomCourt });

		var filtreSaisonNomComplet = $formulaireFiltres.find('.valeurSaisonNomComplet').val();
		if(filtreSaisonNomComplet != null && filtreSaisonNomComplet !== '')
			filtres.push({ name: 'fq', value: 'saisonNomComplet:' + filtreSaisonNomComplet });
	}
	return filtres;
}

function patchSaisonScolaireVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSaisonScolaireVals(filtres, vals, success, error);
}

function patchSaisonScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/saison?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSaisonScolaire(pk) {
	$.ajax({
		url: '/api/saison/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Recherche //

async function rechercheSaisonScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheSaisonScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheSaisonScolaireVals(filtres, success, error);
}

function rechercheSaisonScolaireFiltres($formulaireFiltres) {
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

		var filtreSaisonDateDebut = $formulaireFiltres.find('.valeurSaisonDateDebut').val();
		if(filtreSaisonDateDebut != null && filtreSaisonDateDebut !== '')
			filtres.push({ name: 'fq', value: 'saisonDateDebut:' + filtreSaisonDateDebut });

		var $filtreSaisonFutureCheckbox = $formulaireFiltres.find('input.valeurSaisonFuture[type = "checkbox"]');
		var $filtreSaisonFutureSelect = $formulaireFiltres.find('select.valeurSaisonFuture');
		var filtreSaisonFuture = $filtreSaisonFutureSelect.length ? $filtreSaisonFutureSelect.val() : $filtreSaisonFutureCheckbox.prop('checked');
		var filtreSaisonFutureSelectVal = $formulaireFiltres.find('select.filtreSaisonFuture').val();
		var filtreSaisonFuture = null;
		if(filtreSaisonFutureSelectVal !== '')
			filtreSaisonFuture = filtreSaisonFutureSelectVal == 'true';
		if(filtreSaisonFuture != null && filtreSaisonFuture === true)
			filtres.push({ name: 'fq', value: 'saisonFuture:' + filtreSaisonFuture });

		var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
		if(filtreAnneeCle != null && filtreAnneeCle !== '')
			filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

		var filtreSessionCles = $formulaireFiltres.find('.valeurSessionCles').val();
		if(filtreSessionCles != null && filtreSessionCles !== '')
			filtres.push({ name: 'fq', value: 'sessionCles:' + filtreSessionCles });

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

		var filtreSaisonCle = $formulaireFiltres.find('.valeurSaisonCle').val();
		if(filtreSaisonCle != null && filtreSaisonCle !== '')
			filtres.push({ name: 'fq', value: 'saisonCle:' + filtreSaisonCle });

		var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
		if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

		var filtreScolaireTri = $formulaireFiltres.find('.valeurScolaireTri').val();
		if(filtreScolaireTri != null && filtreScolaireTri !== '')
			filtres.push({ name: 'fq', value: 'scolaireTri:' + filtreScolaireTri });

		var filtreEcoleTri = $formulaireFiltres.find('.valeurEcoleTri').val();
		if(filtreEcoleTri != null && filtreEcoleTri !== '')
			filtres.push({ name: 'fq', value: 'ecoleTri:' + filtreEcoleTri });

		var filtreAnneeTri = $formulaireFiltres.find('.valeurAnneeTri').val();
		if(filtreAnneeTri != null && filtreAnneeTri !== '')
			filtres.push({ name: 'fq', value: 'anneeTri:' + filtreAnneeTri });

		var filtreSaisonTri = $formulaireFiltres.find('.valeurSaisonTri').val();
		if(filtreSaisonTri != null && filtreSaisonTri !== '')
			filtres.push({ name: 'fq', value: 'saisonTri:' + filtreSaisonTri });

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

		var filtreEcoleNom = $formulaireFiltres.find('.valeurEcoleNom').val();
		if(filtreEcoleNom != null && filtreEcoleNom !== '')
			filtres.push({ name: 'fq', value: 'ecoleNom:' + filtreEcoleNom });

		var filtreEcoleNomComplet = $formulaireFiltres.find('.valeurEcoleNomComplet').val();
		if(filtreEcoleNomComplet != null && filtreEcoleNomComplet !== '')
			filtres.push({ name: 'fq', value: 'ecoleNomComplet:' + filtreEcoleNomComplet });

		var filtreEcoleEmplacement = $formulaireFiltres.find('.valeurEcoleEmplacement').val();
		if(filtreEcoleEmplacement != null && filtreEcoleEmplacement !== '')
			filtres.push({ name: 'fq', value: 'ecoleEmplacement:' + filtreEcoleEmplacement });

		var filtreEcoleAddresse = $formulaireFiltres.find('.valeurEcoleAddresse').val();
		if(filtreEcoleAddresse != null && filtreEcoleAddresse !== '')
			filtres.push({ name: 'fq', value: 'ecoleAddresse:' + filtreEcoleAddresse });

		var filtreEcoleNumeroTelephone = $formulaireFiltres.find('.valeurEcoleNumeroTelephone').val();
		if(filtreEcoleNumeroTelephone != null && filtreEcoleNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'ecoleNumeroTelephone:' + filtreEcoleNumeroTelephone });

		var filtreEcoleForm = $formulaireFiltres.find('.valeurEcoleForm').val();
		if(filtreEcoleForm != null && filtreEcoleForm !== '')
			filtres.push({ name: 'fq', value: 'ecoleForm:' + filtreEcoleForm });

		var filtreEcoleNumero = $formulaireFiltres.find('.valeurEcoleNumero').val();
		if(filtreEcoleNumero != null && filtreEcoleNumero !== '')
			filtres.push({ name: 'fq', value: 'ecoleNumero:' + filtreEcoleNumero });

		var filtreEcoleAdministrateurNom = $formulaireFiltres.find('.valeurEcoleAdministrateurNom').val();
		if(filtreEcoleAdministrateurNom != null && filtreEcoleAdministrateurNom !== '')
			filtres.push({ name: 'fq', value: 'ecoleAdministrateurNom:' + filtreEcoleAdministrateurNom });

		var filtreAnneeDebut = $formulaireFiltres.find('.valeurAnneeDebut').val();
		if(filtreAnneeDebut != null && filtreAnneeDebut !== '')
			filtres.push({ name: 'fq', value: 'anneeDebut:' + filtreAnneeDebut });

		var filtreAnneeFin = $formulaireFiltres.find('.valeurAnneeFin').val();
		if(filtreAnneeFin != null && filtreAnneeFin !== '')
			filtres.push({ name: 'fq', value: 'anneeFin:' + filtreAnneeFin });

		var filtreAnneeFraisInscription = $formulaireFiltres.find('.valeurAnneeFraisInscription').val();
		if(filtreAnneeFraisInscription != null && filtreAnneeFraisInscription !== '')
			filtres.push({ name: 'fq', value: 'anneeFraisInscription:' + filtreAnneeFraisInscription });

		var $filtreSaisonEteCheckbox = $formulaireFiltres.find('input.valeurSaisonEte[type = "checkbox"]');
		var $filtreSaisonEteSelect = $formulaireFiltres.find('select.valeurSaisonEte');
		var filtreSaisonEte = $filtreSaisonEteSelect.length ? $filtreSaisonEteSelect.val() : $filtreSaisonEteCheckbox.prop('checked');
		var filtreSaisonEteSelectVal = $formulaireFiltres.find('select.filtreSaisonEte').val();
		var filtreSaisonEte = null;
		if(filtreSaisonEteSelectVal !== '')
			filtreSaisonEte = filtreSaisonEteSelectVal == 'true';
		if(filtreSaisonEte != null && filtreSaisonEte === true)
			filtres.push({ name: 'fq', value: 'saisonEte:' + filtreSaisonEte });

		var $filtreSaisonHiverCheckbox = $formulaireFiltres.find('input.valeurSaisonHiver[type = "checkbox"]');
		var $filtreSaisonHiverSelect = $formulaireFiltres.find('select.valeurSaisonHiver');
		var filtreSaisonHiver = $filtreSaisonHiverSelect.length ? $filtreSaisonHiverSelect.val() : $filtreSaisonHiverCheckbox.prop('checked');
		var filtreSaisonHiverSelectVal = $formulaireFiltres.find('select.filtreSaisonHiver').val();
		var filtreSaisonHiver = null;
		if(filtreSaisonHiverSelectVal !== '')
			filtreSaisonHiver = filtreSaisonHiverSelectVal == 'true';
		if(filtreSaisonHiver != null && filtreSaisonHiver === true)
			filtres.push({ name: 'fq', value: 'saisonHiver:' + filtreSaisonHiver });

		var filtreSaisonNomCourt = $formulaireFiltres.find('.valeurSaisonNomCourt').val();
		if(filtreSaisonNomCourt != null && filtreSaisonNomCourt !== '')
			filtres.push({ name: 'fq', value: 'saisonNomCourt:' + filtreSaisonNomCourt });

		var filtreSaisonNomComplet = $formulaireFiltres.find('.valeurSaisonNomComplet').val();
		if(filtreSaisonNomComplet != null && filtreSaisonNomComplet !== '')
			filtres.push({ name: 'fq', value: 'saisonNomComplet:' + filtreSaisonNomComplet });
	}
	return filtres;
}

function rechercheSaisonScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/saison?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereSaisonScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-sun ');
			var $span = $('<span>').attr('class', '').text(o['saisonNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherSaisonScolaireVals($formulaireFiltres, success, error);
}

function suggereSaisonScolaireAnneeCle(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-calendar-check ');
			var $span = $('<span>').attr('class', '').text(o['anneeNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['saisonCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_anneeCle_' + pk + '_saisonCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurAnneeCle w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_anneeCle_" + pk + "_saisonCles_" + o['pk'] + "'); patchSaisonScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'AnneeCle']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SaisonScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheAnneeScolaireVals(filtres, success, error);
}

function suggereSaisonScolaireSessionCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-graduation-cap ');
			var $span = $('<span>').attr('class', '').text(o['sessionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['saisonCle'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_sessionCles_' + pk + '_saisonCle_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurSessionCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_sessionCles_" + pk + "_saisonCle_" + o['pk'] + "'); patchSaisonScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'SessionCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SaisonScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheSessionScolaireVals(filtres, success, error);
}

async function websocketSaisonScolaire(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSaisonScolaire', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SaisonScolaireForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-yellow ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-sun w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modifier ');
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

		window.eventBus.registerHandler('websocketAnneeScolaire', function (error, message) {
			$('#Page_anneeCle').trigger('oninput');
			$('#Page_anneeCle_ajouter').text('ajouter une année');
			$('#Page_anneeCle_ajouter').removeClass('w3-disabled');
			$('#Page_anneeCle_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSessionScolaire', function (error, message) {
			$('#Page_sessionCles').trigger('oninput');
			$('#Page_sessionCles_ajouter').text('ajouter une session');
			$('#Page_sessionCles_ajouter').removeClass('w3-disabled');
			$('#Page_sessionCles_ajouter').attr('disabled', false);
		});
	}
}
async function websocketSaisonScolaireInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherSaisonScolaireVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputSaisonScolaire' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'Pk'));
			}
			var val = o['cree'];
			if(vars.includes('cree')) {
				$('.inputSaisonScolaire' + pk + 'Cree').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'Cree').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'Cree'));
			}
			var val = o['modifie'];
			if(vars.includes('modifie')) {
				$('.inputSaisonScolaire' + pk + 'Modifie').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'Modifie').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'Modifie'));
			}
			var val = o['objetId'];
			if(vars.includes('objetId')) {
				$('.inputSaisonScolaire' + pk + 'ObjetId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'ObjetId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'ObjetId'));
			}
			var val = o['archive'];
			if(vars.includes('archive')) {
				$('.inputSaisonScolaire' + pk + 'Archive').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'Archive').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'Archive'));
			}
			var val = o['supprime'];
			if(vars.includes('supprime')) {
				$('.inputSaisonScolaire' + pk + 'Supprime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'Supprime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'Supprime'));
			}
			var val = o['saisonDateDebut'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('saisonDateDebut')) {
				$('.inputSaisonScolaire' + pk + 'SaisonDateDebut').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'SaisonDateDebut').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'SaisonDateDebut'));
			}
			var val = o['saisonFuture'];
			if(vars.includes('saisonFuture')) {
				$('.inputSaisonScolaire' + pk + 'SaisonFuture').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'SaisonFuture').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'SaisonFuture'));
			}
			var val = o['anneeCle'];
			if(vars.includes('anneeCle')) {
				$('.inputSaisonScolaire' + pk + 'AnneeCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'AnneeCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'AnneeCle'));
			}
			var val = o['sessionCles'];
			if(vars.includes('sessionCles')) {
				$('.inputSaisonScolaire' + pk + 'SessionCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'SessionCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'SessionCles'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSaisonScolaire' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSaisonScolaire' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'Id'));
			}
			var val = o['classeNomCanonique'];
			if(vars.includes('classeNomCanonique')) {
				$('.inputSaisonScolaire' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'ClasseNomCanonique'));
			}
			var val = o['classeNomSimple'];
			if(vars.includes('classeNomSimple')) {
				$('.inputSaisonScolaire' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'ClasseNomSimple'));
			}
			var val = o['classeNomsCanoniques'];
			if(vars.includes('classeNomsCanoniques')) {
				$('.inputSaisonScolaire' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'ClasseNomsCanoniques'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSaisonScolaire' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'SessionId'));
			}
			var val = o['utilisateurId'];
			if(vars.includes('utilisateurId')) {
				$('.inputSaisonScolaire' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'UtilisateurId'));
			}
			var val = o['utilisateurCle'];
			if(vars.includes('utilisateurCle')) {
				$('.inputSaisonScolaire' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'UtilisateurCle'));
			}
			var val = o['sauvegardes'];
			if(vars.includes('sauvegardes')) {
				$('.inputSaisonScolaire' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'Sauvegardes'));
			}
			var val = o['objetTitre'];
			if(vars.includes('objetTitre')) {
				$('.inputSaisonScolaire' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'ObjetTitre'));
			}
			var val = o['objetSuggere'];
			if(vars.includes('objetSuggere')) {
				$('.inputSaisonScolaire' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'ObjetSuggere'));
			}
			var val = o['objetTexte'];
			if(vars.includes('objetTexte')) {
				$('.inputSaisonScolaire' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'ObjetTexte'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputSaisonScolaire' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputSaisonScolaire' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputSaisonScolaire' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'PageUrlApi'));
			}
			var val = o['saisonCle'];
			if(vars.includes('saisonCle')) {
				$('.inputSaisonScolaire' + pk + 'SaisonCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'SaisonCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'SaisonCle'));
			}
			var val = o['inscriptionCles'];
			if(vars.includes('inscriptionCles')) {
				$('.inputSaisonScolaire' + pk + 'InscriptionCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'InscriptionCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'InscriptionCles'));
			}
			var val = o['scolaireTri'];
			if(vars.includes('scolaireTri')) {
				$('.inputSaisonScolaire' + pk + 'ScolaireTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'ScolaireTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'ScolaireTri'));
			}
			var val = o['ecoleTri'];
			if(vars.includes('ecoleTri')) {
				$('.inputSaisonScolaire' + pk + 'EcoleTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'EcoleTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'EcoleTri'));
			}
			var val = o['anneeTri'];
			if(vars.includes('anneeTri')) {
				$('.inputSaisonScolaire' + pk + 'AnneeTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'AnneeTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'AnneeTri'));
			}
			var val = o['saisonTri'];
			if(vars.includes('saisonTri')) {
				$('.inputSaisonScolaire' + pk + 'SaisonTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'SaisonTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'SaisonTri'));
			}
			var val = o['ecoleCle'];
			if(vars.includes('ecoleCle')) {
				$('.inputSaisonScolaire' + pk + 'EcoleCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'EcoleCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'EcoleCle'));
			}
			var val = o['ecoleNom'];
			if(vars.includes('ecoleNom')) {
				$('.inputSaisonScolaire' + pk + 'EcoleNom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'EcoleNom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'EcoleNom'));
			}
			var val = o['ecoleNomComplet'];
			if(vars.includes('ecoleNomComplet')) {
				$('.inputSaisonScolaire' + pk + 'EcoleNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'EcoleNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'EcoleNomComplet'));
			}
			var val = o['ecoleEmplacement'];
			if(vars.includes('ecoleEmplacement')) {
				$('.inputSaisonScolaire' + pk + 'EcoleEmplacement').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'EcoleEmplacement').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'EcoleEmplacement'));
			}
			var val = o['ecoleAddresse'];
			if(vars.includes('ecoleAddresse')) {
				$('.inputSaisonScolaire' + pk + 'EcoleAddresse').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'EcoleAddresse').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'EcoleAddresse'));
			}
			var val = o['ecoleNumeroTelephone'];
			if(vars.includes('ecoleNumeroTelephone')) {
				$('.inputSaisonScolaire' + pk + 'EcoleNumeroTelephone').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'EcoleNumeroTelephone').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'EcoleNumeroTelephone'));
			}
			var val = o['ecoleForm'];
			if(vars.includes('ecoleForm')) {
				$('.inputSaisonScolaire' + pk + 'EcoleForm').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'EcoleForm').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'EcoleForm'));
			}
			var val = o['ecoleNumero'];
			if(vars.includes('ecoleNumero')) {
				$('.inputSaisonScolaire' + pk + 'EcoleNumero').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'EcoleNumero').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'EcoleNumero'));
			}
			var val = o['ecoleAdministrateurNom'];
			if(vars.includes('ecoleAdministrateurNom')) {
				$('.inputSaisonScolaire' + pk + 'EcoleAdministrateurNom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'EcoleAdministrateurNom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'EcoleAdministrateurNom'));
			}
			var val = o['anneeDebut'];
			if(vars.includes('anneeDebut')) {
				$('.inputSaisonScolaire' + pk + 'AnneeDebut').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'AnneeDebut').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'AnneeDebut'));
			}
			var val = o['anneeFin'];
			if(vars.includes('anneeFin')) {
				$('.inputSaisonScolaire' + pk + 'AnneeFin').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'AnneeFin').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'AnneeFin'));
			}
			var val = o['anneeFraisInscription'];
			if(vars.includes('anneeFraisInscription')) {
				$('.inputSaisonScolaire' + pk + 'AnneeFraisInscription').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'AnneeFraisInscription').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'AnneeFraisInscription'));
			}
			var val = o['saisonEte'];
			if(vars.includes('saisonEte')) {
				$('.inputSaisonScolaire' + pk + 'SaisonEte').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'SaisonEte').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'SaisonEte'));
			}
			var val = o['saisonHiver'];
			if(vars.includes('saisonHiver')) {
				$('.inputSaisonScolaire' + pk + 'SaisonHiver').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'SaisonHiver').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'SaisonHiver'));
			}
			var val = o['saisonNomCourt'];
			if(vars.includes('saisonNomCourt')) {
				$('.inputSaisonScolaire' + pk + 'SaisonNomCourt').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'SaisonNomCourt').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'SaisonNomCourt'));
			}
			var val = o['saisonNomComplet'];
			if(vars.includes('saisonNomComplet')) {
				$('.inputSaisonScolaire' + pk + 'SaisonNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSaisonScolaire' + pk + 'SaisonNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputSaisonScolaire' + pk + 'SaisonNomComplet'));
			}
		});
	}
}
