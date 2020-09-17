
// POST //

async function postInscriptionScolaire($formulaireValeurs, success, error) {
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

	var valeurInscriptionApprouve = $formulaireValeurs.find('.valeurInscriptionApprouve').prop('checked');
	if(valeurInscriptionApprouve != null && valeurInscriptionApprouve !== '')
		vals['inscriptionApprouve'] = valeurInscriptionApprouve;

	var valeurInscriptionImmunisations = $formulaireValeurs.find('.valeurInscriptionImmunisations').prop('checked');
	if(valeurInscriptionImmunisations != null && valeurInscriptionImmunisations !== '')
		vals['inscriptionImmunisations'] = valeurInscriptionImmunisations;

	var valeurInscriptionNomGroupe = $formulaireValeurs.find('.valeurInscriptionNomGroupe').val();
	if(valeurInscriptionNomGroupe != null && valeurInscriptionNomGroupe !== '')
		vals['inscriptionNomGroupe'] = valeurInscriptionNomGroupe;

	var valeurCustomerProfileId = $formulaireValeurs.find('.valeurCustomerProfileId').val();
	if(valeurCustomerProfileId != null && valeurCustomerProfileId !== '')
		vals['customerProfileId'] = valeurCustomerProfileId;

	var valeurInscriptionPaimentComplet = $formulaireValeurs.find('.valeurInscriptionPaimentComplet').prop('checked');
	if(valeurInscriptionPaimentComplet != null && valeurInscriptionPaimentComplet !== '')
		vals['inscriptionPaimentComplet'] = valeurInscriptionPaimentComplet;

	var valeurEnfantPropre = $formulaireValeurs.find('.valeurEnfantPropre').prop('checked');
	if(valeurEnfantPropre != null && valeurEnfantPropre !== '')
		vals['enfantPropre'] = valeurEnfantPropre;

	var valeurInscriptionPaimentChaqueMois = $formulaireValeurs.find('.valeurInscriptionPaimentChaqueMois').prop('checked');
	if(valeurInscriptionPaimentChaqueMois != null && valeurInscriptionPaimentChaqueMois !== '')
		vals['inscriptionPaimentChaqueMois'] = valeurInscriptionPaimentChaqueMois;

	var valeurFamilleMarie = $formulaireValeurs.find('.valeurFamilleMarie').prop('checked');
	if(valeurFamilleMarie != null && valeurFamilleMarie !== '')
		vals['familleMarie'] = valeurFamilleMarie;

	var valeurFamilleSepare = $formulaireValeurs.find('.valeurFamilleSepare').prop('checked');
	if(valeurFamilleSepare != null && valeurFamilleSepare !== '')
		vals['familleSepare'] = valeurFamilleSepare;

	var valeurFamilleDivorce = $formulaireValeurs.find('.valeurFamilleDivorce').prop('checked');
	if(valeurFamilleDivorce != null && valeurFamilleDivorce !== '')
		vals['familleDivorce'] = valeurFamilleDivorce;

	var valeurFamilleAddresse = $formulaireValeurs.find('.valeurFamilleAddresse').val();
	if(valeurFamilleAddresse != null && valeurFamilleAddresse !== '')
		vals['familleAddresse'] = valeurFamilleAddresse;

	var valeurInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.valeurInscriptionConsiderationsSpeciales').val();
	if(valeurInscriptionConsiderationsSpeciales != null && valeurInscriptionConsiderationsSpeciales !== '')
		vals['inscriptionConsiderationsSpeciales'] = valeurInscriptionConsiderationsSpeciales;

	var valeurEnfantConditionsMedicales = $formulaireValeurs.find('.valeurEnfantConditionsMedicales').val();
	if(valeurEnfantConditionsMedicales != null && valeurEnfantConditionsMedicales !== '')
		vals['enfantConditionsMedicales'] = valeurEnfantConditionsMedicales;

	var valeurEnfantEcolesPrecedemmentFrequentees = $formulaireValeurs.find('.valeurEnfantEcolesPrecedemmentFrequentees').val();
	if(valeurEnfantEcolesPrecedemmentFrequentees != null && valeurEnfantEcolesPrecedemmentFrequentees !== '')
		vals['enfantEcolesPrecedemmentFrequentees'] = valeurEnfantEcolesPrecedemmentFrequentees;

	var valeurFamilleCommentVousConnaissezEcole = $formulaireValeurs.find('.valeurFamilleCommentVousConnaissezEcole').val();
	if(valeurFamilleCommentVousConnaissezEcole != null && valeurFamilleCommentVousConnaissezEcole !== '')
		vals['familleCommentVousConnaissezEcole'] = valeurFamilleCommentVousConnaissezEcole;

	var valeurEnfantDescription = $formulaireValeurs.find('.valeurEnfantDescription').val();
	if(valeurEnfantDescription != null && valeurEnfantDescription !== '')
		vals['enfantDescription'] = valeurEnfantDescription;

	var valeurEnfantObjectifs = $formulaireValeurs.find('.valeurEnfantObjectifs').val();
	if(valeurEnfantObjectifs != null && valeurEnfantObjectifs !== '')
		vals['enfantObjectifs'] = valeurEnfantObjectifs;

	var valeurBlocCles = [];
	$formulaireValeurs.find('input.valeurBlocCles:checked').each(function(index) {
		valeurBlocCles.push($(this).val());
	});
	if(valeurBlocCles.length > 0)
		vals['blocCles'] = valeurBlocCles;

		vals['enfantCle'] = [valeurEnfantCle];
	if(valeurEnfantCle != null && valeurEnfantCle !== '')
		vals['enfantCle'] = valeurEnfantCle;

	var valeurMereCles = [];
	$formulaireValeurs.find('input.valeurMereCles:checked').each(function(index) {
		valeurMereCles.push($(this).val());
	});
	if(valeurMereCles.length > 0)
		vals['mereCles'] = valeurMereCles;

	var valeurPereCles = [];
	$formulaireValeurs.find('input.valeurPereCles:checked').each(function(index) {
		valeurPereCles.push($(this).val());
	});
	if(valeurPereCles.length > 0)
		vals['pereCles'] = valeurPereCles;

	var valeurGardienCles = [];
	$formulaireValeurs.find('input.valeurGardienCles:checked').each(function(index) {
		valeurGardienCles.push($(this).val());
	});
	if(valeurGardienCles.length > 0)
		vals['gardienCles'] = valeurGardienCles;

	var valeurPaiementCles = [];
	$formulaireValeurs.find('input.valeurPaiementCles:checked').each(function(index) {
		valeurPaiementCles.push($(this).val());
	});
	if(valeurPaiementCles.length > 0)
		vals['paiementCles'] = valeurPaiementCles;

	var valeurUtilisateurCles = [];
	$formulaireValeurs.find('input.valeurUtilisateurCles:checked').each(function(index) {
		valeurUtilisateurCles.push($(this).val());
	});
	if(valeurUtilisateurCles.length > 0)
		vals['utilisateurCles'] = valeurUtilisateurCles;

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

	var valeurEnfantNomComplet = $formulaireValeurs.find('.valeurEnfantNomComplet').val();
	if(valeurEnfantNomComplet != null && valeurEnfantNomComplet !== '')
		vals['enfantNomComplet'] = valeurEnfantNomComplet;

	var valeurEnfantNomCompletPrefere = $formulaireValeurs.find('.valeurEnfantNomCompletPrefere').val();
	if(valeurEnfantNomCompletPrefere != null && valeurEnfantNomCompletPrefere !== '')
		vals['enfantNomCompletPrefere'] = valeurEnfantNomCompletPrefere;

	var valeurEnfantDateNaissance = $formulaireValeurs.find('.valeurEnfantDateNaissance').val();
	if(valeurEnfantDateNaissance != null && valeurEnfantDateNaissance !== '')
		vals['enfantDateNaissance'] = valeurEnfantDateNaissance;

	var valeurEcoleAddresse = $formulaireValeurs.find('.valeurEcoleAddresse').val();
	if(valeurEcoleAddresse != null && valeurEcoleAddresse !== '')
		vals['ecoleAddresse'] = valeurEcoleAddresse;

	var valeurInscriptionDateFrais = $formulaireValeurs.find('.valeurInscriptionDateFrais').val();
	if(valeurInscriptionDateFrais != null && valeurInscriptionDateFrais !== '')
		vals['inscriptionDateFrais'] = valeurInscriptionDateFrais;

	var valeurInscriptionSignature1 = $formulaireValeurs.find('.valeurInscriptionSignature1').val();
	if(valeurInscriptionSignature1 != null && valeurInscriptionSignature1 !== '')
		vals['inscriptionSignature1'] = valeurInscriptionSignature1;

	var valeurInscriptionSignature2 = $formulaireValeurs.find('.valeurInscriptionSignature2').val();
	if(valeurInscriptionSignature2 != null && valeurInscriptionSignature2 !== '')
		vals['inscriptionSignature2'] = valeurInscriptionSignature2;

	var valeurInscriptionSignature3 = $formulaireValeurs.find('.valeurInscriptionSignature3').val();
	if(valeurInscriptionSignature3 != null && valeurInscriptionSignature3 !== '')
		vals['inscriptionSignature3'] = valeurInscriptionSignature3;

	var valeurInscriptionSignature4 = $formulaireValeurs.find('.valeurInscriptionSignature4').val();
	if(valeurInscriptionSignature4 != null && valeurInscriptionSignature4 !== '')
		vals['inscriptionSignature4'] = valeurInscriptionSignature4;

	var valeurInscriptionSignature5 = $formulaireValeurs.find('.valeurInscriptionSignature5').val();
	if(valeurInscriptionSignature5 != null && valeurInscriptionSignature5 !== '')
		vals['inscriptionSignature5'] = valeurInscriptionSignature5;

	var valeurInscriptionSignature6 = $formulaireValeurs.find('.valeurInscriptionSignature6').val();
	if(valeurInscriptionSignature6 != null && valeurInscriptionSignature6 !== '')
		vals['inscriptionSignature6'] = valeurInscriptionSignature6;

	var valeurInscriptionSignature7 = $formulaireValeurs.find('.valeurInscriptionSignature7').val();
	if(valeurInscriptionSignature7 != null && valeurInscriptionSignature7 !== '')
		vals['inscriptionSignature7'] = valeurInscriptionSignature7;

	var valeurInscriptionSignature8 = $formulaireValeurs.find('.valeurInscriptionSignature8').val();
	if(valeurInscriptionSignature8 != null && valeurInscriptionSignature8 !== '')
		vals['inscriptionSignature8'] = valeurInscriptionSignature8;

	var valeurInscriptionSignature9 = $formulaireValeurs.find('.valeurInscriptionSignature9').val();
	if(valeurInscriptionSignature9 != null && valeurInscriptionSignature9 !== '')
		vals['inscriptionSignature9'] = valeurInscriptionSignature9;

	var valeurInscriptionSignature10 = $formulaireValeurs.find('.valeurInscriptionSignature10').val();
	if(valeurInscriptionSignature10 != null && valeurInscriptionSignature10 !== '')
		vals['inscriptionSignature10'] = valeurInscriptionSignature10;

	var valeurInscriptionDate1 = $formulaireValeurs.find('.valeurInscriptionDate1').val();
	if(valeurInscriptionDate1 != null && valeurInscriptionDate1 !== '')
		vals['inscriptionDate1'] = valeurInscriptionDate1;

	var valeurInscriptionDate2 = $formulaireValeurs.find('.valeurInscriptionDate2').val();
	if(valeurInscriptionDate2 != null && valeurInscriptionDate2 !== '')
		vals['inscriptionDate2'] = valeurInscriptionDate2;

	var valeurInscriptionDate3 = $formulaireValeurs.find('.valeurInscriptionDate3').val();
	if(valeurInscriptionDate3 != null && valeurInscriptionDate3 !== '')
		vals['inscriptionDate3'] = valeurInscriptionDate3;

	var valeurInscriptionDate4 = $formulaireValeurs.find('.valeurInscriptionDate4').val();
	if(valeurInscriptionDate4 != null && valeurInscriptionDate4 !== '')
		vals['inscriptionDate4'] = valeurInscriptionDate4;

	var valeurInscriptionDate5 = $formulaireValeurs.find('.valeurInscriptionDate5').val();
	if(valeurInscriptionDate5 != null && valeurInscriptionDate5 !== '')
		vals['inscriptionDate5'] = valeurInscriptionDate5;

	var valeurInscriptionDate6 = $formulaireValeurs.find('.valeurInscriptionDate6').val();
	if(valeurInscriptionDate6 != null && valeurInscriptionDate6 !== '')
		vals['inscriptionDate6'] = valeurInscriptionDate6;

	var valeurInscriptionDate7 = $formulaireValeurs.find('.valeurInscriptionDate7').val();
	if(valeurInscriptionDate7 != null && valeurInscriptionDate7 !== '')
		vals['inscriptionDate7'] = valeurInscriptionDate7;

	var valeurInscriptionDate8 = $formulaireValeurs.find('.valeurInscriptionDate8').val();
	if(valeurInscriptionDate8 != null && valeurInscriptionDate8 !== '')
		vals['inscriptionDate8'] = valeurInscriptionDate8;

	var valeurInscriptionDate9 = $formulaireValeurs.find('.valeurInscriptionDate9').val();
	if(valeurInscriptionDate9 != null && valeurInscriptionDate9 !== '')
		vals['inscriptionDate9'] = valeurInscriptionDate9;

	var valeurInscriptionDate10 = $formulaireValeurs.find('.valeurInscriptionDate10').val();
	if(valeurInscriptionDate10 != null && valeurInscriptionDate10 !== '')
		vals['inscriptionDate10'] = valeurInscriptionDate10;

	$.ajax({
		url: '/api/inscription'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postInscriptionScolaireVals(vals, success, error) {
	$.ajax({
		url: '/api/inscription'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportInscriptionScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTImport_liste').val();
	if(json != null && json !== '')
		putimportInscriptionScolaireVals(JSON.parse(json), success, error);
}

function putimportInscriptionScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/inscription/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTFusion //

async function putfusionInscriptionScolaire($formulaireValeurs, pk, success, error) {
	var json = $formulaireValeurs.find('.PUTFusion_liste').val();
	if(json != null && json !== '')
		putfusionInscriptionScolaireVals(JSON.parse(json), success, error);
}

function putfusionInscriptionScolaireVals(json, success, error) {
	$.ajax({
		url: '/api/inscription/fusion'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopie //

async function putcopieInscriptionScolaire($formulaireValeurs, pk, success, error) {
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

	var valeurInscriptionApprouve = $formulaireValeurs.find('.valeurInscriptionApprouve').prop('checked');
	if(valeurInscriptionApprouve != null && valeurInscriptionApprouve !== '')
		vals['inscriptionApprouve'] = valeurInscriptionApprouve;

	var valeurInscriptionImmunisations = $formulaireValeurs.find('.valeurInscriptionImmunisations').prop('checked');
	if(valeurInscriptionImmunisations != null && valeurInscriptionImmunisations !== '')
		vals['inscriptionImmunisations'] = valeurInscriptionImmunisations;

	var valeurInscriptionNomGroupe = $formulaireValeurs.find('.valeurInscriptionNomGroupe').val();
	if(valeurInscriptionNomGroupe != null && valeurInscriptionNomGroupe !== '')
		vals['inscriptionNomGroupe'] = valeurInscriptionNomGroupe;

	var valeurCustomerProfileId = $formulaireValeurs.find('.valeurCustomerProfileId').val();
	if(valeurCustomerProfileId != null && valeurCustomerProfileId !== '')
		vals['customerProfileId'] = valeurCustomerProfileId;

	var valeurInscriptionPaimentComplet = $formulaireValeurs.find('.valeurInscriptionPaimentComplet').prop('checked');
	if(valeurInscriptionPaimentComplet != null && valeurInscriptionPaimentComplet !== '')
		vals['inscriptionPaimentComplet'] = valeurInscriptionPaimentComplet;

	var valeurEnfantPropre = $formulaireValeurs.find('.valeurEnfantPropre').prop('checked');
	if(valeurEnfantPropre != null && valeurEnfantPropre !== '')
		vals['enfantPropre'] = valeurEnfantPropre;

	var valeurInscriptionPaimentChaqueMois = $formulaireValeurs.find('.valeurInscriptionPaimentChaqueMois').prop('checked');
	if(valeurInscriptionPaimentChaqueMois != null && valeurInscriptionPaimentChaqueMois !== '')
		vals['inscriptionPaimentChaqueMois'] = valeurInscriptionPaimentChaqueMois;

	var valeurFamilleMarie = $formulaireValeurs.find('.valeurFamilleMarie').prop('checked');
	if(valeurFamilleMarie != null && valeurFamilleMarie !== '')
		vals['familleMarie'] = valeurFamilleMarie;

	var valeurFamilleSepare = $formulaireValeurs.find('.valeurFamilleSepare').prop('checked');
	if(valeurFamilleSepare != null && valeurFamilleSepare !== '')
		vals['familleSepare'] = valeurFamilleSepare;

	var valeurFamilleDivorce = $formulaireValeurs.find('.valeurFamilleDivorce').prop('checked');
	if(valeurFamilleDivorce != null && valeurFamilleDivorce !== '')
		vals['familleDivorce'] = valeurFamilleDivorce;

	var valeurFamilleAddresse = $formulaireValeurs.find('.valeurFamilleAddresse').val();
	if(valeurFamilleAddresse != null && valeurFamilleAddresse !== '')
		vals['familleAddresse'] = valeurFamilleAddresse;

	var valeurInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.valeurInscriptionConsiderationsSpeciales').val();
	if(valeurInscriptionConsiderationsSpeciales != null && valeurInscriptionConsiderationsSpeciales !== '')
		vals['inscriptionConsiderationsSpeciales'] = valeurInscriptionConsiderationsSpeciales;

	var valeurEnfantConditionsMedicales = $formulaireValeurs.find('.valeurEnfantConditionsMedicales').val();
	if(valeurEnfantConditionsMedicales != null && valeurEnfantConditionsMedicales !== '')
		vals['enfantConditionsMedicales'] = valeurEnfantConditionsMedicales;

	var valeurEnfantEcolesPrecedemmentFrequentees = $formulaireValeurs.find('.valeurEnfantEcolesPrecedemmentFrequentees').val();
	if(valeurEnfantEcolesPrecedemmentFrequentees != null && valeurEnfantEcolesPrecedemmentFrequentees !== '')
		vals['enfantEcolesPrecedemmentFrequentees'] = valeurEnfantEcolesPrecedemmentFrequentees;

	var valeurFamilleCommentVousConnaissezEcole = $formulaireValeurs.find('.valeurFamilleCommentVousConnaissezEcole').val();
	if(valeurFamilleCommentVousConnaissezEcole != null && valeurFamilleCommentVousConnaissezEcole !== '')
		vals['familleCommentVousConnaissezEcole'] = valeurFamilleCommentVousConnaissezEcole;

	var valeurEnfantDescription = $formulaireValeurs.find('.valeurEnfantDescription').val();
	if(valeurEnfantDescription != null && valeurEnfantDescription !== '')
		vals['enfantDescription'] = valeurEnfantDescription;

	var valeurEnfantObjectifs = $formulaireValeurs.find('.valeurEnfantObjectifs').val();
	if(valeurEnfantObjectifs != null && valeurEnfantObjectifs !== '')
		vals['enfantObjectifs'] = valeurEnfantObjectifs;

	var valeurBlocCles = $formulaireValeurs.find('input.valeurBlocCles:checked').val();
	if(valeurBlocCles != null && valeurBlocCles !== '')
		vals['blocCles'] = [valeurBlocCles];

	var valeurEnfantCle = $formulaireValeurs.find('input.valeurEnfantCle:checked').val();
	if(valeurEnfantCle != null && valeurEnfantCle !== '')
		vals['enfantCle'] = valeurEnfantCle;

	var valeurMereCles = $formulaireValeurs.find('input.valeurMereCles:checked').val();
	if(valeurMereCles != null && valeurMereCles !== '')
		vals['mereCles'] = [valeurMereCles];

	var valeurPereCles = $formulaireValeurs.find('input.valeurPereCles:checked').val();
	if(valeurPereCles != null && valeurPereCles !== '')
		vals['pereCles'] = [valeurPereCles];

	var valeurGardienCles = $formulaireValeurs.find('input.valeurGardienCles:checked').val();
	if(valeurGardienCles != null && valeurGardienCles !== '')
		vals['gardienCles'] = [valeurGardienCles];

	var valeurPaiementCles = $formulaireValeurs.find('input.valeurPaiementCles:checked').val();
	if(valeurPaiementCles != null && valeurPaiementCles !== '')
		vals['paiementCles'] = [valeurPaiementCles];

	var valeurUtilisateurCles = $formulaireValeurs.find('input.valeurUtilisateurCles:checked').val();
	if(valeurUtilisateurCles != null && valeurUtilisateurCles !== '')
		vals['utilisateurCles'] = [valeurUtilisateurCles];

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

	var valeurEnfantNomComplet = $formulaireValeurs.find('.valeurEnfantNomComplet').val();
	if(valeurEnfantNomComplet != null && valeurEnfantNomComplet !== '')
		vals['enfantNomComplet'] = valeurEnfantNomComplet;

	var valeurEnfantNomCompletPrefere = $formulaireValeurs.find('.valeurEnfantNomCompletPrefere').val();
	if(valeurEnfantNomCompletPrefere != null && valeurEnfantNomCompletPrefere !== '')
		vals['enfantNomCompletPrefere'] = valeurEnfantNomCompletPrefere;

	var valeurEnfantDateNaissance = $formulaireValeurs.find('.valeurEnfantDateNaissance').val();
	if(valeurEnfantDateNaissance != null && valeurEnfantDateNaissance !== '')
		vals['enfantDateNaissance'] = valeurEnfantDateNaissance;

	var valeurEcoleAddresse = $formulaireValeurs.find('.valeurEcoleAddresse').val();
	if(valeurEcoleAddresse != null && valeurEcoleAddresse !== '')
		vals['ecoleAddresse'] = valeurEcoleAddresse;

	var valeurInscriptionDateFrais = $formulaireValeurs.find('.valeurInscriptionDateFrais').val();
	if(valeurInscriptionDateFrais != null && valeurInscriptionDateFrais !== '')
		vals['inscriptionDateFrais'] = valeurInscriptionDateFrais;

	var valeurInscriptionSignature1 = $formulaireValeurs.find('.valeurInscriptionSignature1').val();
	if(valeurInscriptionSignature1 != null && valeurInscriptionSignature1 !== '')
		vals['inscriptionSignature1'] = valeurInscriptionSignature1;

	var valeurInscriptionSignature2 = $formulaireValeurs.find('.valeurInscriptionSignature2').val();
	if(valeurInscriptionSignature2 != null && valeurInscriptionSignature2 !== '')
		vals['inscriptionSignature2'] = valeurInscriptionSignature2;

	var valeurInscriptionSignature3 = $formulaireValeurs.find('.valeurInscriptionSignature3').val();
	if(valeurInscriptionSignature3 != null && valeurInscriptionSignature3 !== '')
		vals['inscriptionSignature3'] = valeurInscriptionSignature3;

	var valeurInscriptionSignature4 = $formulaireValeurs.find('.valeurInscriptionSignature4').val();
	if(valeurInscriptionSignature4 != null && valeurInscriptionSignature4 !== '')
		vals['inscriptionSignature4'] = valeurInscriptionSignature4;

	var valeurInscriptionSignature5 = $formulaireValeurs.find('.valeurInscriptionSignature5').val();
	if(valeurInscriptionSignature5 != null && valeurInscriptionSignature5 !== '')
		vals['inscriptionSignature5'] = valeurInscriptionSignature5;

	var valeurInscriptionSignature6 = $formulaireValeurs.find('.valeurInscriptionSignature6').val();
	if(valeurInscriptionSignature6 != null && valeurInscriptionSignature6 !== '')
		vals['inscriptionSignature6'] = valeurInscriptionSignature6;

	var valeurInscriptionSignature7 = $formulaireValeurs.find('.valeurInscriptionSignature7').val();
	if(valeurInscriptionSignature7 != null && valeurInscriptionSignature7 !== '')
		vals['inscriptionSignature7'] = valeurInscriptionSignature7;

	var valeurInscriptionSignature8 = $formulaireValeurs.find('.valeurInscriptionSignature8').val();
	if(valeurInscriptionSignature8 != null && valeurInscriptionSignature8 !== '')
		vals['inscriptionSignature8'] = valeurInscriptionSignature8;

	var valeurInscriptionSignature9 = $formulaireValeurs.find('.valeurInscriptionSignature9').val();
	if(valeurInscriptionSignature9 != null && valeurInscriptionSignature9 !== '')
		vals['inscriptionSignature9'] = valeurInscriptionSignature9;

	var valeurInscriptionSignature10 = $formulaireValeurs.find('.valeurInscriptionSignature10').val();
	if(valeurInscriptionSignature10 != null && valeurInscriptionSignature10 !== '')
		vals['inscriptionSignature10'] = valeurInscriptionSignature10;

	var valeurInscriptionDate1 = $formulaireValeurs.find('.valeurInscriptionDate1').val();
	if(valeurInscriptionDate1 != null && valeurInscriptionDate1 !== '')
		vals['inscriptionDate1'] = valeurInscriptionDate1;

	var valeurInscriptionDate2 = $formulaireValeurs.find('.valeurInscriptionDate2').val();
	if(valeurInscriptionDate2 != null && valeurInscriptionDate2 !== '')
		vals['inscriptionDate2'] = valeurInscriptionDate2;

	var valeurInscriptionDate3 = $formulaireValeurs.find('.valeurInscriptionDate3').val();
	if(valeurInscriptionDate3 != null && valeurInscriptionDate3 !== '')
		vals['inscriptionDate3'] = valeurInscriptionDate3;

	var valeurInscriptionDate4 = $formulaireValeurs.find('.valeurInscriptionDate4').val();
	if(valeurInscriptionDate4 != null && valeurInscriptionDate4 !== '')
		vals['inscriptionDate4'] = valeurInscriptionDate4;

	var valeurInscriptionDate5 = $formulaireValeurs.find('.valeurInscriptionDate5').val();
	if(valeurInscriptionDate5 != null && valeurInscriptionDate5 !== '')
		vals['inscriptionDate5'] = valeurInscriptionDate5;

	var valeurInscriptionDate6 = $formulaireValeurs.find('.valeurInscriptionDate6').val();
	if(valeurInscriptionDate6 != null && valeurInscriptionDate6 !== '')
		vals['inscriptionDate6'] = valeurInscriptionDate6;

	var valeurInscriptionDate7 = $formulaireValeurs.find('.valeurInscriptionDate7').val();
	if(valeurInscriptionDate7 != null && valeurInscriptionDate7 !== '')
		vals['inscriptionDate7'] = valeurInscriptionDate7;

	var valeurInscriptionDate8 = $formulaireValeurs.find('.valeurInscriptionDate8').val();
	if(valeurInscriptionDate8 != null && valeurInscriptionDate8 !== '')
		vals['inscriptionDate8'] = valeurInscriptionDate8;

	var valeurInscriptionDate9 = $formulaireValeurs.find('.valeurInscriptionDate9').val();
	if(valeurInscriptionDate9 != null && valeurInscriptionDate9 !== '')
		vals['inscriptionDate9'] = valeurInscriptionDate9;

	var valeurInscriptionDate10 = $formulaireValeurs.find('.valeurInscriptionDate10').val();
	if(valeurInscriptionDate10 != null && valeurInscriptionDate10 !== '')
		vals['inscriptionDate10'] = valeurInscriptionDate10;

	putcopieInscriptionScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopieInscriptionScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/inscription/copie?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchInscriptionScolaire($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchInscriptionScolaireFiltres($formulaireFiltres);

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

	var valeurInscriptionApprouve = $formulaireValeurs.find('.valeurInscriptionApprouve').prop('checked');
	if(valeurInscriptionApprouve != null && valeurInscriptionApprouve !== '')
	var removeInscriptionApprouve = $formulaireFiltres.find('.removeInscriptionApprouve').val() === 'true';
	var valeurInscriptionApprouveSelectVal = $formulaireValeurs.find('select.setInscriptionApprouve').val();
	var valeurInscriptionApprouve = null;
	if(valeurInscriptionApprouveSelectVal !== '')
		valeurInscriptionApprouve = valeurInscriptionApprouveSelectVal == 'true';
	setInscriptionApprouve = removeInscriptionApprouve ? null : valeurInscriptionApprouve;
	if(removeInscriptionApprouve || setInscriptionApprouve != null && setInscriptionApprouve !== '')
		vals['setInscriptionApprouve'] = setInscriptionApprouve;
	var addInscriptionApprouve = $formulaireValeurs.find('.addInscriptionApprouve').prop('checked');
	if(addInscriptionApprouve != null && addInscriptionApprouve !== '')
		vals['addInscriptionApprouve'] = addInscriptionApprouve;
	var removeInscriptionApprouve = $formulaireValeurs.find('.removeInscriptionApprouve').prop('checked');
	if(removeInscriptionApprouve != null && removeInscriptionApprouve !== '')
		vals['removeInscriptionApprouve'] = removeInscriptionApprouve;

	var valeurInscriptionImmunisations = $formulaireValeurs.find('.valeurInscriptionImmunisations').prop('checked');
	if(valeurInscriptionImmunisations != null && valeurInscriptionImmunisations !== '')
	var removeInscriptionImmunisations = $formulaireFiltres.find('.removeInscriptionImmunisations').val() === 'true';
	var valeurInscriptionImmunisationsSelectVal = $formulaireValeurs.find('select.setInscriptionImmunisations').val();
	var valeurInscriptionImmunisations = null;
	if(valeurInscriptionImmunisationsSelectVal !== '')
		valeurInscriptionImmunisations = valeurInscriptionImmunisationsSelectVal == 'true';
	setInscriptionImmunisations = removeInscriptionImmunisations ? null : valeurInscriptionImmunisations;
	if(removeInscriptionImmunisations || setInscriptionImmunisations != null && setInscriptionImmunisations !== '')
		vals['setInscriptionImmunisations'] = setInscriptionImmunisations;
	var addInscriptionImmunisations = $formulaireValeurs.find('.addInscriptionImmunisations').prop('checked');
	if(addInscriptionImmunisations != null && addInscriptionImmunisations !== '')
		vals['addInscriptionImmunisations'] = addInscriptionImmunisations;
	var removeInscriptionImmunisations = $formulaireValeurs.find('.removeInscriptionImmunisations').prop('checked');
	if(removeInscriptionImmunisations != null && removeInscriptionImmunisations !== '')
		vals['removeInscriptionImmunisations'] = removeInscriptionImmunisations;

	var valeurInscriptionNomGroupe = $formulaireValeurs.find('.valeurInscriptionNomGroupe').val();
	if(valeurInscriptionNomGroupe != null && valeurInscriptionNomGroupe !== '')
	var removeInscriptionNomGroupe = $formulaireFiltres.find('.removeInscriptionNomGroupe').val() === 'true';
	var setInscriptionNomGroupe = removeInscriptionNomGroupe ? null : $formulaireValeurs.find('.setInscriptionNomGroupe').val();
	if(removeInscriptionNomGroupe || setInscriptionNomGroupe != null && setInscriptionNomGroupe !== '')
		vals['setInscriptionNomGroupe'] = setInscriptionNomGroupe;
	var addInscriptionNomGroupe = $formulaireValeurs.find('.addInscriptionNomGroupe').val();
	if(addInscriptionNomGroupe != null && addInscriptionNomGroupe !== '')
		vals['addInscriptionNomGroupe'] = addInscriptionNomGroupe;
	var removeInscriptionNomGroupe = $formulaireValeurs.find('.removeInscriptionNomGroupe').val();
	if(removeInscriptionNomGroupe != null && removeInscriptionNomGroupe !== '')
		vals['removeInscriptionNomGroupe'] = removeInscriptionNomGroupe;

	var valeurCustomerProfileId = $formulaireValeurs.find('.valeurCustomerProfileId').val();
	if(valeurCustomerProfileId != null && valeurCustomerProfileId !== '')
	var removeCustomerProfileId = $formulaireFiltres.find('.removeCustomerProfileId').val() === 'true';
	var setCustomerProfileId = removeCustomerProfileId ? null : $formulaireValeurs.find('.setCustomerProfileId').val();
	if(removeCustomerProfileId || setCustomerProfileId != null && setCustomerProfileId !== '')
		vals['setCustomerProfileId'] = setCustomerProfileId;
	var addCustomerProfileId = $formulaireValeurs.find('.addCustomerProfileId').val();
	if(addCustomerProfileId != null && addCustomerProfileId !== '')
		vals['addCustomerProfileId'] = addCustomerProfileId;
	var removeCustomerProfileId = $formulaireValeurs.find('.removeCustomerProfileId').val();
	if(removeCustomerProfileId != null && removeCustomerProfileId !== '')
		vals['removeCustomerProfileId'] = removeCustomerProfileId;

	var valeurInscriptionPaimentComplet = $formulaireValeurs.find('.valeurInscriptionPaimentComplet').prop('checked');
	if(valeurInscriptionPaimentComplet != null && valeurInscriptionPaimentComplet !== '')
	var removeInscriptionPaimentComplet = $formulaireFiltres.find('.removeInscriptionPaimentComplet').val() === 'true';
	var valeurInscriptionPaimentCompletSelectVal = $formulaireValeurs.find('select.setInscriptionPaimentComplet').val();
	var valeurInscriptionPaimentComplet = null;
	if(valeurInscriptionPaimentCompletSelectVal !== '')
		valeurInscriptionPaimentComplet = valeurInscriptionPaimentCompletSelectVal == 'true';
	setInscriptionPaimentComplet = removeInscriptionPaimentComplet ? null : valeurInscriptionPaimentComplet;
	if(removeInscriptionPaimentComplet || setInscriptionPaimentComplet != null && setInscriptionPaimentComplet !== '')
		vals['setInscriptionPaimentComplet'] = setInscriptionPaimentComplet;
	var addInscriptionPaimentComplet = $formulaireValeurs.find('.addInscriptionPaimentComplet').prop('checked');
	if(addInscriptionPaimentComplet != null && addInscriptionPaimentComplet !== '')
		vals['addInscriptionPaimentComplet'] = addInscriptionPaimentComplet;
	var removeInscriptionPaimentComplet = $formulaireValeurs.find('.removeInscriptionPaimentComplet').prop('checked');
	if(removeInscriptionPaimentComplet != null && removeInscriptionPaimentComplet !== '')
		vals['removeInscriptionPaimentComplet'] = removeInscriptionPaimentComplet;

	var valeurEnfantPropre = $formulaireValeurs.find('.valeurEnfantPropre').prop('checked');
	if(valeurEnfantPropre != null && valeurEnfantPropre !== '')
	var removeEnfantPropre = $formulaireFiltres.find('.removeEnfantPropre').val() === 'true';
	var valeurEnfantPropreSelectVal = $formulaireValeurs.find('select.setEnfantPropre').val();
	var valeurEnfantPropre = null;
	if(valeurEnfantPropreSelectVal !== '')
		valeurEnfantPropre = valeurEnfantPropreSelectVal == 'true';
	setEnfantPropre = removeEnfantPropre ? null : valeurEnfantPropre;
	if(removeEnfantPropre || setEnfantPropre != null && setEnfantPropre !== '')
		vals['setEnfantPropre'] = setEnfantPropre;
	var addEnfantPropre = $formulaireValeurs.find('.addEnfantPropre').prop('checked');
	if(addEnfantPropre != null && addEnfantPropre !== '')
		vals['addEnfantPropre'] = addEnfantPropre;
	var removeEnfantPropre = $formulaireValeurs.find('.removeEnfantPropre').prop('checked');
	if(removeEnfantPropre != null && removeEnfantPropre !== '')
		vals['removeEnfantPropre'] = removeEnfantPropre;

	var valeurInscriptionPaimentChaqueMois = $formulaireValeurs.find('.valeurInscriptionPaimentChaqueMois').prop('checked');
	if(valeurInscriptionPaimentChaqueMois != null && valeurInscriptionPaimentChaqueMois !== '')
	var removeInscriptionPaimentChaqueMois = $formulaireFiltres.find('.removeInscriptionPaimentChaqueMois').val() === 'true';
	var valeurInscriptionPaimentChaqueMoisSelectVal = $formulaireValeurs.find('select.setInscriptionPaimentChaqueMois').val();
	var valeurInscriptionPaimentChaqueMois = null;
	if(valeurInscriptionPaimentChaqueMoisSelectVal !== '')
		valeurInscriptionPaimentChaqueMois = valeurInscriptionPaimentChaqueMoisSelectVal == 'true';
	setInscriptionPaimentChaqueMois = removeInscriptionPaimentChaqueMois ? null : valeurInscriptionPaimentChaqueMois;
	if(removeInscriptionPaimentChaqueMois || setInscriptionPaimentChaqueMois != null && setInscriptionPaimentChaqueMois !== '')
		vals['setInscriptionPaimentChaqueMois'] = setInscriptionPaimentChaqueMois;
	var addInscriptionPaimentChaqueMois = $formulaireValeurs.find('.addInscriptionPaimentChaqueMois').prop('checked');
	if(addInscriptionPaimentChaqueMois != null && addInscriptionPaimentChaqueMois !== '')
		vals['addInscriptionPaimentChaqueMois'] = addInscriptionPaimentChaqueMois;
	var removeInscriptionPaimentChaqueMois = $formulaireValeurs.find('.removeInscriptionPaimentChaqueMois').prop('checked');
	if(removeInscriptionPaimentChaqueMois != null && removeInscriptionPaimentChaqueMois !== '')
		vals['removeInscriptionPaimentChaqueMois'] = removeInscriptionPaimentChaqueMois;

	var valeurFamilleMarie = $formulaireValeurs.find('.valeurFamilleMarie').prop('checked');
	if(valeurFamilleMarie != null && valeurFamilleMarie !== '')
	var removeFamilleMarie = $formulaireFiltres.find('.removeFamilleMarie').val() === 'true';
	var valeurFamilleMarieSelectVal = $formulaireValeurs.find('select.setFamilleMarie').val();
	var valeurFamilleMarie = null;
	if(valeurFamilleMarieSelectVal !== '')
		valeurFamilleMarie = valeurFamilleMarieSelectVal == 'true';
	setFamilleMarie = removeFamilleMarie ? null : valeurFamilleMarie;
	if(removeFamilleMarie || setFamilleMarie != null && setFamilleMarie !== '')
		vals['setFamilleMarie'] = setFamilleMarie;
	var addFamilleMarie = $formulaireValeurs.find('.addFamilleMarie').prop('checked');
	if(addFamilleMarie != null && addFamilleMarie !== '')
		vals['addFamilleMarie'] = addFamilleMarie;
	var removeFamilleMarie = $formulaireValeurs.find('.removeFamilleMarie').prop('checked');
	if(removeFamilleMarie != null && removeFamilleMarie !== '')
		vals['removeFamilleMarie'] = removeFamilleMarie;

	var valeurFamilleSepare = $formulaireValeurs.find('.valeurFamilleSepare').prop('checked');
	if(valeurFamilleSepare != null && valeurFamilleSepare !== '')
	var removeFamilleSepare = $formulaireFiltres.find('.removeFamilleSepare').val() === 'true';
	var valeurFamilleSepareSelectVal = $formulaireValeurs.find('select.setFamilleSepare').val();
	var valeurFamilleSepare = null;
	if(valeurFamilleSepareSelectVal !== '')
		valeurFamilleSepare = valeurFamilleSepareSelectVal == 'true';
	setFamilleSepare = removeFamilleSepare ? null : valeurFamilleSepare;
	if(removeFamilleSepare || setFamilleSepare != null && setFamilleSepare !== '')
		vals['setFamilleSepare'] = setFamilleSepare;
	var addFamilleSepare = $formulaireValeurs.find('.addFamilleSepare').prop('checked');
	if(addFamilleSepare != null && addFamilleSepare !== '')
		vals['addFamilleSepare'] = addFamilleSepare;
	var removeFamilleSepare = $formulaireValeurs.find('.removeFamilleSepare').prop('checked');
	if(removeFamilleSepare != null && removeFamilleSepare !== '')
		vals['removeFamilleSepare'] = removeFamilleSepare;

	var valeurFamilleDivorce = $formulaireValeurs.find('.valeurFamilleDivorce').prop('checked');
	if(valeurFamilleDivorce != null && valeurFamilleDivorce !== '')
	var removeFamilleDivorce = $formulaireFiltres.find('.removeFamilleDivorce').val() === 'true';
	var valeurFamilleDivorceSelectVal = $formulaireValeurs.find('select.setFamilleDivorce').val();
	var valeurFamilleDivorce = null;
	if(valeurFamilleDivorceSelectVal !== '')
		valeurFamilleDivorce = valeurFamilleDivorceSelectVal == 'true';
	setFamilleDivorce = removeFamilleDivorce ? null : valeurFamilleDivorce;
	if(removeFamilleDivorce || setFamilleDivorce != null && setFamilleDivorce !== '')
		vals['setFamilleDivorce'] = setFamilleDivorce;
	var addFamilleDivorce = $formulaireValeurs.find('.addFamilleDivorce').prop('checked');
	if(addFamilleDivorce != null && addFamilleDivorce !== '')
		vals['addFamilleDivorce'] = addFamilleDivorce;
	var removeFamilleDivorce = $formulaireValeurs.find('.removeFamilleDivorce').prop('checked');
	if(removeFamilleDivorce != null && removeFamilleDivorce !== '')
		vals['removeFamilleDivorce'] = removeFamilleDivorce;

	var valeurFamilleAddresse = $formulaireValeurs.find('.valeurFamilleAddresse').val();
	if(valeurFamilleAddresse != null && valeurFamilleAddresse !== '')
	var removeFamilleAddresse = $formulaireFiltres.find('.removeFamilleAddresse').val() === 'true';
	var setFamilleAddresse = removeFamilleAddresse ? null : $formulaireValeurs.find('.setFamilleAddresse').val();
	if(removeFamilleAddresse || setFamilleAddresse != null && setFamilleAddresse !== '')
		vals['setFamilleAddresse'] = setFamilleAddresse;
	var addFamilleAddresse = $formulaireValeurs.find('.addFamilleAddresse').val();
	if(addFamilleAddresse != null && addFamilleAddresse !== '')
		vals['addFamilleAddresse'] = addFamilleAddresse;
	var removeFamilleAddresse = $formulaireValeurs.find('.removeFamilleAddresse').val();
	if(removeFamilleAddresse != null && removeFamilleAddresse !== '')
		vals['removeFamilleAddresse'] = removeFamilleAddresse;

	var valeurInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.valeurInscriptionConsiderationsSpeciales').val();
	if(valeurInscriptionConsiderationsSpeciales != null && valeurInscriptionConsiderationsSpeciales !== '')
	var removeInscriptionConsiderationsSpeciales = $formulaireFiltres.find('.removeInscriptionConsiderationsSpeciales').val() === 'true';
	var setInscriptionConsiderationsSpeciales = removeInscriptionConsiderationsSpeciales ? null : $formulaireValeurs.find('.setInscriptionConsiderationsSpeciales').val();
	if(removeInscriptionConsiderationsSpeciales || setInscriptionConsiderationsSpeciales != null && setInscriptionConsiderationsSpeciales !== '')
		vals['setInscriptionConsiderationsSpeciales'] = setInscriptionConsiderationsSpeciales;
	var addInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.addInscriptionConsiderationsSpeciales').val();
	if(addInscriptionConsiderationsSpeciales != null && addInscriptionConsiderationsSpeciales !== '')
		vals['addInscriptionConsiderationsSpeciales'] = addInscriptionConsiderationsSpeciales;
	var removeInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.removeInscriptionConsiderationsSpeciales').val();
	if(removeInscriptionConsiderationsSpeciales != null && removeInscriptionConsiderationsSpeciales !== '')
		vals['removeInscriptionConsiderationsSpeciales'] = removeInscriptionConsiderationsSpeciales;

	var valeurEnfantConditionsMedicales = $formulaireValeurs.find('.valeurEnfantConditionsMedicales').val();
	if(valeurEnfantConditionsMedicales != null && valeurEnfantConditionsMedicales !== '')
	var removeEnfantConditionsMedicales = $formulaireFiltres.find('.removeEnfantConditionsMedicales').val() === 'true';
	var setEnfantConditionsMedicales = removeEnfantConditionsMedicales ? null : $formulaireValeurs.find('.setEnfantConditionsMedicales').val();
	if(removeEnfantConditionsMedicales || setEnfantConditionsMedicales != null && setEnfantConditionsMedicales !== '')
		vals['setEnfantConditionsMedicales'] = setEnfantConditionsMedicales;
	var addEnfantConditionsMedicales = $formulaireValeurs.find('.addEnfantConditionsMedicales').val();
	if(addEnfantConditionsMedicales != null && addEnfantConditionsMedicales !== '')
		vals['addEnfantConditionsMedicales'] = addEnfantConditionsMedicales;
	var removeEnfantConditionsMedicales = $formulaireValeurs.find('.removeEnfantConditionsMedicales').val();
	if(removeEnfantConditionsMedicales != null && removeEnfantConditionsMedicales !== '')
		vals['removeEnfantConditionsMedicales'] = removeEnfantConditionsMedicales;

	var valeurEnfantEcolesPrecedemmentFrequentees = $formulaireValeurs.find('.valeurEnfantEcolesPrecedemmentFrequentees').val();
	if(valeurEnfantEcolesPrecedemmentFrequentees != null && valeurEnfantEcolesPrecedemmentFrequentees !== '')
	var removeEnfantEcolesPrecedemmentFrequentees = $formulaireFiltres.find('.removeEnfantEcolesPrecedemmentFrequentees').val() === 'true';
	var setEnfantEcolesPrecedemmentFrequentees = removeEnfantEcolesPrecedemmentFrequentees ? null : $formulaireValeurs.find('.setEnfantEcolesPrecedemmentFrequentees').val();
	if(removeEnfantEcolesPrecedemmentFrequentees || setEnfantEcolesPrecedemmentFrequentees != null && setEnfantEcolesPrecedemmentFrequentees !== '')
		vals['setEnfantEcolesPrecedemmentFrequentees'] = setEnfantEcolesPrecedemmentFrequentees;
	var addEnfantEcolesPrecedemmentFrequentees = $formulaireValeurs.find('.addEnfantEcolesPrecedemmentFrequentees').val();
	if(addEnfantEcolesPrecedemmentFrequentees != null && addEnfantEcolesPrecedemmentFrequentees !== '')
		vals['addEnfantEcolesPrecedemmentFrequentees'] = addEnfantEcolesPrecedemmentFrequentees;
	var removeEnfantEcolesPrecedemmentFrequentees = $formulaireValeurs.find('.removeEnfantEcolesPrecedemmentFrequentees').val();
	if(removeEnfantEcolesPrecedemmentFrequentees != null && removeEnfantEcolesPrecedemmentFrequentees !== '')
		vals['removeEnfantEcolesPrecedemmentFrequentees'] = removeEnfantEcolesPrecedemmentFrequentees;

	var valeurFamilleCommentVousConnaissezEcole = $formulaireValeurs.find('.valeurFamilleCommentVousConnaissezEcole').val();
	if(valeurFamilleCommentVousConnaissezEcole != null && valeurFamilleCommentVousConnaissezEcole !== '')
	var removeFamilleCommentVousConnaissezEcole = $formulaireFiltres.find('.removeFamilleCommentVousConnaissezEcole').val() === 'true';
	var setFamilleCommentVousConnaissezEcole = removeFamilleCommentVousConnaissezEcole ? null : $formulaireValeurs.find('.setFamilleCommentVousConnaissezEcole').val();
	if(removeFamilleCommentVousConnaissezEcole || setFamilleCommentVousConnaissezEcole != null && setFamilleCommentVousConnaissezEcole !== '')
		vals['setFamilleCommentVousConnaissezEcole'] = setFamilleCommentVousConnaissezEcole;
	var addFamilleCommentVousConnaissezEcole = $formulaireValeurs.find('.addFamilleCommentVousConnaissezEcole').val();
	if(addFamilleCommentVousConnaissezEcole != null && addFamilleCommentVousConnaissezEcole !== '')
		vals['addFamilleCommentVousConnaissezEcole'] = addFamilleCommentVousConnaissezEcole;
	var removeFamilleCommentVousConnaissezEcole = $formulaireValeurs.find('.removeFamilleCommentVousConnaissezEcole').val();
	if(removeFamilleCommentVousConnaissezEcole != null && removeFamilleCommentVousConnaissezEcole !== '')
		vals['removeFamilleCommentVousConnaissezEcole'] = removeFamilleCommentVousConnaissezEcole;

	var valeurEnfantDescription = $formulaireValeurs.find('.valeurEnfantDescription').val();
	if(valeurEnfantDescription != null && valeurEnfantDescription !== '')
	var removeEnfantDescription = $formulaireFiltres.find('.removeEnfantDescription').val() === 'true';
	var setEnfantDescription = removeEnfantDescription ? null : $formulaireValeurs.find('.setEnfantDescription').val();
	if(removeEnfantDescription || setEnfantDescription != null && setEnfantDescription !== '')
		vals['setEnfantDescription'] = setEnfantDescription;
	var addEnfantDescription = $formulaireValeurs.find('.addEnfantDescription').val();
	if(addEnfantDescription != null && addEnfantDescription !== '')
		vals['addEnfantDescription'] = addEnfantDescription;
	var removeEnfantDescription = $formulaireValeurs.find('.removeEnfantDescription').val();
	if(removeEnfantDescription != null && removeEnfantDescription !== '')
		vals['removeEnfantDescription'] = removeEnfantDescription;

	var valeurEnfantObjectifs = $formulaireValeurs.find('.valeurEnfantObjectifs').val();
	if(valeurEnfantObjectifs != null && valeurEnfantObjectifs !== '')
	var removeEnfantObjectifs = $formulaireFiltres.find('.removeEnfantObjectifs').val() === 'true';
	var setEnfantObjectifs = removeEnfantObjectifs ? null : $formulaireValeurs.find('.setEnfantObjectifs').val();
	if(removeEnfantObjectifs || setEnfantObjectifs != null && setEnfantObjectifs !== '')
		vals['setEnfantObjectifs'] = setEnfantObjectifs;
	var addEnfantObjectifs = $formulaireValeurs.find('.addEnfantObjectifs').val();
	if(addEnfantObjectifs != null && addEnfantObjectifs !== '')
		vals['addEnfantObjectifs'] = addEnfantObjectifs;
	var removeEnfantObjectifs = $formulaireValeurs.find('.removeEnfantObjectifs').val();
	if(removeEnfantObjectifs != null && removeEnfantObjectifs !== '')
		vals['removeEnfantObjectifs'] = removeEnfantObjectifs;

	var valeurBlocCles = $formulaireValeurs.find('input.valeurBlocCles:checked').val();
	if(valeurBlocCles != null && valeurBlocCles !== '')
		vals['addBlocCles'] = valeurBlocCles;

	var valeurEnfantCle = $formulaireValeurs.find('input.valeurEnfantCle:checked').val();
	if(valeurEnfantCle != null && valeurEnfantCle !== '')
		vals['setEnfantCle'] = valeurEnfantCle;

	var valeurMereCles = $formulaireValeurs.find('input.valeurMereCles:checked').val();
	if(valeurMereCles != null && valeurMereCles !== '')
		vals['addMereCles'] = valeurMereCles;

	var valeurPereCles = $formulaireValeurs.find('input.valeurPereCles:checked').val();
	if(valeurPereCles != null && valeurPereCles !== '')
		vals['addPereCles'] = valeurPereCles;

	var valeurGardienCles = $formulaireValeurs.find('input.valeurGardienCles:checked').val();
	if(valeurGardienCles != null && valeurGardienCles !== '')
		vals['addGardienCles'] = valeurGardienCles;

	var valeurPaiementCles = $formulaireValeurs.find('input.valeurPaiementCles:checked').val();
	if(valeurPaiementCles != null && valeurPaiementCles !== '')
		vals['addPaiementCles'] = valeurPaiementCles;

	var valeurUtilisateurCles = $formulaireValeurs.find('input.valeurUtilisateurCles:checked').val();
	if(valeurUtilisateurCles != null && valeurUtilisateurCles !== '')
		vals['addUtilisateurCles'] = valeurUtilisateurCles;

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

	var valeurSessionId = $formulaireValeurs.find('.valeurSessionId').val();
	if(valeurSessionId != null && valeurSessionId !== '')
	var removeSessionId = $formulaireFiltres.find('.removeSessionId').val() === 'true';
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
	if(valeurUtilisateurId != null && valeurUtilisateurId !== '')
	var removeUtilisateurId = $formulaireFiltres.find('.removeUtilisateurId').val() === 'true';
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
	if(valeurUtilisateurCle != null && valeurUtilisateurCle !== '')
	var removeUtilisateurCle = $formulaireFiltres.find('.removeUtilisateurCle').val() === 'true';
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

	var valeurEnfantNomComplet = $formulaireValeurs.find('.valeurEnfantNomComplet').val();
	if(valeurEnfantNomComplet != null && valeurEnfantNomComplet !== '')
	var removeEnfantNomComplet = $formulaireFiltres.find('.removeEnfantNomComplet').val() === 'true';
	var setEnfantNomComplet = removeEnfantNomComplet ? null : $formulaireValeurs.find('.setEnfantNomComplet').val();
	if(removeEnfantNomComplet || setEnfantNomComplet != null && setEnfantNomComplet !== '')
		vals['setEnfantNomComplet'] = setEnfantNomComplet;
	var addEnfantNomComplet = $formulaireValeurs.find('.addEnfantNomComplet').val();
	if(addEnfantNomComplet != null && addEnfantNomComplet !== '')
		vals['addEnfantNomComplet'] = addEnfantNomComplet;
	var removeEnfantNomComplet = $formulaireValeurs.find('.removeEnfantNomComplet').val();
	if(removeEnfantNomComplet != null && removeEnfantNomComplet !== '')
		vals['removeEnfantNomComplet'] = removeEnfantNomComplet;

	var valeurEnfantNomCompletPrefere = $formulaireValeurs.find('.valeurEnfantNomCompletPrefere').val();
	if(valeurEnfantNomCompletPrefere != null && valeurEnfantNomCompletPrefere !== '')
	var removeEnfantNomCompletPrefere = $formulaireFiltres.find('.removeEnfantNomCompletPrefere').val() === 'true';
	var setEnfantNomCompletPrefere = removeEnfantNomCompletPrefere ? null : $formulaireValeurs.find('.setEnfantNomCompletPrefere').val();
	if(removeEnfantNomCompletPrefere || setEnfantNomCompletPrefere != null && setEnfantNomCompletPrefere !== '')
		vals['setEnfantNomCompletPrefere'] = setEnfantNomCompletPrefere;
	var addEnfantNomCompletPrefere = $formulaireValeurs.find('.addEnfantNomCompletPrefere').val();
	if(addEnfantNomCompletPrefere != null && addEnfantNomCompletPrefere !== '')
		vals['addEnfantNomCompletPrefere'] = addEnfantNomCompletPrefere;
	var removeEnfantNomCompletPrefere = $formulaireValeurs.find('.removeEnfantNomCompletPrefere').val();
	if(removeEnfantNomCompletPrefere != null && removeEnfantNomCompletPrefere !== '')
		vals['removeEnfantNomCompletPrefere'] = removeEnfantNomCompletPrefere;

	var valeurEnfantDateNaissance = $formulaireValeurs.find('.valeurEnfantDateNaissance').val();
	if(valeurEnfantDateNaissance != null && valeurEnfantDateNaissance !== '')
	var removeEnfantDateNaissance = $formulaireFiltres.find('.removeEnfantDateNaissance').val() === 'true';
	var setEnfantDateNaissance = removeEnfantDateNaissance ? null : $formulaireValeurs.find('.setEnfantDateNaissance').val();
	if(removeEnfantDateNaissance || setEnfantDateNaissance != null && setEnfantDateNaissance !== '')
		vals['setEnfantDateNaissance'] = setEnfantDateNaissance;
	var addEnfantDateNaissance = $formulaireValeurs.find('.addEnfantDateNaissance').val();
	if(addEnfantDateNaissance != null && addEnfantDateNaissance !== '')
		vals['addEnfantDateNaissance'] = addEnfantDateNaissance;
	var removeEnfantDateNaissance = $formulaireValeurs.find('.removeEnfantDateNaissance').val();
	if(removeEnfantDateNaissance != null && removeEnfantDateNaissance !== '')
		vals['removeEnfantDateNaissance'] = removeEnfantDateNaissance;

	var valeurEcoleAddresse = $formulaireValeurs.find('.valeurEcoleAddresse').val();
	if(valeurEcoleAddresse != null && valeurEcoleAddresse !== '')
	var removeEcoleAddresse = $formulaireFiltres.find('.removeEcoleAddresse').val() === 'true';
	var setEcoleAddresse = removeEcoleAddresse ? null : $formulaireValeurs.find('.setEcoleAddresse').val();
	if(removeEcoleAddresse || setEcoleAddresse != null && setEcoleAddresse !== '')
		vals['setEcoleAddresse'] = setEcoleAddresse;
	var addEcoleAddresse = $formulaireValeurs.find('.addEcoleAddresse').val();
	if(addEcoleAddresse != null && addEcoleAddresse !== '')
		vals['addEcoleAddresse'] = addEcoleAddresse;
	var removeEcoleAddresse = $formulaireValeurs.find('.removeEcoleAddresse').val();
	if(removeEcoleAddresse != null && removeEcoleAddresse !== '')
		vals['removeEcoleAddresse'] = removeEcoleAddresse;

	var valeurInscriptionDateFrais = $formulaireValeurs.find('.valeurInscriptionDateFrais').val();
	if(valeurInscriptionDateFrais != null && valeurInscriptionDateFrais !== '')
	var removeInscriptionDateFrais = $formulaireFiltres.find('.removeInscriptionDateFrais').val() === 'true';
	var setInscriptionDateFrais = removeInscriptionDateFrais ? null : $formulaireValeurs.find('.setInscriptionDateFrais').val();
	if(removeInscriptionDateFrais || setInscriptionDateFrais != null && setInscriptionDateFrais !== '')
		vals['setInscriptionDateFrais'] = setInscriptionDateFrais;
	var addInscriptionDateFrais = $formulaireValeurs.find('.addInscriptionDateFrais').val();
	if(addInscriptionDateFrais != null && addInscriptionDateFrais !== '')
		vals['addInscriptionDateFrais'] = addInscriptionDateFrais;
	var removeInscriptionDateFrais = $formulaireValeurs.find('.removeInscriptionDateFrais').val();
	if(removeInscriptionDateFrais != null && removeInscriptionDateFrais !== '')
		vals['removeInscriptionDateFrais'] = removeInscriptionDateFrais;

	var valeurInscriptionSignature1 = $formulaireValeurs.find('.valeurInscriptionSignature1').val();
	if(valeurInscriptionSignature1 != null && valeurInscriptionSignature1 !== '')
	var removeInscriptionSignature1 = $formulaireFiltres.find('.removeInscriptionSignature1').val() === 'true';
	var setInscriptionSignature1 = removeInscriptionSignature1 ? null : $formulaireValeurs.find('.setInscriptionSignature1').val();
	if(removeInscriptionSignature1 || setInscriptionSignature1 != null && setInscriptionSignature1 !== '')
		vals['setInscriptionSignature1'] = setInscriptionSignature1;
	var addInscriptionSignature1 = $formulaireValeurs.find('.addInscriptionSignature1').val();
	if(addInscriptionSignature1 != null && addInscriptionSignature1 !== '')
		vals['addInscriptionSignature1'] = addInscriptionSignature1;
	var removeInscriptionSignature1 = $formulaireValeurs.find('.removeInscriptionSignature1').val();
	if(removeInscriptionSignature1 != null && removeInscriptionSignature1 !== '')
		vals['removeInscriptionSignature1'] = removeInscriptionSignature1;

	var valeurInscriptionSignature2 = $formulaireValeurs.find('.valeurInscriptionSignature2').val();
	if(valeurInscriptionSignature2 != null && valeurInscriptionSignature2 !== '')
	var removeInscriptionSignature2 = $formulaireFiltres.find('.removeInscriptionSignature2').val() === 'true';
	var setInscriptionSignature2 = removeInscriptionSignature2 ? null : $formulaireValeurs.find('.setInscriptionSignature2').val();
	if(removeInscriptionSignature2 || setInscriptionSignature2 != null && setInscriptionSignature2 !== '')
		vals['setInscriptionSignature2'] = setInscriptionSignature2;
	var addInscriptionSignature2 = $formulaireValeurs.find('.addInscriptionSignature2').val();
	if(addInscriptionSignature2 != null && addInscriptionSignature2 !== '')
		vals['addInscriptionSignature2'] = addInscriptionSignature2;
	var removeInscriptionSignature2 = $formulaireValeurs.find('.removeInscriptionSignature2').val();
	if(removeInscriptionSignature2 != null && removeInscriptionSignature2 !== '')
		vals['removeInscriptionSignature2'] = removeInscriptionSignature2;

	var valeurInscriptionSignature3 = $formulaireValeurs.find('.valeurInscriptionSignature3').val();
	if(valeurInscriptionSignature3 != null && valeurInscriptionSignature3 !== '')
	var removeInscriptionSignature3 = $formulaireFiltres.find('.removeInscriptionSignature3').val() === 'true';
	var setInscriptionSignature3 = removeInscriptionSignature3 ? null : $formulaireValeurs.find('.setInscriptionSignature3').val();
	if(removeInscriptionSignature3 || setInscriptionSignature3 != null && setInscriptionSignature3 !== '')
		vals['setInscriptionSignature3'] = setInscriptionSignature3;
	var addInscriptionSignature3 = $formulaireValeurs.find('.addInscriptionSignature3').val();
	if(addInscriptionSignature3 != null && addInscriptionSignature3 !== '')
		vals['addInscriptionSignature3'] = addInscriptionSignature3;
	var removeInscriptionSignature3 = $formulaireValeurs.find('.removeInscriptionSignature3').val();
	if(removeInscriptionSignature3 != null && removeInscriptionSignature3 !== '')
		vals['removeInscriptionSignature3'] = removeInscriptionSignature3;

	var valeurInscriptionSignature4 = $formulaireValeurs.find('.valeurInscriptionSignature4').val();
	if(valeurInscriptionSignature4 != null && valeurInscriptionSignature4 !== '')
	var removeInscriptionSignature4 = $formulaireFiltres.find('.removeInscriptionSignature4').val() === 'true';
	var setInscriptionSignature4 = removeInscriptionSignature4 ? null : $formulaireValeurs.find('.setInscriptionSignature4').val();
	if(removeInscriptionSignature4 || setInscriptionSignature4 != null && setInscriptionSignature4 !== '')
		vals['setInscriptionSignature4'] = setInscriptionSignature4;
	var addInscriptionSignature4 = $formulaireValeurs.find('.addInscriptionSignature4').val();
	if(addInscriptionSignature4 != null && addInscriptionSignature4 !== '')
		vals['addInscriptionSignature4'] = addInscriptionSignature4;
	var removeInscriptionSignature4 = $formulaireValeurs.find('.removeInscriptionSignature4').val();
	if(removeInscriptionSignature4 != null && removeInscriptionSignature4 !== '')
		vals['removeInscriptionSignature4'] = removeInscriptionSignature4;

	var valeurInscriptionSignature5 = $formulaireValeurs.find('.valeurInscriptionSignature5').val();
	if(valeurInscriptionSignature5 != null && valeurInscriptionSignature5 !== '')
	var removeInscriptionSignature5 = $formulaireFiltres.find('.removeInscriptionSignature5').val() === 'true';
	var setInscriptionSignature5 = removeInscriptionSignature5 ? null : $formulaireValeurs.find('.setInscriptionSignature5').val();
	if(removeInscriptionSignature5 || setInscriptionSignature5 != null && setInscriptionSignature5 !== '')
		vals['setInscriptionSignature5'] = setInscriptionSignature5;
	var addInscriptionSignature5 = $formulaireValeurs.find('.addInscriptionSignature5').val();
	if(addInscriptionSignature5 != null && addInscriptionSignature5 !== '')
		vals['addInscriptionSignature5'] = addInscriptionSignature5;
	var removeInscriptionSignature5 = $formulaireValeurs.find('.removeInscriptionSignature5').val();
	if(removeInscriptionSignature5 != null && removeInscriptionSignature5 !== '')
		vals['removeInscriptionSignature5'] = removeInscriptionSignature5;

	var valeurInscriptionSignature6 = $formulaireValeurs.find('.valeurInscriptionSignature6').val();
	if(valeurInscriptionSignature6 != null && valeurInscriptionSignature6 !== '')
	var removeInscriptionSignature6 = $formulaireFiltres.find('.removeInscriptionSignature6').val() === 'true';
	var setInscriptionSignature6 = removeInscriptionSignature6 ? null : $formulaireValeurs.find('.setInscriptionSignature6').val();
	if(removeInscriptionSignature6 || setInscriptionSignature6 != null && setInscriptionSignature6 !== '')
		vals['setInscriptionSignature6'] = setInscriptionSignature6;
	var addInscriptionSignature6 = $formulaireValeurs.find('.addInscriptionSignature6').val();
	if(addInscriptionSignature6 != null && addInscriptionSignature6 !== '')
		vals['addInscriptionSignature6'] = addInscriptionSignature6;
	var removeInscriptionSignature6 = $formulaireValeurs.find('.removeInscriptionSignature6').val();
	if(removeInscriptionSignature6 != null && removeInscriptionSignature6 !== '')
		vals['removeInscriptionSignature6'] = removeInscriptionSignature6;

	var valeurInscriptionSignature7 = $formulaireValeurs.find('.valeurInscriptionSignature7').val();
	if(valeurInscriptionSignature7 != null && valeurInscriptionSignature7 !== '')
	var removeInscriptionSignature7 = $formulaireFiltres.find('.removeInscriptionSignature7').val() === 'true';
	var setInscriptionSignature7 = removeInscriptionSignature7 ? null : $formulaireValeurs.find('.setInscriptionSignature7').val();
	if(removeInscriptionSignature7 || setInscriptionSignature7 != null && setInscriptionSignature7 !== '')
		vals['setInscriptionSignature7'] = setInscriptionSignature7;
	var addInscriptionSignature7 = $formulaireValeurs.find('.addInscriptionSignature7').val();
	if(addInscriptionSignature7 != null && addInscriptionSignature7 !== '')
		vals['addInscriptionSignature7'] = addInscriptionSignature7;
	var removeInscriptionSignature7 = $formulaireValeurs.find('.removeInscriptionSignature7').val();
	if(removeInscriptionSignature7 != null && removeInscriptionSignature7 !== '')
		vals['removeInscriptionSignature7'] = removeInscriptionSignature7;

	var valeurInscriptionSignature8 = $formulaireValeurs.find('.valeurInscriptionSignature8').val();
	if(valeurInscriptionSignature8 != null && valeurInscriptionSignature8 !== '')
	var removeInscriptionSignature8 = $formulaireFiltres.find('.removeInscriptionSignature8').val() === 'true';
	var setInscriptionSignature8 = removeInscriptionSignature8 ? null : $formulaireValeurs.find('.setInscriptionSignature8').val();
	if(removeInscriptionSignature8 || setInscriptionSignature8 != null && setInscriptionSignature8 !== '')
		vals['setInscriptionSignature8'] = setInscriptionSignature8;
	var addInscriptionSignature8 = $formulaireValeurs.find('.addInscriptionSignature8').val();
	if(addInscriptionSignature8 != null && addInscriptionSignature8 !== '')
		vals['addInscriptionSignature8'] = addInscriptionSignature8;
	var removeInscriptionSignature8 = $formulaireValeurs.find('.removeInscriptionSignature8').val();
	if(removeInscriptionSignature8 != null && removeInscriptionSignature8 !== '')
		vals['removeInscriptionSignature8'] = removeInscriptionSignature8;

	var valeurInscriptionSignature9 = $formulaireValeurs.find('.valeurInscriptionSignature9').val();
	if(valeurInscriptionSignature9 != null && valeurInscriptionSignature9 !== '')
	var removeInscriptionSignature9 = $formulaireFiltres.find('.removeInscriptionSignature9').val() === 'true';
	var setInscriptionSignature9 = removeInscriptionSignature9 ? null : $formulaireValeurs.find('.setInscriptionSignature9').val();
	if(removeInscriptionSignature9 || setInscriptionSignature9 != null && setInscriptionSignature9 !== '')
		vals['setInscriptionSignature9'] = setInscriptionSignature9;
	var addInscriptionSignature9 = $formulaireValeurs.find('.addInscriptionSignature9').val();
	if(addInscriptionSignature9 != null && addInscriptionSignature9 !== '')
		vals['addInscriptionSignature9'] = addInscriptionSignature9;
	var removeInscriptionSignature9 = $formulaireValeurs.find('.removeInscriptionSignature9').val();
	if(removeInscriptionSignature9 != null && removeInscriptionSignature9 !== '')
		vals['removeInscriptionSignature9'] = removeInscriptionSignature9;

	var valeurInscriptionSignature10 = $formulaireValeurs.find('.valeurInscriptionSignature10').val();
	if(valeurInscriptionSignature10 != null && valeurInscriptionSignature10 !== '')
	var removeInscriptionSignature10 = $formulaireFiltres.find('.removeInscriptionSignature10').val() === 'true';
	var setInscriptionSignature10 = removeInscriptionSignature10 ? null : $formulaireValeurs.find('.setInscriptionSignature10').val();
	if(removeInscriptionSignature10 || setInscriptionSignature10 != null && setInscriptionSignature10 !== '')
		vals['setInscriptionSignature10'] = setInscriptionSignature10;
	var addInscriptionSignature10 = $formulaireValeurs.find('.addInscriptionSignature10').val();
	if(addInscriptionSignature10 != null && addInscriptionSignature10 !== '')
		vals['addInscriptionSignature10'] = addInscriptionSignature10;
	var removeInscriptionSignature10 = $formulaireValeurs.find('.removeInscriptionSignature10').val();
	if(removeInscriptionSignature10 != null && removeInscriptionSignature10 !== '')
		vals['removeInscriptionSignature10'] = removeInscriptionSignature10;

	var valeurInscriptionDate1 = $formulaireValeurs.find('.valeurInscriptionDate1').val();
	if(valeurInscriptionDate1 != null && valeurInscriptionDate1 !== '')
	var removeInscriptionDate1 = $formulaireFiltres.find('.removeInscriptionDate1').val() === 'true';
	var setInscriptionDate1 = removeInscriptionDate1 ? null : $formulaireValeurs.find('.setInscriptionDate1').val();
	if(removeInscriptionDate1 || setInscriptionDate1 != null && setInscriptionDate1 !== '')
		vals['setInscriptionDate1'] = setInscriptionDate1;
	var addInscriptionDate1 = $formulaireValeurs.find('.addInscriptionDate1').val();
	if(addInscriptionDate1 != null && addInscriptionDate1 !== '')
		vals['addInscriptionDate1'] = addInscriptionDate1;
	var removeInscriptionDate1 = $formulaireValeurs.find('.removeInscriptionDate1').val();
	if(removeInscriptionDate1 != null && removeInscriptionDate1 !== '')
		vals['removeInscriptionDate1'] = removeInscriptionDate1;

	var valeurInscriptionDate2 = $formulaireValeurs.find('.valeurInscriptionDate2').val();
	if(valeurInscriptionDate2 != null && valeurInscriptionDate2 !== '')
	var removeInscriptionDate2 = $formulaireFiltres.find('.removeInscriptionDate2').val() === 'true';
	var setInscriptionDate2 = removeInscriptionDate2 ? null : $formulaireValeurs.find('.setInscriptionDate2').val();
	if(removeInscriptionDate2 || setInscriptionDate2 != null && setInscriptionDate2 !== '')
		vals['setInscriptionDate2'] = setInscriptionDate2;
	var addInscriptionDate2 = $formulaireValeurs.find('.addInscriptionDate2').val();
	if(addInscriptionDate2 != null && addInscriptionDate2 !== '')
		vals['addInscriptionDate2'] = addInscriptionDate2;
	var removeInscriptionDate2 = $formulaireValeurs.find('.removeInscriptionDate2').val();
	if(removeInscriptionDate2 != null && removeInscriptionDate2 !== '')
		vals['removeInscriptionDate2'] = removeInscriptionDate2;

	var valeurInscriptionDate3 = $formulaireValeurs.find('.valeurInscriptionDate3').val();
	if(valeurInscriptionDate3 != null && valeurInscriptionDate3 !== '')
	var removeInscriptionDate3 = $formulaireFiltres.find('.removeInscriptionDate3').val() === 'true';
	var setInscriptionDate3 = removeInscriptionDate3 ? null : $formulaireValeurs.find('.setInscriptionDate3').val();
	if(removeInscriptionDate3 || setInscriptionDate3 != null && setInscriptionDate3 !== '')
		vals['setInscriptionDate3'] = setInscriptionDate3;
	var addInscriptionDate3 = $formulaireValeurs.find('.addInscriptionDate3').val();
	if(addInscriptionDate3 != null && addInscriptionDate3 !== '')
		vals['addInscriptionDate3'] = addInscriptionDate3;
	var removeInscriptionDate3 = $formulaireValeurs.find('.removeInscriptionDate3').val();
	if(removeInscriptionDate3 != null && removeInscriptionDate3 !== '')
		vals['removeInscriptionDate3'] = removeInscriptionDate3;

	var valeurInscriptionDate4 = $formulaireValeurs.find('.valeurInscriptionDate4').val();
	if(valeurInscriptionDate4 != null && valeurInscriptionDate4 !== '')
	var removeInscriptionDate4 = $formulaireFiltres.find('.removeInscriptionDate4').val() === 'true';
	var setInscriptionDate4 = removeInscriptionDate4 ? null : $formulaireValeurs.find('.setInscriptionDate4').val();
	if(removeInscriptionDate4 || setInscriptionDate4 != null && setInscriptionDate4 !== '')
		vals['setInscriptionDate4'] = setInscriptionDate4;
	var addInscriptionDate4 = $formulaireValeurs.find('.addInscriptionDate4').val();
	if(addInscriptionDate4 != null && addInscriptionDate4 !== '')
		vals['addInscriptionDate4'] = addInscriptionDate4;
	var removeInscriptionDate4 = $formulaireValeurs.find('.removeInscriptionDate4').val();
	if(removeInscriptionDate4 != null && removeInscriptionDate4 !== '')
		vals['removeInscriptionDate4'] = removeInscriptionDate4;

	var valeurInscriptionDate5 = $formulaireValeurs.find('.valeurInscriptionDate5').val();
	if(valeurInscriptionDate5 != null && valeurInscriptionDate5 !== '')
	var removeInscriptionDate5 = $formulaireFiltres.find('.removeInscriptionDate5').val() === 'true';
	var setInscriptionDate5 = removeInscriptionDate5 ? null : $formulaireValeurs.find('.setInscriptionDate5').val();
	if(removeInscriptionDate5 || setInscriptionDate5 != null && setInscriptionDate5 !== '')
		vals['setInscriptionDate5'] = setInscriptionDate5;
	var addInscriptionDate5 = $formulaireValeurs.find('.addInscriptionDate5').val();
	if(addInscriptionDate5 != null && addInscriptionDate5 !== '')
		vals['addInscriptionDate5'] = addInscriptionDate5;
	var removeInscriptionDate5 = $formulaireValeurs.find('.removeInscriptionDate5').val();
	if(removeInscriptionDate5 != null && removeInscriptionDate5 !== '')
		vals['removeInscriptionDate5'] = removeInscriptionDate5;

	var valeurInscriptionDate6 = $formulaireValeurs.find('.valeurInscriptionDate6').val();
	if(valeurInscriptionDate6 != null && valeurInscriptionDate6 !== '')
	var removeInscriptionDate6 = $formulaireFiltres.find('.removeInscriptionDate6').val() === 'true';
	var setInscriptionDate6 = removeInscriptionDate6 ? null : $formulaireValeurs.find('.setInscriptionDate6').val();
	if(removeInscriptionDate6 || setInscriptionDate6 != null && setInscriptionDate6 !== '')
		vals['setInscriptionDate6'] = setInscriptionDate6;
	var addInscriptionDate6 = $formulaireValeurs.find('.addInscriptionDate6').val();
	if(addInscriptionDate6 != null && addInscriptionDate6 !== '')
		vals['addInscriptionDate6'] = addInscriptionDate6;
	var removeInscriptionDate6 = $formulaireValeurs.find('.removeInscriptionDate6').val();
	if(removeInscriptionDate6 != null && removeInscriptionDate6 !== '')
		vals['removeInscriptionDate6'] = removeInscriptionDate6;

	var valeurInscriptionDate7 = $formulaireValeurs.find('.valeurInscriptionDate7').val();
	if(valeurInscriptionDate7 != null && valeurInscriptionDate7 !== '')
	var removeInscriptionDate7 = $formulaireFiltres.find('.removeInscriptionDate7').val() === 'true';
	var setInscriptionDate7 = removeInscriptionDate7 ? null : $formulaireValeurs.find('.setInscriptionDate7').val();
	if(removeInscriptionDate7 || setInscriptionDate7 != null && setInscriptionDate7 !== '')
		vals['setInscriptionDate7'] = setInscriptionDate7;
	var addInscriptionDate7 = $formulaireValeurs.find('.addInscriptionDate7').val();
	if(addInscriptionDate7 != null && addInscriptionDate7 !== '')
		vals['addInscriptionDate7'] = addInscriptionDate7;
	var removeInscriptionDate7 = $formulaireValeurs.find('.removeInscriptionDate7').val();
	if(removeInscriptionDate7 != null && removeInscriptionDate7 !== '')
		vals['removeInscriptionDate7'] = removeInscriptionDate7;

	var valeurInscriptionDate8 = $formulaireValeurs.find('.valeurInscriptionDate8').val();
	if(valeurInscriptionDate8 != null && valeurInscriptionDate8 !== '')
	var removeInscriptionDate8 = $formulaireFiltres.find('.removeInscriptionDate8').val() === 'true';
	var setInscriptionDate8 = removeInscriptionDate8 ? null : $formulaireValeurs.find('.setInscriptionDate8').val();
	if(removeInscriptionDate8 || setInscriptionDate8 != null && setInscriptionDate8 !== '')
		vals['setInscriptionDate8'] = setInscriptionDate8;
	var addInscriptionDate8 = $formulaireValeurs.find('.addInscriptionDate8').val();
	if(addInscriptionDate8 != null && addInscriptionDate8 !== '')
		vals['addInscriptionDate8'] = addInscriptionDate8;
	var removeInscriptionDate8 = $formulaireValeurs.find('.removeInscriptionDate8').val();
	if(removeInscriptionDate8 != null && removeInscriptionDate8 !== '')
		vals['removeInscriptionDate8'] = removeInscriptionDate8;

	var valeurInscriptionDate9 = $formulaireValeurs.find('.valeurInscriptionDate9').val();
	if(valeurInscriptionDate9 != null && valeurInscriptionDate9 !== '')
	var removeInscriptionDate9 = $formulaireFiltres.find('.removeInscriptionDate9').val() === 'true';
	var setInscriptionDate9 = removeInscriptionDate9 ? null : $formulaireValeurs.find('.setInscriptionDate9').val();
	if(removeInscriptionDate9 || setInscriptionDate9 != null && setInscriptionDate9 !== '')
		vals['setInscriptionDate9'] = setInscriptionDate9;
	var addInscriptionDate9 = $formulaireValeurs.find('.addInscriptionDate9').val();
	if(addInscriptionDate9 != null && addInscriptionDate9 !== '')
		vals['addInscriptionDate9'] = addInscriptionDate9;
	var removeInscriptionDate9 = $formulaireValeurs.find('.removeInscriptionDate9').val();
	if(removeInscriptionDate9 != null && removeInscriptionDate9 !== '')
		vals['removeInscriptionDate9'] = removeInscriptionDate9;

	var valeurInscriptionDate10 = $formulaireValeurs.find('.valeurInscriptionDate10').val();
	if(valeurInscriptionDate10 != null && valeurInscriptionDate10 !== '')
	var removeInscriptionDate10 = $formulaireFiltres.find('.removeInscriptionDate10').val() === 'true';
	var setInscriptionDate10 = removeInscriptionDate10 ? null : $formulaireValeurs.find('.setInscriptionDate10').val();
	if(removeInscriptionDate10 || setInscriptionDate10 != null && setInscriptionDate10 !== '')
		vals['setInscriptionDate10'] = setInscriptionDate10;
	var addInscriptionDate10 = $formulaireValeurs.find('.addInscriptionDate10').val();
	if(addInscriptionDate10 != null && addInscriptionDate10 !== '')
		vals['addInscriptionDate10'] = addInscriptionDate10;
	var removeInscriptionDate10 = $formulaireValeurs.find('.removeInscriptionDate10').val();
	if(removeInscriptionDate10 != null && removeInscriptionDate10 !== '')
		vals['removeInscriptionDate10'] = removeInscriptionDate10;

	patchInscriptionScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchInscriptionScolaireFiltres($formulaireFiltres) {
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

		var $filtreInscriptionApprouveCheckbox = $formulaireFiltres.find('input.valeurInscriptionApprouve[type = "checkbox"]');
		var $filtreInscriptionApprouveSelect = $formulaireFiltres.find('select.valeurInscriptionApprouve');
		var filtreInscriptionApprouve = $filtreInscriptionApprouveSelect.length ? $filtreInscriptionApprouveSelect.val() : $filtreInscriptionApprouveCheckbox.prop('checked');
		var filtreInscriptionApprouveSelectVal = $formulaireFiltres.find('select.filtreInscriptionApprouve').val();
		var filtreInscriptionApprouve = null;
		if(filtreInscriptionApprouveSelectVal !== '')
			filtreInscriptionApprouve = filtreInscriptionApprouveSelectVal == 'true';
		if(filtreInscriptionApprouve != null && filtreInscriptionApprouve === true)
			filtres.push({ name: 'fq', value: 'inscriptionApprouve:' + filtreInscriptionApprouve });

		var $filtreInscriptionImmunisationsCheckbox = $formulaireFiltres.find('input.valeurInscriptionImmunisations[type = "checkbox"]');
		var $filtreInscriptionImmunisationsSelect = $formulaireFiltres.find('select.valeurInscriptionImmunisations');
		var filtreInscriptionImmunisations = $filtreInscriptionImmunisationsSelect.length ? $filtreInscriptionImmunisationsSelect.val() : $filtreInscriptionImmunisationsCheckbox.prop('checked');
		var filtreInscriptionImmunisationsSelectVal = $formulaireFiltres.find('select.filtreInscriptionImmunisations').val();
		var filtreInscriptionImmunisations = null;
		if(filtreInscriptionImmunisationsSelectVal !== '')
			filtreInscriptionImmunisations = filtreInscriptionImmunisationsSelectVal == 'true';
		if(filtreInscriptionImmunisations != null && filtreInscriptionImmunisations === true)
			filtres.push({ name: 'fq', value: 'inscriptionImmunisations:' + filtreInscriptionImmunisations });

		var filtreInscriptionNomGroupe = $formulaireFiltres.find('.valeurInscriptionNomGroupe').val();
		if(filtreInscriptionNomGroupe != null && filtreInscriptionNomGroupe !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNomGroupe:' + filtreInscriptionNomGroupe });

		var filtreCustomerProfileId = $formulaireFiltres.find('.valeurCustomerProfileId').val();
		if(filtreCustomerProfileId != null && filtreCustomerProfileId !== '')
			filtres.push({ name: 'fq', value: 'customerProfileId:' + filtreCustomerProfileId });

		var $filtreInscriptionPaimentCompletCheckbox = $formulaireFiltres.find('input.valeurInscriptionPaimentComplet[type = "checkbox"]');
		var $filtreInscriptionPaimentCompletSelect = $formulaireFiltres.find('select.valeurInscriptionPaimentComplet');
		var filtreInscriptionPaimentComplet = $filtreInscriptionPaimentCompletSelect.length ? $filtreInscriptionPaimentCompletSelect.val() : $filtreInscriptionPaimentCompletCheckbox.prop('checked');
		var filtreInscriptionPaimentCompletSelectVal = $formulaireFiltres.find('select.filtreInscriptionPaimentComplet').val();
		var filtreInscriptionPaimentComplet = null;
		if(filtreInscriptionPaimentCompletSelectVal !== '')
			filtreInscriptionPaimentComplet = filtreInscriptionPaimentCompletSelectVal == 'true';
		if(filtreInscriptionPaimentComplet != null && filtreInscriptionPaimentComplet === true)
			filtres.push({ name: 'fq', value: 'inscriptionPaimentComplet:' + filtreInscriptionPaimentComplet });

		var $filtreEnfantPropreCheckbox = $formulaireFiltres.find('input.valeurEnfantPropre[type = "checkbox"]');
		var $filtreEnfantPropreSelect = $formulaireFiltres.find('select.valeurEnfantPropre');
		var filtreEnfantPropre = $filtreEnfantPropreSelect.length ? $filtreEnfantPropreSelect.val() : $filtreEnfantPropreCheckbox.prop('checked');
		var filtreEnfantPropreSelectVal = $formulaireFiltres.find('select.filtreEnfantPropre').val();
		var filtreEnfantPropre = null;
		if(filtreEnfantPropreSelectVal !== '')
			filtreEnfantPropre = filtreEnfantPropreSelectVal == 'true';
		if(filtreEnfantPropre != null && filtreEnfantPropre === true)
			filtres.push({ name: 'fq', value: 'enfantPropre:' + filtreEnfantPropre });

		var $filtreInscriptionPaimentChaqueMoisCheckbox = $formulaireFiltres.find('input.valeurInscriptionPaimentChaqueMois[type = "checkbox"]');
		var $filtreInscriptionPaimentChaqueMoisSelect = $formulaireFiltres.find('select.valeurInscriptionPaimentChaqueMois');
		var filtreInscriptionPaimentChaqueMois = $filtreInscriptionPaimentChaqueMoisSelect.length ? $filtreInscriptionPaimentChaqueMoisSelect.val() : $filtreInscriptionPaimentChaqueMoisCheckbox.prop('checked');
		var filtreInscriptionPaimentChaqueMoisSelectVal = $formulaireFiltres.find('select.filtreInscriptionPaimentChaqueMois').val();
		var filtreInscriptionPaimentChaqueMois = null;
		if(filtreInscriptionPaimentChaqueMoisSelectVal !== '')
			filtreInscriptionPaimentChaqueMois = filtreInscriptionPaimentChaqueMoisSelectVal == 'true';
		if(filtreInscriptionPaimentChaqueMois != null && filtreInscriptionPaimentChaqueMois === true)
			filtres.push({ name: 'fq', value: 'inscriptionPaimentChaqueMois:' + filtreInscriptionPaimentChaqueMois });

		var $filtreFamilleMarieCheckbox = $formulaireFiltres.find('input.valeurFamilleMarie[type = "checkbox"]');
		var $filtreFamilleMarieSelect = $formulaireFiltres.find('select.valeurFamilleMarie');
		var filtreFamilleMarie = $filtreFamilleMarieSelect.length ? $filtreFamilleMarieSelect.val() : $filtreFamilleMarieCheckbox.prop('checked');
		var filtreFamilleMarieSelectVal = $formulaireFiltres.find('select.filtreFamilleMarie').val();
		var filtreFamilleMarie = null;
		if(filtreFamilleMarieSelectVal !== '')
			filtreFamilleMarie = filtreFamilleMarieSelectVal == 'true';
		if(filtreFamilleMarie != null && filtreFamilleMarie === true)
			filtres.push({ name: 'fq', value: 'familleMarie:' + filtreFamilleMarie });

		var $filtreFamilleSepareCheckbox = $formulaireFiltres.find('input.valeurFamilleSepare[type = "checkbox"]');
		var $filtreFamilleSepareSelect = $formulaireFiltres.find('select.valeurFamilleSepare');
		var filtreFamilleSepare = $filtreFamilleSepareSelect.length ? $filtreFamilleSepareSelect.val() : $filtreFamilleSepareCheckbox.prop('checked');
		var filtreFamilleSepareSelectVal = $formulaireFiltres.find('select.filtreFamilleSepare').val();
		var filtreFamilleSepare = null;
		if(filtreFamilleSepareSelectVal !== '')
			filtreFamilleSepare = filtreFamilleSepareSelectVal == 'true';
		if(filtreFamilleSepare != null && filtreFamilleSepare === true)
			filtres.push({ name: 'fq', value: 'familleSepare:' + filtreFamilleSepare });

		var $filtreFamilleDivorceCheckbox = $formulaireFiltres.find('input.valeurFamilleDivorce[type = "checkbox"]');
		var $filtreFamilleDivorceSelect = $formulaireFiltres.find('select.valeurFamilleDivorce');
		var filtreFamilleDivorce = $filtreFamilleDivorceSelect.length ? $filtreFamilleDivorceSelect.val() : $filtreFamilleDivorceCheckbox.prop('checked');
		var filtreFamilleDivorceSelectVal = $formulaireFiltres.find('select.filtreFamilleDivorce').val();
		var filtreFamilleDivorce = null;
		if(filtreFamilleDivorceSelectVal !== '')
			filtreFamilleDivorce = filtreFamilleDivorceSelectVal == 'true';
		if(filtreFamilleDivorce != null && filtreFamilleDivorce === true)
			filtres.push({ name: 'fq', value: 'familleDivorce:' + filtreFamilleDivorce });

		var filtreFamilleAddresse = $formulaireFiltres.find('.valeurFamilleAddresse').val();
		if(filtreFamilleAddresse != null && filtreFamilleAddresse !== '')
			filtres.push({ name: 'fq', value: 'familleAddresse:' + filtreFamilleAddresse });

		var filtreInscriptionConsiderationsSpeciales = $formulaireFiltres.find('.valeurInscriptionConsiderationsSpeciales').val();
		if(filtreInscriptionConsiderationsSpeciales != null && filtreInscriptionConsiderationsSpeciales !== '')
			filtres.push({ name: 'fq', value: 'inscriptionConsiderationsSpeciales:' + filtreInscriptionConsiderationsSpeciales });

		var filtreEnfantConditionsMedicales = $formulaireFiltres.find('.valeurEnfantConditionsMedicales').val();
		if(filtreEnfantConditionsMedicales != null && filtreEnfantConditionsMedicales !== '')
			filtres.push({ name: 'fq', value: 'enfantConditionsMedicales:' + filtreEnfantConditionsMedicales });

		var filtreEnfantEcolesPrecedemmentFrequentees = $formulaireFiltres.find('.valeurEnfantEcolesPrecedemmentFrequentees').val();
		if(filtreEnfantEcolesPrecedemmentFrequentees != null && filtreEnfantEcolesPrecedemmentFrequentees !== '')
			filtres.push({ name: 'fq', value: 'enfantEcolesPrecedemmentFrequentees:' + filtreEnfantEcolesPrecedemmentFrequentees });

		var filtreFamilleCommentVousConnaissezEcole = $formulaireFiltres.find('.valeurFamilleCommentVousConnaissezEcole').val();
		if(filtreFamilleCommentVousConnaissezEcole != null && filtreFamilleCommentVousConnaissezEcole !== '')
			filtres.push({ name: 'fq', value: 'familleCommentVousConnaissezEcole:' + filtreFamilleCommentVousConnaissezEcole });

		var filtreEnfantDescription = $formulaireFiltres.find('.valeurEnfantDescription').val();
		if(filtreEnfantDescription != null && filtreEnfantDescription !== '')
			filtres.push({ name: 'fq', value: 'enfantDescription:' + filtreEnfantDescription });

		var filtreEnfantObjectifs = $formulaireFiltres.find('.valeurEnfantObjectifs').val();
		if(filtreEnfantObjectifs != null && filtreEnfantObjectifs !== '')
			filtres.push({ name: 'fq', value: 'enfantObjectifs:' + filtreEnfantObjectifs });

		var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
		if(filtreBlocCles != null && filtreBlocCles !== '')
			filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

		var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
		if(filtreEnfantCle != null && filtreEnfantCle !== '')
			filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

		var filtreMereCles = $formulaireFiltres.find('.valeurMereCles').val();
		if(filtreMereCles != null && filtreMereCles !== '')
			filtres.push({ name: 'fq', value: 'mereCles:' + filtreMereCles });

		var filtrePereCles = $formulaireFiltres.find('.valeurPereCles').val();
		if(filtrePereCles != null && filtrePereCles !== '')
			filtres.push({ name: 'fq', value: 'pereCles:' + filtrePereCles });

		var filtreGardienCles = $formulaireFiltres.find('.valeurGardienCles').val();
		if(filtreGardienCles != null && filtreGardienCles !== '')
			filtres.push({ name: 'fq', value: 'gardienCles:' + filtreGardienCles });

		var filtrePaiementCles = $formulaireFiltres.find('.valeurPaiementCles').val();
		if(filtrePaiementCles != null && filtrePaiementCles !== '')
			filtres.push({ name: 'fq', value: 'paiementCles:' + filtrePaiementCles });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

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

		var filtreInscriptionCle = $formulaireFiltres.find('.valeurInscriptionCle').val();
		if(filtreInscriptionCle != null && filtreInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCle:' + filtreInscriptionCle });

		var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
		if(filtreAnneeCle != null && filtreAnneeCle !== '')
			filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

		var filtreSaisonCle = $formulaireFiltres.find('.valeurSaisonCle').val();
		if(filtreSaisonCle != null && filtreSaisonCle !== '')
			filtres.push({ name: 'fq', value: 'saisonCle:' + filtreSaisonCle });

		var filtreSessionCle = $formulaireFiltres.find('.valeurSessionCle').val();
		if(filtreSessionCle != null && filtreSessionCle !== '')
			filtres.push({ name: 'fq', value: 'sessionCle:' + filtreSessionCle });

		var filtreAgeCle = $formulaireFiltres.find('.valeurAgeCle').val();
		if(filtreAgeCle != null && filtreAgeCle !== '')
			filtres.push({ name: 'fq', value: 'ageCle:' + filtreAgeCle });

		var filtreBlocCle = $formulaireFiltres.find('.valeurBlocCle').val();
		if(filtreBlocCle != null && filtreBlocCle !== '')
			filtres.push({ name: 'fq', value: 'blocCle:' + filtreBlocCle });

		var filtreFormInscriptionCle = $formulaireFiltres.find('.valeurFormInscriptionCle').val();
		if(filtreFormInscriptionCle != null && filtreFormInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'formInscriptionCle:' + filtreFormInscriptionCle });

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

		var filtreEnfantPrenom = $formulaireFiltres.find('.valeurEnfantPrenom').val();
		if(filtreEnfantPrenom != null && filtreEnfantPrenom !== '')
			filtres.push({ name: 'fq', value: 'enfantPrenom:' + filtreEnfantPrenom });

		var filtreEnfantPrenomPrefere = $formulaireFiltres.find('.valeurEnfantPrenomPrefere').val();
		if(filtreEnfantPrenomPrefere != null && filtreEnfantPrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'enfantPrenomPrefere:' + filtreEnfantPrenomPrefere });

		var filtreEnfantFamilleNom = $formulaireFiltres.find('.valeurEnfantFamilleNom').val();
		if(filtreEnfantFamilleNom != null && filtreEnfantFamilleNom !== '')
			filtres.push({ name: 'fq', value: 'enfantFamilleNom:' + filtreEnfantFamilleNom });

		var filtreMerePrenom = $formulaireFiltres.find('.valeurMerePrenom').val();
		if(filtreMerePrenom != null && filtreMerePrenom !== '')
			filtres.push({ name: 'fq', value: 'merePrenom:' + filtreMerePrenom });

		var filtreMerePrenomPrefere = $formulaireFiltres.find('.valeurMerePrenomPrefere').val();
		if(filtreMerePrenomPrefere != null && filtreMerePrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'merePrenomPrefere:' + filtreMerePrenomPrefere });

		var filtreMereNomCompletPrefere = $formulaireFiltres.find('.valeurMereNomCompletPrefere').val();
		if(filtreMereNomCompletPrefere != null && filtreMereNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'mereNomCompletPrefere:' + filtreMereNomCompletPrefere });

		var filtrePerePrenom = $formulaireFiltres.find('.valeurPerePrenom').val();
		if(filtrePerePrenom != null && filtrePerePrenom !== '')
			filtres.push({ name: 'fq', value: 'perePrenom:' + filtrePerePrenom });

		var filtrePerePrenomPrefere = $formulaireFiltres.find('.valeurPerePrenomPrefere').val();
		if(filtrePerePrenomPrefere != null && filtrePerePrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'perePrenomPrefere:' + filtrePerePrenomPrefere });

		var filtrePereNomCompletPrefere = $formulaireFiltres.find('.valeurPereNomCompletPrefere').val();
		if(filtrePereNomCompletPrefere != null && filtrePereNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'pereNomCompletPrefere:' + filtrePereNomCompletPrefere });

		var filtreEnfantNomComplet = $formulaireFiltres.find('.valeurEnfantNomComplet').val();
		if(filtreEnfantNomComplet != null && filtreEnfantNomComplet !== '')
			filtres.push({ name: 'fq', value: 'enfantNomComplet:' + filtreEnfantNomComplet });

		var filtreEnfantNomCompletPrefere = $formulaireFiltres.find('.valeurEnfantNomCompletPrefere').val();
		if(filtreEnfantNomCompletPrefere != null && filtreEnfantNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'enfantNomCompletPrefere:' + filtreEnfantNomCompletPrefere });

		var filtreEnfantDateNaissance = $formulaireFiltres.find('.valeurEnfantDateNaissance').val();
		if(filtreEnfantDateNaissance != null && filtreEnfantDateNaissance !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissance:' + filtreEnfantDateNaissance });

		var filtreEnfantMoisNaissance = $formulaireFiltres.find('.valeurEnfantMoisNaissance').val();
		if(filtreEnfantMoisNaissance != null && filtreEnfantMoisNaissance !== '')
			filtres.push({ name: 'fq', value: 'enfantMoisNaissance:' + filtreEnfantMoisNaissance });

		var filtreEnfantJourNaissance = $formulaireFiltres.find('.valeurEnfantJourNaissance').val();
		if(filtreEnfantJourNaissance != null && filtreEnfantJourNaissance !== '')
			filtres.push({ name: 'fq', value: 'enfantJourNaissance:' + filtreEnfantJourNaissance });

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

		var filtreEcoleAdministrateurNom = $formulaireFiltres.find('.valeurEcoleAdministrateurNom').val();
		if(filtreEcoleAdministrateurNom != null && filtreEcoleAdministrateurNom !== '')
			filtres.push({ name: 'fq', value: 'ecoleAdministrateurNom:' + filtreEcoleAdministrateurNom });

		var filtreAnneeDebut = $formulaireFiltres.find('.valeurAnneeDebut').val();
		if(filtreAnneeDebut != null && filtreAnneeDebut !== '')
			filtres.push({ name: 'fq', value: 'anneeDebut:' + filtreAnneeDebut });

		var filtreAnneeFin = $formulaireFiltres.find('.valeurAnneeFin').val();
		if(filtreAnneeFin != null && filtreAnneeFin !== '')
			filtres.push({ name: 'fq', value: 'anneeFin:' + filtreAnneeFin });

		var filtreSaisonJourDebut = $formulaireFiltres.find('.valeurSaisonJourDebut').val();
		if(filtreSaisonJourDebut != null && filtreSaisonJourDebut !== '')
			filtres.push({ name: 'fq', value: 'saisonJourDebut:' + filtreSaisonJourDebut });

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

		var filtreAnneeFraisInscription = $formulaireFiltres.find('.valeurAnneeFraisInscription').val();
		if(filtreAnneeFraisInscription != null && filtreAnneeFraisInscription !== '')
			filtres.push({ name: 'fq', value: 'anneeFraisInscription:' + filtreAnneeFraisInscription });

		var filtreSaisonNomComplet = $formulaireFiltres.find('.valeurSaisonNomComplet').val();
		if(filtreSaisonNomComplet != null && filtreSaisonNomComplet !== '')
			filtres.push({ name: 'fq', value: 'saisonNomComplet:' + filtreSaisonNomComplet });

		var filtreSessionJourDebut = $formulaireFiltres.find('.valeurSessionJourDebut').val();
		if(filtreSessionJourDebut != null && filtreSessionJourDebut !== '')
			filtres.push({ name: 'fq', value: 'sessionJourDebut:' + filtreSessionJourDebut });

		var filtreSessionJourFin = $formulaireFiltres.find('.valeurSessionJourFin').val();
		if(filtreSessionJourFin != null && filtreSessionJourFin !== '')
			filtres.push({ name: 'fq', value: 'sessionJourFin:' + filtreSessionJourFin });

		var filtreAgeNomComplet = $formulaireFiltres.find('.valeurAgeNomComplet').val();
		if(filtreAgeNomComplet != null && filtreAgeNomComplet !== '')
			filtres.push({ name: 'fq', value: 'ageNomComplet:' + filtreAgeNomComplet });

		var filtreAgeDebut = $formulaireFiltres.find('.valeurAgeDebut').val();
		if(filtreAgeDebut != null && filtreAgeDebut !== '')
			filtres.push({ name: 'fq', value: 'ageDebut:' + filtreAgeDebut });

		var filtreAgeFin = $formulaireFiltres.find('.valeurAgeFin').val();
		if(filtreAgeFin != null && filtreAgeFin !== '')
			filtres.push({ name: 'fq', value: 'ageFin:' + filtreAgeFin });

		var filtreBlocHeureDebut = $formulaireFiltres.find('.valeurBlocHeureDebut').val();
		if(filtreBlocHeureDebut != null && filtreBlocHeureDebut !== '')
			filtres.push({ name: 'fq', value: 'blocHeureDebut:' + filtreBlocHeureDebut });

		var filtreBlocHeureFin = $formulaireFiltres.find('.valeurBlocHeureFin').val();
		if(filtreBlocHeureFin != null && filtreBlocHeureFin !== '')
			filtres.push({ name: 'fq', value: 'blocHeureFin:' + filtreBlocHeureFin });

		var filtreBlocPrixParMois = $formulaireFiltres.find('.valeurBlocPrixParMois').val();
		if(filtreBlocPrixParMois != null && filtreBlocPrixParMois !== '')
			filtres.push({ name: 'fq', value: 'blocPrixParMois:' + filtreBlocPrixParMois });

		var $filtreBlocDimancheCheckbox = $formulaireFiltres.find('input.valeurBlocDimanche[type = "checkbox"]');
		var $filtreBlocDimancheSelect = $formulaireFiltres.find('select.valeurBlocDimanche');
		var filtreBlocDimanche = $filtreBlocDimancheSelect.length ? $filtreBlocDimancheSelect.val() : $filtreBlocDimancheCheckbox.prop('checked');
		var filtreBlocDimancheSelectVal = $formulaireFiltres.find('select.filtreBlocDimanche').val();
		var filtreBlocDimanche = null;
		if(filtreBlocDimancheSelectVal !== '')
			filtreBlocDimanche = filtreBlocDimancheSelectVal == 'true';
		if(filtreBlocDimanche != null && filtreBlocDimanche === true)
			filtres.push({ name: 'fq', value: 'blocDimanche:' + filtreBlocDimanche });

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

		var filtreBlocNomAdmin = $formulaireFiltres.find('.valeurBlocNomAdmin').val();
		if(filtreBlocNomAdmin != null && filtreBlocNomAdmin !== '')
			filtres.push({ name: 'fq', value: 'blocNomAdmin:' + filtreBlocNomAdmin });

		var filtreBlocNomCourt = $formulaireFiltres.find('.valeurBlocNomCourt').val();
		if(filtreBlocNomCourt != null && filtreBlocNomCourt !== '')
			filtres.push({ name: 'fq', value: 'blocNomCourt:' + filtreBlocNomCourt });

		var filtreBlocNomComplet = $formulaireFiltres.find('.valeurBlocNomComplet').val();
		if(filtreBlocNomComplet != null && filtreBlocNomComplet !== '')
			filtres.push({ name: 'fq', value: 'blocNomComplet:' + filtreBlocNomComplet });

		var filtreInscriptionDateFrais = $formulaireFiltres.find('.valeurInscriptionDateFrais').val();
		if(filtreInscriptionDateFrais != null && filtreInscriptionDateFrais !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDateFrais:' + filtreInscriptionDateFrais });

		var filtreCreeDAnnee = $formulaireFiltres.find('.valeurCreeDAnnee').val();
		if(filtreCreeDAnnee != null && filtreCreeDAnnee !== '')
			filtres.push({ name: 'fq', value: 'creeDAnnee:' + filtreCreeDAnnee });

		var filtreCreeJourDeSemaine = $formulaireFiltres.find('.valeurCreeJourDeSemaine').val();
		if(filtreCreeJourDeSemaine != null && filtreCreeJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'creeJourDeSemaine:' + filtreCreeJourDeSemaine });

		var filtreCreeMoisDAnnee = $formulaireFiltres.find('.valeurCreeMoisDAnnee').val();
		if(filtreCreeMoisDAnnee != null && filtreCreeMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'creeMoisDAnnee:' + filtreCreeMoisDAnnee });

		var filtreCreeHeureDuJour = $formulaireFiltres.find('.valeurCreeHeureDuJour').val();
		if(filtreCreeHeureDuJour != null && filtreCreeHeureDuJour !== '')
			filtres.push({ name: 'fq', value: 'creeHeureDuJour:' + filtreCreeHeureDuJour });

		var filtreInscriptionJoursDeSemaine = $formulaireFiltres.find('.valeurInscriptionJoursDeSemaine').val();
		if(filtreInscriptionJoursDeSemaine != null && filtreInscriptionJoursDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'inscriptionJoursDeSemaine:' + filtreInscriptionJoursDeSemaine });

		var filtreInscriptionDate1 = $formulaireFiltres.find('.valeurInscriptionDate1').val();
		if(filtreInscriptionDate1 != null && filtreInscriptionDate1 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate1:' + filtreInscriptionDate1 });

		var filtreInscriptionDate2 = $formulaireFiltres.find('.valeurInscriptionDate2').val();
		if(filtreInscriptionDate2 != null && filtreInscriptionDate2 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate2:' + filtreInscriptionDate2 });

		var filtreInscriptionDate3 = $formulaireFiltres.find('.valeurInscriptionDate3').val();
		if(filtreInscriptionDate3 != null && filtreInscriptionDate3 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate3:' + filtreInscriptionDate3 });

		var filtreInscriptionDate4 = $formulaireFiltres.find('.valeurInscriptionDate4').val();
		if(filtreInscriptionDate4 != null && filtreInscriptionDate4 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate4:' + filtreInscriptionDate4 });

		var filtreInscriptionDate5 = $formulaireFiltres.find('.valeurInscriptionDate5').val();
		if(filtreInscriptionDate5 != null && filtreInscriptionDate5 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate5:' + filtreInscriptionDate5 });

		var filtreInscriptionDate6 = $formulaireFiltres.find('.valeurInscriptionDate6').val();
		if(filtreInscriptionDate6 != null && filtreInscriptionDate6 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate6:' + filtreInscriptionDate6 });

		var filtreInscriptionDate7 = $formulaireFiltres.find('.valeurInscriptionDate7').val();
		if(filtreInscriptionDate7 != null && filtreInscriptionDate7 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate7:' + filtreInscriptionDate7 });

		var filtreInscriptionDate8 = $formulaireFiltres.find('.valeurInscriptionDate8').val();
		if(filtreInscriptionDate8 != null && filtreInscriptionDate8 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate8:' + filtreInscriptionDate8 });

		var filtreInscriptionDate9 = $formulaireFiltres.find('.valeurInscriptionDate9').val();
		if(filtreInscriptionDate9 != null && filtreInscriptionDate9 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate9:' + filtreInscriptionDate9 });

		var filtreInscriptionDate10 = $formulaireFiltres.find('.valeurInscriptionDate10').val();
		if(filtreInscriptionDate10 != null && filtreInscriptionDate10 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate10:' + filtreInscriptionDate10 });

		var filtreEnfantImmunisationsRecu = $formulaireFiltres.find('.valeurEnfantImmunisationsRecu').val();
		if(filtreEnfantImmunisationsRecu != null && filtreEnfantImmunisationsRecu !== '')
			filtres.push({ name: 'fq', value: 'enfantImmunisationsRecu:' + filtreEnfantImmunisationsRecu });

		var filtreEnfantPhotosApprouve = $formulaireFiltres.find('.valeurEnfantPhotosApprouve').val();
		if(filtreEnfantPhotosApprouve != null && filtreEnfantPhotosApprouve !== '')
			filtres.push({ name: 'fq', value: 'enfantPhotosApprouve:' + filtreEnfantPhotosApprouve });

		var filtreInscriptionNomComplet = $formulaireFiltres.find('.valeurInscriptionNomComplet').val();
		if(filtreInscriptionNomComplet != null && filtreInscriptionNomComplet !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNomComplet:' + filtreInscriptionNomComplet });
	}
	return filtres;
}

function patchInscriptionScolaireVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchInscriptionScolaireVals(filtres, vals, success, error);
}

function patchInscriptionScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/inscription?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getInscriptionScolaire(pk) {
	$.ajax({
		url: '/api/inscription/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Recherche //

async function rechercheInscriptionScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheInscriptionScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheInscriptionScolaireVals(filtres, success, error);
}

function rechercheInscriptionScolaireFiltres($formulaireFiltres) {
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

		var $filtreInscriptionApprouveCheckbox = $formulaireFiltres.find('input.valeurInscriptionApprouve[type = "checkbox"]');
		var $filtreInscriptionApprouveSelect = $formulaireFiltres.find('select.valeurInscriptionApprouve');
		var filtreInscriptionApprouve = $filtreInscriptionApprouveSelect.length ? $filtreInscriptionApprouveSelect.val() : $filtreInscriptionApprouveCheckbox.prop('checked');
		var filtreInscriptionApprouveSelectVal = $formulaireFiltres.find('select.filtreInscriptionApprouve').val();
		var filtreInscriptionApprouve = null;
		if(filtreInscriptionApprouveSelectVal !== '')
			filtreInscriptionApprouve = filtreInscriptionApprouveSelectVal == 'true';
		if(filtreInscriptionApprouve != null && filtreInscriptionApprouve === true)
			filtres.push({ name: 'fq', value: 'inscriptionApprouve:' + filtreInscriptionApprouve });

		var $filtreInscriptionImmunisationsCheckbox = $formulaireFiltres.find('input.valeurInscriptionImmunisations[type = "checkbox"]');
		var $filtreInscriptionImmunisationsSelect = $formulaireFiltres.find('select.valeurInscriptionImmunisations');
		var filtreInscriptionImmunisations = $filtreInscriptionImmunisationsSelect.length ? $filtreInscriptionImmunisationsSelect.val() : $filtreInscriptionImmunisationsCheckbox.prop('checked');
		var filtreInscriptionImmunisationsSelectVal = $formulaireFiltres.find('select.filtreInscriptionImmunisations').val();
		var filtreInscriptionImmunisations = null;
		if(filtreInscriptionImmunisationsSelectVal !== '')
			filtreInscriptionImmunisations = filtreInscriptionImmunisationsSelectVal == 'true';
		if(filtreInscriptionImmunisations != null && filtreInscriptionImmunisations === true)
			filtres.push({ name: 'fq', value: 'inscriptionImmunisations:' + filtreInscriptionImmunisations });

		var filtreInscriptionNomGroupe = $formulaireFiltres.find('.valeurInscriptionNomGroupe').val();
		if(filtreInscriptionNomGroupe != null && filtreInscriptionNomGroupe !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNomGroupe:' + filtreInscriptionNomGroupe });

		var filtreCustomerProfileId = $formulaireFiltres.find('.valeurCustomerProfileId').val();
		if(filtreCustomerProfileId != null && filtreCustomerProfileId !== '')
			filtres.push({ name: 'fq', value: 'customerProfileId:' + filtreCustomerProfileId });

		var $filtreInscriptionPaimentCompletCheckbox = $formulaireFiltres.find('input.valeurInscriptionPaimentComplet[type = "checkbox"]');
		var $filtreInscriptionPaimentCompletSelect = $formulaireFiltres.find('select.valeurInscriptionPaimentComplet');
		var filtreInscriptionPaimentComplet = $filtreInscriptionPaimentCompletSelect.length ? $filtreInscriptionPaimentCompletSelect.val() : $filtreInscriptionPaimentCompletCheckbox.prop('checked');
		var filtreInscriptionPaimentCompletSelectVal = $formulaireFiltres.find('select.filtreInscriptionPaimentComplet').val();
		var filtreInscriptionPaimentComplet = null;
		if(filtreInscriptionPaimentCompletSelectVal !== '')
			filtreInscriptionPaimentComplet = filtreInscriptionPaimentCompletSelectVal == 'true';
		if(filtreInscriptionPaimentComplet != null && filtreInscriptionPaimentComplet === true)
			filtres.push({ name: 'fq', value: 'inscriptionPaimentComplet:' + filtreInscriptionPaimentComplet });

		var $filtreEnfantPropreCheckbox = $formulaireFiltres.find('input.valeurEnfantPropre[type = "checkbox"]');
		var $filtreEnfantPropreSelect = $formulaireFiltres.find('select.valeurEnfantPropre');
		var filtreEnfantPropre = $filtreEnfantPropreSelect.length ? $filtreEnfantPropreSelect.val() : $filtreEnfantPropreCheckbox.prop('checked');
		var filtreEnfantPropreSelectVal = $formulaireFiltres.find('select.filtreEnfantPropre').val();
		var filtreEnfantPropre = null;
		if(filtreEnfantPropreSelectVal !== '')
			filtreEnfantPropre = filtreEnfantPropreSelectVal == 'true';
		if(filtreEnfantPropre != null && filtreEnfantPropre === true)
			filtres.push({ name: 'fq', value: 'enfantPropre:' + filtreEnfantPropre });

		var $filtreInscriptionPaimentChaqueMoisCheckbox = $formulaireFiltres.find('input.valeurInscriptionPaimentChaqueMois[type = "checkbox"]');
		var $filtreInscriptionPaimentChaqueMoisSelect = $formulaireFiltres.find('select.valeurInscriptionPaimentChaqueMois');
		var filtreInscriptionPaimentChaqueMois = $filtreInscriptionPaimentChaqueMoisSelect.length ? $filtreInscriptionPaimentChaqueMoisSelect.val() : $filtreInscriptionPaimentChaqueMoisCheckbox.prop('checked');
		var filtreInscriptionPaimentChaqueMoisSelectVal = $formulaireFiltres.find('select.filtreInscriptionPaimentChaqueMois').val();
		var filtreInscriptionPaimentChaqueMois = null;
		if(filtreInscriptionPaimentChaqueMoisSelectVal !== '')
			filtreInscriptionPaimentChaqueMois = filtreInscriptionPaimentChaqueMoisSelectVal == 'true';
		if(filtreInscriptionPaimentChaqueMois != null && filtreInscriptionPaimentChaqueMois === true)
			filtres.push({ name: 'fq', value: 'inscriptionPaimentChaqueMois:' + filtreInscriptionPaimentChaqueMois });

		var $filtreFamilleMarieCheckbox = $formulaireFiltres.find('input.valeurFamilleMarie[type = "checkbox"]');
		var $filtreFamilleMarieSelect = $formulaireFiltres.find('select.valeurFamilleMarie');
		var filtreFamilleMarie = $filtreFamilleMarieSelect.length ? $filtreFamilleMarieSelect.val() : $filtreFamilleMarieCheckbox.prop('checked');
		var filtreFamilleMarieSelectVal = $formulaireFiltres.find('select.filtreFamilleMarie').val();
		var filtreFamilleMarie = null;
		if(filtreFamilleMarieSelectVal !== '')
			filtreFamilleMarie = filtreFamilleMarieSelectVal == 'true';
		if(filtreFamilleMarie != null && filtreFamilleMarie === true)
			filtres.push({ name: 'fq', value: 'familleMarie:' + filtreFamilleMarie });

		var $filtreFamilleSepareCheckbox = $formulaireFiltres.find('input.valeurFamilleSepare[type = "checkbox"]');
		var $filtreFamilleSepareSelect = $formulaireFiltres.find('select.valeurFamilleSepare');
		var filtreFamilleSepare = $filtreFamilleSepareSelect.length ? $filtreFamilleSepareSelect.val() : $filtreFamilleSepareCheckbox.prop('checked');
		var filtreFamilleSepareSelectVal = $formulaireFiltres.find('select.filtreFamilleSepare').val();
		var filtreFamilleSepare = null;
		if(filtreFamilleSepareSelectVal !== '')
			filtreFamilleSepare = filtreFamilleSepareSelectVal == 'true';
		if(filtreFamilleSepare != null && filtreFamilleSepare === true)
			filtres.push({ name: 'fq', value: 'familleSepare:' + filtreFamilleSepare });

		var $filtreFamilleDivorceCheckbox = $formulaireFiltres.find('input.valeurFamilleDivorce[type = "checkbox"]');
		var $filtreFamilleDivorceSelect = $formulaireFiltres.find('select.valeurFamilleDivorce');
		var filtreFamilleDivorce = $filtreFamilleDivorceSelect.length ? $filtreFamilleDivorceSelect.val() : $filtreFamilleDivorceCheckbox.prop('checked');
		var filtreFamilleDivorceSelectVal = $formulaireFiltres.find('select.filtreFamilleDivorce').val();
		var filtreFamilleDivorce = null;
		if(filtreFamilleDivorceSelectVal !== '')
			filtreFamilleDivorce = filtreFamilleDivorceSelectVal == 'true';
		if(filtreFamilleDivorce != null && filtreFamilleDivorce === true)
			filtres.push({ name: 'fq', value: 'familleDivorce:' + filtreFamilleDivorce });

		var filtreFamilleAddresse = $formulaireFiltres.find('.valeurFamilleAddresse').val();
		if(filtreFamilleAddresse != null && filtreFamilleAddresse !== '')
			filtres.push({ name: 'fq', value: 'familleAddresse:' + filtreFamilleAddresse });

		var filtreInscriptionConsiderationsSpeciales = $formulaireFiltres.find('.valeurInscriptionConsiderationsSpeciales').val();
		if(filtreInscriptionConsiderationsSpeciales != null && filtreInscriptionConsiderationsSpeciales !== '')
			filtres.push({ name: 'fq', value: 'inscriptionConsiderationsSpeciales:' + filtreInscriptionConsiderationsSpeciales });

		var filtreEnfantConditionsMedicales = $formulaireFiltres.find('.valeurEnfantConditionsMedicales').val();
		if(filtreEnfantConditionsMedicales != null && filtreEnfantConditionsMedicales !== '')
			filtres.push({ name: 'fq', value: 'enfantConditionsMedicales:' + filtreEnfantConditionsMedicales });

		var filtreEnfantEcolesPrecedemmentFrequentees = $formulaireFiltres.find('.valeurEnfantEcolesPrecedemmentFrequentees').val();
		if(filtreEnfantEcolesPrecedemmentFrequentees != null && filtreEnfantEcolesPrecedemmentFrequentees !== '')
			filtres.push({ name: 'fq', value: 'enfantEcolesPrecedemmentFrequentees:' + filtreEnfantEcolesPrecedemmentFrequentees });

		var filtreFamilleCommentVousConnaissezEcole = $formulaireFiltres.find('.valeurFamilleCommentVousConnaissezEcole').val();
		if(filtreFamilleCommentVousConnaissezEcole != null && filtreFamilleCommentVousConnaissezEcole !== '')
			filtres.push({ name: 'fq', value: 'familleCommentVousConnaissezEcole:' + filtreFamilleCommentVousConnaissezEcole });

		var filtreEnfantDescription = $formulaireFiltres.find('.valeurEnfantDescription').val();
		if(filtreEnfantDescription != null && filtreEnfantDescription !== '')
			filtres.push({ name: 'fq', value: 'enfantDescription:' + filtreEnfantDescription });

		var filtreEnfantObjectifs = $formulaireFiltres.find('.valeurEnfantObjectifs').val();
		if(filtreEnfantObjectifs != null && filtreEnfantObjectifs !== '')
			filtres.push({ name: 'fq', value: 'enfantObjectifs:' + filtreEnfantObjectifs });

		var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
		if(filtreBlocCles != null && filtreBlocCles !== '')
			filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

		var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
		if(filtreEnfantCle != null && filtreEnfantCle !== '')
			filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

		var filtreMereCles = $formulaireFiltres.find('.valeurMereCles').val();
		if(filtreMereCles != null && filtreMereCles !== '')
			filtres.push({ name: 'fq', value: 'mereCles:' + filtreMereCles });

		var filtrePereCles = $formulaireFiltres.find('.valeurPereCles').val();
		if(filtrePereCles != null && filtrePereCles !== '')
			filtres.push({ name: 'fq', value: 'pereCles:' + filtrePereCles });

		var filtreGardienCles = $formulaireFiltres.find('.valeurGardienCles').val();
		if(filtreGardienCles != null && filtreGardienCles !== '')
			filtres.push({ name: 'fq', value: 'gardienCles:' + filtreGardienCles });

		var filtrePaiementCles = $formulaireFiltres.find('.valeurPaiementCles').val();
		if(filtrePaiementCles != null && filtrePaiementCles !== '')
			filtres.push({ name: 'fq', value: 'paiementCles:' + filtrePaiementCles });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

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

		var filtreInscriptionCle = $formulaireFiltres.find('.valeurInscriptionCle').val();
		if(filtreInscriptionCle != null && filtreInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCle:' + filtreInscriptionCle });

		var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
		if(filtreAnneeCle != null && filtreAnneeCle !== '')
			filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

		var filtreSaisonCle = $formulaireFiltres.find('.valeurSaisonCle').val();
		if(filtreSaisonCle != null && filtreSaisonCle !== '')
			filtres.push({ name: 'fq', value: 'saisonCle:' + filtreSaisonCle });

		var filtreSessionCle = $formulaireFiltres.find('.valeurSessionCle').val();
		if(filtreSessionCle != null && filtreSessionCle !== '')
			filtres.push({ name: 'fq', value: 'sessionCle:' + filtreSessionCle });

		var filtreAgeCle = $formulaireFiltres.find('.valeurAgeCle').val();
		if(filtreAgeCle != null && filtreAgeCle !== '')
			filtres.push({ name: 'fq', value: 'ageCle:' + filtreAgeCle });

		var filtreBlocCle = $formulaireFiltres.find('.valeurBlocCle').val();
		if(filtreBlocCle != null && filtreBlocCle !== '')
			filtres.push({ name: 'fq', value: 'blocCle:' + filtreBlocCle });

		var filtreFormInscriptionCle = $formulaireFiltres.find('.valeurFormInscriptionCle').val();
		if(filtreFormInscriptionCle != null && filtreFormInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'formInscriptionCle:' + filtreFormInscriptionCle });

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

		var filtreEnfantPrenom = $formulaireFiltres.find('.valeurEnfantPrenom').val();
		if(filtreEnfantPrenom != null && filtreEnfantPrenom !== '')
			filtres.push({ name: 'fq', value: 'enfantPrenom:' + filtreEnfantPrenom });

		var filtreEnfantPrenomPrefere = $formulaireFiltres.find('.valeurEnfantPrenomPrefere').val();
		if(filtreEnfantPrenomPrefere != null && filtreEnfantPrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'enfantPrenomPrefere:' + filtreEnfantPrenomPrefere });

		var filtreEnfantFamilleNom = $formulaireFiltres.find('.valeurEnfantFamilleNom').val();
		if(filtreEnfantFamilleNom != null && filtreEnfantFamilleNom !== '')
			filtres.push({ name: 'fq', value: 'enfantFamilleNom:' + filtreEnfantFamilleNom });

		var filtreMerePrenom = $formulaireFiltres.find('.valeurMerePrenom').val();
		if(filtreMerePrenom != null && filtreMerePrenom !== '')
			filtres.push({ name: 'fq', value: 'merePrenom:' + filtreMerePrenom });

		var filtreMerePrenomPrefere = $formulaireFiltres.find('.valeurMerePrenomPrefere').val();
		if(filtreMerePrenomPrefere != null && filtreMerePrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'merePrenomPrefere:' + filtreMerePrenomPrefere });

		var filtreMereNomCompletPrefere = $formulaireFiltres.find('.valeurMereNomCompletPrefere').val();
		if(filtreMereNomCompletPrefere != null && filtreMereNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'mereNomCompletPrefere:' + filtreMereNomCompletPrefere });

		var filtrePerePrenom = $formulaireFiltres.find('.valeurPerePrenom').val();
		if(filtrePerePrenom != null && filtrePerePrenom !== '')
			filtres.push({ name: 'fq', value: 'perePrenom:' + filtrePerePrenom });

		var filtrePerePrenomPrefere = $formulaireFiltres.find('.valeurPerePrenomPrefere').val();
		if(filtrePerePrenomPrefere != null && filtrePerePrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'perePrenomPrefere:' + filtrePerePrenomPrefere });

		var filtrePereNomCompletPrefere = $formulaireFiltres.find('.valeurPereNomCompletPrefere').val();
		if(filtrePereNomCompletPrefere != null && filtrePereNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'pereNomCompletPrefere:' + filtrePereNomCompletPrefere });

		var filtreEnfantNomComplet = $formulaireFiltres.find('.valeurEnfantNomComplet').val();
		if(filtreEnfantNomComplet != null && filtreEnfantNomComplet !== '')
			filtres.push({ name: 'fq', value: 'enfantNomComplet:' + filtreEnfantNomComplet });

		var filtreEnfantNomCompletPrefere = $formulaireFiltres.find('.valeurEnfantNomCompletPrefere').val();
		if(filtreEnfantNomCompletPrefere != null && filtreEnfantNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'enfantNomCompletPrefere:' + filtreEnfantNomCompletPrefere });

		var filtreEnfantDateNaissance = $formulaireFiltres.find('.valeurEnfantDateNaissance').val();
		if(filtreEnfantDateNaissance != null && filtreEnfantDateNaissance !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissance:' + filtreEnfantDateNaissance });

		var filtreEnfantMoisNaissance = $formulaireFiltres.find('.valeurEnfantMoisNaissance').val();
		if(filtreEnfantMoisNaissance != null && filtreEnfantMoisNaissance !== '')
			filtres.push({ name: 'fq', value: 'enfantMoisNaissance:' + filtreEnfantMoisNaissance });

		var filtreEnfantJourNaissance = $formulaireFiltres.find('.valeurEnfantJourNaissance').val();
		if(filtreEnfantJourNaissance != null && filtreEnfantJourNaissance !== '')
			filtres.push({ name: 'fq', value: 'enfantJourNaissance:' + filtreEnfantJourNaissance });

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

		var filtreEcoleAdministrateurNom = $formulaireFiltres.find('.valeurEcoleAdministrateurNom').val();
		if(filtreEcoleAdministrateurNom != null && filtreEcoleAdministrateurNom !== '')
			filtres.push({ name: 'fq', value: 'ecoleAdministrateurNom:' + filtreEcoleAdministrateurNom });

		var filtreAnneeDebut = $formulaireFiltres.find('.valeurAnneeDebut').val();
		if(filtreAnneeDebut != null && filtreAnneeDebut !== '')
			filtres.push({ name: 'fq', value: 'anneeDebut:' + filtreAnneeDebut });

		var filtreAnneeFin = $formulaireFiltres.find('.valeurAnneeFin').val();
		if(filtreAnneeFin != null && filtreAnneeFin !== '')
			filtres.push({ name: 'fq', value: 'anneeFin:' + filtreAnneeFin });

		var filtreSaisonJourDebut = $formulaireFiltres.find('.valeurSaisonJourDebut').val();
		if(filtreSaisonJourDebut != null && filtreSaisonJourDebut !== '')
			filtres.push({ name: 'fq', value: 'saisonJourDebut:' + filtreSaisonJourDebut });

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

		var filtreAnneeFraisInscription = $formulaireFiltres.find('.valeurAnneeFraisInscription').val();
		if(filtreAnneeFraisInscription != null && filtreAnneeFraisInscription !== '')
			filtres.push({ name: 'fq', value: 'anneeFraisInscription:' + filtreAnneeFraisInscription });

		var filtreSaisonNomComplet = $formulaireFiltres.find('.valeurSaisonNomComplet').val();
		if(filtreSaisonNomComplet != null && filtreSaisonNomComplet !== '')
			filtres.push({ name: 'fq', value: 'saisonNomComplet:' + filtreSaisonNomComplet });

		var filtreSessionJourDebut = $formulaireFiltres.find('.valeurSessionJourDebut').val();
		if(filtreSessionJourDebut != null && filtreSessionJourDebut !== '')
			filtres.push({ name: 'fq', value: 'sessionJourDebut:' + filtreSessionJourDebut });

		var filtreSessionJourFin = $formulaireFiltres.find('.valeurSessionJourFin').val();
		if(filtreSessionJourFin != null && filtreSessionJourFin !== '')
			filtres.push({ name: 'fq', value: 'sessionJourFin:' + filtreSessionJourFin });

		var filtreAgeNomComplet = $formulaireFiltres.find('.valeurAgeNomComplet').val();
		if(filtreAgeNomComplet != null && filtreAgeNomComplet !== '')
			filtres.push({ name: 'fq', value: 'ageNomComplet:' + filtreAgeNomComplet });

		var filtreAgeDebut = $formulaireFiltres.find('.valeurAgeDebut').val();
		if(filtreAgeDebut != null && filtreAgeDebut !== '')
			filtres.push({ name: 'fq', value: 'ageDebut:' + filtreAgeDebut });

		var filtreAgeFin = $formulaireFiltres.find('.valeurAgeFin').val();
		if(filtreAgeFin != null && filtreAgeFin !== '')
			filtres.push({ name: 'fq', value: 'ageFin:' + filtreAgeFin });

		var filtreBlocHeureDebut = $formulaireFiltres.find('.valeurBlocHeureDebut').val();
		if(filtreBlocHeureDebut != null && filtreBlocHeureDebut !== '')
			filtres.push({ name: 'fq', value: 'blocHeureDebut:' + filtreBlocHeureDebut });

		var filtreBlocHeureFin = $formulaireFiltres.find('.valeurBlocHeureFin').val();
		if(filtreBlocHeureFin != null && filtreBlocHeureFin !== '')
			filtres.push({ name: 'fq', value: 'blocHeureFin:' + filtreBlocHeureFin });

		var filtreBlocPrixParMois = $formulaireFiltres.find('.valeurBlocPrixParMois').val();
		if(filtreBlocPrixParMois != null && filtreBlocPrixParMois !== '')
			filtres.push({ name: 'fq', value: 'blocPrixParMois:' + filtreBlocPrixParMois });

		var $filtreBlocDimancheCheckbox = $formulaireFiltres.find('input.valeurBlocDimanche[type = "checkbox"]');
		var $filtreBlocDimancheSelect = $formulaireFiltres.find('select.valeurBlocDimanche');
		var filtreBlocDimanche = $filtreBlocDimancheSelect.length ? $filtreBlocDimancheSelect.val() : $filtreBlocDimancheCheckbox.prop('checked');
		var filtreBlocDimancheSelectVal = $formulaireFiltres.find('select.filtreBlocDimanche').val();
		var filtreBlocDimanche = null;
		if(filtreBlocDimancheSelectVal !== '')
			filtreBlocDimanche = filtreBlocDimancheSelectVal == 'true';
		if(filtreBlocDimanche != null && filtreBlocDimanche === true)
			filtres.push({ name: 'fq', value: 'blocDimanche:' + filtreBlocDimanche });

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

		var filtreBlocNomAdmin = $formulaireFiltres.find('.valeurBlocNomAdmin').val();
		if(filtreBlocNomAdmin != null && filtreBlocNomAdmin !== '')
			filtres.push({ name: 'fq', value: 'blocNomAdmin:' + filtreBlocNomAdmin });

		var filtreBlocNomCourt = $formulaireFiltres.find('.valeurBlocNomCourt').val();
		if(filtreBlocNomCourt != null && filtreBlocNomCourt !== '')
			filtres.push({ name: 'fq', value: 'blocNomCourt:' + filtreBlocNomCourt });

		var filtreBlocNomComplet = $formulaireFiltres.find('.valeurBlocNomComplet').val();
		if(filtreBlocNomComplet != null && filtreBlocNomComplet !== '')
			filtres.push({ name: 'fq', value: 'blocNomComplet:' + filtreBlocNomComplet });

		var filtreInscriptionDateFrais = $formulaireFiltres.find('.valeurInscriptionDateFrais').val();
		if(filtreInscriptionDateFrais != null && filtreInscriptionDateFrais !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDateFrais:' + filtreInscriptionDateFrais });

		var filtreCreeDAnnee = $formulaireFiltres.find('.valeurCreeDAnnee').val();
		if(filtreCreeDAnnee != null && filtreCreeDAnnee !== '')
			filtres.push({ name: 'fq', value: 'creeDAnnee:' + filtreCreeDAnnee });

		var filtreCreeJourDeSemaine = $formulaireFiltres.find('.valeurCreeJourDeSemaine').val();
		if(filtreCreeJourDeSemaine != null && filtreCreeJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'creeJourDeSemaine:' + filtreCreeJourDeSemaine });

		var filtreCreeMoisDAnnee = $formulaireFiltres.find('.valeurCreeMoisDAnnee').val();
		if(filtreCreeMoisDAnnee != null && filtreCreeMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'creeMoisDAnnee:' + filtreCreeMoisDAnnee });

		var filtreCreeHeureDuJour = $formulaireFiltres.find('.valeurCreeHeureDuJour').val();
		if(filtreCreeHeureDuJour != null && filtreCreeHeureDuJour !== '')
			filtres.push({ name: 'fq', value: 'creeHeureDuJour:' + filtreCreeHeureDuJour });

		var filtreInscriptionJoursDeSemaine = $formulaireFiltres.find('.valeurInscriptionJoursDeSemaine').val();
		if(filtreInscriptionJoursDeSemaine != null && filtreInscriptionJoursDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'inscriptionJoursDeSemaine:' + filtreInscriptionJoursDeSemaine });

		var filtreInscriptionDate1 = $formulaireFiltres.find('.valeurInscriptionDate1').val();
		if(filtreInscriptionDate1 != null && filtreInscriptionDate1 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate1:' + filtreInscriptionDate1 });

		var filtreInscriptionDate2 = $formulaireFiltres.find('.valeurInscriptionDate2').val();
		if(filtreInscriptionDate2 != null && filtreInscriptionDate2 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate2:' + filtreInscriptionDate2 });

		var filtreInscriptionDate3 = $formulaireFiltres.find('.valeurInscriptionDate3').val();
		if(filtreInscriptionDate3 != null && filtreInscriptionDate3 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate3:' + filtreInscriptionDate3 });

		var filtreInscriptionDate4 = $formulaireFiltres.find('.valeurInscriptionDate4').val();
		if(filtreInscriptionDate4 != null && filtreInscriptionDate4 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate4:' + filtreInscriptionDate4 });

		var filtreInscriptionDate5 = $formulaireFiltres.find('.valeurInscriptionDate5').val();
		if(filtreInscriptionDate5 != null && filtreInscriptionDate5 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate5:' + filtreInscriptionDate5 });

		var filtreInscriptionDate6 = $formulaireFiltres.find('.valeurInscriptionDate6').val();
		if(filtreInscriptionDate6 != null && filtreInscriptionDate6 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate6:' + filtreInscriptionDate6 });

		var filtreInscriptionDate7 = $formulaireFiltres.find('.valeurInscriptionDate7').val();
		if(filtreInscriptionDate7 != null && filtreInscriptionDate7 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate7:' + filtreInscriptionDate7 });

		var filtreInscriptionDate8 = $formulaireFiltres.find('.valeurInscriptionDate8').val();
		if(filtreInscriptionDate8 != null && filtreInscriptionDate8 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate8:' + filtreInscriptionDate8 });

		var filtreInscriptionDate9 = $formulaireFiltres.find('.valeurInscriptionDate9').val();
		if(filtreInscriptionDate9 != null && filtreInscriptionDate9 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate9:' + filtreInscriptionDate9 });

		var filtreInscriptionDate10 = $formulaireFiltres.find('.valeurInscriptionDate10').val();
		if(filtreInscriptionDate10 != null && filtreInscriptionDate10 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate10:' + filtreInscriptionDate10 });

		var filtreEnfantImmunisationsRecu = $formulaireFiltres.find('.valeurEnfantImmunisationsRecu').val();
		if(filtreEnfantImmunisationsRecu != null && filtreEnfantImmunisationsRecu !== '')
			filtres.push({ name: 'fq', value: 'enfantImmunisationsRecu:' + filtreEnfantImmunisationsRecu });

		var filtreEnfantPhotosApprouve = $formulaireFiltres.find('.valeurEnfantPhotosApprouve').val();
		if(filtreEnfantPhotosApprouve != null && filtreEnfantPhotosApprouve !== '')
			filtres.push({ name: 'fq', value: 'enfantPhotosApprouve:' + filtreEnfantPhotosApprouve });

		var filtreInscriptionNomComplet = $formulaireFiltres.find('.valeurInscriptionNomComplet').val();
		if(filtreInscriptionNomComplet != null && filtreInscriptionNomComplet !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNomComplet:' + filtreInscriptionNomComplet });
	}
	return filtres;
}

function rechercheInscriptionScolaireVals(filtres, success, error) {
	$.ajax({
		url: '/api/inscription?' + $.param(filtres)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggereInscriptionScolaireObjetSuggere($formulaireFiltres, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fas fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['inscriptionNomComplet']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercherInscriptionScolaireVals($formulaireFiltres, success, error);
}

function suggereInscriptionScolaireAnneeCle(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-calendar-check ');
			var $span = $('<span>').attr('class', '').text(o['anneeNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['inscriptionCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_anneeCle_' + pk + '_inscriptionCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurAnneeCle w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_anneeCle_" + pk + "_inscriptionCles_" + o['pk'] + "'); patchInscriptionScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'AnneeCle']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#InscriptionScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheAnneeScolaireVals(filtres, success, error);
}

function suggereInscriptionScolaireBlocCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-bell ');
			var $span = $('<span>').attr('class', '').text(o['blocNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['inscriptionCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_blocCles_' + pk + '_inscriptionCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurBlocCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_blocCles_" + pk + "_inscriptionCles_" + o['pk'] + "'); patchInscriptionScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'BlocCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#InscriptionScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheBlocScolaireVals(filtres, success, error);
}

function suggereInscriptionScolaireEnfantCle(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-child ');
			var $span = $('<span>').attr('class', '').text(o['enfantNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['inscriptionCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enfantCle_' + pk + '_inscriptionCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurEnfantCle w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enfantCle_" + pk + "_inscriptionCles_" + o['pk'] + "'); patchInscriptionScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'EnfantCle']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#InscriptionScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheEnfantScolaireVals(filtres, success, error);
}

function suggereInscriptionScolaireMereCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-female ');
			var $span = $('<span>').attr('class', '').text(o['mereNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['inscriptionCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_mereCles_' + pk + '_inscriptionCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurMereCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_mereCles_" + pk + "_inscriptionCles_" + o['pk'] + "'); patchInscriptionScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'MereCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#InscriptionScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheMereScolaireVals(filtres, success, error);
}

function suggereInscriptionScolairePereCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-male ');
			var $span = $('<span>').attr('class', '').text(o['pereNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['inscriptionCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_pereCles_' + pk + '_inscriptionCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurPereCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_pereCles_" + pk + "_inscriptionCles_" + o['pk'] + "'); patchInscriptionScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PereCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#InscriptionScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	recherchePereScolaireVals(filtres, success, error);
}

function suggereInscriptionScolaireGardienCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-phone ');
			var $span = $('<span>').attr('class', '').text(o['gardienNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['inscriptionCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_gardienCles_' + pk + '_inscriptionCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurGardienCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_gardienCles_" + pk + "_inscriptionCles_" + o['pk'] + "'); patchInscriptionScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'GardienCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#InscriptionScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheGardienScolaireVals(filtres, success, error);
}

function suggereInscriptionScolairePaiementCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-search-dollar ');
			var $span = $('<span>').attr('class', '').text(o['paiementNomComplet']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['inscriptionCle'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_paiementCles_' + pk + '_inscriptionCle_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurPaiementCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_paiementCles_" + pk + "_inscriptionCle_" + o['pk'] + "'); patchInscriptionScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PaiementCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#InscriptionScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	recherchePaiementScolaireVals(filtres, success, error);
}

function suggereInscriptionScolaireUtilisateurCles(filtres, $list, pk = null, attribuer=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-user-cog ');
			var $span = $('<span>').attr('class', '').text(o['objetTitre']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['inscriptionCles'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_utilisateurCles_' + pk + '_inscriptionCles_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valeurUtilisateurCles w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_utilisateurCles_" + pk + "_inscriptionCles_" + o['pk'] + "'); patchInscriptionScolaireVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'UtilisateurCles']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#InscriptionScolaireForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	rechercheUtilisateurSiteVals(filtres, success, error);
}

// PATCHPaiements //

async function patchpaiementsInscriptionScolaire($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchpaiementsInscriptionScolaireFiltres($formulaireFiltres);

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

	var valeurInscriptionApprouve = $formulaireValeurs.find('.valeurInscriptionApprouve').prop('checked');
	if(valeurInscriptionApprouve != null && valeurInscriptionApprouve !== '')
	var removeInscriptionApprouve = $formulaireFiltres.find('.removeInscriptionApprouve').val() === 'true';
	var valeurInscriptionApprouveSelectVal = $formulaireValeurs.find('select.setInscriptionApprouve').val();
	var valeurInscriptionApprouve = null;
	if(valeurInscriptionApprouveSelectVal !== '')
		valeurInscriptionApprouve = valeurInscriptionApprouveSelectVal == 'true';
	setInscriptionApprouve = removeInscriptionApprouve ? null : valeurInscriptionApprouve;
	if(removeInscriptionApprouve || setInscriptionApprouve != null && setInscriptionApprouve !== '')
		vals['setInscriptionApprouve'] = setInscriptionApprouve;
	var addInscriptionApprouve = $formulaireValeurs.find('.addInscriptionApprouve').prop('checked');
	if(addInscriptionApprouve != null && addInscriptionApprouve !== '')
		vals['addInscriptionApprouve'] = addInscriptionApprouve;
	var removeInscriptionApprouve = $formulaireValeurs.find('.removeInscriptionApprouve').prop('checked');
	if(removeInscriptionApprouve != null && removeInscriptionApprouve !== '')
		vals['removeInscriptionApprouve'] = removeInscriptionApprouve;

	var valeurInscriptionImmunisations = $formulaireValeurs.find('.valeurInscriptionImmunisations').prop('checked');
	if(valeurInscriptionImmunisations != null && valeurInscriptionImmunisations !== '')
	var removeInscriptionImmunisations = $formulaireFiltres.find('.removeInscriptionImmunisations').val() === 'true';
	var valeurInscriptionImmunisationsSelectVal = $formulaireValeurs.find('select.setInscriptionImmunisations').val();
	var valeurInscriptionImmunisations = null;
	if(valeurInscriptionImmunisationsSelectVal !== '')
		valeurInscriptionImmunisations = valeurInscriptionImmunisationsSelectVal == 'true';
	setInscriptionImmunisations = removeInscriptionImmunisations ? null : valeurInscriptionImmunisations;
	if(removeInscriptionImmunisations || setInscriptionImmunisations != null && setInscriptionImmunisations !== '')
		vals['setInscriptionImmunisations'] = setInscriptionImmunisations;
	var addInscriptionImmunisations = $formulaireValeurs.find('.addInscriptionImmunisations').prop('checked');
	if(addInscriptionImmunisations != null && addInscriptionImmunisations !== '')
		vals['addInscriptionImmunisations'] = addInscriptionImmunisations;
	var removeInscriptionImmunisations = $formulaireValeurs.find('.removeInscriptionImmunisations').prop('checked');
	if(removeInscriptionImmunisations != null && removeInscriptionImmunisations !== '')
		vals['removeInscriptionImmunisations'] = removeInscriptionImmunisations;

	var valeurInscriptionNomGroupe = $formulaireValeurs.find('.valeurInscriptionNomGroupe').val();
	if(valeurInscriptionNomGroupe != null && valeurInscriptionNomGroupe !== '')
	var removeInscriptionNomGroupe = $formulaireFiltres.find('.removeInscriptionNomGroupe').val() === 'true';
	var setInscriptionNomGroupe = removeInscriptionNomGroupe ? null : $formulaireValeurs.find('.setInscriptionNomGroupe').val();
	if(removeInscriptionNomGroupe || setInscriptionNomGroupe != null && setInscriptionNomGroupe !== '')
		vals['setInscriptionNomGroupe'] = setInscriptionNomGroupe;
	var addInscriptionNomGroupe = $formulaireValeurs.find('.addInscriptionNomGroupe').val();
	if(addInscriptionNomGroupe != null && addInscriptionNomGroupe !== '')
		vals['addInscriptionNomGroupe'] = addInscriptionNomGroupe;
	var removeInscriptionNomGroupe = $formulaireValeurs.find('.removeInscriptionNomGroupe').val();
	if(removeInscriptionNomGroupe != null && removeInscriptionNomGroupe !== '')
		vals['removeInscriptionNomGroupe'] = removeInscriptionNomGroupe;

	var valeurCustomerProfileId = $formulaireValeurs.find('.valeurCustomerProfileId').val();
	if(valeurCustomerProfileId != null && valeurCustomerProfileId !== '')
	var removeCustomerProfileId = $formulaireFiltres.find('.removeCustomerProfileId').val() === 'true';
	var setCustomerProfileId = removeCustomerProfileId ? null : $formulaireValeurs.find('.setCustomerProfileId').val();
	if(removeCustomerProfileId || setCustomerProfileId != null && setCustomerProfileId !== '')
		vals['setCustomerProfileId'] = setCustomerProfileId;
	var addCustomerProfileId = $formulaireValeurs.find('.addCustomerProfileId').val();
	if(addCustomerProfileId != null && addCustomerProfileId !== '')
		vals['addCustomerProfileId'] = addCustomerProfileId;
	var removeCustomerProfileId = $formulaireValeurs.find('.removeCustomerProfileId').val();
	if(removeCustomerProfileId != null && removeCustomerProfileId !== '')
		vals['removeCustomerProfileId'] = removeCustomerProfileId;

	var valeurInscriptionPaimentComplet = $formulaireValeurs.find('.valeurInscriptionPaimentComplet').prop('checked');
	if(valeurInscriptionPaimentComplet != null && valeurInscriptionPaimentComplet !== '')
	var removeInscriptionPaimentComplet = $formulaireFiltres.find('.removeInscriptionPaimentComplet').val() === 'true';
	var valeurInscriptionPaimentCompletSelectVal = $formulaireValeurs.find('select.setInscriptionPaimentComplet').val();
	var valeurInscriptionPaimentComplet = null;
	if(valeurInscriptionPaimentCompletSelectVal !== '')
		valeurInscriptionPaimentComplet = valeurInscriptionPaimentCompletSelectVal == 'true';
	setInscriptionPaimentComplet = removeInscriptionPaimentComplet ? null : valeurInscriptionPaimentComplet;
	if(removeInscriptionPaimentComplet || setInscriptionPaimentComplet != null && setInscriptionPaimentComplet !== '')
		vals['setInscriptionPaimentComplet'] = setInscriptionPaimentComplet;
	var addInscriptionPaimentComplet = $formulaireValeurs.find('.addInscriptionPaimentComplet').prop('checked');
	if(addInscriptionPaimentComplet != null && addInscriptionPaimentComplet !== '')
		vals['addInscriptionPaimentComplet'] = addInscriptionPaimentComplet;
	var removeInscriptionPaimentComplet = $formulaireValeurs.find('.removeInscriptionPaimentComplet').prop('checked');
	if(removeInscriptionPaimentComplet != null && removeInscriptionPaimentComplet !== '')
		vals['removeInscriptionPaimentComplet'] = removeInscriptionPaimentComplet;

	var valeurEnfantPropre = $formulaireValeurs.find('.valeurEnfantPropre').prop('checked');
	if(valeurEnfantPropre != null && valeurEnfantPropre !== '')
	var removeEnfantPropre = $formulaireFiltres.find('.removeEnfantPropre').val() === 'true';
	var valeurEnfantPropreSelectVal = $formulaireValeurs.find('select.setEnfantPropre').val();
	var valeurEnfantPropre = null;
	if(valeurEnfantPropreSelectVal !== '')
		valeurEnfantPropre = valeurEnfantPropreSelectVal == 'true';
	setEnfantPropre = removeEnfantPropre ? null : valeurEnfantPropre;
	if(removeEnfantPropre || setEnfantPropre != null && setEnfantPropre !== '')
		vals['setEnfantPropre'] = setEnfantPropre;
	var addEnfantPropre = $formulaireValeurs.find('.addEnfantPropre').prop('checked');
	if(addEnfantPropre != null && addEnfantPropre !== '')
		vals['addEnfantPropre'] = addEnfantPropre;
	var removeEnfantPropre = $formulaireValeurs.find('.removeEnfantPropre').prop('checked');
	if(removeEnfantPropre != null && removeEnfantPropre !== '')
		vals['removeEnfantPropre'] = removeEnfantPropre;

	var valeurInscriptionPaimentChaqueMois = $formulaireValeurs.find('.valeurInscriptionPaimentChaqueMois').prop('checked');
	if(valeurInscriptionPaimentChaqueMois != null && valeurInscriptionPaimentChaqueMois !== '')
	var removeInscriptionPaimentChaqueMois = $formulaireFiltres.find('.removeInscriptionPaimentChaqueMois').val() === 'true';
	var valeurInscriptionPaimentChaqueMoisSelectVal = $formulaireValeurs.find('select.setInscriptionPaimentChaqueMois').val();
	var valeurInscriptionPaimentChaqueMois = null;
	if(valeurInscriptionPaimentChaqueMoisSelectVal !== '')
		valeurInscriptionPaimentChaqueMois = valeurInscriptionPaimentChaqueMoisSelectVal == 'true';
	setInscriptionPaimentChaqueMois = removeInscriptionPaimentChaqueMois ? null : valeurInscriptionPaimentChaqueMois;
	if(removeInscriptionPaimentChaqueMois || setInscriptionPaimentChaqueMois != null && setInscriptionPaimentChaqueMois !== '')
		vals['setInscriptionPaimentChaqueMois'] = setInscriptionPaimentChaqueMois;
	var addInscriptionPaimentChaqueMois = $formulaireValeurs.find('.addInscriptionPaimentChaqueMois').prop('checked');
	if(addInscriptionPaimentChaqueMois != null && addInscriptionPaimentChaqueMois !== '')
		vals['addInscriptionPaimentChaqueMois'] = addInscriptionPaimentChaqueMois;
	var removeInscriptionPaimentChaqueMois = $formulaireValeurs.find('.removeInscriptionPaimentChaqueMois').prop('checked');
	if(removeInscriptionPaimentChaqueMois != null && removeInscriptionPaimentChaqueMois !== '')
		vals['removeInscriptionPaimentChaqueMois'] = removeInscriptionPaimentChaqueMois;

	var valeurFamilleMarie = $formulaireValeurs.find('.valeurFamilleMarie').prop('checked');
	if(valeurFamilleMarie != null && valeurFamilleMarie !== '')
	var removeFamilleMarie = $formulaireFiltres.find('.removeFamilleMarie').val() === 'true';
	var valeurFamilleMarieSelectVal = $formulaireValeurs.find('select.setFamilleMarie').val();
	var valeurFamilleMarie = null;
	if(valeurFamilleMarieSelectVal !== '')
		valeurFamilleMarie = valeurFamilleMarieSelectVal == 'true';
	setFamilleMarie = removeFamilleMarie ? null : valeurFamilleMarie;
	if(removeFamilleMarie || setFamilleMarie != null && setFamilleMarie !== '')
		vals['setFamilleMarie'] = setFamilleMarie;
	var addFamilleMarie = $formulaireValeurs.find('.addFamilleMarie').prop('checked');
	if(addFamilleMarie != null && addFamilleMarie !== '')
		vals['addFamilleMarie'] = addFamilleMarie;
	var removeFamilleMarie = $formulaireValeurs.find('.removeFamilleMarie').prop('checked');
	if(removeFamilleMarie != null && removeFamilleMarie !== '')
		vals['removeFamilleMarie'] = removeFamilleMarie;

	var valeurFamilleSepare = $formulaireValeurs.find('.valeurFamilleSepare').prop('checked');
	if(valeurFamilleSepare != null && valeurFamilleSepare !== '')
	var removeFamilleSepare = $formulaireFiltres.find('.removeFamilleSepare').val() === 'true';
	var valeurFamilleSepareSelectVal = $formulaireValeurs.find('select.setFamilleSepare').val();
	var valeurFamilleSepare = null;
	if(valeurFamilleSepareSelectVal !== '')
		valeurFamilleSepare = valeurFamilleSepareSelectVal == 'true';
	setFamilleSepare = removeFamilleSepare ? null : valeurFamilleSepare;
	if(removeFamilleSepare || setFamilleSepare != null && setFamilleSepare !== '')
		vals['setFamilleSepare'] = setFamilleSepare;
	var addFamilleSepare = $formulaireValeurs.find('.addFamilleSepare').prop('checked');
	if(addFamilleSepare != null && addFamilleSepare !== '')
		vals['addFamilleSepare'] = addFamilleSepare;
	var removeFamilleSepare = $formulaireValeurs.find('.removeFamilleSepare').prop('checked');
	if(removeFamilleSepare != null && removeFamilleSepare !== '')
		vals['removeFamilleSepare'] = removeFamilleSepare;

	var valeurFamilleDivorce = $formulaireValeurs.find('.valeurFamilleDivorce').prop('checked');
	if(valeurFamilleDivorce != null && valeurFamilleDivorce !== '')
	var removeFamilleDivorce = $formulaireFiltres.find('.removeFamilleDivorce').val() === 'true';
	var valeurFamilleDivorceSelectVal = $formulaireValeurs.find('select.setFamilleDivorce').val();
	var valeurFamilleDivorce = null;
	if(valeurFamilleDivorceSelectVal !== '')
		valeurFamilleDivorce = valeurFamilleDivorceSelectVal == 'true';
	setFamilleDivorce = removeFamilleDivorce ? null : valeurFamilleDivorce;
	if(removeFamilleDivorce || setFamilleDivorce != null && setFamilleDivorce !== '')
		vals['setFamilleDivorce'] = setFamilleDivorce;
	var addFamilleDivorce = $formulaireValeurs.find('.addFamilleDivorce').prop('checked');
	if(addFamilleDivorce != null && addFamilleDivorce !== '')
		vals['addFamilleDivorce'] = addFamilleDivorce;
	var removeFamilleDivorce = $formulaireValeurs.find('.removeFamilleDivorce').prop('checked');
	if(removeFamilleDivorce != null && removeFamilleDivorce !== '')
		vals['removeFamilleDivorce'] = removeFamilleDivorce;

	var valeurFamilleAddresse = $formulaireValeurs.find('.valeurFamilleAddresse').val();
	if(valeurFamilleAddresse != null && valeurFamilleAddresse !== '')
	var removeFamilleAddresse = $formulaireFiltres.find('.removeFamilleAddresse').val() === 'true';
	var setFamilleAddresse = removeFamilleAddresse ? null : $formulaireValeurs.find('.setFamilleAddresse').val();
	if(removeFamilleAddresse || setFamilleAddresse != null && setFamilleAddresse !== '')
		vals['setFamilleAddresse'] = setFamilleAddresse;
	var addFamilleAddresse = $formulaireValeurs.find('.addFamilleAddresse').val();
	if(addFamilleAddresse != null && addFamilleAddresse !== '')
		vals['addFamilleAddresse'] = addFamilleAddresse;
	var removeFamilleAddresse = $formulaireValeurs.find('.removeFamilleAddresse').val();
	if(removeFamilleAddresse != null && removeFamilleAddresse !== '')
		vals['removeFamilleAddresse'] = removeFamilleAddresse;

	var valeurInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.valeurInscriptionConsiderationsSpeciales').val();
	if(valeurInscriptionConsiderationsSpeciales != null && valeurInscriptionConsiderationsSpeciales !== '')
	var removeInscriptionConsiderationsSpeciales = $formulaireFiltres.find('.removeInscriptionConsiderationsSpeciales').val() === 'true';
	var setInscriptionConsiderationsSpeciales = removeInscriptionConsiderationsSpeciales ? null : $formulaireValeurs.find('.setInscriptionConsiderationsSpeciales').val();
	if(removeInscriptionConsiderationsSpeciales || setInscriptionConsiderationsSpeciales != null && setInscriptionConsiderationsSpeciales !== '')
		vals['setInscriptionConsiderationsSpeciales'] = setInscriptionConsiderationsSpeciales;
	var addInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.addInscriptionConsiderationsSpeciales').val();
	if(addInscriptionConsiderationsSpeciales != null && addInscriptionConsiderationsSpeciales !== '')
		vals['addInscriptionConsiderationsSpeciales'] = addInscriptionConsiderationsSpeciales;
	var removeInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.removeInscriptionConsiderationsSpeciales').val();
	if(removeInscriptionConsiderationsSpeciales != null && removeInscriptionConsiderationsSpeciales !== '')
		vals['removeInscriptionConsiderationsSpeciales'] = removeInscriptionConsiderationsSpeciales;

	var valeurEnfantConditionsMedicales = $formulaireValeurs.find('.valeurEnfantConditionsMedicales').val();
	if(valeurEnfantConditionsMedicales != null && valeurEnfantConditionsMedicales !== '')
	var removeEnfantConditionsMedicales = $formulaireFiltres.find('.removeEnfantConditionsMedicales').val() === 'true';
	var setEnfantConditionsMedicales = removeEnfantConditionsMedicales ? null : $formulaireValeurs.find('.setEnfantConditionsMedicales').val();
	if(removeEnfantConditionsMedicales || setEnfantConditionsMedicales != null && setEnfantConditionsMedicales !== '')
		vals['setEnfantConditionsMedicales'] = setEnfantConditionsMedicales;
	var addEnfantConditionsMedicales = $formulaireValeurs.find('.addEnfantConditionsMedicales').val();
	if(addEnfantConditionsMedicales != null && addEnfantConditionsMedicales !== '')
		vals['addEnfantConditionsMedicales'] = addEnfantConditionsMedicales;
	var removeEnfantConditionsMedicales = $formulaireValeurs.find('.removeEnfantConditionsMedicales').val();
	if(removeEnfantConditionsMedicales != null && removeEnfantConditionsMedicales !== '')
		vals['removeEnfantConditionsMedicales'] = removeEnfantConditionsMedicales;

	var valeurEnfantEcolesPrecedemmentFrequentees = $formulaireValeurs.find('.valeurEnfantEcolesPrecedemmentFrequentees').val();
	if(valeurEnfantEcolesPrecedemmentFrequentees != null && valeurEnfantEcolesPrecedemmentFrequentees !== '')
	var removeEnfantEcolesPrecedemmentFrequentees = $formulaireFiltres.find('.removeEnfantEcolesPrecedemmentFrequentees').val() === 'true';
	var setEnfantEcolesPrecedemmentFrequentees = removeEnfantEcolesPrecedemmentFrequentees ? null : $formulaireValeurs.find('.setEnfantEcolesPrecedemmentFrequentees').val();
	if(removeEnfantEcolesPrecedemmentFrequentees || setEnfantEcolesPrecedemmentFrequentees != null && setEnfantEcolesPrecedemmentFrequentees !== '')
		vals['setEnfantEcolesPrecedemmentFrequentees'] = setEnfantEcolesPrecedemmentFrequentees;
	var addEnfantEcolesPrecedemmentFrequentees = $formulaireValeurs.find('.addEnfantEcolesPrecedemmentFrequentees').val();
	if(addEnfantEcolesPrecedemmentFrequentees != null && addEnfantEcolesPrecedemmentFrequentees !== '')
		vals['addEnfantEcolesPrecedemmentFrequentees'] = addEnfantEcolesPrecedemmentFrequentees;
	var removeEnfantEcolesPrecedemmentFrequentees = $formulaireValeurs.find('.removeEnfantEcolesPrecedemmentFrequentees').val();
	if(removeEnfantEcolesPrecedemmentFrequentees != null && removeEnfantEcolesPrecedemmentFrequentees !== '')
		vals['removeEnfantEcolesPrecedemmentFrequentees'] = removeEnfantEcolesPrecedemmentFrequentees;

	var valeurFamilleCommentVousConnaissezEcole = $formulaireValeurs.find('.valeurFamilleCommentVousConnaissezEcole').val();
	if(valeurFamilleCommentVousConnaissezEcole != null && valeurFamilleCommentVousConnaissezEcole !== '')
	var removeFamilleCommentVousConnaissezEcole = $formulaireFiltres.find('.removeFamilleCommentVousConnaissezEcole').val() === 'true';
	var setFamilleCommentVousConnaissezEcole = removeFamilleCommentVousConnaissezEcole ? null : $formulaireValeurs.find('.setFamilleCommentVousConnaissezEcole').val();
	if(removeFamilleCommentVousConnaissezEcole || setFamilleCommentVousConnaissezEcole != null && setFamilleCommentVousConnaissezEcole !== '')
		vals['setFamilleCommentVousConnaissezEcole'] = setFamilleCommentVousConnaissezEcole;
	var addFamilleCommentVousConnaissezEcole = $formulaireValeurs.find('.addFamilleCommentVousConnaissezEcole').val();
	if(addFamilleCommentVousConnaissezEcole != null && addFamilleCommentVousConnaissezEcole !== '')
		vals['addFamilleCommentVousConnaissezEcole'] = addFamilleCommentVousConnaissezEcole;
	var removeFamilleCommentVousConnaissezEcole = $formulaireValeurs.find('.removeFamilleCommentVousConnaissezEcole').val();
	if(removeFamilleCommentVousConnaissezEcole != null && removeFamilleCommentVousConnaissezEcole !== '')
		vals['removeFamilleCommentVousConnaissezEcole'] = removeFamilleCommentVousConnaissezEcole;

	var valeurEnfantDescription = $formulaireValeurs.find('.valeurEnfantDescription').val();
	if(valeurEnfantDescription != null && valeurEnfantDescription !== '')
	var removeEnfantDescription = $formulaireFiltres.find('.removeEnfantDescription').val() === 'true';
	var setEnfantDescription = removeEnfantDescription ? null : $formulaireValeurs.find('.setEnfantDescription').val();
	if(removeEnfantDescription || setEnfantDescription != null && setEnfantDescription !== '')
		vals['setEnfantDescription'] = setEnfantDescription;
	var addEnfantDescription = $formulaireValeurs.find('.addEnfantDescription').val();
	if(addEnfantDescription != null && addEnfantDescription !== '')
		vals['addEnfantDescription'] = addEnfantDescription;
	var removeEnfantDescription = $formulaireValeurs.find('.removeEnfantDescription').val();
	if(removeEnfantDescription != null && removeEnfantDescription !== '')
		vals['removeEnfantDescription'] = removeEnfantDescription;

	var valeurEnfantObjectifs = $formulaireValeurs.find('.valeurEnfantObjectifs').val();
	if(valeurEnfantObjectifs != null && valeurEnfantObjectifs !== '')
	var removeEnfantObjectifs = $formulaireFiltres.find('.removeEnfantObjectifs').val() === 'true';
	var setEnfantObjectifs = removeEnfantObjectifs ? null : $formulaireValeurs.find('.setEnfantObjectifs').val();
	if(removeEnfantObjectifs || setEnfantObjectifs != null && setEnfantObjectifs !== '')
		vals['setEnfantObjectifs'] = setEnfantObjectifs;
	var addEnfantObjectifs = $formulaireValeurs.find('.addEnfantObjectifs').val();
	if(addEnfantObjectifs != null && addEnfantObjectifs !== '')
		vals['addEnfantObjectifs'] = addEnfantObjectifs;
	var removeEnfantObjectifs = $formulaireValeurs.find('.removeEnfantObjectifs').val();
	if(removeEnfantObjectifs != null && removeEnfantObjectifs !== '')
		vals['removeEnfantObjectifs'] = removeEnfantObjectifs;

	var valeurBlocCles = $formulaireValeurs.find('input.valeurBlocCles:checked').val();
	if(valeurBlocCles != null && valeurBlocCles !== '')
		vals['addBlocCles'] = valeurBlocCles;

	var valeurEnfantCle = $formulaireValeurs.find('input.valeurEnfantCle:checked').val();
	if(valeurEnfantCle != null && valeurEnfantCle !== '')
		vals['setEnfantCle'] = valeurEnfantCle;

	var valeurMereCles = $formulaireValeurs.find('input.valeurMereCles:checked').val();
	if(valeurMereCles != null && valeurMereCles !== '')
		vals['addMereCles'] = valeurMereCles;

	var valeurPereCles = $formulaireValeurs.find('input.valeurPereCles:checked').val();
	if(valeurPereCles != null && valeurPereCles !== '')
		vals['addPereCles'] = valeurPereCles;

	var valeurGardienCles = $formulaireValeurs.find('input.valeurGardienCles:checked').val();
	if(valeurGardienCles != null && valeurGardienCles !== '')
		vals['addGardienCles'] = valeurGardienCles;

	var valeurPaiementCles = $formulaireValeurs.find('input.valeurPaiementCles:checked').val();
	if(valeurPaiementCles != null && valeurPaiementCles !== '')
		vals['addPaiementCles'] = valeurPaiementCles;

	var valeurUtilisateurCles = $formulaireValeurs.find('input.valeurUtilisateurCles:checked').val();
	if(valeurUtilisateurCles != null && valeurUtilisateurCles !== '')
		vals['addUtilisateurCles'] = valeurUtilisateurCles;

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

	var valeurSessionId = $formulaireValeurs.find('.valeurSessionId').val();
	if(valeurSessionId != null && valeurSessionId !== '')
	var removeSessionId = $formulaireFiltres.find('.removeSessionId').val() === 'true';
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
	if(valeurUtilisateurId != null && valeurUtilisateurId !== '')
	var removeUtilisateurId = $formulaireFiltres.find('.removeUtilisateurId').val() === 'true';
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
	if(valeurUtilisateurCle != null && valeurUtilisateurCle !== '')
	var removeUtilisateurCle = $formulaireFiltres.find('.removeUtilisateurCle').val() === 'true';
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

	var valeurEnfantNomComplet = $formulaireValeurs.find('.valeurEnfantNomComplet').val();
	if(valeurEnfantNomComplet != null && valeurEnfantNomComplet !== '')
	var removeEnfantNomComplet = $formulaireFiltres.find('.removeEnfantNomComplet').val() === 'true';
	var setEnfantNomComplet = removeEnfantNomComplet ? null : $formulaireValeurs.find('.setEnfantNomComplet').val();
	if(removeEnfantNomComplet || setEnfantNomComplet != null && setEnfantNomComplet !== '')
		vals['setEnfantNomComplet'] = setEnfantNomComplet;
	var addEnfantNomComplet = $formulaireValeurs.find('.addEnfantNomComplet').val();
	if(addEnfantNomComplet != null && addEnfantNomComplet !== '')
		vals['addEnfantNomComplet'] = addEnfantNomComplet;
	var removeEnfantNomComplet = $formulaireValeurs.find('.removeEnfantNomComplet').val();
	if(removeEnfantNomComplet != null && removeEnfantNomComplet !== '')
		vals['removeEnfantNomComplet'] = removeEnfantNomComplet;

	var valeurEnfantNomCompletPrefere = $formulaireValeurs.find('.valeurEnfantNomCompletPrefere').val();
	if(valeurEnfantNomCompletPrefere != null && valeurEnfantNomCompletPrefere !== '')
	var removeEnfantNomCompletPrefere = $formulaireFiltres.find('.removeEnfantNomCompletPrefere').val() === 'true';
	var setEnfantNomCompletPrefere = removeEnfantNomCompletPrefere ? null : $formulaireValeurs.find('.setEnfantNomCompletPrefere').val();
	if(removeEnfantNomCompletPrefere || setEnfantNomCompletPrefere != null && setEnfantNomCompletPrefere !== '')
		vals['setEnfantNomCompletPrefere'] = setEnfantNomCompletPrefere;
	var addEnfantNomCompletPrefere = $formulaireValeurs.find('.addEnfantNomCompletPrefere').val();
	if(addEnfantNomCompletPrefere != null && addEnfantNomCompletPrefere !== '')
		vals['addEnfantNomCompletPrefere'] = addEnfantNomCompletPrefere;
	var removeEnfantNomCompletPrefere = $formulaireValeurs.find('.removeEnfantNomCompletPrefere').val();
	if(removeEnfantNomCompletPrefere != null && removeEnfantNomCompletPrefere !== '')
		vals['removeEnfantNomCompletPrefere'] = removeEnfantNomCompletPrefere;

	var valeurEnfantDateNaissance = $formulaireValeurs.find('.valeurEnfantDateNaissance').val();
	if(valeurEnfantDateNaissance != null && valeurEnfantDateNaissance !== '')
	var removeEnfantDateNaissance = $formulaireFiltres.find('.removeEnfantDateNaissance').val() === 'true';
	var setEnfantDateNaissance = removeEnfantDateNaissance ? null : $formulaireValeurs.find('.setEnfantDateNaissance').val();
	if(removeEnfantDateNaissance || setEnfantDateNaissance != null && setEnfantDateNaissance !== '')
		vals['setEnfantDateNaissance'] = setEnfantDateNaissance;
	var addEnfantDateNaissance = $formulaireValeurs.find('.addEnfantDateNaissance').val();
	if(addEnfantDateNaissance != null && addEnfantDateNaissance !== '')
		vals['addEnfantDateNaissance'] = addEnfantDateNaissance;
	var removeEnfantDateNaissance = $formulaireValeurs.find('.removeEnfantDateNaissance').val();
	if(removeEnfantDateNaissance != null && removeEnfantDateNaissance !== '')
		vals['removeEnfantDateNaissance'] = removeEnfantDateNaissance;

	var valeurEcoleAddresse = $formulaireValeurs.find('.valeurEcoleAddresse').val();
	if(valeurEcoleAddresse != null && valeurEcoleAddresse !== '')
	var removeEcoleAddresse = $formulaireFiltres.find('.removeEcoleAddresse').val() === 'true';
	var setEcoleAddresse = removeEcoleAddresse ? null : $formulaireValeurs.find('.setEcoleAddresse').val();
	if(removeEcoleAddresse || setEcoleAddresse != null && setEcoleAddresse !== '')
		vals['setEcoleAddresse'] = setEcoleAddresse;
	var addEcoleAddresse = $formulaireValeurs.find('.addEcoleAddresse').val();
	if(addEcoleAddresse != null && addEcoleAddresse !== '')
		vals['addEcoleAddresse'] = addEcoleAddresse;
	var removeEcoleAddresse = $formulaireValeurs.find('.removeEcoleAddresse').val();
	if(removeEcoleAddresse != null && removeEcoleAddresse !== '')
		vals['removeEcoleAddresse'] = removeEcoleAddresse;

	var valeurInscriptionDateFrais = $formulaireValeurs.find('.valeurInscriptionDateFrais').val();
	if(valeurInscriptionDateFrais != null && valeurInscriptionDateFrais !== '')
	var removeInscriptionDateFrais = $formulaireFiltres.find('.removeInscriptionDateFrais').val() === 'true';
	var setInscriptionDateFrais = removeInscriptionDateFrais ? null : $formulaireValeurs.find('.setInscriptionDateFrais').val();
	if(removeInscriptionDateFrais || setInscriptionDateFrais != null && setInscriptionDateFrais !== '')
		vals['setInscriptionDateFrais'] = setInscriptionDateFrais;
	var addInscriptionDateFrais = $formulaireValeurs.find('.addInscriptionDateFrais').val();
	if(addInscriptionDateFrais != null && addInscriptionDateFrais !== '')
		vals['addInscriptionDateFrais'] = addInscriptionDateFrais;
	var removeInscriptionDateFrais = $formulaireValeurs.find('.removeInscriptionDateFrais').val();
	if(removeInscriptionDateFrais != null && removeInscriptionDateFrais !== '')
		vals['removeInscriptionDateFrais'] = removeInscriptionDateFrais;

	var valeurInscriptionSignature1 = $formulaireValeurs.find('.valeurInscriptionSignature1').val();
	if(valeurInscriptionSignature1 != null && valeurInscriptionSignature1 !== '')
	var removeInscriptionSignature1 = $formulaireFiltres.find('.removeInscriptionSignature1').val() === 'true';
	var setInscriptionSignature1 = removeInscriptionSignature1 ? null : $formulaireValeurs.find('.setInscriptionSignature1').val();
	if(removeInscriptionSignature1 || setInscriptionSignature1 != null && setInscriptionSignature1 !== '')
		vals['setInscriptionSignature1'] = setInscriptionSignature1;
	var addInscriptionSignature1 = $formulaireValeurs.find('.addInscriptionSignature1').val();
	if(addInscriptionSignature1 != null && addInscriptionSignature1 !== '')
		vals['addInscriptionSignature1'] = addInscriptionSignature1;
	var removeInscriptionSignature1 = $formulaireValeurs.find('.removeInscriptionSignature1').val();
	if(removeInscriptionSignature1 != null && removeInscriptionSignature1 !== '')
		vals['removeInscriptionSignature1'] = removeInscriptionSignature1;

	var valeurInscriptionSignature2 = $formulaireValeurs.find('.valeurInscriptionSignature2').val();
	if(valeurInscriptionSignature2 != null && valeurInscriptionSignature2 !== '')
	var removeInscriptionSignature2 = $formulaireFiltres.find('.removeInscriptionSignature2').val() === 'true';
	var setInscriptionSignature2 = removeInscriptionSignature2 ? null : $formulaireValeurs.find('.setInscriptionSignature2').val();
	if(removeInscriptionSignature2 || setInscriptionSignature2 != null && setInscriptionSignature2 !== '')
		vals['setInscriptionSignature2'] = setInscriptionSignature2;
	var addInscriptionSignature2 = $formulaireValeurs.find('.addInscriptionSignature2').val();
	if(addInscriptionSignature2 != null && addInscriptionSignature2 !== '')
		vals['addInscriptionSignature2'] = addInscriptionSignature2;
	var removeInscriptionSignature2 = $formulaireValeurs.find('.removeInscriptionSignature2').val();
	if(removeInscriptionSignature2 != null && removeInscriptionSignature2 !== '')
		vals['removeInscriptionSignature2'] = removeInscriptionSignature2;

	var valeurInscriptionSignature3 = $formulaireValeurs.find('.valeurInscriptionSignature3').val();
	if(valeurInscriptionSignature3 != null && valeurInscriptionSignature3 !== '')
	var removeInscriptionSignature3 = $formulaireFiltres.find('.removeInscriptionSignature3').val() === 'true';
	var setInscriptionSignature3 = removeInscriptionSignature3 ? null : $formulaireValeurs.find('.setInscriptionSignature3').val();
	if(removeInscriptionSignature3 || setInscriptionSignature3 != null && setInscriptionSignature3 !== '')
		vals['setInscriptionSignature3'] = setInscriptionSignature3;
	var addInscriptionSignature3 = $formulaireValeurs.find('.addInscriptionSignature3').val();
	if(addInscriptionSignature3 != null && addInscriptionSignature3 !== '')
		vals['addInscriptionSignature3'] = addInscriptionSignature3;
	var removeInscriptionSignature3 = $formulaireValeurs.find('.removeInscriptionSignature3').val();
	if(removeInscriptionSignature3 != null && removeInscriptionSignature3 !== '')
		vals['removeInscriptionSignature3'] = removeInscriptionSignature3;

	var valeurInscriptionSignature4 = $formulaireValeurs.find('.valeurInscriptionSignature4').val();
	if(valeurInscriptionSignature4 != null && valeurInscriptionSignature4 !== '')
	var removeInscriptionSignature4 = $formulaireFiltres.find('.removeInscriptionSignature4').val() === 'true';
	var setInscriptionSignature4 = removeInscriptionSignature4 ? null : $formulaireValeurs.find('.setInscriptionSignature4').val();
	if(removeInscriptionSignature4 || setInscriptionSignature4 != null && setInscriptionSignature4 !== '')
		vals['setInscriptionSignature4'] = setInscriptionSignature4;
	var addInscriptionSignature4 = $formulaireValeurs.find('.addInscriptionSignature4').val();
	if(addInscriptionSignature4 != null && addInscriptionSignature4 !== '')
		vals['addInscriptionSignature4'] = addInscriptionSignature4;
	var removeInscriptionSignature4 = $formulaireValeurs.find('.removeInscriptionSignature4').val();
	if(removeInscriptionSignature4 != null && removeInscriptionSignature4 !== '')
		vals['removeInscriptionSignature4'] = removeInscriptionSignature4;

	var valeurInscriptionSignature5 = $formulaireValeurs.find('.valeurInscriptionSignature5').val();
	if(valeurInscriptionSignature5 != null && valeurInscriptionSignature5 !== '')
	var removeInscriptionSignature5 = $formulaireFiltres.find('.removeInscriptionSignature5').val() === 'true';
	var setInscriptionSignature5 = removeInscriptionSignature5 ? null : $formulaireValeurs.find('.setInscriptionSignature5').val();
	if(removeInscriptionSignature5 || setInscriptionSignature5 != null && setInscriptionSignature5 !== '')
		vals['setInscriptionSignature5'] = setInscriptionSignature5;
	var addInscriptionSignature5 = $formulaireValeurs.find('.addInscriptionSignature5').val();
	if(addInscriptionSignature5 != null && addInscriptionSignature5 !== '')
		vals['addInscriptionSignature5'] = addInscriptionSignature5;
	var removeInscriptionSignature5 = $formulaireValeurs.find('.removeInscriptionSignature5').val();
	if(removeInscriptionSignature5 != null && removeInscriptionSignature5 !== '')
		vals['removeInscriptionSignature5'] = removeInscriptionSignature5;

	var valeurInscriptionSignature6 = $formulaireValeurs.find('.valeurInscriptionSignature6').val();
	if(valeurInscriptionSignature6 != null && valeurInscriptionSignature6 !== '')
	var removeInscriptionSignature6 = $formulaireFiltres.find('.removeInscriptionSignature6').val() === 'true';
	var setInscriptionSignature6 = removeInscriptionSignature6 ? null : $formulaireValeurs.find('.setInscriptionSignature6').val();
	if(removeInscriptionSignature6 || setInscriptionSignature6 != null && setInscriptionSignature6 !== '')
		vals['setInscriptionSignature6'] = setInscriptionSignature6;
	var addInscriptionSignature6 = $formulaireValeurs.find('.addInscriptionSignature6').val();
	if(addInscriptionSignature6 != null && addInscriptionSignature6 !== '')
		vals['addInscriptionSignature6'] = addInscriptionSignature6;
	var removeInscriptionSignature6 = $formulaireValeurs.find('.removeInscriptionSignature6').val();
	if(removeInscriptionSignature6 != null && removeInscriptionSignature6 !== '')
		vals['removeInscriptionSignature6'] = removeInscriptionSignature6;

	var valeurInscriptionSignature7 = $formulaireValeurs.find('.valeurInscriptionSignature7').val();
	if(valeurInscriptionSignature7 != null && valeurInscriptionSignature7 !== '')
	var removeInscriptionSignature7 = $formulaireFiltres.find('.removeInscriptionSignature7').val() === 'true';
	var setInscriptionSignature7 = removeInscriptionSignature7 ? null : $formulaireValeurs.find('.setInscriptionSignature7').val();
	if(removeInscriptionSignature7 || setInscriptionSignature7 != null && setInscriptionSignature7 !== '')
		vals['setInscriptionSignature7'] = setInscriptionSignature7;
	var addInscriptionSignature7 = $formulaireValeurs.find('.addInscriptionSignature7').val();
	if(addInscriptionSignature7 != null && addInscriptionSignature7 !== '')
		vals['addInscriptionSignature7'] = addInscriptionSignature7;
	var removeInscriptionSignature7 = $formulaireValeurs.find('.removeInscriptionSignature7').val();
	if(removeInscriptionSignature7 != null && removeInscriptionSignature7 !== '')
		vals['removeInscriptionSignature7'] = removeInscriptionSignature7;

	var valeurInscriptionSignature8 = $formulaireValeurs.find('.valeurInscriptionSignature8').val();
	if(valeurInscriptionSignature8 != null && valeurInscriptionSignature8 !== '')
	var removeInscriptionSignature8 = $formulaireFiltres.find('.removeInscriptionSignature8').val() === 'true';
	var setInscriptionSignature8 = removeInscriptionSignature8 ? null : $formulaireValeurs.find('.setInscriptionSignature8').val();
	if(removeInscriptionSignature8 || setInscriptionSignature8 != null && setInscriptionSignature8 !== '')
		vals['setInscriptionSignature8'] = setInscriptionSignature8;
	var addInscriptionSignature8 = $formulaireValeurs.find('.addInscriptionSignature8').val();
	if(addInscriptionSignature8 != null && addInscriptionSignature8 !== '')
		vals['addInscriptionSignature8'] = addInscriptionSignature8;
	var removeInscriptionSignature8 = $formulaireValeurs.find('.removeInscriptionSignature8').val();
	if(removeInscriptionSignature8 != null && removeInscriptionSignature8 !== '')
		vals['removeInscriptionSignature8'] = removeInscriptionSignature8;

	var valeurInscriptionSignature9 = $formulaireValeurs.find('.valeurInscriptionSignature9').val();
	if(valeurInscriptionSignature9 != null && valeurInscriptionSignature9 !== '')
	var removeInscriptionSignature9 = $formulaireFiltres.find('.removeInscriptionSignature9').val() === 'true';
	var setInscriptionSignature9 = removeInscriptionSignature9 ? null : $formulaireValeurs.find('.setInscriptionSignature9').val();
	if(removeInscriptionSignature9 || setInscriptionSignature9 != null && setInscriptionSignature9 !== '')
		vals['setInscriptionSignature9'] = setInscriptionSignature9;
	var addInscriptionSignature9 = $formulaireValeurs.find('.addInscriptionSignature9').val();
	if(addInscriptionSignature9 != null && addInscriptionSignature9 !== '')
		vals['addInscriptionSignature9'] = addInscriptionSignature9;
	var removeInscriptionSignature9 = $formulaireValeurs.find('.removeInscriptionSignature9').val();
	if(removeInscriptionSignature9 != null && removeInscriptionSignature9 !== '')
		vals['removeInscriptionSignature9'] = removeInscriptionSignature9;

	var valeurInscriptionSignature10 = $formulaireValeurs.find('.valeurInscriptionSignature10').val();
	if(valeurInscriptionSignature10 != null && valeurInscriptionSignature10 !== '')
	var removeInscriptionSignature10 = $formulaireFiltres.find('.removeInscriptionSignature10').val() === 'true';
	var setInscriptionSignature10 = removeInscriptionSignature10 ? null : $formulaireValeurs.find('.setInscriptionSignature10').val();
	if(removeInscriptionSignature10 || setInscriptionSignature10 != null && setInscriptionSignature10 !== '')
		vals['setInscriptionSignature10'] = setInscriptionSignature10;
	var addInscriptionSignature10 = $formulaireValeurs.find('.addInscriptionSignature10').val();
	if(addInscriptionSignature10 != null && addInscriptionSignature10 !== '')
		vals['addInscriptionSignature10'] = addInscriptionSignature10;
	var removeInscriptionSignature10 = $formulaireValeurs.find('.removeInscriptionSignature10').val();
	if(removeInscriptionSignature10 != null && removeInscriptionSignature10 !== '')
		vals['removeInscriptionSignature10'] = removeInscriptionSignature10;

	var valeurInscriptionDate1 = $formulaireValeurs.find('.valeurInscriptionDate1').val();
	if(valeurInscriptionDate1 != null && valeurInscriptionDate1 !== '')
	var removeInscriptionDate1 = $formulaireFiltres.find('.removeInscriptionDate1').val() === 'true';
	var setInscriptionDate1 = removeInscriptionDate1 ? null : $formulaireValeurs.find('.setInscriptionDate1').val();
	if(removeInscriptionDate1 || setInscriptionDate1 != null && setInscriptionDate1 !== '')
		vals['setInscriptionDate1'] = setInscriptionDate1;
	var addInscriptionDate1 = $formulaireValeurs.find('.addInscriptionDate1').val();
	if(addInscriptionDate1 != null && addInscriptionDate1 !== '')
		vals['addInscriptionDate1'] = addInscriptionDate1;
	var removeInscriptionDate1 = $formulaireValeurs.find('.removeInscriptionDate1').val();
	if(removeInscriptionDate1 != null && removeInscriptionDate1 !== '')
		vals['removeInscriptionDate1'] = removeInscriptionDate1;

	var valeurInscriptionDate2 = $formulaireValeurs.find('.valeurInscriptionDate2').val();
	if(valeurInscriptionDate2 != null && valeurInscriptionDate2 !== '')
	var removeInscriptionDate2 = $formulaireFiltres.find('.removeInscriptionDate2').val() === 'true';
	var setInscriptionDate2 = removeInscriptionDate2 ? null : $formulaireValeurs.find('.setInscriptionDate2').val();
	if(removeInscriptionDate2 || setInscriptionDate2 != null && setInscriptionDate2 !== '')
		vals['setInscriptionDate2'] = setInscriptionDate2;
	var addInscriptionDate2 = $formulaireValeurs.find('.addInscriptionDate2').val();
	if(addInscriptionDate2 != null && addInscriptionDate2 !== '')
		vals['addInscriptionDate2'] = addInscriptionDate2;
	var removeInscriptionDate2 = $formulaireValeurs.find('.removeInscriptionDate2').val();
	if(removeInscriptionDate2 != null && removeInscriptionDate2 !== '')
		vals['removeInscriptionDate2'] = removeInscriptionDate2;

	var valeurInscriptionDate3 = $formulaireValeurs.find('.valeurInscriptionDate3').val();
	if(valeurInscriptionDate3 != null && valeurInscriptionDate3 !== '')
	var removeInscriptionDate3 = $formulaireFiltres.find('.removeInscriptionDate3').val() === 'true';
	var setInscriptionDate3 = removeInscriptionDate3 ? null : $formulaireValeurs.find('.setInscriptionDate3').val();
	if(removeInscriptionDate3 || setInscriptionDate3 != null && setInscriptionDate3 !== '')
		vals['setInscriptionDate3'] = setInscriptionDate3;
	var addInscriptionDate3 = $formulaireValeurs.find('.addInscriptionDate3').val();
	if(addInscriptionDate3 != null && addInscriptionDate3 !== '')
		vals['addInscriptionDate3'] = addInscriptionDate3;
	var removeInscriptionDate3 = $formulaireValeurs.find('.removeInscriptionDate3').val();
	if(removeInscriptionDate3 != null && removeInscriptionDate3 !== '')
		vals['removeInscriptionDate3'] = removeInscriptionDate3;

	var valeurInscriptionDate4 = $formulaireValeurs.find('.valeurInscriptionDate4').val();
	if(valeurInscriptionDate4 != null && valeurInscriptionDate4 !== '')
	var removeInscriptionDate4 = $formulaireFiltres.find('.removeInscriptionDate4').val() === 'true';
	var setInscriptionDate4 = removeInscriptionDate4 ? null : $formulaireValeurs.find('.setInscriptionDate4').val();
	if(removeInscriptionDate4 || setInscriptionDate4 != null && setInscriptionDate4 !== '')
		vals['setInscriptionDate4'] = setInscriptionDate4;
	var addInscriptionDate4 = $formulaireValeurs.find('.addInscriptionDate4').val();
	if(addInscriptionDate4 != null && addInscriptionDate4 !== '')
		vals['addInscriptionDate4'] = addInscriptionDate4;
	var removeInscriptionDate4 = $formulaireValeurs.find('.removeInscriptionDate4').val();
	if(removeInscriptionDate4 != null && removeInscriptionDate4 !== '')
		vals['removeInscriptionDate4'] = removeInscriptionDate4;

	var valeurInscriptionDate5 = $formulaireValeurs.find('.valeurInscriptionDate5').val();
	if(valeurInscriptionDate5 != null && valeurInscriptionDate5 !== '')
	var removeInscriptionDate5 = $formulaireFiltres.find('.removeInscriptionDate5').val() === 'true';
	var setInscriptionDate5 = removeInscriptionDate5 ? null : $formulaireValeurs.find('.setInscriptionDate5').val();
	if(removeInscriptionDate5 || setInscriptionDate5 != null && setInscriptionDate5 !== '')
		vals['setInscriptionDate5'] = setInscriptionDate5;
	var addInscriptionDate5 = $formulaireValeurs.find('.addInscriptionDate5').val();
	if(addInscriptionDate5 != null && addInscriptionDate5 !== '')
		vals['addInscriptionDate5'] = addInscriptionDate5;
	var removeInscriptionDate5 = $formulaireValeurs.find('.removeInscriptionDate5').val();
	if(removeInscriptionDate5 != null && removeInscriptionDate5 !== '')
		vals['removeInscriptionDate5'] = removeInscriptionDate5;

	var valeurInscriptionDate6 = $formulaireValeurs.find('.valeurInscriptionDate6').val();
	if(valeurInscriptionDate6 != null && valeurInscriptionDate6 !== '')
	var removeInscriptionDate6 = $formulaireFiltres.find('.removeInscriptionDate6').val() === 'true';
	var setInscriptionDate6 = removeInscriptionDate6 ? null : $formulaireValeurs.find('.setInscriptionDate6').val();
	if(removeInscriptionDate6 || setInscriptionDate6 != null && setInscriptionDate6 !== '')
		vals['setInscriptionDate6'] = setInscriptionDate6;
	var addInscriptionDate6 = $formulaireValeurs.find('.addInscriptionDate6').val();
	if(addInscriptionDate6 != null && addInscriptionDate6 !== '')
		vals['addInscriptionDate6'] = addInscriptionDate6;
	var removeInscriptionDate6 = $formulaireValeurs.find('.removeInscriptionDate6').val();
	if(removeInscriptionDate6 != null && removeInscriptionDate6 !== '')
		vals['removeInscriptionDate6'] = removeInscriptionDate6;

	var valeurInscriptionDate7 = $formulaireValeurs.find('.valeurInscriptionDate7').val();
	if(valeurInscriptionDate7 != null && valeurInscriptionDate7 !== '')
	var removeInscriptionDate7 = $formulaireFiltres.find('.removeInscriptionDate7').val() === 'true';
	var setInscriptionDate7 = removeInscriptionDate7 ? null : $formulaireValeurs.find('.setInscriptionDate7').val();
	if(removeInscriptionDate7 || setInscriptionDate7 != null && setInscriptionDate7 !== '')
		vals['setInscriptionDate7'] = setInscriptionDate7;
	var addInscriptionDate7 = $formulaireValeurs.find('.addInscriptionDate7').val();
	if(addInscriptionDate7 != null && addInscriptionDate7 !== '')
		vals['addInscriptionDate7'] = addInscriptionDate7;
	var removeInscriptionDate7 = $formulaireValeurs.find('.removeInscriptionDate7').val();
	if(removeInscriptionDate7 != null && removeInscriptionDate7 !== '')
		vals['removeInscriptionDate7'] = removeInscriptionDate7;

	var valeurInscriptionDate8 = $formulaireValeurs.find('.valeurInscriptionDate8').val();
	if(valeurInscriptionDate8 != null && valeurInscriptionDate8 !== '')
	var removeInscriptionDate8 = $formulaireFiltres.find('.removeInscriptionDate8').val() === 'true';
	var setInscriptionDate8 = removeInscriptionDate8 ? null : $formulaireValeurs.find('.setInscriptionDate8').val();
	if(removeInscriptionDate8 || setInscriptionDate8 != null && setInscriptionDate8 !== '')
		vals['setInscriptionDate8'] = setInscriptionDate8;
	var addInscriptionDate8 = $formulaireValeurs.find('.addInscriptionDate8').val();
	if(addInscriptionDate8 != null && addInscriptionDate8 !== '')
		vals['addInscriptionDate8'] = addInscriptionDate8;
	var removeInscriptionDate8 = $formulaireValeurs.find('.removeInscriptionDate8').val();
	if(removeInscriptionDate8 != null && removeInscriptionDate8 !== '')
		vals['removeInscriptionDate8'] = removeInscriptionDate8;

	var valeurInscriptionDate9 = $formulaireValeurs.find('.valeurInscriptionDate9').val();
	if(valeurInscriptionDate9 != null && valeurInscriptionDate9 !== '')
	var removeInscriptionDate9 = $formulaireFiltres.find('.removeInscriptionDate9').val() === 'true';
	var setInscriptionDate9 = removeInscriptionDate9 ? null : $formulaireValeurs.find('.setInscriptionDate9').val();
	if(removeInscriptionDate9 || setInscriptionDate9 != null && setInscriptionDate9 !== '')
		vals['setInscriptionDate9'] = setInscriptionDate9;
	var addInscriptionDate9 = $formulaireValeurs.find('.addInscriptionDate9').val();
	if(addInscriptionDate9 != null && addInscriptionDate9 !== '')
		vals['addInscriptionDate9'] = addInscriptionDate9;
	var removeInscriptionDate9 = $formulaireValeurs.find('.removeInscriptionDate9').val();
	if(removeInscriptionDate9 != null && removeInscriptionDate9 !== '')
		vals['removeInscriptionDate9'] = removeInscriptionDate9;

	var valeurInscriptionDate10 = $formulaireValeurs.find('.valeurInscriptionDate10').val();
	if(valeurInscriptionDate10 != null && valeurInscriptionDate10 !== '')
	var removeInscriptionDate10 = $formulaireFiltres.find('.removeInscriptionDate10').val() === 'true';
	var setInscriptionDate10 = removeInscriptionDate10 ? null : $formulaireValeurs.find('.setInscriptionDate10').val();
	if(removeInscriptionDate10 || setInscriptionDate10 != null && setInscriptionDate10 !== '')
		vals['setInscriptionDate10'] = setInscriptionDate10;
	var addInscriptionDate10 = $formulaireValeurs.find('.addInscriptionDate10').val();
	if(addInscriptionDate10 != null && addInscriptionDate10 !== '')
		vals['addInscriptionDate10'] = addInscriptionDate10;
	var removeInscriptionDate10 = $formulaireValeurs.find('.removeInscriptionDate10').val();
	if(removeInscriptionDate10 != null && removeInscriptionDate10 !== '')
		vals['removeInscriptionDate10'] = removeInscriptionDate10;

	patchpaiementsInscriptionScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchpaiementsInscriptionScolaireFiltres($formulaireFiltres) {
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

		var $filtreInscriptionApprouveCheckbox = $formulaireFiltres.find('input.valeurInscriptionApprouve[type = "checkbox"]');
		var $filtreInscriptionApprouveSelect = $formulaireFiltres.find('select.valeurInscriptionApprouve');
		var filtreInscriptionApprouve = $filtreInscriptionApprouveSelect.length ? $filtreInscriptionApprouveSelect.val() : $filtreInscriptionApprouveCheckbox.prop('checked');
		var filtreInscriptionApprouveSelectVal = $formulaireFiltres.find('select.filtreInscriptionApprouve').val();
		var filtreInscriptionApprouve = null;
		if(filtreInscriptionApprouveSelectVal !== '')
			filtreInscriptionApprouve = filtreInscriptionApprouveSelectVal == 'true';
		if(filtreInscriptionApprouve != null && filtreInscriptionApprouve === true)
			filtres.push({ name: 'fq', value: 'inscriptionApprouve:' + filtreInscriptionApprouve });

		var $filtreInscriptionImmunisationsCheckbox = $formulaireFiltres.find('input.valeurInscriptionImmunisations[type = "checkbox"]');
		var $filtreInscriptionImmunisationsSelect = $formulaireFiltres.find('select.valeurInscriptionImmunisations');
		var filtreInscriptionImmunisations = $filtreInscriptionImmunisationsSelect.length ? $filtreInscriptionImmunisationsSelect.val() : $filtreInscriptionImmunisationsCheckbox.prop('checked');
		var filtreInscriptionImmunisationsSelectVal = $formulaireFiltres.find('select.filtreInscriptionImmunisations').val();
		var filtreInscriptionImmunisations = null;
		if(filtreInscriptionImmunisationsSelectVal !== '')
			filtreInscriptionImmunisations = filtreInscriptionImmunisationsSelectVal == 'true';
		if(filtreInscriptionImmunisations != null && filtreInscriptionImmunisations === true)
			filtres.push({ name: 'fq', value: 'inscriptionImmunisations:' + filtreInscriptionImmunisations });

		var filtreInscriptionNomGroupe = $formulaireFiltres.find('.valeurInscriptionNomGroupe').val();
		if(filtreInscriptionNomGroupe != null && filtreInscriptionNomGroupe !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNomGroupe:' + filtreInscriptionNomGroupe });

		var filtreCustomerProfileId = $formulaireFiltres.find('.valeurCustomerProfileId').val();
		if(filtreCustomerProfileId != null && filtreCustomerProfileId !== '')
			filtres.push({ name: 'fq', value: 'customerProfileId:' + filtreCustomerProfileId });

		var $filtreInscriptionPaimentCompletCheckbox = $formulaireFiltres.find('input.valeurInscriptionPaimentComplet[type = "checkbox"]');
		var $filtreInscriptionPaimentCompletSelect = $formulaireFiltres.find('select.valeurInscriptionPaimentComplet');
		var filtreInscriptionPaimentComplet = $filtreInscriptionPaimentCompletSelect.length ? $filtreInscriptionPaimentCompletSelect.val() : $filtreInscriptionPaimentCompletCheckbox.prop('checked');
		var filtreInscriptionPaimentCompletSelectVal = $formulaireFiltres.find('select.filtreInscriptionPaimentComplet').val();
		var filtreInscriptionPaimentComplet = null;
		if(filtreInscriptionPaimentCompletSelectVal !== '')
			filtreInscriptionPaimentComplet = filtreInscriptionPaimentCompletSelectVal == 'true';
		if(filtreInscriptionPaimentComplet != null && filtreInscriptionPaimentComplet === true)
			filtres.push({ name: 'fq', value: 'inscriptionPaimentComplet:' + filtreInscriptionPaimentComplet });

		var $filtreEnfantPropreCheckbox = $formulaireFiltres.find('input.valeurEnfantPropre[type = "checkbox"]');
		var $filtreEnfantPropreSelect = $formulaireFiltres.find('select.valeurEnfantPropre');
		var filtreEnfantPropre = $filtreEnfantPropreSelect.length ? $filtreEnfantPropreSelect.val() : $filtreEnfantPropreCheckbox.prop('checked');
		var filtreEnfantPropreSelectVal = $formulaireFiltres.find('select.filtreEnfantPropre').val();
		var filtreEnfantPropre = null;
		if(filtreEnfantPropreSelectVal !== '')
			filtreEnfantPropre = filtreEnfantPropreSelectVal == 'true';
		if(filtreEnfantPropre != null && filtreEnfantPropre === true)
			filtres.push({ name: 'fq', value: 'enfantPropre:' + filtreEnfantPropre });

		var $filtreInscriptionPaimentChaqueMoisCheckbox = $formulaireFiltres.find('input.valeurInscriptionPaimentChaqueMois[type = "checkbox"]');
		var $filtreInscriptionPaimentChaqueMoisSelect = $formulaireFiltres.find('select.valeurInscriptionPaimentChaqueMois');
		var filtreInscriptionPaimentChaqueMois = $filtreInscriptionPaimentChaqueMoisSelect.length ? $filtreInscriptionPaimentChaqueMoisSelect.val() : $filtreInscriptionPaimentChaqueMoisCheckbox.prop('checked');
		var filtreInscriptionPaimentChaqueMoisSelectVal = $formulaireFiltres.find('select.filtreInscriptionPaimentChaqueMois').val();
		var filtreInscriptionPaimentChaqueMois = null;
		if(filtreInscriptionPaimentChaqueMoisSelectVal !== '')
			filtreInscriptionPaimentChaqueMois = filtreInscriptionPaimentChaqueMoisSelectVal == 'true';
		if(filtreInscriptionPaimentChaqueMois != null && filtreInscriptionPaimentChaqueMois === true)
			filtres.push({ name: 'fq', value: 'inscriptionPaimentChaqueMois:' + filtreInscriptionPaimentChaqueMois });

		var $filtreFamilleMarieCheckbox = $formulaireFiltres.find('input.valeurFamilleMarie[type = "checkbox"]');
		var $filtreFamilleMarieSelect = $formulaireFiltres.find('select.valeurFamilleMarie');
		var filtreFamilleMarie = $filtreFamilleMarieSelect.length ? $filtreFamilleMarieSelect.val() : $filtreFamilleMarieCheckbox.prop('checked');
		var filtreFamilleMarieSelectVal = $formulaireFiltres.find('select.filtreFamilleMarie').val();
		var filtreFamilleMarie = null;
		if(filtreFamilleMarieSelectVal !== '')
			filtreFamilleMarie = filtreFamilleMarieSelectVal == 'true';
		if(filtreFamilleMarie != null && filtreFamilleMarie === true)
			filtres.push({ name: 'fq', value: 'familleMarie:' + filtreFamilleMarie });

		var $filtreFamilleSepareCheckbox = $formulaireFiltres.find('input.valeurFamilleSepare[type = "checkbox"]');
		var $filtreFamilleSepareSelect = $formulaireFiltres.find('select.valeurFamilleSepare');
		var filtreFamilleSepare = $filtreFamilleSepareSelect.length ? $filtreFamilleSepareSelect.val() : $filtreFamilleSepareCheckbox.prop('checked');
		var filtreFamilleSepareSelectVal = $formulaireFiltres.find('select.filtreFamilleSepare').val();
		var filtreFamilleSepare = null;
		if(filtreFamilleSepareSelectVal !== '')
			filtreFamilleSepare = filtreFamilleSepareSelectVal == 'true';
		if(filtreFamilleSepare != null && filtreFamilleSepare === true)
			filtres.push({ name: 'fq', value: 'familleSepare:' + filtreFamilleSepare });

		var $filtreFamilleDivorceCheckbox = $formulaireFiltres.find('input.valeurFamilleDivorce[type = "checkbox"]');
		var $filtreFamilleDivorceSelect = $formulaireFiltres.find('select.valeurFamilleDivorce');
		var filtreFamilleDivorce = $filtreFamilleDivorceSelect.length ? $filtreFamilleDivorceSelect.val() : $filtreFamilleDivorceCheckbox.prop('checked');
		var filtreFamilleDivorceSelectVal = $formulaireFiltres.find('select.filtreFamilleDivorce').val();
		var filtreFamilleDivorce = null;
		if(filtreFamilleDivorceSelectVal !== '')
			filtreFamilleDivorce = filtreFamilleDivorceSelectVal == 'true';
		if(filtreFamilleDivorce != null && filtreFamilleDivorce === true)
			filtres.push({ name: 'fq', value: 'familleDivorce:' + filtreFamilleDivorce });

		var filtreFamilleAddresse = $formulaireFiltres.find('.valeurFamilleAddresse').val();
		if(filtreFamilleAddresse != null && filtreFamilleAddresse !== '')
			filtres.push({ name: 'fq', value: 'familleAddresse:' + filtreFamilleAddresse });

		var filtreInscriptionConsiderationsSpeciales = $formulaireFiltres.find('.valeurInscriptionConsiderationsSpeciales').val();
		if(filtreInscriptionConsiderationsSpeciales != null && filtreInscriptionConsiderationsSpeciales !== '')
			filtres.push({ name: 'fq', value: 'inscriptionConsiderationsSpeciales:' + filtreInscriptionConsiderationsSpeciales });

		var filtreEnfantConditionsMedicales = $formulaireFiltres.find('.valeurEnfantConditionsMedicales').val();
		if(filtreEnfantConditionsMedicales != null && filtreEnfantConditionsMedicales !== '')
			filtres.push({ name: 'fq', value: 'enfantConditionsMedicales:' + filtreEnfantConditionsMedicales });

		var filtreEnfantEcolesPrecedemmentFrequentees = $formulaireFiltres.find('.valeurEnfantEcolesPrecedemmentFrequentees').val();
		if(filtreEnfantEcolesPrecedemmentFrequentees != null && filtreEnfantEcolesPrecedemmentFrequentees !== '')
			filtres.push({ name: 'fq', value: 'enfantEcolesPrecedemmentFrequentees:' + filtreEnfantEcolesPrecedemmentFrequentees });

		var filtreFamilleCommentVousConnaissezEcole = $formulaireFiltres.find('.valeurFamilleCommentVousConnaissezEcole').val();
		if(filtreFamilleCommentVousConnaissezEcole != null && filtreFamilleCommentVousConnaissezEcole !== '')
			filtres.push({ name: 'fq', value: 'familleCommentVousConnaissezEcole:' + filtreFamilleCommentVousConnaissezEcole });

		var filtreEnfantDescription = $formulaireFiltres.find('.valeurEnfantDescription').val();
		if(filtreEnfantDescription != null && filtreEnfantDescription !== '')
			filtres.push({ name: 'fq', value: 'enfantDescription:' + filtreEnfantDescription });

		var filtreEnfantObjectifs = $formulaireFiltres.find('.valeurEnfantObjectifs').val();
		if(filtreEnfantObjectifs != null && filtreEnfantObjectifs !== '')
			filtres.push({ name: 'fq', value: 'enfantObjectifs:' + filtreEnfantObjectifs });

		var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
		if(filtreBlocCles != null && filtreBlocCles !== '')
			filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

		var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
		if(filtreEnfantCle != null && filtreEnfantCle !== '')
			filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

		var filtreMereCles = $formulaireFiltres.find('.valeurMereCles').val();
		if(filtreMereCles != null && filtreMereCles !== '')
			filtres.push({ name: 'fq', value: 'mereCles:' + filtreMereCles });

		var filtrePereCles = $formulaireFiltres.find('.valeurPereCles').val();
		if(filtrePereCles != null && filtrePereCles !== '')
			filtres.push({ name: 'fq', value: 'pereCles:' + filtrePereCles });

		var filtreGardienCles = $formulaireFiltres.find('.valeurGardienCles').val();
		if(filtreGardienCles != null && filtreGardienCles !== '')
			filtres.push({ name: 'fq', value: 'gardienCles:' + filtreGardienCles });

		var filtrePaiementCles = $formulaireFiltres.find('.valeurPaiementCles').val();
		if(filtrePaiementCles != null && filtrePaiementCles !== '')
			filtres.push({ name: 'fq', value: 'paiementCles:' + filtrePaiementCles });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

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

		var filtreInscriptionCle = $formulaireFiltres.find('.valeurInscriptionCle').val();
		if(filtreInscriptionCle != null && filtreInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCle:' + filtreInscriptionCle });

		var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
		if(filtreAnneeCle != null && filtreAnneeCle !== '')
			filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

		var filtreSaisonCle = $formulaireFiltres.find('.valeurSaisonCle').val();
		if(filtreSaisonCle != null && filtreSaisonCle !== '')
			filtres.push({ name: 'fq', value: 'saisonCle:' + filtreSaisonCle });

		var filtreSessionCle = $formulaireFiltres.find('.valeurSessionCle').val();
		if(filtreSessionCle != null && filtreSessionCle !== '')
			filtres.push({ name: 'fq', value: 'sessionCle:' + filtreSessionCle });

		var filtreAgeCle = $formulaireFiltres.find('.valeurAgeCle').val();
		if(filtreAgeCle != null && filtreAgeCle !== '')
			filtres.push({ name: 'fq', value: 'ageCle:' + filtreAgeCle });

		var filtreBlocCle = $formulaireFiltres.find('.valeurBlocCle').val();
		if(filtreBlocCle != null && filtreBlocCle !== '')
			filtres.push({ name: 'fq', value: 'blocCle:' + filtreBlocCle });

		var filtreFormInscriptionCle = $formulaireFiltres.find('.valeurFormInscriptionCle').val();
		if(filtreFormInscriptionCle != null && filtreFormInscriptionCle !== '')
			filtres.push({ name: 'fq', value: 'formInscriptionCle:' + filtreFormInscriptionCle });

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

		var filtreEnfantPrenom = $formulaireFiltres.find('.valeurEnfantPrenom').val();
		if(filtreEnfantPrenom != null && filtreEnfantPrenom !== '')
			filtres.push({ name: 'fq', value: 'enfantPrenom:' + filtreEnfantPrenom });

		var filtreEnfantPrenomPrefere = $formulaireFiltres.find('.valeurEnfantPrenomPrefere').val();
		if(filtreEnfantPrenomPrefere != null && filtreEnfantPrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'enfantPrenomPrefere:' + filtreEnfantPrenomPrefere });

		var filtreEnfantFamilleNom = $formulaireFiltres.find('.valeurEnfantFamilleNom').val();
		if(filtreEnfantFamilleNom != null && filtreEnfantFamilleNom !== '')
			filtres.push({ name: 'fq', value: 'enfantFamilleNom:' + filtreEnfantFamilleNom });

		var filtreMerePrenom = $formulaireFiltres.find('.valeurMerePrenom').val();
		if(filtreMerePrenom != null && filtreMerePrenom !== '')
			filtres.push({ name: 'fq', value: 'merePrenom:' + filtreMerePrenom });

		var filtreMerePrenomPrefere = $formulaireFiltres.find('.valeurMerePrenomPrefere').val();
		if(filtreMerePrenomPrefere != null && filtreMerePrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'merePrenomPrefere:' + filtreMerePrenomPrefere });

		var filtreMereNomCompletPrefere = $formulaireFiltres.find('.valeurMereNomCompletPrefere').val();
		if(filtreMereNomCompletPrefere != null && filtreMereNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'mereNomCompletPrefere:' + filtreMereNomCompletPrefere });

		var filtrePerePrenom = $formulaireFiltres.find('.valeurPerePrenom').val();
		if(filtrePerePrenom != null && filtrePerePrenom !== '')
			filtres.push({ name: 'fq', value: 'perePrenom:' + filtrePerePrenom });

		var filtrePerePrenomPrefere = $formulaireFiltres.find('.valeurPerePrenomPrefere').val();
		if(filtrePerePrenomPrefere != null && filtrePerePrenomPrefere !== '')
			filtres.push({ name: 'fq', value: 'perePrenomPrefere:' + filtrePerePrenomPrefere });

		var filtrePereNomCompletPrefere = $formulaireFiltres.find('.valeurPereNomCompletPrefere').val();
		if(filtrePereNomCompletPrefere != null && filtrePereNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'pereNomCompletPrefere:' + filtrePereNomCompletPrefere });

		var filtreEnfantNomComplet = $formulaireFiltres.find('.valeurEnfantNomComplet').val();
		if(filtreEnfantNomComplet != null && filtreEnfantNomComplet !== '')
			filtres.push({ name: 'fq', value: 'enfantNomComplet:' + filtreEnfantNomComplet });

		var filtreEnfantNomCompletPrefere = $formulaireFiltres.find('.valeurEnfantNomCompletPrefere').val();
		if(filtreEnfantNomCompletPrefere != null && filtreEnfantNomCompletPrefere !== '')
			filtres.push({ name: 'fq', value: 'enfantNomCompletPrefere:' + filtreEnfantNomCompletPrefere });

		var filtreEnfantDateNaissance = $formulaireFiltres.find('.valeurEnfantDateNaissance').val();
		if(filtreEnfantDateNaissance != null && filtreEnfantDateNaissance !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissance:' + filtreEnfantDateNaissance });

		var filtreEnfantMoisNaissance = $formulaireFiltres.find('.valeurEnfantMoisNaissance').val();
		if(filtreEnfantMoisNaissance != null && filtreEnfantMoisNaissance !== '')
			filtres.push({ name: 'fq', value: 'enfantMoisNaissance:' + filtreEnfantMoisNaissance });

		var filtreEnfantJourNaissance = $formulaireFiltres.find('.valeurEnfantJourNaissance').val();
		if(filtreEnfantJourNaissance != null && filtreEnfantJourNaissance !== '')
			filtres.push({ name: 'fq', value: 'enfantJourNaissance:' + filtreEnfantJourNaissance });

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

		var filtreEcoleAdministrateurNom = $formulaireFiltres.find('.valeurEcoleAdministrateurNom').val();
		if(filtreEcoleAdministrateurNom != null && filtreEcoleAdministrateurNom !== '')
			filtres.push({ name: 'fq', value: 'ecoleAdministrateurNom:' + filtreEcoleAdministrateurNom });

		var filtreAnneeDebut = $formulaireFiltres.find('.valeurAnneeDebut').val();
		if(filtreAnneeDebut != null && filtreAnneeDebut !== '')
			filtres.push({ name: 'fq', value: 'anneeDebut:' + filtreAnneeDebut });

		var filtreAnneeFin = $formulaireFiltres.find('.valeurAnneeFin').val();
		if(filtreAnneeFin != null && filtreAnneeFin !== '')
			filtres.push({ name: 'fq', value: 'anneeFin:' + filtreAnneeFin });

		var filtreSaisonJourDebut = $formulaireFiltres.find('.valeurSaisonJourDebut').val();
		if(filtreSaisonJourDebut != null && filtreSaisonJourDebut !== '')
			filtres.push({ name: 'fq', value: 'saisonJourDebut:' + filtreSaisonJourDebut });

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

		var filtreAnneeFraisInscription = $formulaireFiltres.find('.valeurAnneeFraisInscription').val();
		if(filtreAnneeFraisInscription != null && filtreAnneeFraisInscription !== '')
			filtres.push({ name: 'fq', value: 'anneeFraisInscription:' + filtreAnneeFraisInscription });

		var filtreSaisonNomComplet = $formulaireFiltres.find('.valeurSaisonNomComplet').val();
		if(filtreSaisonNomComplet != null && filtreSaisonNomComplet !== '')
			filtres.push({ name: 'fq', value: 'saisonNomComplet:' + filtreSaisonNomComplet });

		var filtreSessionJourDebut = $formulaireFiltres.find('.valeurSessionJourDebut').val();
		if(filtreSessionJourDebut != null && filtreSessionJourDebut !== '')
			filtres.push({ name: 'fq', value: 'sessionJourDebut:' + filtreSessionJourDebut });

		var filtreSessionJourFin = $formulaireFiltres.find('.valeurSessionJourFin').val();
		if(filtreSessionJourFin != null && filtreSessionJourFin !== '')
			filtres.push({ name: 'fq', value: 'sessionJourFin:' + filtreSessionJourFin });

		var filtreAgeNomComplet = $formulaireFiltres.find('.valeurAgeNomComplet').val();
		if(filtreAgeNomComplet != null && filtreAgeNomComplet !== '')
			filtres.push({ name: 'fq', value: 'ageNomComplet:' + filtreAgeNomComplet });

		var filtreAgeDebut = $formulaireFiltres.find('.valeurAgeDebut').val();
		if(filtreAgeDebut != null && filtreAgeDebut !== '')
			filtres.push({ name: 'fq', value: 'ageDebut:' + filtreAgeDebut });

		var filtreAgeFin = $formulaireFiltres.find('.valeurAgeFin').val();
		if(filtreAgeFin != null && filtreAgeFin !== '')
			filtres.push({ name: 'fq', value: 'ageFin:' + filtreAgeFin });

		var filtreBlocHeureDebut = $formulaireFiltres.find('.valeurBlocHeureDebut').val();
		if(filtreBlocHeureDebut != null && filtreBlocHeureDebut !== '')
			filtres.push({ name: 'fq', value: 'blocHeureDebut:' + filtreBlocHeureDebut });

		var filtreBlocHeureFin = $formulaireFiltres.find('.valeurBlocHeureFin').val();
		if(filtreBlocHeureFin != null && filtreBlocHeureFin !== '')
			filtres.push({ name: 'fq', value: 'blocHeureFin:' + filtreBlocHeureFin });

		var filtreBlocPrixParMois = $formulaireFiltres.find('.valeurBlocPrixParMois').val();
		if(filtreBlocPrixParMois != null && filtreBlocPrixParMois !== '')
			filtres.push({ name: 'fq', value: 'blocPrixParMois:' + filtreBlocPrixParMois });

		var $filtreBlocDimancheCheckbox = $formulaireFiltres.find('input.valeurBlocDimanche[type = "checkbox"]');
		var $filtreBlocDimancheSelect = $formulaireFiltres.find('select.valeurBlocDimanche');
		var filtreBlocDimanche = $filtreBlocDimancheSelect.length ? $filtreBlocDimancheSelect.val() : $filtreBlocDimancheCheckbox.prop('checked');
		var filtreBlocDimancheSelectVal = $formulaireFiltres.find('select.filtreBlocDimanche').val();
		var filtreBlocDimanche = null;
		if(filtreBlocDimancheSelectVal !== '')
			filtreBlocDimanche = filtreBlocDimancheSelectVal == 'true';
		if(filtreBlocDimanche != null && filtreBlocDimanche === true)
			filtres.push({ name: 'fq', value: 'blocDimanche:' + filtreBlocDimanche });

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

		var filtreBlocNomAdmin = $formulaireFiltres.find('.valeurBlocNomAdmin').val();
		if(filtreBlocNomAdmin != null && filtreBlocNomAdmin !== '')
			filtres.push({ name: 'fq', value: 'blocNomAdmin:' + filtreBlocNomAdmin });

		var filtreBlocNomCourt = $formulaireFiltres.find('.valeurBlocNomCourt').val();
		if(filtreBlocNomCourt != null && filtreBlocNomCourt !== '')
			filtres.push({ name: 'fq', value: 'blocNomCourt:' + filtreBlocNomCourt });

		var filtreBlocNomComplet = $formulaireFiltres.find('.valeurBlocNomComplet').val();
		if(filtreBlocNomComplet != null && filtreBlocNomComplet !== '')
			filtres.push({ name: 'fq', value: 'blocNomComplet:' + filtreBlocNomComplet });

		var filtreInscriptionDateFrais = $formulaireFiltres.find('.valeurInscriptionDateFrais').val();
		if(filtreInscriptionDateFrais != null && filtreInscriptionDateFrais !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDateFrais:' + filtreInscriptionDateFrais });

		var filtreCreeDAnnee = $formulaireFiltres.find('.valeurCreeDAnnee').val();
		if(filtreCreeDAnnee != null && filtreCreeDAnnee !== '')
			filtres.push({ name: 'fq', value: 'creeDAnnee:' + filtreCreeDAnnee });

		var filtreCreeJourDeSemaine = $formulaireFiltres.find('.valeurCreeJourDeSemaine').val();
		if(filtreCreeJourDeSemaine != null && filtreCreeJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'creeJourDeSemaine:' + filtreCreeJourDeSemaine });

		var filtreCreeMoisDAnnee = $formulaireFiltres.find('.valeurCreeMoisDAnnee').val();
		if(filtreCreeMoisDAnnee != null && filtreCreeMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'creeMoisDAnnee:' + filtreCreeMoisDAnnee });

		var filtreCreeHeureDuJour = $formulaireFiltres.find('.valeurCreeHeureDuJour').val();
		if(filtreCreeHeureDuJour != null && filtreCreeHeureDuJour !== '')
			filtres.push({ name: 'fq', value: 'creeHeureDuJour:' + filtreCreeHeureDuJour });

		var filtreInscriptionJoursDeSemaine = $formulaireFiltres.find('.valeurInscriptionJoursDeSemaine').val();
		if(filtreInscriptionJoursDeSemaine != null && filtreInscriptionJoursDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'inscriptionJoursDeSemaine:' + filtreInscriptionJoursDeSemaine });

		var filtreInscriptionDate1 = $formulaireFiltres.find('.valeurInscriptionDate1').val();
		if(filtreInscriptionDate1 != null && filtreInscriptionDate1 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate1:' + filtreInscriptionDate1 });

		var filtreInscriptionDate2 = $formulaireFiltres.find('.valeurInscriptionDate2').val();
		if(filtreInscriptionDate2 != null && filtreInscriptionDate2 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate2:' + filtreInscriptionDate2 });

		var filtreInscriptionDate3 = $formulaireFiltres.find('.valeurInscriptionDate3').val();
		if(filtreInscriptionDate3 != null && filtreInscriptionDate3 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate3:' + filtreInscriptionDate3 });

		var filtreInscriptionDate4 = $formulaireFiltres.find('.valeurInscriptionDate4').val();
		if(filtreInscriptionDate4 != null && filtreInscriptionDate4 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate4:' + filtreInscriptionDate4 });

		var filtreInscriptionDate5 = $formulaireFiltres.find('.valeurInscriptionDate5').val();
		if(filtreInscriptionDate5 != null && filtreInscriptionDate5 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate5:' + filtreInscriptionDate5 });

		var filtreInscriptionDate6 = $formulaireFiltres.find('.valeurInscriptionDate6').val();
		if(filtreInscriptionDate6 != null && filtreInscriptionDate6 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate6:' + filtreInscriptionDate6 });

		var filtreInscriptionDate7 = $formulaireFiltres.find('.valeurInscriptionDate7').val();
		if(filtreInscriptionDate7 != null && filtreInscriptionDate7 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate7:' + filtreInscriptionDate7 });

		var filtreInscriptionDate8 = $formulaireFiltres.find('.valeurInscriptionDate8').val();
		if(filtreInscriptionDate8 != null && filtreInscriptionDate8 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate8:' + filtreInscriptionDate8 });

		var filtreInscriptionDate9 = $formulaireFiltres.find('.valeurInscriptionDate9').val();
		if(filtreInscriptionDate9 != null && filtreInscriptionDate9 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate9:' + filtreInscriptionDate9 });

		var filtreInscriptionDate10 = $formulaireFiltres.find('.valeurInscriptionDate10').val();
		if(filtreInscriptionDate10 != null && filtreInscriptionDate10 !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDate10:' + filtreInscriptionDate10 });

		var filtreEnfantImmunisationsRecu = $formulaireFiltres.find('.valeurEnfantImmunisationsRecu').val();
		if(filtreEnfantImmunisationsRecu != null && filtreEnfantImmunisationsRecu !== '')
			filtres.push({ name: 'fq', value: 'enfantImmunisationsRecu:' + filtreEnfantImmunisationsRecu });

		var filtreEnfantPhotosApprouve = $formulaireFiltres.find('.valeurEnfantPhotosApprouve').val();
		if(filtreEnfantPhotosApprouve != null && filtreEnfantPhotosApprouve !== '')
			filtres.push({ name: 'fq', value: 'enfantPhotosApprouve:' + filtreEnfantPhotosApprouve });

		var filtreInscriptionNomComplet = $formulaireFiltres.find('.valeurInscriptionNomComplet').val();
		if(filtreInscriptionNomComplet != null && filtreInscriptionNomComplet !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNomComplet:' + filtreInscriptionNomComplet });
	}
	return filtres;
}

function patchpaiementsInscriptionScolaireVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchpaiementsInscriptionScolaireVals(filtres, vals, success, error);
}

function patchpaiementsInscriptionScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/inscription?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

async function websocketInscriptionScolaire(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketInscriptionScolaire', function (error, message) {
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
			var $header = $('<div>').attr('class', 'w3-container fa-blue-gray ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fas fa-edit w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modifier inscriptions');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-blue-gray ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketAnneeScolaire', function (error, message) {
			$('#Page_anneeCle').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketBlocScolaire', function (error, message) {
			$('#Page_blocCles').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketEnfantScolaire', function (error, message) {
			$('#Page_enfantCle').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketMereScolaire', function (error, message) {
			$('#Page_mereCles').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketPereScolaire', function (error, message) {
			$('#Page_pereCles').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketGardienScolaire', function (error, message) {
			$('#Page_gardienCles').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketPaiementScolaire', function (error, message) {
			$('#Page_paiementCles').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketUtilisateurSite', function (error, message) {
			$('#Page_utilisateurCles').trigger('oninput');
		});
	}
}
async function websocketInscriptionScolaireInner(requeteApi) {
	var pk = requeteApi['pk'];
	var pks = requeteApi['pks'];
	var classes = requeteApi['classes'];
	var vars = requeteApi['vars'];
	var empty = requeteApi['empty'];

	if(pk != null) {
		rechercherInscriptionScolaireVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('cree')) {
				$('.inputInscriptionScolaire' + pk + 'Cree').val(o['cree']);
				$('.varInscriptionScolaire' + pk + 'Cree').text(o['cree']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'Cree'));
			}
			if(vars.includes('modifie')) {
				$('.inputInscriptionScolaire' + pk + 'Modifie').val(o['modifie']);
				$('.varInscriptionScolaire' + pk + 'Modifie').text(o['modifie']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'Modifie'));
			}
			if(vars.includes('archive')) {
				$('.inputInscriptionScolaire' + pk + 'Archive').val(o['archive']);
				$('.varInscriptionScolaire' + pk + 'Archive').text(o['archive']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'Archive'));
			}
			if(vars.includes('supprime')) {
				$('.inputInscriptionScolaire' + pk + 'Supprime').val(o['supprime']);
				$('.varInscriptionScolaire' + pk + 'Supprime').text(o['supprime']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'Supprime'));
			}
			if(vars.includes('inscriptionApprouve')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionApprouve').val(o['inscriptionApprouve']);
				$('.varInscriptionScolaire' + pk + 'InscriptionApprouve').text(o['inscriptionApprouve']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionApprouve'));
			}
			if(vars.includes('inscriptionImmunisations')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionImmunisations').val(o['inscriptionImmunisations']);
				$('.varInscriptionScolaire' + pk + 'InscriptionImmunisations').text(o['inscriptionImmunisations']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionImmunisations'));
			}
			if(vars.includes('inscriptionNomGroupe')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionNomGroupe').val(o['inscriptionNomGroupe']);
				$('.varInscriptionScolaire' + pk + 'InscriptionNomGroupe').text(o['inscriptionNomGroupe']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionNomGroupe'));
			}
			if(vars.includes('customerProfileId')) {
				$('.inputInscriptionScolaire' + pk + 'CustomerProfileId').val(o['customerProfileId']);
				$('.varInscriptionScolaire' + pk + 'CustomerProfileId').text(o['customerProfileId']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'CustomerProfileId'));
			}
			if(vars.includes('inscriptionPaimentComplet')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionPaimentComplet').val(o['inscriptionPaimentComplet']);
				$('.varInscriptionScolaire' + pk + 'InscriptionPaimentComplet').text(o['inscriptionPaimentComplet']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionPaimentComplet'));
			}
			if(vars.includes('enfantPropre')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantPropre').val(o['enfantPropre']);
				$('.varInscriptionScolaire' + pk + 'EnfantPropre').text(o['enfantPropre']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantPropre'));
			}
			if(vars.includes('inscriptionPaimentChaqueMois')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionPaimentChaqueMois').val(o['inscriptionPaimentChaqueMois']);
				$('.varInscriptionScolaire' + pk + 'InscriptionPaimentChaqueMois').text(o['inscriptionPaimentChaqueMois']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionPaimentChaqueMois'));
			}
			if(vars.includes('familleMarie')) {
				$('.inputInscriptionScolaire' + pk + 'FamilleMarie').val(o['familleMarie']);
				$('.varInscriptionScolaire' + pk + 'FamilleMarie').text(o['familleMarie']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'FamilleMarie'));
			}
			if(vars.includes('familleSepare')) {
				$('.inputInscriptionScolaire' + pk + 'FamilleSepare').val(o['familleSepare']);
				$('.varInscriptionScolaire' + pk + 'FamilleSepare').text(o['familleSepare']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'FamilleSepare'));
			}
			if(vars.includes('familleDivorce')) {
				$('.inputInscriptionScolaire' + pk + 'FamilleDivorce').val(o['familleDivorce']);
				$('.varInscriptionScolaire' + pk + 'FamilleDivorce').text(o['familleDivorce']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'FamilleDivorce'));
			}
			if(vars.includes('familleAddresse')) {
				$('.inputInscriptionScolaire' + pk + 'FamilleAddresse').val(o['familleAddresse']);
				$('.varInscriptionScolaire' + pk + 'FamilleAddresse').text(o['familleAddresse']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'FamilleAddresse'));
			}
			if(vars.includes('inscriptionConsiderationsSpeciales')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionConsiderationsSpeciales').val(o['inscriptionConsiderationsSpeciales']);
				$('.varInscriptionScolaire' + pk + 'InscriptionConsiderationsSpeciales').text(o['inscriptionConsiderationsSpeciales']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionConsiderationsSpeciales'));
			}
			if(vars.includes('enfantConditionsMedicales')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantConditionsMedicales').val(o['enfantConditionsMedicales']);
				$('.varInscriptionScolaire' + pk + 'EnfantConditionsMedicales').text(o['enfantConditionsMedicales']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantConditionsMedicales'));
			}
			if(vars.includes('enfantEcolesPrecedemmentFrequentees')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantEcolesPrecedemmentFrequentees').val(o['enfantEcolesPrecedemmentFrequentees']);
				$('.varInscriptionScolaire' + pk + 'EnfantEcolesPrecedemmentFrequentees').text(o['enfantEcolesPrecedemmentFrequentees']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantEcolesPrecedemmentFrequentees'));
			}
			if(vars.includes('familleCommentVousConnaissezEcole')) {
				$('.inputInscriptionScolaire' + pk + 'FamilleCommentVousConnaissezEcole').val(o['familleCommentVousConnaissezEcole']);
				$('.varInscriptionScolaire' + pk + 'FamilleCommentVousConnaissezEcole').text(o['familleCommentVousConnaissezEcole']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'FamilleCommentVousConnaissezEcole'));
			}
			if(vars.includes('enfantDescription')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantDescription').val(o['enfantDescription']);
				$('.varInscriptionScolaire' + pk + 'EnfantDescription').text(o['enfantDescription']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantDescription'));
			}
			if(vars.includes('enfantObjectifs')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantObjectifs').val(o['enfantObjectifs']);
				$('.varInscriptionScolaire' + pk + 'EnfantObjectifs').text(o['enfantObjectifs']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantObjectifs'));
			}
			if(vars.includes('blocCles')) {
				$('.inputInscriptionScolaire' + pk + 'BlocCles').val(o['blocCles']);
				$('.varInscriptionScolaire' + pk + 'BlocCles').text(o['blocCles']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'BlocCles'));
			}
			if(vars.includes('enfantCle')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantCle').val(o['enfantCle']);
				$('.varInscriptionScolaire' + pk + 'EnfantCle').text(o['enfantCle']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantCle'));
			}
			if(vars.includes('mereCles')) {
				$('.inputInscriptionScolaire' + pk + 'MereCles').val(o['mereCles']);
				$('.varInscriptionScolaire' + pk + 'MereCles').text(o['mereCles']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'MereCles'));
			}
			if(vars.includes('pereCles')) {
				$('.inputInscriptionScolaire' + pk + 'PereCles').val(o['pereCles']);
				$('.varInscriptionScolaire' + pk + 'PereCles').text(o['pereCles']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'PereCles'));
			}
			if(vars.includes('gardienCles')) {
				$('.inputInscriptionScolaire' + pk + 'GardienCles').val(o['gardienCles']);
				$('.varInscriptionScolaire' + pk + 'GardienCles').text(o['gardienCles']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'GardienCles'));
			}
			if(vars.includes('paiementCles')) {
				$('.inputInscriptionScolaire' + pk + 'PaiementCles').val(o['paiementCles']);
				$('.varInscriptionScolaire' + pk + 'PaiementCles').text(o['paiementCles']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'PaiementCles'));
			}
			if(vars.includes('utilisateurCles')) {
				$('.inputInscriptionScolaire' + pk + 'UtilisateurCles').val(o['utilisateurCles']);
				$('.varInscriptionScolaire' + pk + 'UtilisateurCles').text(o['utilisateurCles']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'UtilisateurCles'));
			}
			if(vars.includes('inheritPk')) {
				$('.inputInscriptionScolaire' + pk + 'InheritPk').val(o['inheritPk']);
				$('.varInscriptionScolaire' + pk + 'InheritPk').text(o['inheritPk']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InheritPk'));
			}
			if(vars.includes('sessionId')) {
				$('.inputInscriptionScolaire' + pk + 'SessionId').val(o['sessionId']);
				$('.varInscriptionScolaire' + pk + 'SessionId').text(o['sessionId']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'SessionId'));
			}
			if(vars.includes('utilisateurId')) {
				$('.inputInscriptionScolaire' + pk + 'UtilisateurId').val(o['utilisateurId']);
				$('.varInscriptionScolaire' + pk + 'UtilisateurId').text(o['utilisateurId']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'UtilisateurId'));
			}
			if(vars.includes('utilisateurCle')) {
				$('.inputInscriptionScolaire' + pk + 'UtilisateurCle').val(o['utilisateurCle']);
				$('.varInscriptionScolaire' + pk + 'UtilisateurCle').text(o['utilisateurCle']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'UtilisateurCle'));
			}
			if(vars.includes('anneeCle')) {
				$('.inputInscriptionScolaire' + pk + 'AnneeCle').val(o['anneeCle']);
				$('.varInscriptionScolaire' + pk + 'AnneeCle').text(o['anneeCle']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'AnneeCle'));
			}
			if(vars.includes('enfantNomComplet')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantNomComplet').val(o['enfantNomComplet']);
				$('.varInscriptionScolaire' + pk + 'EnfantNomComplet').text(o['enfantNomComplet']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantNomComplet'));
			}
			if(vars.includes('enfantNomCompletPrefere')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantNomCompletPrefere').val(o['enfantNomCompletPrefere']);
				$('.varInscriptionScolaire' + pk + 'EnfantNomCompletPrefere').text(o['enfantNomCompletPrefere']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantNomCompletPrefere'));
			}
			if(vars.includes('enfantDateNaissance')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantDateNaissance').val(o['enfantDateNaissance']);
				$('.varInscriptionScolaire' + pk + 'EnfantDateNaissance').text(o['enfantDateNaissance']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantDateNaissance'));
			}
			if(vars.includes('ecoleAddresse')) {
				$('.inputInscriptionScolaire' + pk + 'EcoleAddresse').val(o['ecoleAddresse']);
				$('.varInscriptionScolaire' + pk + 'EcoleAddresse').text(o['ecoleAddresse']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EcoleAddresse'));
			}
			if(vars.includes('inscriptionDateFrais')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDateFrais').val(o['inscriptionDateFrais']);
				$('.varInscriptionScolaire' + pk + 'InscriptionDateFrais').text(o['inscriptionDateFrais']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDateFrais'));
			}
			if(vars.includes('inscriptionSignature1')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature1').val(o['inscriptionSignature1']);
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature1').text(o['inscriptionSignature1']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature1'));
			}
			if(vars.includes('inscriptionSignature2')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature2').val(o['inscriptionSignature2']);
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature2').text(o['inscriptionSignature2']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature2'));
			}
			if(vars.includes('inscriptionSignature3')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature3').val(o['inscriptionSignature3']);
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature3').text(o['inscriptionSignature3']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature3'));
			}
			if(vars.includes('inscriptionSignature4')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature4').val(o['inscriptionSignature4']);
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature4').text(o['inscriptionSignature4']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature4'));
			}
			if(vars.includes('inscriptionSignature5')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature5').val(o['inscriptionSignature5']);
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature5').text(o['inscriptionSignature5']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature5'));
			}
			if(vars.includes('inscriptionSignature6')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature6').val(o['inscriptionSignature6']);
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature6').text(o['inscriptionSignature6']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature6'));
			}
			if(vars.includes('inscriptionSignature7')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature7').val(o['inscriptionSignature7']);
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature7').text(o['inscriptionSignature7']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature7'));
			}
			if(vars.includes('inscriptionSignature8')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature8').val(o['inscriptionSignature8']);
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature8').text(o['inscriptionSignature8']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature8'));
			}
			if(vars.includes('inscriptionSignature9')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature9').val(o['inscriptionSignature9']);
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature9').text(o['inscriptionSignature9']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature9'));
			}
			if(vars.includes('inscriptionSignature10')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature10').val(o['inscriptionSignature10']);
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature10').text(o['inscriptionSignature10']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature10'));
			}
			if(vars.includes('inscriptionDate1')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate1').val(o['inscriptionDate1']);
				$('.varInscriptionScolaire' + pk + 'InscriptionDate1').text(o['inscriptionDate1']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate1'));
			}
			if(vars.includes('inscriptionDate2')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate2').val(o['inscriptionDate2']);
				$('.varInscriptionScolaire' + pk + 'InscriptionDate2').text(o['inscriptionDate2']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate2'));
			}
			if(vars.includes('inscriptionDate3')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate3').val(o['inscriptionDate3']);
				$('.varInscriptionScolaire' + pk + 'InscriptionDate3').text(o['inscriptionDate3']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate3'));
			}
			if(vars.includes('inscriptionDate4')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate4').val(o['inscriptionDate4']);
				$('.varInscriptionScolaire' + pk + 'InscriptionDate4').text(o['inscriptionDate4']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate4'));
			}
			if(vars.includes('inscriptionDate5')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate5').val(o['inscriptionDate5']);
				$('.varInscriptionScolaire' + pk + 'InscriptionDate5').text(o['inscriptionDate5']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate5'));
			}
			if(vars.includes('inscriptionDate6')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate6').val(o['inscriptionDate6']);
				$('.varInscriptionScolaire' + pk + 'InscriptionDate6').text(o['inscriptionDate6']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate6'));
			}
			if(vars.includes('inscriptionDate7')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate7').val(o['inscriptionDate7']);
				$('.varInscriptionScolaire' + pk + 'InscriptionDate7').text(o['inscriptionDate7']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate7'));
			}
			if(vars.includes('inscriptionDate8')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate8').val(o['inscriptionDate8']);
				$('.varInscriptionScolaire' + pk + 'InscriptionDate8').text(o['inscriptionDate8']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate8'));
			}
			if(vars.includes('inscriptionDate9')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate9').val(o['inscriptionDate9']);
				$('.varInscriptionScolaire' + pk + 'InscriptionDate9').text(o['inscriptionDate9']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate9'));
			}
			if(vars.includes('inscriptionDate10')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate10').val(o['inscriptionDate10']);
				$('.varInscriptionScolaire' + pk + 'InscriptionDate10').text(o['inscriptionDate10']);
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate10'));
			}
		});
	}
}
