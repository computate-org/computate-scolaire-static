
// POST //

async function postPageDesign($formValues, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			addGlow($formValues.next('button'));
			var url = data['pageUrlPk'];
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

	var valuePageDesignCompleteName = $formValues.find('.valuePageDesignCompleteName').val();
	if(valuePageDesignCompleteName != null && valuePageDesignCompleteName !== '')
		vals['pageDesignCompleteName'] = valuePageDesignCompleteName;

	var valueDesignHidden = $formValues.find('.valueDesignHidden').prop('checked');
	if(valueDesignHidden != null && valueDesignHidden !== '')
		vals['designHidden'] = valueDesignHidden;

	var valueHtmlPartKeys = $formValues.find('input.valueHtmlPartKeys:checked').val();
	if(valueHtmlPartKeys != null && valueHtmlPartKeys !== '')
		vals['htmlPartKeys'] = valueHtmlPartKeys;

	var valueParentDesignKeys = $formValues.find('input.valueParentDesignKeys:checked').val();
	if(valueParentDesignKeys != null && valueParentDesignKeys !== '')
		vals['parentDesignKeys'] = valueParentDesignKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	$.ajax({
		url: '/api/page-design'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postPageDesignVals(vals, success, error) {
	$.ajax({
		url: '/api/page-design'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportPageDesign($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportPageDesignVals(JSON.parse(json), success, error);
}

function putimportPageDesignVals(json, success, error) {
	$.ajax({
		url: '/api/page-design/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergePageDesign($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergePageDesignVals(JSON.parse(json), success, error);
}

function putmergePageDesignVals(json, success, error) {
	$.ajax({
		url: '/api/page-design/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopyPageDesign($formValues, pk, success, error) {
	var vals = {};

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

	var valuePageDesignCompleteName = $formValues.find('.valuePageDesignCompleteName').val();
	if(valuePageDesignCompleteName != null && valuePageDesignCompleteName !== '')
		vals['pageDesignCompleteName'] = valuePageDesignCompleteName;

	var valueDesignHidden = $formValues.find('.valueDesignHidden').prop('checked');
	if(valueDesignHidden != null && valueDesignHidden !== '')
		vals['designHidden'] = valueDesignHidden;

	var valueHtmlPartKeys = $formValues.find('input.valueHtmlPartKeys:checked').val();
	if(valueHtmlPartKeys != null && valueHtmlPartKeys !== '')
		vals['htmlPartKeys'] = [valueHtmlPartKeys];

	var valueParentDesignKeys = $formValues.find('input.valueParentDesignKeys:checked').val();
	if(valueParentDesignKeys != null && valueParentDesignKeys !== '')
		vals['parentDesignKeys'] = [valueParentDesignKeys];

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	putcopyPageDesignVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopyPageDesignVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/page-design/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchPageDesign($formFilters, $formValues, pk, success, error) {
	var filters = patchPageDesignFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
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

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
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

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
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

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
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

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
	var removeArchived = $formFilters.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	var valueArchived = null;
	if(valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	setArchived = removeArchived ? null : valueArchived;
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
	var removeDeleted = $formFilters.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	var valueDeleted = null;
	if(valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	setDeleted = removeDeleted ? null : valueDeleted;
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valuePageDesignCompleteName = $formValues.find('.valuePageDesignCompleteName').val();
	if(valuePageDesignCompleteName != null && valuePageDesignCompleteName !== '')
	var removePageDesignCompleteName = $formFilters.find('.removePageDesignCompleteName').val() === 'true';
	var setPageDesignCompleteName = removePageDesignCompleteName ? null : $formValues.find('.setPageDesignCompleteName').val();
	if(removePageDesignCompleteName || setPageDesignCompleteName != null && setPageDesignCompleteName !== '')
		vals['setPageDesignCompleteName'] = setPageDesignCompleteName;
	var addPageDesignCompleteName = $formValues.find('.addPageDesignCompleteName').val();
	if(addPageDesignCompleteName != null && addPageDesignCompleteName !== '')
		vals['addPageDesignCompleteName'] = addPageDesignCompleteName;
	var removePageDesignCompleteName = $formValues.find('.removePageDesignCompleteName').val();
	if(removePageDesignCompleteName != null && removePageDesignCompleteName !== '')
		vals['removePageDesignCompleteName'] = removePageDesignCompleteName;

	var valueDesignHidden = $formValues.find('.valueDesignHidden').prop('checked');
	if(valueDesignHidden != null && valueDesignHidden !== '')
	var removeDesignHidden = $formFilters.find('.removeDesignHidden').val() === 'true';
	var valueDesignHiddenSelectVal = $formValues.find('select.setDesignHidden').val();
	var valueDesignHidden = null;
	if(valueDesignHiddenSelectVal !== '')
		valueDesignHidden = valueDesignHiddenSelectVal == 'true';
	setDesignHidden = removeDesignHidden ? null : valueDesignHidden;
	if(removeDesignHidden || setDesignHidden != null && setDesignHidden !== '')
		vals['setDesignHidden'] = setDesignHidden;
	var addDesignHidden = $formValues.find('.addDesignHidden').prop('checked');
	if(addDesignHidden != null && addDesignHidden !== '')
		vals['addDesignHidden'] = addDesignHidden;
	var removeDesignHidden = $formValues.find('.removeDesignHidden').prop('checked');
	if(removeDesignHidden != null && removeDesignHidden !== '')
		vals['removeDesignHidden'] = removeDesignHidden;

	var valueHtmlPartKeys = $formValues.find('input.valueHtmlPartKeys:checked').val();
	if(valueHtmlPartKeys != null && valueHtmlPartKeys !== '')
		vals['addHtmlPartKeys'] = valueHtmlPartKeys;

	var valueParentDesignKeys = $formValues.find('input.valueParentDesignKeys:checked').val();
	if(valueParentDesignKeys != null && valueParentDesignKeys !== '')
		vals['addParentDesignKeys'] = valueParentDesignKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
	var removeInheritPk = $formFilters.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
	var removeObjectTitle = $formFilters.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	patchPageDesignVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchPageDesignFilters($formFilters) {
	var filters = [];
	if($formFilters) {

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

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterPageDesignCompleteName = $formFilters.find('.valuePageDesignCompleteName').val();
		if(filterPageDesignCompleteName != null && filterPageDesignCompleteName !== '')
			filters.push({ name: 'fq', value: 'pageDesignCompleteName:' + filterPageDesignCompleteName });

		var $filterDesignHiddenCheckbox = $formFilters.find('input.valueDesignHidden[type = "checkbox"]');
		var $filterDesignHiddenSelect = $formFilters.find('select.valueDesignHidden');
		var filterDesignHidden = $filterDesignHiddenSelect.length ? $filterDesignHiddenSelect.val() : $filterDesignHiddenCheckbox.prop('checked');
		var filterDesignHiddenSelectVal = $formFilters.find('select.filterDesignHidden').val();
		var filterDesignHidden = null;
		if(filterDesignHiddenSelectVal !== '')
			filterDesignHidden = filterDesignHiddenSelectVal == 'true';
		if(filterDesignHidden != null && filterDesignHidden === true)
			filters.push({ name: 'fq', value: 'designHidden:' + filterDesignHidden });

		var filterHtmlPartKeys = $formFilters.find('.valueHtmlPartKeys').val();
		if(filterHtmlPartKeys != null && filterHtmlPartKeys !== '')
			filters.push({ name: 'fq', value: 'htmlPartKeys:' + filterHtmlPartKeys });

		var filterParentDesignKeys = $formFilters.find('.valueParentDesignKeys').val();
		if(filterParentDesignKeys != null && filterParentDesignKeys !== '')
			filters.push({ name: 'fq', value: 'parentDesignKeys:' + filterParentDesignKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

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

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageDesignKey = $formFilters.find('.valuePageDesignKey').val();
		if(filterPageDesignKey != null && filterPageDesignKey !== '')
			filters.push({ name: 'fq', value: 'pageDesignKey:' + filterPageDesignKey });

		var filterChildDesignKeys = $formFilters.find('.valueChildDesignKeys').val();
		if(filterChildDesignKeys != null && filterChildDesignKeys !== '')
			filters.push({ name: 'fq', value: 'childDesignKeys:' + filterChildDesignKeys });
	}
	return filters;
}

function patchPageDesignVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchPageDesignVals(filters, vals, success, error);
}

function patchPageDesignVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/page-design?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getPageDesign(pk) {
	$.ajax({
		url: '/api/page-design/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchPageDesign($formFilters, success, error) {
	var filters = searchPageDesignFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchPageDesignVals(filters, success, error);
}

function searchPageDesignFilters($formFilters) {
	var filters = [];
	if($formFilters) {

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

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterPageDesignCompleteName = $formFilters.find('.valuePageDesignCompleteName').val();
		if(filterPageDesignCompleteName != null && filterPageDesignCompleteName !== '')
			filters.push({ name: 'fq', value: 'pageDesignCompleteName:' + filterPageDesignCompleteName });

		var $filterDesignHiddenCheckbox = $formFilters.find('input.valueDesignHidden[type = "checkbox"]');
		var $filterDesignHiddenSelect = $formFilters.find('select.valueDesignHidden');
		var filterDesignHidden = $filterDesignHiddenSelect.length ? $filterDesignHiddenSelect.val() : $filterDesignHiddenCheckbox.prop('checked');
		var filterDesignHiddenSelectVal = $formFilters.find('select.filterDesignHidden').val();
		var filterDesignHidden = null;
		if(filterDesignHiddenSelectVal !== '')
			filterDesignHidden = filterDesignHiddenSelectVal == 'true';
		if(filterDesignHidden != null && filterDesignHidden === true)
			filters.push({ name: 'fq', value: 'designHidden:' + filterDesignHidden });

		var filterHtmlPartKeys = $formFilters.find('.valueHtmlPartKeys').val();
		if(filterHtmlPartKeys != null && filterHtmlPartKeys !== '')
			filters.push({ name: 'fq', value: 'htmlPartKeys:' + filterHtmlPartKeys });

		var filterParentDesignKeys = $formFilters.find('.valueParentDesignKeys').val();
		if(filterParentDesignKeys != null && filterParentDesignKeys !== '')
			filters.push({ name: 'fq', value: 'parentDesignKeys:' + filterParentDesignKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

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

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageDesignKey = $formFilters.find('.valuePageDesignKey').val();
		if(filterPageDesignKey != null && filterPageDesignKey !== '')
			filters.push({ name: 'fq', value: 'pageDesignKey:' + filterPageDesignKey });

		var filterChildDesignKeys = $formFilters.find('.valueChildDesignKeys').val();
		if(filterChildDesignKeys != null && filterChildDesignKeys !== '')
			filters.push({ name: 'fq', value: 'childDesignKeys:' + filterChildDesignKeys });
	}
	return filters;
}

function searchPageDesignVals(filters, success, error) {

	filters.push({ name: 'rows', value: 100 });
	$.ajax({
		url: '/api/page-design?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestPageDesignObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-drafting-compass ');
			var $span = $('<span>').attr('class', '').text(o['pageDesignCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchPageDesignVals($formFilters, success, error);
}

function suggestPageDesignChildDesignKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-drafting-compass ');
			var $span = $('<span>').attr('class', '').text(o['pageDesignCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['parentDesignKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_childDesignKeys_' + pk + '_parentDesignKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueChildDesignKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_childDesignKeys_" + pk + "_parentDesignKeys_" + o['pk'] + "'); patchPageDesignVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'ChildDesignKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#PageDesignForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchPageDesignVals(filters, success, error);
}

function suggestPageDesignParentDesignKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-drafting-compass ');
			var $span = $('<span>').attr('class', '').text(o['pageDesignCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['childDesignKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_parentDesignKeys_' + pk + '_childDesignKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueParentDesignKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_parentDesignKeys_" + pk + "_childDesignKeys_" + o['pk'] + "'); patchPageDesignVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'ParentDesignKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#PageDesignForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchPageDesignVals(filters, success, error);
}

function suggestPageDesignHtmlPartKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-sun ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['pageDesignKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_htmlPartKeys_' + pk + '_pageDesignKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueHtmlPartKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_htmlPartKeys_" + pk + "_pageDesignKeys_" + o['pk'] + "'); patchPageDesignVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'HtmlPartKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			var sort1 = o['sort1'];
			var sort2 = o['sort2'];
			var sort3 = o['sort3'];
			var sort4 = o['sort4'];
			var sort5 = o['sort5'];
			var sort6 = o['sort6'];
			var sort7 = o['sort7'];
			var sort8 = o['sort8'];
			var sort9 = o['sort9'];
			var sort10 = o['sort10'];

			$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
			var $sortInput = $('<input>')
			$sortInput.attr('class', 'w3-tiny ');
			$sortInput.attr('style', 'width: 4em; ');
			$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort1");
			$sortInput.attr('value', sort1).attr('onchange', 
				"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
				+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort1']: $(this).val() ? $(this).val() : null }"
					+ ", function() { "
					+ "}"
					+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort1')); }"
					+ " ); "); 
			$sort.append($sortInput);
			$li.append($sort);

			if(sort1 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort2");
				$sortInput.attr('value', sort2).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort2']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort2')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort2 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort3");
				$sortInput.attr('value', sort3).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort3']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort3')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort3 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort4");
				$sortInput.attr('value', sort4).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort4']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort4')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort4 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort5");
				$sortInput.attr('value', sort5).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort5']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort5')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort5 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort6");
				$sortInput.attr('value', sort6).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort6']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort6')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort6 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort7");
				$sortInput.attr('value', sort7).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort7']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort7')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort7 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort8");
				$sortInput.attr('value', sort8).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort8']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort8')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort8 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort9");
				$sortInput.attr('value', sort9).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort9']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort9')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}

			if(sort9 != null) {
				$sort = $('<span>').attr('class', 'w3-text-grey ').attr('style', 'padding-right: 8px; ');
				var $sortInput = $('<input>')
				$sortInput.attr('class', 'w3-tiny ');
				$sortInput.attr('style', 'width: 4em; ');
				$sortInput.attr('id', "attribute_" + o['pk'] + "_sort_sort10");
				$sortInput.attr('value', sort10).attr('onchange', 
					"$('#PageDesignForm :input[name=\"focusId\"]').val($(this).attr('id')); "
					+ "patchHtmlPartVals([{ name: 'fq', value: 'pk:" + o['pk'] + "' }], { ['setSort10']: $(this).val() ? $(this).val() : null }"
						+ ", function() { "
						+ "}"
						+ ", function() { addError($('#attribute_" + o['pk'] + "_sort_sort10')); }"
						+ " ); "); 
				$sort.append($sortInput);
				$li.append($sort);
			}
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#PageDesignForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchHtmlPartVals(filters, success, error);
}

async function websocketPageDesign(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketPageDesign', function (error, message) {
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
			var $headerSpan = $('<span>').attr('class', '').text('modify page designs');
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

		window.eventBus.registerHandler('websocketPageDesign', function (error, message) {
			$('#Page_childDesignKeys').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketPageDesign', function (error, message) {
			$('#Page_parentDesignKeys').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketHtmlPart', function (error, message) {
			$('#Page_htmlPartKeys').trigger('oninput');
		});
	}
}
async function websocketPageDesignInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchPageDesignVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('created')) {
				$('.inputPageDesign' + pk + 'Created').val(o['created']);
				$('.varPageDesign' + pk + 'Created').text(o['created']);
			}
			if(vars.includes('modified')) {
				$('.inputPageDesign' + pk + 'Modified').val(o['modified']);
				$('.varPageDesign' + pk + 'Modified').text(o['modified']);
			}
			if(vars.includes('archived')) {
				$('.inputPageDesign' + pk + 'Archived').val(o['archived']);
				$('.varPageDesign' + pk + 'Archived').text(o['archived']);
			}
			if(vars.includes('deleted')) {
				$('.inputPageDesign' + pk + 'Deleted').val(o['deleted']);
				$('.varPageDesign' + pk + 'Deleted').text(o['deleted']);
			}
			if(vars.includes('pageDesignCompleteName')) {
				$('.inputPageDesign' + pk + 'PageDesignCompleteName').val(o['pageDesignCompleteName']);
				$('.varPageDesign' + pk + 'PageDesignCompleteName').text(o['pageDesignCompleteName']);
			}
			if(vars.includes('designHidden')) {
				$('.inputPageDesign' + pk + 'DesignHidden').val(o['designHidden']);
				$('.varPageDesign' + pk + 'DesignHidden').text(o['designHidden']);
			}
			if(vars.includes('htmlPartKeys')) {
				$('.inputPageDesign' + pk + 'HtmlPartKeys').val(o['htmlPartKeys']);
				$('.varPageDesign' + pk + 'HtmlPartKeys').text(o['htmlPartKeys']);
			}
			if(vars.includes('parentDesignKeys')) {
				$('.inputPageDesign' + pk + 'ParentDesignKeys').val(o['parentDesignKeys']);
				$('.varPageDesign' + pk + 'ParentDesignKeys').text(o['parentDesignKeys']);
			}
			if(vars.includes('inheritPk')) {
				$('.inputPageDesign' + pk + 'InheritPk').val(o['inheritPk']);
				$('.varPageDesign' + pk + 'InheritPk').text(o['inheritPk']);
			}
			if(vars.includes('childDesignKeys')) {
				$('.inputPageDesign' + pk + 'ChildDesignKeys').val(o['childDesignKeys']);
				$('.varPageDesign' + pk + 'ChildDesignKeys').text(o['childDesignKeys']);
			}
		});
	}
}
