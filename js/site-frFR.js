
$(window).on('load', function() {
	$(document).click(function(e) {
		var $target = $(e.target);
		if ($target.is($target.closest('.w3-modal'))) {
			$target.hide();
		}
	});
});

$(document).ready(function() {
	$('.datepicker').datePicker({
	weekDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
	, months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		, readValue: function(element) {
			if (!element.value) {
				var d = new Date();
				var s = moment(d).format('YYYY-MM-DD'); 
				return s; // initial time if empty
			}
			var result = moment(element.value, 'DD-MM-YYYY').format('YYYY-MM-DD');
			return result; // triggers default behavior
		}
		, renderValue: function(container, element, value) {
			element.value = moment(value, 'YYYY-MM-DD').format('DD-MM-YYYY');
		}
	});
	$('.timepicker').datePicker({
		timeFormat: "HH:MM AM"
		, readValue: function(element) {
			if (!element.value) {
				var d = new Date();
				var s = dateFormat(d, "h'h'MM"); 
				return s; // initial time if empty
			}
			return element.value; // triggers default behavior
		}
	});
});

$(document).keypress(function(e) {
	if (e.keyCode == 27) {
		$('.w3-modal').filter(':visible').hide();
	}
});

/*
 * http://blog.stevenlevithan.com/archives/date-time-format Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com> MIT license
 * 
 * Includes enhancements by Scott Trenda <scott.trenda.net> and Kris Kowal
 * <cixar.com/~kris.kowal/>
 * 
 * Accepts a date, a mask, or a date and a mask. Returns a formatted version of
 * the given date. The date defaults to the current date/time. The mask defaults
 * to dateFormat.masks.default.
 */

var dateFormat = function () {
	var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date)) throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var	_ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d:    d,
				dd:   pad(d),
				ddd:  dF.i18n.dayNames[D],
				dddd: dF.i18n.dayNames[D + 7],
				m:    m + 1,
				mm:   pad(m + 1),
				mmm:  dF.i18n.monthNames[m],
				mmmm: dF.i18n.monthNames[m + 12],
				yy:   String(y).slice(2),
				yyyy: y,
				h:    H % 12 || 12,
				hh:   pad(H % 12 || 12),
				H:    H,
				HH:   pad(H),
				M:    M,
				MM:   pad(M),
				s:    s,
				ss:   pad(s),
				l:    pad(L, 3),
				L:    pad(L > 99 ? Math.round(L / 10) : L),
				t:    H < 12 ? "a"  : "p",
				tt:   H < 12 ? "am" : "pm",
				T:    H < 12 ? "A"  : "P",
				TT:   H < 12 ? "AM" : "PM",
				Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default":      "ddd mmm dd yyyy HH:MM:ss",
	shortDate:      "m/d/yy",
	mediumDate:     "mmm d, yyyy",
	longDate:       "mmmm d, yyyy",
	fullDate:       "dddd, mmmm d, yyyy",
	shortTime:      "h:MM TT",
	mediumTime:     "h:MM:ss TT",
	longTime:       "h:MM:ss TT Z",
	isoDate:        "yyyy-mm-dd",
	isoTime:        "HH:MM:ss",
	isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};

function parseTime(timeString) {
	if (timeString == '') return null;
	var d = new Date();
	var time = timeString.match(/(\d+)(:(\d\d))?\s*([Pp]?)/);
	d.setHours( parseInt(time[1]) + ( ( parseInt(time[1]) < 12 && time[4] ) ? 12 : 0) );
	d.setMinutes( parseInt(time[3]) || 0 );
	d.setSeconds(0, 0);
	return d;
}

function ajouterLueur($input) {
	$input.addClass('lueurSucces');
	$input.removeClass('lueurErreur');
}

function enleverLueur($input) {
	$input.removeClass('lueurSucces');
	$input.removeClass('lueurErreur');
}

function ajouterErreur($input) {
	$input.removeClass('lueurSucces');
	$input.addClass('lueurErreur');
}

