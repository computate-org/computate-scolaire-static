
// POST //

async function postSchoolReceipt($formValues, success, error) {
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

	var valuePaymentDate = $formValues.find('.valuePaymentDate').val();
	if(valuePaymentDate != null && valuePaymentDate !== '')
		vals['paymentDate'] = valuePaymentDate;

	var valuePaymentAmount = $formValues.find('.valuePaymentAmount').val();
	if(valuePaymentAmount != null && valuePaymentAmount !== '')
		vals['paymentAmount'] = valuePaymentAmount;

	var valueSchoolKey = $formValues.find('.valueSchoolKey').val();
	if(valueSchoolKey != null && valueSchoolKey !== '')
		vals['schoolKey'] = valueSchoolKey;

	var valuePaymentDescription = $formValues.find('.valuePaymentDescription').val();
	if(valuePaymentDescription != null && valuePaymentDescription !== '')
		vals['paymentDescription'] = valuePaymentDescription;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
		vals['sessionId'] = valueSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valuePaymentShortName = $formValues.find('.valuePaymentShortName').val();
	if(valuePaymentShortName != null && valuePaymentShortName !== '')
		vals['paymentShortName'] = valuePaymentShortName;

	$.ajax({
		url: '/api/receipt'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSchoolReceiptVals(vals, success, error) {
	$.ajax({
		url: '/api/receipt'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportSchoolReceipt($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportSchoolReceiptVals(JSON.parse(json), success, error);
}

function putimportSchoolReceiptVals(json, success, error) {
	$.ajax({
		url: '/api/receipt/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeSchoolReceipt($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeSchoolReceiptVals(JSON.parse(json), success, error);
}

function putmergeSchoolReceiptVals(json, success, error) {
	$.ajax({
		url: '/api/receipt/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopySchoolReceipt($formValues, pk, success, error) {
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

	var valuePaymentDate = $formValues.find('.valuePaymentDate').val();
	if(valuePaymentDate != null && valuePaymentDate !== '')
		vals['paymentDate'] = valuePaymentDate;

	var valuePaymentAmount = $formValues.find('.valuePaymentAmount').val();
	if(valuePaymentAmount != null && valuePaymentAmount !== '')
		vals['paymentAmount'] = valuePaymentAmount;

	var valueSchoolKey = $formValues.find('input.valueSchoolKey:checked').val();
	if(valueSchoolKey != null && valueSchoolKey !== '')
		vals['schoolKey'] = valueSchoolKey;

	var valuePaymentDescription = $formValues.find('.valuePaymentDescription').val();
	if(valuePaymentDescription != null && valuePaymentDescription !== '')
		vals['paymentDescription'] = valuePaymentDescription;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
		vals['sessionId'] = valueSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valuePaymentShortName = $formValues.find('.valuePaymentShortName').val();
	if(valuePaymentShortName != null && valuePaymentShortName !== '')
		vals['paymentShortName'] = valuePaymentShortName;

	putcopySchoolReceiptVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopySchoolReceiptVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/receipt/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSchoolReceipt($formFilters, $formValues, pk, success, error) {
	var filters = patchSchoolReceiptFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	var removePk = $formValues.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	var addPk = $formValues.find('.addPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	var removeCreated = $formValues.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	var addCreated = $formValues.find('.addCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	var removeModified = $formValues.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	var addModified = $formValues.find('.addModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	var removeObjectId = $formValues.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	var addObjectId = $formValues.find('.addObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	var removeArchived = $formValues.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	var valueArchived = null;
	if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	var setArchived = removeArchived ? null : valueArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	var removeDeleted = $formValues.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	var valueDeleted = null;
	if(valueDeletedSelectVal != null && valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	var setDeleted = removeDeleted ? null : valueDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valuePaymentDate = $formValues.find('.valuePaymentDate').val();
	var removePaymentDate = $formValues.find('.removePaymentDate').val() === 'true';
	var setPaymentDate = removePaymentDate ? null : $formValues.find('.setPaymentDate').val();
	var addPaymentDate = $formValues.find('.addPaymentDate').val();
	var setMoment = setPaymentDate ? moment(setPaymentDate, 'MM/DD/YYYY') : null; 
	var addMoment = addPaymentDate ? moment(addPaymentDate, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setPaymentDate = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addPaymentDate = s;
	} 
	if(removePaymentDate || setPaymentDate != null && setPaymentDate !== '')
		vals['setPaymentDate'] = setPaymentDate;
	if(addPaymentDate != null && addPaymentDate !== '')
		vals['addPaymentDate'] = addPaymentDate;
	var removePaymentDate = $formValues.find('.removePaymentDate').val();
	if(removePaymentDate != null && removePaymentDate !== '')
		vals['removePaymentDate'] = removePaymentDate;

	var valuePaymentAmount = $formValues.find('.valuePaymentAmount').val();
	var removePaymentAmount = $formValues.find('.removePaymentAmount').val() === 'true';
	var setPaymentAmount = removePaymentAmount ? null : $formValues.find('.setPaymentAmount').val();
	var addPaymentAmount = $formValues.find('.addPaymentAmount').val();
	if(removePaymentAmount || setPaymentAmount != null && setPaymentAmount !== '')
		vals['setPaymentAmount'] = setPaymentAmount;
	if(addPaymentAmount != null && addPaymentAmount !== '')
		vals['addPaymentAmount'] = addPaymentAmount;
	var removePaymentAmount = $formValues.find('.removePaymentAmount').val();
	if(removePaymentAmount != null && removePaymentAmount !== '')
		vals['removePaymentAmount'] = removePaymentAmount;

	var valueSchoolKey = $formValues.find('input.valueSchoolKey:checked').val();
	if(valueSchoolKey != null && valueSchoolKey !== '')
		vals['setSchoolKey'] = valueSchoolKey;

	var valuePaymentDescription = $formValues.find('.valuePaymentDescription').val();
	var removePaymentDescription = $formValues.find('.removePaymentDescription').val() === 'true';
	var setPaymentDescription = removePaymentDescription ? null : $formValues.find('.setPaymentDescription').val();
	var addPaymentDescription = $formValues.find('.addPaymentDescription').val();
	if(removePaymentDescription || setPaymentDescription != null && setPaymentDescription !== '')
		vals['setPaymentDescription'] = setPaymentDescription;
	if(addPaymentDescription != null && addPaymentDescription !== '')
		vals['addPaymentDescription'] = addPaymentDescription;
	var removePaymentDescription = $formValues.find('.removePaymentDescription').val();
	if(removePaymentDescription != null && removePaymentDescription !== '')
		vals['removePaymentDescription'] = removePaymentDescription;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	var removeInheritPk = $formValues.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	var removeSessionId = $formValues.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
	var addSessionId = $formValues.find('.addSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formValues.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	var removeUserId = $formValues.find('.removeUserId').val() === 'true';
	var setUserId = removeUserId ? null : $formValues.find('.setUserId').val();
	var addUserId = $formValues.find('.addUserId').val();
	if(removeUserId || setUserId != null && setUserId !== '')
		vals['setUserId'] = setUserId;
	if(addUserId != null && addUserId !== '')
		vals['addUserId'] = addUserId;
	var removeUserId = $formValues.find('.removeUserId').val();
	if(removeUserId != null && removeUserId !== '')
		vals['removeUserId'] = removeUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	var removeUserKey = $formValues.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	var addUserKey = $formValues.find('.addUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	var valuePaymentShortName = $formValues.find('.valuePaymentShortName').val();
	var removePaymentShortName = $formValues.find('.removePaymentShortName').val() === 'true';
	var setPaymentShortName = removePaymentShortName ? null : $formValues.find('.setPaymentShortName').val();
	var addPaymentShortName = $formValues.find('.addPaymentShortName').val();
	if(removePaymentShortName || setPaymentShortName != null && setPaymentShortName !== '')
		vals['setPaymentShortName'] = setPaymentShortName;
	if(addPaymentShortName != null && addPaymentShortName !== '')
		vals['addPaymentShortName'] = addPaymentShortName;
	var removePaymentShortName = $formValues.find('.removePaymentShortName').val();
	if(removePaymentShortName != null && removePaymentShortName !== '')
		vals['removePaymentShortName'] = removePaymentShortName;

	patchSchoolReceiptVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSchoolReceiptFilters($formFilters) {
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

		var filterPaymentDate = $formFilters.find('.valuePaymentDate').val();
		if(filterPaymentDate != null && filterPaymentDate !== '')
			filters.push({ name: 'fq', value: 'paymentDate:' + filterPaymentDate });

		var filterPaymentAmount = $formFilters.find('.valuePaymentAmount').val();
		if(filterPaymentAmount != null && filterPaymentAmount !== '')
			filters.push({ name: 'fq', value: 'paymentAmount:' + filterPaymentAmount });

		var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
		if(filterSchoolKey != null && filterSchoolKey !== '')
			filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

		var filterPaymentDescription = $formFilters.find('.valuePaymentDescription').val();
		if(filterPaymentDescription != null && filterPaymentDescription !== '')
			filters.push({ name: 'fq', value: 'paymentDescription:' + filterPaymentDescription });

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

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

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

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterReceiptKey = $formFilters.find('.valueReceiptKey').val();
		if(filterReceiptKey != null && filterReceiptKey !== '')
			filters.push({ name: 'fq', value: 'receiptKey:' + filterReceiptKey });

		var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
		if(filterSchoolAddress != null && filterSchoolAddress !== '')
			filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

		var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
		if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

		var filterPaymentYear = $formFilters.find('.valuePaymentYear').val();
		if(filterPaymentYear != null && filterPaymentYear !== '')
			filters.push({ name: 'fq', value: 'paymentYear:' + filterPaymentYear });

		var filterPaymentShortName = $formFilters.find('.valuePaymentShortName').val();
		if(filterPaymentShortName != null && filterPaymentShortName !== '')
			filters.push({ name: 'fq', value: 'paymentShortName:' + filterPaymentShortName });

		var filterPaymentCompleteName = $formFilters.find('.valuePaymentCompleteName').val();
		if(filterPaymentCompleteName != null && filterPaymentCompleteName !== '')
			filters.push({ name: 'fq', value: 'paymentCompleteName:' + filterPaymentCompleteName });
	}
	return filters;
}

function patchSchoolReceiptVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSchoolReceiptVals(filters, vals, success, error);
}

function patchSchoolReceiptVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/receipt?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSchoolReceipt(pk) {
	$.ajax({
		url: '/api/receipt/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSchoolReceipt($formFilters, success, error) {
	var filters = searchSchoolReceiptFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolReceiptVals(filters, success, error);
}

function searchSchoolReceiptFilters($formFilters) {
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

		var filterPaymentDate = $formFilters.find('.valuePaymentDate').val();
		if(filterPaymentDate != null && filterPaymentDate !== '')
			filters.push({ name: 'fq', value: 'paymentDate:' + filterPaymentDate });

		var filterPaymentAmount = $formFilters.find('.valuePaymentAmount').val();
		if(filterPaymentAmount != null && filterPaymentAmount !== '')
			filters.push({ name: 'fq', value: 'paymentAmount:' + filterPaymentAmount });

		var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
		if(filterSchoolKey != null && filterSchoolKey !== '')
			filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

		var filterPaymentDescription = $formFilters.find('.valuePaymentDescription').val();
		if(filterPaymentDescription != null && filterPaymentDescription !== '')
			filters.push({ name: 'fq', value: 'paymentDescription:' + filterPaymentDescription });

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

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

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

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterReceiptKey = $formFilters.find('.valueReceiptKey').val();
		if(filterReceiptKey != null && filterReceiptKey !== '')
			filters.push({ name: 'fq', value: 'receiptKey:' + filterReceiptKey });

		var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
		if(filterSchoolAddress != null && filterSchoolAddress !== '')
			filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

		var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
		if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

		var filterPaymentYear = $formFilters.find('.valuePaymentYear').val();
		if(filterPaymentYear != null && filterPaymentYear !== '')
			filters.push({ name: 'fq', value: 'paymentYear:' + filterPaymentYear });

		var filterPaymentShortName = $formFilters.find('.valuePaymentShortName').val();
		if(filterPaymentShortName != null && filterPaymentShortName !== '')
			filters.push({ name: 'fq', value: 'paymentShortName:' + filterPaymentShortName });

		var filterPaymentCompleteName = $formFilters.find('.valuePaymentCompleteName').val();
		if(filterPaymentCompleteName != null && filterPaymentCompleteName !== '')
			filters.push({ name: 'fq', value: 'paymentCompleteName:' + filterPaymentCompleteName });
	}
	return filters;
}

function searchSchoolReceiptVals(filters, success, error) {


	filters.push({ name: 'sort', value: 'paymentDate desc' });
	$.ajax({
		url: '/api/receipt?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolReceiptObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fas fa-file-invoice-dollar ');
			var $span = $('<span>').attr('class', '').text(o['paymentCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolReceiptVals($formFilters, success, error);
}

function suggestSchoolReceiptSchoolKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-school ');
			var $span = $('<span>').attr('class', '').text(o['schoolCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['receiptKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_schoolKey_' + pk + '_receiptKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueSchoolKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_schoolKey_" + pk + "_receiptKeys_" + o['pk'] + "'); patchSchoolReceiptVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'SchoolKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolReceiptForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolVals(filters, success, error);
}

async function websocketSchoolReceipt(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSchoolReceipt', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SchoolReceiptForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-light-green ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fas fa-file-invoice-dollar w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify receipts');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-light-green ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketSchool', function (error, message) {
			$('#Page_schoolKey').trigger('oninput');
			$('#Page_schoolKey_add').text('add a school');
			$('#Page_schoolKey_add').removeClass('w3-disabled');
			$('#Page_schoolKey_add').attr('disabled', false);
		});
	}
}
async function websocketSchoolReceiptInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSchoolReceiptVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputSchoolReceipt' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSchoolReceipt' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSchoolReceipt' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSchoolReceipt' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSchoolReceipt' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSchoolReceipt' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'Deleted'));
			}
			var val = o['paymentDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('paymentDate')) {
				$('.inputSchoolReceipt' + pk + 'PaymentDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'PaymentDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'PaymentDate'));
			}
			var val = o['paymentAmount'];
			if(vars.includes('paymentAmount')) {
				$('.inputSchoolReceipt' + pk + 'PaymentAmount').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'PaymentAmount').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'PaymentAmount'));
			}
			var val = o['schoolKey'];
			if(vars.includes('schoolKey')) {
				$('.inputSchoolReceipt' + pk + 'SchoolKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'SchoolKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'SchoolKey'));
			}
			var val = o['paymentDescription'];
			if(vars.includes('paymentDescription')) {
				$('.inputSchoolReceipt' + pk + 'PaymentDescription').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'PaymentDescription').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'PaymentDescription'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSchoolReceipt' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSchoolReceipt' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSchoolReceipt' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSchoolReceipt' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSchoolReceipt' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSchoolReceipt' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputSchoolReceipt' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSchoolReceipt' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSchoolReceipt' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSchoolReceipt' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputSchoolReceipt' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputSchoolReceipt' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputSchoolReceipt' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputSchoolReceipt' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputSchoolReceipt' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'PageUrlApi'));
			}
			var val = o['receiptKey'];
			if(vars.includes('receiptKey')) {
				$('.inputSchoolReceipt' + pk + 'ReceiptKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'ReceiptKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'ReceiptKey'));
			}
			var val = o['schoolAddress'];
			if(vars.includes('schoolAddress')) {
				$('.inputSchoolReceipt' + pk + 'SchoolAddress').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'SchoolAddress').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'SchoolAddress'));
			}
			var val = o['schoolPhoneNumber'];
			if(vars.includes('schoolPhoneNumber')) {
				$('.inputSchoolReceipt' + pk + 'SchoolPhoneNumber').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'SchoolPhoneNumber').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'SchoolPhoneNumber'));
			}
			var val = o['paymentYear'];
			if(vars.includes('paymentYear')) {
				$('.inputSchoolReceipt' + pk + 'PaymentYear').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'PaymentYear').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'PaymentYear'));
			}
			var val = o['paymentShortName'];
			if(vars.includes('paymentShortName')) {
				$('.inputSchoolReceipt' + pk + 'PaymentShortName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'PaymentShortName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'PaymentShortName'));
			}
			var val = o['paymentCompleteName'];
			if(vars.includes('paymentCompleteName')) {
				$('.inputSchoolReceipt' + pk + 'PaymentCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolReceipt' + pk + 'PaymentCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolReceipt' + pk + 'PaymentCompleteName'));
			}
		});
	}
}
