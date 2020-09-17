
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

	var valeurPartHtmlCles = $formulaireValeurs.find('input.valeurPartHtmlCles:checked').val();
	if(valeurPartHtmlCles != null && valeurPartHtmlCles !== '')
		vals['partHtmlCles'] = valeurPartHtmlCles;

	var valeurDesignParentCles = $formulaireValeurs.find('input.valeurDesignParentCles:checked').val();
	if(valeurDesignParentCles != null && valeurDesignParentCles !== '')
		vals['designParentCles'] = valeurDesignParentCles;

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
		vals['inheritPk'] = valeurInheritPk;

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

	var valeurPartHtmlCles = $formulaireValeurs.find('input.valeurPartHtmlCles:checked').val();
	if(valeurPartHtmlCles != null && valeurPartHtmlCles !== '')
		vals['partHtmlCles'] = [valeurPartHtmlCles];

	var valeurDesignParentCles = $formulaireValeurs.find('input.valeurDesignParentCles:checked').val();
	if(valeurDesignParentCles != null && valeurDesignParentCles !== '')
		vals['designParentCles'] = [valeurDesignParentCles];

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
		vals['inheritPk'] = valeurInheritPk;

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
	if(valeurPk != null && valeurPk !== '')
	var removePk = $formulaireFiltres.find('.removePk').val() === 'true';
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
	if(valeurCree != null && valeurCree !== '')
	var removeCree = $formulaireFiltres.find('.removeCree').val() === 'true';
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
	if(valeurModifie != null && valeurModifie !== '')
	var removeModifie = $formulaireFiltres.find('.removeModifie').val() === 'true';
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
	if(valeurObjetId != null && valeurObjetId !== '')
	var removeObjetId = $formulaireFiltres.find('.removeObjetId').val() === 'true';
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
	if(valeurArchive != null && valeurArchive !== '')
	var removeArchive = $formulaireFiltres.find('.removeArchive').val() === 'true';
	var valeurArchiveSelectVal = $formulaireValeurs.find('select.setArchive').val();
	var valeurArchive = null;
	if(valeurArchiveSelectVal !== '')
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
	if(valeurSupprime != null && valeurSupprime !== '')
	var removeSupprime = $formulaireFiltres.find('.removeSupprime').val() === 'true';
	var valeurSupprimeSelectVal = $formulaireValeurs.find('select.setSupprime').val();
	var valeurSupprime = null;
	if(valeurSupprimeSelectVal !== '')
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
	if(valeurDesignPageNomComplet != null && valeurDesignPageNomComplet !== '')
	var removeDesignPageNomComplet = $formulaireFiltres.find('.removeDesignPageNomComplet').val() === 'true';
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
	if(valeurDesignCache != null && valeurDesignCache !== '')
	var removeDesignCache = $formulaireFiltres.find('.removeDesignCache').val() === 'true';
	var valeurDesignCacheSelectVal = $formulaireValeurs.find('select.setDesignCache').val();
	var valeurDesignCache = null;
	if(valeurDesignCacheSelectVal !== '')
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

	var valeurPartHtmlCles = $formulaireValeurs.find('input.valeurPartHtmlCles:checked').val();
	if(valeurPartHtmlCles != null && valeurPartHtmlCles !== '')
		vals['addPartHtmlCles'] = valeurPartHtmlCles;

	var valeurDesignParentCles = $formulaireValeurs.find('input.valeurDesignParentCles:checked').val();
	if(valeurDesignParentCles != null && valeurDesignParentCles !== '')
		vals['addDesignParentCles'] = valeurDesignParentCles;

	var valeurInheritPk = $formulaireValeurs.find('.valeurInheritPk').val();
	if(valeurInheritPk != null && valeurInheritPk !== '')
	var removeInheritPk = $formulaireFiltres.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formulaireValeurs.find('.setInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	var addInheritPk = $formulaireValeurs.find('.addInheritPk').val();
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formulaireValeurs.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valeurObjetTitre = $formulaireValeurs.find('.valeurObjetTitre').val();
	if(valeurObjetTitre != null && valeurObjetTitre !== '')
	var removeObjetTitre = $formulaireFiltres.find('.removeObjetTitre').val() === 'true';
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

		var filtrePartHtmlCles = $formulaireFiltres.find('.valeurPartHtmlCles').val();
		if(filtrePartHtmlCles != null && filtrePartHtmlCles !== '')
			filtres.push({ name: 'fq', value: 'partHtmlCles:' + filtrePartHtmlCles });

		var filtreDesignParentCles = $formulaireFiltres.find('.valeurDesignParentCles').val();
		if(filtreDesignParentCles != null && filtreDesignParentCles !== '')
			filtres.push({ name: 'fq', value: 'designParentCles:' + filtreDesignParentCles });

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

		var filtrePartHtmlCles = $formulaireFiltres.find('.valeurPartHtmlCles').val();
		if(filtrePartHtmlCles != null && filtrePartHtmlCles !== '')
			filtres.push({ name: 'fq', value: 'partHtmlCles:' + filtrePartHtmlCles });

		var filtreDesignParentCles = $formulaireFiltres.find('.valeurDesignParentCles').val();
		if(filtreDesignParentCles != null && filtreDesignParentCles !== '')
			filtres.push({ name: 'fq', value: 'designParentCles:' + filtreDesignParentCles });

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

	filtres.push({ name: 'rows', value: 100 });
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
			var $i = $('<i>').attr('class', 'fa fa-drafting-compass ');
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
			var $i = $('<i>').attr('class', 'fa fa-drafting-compass ');
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
			var $i = $('<i>').attr('class', 'fa fa-sun ');
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
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = json['numFound'];
			var numPATCH = json['numPATCH'];
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card ').attr('id', 'card-' + id);
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
			if(success)
					success(json);
		});

		window.eventBus.registerHandler('websocketDesignPage', function (error, message) {
			$('#Page_designEnfantCles').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketDesignPage', function (error, message) {
			$('#Page_designParentCles').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketPartHtml', function (error, message) {
			$('#Page_partHtmlCles').trigger('oninput');
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
			if(vars.includes('cree')) {
				$('.inputDesignPage' + pk + 'Cree').val(o['cree']);
				$('.varDesignPage' + pk + 'Cree').text(o['cree']);
			}
			if(vars.includes('modifie')) {
				$('.inputDesignPage' + pk + 'Modifie').val(o['modifie']);
				$('.varDesignPage' + pk + 'Modifie').text(o['modifie']);
			}
			if(vars.includes('archive')) {
				$('.inputDesignPage' + pk + 'Archive').val(o['archive']);
				$('.varDesignPage' + pk + 'Archive').text(o['archive']);
			}
			if(vars.includes('supprime')) {
				$('.inputDesignPage' + pk + 'Supprime').val(o['supprime']);
				$('.varDesignPage' + pk + 'Supprime').text(o['supprime']);
			}
			if(vars.includes('designPageNomComplet')) {
				$('.inputDesignPage' + pk + 'DesignPageNomComplet').val(o['designPageNomComplet']);
				$('.varDesignPage' + pk + 'DesignPageNomComplet').text(o['designPageNomComplet']);
			}
			if(vars.includes('designCache')) {
				$('.inputDesignPage' + pk + 'DesignCache').val(o['designCache']);
				$('.varDesignPage' + pk + 'DesignCache').text(o['designCache']);
			}
			if(vars.includes('partHtmlCles')) {
				$('.inputDesignPage' + pk + 'PartHtmlCles').val(o['partHtmlCles']);
				$('.varDesignPage' + pk + 'PartHtmlCles').text(o['partHtmlCles']);
			}
			if(vars.includes('designParentCles')) {
				$('.inputDesignPage' + pk + 'DesignParentCles').val(o['designParentCles']);
				$('.varDesignPage' + pk + 'DesignParentCles').text(o['designParentCles']);
			}
			if(vars.includes('inheritPk')) {
				$('.inputDesignPage' + pk + 'InheritPk').val(o['inheritPk']);
				$('.varDesignPage' + pk + 'InheritPk').text(o['inheritPk']);
			}
			if(vars.includes('designEnfantCles')) {
				$('.inputDesignPage' + pk + 'DesignEnfantCles').val(o['designEnfantCles']);
				$('.varDesignPage' + pk + 'DesignEnfantCles').text(o['designEnfantCles']);
			}
		});
	}
}