function ajouterRemplacer($input) {
	var idListe = $input.attr('data-id'); 
		$liste = null; 
	if(idListe != null) {
	}
	$form = $input.closest('form');
	$icone = $input.prev('i');
	$icone.addClass('w3-spin-fast');
	$icone.show();
	$.ajax({
		url: $form.attr('action')
		, type: 'GET'
		, timeout: 10000
		, contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
		, data: $form.serialize()
		, success: function(json, statusText, xhr, $form) { 
			for (var key in json) {
				if (data.hasOwnProperty(key)) {
					var str = data[key];
					$elem = $('#' + idListe); 
					if($elem != null) {
						$elem.replaceWith(str); 
					}
				}
			}
			$icone.removeClass('w3-spin-fast');
		} 
		, error: function()  { 
			$icone.removeClass('w3-spin-fast');
		} 
	}); 
	return false; 
}

function rechercher($input) {
	$form = $input.closest('form');
	$icone = $input.prev('i');
	$icone.addClass('w3-spin-fast');
	$icone.show();
	window.location.href = $form.attr('action') + '?q=' + encodeURIComponent($input.attr('name') + ':' + encodeURIComponent($input.val()));
	return false; 
}

function suggere($input) {
	var idListe = $input.attr('data-id'); 
		$liste = null; 
	if(idListe != null) {
		$liste = $('#' + idListe); 
	}
	$form = $input.closest('form');
	$icone = $input.prev('i');
	$icone.addClass('w3-spin-fast');
	$icone.show();
	$.ajax({
		url: $form.attr('action')
		, type: 'GET'
		, timeout: 5000
		, contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
		, data: $form.serialize()
		, success: function(json, statusText, xhr, $form) { 
			for (var id in json) {
				if (json.hasOwnProperty(id)) {
					var str = json[id];
					$elem = $('#' + id); 
					if($elem != null) {
						$elem.replaceWith(str); 
					}
				}
			}
//			if($liste != null) {
//				$liste.replaceWith(responseText); 
//			}
			$icone.removeClass('w3-spin-fast');
		} 
		, error: function()  { 
			$icone.removeClass('w3-spin-fast');
		} 
	}); 
	return false; 
}

function envoyerFormulaire($inputEnfant, $lueur) {
	$form = $inputEnfant.closest('form');
	$icone = $form.prev('i');
	$icone.addClass('w3-spin-fast');
	$icone.removeClass('w3-hide');
	$.ajax({
		url: $form.attr('action')
		, type: 'POST'
		, contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
		, data: $form.serialize()
		, success: function(json, statusText, xhr, $form) { 
			for (var id in json) {
				if (json.hasOwnProperty(id)) {
					var str = json[id];
					$elem = $('#' + id); 
					if($elem != null) {
						$elem.replaceWith(str); 
					}
				}
			}

//			var idParent = $inputEnfant.attr('data-idParent'); 
//			if(idParent != null) {
//				$inputParent = $('#' + idParent); 
//				if(idParent != null) {
//					$inputEnfant.prop('checked', $inputEnfant.prop('checked')); 
//					envoyerFormulaire($inputParent, $lueur); 
//				}
//			}
//			else if($lueur != null)
				$lueur.addClass('lueurSucces');
				$icone.removeClass('w3-spin-fast');
				$icone.addClass('w3-hide');
		} 
		, error: function()  { 
			$lueur.addClass('lueurErreur');
			document.getElementById('modaleErreur').style.display='block'; 
			$icone.removeClass('w3-spin-fast');
			$icone.addClass('w3-hide');
		} 
	}); 
	return false; 
}

//Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction(s) {
	var x = document.getElementById(s);
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
	} else {
		x.className = x.className.replace(" w3-show", "");
	}
}

/**
 * Modifier un ou plusiers utilisateurs du site sans valuers qui change, 
 * ou changer des valeurs pour un ou plusiers l'utilisateur du site. 
 * @param params: [ "q=*:*", "fq=pk:1", "sort=pk asc", "rows=1", "fl=pk" ]
 *        Une liste des opérations de recherche sur des utilisateurs du site 
 *        pour rechercher "q=*:*", filtrer "fq=pk:1", trier "sort=pk desc", 
 *        limiter les résultats "rows=1", ou limiter les valeurs "fl=pk". 
 * @param valeurs Noms des champs et valeurs à changer selon les filtres fq. 
 *           Example: { pk: 1 }
 */
