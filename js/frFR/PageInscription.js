
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

	var valeurPhoto = $formulaireValeurs.find('.valeurPhoto').val();
	if(valeurPhoto != null && valeurPhoto !== '')
		vals['photo'] = valeurPhoto;

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

	var valeurInscriptionImmunisations = $formulaireValeurs.find('.valeurInscriptionImmunisations').prop('checked');
	if(valeurInscriptionImmunisations != null && valeurInscriptionImmunisations !== '')
		vals['inscriptionImmunisations'] = valeurInscriptionImmunisations;

	var valeurInscriptionApprouve = $formulaireValeurs.find('.valeurInscriptionApprouve').prop('checked');
	if(valeurInscriptionApprouve != null && valeurInscriptionApprouve !== '')
		vals['inscriptionApprouve'] = valeurInscriptionApprouve;

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

	var valeurAnneeCle = $formulaireValeurs.find('.valeurAnneeCle').val();
	if(valeurAnneeCle != null && valeurAnneeCle !== '')
		vals['anneeCle'] = valeurAnneeCle;

	var valeurBlocCles = [];
	$formulaireValeurs.find('input.valeurBlocCles:checked').each(function(index) {
		valeurBlocCles.push($(this).val());
	});
	if(valeurBlocCles.length > 0)
		vals['blocCles'] = valeurBlocCles;

	var valeurEnfantCle = $formulaireValeurs.find('.valeurEnfantCle').val();
	if(valeurEnfantCle != null && valeurEnfantCle !== '')
		vals['enfantCle'] = valeurEnfantCle;

	var valeurGardienCles = [];
	$formulaireValeurs.find('input.valeurGardienCles:checked').each(function(index) {
		valeurGardienCles.push($(this).val());
	});
	if(valeurGardienCles.length > 0)
		vals['gardienCles'] = valeurGardienCles;

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

	var valeurUtilisateurCles = [];
	$formulaireValeurs.find('input.valeurUtilisateurCles:checked').each(function(index) {
		valeurUtilisateurCles.push($(this).val());
	});
	if(valeurUtilisateurCles.length > 0)
		vals['utilisateurCles'] = valeurUtilisateurCles;

	var valeurPaiementCles = [];
	$formulaireValeurs.find('input.valeurPaiementCles:checked').each(function(index) {
		valeurPaiementCles.push($(this).val());
	});
	if(valeurPaiementCles.length > 0)
		vals['paiementCles'] = valeurPaiementCles;

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

	var valeurInscriptionNomsParents = $formulaireValeurs.find('.valeurInscriptionNomsParents').val();
	if(valeurInscriptionNomsParents != null && valeurInscriptionNomsParents !== '')
		vals['inscriptionNomsParents'] = valeurInscriptionNomsParents;

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

	var valeurPhoto = $formulaireValeurs.find('.valeurPhoto').val();
	if(valeurPhoto != null && valeurPhoto !== '')
		vals['photo'] = valeurPhoto;

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

	var valeurInscriptionImmunisations = $formulaireValeurs.find('.valeurInscriptionImmunisations').prop('checked');
	if(valeurInscriptionImmunisations != null && valeurInscriptionImmunisations !== '')
		vals['inscriptionImmunisations'] = valeurInscriptionImmunisations;

	var valeurInscriptionApprouve = $formulaireValeurs.find('.valeurInscriptionApprouve').prop('checked');
	if(valeurInscriptionApprouve != null && valeurInscriptionApprouve !== '')
		vals['inscriptionApprouve'] = valeurInscriptionApprouve;

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

	var valeurAnneeCle = $formulaireValeurs.find('input.valeurAnneeCle:checked').val();
	if(valeurAnneeCle != null && valeurAnneeCle !== '')
		vals['anneeCle'] = valeurAnneeCle;

	var valeurBlocCles = $formulaireValeurs.find('input.valeurBlocCles:checked').val();
	if(valeurBlocCles != null && valeurBlocCles !== '')
		vals['blocCles'] = [valeurBlocCles];

	var valeurEnfantCle = $formulaireValeurs.find('input.valeurEnfantCle:checked').val();
	if(valeurEnfantCle != null && valeurEnfantCle !== '')
		vals['enfantCle'] = valeurEnfantCle;

	var valeurGardienCles = $formulaireValeurs.find('input.valeurGardienCles:checked').val();
	if(valeurGardienCles != null && valeurGardienCles !== '')
		vals['gardienCles'] = [valeurGardienCles];

	var valeurMereCles = $formulaireValeurs.find('input.valeurMereCles:checked').val();
	if(valeurMereCles != null && valeurMereCles !== '')
		vals['mereCles'] = [valeurMereCles];

	var valeurPereCles = $formulaireValeurs.find('input.valeurPereCles:checked').val();
	if(valeurPereCles != null && valeurPereCles !== '')
		vals['pereCles'] = [valeurPereCles];

	var valeurUtilisateurCles = $formulaireValeurs.find('input.valeurUtilisateurCles:checked').val();
	if(valeurUtilisateurCles != null && valeurUtilisateurCles !== '')
		vals['utilisateurCles'] = [valeurUtilisateurCles];

	var valeurPaiementCles = $formulaireValeurs.find('input.valeurPaiementCles:checked').val();
	if(valeurPaiementCles != null && valeurPaiementCles !== '')
		vals['paiementCles'] = [valeurPaiementCles];

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

	var valeurInscriptionNomsParents = $formulaireValeurs.find('.valeurInscriptionNomsParents').val();
	if(valeurInscriptionNomsParents != null && valeurInscriptionNomsParents !== '')
		vals['inscriptionNomsParents'] = valeurInscriptionNomsParents;

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

	var valeurInscriptionNomGroupe = $formulaireValeurs.find('.valeurInscriptionNomGroupe').val();
	var removeInscriptionNomGroupe = $formulaireValeurs.find('.removeInscriptionNomGroupe').val() === 'true';
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
	var removeCustomerProfileId = $formulaireValeurs.find('.removeCustomerProfileId').val() === 'true';
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
	var removeInscriptionPaimentComplet = $formulaireValeurs.find('.removeInscriptionPaimentComplet').val() === 'true';
	var valeurInscriptionPaimentCompletSelectVal = $formulaireValeurs.find('select.setInscriptionPaimentComplet').val();
	var valeurInscriptionPaimentComplet = null;
	if(valeurInscriptionPaimentCompletSelectVal != null && valeurInscriptionPaimentCompletSelectVal !== '')
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
	var removeEnfantPropre = $formulaireValeurs.find('.removeEnfantPropre').val() === 'true';
	var valeurEnfantPropreSelectVal = $formulaireValeurs.find('select.setEnfantPropre').val();
	var valeurEnfantPropre = null;
	if(valeurEnfantPropreSelectVal != null && valeurEnfantPropreSelectVal !== '')
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
	var removeInscriptionPaimentChaqueMois = $formulaireValeurs.find('.removeInscriptionPaimentChaqueMois').val() === 'true';
	var valeurInscriptionPaimentChaqueMoisSelectVal = $formulaireValeurs.find('select.setInscriptionPaimentChaqueMois').val();
	var valeurInscriptionPaimentChaqueMois = null;
	if(valeurInscriptionPaimentChaqueMoisSelectVal != null && valeurInscriptionPaimentChaqueMoisSelectVal !== '')
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

	var valeurInscriptionImmunisations = $formulaireValeurs.find('.valeurInscriptionImmunisations').prop('checked');
	var removeInscriptionImmunisations = $formulaireValeurs.find('.removeInscriptionImmunisations').val() === 'true';
	var valeurInscriptionImmunisationsSelectVal = $formulaireValeurs.find('select.setInscriptionImmunisations').val();
	var valeurInscriptionImmunisations = null;
	if(valeurInscriptionImmunisationsSelectVal != null && valeurInscriptionImmunisationsSelectVal !== '')
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

	var valeurInscriptionApprouve = $formulaireValeurs.find('.valeurInscriptionApprouve').prop('checked');
	var removeInscriptionApprouve = $formulaireValeurs.find('.removeInscriptionApprouve').val() === 'true';
	var valeurInscriptionApprouveSelectVal = $formulaireValeurs.find('select.setInscriptionApprouve').val();
	var valeurInscriptionApprouve = null;
	if(valeurInscriptionApprouveSelectVal != null && valeurInscriptionApprouveSelectVal !== '')
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

	var valeurFamilleMarie = $formulaireValeurs.find('.valeurFamilleMarie').prop('checked');
	var removeFamilleMarie = $formulaireValeurs.find('.removeFamilleMarie').val() === 'true';
	var valeurFamilleMarieSelectVal = $formulaireValeurs.find('select.setFamilleMarie').val();
	var valeurFamilleMarie = null;
	if(valeurFamilleMarieSelectVal != null && valeurFamilleMarieSelectVal !== '')
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
	var removeFamilleSepare = $formulaireValeurs.find('.removeFamilleSepare').val() === 'true';
	var valeurFamilleSepareSelectVal = $formulaireValeurs.find('select.setFamilleSepare').val();
	var valeurFamilleSepare = null;
	if(valeurFamilleSepareSelectVal != null && valeurFamilleSepareSelectVal !== '')
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
	var removeFamilleDivorce = $formulaireValeurs.find('.removeFamilleDivorce').val() === 'true';
	var valeurFamilleDivorceSelectVal = $formulaireValeurs.find('select.setFamilleDivorce').val();
	var valeurFamilleDivorce = null;
	if(valeurFamilleDivorceSelectVal != null && valeurFamilleDivorceSelectVal !== '')
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
	var removeFamilleAddresse = $formulaireValeurs.find('.removeFamilleAddresse').val() === 'true';
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
	var removeInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.removeInscriptionConsiderationsSpeciales').val() === 'true';
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
	var removeEnfantConditionsMedicales = $formulaireValeurs.find('.removeEnfantConditionsMedicales').val() === 'true';
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
	var removeEnfantEcolesPrecedemmentFrequentees = $formulaireValeurs.find('.removeEnfantEcolesPrecedemmentFrequentees').val() === 'true';
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
	var removeFamilleCommentVousConnaissezEcole = $formulaireValeurs.find('.removeFamilleCommentVousConnaissezEcole').val() === 'true';
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
	var removeEnfantDescription = $formulaireValeurs.find('.removeEnfantDescription').val() === 'true';
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
	var removeEnfantObjectifs = $formulaireValeurs.find('.removeEnfantObjectifs').val() === 'true';
	var setEnfantObjectifs = removeEnfantObjectifs ? null : $formulaireValeurs.find('.setEnfantObjectifs').val();
	if(removeEnfantObjectifs || setEnfantObjectifs != null && setEnfantObjectifs !== '')
		vals['setEnfantObjectifs'] = setEnfantObjectifs;
	var addEnfantObjectifs = $formulaireValeurs.find('.addEnfantObjectifs').val();
	if(addEnfantObjectifs != null && addEnfantObjectifs !== '')
		vals['addEnfantObjectifs'] = addEnfantObjectifs;
	var removeEnfantObjectifs = $formulaireValeurs.find('.removeEnfantObjectifs').val();
	if(removeEnfantObjectifs != null && removeEnfantObjectifs !== '')
		vals['removeEnfantObjectifs'] = removeEnfantObjectifs;

	var valeurAnneeCle = $formulaireValeurs.find('input.valeurAnneeCle:checked').val();
	if(valeurAnneeCle != null && valeurAnneeCle !== '')
		vals['setAnneeCle'] = valeurAnneeCle;

	var valeurBlocCles = $formulaireValeurs.find('input.valeurBlocCles:checked').val();
	if(valeurBlocCles != null && valeurBlocCles !== '')
		vals['addBlocCles'] = valeurBlocCles;

	var valeurEnfantCle = $formulaireValeurs.find('input.valeurEnfantCle:checked').val();
	if(valeurEnfantCle != null && valeurEnfantCle !== '')
		vals['setEnfantCle'] = valeurEnfantCle;

	var valeurGardienCles = $formulaireValeurs.find('input.valeurGardienCles:checked').val();
	if(valeurGardienCles != null && valeurGardienCles !== '')
		vals['addGardienCles'] = valeurGardienCles;

	var valeurMereCles = $formulaireValeurs.find('input.valeurMereCles:checked').val();
	if(valeurMereCles != null && valeurMereCles !== '')
		vals['addMereCles'] = valeurMereCles;

	var valeurPereCles = $formulaireValeurs.find('input.valeurPereCles:checked').val();
	if(valeurPereCles != null && valeurPereCles !== '')
		vals['addPereCles'] = valeurPereCles;

	var valeurUtilisateurCles = $formulaireValeurs.find('input.valeurUtilisateurCles:checked').val();
	if(valeurUtilisateurCles != null && valeurUtilisateurCles !== '')
		vals['addUtilisateurCles'] = valeurUtilisateurCles;

	var valeurPaiementCles = $formulaireValeurs.find('input.valeurPaiementCles:checked').val();
	if(valeurPaiementCles != null && valeurPaiementCles !== '')
		vals['addPaiementCles'] = valeurPaiementCles;

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

	var valeurEnfantNomComplet = $formulaireValeurs.find('.valeurEnfantNomComplet').val();
	var removeEnfantNomComplet = $formulaireValeurs.find('.removeEnfantNomComplet').val() === 'true';
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
	var removeEnfantNomCompletPrefere = $formulaireValeurs.find('.removeEnfantNomCompletPrefere').val() === 'true';
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
	var removeEnfantDateNaissance = $formulaireValeurs.find('.removeEnfantDateNaissance').val() === 'true';
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

	var valeurInscriptionDateFrais = $formulaireValeurs.find('.valeurInscriptionDateFrais').val();
	var removeInscriptionDateFrais = $formulaireValeurs.find('.removeInscriptionDateFrais').val() === 'true';
	var setInscriptionDateFrais = removeInscriptionDateFrais ? null : $formulaireValeurs.find('.setInscriptionDateFrais').val();
	if(removeInscriptionDateFrais || setInscriptionDateFrais != null && setInscriptionDateFrais !== '')
		vals['setInscriptionDateFrais'] = setInscriptionDateFrais;
	var addInscriptionDateFrais = $formulaireValeurs.find('.addInscriptionDateFrais').val();
	if(addInscriptionDateFrais != null && addInscriptionDateFrais !== '')
		vals['addInscriptionDateFrais'] = addInscriptionDateFrais;
	var removeInscriptionDateFrais = $formulaireValeurs.find('.removeInscriptionDateFrais').val();
	if(removeInscriptionDateFrais != null && removeInscriptionDateFrais !== '')
		vals['removeInscriptionDateFrais'] = removeInscriptionDateFrais;

	var valeurInscriptionNomsParents = $formulaireValeurs.find('.valeurInscriptionNomsParents').val();
	var removeInscriptionNomsParents = $formulaireValeurs.find('.removeInscriptionNomsParents').val() === 'true';
	var setInscriptionNomsParents = removeInscriptionNomsParents ? null : $formulaireValeurs.find('.setInscriptionNomsParents').val();
	if(removeInscriptionNomsParents || setInscriptionNomsParents != null && setInscriptionNomsParents !== '')
		vals['setInscriptionNomsParents'] = setInscriptionNomsParents;
	var addInscriptionNomsParents = $formulaireValeurs.find('.addInscriptionNomsParents').val();
	if(addInscriptionNomsParents != null && addInscriptionNomsParents !== '')
		vals['addInscriptionNomsParents'] = addInscriptionNomsParents;
	var removeInscriptionNomsParents = $formulaireValeurs.find('.removeInscriptionNomsParents').val();
	if(removeInscriptionNomsParents != null && removeInscriptionNomsParents !== '')
		vals['removeInscriptionNomsParents'] = removeInscriptionNomsParents;

	var valeurInscriptionSignature1 = $formulaireValeurs.find('.valeurInscriptionSignature1').val();
	var removeInscriptionSignature1 = $formulaireValeurs.find('.removeInscriptionSignature1').val() === 'true';
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
	var removeInscriptionSignature2 = $formulaireValeurs.find('.removeInscriptionSignature2').val() === 'true';
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
	var removeInscriptionSignature3 = $formulaireValeurs.find('.removeInscriptionSignature3').val() === 'true';
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
	var removeInscriptionSignature4 = $formulaireValeurs.find('.removeInscriptionSignature4').val() === 'true';
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
	var removeInscriptionSignature5 = $formulaireValeurs.find('.removeInscriptionSignature5').val() === 'true';
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
	var removeInscriptionSignature6 = $formulaireValeurs.find('.removeInscriptionSignature6').val() === 'true';
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
	var removeInscriptionSignature7 = $formulaireValeurs.find('.removeInscriptionSignature7').val() === 'true';
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
	var removeInscriptionSignature8 = $formulaireValeurs.find('.removeInscriptionSignature8').val() === 'true';
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
	var removeInscriptionSignature9 = $formulaireValeurs.find('.removeInscriptionSignature9').val() === 'true';
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
	var removeInscriptionSignature10 = $formulaireValeurs.find('.removeInscriptionSignature10').val() === 'true';
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
	var removeInscriptionDate1 = $formulaireValeurs.find('.removeInscriptionDate1').val() === 'true';
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
	var removeInscriptionDate2 = $formulaireValeurs.find('.removeInscriptionDate2').val() === 'true';
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
	var removeInscriptionDate3 = $formulaireValeurs.find('.removeInscriptionDate3').val() === 'true';
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
	var removeInscriptionDate4 = $formulaireValeurs.find('.removeInscriptionDate4').val() === 'true';
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
	var removeInscriptionDate5 = $formulaireValeurs.find('.removeInscriptionDate5').val() === 'true';
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
	var removeInscriptionDate6 = $formulaireValeurs.find('.removeInscriptionDate6').val() === 'true';
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
	var removeInscriptionDate7 = $formulaireValeurs.find('.removeInscriptionDate7').val() === 'true';
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
	var removeInscriptionDate8 = $formulaireValeurs.find('.removeInscriptionDate8').val() === 'true';
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
	var removeInscriptionDate9 = $formulaireValeurs.find('.removeInscriptionDate9').val() === 'true';
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
	var removeInscriptionDate10 = $formulaireValeurs.find('.removeInscriptionDate10').val() === 'true';
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

		var $filtreInscriptionImmunisationsCheckbox = $formulaireFiltres.find('input.valeurInscriptionImmunisations[type = "checkbox"]');
		var $filtreInscriptionImmunisationsSelect = $formulaireFiltres.find('select.valeurInscriptionImmunisations');
		var filtreInscriptionImmunisations = $filtreInscriptionImmunisationsSelect.length ? $filtreInscriptionImmunisationsSelect.val() : $filtreInscriptionImmunisationsCheckbox.prop('checked');
		var filtreInscriptionImmunisationsSelectVal = $formulaireFiltres.find('select.filtreInscriptionImmunisations').val();
		var filtreInscriptionImmunisations = null;
		if(filtreInscriptionImmunisationsSelectVal !== '')
			filtreInscriptionImmunisations = filtreInscriptionImmunisationsSelectVal == 'true';
		if(filtreInscriptionImmunisations != null && filtreInscriptionImmunisations === true)
			filtres.push({ name: 'fq', value: 'inscriptionImmunisations:' + filtreInscriptionImmunisations });

		var $filtreInscriptionApprouveCheckbox = $formulaireFiltres.find('input.valeurInscriptionApprouve[type = "checkbox"]');
		var $filtreInscriptionApprouveSelect = $formulaireFiltres.find('select.valeurInscriptionApprouve');
		var filtreInscriptionApprouve = $filtreInscriptionApprouveSelect.length ? $filtreInscriptionApprouveSelect.val() : $filtreInscriptionApprouveCheckbox.prop('checked');
		var filtreInscriptionApprouveSelectVal = $formulaireFiltres.find('select.filtreInscriptionApprouve').val();
		var filtreInscriptionApprouve = null;
		if(filtreInscriptionApprouveSelectVal !== '')
			filtreInscriptionApprouve = filtreInscriptionApprouveSelectVal == 'true';
		if(filtreInscriptionApprouve != null && filtreInscriptionApprouve === true)
			filtres.push({ name: 'fq', value: 'inscriptionApprouve:' + filtreInscriptionApprouve });

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

		var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
		if(filtreAnneeCle != null && filtreAnneeCle !== '')
			filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

		var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
		if(filtreBlocCles != null && filtreBlocCles !== '')
			filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

		var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
		if(filtreEnfantCle != null && filtreEnfantCle !== '')
			filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

		var filtreGardienCles = $formulaireFiltres.find('.valeurGardienCles').val();
		if(filtreGardienCles != null && filtreGardienCles !== '')
			filtres.push({ name: 'fq', value: 'gardienCles:' + filtreGardienCles });

		var filtreMereCles = $formulaireFiltres.find('.valeurMereCles').val();
		if(filtreMereCles != null && filtreMereCles !== '')
			filtres.push({ name: 'fq', value: 'mereCles:' + filtreMereCles });

		var filtrePereCles = $formulaireFiltres.find('.valeurPereCles').val();
		if(filtrePereCles != null && filtrePereCles !== '')
			filtres.push({ name: 'fq', value: 'pereCles:' + filtrePereCles });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtrePaiementCles = $formulaireFiltres.find('.valeurPaiementCles').val();
		if(filtrePaiementCles != null && filtrePaiementCles !== '')
			filtres.push({ name: 'fq', value: 'paiementCles:' + filtrePaiementCles });

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

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

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

		var filtreEnfantDateNaissanceDAnnee = $formulaireFiltres.find('.valeurEnfantDateNaissanceDAnnee').val();
		if(filtreEnfantDateNaissanceDAnnee != null && filtreEnfantDateNaissanceDAnnee !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissanceDAnnee:' + filtreEnfantDateNaissanceDAnnee });

		var filtreEnfantDateNaissanceMoisDAnnee = $formulaireFiltres.find('.valeurEnfantDateNaissanceMoisDAnnee').val();
		if(filtreEnfantDateNaissanceMoisDAnnee != null && filtreEnfantDateNaissanceMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissanceMoisDAnnee:' + filtreEnfantDateNaissanceMoisDAnnee });

		var filtreEnfantDateNaissanceJourDeSemaine = $formulaireFiltres.find('.valeurEnfantDateNaissanceJourDeSemaine').val();
		if(filtreEnfantDateNaissanceJourDeSemaine != null && filtreEnfantDateNaissanceJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissanceJourDeSemaine:' + filtreEnfantDateNaissanceJourDeSemaine });

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

		var filtreInscriptionCouleurGroupe = $formulaireFiltres.find('.valeurInscriptionCouleurGroupe').val();
		if(filtreInscriptionCouleurGroupe != null && filtreInscriptionCouleurGroupe !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCouleurGroupe:' + filtreInscriptionCouleurGroupe });

		var filtreInscriptionDateFrais = $formulaireFiltres.find('.valeurInscriptionDateFrais').val();
		if(filtreInscriptionDateFrais != null && filtreInscriptionDateFrais !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDateFrais:' + filtreInscriptionDateFrais });

		var filtrePaiementLastDate = $formulaireFiltres.find('.valeurPaiementLastDate').val();
		if(filtrePaiementLastDate != null && filtrePaiementLastDate !== '')
			filtres.push({ name: 'fq', value: 'paiementLastDate:' + filtrePaiementLastDate });

		var filtrePaiementLastStr = $formulaireFiltres.find('.valeurPaiementLastStr').val();
		if(filtrePaiementLastStr != null && filtrePaiementLastStr !== '')
			filtres.push({ name: 'fq', value: 'paiementLastStr:' + filtrePaiementLastStr });

		var filtrePaiementMontant = $formulaireFiltres.find('.valeurPaiementMontant').val();
		if(filtrePaiementMontant != null && filtrePaiementMontant !== '')
			filtres.push({ name: 'fq', value: 'paiementMontant:' + filtrePaiementMontant });

		var filtreFraisMontant = $formulaireFiltres.find('.valeurFraisMontant').val();
		if(filtreFraisMontant != null && filtreFraisMontant !== '')
			filtres.push({ name: 'fq', value: 'fraisMontant:' + filtreFraisMontant });

		var filtreFraisMontantFuture = $formulaireFiltres.find('.valeurFraisMontantFuture').val();
		if(filtreFraisMontantFuture != null && filtreFraisMontantFuture !== '')
			filtres.push({ name: 'fq', value: 'fraisMontantFuture:' + filtreFraisMontantFuture });

		var filtreFraisMontantDu = $formulaireFiltres.find('.valeurFraisMontantDu').val();
		if(filtreFraisMontantDu != null && filtreFraisMontantDu !== '')
			filtres.push({ name: 'fq', value: 'fraisMontantDu:' + filtreFraisMontantDu });

		var filtreFraisMontantNonPasse = $formulaireFiltres.find('.valeurFraisMontantNonPasse').val();
		if(filtreFraisMontantNonPasse != null && filtreFraisMontantNonPasse !== '')
			filtres.push({ name: 'fq', value: 'fraisMontantNonPasse:' + filtreFraisMontantNonPasse });

		var filtreFraisMaintenant = $formulaireFiltres.find('.valeurFraisMaintenant').val();
		if(filtreFraisMaintenant != null && filtreFraisMaintenant !== '')
			filtres.push({ name: 'fq', value: 'fraisMaintenant:' + filtreFraisMaintenant });

		var $filtrePaiementsAJourCheckbox = $formulaireFiltres.find('input.valeurPaiementsAJour[type = "checkbox"]');
		var $filtrePaiementsAJourSelect = $formulaireFiltres.find('select.valeurPaiementsAJour');
		var filtrePaiementsAJour = $filtrePaiementsAJourSelect.length ? $filtrePaiementsAJourSelect.val() : $filtrePaiementsAJourCheckbox.prop('checked');
		var filtrePaiementsAJourSelectVal = $formulaireFiltres.find('select.filtrePaiementsAJour').val();
		var filtrePaiementsAJour = null;
		if(filtrePaiementsAJourSelectVal !== '')
			filtrePaiementsAJour = filtrePaiementsAJourSelectVal == 'true';
		if(filtrePaiementsAJour != null && filtrePaiementsAJour === true)
			filtres.push({ name: 'fq', value: 'paiementsAJour:' + filtrePaiementsAJour });

		var $filtrePaiementsEnRetardCheckbox = $formulaireFiltres.find('input.valeurPaiementsEnRetard[type = "checkbox"]');
		var $filtrePaiementsEnRetardSelect = $formulaireFiltres.find('select.valeurPaiementsEnRetard');
		var filtrePaiementsEnRetard = $filtrePaiementsEnRetardSelect.length ? $filtrePaiementsEnRetardSelect.val() : $filtrePaiementsEnRetardCheckbox.prop('checked');
		var filtrePaiementsEnRetardSelectVal = $formulaireFiltres.find('select.filtrePaiementsEnRetard').val();
		var filtrePaiementsEnRetard = null;
		if(filtrePaiementsEnRetardSelectVal !== '')
			filtrePaiementsEnRetard = filtrePaiementsEnRetardSelectVal == 'true';
		if(filtrePaiementsEnRetard != null && filtrePaiementsEnRetard === true)
			filtres.push({ name: 'fq', value: 'paiementsEnRetard:' + filtrePaiementsEnRetard });

		var filtrePaiementsEnRetardMontant = $formulaireFiltres.find('.valeurPaiementsEnRetardMontant').val();
		if(filtrePaiementsEnRetardMontant != null && filtrePaiementsEnRetardMontant !== '')
			filtres.push({ name: 'fq', value: 'paiementsEnRetardMontant:' + filtrePaiementsEnRetardMontant });

		var $filtrePaiementsEnAvanceCheckbox = $formulaireFiltres.find('input.valeurPaiementsEnAvance[type = "checkbox"]');
		var $filtrePaiementsEnAvanceSelect = $formulaireFiltres.find('select.valeurPaiementsEnAvance');
		var filtrePaiementsEnAvance = $filtrePaiementsEnAvanceSelect.length ? $filtrePaiementsEnAvanceSelect.val() : $filtrePaiementsEnAvanceCheckbox.prop('checked');
		var filtrePaiementsEnAvanceSelectVal = $formulaireFiltres.find('select.filtrePaiementsEnAvance').val();
		var filtrePaiementsEnAvance = null;
		if(filtrePaiementsEnAvanceSelectVal !== '')
			filtrePaiementsEnAvance = filtrePaiementsEnAvanceSelectVal == 'true';
		if(filtrePaiementsEnAvance != null && filtrePaiementsEnAvance === true)
			filtres.push({ name: 'fq', value: 'paiementsEnAvance:' + filtrePaiementsEnAvance });

		var $filtrePaiementsEnSouffranceCheckbox = $formulaireFiltres.find('input.valeurPaiementsEnSouffrance[type = "checkbox"]');
		var $filtrePaiementsEnSouffranceSelect = $formulaireFiltres.find('select.valeurPaiementsEnSouffrance');
		var filtrePaiementsEnSouffrance = $filtrePaiementsEnSouffranceSelect.length ? $filtrePaiementsEnSouffranceSelect.val() : $filtrePaiementsEnSouffranceCheckbox.prop('checked');
		var filtrePaiementsEnSouffranceSelectVal = $formulaireFiltres.find('select.filtrePaiementsEnSouffrance').val();
		var filtrePaiementsEnSouffrance = null;
		if(filtrePaiementsEnSouffranceSelectVal !== '')
			filtrePaiementsEnSouffrance = filtrePaiementsEnSouffranceSelectVal == 'true';
		if(filtrePaiementsEnSouffrance != null && filtrePaiementsEnSouffrance === true)
			filtres.push({ name: 'fq', value: 'paiementsEnSouffrance:' + filtrePaiementsEnSouffrance });

		var filtrePaiementsEnSouffranceMontant = $formulaireFiltres.find('.valeurPaiementsEnSouffranceMontant').val();
		if(filtrePaiementsEnSouffranceMontant != null && filtrePaiementsEnSouffranceMontant !== '')
			filtres.push({ name: 'fq', value: 'paiementsEnSouffranceMontant:' + filtrePaiementsEnSouffranceMontant });

		var $filtreFraisCreesCheckbox = $formulaireFiltres.find('input.valeurFraisCrees[type = "checkbox"]');
		var $filtreFraisCreesSelect = $formulaireFiltres.find('select.valeurFraisCrees');
		var filtreFraisCrees = $filtreFraisCreesSelect.length ? $filtreFraisCreesSelect.val() : $filtreFraisCreesCheckbox.prop('checked');
		var filtreFraisCreesSelectVal = $formulaireFiltres.find('select.filtreFraisCrees').val();
		var filtreFraisCrees = null;
		if(filtreFraisCreesSelectVal !== '')
			filtreFraisCrees = filtreFraisCreesSelectVal == 'true';
		if(filtreFraisCrees != null && filtreFraisCrees === true)
			filtres.push({ name: 'fq', value: 'fraisCrees:' + filtreFraisCrees });

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

		var filtreInscriptionMails = $formulaireFiltres.find('.valeurInscriptionMails').val();
		if(filtreInscriptionMails != null && filtreInscriptionMails !== '')
			filtres.push({ name: 'fq', value: 'inscriptionMails:' + filtreInscriptionMails });

		var filtreInscriptionMail = $formulaireFiltres.find('.valeurInscriptionMail').val();
		if(filtreInscriptionMail != null && filtreInscriptionMail !== '')
			filtres.push({ name: 'fq', value: 'inscriptionMail:' + filtreInscriptionMail });

		var filtreInscriptionNumeroTelephones = $formulaireFiltres.find('.valeurInscriptionNumeroTelephones').val();
		if(filtreInscriptionNumeroTelephones != null && filtreInscriptionNumeroTelephones !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNumeroTelephones:' + filtreInscriptionNumeroTelephones });

		var filtreInscriptionNumeroTelephone = $formulaireFiltres.find('.valeurInscriptionNumeroTelephone').val();
		if(filtreInscriptionNumeroTelephone != null && filtreInscriptionNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNumeroTelephone:' + filtreInscriptionNumeroTelephone });

		var filtreInscriptionNomParent = $formulaireFiltres.find('.valeurInscriptionNomParent').val();
		if(filtreInscriptionNomParent != null && filtreInscriptionNomParent !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNomParent:' + filtreInscriptionNomParent });

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

		var $filtreInscriptionImmunisationsCheckbox = $formulaireFiltres.find('input.valeurInscriptionImmunisations[type = "checkbox"]');
		var $filtreInscriptionImmunisationsSelect = $formulaireFiltres.find('select.valeurInscriptionImmunisations');
		var filtreInscriptionImmunisations = $filtreInscriptionImmunisationsSelect.length ? $filtreInscriptionImmunisationsSelect.val() : $filtreInscriptionImmunisationsCheckbox.prop('checked');
		var filtreInscriptionImmunisationsSelectVal = $formulaireFiltres.find('select.filtreInscriptionImmunisations').val();
		var filtreInscriptionImmunisations = null;
		if(filtreInscriptionImmunisationsSelectVal !== '')
			filtreInscriptionImmunisations = filtreInscriptionImmunisationsSelectVal == 'true';
		if(filtreInscriptionImmunisations != null && filtreInscriptionImmunisations === true)
			filtres.push({ name: 'fq', value: 'inscriptionImmunisations:' + filtreInscriptionImmunisations });

		var $filtreInscriptionApprouveCheckbox = $formulaireFiltres.find('input.valeurInscriptionApprouve[type = "checkbox"]');
		var $filtreInscriptionApprouveSelect = $formulaireFiltres.find('select.valeurInscriptionApprouve');
		var filtreInscriptionApprouve = $filtreInscriptionApprouveSelect.length ? $filtreInscriptionApprouveSelect.val() : $filtreInscriptionApprouveCheckbox.prop('checked');
		var filtreInscriptionApprouveSelectVal = $formulaireFiltres.find('select.filtreInscriptionApprouve').val();
		var filtreInscriptionApprouve = null;
		if(filtreInscriptionApprouveSelectVal !== '')
			filtreInscriptionApprouve = filtreInscriptionApprouveSelectVal == 'true';
		if(filtreInscriptionApprouve != null && filtreInscriptionApprouve === true)
			filtres.push({ name: 'fq', value: 'inscriptionApprouve:' + filtreInscriptionApprouve });

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

		var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
		if(filtreAnneeCle != null && filtreAnneeCle !== '')
			filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

		var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
		if(filtreBlocCles != null && filtreBlocCles !== '')
			filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

		var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
		if(filtreEnfantCle != null && filtreEnfantCle !== '')
			filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

		var filtreGardienCles = $formulaireFiltres.find('.valeurGardienCles').val();
		if(filtreGardienCles != null && filtreGardienCles !== '')
			filtres.push({ name: 'fq', value: 'gardienCles:' + filtreGardienCles });

		var filtreMereCles = $formulaireFiltres.find('.valeurMereCles').val();
		if(filtreMereCles != null && filtreMereCles !== '')
			filtres.push({ name: 'fq', value: 'mereCles:' + filtreMereCles });

		var filtrePereCles = $formulaireFiltres.find('.valeurPereCles').val();
		if(filtrePereCles != null && filtrePereCles !== '')
			filtres.push({ name: 'fq', value: 'pereCles:' + filtrePereCles });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtrePaiementCles = $formulaireFiltres.find('.valeurPaiementCles').val();
		if(filtrePaiementCles != null && filtrePaiementCles !== '')
			filtres.push({ name: 'fq', value: 'paiementCles:' + filtrePaiementCles });

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

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

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

		var filtreEnfantDateNaissanceDAnnee = $formulaireFiltres.find('.valeurEnfantDateNaissanceDAnnee').val();
		if(filtreEnfantDateNaissanceDAnnee != null && filtreEnfantDateNaissanceDAnnee !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissanceDAnnee:' + filtreEnfantDateNaissanceDAnnee });

		var filtreEnfantDateNaissanceMoisDAnnee = $formulaireFiltres.find('.valeurEnfantDateNaissanceMoisDAnnee').val();
		if(filtreEnfantDateNaissanceMoisDAnnee != null && filtreEnfantDateNaissanceMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissanceMoisDAnnee:' + filtreEnfantDateNaissanceMoisDAnnee });

		var filtreEnfantDateNaissanceJourDeSemaine = $formulaireFiltres.find('.valeurEnfantDateNaissanceJourDeSemaine').val();
		if(filtreEnfantDateNaissanceJourDeSemaine != null && filtreEnfantDateNaissanceJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissanceJourDeSemaine:' + filtreEnfantDateNaissanceJourDeSemaine });

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

		var filtreInscriptionCouleurGroupe = $formulaireFiltres.find('.valeurInscriptionCouleurGroupe').val();
		if(filtreInscriptionCouleurGroupe != null && filtreInscriptionCouleurGroupe !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCouleurGroupe:' + filtreInscriptionCouleurGroupe });

		var filtreInscriptionDateFrais = $formulaireFiltres.find('.valeurInscriptionDateFrais').val();
		if(filtreInscriptionDateFrais != null && filtreInscriptionDateFrais !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDateFrais:' + filtreInscriptionDateFrais });

		var filtrePaiementLastDate = $formulaireFiltres.find('.valeurPaiementLastDate').val();
		if(filtrePaiementLastDate != null && filtrePaiementLastDate !== '')
			filtres.push({ name: 'fq', value: 'paiementLastDate:' + filtrePaiementLastDate });

		var filtrePaiementLastStr = $formulaireFiltres.find('.valeurPaiementLastStr').val();
		if(filtrePaiementLastStr != null && filtrePaiementLastStr !== '')
			filtres.push({ name: 'fq', value: 'paiementLastStr:' + filtrePaiementLastStr });

		var filtrePaiementMontant = $formulaireFiltres.find('.valeurPaiementMontant').val();
		if(filtrePaiementMontant != null && filtrePaiementMontant !== '')
			filtres.push({ name: 'fq', value: 'paiementMontant:' + filtrePaiementMontant });

		var filtreFraisMontant = $formulaireFiltres.find('.valeurFraisMontant').val();
		if(filtreFraisMontant != null && filtreFraisMontant !== '')
			filtres.push({ name: 'fq', value: 'fraisMontant:' + filtreFraisMontant });

		var filtreFraisMontantFuture = $formulaireFiltres.find('.valeurFraisMontantFuture').val();
		if(filtreFraisMontantFuture != null && filtreFraisMontantFuture !== '')
			filtres.push({ name: 'fq', value: 'fraisMontantFuture:' + filtreFraisMontantFuture });

		var filtreFraisMontantDu = $formulaireFiltres.find('.valeurFraisMontantDu').val();
		if(filtreFraisMontantDu != null && filtreFraisMontantDu !== '')
			filtres.push({ name: 'fq', value: 'fraisMontantDu:' + filtreFraisMontantDu });

		var filtreFraisMontantNonPasse = $formulaireFiltres.find('.valeurFraisMontantNonPasse').val();
		if(filtreFraisMontantNonPasse != null && filtreFraisMontantNonPasse !== '')
			filtres.push({ name: 'fq', value: 'fraisMontantNonPasse:' + filtreFraisMontantNonPasse });

		var filtreFraisMaintenant = $formulaireFiltres.find('.valeurFraisMaintenant').val();
		if(filtreFraisMaintenant != null && filtreFraisMaintenant !== '')
			filtres.push({ name: 'fq', value: 'fraisMaintenant:' + filtreFraisMaintenant });

		var $filtrePaiementsAJourCheckbox = $formulaireFiltres.find('input.valeurPaiementsAJour[type = "checkbox"]');
		var $filtrePaiementsAJourSelect = $formulaireFiltres.find('select.valeurPaiementsAJour');
		var filtrePaiementsAJour = $filtrePaiementsAJourSelect.length ? $filtrePaiementsAJourSelect.val() : $filtrePaiementsAJourCheckbox.prop('checked');
		var filtrePaiementsAJourSelectVal = $formulaireFiltres.find('select.filtrePaiementsAJour').val();
		var filtrePaiementsAJour = null;
		if(filtrePaiementsAJourSelectVal !== '')
			filtrePaiementsAJour = filtrePaiementsAJourSelectVal == 'true';
		if(filtrePaiementsAJour != null && filtrePaiementsAJour === true)
			filtres.push({ name: 'fq', value: 'paiementsAJour:' + filtrePaiementsAJour });

		var $filtrePaiementsEnRetardCheckbox = $formulaireFiltres.find('input.valeurPaiementsEnRetard[type = "checkbox"]');
		var $filtrePaiementsEnRetardSelect = $formulaireFiltres.find('select.valeurPaiementsEnRetard');
		var filtrePaiementsEnRetard = $filtrePaiementsEnRetardSelect.length ? $filtrePaiementsEnRetardSelect.val() : $filtrePaiementsEnRetardCheckbox.prop('checked');
		var filtrePaiementsEnRetardSelectVal = $formulaireFiltres.find('select.filtrePaiementsEnRetard').val();
		var filtrePaiementsEnRetard = null;
		if(filtrePaiementsEnRetardSelectVal !== '')
			filtrePaiementsEnRetard = filtrePaiementsEnRetardSelectVal == 'true';
		if(filtrePaiementsEnRetard != null && filtrePaiementsEnRetard === true)
			filtres.push({ name: 'fq', value: 'paiementsEnRetard:' + filtrePaiementsEnRetard });

		var filtrePaiementsEnRetardMontant = $formulaireFiltres.find('.valeurPaiementsEnRetardMontant').val();
		if(filtrePaiementsEnRetardMontant != null && filtrePaiementsEnRetardMontant !== '')
			filtres.push({ name: 'fq', value: 'paiementsEnRetardMontant:' + filtrePaiementsEnRetardMontant });

		var $filtrePaiementsEnAvanceCheckbox = $formulaireFiltres.find('input.valeurPaiementsEnAvance[type = "checkbox"]');
		var $filtrePaiementsEnAvanceSelect = $formulaireFiltres.find('select.valeurPaiementsEnAvance');
		var filtrePaiementsEnAvance = $filtrePaiementsEnAvanceSelect.length ? $filtrePaiementsEnAvanceSelect.val() : $filtrePaiementsEnAvanceCheckbox.prop('checked');
		var filtrePaiementsEnAvanceSelectVal = $formulaireFiltres.find('select.filtrePaiementsEnAvance').val();
		var filtrePaiementsEnAvance = null;
		if(filtrePaiementsEnAvanceSelectVal !== '')
			filtrePaiementsEnAvance = filtrePaiementsEnAvanceSelectVal == 'true';
		if(filtrePaiementsEnAvance != null && filtrePaiementsEnAvance === true)
			filtres.push({ name: 'fq', value: 'paiementsEnAvance:' + filtrePaiementsEnAvance });

		var $filtrePaiementsEnSouffranceCheckbox = $formulaireFiltres.find('input.valeurPaiementsEnSouffrance[type = "checkbox"]');
		var $filtrePaiementsEnSouffranceSelect = $formulaireFiltres.find('select.valeurPaiementsEnSouffrance');
		var filtrePaiementsEnSouffrance = $filtrePaiementsEnSouffranceSelect.length ? $filtrePaiementsEnSouffranceSelect.val() : $filtrePaiementsEnSouffranceCheckbox.prop('checked');
		var filtrePaiementsEnSouffranceSelectVal = $formulaireFiltres.find('select.filtrePaiementsEnSouffrance').val();
		var filtrePaiementsEnSouffrance = null;
		if(filtrePaiementsEnSouffranceSelectVal !== '')
			filtrePaiementsEnSouffrance = filtrePaiementsEnSouffranceSelectVal == 'true';
		if(filtrePaiementsEnSouffrance != null && filtrePaiementsEnSouffrance === true)
			filtres.push({ name: 'fq', value: 'paiementsEnSouffrance:' + filtrePaiementsEnSouffrance });

		var filtrePaiementsEnSouffranceMontant = $formulaireFiltres.find('.valeurPaiementsEnSouffranceMontant').val();
		if(filtrePaiementsEnSouffranceMontant != null && filtrePaiementsEnSouffranceMontant !== '')
			filtres.push({ name: 'fq', value: 'paiementsEnSouffranceMontant:' + filtrePaiementsEnSouffranceMontant });

		var $filtreFraisCreesCheckbox = $formulaireFiltres.find('input.valeurFraisCrees[type = "checkbox"]');
		var $filtreFraisCreesSelect = $formulaireFiltres.find('select.valeurFraisCrees');
		var filtreFraisCrees = $filtreFraisCreesSelect.length ? $filtreFraisCreesSelect.val() : $filtreFraisCreesCheckbox.prop('checked');
		var filtreFraisCreesSelectVal = $formulaireFiltres.find('select.filtreFraisCrees').val();
		var filtreFraisCrees = null;
		if(filtreFraisCreesSelectVal !== '')
			filtreFraisCrees = filtreFraisCreesSelectVal == 'true';
		if(filtreFraisCrees != null && filtreFraisCrees === true)
			filtres.push({ name: 'fq', value: 'fraisCrees:' + filtreFraisCrees });

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

		var filtreInscriptionMails = $formulaireFiltres.find('.valeurInscriptionMails').val();
		if(filtreInscriptionMails != null && filtreInscriptionMails !== '')
			filtres.push({ name: 'fq', value: 'inscriptionMails:' + filtreInscriptionMails });

		var filtreInscriptionMail = $formulaireFiltres.find('.valeurInscriptionMail').val();
		if(filtreInscriptionMail != null && filtreInscriptionMail !== '')
			filtres.push({ name: 'fq', value: 'inscriptionMail:' + filtreInscriptionMail });

		var filtreInscriptionNumeroTelephones = $formulaireFiltres.find('.valeurInscriptionNumeroTelephones').val();
		if(filtreInscriptionNumeroTelephones != null && filtreInscriptionNumeroTelephones !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNumeroTelephones:' + filtreInscriptionNumeroTelephones });

		var filtreInscriptionNumeroTelephone = $formulaireFiltres.find('.valeurInscriptionNumeroTelephone').val();
		if(filtreInscriptionNumeroTelephone != null && filtreInscriptionNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNumeroTelephone:' + filtreInscriptionNumeroTelephone });

		var filtreInscriptionNomParent = $formulaireFiltres.find('.valeurInscriptionNomParent').val();
		if(filtreInscriptionNomParent != null && filtreInscriptionNomParent !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNomParent:' + filtreInscriptionNomParent });

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

// RechercheAdmin //

async function rechercheadminInscriptionScolaire($formulaireFiltres, success, error) {
	var filtres = rechercheadminInscriptionScolaireFiltres($formulaireFiltres);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	rechercheadminInscriptionScolaireVals(filtres, success, error);
}

function rechercheadminInscriptionScolaireFiltres($formulaireFiltres) {
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

		var $filtreInscriptionImmunisationsCheckbox = $formulaireFiltres.find('input.valeurInscriptionImmunisations[type = "checkbox"]');
		var $filtreInscriptionImmunisationsSelect = $formulaireFiltres.find('select.valeurInscriptionImmunisations');
		var filtreInscriptionImmunisations = $filtreInscriptionImmunisationsSelect.length ? $filtreInscriptionImmunisationsSelect.val() : $filtreInscriptionImmunisationsCheckbox.prop('checked');
		var filtreInscriptionImmunisationsSelectVal = $formulaireFiltres.find('select.filtreInscriptionImmunisations').val();
		var filtreInscriptionImmunisations = null;
		if(filtreInscriptionImmunisationsSelectVal !== '')
			filtreInscriptionImmunisations = filtreInscriptionImmunisationsSelectVal == 'true';
		if(filtreInscriptionImmunisations != null && filtreInscriptionImmunisations === true)
			filtres.push({ name: 'fq', value: 'inscriptionImmunisations:' + filtreInscriptionImmunisations });

		var $filtreInscriptionApprouveCheckbox = $formulaireFiltres.find('input.valeurInscriptionApprouve[type = "checkbox"]');
		var $filtreInscriptionApprouveSelect = $formulaireFiltres.find('select.valeurInscriptionApprouve');
		var filtreInscriptionApprouve = $filtreInscriptionApprouveSelect.length ? $filtreInscriptionApprouveSelect.val() : $filtreInscriptionApprouveCheckbox.prop('checked');
		var filtreInscriptionApprouveSelectVal = $formulaireFiltres.find('select.filtreInscriptionApprouve').val();
		var filtreInscriptionApprouve = null;
		if(filtreInscriptionApprouveSelectVal !== '')
			filtreInscriptionApprouve = filtreInscriptionApprouveSelectVal == 'true';
		if(filtreInscriptionApprouve != null && filtreInscriptionApprouve === true)
			filtres.push({ name: 'fq', value: 'inscriptionApprouve:' + filtreInscriptionApprouve });

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

		var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
		if(filtreAnneeCle != null && filtreAnneeCle !== '')
			filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

		var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
		if(filtreBlocCles != null && filtreBlocCles !== '')
			filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

		var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
		if(filtreEnfantCle != null && filtreEnfantCle !== '')
			filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

		var filtreGardienCles = $formulaireFiltres.find('.valeurGardienCles').val();
		if(filtreGardienCles != null && filtreGardienCles !== '')
			filtres.push({ name: 'fq', value: 'gardienCles:' + filtreGardienCles });

		var filtreMereCles = $formulaireFiltres.find('.valeurMereCles').val();
		if(filtreMereCles != null && filtreMereCles !== '')
			filtres.push({ name: 'fq', value: 'mereCles:' + filtreMereCles });

		var filtrePereCles = $formulaireFiltres.find('.valeurPereCles').val();
		if(filtrePereCles != null && filtrePereCles !== '')
			filtres.push({ name: 'fq', value: 'pereCles:' + filtrePereCles });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtrePaiementCles = $formulaireFiltres.find('.valeurPaiementCles').val();
		if(filtrePaiementCles != null && filtrePaiementCles !== '')
			filtres.push({ name: 'fq', value: 'paiementCles:' + filtrePaiementCles });

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

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

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

		var filtreEnfantDateNaissanceDAnnee = $formulaireFiltres.find('.valeurEnfantDateNaissanceDAnnee').val();
		if(filtreEnfantDateNaissanceDAnnee != null && filtreEnfantDateNaissanceDAnnee !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissanceDAnnee:' + filtreEnfantDateNaissanceDAnnee });

		var filtreEnfantDateNaissanceMoisDAnnee = $formulaireFiltres.find('.valeurEnfantDateNaissanceMoisDAnnee').val();
		if(filtreEnfantDateNaissanceMoisDAnnee != null && filtreEnfantDateNaissanceMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissanceMoisDAnnee:' + filtreEnfantDateNaissanceMoisDAnnee });

		var filtreEnfantDateNaissanceJourDeSemaine = $formulaireFiltres.find('.valeurEnfantDateNaissanceJourDeSemaine').val();
		if(filtreEnfantDateNaissanceJourDeSemaine != null && filtreEnfantDateNaissanceJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissanceJourDeSemaine:' + filtreEnfantDateNaissanceJourDeSemaine });

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

		var filtreInscriptionCouleurGroupe = $formulaireFiltres.find('.valeurInscriptionCouleurGroupe').val();
		if(filtreInscriptionCouleurGroupe != null && filtreInscriptionCouleurGroupe !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCouleurGroupe:' + filtreInscriptionCouleurGroupe });

		var filtreInscriptionDateFrais = $formulaireFiltres.find('.valeurInscriptionDateFrais').val();
		if(filtreInscriptionDateFrais != null && filtreInscriptionDateFrais !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDateFrais:' + filtreInscriptionDateFrais });

		var filtrePaiementLastDate = $formulaireFiltres.find('.valeurPaiementLastDate').val();
		if(filtrePaiementLastDate != null && filtrePaiementLastDate !== '')
			filtres.push({ name: 'fq', value: 'paiementLastDate:' + filtrePaiementLastDate });

		var filtrePaiementLastStr = $formulaireFiltres.find('.valeurPaiementLastStr').val();
		if(filtrePaiementLastStr != null && filtrePaiementLastStr !== '')
			filtres.push({ name: 'fq', value: 'paiementLastStr:' + filtrePaiementLastStr });

		var filtrePaiementMontant = $formulaireFiltres.find('.valeurPaiementMontant').val();
		if(filtrePaiementMontant != null && filtrePaiementMontant !== '')
			filtres.push({ name: 'fq', value: 'paiementMontant:' + filtrePaiementMontant });

		var filtreFraisMontant = $formulaireFiltres.find('.valeurFraisMontant').val();
		if(filtreFraisMontant != null && filtreFraisMontant !== '')
			filtres.push({ name: 'fq', value: 'fraisMontant:' + filtreFraisMontant });

		var filtreFraisMontantFuture = $formulaireFiltres.find('.valeurFraisMontantFuture').val();
		if(filtreFraisMontantFuture != null && filtreFraisMontantFuture !== '')
			filtres.push({ name: 'fq', value: 'fraisMontantFuture:' + filtreFraisMontantFuture });

		var filtreFraisMontantDu = $formulaireFiltres.find('.valeurFraisMontantDu').val();
		if(filtreFraisMontantDu != null && filtreFraisMontantDu !== '')
			filtres.push({ name: 'fq', value: 'fraisMontantDu:' + filtreFraisMontantDu });

		var filtreFraisMontantNonPasse = $formulaireFiltres.find('.valeurFraisMontantNonPasse').val();
		if(filtreFraisMontantNonPasse != null && filtreFraisMontantNonPasse !== '')
			filtres.push({ name: 'fq', value: 'fraisMontantNonPasse:' + filtreFraisMontantNonPasse });

		var filtreFraisMaintenant = $formulaireFiltres.find('.valeurFraisMaintenant').val();
		if(filtreFraisMaintenant != null && filtreFraisMaintenant !== '')
			filtres.push({ name: 'fq', value: 'fraisMaintenant:' + filtreFraisMaintenant });

		var $filtrePaiementsAJourCheckbox = $formulaireFiltres.find('input.valeurPaiementsAJour[type = "checkbox"]');
		var $filtrePaiementsAJourSelect = $formulaireFiltres.find('select.valeurPaiementsAJour');
		var filtrePaiementsAJour = $filtrePaiementsAJourSelect.length ? $filtrePaiementsAJourSelect.val() : $filtrePaiementsAJourCheckbox.prop('checked');
		var filtrePaiementsAJourSelectVal = $formulaireFiltres.find('select.filtrePaiementsAJour').val();
		var filtrePaiementsAJour = null;
		if(filtrePaiementsAJourSelectVal !== '')
			filtrePaiementsAJour = filtrePaiementsAJourSelectVal == 'true';
		if(filtrePaiementsAJour != null && filtrePaiementsAJour === true)
			filtres.push({ name: 'fq', value: 'paiementsAJour:' + filtrePaiementsAJour });

		var $filtrePaiementsEnRetardCheckbox = $formulaireFiltres.find('input.valeurPaiementsEnRetard[type = "checkbox"]');
		var $filtrePaiementsEnRetardSelect = $formulaireFiltres.find('select.valeurPaiementsEnRetard');
		var filtrePaiementsEnRetard = $filtrePaiementsEnRetardSelect.length ? $filtrePaiementsEnRetardSelect.val() : $filtrePaiementsEnRetardCheckbox.prop('checked');
		var filtrePaiementsEnRetardSelectVal = $formulaireFiltres.find('select.filtrePaiementsEnRetard').val();
		var filtrePaiementsEnRetard = null;
		if(filtrePaiementsEnRetardSelectVal !== '')
			filtrePaiementsEnRetard = filtrePaiementsEnRetardSelectVal == 'true';
		if(filtrePaiementsEnRetard != null && filtrePaiementsEnRetard === true)
			filtres.push({ name: 'fq', value: 'paiementsEnRetard:' + filtrePaiementsEnRetard });

		var filtrePaiementsEnRetardMontant = $formulaireFiltres.find('.valeurPaiementsEnRetardMontant').val();
		if(filtrePaiementsEnRetardMontant != null && filtrePaiementsEnRetardMontant !== '')
			filtres.push({ name: 'fq', value: 'paiementsEnRetardMontant:' + filtrePaiementsEnRetardMontant });

		var $filtrePaiementsEnAvanceCheckbox = $formulaireFiltres.find('input.valeurPaiementsEnAvance[type = "checkbox"]');
		var $filtrePaiementsEnAvanceSelect = $formulaireFiltres.find('select.valeurPaiementsEnAvance');
		var filtrePaiementsEnAvance = $filtrePaiementsEnAvanceSelect.length ? $filtrePaiementsEnAvanceSelect.val() : $filtrePaiementsEnAvanceCheckbox.prop('checked');
		var filtrePaiementsEnAvanceSelectVal = $formulaireFiltres.find('select.filtrePaiementsEnAvance').val();
		var filtrePaiementsEnAvance = null;
		if(filtrePaiementsEnAvanceSelectVal !== '')
			filtrePaiementsEnAvance = filtrePaiementsEnAvanceSelectVal == 'true';
		if(filtrePaiementsEnAvance != null && filtrePaiementsEnAvance === true)
			filtres.push({ name: 'fq', value: 'paiementsEnAvance:' + filtrePaiementsEnAvance });

		var $filtrePaiementsEnSouffranceCheckbox = $formulaireFiltres.find('input.valeurPaiementsEnSouffrance[type = "checkbox"]');
		var $filtrePaiementsEnSouffranceSelect = $formulaireFiltres.find('select.valeurPaiementsEnSouffrance');
		var filtrePaiementsEnSouffrance = $filtrePaiementsEnSouffranceSelect.length ? $filtrePaiementsEnSouffranceSelect.val() : $filtrePaiementsEnSouffranceCheckbox.prop('checked');
		var filtrePaiementsEnSouffranceSelectVal = $formulaireFiltres.find('select.filtrePaiementsEnSouffrance').val();
		var filtrePaiementsEnSouffrance = null;
		if(filtrePaiementsEnSouffranceSelectVal !== '')
			filtrePaiementsEnSouffrance = filtrePaiementsEnSouffranceSelectVal == 'true';
		if(filtrePaiementsEnSouffrance != null && filtrePaiementsEnSouffrance === true)
			filtres.push({ name: 'fq', value: 'paiementsEnSouffrance:' + filtrePaiementsEnSouffrance });

		var filtrePaiementsEnSouffranceMontant = $formulaireFiltres.find('.valeurPaiementsEnSouffranceMontant').val();
		if(filtrePaiementsEnSouffranceMontant != null && filtrePaiementsEnSouffranceMontant !== '')
			filtres.push({ name: 'fq', value: 'paiementsEnSouffranceMontant:' + filtrePaiementsEnSouffranceMontant });

		var $filtreFraisCreesCheckbox = $formulaireFiltres.find('input.valeurFraisCrees[type = "checkbox"]');
		var $filtreFraisCreesSelect = $formulaireFiltres.find('select.valeurFraisCrees');
		var filtreFraisCrees = $filtreFraisCreesSelect.length ? $filtreFraisCreesSelect.val() : $filtreFraisCreesCheckbox.prop('checked');
		var filtreFraisCreesSelectVal = $formulaireFiltres.find('select.filtreFraisCrees').val();
		var filtreFraisCrees = null;
		if(filtreFraisCreesSelectVal !== '')
			filtreFraisCrees = filtreFraisCreesSelectVal == 'true';
		if(filtreFraisCrees != null && filtreFraisCrees === true)
			filtres.push({ name: 'fq', value: 'fraisCrees:' + filtreFraisCrees });

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

		var filtreInscriptionMails = $formulaireFiltres.find('.valeurInscriptionMails').val();
		if(filtreInscriptionMails != null && filtreInscriptionMails !== '')
			filtres.push({ name: 'fq', value: 'inscriptionMails:' + filtreInscriptionMails });

		var filtreInscriptionMail = $formulaireFiltres.find('.valeurInscriptionMail').val();
		if(filtreInscriptionMail != null && filtreInscriptionMail !== '')
			filtres.push({ name: 'fq', value: 'inscriptionMail:' + filtreInscriptionMail });

		var filtreInscriptionNumeroTelephones = $formulaireFiltres.find('.valeurInscriptionNumeroTelephones').val();
		if(filtreInscriptionNumeroTelephones != null && filtreInscriptionNumeroTelephones !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNumeroTelephones:' + filtreInscriptionNumeroTelephones });

		var filtreInscriptionNumeroTelephone = $formulaireFiltres.find('.valeurInscriptionNumeroTelephone').val();
		if(filtreInscriptionNumeroTelephone != null && filtreInscriptionNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNumeroTelephone:' + filtreInscriptionNumeroTelephone });

		var filtreInscriptionNomParent = $formulaireFiltres.find('.valeurInscriptionNomParent').val();
		if(filtreInscriptionNomParent != null && filtreInscriptionNomParent !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNomParent:' + filtreInscriptionNomParent });

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

function rechercheadminInscriptionScolaireVals(filtres, success, error) {

	$.ajax({
		url: '/api/admin/inscription?' + $.param(filtres)
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

// PATCHAdmin //

async function patchadminInscriptionScolaire($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchadminInscriptionScolaireFiltres($formulaireFiltres);

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

	var valeurInscriptionNomGroupe = $formulaireValeurs.find('.valeurInscriptionNomGroupe').val();
	var removeInscriptionNomGroupe = $formulaireValeurs.find('.removeInscriptionNomGroupe').val() === 'true';
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
	var removeCustomerProfileId = $formulaireValeurs.find('.removeCustomerProfileId').val() === 'true';
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
	var removeInscriptionPaimentComplet = $formulaireValeurs.find('.removeInscriptionPaimentComplet').val() === 'true';
	var valeurInscriptionPaimentCompletSelectVal = $formulaireValeurs.find('select.setInscriptionPaimentComplet').val();
	var valeurInscriptionPaimentComplet = null;
	if(valeurInscriptionPaimentCompletSelectVal != null && valeurInscriptionPaimentCompletSelectVal !== '')
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
	var removeEnfantPropre = $formulaireValeurs.find('.removeEnfantPropre').val() === 'true';
	var valeurEnfantPropreSelectVal = $formulaireValeurs.find('select.setEnfantPropre').val();
	var valeurEnfantPropre = null;
	if(valeurEnfantPropreSelectVal != null && valeurEnfantPropreSelectVal !== '')
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
	var removeInscriptionPaimentChaqueMois = $formulaireValeurs.find('.removeInscriptionPaimentChaqueMois').val() === 'true';
	var valeurInscriptionPaimentChaqueMoisSelectVal = $formulaireValeurs.find('select.setInscriptionPaimentChaqueMois').val();
	var valeurInscriptionPaimentChaqueMois = null;
	if(valeurInscriptionPaimentChaqueMoisSelectVal != null && valeurInscriptionPaimentChaqueMoisSelectVal !== '')
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

	var valeurInscriptionImmunisations = $formulaireValeurs.find('.valeurInscriptionImmunisations').prop('checked');
	var removeInscriptionImmunisations = $formulaireValeurs.find('.removeInscriptionImmunisations').val() === 'true';
	var valeurInscriptionImmunisationsSelectVal = $formulaireValeurs.find('select.setInscriptionImmunisations').val();
	var valeurInscriptionImmunisations = null;
	if(valeurInscriptionImmunisationsSelectVal != null && valeurInscriptionImmunisationsSelectVal !== '')
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

	var valeurInscriptionApprouve = $formulaireValeurs.find('.valeurInscriptionApprouve').prop('checked');
	var removeInscriptionApprouve = $formulaireValeurs.find('.removeInscriptionApprouve').val() === 'true';
	var valeurInscriptionApprouveSelectVal = $formulaireValeurs.find('select.setInscriptionApprouve').val();
	var valeurInscriptionApprouve = null;
	if(valeurInscriptionApprouveSelectVal != null && valeurInscriptionApprouveSelectVal !== '')
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

	var valeurFamilleMarie = $formulaireValeurs.find('.valeurFamilleMarie').prop('checked');
	var removeFamilleMarie = $formulaireValeurs.find('.removeFamilleMarie').val() === 'true';
	var valeurFamilleMarieSelectVal = $formulaireValeurs.find('select.setFamilleMarie').val();
	var valeurFamilleMarie = null;
	if(valeurFamilleMarieSelectVal != null && valeurFamilleMarieSelectVal !== '')
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
	var removeFamilleSepare = $formulaireValeurs.find('.removeFamilleSepare').val() === 'true';
	var valeurFamilleSepareSelectVal = $formulaireValeurs.find('select.setFamilleSepare').val();
	var valeurFamilleSepare = null;
	if(valeurFamilleSepareSelectVal != null && valeurFamilleSepareSelectVal !== '')
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
	var removeFamilleDivorce = $formulaireValeurs.find('.removeFamilleDivorce').val() === 'true';
	var valeurFamilleDivorceSelectVal = $formulaireValeurs.find('select.setFamilleDivorce').val();
	var valeurFamilleDivorce = null;
	if(valeurFamilleDivorceSelectVal != null && valeurFamilleDivorceSelectVal !== '')
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
	var removeFamilleAddresse = $formulaireValeurs.find('.removeFamilleAddresse').val() === 'true';
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
	var removeInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.removeInscriptionConsiderationsSpeciales').val() === 'true';
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
	var removeEnfantConditionsMedicales = $formulaireValeurs.find('.removeEnfantConditionsMedicales').val() === 'true';
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
	var removeEnfantEcolesPrecedemmentFrequentees = $formulaireValeurs.find('.removeEnfantEcolesPrecedemmentFrequentees').val() === 'true';
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
	var removeFamilleCommentVousConnaissezEcole = $formulaireValeurs.find('.removeFamilleCommentVousConnaissezEcole').val() === 'true';
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
	var removeEnfantDescription = $formulaireValeurs.find('.removeEnfantDescription').val() === 'true';
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
	var removeEnfantObjectifs = $formulaireValeurs.find('.removeEnfantObjectifs').val() === 'true';
	var setEnfantObjectifs = removeEnfantObjectifs ? null : $formulaireValeurs.find('.setEnfantObjectifs').val();
	if(removeEnfantObjectifs || setEnfantObjectifs != null && setEnfantObjectifs !== '')
		vals['setEnfantObjectifs'] = setEnfantObjectifs;
	var addEnfantObjectifs = $formulaireValeurs.find('.addEnfantObjectifs').val();
	if(addEnfantObjectifs != null && addEnfantObjectifs !== '')
		vals['addEnfantObjectifs'] = addEnfantObjectifs;
	var removeEnfantObjectifs = $formulaireValeurs.find('.removeEnfantObjectifs').val();
	if(removeEnfantObjectifs != null && removeEnfantObjectifs !== '')
		vals['removeEnfantObjectifs'] = removeEnfantObjectifs;

	var valeurAnneeCle = $formulaireValeurs.find('input.valeurAnneeCle:checked').val();
	if(valeurAnneeCle != null && valeurAnneeCle !== '')
		vals['setAnneeCle'] = valeurAnneeCle;

	var valeurBlocCles = $formulaireValeurs.find('input.valeurBlocCles:checked').val();
	if(valeurBlocCles != null && valeurBlocCles !== '')
		vals['addBlocCles'] = valeurBlocCles;

	var valeurEnfantCle = $formulaireValeurs.find('input.valeurEnfantCle:checked').val();
	if(valeurEnfantCle != null && valeurEnfantCle !== '')
		vals['setEnfantCle'] = valeurEnfantCle;

	var valeurGardienCles = $formulaireValeurs.find('input.valeurGardienCles:checked').val();
	if(valeurGardienCles != null && valeurGardienCles !== '')
		vals['addGardienCles'] = valeurGardienCles;

	var valeurMereCles = $formulaireValeurs.find('input.valeurMereCles:checked').val();
	if(valeurMereCles != null && valeurMereCles !== '')
		vals['addMereCles'] = valeurMereCles;

	var valeurPereCles = $formulaireValeurs.find('input.valeurPereCles:checked').val();
	if(valeurPereCles != null && valeurPereCles !== '')
		vals['addPereCles'] = valeurPereCles;

	var valeurUtilisateurCles = $formulaireValeurs.find('input.valeurUtilisateurCles:checked').val();
	if(valeurUtilisateurCles != null && valeurUtilisateurCles !== '')
		vals['addUtilisateurCles'] = valeurUtilisateurCles;

	var valeurPaiementCles = $formulaireValeurs.find('input.valeurPaiementCles:checked').val();
	if(valeurPaiementCles != null && valeurPaiementCles !== '')
		vals['addPaiementCles'] = valeurPaiementCles;

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

	var valeurEnfantNomComplet = $formulaireValeurs.find('.valeurEnfantNomComplet').val();
	var removeEnfantNomComplet = $formulaireValeurs.find('.removeEnfantNomComplet').val() === 'true';
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
	var removeEnfantNomCompletPrefere = $formulaireValeurs.find('.removeEnfantNomCompletPrefere').val() === 'true';
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
	var removeEnfantDateNaissance = $formulaireValeurs.find('.removeEnfantDateNaissance').val() === 'true';
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

	var valeurInscriptionDateFrais = $formulaireValeurs.find('.valeurInscriptionDateFrais').val();
	var removeInscriptionDateFrais = $formulaireValeurs.find('.removeInscriptionDateFrais').val() === 'true';
	var setInscriptionDateFrais = removeInscriptionDateFrais ? null : $formulaireValeurs.find('.setInscriptionDateFrais').val();
	if(removeInscriptionDateFrais || setInscriptionDateFrais != null && setInscriptionDateFrais !== '')
		vals['setInscriptionDateFrais'] = setInscriptionDateFrais;
	var addInscriptionDateFrais = $formulaireValeurs.find('.addInscriptionDateFrais').val();
	if(addInscriptionDateFrais != null && addInscriptionDateFrais !== '')
		vals['addInscriptionDateFrais'] = addInscriptionDateFrais;
	var removeInscriptionDateFrais = $formulaireValeurs.find('.removeInscriptionDateFrais').val();
	if(removeInscriptionDateFrais != null && removeInscriptionDateFrais !== '')
		vals['removeInscriptionDateFrais'] = removeInscriptionDateFrais;

	var valeurInscriptionNomsParents = $formulaireValeurs.find('.valeurInscriptionNomsParents').val();
	var removeInscriptionNomsParents = $formulaireValeurs.find('.removeInscriptionNomsParents').val() === 'true';
	var setInscriptionNomsParents = removeInscriptionNomsParents ? null : $formulaireValeurs.find('.setInscriptionNomsParents').val();
	if(removeInscriptionNomsParents || setInscriptionNomsParents != null && setInscriptionNomsParents !== '')
		vals['setInscriptionNomsParents'] = setInscriptionNomsParents;
	var addInscriptionNomsParents = $formulaireValeurs.find('.addInscriptionNomsParents').val();
	if(addInscriptionNomsParents != null && addInscriptionNomsParents !== '')
		vals['addInscriptionNomsParents'] = addInscriptionNomsParents;
	var removeInscriptionNomsParents = $formulaireValeurs.find('.removeInscriptionNomsParents').val();
	if(removeInscriptionNomsParents != null && removeInscriptionNomsParents !== '')
		vals['removeInscriptionNomsParents'] = removeInscriptionNomsParents;

	var valeurInscriptionSignature1 = $formulaireValeurs.find('.valeurInscriptionSignature1').val();
	var removeInscriptionSignature1 = $formulaireValeurs.find('.removeInscriptionSignature1').val() === 'true';
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
	var removeInscriptionSignature2 = $formulaireValeurs.find('.removeInscriptionSignature2').val() === 'true';
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
	var removeInscriptionSignature3 = $formulaireValeurs.find('.removeInscriptionSignature3').val() === 'true';
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
	var removeInscriptionSignature4 = $formulaireValeurs.find('.removeInscriptionSignature4').val() === 'true';
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
	var removeInscriptionSignature5 = $formulaireValeurs.find('.removeInscriptionSignature5').val() === 'true';
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
	var removeInscriptionSignature6 = $formulaireValeurs.find('.removeInscriptionSignature6').val() === 'true';
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
	var removeInscriptionSignature7 = $formulaireValeurs.find('.removeInscriptionSignature7').val() === 'true';
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
	var removeInscriptionSignature8 = $formulaireValeurs.find('.removeInscriptionSignature8').val() === 'true';
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
	var removeInscriptionSignature9 = $formulaireValeurs.find('.removeInscriptionSignature9').val() === 'true';
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
	var removeInscriptionSignature10 = $formulaireValeurs.find('.removeInscriptionSignature10').val() === 'true';
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
	var removeInscriptionDate1 = $formulaireValeurs.find('.removeInscriptionDate1').val() === 'true';
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
	var removeInscriptionDate2 = $formulaireValeurs.find('.removeInscriptionDate2').val() === 'true';
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
	var removeInscriptionDate3 = $formulaireValeurs.find('.removeInscriptionDate3').val() === 'true';
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
	var removeInscriptionDate4 = $formulaireValeurs.find('.removeInscriptionDate4').val() === 'true';
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
	var removeInscriptionDate5 = $formulaireValeurs.find('.removeInscriptionDate5').val() === 'true';
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
	var removeInscriptionDate6 = $formulaireValeurs.find('.removeInscriptionDate6').val() === 'true';
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
	var removeInscriptionDate7 = $formulaireValeurs.find('.removeInscriptionDate7').val() === 'true';
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
	var removeInscriptionDate8 = $formulaireValeurs.find('.removeInscriptionDate8').val() === 'true';
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
	var removeInscriptionDate9 = $formulaireValeurs.find('.removeInscriptionDate9').val() === 'true';
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
	var removeInscriptionDate10 = $formulaireValeurs.find('.removeInscriptionDate10').val() === 'true';
	var setInscriptionDate10 = removeInscriptionDate10 ? null : $formulaireValeurs.find('.setInscriptionDate10').val();
	if(removeInscriptionDate10 || setInscriptionDate10 != null && setInscriptionDate10 !== '')
		vals['setInscriptionDate10'] = setInscriptionDate10;
	var addInscriptionDate10 = $formulaireValeurs.find('.addInscriptionDate10').val();
	if(addInscriptionDate10 != null && addInscriptionDate10 !== '')
		vals['addInscriptionDate10'] = addInscriptionDate10;
	var removeInscriptionDate10 = $formulaireValeurs.find('.removeInscriptionDate10').val();
	if(removeInscriptionDate10 != null && removeInscriptionDate10 !== '')
		vals['removeInscriptionDate10'] = removeInscriptionDate10;

	patchadminInscriptionScolaireVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchadminInscriptionScolaireFiltres($formulaireFiltres) {
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

		var $filtreInscriptionImmunisationsCheckbox = $formulaireFiltres.find('input.valeurInscriptionImmunisations[type = "checkbox"]');
		var $filtreInscriptionImmunisationsSelect = $formulaireFiltres.find('select.valeurInscriptionImmunisations');
		var filtreInscriptionImmunisations = $filtreInscriptionImmunisationsSelect.length ? $filtreInscriptionImmunisationsSelect.val() : $filtreInscriptionImmunisationsCheckbox.prop('checked');
		var filtreInscriptionImmunisationsSelectVal = $formulaireFiltres.find('select.filtreInscriptionImmunisations').val();
		var filtreInscriptionImmunisations = null;
		if(filtreInscriptionImmunisationsSelectVal !== '')
			filtreInscriptionImmunisations = filtreInscriptionImmunisationsSelectVal == 'true';
		if(filtreInscriptionImmunisations != null && filtreInscriptionImmunisations === true)
			filtres.push({ name: 'fq', value: 'inscriptionImmunisations:' + filtreInscriptionImmunisations });

		var $filtreInscriptionApprouveCheckbox = $formulaireFiltres.find('input.valeurInscriptionApprouve[type = "checkbox"]');
		var $filtreInscriptionApprouveSelect = $formulaireFiltres.find('select.valeurInscriptionApprouve');
		var filtreInscriptionApprouve = $filtreInscriptionApprouveSelect.length ? $filtreInscriptionApprouveSelect.val() : $filtreInscriptionApprouveCheckbox.prop('checked');
		var filtreInscriptionApprouveSelectVal = $formulaireFiltres.find('select.filtreInscriptionApprouve').val();
		var filtreInscriptionApprouve = null;
		if(filtreInscriptionApprouveSelectVal !== '')
			filtreInscriptionApprouve = filtreInscriptionApprouveSelectVal == 'true';
		if(filtreInscriptionApprouve != null && filtreInscriptionApprouve === true)
			filtres.push({ name: 'fq', value: 'inscriptionApprouve:' + filtreInscriptionApprouve });

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

		var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
		if(filtreAnneeCle != null && filtreAnneeCle !== '')
			filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

		var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
		if(filtreBlocCles != null && filtreBlocCles !== '')
			filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

		var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
		if(filtreEnfantCle != null && filtreEnfantCle !== '')
			filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

		var filtreGardienCles = $formulaireFiltres.find('.valeurGardienCles').val();
		if(filtreGardienCles != null && filtreGardienCles !== '')
			filtres.push({ name: 'fq', value: 'gardienCles:' + filtreGardienCles });

		var filtreMereCles = $formulaireFiltres.find('.valeurMereCles').val();
		if(filtreMereCles != null && filtreMereCles !== '')
			filtres.push({ name: 'fq', value: 'mereCles:' + filtreMereCles });

		var filtrePereCles = $formulaireFiltres.find('.valeurPereCles').val();
		if(filtrePereCles != null && filtrePereCles !== '')
			filtres.push({ name: 'fq', value: 'pereCles:' + filtrePereCles });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtrePaiementCles = $formulaireFiltres.find('.valeurPaiementCles').val();
		if(filtrePaiementCles != null && filtrePaiementCles !== '')
			filtres.push({ name: 'fq', value: 'paiementCles:' + filtrePaiementCles });

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

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

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

		var filtreEnfantDateNaissanceDAnnee = $formulaireFiltres.find('.valeurEnfantDateNaissanceDAnnee').val();
		if(filtreEnfantDateNaissanceDAnnee != null && filtreEnfantDateNaissanceDAnnee !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissanceDAnnee:' + filtreEnfantDateNaissanceDAnnee });

		var filtreEnfantDateNaissanceMoisDAnnee = $formulaireFiltres.find('.valeurEnfantDateNaissanceMoisDAnnee').val();
		if(filtreEnfantDateNaissanceMoisDAnnee != null && filtreEnfantDateNaissanceMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissanceMoisDAnnee:' + filtreEnfantDateNaissanceMoisDAnnee });

		var filtreEnfantDateNaissanceJourDeSemaine = $formulaireFiltres.find('.valeurEnfantDateNaissanceJourDeSemaine').val();
		if(filtreEnfantDateNaissanceJourDeSemaine != null && filtreEnfantDateNaissanceJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissanceJourDeSemaine:' + filtreEnfantDateNaissanceJourDeSemaine });

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

		var filtreInscriptionCouleurGroupe = $formulaireFiltres.find('.valeurInscriptionCouleurGroupe').val();
		if(filtreInscriptionCouleurGroupe != null && filtreInscriptionCouleurGroupe !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCouleurGroupe:' + filtreInscriptionCouleurGroupe });

		var filtreInscriptionDateFrais = $formulaireFiltres.find('.valeurInscriptionDateFrais').val();
		if(filtreInscriptionDateFrais != null && filtreInscriptionDateFrais !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDateFrais:' + filtreInscriptionDateFrais });

		var filtrePaiementLastDate = $formulaireFiltres.find('.valeurPaiementLastDate').val();
		if(filtrePaiementLastDate != null && filtrePaiementLastDate !== '')
			filtres.push({ name: 'fq', value: 'paiementLastDate:' + filtrePaiementLastDate });

		var filtrePaiementLastStr = $formulaireFiltres.find('.valeurPaiementLastStr').val();
		if(filtrePaiementLastStr != null && filtrePaiementLastStr !== '')
			filtres.push({ name: 'fq', value: 'paiementLastStr:' + filtrePaiementLastStr });

		var filtrePaiementMontant = $formulaireFiltres.find('.valeurPaiementMontant').val();
		if(filtrePaiementMontant != null && filtrePaiementMontant !== '')
			filtres.push({ name: 'fq', value: 'paiementMontant:' + filtrePaiementMontant });

		var filtreFraisMontant = $formulaireFiltres.find('.valeurFraisMontant').val();
		if(filtreFraisMontant != null && filtreFraisMontant !== '')
			filtres.push({ name: 'fq', value: 'fraisMontant:' + filtreFraisMontant });

		var filtreFraisMontantFuture = $formulaireFiltres.find('.valeurFraisMontantFuture').val();
		if(filtreFraisMontantFuture != null && filtreFraisMontantFuture !== '')
			filtres.push({ name: 'fq', value: 'fraisMontantFuture:' + filtreFraisMontantFuture });

		var filtreFraisMontantDu = $formulaireFiltres.find('.valeurFraisMontantDu').val();
		if(filtreFraisMontantDu != null && filtreFraisMontantDu !== '')
			filtres.push({ name: 'fq', value: 'fraisMontantDu:' + filtreFraisMontantDu });

		var filtreFraisMontantNonPasse = $formulaireFiltres.find('.valeurFraisMontantNonPasse').val();
		if(filtreFraisMontantNonPasse != null && filtreFraisMontantNonPasse !== '')
			filtres.push({ name: 'fq', value: 'fraisMontantNonPasse:' + filtreFraisMontantNonPasse });

		var filtreFraisMaintenant = $formulaireFiltres.find('.valeurFraisMaintenant').val();
		if(filtreFraisMaintenant != null && filtreFraisMaintenant !== '')
			filtres.push({ name: 'fq', value: 'fraisMaintenant:' + filtreFraisMaintenant });

		var $filtrePaiementsAJourCheckbox = $formulaireFiltres.find('input.valeurPaiementsAJour[type = "checkbox"]');
		var $filtrePaiementsAJourSelect = $formulaireFiltres.find('select.valeurPaiementsAJour');
		var filtrePaiementsAJour = $filtrePaiementsAJourSelect.length ? $filtrePaiementsAJourSelect.val() : $filtrePaiementsAJourCheckbox.prop('checked');
		var filtrePaiementsAJourSelectVal = $formulaireFiltres.find('select.filtrePaiementsAJour').val();
		var filtrePaiementsAJour = null;
		if(filtrePaiementsAJourSelectVal !== '')
			filtrePaiementsAJour = filtrePaiementsAJourSelectVal == 'true';
		if(filtrePaiementsAJour != null && filtrePaiementsAJour === true)
			filtres.push({ name: 'fq', value: 'paiementsAJour:' + filtrePaiementsAJour });

		var $filtrePaiementsEnRetardCheckbox = $formulaireFiltres.find('input.valeurPaiementsEnRetard[type = "checkbox"]');
		var $filtrePaiementsEnRetardSelect = $formulaireFiltres.find('select.valeurPaiementsEnRetard');
		var filtrePaiementsEnRetard = $filtrePaiementsEnRetardSelect.length ? $filtrePaiementsEnRetardSelect.val() : $filtrePaiementsEnRetardCheckbox.prop('checked');
		var filtrePaiementsEnRetardSelectVal = $formulaireFiltres.find('select.filtrePaiementsEnRetard').val();
		var filtrePaiementsEnRetard = null;
		if(filtrePaiementsEnRetardSelectVal !== '')
			filtrePaiementsEnRetard = filtrePaiementsEnRetardSelectVal == 'true';
		if(filtrePaiementsEnRetard != null && filtrePaiementsEnRetard === true)
			filtres.push({ name: 'fq', value: 'paiementsEnRetard:' + filtrePaiementsEnRetard });

		var filtrePaiementsEnRetardMontant = $formulaireFiltres.find('.valeurPaiementsEnRetardMontant').val();
		if(filtrePaiementsEnRetardMontant != null && filtrePaiementsEnRetardMontant !== '')
			filtres.push({ name: 'fq', value: 'paiementsEnRetardMontant:' + filtrePaiementsEnRetardMontant });

		var $filtrePaiementsEnAvanceCheckbox = $formulaireFiltres.find('input.valeurPaiementsEnAvance[type = "checkbox"]');
		var $filtrePaiementsEnAvanceSelect = $formulaireFiltres.find('select.valeurPaiementsEnAvance');
		var filtrePaiementsEnAvance = $filtrePaiementsEnAvanceSelect.length ? $filtrePaiementsEnAvanceSelect.val() : $filtrePaiementsEnAvanceCheckbox.prop('checked');
		var filtrePaiementsEnAvanceSelectVal = $formulaireFiltres.find('select.filtrePaiementsEnAvance').val();
		var filtrePaiementsEnAvance = null;
		if(filtrePaiementsEnAvanceSelectVal !== '')
			filtrePaiementsEnAvance = filtrePaiementsEnAvanceSelectVal == 'true';
		if(filtrePaiementsEnAvance != null && filtrePaiementsEnAvance === true)
			filtres.push({ name: 'fq', value: 'paiementsEnAvance:' + filtrePaiementsEnAvance });

		var $filtrePaiementsEnSouffranceCheckbox = $formulaireFiltres.find('input.valeurPaiementsEnSouffrance[type = "checkbox"]');
		var $filtrePaiementsEnSouffranceSelect = $formulaireFiltres.find('select.valeurPaiementsEnSouffrance');
		var filtrePaiementsEnSouffrance = $filtrePaiementsEnSouffranceSelect.length ? $filtrePaiementsEnSouffranceSelect.val() : $filtrePaiementsEnSouffranceCheckbox.prop('checked');
		var filtrePaiementsEnSouffranceSelectVal = $formulaireFiltres.find('select.filtrePaiementsEnSouffrance').val();
		var filtrePaiementsEnSouffrance = null;
		if(filtrePaiementsEnSouffranceSelectVal !== '')
			filtrePaiementsEnSouffrance = filtrePaiementsEnSouffranceSelectVal == 'true';
		if(filtrePaiementsEnSouffrance != null && filtrePaiementsEnSouffrance === true)
			filtres.push({ name: 'fq', value: 'paiementsEnSouffrance:' + filtrePaiementsEnSouffrance });

		var filtrePaiementsEnSouffranceMontant = $formulaireFiltres.find('.valeurPaiementsEnSouffranceMontant').val();
		if(filtrePaiementsEnSouffranceMontant != null && filtrePaiementsEnSouffranceMontant !== '')
			filtres.push({ name: 'fq', value: 'paiementsEnSouffranceMontant:' + filtrePaiementsEnSouffranceMontant });

		var $filtreFraisCreesCheckbox = $formulaireFiltres.find('input.valeurFraisCrees[type = "checkbox"]');
		var $filtreFraisCreesSelect = $formulaireFiltres.find('select.valeurFraisCrees');
		var filtreFraisCrees = $filtreFraisCreesSelect.length ? $filtreFraisCreesSelect.val() : $filtreFraisCreesCheckbox.prop('checked');
		var filtreFraisCreesSelectVal = $formulaireFiltres.find('select.filtreFraisCrees').val();
		var filtreFraisCrees = null;
		if(filtreFraisCreesSelectVal !== '')
			filtreFraisCrees = filtreFraisCreesSelectVal == 'true';
		if(filtreFraisCrees != null && filtreFraisCrees === true)
			filtres.push({ name: 'fq', value: 'fraisCrees:' + filtreFraisCrees });

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

		var filtreInscriptionMails = $formulaireFiltres.find('.valeurInscriptionMails').val();
		if(filtreInscriptionMails != null && filtreInscriptionMails !== '')
			filtres.push({ name: 'fq', value: 'inscriptionMails:' + filtreInscriptionMails });

		var filtreInscriptionMail = $formulaireFiltres.find('.valeurInscriptionMail').val();
		if(filtreInscriptionMail != null && filtreInscriptionMail !== '')
			filtres.push({ name: 'fq', value: 'inscriptionMail:' + filtreInscriptionMail });

		var filtreInscriptionNumeroTelephones = $formulaireFiltres.find('.valeurInscriptionNumeroTelephones').val();
		if(filtreInscriptionNumeroTelephones != null && filtreInscriptionNumeroTelephones !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNumeroTelephones:' + filtreInscriptionNumeroTelephones });

		var filtreInscriptionNumeroTelephone = $formulaireFiltres.find('.valeurInscriptionNumeroTelephone').val();
		if(filtreInscriptionNumeroTelephone != null && filtreInscriptionNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNumeroTelephone:' + filtreInscriptionNumeroTelephone });

		var filtreInscriptionNomParent = $formulaireFiltres.find('.valeurInscriptionNomParent').val();
		if(filtreInscriptionNomParent != null && filtreInscriptionNomParent !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNomParent:' + filtreInscriptionNomParent });

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

function patchadminInscriptionScolaireVal(filtres, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchadminInscriptionScolaireVals(filtres, vals, success, error);
}

function patchadminInscriptionScolaireVals(filtres, vals, success, error) {
	$.ajax({
		url: '/api/admin/inscription?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCHPaiements //

async function patchpaiementsInscriptionScolaire($formulaireFiltres, $formulaireValeurs, pk, success, error) {
	var filtres = patchpaiementsInscriptionScolaireFiltres($formulaireFiltres);

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

	var valeurInscriptionNomGroupe = $formulaireValeurs.find('.valeurInscriptionNomGroupe').val();
	var removeInscriptionNomGroupe = $formulaireValeurs.find('.removeInscriptionNomGroupe').val() === 'true';
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
	var removeCustomerProfileId = $formulaireValeurs.find('.removeCustomerProfileId').val() === 'true';
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
	var removeInscriptionPaimentComplet = $formulaireValeurs.find('.removeInscriptionPaimentComplet').val() === 'true';
	var valeurInscriptionPaimentCompletSelectVal = $formulaireValeurs.find('select.setInscriptionPaimentComplet').val();
	var valeurInscriptionPaimentComplet = null;
	if(valeurInscriptionPaimentCompletSelectVal != null && valeurInscriptionPaimentCompletSelectVal !== '')
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
	var removeEnfantPropre = $formulaireValeurs.find('.removeEnfantPropre').val() === 'true';
	var valeurEnfantPropreSelectVal = $formulaireValeurs.find('select.setEnfantPropre').val();
	var valeurEnfantPropre = null;
	if(valeurEnfantPropreSelectVal != null && valeurEnfantPropreSelectVal !== '')
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
	var removeInscriptionPaimentChaqueMois = $formulaireValeurs.find('.removeInscriptionPaimentChaqueMois').val() === 'true';
	var valeurInscriptionPaimentChaqueMoisSelectVal = $formulaireValeurs.find('select.setInscriptionPaimentChaqueMois').val();
	var valeurInscriptionPaimentChaqueMois = null;
	if(valeurInscriptionPaimentChaqueMoisSelectVal != null && valeurInscriptionPaimentChaqueMoisSelectVal !== '')
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

	var valeurInscriptionImmunisations = $formulaireValeurs.find('.valeurInscriptionImmunisations').prop('checked');
	var removeInscriptionImmunisations = $formulaireValeurs.find('.removeInscriptionImmunisations').val() === 'true';
	var valeurInscriptionImmunisationsSelectVal = $formulaireValeurs.find('select.setInscriptionImmunisations').val();
	var valeurInscriptionImmunisations = null;
	if(valeurInscriptionImmunisationsSelectVal != null && valeurInscriptionImmunisationsSelectVal !== '')
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

	var valeurInscriptionApprouve = $formulaireValeurs.find('.valeurInscriptionApprouve').prop('checked');
	var removeInscriptionApprouve = $formulaireValeurs.find('.removeInscriptionApprouve').val() === 'true';
	var valeurInscriptionApprouveSelectVal = $formulaireValeurs.find('select.setInscriptionApprouve').val();
	var valeurInscriptionApprouve = null;
	if(valeurInscriptionApprouveSelectVal != null && valeurInscriptionApprouveSelectVal !== '')
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

	var valeurFamilleMarie = $formulaireValeurs.find('.valeurFamilleMarie').prop('checked');
	var removeFamilleMarie = $formulaireValeurs.find('.removeFamilleMarie').val() === 'true';
	var valeurFamilleMarieSelectVal = $formulaireValeurs.find('select.setFamilleMarie').val();
	var valeurFamilleMarie = null;
	if(valeurFamilleMarieSelectVal != null && valeurFamilleMarieSelectVal !== '')
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
	var removeFamilleSepare = $formulaireValeurs.find('.removeFamilleSepare').val() === 'true';
	var valeurFamilleSepareSelectVal = $formulaireValeurs.find('select.setFamilleSepare').val();
	var valeurFamilleSepare = null;
	if(valeurFamilleSepareSelectVal != null && valeurFamilleSepareSelectVal !== '')
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
	var removeFamilleDivorce = $formulaireValeurs.find('.removeFamilleDivorce').val() === 'true';
	var valeurFamilleDivorceSelectVal = $formulaireValeurs.find('select.setFamilleDivorce').val();
	var valeurFamilleDivorce = null;
	if(valeurFamilleDivorceSelectVal != null && valeurFamilleDivorceSelectVal !== '')
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
	var removeFamilleAddresse = $formulaireValeurs.find('.removeFamilleAddresse').val() === 'true';
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
	var removeInscriptionConsiderationsSpeciales = $formulaireValeurs.find('.removeInscriptionConsiderationsSpeciales').val() === 'true';
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
	var removeEnfantConditionsMedicales = $formulaireValeurs.find('.removeEnfantConditionsMedicales').val() === 'true';
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
	var removeEnfantEcolesPrecedemmentFrequentees = $formulaireValeurs.find('.removeEnfantEcolesPrecedemmentFrequentees').val() === 'true';
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
	var removeFamilleCommentVousConnaissezEcole = $formulaireValeurs.find('.removeFamilleCommentVousConnaissezEcole').val() === 'true';
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
	var removeEnfantDescription = $formulaireValeurs.find('.removeEnfantDescription').val() === 'true';
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
	var removeEnfantObjectifs = $formulaireValeurs.find('.removeEnfantObjectifs').val() === 'true';
	var setEnfantObjectifs = removeEnfantObjectifs ? null : $formulaireValeurs.find('.setEnfantObjectifs').val();
	if(removeEnfantObjectifs || setEnfantObjectifs != null && setEnfantObjectifs !== '')
		vals['setEnfantObjectifs'] = setEnfantObjectifs;
	var addEnfantObjectifs = $formulaireValeurs.find('.addEnfantObjectifs').val();
	if(addEnfantObjectifs != null && addEnfantObjectifs !== '')
		vals['addEnfantObjectifs'] = addEnfantObjectifs;
	var removeEnfantObjectifs = $formulaireValeurs.find('.removeEnfantObjectifs').val();
	if(removeEnfantObjectifs != null && removeEnfantObjectifs !== '')
		vals['removeEnfantObjectifs'] = removeEnfantObjectifs;

	var valeurAnneeCle = $formulaireValeurs.find('input.valeurAnneeCle:checked').val();
	if(valeurAnneeCle != null && valeurAnneeCle !== '')
		vals['setAnneeCle'] = valeurAnneeCle;

	var valeurBlocCles = $formulaireValeurs.find('input.valeurBlocCles:checked').val();
	if(valeurBlocCles != null && valeurBlocCles !== '')
		vals['addBlocCles'] = valeurBlocCles;

	var valeurEnfantCle = $formulaireValeurs.find('input.valeurEnfantCle:checked').val();
	if(valeurEnfantCle != null && valeurEnfantCle !== '')
		vals['setEnfantCle'] = valeurEnfantCle;

	var valeurGardienCles = $formulaireValeurs.find('input.valeurGardienCles:checked').val();
	if(valeurGardienCles != null && valeurGardienCles !== '')
		vals['addGardienCles'] = valeurGardienCles;

	var valeurMereCles = $formulaireValeurs.find('input.valeurMereCles:checked').val();
	if(valeurMereCles != null && valeurMereCles !== '')
		vals['addMereCles'] = valeurMereCles;

	var valeurPereCles = $formulaireValeurs.find('input.valeurPereCles:checked').val();
	if(valeurPereCles != null && valeurPereCles !== '')
		vals['addPereCles'] = valeurPereCles;

	var valeurUtilisateurCles = $formulaireValeurs.find('input.valeurUtilisateurCles:checked').val();
	if(valeurUtilisateurCles != null && valeurUtilisateurCles !== '')
		vals['addUtilisateurCles'] = valeurUtilisateurCles;

	var valeurPaiementCles = $formulaireValeurs.find('input.valeurPaiementCles:checked').val();
	if(valeurPaiementCles != null && valeurPaiementCles !== '')
		vals['addPaiementCles'] = valeurPaiementCles;

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

	var valeurEnfantNomComplet = $formulaireValeurs.find('.valeurEnfantNomComplet').val();
	var removeEnfantNomComplet = $formulaireValeurs.find('.removeEnfantNomComplet').val() === 'true';
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
	var removeEnfantNomCompletPrefere = $formulaireValeurs.find('.removeEnfantNomCompletPrefere').val() === 'true';
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
	var removeEnfantDateNaissance = $formulaireValeurs.find('.removeEnfantDateNaissance').val() === 'true';
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

	var valeurInscriptionDateFrais = $formulaireValeurs.find('.valeurInscriptionDateFrais').val();
	var removeInscriptionDateFrais = $formulaireValeurs.find('.removeInscriptionDateFrais').val() === 'true';
	var setInscriptionDateFrais = removeInscriptionDateFrais ? null : $formulaireValeurs.find('.setInscriptionDateFrais').val();
	if(removeInscriptionDateFrais || setInscriptionDateFrais != null && setInscriptionDateFrais !== '')
		vals['setInscriptionDateFrais'] = setInscriptionDateFrais;
	var addInscriptionDateFrais = $formulaireValeurs.find('.addInscriptionDateFrais').val();
	if(addInscriptionDateFrais != null && addInscriptionDateFrais !== '')
		vals['addInscriptionDateFrais'] = addInscriptionDateFrais;
	var removeInscriptionDateFrais = $formulaireValeurs.find('.removeInscriptionDateFrais').val();
	if(removeInscriptionDateFrais != null && removeInscriptionDateFrais !== '')
		vals['removeInscriptionDateFrais'] = removeInscriptionDateFrais;

	var valeurInscriptionNomsParents = $formulaireValeurs.find('.valeurInscriptionNomsParents').val();
	var removeInscriptionNomsParents = $formulaireValeurs.find('.removeInscriptionNomsParents').val() === 'true';
	var setInscriptionNomsParents = removeInscriptionNomsParents ? null : $formulaireValeurs.find('.setInscriptionNomsParents').val();
	if(removeInscriptionNomsParents || setInscriptionNomsParents != null && setInscriptionNomsParents !== '')
		vals['setInscriptionNomsParents'] = setInscriptionNomsParents;
	var addInscriptionNomsParents = $formulaireValeurs.find('.addInscriptionNomsParents').val();
	if(addInscriptionNomsParents != null && addInscriptionNomsParents !== '')
		vals['addInscriptionNomsParents'] = addInscriptionNomsParents;
	var removeInscriptionNomsParents = $formulaireValeurs.find('.removeInscriptionNomsParents').val();
	if(removeInscriptionNomsParents != null && removeInscriptionNomsParents !== '')
		vals['removeInscriptionNomsParents'] = removeInscriptionNomsParents;

	var valeurInscriptionSignature1 = $formulaireValeurs.find('.valeurInscriptionSignature1').val();
	var removeInscriptionSignature1 = $formulaireValeurs.find('.removeInscriptionSignature1').val() === 'true';
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
	var removeInscriptionSignature2 = $formulaireValeurs.find('.removeInscriptionSignature2').val() === 'true';
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
	var removeInscriptionSignature3 = $formulaireValeurs.find('.removeInscriptionSignature3').val() === 'true';
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
	var removeInscriptionSignature4 = $formulaireValeurs.find('.removeInscriptionSignature4').val() === 'true';
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
	var removeInscriptionSignature5 = $formulaireValeurs.find('.removeInscriptionSignature5').val() === 'true';
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
	var removeInscriptionSignature6 = $formulaireValeurs.find('.removeInscriptionSignature6').val() === 'true';
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
	var removeInscriptionSignature7 = $formulaireValeurs.find('.removeInscriptionSignature7').val() === 'true';
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
	var removeInscriptionSignature8 = $formulaireValeurs.find('.removeInscriptionSignature8').val() === 'true';
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
	var removeInscriptionSignature9 = $formulaireValeurs.find('.removeInscriptionSignature9').val() === 'true';
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
	var removeInscriptionSignature10 = $formulaireValeurs.find('.removeInscriptionSignature10').val() === 'true';
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
	var removeInscriptionDate1 = $formulaireValeurs.find('.removeInscriptionDate1').val() === 'true';
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
	var removeInscriptionDate2 = $formulaireValeurs.find('.removeInscriptionDate2').val() === 'true';
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
	var removeInscriptionDate3 = $formulaireValeurs.find('.removeInscriptionDate3').val() === 'true';
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
	var removeInscriptionDate4 = $formulaireValeurs.find('.removeInscriptionDate4').val() === 'true';
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
	var removeInscriptionDate5 = $formulaireValeurs.find('.removeInscriptionDate5').val() === 'true';
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
	var removeInscriptionDate6 = $formulaireValeurs.find('.removeInscriptionDate6').val() === 'true';
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
	var removeInscriptionDate7 = $formulaireValeurs.find('.removeInscriptionDate7').val() === 'true';
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
	var removeInscriptionDate8 = $formulaireValeurs.find('.removeInscriptionDate8').val() === 'true';
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
	var removeInscriptionDate9 = $formulaireValeurs.find('.removeInscriptionDate9').val() === 'true';
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
	var removeInscriptionDate10 = $formulaireValeurs.find('.removeInscriptionDate10').val() === 'true';
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

		var $filtreInscriptionImmunisationsCheckbox = $formulaireFiltres.find('input.valeurInscriptionImmunisations[type = "checkbox"]');
		var $filtreInscriptionImmunisationsSelect = $formulaireFiltres.find('select.valeurInscriptionImmunisations');
		var filtreInscriptionImmunisations = $filtreInscriptionImmunisationsSelect.length ? $filtreInscriptionImmunisationsSelect.val() : $filtreInscriptionImmunisationsCheckbox.prop('checked');
		var filtreInscriptionImmunisationsSelectVal = $formulaireFiltres.find('select.filtreInscriptionImmunisations').val();
		var filtreInscriptionImmunisations = null;
		if(filtreInscriptionImmunisationsSelectVal !== '')
			filtreInscriptionImmunisations = filtreInscriptionImmunisationsSelectVal == 'true';
		if(filtreInscriptionImmunisations != null && filtreInscriptionImmunisations === true)
			filtres.push({ name: 'fq', value: 'inscriptionImmunisations:' + filtreInscriptionImmunisations });

		var $filtreInscriptionApprouveCheckbox = $formulaireFiltres.find('input.valeurInscriptionApprouve[type = "checkbox"]');
		var $filtreInscriptionApprouveSelect = $formulaireFiltres.find('select.valeurInscriptionApprouve');
		var filtreInscriptionApprouve = $filtreInscriptionApprouveSelect.length ? $filtreInscriptionApprouveSelect.val() : $filtreInscriptionApprouveCheckbox.prop('checked');
		var filtreInscriptionApprouveSelectVal = $formulaireFiltres.find('select.filtreInscriptionApprouve').val();
		var filtreInscriptionApprouve = null;
		if(filtreInscriptionApprouveSelectVal !== '')
			filtreInscriptionApprouve = filtreInscriptionApprouveSelectVal == 'true';
		if(filtreInscriptionApprouve != null && filtreInscriptionApprouve === true)
			filtres.push({ name: 'fq', value: 'inscriptionApprouve:' + filtreInscriptionApprouve });

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

		var filtreAnneeCle = $formulaireFiltres.find('.valeurAnneeCle').val();
		if(filtreAnneeCle != null && filtreAnneeCle !== '')
			filtres.push({ name: 'fq', value: 'anneeCle:' + filtreAnneeCle });

		var filtreBlocCles = $formulaireFiltres.find('.valeurBlocCles').val();
		if(filtreBlocCles != null && filtreBlocCles !== '')
			filtres.push({ name: 'fq', value: 'blocCles:' + filtreBlocCles });

		var filtreEnfantCle = $formulaireFiltres.find('.valeurEnfantCle').val();
		if(filtreEnfantCle != null && filtreEnfantCle !== '')
			filtres.push({ name: 'fq', value: 'enfantCle:' + filtreEnfantCle });

		var filtreGardienCles = $formulaireFiltres.find('.valeurGardienCles').val();
		if(filtreGardienCles != null && filtreGardienCles !== '')
			filtres.push({ name: 'fq', value: 'gardienCles:' + filtreGardienCles });

		var filtreMereCles = $formulaireFiltres.find('.valeurMereCles').val();
		if(filtreMereCles != null && filtreMereCles !== '')
			filtres.push({ name: 'fq', value: 'mereCles:' + filtreMereCles });

		var filtrePereCles = $formulaireFiltres.find('.valeurPereCles').val();
		if(filtrePereCles != null && filtrePereCles !== '')
			filtres.push({ name: 'fq', value: 'pereCles:' + filtrePereCles });

		var filtreUtilisateurCles = $formulaireFiltres.find('.valeurUtilisateurCles').val();
		if(filtreUtilisateurCles != null && filtreUtilisateurCles !== '')
			filtres.push({ name: 'fq', value: 'utilisateurCles:' + filtreUtilisateurCles });

		var filtrePaiementCles = $formulaireFiltres.find('.valeurPaiementCles').val();
		if(filtrePaiementCles != null && filtrePaiementCles !== '')
			filtres.push({ name: 'fq', value: 'paiementCles:' + filtrePaiementCles });

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

		var filtreEcoleCle = $formulaireFiltres.find('.valeurEcoleCle').val();
		if(filtreEcoleCle != null && filtreEcoleCle !== '')
			filtres.push({ name: 'fq', value: 'ecoleCle:' + filtreEcoleCle });

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

		var filtreEnfantDateNaissanceDAnnee = $formulaireFiltres.find('.valeurEnfantDateNaissanceDAnnee').val();
		if(filtreEnfantDateNaissanceDAnnee != null && filtreEnfantDateNaissanceDAnnee !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissanceDAnnee:' + filtreEnfantDateNaissanceDAnnee });

		var filtreEnfantDateNaissanceMoisDAnnee = $formulaireFiltres.find('.valeurEnfantDateNaissanceMoisDAnnee').val();
		if(filtreEnfantDateNaissanceMoisDAnnee != null && filtreEnfantDateNaissanceMoisDAnnee !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissanceMoisDAnnee:' + filtreEnfantDateNaissanceMoisDAnnee });

		var filtreEnfantDateNaissanceJourDeSemaine = $formulaireFiltres.find('.valeurEnfantDateNaissanceJourDeSemaine').val();
		if(filtreEnfantDateNaissanceJourDeSemaine != null && filtreEnfantDateNaissanceJourDeSemaine !== '')
			filtres.push({ name: 'fq', value: 'enfantDateNaissanceJourDeSemaine:' + filtreEnfantDateNaissanceJourDeSemaine });

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

		var filtreInscriptionCouleurGroupe = $formulaireFiltres.find('.valeurInscriptionCouleurGroupe').val();
		if(filtreInscriptionCouleurGroupe != null && filtreInscriptionCouleurGroupe !== '')
			filtres.push({ name: 'fq', value: 'inscriptionCouleurGroupe:' + filtreInscriptionCouleurGroupe });

		var filtreInscriptionDateFrais = $formulaireFiltres.find('.valeurInscriptionDateFrais').val();
		if(filtreInscriptionDateFrais != null && filtreInscriptionDateFrais !== '')
			filtres.push({ name: 'fq', value: 'inscriptionDateFrais:' + filtreInscriptionDateFrais });

		var filtrePaiementLastDate = $formulaireFiltres.find('.valeurPaiementLastDate').val();
		if(filtrePaiementLastDate != null && filtrePaiementLastDate !== '')
			filtres.push({ name: 'fq', value: 'paiementLastDate:' + filtrePaiementLastDate });

		var filtrePaiementLastStr = $formulaireFiltres.find('.valeurPaiementLastStr').val();
		if(filtrePaiementLastStr != null && filtrePaiementLastStr !== '')
			filtres.push({ name: 'fq', value: 'paiementLastStr:' + filtrePaiementLastStr });

		var filtrePaiementMontant = $formulaireFiltres.find('.valeurPaiementMontant').val();
		if(filtrePaiementMontant != null && filtrePaiementMontant !== '')
			filtres.push({ name: 'fq', value: 'paiementMontant:' + filtrePaiementMontant });

		var filtreFraisMontant = $formulaireFiltres.find('.valeurFraisMontant').val();
		if(filtreFraisMontant != null && filtreFraisMontant !== '')
			filtres.push({ name: 'fq', value: 'fraisMontant:' + filtreFraisMontant });

		var filtreFraisMontantFuture = $formulaireFiltres.find('.valeurFraisMontantFuture').val();
		if(filtreFraisMontantFuture != null && filtreFraisMontantFuture !== '')
			filtres.push({ name: 'fq', value: 'fraisMontantFuture:' + filtreFraisMontantFuture });

		var filtreFraisMontantDu = $formulaireFiltres.find('.valeurFraisMontantDu').val();
		if(filtreFraisMontantDu != null && filtreFraisMontantDu !== '')
			filtres.push({ name: 'fq', value: 'fraisMontantDu:' + filtreFraisMontantDu });

		var filtreFraisMontantNonPasse = $formulaireFiltres.find('.valeurFraisMontantNonPasse').val();
		if(filtreFraisMontantNonPasse != null && filtreFraisMontantNonPasse !== '')
			filtres.push({ name: 'fq', value: 'fraisMontantNonPasse:' + filtreFraisMontantNonPasse });

		var filtreFraisMaintenant = $formulaireFiltres.find('.valeurFraisMaintenant').val();
		if(filtreFraisMaintenant != null && filtreFraisMaintenant !== '')
			filtres.push({ name: 'fq', value: 'fraisMaintenant:' + filtreFraisMaintenant });

		var $filtrePaiementsAJourCheckbox = $formulaireFiltres.find('input.valeurPaiementsAJour[type = "checkbox"]');
		var $filtrePaiementsAJourSelect = $formulaireFiltres.find('select.valeurPaiementsAJour');
		var filtrePaiementsAJour = $filtrePaiementsAJourSelect.length ? $filtrePaiementsAJourSelect.val() : $filtrePaiementsAJourCheckbox.prop('checked');
		var filtrePaiementsAJourSelectVal = $formulaireFiltres.find('select.filtrePaiementsAJour').val();
		var filtrePaiementsAJour = null;
		if(filtrePaiementsAJourSelectVal !== '')
			filtrePaiementsAJour = filtrePaiementsAJourSelectVal == 'true';
		if(filtrePaiementsAJour != null && filtrePaiementsAJour === true)
			filtres.push({ name: 'fq', value: 'paiementsAJour:' + filtrePaiementsAJour });

		var $filtrePaiementsEnRetardCheckbox = $formulaireFiltres.find('input.valeurPaiementsEnRetard[type = "checkbox"]');
		var $filtrePaiementsEnRetardSelect = $formulaireFiltres.find('select.valeurPaiementsEnRetard');
		var filtrePaiementsEnRetard = $filtrePaiementsEnRetardSelect.length ? $filtrePaiementsEnRetardSelect.val() : $filtrePaiementsEnRetardCheckbox.prop('checked');
		var filtrePaiementsEnRetardSelectVal = $formulaireFiltres.find('select.filtrePaiementsEnRetard').val();
		var filtrePaiementsEnRetard = null;
		if(filtrePaiementsEnRetardSelectVal !== '')
			filtrePaiementsEnRetard = filtrePaiementsEnRetardSelectVal == 'true';
		if(filtrePaiementsEnRetard != null && filtrePaiementsEnRetard === true)
			filtres.push({ name: 'fq', value: 'paiementsEnRetard:' + filtrePaiementsEnRetard });

		var filtrePaiementsEnRetardMontant = $formulaireFiltres.find('.valeurPaiementsEnRetardMontant').val();
		if(filtrePaiementsEnRetardMontant != null && filtrePaiementsEnRetardMontant !== '')
			filtres.push({ name: 'fq', value: 'paiementsEnRetardMontant:' + filtrePaiementsEnRetardMontant });

		var $filtrePaiementsEnAvanceCheckbox = $formulaireFiltres.find('input.valeurPaiementsEnAvance[type = "checkbox"]');
		var $filtrePaiementsEnAvanceSelect = $formulaireFiltres.find('select.valeurPaiementsEnAvance');
		var filtrePaiementsEnAvance = $filtrePaiementsEnAvanceSelect.length ? $filtrePaiementsEnAvanceSelect.val() : $filtrePaiementsEnAvanceCheckbox.prop('checked');
		var filtrePaiementsEnAvanceSelectVal = $formulaireFiltres.find('select.filtrePaiementsEnAvance').val();
		var filtrePaiementsEnAvance = null;
		if(filtrePaiementsEnAvanceSelectVal !== '')
			filtrePaiementsEnAvance = filtrePaiementsEnAvanceSelectVal == 'true';
		if(filtrePaiementsEnAvance != null && filtrePaiementsEnAvance === true)
			filtres.push({ name: 'fq', value: 'paiementsEnAvance:' + filtrePaiementsEnAvance });

		var $filtrePaiementsEnSouffranceCheckbox = $formulaireFiltres.find('input.valeurPaiementsEnSouffrance[type = "checkbox"]');
		var $filtrePaiementsEnSouffranceSelect = $formulaireFiltres.find('select.valeurPaiementsEnSouffrance');
		var filtrePaiementsEnSouffrance = $filtrePaiementsEnSouffranceSelect.length ? $filtrePaiementsEnSouffranceSelect.val() : $filtrePaiementsEnSouffranceCheckbox.prop('checked');
		var filtrePaiementsEnSouffranceSelectVal = $formulaireFiltres.find('select.filtrePaiementsEnSouffrance').val();
		var filtrePaiementsEnSouffrance = null;
		if(filtrePaiementsEnSouffranceSelectVal !== '')
			filtrePaiementsEnSouffrance = filtrePaiementsEnSouffranceSelectVal == 'true';
		if(filtrePaiementsEnSouffrance != null && filtrePaiementsEnSouffrance === true)
			filtres.push({ name: 'fq', value: 'paiementsEnSouffrance:' + filtrePaiementsEnSouffrance });

		var filtrePaiementsEnSouffranceMontant = $formulaireFiltres.find('.valeurPaiementsEnSouffranceMontant').val();
		if(filtrePaiementsEnSouffranceMontant != null && filtrePaiementsEnSouffranceMontant !== '')
			filtres.push({ name: 'fq', value: 'paiementsEnSouffranceMontant:' + filtrePaiementsEnSouffranceMontant });

		var $filtreFraisCreesCheckbox = $formulaireFiltres.find('input.valeurFraisCrees[type = "checkbox"]');
		var $filtreFraisCreesSelect = $formulaireFiltres.find('select.valeurFraisCrees');
		var filtreFraisCrees = $filtreFraisCreesSelect.length ? $filtreFraisCreesSelect.val() : $filtreFraisCreesCheckbox.prop('checked');
		var filtreFraisCreesSelectVal = $formulaireFiltres.find('select.filtreFraisCrees').val();
		var filtreFraisCrees = null;
		if(filtreFraisCreesSelectVal !== '')
			filtreFraisCrees = filtreFraisCreesSelectVal == 'true';
		if(filtreFraisCrees != null && filtreFraisCrees === true)
			filtres.push({ name: 'fq', value: 'fraisCrees:' + filtreFraisCrees });

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

		var filtreInscriptionMails = $formulaireFiltres.find('.valeurInscriptionMails').val();
		if(filtreInscriptionMails != null && filtreInscriptionMails !== '')
			filtres.push({ name: 'fq', value: 'inscriptionMails:' + filtreInscriptionMails });

		var filtreInscriptionMail = $formulaireFiltres.find('.valeurInscriptionMail').val();
		if(filtreInscriptionMail != null && filtreInscriptionMail !== '')
			filtres.push({ name: 'fq', value: 'inscriptionMail:' + filtreInscriptionMail });

		var filtreInscriptionNumeroTelephones = $formulaireFiltres.find('.valeurInscriptionNumeroTelephones').val();
		if(filtreInscriptionNumeroTelephones != null && filtreInscriptionNumeroTelephones !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNumeroTelephones:' + filtreInscriptionNumeroTelephones });

		var filtreInscriptionNumeroTelephone = $formulaireFiltres.find('.valeurInscriptionNumeroTelephone').val();
		if(filtreInscriptionNumeroTelephone != null && filtreInscriptionNumeroTelephone !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNumeroTelephone:' + filtreInscriptionNumeroTelephone });

		var filtreInscriptionNomParent = $formulaireFiltres.find('.valeurInscriptionNomParent').val();
		if(filtreInscriptionNomParent != null && filtreInscriptionNomParent !== '')
			filtres.push({ name: 'fq', value: 'inscriptionNomParent:' + filtreInscriptionNomParent });

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
			var pkPage = $('#InscriptionScolaireForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = json['numFound'];
			var numPATCH = json['numPATCH'];
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
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
			if(pk && pkPage && pk == pkPage) {;
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

		window.eventBus.registerHandler('websocketBlocScolaire', function (error, message) {
			$('#Page_blocCles').trigger('oninput');
			$('#Page_blocCles_ajouter').text('ajouter un bloc');
			$('#Page_blocCles_ajouter').removeClass('w3-disabled');
			$('#Page_blocCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketEnfantScolaire', function (error, message) {
			$('#Page_enfantCle').trigger('oninput');
			$('#Page_enfantCle_ajouter').text('ajouter un enfant');
			$('#Page_enfantCle_ajouter').removeClass('w3-disabled');
			$('#Page_enfantCle_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketMereScolaire', function (error, message) {
			$('#Page_mereCles').trigger('oninput');
			$('#Page_mereCles_ajouter').text('ajouter une mère');
			$('#Page_mereCles_ajouter').removeClass('w3-disabled');
			$('#Page_mereCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketPereScolaire', function (error, message) {
			$('#Page_pereCles').trigger('oninput');
			$('#Page_pereCles_ajouter').text('ajouter un père');
			$('#Page_pereCles_ajouter').removeClass('w3-disabled');
			$('#Page_pereCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketGardienScolaire', function (error, message) {
			$('#Page_gardienCles').trigger('oninput');
			$('#Page_gardienCles_ajouter').text('ajouter un gardien');
			$('#Page_gardienCles_ajouter').removeClass('w3-disabled');
			$('#Page_gardienCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketPaiementScolaire', function (error, message) {
			$('#Page_paiementCles').trigger('oninput');
			$('#Page_paiementCles_ajouter').text('ajouter un paiement');
			$('#Page_paiementCles_ajouter').removeClass('w3-disabled');
			$('#Page_paiementCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketUtilisateurSite', function (error, message) {
			$('#Page_utilisateurCles').trigger('oninput');
			$('#Page_utilisateurCles_ajouter').text('ajouter un utilisateur du site');
			$('#Page_utilisateurCles_ajouter').removeClass('w3-disabled');
			$('#Page_utilisateurCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketAnneeScolaire', function (error, message) {
			$('#Page_anneeCle').trigger('oninput');
			$('#Page_anneeCle_ajouter').text('ajouter une année');
			$('#Page_anneeCle_ajouter').removeClass('w3-disabled');
			$('#Page_anneeCle_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketBlocScolaire', function (error, message) {
			$('#Page_blocCles').trigger('oninput');
			$('#Page_blocCles_ajouter').text('ajouter un bloc');
			$('#Page_blocCles_ajouter').removeClass('w3-disabled');
			$('#Page_blocCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketEnfantScolaire', function (error, message) {
			$('#Page_enfantCle').trigger('oninput');
			$('#Page_enfantCle_ajouter').text('ajouter un enfant');
			$('#Page_enfantCle_ajouter').removeClass('w3-disabled');
			$('#Page_enfantCle_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketMereScolaire', function (error, message) {
			$('#Page_mereCles').trigger('oninput');
			$('#Page_mereCles_ajouter').text('ajouter une mère');
			$('#Page_mereCles_ajouter').removeClass('w3-disabled');
			$('#Page_mereCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketPereScolaire', function (error, message) {
			$('#Page_pereCles').trigger('oninput');
			$('#Page_pereCles_ajouter').text('ajouter un père');
			$('#Page_pereCles_ajouter').removeClass('w3-disabled');
			$('#Page_pereCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketGardienScolaire', function (error, message) {
			$('#Page_gardienCles').trigger('oninput');
			$('#Page_gardienCles_ajouter').text('ajouter un gardien');
			$('#Page_gardienCles_ajouter').removeClass('w3-disabled');
			$('#Page_gardienCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketPaiementScolaire', function (error, message) {
			$('#Page_paiementCles').trigger('oninput');
			$('#Page_paiementCles_ajouter').text('ajouter un paiement');
			$('#Page_paiementCles_ajouter').removeClass('w3-disabled');
			$('#Page_paiementCles_ajouter').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketUtilisateurSite', function (error, message) {
			$('#Page_utilisateurCles').trigger('oninput');
			$('#Page_utilisateurCles_ajouter').text('ajouter un utilisateur du site');
			$('#Page_utilisateurCles_ajouter').removeClass('w3-disabled');
			$('#Page_utilisateurCles_ajouter').attr('disabled', false);
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
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputInscriptionScolaire' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'Pk'));
			}
			var val = o['cree'];
			if(vars.includes('cree')) {
				$('.inputInscriptionScolaire' + pk + 'Cree').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'Cree').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'Cree'));
			}
			var val = o['modifie'];
			if(vars.includes('modifie')) {
				$('.inputInscriptionScolaire' + pk + 'Modifie').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'Modifie').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'Modifie'));
			}
			var val = o['objetId'];
			if(vars.includes('objetId')) {
				$('.inputInscriptionScolaire' + pk + 'ObjetId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'ObjetId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'ObjetId'));
			}
			var val = o['archive'];
			if(vars.includes('archive')) {
				$('.inputInscriptionScolaire' + pk + 'Archive').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'Archive').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'Archive'));
			}
			var val = o['supprime'];
			if(vars.includes('supprime')) {
				$('.inputInscriptionScolaire' + pk + 'Supprime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'Supprime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'Supprime'));
			}
			var val = o['photo'];
			if(vars.includes('photo')) {
				if(val === undefined)
					val = null;
				$('.imgInscriptionScolaire' + pk + 'Photo').each(function() {
					if(val !== $(this).attr('src'))
						$(this).attr('src', val);
				});
				$('.inputInscriptionScolaire' + pk + 'Photo').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'Photo').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'Photo'));
			}
			var val = o['inscriptionNomGroupe'];
			if(vars.includes('inscriptionNomGroupe')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionNomGroupe').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionNomGroupe').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionNomGroupe'));
			}
			var val = o['customerProfileId'];
			if(vars.includes('customerProfileId')) {
				$('.inputInscriptionScolaire' + pk + 'CustomerProfileId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'CustomerProfileId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'CustomerProfileId'));
			}
			var val = o['inscriptionPaimentComplet'];
			if(vars.includes('inscriptionPaimentComplet')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionPaimentComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionPaimentComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionPaimentComplet'));
			}
			var val = o['enfantPropre'];
			if(vars.includes('enfantPropre')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantPropre').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EnfantPropre').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantPropre'));
			}
			var val = o['inscriptionPaimentChaqueMois'];
			if(vars.includes('inscriptionPaimentChaqueMois')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionPaimentChaqueMois').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionPaimentChaqueMois').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionPaimentChaqueMois'));
			}
			var val = o['inscriptionImmunisations'];
			if(vars.includes('inscriptionImmunisations')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionImmunisations').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionImmunisations').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionImmunisations'));
			}
			var val = o['inscriptionApprouve'];
			if(vars.includes('inscriptionApprouve')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionApprouve').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionApprouve').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionApprouve'));
			}
			var val = o['familleMarie'];
			if(vars.includes('familleMarie')) {
				$('.inputInscriptionScolaire' + pk + 'FamilleMarie').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'FamilleMarie').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'FamilleMarie'));
			}
			var val = o['familleSepare'];
			if(vars.includes('familleSepare')) {
				$('.inputInscriptionScolaire' + pk + 'FamilleSepare').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'FamilleSepare').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'FamilleSepare'));
			}
			var val = o['familleDivorce'];
			if(vars.includes('familleDivorce')) {
				$('.inputInscriptionScolaire' + pk + 'FamilleDivorce').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'FamilleDivorce').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'FamilleDivorce'));
			}
			var val = o['familleAddresse'];
			if(vars.includes('familleAddresse')) {
				$('.inputInscriptionScolaire' + pk + 'FamilleAddresse').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'FamilleAddresse').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'FamilleAddresse'));
			}
			var val = o['inscriptionConsiderationsSpeciales'];
			if(vars.includes('inscriptionConsiderationsSpeciales')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionConsiderationsSpeciales').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionConsiderationsSpeciales').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionConsiderationsSpeciales'));
			}
			var val = o['enfantConditionsMedicales'];
			if(vars.includes('enfantConditionsMedicales')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantConditionsMedicales').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EnfantConditionsMedicales').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantConditionsMedicales'));
			}
			var val = o['enfantEcolesPrecedemmentFrequentees'];
			if(vars.includes('enfantEcolesPrecedemmentFrequentees')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantEcolesPrecedemmentFrequentees').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EnfantEcolesPrecedemmentFrequentees').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantEcolesPrecedemmentFrequentees'));
			}
			var val = o['familleCommentVousConnaissezEcole'];
			if(vars.includes('familleCommentVousConnaissezEcole')) {
				$('.inputInscriptionScolaire' + pk + 'FamilleCommentVousConnaissezEcole').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'FamilleCommentVousConnaissezEcole').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'FamilleCommentVousConnaissezEcole'));
			}
			var val = o['enfantDescription'];
			if(vars.includes('enfantDescription')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantDescription').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EnfantDescription').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantDescription'));
			}
			var val = o['enfantObjectifs'];
			if(vars.includes('enfantObjectifs')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantObjectifs').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EnfantObjectifs').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantObjectifs'));
			}
			var val = o['anneeCle'];
			if(vars.includes('anneeCle')) {
				$('.inputInscriptionScolaire' + pk + 'AnneeCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'AnneeCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'AnneeCle'));
			}
			var val = o['blocCles'];
			if(vars.includes('blocCles')) {
				$('.inputInscriptionScolaire' + pk + 'BlocCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'BlocCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'BlocCles'));
			}
			var val = o['enfantCle'];
			if(vars.includes('enfantCle')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EnfantCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantCle'));
			}
			var val = o['gardienCles'];
			if(vars.includes('gardienCles')) {
				$('.inputInscriptionScolaire' + pk + 'GardienCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'GardienCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'GardienCles'));
			}
			var val = o['mereCles'];
			if(vars.includes('mereCles')) {
				$('.inputInscriptionScolaire' + pk + 'MereCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'MereCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'MereCles'));
			}
			var val = o['pereCles'];
			if(vars.includes('pereCles')) {
				$('.inputInscriptionScolaire' + pk + 'PereCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'PereCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'PereCles'));
			}
			var val = o['utilisateurCles'];
			if(vars.includes('utilisateurCles')) {
				$('.inputInscriptionScolaire' + pk + 'UtilisateurCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'UtilisateurCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'UtilisateurCles'));
			}
			var val = o['paiementCles'];
			if(vars.includes('paiementCles')) {
				$('.inputInscriptionScolaire' + pk + 'PaiementCles').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'PaiementCles').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'PaiementCles'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputInscriptionScolaire' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputInscriptionScolaire' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'Id'));
			}
			var val = o['classeNomCanonique'];
			if(vars.includes('classeNomCanonique')) {
				$('.inputInscriptionScolaire' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'ClasseNomCanonique').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'ClasseNomCanonique'));
			}
			var val = o['classeNomSimple'];
			if(vars.includes('classeNomSimple')) {
				$('.inputInscriptionScolaire' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'ClasseNomSimple').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'ClasseNomSimple'));
			}
			var val = o['classeNomsCanoniques'];
			if(vars.includes('classeNomsCanoniques')) {
				$('.inputInscriptionScolaire' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'ClasseNomsCanoniques').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'ClasseNomsCanoniques'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputInscriptionScolaire' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'SessionId'));
			}
			var val = o['utilisateurId'];
			if(vars.includes('utilisateurId')) {
				$('.inputInscriptionScolaire' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'UtilisateurId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'UtilisateurId'));
			}
			var val = o['utilisateurCle'];
			if(vars.includes('utilisateurCle')) {
				$('.inputInscriptionScolaire' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'UtilisateurCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'UtilisateurCle'));
			}
			var val = o['sauvegardes'];
			if(vars.includes('sauvegardes')) {
				$('.inputInscriptionScolaire' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'Sauvegardes').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'Sauvegardes'));
			}
			var val = o['objetTitre'];
			if(vars.includes('objetTitre')) {
				$('.inputInscriptionScolaire' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'ObjetTitre').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'ObjetTitre'));
			}
			var val = o['objetSuggere'];
			if(vars.includes('objetSuggere')) {
				$('.inputInscriptionScolaire' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'ObjetSuggere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'ObjetSuggere'));
			}
			var val = o['objetTexte'];
			if(vars.includes('objetTexte')) {
				$('.inputInscriptionScolaire' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'ObjetTexte').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'ObjetTexte'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputInscriptionScolaire' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputInscriptionScolaire' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputInscriptionScolaire' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'PageUrlApi'));
			}
			var val = o['inscriptionCle'];
			if(vars.includes('inscriptionCle')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionCle'));
			}
			var val = o['ecoleCle'];
			if(vars.includes('ecoleCle')) {
				$('.inputInscriptionScolaire' + pk + 'EcoleCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EcoleCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EcoleCle'));
			}
			var val = o['sessionCle'];
			if(vars.includes('sessionCle')) {
				$('.inputInscriptionScolaire' + pk + 'SessionCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'SessionCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'SessionCle'));
			}
			var val = o['ageCle'];
			if(vars.includes('ageCle')) {
				$('.inputInscriptionScolaire' + pk + 'AgeCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'AgeCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'AgeCle'));
			}
			var val = o['blocCle'];
			if(vars.includes('blocCle')) {
				$('.inputInscriptionScolaire' + pk + 'BlocCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'BlocCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'BlocCle'));
			}
			var val = o['formInscriptionCle'];
			if(vars.includes('formInscriptionCle')) {
				$('.inputInscriptionScolaire' + pk + 'FormInscriptionCle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'FormInscriptionCle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'FormInscriptionCle'));
			}
			var val = o['scolaireTri'];
			if(vars.includes('scolaireTri')) {
				$('.inputInscriptionScolaire' + pk + 'ScolaireTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'ScolaireTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'ScolaireTri'));
			}
			var val = o['ecoleTri'];
			if(vars.includes('ecoleTri')) {
				$('.inputInscriptionScolaire' + pk + 'EcoleTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EcoleTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EcoleTri'));
			}
			var val = o['anneeTri'];
			if(vars.includes('anneeTri')) {
				$('.inputInscriptionScolaire' + pk + 'AnneeTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'AnneeTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'AnneeTri'));
			}
			var val = o['saisonTri'];
			if(vars.includes('saisonTri')) {
				$('.inputInscriptionScolaire' + pk + 'SaisonTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'SaisonTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'SaisonTri'));
			}
			var val = o['sessionTri'];
			if(vars.includes('sessionTri')) {
				$('.inputInscriptionScolaire' + pk + 'SessionTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'SessionTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'SessionTri'));
			}
			var val = o['ageTri'];
			if(vars.includes('ageTri')) {
				$('.inputInscriptionScolaire' + pk + 'AgeTri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'AgeTri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'AgeTri'));
			}
			var val = o['enfantPrenom'];
			if(vars.includes('enfantPrenom')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantPrenom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EnfantPrenom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantPrenom'));
			}
			var val = o['enfantPrenomPrefere'];
			if(vars.includes('enfantPrenomPrefere')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantPrenomPrefere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EnfantPrenomPrefere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantPrenomPrefere'));
			}
			var val = o['enfantFamilleNom'];
			if(vars.includes('enfantFamilleNom')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantFamilleNom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EnfantFamilleNom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantFamilleNom'));
			}
			var val = o['merePrenom'];
			if(vars.includes('merePrenom')) {
				$('.inputInscriptionScolaire' + pk + 'MerePrenom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'MerePrenom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'MerePrenom'));
			}
			var val = o['merePrenomPrefere'];
			if(vars.includes('merePrenomPrefere')) {
				$('.inputInscriptionScolaire' + pk + 'MerePrenomPrefere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'MerePrenomPrefere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'MerePrenomPrefere'));
			}
			var val = o['mereNomCompletPrefere'];
			if(vars.includes('mereNomCompletPrefere')) {
				$('.inputInscriptionScolaire' + pk + 'MereNomCompletPrefere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'MereNomCompletPrefere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'MereNomCompletPrefere'));
			}
			var val = o['perePrenom'];
			if(vars.includes('perePrenom')) {
				$('.inputInscriptionScolaire' + pk + 'PerePrenom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'PerePrenom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'PerePrenom'));
			}
			var val = o['perePrenomPrefere'];
			if(vars.includes('perePrenomPrefere')) {
				$('.inputInscriptionScolaire' + pk + 'PerePrenomPrefere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'PerePrenomPrefere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'PerePrenomPrefere'));
			}
			var val = o['pereNomCompletPrefere'];
			if(vars.includes('pereNomCompletPrefere')) {
				$('.inputInscriptionScolaire' + pk + 'PereNomCompletPrefere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'PereNomCompletPrefere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'PereNomCompletPrefere'));
			}
			var val = o['enfantNomComplet'];
			if(vars.includes('enfantNomComplet')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EnfantNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantNomComplet'));
			}
			var val = o['enfantNomCompletPrefere'];
			if(vars.includes('enfantNomCompletPrefere')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantNomCompletPrefere').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EnfantNomCompletPrefere').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantNomCompletPrefere'));
			}
			var val = o['enfantDateNaissance'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('enfantDateNaissance')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantDateNaissance').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EnfantDateNaissance').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantDateNaissance'));
			}
			var val = o['enfantDateNaissanceDAnnee'];
			if(vars.includes('enfantDateNaissanceDAnnee')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantDateNaissanceDAnnee').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EnfantDateNaissanceDAnnee').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantDateNaissanceDAnnee'));
			}
			var val = o['enfantDateNaissanceMoisDAnnee'];
			if(vars.includes('enfantDateNaissanceMoisDAnnee')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantDateNaissanceMoisDAnnee').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EnfantDateNaissanceMoisDAnnee').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantDateNaissanceMoisDAnnee'));
			}
			var val = o['enfantDateNaissanceJourDeSemaine'];
			if(vars.includes('enfantDateNaissanceJourDeSemaine')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantDateNaissanceJourDeSemaine').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EnfantDateNaissanceJourDeSemaine').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantDateNaissanceJourDeSemaine'));
			}
			var val = o['enfantMoisNaissance'];
			if(vars.includes('enfantMoisNaissance')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantMoisNaissance').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EnfantMoisNaissance').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantMoisNaissance'));
			}
			var val = o['enfantJourNaissance'];
			if(vars.includes('enfantJourNaissance')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantJourNaissance').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EnfantJourNaissance').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantJourNaissance'));
			}
			var val = o['ecoleNom'];
			if(vars.includes('ecoleNom')) {
				$('.inputInscriptionScolaire' + pk + 'EcoleNom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EcoleNom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EcoleNom'));
			}
			var val = o['ecoleNomComplet'];
			if(vars.includes('ecoleNomComplet')) {
				$('.inputInscriptionScolaire' + pk + 'EcoleNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EcoleNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EcoleNomComplet'));
			}
			var val = o['ecoleEmplacement'];
			if(vars.includes('ecoleEmplacement')) {
				$('.inputInscriptionScolaire' + pk + 'EcoleEmplacement').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EcoleEmplacement').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EcoleEmplacement'));
			}
			var val = o['ecoleAddresse'];
			if(vars.includes('ecoleAddresse')) {
				$('.inputInscriptionScolaire' + pk + 'EcoleAddresse').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EcoleAddresse').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EcoleAddresse'));
			}
			var val = o['ecoleNumeroTelephone'];
			if(vars.includes('ecoleNumeroTelephone')) {
				$('.inputInscriptionScolaire' + pk + 'EcoleNumeroTelephone').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EcoleNumeroTelephone').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EcoleNumeroTelephone'));
			}
			var val = o['ecoleForm'];
			if(vars.includes('ecoleForm')) {
				$('.inputInscriptionScolaire' + pk + 'EcoleForm').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EcoleForm').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EcoleForm'));
			}
			var val = o['ecoleNumero'];
			if(vars.includes('ecoleNumero')) {
				$('.inputInscriptionScolaire' + pk + 'EcoleNumero').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EcoleNumero').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EcoleNumero'));
			}
			var val = o['ecoleAdministrateurNom'];
			if(vars.includes('ecoleAdministrateurNom')) {
				$('.inputInscriptionScolaire' + pk + 'EcoleAdministrateurNom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EcoleAdministrateurNom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EcoleAdministrateurNom'));
			}
			var val = o['anneeDebut'];
			if(vars.includes('anneeDebut')) {
				$('.inputInscriptionScolaire' + pk + 'AnneeDebut').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'AnneeDebut').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'AnneeDebut'));
			}
			var val = o['anneeFin'];
			if(vars.includes('anneeFin')) {
				$('.inputInscriptionScolaire' + pk + 'AnneeFin').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'AnneeFin').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'AnneeFin'));
			}
			var val = o['saisonDateDebut'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('saisonDateDebut')) {
				$('.inputInscriptionScolaire' + pk + 'SaisonDateDebut').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'SaisonDateDebut').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'SaisonDateDebut'));
			}
			var val = o['anneeFraisInscription'];
			if(vars.includes('anneeFraisInscription')) {
				$('.inputInscriptionScolaire' + pk + 'AnneeFraisInscription').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'AnneeFraisInscription').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'AnneeFraisInscription'));
			}
			var val = o['sessionDateDebut'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('sessionDateDebut')) {
				$('.inputInscriptionScolaire' + pk + 'SessionDateDebut').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'SessionDateDebut').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'SessionDateDebut'));
			}
			var val = o['sessionDateFin'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('sessionDateFin')) {
				$('.inputInscriptionScolaire' + pk + 'SessionDateFin').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'SessionDateFin').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'SessionDateFin'));
			}
			var val = o['ageNomComplet'];
			if(vars.includes('ageNomComplet')) {
				$('.inputInscriptionScolaire' + pk + 'AgeNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'AgeNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'AgeNomComplet'));
			}
			var val = o['ageDebut'];
			if(vars.includes('ageDebut')) {
				$('.inputInscriptionScolaire' + pk + 'AgeDebut').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'AgeDebut').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'AgeDebut'));
			}
			var val = o['ageFin'];
			if(vars.includes('ageFin')) {
				$('.inputInscriptionScolaire' + pk + 'AgeFin').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'AgeFin').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'AgeFin'));
			}
			var val = o['blocHeureDebut'];
			if(val != null) {
				var t = moment(val, 'HH:mm');
				if(t)
					val = t.format('H'h'mm');
			}
			if(vars.includes('blocHeureDebut')) {
				$('.inputInscriptionScolaire' + pk + 'BlocHeureDebut').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'BlocHeureDebut').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'BlocHeureDebut'));
			}
			var val = o['blocHeureFin'];
			if(val != null) {
				var t = moment(val, 'HH:mm');
				if(t)
					val = t.format('H'h'mm');
			}
			if(vars.includes('blocHeureFin')) {
				$('.inputInscriptionScolaire' + pk + 'BlocHeureFin').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'BlocHeureFin').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'BlocHeureFin'));
			}
			var val = o['blocPrixParMois'];
			if(vars.includes('blocPrixParMois')) {
				$('.inputInscriptionScolaire' + pk + 'BlocPrixParMois').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'BlocPrixParMois').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'BlocPrixParMois'));
			}
			var val = o['blocDimanche'];
			if(vars.includes('blocDimanche')) {
				$('.inputInscriptionScolaire' + pk + 'BlocDimanche').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'BlocDimanche').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'BlocDimanche'));
			}
			var val = o['blocLundi'];
			if(vars.includes('blocLundi')) {
				$('.inputInscriptionScolaire' + pk + 'BlocLundi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'BlocLundi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'BlocLundi'));
			}
			var val = o['blocMardi'];
			if(vars.includes('blocMardi')) {
				$('.inputInscriptionScolaire' + pk + 'BlocMardi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'BlocMardi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'BlocMardi'));
			}
			var val = o['blocMercredi'];
			if(vars.includes('blocMercredi')) {
				$('.inputInscriptionScolaire' + pk + 'BlocMercredi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'BlocMercredi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'BlocMercredi'));
			}
			var val = o['blocJeudi'];
			if(vars.includes('blocJeudi')) {
				$('.inputInscriptionScolaire' + pk + 'BlocJeudi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'BlocJeudi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'BlocJeudi'));
			}
			var val = o['blocVendredi'];
			if(vars.includes('blocVendredi')) {
				$('.inputInscriptionScolaire' + pk + 'BlocVendredi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'BlocVendredi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'BlocVendredi'));
			}
			var val = o['blocSamedi'];
			if(vars.includes('blocSamedi')) {
				$('.inputInscriptionScolaire' + pk + 'BlocSamedi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'BlocSamedi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'BlocSamedi'));
			}
			var val = o['blocPrixTotal'];
			if(vars.includes('blocPrixTotal')) {
				$('.inputInscriptionScolaire' + pk + 'BlocPrixTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'BlocPrixTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'BlocPrixTotal'));
			}
			var val = o['blocNomAdmin'];
			if(vars.includes('blocNomAdmin')) {
				$('.inputInscriptionScolaire' + pk + 'BlocNomAdmin').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'BlocNomAdmin').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'BlocNomAdmin'));
			}
			var val = o['blocNomCourt'];
			if(vars.includes('blocNomCourt')) {
				$('.inputInscriptionScolaire' + pk + 'BlocNomCourt').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'BlocNomCourt').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'BlocNomCourt'));
			}
			var val = o['blocNomComplet'];
			if(vars.includes('blocNomComplet')) {
				$('.inputInscriptionScolaire' + pk + 'BlocNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'BlocNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'BlocNomComplet'));
			}
			var val = o['inscriptionCouleurGroupe'];
			if(vars.includes('inscriptionCouleurGroupe')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionCouleurGroupe').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionCouleurGroupe').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionCouleurGroupe'));
			}
			var val = o['inscriptionDateFrais'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDateFrais')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDateFrais').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionDateFrais').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDateFrais'));
			}
			var val = o['paiementLastDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('paiementLastDate')) {
				$('.inputInscriptionScolaire' + pk + 'PaiementLastDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'PaiementLastDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'PaiementLastDate'));
			}
			var val = o['paiementLastStr'];
			if(vars.includes('paiementLastStr')) {
				$('.inputInscriptionScolaire' + pk + 'PaiementLastStr').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'PaiementLastStr').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'PaiementLastStr'));
			}
			var val = o['paiementMontant'];
			if(vars.includes('paiementMontant')) {
				$('.inputInscriptionScolaire' + pk + 'PaiementMontant').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'PaiementMontant').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'PaiementMontant'));
			}
			var val = o['fraisMontant'];
			if(vars.includes('fraisMontant')) {
				$('.inputInscriptionScolaire' + pk + 'FraisMontant').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'FraisMontant').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'FraisMontant'));
			}
			var val = o['fraisMontantFuture'];
			if(vars.includes('fraisMontantFuture')) {
				$('.inputInscriptionScolaire' + pk + 'FraisMontantFuture').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'FraisMontantFuture').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'FraisMontantFuture'));
			}
			var val = o['fraisMontantDu'];
			if(vars.includes('fraisMontantDu')) {
				$('.inputInscriptionScolaire' + pk + 'FraisMontantDu').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'FraisMontantDu').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'FraisMontantDu'));
			}
			var val = o['fraisMontantNonPasse'];
			if(vars.includes('fraisMontantNonPasse')) {
				$('.inputInscriptionScolaire' + pk + 'FraisMontantNonPasse').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'FraisMontantNonPasse').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'FraisMontantNonPasse'));
			}
			var val = o['fraisMaintenant'];
			if(vars.includes('fraisMaintenant')) {
				$('.inputInscriptionScolaire' + pk + 'FraisMaintenant').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'FraisMaintenant').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'FraisMaintenant'));
			}
			var val = o['paiementsAJour'];
			if(vars.includes('paiementsAJour')) {
				$('.inputInscriptionScolaire' + pk + 'PaiementsAJour').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'PaiementsAJour').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'PaiementsAJour'));
			}
			var val = o['paiementsEnRetard'];
			if(vars.includes('paiementsEnRetard')) {
				$('.inputInscriptionScolaire' + pk + 'PaiementsEnRetard').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'PaiementsEnRetard').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'PaiementsEnRetard'));
			}
			var val = o['paiementsEnRetardMontant'];
			if(vars.includes('paiementsEnRetardMontant')) {
				$('.inputInscriptionScolaire' + pk + 'PaiementsEnRetardMontant').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'PaiementsEnRetardMontant').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'PaiementsEnRetardMontant'));
			}
			var val = o['paiementsEnAvance'];
			if(vars.includes('paiementsEnAvance')) {
				$('.inputInscriptionScolaire' + pk + 'PaiementsEnAvance').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'PaiementsEnAvance').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'PaiementsEnAvance'));
			}
			var val = o['paiementsEnSouffrance'];
			if(vars.includes('paiementsEnSouffrance')) {
				$('.inputInscriptionScolaire' + pk + 'PaiementsEnSouffrance').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'PaiementsEnSouffrance').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'PaiementsEnSouffrance'));
			}
			var val = o['paiementsEnSouffranceMontant'];
			if(vars.includes('paiementsEnSouffranceMontant')) {
				$('.inputInscriptionScolaire' + pk + 'PaiementsEnSouffranceMontant').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'PaiementsEnSouffranceMontant').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'PaiementsEnSouffranceMontant'));
			}
			var val = o['fraisCrees'];
			if(vars.includes('fraisCrees')) {
				$('.inputInscriptionScolaire' + pk + 'FraisCrees').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'FraisCrees').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'FraisCrees'));
			}
			var val = o['creeDAnnee'];
			if(vars.includes('creeDAnnee')) {
				$('.inputInscriptionScolaire' + pk + 'CreeDAnnee').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'CreeDAnnee').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'CreeDAnnee'));
			}
			var val = o['creeJourDeSemaine'];
			if(vars.includes('creeJourDeSemaine')) {
				$('.inputInscriptionScolaire' + pk + 'CreeJourDeSemaine').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'CreeJourDeSemaine').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'CreeJourDeSemaine'));
			}
			var val = o['creeMoisDAnnee'];
			if(vars.includes('creeMoisDAnnee')) {
				$('.inputInscriptionScolaire' + pk + 'CreeMoisDAnnee').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'CreeMoisDAnnee').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'CreeMoisDAnnee'));
			}
			var val = o['creeHeureDuJour'];
			if(vars.includes('creeHeureDuJour')) {
				$('.inputInscriptionScolaire' + pk + 'CreeHeureDuJour').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'CreeHeureDuJour').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'CreeHeureDuJour'));
			}
			var val = o['inscriptionJoursDeSemaine'];
			if(vars.includes('inscriptionJoursDeSemaine')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionJoursDeSemaine').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionJoursDeSemaine').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionJoursDeSemaine'));
			}
			var val = o['inscriptionNomsParents'];
			if(vars.includes('inscriptionNomsParents')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionNomsParents').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionNomsParents').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionNomsParents'));
			}
			var val = o['inscriptionMails'];
			if(vars.includes('inscriptionMails')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionMails').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionMails').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionMails'));
			}
			var val = o['inscriptionMail'];
			if(vars.includes('inscriptionMail')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionMail').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionMail').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionMail'));
			}
			var val = o['inscriptionMailsParents'];
			if(vars.includes('inscriptionMailsParents')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionMailsParents').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionMailsParents').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionMailsParents'));
			}
			var val = o['inscriptionNumeroTelephones'];
			if(vars.includes('inscriptionNumeroTelephones')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionNumeroTelephones').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionNumeroTelephones').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionNumeroTelephones'));
			}
			var val = o['inscriptionNumeroTelephone'];
			if(vars.includes('inscriptionNumeroTelephone')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionNumeroTelephone').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionNumeroTelephone').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionNumeroTelephone'));
			}
			var val = o['inscriptionNomParent'];
			if(vars.includes('inscriptionNomParent')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionNomParent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionNomParent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionNomParent'));
			}
			var val = o['inscriptionNomParentLignes'];
			if(vars.includes('inscriptionNomParentLignes')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionNomParentLignes').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionNomParentLignes').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionNomParentLignes'));
			}
			var val = o['inscriptionMailParentLignes'];
			if(vars.includes('inscriptionMailParentLignes')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionMailParentLignes').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionMailParentLignes').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionMailParentLignes'));
			}
			var val = o['inscriptionDetailParentLignes'];
			if(vars.includes('inscriptionDetailParentLignes')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDetailParentLignes').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionDetailParentLignes').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDetailParentLignes'));
			}
			var val = o['inscriptionChercherParentLignes'];
			if(vars.includes('inscriptionChercherParentLignes')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionChercherParentLignes').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionChercherParentLignes').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionChercherParentLignes'));
			}
			var val = o['inscriptionContactUrgenceParentLignes'];
			if(vars.includes('inscriptionContactUrgenceParentLignes')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionContactUrgenceParentLignes').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionContactUrgenceParentLignes').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionContactUrgenceParentLignes'));
			}
			var val = o['inscriptionSignature1'];
			if(vars.includes('inscriptionSignature1')) {
				if(val === undefined)
					val = null;
				$('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature1').each(function() {
					if(val !== $('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature1').attr('src'))
						$('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature1').attr('src', val == null ? 'data:image/png;base64,' : val);
					ajouterLueur($('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature1'));
				});
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature1').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature1').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature1'));
			}
			var val = o['inscriptionSignature2'];
			if(vars.includes('inscriptionSignature2')) {
				if(val === undefined)
					val = null;
				$('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature2').each(function() {
					if(val !== $('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature2').attr('src'))
						$('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature2').attr('src', val == null ? 'data:image/png;base64,' : val);
					ajouterLueur($('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature2'));
				});
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature2').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature2').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature2'));
			}
			var val = o['inscriptionSignature3'];
			if(vars.includes('inscriptionSignature3')) {
				if(val === undefined)
					val = null;
				$('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature3').each(function() {
					if(val !== $('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature3').attr('src'))
						$('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature3').attr('src', val == null ? 'data:image/png;base64,' : val);
					ajouterLueur($('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature3'));
				});
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature3').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature3').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature3'));
			}
			var val = o['inscriptionSignature4'];
			if(vars.includes('inscriptionSignature4')) {
				if(val === undefined)
					val = null;
				$('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature4').each(function() {
					if(val !== $('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature4').attr('src'))
						$('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature4').attr('src', val == null ? 'data:image/png;base64,' : val);
					ajouterLueur($('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature4'));
				});
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature4').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature4').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature4'));
			}
			var val = o['inscriptionSignature5'];
			if(vars.includes('inscriptionSignature5')) {
				if(val === undefined)
					val = null;
				$('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature5').each(function() {
					if(val !== $('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature5').attr('src'))
						$('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature5').attr('src', val == null ? 'data:image/png;base64,' : val);
					ajouterLueur($('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature5'));
				});
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature5').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature5').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature5'));
			}
			var val = o['inscriptionSignature6'];
			if(vars.includes('inscriptionSignature6')) {
				if(val === undefined)
					val = null;
				$('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature6').each(function() {
					if(val !== $('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature6').attr('src'))
						$('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature6').attr('src', val == null ? 'data:image/png;base64,' : val);
					ajouterLueur($('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature6'));
				});
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature6').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature6').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature6'));
			}
			var val = o['inscriptionSignature7'];
			if(vars.includes('inscriptionSignature7')) {
				if(val === undefined)
					val = null;
				$('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature7').each(function() {
					if(val !== $('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature7').attr('src'))
						$('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature7').attr('src', val == null ? 'data:image/png;base64,' : val);
					ajouterLueur($('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature7'));
				});
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature7').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature7').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature7'));
			}
			var val = o['inscriptionSignature8'];
			if(vars.includes('inscriptionSignature8')) {
				if(val === undefined)
					val = null;
				$('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature8').each(function() {
					if(val !== $('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature8').attr('src'))
						$('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature8').attr('src', val == null ? 'data:image/png;base64,' : val);
					ajouterLueur($('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature8'));
				});
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature8').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature8').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature8'));
			}
			var val = o['inscriptionSignature9'];
			if(vars.includes('inscriptionSignature9')) {
				if(val === undefined)
					val = null;
				$('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature9').each(function() {
					if(val !== $('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature9').attr('src'))
						$('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature9').attr('src', val == null ? 'data:image/png;base64,' : val);
					ajouterLueur($('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature9'));
				});
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature9').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature9').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature9'));
			}
			var val = o['inscriptionSignature10'];
			if(vars.includes('inscriptionSignature10')) {
				if(val === undefined)
					val = null;
				$('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature10').each(function() {
					if(val !== $('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature10').attr('src'))
						$('.signatureImgInscriptionScolaire' + pk + 'InscriptionSignature10').attr('src', val == null ? 'data:image/png;base64,' : val);
					ajouterLueur($('.signatureInputInscriptionScolaire' + pk + 'InscriptionSignature10'));
				});
				$('.inputInscriptionScolaire' + pk + 'InscriptionSignature10').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionSignature10').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionSignature10'));
			}
			var val = o['inscriptionDate1'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate1')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate1').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionDate1').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate1'));
			}
			var val = o['inscriptionDate2'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate2')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate2').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionDate2').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate2'));
			}
			var val = o['inscriptionDate3'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate3')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate3').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionDate3').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate3'));
			}
			var val = o['inscriptionDate4'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate4')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate4').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionDate4').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate4'));
			}
			var val = o['inscriptionDate5'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate5')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate5').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionDate5').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate5'));
			}
			var val = o['inscriptionDate6'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate6')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate6').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionDate6').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate6'));
			}
			var val = o['inscriptionDate7'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate7')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate7').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionDate7').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate7'));
			}
			var val = o['inscriptionDate8'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate8')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate8').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionDate8').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate8'));
			}
			var val = o['inscriptionDate9'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate9')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate9').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionDate9').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate9'));
			}
			var val = o['inscriptionDate10'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('DD-MM-YYYY');
			}
			if(vars.includes('inscriptionDate10')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionDate10').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionDate10').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionDate10'));
			}
			var val = o['enfantImmunisationsRecu'];
			if(vars.includes('enfantImmunisationsRecu')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantImmunisationsRecu').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EnfantImmunisationsRecu').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantImmunisationsRecu'));
			}
			var val = o['enfantPhotosApprouve'];
			if(vars.includes('enfantPhotosApprouve')) {
				$('.inputInscriptionScolaire' + pk + 'EnfantPhotosApprouve').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'EnfantPhotosApprouve').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'EnfantPhotosApprouve'));
			}
			var val = o['inscriptionNomComplet'];
			if(vars.includes('inscriptionNomComplet')) {
				$('.inputInscriptionScolaire' + pk + 'InscriptionNomComplet').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varInscriptionScolaire' + pk + 'InscriptionNomComplet').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				ajouterLueur($('.inputInscriptionScolaire' + pk + 'InscriptionNomComplet'));
			}
		});
	}
}
