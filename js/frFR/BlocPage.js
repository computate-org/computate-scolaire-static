
// POST //

async function postBlocScolaire($formulaireValeurs, success, error) {
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

	var valeurBlocHeureDebut = $formulaireValeurs.find('.valeurBlocHeureDebut').val();
	if(valeurBlocHeureDebut != null && valeurBlocHeureDebut !== '')
		vals['blocHeureDebut'] = valeurBlocHeureDebut;

	var valeurBlocHeureFin = $formulaireValeurs.find('.valeurBlocHeureFin').val();
	if(valeurBlocHeureFin != null && valeurBlocHeureFin !== '')
		vals['blocHeureFin'] = valeurBlocHeureFin;

	var valeurBlocPrixParMois = $formulaireValeurs.find('.valeurBlocPrixParMois').val();
	if(valeurBlocPrixParMois != null && valeurBlocPrixParMois !== '')
		vals['blocPrixParMois'] = valeurBlocPrixParMois;

	var valeurBlocLundi = $formulaireValeurs.find('.valeurBlocLundi').prop('checked');
	if(valeurBlocLundi != null && valeurBlocLundi !== '')
		vals['blocLundi'] = valeurBlocLundi;

	var valeurBlocMardi = $formulaireValeurs.find('.valeurBlocMardi').prop('checked');
	if(valeurBlocMardi != null && valeurBlocMardi !== '')
		vals['blocMardi'] = valeurBlocMardi;

	var valeurBlocMercredi = $formulaireValeurs.find('.valeurBlocMercredi').prop('checked');
	if(valeurBlocMercredi != null && valeurBlocMercredi !== '')
		vals['blocMercredi'] = valeurBlocMercredi;

	var valeurBlocJeudi = $formulaireValeurs.find('.valeurBlocJeudi').prop('checked');
	if(valeurBlocJeudi != null && valeurBlocJeudi !== '')
		vals['blocJeudi'] = valeurBlocJeudi;

	var valeurBlocVendredi = $formulaireValeurs.find('.valeurBlocVendredi').prop('checked');
	if(valeurBlocVendredi != null && valeurBlocVendredi !== '')
		vals['blocVendredi'] = valeurBlocVendredi;

	var valeurAgeCle = $formulaireValeurs.find('.valeurAgeCle').val();
	if(valeurAgeCle != null && valeurAgeCle !== '')
		vals['ageCle'] = valeurAgeCle;

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

	var valeurEcoleAddresse = $formulaireValeurs.find('.valeurEcoleAddresse').val();
	if(valeurEcoleAddresse != null && valeurEcoleAddresse !== '')
		vals['ecoleAddresse'] = valeurEcoleAddresse;

	$.ajax({
		url: '/api/bloc'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postBlocScolaireVals(vals, success, error) {
	$.ajax({
		url: '/api/bloc'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportBlocScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTImport_liste').val();
	if(json != null && json !== '')
		putimportBlocScolaireVals(JSON.parse(json), success, error);
}

function putimportBlocScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/bloc/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTFusion //

async function putfusionBlocScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTFusion_liste').val();
	if(json != null && json !== '')
		putfusionBlocScolaireVals(JSON.parse(json), success, error);
}

function putfusionBlocScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/bloc/fusion'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopie //

async function putcopieBlocScolaire($formulaireValeurs, pk, success, error) {
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

	var valeurBlocHeureDebut = $formulaireValeurs.find('.valeurBlocHeureDebut').val();
	if(valeurBlocHeureDebut != null && valeurBlocHeureDebut !== '')
		vals['blocHeureDebut'] = valeurBlocHeureDebut;

	var valeurBlocHeureFin = $formulaireValeurs.find('.valeurBlocHeureFin').val();
	if(valeurBlocHeureFin != null && valeurBlocHeureFin !== '')
		vals['blocHeureFin'] = valeurBlocHeureFin;

	var valeurBlocPrixParMois = $formulaireValeurs.find('.valeurBlocPrixParMois').val();
	if(valeurBlocPrixParMois != null && valeurBlocPrixParMois !== '')
		vals['blocPrixParMois'] = valeurBlocPrixParMois;

	var valeurBlocLundi = $formulaireValeurs.find('.valeurBlocLundi').prop('checked');
	if(valeurBlocLundi != null && valeurBlocLundi !== '')
		vals['blocLundi'] = valeurBlocLundi;

	var valeurBlocMardi = $formulaireValeurs.find('.valeurBlocMardi').prop('checked');
	if(valeurBlocMardi != null && valeurBlocMardi !== '')
		vals['blocMardi'] = valeurBlocMardi;

	var valeurBlocMercredi = $formulaireValeurs.find('.valeurBlocMercredi').prop('checked');
	if(valeurBlocMercredi != null && valeurBlocMercredi !== '')
		vals['blocMercredi'] = valeurBlocMercredi;

	var valeurBlocJeudi = $formulaireValeurs.find('.valeurBlocJeudi').prop('checked');
	if(valeurBlocJeudi != null && valeurBlocJeudi !== '')
		vals['blocJeudi'] = valeurBlocJeudi;

	var valeurBlocVendredi = $formulaireValeurs.find('.valeurBlocVendredi').prop('checked');
	if(valeurBlocVendredi != null && valeurBlocVendredi !== '')
		vals['blocVendredi'] = valeurBlocVendredi;

	var valeurAgeCle = $formulaireValeurs.find('input.valeurAgeCle:checked').val();
	if(valeurAgeCle != null && valeurAgeCle !== '')
		vals['ageCle'] = valeurAgeCle;

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

	var valeurEcoleAddresse = $formulaireValeurs.find('.valeurEcoleAddresse').val();
	if(valeurEcoleAddresse != null && valeurEcoleAddresse !== '')
		vals['ecoleAddresse'] = valeurEcoleAddresse;

	putcopieBlocScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopieBlocScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/bloc/copie?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchBlocScolaire($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchBlocScolaireFiltres($formulaireFiltres);

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

	var valeurBlocHeureDebut = $formulaireValeurs.find('.valeurBlocHeureDebut').val();
	var removeBlocHeureDebut = $formulaireValeurs.find('.removeBlocHeureDebut').val() === 'true';
	var setBlocHeureDebut = removeBlocHeureDebut ? null : $formulaireValeurs.find('.setBlocHeureDebut').val();
	if(removeBlocHeureDebut || setBlocHeureDebut != null && setBlocHeureDebut !== '')
		vals['setBlocHeureDebut'] = setBlocHeureDebut;
	var addBlocHeureDebut = $formulaireValeurs.find('.addBlocHeureDebut').val();
	if(addBlocHeureDebut != null && addBlocHeureDebut !== '')
		vals['addBlocHeureDebut'] = addBlocHeureDebut;
	var removeBlocHeureDebut = $formulaireValeurs.find('.removeBlocHeureDebut').val();
	if(removeBlocHeureDebut != null && removeBlocHeureDebut !== '')
		vals['removeBlocHeureDebut'] = removeBlocHeureDebut;

	var valeurBlocHeureFin = $formulaireValeurs.find('.valeurBlocHeureFin').val();
	var removeBlocHeureFin = $formulaireValeurs.find('.removeBlocHeureFin').val() === 'true';
	var setBlocHeureFin = removeBlocHeureFin ? null : $formulaireValeurs.find('.setBlocHeureFin').val();
	if(removeBlocHeureFin || setBlocHeureFin != null && setBlocHeureFin !== '')
		vals['setBlocHeureFin'] = setBlocHeureFin;
	var addBlocHeureFin = $formulaireValeurs.find('.addBlocHeureFin').val();
	if(addBlocHeureFin != null && addBlocHeureFin !== '')
		vals['addBlocHeureFin'] = addBlocHeureFin;
	var removeBlocHeureFin = $formulaireValeurs.find('.removeBlocHeureFin').val();
	if(removeBlocHeureFin != null && removeBlocHeureFin !== '')
		vals['removeBlocHeureFin'] = removeBlocHeureFin;

	var valeurBlocPrixParMois = $formulaireValeurs.find('.valeurBlocPrixParMois').val();
	var removeBlocPrixParMois = $formulaireValeurs.find('.removeBlocPrixParMois').val() === 'true';
	var setBlocPrixParMois = removeBlocPrixParMois ? null : $formulaireValeurs.find('.setBlocPrixParMois').val();
	if(removeBlocPrixParMois || setBlocPrixParMois != null && setBlocPrixParMois !== '')
		vals['setBlocPrixParMois'] = setBlocPrixParMois;
	var addBlocPrixParMois = $formulaireValeurs.find('.addBlocPrixParMois').val();
	if(addBlocPrixParMois != null && addBlocPrixParMois !== '')
		vals['addBlocPrixParMois'] = addBlocPrixParMois;
	var removeBlocPrixParMois = $formulaireValeurs.find('.removeBlocPrixParMois').val();
	if(removeBlocPrixParMois != null && removeBlocPrixParMois !== '')
		vals['removeBlocPrixParMois'] = removeBlocPrixParMois;

	var valeurBlocLundi = $formulaireValeurs.find('.valeurBlocLundi').prop('checked');
	var removeBlocLundi = $formulaireValeurs.find('.removeBlocLundi').val() === 'true';
	var valeurBlocLundiSelectVal = $formulaireValeurs.find('select.setBlocLundi').val();
	var valeurBlocLundi = null;
	if(valeurBlocLundiSelectVal != null && valeurBlocLundiSelectVal !== '')
		valeurBlocLundi = valeurBlocLundiSelectVal == 'true';
	setBlocLundi = removeBlocLundi ? null : valeurBlocLundi;
	if(removeBlocLundi || setBlocLundi != null && setBlocLundi !== '')
		vals['setBlocLundi'] = setBlocLundi;
	var addBlocLundi = $formulaireValeurs.find('.addBlocLundi').prop('checked');
	if(addBlocLundi != null && addBlocLundi !== '')
		vals['addBlocLundi'] = addBlocLundi;
	var removeBlocLundi = $formulaireValeurs.find('.removeBlocLundi').prop('checked');
	if(removeBlocLundi != null && removeBlocLundi !== '')
		vals['removeBlocLundi'] = removeBlocLundi;

	var valeurBlocMardi = $formulaireValeurs.find('.valeurBlocMardi').prop('checked');
	var removeBlocMardi = $formulaireValeurs.find('.removeBlocMardi').val() === 'true';
	var valeurBlocMardiSelectVal = $formulaireValeurs.find('select.setBlocMardi').val();
	var valeurBlocMardi = null;
	if(valeurBlocMardiSelectVal != null && valeurBlocMardiSelectVal !== '')
		valeurBlocMardi = valeurBlocMardiSelectVal == 'true';
	setBlocMardi = removeBlocMardi ? null : valeurBlocMardi;
	if(removeBlocMardi || setBlocMardi != null && setBlocMardi !== '')
		vals['setBlocMardi'] = setBlocMardi;
	var addBlocMardi = $formulaireValeurs.find('.addBlocMardi').prop('checked');
	if(addBlocMardi != null && addBlocMardi !== '')
		vals['addBlocMardi'] = addBlocMardi;
	var removeBlocMardi = $formulaireValeurs.find('.removeBlocMardi').prop('checked');
	if(removeBlocMardi != null && removeBlocMardi !== '')
		vals['removeBlocMardi'] = removeBlocMardi;

	var valeurBlocMercredi = $formulaireValeurs.find('.valeurBlocMercredi').prop('checked');
	var removeBlocMercredi = $formulaireValeurs.find('.removeBlocMercredi').val() === 'true';
	var valeurBlocMercrediSelectVal = $formulaireValeurs.find('select.setBlocMercredi').val();
	var valeurBlocMercredi = null;
	if(valeurBlocMercrediSelectVal != null && valeurBlocMercrediSelectVal !== '')
		valeurBlocMercredi = valeurBlocMercrediSelectVal == 'true';
	setBlocMercredi = removeBlocMercredi ? null : valeurBlocMercredi;
	if(removeBlocMercredi || setBlocMercredi != null && setBlocMercredi !== '')
		vals['setBlocMercredi'] = setBlocMercredi;
	var addBlocMercredi = $formulaireValeurs.find('.addBlocMercredi').prop('checked');
	if(addBlocMercredi != null && addBlocMercredi !== '')
		vals['addBlocMercredi'] = addBlocMercredi;
	var removeBlocMercredi = $formulaireValeurs.find('.removeBlocMercredi').prop('checked');
	if(removeBlocMercredi != null && removeBlocMercredi !== '')
		vals['removeBlocMercredi'] = removeBlocMercredi;

	var valeurBlocJeudi = $formulaireValeurs.find('.valeurBlocJeudi').prop('checked');
	var removeBlocJeudi = $formulaireValeurs.find('.removeBlocJeudi').val() === 'true';
	var valeurBlocJeudiSelectVal = $formulaireValeurs.find('select.setBlocJeudi').val();
	var valeurBlocJeudi = null;
	if(valeurBlocJeudiSelectVal != null && valeurBlocJeudiSelectVal !== '')
		valeurBlocJeudi = valeurBlocJeudiSelectVal == 'true';
	setBlocJeudi = removeBlocJeudi ? null : valeurBlocJeudi;
	if(removeBlocJeudi || setBlocJeudi != null && setBlocJeudi !== '')
		vals['setBlocJeudi'] = setBlocJeudi;
	var addBlocJeudi = $formulaireValeurs.find('.addBlocJeudi').prop('checked');
	if(addBlocJeudi != null && addBlocJeudi !== '')
		vals['addBlocJeudi'] = addBlocJeudi;
	var removeBlocJeudi = $formulaireValeurs.find('.removeBlocJeudi').prop('checked');
	if(removeBlocJeudi != null && removeBlocJeudi !== '')
		vals['removeBlocJeudi'] = removeBlocJeudi;

	var valeurBlocVendredi = $formulaireValeurs.find('.valeurBlocVendredi').prop('checked');
	var removeBlocVendredi = $formulaireValeurs.find('.removeBlocVendredi').val() === 'true';
	var valeurBlocVendrediSelectVal = $formulaireValeurs.find('select.setBlocVendredi').val();
	var valeurBlocVendredi = null;
	if(valeurBlocVendrediSelectVal != null && valeurBlocVendrediSelectVal !== '')
		valeurBlocVendredi = valeurBlocVendrediSelectVal == 'true';
	setBlocVendredi = removeBlocVendredi ? null : valeurBlocVendredi;
	if(removeBlocVendredi || setBlocVendredi != null && setBlocVendredi !== '')
		vals['setBlocVendredi'] = setBlocVendredi;
	var addBlocVendredi = $formulaireValeurs.find('.addBlocVendredi').prop('checked');
	if(addBlocVendredi != null && addBlocVendredi !== '')
		vals['addBlocVendredi'] = addBlocVendredi;
	var removeBlocVendredi = $formulaireValeurs.find('.removeBlocVendredi').prop('checked');
	if(removeBlocVendredi != null && removeBlocVendredi !== '')
		vals['removeBlocVendredi'] = removeBlocVendredi;

	var valeurAgeCle = $formulaireValeurs.find('input.valeurAgeCle:checked').val();
	if(valeurAgeCle != null && valeurAgeCle !== '')
		vals['setAgeCle'] = valeurAgeCle;

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

	patchBlocScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchBlocScolaireFiltres($formulaireFiltres) {
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

		var filtreBlocHeureDebut = $formulaireFiltres.find('.valeurBlocHeureDebut').val();
		if(filtreBlocHeureDebut != null && filtreBlocHeureDebut !== '')
			filtres.push({ name: 'fq', value: 'blocHeureDebut:' + filtreBlocHeureDebut });

		var filtreBlocHeureFin = $formulaireFiltres.find('.valeurBlocHeureFin').val();
		if(filtreBlocHeureFin != null && filtreBlocHeureFin !== '')
			filtres.push({ name: 'fq', value: 'blocHeureFin:' + filtreBlocHeureFin });

		var filtreBlocPrixParMois = $formulaireFiltres.find('.valeurBlocPrixParMois').val();
		if(filtreBlocPrixParMois != null && filtreBlocPrixParMois !== '')
			filtres.push({ name: 'fq', value: 'blocPrixParMois:' + filtreBlocPrixParMois });

		var $filtreBlocLundiCheckbox = $formulaireFiltres.find('input.valeurBlocLundi[type = "checkbox"]');
		var $filtreBlocLundiSelect = $formulaireFiltres.find('select.valeurBlocLundi');
		var filtreBlocLundi = $filtreBlocLundiSelect.length ? $filtreBlocLundiSelect.val() : $filtreBlocLundiCheckbox.prop('checked');
		var filtreBlocLundiSelectVal = $formulaireFiltres.find('select.filtreBlocLundi').val();
		var filtreBlocLundi = null;
		if(filtreBlocLundiSelectVal !== '')
			filtreBlocLundi = filtreBlocLundiSelectVal == 'true';
		if(filtreBlocLundi != null && filtreBlocLundi === true)
			filtres.push({ name: 'fq', value: 'blocLundi:' + filtreBlocLundi });

		var $filtreBlocMardiCheckbox = $formulaireFiltres.find('input.valeurBlocMardi[type = "checkbox"]');
		var $filtreBlocMardiSelect = $formulaireFiltres.find('select.valeurBlocMardi');
		var filtreBlocMardi = $filtreBlocMardiSelect.length ? $filtreBlocMardiSelect.val() : $filtreBlocMardiCheckbox.prop('checked');
		var filtreBlocMardiSelectVal = $formulaireFiltres.find('select.filtreBlocMardi').val();
		var filtreBlocMardi = null;
		if(filtreBlocMardiSelectVal !== '')
			filtreBlocMardi = filtreBlocMardiSelectVal == 'true';
		if(filtreBlocMardi != null && filtreBlocMardi === true)
			filtres.push({ name: 'fq', value: 'blocMardi:' + filtreBlocMardi });

		var $filtreBlocMercrediCheckbox = $formulaireFiltres.find('input.valeurBlocMercredi[type = "checkbox"]');
		var $filtreBlocMercrediSelect = $formulaireFiltres.find('select.valeurBlocMercredi');
		var filtreBlocMercredi = $filtreBlocMercrediSelect.length ? $filtreBlocMercrediSelect.val() : $filtreBlocMercrediCheckbox.prop('checked');
		var filtreBlocMercrediSelectVal = $formulaireFiltres.find('select.filtreBlocMercredi').val();
		var filtreBlocMercredi = null;
		if(filtreBlocMercrediSelectVal !== '')
			filtreBlocMercredi = filtreBlocMercrediSelectVal == 'true';
		if(filtreBlocMercredi != null && filtreBlocMercredi === true)
			filtres.push({ name: 'fq', value: 'blocMercredi:' + filtreBlocMercredi });

		var $filtreBlocJeudiCheckbox = $formulaireFiltres.find('input.valeurBlocJeudi[type = "checkbox"]');
		var $filtreBlocJeudiSelect = $formulaireFiltres.find('select.valeurBlocJeudi');
		var filtreBlocJeudi = $filtreBlocJeudiSelect.length ? $filtreBlocJeudiSelect.val() : $filtreBlocJeudiCheckbox.prop('checked');
		var filtreBlocJeudiSelectVal = $formulaireFiltres.find('select.filtreBlocJeudi').val();
		var filtreBlocJeudi = null;
		if(filtreBlocJeudiSelectVal !== '')
			filtreBlocJeudi = filtreBlocJeudiSelectVal == 'true';
		if(filtreBlocJeudi != null && filtreBlocJeudi === true)
			filtres.push({ name: 'fq', value: 'blocJeudi:' + filtreBlocJeudi });

		var $filtreBlocVendrediCheckbox = $formulaireFiltres.find('input.valeurBlocVendredi[type = "checkbox"]');
		var $filtreBlocVendrediSelect = $formulaireFiltres.find('select.valeurBlocVendredi');
		var filtreBlocVendredi = $filtreBlocVendrediSelect.length ? $filtreBlocVendrediSelect.val() : $filtreBlocVendrediCheckbox.prop('checked');
		var filtreBlocVendrediSelectVal = $formulaireFiltres.find('select.filtreBlocVendredi').val();
		var filtreBlocVendredi = null;
		if(filtreBlocVendrediSelectVal !== '')
			filtreBlocVendredi = filtreBlocVendrediSelectVal == 'true';
		if(filtreBlocVendredi != null && filtreBlocVendredi === true)
			filtres.push({ name: 'fq', value: 'blocVendredi:' + filtreBlocVendredi });

		var filtreAgeCle = $formulaireFiltres.find('.valeurAgeCle').val();
		if(filtreAgeCle != null && filtreAgeCle !== '')
			filtres.push({ name: 'fq', value: 'ageCle:' + filtreAgeCle });

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

		var filtreBlocCle = $formulaireFiltres.find('.valeurBlocCle').val();
		if(filtreBlocCle != null && filtreBlocCle !== '')
			filtres.push({ name: 'fq', value: 'blocCle:' + filtreBlocCle });

		var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
		if(filtreEnfantCle != null && filtreEnfantCle !== '')
			filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

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

		var filtreSessionTri = $formulaireFiltres.find('.valeurSessionTri').val();
		if(filtreSessionTri != null && filtreSessionTri !== '')
			filtres.push({ name: 'fq', value: 'sessionTri:' + filtreSessionTri });

		var filtreAgeTri = $formulaireFiltres.find('.valeurAgeTri').val();
		if(filtreAgeTri != null && filtreAgeTri !== '')
			filtres.push({ name: 'fq', value: 'ageTri:' + filtreAgeTri });

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

		var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
		if(filtreAnneeCle != null && filtreAnneeCle !== '')
			filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

		var filtreSessionCle = $formulaireFiltres.find('.valeurSessionCle').val();
		if(filtreSessionCle != null && filtreSessionCle !== '')
			filtres.push({ name: 'fq', value: 'sessionCle:' + filtreSessionCle });

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

		var filtreSaisonDateDebut = $formulaireFiltres.find('.valeurSaisonDateDebut').val();
		if(filtreSaisonDateDebut != null && filtreSaisonDateDebut !== '')
			filtres.push({ name: 'fq', value: 'saisonDateDebut:' + filtreSaisonDateDebut });

		var filtreAnneeFraisInscription = $formulaireFiltres.find('.valeurAnneeFraisInscription').val();
		if(filtreAnneeFraisInscription != null && filtreAnneeFraisInscription !== '')
			filtres.push({ name: 'fq', value: 'anneeFraisInscription:' + filtreAnneeFraisInscription });

		var filtreSessionDateDebut = $formulaireFiltres.find('.valeurSessionDateDebut').val();
		if(filtreSessionDateDebut != null && filtreSessionDateDebut !== '')
			filtres.push({ name: 'fq', value: 'sessionDateDebut:' + filtreSessionDateDebut });

		var filtreSessionDateFin = $formulaireFiltres.find('.valeurSessionDateFin').val();
		if(filtreSessionDateFin != null && filtreSessionDateFin !== '')
			filtres.push({ name: 'fq', value: 'sessionDateFin:' + filtreSessionDateFin });

		var filtreAgeNomCourt = $formulaireFiltres.find('.valeurAgeNomCourt').val();
		if(filtreAgeNomCourt != null && filtreAgeNomCourt !== '')
			filtres.push({ name: 'fq', value: 'ageNomCourt:' + filtreAgeNomCourt });

		var filtreAgeNomComplet = $formulaireFiltres.find('.valeurAgeNomComplet').val();
		if(filtreAgeNomComplet != null && filtreAgeNomComplet !== '')
			filtres.push({ name: 'fq', value: 'ageNomComplet:' + filtreAgeNomComplet });

		var filtreAgeDebut = $formulaireFiltres.find('.valeurAgeDebut').val();
		if(filtreAgeDebut != null && filtreAgeDebut !== '')
			filtres.push({ name: 'fq', value: 'ageDebut:' + filtreAgeDebut });

		var filtreAgeFin = $formulaireFiltres.find('.valeurAgeFin').val();
		if(filtreAgeFin != null && filtreAgeFin !== '')
			filtres.push({ name: 'fq', value: 'ageFin:' + filtreAgeFin });

		var $filtreBlocDimancheCheckbox = $formulaireFiltres.find('input.valeurBlocDimanche[type = "checkbox"]');
		var $filtreBlocDimancheSelect = $formulaireFiltres.find('select.valeurBlocDimanche');
		var filtreBlocDimanche = $filtreBlocDimancheSelect.length ? $filtreBlocDimancheSelect.val() : $filtreBlocDimancheCheckbox.prop('checked');
		var filtreBlocDimancheSelectVal = $formulaireFiltres.find('select.filtreBlocDimanche').val();
		var filtreBlocDimanche = null;
		if(filtreBlocDimancheSelectVal !== '')
			filtreBlocDimanche = filtreBlocDimancheSelectVal == 'true';
		if(filtreBlocDimanche != null && filtreBlocDimanche === true)
			filtres.push({ name: 'fq', value: 'blocDimanche:' + filtreBlocDimanche });

		var $filtreBlocSamediCheckbox = $formulaireFiltres.find('input.valeurBlocSamedi[type = "checkbox"]');
		var $filtreBlocSamediSelect = $formulaireFiltres.find('select.valeurBlocSamedi');
		var filtreBlocSamedi = $filtreBlocSamediSelect.length ? $filtreBlocSamediSelect.val() : $filtreBlocSamediCheckbox.prop('checked');
		var filtreBlocSamediSelectVal = $formulaireFiltres.find('select.filtreBlocSamedi').val();
		var filtreBlocSamedi = null;
		if(filtreBlocSamediSelectVal !== '')
			filtreBlocSamedi = filtreBlocSamediSelectVal == 'true';
		if(filtreBlocSamedi != null && filtreBlocSamedi === true)
			filtres.push({ name: 'fq', value: 'blocSamedi:' + filtreBlocSamedi });

		var filtreBlocPrixTotal = $formulaireFiltres.find('.valeurBlocPrixTotal').val();
		if(filtreBlocPrixTotal != null && filtreBlocPrixTotal !== '')
			filtres.push({ name: 'fq', value: 'blocPrixTotal:' + filtreBlocPrixTotal });

		var filtreBlocNomCourt = $formulaireFiltres.find('.valeurBlocNomCourt').val();
		if(filtreBlocNomCourt != null && filtreBlocNomCourt !== '')
			filtres.push({ name: 'fq', value: 'blocNomCourt:' + filtreBlocNomCourt });

		var filtreBlocNomAdmin = $formulaireFiltres.find('.valeurBlocNomAdmin').val();
		if(filtreBlocNomAdmin != null && filtreBlocNomAdmin !== '')
			filtres.push({ name: 'fq', value: 'blocNomAdmin:' + filtreBlocNomAdmin });

		var filtreBlocNomComplet = $formulaireFiltres.find('.valeurBlocNomComplet').val();
		if(filtreBlocNomComplet != null && filtreBlocNomComplet !== '')
			filtres.push({ name: 'fq', value: 'blocNomComplet:' + filtreBlocNomComplet });
	}
	return filtres;
}

function patchBlocScolaireVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchBlocScolaireVals(filtres, vals, success, error);
}

function patchBlocScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/bloc?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getBlocScolaire(pk) {
	$.ajax({
		url: '/api/bloc/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Recherche //

async function rechercheBlocScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheBlocScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheBlocScolaireVals(filtres, success, error);
}

function rechercheBlocScolaireFiltres($formulaireFiltres) {
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

		var filtreBlocHeureDebut = $formulaireFiltres.find('.valeurBlocHeureDebut').val();
		if(filtreBlocHeureDebut != null && filtreBlocHeureDebut !== '')
			filtres.push({ name: 'fq', value: 'blocHeureDebut:' + filtreBlocHeureDebut });

		var filtreBlocHeureFin = $formulaireFiltres.find('.valeurBlocHeureFin').val();
		if(filtreBlocHeureFin != null && filtreBlocHeureFin !== '')
			filtres.push({ name: 'fq', value: 'blocHeureFin:' + filtreBlocHeureFin });

		var filtreBlocPrixParMois = $formulaireFiltres.find('.valeurBlocPrixParMois').val();
		if(filtreBlocPrixParMois != null && filtreBlocPrixParMois !== '')
			filtres.push({ name: 'fq', value: 'blocPrixParMois:' + filtreBlocPrixParMois });

		var $filtreBlocLundiCheckbox = $formulaireFiltres.find('input.valeurBlocLundi[type = "checkbox"]');
		var $filtreBlocLundiSelect = $formulaireFiltres.find('select.valeurBlocLundi');
		var filtreBlocLundi = $filtreBlocLundiSelect.length ? $filtreBlocLundiSelect.val() : $filtreBlocLundiCheckbox.prop('checked');
		var filtreBlocLundiSelectVal = $formulaireFiltres.find('select.filtreBlocLundi').val();
		var filtreBlocLundi = null;
		if(filtreBlocLundiSelectVal !== '')
			filtreBlocLundi = filtreBlocLundiSelectVal == 'true';
		if(filtreBlocLundi != null && filtreBlocLundi === true)
			filtres.push({ name: 'fq', value: 'blocLundi:' + filtreBlocLundi });

		var $filtreBlocMardiCheckbox = $formulaireFiltres.find('input.valeurBlocMardi[type = "checkbox"]');
		var $filtreBlocMardiSelect = $formulaireFiltres.find('select.valeurBlocMardi');
		var filtreBlocMardi = $filtreBlocMardiSelect.length ? $filtreBlocMardiSelect.val() : $filtreBlocMardiCheckbox.prop('checked');
		var filtreBlocMardiSelectVal = $formulaireFiltres.find('select.filtreBlocMardi').val();
		var filtreBlocMardi = null;
		if(filtreBlocMardiSelectVal !== '')
			filtreBlocMardi = filtreBlocMardiSelectVal == 'true';
		if(filtreBlocMardi != null && filtreBlocMardi === true)
			filtres.push({ name: 'fq', value: 'blocMardi:' + filtreBlocMardi });

		var $filtreBlocMercrediCheckbox = $formulaireFiltres.find('input.valeurBlocMercredi[type = "checkbox"]');
		var $filtreBlocMercrediSelect = $formulaireFiltres.find('select.valeurBlocMercredi');
		var filtreBlocMercredi = $filtreBlocMercrediSelect.length ? $filtreBlocMercrediSelect.val() : $filtreBlocMercrediCheckbox.prop('checked');
		var filtreBlocMercrediSelectVal = $formulaireFiltres.find('select.filtreBlocMercredi').val();
		var filtreBlocMercredi = null;
		if(filtreBlocMercrediSelectVal !== '')
			filtreBlocMercredi = filtreBlocMercrediSelectVal == 'true';
		if(filtreBlocMercredi != null && filtreBlocMercredi === true)
			filtres.push({ name: 'fq', value: 'blocMercredi:' + filtreBlocMercredi });

		var $filtreBlocJeudiCheckbox = $formulaireFiltres.find('input.valeurBlocJeudi[type = "checkbox"]');
		var $filtreBlocJeudiSelect = $formulaireFiltres.find('select.valeurBlocJeudi');
		var filtreBlocJeudi = $filtreBlocJeudiSelect.length ? $filtreBlocJeudiSelect.val() : $filtreBlocJeudiCheckbox.prop('checked');
		var filtreBlocJeudiSelectVal = $formulaireFiltres.find('select.filtreBlocJeudi').val();
		var filtreBlocJeudi = null;
		if(filtreBlocJeudiSelectVal !== '')
			filtreBlocJeudi = filtreBlocJeudiSelectVal == 'true';
		if(filtreBlocJeudi != null && filtreBlocJeudi === true)
			filtres.push({ name: 'fq', value: 'blocJeudi:' + filtreBlocJeudi });

		var $filtreBlocVendrediCheckbox = $formulaireFiltres.find('input.valeurBlocVendredi[type = "checkbox"]');
		var $filtreBlocVendrediSelect = $formulaireFiltres.find('select.valeurBlocVendredi');
		var filtreBlocVendredi = $filtreBlocVendrediSelect.length ? $filtreBlocVendrediSelect.val() : $filtreBlocVendrediCheckbox.prop('checked');
		var filtreBlocVendrediSelectVal = $formulaireFiltres.find('select.filtreBlocVendredi').val();
		var filtreBlocVendredi = null;
		if(filtreBlocVendrediSelectVal !== '')
			filtreBlocVendredi = filtreBlocVendrediSelectVal == 'true';
		if(filtreBlocVendredi != null && filtreBlocVendredi === true)
			filtres.push({ name: 'fq', value: 'blocVendredi:' + filtreBlocVendredi });

		var filtreAgeCle = $formulaireFiltres.find('.valeurAgeCle').val();
		if(filtreAgeCle != null && filtreAgeCle !== '')
			filtres.push({ name: 'fq', value: 'ageCle:' + filtreAgeCle });

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

		var filtreBlocCle = $formulaireFiltres.find('.valeurBlocCle').val();
		if(filtreBlocCle != null && filtreBlocCle !== '')
			filtres.push({ name: 'fq', value: 'blocCle:' + filtreBlocCle });

		var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
		if(filtreEnfantCle != null && filtreEnfantCle !== '')
			filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

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

		var filtreSessionTri = $formulaireFiltres.find('.valeurSessionTri').val();
		if(filtreSessionTri != null && filtreSessionTri !== '')
			filtres.push({ name: 'fq', value: 'sessionTri:' + filtreSessionTri });

		var filtreAgeTri = $formulaireFiltres.find('.valeurAgeTri').val();
		if(filtreAgeTri != null && filtreAgeTri !== '')
			filtres.push({ name: 'fq', value: 'ageTri:' + filtreAgeTri });

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

		var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
		if(filtreAnneeCle != null && filtreAnneeCle !== '')
			filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

		var filtreSessionCle = $formulaireFiltres.find('.valeurSessionCle').val();
		if(filtreSessionCle != null && filtreSessionCle !== '')
			filtres.push({ name: 'fq', value: 'sessionCle:' + filtreSessionCle });

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

		var filtreSaisonDateDebut = $formulaireFiltres.find('.valeurSaisonDateDebut').val();
		if(filtreSaisonDateDebut != null && filtreSaisonDateDebut !== '')
			filtres.push({ name: 'fq', value: 'saisonDateDebut:' + filtreSaisonDateDebut });

		var filtreAnneeFraisInscription = $formulaireFiltres.find('.valeurAnneeFraisInscription').val();
		if(filtreAnneeFraisInscription != null && filtreAnneeFraisInscription !== '')
			filtres.push({ name: 'fq', value: 'anneeFraisInscription:' + filtreAnneeFraisInscription });

		var filtreSessionDateDebut = $formulaireFiltres.find('.valeurSessionDateDebut').val();
		if(filtreSessionDateDebut != null && filtreSessionDateDebut !== '')
			filtres.push({ name: 'fq', value: 'sessionDateDebut:' + filtreSessionDateDebut });

		var filtreSessionDateFin = $formulaireFiltres.find('.valeurSessionDateFin').val();
		if(filtreSessionDateFin != null && filtreSessionDateFin !== '')
			filtres.push({ name: 'fq', value: 'sessionDateFin:' + filtreSessionDateFin });

		var filtreAgeNomCourt = $formulaireFiltres.find('.valeurAgeNomCourt').val();
		if(filtreAgeNomCourt != null && filtreAgeNomCourt !== '')
			filtres.push({ name: 'fq', value: 'ageNomCourt:' + filtreAgeNomCourt });

		var filtreAgeNomComplet = $formulaireFiltres.find('.valeurAgeNomComplet').val();
		if(filtreAgeNomComplet != null && filtreAgeNomComplet !== '')
			filtres.push({ name: 'fq', value: 'ageNomComplet:' + filtreAgeNomComplet });

		var filtreAgeDebut = $formulaireFiltres.find('.valeurAgeDebut').val();
		if(filtreAgeDebut != null && filtreAgeDebut !== '')
			filtres.push({ name: 'fq', value: 'ageDebut:' + filtreAgeDebut });

		var filtreAgeFin = $formulaireFiltres.find('.valeurAgeFin').val();
		if(filtreAgeFin != null && filtreAgeFin !== '')
			filtres.push({ name: 'fq', value: 'ageFin:' + filtreAgeFin });

		var $filtreBlocDimancheCheckbox = $formulaireFiltres.find('input.valeurBlocDimanche[type = "checkbox"]');
		var $filtreBlocDimancheSelect = $formulaireFiltres.find('select.valeurBlocDimanche');
		var filtreBlocDimanche = $filtreBlocDimancheSelect.length ? $filtreBlocDimancheSelect.val() : $filtreBlocDimancheCheckbox.prop('checked');
		var filtreBlocDimancheSelectVal = $formulaireFiltres.find('select.filtreBlocDimanche').val();
		var filtreBlocDimanche = null;
		if(filtreBlocDimancheSelectVal !== '')
			filtreBlocDimanche = filtreBlocDimancheSelectVal == 'true';
		if(filtreBlocDimanche != null && filtreBlocDimanche === true)
			filtres.push({ name: 'fq', value: 'blocDimanche:' + filtreBlocDimanche });

		var $filtreBlocSamediCheckbox = $formulaireFiltres.find('input.valeurBlocSamedi[type = "checkbox"]');
		var $filtreBlocSamediSelect = $formulaireFiltres.find('select.valeurBlocSamedi');
		var filtreBlocSamedi = $filtreBlocSamediSelect.length ? $filtreBlocSamediSelect.val() : $filtreBlocSamediCheckbox.prop('checked');
		var filtreBlocSamediSelectVal = $formulaireFiltres.find('select.filtreBlocSamedi').val();
		var filtreBlocSamedi = null;
		if(filtreBlocSamediSelectVal !== '')
			filtreBlocSamedi = filtreBlocSamediSelectVal == 'true';
		if(filtreBlocSamedi != null && filtreBlocSamedi === true)
			filtres.push({ name: 'fq', value: 'blocSamedi:' + filtreBlocSamedi });

		var filtreBlocPrixTotal = $formulaireFiltres.find('.valeurBlocPrixTotal').val();
		if(filtreBlocPrixTotal != null && filtreBlocPrixTotal !== '')
			filtres.push({ name: 'fq', value: 'blocPrixTotal:' + filtreBlocPrixTotal });

		var filtreBlocNomCourt = $formulaireFiltres.find('.valeurBlocNomCourt').val();
		if(filtreBlocNomCourt != null && filtreBlocNomCourt !== '')
			filtres.push({ name: 'fq', value: 'blocNomCourt:' + filtreBlocNomCourt });

		var filtreBlocNomAdmin = $formulaireFiltres.find('.valeurBlocNomAdmin').val();
		if(filtreBlocNomAdmin != null && filtreBlocNomAdmin !== '')
			filtres.push({ name: 'fq', value: 'blocNomAdmin:' + filtreBlocNomAdmin });

		var filtreBlocNomComplet = $formulaireFiltres.find('.valeurBlocNomComplet').val();
		if(filtreBlocNomComplet != null && filtreBlocNomComplet !== '')
			filtres.push({ name: 'fq', value: 'blocNomComplet:' + filtreBlocNomComplet });
	}
	return filtres;
}

function rechercheBlocScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/bloc?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereBlocScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-bell ');
			var $span = $('<span>').attr('class', '').text(o['blocNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherBlocScolaireVals($formulaireFiltres, success, error);
}

function suggereBlocScolaireInscriptionCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['blocCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_inscriptionCles_' + pk + '_blocCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurInscriptionCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_inscriptionCles_" + pk + "_blocCles_" + o['pk'] + "'); patchBlocScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'InscriptionCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#BlocScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheInscriptionScolaireVals(filtres, success, error);
}

function suggereBlocScolaireAgeCle(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-birthday-cake ');
			var $span = $('<span>').attr('class', '').text(o['ageNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['blocCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_ageCle_' + pk + '_blocCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurAgeCle w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_ageCle_" + pk + "_blocCles_" + o['pk'] + "'); patchBlocScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'AgeCle']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#BlocScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheAgeScolaireVals(filtres, success, error);
}

async function websocketBlocScolaire(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketBlocScolaire', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#BlocScolaireForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = json['numFound'];
			var numPATCH = json['numPATCH'];
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-indigo ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-bell w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modifier blocs');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-indigo ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketAgeScolaire', function (error, message) {
			$('#Page_ageCle').trigger('oninput');
			$('#Page_ageCle_ajouter').text('ajouter un âge');
			$('#Page_ageCle_ajouter').removeClass('w3-disabled');
			$('#Page_ageCle_ajouter').attr('disabled', false);
		});
	}
}
async function websocketBlocScolaireInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherBlocScolaireVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputBlocScolaire' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'Pk'));
			}
			var val = o['cree'];
			if(vars.includes('cree')) {
				$('.inputBlocScolaire' + pk + 'Cree').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'Cree').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'Cree'));
			}
			var val = o['modifie'];
			if(vars.includes('modifie')) {
				$('.inputBlocScolaire' + pk + 'Modifie').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'Modifie').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'Modifie'));
			}
			var val = o['objetId'];
			if(vars.includes('objetId')) {
				$('.inputBlocScolaire' + pk + 'ObjetId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'ObjetId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'ObjetId'));
			}
			var val = o['archive'];
			if(vars.includes('archive')) {
				$('.inputBlocScolaire' + pk + 'Archive').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'Archive').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'Archive'));
			}
			var val = o['supprime'];
			if(vars.includes('supprime')) {
				$('.inputBlocScolaire' + pk + 'Supprime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'Supprime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'Supprime'));
			}
			var val = o['blocHeureDebut'];
			if(val != null) {
				var t = moment(val, 'HH:mm');
				if(t)
					val = t.format('H'h'mm');
			}
			if(vars.includes('blocHeureDebut')) {
				$('.inputBlocScolaire' + pk + 'BlocHeureDebut').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'BlocHeureDebut').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'BlocHeureDebut'));
			}
			var val = o['blocHeureFin'];
			if(val != null) {
				var t = moment(val, 'HH:mm');
				if(t)
					val = t.format('H'h'mm');
			}
			if(vars.includes('blocHeureFin')) {
				$('.inputBlocScolaire' + pk + 'BlocHeureFin').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'BlocHeureFin').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'BlocHeureFin'));
			}
			var val = o['blocPrixParMois'];
			if(vars.includes('blocPrixParMois')) {
				$('.inputBlocScolaire' + pk + 'BlocPrixParMois').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'BlocPrixParMois').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'BlocPrixParMois'));
			}
			var val = o['blocLundi'];
			if(vars.includes('blocLundi')) {
				$('.inputBlocScolaire' + pk + 'BlocLundi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'BlocLundi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'BlocLundi'));
			}
			var val = o['blocMardi'];
			if(vars.includes('blocMardi')) {
				$('.inputBlocScolaire' + pk + 'BlocMardi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'BlocMardi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'BlocMardi'));
			}
			var val = o['blocMercredi'];
			if(vars.includes('blocMercredi')) {
				$('.inputBlocScolaire' + pk + 'BlocMercredi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'BlocMercredi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'BlocMercredi'));
			}
			var val = o['blocJeudi'];
			if(vars.includes('blocJeudi')) {
				$('.inputBlocScolaire' + pk + 'BlocJeudi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'BlocJeudi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'BlocJeudi'));
			}
			var val = o['blocVendredi'];
			if(vars.includes('blocVendredi')) {
				$('.inputBlocScolaire' + pk + 'BlocVendredi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'BlocVendredi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'BlocVendredi'));
			}
			var val = o['ageCle'];
			if(vars.includes('ageCle')) {
				$('.inputBlocScolaire' + pk + 'AgeCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'AgeCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'AgeCle'));
			}
			var val = o['inscriptionCles'];
			if(vars.includes('inscriptionCles')) {
				$('.inputBlocScolaire' + pk + 'InscriptionCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'InscriptionCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'InscriptionCles'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputBlocScolaire' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputBlocScolaire' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'Id'));
			}
			var val = o['classeNomCanonique'];
			if(vars.includes('classeNomCanonique')) {
				$('.inputBlocScolaire' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'ClasseNomCanonique'));
			}
			var val = o['classeNomSimple'];
			if(vars.includes('classeNomSimple')) {
				$('.inputBlocScolaire' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'ClasseNomSimple'));
			}
			var val = o['classeNomsCanoniques'];
			if(vars.includes('classeNomsCanoniques')) {
				$('.inputBlocScolaire' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'ClasseNomsCanoniques'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputBlocScolaire' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'SessionId'));
			}
			var val = o['utilisateurId'];
			if(vars.includes('utilisateurId')) {
				$('.inputBlocScolaire' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'UtilisateurId'));
			}
			var val = o['utilisateurCle'];
			if(vars.includes('utilisateurCle')) {
				$('.inputBlocScolaire' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'UtilisateurCle'));
			}
			var val = o['sauvegardes'];
			if(vars.includes('sauvegardes')) {
				$('.inputBlocScolaire' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'Sauvegardes'));
			}
			var val = o['objetTitre'];
			if(vars.includes('objetTitre')) {
				$('.inputBlocScolaire' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'ObjetTitre'));
			}
			var val = o['objetSuggere'];
			if(vars.includes('objetSuggere')) {
				$('.inputBlocScolaire' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'ObjetSuggere'));
			}
			var val = o['objetTexte'];
			if(vars.includes('objetTexte')) {
				$('.inputBlocScolaire' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'ObjetTexte'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputBlocScolaire' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputBlocScolaire' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputBlocScolaire' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'PageUrlApi'));
			}
			var val = o['blocCle'];
			if(vars.includes('blocCle')) {
				$('.inputBlocScolaire' + pk + 'BlocCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'BlocCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'BlocCle'));
			}
			var val = o['enfantCle'];
			if(vars.includes('enfantCle')) {
				$('.inputBlocScolaire' + pk + 'EnfantCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'EnfantCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'EnfantCle'));
			}
			var val = o['scolaireTri'];
			if(vars.includes('scolaireTri')) {
				$('.inputBlocScolaire' + pk + 'ScolaireTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'ScolaireTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'ScolaireTri'));
			}
			var val = o['ecoleTri'];
			if(vars.includes('ecoleTri')) {
				$('.inputBlocScolaire' + pk + 'EcoleTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'EcoleTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'EcoleTri'));
			}
			var val = o['anneeTri'];
			if(vars.includes('anneeTri')) {
				$('.inputBlocScolaire' + pk + 'AnneeTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'AnneeTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'AnneeTri'));
			}
			var val = o['saisonTri'];
			if(vars.includes('saisonTri')) {
				$('.inputBlocScolaire' + pk + 'SaisonTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'SaisonTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'SaisonTri'));
			}
			var val = o['sessionTri'];
			if(vars.includes('sessionTri')) {
				$('.inputBlocScolaire' + pk + 'SessionTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'SessionTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'SessionTri'));
			}
			var val = o['ageTri'];
			if(vars.includes('ageTri')) {
				$('.inputBlocScolaire' + pk + 'AgeTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'AgeTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'AgeTri'));
			}
			var val = o['ecoleCle'];
			if(vars.includes('ecoleCle')) {
				$('.inputBlocScolaire' + pk + 'EcoleCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'EcoleCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'EcoleCle'));
			}
			var val = o['anneeCle'];
			if(vars.includes('anneeCle')) {
				$('.inputBlocScolaire' + pk + 'AnneeCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'AnneeCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'AnneeCle'));
			}
			var val = o['sessionCle'];
			if(vars.includes('sessionCle')) {
				$('.inputBlocScolaire' + pk + 'SessionCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'SessionCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'SessionCle'));
			}
			var val = o['ecoleNom'];
			if(vars.includes('ecoleNom')) {
				$('.inputBlocScolaire' + pk + 'EcoleNom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'EcoleNom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'EcoleNom'));
			}
			var val = o['ecoleNomComplet'];
			if(vars.includes('ecoleNomComplet')) {
				$('.inputBlocScolaire' + pk + 'EcoleNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'EcoleNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'EcoleNomComplet'));
			}
			var val = o['ecoleEmplacement'];
			if(vars.includes('ecoleEmplacement')) {
				$('.inputBlocScolaire' + pk + 'EcoleEmplacement').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'EcoleEmplacement').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'EcoleEmplacement'));
			}
			var val = o['ecoleAddresse'];
			if(vars.includes('ecoleAddresse')) {
				$('.inputBlocScolaire' + pk + 'EcoleAddresse').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'EcoleAddresse').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'EcoleAddresse'));
			}
			var val = o['ecoleNumeroTelephone'];
			if(vars.includes('ecoleNumeroTelephone')) {
				$('.inputBlocScolaire' + pk + 'EcoleNumeroTelephone').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'EcoleNumeroTelephone').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'EcoleNumeroTelephone'));
			}
			var val = o['ecoleForm'];
			if(vars.includes('ecoleForm')) {
				$('.inputBlocScolaire' + pk + 'EcoleForm').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'EcoleForm').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'EcoleForm'));
			}
			var val = o['ecoleNumero'];
			if(vars.includes('ecoleNumero')) {
				$('.inputBlocScolaire' + pk + 'EcoleNumero').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'EcoleNumero').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'EcoleNumero'));
			}
			var val = o['ecoleAdministrateurNom'];
			if(vars.includes('ecoleAdministrateurNom')) {
				$('.inputBlocScolaire' + pk + 'EcoleAdministrateurNom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'EcoleAdministrateurNom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'EcoleAdministrateurNom'));
			}
			var val = o['anneeDebut'];
			if(vars.includes('anneeDebut')) {
				$('.inputBlocScolaire' + pk + 'AnneeDebut').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'AnneeDebut').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'AnneeDebut'));
			}
			var val = o['anneeFin'];
			if(vars.includes('anneeFin')) {
				$('.inputBlocScolaire' + pk + 'AnneeFin').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'AnneeFin').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'AnneeFin'));
			}
			var val = o['saisonDateDebut'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('saisonDateDebut')) {
				$('.inputBlocScolaire' + pk + 'SaisonDateDebut').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'SaisonDateDebut').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'SaisonDateDebut'));
			}
			var val = o['anneeFraisInscription'];
			if(vars.includes('anneeFraisInscription')) {
				$('.inputBlocScolaire' + pk + 'AnneeFraisInscription').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'AnneeFraisInscription').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'AnneeFraisInscription'));
			}
			var val = o['sessionDateDebut'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('sessionDateDebut')) {
				$('.inputBlocScolaire' + pk + 'SessionDateDebut').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'SessionDateDebut').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'SessionDateDebut'));
			}
			var val = o['sessionDateFin'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('sessionDateFin')) {
				$('.inputBlocScolaire' + pk + 'SessionDateFin').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'SessionDateFin').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'SessionDateFin'));
			}
			var val = o['ageNomCourt'];
			if(vars.includes('ageNomCourt')) {
				$('.inputBlocScolaire' + pk + 'AgeNomCourt').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'AgeNomCourt').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'AgeNomCourt'));
			}
			var val = o['ageNomComplet'];
			if(vars.includes('ageNomComplet')) {
				$('.inputBlocScolaire' + pk + 'AgeNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'AgeNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'AgeNomComplet'));
			}
			var val = o['ageDebut'];
			if(vars.includes('ageDebut')) {
				$('.inputBlocScolaire' + pk + 'AgeDebut').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'AgeDebut').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'AgeDebut'));
			}
			var val = o['ageFin'];
			if(vars.includes('ageFin')) {
				$('.inputBlocScolaire' + pk + 'AgeFin').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'AgeFin').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'AgeFin'));
			}
			var val = o['blocDimanche'];
			if(vars.includes('blocDimanche')) {
				$('.inputBlocScolaire' + pk + 'BlocDimanche').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'BlocDimanche').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'BlocDimanche'));
			}
			var val = o['blocSamedi'];
			if(vars.includes('blocSamedi')) {
				$('.inputBlocScolaire' + pk + 'BlocSamedi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'BlocSamedi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'BlocSamedi'));
			}
			var val = o['blocPrixTotal'];
			if(vars.includes('blocPrixTotal')) {
				$('.inputBlocScolaire' + pk + 'BlocPrixTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'BlocPrixTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'BlocPrixTotal'));
			}
			var val = o['blocNomCourt'];
			if(vars.includes('blocNomCourt')) {
				$('.inputBlocScolaire' + pk + 'BlocNomCourt').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'BlocNomCourt').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'BlocNomCourt'));
			}
			var val = o['blocNomAdmin'];
			if(vars.includes('blocNomAdmin')) {
				$('.inputBlocScolaire' + pk + 'BlocNomAdmin').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'BlocNomAdmin').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'BlocNomAdmin'));
			}
			var val = o['blocNomComplet'];
			if(vars.includes('blocNomComplet')) {
				$('.inputBlocScolaire' + pk + 'BlocNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBlocScolaire' + pk + 'BlocNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputBlocScolaire' + pk + 'BlocNomComplet'));
			}
		});
	}
}