function patchUtilisateurSiteBase($formulaireFiltres, $formulaireValeurs) {
	var filtres = [];

	var filtreCree = $formulaireFiltres.find('.valeurCree').val();
	if(filtreCree != null && filtreCree !== '')
		filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

	var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
	if(filtreModifie != null && filtreModifie !== '')
		filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

	var filtreUtilisateurNom = $formulaireFiltres.find('.valeurUtilisateurNom').val();
	if(filtreUtilisateurNom != null && filtreUtilisateurNom !== '')
		filtres.push({ name: 'fq', value: 'utilisateurNom:' + filtreUtilisateurNom });

	var filtreUtilisateurNomComplet = $formulaireFiltres.find('.valeurUtilisateurNomComplet').val();
	if(filtreUtilisateurNomComplet != null && filtreUtilisateurNomComplet !== '')
		filtres.push({ name: 'fq', value: 'utilisateurNomComplet:' + filtreUtilisateurNomComplet });

	var filtreSiteNomDomaine = $formulaireFiltres.find('.valeurSiteNomDomaine').val();
	if(filtreSiteNomDomaine != null && filtreSiteNomDomaine !== '')
		filtres.push({ name: 'fq', value: 'siteNomDomaine:' + filtreSiteNomDomaine });

	var filtreZookeeperVersion = $formulaireFiltres.find('.valeurZookeeperVersion').val();
	if(filtreZookeeperVersion != null && filtreZookeeperVersion !== '')
		filtres.push({ name: 'fq', value: 'zookeeperVersion:' + filtreZookeeperVersion });

	var filtreZookeeperPortAdmin = $formulaireFiltres.find('.valeurZookeeperPortAdmin').val();
	if(filtreZookeeperPortAdmin != null && filtreZookeeperPortAdmin !== '')
		filtres.push({ name: 'fq', value: 'zookeeperPortAdmin:' + filtreZookeeperPortAdmin });

	var filtreZookeeperPortClient = $formulaireFiltres.find('.valeurZookeeperPortClient').val();
	if(filtreZookeeperPortClient != null && filtreZookeeperPortClient !== '')
		filtres.push({ name: 'fq', value: 'zookeeperPortClient:' + filtreZookeeperPortClient });

	var filtreSolrVersion = $formulaireFiltres.find('.valeurSolrVersion').val();
	if(filtreSolrVersion != null && filtreSolrVersion !== '')
		filtres.push({ name: 'fq', value: 'solrVersion:' + filtreSolrVersion });

	var filtreSolrPortClient = $formulaireFiltres.find('.valeurSolrPortClient').val();
	if(filtreSolrPortClient != null && filtreSolrPortClient !== '')
		filtres.push({ name: 'fq', value: 'solrPortClient:' + filtreSolrPortClient });

	var filtreSolrConfigset = $formulaireFiltres.find('.valeurSolrConfigset').val();
	if(filtreSolrConfigset != null && filtreSolrConfigset !== '')
		filtres.push({ name: 'fq', value: 'solrConfigset:' + filtreSolrConfigset });

	var filtreSolrCollection = $formulaireFiltres.find('.valeurSolrCollection').val();
	if(filtreSolrCollection != null && filtreSolrCollection !== '')
		filtres.push({ name: 'fq', value: 'solrCollection:' + filtreSolrCollection });

	var filtrePk = $formulaireFiltres.find('.valeurPk').val();
	if(filtrePk != null && filtrePk !== '')
		filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

	var filtreId = $formulaireFiltres.find('.valeurId').val();
	if(filtreId != null && filtreId !== '')
		filtres.push({ name: 'fq', value: 'id:' + filtreId });

	var filtreArchive = $formulaireFiltres.find('.valeurArchive').prop('checked');
	if(filtreArchive != null && filtreArchive === true)
		filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

	var filtreSupprime = $formulaireFiltres.find('.valeurSupprime').prop('checked');
	if(filtreSupprime != null && filtreSupprime === true)
		filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

	var filtreClasseNomCanonique = $formulaireFiltres.find('.valeurClasseNomCanonique').val();
	if(filtreClasseNomCanonique != null && filtreClasseNomCanonique !== '')
		filtres.push({ name: 'fq', value: 'classeNomCanonique:' + filtreClasseNomCanonique });

	var filtreClasseNomSimple = $formulaireFiltres.find('.valeurClasseNomSimple').val();
	if(filtreClasseNomSimple != null && filtreClasseNomSimple !== '')
		filtres.push({ name: 'fq', value: 'classeNomSimple:' + filtreClasseNomSimple });

	var filtreClasseNomsCanoniques = $formulaireFiltres.find('.valeurClasseNomsCanoniques').val();
	if(filtreClasseNomsCanoniques != null && filtreClasseNomsCanoniques !== '')
		filtres.push({ name: 'fq', value: 'classeNomsCanoniques:' + filtreClasseNomsCanoniques });

	var filtreUtilisateurId = $formulaireFiltres.find('.valeurUtilisateurId').val();
	if(filtreUtilisateurId != null && filtreUtilisateurId !== '')
		filtres.push({ name: 'fq', value: 'utilisateurId:' + filtreUtilisateurId });

	var filtreCalculInrPks = $formulaireFiltres.find('.valeurCalculInrPks').val();
	if(filtreCalculInrPks != null && filtreCalculInrPks !== '')
		filtres.push({ name: 'fq', value: 'calculInrPks:' + filtreCalculInrPks });

	var filtreUtilisateurMail = $formulaireFiltres.find('.valeurUtilisateurMail').val();
	if(filtreUtilisateurMail != null && filtreUtilisateurMail !== '')
		filtres.push({ name: 'fq', value: 'utilisateurMail:' + filtreUtilisateurMail });

	var filtreUtilisateurPrenom = $formulaireFiltres.find('.valeurUtilisateurPrenom').val();
	if(filtreUtilisateurPrenom != null && filtreUtilisateurPrenom !== '')
		filtres.push({ name: 'fq', value: 'utilisateurPrenom:' + filtreUtilisateurPrenom });

	var filtreUtilisateurNomFamille = $formulaireFiltres.find('.valeurUtilisateurNomFamille').val();
	if(filtreUtilisateurNomFamille != null && filtreUtilisateurNomFamille !== '')
		filtres.push({ name: 'fq', value: 'utilisateurNomFamille:' + filtreUtilisateurNomFamille });

	var filtreUtilisateurSite = $formulaireFiltres.find('.valeurUtilisateurSite').val();
	if(filtreUtilisateurSite != null && filtreUtilisateurSite !== '')
		filtres.push({ name: 'fq', value: 'utilisateurSite:' + filtreUtilisateurSite });

	var filtreUtilisateurRecevoirCourriels = $formulaireFiltres.find('.valeurUtilisateurRecevoirCourriels').prop('checked');
	if(filtreUtilisateurRecevoirCourriels != null && filtreUtilisateurRecevoirCourriels === true)
		filtres.push({ name: 'fq', value: 'utilisateurRecevoirCourriels:' + filtreUtilisateurRecevoirCourriels });

	var filtreVoirArchive = $formulaireFiltres.find('.valeurVoirArchive').prop('checked');
	if(filtreVoirArchive != null && filtreVoirArchive === true)
		filtres.push({ name: 'fq', value: 'voirArchive:' + filtreVoirArchive });

	var filtreVoirSupprime = $formulaireFiltres.find('.valeurVoirSupprime').prop('checked');
	if(filtreVoirSupprime != null && filtreVoirSupprime === true)
		filtres.push({ name: 'fq', value: 'voirSupprime:' + filtreVoirSupprime });

	var valeurs = {};

	var setCree = $formulaireValeurs.find('.setCree').val();
	if(setCree != null && setCree !== '')
		valeurs['setCree'] = setCree;
	var addCree = $formulaireValeurs.find('.addCree').val();
	if(addCree != null && addCree !== '')
		valeurs['addCree'] = addCree;
	var removeCree = $formulaireValeurs.find('.removeCree').val();
	if(removeCree != null && removeCree !== '')
		valeurs['removeCree'] = removeCree;

	var setModifie = $formulaireValeurs.find('.setModifie').val();
	if(setModifie != null && setModifie !== '')
		valeurs['setModifie'] = setModifie;
	var addModifie = $formulaireValeurs.find('.addModifie').val();
	if(addModifie != null && addModifie !== '')
		valeurs['addModifie'] = addModifie;
	var removeModifie = $formulaireValeurs.find('.removeModifie').val();
	if(removeModifie != null && removeModifie !== '')
		valeurs['removeModifie'] = removeModifie;

	var setUtilisateurNom = $formulaireValeurs.find('.setUtilisateurNom').val();
	if(setUtilisateurNom != null && setUtilisateurNom !== '')
		valeurs['setUtilisateurNom'] = setUtilisateurNom;
	var addUtilisateurNom = $formulaireValeurs.find('.addUtilisateurNom').val();
	if(addUtilisateurNom != null && addUtilisateurNom !== '')
		valeurs['addUtilisateurNom'] = addUtilisateurNom;
	var removeUtilisateurNom = $formulaireValeurs.find('.removeUtilisateurNom').val();
	if(removeUtilisateurNom != null && removeUtilisateurNom !== '')
		valeurs['removeUtilisateurNom'] = removeUtilisateurNom;

	var setUtilisateurNomComplet = $formulaireValeurs.find('.setUtilisateurNomComplet').val();
	if(setUtilisateurNomComplet != null && setUtilisateurNomComplet !== '')
		valeurs['setUtilisateurNomComplet'] = setUtilisateurNomComplet;
	var addUtilisateurNomComplet = $formulaireValeurs.find('.addUtilisateurNomComplet').val();
	if(addUtilisateurNomComplet != null && addUtilisateurNomComplet !== '')
		valeurs['addUtilisateurNomComplet'] = addUtilisateurNomComplet;
	var removeUtilisateurNomComplet = $formulaireValeurs.find('.removeUtilisateurNomComplet').val();
	if(removeUtilisateurNomComplet != null && removeUtilisateurNomComplet !== '')
		valeurs['removeUtilisateurNomComplet'] = removeUtilisateurNomComplet;

	var setSiteNomDomaine = $formulaireValeurs.find('.setSiteNomDomaine').val();
	if(setSiteNomDomaine != null && setSiteNomDomaine !== '')
		valeurs['setSiteNomDomaine'] = setSiteNomDomaine;
	var addSiteNomDomaine = $formulaireValeurs.find('.addSiteNomDomaine').val();
	if(addSiteNomDomaine != null && addSiteNomDomaine !== '')
		valeurs['addSiteNomDomaine'] = addSiteNomDomaine;
	var removeSiteNomDomaine = $formulaireValeurs.find('.removeSiteNomDomaine').val();
	if(removeSiteNomDomaine != null && removeSiteNomDomaine !== '')
		valeurs['removeSiteNomDomaine'] = removeSiteNomDomaine;

	var setZookeeperVersion = $formulaireValeurs.find('.setZookeeperVersion').val();
	if(setZookeeperVersion != null && setZookeeperVersion !== '')
		valeurs['setZookeeperVersion'] = setZookeeperVersion;
	var addZookeeperVersion = $formulaireValeurs.find('.addZookeeperVersion').val();
	if(addZookeeperVersion != null && addZookeeperVersion !== '')
		valeurs['addZookeeperVersion'] = addZookeeperVersion;
	var removeZookeeperVersion = $formulaireValeurs.find('.removeZookeeperVersion').val();
	if(removeZookeeperVersion != null && removeZookeeperVersion !== '')
		valeurs['removeZookeeperVersion'] = removeZookeeperVersion;

	var setZookeeperPortAdmin = $formulaireValeurs.find('.setZookeeperPortAdmin').val();
	if(setZookeeperPortAdmin != null && setZookeeperPortAdmin !== '')
		valeurs['setZookeeperPortAdmin'] = parseInt(setZookeeperPortAdmin);
	var addZookeeperPortAdmin = $formulaireValeurs.find('.addZookeeperPortAdmin').val();
	if(addZookeeperPortAdmin != null && addZookeeperPortAdmin !== '')
		valeurs['addZookeeperPortAdmin'] = parseInt(addZookeeperPortAdmin);
	var removeZookeeperPortAdmin = $formulaireValeurs.find('.removeZookeeperPortAdmin').val();
	if(removeZookeeperPortAdmin != null && removeZookeeperPortAdmin !== '')
		valeurs['removeZookeeperPortAdmin'] = parseInt(removeZookeeperPortAdmin);

	var setZookeeperPortClient = $formulaireValeurs.find('.setZookeeperPortClient').val();
	if(setZookeeperPortClient != null && setZookeeperPortClient !== '')
		valeurs['setZookeeperPortClient'] = parseInt(setZookeeperPortClient);
	var addZookeeperPortClient = $formulaireValeurs.find('.addZookeeperPortClient').val();
	if(addZookeeperPortClient != null && addZookeeperPortClient !== '')
		valeurs['addZookeeperPortClient'] = parseInt(addZookeeperPortClient);
	var removeZookeeperPortClient = $formulaireValeurs.find('.removeZookeeperPortClient').val();
	if(removeZookeeperPortClient != null && removeZookeeperPortClient !== '')
		valeurs['removeZookeeperPortClient'] = parseInt(removeZookeeperPortClient);

	var setSolrVersion = $formulaireValeurs.find('.setSolrVersion').val();
	if(setSolrVersion != null && setSolrVersion !== '')
		valeurs['setSolrVersion'] = setSolrVersion;
	var addSolrVersion = $formulaireValeurs.find('.addSolrVersion').val();
	if(addSolrVersion != null && addSolrVersion !== '')
		valeurs['addSolrVersion'] = addSolrVersion;
	var removeSolrVersion = $formulaireValeurs.find('.removeSolrVersion').val();
	if(removeSolrVersion != null && removeSolrVersion !== '')
		valeurs['removeSolrVersion'] = removeSolrVersion;

	var setSolrPortClient = $formulaireValeurs.find('.setSolrPortClient').val();
	if(setSolrPortClient != null && setSolrPortClient !== '')
		valeurs['setSolrPortClient'] = parseInt(setSolrPortClient);
	var addSolrPortClient = $formulaireValeurs.find('.addSolrPortClient').val();
	if(addSolrPortClient != null && addSolrPortClient !== '')
		valeurs['addSolrPortClient'] = parseInt(addSolrPortClient);
	var removeSolrPortClient = $formulaireValeurs.find('.removeSolrPortClient').val();
	if(removeSolrPortClient != null && removeSolrPortClient !== '')
		valeurs['removeSolrPortClient'] = parseInt(removeSolrPortClient);

	var setSolrConfigset = $formulaireValeurs.find('.setSolrConfigset').val();
	if(setSolrConfigset != null && setSolrConfigset !== '')
		valeurs['setSolrConfigset'] = setSolrConfigset;
	var addSolrConfigset = $formulaireValeurs.find('.addSolrConfigset').val();
	if(addSolrConfigset != null && addSolrConfigset !== '')
		valeurs['addSolrConfigset'] = addSolrConfigset;
	var removeSolrConfigset = $formulaireValeurs.find('.removeSolrConfigset').val();
	if(removeSolrConfigset != null && removeSolrConfigset !== '')
		valeurs['removeSolrConfigset'] = removeSolrConfigset;

	var setSolrCollection = $formulaireValeurs.find('.setSolrCollection').val();
	if(setSolrCollection != null && setSolrCollection !== '')
		valeurs['setSolrCollection'] = setSolrCollection;
	var addSolrCollection = $formulaireValeurs.find('.addSolrCollection').val();
	if(addSolrCollection != null && addSolrCollection !== '')
		valeurs['addSolrCollection'] = addSolrCollection;
	var removeSolrCollection = $formulaireValeurs.find('.removeSolrCollection').val();
	if(removeSolrCollection != null && removeSolrCollection !== '')
		valeurs['removeSolrCollection'] = removeSolrCollection;

	$.ajax({
		url: '/api/site/utilisateur?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(valeurs)
		, success: function( data, textStatus, jQxhr ) {
			$.ajax({
				url: window.location.href
				, dataType: 'html'
				, type: 'GET'
				, contentType: 'text/html;charset=UTF-8'
				, success: function( data, textStatus, jQxhr ) {
					$.each( valeurs, function( key, value ) {
						$formulaireValeurs.find('.' + key).removeClass('lueurErreur');
						$formulaireValeurs.find('.' + key).addClass('lueurSucces');
					});
					var wrapper = document.createElement('div');
					wrapper.innerHTML = data;
					var $con = $(wrapper);
					$('#sitePersonnaliser').empty().append($con.find('#sitePersonnaliser'))
				}
				, error: function( jqXhr, textStatus, errorThrown ) {
					$.each( valeurs, function( key, value ) {
						$formulaireValeurs.find('.' + key).removeClass('lueurSucces');
						$formulaireValeurs.find('.' + key).addClass('lueurErreur');
					});
				}
			});


		}
		, error: function( jqXhr, textStatus, errorThrown ) {
			$.each( valeurs, function( key, value ) {
				$formulaireValeurs.find('.' + key).removeClass('lueurSucces');
				$formulaireValeurs.find('.' + key).addClass('lueurErreur');
			});
		}
	});
}

