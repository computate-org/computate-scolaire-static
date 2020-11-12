
// POST //

async function postPartHtml($formulaireValeurs, success, error) {
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

	var valeurDesignPageCles = [];
	$formulaireValeurs.find('input.valeurDesignPageCles:checked').each(function(index) {
		valeurDesignPageCles.push($(this).val());
	});
	if(valeurDesignPageCles.length > 0)
		vals['designPageCles'] = valeurDesignPageCles;

	var valeurHtmlLien = $formulaireValeurs.find('.valeurHtmlLien').val();
	if(valeurHtmlLien != null && valeurHtmlLien !== '')
		vals['htmlLien'] = valeurHtmlLien;

	var valeurHtmlElement = $formulaireValeurs.find('.valeurHtmlElement').val();
	if(valeurHtmlElement != null && valeurHtmlElement !== '')
		vals['htmlElement'] = valeurHtmlElement;

	var valeurHtmlId = $formulaireValeurs.find('.valeurHtmlId').val();
	if(valeurHtmlId != null && valeurHtmlId !== '')
		vals['htmlId'] = valeurHtmlId;

	var valeurHtmlClasses = $formulaireValeurs.find('.valeurHtmlClasses').val();
	if(valeurHtmlClasses != null && valeurHtmlClasses !== '')
		vals['htmlClasses'] = valeurHtmlClasses;

	var valeurHtmlStyle = $formulaireValeurs.find('.valeurHtmlStyle').val();
	if(valeurHtmlStyle != null && valeurHtmlStyle !== '')
		vals['htmlStyle'] = valeurHtmlStyle;

	var valeurHtmlAvant = $formulaireValeurs.find('.valeurHtmlAvant').val();
	if(valeurHtmlAvant != null && valeurHtmlAvant !== '')
		vals['htmlAvant'] = valeurHtmlAvant;

	var valeurHtmlApres = $formulaireValeurs.find('.valeurHtmlApres').val();
	if(valeurHtmlApres != null && valeurHtmlApres !== '')
		vals['htmlApres'] = valeurHtmlApres;

	var valeurHtmlTexte = $formulaireValeurs.find('.valeurHtmlTexte').val();
	if(valeurHtmlTexte != null && valeurHtmlTexte !== '')
		vals['htmlTexte'] = valeurHtmlTexte;

	var valeurHtmlVar = $formulaireValeurs.find('.valeurHtmlVar').val();
	if(valeurHtmlVar != null && valeurHtmlVar !== '')
		vals['htmlVar'] = valeurHtmlVar;

	var valeurHtmlVarSpan = $formulaireValeurs.find('.valeurHtmlVarSpan').val();
	if(valeurHtmlVarSpan != null && valeurHtmlVarSpan !== '')
		vals['htmlVarSpan'] = valeurHtmlVarSpan;

	var valeurHtmlVarForm = $formulaireValeurs.find('.valeurHtmlVarForm').val();
	if(valeurHtmlVarForm != null && valeurHtmlVarForm !== '')
		vals['htmlVarForm'] = valeurHtmlVarForm;

	var valeurHtmlVarInput = $formulaireValeurs.find('.valeurHtmlVarInput').val();
	if(valeurHtmlVarInput != null && valeurHtmlVarInput !== '')
		vals['htmlVarInput'] = valeurHtmlVarInput;

	var valeurHtmlIfVarEquals = $formulaireValeurs.find('.valeurHtmlIfVarEquals').val();
	if(valeurHtmlIfVarEquals != null && valeurHtmlIfVarEquals !== '')
		vals['htmlIfVarEquals'] = valeurHtmlIfVarEquals;

	var valeurHtmlVarForEach = $formulaireValeurs.find('.valeurHtmlVarForEach').val();
	if(valeurHtmlVarForEach != null && valeurHtmlVarForEach !== '')
		vals['htmlVarForEach'] = valeurHtmlVarForEach;

	var valeurHtmlVarHtml = $formulaireValeurs.find('.valeurHtmlVarHtml').val();
	if(valeurHtmlVarHtml != null && valeurHtmlVarHtml !== '')
		vals['htmlVarHtml'] = valeurHtmlVarHtml;

	var valeurHtmlExclure = $formulaireValeurs.find('.valeurHtmlExclure').prop('checked');
	if(valeurHtmlExclure != null && valeurHtmlExclure !== '')
		vals['htmlExclure'] = valeurHtmlExclure;

	var valeurPdfExclure = $formulaireValeurs.find('.valeurPdfExclure').prop('checked');
	if(valeurPdfExclure != null && valeurPdfExclure !== '')
		vals['pdfExclure'] = valeurPdfExclure;

	var valeurConnecterDeconnecter = $formulaireValeurs.find('.valeurConnecterDeconnecter').prop('checked');
	if(valeurConnecterDeconnecter != null && valeurConnecterDeconnecter !== '')
		vals['connecterDeconnecter'] = valeurConnecterDeconnecter;

	var valeurTri1 = $formulaireValeurs.find('.valeurTri1').val();
	if(valeurTri1 != null && valeurTri1 !== '')
		vals['tri1'] = valeurTri1;

	var valeurTri2 = $formulaireValeurs.find('.valeurTri2').val();
	if(valeurTri2 != null && valeurTri2 !== '')
		vals['tri2'] = valeurTri2;

	var valeurTri3 = $formulaireValeurs.find('.valeurTri3').val();
	if(valeurTri3 != null && valeurTri3 !== '')
		vals['tri3'] = valeurTri3;

	var valeurTri4 = $formulaireValeurs.find('.valeurTri4').val();
	if(valeurTri4 != null && valeurTri4 !== '')
		vals['tri4'] = valeurTri4;

	var valeurTri5 = $formulaireValeurs.find('.valeurTri5').val();
	if(valeurTri5 != null && valeurTri5 !== '')
		vals['tri5'] = valeurTri5;

	var valeurTri6 = $formulaireValeurs.find('.valeurTri6').val();
	if(valeurTri6 != null && valeurTri6 !== '')
		vals['tri6'] = valeurTri6;

	var valeurTri7 = $formulaireValeurs.find('.valeurTri7').val();
	if(valeurTri7 != null && valeurTri7 !== '')
		vals['tri7'] = valeurTri7;

	var valeurTri8 = $formulaireValeurs.find('.valeurTri8').val();
	if(valeurTri8 != null && valeurTri8 !== '')
		vals['tri8'] = valeurTri8;

	var valeurTri9 = $formulaireValeurs.find('.valeurTri9').val();
	if(valeurTri9 != null && valeurTri9 !== '')
		vals['tri9'] = valeurTri9;

	var valeurTri10 = $formulaireValeurs.find('.valeurTri10').val();
	if(valeurTri10 != null && valeurTri10 !== '')
		vals['tri10'] = valeurTri10;

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
		url: '/api/part-html'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postPartHtmlVals(vals, success, error) {
	$.ajax({
		url: '/api/part-html'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportPartHtml($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTImport_liste').val();
	if(json != null && json !== '')
		putimportPartHtmlVals(JSON.parse(json), success, error);
}

function putimportPartHtmlVals(json, success, error) {
	$.ajax({
		url: '/api/part-html/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTFusion //

async function putfusionPartHtml($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTFusion_liste').val();
	if(json != null && json !== '')
		putfusionPartHtmlVals(JSON.parse(json), success, error);
}

function putfusionPartHtmlVals(json, success, error) {
	$.ajax({
		url: '/api/part-html/fusion'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopie //

async function putcopiePartHtml($formulaireValeurs, pk, success, error) {
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

	var valeurDesignPageCles = $formulaireValeurs.find('input.valeurDesignPageCles:checked').val();
	if(valeurDesignPageCles != null && valeurDesignPageCles !== '')
		vals['designPageCles'] = [valeurDesignPageCles];

	var valeurHtmlLien = $formulaireValeurs.find('.valeurHtmlLien').val();
	if(valeurHtmlLien != null && valeurHtmlLien !== '')
		vals['htmlLien'] = valeurHtmlLien;

	var valeurHtmlElement = $formulaireValeurs.find('.valeurHtmlElement').val();
	if(valeurHtmlElement != null && valeurHtmlElement !== '')
		vals['htmlElement'] = valeurHtmlElement;

	var valeurHtmlId = $formulaireValeurs.find('.valeurHtmlId').val();
	if(valeurHtmlId != null && valeurHtmlId !== '')
		vals['htmlId'] = valeurHtmlId;

	var valeurHtmlClasses = $formulaireValeurs.find('.valeurHtmlClasses').val();
	if(valeurHtmlClasses != null && valeurHtmlClasses !== '')
		vals['htmlClasses'] = valeurHtmlClasses;

	var valeurHtmlStyle = $formulaireValeurs.find('.valeurHtmlStyle').val();
	if(valeurHtmlStyle != null && valeurHtmlStyle !== '')
		vals['htmlStyle'] = valeurHtmlStyle;

	var valeurHtmlAvant = $formulaireValeurs.find('.valeurHtmlAvant').val();
	if(valeurHtmlAvant != null && valeurHtmlAvant !== '')
		vals['htmlAvant'] = valeurHtmlAvant;

	var valeurHtmlApres = $formulaireValeurs.find('.valeurHtmlApres').val();
	if(valeurHtmlApres != null && valeurHtmlApres !== '')
		vals['htmlApres'] = valeurHtmlApres;

	var valeurHtmlTexte = $formulaireValeurs.find('.valeurHtmlTexte').val();
	if(valeurHtmlTexte != null && valeurHtmlTexte !== '')
		vals['htmlTexte'] = valeurHtmlTexte;

	var valeurHtmlVar = $formulaireValeurs.find('.valeurHtmlVar').val();
	if(valeurHtmlVar != null && valeurHtmlVar !== '')
		vals['htmlVar'] = valeurHtmlVar;

	var valeurHtmlVarSpan = $formulaireValeurs.find('.valeurHtmlVarSpan').val();
	if(valeurHtmlVarSpan != null && valeurHtmlVarSpan !== '')
		vals['htmlVarSpan'] = valeurHtmlVarSpan;

	var valeurHtmlVarForm = $formulaireValeurs.find('.valeurHtmlVarForm').val();
	if(valeurHtmlVarForm != null && valeurHtmlVarForm !== '')
		vals['htmlVarForm'] = valeurHtmlVarForm;

	var valeurHtmlVarInput = $formulaireValeurs.find('.valeurHtmlVarInput').val();
	if(valeurHtmlVarInput != null && valeurHtmlVarInput !== '')
		vals['htmlVarInput'] = valeurHtmlVarInput;

	var valeurHtmlIfVarEquals = $formulaireValeurs.find('.valeurHtmlIfVarEquals').val();
	if(valeurHtmlIfVarEquals != null && valeurHtmlIfVarEquals !== '')
		vals['htmlIfVarEquals'] = valeurHtmlIfVarEquals;

	var valeurHtmlVarForEach = $formulaireValeurs.find('.valeurHtmlVarForEach').val();
	if(valeurHtmlVarForEach != null && valeurHtmlVarForEach !== '')
		vals['htmlVarForEach'] = valeurHtmlVarForEach;

	var valeurHtmlVarHtml = $formulaireValeurs.find('.valeurHtmlVarHtml').val();
	if(valeurHtmlVarHtml != null && valeurHtmlVarHtml !== '')
		vals['htmlVarHtml'] = valeurHtmlVarHtml;

	var valeurHtmlExclure = $formulaireValeurs.find('.valeurHtmlExclure').prop('checked');
	if(valeurHtmlExclure != null && valeurHtmlExclure !== '')
		vals['htmlExclure'] = valeurHtmlExclure;

	var valeurPdfExclure = $formulaireValeurs.find('.valeurPdfExclure').prop('checked');
	if(valeurPdfExclure != null && valeurPdfExclure !== '')
		vals['pdfExclure'] = valeurPdfExclure;

	var valeurConnecterDeconnecter = $formulaireValeurs.find('.valeurConnecterDeconnecter').prop('checked');
	if(valeurConnecterDeconnecter != null && valeurConnecterDeconnecter !== '')
		vals['connecterDeconnecter'] = valeurConnecterDeconnecter;

	var valeurTri1 = $formulaireValeurs.find('.valeurTri1').val();
	if(valeurTri1 != null && valeurTri1 !== '')
		vals['tri1'] = valeurTri1;

	var valeurTri2 = $formulaireValeurs.find('.valeurTri2').val();
	if(valeurTri2 != null && valeurTri2 !== '')
		vals['tri2'] = valeurTri2;

	var valeurTri3 = $formulaireValeurs.find('.valeurTri3').val();
	if(valeurTri3 != null && valeurTri3 !== '')
		vals['tri3'] = valeurTri3;

	var valeurTri4 = $formulaireValeurs.find('.valeurTri4').val();
	if(valeurTri4 != null && valeurTri4 !== '')
		vals['tri4'] = valeurTri4;

	var valeurTri5 = $formulaireValeurs.find('.valeurTri5').val();
	if(valeurTri5 != null && valeurTri5 !== '')
		vals['tri5'] = valeurTri5;

	var valeurTri6 = $formulaireValeurs.find('.valeurTri6').val();
	if(valeurTri6 != null && valeurTri6 !== '')
		vals['tri6'] = valeurTri6;

	var valeurTri7 = $formulaireValeurs.find('.valeurTri7').val();
	if(valeurTri7 != null && valeurTri7 !== '')
		vals['tri7'] = valeurTri7;

	var valeurTri8 = $formulaireValeurs.find('.valeurTri8').val();
	if(valeurTri8 != null && valeurTri8 !== '')
		vals['tri8'] = valeurTri8;

	var valeurTri9 = $formulaireValeurs.find('.valeurTri9').val();
	if(valeurTri9 != null && valeurTri9 !== '')
		vals['tri9'] = valeurTri9;

	var valeurTri10 = $formulaireValeurs.find('.valeurTri10').val();
	if(valeurTri10 != null && valeurTri10 !== '')
		vals['tri10'] = valeurTri10;

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

	putcopiePartHtmlVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopiePartHtmlVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/part-html/copie?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchPartHtml($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchPartHtmlFiltres($formulaireFiltres);

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

	var valeurDesignPageCles = $formulaireValeurs.find('input.valeurDesignPageCles:checked').val();
	if(valeurDesignPageCles != null && valeurDesignPageCles !== '')
		vals['addDesignPageCles'] = valeurDesignPageCles;

	var valeurHtmlLien = $formulaireValeurs.find('.valeurHtmlLien').val();
	var removeHtmlLien = $formulaireValeurs.find('.removeHtmlLien').val() === 'true';
	var setHtmlLien = removeHtmlLien ? null : $formulaireValeurs.find('.setHtmlLien').val();
	var addHtmlLien = $formulaireValeurs.find('.addHtmlLien').val();
	if(removeHtmlLien || setHtmlLien != null && setHtmlLien !== '')
		vals['setHtmlLien'] = setHtmlLien;
	if(addHtmlLien != null && addHtmlLien !== '')
		vals['addHtmlLien'] = addHtmlLien;
	var removeHtmlLien = $formulaireValeurs.find('.removeHtmlLien').val();
	if(removeHtmlLien != null && removeHtmlLien !== '')
		vals['removeHtmlLien'] = removeHtmlLien;

	var valeurHtmlElement = $formulaireValeurs.find('.valeurHtmlElement').val();
	var removeHtmlElement = $formulaireValeurs.find('.removeHtmlElement').val() === 'true';
	var setHtmlElement = removeHtmlElement ? null : $formulaireValeurs.find('.setHtmlElement').val();
	var addHtmlElement = $formulaireValeurs.find('.addHtmlElement').val();
	if(removeHtmlElement || setHtmlElement != null && setHtmlElement !== '')
		vals['setHtmlElement'] = setHtmlElement;
	if(addHtmlElement != null && addHtmlElement !== '')
		vals['addHtmlElement'] = addHtmlElement;
	var removeHtmlElement = $formulaireValeurs.find('.removeHtmlElement').val();
	if(removeHtmlElement != null && removeHtmlElement !== '')
		vals['removeHtmlElement'] = removeHtmlElement;

	var valeurHtmlId = $formulaireValeurs.find('.valeurHtmlId').val();
	var removeHtmlId = $formulaireValeurs.find('.removeHtmlId').val() === 'true';
	var setHtmlId = removeHtmlId ? null : $formulaireValeurs.find('.setHtmlId').val();
	var addHtmlId = $formulaireValeurs.find('.addHtmlId').val();
	if(removeHtmlId || setHtmlId != null && setHtmlId !== '')
		vals['setHtmlId'] = setHtmlId;
	if(addHtmlId != null && addHtmlId !== '')
		vals['addHtmlId'] = addHtmlId;
	var removeHtmlId = $formulaireValeurs.find('.removeHtmlId').val();
	if(removeHtmlId != null && removeHtmlId !== '')
		vals['removeHtmlId'] = removeHtmlId;

	var valeurHtmlClasses = $formulaireValeurs.find('.valeurHtmlClasses').val();
	var removeHtmlClasses = $formulaireValeurs.find('.removeHtmlClasses').val() === 'true';
	var setHtmlClasses = removeHtmlClasses ? null : $formulaireValeurs.find('.setHtmlClasses').val();
	var addHtmlClasses = $formulaireValeurs.find('.addHtmlClasses').val();
	if(removeHtmlClasses || setHtmlClasses != null && setHtmlClasses !== '')
		vals['setHtmlClasses'] = setHtmlClasses;
	if(addHtmlClasses != null && addHtmlClasses !== '')
		vals['addHtmlClasses'] = addHtmlClasses;
	var removeHtmlClasses = $formulaireValeurs.find('.removeHtmlClasses').val();
	if(removeHtmlClasses != null && removeHtmlClasses !== '')
		vals['removeHtmlClasses'] = removeHtmlClasses;

	var valeurHtmlStyle = $formulaireValeurs.find('.valeurHtmlStyle').val();
	var removeHtmlStyle = $formulaireValeurs.find('.removeHtmlStyle').val() === 'true';
	var setHtmlStyle = removeHtmlStyle ? null : $formulaireValeurs.find('.setHtmlStyle').val();
	var addHtmlStyle = $formulaireValeurs.find('.addHtmlStyle').val();
	if(removeHtmlStyle || setHtmlStyle != null && setHtmlStyle !== '')
		vals['setHtmlStyle'] = setHtmlStyle;
	if(addHtmlStyle != null && addHtmlStyle !== '')
		vals['addHtmlStyle'] = addHtmlStyle;
	var removeHtmlStyle = $formulaireValeurs.find('.removeHtmlStyle').val();
	if(removeHtmlStyle != null && removeHtmlStyle !== '')
		vals['removeHtmlStyle'] = removeHtmlStyle;

	var valeurHtmlAvant = $formulaireValeurs.find('.valeurHtmlAvant').val();
	var removeHtmlAvant = $formulaireValeurs.find('.removeHtmlAvant').val() === 'true';
	var setHtmlAvant = removeHtmlAvant ? null : $formulaireValeurs.find('.setHtmlAvant').val();
	var addHtmlAvant = $formulaireValeurs.find('.addHtmlAvant').val();
	if(removeHtmlAvant || setHtmlAvant != null && setHtmlAvant !== '')
		vals['setHtmlAvant'] = setHtmlAvant;
	if(addHtmlAvant != null && addHtmlAvant !== '')
		vals['addHtmlAvant'] = addHtmlAvant;
	var removeHtmlAvant = $formulaireValeurs.find('.removeHtmlAvant').val();
	if(removeHtmlAvant != null && removeHtmlAvant !== '')
		vals['removeHtmlAvant'] = removeHtmlAvant;

	var valeurHtmlApres = $formulaireValeurs.find('.valeurHtmlApres').val();
	var removeHtmlApres = $formulaireValeurs.find('.removeHtmlApres').val() === 'true';
	var setHtmlApres = removeHtmlApres ? null : $formulaireValeurs.find('.setHtmlApres').val();
	var addHtmlApres = $formulaireValeurs.find('.addHtmlApres').val();
	if(removeHtmlApres || setHtmlApres != null && setHtmlApres !== '')
		vals['setHtmlApres'] = setHtmlApres;
	if(addHtmlApres != null && addHtmlApres !== '')
		vals['addHtmlApres'] = addHtmlApres;
	var removeHtmlApres = $formulaireValeurs.find('.removeHtmlApres').val();
	if(removeHtmlApres != null && removeHtmlApres !== '')
		vals['removeHtmlApres'] = removeHtmlApres;

	var valeurHtmlTexte = $formulaireValeurs.find('.valeurHtmlTexte').val();
	var removeHtmlTexte = $formulaireValeurs.find('.removeHtmlTexte').val() === 'true';
	var setHtmlTexte = removeHtmlTexte ? null : $formulaireValeurs.find('.setHtmlTexte').val();
	var addHtmlTexte = $formulaireValeurs.find('.addHtmlTexte').val();
	if(removeHtmlTexte || setHtmlTexte != null && setHtmlTexte !== '')
		vals['setHtmlTexte'] = setHtmlTexte;
	if(addHtmlTexte != null && addHtmlTexte !== '')
		vals['addHtmlTexte'] = addHtmlTexte;
	var removeHtmlTexte = $formulaireValeurs.find('.removeHtmlTexte').val();
	if(removeHtmlTexte != null && removeHtmlTexte !== '')
		vals['removeHtmlTexte'] = removeHtmlTexte;

	var valeurHtmlVar = $formulaireValeurs.find('.valeurHtmlVar').val();
	var removeHtmlVar = $formulaireValeurs.find('.removeHtmlVar').val() === 'true';
	var setHtmlVar = removeHtmlVar ? null : $formulaireValeurs.find('.setHtmlVar').val();
	var addHtmlVar = $formulaireValeurs.find('.addHtmlVar').val();
	if(removeHtmlVar || setHtmlVar != null && setHtmlVar !== '')
		vals['setHtmlVar'] = setHtmlVar;
	if(addHtmlVar != null && addHtmlVar !== '')
		vals['addHtmlVar'] = addHtmlVar;
	var removeHtmlVar = $formulaireValeurs.find('.removeHtmlVar').val();
	if(removeHtmlVar != null && removeHtmlVar !== '')
		vals['removeHtmlVar'] = removeHtmlVar;

	var valeurHtmlVarSpan = $formulaireValeurs.find('.valeurHtmlVarSpan').val();
	var removeHtmlVarSpan = $formulaireValeurs.find('.removeHtmlVarSpan').val() === 'true';
	var setHtmlVarSpan = removeHtmlVarSpan ? null : $formulaireValeurs.find('.setHtmlVarSpan').val();
	var addHtmlVarSpan = $formulaireValeurs.find('.addHtmlVarSpan').val();
	if(removeHtmlVarSpan || setHtmlVarSpan != null && setHtmlVarSpan !== '')
		vals['setHtmlVarSpan'] = setHtmlVarSpan;
	if(addHtmlVarSpan != null && addHtmlVarSpan !== '')
		vals['addHtmlVarSpan'] = addHtmlVarSpan;
	var removeHtmlVarSpan = $formulaireValeurs.find('.removeHtmlVarSpan').val();
	if(removeHtmlVarSpan != null && removeHtmlVarSpan !== '')
		vals['removeHtmlVarSpan'] = removeHtmlVarSpan;

	var valeurHtmlVarForm = $formulaireValeurs.find('.valeurHtmlVarForm').val();
	var removeHtmlVarForm = $formulaireValeurs.find('.removeHtmlVarForm').val() === 'true';
	var setHtmlVarForm = removeHtmlVarForm ? null : $formulaireValeurs.find('.setHtmlVarForm').val();
	var addHtmlVarForm = $formulaireValeurs.find('.addHtmlVarForm').val();
	if(removeHtmlVarForm || setHtmlVarForm != null && setHtmlVarForm !== '')
		vals['setHtmlVarForm'] = setHtmlVarForm;
	if(addHtmlVarForm != null && addHtmlVarForm !== '')
		vals['addHtmlVarForm'] = addHtmlVarForm;
	var removeHtmlVarForm = $formulaireValeurs.find('.removeHtmlVarForm').val();
	if(removeHtmlVarForm != null && removeHtmlVarForm !== '')
		vals['removeHtmlVarForm'] = removeHtmlVarForm;

	var valeurHtmlVarInput = $formulaireValeurs.find('.valeurHtmlVarInput').val();
	var removeHtmlVarInput = $formulaireValeurs.find('.removeHtmlVarInput').val() === 'true';
	var setHtmlVarInput = removeHtmlVarInput ? null : $formulaireValeurs.find('.setHtmlVarInput').val();
	var addHtmlVarInput = $formulaireValeurs.find('.addHtmlVarInput').val();
	if(removeHtmlVarInput || setHtmlVarInput != null && setHtmlVarInput !== '')
		vals['setHtmlVarInput'] = setHtmlVarInput;
	if(addHtmlVarInput != null && addHtmlVarInput !== '')
		vals['addHtmlVarInput'] = addHtmlVarInput;
	var removeHtmlVarInput = $formulaireValeurs.find('.removeHtmlVarInput').val();
	if(removeHtmlVarInput != null && removeHtmlVarInput !== '')
		vals['removeHtmlVarInput'] = removeHtmlVarInput;

	var valeurHtmlIfVarEquals = $formulaireValeurs.find('.valeurHtmlIfVarEquals').val();
	var removeHtmlIfVarEquals = $formulaireValeurs.find('.removeHtmlIfVarEquals').val() === 'true';
	var setHtmlIfVarEquals = removeHtmlIfVarEquals ? null : $formulaireValeurs.find('.setHtmlIfVarEquals').val();
	var addHtmlIfVarEquals = $formulaireValeurs.find('.addHtmlIfVarEquals').val();
	if(removeHtmlIfVarEquals || setHtmlIfVarEquals != null && setHtmlIfVarEquals !== '')
		vals['setHtmlIfVarEquals'] = setHtmlIfVarEquals;
	if(addHtmlIfVarEquals != null && addHtmlIfVarEquals !== '')
		vals['addHtmlIfVarEquals'] = addHtmlIfVarEquals;
	var removeHtmlIfVarEquals = $formulaireValeurs.find('.removeHtmlIfVarEquals').val();
	if(removeHtmlIfVarEquals != null && removeHtmlIfVarEquals !== '')
		vals['removeHtmlIfVarEquals'] = removeHtmlIfVarEquals;

	var valeurHtmlVarForEach = $formulaireValeurs.find('.valeurHtmlVarForEach').val();
	var removeHtmlVarForEach = $formulaireValeurs.find('.removeHtmlVarForEach').val() === 'true';
	var setHtmlVarForEach = removeHtmlVarForEach ? null : $formulaireValeurs.find('.setHtmlVarForEach').val();
	var addHtmlVarForEach = $formulaireValeurs.find('.addHtmlVarForEach').val();
	if(removeHtmlVarForEach || setHtmlVarForEach != null && setHtmlVarForEach !== '')
		vals['setHtmlVarForEach'] = setHtmlVarForEach;
	if(addHtmlVarForEach != null && addHtmlVarForEach !== '')
		vals['addHtmlVarForEach'] = addHtmlVarForEach;
	var removeHtmlVarForEach = $formulaireValeurs.find('.removeHtmlVarForEach').val();
	if(removeHtmlVarForEach != null && removeHtmlVarForEach !== '')
		vals['removeHtmlVarForEach'] = removeHtmlVarForEach;

	var valeurHtmlVarHtml = $formulaireValeurs.find('.valeurHtmlVarHtml').val();
	var removeHtmlVarHtml = $formulaireValeurs.find('.removeHtmlVarHtml').val() === 'true';
	var setHtmlVarHtml = removeHtmlVarHtml ? null : $formulaireValeurs.find('.setHtmlVarHtml').val();
	var addHtmlVarHtml = $formulaireValeurs.find('.addHtmlVarHtml').val();
	if(removeHtmlVarHtml || setHtmlVarHtml != null && setHtmlVarHtml !== '')
		vals['setHtmlVarHtml'] = setHtmlVarHtml;
	if(addHtmlVarHtml != null && addHtmlVarHtml !== '')
		vals['addHtmlVarHtml'] = addHtmlVarHtml;
	var removeHtmlVarHtml = $formulaireValeurs.find('.removeHtmlVarHtml').val();
	if(removeHtmlVarHtml != null && removeHtmlVarHtml !== '')
		vals['removeHtmlVarHtml'] = removeHtmlVarHtml;

	var valeurHtmlExclure = $formulaireValeurs.find('.valeurHtmlExclure').prop('checked');
	var removeHtmlExclure = $formulaireValeurs.find('.removeHtmlExclure').val() === 'true';
	var valeurHtmlExclureSelectVal = $formulaireValeurs.find('select.setHtmlExclure').val();
	var valeurHtmlExclure = null;
	if(valeurHtmlExclureSelectVal != null && valeurHtmlExclureSelectVal !== '')
		valeurHtmlExclure = valeurHtmlExclureSelectVal == 'true';
	var setHtmlExclure = removeHtmlExclure ? null : valeurHtmlExclure;
	var addHtmlExclure = $formulaireValeurs.find('.addHtmlExclure').prop('checked');
	if(removeHtmlExclure || setHtmlExclure != null && setHtmlExclure !== '')
		vals['setHtmlExclure'] = setHtmlExclure;
	if(addHtmlExclure != null && addHtmlExclure !== '')
		vals['addHtmlExclure'] = addHtmlExclure;
	var removeHtmlExclure = $formulaireValeurs.find('.removeHtmlExclure').prop('checked');
	if(removeHtmlExclure != null && removeHtmlExclure !== '')
		vals['removeHtmlExclure'] = removeHtmlExclure;

	var valeurPdfExclure = $formulaireValeurs.find('.valeurPdfExclure').prop('checked');
	var removePdfExclure = $formulaireValeurs.find('.removePdfExclure').val() === 'true';
	var valeurPdfExclureSelectVal = $formulaireValeurs.find('select.setPdfExclure').val();
	var valeurPdfExclure = null;
	if(valeurPdfExclureSelectVal != null && valeurPdfExclureSelectVal !== '')
		valeurPdfExclure = valeurPdfExclureSelectVal == 'true';
	var setPdfExclure = removePdfExclure ? null : valeurPdfExclure;
	var addPdfExclure = $formulaireValeurs.find('.addPdfExclure').prop('checked');
	if(removePdfExclure || setPdfExclure != null && setPdfExclure !== '')
		vals['setPdfExclure'] = setPdfExclure;
	if(addPdfExclure != null && addPdfExclure !== '')
		vals['addPdfExclure'] = addPdfExclure;
	var removePdfExclure = $formulaireValeurs.find('.removePdfExclure').prop('checked');
	if(removePdfExclure != null && removePdfExclure !== '')
		vals['removePdfExclure'] = removePdfExclure;

	var valeurConnecterDeconnecter = $formulaireValeurs.find('.valeurConnecterDeconnecter').prop('checked');
	var removeConnecterDeconnecter = $formulaireValeurs.find('.removeConnecterDeconnecter').val() === 'true';
	var valeurConnecterDeconnecterSelectVal = $formulaireValeurs.find('select.setConnecterDeconnecter').val();
	var valeurConnecterDeconnecter = null;
	if(valeurConnecterDeconnecterSelectVal != null && valeurConnecterDeconnecterSelectVal !== '')
		valeurConnecterDeconnecter = valeurConnecterDeconnecterSelectVal == 'true';
	var setConnecterDeconnecter = removeConnecterDeconnecter ? null : valeurConnecterDeconnecter;
	var addConnecterDeconnecter = $formulaireValeurs.find('.addConnecterDeconnecter').prop('checked');
	if(removeConnecterDeconnecter || setConnecterDeconnecter != null && setConnecterDeconnecter !== '')
		vals['setConnecterDeconnecter'] = setConnecterDeconnecter;
	if(addConnecterDeconnecter != null && addConnecterDeconnecter !== '')
		vals['addConnecterDeconnecter'] = addConnecterDeconnecter;
	var removeConnecterDeconnecter = $formulaireValeurs.find('.removeConnecterDeconnecter').prop('checked');
	if(removeConnecterDeconnecter != null && removeConnecterDeconnecter !== '')
		vals['removeConnecterDeconnecter'] = removeConnecterDeconnecter;

	var valeurTri1 = $formulaireValeurs.find('.valeurTri1').val();
	var removeTri1 = $formulaireValeurs.find('.removeTri1').val() === 'true';
	var setTri1 = removeTri1 ? null : $formulaireValeurs.find('.setTri1').val();
	var addTri1 = $formulaireValeurs.find('.addTri1').val();
	if(removeTri1 || setTri1 != null && setTri1 !== '')
		vals['setTri1'] = setTri1;
	if(addTri1 != null && addTri1 !== '')
		vals['addTri1'] = addTri1;
	var removeTri1 = $formulaireValeurs.find('.removeTri1').val();
	if(removeTri1 != null && removeTri1 !== '')
		vals['removeTri1'] = removeTri1;

	var valeurTri2 = $formulaireValeurs.find('.valeurTri2').val();
	var removeTri2 = $formulaireValeurs.find('.removeTri2').val() === 'true';
	var setTri2 = removeTri2 ? null : $formulaireValeurs.find('.setTri2').val();
	var addTri2 = $formulaireValeurs.find('.addTri2').val();
	if(removeTri2 || setTri2 != null && setTri2 !== '')
		vals['setTri2'] = setTri2;
	if(addTri2 != null && addTri2 !== '')
		vals['addTri2'] = addTri2;
	var removeTri2 = $formulaireValeurs.find('.removeTri2').val();
	if(removeTri2 != null && removeTri2 !== '')
		vals['removeTri2'] = removeTri2;

	var valeurTri3 = $formulaireValeurs.find('.valeurTri3').val();
	var removeTri3 = $formulaireValeurs.find('.removeTri3').val() === 'true';
	var setTri3 = removeTri3 ? null : $formulaireValeurs.find('.setTri3').val();
	var addTri3 = $formulaireValeurs.find('.addTri3').val();
	if(removeTri3 || setTri3 != null && setTri3 !== '')
		vals['setTri3'] = setTri3;
	if(addTri3 != null && addTri3 !== '')
		vals['addTri3'] = addTri3;
	var removeTri3 = $formulaireValeurs.find('.removeTri3').val();
	if(removeTri3 != null && removeTri3 !== '')
		vals['removeTri3'] = removeTri3;

	var valeurTri4 = $formulaireValeurs.find('.valeurTri4').val();
	var removeTri4 = $formulaireValeurs.find('.removeTri4').val() === 'true';
	var setTri4 = removeTri4 ? null : $formulaireValeurs.find('.setTri4').val();
	var addTri4 = $formulaireValeurs.find('.addTri4').val();
	if(removeTri4 || setTri4 != null && setTri4 !== '')
		vals['setTri4'] = setTri4;
	if(addTri4 != null && addTri4 !== '')
		vals['addTri4'] = addTri4;
	var removeTri4 = $formulaireValeurs.find('.removeTri4').val();
	if(removeTri4 != null && removeTri4 !== '')
		vals['removeTri4'] = removeTri4;

	var valeurTri5 = $formulaireValeurs.find('.valeurTri5').val();
	var removeTri5 = $formulaireValeurs.find('.removeTri5').val() === 'true';
	var setTri5 = removeTri5 ? null : $formulaireValeurs.find('.setTri5').val();
	var addTri5 = $formulaireValeurs.find('.addTri5').val();
	if(removeTri5 || setTri5 != null && setTri5 !== '')
		vals['setTri5'] = setTri5;
	if(addTri5 != null && addTri5 !== '')
		vals['addTri5'] = addTri5;
	var removeTri5 = $formulaireValeurs.find('.removeTri5').val();
	if(removeTri5 != null && removeTri5 !== '')
		vals['removeTri5'] = removeTri5;

	var valeurTri6 = $formulaireValeurs.find('.valeurTri6').val();
	var removeTri6 = $formulaireValeurs.find('.removeTri6').val() === 'true';
	var setTri6 = removeTri6 ? null : $formulaireValeurs.find('.setTri6').val();
	var addTri6 = $formulaireValeurs.find('.addTri6').val();
	if(removeTri6 || setTri6 != null && setTri6 !== '')
		vals['setTri6'] = setTri6;
	if(addTri6 != null && addTri6 !== '')
		vals['addTri6'] = addTri6;
	var removeTri6 = $formulaireValeurs.find('.removeTri6').val();
	if(removeTri6 != null && removeTri6 !== '')
		vals['removeTri6'] = removeTri6;

	var valeurTri7 = $formulaireValeurs.find('.valeurTri7').val();
	var removeTri7 = $formulaireValeurs.find('.removeTri7').val() === 'true';
	var setTri7 = removeTri7 ? null : $formulaireValeurs.find('.setTri7').val();
	var addTri7 = $formulaireValeurs.find('.addTri7').val();
	if(removeTri7 || setTri7 != null && setTri7 !== '')
		vals['setTri7'] = setTri7;
	if(addTri7 != null && addTri7 !== '')
		vals['addTri7'] = addTri7;
	var removeTri7 = $formulaireValeurs.find('.removeTri7').val();
	if(removeTri7 != null && removeTri7 !== '')
		vals['removeTri7'] = removeTri7;

	var valeurTri8 = $formulaireValeurs.find('.valeurTri8').val();
	var removeTri8 = $formulaireValeurs.find('.removeTri8').val() === 'true';
	var setTri8 = removeTri8 ? null : $formulaireValeurs.find('.setTri8').val();
	var addTri8 = $formulaireValeurs.find('.addTri8').val();
	if(removeTri8 || setTri8 != null && setTri8 !== '')
		vals['setTri8'] = setTri8;
	if(addTri8 != null && addTri8 !== '')
		vals['addTri8'] = addTri8;
	var removeTri8 = $formulaireValeurs.find('.removeTri8').val();
	if(removeTri8 != null && removeTri8 !== '')
		vals['removeTri8'] = removeTri8;

	var valeurTri9 = $formulaireValeurs.find('.valeurTri9').val();
	var removeTri9 = $formulaireValeurs.find('.removeTri9').val() === 'true';
	var setTri9 = removeTri9 ? null : $formulaireValeurs.find('.setTri9').val();
	var addTri9 = $formulaireValeurs.find('.addTri9').val();
	if(removeTri9 || setTri9 != null && setTri9 !== '')
		vals['setTri9'] = setTri9;
	if(addTri9 != null && addTri9 !== '')
		vals['addTri9'] = addTri9;
	var removeTri9 = $formulaireValeurs.find('.removeTri9').val();
	if(removeTri9 != null && removeTri9 !== '')
		vals['removeTri9'] = removeTri9;

	var valeurTri10 = $formulaireValeurs.find('.valeurTri10').val();
	var removeTri10 = $formulaireValeurs.find('.removeTri10').val() === 'true';
	var setTri10 = removeTri10 ? null : $formulaireValeurs.find('.setTri10').val();
	var addTri10 = $formulaireValeurs.find('.addTri10').val();
	if(removeTri10 || setTri10 != null && setTri10 !== '')
		vals['setTri10'] = setTri10;
	if(addTri10 != null && addTri10 !== '')
		vals['addTri10'] = addTri10;
	var removeTri10 = $formulaireValeurs.find('.removeTri10').val();
	if(removeTri10 != null && removeTri10 !== '')
		vals['removeTri10'] = removeTri10;

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

	patchPartHtmlVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchPartHtmlFiltres($formulaireFiltres) {
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

		var filtreDesignPageCles = $formulaireFiltres.find('.valeurDesignPageCles').val();
		if(filtreDesignPageCles != null && filtreDesignPageCles !== '')
			filtres.push({ name: 'fq', value: 'designPageCles:' + filtreDesignPageCles });

		var filtreHtmlLien = $formulaireFiltres.find('.valeurHtmlLien').val();
		if(filtreHtmlLien != null && filtreHtmlLien !== '')
			filtres.push({ name: 'fq', value: 'htmlLien:' + filtreHtmlLien });

		var filtreHtmlElement = $formulaireFiltres.find('.valeurHtmlElement').val();
		if(filtreHtmlElement != null && filtreHtmlElement !== '')
			filtres.push({ name: 'fq', value: 'htmlElement:' + filtreHtmlElement });

		var filtreHtmlId = $formulaireFiltres.find('.valeurHtmlId').val();
		if(filtreHtmlId != null && filtreHtmlId !== '')
			filtres.push({ name: 'fq', value: 'htmlId:' + filtreHtmlId });

		var filtreHtmlClasses = $formulaireFiltres.find('.valeurHtmlClasses').val();
		if(filtreHtmlClasses != null && filtreHtmlClasses !== '')
			filtres.push({ name: 'fq', value: 'htmlClasses:' + filtreHtmlClasses });

		var filtreHtmlStyle = $formulaireFiltres.find('.valeurHtmlStyle').val();
		if(filtreHtmlStyle != null && filtreHtmlStyle !== '')
			filtres.push({ name: 'fq', value: 'htmlStyle:' + filtreHtmlStyle });

		var filtreHtmlVar = $formulaireFiltres.find('.valeurHtmlVar').val();
		if(filtreHtmlVar != null && filtreHtmlVar !== '')
			filtres.push({ name: 'fq', value: 'htmlVar:' + filtreHtmlVar });

		var filtreHtmlVarSpan = $formulaireFiltres.find('.valeurHtmlVarSpan').val();
		if(filtreHtmlVarSpan != null && filtreHtmlVarSpan !== '')
			filtres.push({ name: 'fq', value: 'htmlVarSpan:' + filtreHtmlVarSpan });

		var filtreHtmlVarForm = $formulaireFiltres.find('.valeurHtmlVarForm').val();
		if(filtreHtmlVarForm != null && filtreHtmlVarForm !== '')
			filtres.push({ name: 'fq', value: 'htmlVarForm:' + filtreHtmlVarForm });

		var filtreHtmlVarInput = $formulaireFiltres.find('.valeurHtmlVarInput').val();
		if(filtreHtmlVarInput != null && filtreHtmlVarInput !== '')
			filtres.push({ name: 'fq', value: 'htmlVarInput:' + filtreHtmlVarInput });

		var filtreHtmlIfVarEquals = $formulaireFiltres.find('.valeurHtmlIfVarEquals').val();
		if(filtreHtmlIfVarEquals != null && filtreHtmlIfVarEquals !== '')
			filtres.push({ name: 'fq', value: 'htmlIfVarEquals:' + filtreHtmlIfVarEquals });

		var filtreHtmlVarForEach = $formulaireFiltres.find('.valeurHtmlVarForEach').val();
		if(filtreHtmlVarForEach != null && filtreHtmlVarForEach !== '')
			filtres.push({ name: 'fq', value: 'htmlVarForEach:' + filtreHtmlVarForEach });

		var filtreHtmlVarHtml = $formulaireFiltres.find('.valeurHtmlVarHtml').val();
		if(filtreHtmlVarHtml != null && filtreHtmlVarHtml !== '')
			filtres.push({ name: 'fq', value: 'htmlVarHtml:' + filtreHtmlVarHtml });

		var $filtreHtmlExclureCheckbox = $formulaireFiltres.find('input.valeurHtmlExclure[type = "checkbox"]');
		var $filtreHtmlExclureSelect = $formulaireFiltres.find('select.valeurHtmlExclure');
		var filtreHtmlExclure = $filtreHtmlExclureSelect.length ? $filtreHtmlExclureSelect.val() : $filtreHtmlExclureCheckbox.prop('checked');
		var filtreHtmlExclureSelectVal = $formulaireFiltres.find('select.filtreHtmlExclure').val();
		var filtreHtmlExclure = null;
		if(filtreHtmlExclureSelectVal !== '')
			filtreHtmlExclure = filtreHtmlExclureSelectVal == 'true';
		if(filtreHtmlExclure != null && filtreHtmlExclure === true)
			filtres.push({ name: 'fq', value: 'htmlExclure:' + filtreHtmlExclure });

		var $filtrePdfExclureCheckbox = $formulaireFiltres.find('input.valeurPdfExclure[type = "checkbox"]');
		var $filtrePdfExclureSelect = $formulaireFiltres.find('select.valeurPdfExclure');
		var filtrePdfExclure = $filtrePdfExclureSelect.length ? $filtrePdfExclureSelect.val() : $filtrePdfExclureCheckbox.prop('checked');
		var filtrePdfExclureSelectVal = $formulaireFiltres.find('select.filtrePdfExclure').val();
		var filtrePdfExclure = null;
		if(filtrePdfExclureSelectVal !== '')
			filtrePdfExclure = filtrePdfExclureSelectVal == 'true';
		if(filtrePdfExclure != null && filtrePdfExclure === true)
			filtres.push({ name: 'fq', value: 'pdfExclure:' + filtrePdfExclure });

		var $filtreConnecterDeconnecterCheckbox = $formulaireFiltres.find('input.valeurConnecterDeconnecter[type = "checkbox"]');
		var $filtreConnecterDeconnecterSelect = $formulaireFiltres.find('select.valeurConnecterDeconnecter');
		var filtreConnecterDeconnecter = $filtreConnecterDeconnecterSelect.length ? $filtreConnecterDeconnecterSelect.val() : $filtreConnecterDeconnecterCheckbox.prop('checked');
		var filtreConnecterDeconnecterSelectVal = $formulaireFiltres.find('select.filtreConnecterDeconnecter').val();
		var filtreConnecterDeconnecter = null;
		if(filtreConnecterDeconnecterSelectVal !== '')
			filtreConnecterDeconnecter = filtreConnecterDeconnecterSelectVal == 'true';
		if(filtreConnecterDeconnecter != null && filtreConnecterDeconnecter === true)
			filtres.push({ name: 'fq', value: 'connecterDeconnecter:' + filtreConnecterDeconnecter });

		var filtreTri1 = $formulaireFiltres.find('.valeurTri1').val();
		if(filtreTri1 != null && filtreTri1 !== '')
			filtres.push({ name: 'fq', value: 'tri1:' + filtreTri1 });

		var filtreTri2 = $formulaireFiltres.find('.valeurTri2').val();
		if(filtreTri2 != null && filtreTri2 !== '')
			filtres.push({ name: 'fq', value: 'tri2:' + filtreTri2 });

		var filtreTri3 = $formulaireFiltres.find('.valeurTri3').val();
		if(filtreTri3 != null && filtreTri3 !== '')
			filtres.push({ name: 'fq', value: 'tri3:' + filtreTri3 });

		var filtreTri4 = $formulaireFiltres.find('.valeurTri4').val();
		if(filtreTri4 != null && filtreTri4 !== '')
			filtres.push({ name: 'fq', value: 'tri4:' + filtreTri4 });

		var filtreTri5 = $formulaireFiltres.find('.valeurTri5').val();
		if(filtreTri5 != null && filtreTri5 !== '')
			filtres.push({ name: 'fq', value: 'tri5:' + filtreTri5 });

		var filtreTri6 = $formulaireFiltres.find('.valeurTri6').val();
		if(filtreTri6 != null && filtreTri6 !== '')
			filtres.push({ name: 'fq', value: 'tri6:' + filtreTri6 });

		var filtreTri7 = $formulaireFiltres.find('.valeurTri7').val();
		if(filtreTri7 != null && filtreTri7 !== '')
			filtres.push({ name: 'fq', value: 'tri7:' + filtreTri7 });

		var filtreTri8 = $formulaireFiltres.find('.valeurTri8').val();
		if(filtreTri8 != null && filtreTri8 !== '')
			filtres.push({ name: 'fq', value: 'tri8:' + filtreTri8 });

		var filtreTri9 = $formulaireFiltres.find('.valeurTri9').val();
		if(filtreTri9 != null && filtreTri9 !== '')
			filtres.push({ name: 'fq', value: 'tri9:' + filtreTri9 });

		var filtreTri10 = $formulaireFiltres.find('.valeurTri10').val();
		if(filtreTri10 != null && filtreTri10 !== '')
			filtres.push({ name: 'fq', value: 'tri10:' + filtreTri10 });

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

		var filtrePartHtmlCle = $formulaireFiltres.find('.valeurPartHtmlCle').val();
		if(filtrePartHtmlCle != null && filtrePartHtmlCle !== '')
			filtres.push({ name: 'fq', value: 'partHtmlCle:' + filtrePartHtmlCle });
	}
	return filtres;
}

function patchPartHtmlVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchPartHtmlVals(filtres, vals, success, error);
}

function patchPartHtmlVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/part-html?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getPartHtml(pk) {
	$.ajax({
		url: '/api/part-html/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Recherche //

async function recherchePartHtml($formulaireFiltres, success, error) {
	var filtres = recherchePartHtmlFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	recherchePartHtmlVals(filtres, success, error);
}

function recherchePartHtmlFiltres($formulaireFiltres) {
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

		var filtreDesignPageCles = $formulaireFiltres.find('.valeurDesignPageCles').val();
		if(filtreDesignPageCles != null && filtreDesignPageCles !== '')
			filtres.push({ name: 'fq', value: 'designPageCles:' + filtreDesignPageCles });

		var filtreHtmlLien = $formulaireFiltres.find('.valeurHtmlLien').val();
		if(filtreHtmlLien != null && filtreHtmlLien !== '')
			filtres.push({ name: 'fq', value: 'htmlLien:' + filtreHtmlLien });

		var filtreHtmlElement = $formulaireFiltres.find('.valeurHtmlElement').val();
		if(filtreHtmlElement != null && filtreHtmlElement !== '')
			filtres.push({ name: 'fq', value: 'htmlElement:' + filtreHtmlElement });

		var filtreHtmlId = $formulaireFiltres.find('.valeurHtmlId').val();
		if(filtreHtmlId != null && filtreHtmlId !== '')
			filtres.push({ name: 'fq', value: 'htmlId:' + filtreHtmlId });

		var filtreHtmlClasses = $formulaireFiltres.find('.valeurHtmlClasses').val();
		if(filtreHtmlClasses != null && filtreHtmlClasses !== '')
			filtres.push({ name: 'fq', value: 'htmlClasses:' + filtreHtmlClasses });

		var filtreHtmlStyle = $formulaireFiltres.find('.valeurHtmlStyle').val();
		if(filtreHtmlStyle != null && filtreHtmlStyle !== '')
			filtres.push({ name: 'fq', value: 'htmlStyle:' + filtreHtmlStyle });

		var filtreHtmlVar = $formulaireFiltres.find('.valeurHtmlVar').val();
		if(filtreHtmlVar != null && filtreHtmlVar !== '')
			filtres.push({ name: 'fq', value: 'htmlVar:' + filtreHtmlVar });

		var filtreHtmlVarSpan = $formulaireFiltres.find('.valeurHtmlVarSpan').val();
		if(filtreHtmlVarSpan != null && filtreHtmlVarSpan !== '')
			filtres.push({ name: 'fq', value: 'htmlVarSpan:' + filtreHtmlVarSpan });

		var filtreHtmlVarForm = $formulaireFiltres.find('.valeurHtmlVarForm').val();
		if(filtreHtmlVarForm != null && filtreHtmlVarForm !== '')
			filtres.push({ name: 'fq', value: 'htmlVarForm:' + filtreHtmlVarForm });

		var filtreHtmlVarInput = $formulaireFiltres.find('.valeurHtmlVarInput').val();
		if(filtreHtmlVarInput != null && filtreHtmlVarInput !== '')
			filtres.push({ name: 'fq', value: 'htmlVarInput:' + filtreHtmlVarInput });

		var filtreHtmlIfVarEquals = $formulaireFiltres.find('.valeurHtmlIfVarEquals').val();
		if(filtreHtmlIfVarEquals != null && filtreHtmlIfVarEquals !== '')
			filtres.push({ name: 'fq', value: 'htmlIfVarEquals:' + filtreHtmlIfVarEquals });

		var filtreHtmlVarForEach = $formulaireFiltres.find('.valeurHtmlVarForEach').val();
		if(filtreHtmlVarForEach != null && filtreHtmlVarForEach !== '')
			filtres.push({ name: 'fq', value: 'htmlVarForEach:' + filtreHtmlVarForEach });

		var filtreHtmlVarHtml = $formulaireFiltres.find('.valeurHtmlVarHtml').val();
		if(filtreHtmlVarHtml != null && filtreHtmlVarHtml !== '')
			filtres.push({ name: 'fq', value: 'htmlVarHtml:' + filtreHtmlVarHtml });

		var $filtreHtmlExclureCheckbox = $formulaireFiltres.find('input.valeurHtmlExclure[type = "checkbox"]');
		var $filtreHtmlExclureSelect = $formulaireFiltres.find('select.valeurHtmlExclure');
		var filtreHtmlExclure = $filtreHtmlExclureSelect.length ? $filtreHtmlExclureSelect.val() : $filtreHtmlExclureCheckbox.prop('checked');
		var filtreHtmlExclureSelectVal = $formulaireFiltres.find('select.filtreHtmlExclure').val();
		var filtreHtmlExclure = null;
		if(filtreHtmlExclureSelectVal !== '')
			filtreHtmlExclure = filtreHtmlExclureSelectVal == 'true';
		if(filtreHtmlExclure != null && filtreHtmlExclure === true)
			filtres.push({ name: 'fq', value: 'htmlExclure:' + filtreHtmlExclure });

		var $filtrePdfExclureCheckbox = $formulaireFiltres.find('input.valeurPdfExclure[type = "checkbox"]');
		var $filtrePdfExclureSelect = $formulaireFiltres.find('select.valeurPdfExclure');
		var filtrePdfExclure = $filtrePdfExclureSelect.length ? $filtrePdfExclureSelect.val() : $filtrePdfExclureCheckbox.prop('checked');
		var filtrePdfExclureSelectVal = $formulaireFiltres.find('select.filtrePdfExclure').val();
		var filtrePdfExclure = null;
		if(filtrePdfExclureSelectVal !== '')
			filtrePdfExclure = filtrePdfExclureSelectVal == 'true';
		if(filtrePdfExclure != null && filtrePdfExclure === true)
			filtres.push({ name: 'fq', value: 'pdfExclure:' + filtrePdfExclure });

		var $filtreConnecterDeconnecterCheckbox = $formulaireFiltres.find('input.valeurConnecterDeconnecter[type = "checkbox"]');
		var $filtreConnecterDeconnecterSelect = $formulaireFiltres.find('select.valeurConnecterDeconnecter');
		var filtreConnecterDeconnecter = $filtreConnecterDeconnecterSelect.length ? $filtreConnecterDeconnecterSelect.val() : $filtreConnecterDeconnecterCheckbox.prop('checked');
		var filtreConnecterDeconnecterSelectVal = $formulaireFiltres.find('select.filtreConnecterDeconnecter').val();
		var filtreConnecterDeconnecter = null;
		if(filtreConnecterDeconnecterSelectVal !== '')
			filtreConnecterDeconnecter = filtreConnecterDeconnecterSelectVal == 'true';
		if(filtreConnecterDeconnecter != null && filtreConnecterDeconnecter === true)
			filtres.push({ name: 'fq', value: 'connecterDeconnecter:' + filtreConnecterDeconnecter });

		var filtreTri1 = $formulaireFiltres.find('.valeurTri1').val();
		if(filtreTri1 != null && filtreTri1 !== '')
			filtres.push({ name: 'fq', value: 'tri1:' + filtreTri1 });

		var filtreTri2 = $formulaireFiltres.find('.valeurTri2').val();
		if(filtreTri2 != null && filtreTri2 !== '')
			filtres.push({ name: 'fq', value: 'tri2:' + filtreTri2 });

		var filtreTri3 = $formulaireFiltres.find('.valeurTri3').val();
		if(filtreTri3 != null && filtreTri3 !== '')
			filtres.push({ name: 'fq', value: 'tri3:' + filtreTri3 });

		var filtreTri4 = $formulaireFiltres.find('.valeurTri4').val();
		if(filtreTri4 != null && filtreTri4 !== '')
			filtres.push({ name: 'fq', value: 'tri4:' + filtreTri4 });

		var filtreTri5 = $formulaireFiltres.find('.valeurTri5').val();
		if(filtreTri5 != null && filtreTri5 !== '')
			filtres.push({ name: 'fq', value: 'tri5:' + filtreTri5 });

		var filtreTri6 = $formulaireFiltres.find('.valeurTri6').val();
		if(filtreTri6 != null && filtreTri6 !== '')
			filtres.push({ name: 'fq', value: 'tri6:' + filtreTri6 });

		var filtreTri7 = $formulaireFiltres.find('.valeurTri7').val();
		if(filtreTri7 != null && filtreTri7 !== '')
			filtres.push({ name: 'fq', value: 'tri7:' + filtreTri7 });

		var filtreTri8 = $formulaireFiltres.find('.valeurTri8').val();
		if(filtreTri8 != null && filtreTri8 !== '')
			filtres.push({ name: 'fq', value: 'tri8:' + filtreTri8 });

		var filtreTri9 = $formulaireFiltres.find('.valeurTri9').val();
		if(filtreTri9 != null && filtreTri9 !== '')
			filtres.push({ name: 'fq', value: 'tri9:' + filtreTri9 });

		var filtreTri10 = $formulaireFiltres.find('.valeurTri10').val();
		if(filtreTri10 != null && filtreTri10 !== '')
			filtres.push({ name: 'fq', value: 'tri10:' + filtreTri10 });

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

		var filtrePartHtmlCle = $formulaireFiltres.find('.valeurPartHtmlCle').val();
		if(filtrePartHtmlCle != null && filtrePartHtmlCle !== '')
			filtres.push({ name: 'fq', value: 'partHtmlCle:' + filtrePartHtmlCle });
	}
	return filtres;
}

function recherchePartHtmlVals(filtres, success, error) {


	filtres.push({ name: 'sort', value: 'tri1 asc' });
	filtres.push({ name: 'sort', value: 'tri2 asc' });
	filtres.push({ name: 'sort', value: 'tri3 asc' });
	filtres.push({ name: 'sort', value: 'tri4 asc' });
	filtres.push({ name: 'sort', value: 'tri5 asc' });
	filtres.push({ name: 'sort', value: 'tri6 asc' });
	filtres.push({ name: 'sort', value: 'tri7 asc' });
	filtres.push({ name: 'sort', value: 'tri8 asc' });
	filtres.push({ name: 'sort', value: 'tri9 asc' });
	filtres.push({ name: 'sort', value: 'tri10 asc' });
	$.ajax({
		url: '/api/part-html?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggerePartHtmlObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-puzzle-piece ');
			var $span = $('<span>').attr('class', '').text(o['objetTitre']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherPartHtmlVals($formulaireFiltres, success, error);
}

function suggerePartHtmlDesignPageCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-drafting-compass ');
			var $span = $('<span>').attr('class', '').text(o['designPageNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['partHtmlCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_designPageCles_' + pk + '_partHtmlCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurDesignPageCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_designPageCles_" + pk + "_partHtmlCles_" + o['pk'] + "'); patchPartHtmlVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'DesignPageCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#PartHtmlForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheDesignPageVals(filtres, success, error);
}

async function websocketPartHtml(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketPartHtml', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#PartHtmlForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-khaki ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-puzzle-piece w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modifier part de HTMLs');
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

		window.eventBus.registerHandler('websocketDesignPage', function (error, message) {
			$('#Page_designPageCles').trigger('oninput');
			$('#Page_designPageCles_ajouter').text('ajouter un design de page');
			$('#Page_designPageCles_ajouter').removeClass('w3-disabled');
			$('#Page_designPageCles_ajouter').attr('disabled', false);
		});
	}
}
async function websocketPartHtmlInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherPartHtmlVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputPartHtml' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'Pk'));
			}
			var val = o['cree'];
			if(vars.includes('cree')) {
				$('.inputPartHtml' + pk + 'Cree').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'Cree').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'Cree'));
			}
			var val = o['modifie'];
			if(vars.includes('modifie')) {
				$('.inputPartHtml' + pk + 'Modifie').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'Modifie').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'Modifie'));
			}
			var val = o['objetId'];
			if(vars.includes('objetId')) {
				$('.inputPartHtml' + pk + 'ObjetId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'ObjetId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'ObjetId'));
			}
			var val = o['archive'];
			if(vars.includes('archive')) {
				$('.inputPartHtml' + pk + 'Archive').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'Archive').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'Archive'));
			}
			var val = o['supprime'];
			if(vars.includes('supprime')) {
				$('.inputPartHtml' + pk + 'Supprime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'Supprime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'Supprime'));
			}
			var val = o['designPageCles'];
			if(vars.includes('designPageCles')) {
				$('.inputPartHtml' + pk + 'DesignPageCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'DesignPageCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'DesignPageCles'));
			}
			var val = o['htmlLien'];
			if(vars.includes('htmlLien')) {
				$('.inputPartHtml' + pk + 'HtmlLien').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'HtmlLien').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'HtmlLien'));
			}
			var val = o['htmlElement'];
			if(vars.includes('htmlElement')) {
				$('.inputPartHtml' + pk + 'HtmlElement').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'HtmlElement').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'HtmlElement'));
			}
			var val = o['htmlId'];
			if(vars.includes('htmlId')) {
				$('.inputPartHtml' + pk + 'HtmlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'HtmlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'HtmlId'));
			}
			var val = o['htmlClasses'];
			if(vars.includes('htmlClasses')) {
				$('.inputPartHtml' + pk + 'HtmlClasses').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'HtmlClasses').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'HtmlClasses'));
			}
			var val = o['htmlStyle'];
			if(vars.includes('htmlStyle')) {
				$('.inputPartHtml' + pk + 'HtmlStyle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'HtmlStyle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'HtmlStyle'));
			}
			var val = o['htmlAvant'];
			if(vars.includes('htmlAvant')) {
				$('.inputPartHtml' + pk + 'HtmlAvant').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'HtmlAvant').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'HtmlAvant'));
			}
			var val = o['htmlApres'];
			if(vars.includes('htmlApres')) {
				$('.inputPartHtml' + pk + 'HtmlApres').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'HtmlApres').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'HtmlApres'));
			}
			var val = o['htmlTexte'];
			if(vars.includes('htmlTexte')) {
				$('.inputPartHtml' + pk + 'HtmlTexte').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'HtmlTexte').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'HtmlTexte'));
			}
			var val = o['htmlVar'];
			if(vars.includes('htmlVar')) {
				$('.inputPartHtml' + pk + 'HtmlVar').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'HtmlVar').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'HtmlVar'));
			}
			var val = o['htmlVarSpan'];
			if(vars.includes('htmlVarSpan')) {
				$('.inputPartHtml' + pk + 'HtmlVarSpan').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'HtmlVarSpan').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'HtmlVarSpan'));
			}
			var val = o['htmlVarForm'];
			if(vars.includes('htmlVarForm')) {
				$('.inputPartHtml' + pk + 'HtmlVarForm').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'HtmlVarForm').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'HtmlVarForm'));
			}
			var val = o['htmlVarInput'];
			if(vars.includes('htmlVarInput')) {
				$('.inputPartHtml' + pk + 'HtmlVarInput').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'HtmlVarInput').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'HtmlVarInput'));
			}
			var val = o['htmlIfVarEquals'];
			if(vars.includes('htmlIfVarEquals')) {
				$('.inputPartHtml' + pk + 'HtmlIfVarEquals').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'HtmlIfVarEquals').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'HtmlIfVarEquals'));
			}
			var val = o['htmlVarForEach'];
			if(vars.includes('htmlVarForEach')) {
				$('.inputPartHtml' + pk + 'HtmlVarForEach').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'HtmlVarForEach').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'HtmlVarForEach'));
			}
			var val = o['htmlVarHtml'];
			if(vars.includes('htmlVarHtml')) {
				$('.inputPartHtml' + pk + 'HtmlVarHtml').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'HtmlVarHtml').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'HtmlVarHtml'));
			}
			var val = o['htmlExclure'];
			if(vars.includes('htmlExclure')) {
				$('.inputPartHtml' + pk + 'HtmlExclure').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'HtmlExclure').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'HtmlExclure'));
			}
			var val = o['pdfExclure'];
			if(vars.includes('pdfExclure')) {
				$('.inputPartHtml' + pk + 'PdfExclure').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'PdfExclure').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'PdfExclure'));
			}
			var val = o['connecterDeconnecter'];
			if(vars.includes('connecterDeconnecter')) {
				$('.inputPartHtml' + pk + 'ConnecterDeconnecter').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'ConnecterDeconnecter').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'ConnecterDeconnecter'));
			}
			var val = o['tri1'];
			if(vars.includes('tri1')) {
				$('.inputPartHtml' + pk + 'Tri1').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'Tri1').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'Tri1'));
			}
			var val = o['tri2'];
			if(vars.includes('tri2')) {
				$('.inputPartHtml' + pk + 'Tri2').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'Tri2').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'Tri2'));
			}
			var val = o['tri3'];
			if(vars.includes('tri3')) {
				$('.inputPartHtml' + pk + 'Tri3').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'Tri3').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'Tri3'));
			}
			var val = o['tri4'];
			if(vars.includes('tri4')) {
				$('.inputPartHtml' + pk + 'Tri4').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'Tri4').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'Tri4'));
			}
			var val = o['tri5'];
			if(vars.includes('tri5')) {
				$('.inputPartHtml' + pk + 'Tri5').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'Tri5').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'Tri5'));
			}
			var val = o['tri6'];
			if(vars.includes('tri6')) {
				$('.inputPartHtml' + pk + 'Tri6').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'Tri6').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'Tri6'));
			}
			var val = o['tri7'];
			if(vars.includes('tri7')) {
				$('.inputPartHtml' + pk + 'Tri7').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'Tri7').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'Tri7'));
			}
			var val = o['tri8'];
			if(vars.includes('tri8')) {
				$('.inputPartHtml' + pk + 'Tri8').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'Tri8').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'Tri8'));
			}
			var val = o['tri9'];
			if(vars.includes('tri9')) {
				$('.inputPartHtml' + pk + 'Tri9').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'Tri9').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'Tri9'));
			}
			var val = o['tri10'];
			if(vars.includes('tri10')) {
				$('.inputPartHtml' + pk + 'Tri10').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'Tri10').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'Tri10'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputPartHtml' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputPartHtml' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'Id'));
			}
			var val = o['classeNomCanonique'];
			if(vars.includes('classeNomCanonique')) {
				$('.inputPartHtml' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'ClasseNomCanonique'));
			}
			var val = o['classeNomSimple'];
			if(vars.includes('classeNomSimple')) {
				$('.inputPartHtml' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'ClasseNomSimple'));
			}
			var val = o['classeNomsCanoniques'];
			if(vars.includes('classeNomsCanoniques')) {
				$('.inputPartHtml' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'ClasseNomsCanoniques'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputPartHtml' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'SessionId'));
			}
			var val = o['utilisateurId'];
			if(vars.includes('utilisateurId')) {
				$('.inputPartHtml' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'UtilisateurId'));
			}
			var val = o['utilisateurCle'];
			if(vars.includes('utilisateurCle')) {
				$('.inputPartHtml' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'UtilisateurCle'));
			}
			var val = o['sauvegardes'];
			if(vars.includes('sauvegardes')) {
				$('.inputPartHtml' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'Sauvegardes'));
			}
			var val = o['objetTitre'];
			if(vars.includes('objetTitre')) {
				$('.inputPartHtml' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'ObjetTitre'));
			}
			var val = o['objetSuggere'];
			if(vars.includes('objetSuggere')) {
				$('.inputPartHtml' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'ObjetSuggere'));
			}
			var val = o['objetTexte'];
			if(vars.includes('objetTexte')) {
				$('.inputPartHtml' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'ObjetTexte'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputPartHtml' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputPartHtml' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputPartHtml' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'PageUrlApi'));
			}
			var val = o['partHtmlCle'];
			if(vars.includes('partHtmlCle')) {
				$('.inputPartHtml' + pk + 'PartHtmlCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPartHtml' + pk + 'PartHtmlCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputPartHtml' + pk + 'PartHtmlCle'));
			}
		});
	}
}
