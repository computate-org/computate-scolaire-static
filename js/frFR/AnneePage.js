
// POST //

async function postAnneeScolaire($formulaireValeurs, success, error) {
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

	var valeurSessionDateDebut = $formulaireValeurs.find('.valeurSessionDateDebut').val();
	if(valeurSessionDateDebut != null && valeurSessionDateDebut !== '')
		vals['sessionDateDebut'] = valeurSessionDateDebut;

	var valeurSessionDateFin = $formulaireValeurs.find('.valeurSessionDateFin').val();
	if(valeurSessionDateFin != null && valeurSessionDateFin !== '')
		vals['sessionDateFin'] = valeurSessionDateFin;

	var valeurAnneeFraisInscription = $formulaireValeurs.find('.valeurAnneeFraisInscription').val();
	if(valeurAnneeFraisInscription != null && valeurAnneeFraisInscription !== '')
		vals['anneeFraisInscription'] = valeurAnneeFraisInscription;

	var valeurEcoleCle = $formulaireValeurs.find('.valeurEcoleCle').val();
	if(valeurEcoleCle != null && valeurEcoleCle !== '')
		vals['ecoleCle'] = valeurEcoleCle;

	var valeurAgeCles = [];
	$formulaireValeurs.find('input.valeurAgeCles:checked').each(function(index) {
		valeurAgeCles.push($(this).val());
	});
	if(valeurAgeCles.length > 0)
		vals['ageCles'] = valeurAgeCles;

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

	var valeurSaisonDateDebut = $formulaireValeurs.find('.valeurSaisonDateDebut').val();
	if(valeurSaisonDateDebut != null && valeurSaisonDateDebut !== '')
		vals['saisonDateDebut'] = valeurSaisonDateDebut;

	var valeurAnneeDebut = $formulaireValeurs.find('.valeurAnneeDebut').val();
	if(valeurAnneeDebut != null && valeurAnneeDebut !== '')
		vals['anneeDebut'] = valeurAnneeDebut;

	var valeurAnneeFin = $formulaireValeurs.find('.valeurAnneeFin').val();
	if(valeurAnneeFin != null && valeurAnneeFin !== '')
		vals['anneeFin'] = valeurAnneeFin;

	$.ajax({
		url: '/api/annee'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postAnneeScolaireVals(vals, success, error) {
	$.ajax({
		url: '/api/annee'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportAnneeScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTImport_liste').val();
	if(json != null && json !== '')
		putimportAnneeScolaireVals(JSON.parse(json), success, error);
}

function putimportAnneeScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/annee/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTFusion //

async function putfusionAnneeScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTFusion_liste').val();
	if(json != null && json !== '')
		putfusionAnneeScolaireVals(JSON.parse(json), success, error);
}

function putfusionAnneeScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/annee/fusion'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopie //

async function putcopieAnneeScolaire($formulaireValeurs, pk, success, error) {
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

	var valeurSessionDateDebut = $formulaireValeurs.find('.valeurSessionDateDebut').val();
	if(valeurSessionDateDebut != null && valeurSessionDateDebut !== '')
		vals['sessionDateDebut'] = valeurSessionDateDebut;

	var valeurSessionDateFin = $formulaireValeurs.find('.valeurSessionDateFin').val();
	if(valeurSessionDateFin != null && valeurSessionDateFin !== '')
		vals['sessionDateFin'] = valeurSessionDateFin;

	var valeurAnneeFraisInscription = $formulaireValeurs.find('.valeurAnneeFraisInscription').val();
	if(valeurAnneeFraisInscription != null && valeurAnneeFraisInscription !== '')
		vals['anneeFraisInscription'] = valeurAnneeFraisInscription;

	var valeurEcoleCle = $formulaireValeurs.find('input.valeurEcoleCle:checked').val();
	if(valeurEcoleCle != null && valeurEcoleCle !== '')
		vals['ecoleCle'] = valeurEcoleCle;

	var valeurAgeCles = $formulaireValeurs.find('input.valeurAgeCles:checked').val();
	if(valeurAgeCles != null && valeurAgeCles !== '')
		vals['ageCles'] = [valeurAgeCles];

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

	var valeurSaisonDateDebut = $formulaireValeurs.find('.valeurSaisonDateDebut').val();
	if(valeurSaisonDateDebut != null && valeurSaisonDateDebut !== '')
		vals['saisonDateDebut'] = valeurSaisonDateDebut;

	var valeurAnneeDebut = $formulaireValeurs.find('.valeurAnneeDebut').val();
	if(valeurAnneeDebut != null && valeurAnneeDebut !== '')
		vals['anneeDebut'] = valeurAnneeDebut;

	var valeurAnneeFin = $formulaireValeurs.find('.valeurAnneeFin').val();
	if(valeurAnneeFin != null && valeurAnneeFin !== '')
		vals['anneeFin'] = valeurAnneeFin;

	putcopieAnneeScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopieAnneeScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/annee/copie?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchAnneeScolaire($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchAnneeScolaireFiltres($formulaireFiltres);

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

	var valeurSessionDateDebut = $formulaireValeurs.find('.valeurSessionDateDebut').val();
	var removeSessionDateDebut = $formulaireValeurs.find('.removeSessionDateDebut').val() === 'true';
	var setSessionDateDebut = removeSessionDateDebut ? null : $formulaireValeurs.find('.setSessionDateDebut').val();
	var addSessionDateDebut = $formulaireValeurs.find('.addSessionDateDebut').val();
	var setMoment = setSessionDateDebut ? moment(setSessionDateDebut, 'DD-MM-YYYY') : null; 
	var addMoment = addSessionDateDebut ? moment(addSessionDateDebut, 'DD-MM-YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setSessionDateDebut = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addSessionDateDebut = s;
	} 
	if(removeSessionDateDebut || setSessionDateDebut != null && setSessionDateDebut !== '')
		vals['setSessionDateDebut'] = setSessionDateDebut;
	if(addSessionDateDebut != null && addSessionDateDebut !== '')
		vals['addSessionDateDebut'] = addSessionDateDebut;
	var removeSessionDateDebut = $formulaireValeurs.find('.removeSessionDateDebut').val();
	if(removeSessionDateDebut != null && removeSessionDateDebut !== '')
		vals['removeSessionDateDebut'] = removeSessionDateDebut;

	var valeurSessionDateFin = $formulaireValeurs.find('.valeurSessionDateFin').val();
	var removeSessionDateFin = $formulaireValeurs.find('.removeSessionDateFin').val() === 'true';
	var setSessionDateFin = removeSessionDateFin ? null : $formulaireValeurs.find('.setSessionDateFin').val();
	var addSessionDateFin = $formulaireValeurs.find('.addSessionDateFin').val();
	var setMoment = setSessionDateFin ? moment(setSessionDateFin, 'DD-MM-YYYY') : null; 
	var addMoment = addSessionDateFin ? moment(addSessionDateFin, 'DD-MM-YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setSessionDateFin = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addSessionDateFin = s;
	} 
	if(removeSessionDateFin || setSessionDateFin != null && setSessionDateFin !== '')
		vals['setSessionDateFin'] = setSessionDateFin;
	if(addSessionDateFin != null && addSessionDateFin !== '')
		vals['addSessionDateFin'] = addSessionDateFin;
	var removeSessionDateFin = $formulaireValeurs.find('.removeSessionDateFin').val();
	if(removeSessionDateFin != null && removeSessionDateFin !== '')
		vals['removeSessionDateFin'] = removeSessionDateFin;

	var valeurAnneeFraisInscription = $formulaireValeurs.find('.valeurAnneeFraisInscription').val();
	var removeAnneeFraisInscription = $formulaireValeurs.find('.removeAnneeFraisInscription').val() === 'true';
	var setAnneeFraisInscription = removeAnneeFraisInscription ? null : $formulaireValeurs.find('.setAnneeFraisInscription').val();
	var addAnneeFraisInscription = $formulaireValeurs.find('.addAnneeFraisInscription').val();
	if(removeAnneeFraisInscription || setAnneeFraisInscription != null && setAnneeFraisInscription !== '')
		vals['setAnneeFraisInscription'] = setAnneeFraisInscription;
	if(addAnneeFraisInscription != null && addAnneeFraisInscription !== '')
		vals['addAnneeFraisInscription'] = addAnneeFraisInscription;
	var removeAnneeFraisInscription = $formulaireValeurs.find('.removeAnneeFraisInscription').val();
	if(removeAnneeFraisInscription != null && removeAnneeFraisInscription !== '')
		vals['removeAnneeFraisInscription'] = removeAnneeFraisInscription;

	var valeurEcoleCle = $formulaireValeurs.find('input.valeurEcoleCle:checked').val();
	if(valeurEcoleCle != null && valeurEcoleCle !== '')
		vals['setEcoleCle'] = valeurEcoleCle;

	var valeurAgeCles = $formulaireValeurs.find('input.valeurAgeCles:checked').val();
	if(valeurAgeCles != null && valeurAgeCles !== '')
		vals['addAgeCles'] = valeurAgeCles;

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

	var valeurAnneeDebut = $formulaireValeurs.find('.valeurAnneeDebut').val();
	var removeAnneeDebut = $formulaireValeurs.find('.removeAnneeDebut').val() === 'true';
	var setAnneeDebut = removeAnneeDebut ? null : $formulaireValeurs.find('.setAnneeDebut').val();
	var addAnneeDebut = $formulaireValeurs.find('.addAnneeDebut').val();
	if(removeAnneeDebut || setAnneeDebut != null && setAnneeDebut !== '')
		vals['setAnneeDebut'] = setAnneeDebut;
	if(addAnneeDebut != null && addAnneeDebut !== '')
		vals['addAnneeDebut'] = addAnneeDebut;
	var removeAnneeDebut = $formulaireValeurs.find('.removeAnneeDebut').val();
	if(removeAnneeDebut != null && removeAnneeDebut !== '')
		vals['removeAnneeDebut'] = removeAnneeDebut;

	var valeurAnneeFin = $formulaireValeurs.find('.valeurAnneeFin').val();
	var removeAnneeFin = $formulaireValeurs.find('.removeAnneeFin').val() === 'true';
	var setAnneeFin = removeAnneeFin ? null : $formulaireValeurs.find('.setAnneeFin').val();
	var addAnneeFin = $formulaireValeurs.find('.addAnneeFin').val();
	if(removeAnneeFin || setAnneeFin != null && setAnneeFin !== '')
		vals['setAnneeFin'] = setAnneeFin;
	if(addAnneeFin != null && addAnneeFin !== '')
		vals['addAnneeFin'] = addAnneeFin;
	var removeAnneeFin = $formulaireValeurs.find('.removeAnneeFin').val();
	if(removeAnneeFin != null && removeAnneeFin !== '')
		vals['removeAnneeFin'] = removeAnneeFin;

	patchAnneeScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchAnneeScolaireFiltres($formulaireFiltres) {
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

		var filtreSessionDateDebut = $formulaireFiltres.find('.valeurSessionDateDebut').val();
		if(filtreSessionDateDebut != null && filtreSessionDateDebut !== '')
			filtres.push({ name: 'fq', value: 'sessionDateDebut:' + filtreSessionDateDebut });

		var filtreSessionDateFin = $formulaireFiltres.find('.valeurSessionDateFin').val();
		if(filtreSessionDateFin != null && filtreSessionDateFin !== '')
			filtres.push({ name: 'fq', value: 'sessionDateFin:' + filtreSessionDateFin });

		var filtreAnneeFraisInscription = $formulaireFiltres.find('.valeurAnneeFraisInscription').val();
		if(filtreAnneeFraisInscription != null && filtreAnneeFraisInscription !== '')
			filtres.push({ name: 'fq', value: 'anneeFraisInscription:' + filtreAnneeFraisInscription });

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

		var filtreAgeCles = $formulaireFiltres.find('.valeurAgeCles').val();
		if(filtreAgeCles != null && filtreAgeCles !== '')
			filtres.push({ name: 'fq', value: 'ageCles:' + filtreAgeCles });

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

		var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
		if(filtreAnneeCle != null && filtreAnneeCle !== '')
			filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

		var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
		if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

		var filtreSaisonCles = $formulaireFiltres.find('.valeurSaisonCles').val();
		if(filtreSaisonCles != null && filtreSaisonCles !== '')
			filtres.push({ name: 'fq', value: 'saisonCles:' + filtreSaisonCles });

		var filtreScolaireTri = $formulaireFiltres.find('.valeurScolaireTri').val();
		if(filtreScolaireTri != null && filtreScolaireTri !== '')
			filtres.push({ name: 'fq', value: 'scolaireTri:' + filtreScolaireTri });

		var filtreEcoleTri = $formulaireFiltres.find('.valeurEcoleTri').val();
		if(filtreEcoleTri != null && filtreEcoleTri !== '')
			filtres.push({ name: 'fq', value: 'ecoleTri:' + filtreEcoleTri });

		var filtreAnneeTri = $formulaireFiltres.find('.valeurAnneeTri').val();
		if(filtreAnneeTri != null && filtreAnneeTri !== '')
			filtres.push({ name: 'fq', value: 'anneeTri:' + filtreAnneeTri });

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

		var filtreFormInscriptionCle = $formulaireFiltres.find('.valeurFormInscriptionCle').val();
		if(filtreFormInscriptionCle != null && filtreFormInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'formInscriptionCle:' + filtreFormInscriptionCle });

		var filtreSaisonDateDebut = $formulaireFiltres.find('.valeurSaisonDateDebut').val();
		if(filtreSaisonDateDebut != null && filtreSaisonDateDebut !== '')
			filtres.push({ name: 'fq', value: 'saisonDateDebut:' + filtreSaisonDateDebut });

		var filtreAnneeDebut = $formulaireFiltres.find('.valeurAnneeDebut').val();
		if(filtreAnneeDebut != null && filtreAnneeDebut !== '')
			filtres.push({ name: 'fq', value: 'anneeDebut:' + filtreAnneeDebut });

		var filtreAnneeFin = $formulaireFiltres.find('.valeurAnneeFin').val();
		if(filtreAnneeFin != null && filtreAnneeFin !== '')
			filtres.push({ name: 'fq', value: 'anneeFin:' + filtreAnneeFin });

		var filtreAnneeNomCourt = $formulaireFiltres.find('.valeurAnneeNomCourt').val();
		if(filtreAnneeNomCourt != null && filtreAnneeNomCourt !== '')
			filtres.push({ name: 'fq', value: 'anneeNomCourt:' + filtreAnneeNomCourt });

		var filtreAnneeNomComplet = $formulaireFiltres.find('.valeurAnneeNomComplet').val();
		if(filtreAnneeNomComplet != null && filtreAnneeNomComplet !== '')
			filtres.push({ name: 'fq', value: 'anneeNomComplet:' + filtreAnneeNomComplet });
	}
	return filtres;
}

function patchAnneeScolaireVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchAnneeScolaireVals(filtres, vals, success, error);
}

function patchAnneeScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/annee?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getAnneeScolaire(pk) {
	$.ajax({
		url: '/api/annee/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Recherche //

async function rechercheAnneeScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheAnneeScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheAnneeScolaireVals(filtres, success, error);
}

function rechercheAnneeScolaireFiltres($formulaireFiltres) {
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

		var filtreSessionDateDebut = $formulaireFiltres.find('.valeurSessionDateDebut').val();
		if(filtreSessionDateDebut != null && filtreSessionDateDebut !== '')
			filtres.push({ name: 'fq', value: 'sessionDateDebut:' + filtreSessionDateDebut });

		var filtreSessionDateFin = $formulaireFiltres.find('.valeurSessionDateFin').val();
		if(filtreSessionDateFin != null && filtreSessionDateFin !== '')
			filtres.push({ name: 'fq', value: 'sessionDateFin:' + filtreSessionDateFin });

		var filtreAnneeFraisInscription = $formulaireFiltres.find('.valeurAnneeFraisInscription').val();
		if(filtreAnneeFraisInscription != null && filtreAnneeFraisInscription !== '')
			filtres.push({ name: 'fq', value: 'anneeFraisInscription:' + filtreAnneeFraisInscription });

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

		var filtreAgeCles = $formulaireFiltres.find('.valeurAgeCles').val();
		if(filtreAgeCles != null && filtreAgeCles !== '')
			filtres.push({ name: 'fq', value: 'ageCles:' + filtreAgeCles });

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

		var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
		if(filtreAnneeCle != null && filtreAnneeCle !== '')
			filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

		var filtreInscriptionCles = $formulaireFiltres.find('.valeurInscriptionCles').val();
		if(filtreInscriptionCles != null && filtreInscriptionCles !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCles:' + filtreInscriptionCles });

		var filtreSaisonCles = $formulaireFiltres.find('.valeurSaisonCles').val();
		if(filtreSaisonCles != null && filtreSaisonCles !== '')
			filtres.push({ name: 'fq', value: 'saisonCles:' + filtreSaisonCles });

		var filtreScolaireTri = $formulaireFiltres.find('.valeurScolaireTri').val();
		if(filtreScolaireTri != null && filtreScolaireTri !== '')
			filtres.push({ name: 'fq', value: 'scolaireTri:' + filtreScolaireTri });

		var filtreEcoleTri = $formulaireFiltres.find('.valeurEcoleTri').val();
		if(filtreEcoleTri != null && filtreEcoleTri !== '')
			filtres.push({ name: 'fq', value: 'ecoleTri:' + filtreEcoleTri });

		var filtreAnneeTri = $formulaireFiltres.find('.valeurAnneeTri').val();
		if(filtreAnneeTri != null && filtreAnneeTri !== '')
			filtres.push({ name: 'fq', value: 'anneeTri:' + filtreAnneeTri });

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

		var filtreFormInscriptionCle = $formulaireFiltres.find('.valeurFormInscriptionCle').val();
		if(filtreFormInscriptionCle != null && filtreFormInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'formInscriptionCle:' + filtreFormInscriptionCle });

		var filtreSaisonDateDebut = $formulaireFiltres.find('.valeurSaisonDateDebut').val();
		if(filtreSaisonDateDebut != null && filtreSaisonDateDebut !== '')
			filtres.push({ name: 'fq', value: 'saisonDateDebut:' + filtreSaisonDateDebut });

		var filtreAnneeDebut = $formulaireFiltres.find('.valeurAnneeDebut').val();
		if(filtreAnneeDebut != null && filtreAnneeDebut !== '')
			filtres.push({ name: 'fq', value: 'anneeDebut:' + filtreAnneeDebut });

		var filtreAnneeFin = $formulaireFiltres.find('.valeurAnneeFin').val();
		if(filtreAnneeFin != null && filtreAnneeFin !== '')
			filtres.push({ name: 'fq', value: 'anneeFin:' + filtreAnneeFin });

		var filtreAnneeNomCourt = $formulaireFiltres.find('.valeurAnneeNomCourt').val();
		if(filtreAnneeNomCourt != null && filtreAnneeNomCourt !== '')
			filtres.push({ name: 'fq', value: 'anneeNomCourt:' + filtreAnneeNomCourt });

		var filtreAnneeNomComplet = $formulaireFiltres.find('.valeurAnneeNomComplet').val();
		if(filtreAnneeNomComplet != null && filtreAnneeNomComplet !== '')
			filtres.push({ name: 'fq', value: 'anneeNomComplet:' + filtreAnneeNomComplet });
	}
	return filtres;
}

function rechercheAnneeScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/annee?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereAnneeScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-calendar-check ');
			var $span = $('<span>').attr('class', '').text(o['anneeNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherAnneeScolaireVals($formulaireFiltres, success, error);
}

function suggereAnneeScolaireEcoleCle(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-school ');
			var $span = $('<span>').attr('class', '').text(o['ecoleNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['anneeCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_ecoleCle_' + pk + '_anneeCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurEcoleCle w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_ecoleCle_" + pk + "_anneeCles_" + o['pk'] + "'); patchAnneeScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'EcoleCle']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#AnneeScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheEcoleVals(filtres, success, error);
}

function suggereAnneeScolaireInscriptionCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['anneeCle'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCles_' + pk + '_anneeCle_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurInscriptionCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_inscriptionCles_" + pk + "_anneeCle_" + o['pk'] + "'); patchAnneeScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'InscriptionCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#AnneeScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheInscriptionScolaireVals(filtres, success, error);
}

function suggereAnneeScolaireSaisonCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-sun ');
			var $span = $('<span>').attr('class', '').text(o['saisonNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['anneeCle'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_saisonCles_' + pk + '_anneeCle_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurSaisonCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_saisonCles_" + pk + "_anneeCle_" + o['pk'] + "'); patchAnneeScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'SaisonCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#AnneeScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheSaisonScolaireVals(filtres, success, error);
}

function suggereAnneeScolaireAgeCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-birthday-cake ');
			var $span = $('<span>').attr('class', '').text(o['ageNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['anneeCle'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_ageCles_' + pk + '_anneeCle_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurAgeCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_ageCles_" + pk + "_anneeCle_" + o['pk'] + "'); patchAnneeScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'AgeCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#AnneeScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheAgeScolaireVals(filtres, success, error);
}

async function websocketAnneeScolaire(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketAnneeScolaire', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#AnneeScolaireForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-orange ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-calendar-check w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modifier années');
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

		window.eventBus.registerHandler('websocketEcole', function (error, message) {
			$('#Page_ecoleCle').trigger('oninput');
			$('#Page_ecoleCle_ajouter').text('ajouter une école');
			$('#Page_ecoleCle_ajouter').removeClass('w3-disabled');
			$('#Page_ecoleCle_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketInscriptionScolaire', function (error, message) {
			$('#Page_inscriptionCles').trigger('oninput');
			$('#Page_inscriptionCles_ajouter').text('ajouter une inscription');
			$('#Page_inscriptionCles_ajouter').removeClass('w3-disabled');
			$('#Page_inscriptionCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSaisonScolaire', function (error, message) {
			$('#Page_saisonCles').trigger('oninput');
			$('#Page_saisonCles_ajouter').text('ajouter une saison');
			$('#Page_saisonCles_ajouter').removeClass('w3-disabled');
			$('#Page_saisonCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketAgeScolaire', function (error, message) {
			$('#Page_ageCles').trigger('oninput');
			$('#Page_ageCles_ajouter').text('ajouter un âge');
			$('#Page_ageCles_ajouter').removeClass('w3-disabled');
			$('#Page_ageCles_ajouter').attr('disabled', false);
		});
	}
}
async function websocketAnneeScolaireInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherAnneeScolaireVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputAnneeScolaire' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'Pk'));
			}
			var val = o['cree'];
			if(vars.includes('cree')) {
				$('.inputAnneeScolaire' + pk + 'Cree').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'Cree').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'Cree'));
			}
			var val = o['modifie'];
			if(vars.includes('modifie')) {
				$('.inputAnneeScolaire' + pk + 'Modifie').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'Modifie').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'Modifie'));
			}
			var val = o['objetId'];
			if(vars.includes('objetId')) {
				$('.inputAnneeScolaire' + pk + 'ObjetId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'ObjetId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'ObjetId'));
			}
			var val = o['archive'];
			if(vars.includes('archive')) {
				$('.inputAnneeScolaire' + pk + 'Archive').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'Archive').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'Archive'));
			}
			var val = o['supprime'];
			if(vars.includes('supprime')) {
				$('.inputAnneeScolaire' + pk + 'Supprime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'Supprime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'Supprime'));
			}
			var val = o['sessionDateDebut'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('sessionDateDebut')) {
				$('.inputAnneeScolaire' + pk + 'SessionDateDebut').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'SessionDateDebut').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'SessionDateDebut'));
			}
			var val = o['sessionDateFin'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('sessionDateFin')) {
				$('.inputAnneeScolaire' + pk + 'SessionDateFin').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'SessionDateFin').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'SessionDateFin'));
			}
			var val = o['anneeFraisInscription'];
			if(vars.includes('anneeFraisInscription')) {
				$('.inputAnneeScolaire' + pk + 'AnneeFraisInscription').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'AnneeFraisInscription').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'AnneeFraisInscription'));
			}
			var val = o['ecoleCle'];
			if(vars.includes('ecoleCle')) {
				$('.inputAnneeScolaire' + pk + 'EcoleCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'EcoleCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'EcoleCle'));
			}
			var val = o['ageCles'];
			if(vars.includes('ageCles')) {
				$('.inputAnneeScolaire' + pk + 'AgeCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'AgeCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'AgeCles'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputAnneeScolaire' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputAnneeScolaire' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'Id'));
			}
			var val = o['classeNomCanonique'];
			if(vars.includes('classeNomCanonique')) {
				$('.inputAnneeScolaire' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'ClasseNomCanonique'));
			}
			var val = o['classeNomSimple'];
			if(vars.includes('classeNomSimple')) {
				$('.inputAnneeScolaire' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'ClasseNomSimple'));
			}
			var val = o['classeNomsCanoniques'];
			if(vars.includes('classeNomsCanoniques')) {
				$('.inputAnneeScolaire' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'ClasseNomsCanoniques'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputAnneeScolaire' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'SessionId'));
			}
			var val = o['utilisateurId'];
			if(vars.includes('utilisateurId')) {
				$('.inputAnneeScolaire' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'UtilisateurId'));
			}
			var val = o['utilisateurCle'];
			if(vars.includes('utilisateurCle')) {
				$('.inputAnneeScolaire' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'UtilisateurCle'));
			}
			var val = o['sauvegardes'];
			if(vars.includes('sauvegardes')) {
				$('.inputAnneeScolaire' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'Sauvegardes'));
			}
			var val = o['objetTitre'];
			if(vars.includes('objetTitre')) {
				$('.inputAnneeScolaire' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'ObjetTitre'));
			}
			var val = o['objetSuggere'];
			if(vars.includes('objetSuggere')) {
				$('.inputAnneeScolaire' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'ObjetSuggere'));
			}
			var val = o['objetTexte'];
			if(vars.includes('objetTexte')) {
				$('.inputAnneeScolaire' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'ObjetTexte'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputAnneeScolaire' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputAnneeScolaire' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputAnneeScolaire' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'PageUrlApi'));
			}
			var val = o['anneeCle'];
			if(vars.includes('anneeCle')) {
				$('.inputAnneeScolaire' + pk + 'AnneeCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'AnneeCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'AnneeCle'));
			}
			var val = o['inscriptionCles'];
			if(vars.includes('inscriptionCles')) {
				$('.inputAnneeScolaire' + pk + 'InscriptionCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'InscriptionCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'InscriptionCles'));
			}
			var val = o['saisonCles'];
			if(vars.includes('saisonCles')) {
				$('.inputAnneeScolaire' + pk + 'SaisonCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'SaisonCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'SaisonCles'));
			}
			var val = o['scolaireTri'];
			if(vars.includes('scolaireTri')) {
				$('.inputAnneeScolaire' + pk + 'ScolaireTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'ScolaireTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'ScolaireTri'));
			}
			var val = o['ecoleTri'];
			if(vars.includes('ecoleTri')) {
				$('.inputAnneeScolaire' + pk + 'EcoleTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'EcoleTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'EcoleTri'));
			}
			var val = o['anneeTri'];
			if(vars.includes('anneeTri')) {
				$('.inputAnneeScolaire' + pk + 'AnneeTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'AnneeTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'AnneeTri'));
			}
			var val = o['ecoleNom'];
			if(vars.includes('ecoleNom')) {
				$('.inputAnneeScolaire' + pk + 'EcoleNom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'EcoleNom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'EcoleNom'));
			}
			var val = o['ecoleNomComplet'];
			if(vars.includes('ecoleNomComplet')) {
				$('.inputAnneeScolaire' + pk + 'EcoleNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'EcoleNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'EcoleNomComplet'));
			}
			var val = o['ecoleEmplacement'];
			if(vars.includes('ecoleEmplacement')) {
				$('.inputAnneeScolaire' + pk + 'EcoleEmplacement').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'EcoleEmplacement').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'EcoleEmplacement'));
			}
			var val = o['ecoleAddresse'];
			if(vars.includes('ecoleAddresse')) {
				$('.inputAnneeScolaire' + pk + 'EcoleAddresse').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'EcoleAddresse').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'EcoleAddresse'));
			}
			var val = o['ecoleNumeroTelephone'];
			if(vars.includes('ecoleNumeroTelephone')) {
				$('.inputAnneeScolaire' + pk + 'EcoleNumeroTelephone').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'EcoleNumeroTelephone').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'EcoleNumeroTelephone'));
			}
			var val = o['ecoleForm'];
			if(vars.includes('ecoleForm')) {
				$('.inputAnneeScolaire' + pk + 'EcoleForm').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'EcoleForm').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'EcoleForm'));
			}
			var val = o['ecoleNumero'];
			if(vars.includes('ecoleNumero')) {
				$('.inputAnneeScolaire' + pk + 'EcoleNumero').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'EcoleNumero').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'EcoleNumero'));
			}
			var val = o['ecoleAdministrateurNom'];
			if(vars.includes('ecoleAdministrateurNom')) {
				$('.inputAnneeScolaire' + pk + 'EcoleAdministrateurNom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'EcoleAdministrateurNom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'EcoleAdministrateurNom'));
			}
			var val = o['formInscriptionCle'];
			if(vars.includes('formInscriptionCle')) {
				$('.inputAnneeScolaire' + pk + 'FormInscriptionCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'FormInscriptionCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'FormInscriptionCle'));
			}
			var val = o['saisonDateDebut'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('saisonDateDebut')) {
				$('.inputAnneeScolaire' + pk + 'SaisonDateDebut').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'SaisonDateDebut').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'SaisonDateDebut'));
			}
			var val = o['anneeDebut'];
			if(vars.includes('anneeDebut')) {
				$('.inputAnneeScolaire' + pk + 'AnneeDebut').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'AnneeDebut').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'AnneeDebut'));
			}
			var val = o['anneeFin'];
			if(vars.includes('anneeFin')) {
				$('.inputAnneeScolaire' + pk + 'AnneeFin').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'AnneeFin').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'AnneeFin'));
			}
			var val = o['anneeNomCourt'];
			if(vars.includes('anneeNomCourt')) {
				$('.inputAnneeScolaire' + pk + 'AnneeNomCourt').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'AnneeNomCourt').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'AnneeNomCourt'));
			}
			var val = o['anneeNomComplet'];
			if(vars.includes('anneeNomComplet')) {
				$('.inputAnneeScolaire' + pk + 'AnneeNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varAnneeScolaire' + pk + 'AnneeNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputAnneeScolaire' + pk + 'AnneeNomComplet'));
			}
		});
	}
}