/**
 * Modifier un ou plusiers  sans valuers qui change, 
 * ou changer des valeurs pour un ou plusiers . 
 * @param params: [ "q=*:*", "fq=pk:1", "sort=pk asc", "rows=1", "fl=pk" ]
 *        Une liste des opérations de recherche sur des  
 *        pour rechercher "q=*:*", filtrer "fq=pk:1", trier "sort=pk desc", 
 *        limiter les résultats "rows=1", ou limiter les valeurs "fl=pk". 
 * @param valeurs Noms des champs et valeurs à changer selon les filtres fq. 
 *           Example: { pk: 1 }
 */
function patchClusterBase($formulaireFiltres, $formulaireValeurs) {
	var filtres = [];

	var valeurs = {};

	$.ajax({
		url: '/api/cluster?' + $.param(filtres)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(valeurs)
		, success: function( data, textStatus, jQxhr ) {
			$.each( valeurs, function( key, value ) {
				$formulaireValeurs.find('.' + key).removeClass('lueurErreur');
				$formulaireValeurs.find('.' + key).addClass('lueurSucces');
			});
		}
		, error: function( jqXhr, textStatus, errorThrown ) {
			$.each( valeurs, function( key, value ) {
				$formulaireValeurs.find('.' + key).removeClass('lueurSucces');
				$formulaireValeurs.find('.' + key).addClass('lueurErreur');
			});
		}
	});
}

