
// POST //

function postFormPart($formValues, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			addGlow($formValues.next('button'));
			var url = data['pageUrl'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			addError($formValues.next('button'));
		};
	}

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted;

	var valueEnrollmentFormKey = $formValues.find('.valueEnrollmentFormKey').val();
	if(valueEnrollmentFormKey != null && valueEnrollmentFormKey !== '')
		vals['enrollmentFormKey'] = valueEnrollmentFormKey;

	var valueHtmlLink = $formValues.find('.valueHtmlLink').val();
	if(valueHtmlLink != null && valueHtmlLink !== '')
		vals['htmlLink'] = valueHtmlLink;

	var valueHtmlElement = $formValues.find('.valueHtmlElement').val();
	if(valueHtmlElement != null && valueHtmlElement !== '')
		vals['htmlElement'] = valueHtmlElement;

	var valueHtmlId = $formValues.find('.valueHtmlId').val();
	if(valueHtmlId != null && valueHtmlId !== '')
		vals['htmlId'] = valueHtmlId;

	var valueHtmlClasses = $formValues.find('.valueHtmlClasses').val();
	if(valueHtmlClasses != null && valueHtmlClasses !== '')
		vals['htmlClasses'] = valueHtmlClasses;

	var valueHtmlStyle = $formValues.find('.valueHtmlStyle').val();
	if(valueHtmlStyle != null && valueHtmlStyle !== '')
		vals['htmlStyle'] = valueHtmlStyle;

	var valueHtmlBefore = $formValues.find('.valueHtmlBefore').val();
	if(valueHtmlBefore != null && valueHtmlBefore !== '')
		vals['htmlBefore'] = valueHtmlBefore;

	var valueHtmlVar = $formValues.find('.valueHtmlVar').val();
	if(valueHtmlVar != null && valueHtmlVar !== '')
		vals['htmlVar'] = valueHtmlVar;

	var valueHtmlAfter = $formValues.find('.valueHtmlAfter').val();
	if(valueHtmlAfter != null && valueHtmlAfter !== '')
		vals['htmlAfter'] = valueHtmlAfter;

	var valueHtmlText = $formValues.find('.valueHtmlText').val();
	if(valueHtmlText != null && valueHtmlText !== '')
		vals['htmlText'] = valueHtmlText;

	var valueSort1 = $formValues.find('.valueSort1').val();
	if(valueSort1 != null && valueSort1 !== '')
		vals['sort1'] = valueSort1;

	var valueSort2 = $formValues.find('.valueSort2').val();
	if(valueSort2 != null && valueSort2 !== '')
		vals['sort2'] = valueSort2;

	var valueSort3 = $formValues.find('.valueSort3').val();
	if(valueSort3 != null && valueSort3 !== '')
		vals['sort3'] = valueSort3;

	var valueSort4 = $formValues.find('.valueSort4').val();
	if(valueSort4 != null && valueSort4 !== '')
		vals['sort4'] = valueSort4;

	var valueSort5 = $formValues.find('.valueSort5').val();
	if(valueSort5 != null && valueSort5 !== '')
		vals['sort5'] = valueSort5;

	var valueSort6 = $formValues.find('.valueSort6').val();
	if(valueSort6 != null && valueSort6 !== '')
		vals['sort6'] = valueSort6;

	var valueSort7 = $formValues.find('.valueSort7').val();
	if(valueSort7 != null && valueSort7 !== '')
		vals['sort7'] = valueSort7;

	var valueSort8 = $formValues.find('.valueSort8').val();
	if(valueSort8 != null && valueSort8 !== '')
		vals['sort8'] = valueSort8;

	var valueSort9 = $formValues.find('.valueSort9').val();
	if(valueSort9 != null && valueSort9 !== '')
		vals['sort9'] = valueSort9;

	var valueSort10 = $formValues.find('.valueSort10').val();
	if(valueSort10 != null && valueSort10 !== '')
		vals['sort10'] = valueSort10;

	$.ajax({
		url: '/api/form-part'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postFormPartVals(vals, success, error) {
	$.ajax({
		url: '/api/form-part'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

function patchFormPart($formFilters, $formValues, success, error) {
	var filters = patchFormPartFilters($formFilters);

	var vals = {};

	var removePk = $formFilters.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	var addPk = $formValues.find('.addPk').val();
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var removeCreated = $formFilters.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	var addCreated = $formValues.find('.addCreated').val();
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var removeModified = $formFilters.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	var addModified = $formValues.find('.addModified').val();
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var removeObjectId = $formFilters.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	var addObjectId = $formValues.find('.addObjectId').val();
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var removeArchived = $formFilters.find('.removeArchived').val() === 'true';
	var setArchived = removeArchived ? null : $formValues.find('.setArchived').prop('checked');
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var removeDeleted = $formFilters.find('.removeDeleted').val() === 'true';
	var setDeleted = removeDeleted ? null : $formValues.find('.setDeleted').prop('checked');
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var removeEnrollmentFormKey = $formFilters.find('.removeEnrollmentFormKey').val() === 'true';
	var setEnrollmentFormKey = removeEnrollmentFormKey ? null : $formValues.find('.setEnrollmentFormKey').val();
	if(removeEnrollmentFormKey || setEnrollmentFormKey != null && setEnrollmentFormKey !== '')
		vals['setEnrollmentFormKey'] = setEnrollmentFormKey;
	var addEnrollmentFormKey = $formValues.find('.addEnrollmentFormKey').val();
	if(addEnrollmentFormKey != null && addEnrollmentFormKey !== '')
		vals['addEnrollmentFormKey'] = addEnrollmentFormKey;
	var removeEnrollmentFormKey = $formValues.find('.removeEnrollmentFormKey').val();
	if(removeEnrollmentFormKey != null && removeEnrollmentFormKey !== '')
		vals['removeEnrollmentFormKey'] = removeEnrollmentFormKey;

	var removeHtmlLink = $formFilters.find('.removeHtmlLink').val() === 'true';
	var setHtmlLink = removeHtmlLink ? null : $formValues.find('.setHtmlLink').val();
	if(removeHtmlLink || setHtmlLink != null && setHtmlLink !== '')
		vals['setHtmlLink'] = setHtmlLink;
	var addHtmlLink = $formValues.find('.addHtmlLink').val();
	if(addHtmlLink != null && addHtmlLink !== '')
		vals['addHtmlLink'] = addHtmlLink;
	var removeHtmlLink = $formValues.find('.removeHtmlLink').val();
	if(removeHtmlLink != null && removeHtmlLink !== '')
		vals['removeHtmlLink'] = removeHtmlLink;

	var removeHtmlElement = $formFilters.find('.removeHtmlElement').val() === 'true';
	var setHtmlElement = removeHtmlElement ? null : $formValues.find('.setHtmlElement').val();
	if(removeHtmlElement || setHtmlElement != null && setHtmlElement !== '')
		vals['setHtmlElement'] = setHtmlElement;
	var addHtmlElement = $formValues.find('.addHtmlElement').val();
	if(addHtmlElement != null && addHtmlElement !== '')
		vals['addHtmlElement'] = addHtmlElement;
	var removeHtmlElement = $formValues.find('.removeHtmlElement').val();
	if(removeHtmlElement != null && removeHtmlElement !== '')
		vals['removeHtmlElement'] = removeHtmlElement;

	var removeHtmlId = $formFilters.find('.removeHtmlId').val() === 'true';
	var setHtmlId = removeHtmlId ? null : $formValues.find('.setHtmlId').val();
	if(removeHtmlId || setHtmlId != null && setHtmlId !== '')
		vals['setHtmlId'] = setHtmlId;
	var addHtmlId = $formValues.find('.addHtmlId').val();
	if(addHtmlId != null && addHtmlId !== '')
		vals['addHtmlId'] = addHtmlId;
	var removeHtmlId = $formValues.find('.removeHtmlId').val();
	if(removeHtmlId != null && removeHtmlId !== '')
		vals['removeHtmlId'] = removeHtmlId;

	var removeHtmlClasses = $formFilters.find('.removeHtmlClasses').val() === 'true';
	var setHtmlClasses = removeHtmlClasses ? null : $formValues.find('.setHtmlClasses').val();
	if(removeHtmlClasses || setHtmlClasses != null && setHtmlClasses !== '')
		vals['setHtmlClasses'] = setHtmlClasses;
	var addHtmlClasses = $formValues.find('.addHtmlClasses').val();
	if(addHtmlClasses != null && addHtmlClasses !== '')
		vals['addHtmlClasses'] = addHtmlClasses;
	var removeHtmlClasses = $formValues.find('.removeHtmlClasses').val();
	if(removeHtmlClasses != null && removeHtmlClasses !== '')
		vals['removeHtmlClasses'] = removeHtmlClasses;

	var removeHtmlStyle = $formFilters.find('.removeHtmlStyle').val() === 'true';
	var setHtmlStyle = removeHtmlStyle ? null : $formValues.find('.setHtmlStyle').val();
	if(removeHtmlStyle || setHtmlStyle != null && setHtmlStyle !== '')
		vals['setHtmlStyle'] = setHtmlStyle;
	var addHtmlStyle = $formValues.find('.addHtmlStyle').val();
	if(addHtmlStyle != null && addHtmlStyle !== '')
		vals['addHtmlStyle'] = addHtmlStyle;
	var removeHtmlStyle = $formValues.find('.removeHtmlStyle').val();
	if(removeHtmlStyle != null && removeHtmlStyle !== '')
		vals['removeHtmlStyle'] = removeHtmlStyle;

	var removeHtmlBefore = $formFilters.find('.removeHtmlBefore').val() === 'true';
	var setHtmlBefore = removeHtmlBefore ? null : $formValues.find('.setHtmlBefore').val();
	if(removeHtmlBefore || setHtmlBefore != null && setHtmlBefore !== '')
		vals['setHtmlBefore'] = setHtmlBefore;
	var addHtmlBefore = $formValues.find('.addHtmlBefore').val();
	if(addHtmlBefore != null && addHtmlBefore !== '')
		vals['addHtmlBefore'] = addHtmlBefore;
	var removeHtmlBefore = $formValues.find('.removeHtmlBefore').val();
	if(removeHtmlBefore != null && removeHtmlBefore !== '')
		vals['removeHtmlBefore'] = removeHtmlBefore;

	var removeHtmlVar = $formFilters.find('.removeHtmlVar').val() === 'true';
	var setHtmlVar = removeHtmlVar ? null : $formValues.find('.setHtmlVar').val();
	if(removeHtmlVar || setHtmlVar != null && setHtmlVar !== '')
		vals['setHtmlVar'] = setHtmlVar;
	var addHtmlVar = $formValues.find('.addHtmlVar').val();
	if(addHtmlVar != null && addHtmlVar !== '')
		vals['addHtmlVar'] = addHtmlVar;
	var removeHtmlVar = $formValues.find('.removeHtmlVar').val();
	if(removeHtmlVar != null && removeHtmlVar !== '')
		vals['removeHtmlVar'] = removeHtmlVar;

	var removeHtmlAfter = $formFilters.find('.removeHtmlAfter').val() === 'true';
	var setHtmlAfter = removeHtmlAfter ? null : $formValues.find('.setHtmlAfter').val();
	if(removeHtmlAfter || setHtmlAfter != null && setHtmlAfter !== '')
		vals['setHtmlAfter'] = setHtmlAfter;
	var addHtmlAfter = $formValues.find('.addHtmlAfter').val();
	if(addHtmlAfter != null && addHtmlAfter !== '')
		vals['addHtmlAfter'] = addHtmlAfter;
	var removeHtmlAfter = $formValues.find('.removeHtmlAfter').val();
	if(removeHtmlAfter != null && removeHtmlAfter !== '')
		vals['removeHtmlAfter'] = removeHtmlAfter;

	var removeHtmlText = $formFilters.find('.removeHtmlText').val() === 'true';
	var setHtmlText = removeHtmlText ? null : $formValues.find('.setHtmlText').val();
	if(removeHtmlText || setHtmlText != null && setHtmlText !== '')
		vals['setHtmlText'] = setHtmlText;
	var addHtmlText = $formValues.find('.addHtmlText').val();
	if(addHtmlText != null && addHtmlText !== '')
		vals['addHtmlText'] = addHtmlText;
	var removeHtmlText = $formValues.find('.removeHtmlText').val();
	if(removeHtmlText != null && removeHtmlText !== '')
		vals['removeHtmlText'] = removeHtmlText;

	var removeSort1 = $formFilters.find('.removeSort1').val() === 'true';
	var setSort1 = removeSort1 ? null : $formValues.find('.setSort1').val();
	if(removeSort1 || setSort1 != null && setSort1 !== '')
		vals['setSort1'] = setSort1;
	var addSort1 = $formValues.find('.addSort1').val();
	if(addSort1 != null && addSort1 !== '')
		vals['addSort1'] = addSort1;
	var removeSort1 = $formValues.find('.removeSort1').val();
	if(removeSort1 != null && removeSort1 !== '')
		vals['removeSort1'] = removeSort1;

	var removeSort2 = $formFilters.find('.removeSort2').val() === 'true';
	var setSort2 = removeSort2 ? null : $formValues.find('.setSort2').val();
	if(removeSort2 || setSort2 != null && setSort2 !== '')
		vals['setSort2'] = setSort2;
	var addSort2 = $formValues.find('.addSort2').val();
	if(addSort2 != null && addSort2 !== '')
		vals['addSort2'] = addSort2;
	var removeSort2 = $formValues.find('.removeSort2').val();
	if(removeSort2 != null && removeSort2 !== '')
		vals['removeSort2'] = removeSort2;

	var removeSort3 = $formFilters.find('.removeSort3').val() === 'true';
	var setSort3 = removeSort3 ? null : $formValues.find('.setSort3').val();
	if(removeSort3 || setSort3 != null && setSort3 !== '')
		vals['setSort3'] = setSort3;
	var addSort3 = $formValues.find('.addSort3').val();
	if(addSort3 != null && addSort3 !== '')
		vals['addSort3'] = addSort3;
	var removeSort3 = $formValues.find('.removeSort3').val();
	if(removeSort3 != null && removeSort3 !== '')
		vals['removeSort3'] = removeSort3;

	var removeSort4 = $formFilters.find('.removeSort4').val() === 'true';
	var setSort4 = removeSort4 ? null : $formValues.find('.setSort4').val();
	if(removeSort4 || setSort4 != null && setSort4 !== '')
		vals['setSort4'] = setSort4;
	var addSort4 = $formValues.find('.addSort4').val();
	if(addSort4 != null && addSort4 !== '')
		vals['addSort4'] = addSort4;
	var removeSort4 = $formValues.find('.removeSort4').val();
	if(removeSort4 != null && removeSort4 !== '')
		vals['removeSort4'] = removeSort4;

	var removeSort5 = $formFilters.find('.removeSort5').val() === 'true';
	var setSort5 = removeSort5 ? null : $formValues.find('.setSort5').val();
	if(removeSort5 || setSort5 != null && setSort5 !== '')
		vals['setSort5'] = setSort5;
	var addSort5 = $formValues.find('.addSort5').val();
	if(addSort5 != null && addSort5 !== '')
		vals['addSort5'] = addSort5;
	var removeSort5 = $formValues.find('.removeSort5').val();
	if(removeSort5 != null && removeSort5 !== '')
		vals['removeSort5'] = removeSort5;

	var removeSort6 = $formFilters.find('.removeSort6').val() === 'true';
	var setSort6 = removeSort6 ? null : $formValues.find('.setSort6').val();
	if(removeSort6 || setSort6 != null && setSort6 !== '')
		vals['setSort6'] = setSort6;
	var addSort6 = $formValues.find('.addSort6').val();
	if(addSort6 != null && addSort6 !== '')
		vals['addSort6'] = addSort6;
	var removeSort6 = $formValues.find('.removeSort6').val();
	if(removeSort6 != null && removeSort6 !== '')
		vals['removeSort6'] = removeSort6;

	var removeSort7 = $formFilters.find('.removeSort7').val() === 'true';
	var setSort7 = removeSort7 ? null : $formValues.find('.setSort7').val();
	if(removeSort7 || setSort7 != null && setSort7 !== '')
		vals['setSort7'] = setSort7;
	var addSort7 = $formValues.find('.addSort7').val();
	if(addSort7 != null && addSort7 !== '')
		vals['addSort7'] = addSort7;
	var removeSort7 = $formValues.find('.removeSort7').val();
	if(removeSort7 != null && removeSort7 !== '')
		vals['removeSort7'] = removeSort7;

	var removeSort8 = $formFilters.find('.removeSort8').val() === 'true';
	var setSort8 = removeSort8 ? null : $formValues.find('.setSort8').val();
	if(removeSort8 || setSort8 != null && setSort8 !== '')
		vals['setSort8'] = setSort8;
	var addSort8 = $formValues.find('.addSort8').val();
	if(addSort8 != null && addSort8 !== '')
		vals['addSort8'] = addSort8;
	var removeSort8 = $formValues.find('.removeSort8').val();
	if(removeSort8 != null && removeSort8 !== '')
		vals['removeSort8'] = removeSort8;

	var removeSort9 = $formFilters.find('.removeSort9').val() === 'true';
	var setSort9 = removeSort9 ? null : $formValues.find('.setSort9').val();
	if(removeSort9 || setSort9 != null && setSort9 !== '')
		vals['setSort9'] = setSort9;
	var addSort9 = $formValues.find('.addSort9').val();
	if(addSort9 != null && addSort9 !== '')
		vals['addSort9'] = addSort9;
	var removeSort9 = $formValues.find('.removeSort9').val();
	if(removeSort9 != null && removeSort9 !== '')
		vals['removeSort9'] = removeSort9;

	var removeSort10 = $formFilters.find('.removeSort10').val() === 'true';
	var setSort10 = removeSort10 ? null : $formValues.find('.setSort10').val();
	if(removeSort10 || setSort10 != null && setSort10 !== '')
		vals['setSort10'] = setSort10;
	var addSort10 = $formValues.find('.addSort10').val();
	if(addSort10 != null && addSort10 !== '')
		vals['addSort10'] = addSort10;
	var removeSort10 = $formValues.find('.removeSort10').val();
	if(removeSort10 != null && removeSort10 !== '')
		vals['removeSort10'] = removeSort10;

	patchFormPartVals(filters, vals, success, error);
}

function patchFormPartFilters($formFilters) {
	var filters = [];

	var filterPk = $formFilters.find('.valuePk').val();
	if(filterPk != null && filterPk !== '')
		filters.push({ name: 'fq', value: 'pk:' + filterPk });

	var filterCreated = $formFilters.find('.valueCreated').val();
	if(filterCreated != null && filterCreated !== '')
		filters.push({ name: 'fq', value: 'created:' + filterCreated });

	var filterModified = $formFilters.find('.valueModified').val();
	if(filterModified != null && filterModified !== '')
		filters.push({ name: 'fq', value: 'modified:' + filterModified });

	var filterObjectId = $formFilters.find('.valueObjectId').val();
	if(filterObjectId != null && filterObjectId !== '')
		filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

	var filterArchived = $formFilters.find('.valueArchived').prop('checked');
	if(filterArchived != null && filterArchived === true)
		filters.push({ name: 'fq', value: 'archived:' + filterArchived });

	var filterDeleted = $formFilters.find('.valueDeleted').prop('checked');
	if(filterDeleted != null && filterDeleted === true)
		filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

	var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
	if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
		filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

	var filterId = $formFilters.find('.valueId').val();
	if(filterId != null && filterId !== '')
		filters.push({ name: 'fq', value: 'id:' + filterId });

	var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
	if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
		filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

	var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
	if(filterClassSimpleName != null && filterClassSimpleName !== '')
		filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

	var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
	if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
		filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

	var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
	if(filterObjectTitle != null && filterObjectTitle !== '')
		filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterFormPartKey = $formFilters.find('.valueFormPartKey').val();
	if(filterFormPartKey != null && filterFormPartKey !== '')
		filters.push({ name: 'fq', value: 'formPartKey:' + filterFormPartKey });
	return filters;
}

function patchFormPartVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchFormPartVals(filters, vals, success, error);
}

function patchFormPartVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/form-part?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

function getFormPart(pk) {
	$.ajax({
		url: '/api/form-part/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// DELETE //

function deleteFormPart(pk) {
	$.ajax({
		url: '/api/form-part/' + id
		, dataType: 'json'
		, type: 'DELETE'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// Search //

function searchFormPart($formFilters, success, error) {
	var filters = searchFormPartFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchFormPartVals(filters, success, error);
}

function searchFormPartFilters($formFilters) {
	var filters = [];

	var filterPk = $formFilters.find('.valuePk').val();
	if(filterPk != null && filterPk !== '')
		filters.push({ name: 'fq', value: 'pk:' + filterPk });

	var filterCreated = $formFilters.find('.valueCreated').val();
	if(filterCreated != null && filterCreated !== '')
		filters.push({ name: 'fq', value: 'created:' + filterCreated });

	var filterModified = $formFilters.find('.valueModified').val();
	if(filterModified != null && filterModified !== '')
		filters.push({ name: 'fq', value: 'modified:' + filterModified });

	var filterObjectId = $formFilters.find('.valueObjectId').val();
	if(filterObjectId != null && filterObjectId !== '')
		filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

	var filterArchived = $formFilters.find('.valueArchived').prop('checked');
	if(filterArchived != null && filterArchived === true)
		filters.push({ name: 'fq', value: 'archived:' + filterArchived });

	var filterDeleted = $formFilters.find('.valueDeleted').prop('checked');
	if(filterDeleted != null && filterDeleted === true)
		filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

	var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
	if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
		filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

	var filterId = $formFilters.find('.valueId').val();
	if(filterId != null && filterId !== '')
		filters.push({ name: 'fq', value: 'id:' + filterId });

	var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
	if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
		filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

	var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
	if(filterClassSimpleName != null && filterClassSimpleName !== '')
		filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

	var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
	if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
		filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

	var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
	if(filterObjectTitle != null && filterObjectTitle !== '')
		filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

	var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
	if(filterObjectSuggest != null && filterObjectSuggest !== '')
		filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

	var filterPageUrl = $formFilters.find('.valuePageUrl').val();
	if(filterPageUrl != null && filterPageUrl !== '')
		filters.push({ name: 'fq', value: 'pageUrl:' + filterPageUrl });

	var filterFormPartKey = $formFilters.find('.valueFormPartKey').val();
	if(filterFormPartKey != null && filterFormPartKey !== '')
		filters.push({ name: 'fq', value: 'formPartKey:' + filterFormPartKey });
	return filters;
}

function searchFormPartVals(filters, success, error) {
	$.ajax({
		url: '/api/form-part?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestFormPartObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-sun w3-padding-small ');
			var $span = $('<span>').attr('class', '').text();
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrl']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchFormPartVals($formFilters, success, error);
}
