
// POST //

async function postDesignPage($formulaireValeurs, success, error) {
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

	var valeurDesignPageNomComplet = $formulaireValeurs.find('.valeurDesignPageNomComplet').val();
	if(valeurDesignPageNomComplet != null && valeurDesignPageNomComplet !== '')
		vals['designPageNomComplet'] = valeurDesignPageNomComplet;

	var valeurDesignCache = $formulaireValeurs.find('.valeurDesignCache').prop('checked');
	if(valeurDesignCache != null && valeurDesignCache !== '')
		vals['designCache'] = valeurDesignCache;

	var valeurDesignAdmin = $formulaireValeurs.find('.valeurDesignAdmin').prop('checked');
	if(valeurDesignAdmin != null && valeurDesignAdmin !== '')
		vals['designAdmin'] = valeurDesignAdmin;

	var valeurDesignIgnorerNomEnfantVide = $formulaireValeurs.find('.valeurDesignIgnorerNomEnfantVide').prop('checked');
	if(valeurDesignIgnorerNomEnfantVide != null && valeurDesignIgnorerNomEnfantVide !== '')
		vals['designIgnorerNomEnfantVide'] = valeurDesignIgnorerNomEnfantVide;

	var valeurDesignIgnorerPaiementsPasEnSouffrance = $formulaireValeurs.find('.valeurDesignIgnorerPaiementsPasEnSouffrance').prop('checked');
	if(valeurDesignIgnorerPaiementsPasEnSouffrance != null && valeurDesignIgnorerPaiementsPasEnSouffrance !== '')
		vals['designIgnorerPaiementsPasEnSouffrance'] = valeurDesignIgnorerPaiementsPasEnSouffrance;

	var valeurDesignIgnorerPaiementsEnSouffrance = $formulaireValeurs.find('.valeurDesignIgnorerPaiementsEnSouffrance').prop('checked');
	if(valeurDesignIgnorerPaiementsEnSouffrance != null && valeurDesignIgnorerPaiementsEnSouffrance !== '')
		vals['designIgnorerPaiementsEnSouffrance'] = valeurDesignIgnorerPaiementsEnSouffrance;

	var valeurDesignFiltrerInscriptionCle = $formulaireValeurs.find('.valeurDesignFiltrerInscriptionCle').prop('checked');
	if(valeurDesignFiltrerInscriptionCle != null && valeurDesignFiltrerInscriptionCle !== '')
		vals['designFiltrerInscriptionCle'] = valeurDesignFiltrerInscriptionCle;

	var valeurDesignInscriptionTriMoisJourDeNaissance = $formulaireValeurs.find('.valeurDesignInscriptionTriMoisJourDeNaissance').prop('checked');
	if(valeurDesignInscriptionTriMoisJourDeNaissance != null && valeurDesignInscriptionTriMoisJourDeNaissance !== '')
		vals['designInscriptionTriMoisJourDeNaissance'] = valeurDesignInscriptionTriMoisJourDeNaissance;

	var valeurDesignInscriptionTriNomGroupe = $formulaireValeurs.find('.valeurDesignInscriptionTriNomGroupe').prop('checked');
	if(valeurDesignInscriptionTriNomGroupe != null && valeurDesignInscriptionTriNomGroupe !== '')
		vals['designInscriptionTriNomGroupe'] = valeurDesignInscriptionTriNomGroupe;

	var valeurDesignInscriptionTriNomEnfant = $formulaireValeurs.find('.valeurDesignInscriptionTriNomEnfant').prop('checked');
	if(valeurDesignInscriptionTriNomEnfant != null && valeurDesignInscriptionTriNomEnfant !== '')
		vals['designInscriptionTriNomEnfant'] = valeurDesignInscriptionTriNomEnfant;

	var valeurRechercherAnnees = $formulaireValeurs.find('.valeurRechercherAnnees').prop('checked');
	if(valeurRechercherAnnees != null && valeurRechercherAnnees !== '')
		vals['rechercherAnnees'] = valeurRechercherAnnees;

	var valeurRechercherPaiements = $formulaireValeurs.find('.valeurRechercherPaiements').prop('checked');
	if(valeurRechercherPaiements != null && valeurRechercherPaiements !== '')
		vals['rechercherPaiements'] = valeurRechercherPaiements;

	var valeurDesignParentCles = [];
	$formulaireValeurs.find('input.valeurDesignParentCles:checked').each(function(index) {
		valeurDesignParentCles.push($(this).val());
	});
	if(valeurDesignParentCles.length > 0)
		vals['designParentCles'] = valeurDesignParentCles;

	var valeurPartHtmlCles = [];
	$formulaireValeurs.find('input.valeurPartHtmlCles:checked').each(function(index) {
		valeurPartHtmlCles.push($(this).val());
	});
	if(valeurPartHtmlCles.length > 0)
		vals['partHtmlCles'] = valeurPartHtmlCles;

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
		url: '/api/design-page'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postDesignPageVals(vals, success, error) {
	$.ajax({
		url: '/api/design-page'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportDesignPage($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTImport_liste').val();
	if(json != null && json !== '')
		putimportDesignPageVals(JSON.parse(json), success, error);
}

function putimportDesignPageVals(json, success, error) {
	$.ajax({
		url: '/api/design-page/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTFusion //

async function putfusionDesignPage($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTFusion_liste').val();
	if(json != null && json !== '')
		putfusionDesignPageVals(JSON.parse(json), success, error);
}

function putfusionDesignPageVals(json, success, error) {
	$.ajax({
		url: '/api/design-page/fusion'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopie //

async function putcopieDesignPage($formulaireValeurs, pk, success, error) {
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

	var valeurDesignPageNomComplet = $formulaireValeurs.find('.valeurDesignPageNomComplet').val();
	if(valeurDesignPageNomComplet != null && valeurDesignPageNomComplet !== '')
		vals['designPageNomComplet'] = valeurDesignPageNomComplet;

	var valeurDesignCache = $formulaireValeurs.find('.valeurDesignCache').prop('checked');
	if(valeurDesignCache != null && valeurDesignCache !== '')
		vals['designCache'] = valeurDesignCache;

	var valeurDesignAdmin = $formulaireValeurs.find('.valeurDesignAdmin').prop('checked');
	if(valeurDesignAdmin != null && valeurDesignAdmin !== '')
		vals['designAdmin'] = valeurDesignAdmin;

	var valeurDesignIgnorerNomEnfantVide = $formulaireValeurs.find('.valeurDesignIgnorerNomEnfantVide').prop('checked');
	if(valeurDesignIgnorerNomEnfantVide != null && valeurDesignIgnorerNomEnfantVide !== '')
		vals['designIgnorerNomEnfantVide'] = valeurDesignIgnorerNomEnfantVide;

	var valeurDesignIgnorerPaiementsPasEnSouffrance = $formulaireValeurs.find('.valeurDesignIgnorerPaiementsPasEnSouffrance').prop('checked');
	if(valeurDesignIgnorerPaiementsPasEnSouffrance != null && valeurDesignIgnorerPaiementsPasEnSouffrance !== '')
		vals['designIgnorerPaiementsPasEnSouffrance'] = valeurDesignIgnorerPaiementsPasEnSouffrance;

	var valeurDesignIgnorerPaiementsEnSouffrance = $formulaireValeurs.find('.valeurDesignIgnorerPaiementsEnSouffrance').prop('checked');
	if(valeurDesignIgnorerPaiementsEnSouffrance != null && valeurDesignIgnorerPaiementsEnSouffrance !== '')
		vals['designIgnorerPaiementsEnSouffrance'] = valeurDesignIgnorerPaiementsEnSouffrance;

	var valeurDesignFiltrerInscriptionCle = $formulaireValeurs.find('.valeurDesignFiltrerInscriptionCle').prop('checked');
	if(valeurDesignFiltrerInscriptionCle != null && valeurDesignFiltrerInscriptionCle !== '')
		vals['designFiltrerInscriptionCle'] = valeurDesignFiltrerInscriptionCle;

	var valeurDesignInscriptionTriMoisJourDeNaissance = $formulaireValeurs.find('.valeurDesignInscriptionTriMoisJourDeNaissance').prop('checked');
	if(valeurDesignInscriptionTriMoisJourDeNaissance != null && valeurDesignInscriptionTriMoisJourDeNaissance !== '')
		vals['designInscriptionTriMoisJourDeNaissance'] = valeurDesignInscriptionTriMoisJourDeNaissance;

	var valeurDesignInscriptionTriNomGroupe = $formulaireValeurs.find('.valeurDesignInscriptionTriNomGroupe').prop('checked');
	if(valeurDesignInscriptionTriNomGroupe != null && valeurDesignInscriptionTriNomGroupe !== '')
		vals['designInscriptionTriNomGroupe'] = valeurDesignInscriptionTriNomGroupe;

	var valeurDesignInscriptionTriNomEnfant = $formulaireValeurs.find('.valeurDesignInscriptionTriNomEnfant').prop('checked');
	if(valeurDesignInscriptionTriNomEnfant != null && valeurDesignInscriptionTriNomEnfant !== '')
		vals['designInscriptionTriNomEnfant'] = valeurDesignInscriptionTriNomEnfant;

	var valeurRechercherAnnees = $formulaireValeurs.find('.valeurRechercherAnnees').prop('checked');
	if(valeurRechercherAnnees != null && valeurRechercherAnnees !== '')
		vals['rechercherAnnees'] = valeurRechercherAnnees;

	var valeurRechercherPaiements = $formulaireValeurs.find('.valeurRechercherPaiements').prop('checked');
	if(valeurRechercherPaiements != null && valeurRechercherPaiements !== '')
		vals['rechercherPaiements'] = valeurRechercherPaiements;

	var valeurDesignParentCles = $formulaireValeurs.find('input.valeurDesignParentCles:checked').val();
	if(valeurDesignParentCles != null && valeurDesignParentCles !== '')
		vals['designParentCles'] = [valeurDesignParentCles];

	var valeurPartHtmlCles = $formulaireValeurs.find('input.valeurPartHtmlCles:checked').val();
	if(valeurPartHtmlCles != null && valeurPartHtmlCles !== '')
		vals['partHtmlCles'] = [valeurPartHtmlCles];

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

	putcopieDesignPageVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopieDesignPageVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/design-page/copie?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchDesignPage($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchDesignPageFiltres($formulaireFiltres);

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

	var valeurDesignPageNomComplet = $formulaireValeurs.find('.valeurDesignPageNomComplet').val();
	var removeDesignPageNomComplet = $formulaireValeurs.find('.removeDesignPageNomComplet').val() === 'true';
	var setDesignPageNomComplet = removeDesignPageNomComplet ? null : $formulaireValeurs.find('.setDesignPageNomComplet').val();
	if(removeDesignPageNomComplet || setDesignPageNomComplet != null && setDesignPageNomComplet !== '')
		vals['setDesignPageNomComplet'] = setDesignPageNomComplet;
	var addDesignPageNomComplet = $formulaireValeurs.find('.addDesignPageNomComplet').val();
	if(addDesignPageNomComplet != null && addDesignPageNomComplet !== '')
		vals['addDesignPageNomComplet'] = addDesignPageNomComplet;
	var removeDesignPageNomComplet = $formulaireValeurs.find('.removeDesignPageNomComplet').val();
	if(removeDesignPageNomComplet != null && removeDesignPageNomComplet !== '')
		vals['removeDesignPageNomComplet'] = removeDesignPageNomComplet;

	var valeurDesignCache = $formulaireValeurs.find('.valeurDesignCache').prop('checked');
	var removeDesignCache = $formulaireValeurs.find('.removeDesignCache').val() === 'true';
	var valeurDesignCacheSelectVal = $formulaireValeurs.find('select.setDesignCache').val();
	var valeurDesignCache = null;
	if(valeurDesignCacheSelectVal != null && valeurDesignCacheSelectVal !== '')
		valeurDesignCache = valeurDesignCacheSelectVal == 'true';
	setDesignCache = removeDesignCache ? null : valeurDesignCache;
	if(removeDesignCache || setDesignCache != null && setDesignCache !== '')
		vals['setDesignCache'] = setDesignCache;
	var addDesignCache = $formulaireValeurs.find('.addDesignCache').prop('checked');
	if(addDesignCache != null && addDesignCache !== '')
		vals['addDesignCache'] = addDesignCache;
	var removeDesignCache = $formulaireValeurs.find('.removeDesignCache').prop('checked');
	if(removeDesignCache != null && removeDesignCache !== '')
		vals['removeDesignCache'] = removeDesignCache;

	var valeurDesignAdmin = $formulaireValeurs.find('.valeurDesignAdmin').prop('checked');
	var removeDesignAdmin = $formulaireValeurs.find('.removeDesignAdmin').val() === 'true';
	var valeurDesignAdminSelectVal = $formulaireValeurs.find('select.setDesignAdmin').val();
	var valeurDesignAdmin = null;
	if(valeurDesignAdminSelectVal != null && valeurDesignAdminSelectVal !== '')
		valeurDesignAdmin = valeurDesignAdminSelectVal == 'true';
	setDesignAdmin = removeDesignAdmin ? null : valeurDesignAdmin;
	if(removeDesignAdmin || setDesignAdmin != null && setDesignAdmin !== '')
		vals['setDesignAdmin'] = setDesignAdmin;
	var addDesignAdmin = $formulaireValeurs.find('.addDesignAdmin').prop('checked');
	if(addDesignAdmin != null && addDesignAdmin !== '')
		vals['addDesignAdmin'] = addDesignAdmin;
	var removeDesignAdmin = $formulaireValeurs.find('.removeDesignAdmin').prop('checked');
	if(removeDesignAdmin != null && removeDesignAdmin !== '')
		vals['removeDesignAdmin'] = removeDesignAdmin;

	var valeurDesignIgnorerNomEnfantVide = $formulaireValeurs.find('.valeurDesignIgnorerNomEnfantVide').prop('checked');
	var removeDesignIgnorerNomEnfantVide = $formulaireValeurs.find('.removeDesignIgnorerNomEnfantVide').val() === 'true';
	var valeurDesignIgnorerNomEnfantVideSelectVal = $formulaireValeurs.find('select.setDesignIgnorerNomEnfantVide').val();
	var valeurDesignIgnorerNomEnfantVide = null;
	if(valeurDesignIgnorerNomEnfantVideSelectVal != null && valeurDesignIgnorerNomEnfantVideSelectVal !== '')
		valeurDesignIgnorerNomEnfantVide = valeurDesignIgnorerNomEnfantVideSelectVal == 'true';
	setDesignIgnorerNomEnfantVide = removeDesignIgnorerNomEnfantVide ? null : valeurDesignIgnorerNomEnfantVide;
	if(removeDesignIgnorerNomEnfantVide || setDesignIgnorerNomEnfantVide != null && setDesignIgnorerNomEnfantVide !== '')
		vals['setDesignIgnorerNomEnfantVide'] = setDesignIgnorerNomEnfantVide;
	var addDesignIgnorerNomEnfantVide = $formulaireValeurs.find('.addDesignIgnorerNomEnfantVide').prop('checked');
	if(addDesignIgnorerNomEnfantVide != null && addDesignIgnorerNomEnfantVide !== '')
		vals['addDesignIgnorerNomEnfantVide'] = addDesignIgnorerNomEnfantVide;
	var removeDesignIgnorerNomEnfantVide = $formulaireValeurs.find('.removeDesignIgnorerNomEnfantVide').prop('checked');
	if(removeDesignIgnorerNomEnfantVide != null && removeDesignIgnorerNomEnfantVide !== '')
		vals['removeDesignIgnorerNomEnfantVide'] = removeDesignIgnorerNomEnfantVide;

	var valeurDesignIgnorerPaiementsPasEnSouffrance = $formulaireValeurs.find('.valeurDesignIgnorerPaiementsPasEnSouffrance').prop('checked');
	var removeDesignIgnorerPaiementsPasEnSouffrance = $formulaireValeurs.find('.removeDesignIgnorerPaiementsPasEnSouffrance').val() === 'true';
	var valeurDesignIgnorerPaiementsPasEnSouffranceSelectVal = $formulaireValeurs.find('select.setDesignIgnorerPaiementsPasEnSouffrance').val();
	var valeurDesignIgnorerPaiementsPasEnSouffrance = null;
	if(valeurDesignIgnorerPaiementsPasEnSouffranceSelectVal != null && valeurDesignIgnorerPaiementsPasEnSouffranceSelectVal !== '')
		valeurDesignIgnorerPaiementsPasEnSouffrance = valeurDesignIgnorerPaiementsPasEnSouffranceSelectVal == 'true';
	setDesignIgnorerPaiementsPasEnSouffrance = removeDesignIgnorerPaiementsPasEnSouffrance ? null : valeurDesignIgnorerPaiementsPasEnSouffrance;
	if(removeDesignIgnorerPaiementsPasEnSouffrance || setDesignIgnorerPaiementsPasEnSouffrance != null && setDesignIgnorerPaiementsPasEnSouffrance !== '')
		vals['setDesignIgnorerPaiementsPasEnSouffrance'] = setDesignIgnorerPaiementsPasEnSouffrance;
	var addDesignIgnorerPaiementsPasEnSouffrance = $formulaireValeurs.find('.addDesignIgnorerPaiementsPasEnSouffrance').prop('checked');
	if(addDesignIgnorerPaiementsPasEnSouffrance != null && addDesignIgnorerPaiementsPasEnSouffrance !== '')
		vals['addDesignIgnorerPaiementsPasEnSouffrance'] = addDesignIgnorerPaiementsPasEnSouffrance;
	var removeDesignIgnorerPaiementsPasEnSouffrance = $formulaireValeurs.find('.removeDesignIgnorerPaiementsPasEnSouffrance').prop('checked');
	if(removeDesignIgnorerPaiementsPasEnSouffrance != null && removeDesignIgnorerPaiementsPasEnSouffrance !== '')
		vals['removeDesignIgnorerPaiementsPasEnSouffrance'] = removeDesignIgnorerPaiementsPasEnSouffrance;

	var valeurDesignIgnorerPaiementsEnSouffrance = $formulaireValeurs.find('.valeurDesignIgnorerPaiementsEnSouffrance').prop('checked');
	var removeDesignIgnorerPaiementsEnSouffrance = $formulaireValeurs.find('.removeDesignIgnorerPaiementsEnSouffrance').val() === 'true';
	var valeurDesignIgnorerPaiementsEnSouffranceSelectVal = $formulaireValeurs.find('select.setDesignIgnorerPaiementsEnSouffrance').val();
	var valeurDesignIgnorerPaiementsEnSouffrance = null;
	if(valeurDesignIgnorerPaiementsEnSouffranceSelectVal != null && valeurDesignIgnorerPaiementsEnSouffranceSelectVal !== '')
		valeurDesignIgnorerPaiementsEnSouffrance = valeurDesignIgnorerPaiementsEnSouffranceSelectVal == 'true';
	setDesignIgnorerPaiementsEnSouffrance = removeDesignIgnorerPaiementsEnSouffrance ? null : valeurDesignIgnorerPaiementsEnSouffrance;
	if(removeDesignIgnorerPaiementsEnSouffrance || setDesignIgnorerPaiementsEnSouffrance != null && setDesignIgnorerPaiementsEnSouffrance !== '')
		vals['setDesignIgnorerPaiementsEnSouffrance'] = setDesignIgnorerPaiementsEnSouffrance;
	var addDesignIgnorerPaiementsEnSouffrance = $formulaireValeurs.find('.addDesignIgnorerPaiementsEnSouffrance').prop('checked');
	if(addDesignIgnorerPaiementsEnSouffrance != null && addDesignIgnorerPaiementsEnSouffrance !== '')
		vals['addDesignIgnorerPaiementsEnSouffrance'] = addDesignIgnorerPaiementsEnSouffrance;
	var removeDesignIgnorerPaiementsEnSouffrance = $formulaireValeurs.find('.removeDesignIgnorerPaiementsEnSouffrance').prop('checked');
	if(removeDesignIgnorerPaiementsEnSouffrance != null && removeDesignIgnorerPaiementsEnSouffrance !== '')
		vals['removeDesignIgnorerPaiementsEnSouffrance'] = removeDesignIgnorerPaiementsEnSouffrance;

	var valeurDesignFiltrerInscriptionCle = $formulaireValeurs.find('.valeurDesignFiltrerInscriptionCle').prop('checked');
	var removeDesignFiltrerInscriptionCle = $formulaireValeurs.find('.removeDesignFiltrerInscriptionCle').val() === 'true';
	var valeurDesignFiltrerInscriptionCleSelectVal = $formulaireValeurs.find('select.setDesignFiltrerInscriptionCle').val();
	var valeurDesignFiltrerInscriptionCle = null;
	if(valeurDesignFiltrerInscriptionCleSelectVal != null && valeurDesignFiltrerInscriptionCleSelectVal !== '')
		valeurDesignFiltrerInscriptionCle = valeurDesignFiltrerInscriptionCleSelectVal == 'true';
	setDesignFiltrerInscriptionCle = removeDesignFiltrerInscriptionCle ? null : valeurDesignFiltrerInscriptionCle;
	if(removeDesignFiltrerInscriptionCle || setDesignFiltrerInscriptionCle != null && setDesignFiltrerInscriptionCle !== '')
		vals['setDesignFiltrerInscriptionCle'] = setDesignFiltrerInscriptionCle;
	var addDesignFiltrerInscriptionCle = $formulaireValeurs.find('.addDesignFiltrerInscriptionCle').prop('checked');
	if(addDesignFiltrerInscriptionCle != null && addDesignFiltrerInscriptionCle !== '')
		vals['addDesignFiltrerInscriptionCle'] = addDesignFiltrerInscriptionCle;
	var removeDesignFiltrerInscriptionCle = $formulaireValeurs.find('.removeDesignFiltrerInscriptionCle').prop('checked');
	if(removeDesignFiltrerInscriptionCle != null && removeDesignFiltrerInscriptionCle !== '')
		vals['removeDesignFiltrerInscriptionCle'] = removeDesignFiltrerInscriptionCle;

	var valeurDesignInscriptionTriMoisJourDeNaissance = $formulaireValeurs.find('.valeurDesignInscriptionTriMoisJourDeNaissance').prop('checked');
	var removeDesignInscriptionTriMoisJourDeNaissance = $formulaireValeurs.find('.removeDesignInscriptionTriMoisJourDeNaissance').val() === 'true';
	var valeurDesignInscriptionTriMoisJourDeNaissanceSelectVal = $formulaireValeurs.find('select.setDesignInscriptionTriMoisJourDeNaissance').val();
	var valeurDesignInscriptionTriMoisJourDeNaissance = null;
	if(valeurDesignInscriptionTriMoisJourDeNaissanceSelectVal != null && valeurDesignInscriptionTriMoisJourDeNaissanceSelectVal !== '')
		valeurDesignInscriptionTriMoisJourDeNaissance = valeurDesignInscriptionTriMoisJourDeNaissanceSelectVal == 'true';
	setDesignInscriptionTriMoisJourDeNaissance = removeDesignInscriptionTriMoisJourDeNaissance ? null : valeurDesignInscriptionTriMoisJourDeNaissance;
	if(removeDesignInscriptionTriMoisJourDeNaissance || setDesignInscriptionTriMoisJourDeNaissance != null && setDesignInscriptionTriMoisJourDeNaissance !== '')
		vals['setDesignInscriptionTriMoisJourDeNaissance'] = setDesignInscriptionTriMoisJourDeNaissance;
	var addDesignInscriptionTriMoisJourDeNaissance = $formulaireValeurs.find('.addDesignInscriptionTriMoisJourDeNaissance').prop('checked');
	if(addDesignInscriptionTriMoisJourDeNaissance != null && addDesignInscriptionTriMoisJourDeNaissance !== '')
		vals['addDesignInscriptionTriMoisJourDeNaissance'] = addDesignInscriptionTriMoisJourDeNaissance;
	var removeDesignInscriptionTriMoisJourDeNaissance = $formulaireValeurs.find('.removeDesignInscriptionTriMoisJourDeNaissance').prop('checked');
	if(removeDesignInscriptionTriMoisJourDeNaissance != null && removeDesignInscriptionTriMoisJourDeNaissance !== '')
		vals['removeDesignInscriptionTriMoisJourDeNaissance'] = removeDesignInscriptionTriMoisJourDeNaissance;

	var valeurDesignInscriptionTriNomGroupe = $formulaireValeurs.find('.valeurDesignInscriptionTriNomGroupe').prop('checked');
	var removeDesignInscriptionTriNomGroupe = $formulaireValeurs.find('.removeDesignInscriptionTriNomGroupe').val() === 'true';
	var valeurDesignInscriptionTriNomGroupeSelectVal = $formulaireValeurs.find('select.setDesignInscriptionTriNomGroupe').val();
	var valeurDesignInscriptionTriNomGroupe = null;
	if(valeurDesignInscriptionTriNomGroupeSelectVal != null && valeurDesignInscriptionTriNomGroupeSelectVal !== '')
		valeurDesignInscriptionTriNomGroupe = valeurDesignInscriptionTriNomGroupeSelectVal == 'true';
	setDesignInscriptionTriNomGroupe = removeDesignInscriptionTriNomGroupe ? null : valeurDesignInscriptionTriNomGroupe;
	if(removeDesignInscriptionTriNomGroupe || setDesignInscriptionTriNomGroupe != null && setDesignInscriptionTriNomGroupe !== '')
		vals['setDesignInscriptionTriNomGroupe'] = setDesignInscriptionTriNomGroupe;
	var addDesignInscriptionTriNomGroupe = $formulaireValeurs.find('.addDesignInscriptionTriNomGroupe').prop('checked');
	if(addDesignInscriptionTriNomGroupe != null && addDesignInscriptionTriNomGroupe !== '')
		vals['addDesignInscriptionTriNomGroupe'] = addDesignInscriptionTriNomGroupe;
	var removeDesignInscriptionTriNomGroupe = $formulaireValeurs.find('.removeDesignInscriptionTriNomGroupe').prop('checked');
	if(removeDesignInscriptionTriNomGroupe != null && removeDesignInscriptionTriNomGroupe !== '')
		vals['removeDesignInscriptionTriNomGroupe'] = removeDesignInscriptionTriNomGroupe;

	var valeurDesignInscriptionTriNomEnfant = $formulaireValeurs.find('.valeurDesignInscriptionTriNomEnfant').prop('checked');
	var removeDesignInscriptionTriNomEnfant = $formulaireValeurs.find('.removeDesignInscriptionTriNomEnfant').val() === 'true';
	var valeurDesignInscriptionTriNomEnfantSelectVal = $formulaireValeurs.find('select.setDesignInscriptionTriNomEnfant').val();
	var valeurDesignInscriptionTriNomEnfant = null;
	if(valeurDesignInscriptionTriNomEnfantSelectVal != null && valeurDesignInscriptionTriNomEnfantSelectVal !== '')
		valeurDesignInscriptionTriNomEnfant = valeurDesignInscriptionTriNomEnfantSelectVal == 'true';
	setDesignInscriptionTriNomEnfant = removeDesignInscriptionTriNomEnfant ? null : valeurDesignInscriptionTriNomEnfant;
	if(removeDesignInscriptionTriNomEnfant || setDesignInscriptionTriNomEnfant != null && setDesignInscriptionTriNomEnfant !== '')
		vals['setDesignInscriptionTriNomEnfant'] = setDesignInscriptionTriNomEnfant;
	var addDesignInscriptionTriNomEnfant = $formulaireValeurs.find('.addDesignInscriptionTriNomEnfant').prop('checked');
	if(addDesignInscriptionTriNomEnfant != null && addDesignInscriptionTriNomEnfant !== '')
		vals['addDesignInscriptionTriNomEnfant'] = addDesignInscriptionTriNomEnfant;
	var removeDesignInscriptionTriNomEnfant = $formulaireValeurs.find('.removeDesignInscriptionTriNomEnfant').prop('checked');
	if(removeDesignInscriptionTriNomEnfant != null && removeDesignInscriptionTriNomEnfant !== '')
		vals['removeDesignInscriptionTriNomEnfant'] = removeDesignInscriptionTriNomEnfant;

	var valeurRechercherAnnees = $formulaireValeurs.find('.valeurRechercherAnnees').prop('checked');
	var removeRechercherAnnees = $formulaireValeurs.find('.removeRechercherAnnees').val() === 'true';
	var valeurRechercherAnneesSelectVal = $formulaireValeurs.find('select.setRechercherAnnees').val();
	var valeurRechercherAnnees = null;
	if(valeurRechercherAnneesSelectVal != null && valeurRechercherAnneesSelectVal !== '')
		valeurRechercherAnnees = valeurRechercherAnneesSelectVal == 'true';
	setRechercherAnnees = removeRechercherAnnees ? null : valeurRechercherAnnees;
	if(removeRechercherAnnees || setRechercherAnnees != null && setRechercherAnnees !== '')
		vals['setRechercherAnnees'] = setRechercherAnnees;
	var addRechercherAnnees = $formulaireValeurs.find('.addRechercherAnnees').prop('checked');
	if(addRechercherAnnees != null && addRechercherAnnees !== '')
		vals['addRechercherAnnees'] = addRechercherAnnees;
	var removeRechercherAnnees = $formulaireValeurs.find('.removeRechercherAnnees').prop('checked');
	if(removeRechercherAnnees != null && removeRechercherAnnees !== '')
		vals['removeRechercherAnnees'] = removeRechercherAnnees;

	var valeurRechercherPaiements = $formulaireValeurs.find('.valeurRechercherPaiements').prop('checked');
	var removeRechercherPaiements = $formulaireValeurs.find('.removeRechercherPaiements').val() === 'true';
	var valeurRechercherPaiementsSelectVal = $formulaireValeurs.find('select.setRechercherPaiements').val();
	var valeurRechercherPaiements = null;
	if(valeurRechercherPaiementsSelectVal != null && valeurRechercherPaiementsSelectVal !== '')
		valeurRechercherPaiements = valeurRechercherPaiementsSelectVal == 'true';
	setRechercherPaiements = removeRechercherPaiements ? null : valeurRechercherPaiements;
	if(removeRechercherPaiements || setRechercherPaiements != null && setRechercherPaiements !== '')
		vals['setRechercherPaiements'] = setRechercherPaiements;
	var addRechercherPaiements = $formulaireValeurs.find('.addRechercherPaiements').prop('checked');
	if(addRechercherPaiements != null && addRechercherPaiements !== '')
		vals['addRechercherPaiements'] = addRechercherPaiements;
	var removeRechercherPaiements = $formulaireValeurs.find('.removeRechercherPaiements').prop('checked');
	if(removeRechercherPaiements != null && removeRechercherPaiements !== '')
		vals['removeRechercherPaiements'] = removeRechercherPaiements;

	var valeurDesignParentCles = $formulaireValeurs.find('input.valeurDesignParentCles:checked').val();
	if(valeurDesignParentCles != null && valeurDesignParentCles !== '')
		vals['addDesignParentCles'] = valeurDesignParentCles;

	var valeurPartHtmlCles = $formulaireValeurs.find('input.valeurPartHtmlCles:checked').val();
	if(valeurPartHtmlCles != null && valeurPartHtmlCles !== '')
		vals['addPartHtmlCles'] = valeurPartHtmlCles;

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

	patchDesignPageVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchDesignPageFiltres($formulaireFiltres) {
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

		var filtreDesignPageNomComplet = $formulaireFiltres.find('.valeurDesignPageNomComplet').val();
		if(filtreDesignPageNomComplet != null && filtreDesignPageNomComplet !== '')
			filtres.push({ name: 'fq', value: 'designPageNomComplet:' + filtreDesignPageNomComplet });

		var $filtreDesignCacheCheckbox = $formulaireFiltres.find('input.valeurDesignCache[type = "checkbox"]');
		var $filtreDesignCacheSelect = $formulaireFiltres.find('select.valeurDesignCache');
		var filtreDesignCache = $filtreDesignCacheSelect.length ? $filtreDesignCacheSelect.val() : $filtreDesignCacheCheckbox.prop('checked');
		var filtreDesignCacheSelectVal = $formulaireFiltres.find('select.filtreDesignCache').val();
		var filtreDesignCache = null;
		if(filtreDesignCacheSelectVal !== '')
			filtreDesignCache = filtreDesignCacheSelectVal == 'true';
		if(filtreDesignCache != null && filtreDesignCache === true)
			filtres.push({ name: 'fq', value: 'designCache:' + filtreDesignCache });

		var $filtreDesignAdminCheckbox = $formulaireFiltres.find('input.valeurDesignAdmin[type = "checkbox"]');
		var $filtreDesignAdminSelect = $formulaireFiltres.find('select.valeurDesignAdmin');
		var filtreDesignAdmin = $filtreDesignAdminSelect.length ? $filtreDesignAdminSelect.val() : $filtreDesignAdminCheckbox.prop('checked');
		var filtreDesignAdminSelectVal = $formulaireFiltres.find('select.filtreDesignAdmin').val();
		var filtreDesignAdmin = null;
		if(filtreDesignAdminSelectVal !== '')
			filtreDesignAdmin = filtreDesignAdminSelectVal == 'true';
		if(filtreDesignAdmin != null && filtreDesignAdmin === true)
			filtres.push({ name: 'fq', value: 'designAdmin:' + filtreDesignAdmin });

		var $filtreDesignIgnorerNomEnfantVideCheckbox = $formulaireFiltres.find('input.valeurDesignIgnorerNomEnfantVide[type = "checkbox"]');
		var $filtreDesignIgnorerNomEnfantVideSelect = $formulaireFiltres.find('select.valeurDesignIgnorerNomEnfantVide');
		var filtreDesignIgnorerNomEnfantVide = $filtreDesignIgnorerNomEnfantVideSelect.length ? $filtreDesignIgnorerNomEnfantVideSelect.val() : $filtreDesignIgnorerNomEnfantVideCheckbox.prop('checked');
		var filtreDesignIgnorerNomEnfantVideSelectVal = $formulaireFiltres.find('select.filtreDesignIgnorerNomEnfantVide').val();
		var filtreDesignIgnorerNomEnfantVide = null;
		if(filtreDesignIgnorerNomEnfantVideSelectVal !== '')
			filtreDesignIgnorerNomEnfantVide = filtreDesignIgnorerNomEnfantVideSelectVal == 'true';
		if(filtreDesignIgnorerNomEnfantVide != null && filtreDesignIgnorerNomEnfantVide === true)
			filtres.push({ name: 'fq', value: 'designIgnorerNomEnfantVide:' + filtreDesignIgnorerNomEnfantVide });

		var $filtreDesignIgnorerPaiementsPasEnSouffranceCheckbox = $formulaireFiltres.find('input.valeurDesignIgnorerPaiementsPasEnSouffrance[type = "checkbox"]');
		var $filtreDesignIgnorerPaiementsPasEnSouffranceSelect = $formulaireFiltres.find('select.valeurDesignIgnorerPaiementsPasEnSouffrance');
		var filtreDesignIgnorerPaiementsPasEnSouffrance = $filtreDesignIgnorerPaiementsPasEnSouffranceSelect.length ? $filtreDesignIgnorerPaiementsPasEnSouffranceSelect.val() : $filtreDesignIgnorerPaiementsPasEnSouffranceCheckbox.prop('checked');
		var filtreDesignIgnorerPaiementsPasEnSouffranceSelectVal = $formulaireFiltres.find('select.filtreDesignIgnorerPaiementsPasEnSouffrance').val();
		var filtreDesignIgnorerPaiementsPasEnSouffrance = null;
		if(filtreDesignIgnorerPaiementsPasEnSouffranceSelectVal !== '')
			filtreDesignIgnorerPaiementsPasEnSouffrance = filtreDesignIgnorerPaiementsPasEnSouffranceSelectVal == 'true';
		if(filtreDesignIgnorerPaiementsPasEnSouffrance != null && filtreDesignIgnorerPaiementsPasEnSouffrance === true)
			filtres.push({ name: 'fq', value: 'designIgnorerPaiementsPasEnSouffrance:' + filtreDesignIgnorerPaiementsPasEnSouffrance });

		var $filtreDesignIgnorerPaiementsEnSouffranceCheckbox = $formulaireFiltres.find('input.valeurDesignIgnorerPaiementsEnSouffrance[type = "checkbox"]');
		var $filtreDesignIgnorerPaiementsEnSouffranceSelect = $formulaireFiltres.find('select.valeurDesignIgnorerPaiementsEnSouffrance');
		var filtreDesignIgnorerPaiementsEnSouffrance = $filtreDesignIgnorerPaiementsEnSouffranceSelect.length ? $filtreDesignIgnorerPaiementsEnSouffranceSelect.val() : $filtreDesignIgnorerPaiementsEnSouffranceCheckbox.prop('checked');
		var filtreDesignIgnorerPaiementsEnSouffranceSelectVal = $formulaireFiltres.find('select.filtreDesignIgnorerPaiementsEnSouffrance').val();
		var filtreDesignIgnorerPaiementsEnSouffrance = null;
		if(filtreDesignIgnorerPaiementsEnSouffranceSelectVal !== '')
			filtreDesignIgnorerPaiementsEnSouffrance = filtreDesignIgnorerPaiementsEnSouffranceSelectVal == 'true';
		if(filtreDesignIgnorerPaiementsEnSouffrance != null && filtreDesignIgnorerPaiementsEnSouffrance === true)
			filtres.push({ name: 'fq', value: 'designIgnorerPaiementsEnSouffrance:' + filtreDesignIgnorerPaiementsEnSouffrance });

		var $filtreDesignFiltrerInscriptionCleCheckbox = $formulaireFiltres.find('input.valeurDesignFiltrerInscriptionCle[type = "checkbox"]');
		var $filtreDesignFiltrerInscriptionCleSelect = $formulaireFiltres.find('select.valeurDesignFiltrerInscriptionCle');
		var filtreDesignFiltrerInscriptionCle = $filtreDesignFiltrerInscriptionCleSelect.length ? $filtreDesignFiltrerInscriptionCleSelect.val() : $filtreDesignFiltrerInscriptionCleCheckbox.prop('checked');
		var filtreDesignFiltrerInscriptionCleSelectVal = $formulaireFiltres.find('select.filtreDesignFiltrerInscriptionCle').val();
		var filtreDesignFiltrerInscriptionCle = null;
		if(filtreDesignFiltrerInscriptionCleSelectVal !== '')
			filtreDesignFiltrerInscriptionCle = filtreDesignFiltrerInscriptionCleSelectVal == 'true';
		if(filtreDesignFiltrerInscriptionCle != null && filtreDesignFiltrerInscriptionCle === true)
			filtres.push({ name: 'fq', value: 'designFiltrerInscriptionCle:' + filtreDesignFiltrerInscriptionCle });

		var $filtreDesignInscriptionTriMoisJourDeNaissanceCheckbox = $formulaireFiltres.find('input.valeurDesignInscriptionTriMoisJourDeNaissance[type = "checkbox"]');
		var $filtreDesignInscriptionTriMoisJourDeNaissanceSelect = $formulaireFiltres.find('select.valeurDesignInscriptionTriMoisJourDeNaissance');
		var filtreDesignInscriptionTriMoisJourDeNaissance = $filtreDesignInscriptionTriMoisJourDeNaissanceSelect.length ? $filtreDesignInscriptionTriMoisJourDeNaissanceSelect.val() : $filtreDesignInscriptionTriMoisJourDeNaissanceCheckbox.prop('checked');
		var filtreDesignInscriptionTriMoisJourDeNaissanceSelectVal = $formulaireFiltres.find('select.filtreDesignInscriptionTriMoisJourDeNaissance').val();
		var filtreDesignInscriptionTriMoisJourDeNaissance = null;
		if(filtreDesignInscriptionTriMoisJourDeNaissanceSelectVal !== '')
			filtreDesignInscriptionTriMoisJourDeNaissance = filtreDesignInscriptionTriMoisJourDeNaissanceSelectVal == 'true';
		if(filtreDesignInscriptionTriMoisJourDeNaissance != null && filtreDesignInscriptionTriMoisJourDeNaissance === true)
			filtres.push({ name: 'fq', value: 'designInscriptionTriMoisJourDeNaissance:' + filtreDesignInscriptionTriMoisJourDeNaissance });

		var $filtreDesignInscriptionTriNomGroupeCheckbox = $formulaireFiltres.find('input.valeurDesignInscriptionTriNomGroupe[type = "checkbox"]');
		var $filtreDesignInscriptionTriNomGroupeSelect = $formulaireFiltres.find('select.valeurDesignInscriptionTriNomGroupe');
		var filtreDesignInscriptionTriNomGroupe = $filtreDesignInscriptionTriNomGroupeSelect.length ? $filtreDesignInscriptionTriNomGroupeSelect.val() : $filtreDesignInscriptionTriNomGroupeCheckbox.prop('checked');
		var filtreDesignInscriptionTriNomGroupeSelectVal = $formulaireFiltres.find('select.filtreDesignInscriptionTriNomGroupe').val();
		var filtreDesignInscriptionTriNomGroupe = null;
		if(filtreDesignInscriptionTriNomGroupeSelectVal !== '')
			filtreDesignInscriptionTriNomGroupe = filtreDesignInscriptionTriNomGroupeSelectVal == 'true';
		if(filtreDesignInscriptionTriNomGroupe != null && filtreDesignInscriptionTriNomGroupe === true)
			filtres.push({ name: 'fq', value: 'designInscriptionTriNomGroupe:' + filtreDesignInscriptionTriNomGroupe });

		var $filtreDesignInscriptionTriNomEnfantCheckbox = $formulaireFiltres.find('input.valeurDesignInscriptionTriNomEnfant[type = "checkbox"]');
		var $filtreDesignInscriptionTriNomEnfantSelect = $formulaireFiltres.find('select.valeurDesignInscriptionTriNomEnfant');
		var filtreDesignInscriptionTriNomEnfant = $filtreDesignInscriptionTriNomEnfantSelect.length ? $filtreDesignInscriptionTriNomEnfantSelect.val() : $filtreDesignInscriptionTriNomEnfantCheckbox.prop('checked');
		var filtreDesignInscriptionTriNomEnfantSelectVal = $formulaireFiltres.find('select.filtreDesignInscriptionTriNomEnfant').val();
		var filtreDesignInscriptionTriNomEnfant = null;
		if(filtreDesignInscriptionTriNomEnfantSelectVal !== '')
			filtreDesignInscriptionTriNomEnfant = filtreDesignInscriptionTriNomEnfantSelectVal == 'true';
		if(filtreDesignInscriptionTriNomEnfant != null && filtreDesignInscriptionTriNomEnfant === true)
			filtres.push({ name: 'fq', value: 'designInscriptionTriNomEnfant:' + filtreDesignInscriptionTriNomEnfant });

		var $filtreRechercherAnneesCheckbox = $formulaireFiltres.find('input.valeurRechercherAnnees[type = "checkbox"]');
		var $filtreRechercherAnneesSelect = $formulaireFiltres.find('select.valeurRechercherAnnees');
		var filtreRechercherAnnees = $filtreRechercherAnneesSelect.length ? $filtreRechercherAnneesSelect.val() : $filtreRechercherAnneesCheckbox.prop('checked');
		var filtreRechercherAnneesSelectVal = $formulaireFiltres.find('select.filtreRechercherAnnees').val();
		var filtreRechercherAnnees = null;
		if(filtreRechercherAnneesSelectVal !== '')
			filtreRechercherAnnees = filtreRechercherAnneesSelectVal == 'true';
		if(filtreRechercherAnnees != null && filtreRechercherAnnees === true)
			filtres.push({ name: 'fq', value: 'rechercherAnnees:' + filtreRechercherAnnees });

		var $filtreRechercherPaiementsCheckbox = $formulaireFiltres.find('input.valeurRechercherPaiements[type = "checkbox"]');
		var $filtreRechercherPaiementsSelect = $formulaireFiltres.find('select.valeurRechercherPaiements');
		var filtreRechercherPaiements = $filtreRechercherPaiementsSelect.length ? $filtreRechercherPaiementsSelect.val() : $filtreRechercherPaiementsCheckbox.prop('checked');
		var filtreRechercherPaiementsSelectVal = $formulaireFiltres.find('select.filtreRechercherPaiements').val();
		var filtreRechercherPaiements = null;
		if(filtreRechercherPaiementsSelectVal !== '')
			filtreRechercherPaiements = filtreRechercherPaiementsSelectVal == 'true';
		if(filtreRechercherPaiements != null && filtreRechercherPaiements === true)
			filtres.push({ name: 'fq', value: 'rechercherPaiements:' + filtreRechercherPaiements });

		var filtreDesignParentCles = $formulaireFiltres.find('.valeurDesignParentCles').val();
		if(filtreDesignParentCles != null && filtreDesignParentCles !== '')
			filtres.push({ name: 'fq', value: 'designParentCles:' + filtreDesignParentCles });

		var filtrePartHtmlCles = $formulaireFiltres.find('.valeurPartHtmlCles').val();
		if(filtrePartHtmlCles != null && filtrePartHtmlCles !== '')
			filtres.push({ name: 'fq', value: 'partHtmlCles:' + filtrePartHtmlCles });

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

		var filtreDesignPageCle = $formulaireFiltres.find('.valeurDesignPageCle').val();
		if(filtreDesignPageCle != null && filtreDesignPageCle !== '')
			filtres.push({ name: 'fq', value: 'designPageCle:' + filtreDesignPageCle });

		var filtreDesignEnfantCles = $formulaireFiltres.find('.valeurDesignEnfantCles').val();
		if(filtreDesignEnfantCles != null && filtreDesignEnfantCles !== '')
			filtres.push({ name: 'fq', value: 'designEnfantCles:' + filtreDesignEnfantCles });
	}
	return filtres;
}

function patchDesignPageVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchDesignPageVals(filtres, vals, success, error);
}

function patchDesignPageVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/design-page?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getDesignPage(pk) {
	$.ajax({
		url: '/api/design-page/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Recherche //

async function rechercheDesignPage($formulaireFiltres, success, error) {
	var filtres = rechercheDesignPageFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheDesignPageVals(filtres, success, error);
}

function rechercheDesignPageFiltres($formulaireFiltres) {
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

		var filtreDesignPageNomComplet = $formulaireFiltres.find('.valeurDesignPageNomComplet').val();
		if(filtreDesignPageNomComplet != null && filtreDesignPageNomComplet !== '')
			filtres.push({ name: 'fq', value: 'designPageNomComplet:' + filtreDesignPageNomComplet });

		var $filtreDesignCacheCheckbox = $formulaireFiltres.find('input.valeurDesignCache[type = "checkbox"]');
		var $filtreDesignCacheSelect = $formulaireFiltres.find('select.valeurDesignCache');
		var filtreDesignCache = $filtreDesignCacheSelect.length ? $filtreDesignCacheSelect.val() : $filtreDesignCacheCheckbox.prop('checked');
		var filtreDesignCacheSelectVal = $formulaireFiltres.find('select.filtreDesignCache').val();
		var filtreDesignCache = null;
		if(filtreDesignCacheSelectVal !== '')
			filtreDesignCache = filtreDesignCacheSelectVal == 'true';
		if(filtreDesignCache != null && filtreDesignCache === true)
			filtres.push({ name: 'fq', value: 'designCache:' + filtreDesignCache });

		var $filtreDesignAdminCheckbox = $formulaireFiltres.find('input.valeurDesignAdmin[type = "checkbox"]');
		var $filtreDesignAdminSelect = $formulaireFiltres.find('select.valeurDesignAdmin');
		var filtreDesignAdmin = $filtreDesignAdminSelect.length ? $filtreDesignAdminSelect.val() : $filtreDesignAdminCheckbox.prop('checked');
		var filtreDesignAdminSelectVal = $formulaireFiltres.find('select.filtreDesignAdmin').val();
		var filtreDesignAdmin = null;
		if(filtreDesignAdminSelectVal !== '')
			filtreDesignAdmin = filtreDesignAdminSelectVal == 'true';
		if(filtreDesignAdmin != null && filtreDesignAdmin === true)
			filtres.push({ name: 'fq', value: 'designAdmin:' + filtreDesignAdmin });

		var $filtreDesignIgnorerNomEnfantVideCheckbox = $formulaireFiltres.find('input.valeurDesignIgnorerNomEnfantVide[type = "checkbox"]');
		var $filtreDesignIgnorerNomEnfantVideSelect = $formulaireFiltres.find('select.valeurDesignIgnorerNomEnfantVide');
		var filtreDesignIgnorerNomEnfantVide = $filtreDesignIgnorerNomEnfantVideSelect.length ? $filtreDesignIgnorerNomEnfantVideSelect.val() : $filtreDesignIgnorerNomEnfantVideCheckbox.prop('checked');
		var filtreDesignIgnorerNomEnfantVideSelectVal = $formulaireFiltres.find('select.filtreDesignIgnorerNomEnfantVide').val();
		var filtreDesignIgnorerNomEnfantVide = null;
		if(filtreDesignIgnorerNomEnfantVideSelectVal !== '')
			filtreDesignIgnorerNomEnfantVide = filtreDesignIgnorerNomEnfantVideSelectVal == 'true';
		if(filtreDesignIgnorerNomEnfantVide != null && filtreDesignIgnorerNomEnfantVide === true)
			filtres.push({ name: 'fq', value: 'designIgnorerNomEnfantVide:' + filtreDesignIgnorerNomEnfantVide });

		var $filtreDesignIgnorerPaiementsPasEnSouffranceCheckbox = $formulaireFiltres.find('input.valeurDesignIgnorerPaiementsPasEnSouffrance[type = "checkbox"]');
		var $filtreDesignIgnorerPaiementsPasEnSouffranceSelect = $formulaireFiltres.find('select.valeurDesignIgnorerPaiementsPasEnSouffrance');
		var filtreDesignIgnorerPaiementsPasEnSouffrance = $filtreDesignIgnorerPaiementsPasEnSouffranceSelect.length ? $filtreDesignIgnorerPaiementsPasEnSouffranceSelect.val() : $filtreDesignIgnorerPaiementsPasEnSouffranceCheckbox.prop('checked');
		var filtreDesignIgnorerPaiementsPasEnSouffranceSelectVal = $formulaireFiltres.find('select.filtreDesignIgnorerPaiementsPasEnSouffrance').val();
		var filtreDesignIgnorerPaiementsPasEnSouffrance = null;
		if(filtreDesignIgnorerPaiementsPasEnSouffranceSelectVal !== '')
			filtreDesignIgnorerPaiementsPasEnSouffrance = filtreDesignIgnorerPaiementsPasEnSouffranceSelectVal == 'true';
		if(filtreDesignIgnorerPaiementsPasEnSouffrance != null && filtreDesignIgnorerPaiementsPasEnSouffrance === true)
			filtres.push({ name: 'fq', value: 'designIgnorerPaiementsPasEnSouffrance:' + filtreDesignIgnorerPaiementsPasEnSouffrance });

		var $filtreDesignIgnorerPaiementsEnSouffranceCheckbox = $formulaireFiltres.find('input.valeurDesignIgnorerPaiementsEnSouffrance[type = "checkbox"]');
		var $filtreDesignIgnorerPaiementsEnSouffranceSelect = $formulaireFiltres.find('select.valeurDesignIgnorerPaiementsEnSouffrance');
		var filtreDesignIgnorerPaiementsEnSouffrance = $filtreDesignIgnorerPaiementsEnSouffranceSelect.length ? $filtreDesignIgnorerPaiementsEnSouffranceSelect.val() : $filtreDesignIgnorerPaiementsEnSouffranceCheckbox.prop('checked');
		var filtreDesignIgnorerPaiementsEnSouffranceSelectVal = $formulaireFiltres.find('select.filtreDesignIgnorerPaiementsEnSouffrance').val();
		var filtreDesignIgnorerPaiementsEnSouffrance = null;
		if(filtreDesignIgnorerPaiementsEnSouffranceSelectVal !== '')
			filtreDesignIgnorerPaiementsEnSouffrance = filtreDesignIgnorerPaiementsEnSouffranceSelectVal == 'true';
		if(filtreDesignIgnorerPaiementsEnSouffrance != null && filtreDesignIgnorerPaiementsEnSouffrance === true)
			filtres.push({ name: 'fq', value: 'designIgnorerPaiementsEnSouffrance:' + filtreDesignIgnorerPaiementsEnSouffrance });

		var $filtreDesignFiltrerInscriptionCleCheckbox = $formulaireFiltres.find('input.valeurDesignFiltrerInscriptionCle[type = "checkbox"]');
		var $filtreDesignFiltrerInscriptionCleSelect = $formulaireFiltres.find('select.valeurDesignFiltrerInscriptionCle');
		var filtreDesignFiltrerInscriptionCle = $filtreDesignFiltrerInscriptionCleSelect.length ? $filtreDesignFiltrerInscriptionCleSelect.val() : $filtreDesignFiltrerInscriptionCleCheckbox.prop('checked');
		var filtreDesignFiltrerInscriptionCleSelectVal = $formulaireFiltres.find('select.filtreDesignFiltrerInscriptionCle').val();
		var filtreDesignFiltrerInscriptionCle = null;
		if(filtreDesignFiltrerInscriptionCleSelectVal !== '')
			filtreDesignFiltrerInscriptionCle = filtreDesignFiltrerInscriptionCleSelectVal == 'true';
		if(filtreDesignFiltrerInscriptionCle != null && filtreDesignFiltrerInscriptionCle === true)
			filtres.push({ name: 'fq', value: 'designFiltrerInscriptionCle:' + filtreDesignFiltrerInscriptionCle });

		var $filtreDesignInscriptionTriMoisJourDeNaissanceCheckbox = $formulaireFiltres.find('input.valeurDesignInscriptionTriMoisJourDeNaissance[type = "checkbox"]');
		var $filtreDesignInscriptionTriMoisJourDeNaissanceSelect = $formulaireFiltres.find('select.valeurDesignInscriptionTriMoisJourDeNaissance');
		var filtreDesignInscriptionTriMoisJourDeNaissance = $filtreDesignInscriptionTriMoisJourDeNaissanceSelect.length ? $filtreDesignInscriptionTriMoisJourDeNaissanceSelect.val() : $filtreDesignInscriptionTriMoisJourDeNaissanceCheckbox.prop('checked');
		var filtreDesignInscriptionTriMoisJourDeNaissanceSelectVal = $formulaireFiltres.find('select.filtreDesignInscriptionTriMoisJourDeNaissance').val();
		var filtreDesignInscriptionTriMoisJourDeNaissance = null;
		if(filtreDesignInscriptionTriMoisJourDeNaissanceSelectVal !== '')
			filtreDesignInscriptionTriMoisJourDeNaissance = filtreDesignInscriptionTriMoisJourDeNaissanceSelectVal == 'true';
		if(filtreDesignInscriptionTriMoisJourDeNaissance != null && filtreDesignInscriptionTriMoisJourDeNaissance === true)
			filtres.push({ name: 'fq', value: 'designInscriptionTriMoisJourDeNaissance:' + filtreDesignInscriptionTriMoisJourDeNaissance });

		var $filtreDesignInscriptionTriNomGroupeCheckbox = $formulaireFiltres.find('input.valeurDesignInscriptionTriNomGroupe[type = "checkbox"]');
		var $filtreDesignInscriptionTriNomGroupeSelect = $formulaireFiltres.find('select.valeurDesignInscriptionTriNomGroupe');
		var filtreDesignInscriptionTriNomGroupe = $filtreDesignInscriptionTriNomGroupeSelect.length ? $filtreDesignInscriptionTriNomGroupeSelect.val() : $filtreDesignInscriptionTriNomGroupeCheckbox.prop('checked');
		var filtreDesignInscriptionTriNomGroupeSelectVal = $formulaireFiltres.find('select.filtreDesignInscriptionTriNomGroupe').val();
		var filtreDesignInscriptionTriNomGroupe = null;
		if(filtreDesignInscriptionTriNomGroupeSelectVal !== '')
			filtreDesignInscriptionTriNomGroupe = filtreDesignInscriptionTriNomGroupeSelectVal == 'true';
		if(filtreDesignInscriptionTriNomGroupe != null && filtreDesignInscriptionTriNomGroupe === true)
			filtres.push({ name: 'fq', value: 'designInscriptionTriNomGroupe:' + filtreDesignInscriptionTriNomGroupe });

		var $filtreDesignInscriptionTriNomEnfantCheckbox = $formulaireFiltres.find('input.valeurDesignInscriptionTriNomEnfant[type = "checkbox"]');
		var $filtreDesignInscriptionTriNomEnfantSelect = $formulaireFiltres.find('select.valeurDesignInscriptionTriNomEnfant');
		var filtreDesignInscriptionTriNomEnfant = $filtreDesignInscriptionTriNomEnfantSelect.length ? $filtreDesignInscriptionTriNomEnfantSelect.val() : $filtreDesignInscriptionTriNomEnfantCheckbox.prop('checked');
		var filtreDesignInscriptionTriNomEnfantSelectVal = $formulaireFiltres.find('select.filtreDesignInscriptionTriNomEnfant').val();
		var filtreDesignInscriptionTriNomEnfant = null;
		if(filtreDesignInscriptionTriNomEnfantSelectVal !== '')
			filtreDesignInscriptionTriNomEnfant = filtreDesignInscriptionTriNomEnfantSelectVal == 'true';
		if(filtreDesignInscriptionTriNomEnfant != null && filtreDesignInscriptionTriNomEnfant === true)
			filtres.push({ name: 'fq', value: 'designInscriptionTriNomEnfant:' + filtreDesignInscriptionTriNomEnfant });

		var $filtreRechercherAnneesCheckbox = $formulaireFiltres.find('input.valeurRechercherAnnees[type = "checkbox"]');
		var $filtreRechercherAnneesSelect = $formulaireFiltres.find('select.valeurRechercherAnnees');
		var filtreRechercherAnnees = $filtreRechercherAnneesSelect.length ? $filtreRechercherAnneesSelect.val() : $filtreRechercherAnneesCheckbox.prop('checked');
		var filtreRechercherAnneesSelectVal = $formulaireFiltres.find('select.filtreRechercherAnnees').val();
		var filtreRechercherAnnees = null;
		if(filtreRechercherAnneesSelectVal !== '')
			filtreRechercherAnnees = filtreRechercherAnneesSelectVal == 'true';
		if(filtreRechercherAnnees != null && filtreRechercherAnnees === true)
			filtres.push({ name: 'fq', value: 'rechercherAnnees:' + filtreRechercherAnnees });

		var $filtreRechercherPaiementsCheckbox = $formulaireFiltres.find('input.valeurRechercherPaiements[type = "checkbox"]');
		var $filtreRechercherPaiementsSelect = $formulaireFiltres.find('select.valeurRechercherPaiements');
		var filtreRechercherPaiements = $filtreRechercherPaiementsSelect.length ? $filtreRechercherPaiementsSelect.val() : $filtreRechercherPaiementsCheckbox.prop('checked');
		var filtreRechercherPaiementsSelectVal = $formulaireFiltres.find('select.filtreRechercherPaiements').val();
		var filtreRechercherPaiements = null;
		if(filtreRechercherPaiementsSelectVal !== '')
			filtreRechercherPaiements = filtreRechercherPaiementsSelectVal == 'true';
		if(filtreRechercherPaiements != null && filtreRechercherPaiements === true)
			filtres.push({ name: 'fq', value: 'rechercherPaiements:' + filtreRechercherPaiements });

		var filtreDesignParentCles = $formulaireFiltres.find('.valeurDesignParentCles').val();
		if(filtreDesignParentCles != null && filtreDesignParentCles !== '')
			filtres.push({ name: 'fq', value: 'designParentCles:' + filtreDesignParentCles });

		var filtrePartHtmlCles = $formulaireFiltres.find('.valeurPartHtmlCles').val();
		if(filtrePartHtmlCles != null && filtrePartHtmlCles !== '')
			filtres.push({ name: 'fq', value: 'partHtmlCles:' + filtrePartHtmlCles });

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

		var filtreDesignPageCle = $formulaireFiltres.find('.valeurDesignPageCle').val();
		if(filtreDesignPageCle != null && filtreDesignPageCle !== '')
			filtres.push({ name: 'fq', value: 'designPageCle:' + filtreDesignPageCle });

		var filtreDesignEnfantCles = $formulaireFiltres.find('.valeurDesignEnfantCles').val();
		if(filtreDesignEnfantCles != null && filtreDesignEnfantCles !== '')
			filtres.push({ name: 'fq', value: 'designEnfantCles:' + filtreDesignEnfantCles });
	}
	return filtres;
}

function rechercheDesignPageVals(filtres, success, error) {


	filtres.push({ name: 'sort', value: 'designPageNomComplet asc' });
	$.ajax({
		url: '/api/design-page?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereDesignPageObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-drafting-compass ');
			var $span = $('<span>').attr('class', '').text(o['designPageNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherDesignPageVals($formulaireFiltres, success, error);
}

function suggereDesignPageDesignEnfantCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-drafting-compass ');
			var $span = $('<span>').attr('class', '').text(o['designPageNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['designParentCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_designEnfantCles_' + pk + '_designParentCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurDesignEnfantCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_designEnfantCles_" + pk + "_designParentCles_" + o['pk'] + "'); patchDesignPageVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'DesignEnfantCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#DesignPageForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheDesignPageVals(filtres, success, error);
}

function suggereDesignPageDesignParentCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-drafting-compass ');
			var $span = $('<span>').attr('class', '').text(o['designPageNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['designEnfantCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_designParentCles_' + pk + '_designEnfantCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurDesignParentCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_designParentCles_" + pk + "_designEnfantCles_" + o['pk'] + "'); patchDesignPageVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'DesignParentCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#DesignPageForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheDesignPageVals(filtres, success, error);
}

function suggereDesignPagePartHtmlCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-puzzle-piece ');
			var $span = $('<span>').attr('class', '').text(o['objetTitre']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['designPageCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_partHtmlCles_' + pk + '_designPageCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurPartHtmlCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_partHtmlCles_" + pk + "_designPageCles_" + o['pk'] + "'); patchDesignPageVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PartHtmlCles']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'enleverLueur($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			var tri1 = o['tri1'];
			var tri2 = o['tri2'];
			var tri3 = o['tri3'];
			var tri4 = o['tri4'];
			var tri5 = o['tri5'];
			var tri6 = o['tri6'];
			var tri7 = o['tri7'];
			var tri8 = o['tri8'];
			var tri9 = o['tri9'];
			var tri10 = o['tri10'];

			$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
			var $sortInput = $('<input>')
			$sortInput.attr('class', 'w3-tiny ');
			$sortInput.attr('style', 'width: 4em; ');
			$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri1");
			$sortInput.attr('value', tri1).attr('onchange', 
				"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
				+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri1']: $(this).val() ? $(this).val() : null }"
					+ ", function() { "
					+ "}"
					+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri1')); }"
					+ " ); "); 
			$sort.append($sortInput);
			$li.append($sort);

			if(tri1 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri2");
				$sortInput.attr('value', tri2).attr('onchange', 
					"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri2']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri2')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri2 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri3");
				$sortInput.attr('value', tri3).attr('onchange', 
					"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri3']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri3')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri3 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri4");
				$sortInput.attr('value', tri4).attr('onchange', 
					"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri4']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri4')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri4 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri5");
				$sortInput.attr('value', tri5).attr('onchange', 
					"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri5']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri5')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri5 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri6");
				$sortInput.attr('value', tri6).attr('onchange', 
					"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri6']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri6')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri6 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri7");
				$sortInput.attr('value', tri7).attr('onchange', 
					"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri7']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri7')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri7 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri8");
				$sortInput.attr('value', tri8).attr('onchange', 
					"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri8']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri8')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri8 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri9");
				$sortInput.attr('value', tri9).attr('onchange', 
					"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri9']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri9')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri9 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri10");
				$sortInput.attr('value', tri10).attr('onchange', 
					"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri10']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri10')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}
			if(attribuer)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#DesignPageForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	recherchePartHtmlVals(filtres, success, error);
}

// RechercheAdmin //

async function rechercheadminDesignPage($formulaireFiltres, success, error) {
	var filtres = rechercheadminDesignPageFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheadminDesignPageVals(filtres, success, error);
}

function rechercheadminDesignPageFiltres($formulaireFiltres) {
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

		var filtreDesignPageNomComplet = $formulaireFiltres.find('.valeurDesignPageNomComplet').val();
		if(filtreDesignPageNomComplet != null && filtreDesignPageNomComplet !== '')
			filtres.push({ name: 'fq', value: 'designPageNomComplet:' + filtreDesignPageNomComplet });

		var $filtreDesignCacheCheckbox = $formulaireFiltres.find('input.valeurDesignCache[type = "checkbox"]');
		var $filtreDesignCacheSelect = $formulaireFiltres.find('select.valeurDesignCache');
		var filtreDesignCache = $filtreDesignCacheSelect.length ? $filtreDesignCacheSelect.val() : $filtreDesignCacheCheckbox.prop('checked');
		var filtreDesignCacheSelectVal = $formulaireFiltres.find('select.filtreDesignCache').val();
		var filtreDesignCache = null;
		if(filtreDesignCacheSelectVal !== '')
			filtreDesignCache = filtreDesignCacheSelectVal == 'true';
		if(filtreDesignCache != null && filtreDesignCache === true)
			filtres.push({ name: 'fq', value: 'designCache:' + filtreDesignCache });

		var $filtreDesignAdminCheckbox = $formulaireFiltres.find('input.valeurDesignAdmin[type = "checkbox"]');
		var $filtreDesignAdminSelect = $formulaireFiltres.find('select.valeurDesignAdmin');
		var filtreDesignAdmin = $filtreDesignAdminSelect.length ? $filtreDesignAdminSelect.val() : $filtreDesignAdminCheckbox.prop('checked');
		var filtreDesignAdminSelectVal = $formulaireFiltres.find('select.filtreDesignAdmin').val();
		var filtreDesignAdmin = null;
		if(filtreDesignAdminSelectVal !== '')
			filtreDesignAdmin = filtreDesignAdminSelectVal == 'true';
		if(filtreDesignAdmin != null && filtreDesignAdmin === true)
			filtres.push({ name: 'fq', value: 'designAdmin:' + filtreDesignAdmin });

		var $filtreDesignIgnorerNomEnfantVideCheckbox = $formulaireFiltres.find('input.valeurDesignIgnorerNomEnfantVide[type = "checkbox"]');
		var $filtreDesignIgnorerNomEnfantVideSelect = $formulaireFiltres.find('select.valeurDesignIgnorerNomEnfantVide');
		var filtreDesignIgnorerNomEnfantVide = $filtreDesignIgnorerNomEnfantVideSelect.length ? $filtreDesignIgnorerNomEnfantVideSelect.val() : $filtreDesignIgnorerNomEnfantVideCheckbox.prop('checked');
		var filtreDesignIgnorerNomEnfantVideSelectVal = $formulaireFiltres.find('select.filtreDesignIgnorerNomEnfantVide').val();
		var filtreDesignIgnorerNomEnfantVide = null;
		if(filtreDesignIgnorerNomEnfantVideSelectVal !== '')
			filtreDesignIgnorerNomEnfantVide = filtreDesignIgnorerNomEnfantVideSelectVal == 'true';
		if(filtreDesignIgnorerNomEnfantVide != null && filtreDesignIgnorerNomEnfantVide === true)
			filtres.push({ name: 'fq', value: 'designIgnorerNomEnfantVide:' + filtreDesignIgnorerNomEnfantVide });

		var $filtreDesignIgnorerPaiementsPasEnSouffranceCheckbox = $formulaireFiltres.find('input.valeurDesignIgnorerPaiementsPasEnSouffrance[type = "checkbox"]');
		var $filtreDesignIgnorerPaiementsPasEnSouffranceSelect = $formulaireFiltres.find('select.valeurDesignIgnorerPaiementsPasEnSouffrance');
		var filtreDesignIgnorerPaiementsPasEnSouffrance = $filtreDesignIgnorerPaiementsPasEnSouffranceSelect.length ? $filtreDesignIgnorerPaiementsPasEnSouffranceSelect.val() : $filtreDesignIgnorerPaiementsPasEnSouffranceCheckbox.prop('checked');
		var filtreDesignIgnorerPaiementsPasEnSouffranceSelectVal = $formulaireFiltres.find('select.filtreDesignIgnorerPaiementsPasEnSouffrance').val();
		var filtreDesignIgnorerPaiementsPasEnSouffrance = null;
		if(filtreDesignIgnorerPaiementsPasEnSouffranceSelectVal !== '')
			filtreDesignIgnorerPaiementsPasEnSouffrance = filtreDesignIgnorerPaiementsPasEnSouffranceSelectVal == 'true';
		if(filtreDesignIgnorerPaiementsPasEnSouffrance != null && filtreDesignIgnorerPaiementsPasEnSouffrance === true)
			filtres.push({ name: 'fq', value: 'designIgnorerPaiementsPasEnSouffrance:' + filtreDesignIgnorerPaiementsPasEnSouffrance });

		var $filtreDesignIgnorerPaiementsEnSouffranceCheckbox = $formulaireFiltres.find('input.valeurDesignIgnorerPaiementsEnSouffrance[type = "checkbox"]');
		var $filtreDesignIgnorerPaiementsEnSouffranceSelect = $formulaireFiltres.find('select.valeurDesignIgnorerPaiementsEnSouffrance');
		var filtreDesignIgnorerPaiementsEnSouffrance = $filtreDesignIgnorerPaiementsEnSouffranceSelect.length ? $filtreDesignIgnorerPaiementsEnSouffranceSelect.val() : $filtreDesignIgnorerPaiementsEnSouffranceCheckbox.prop('checked');
		var filtreDesignIgnorerPaiementsEnSouffranceSelectVal = $formulaireFiltres.find('select.filtreDesignIgnorerPaiementsEnSouffrance').val();
		var filtreDesignIgnorerPaiementsEnSouffrance = null;
		if(filtreDesignIgnorerPaiementsEnSouffranceSelectVal !== '')
			filtreDesignIgnorerPaiementsEnSouffrance = filtreDesignIgnorerPaiementsEnSouffranceSelectVal == 'true';
		if(filtreDesignIgnorerPaiementsEnSouffrance != null && filtreDesignIgnorerPaiementsEnSouffrance === true)
			filtres.push({ name: 'fq', value: 'designIgnorerPaiementsEnSouffrance:' + filtreDesignIgnorerPaiementsEnSouffrance });

		var $filtreDesignFiltrerInscriptionCleCheckbox = $formulaireFiltres.find('input.valeurDesignFiltrerInscriptionCle[type = "checkbox"]');
		var $filtreDesignFiltrerInscriptionCleSelect = $formulaireFiltres.find('select.valeurDesignFiltrerInscriptionCle');
		var filtreDesignFiltrerInscriptionCle = $filtreDesignFiltrerInscriptionCleSelect.length ? $filtreDesignFiltrerInscriptionCleSelect.val() : $filtreDesignFiltrerInscriptionCleCheckbox.prop('checked');
		var filtreDesignFiltrerInscriptionCleSelectVal = $formulaireFiltres.find('select.filtreDesignFiltrerInscriptionCle').val();
		var filtreDesignFiltrerInscriptionCle = null;
		if(filtreDesignFiltrerInscriptionCleSelectVal !== '')
			filtreDesignFiltrerInscriptionCle = filtreDesignFiltrerInscriptionCleSelectVal == 'true';
		if(filtreDesignFiltrerInscriptionCle != null && filtreDesignFiltrerInscriptionCle === true)
			filtres.push({ name: 'fq', value: 'designFiltrerInscriptionCle:' + filtreDesignFiltrerInscriptionCle });

		var $filtreDesignInscriptionTriMoisJourDeNaissanceCheckbox = $formulaireFiltres.find('input.valeurDesignInscriptionTriMoisJourDeNaissance[type = "checkbox"]');
		var $filtreDesignInscriptionTriMoisJourDeNaissanceSelect = $formulaireFiltres.find('select.valeurDesignInscriptionTriMoisJourDeNaissance');
		var filtreDesignInscriptionTriMoisJourDeNaissance = $filtreDesignInscriptionTriMoisJourDeNaissanceSelect.length ? $filtreDesignInscriptionTriMoisJourDeNaissanceSelect.val() : $filtreDesignInscriptionTriMoisJourDeNaissanceCheckbox.prop('checked');
		var filtreDesignInscriptionTriMoisJourDeNaissanceSelectVal = $formulaireFiltres.find('select.filtreDesignInscriptionTriMoisJourDeNaissance').val();
		var filtreDesignInscriptionTriMoisJourDeNaissance = null;
		if(filtreDesignInscriptionTriMoisJourDeNaissanceSelectVal !== '')
			filtreDesignInscriptionTriMoisJourDeNaissance = filtreDesignInscriptionTriMoisJourDeNaissanceSelectVal == 'true';
		if(filtreDesignInscriptionTriMoisJourDeNaissance != null && filtreDesignInscriptionTriMoisJourDeNaissance === true)
			filtres.push({ name: 'fq', value: 'designInscriptionTriMoisJourDeNaissance:' + filtreDesignInscriptionTriMoisJourDeNaissance });

		var $filtreDesignInscriptionTriNomGroupeCheckbox = $formulaireFiltres.find('input.valeurDesignInscriptionTriNomGroupe[type = "checkbox"]');
		var $filtreDesignInscriptionTriNomGroupeSelect = $formulaireFiltres.find('select.valeurDesignInscriptionTriNomGroupe');
		var filtreDesignInscriptionTriNomGroupe = $filtreDesignInscriptionTriNomGroupeSelect.length ? $filtreDesignInscriptionTriNomGroupeSelect.val() : $filtreDesignInscriptionTriNomGroupeCheckbox.prop('checked');
		var filtreDesignInscriptionTriNomGroupeSelectVal = $formulaireFiltres.find('select.filtreDesignInscriptionTriNomGroupe').val();
		var filtreDesignInscriptionTriNomGroupe = null;
		if(filtreDesignInscriptionTriNomGroupeSelectVal !== '')
			filtreDesignInscriptionTriNomGroupe = filtreDesignInscriptionTriNomGroupeSelectVal == 'true';
		if(filtreDesignInscriptionTriNomGroupe != null && filtreDesignInscriptionTriNomGroupe === true)
			filtres.push({ name: 'fq', value: 'designInscriptionTriNomGroupe:' + filtreDesignInscriptionTriNomGroupe });

		var $filtreDesignInscriptionTriNomEnfantCheckbox = $formulaireFiltres.find('input.valeurDesignInscriptionTriNomEnfant[type = "checkbox"]');
		var $filtreDesignInscriptionTriNomEnfantSelect = $formulaireFiltres.find('select.valeurDesignInscriptionTriNomEnfant');
		var filtreDesignInscriptionTriNomEnfant = $filtreDesignInscriptionTriNomEnfantSelect.length ? $filtreDesignInscriptionTriNomEnfantSelect.val() : $filtreDesignInscriptionTriNomEnfantCheckbox.prop('checked');
		var filtreDesignInscriptionTriNomEnfantSelectVal = $formulaireFiltres.find('select.filtreDesignInscriptionTriNomEnfant').val();
		var filtreDesignInscriptionTriNomEnfant = null;
		if(filtreDesignInscriptionTriNomEnfantSelectVal !== '')
			filtreDesignInscriptionTriNomEnfant = filtreDesignInscriptionTriNomEnfantSelectVal == 'true';
		if(filtreDesignInscriptionTriNomEnfant != null && filtreDesignInscriptionTriNomEnfant === true)
			filtres.push({ name: 'fq', value: 'designInscriptionTriNomEnfant:' + filtreDesignInscriptionTriNomEnfant });

		var $filtreRechercherAnneesCheckbox = $formulaireFiltres.find('input.valeurRechercherAnnees[type = "checkbox"]');
		var $filtreRechercherAnneesSelect = $formulaireFiltres.find('select.valeurRechercherAnnees');
		var filtreRechercherAnnees = $filtreRechercherAnneesSelect.length ? $filtreRechercherAnneesSelect.val() : $filtreRechercherAnneesCheckbox.prop('checked');
		var filtreRechercherAnneesSelectVal = $formulaireFiltres.find('select.filtreRechercherAnnees').val();
		var filtreRechercherAnnees = null;
		if(filtreRechercherAnneesSelectVal !== '')
			filtreRechercherAnnees = filtreRechercherAnneesSelectVal == 'true';
		if(filtreRechercherAnnees != null && filtreRechercherAnnees === true)
			filtres.push({ name: 'fq', value: 'rechercherAnnees:' + filtreRechercherAnnees });

		var $filtreRechercherPaiementsCheckbox = $formulaireFiltres.find('input.valeurRechercherPaiements[type = "checkbox"]');
		var $filtreRechercherPaiementsSelect = $formulaireFiltres.find('select.valeurRechercherPaiements');
		var filtreRechercherPaiements = $filtreRechercherPaiementsSelect.length ? $filtreRechercherPaiementsSelect.val() : $filtreRechercherPaiementsCheckbox.prop('checked');
		var filtreRechercherPaiementsSelectVal = $formulaireFiltres.find('select.filtreRechercherPaiements').val();
		var filtreRechercherPaiements = null;
		if(filtreRechercherPaiementsSelectVal !== '')
			filtreRechercherPaiements = filtreRechercherPaiementsSelectVal == 'true';
		if(filtreRechercherPaiements != null && filtreRechercherPaiements === true)
			filtres.push({ name: 'fq', value: 'rechercherPaiements:' + filtreRechercherPaiements });

		var filtreDesignParentCles = $formulaireFiltres.find('.valeurDesignParentCles').val();
		if(filtreDesignParentCles != null && filtreDesignParentCles !== '')
			filtres.push({ name: 'fq', value: 'designParentCles:' + filtreDesignParentCles });

		var filtrePartHtmlCles = $formulaireFiltres.find('.valeurPartHtmlCles').val();
		if(filtrePartHtmlCles != null && filtrePartHtmlCles !== '')
			filtres.push({ name: 'fq', value: 'partHtmlCles:' + filtrePartHtmlCles });

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

		var filtreDesignPageCle = $formulaireFiltres.find('.valeurDesignPageCle').val();
		if(filtreDesignPageCle != null && filtreDesignPageCle !== '')
			filtres.push({ name: 'fq', value: 'designPageCle:' + filtreDesignPageCle });

		var filtreDesignEnfantCles = $formulaireFiltres.find('.valeurDesignEnfantCles').val();
		if(filtreDesignEnfantCles != null && filtreDesignEnfantCles !== '')
			filtres.push({ name: 'fq', value: 'designEnfantCles:' + filtreDesignEnfantCles });
	}
	return filtres;
}

function rechercheadminDesignPageVals(filtres, success, error) {


	filtres.push({ name: 'sort', value: 'designPageNomComplet asc' });
	$.ajax({
		url: '/api/admin/design-page?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereDesignPageObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-drafting-compass ');
			var $span = $('<span>').attr('class', '').text(o['designPageNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherDesignPageVals($formulaireFiltres, success, error);
}

function suggereDesignPageDesignEnfantCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-drafting-compass ');
			var $span = $('<span>').attr('class', '').text(o['designPageNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['designParentCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_designEnfantCles_' + pk + '_designParentCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurDesignEnfantCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_designEnfantCles_" + pk + "_designParentCles_" + o['pk'] + "'); patchDesignPageVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'DesignEnfantCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#DesignPageForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheDesignPageVals(filtres, success, error);
}

function suggereDesignPageDesignParentCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-drafting-compass ');
			var $span = $('<span>').attr('class', '').text(o['designPageNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['designEnfantCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_designParentCles_' + pk + '_designEnfantCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurDesignParentCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_designParentCles_" + pk + "_designEnfantCles_" + o['pk'] + "'); patchDesignPageVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'DesignParentCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#DesignPageForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheDesignPageVals(filtres, success, error);
}

function suggereDesignPagePartHtmlCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-puzzle-piece ');
			var $span = $('<span>').attr('class', '').text(o['objetTitre']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['designPageCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_partHtmlCles_' + pk + '_designPageCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurPartHtmlCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_partHtmlCles_" + pk + "_designPageCles_" + o['pk'] + "'); patchDesignPageVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PartHtmlCles']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'enleverLueur($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			var tri1 = o['tri1'];
			var tri2 = o['tri2'];
			var tri3 = o['tri3'];
			var tri4 = o['tri4'];
			var tri5 = o['tri5'];
			var tri6 = o['tri6'];
			var tri7 = o['tri7'];
			var tri8 = o['tri8'];
			var tri9 = o['tri9'];
			var tri10 = o['tri10'];

			$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
			var $sortInput = $('<input>')
			$sortInput.attr('class', 'w3-tiny ');
			$sortInput.attr('style', 'width: 4em; ');
			$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri1");
			$sortInput.attr('value', tri1).attr('onchange', 
				"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
				+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri1']: $(this).val() ? $(this).val() : null }"
					+ ", function() { "
					+ "}"
					+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri1')); }"
					+ " ); "); 
			$sort.append($sortInput);
			$li.append($sort);

			if(tri1 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri2");
				$sortInput.attr('value', tri2).attr('onchange', 
					"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri2']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri2')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri2 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri3");
				$sortInput.attr('value', tri3).attr('onchange', 
					"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri3']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri3')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri3 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri4");
				$sortInput.attr('value', tri4).attr('onchange', 
					"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri4']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri4')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri4 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri5");
				$sortInput.attr('value', tri5).attr('onchange', 
					"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri5']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri5')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri5 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri6");
				$sortInput.attr('value', tri6).attr('onchange', 
					"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri6']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri6')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri6 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri7");
				$sortInput.attr('value', tri7).attr('onchange', 
					"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri7']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri7')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri7 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri8");
				$sortInput.attr('value', tri8).attr('onchange', 
					"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri8']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri8')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri8 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri9");
				$sortInput.attr('value', tri9).attr('onchange', 
					"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri9']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri9')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(tri9 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribuer_" + o['pk'] + "_tri_tri10");
				$sortInput.attr('value', tri10).attr('onchange', 
					"$('#DesignPageForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchPartHtmlVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setTri10']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { ajouterErreur($('#attribuer_" + o['pk'] + "_tri_tri10')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}
			if(attribuer)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#DesignPageForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	recherchePartHtmlVals(filtres, success, error);
}

async function websocketDesignPage(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketDesignPage', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#DesignPageForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = json['numFound'];
			var numPATCH = json['numPATCH'];
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-khaki ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-drafting-compass w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modifier design de pages');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-khaki ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketDesignPage', function (error, message) {
			$('#Page_designEnfantCles').trigger('oninput');
			$('#Page_designEnfantCles_ajouter').text('ajouter un design de page');
			$('#Page_designEnfantCles_ajouter').removeClass('w3-disabled');
			$('#Page_designEnfantCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketDesignPage', function (error, message) {
			$('#Page_designParentCles').trigger('oninput');
			$('#Page_designParentCles_ajouter').text('ajouter un design de page');
			$('#Page_designParentCles_ajouter').removeClass('w3-disabled');
			$('#Page_designParentCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketPartHtml', function (error, message) {
			$('#Page_partHtmlCles').trigger('oninput');
			$('#Page_partHtmlCles_ajouter').text('ajouter un part de HTML');
			$('#Page_partHtmlCles_ajouter').removeClass('w3-disabled');
			$('#Page_partHtmlCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketDesignPage', function (error, message) {
			$('#Page_designEnfantCles').trigger('oninput');
			$('#Page_designEnfantCles_ajouter').text('ajouter un design de page');
			$('#Page_designEnfantCles_ajouter').removeClass('w3-disabled');
			$('#Page_designEnfantCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketDesignPage', function (error, message) {
			$('#Page_designParentCles').trigger('oninput');
			$('#Page_designParentCles_ajouter').text('ajouter un design de page');
			$('#Page_designParentCles_ajouter').removeClass('w3-disabled');
			$('#Page_designParentCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketPartHtml', function (error, message) {
			$('#Page_partHtmlCles').trigger('oninput');
			$('#Page_partHtmlCles_ajouter').text('ajouter un part de HTML');
			$('#Page_partHtmlCles_ajouter').removeClass('w3-disabled');
			$('#Page_partHtmlCles_ajouter').attr('disabled', false);
		});
	}
}
async function websocketDesignPageInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherDesignPageVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputDesignPage' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'Pk'));
			}
			var val = o['cree'];
			if(vars.includes('cree')) {
				$('.inputDesignPage' + pk + 'Cree').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'Cree').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'Cree'));
			}
			var val = o['modifie'];
			if(vars.includes('modifie')) {
				$('.inputDesignPage' + pk + 'Modifie').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'Modifie').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'Modifie'));
			}
			var val = o['objetId'];
			if(vars.includes('objetId')) {
				$('.inputDesignPage' + pk + 'ObjetId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'ObjetId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'ObjetId'));
			}
			var val = o['archive'];
			if(vars.includes('archive')) {
				$('.inputDesignPage' + pk + 'Archive').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'Archive').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'Archive'));
			}
			var val = o['supprime'];
			if(vars.includes('supprime')) {
				$('.inputDesignPage' + pk + 'Supprime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'Supprime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'Supprime'));
			}
			var val = o['designPageNomComplet'];
			if(vars.includes('designPageNomComplet')) {
				$('.inputDesignPage' + pk + 'DesignPageNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'DesignPageNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'DesignPageNomComplet'));
			}
			var val = o['designCache'];
			if(vars.includes('designCache')) {
				$('.inputDesignPage' + pk + 'DesignCache').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'DesignCache').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'DesignCache'));
			}
			var val = o['designAdmin'];
			if(vars.includes('designAdmin')) {
				$('.inputDesignPage' + pk + 'DesignAdmin').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'DesignAdmin').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'DesignAdmin'));
			}
			var val = o['designIgnorerNomEnfantVide'];
			if(vars.includes('designIgnorerNomEnfantVide')) {
				$('.inputDesignPage' + pk + 'DesignIgnorerNomEnfantVide').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'DesignIgnorerNomEnfantVide').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'DesignIgnorerNomEnfantVide'));
			}
			var val = o['designIgnorerPaiementsPasEnSouffrance'];
			if(vars.includes('designIgnorerPaiementsPasEnSouffrance')) {
				$('.inputDesignPage' + pk + 'DesignIgnorerPaiementsPasEnSouffrance').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'DesignIgnorerPaiementsPasEnSouffrance').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'DesignIgnorerPaiementsPasEnSouffrance'));
			}
			var val = o['designIgnorerPaiementsEnSouffrance'];
			if(vars.includes('designIgnorerPaiementsEnSouffrance')) {
				$('.inputDesignPage' + pk + 'DesignIgnorerPaiementsEnSouffrance').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'DesignIgnorerPaiementsEnSouffrance').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'DesignIgnorerPaiementsEnSouffrance'));
			}
			var val = o['designFiltrerInscriptionCle'];
			if(vars.includes('designFiltrerInscriptionCle')) {
				$('.inputDesignPage' + pk + 'DesignFiltrerInscriptionCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'DesignFiltrerInscriptionCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'DesignFiltrerInscriptionCle'));
			}
			var val = o['designInscriptionTriMoisJourDeNaissance'];
			if(vars.includes('designInscriptionTriMoisJourDeNaissance')) {
				$('.inputDesignPage' + pk + 'DesignInscriptionTriMoisJourDeNaissance').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'DesignInscriptionTriMoisJourDeNaissance').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'DesignInscriptionTriMoisJourDeNaissance'));
			}
			var val = o['designInscriptionTriNomGroupe'];
			if(vars.includes('designInscriptionTriNomGroupe')) {
				$('.inputDesignPage' + pk + 'DesignInscriptionTriNomGroupe').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'DesignInscriptionTriNomGroupe').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'DesignInscriptionTriNomGroupe'));
			}
			var val = o['designInscriptionTriNomEnfant'];
			if(vars.includes('designInscriptionTriNomEnfant')) {
				$('.inputDesignPage' + pk + 'DesignInscriptionTriNomEnfant').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'DesignInscriptionTriNomEnfant').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'DesignInscriptionTriNomEnfant'));
			}
			var val = o['rechercherAnnees'];
			if(vars.includes('rechercherAnnees')) {
				$('.inputDesignPage' + pk + 'RechercherAnnees').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'RechercherAnnees').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'RechercherAnnees'));
			}
			var val = o['rechercherPaiements'];
			if(vars.includes('rechercherPaiements')) {
				$('.inputDesignPage' + pk + 'RechercherPaiements').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'RechercherPaiements').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'RechercherPaiements'));
			}
			var val = o['designParentCles'];
			if(vars.includes('designParentCles')) {
				$('.inputDesignPage' + pk + 'DesignParentCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'DesignParentCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'DesignParentCles'));
			}
			var val = o['partHtmlCles'];
			if(vars.includes('partHtmlCles')) {
				$('.inputDesignPage' + pk + 'PartHtmlCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'PartHtmlCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'PartHtmlCles'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputDesignPage' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputDesignPage' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'Id'));
			}
			var val = o['classeNomCanonique'];
			if(vars.includes('classeNomCanonique')) {
				$('.inputDesignPage' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'ClasseNomCanonique'));
			}
			var val = o['classeNomSimple'];
			if(vars.includes('classeNomSimple')) {
				$('.inputDesignPage' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'ClasseNomSimple'));
			}
			var val = o['classeNomsCanoniques'];
			if(vars.includes('classeNomsCanoniques')) {
				$('.inputDesignPage' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'ClasseNomsCanoniques'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputDesignPage' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'SessionId'));
			}
			var val = o['utilisateurId'];
			if(vars.includes('utilisateurId')) {
				$('.inputDesignPage' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'UtilisateurId'));
			}
			var val = o['utilisateurCle'];
			if(vars.includes('utilisateurCle')) {
				$('.inputDesignPage' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'UtilisateurCle'));
			}
			var val = o['sauvegardes'];
			if(vars.includes('sauvegardes')) {
				$('.inputDesignPage' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'Sauvegardes'));
			}
			var val = o['objetTitre'];
			if(vars.includes('objetTitre')) {
				$('.inputDesignPage' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'ObjetTitre'));
			}
			var val = o['objetSuggere'];
			if(vars.includes('objetSuggere')) {
				$('.inputDesignPage' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'ObjetSuggere'));
			}
			var val = o['objetTexte'];
			if(vars.includes('objetTexte')) {
				$('.inputDesignPage' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'ObjetTexte'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputDesignPage' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputDesignPage' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputDesignPage' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'PageUrlApi'));
			}
			var val = o['designPageCle'];
			if(vars.includes('designPageCle')) {
				$('.inputDesignPage' + pk + 'DesignPageCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'DesignPageCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'DesignPageCle'));
			}
			var val = o['designEnfantCles'];
			if(vars.includes('designEnfantCles')) {
				$('.inputDesignPage' + pk + 'DesignEnfantCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varDesignPage' + pk + 'DesignEnfantCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputDesignPage' + pk + 'DesignEnfantCles'));
			}
		});
	}
}