(function ($) {
	$.deparam = function (params, coerce) {
	  var obj = [],
	      coerce_types = { 'true': !0, 'false': !1, 'null': null };
	    
	  // Iterate over all name=value pairs.
	  $.each(params.replace(/\+/g, ' ').split('&'), function (j,v) {
	    var param = v.split('='),
	        key = decodeURIComponent(param[0]),
	        val,
	        cur = obj,
	        i = 0,
	          
	        // If key is more complex than 'foo', like 'a[]' or 'a[b][c]', split it
	        // into its component parts.
	        keys = key.split(']['),
	        keys_last = keys.length - 1;
	      
	    // Basic 'foo' style key.
	    keys_last = 0;
	    
	    // Are we dealing with a name=value pair, or just a name?
	    if (param.length === 2) {
	      val = decodeURIComponent(param[1]);
	        
	      // Coerce values.
	      if (coerce) {
	        val = val && !isNaN(val)              ? +val              // number
	            : val === 'undefined'             ? undefined         // undefined
	            : coerce_types[val] !== undefined ? coerce_types[val] // true, false, null
	            : val;                                                // string
	      }

	      // Simple key, even simpler rules, since only scalars and shallow
	      // arrays are allowed.

	      // val is a scalar.
	      obj.push({name: key, 'value': val});
	    } else if (key) {
	      // No value was defined, so set something meaningful.
	      obj.push({name: key, value: (coerce ? undefined : '')});
	    }
	  });
	    
	  return obj;
	};
	})(jQuery);
