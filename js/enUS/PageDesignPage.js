
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

	var valueDesignAdmin = $formValues.find('.valueDesignAdmin').prop('checked');
	if(valueDesignAdmin != null && valueDesignAdmin !== '')
		vals['designAdmin'] = valueDesignAdmin;

	var valueDesignIgnoreEmptyChildName = $formValues.find('.valueDesignIgnoreEmptyChildName').prop('checked');
	if(valueDesignIgnoreEmptyChildName != null && valueDesignIgnoreEmptyChildName !== '')
		vals['designIgnoreEmptyChildName'] = valueDesignIgnoreEmptyChildName;

	var valueDesignIgnorePaymentsNotPastDue = $formValues.find('.valueDesignIgnorePaymentsNotPastDue').prop('checked');
	if(valueDesignIgnorePaymentsNotPastDue != null && valueDesignIgnorePaymentsNotPastDue !== '')
		vals['designIgnorePaymentsNotPastDue'] = valueDesignIgnorePaymentsNotPastDue;

	var valueDesignIgnorePaymentsPastDue = $formValues.find('.valueDesignIgnorePaymentsPastDue').prop('checked');
	if(valueDesignIgnorePaymentsPastDue != null && valueDesignIgnorePaymentsPastDue !== '')
		vals['designIgnorePaymentsPastDue'] = valueDesignIgnorePaymentsPastDue;

	var valueDesignFilterEnrollmentKey = $formValues.find('.valueDesignFilterEnrollmentKey').prop('checked');
	if(valueDesignFilterEnrollmentKey != null && valueDesignFilterEnrollmentKey !== '')
		vals['designFilterEnrollmentKey'] = valueDesignFilterEnrollmentKey;

	var valueDesignEnrollmentSortMonthDayOfBirth = $formValues.find('.valueDesignEnrollmentSortMonthDayOfBirth').prop('checked');
	if(valueDesignEnrollmentSortMonthDayOfBirth != null && valueDesignEnrollmentSortMonthDayOfBirth !== '')
		vals['designEnrollmentSortMonthDayOfBirth'] = valueDesignEnrollmentSortMonthDayOfBirth;

	var valueDesignEnrollmentSortGroupName = $formValues.find('.valueDesignEnrollmentSortGroupName').prop('checked');
	if(valueDesignEnrollmentSortGroupName != null && valueDesignEnrollmentSortGroupName !== '')
		vals['designEnrollmentSortGroupName'] = valueDesignEnrollmentSortGroupName;

	var valueDesignEnrollmentSortChildName = $formValues.find('.valueDesignEnrollmentSortChildName').prop('checked');
	if(valueDesignEnrollmentSortChildName != null && valueDesignEnrollmentSortChildName !== '')
		vals['designEnrollmentSortChildName'] = valueDesignEnrollmentSortChildName;

	var valueSearchYears = $formValues.find('.valueSearchYears').prop('checked');
	if(valueSearchYears != null && valueSearchYears !== '')
		vals['searchYears'] = valueSearchYears;

	var valueSearchPayments = $formValues.find('.valueSearchPayments').prop('checked');
	if(valueSearchPayments != null && valueSearchPayments !== '')
		vals['searchPayments'] = valueSearchPayments;

	var valueParentDesignKeys = [];
	$formValues.find('input.valueParentDesignKeys:checked').each(function(index) {
		valueParentDesignKeys.push($(this).val());
	});
	if(valueParentDesignKeys.length > 0)
		vals['parentDesignKeys'] = valueParentDesignKeys;

	var valueHtmlPartKeys = [];
	$formValues.find('input.valueHtmlPartKeys:checked').each(function(index) {
		valueHtmlPartKeys.push($(this).val());
	});
	if(valueHtmlPartKeys.length > 0)
		vals['htmlPartKeys'] = valueHtmlPartKeys;

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

	var valueDesignAdmin = $formValues.find('.valueDesignAdmin').prop('checked');
	if(valueDesignAdmin != null && valueDesignAdmin !== '')
		vals['designAdmin'] = valueDesignAdmin;

	var valueDesignIgnoreEmptyChildName = $formValues.find('.valueDesignIgnoreEmptyChildName').prop('checked');
	if(valueDesignIgnoreEmptyChildName != null && valueDesignIgnoreEmptyChildName !== '')
		vals['designIgnoreEmptyChildName'] = valueDesignIgnoreEmptyChildName;

	var valueDesignIgnorePaymentsNotPastDue = $formValues.find('.valueDesignIgnorePaymentsNotPastDue').prop('checked');
	if(valueDesignIgnorePaymentsNotPastDue != null && valueDesignIgnorePaymentsNotPastDue !== '')
		vals['designIgnorePaymentsNotPastDue'] = valueDesignIgnorePaymentsNotPastDue;

	var valueDesignIgnorePaymentsPastDue = $formValues.find('.valueDesignIgnorePaymentsPastDue').prop('checked');
	if(valueDesignIgnorePaymentsPastDue != null && valueDesignIgnorePaymentsPastDue !== '')
		vals['designIgnorePaymentsPastDue'] = valueDesignIgnorePaymentsPastDue;

	var valueDesignFilterEnrollmentKey = $formValues.find('.valueDesignFilterEnrollmentKey').prop('checked');
	if(valueDesignFilterEnrollmentKey != null && valueDesignFilterEnrollmentKey !== '')
		vals['designFilterEnrollmentKey'] = valueDesignFilterEnrollmentKey;

	var valueDesignEnrollmentSortMonthDayOfBirth = $formValues.find('.valueDesignEnrollmentSortMonthDayOfBirth').prop('checked');
	if(valueDesignEnrollmentSortMonthDayOfBirth != null && valueDesignEnrollmentSortMonthDayOfBirth !== '')
		vals['designEnrollmentSortMonthDayOfBirth'] = valueDesignEnrollmentSortMonthDayOfBirth;

	var valueDesignEnrollmentSortGroupName = $formValues.find('.valueDesignEnrollmentSortGroupName').prop('checked');
	if(valueDesignEnrollmentSortGroupName != null && valueDesignEnrollmentSortGroupName !== '')
		vals['designEnrollmentSortGroupName'] = valueDesignEnrollmentSortGroupName;

	var valueDesignEnrollmentSortChildName = $formValues.find('.valueDesignEnrollmentSortChildName').prop('checked');
	if(valueDesignEnrollmentSortChildName != null && valueDesignEnrollmentSortChildName !== '')
		vals['designEnrollmentSortChildName'] = valueDesignEnrollmentSortChildName;

	var valueSearchYears = $formValues.find('.valueSearchYears').prop('checked');
	if(valueSearchYears != null && valueSearchYears !== '')
		vals['searchYears'] = valueSearchYears;

	var valueSearchPayments = $formValues.find('.valueSearchPayments').prop('checked');
	if(valueSearchPayments != null && valueSearchPayments !== '')
		vals['searchPayments'] = valueSearchPayments;

	var valueParentDesignKeys = $formValues.find('input.valueParentDesignKeys:checked').val();
	if(valueParentDesignKeys != null && valueParentDesignKeys !== '')
		vals['parentDesignKeys'] = [valueParentDesignKeys];

	var valueHtmlPartKeys = $formValues.find('input.valueHtmlPartKeys:checked').val();
	if(valueHtmlPartKeys != null && valueHtmlPartKeys !== '')
		vals['htmlPartKeys'] = [valueHtmlPartKeys];

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

	var valuePageDesignCompleteName = $formValues.find('.valuePageDesignCompleteName').val();
	var removePageDesignCompleteName = $formValues.find('.removePageDesignCompleteName').val() === 'true';
	var setPageDesignCompleteName = removePageDesignCompleteName ? null : $formValues.find('.setPageDesignCompleteName').val();
	var addPageDesignCompleteName = $formValues.find('.addPageDesignCompleteName').val();
	if(removePageDesignCompleteName || setPageDesignCompleteName != null && setPageDesignCompleteName !== '')
		vals['setPageDesignCompleteName'] = setPageDesignCompleteName;
	if(addPageDesignCompleteName != null && addPageDesignCompleteName !== '')
		vals['addPageDesignCompleteName'] = addPageDesignCompleteName;
	var removePageDesignCompleteName = $formValues.find('.removePageDesignCompleteName').val();
	if(removePageDesignCompleteName != null && removePageDesignCompleteName !== '')
		vals['removePageDesignCompleteName'] = removePageDesignCompleteName;

	var valueDesignHidden = $formValues.find('.valueDesignHidden').prop('checked');
	var removeDesignHidden = $formValues.find('.removeDesignHidden').val() === 'true';
	var valueDesignHiddenSelectVal = $formValues.find('select.setDesignHidden').val();
	var valueDesignHidden = null;
	if(valueDesignHiddenSelectVal != null && valueDesignHiddenSelectVal !== '')
		valueDesignHidden = valueDesignHiddenSelectVal == 'true';
	var setDesignHidden = removeDesignHidden ? null : valueDesignHidden;
	var addDesignHidden = $formValues.find('.addDesignHidden').prop('checked');
	if(removeDesignHidden || setDesignHidden != null && setDesignHidden !== '')
		vals['setDesignHidden'] = setDesignHidden;
	if(addDesignHidden != null && addDesignHidden !== '')
		vals['addDesignHidden'] = addDesignHidden;
	var removeDesignHidden = $formValues.find('.removeDesignHidden').prop('checked');
	if(removeDesignHidden != null && removeDesignHidden !== '')
		vals['removeDesignHidden'] = removeDesignHidden;

	var valueDesignAdmin = $formValues.find('.valueDesignAdmin').prop('checked');
	var removeDesignAdmin = $formValues.find('.removeDesignAdmin').val() === 'true';
	var valueDesignAdminSelectVal = $formValues.find('select.setDesignAdmin').val();
	var valueDesignAdmin = null;
	if(valueDesignAdminSelectVal != null && valueDesignAdminSelectVal !== '')
		valueDesignAdmin = valueDesignAdminSelectVal == 'true';
	var setDesignAdmin = removeDesignAdmin ? null : valueDesignAdmin;
	var addDesignAdmin = $formValues.find('.addDesignAdmin').prop('checked');
	if(removeDesignAdmin || setDesignAdmin != null && setDesignAdmin !== '')
		vals['setDesignAdmin'] = setDesignAdmin;
	if(addDesignAdmin != null && addDesignAdmin !== '')
		vals['addDesignAdmin'] = addDesignAdmin;
	var removeDesignAdmin = $formValues.find('.removeDesignAdmin').prop('checked');
	if(removeDesignAdmin != null && removeDesignAdmin !== '')
		vals['removeDesignAdmin'] = removeDesignAdmin;

	var valueDesignIgnoreEmptyChildName = $formValues.find('.valueDesignIgnoreEmptyChildName').prop('checked');
	var removeDesignIgnoreEmptyChildName = $formValues.find('.removeDesignIgnoreEmptyChildName').val() === 'true';
	var valueDesignIgnoreEmptyChildNameSelectVal = $formValues.find('select.setDesignIgnoreEmptyChildName').val();
	var valueDesignIgnoreEmptyChildName = null;
	if(valueDesignIgnoreEmptyChildNameSelectVal != null && valueDesignIgnoreEmptyChildNameSelectVal !== '')
		valueDesignIgnoreEmptyChildName = valueDesignIgnoreEmptyChildNameSelectVal == 'true';
	var setDesignIgnoreEmptyChildName = removeDesignIgnoreEmptyChildName ? null : valueDesignIgnoreEmptyChildName;
	var addDesignIgnoreEmptyChildName = $formValues.find('.addDesignIgnoreEmptyChildName').prop('checked');
	if(removeDesignIgnoreEmptyChildName || setDesignIgnoreEmptyChildName != null && setDesignIgnoreEmptyChildName !== '')
		vals['setDesignIgnoreEmptyChildName'] = setDesignIgnoreEmptyChildName;
	if(addDesignIgnoreEmptyChildName != null && addDesignIgnoreEmptyChildName !== '')
		vals['addDesignIgnoreEmptyChildName'] = addDesignIgnoreEmptyChildName;
	var removeDesignIgnoreEmptyChildName = $formValues.find('.removeDesignIgnoreEmptyChildName').prop('checked');
	if(removeDesignIgnoreEmptyChildName != null && removeDesignIgnoreEmptyChildName !== '')
		vals['removeDesignIgnoreEmptyChildName'] = removeDesignIgnoreEmptyChildName;

	var valueDesignIgnorePaymentsNotPastDue = $formValues.find('.valueDesignIgnorePaymentsNotPastDue').prop('checked');
	var removeDesignIgnorePaymentsNotPastDue = $formValues.find('.removeDesignIgnorePaymentsNotPastDue').val() === 'true';
	var valueDesignIgnorePaymentsNotPastDueSelectVal = $formValues.find('select.setDesignIgnorePaymentsNotPastDue').val();
	var valueDesignIgnorePaymentsNotPastDue = null;
	if(valueDesignIgnorePaymentsNotPastDueSelectVal != null && valueDesignIgnorePaymentsNotPastDueSelectVal !== '')
		valueDesignIgnorePaymentsNotPastDue = valueDesignIgnorePaymentsNotPastDueSelectVal == 'true';
	var setDesignIgnorePaymentsNotPastDue = removeDesignIgnorePaymentsNotPastDue ? null : valueDesignIgnorePaymentsNotPastDue;
	var addDesignIgnorePaymentsNotPastDue = $formValues.find('.addDesignIgnorePaymentsNotPastDue').prop('checked');
	if(removeDesignIgnorePaymentsNotPastDue || setDesignIgnorePaymentsNotPastDue != null && setDesignIgnorePaymentsNotPastDue !== '')
		vals['setDesignIgnorePaymentsNotPastDue'] = setDesignIgnorePaymentsNotPastDue;
	if(addDesignIgnorePaymentsNotPastDue != null && addDesignIgnorePaymentsNotPastDue !== '')
		vals['addDesignIgnorePaymentsNotPastDue'] = addDesignIgnorePaymentsNotPastDue;
	var removeDesignIgnorePaymentsNotPastDue = $formValues.find('.removeDesignIgnorePaymentsNotPastDue').prop('checked');
	if(removeDesignIgnorePaymentsNotPastDue != null && removeDesignIgnorePaymentsNotPastDue !== '')
		vals['removeDesignIgnorePaymentsNotPastDue'] = removeDesignIgnorePaymentsNotPastDue;

	var valueDesignIgnorePaymentsPastDue = $formValues.find('.valueDesignIgnorePaymentsPastDue').prop('checked');
	var removeDesignIgnorePaymentsPastDue = $formValues.find('.removeDesignIgnorePaymentsPastDue').val() === 'true';
	var valueDesignIgnorePaymentsPastDueSelectVal = $formValues.find('select.setDesignIgnorePaymentsPastDue').val();
	var valueDesignIgnorePaymentsPastDue = null;
	if(valueDesignIgnorePaymentsPastDueSelectVal != null && valueDesignIgnorePaymentsPastDueSelectVal !== '')
		valueDesignIgnorePaymentsPastDue = valueDesignIgnorePaymentsPastDueSelectVal == 'true';
	var setDesignIgnorePaymentsPastDue = removeDesignIgnorePaymentsPastDue ? null : valueDesignIgnorePaymentsPastDue;
	var addDesignIgnorePaymentsPastDue = $formValues.find('.addDesignIgnorePaymentsPastDue').prop('checked');
	if(removeDesignIgnorePaymentsPastDue || setDesignIgnorePaymentsPastDue != null && setDesignIgnorePaymentsPastDue !== '')
		vals['setDesignIgnorePaymentsPastDue'] = setDesignIgnorePaymentsPastDue;
	if(addDesignIgnorePaymentsPastDue != null && addDesignIgnorePaymentsPastDue !== '')
		vals['addDesignIgnorePaymentsPastDue'] = addDesignIgnorePaymentsPastDue;
	var removeDesignIgnorePaymentsPastDue = $formValues.find('.removeDesignIgnorePaymentsPastDue').prop('checked');
	if(removeDesignIgnorePaymentsPastDue != null && removeDesignIgnorePaymentsPastDue !== '')
		vals['removeDesignIgnorePaymentsPastDue'] = removeDesignIgnorePaymentsPastDue;

	var valueDesignFilterEnrollmentKey = $formValues.find('.valueDesignFilterEnrollmentKey').prop('checked');
	var removeDesignFilterEnrollmentKey = $formValues.find('.removeDesignFilterEnrollmentKey').val() === 'true';
	var valueDesignFilterEnrollmentKeySelectVal = $formValues.find('select.setDesignFilterEnrollmentKey').val();
	var valueDesignFilterEnrollmentKey = null;
	if(valueDesignFilterEnrollmentKeySelectVal != null && valueDesignFilterEnrollmentKeySelectVal !== '')
		valueDesignFilterEnrollmentKey = valueDesignFilterEnrollmentKeySelectVal == 'true';
	var setDesignFilterEnrollmentKey = removeDesignFilterEnrollmentKey ? null : valueDesignFilterEnrollmentKey;
	var addDesignFilterEnrollmentKey = $formValues.find('.addDesignFilterEnrollmentKey').prop('checked');
	if(removeDesignFilterEnrollmentKey || setDesignFilterEnrollmentKey != null && setDesignFilterEnrollmentKey !== '')
		vals['setDesignFilterEnrollmentKey'] = setDesignFilterEnrollmentKey;
	if(addDesignFilterEnrollmentKey != null && addDesignFilterEnrollmentKey !== '')
		vals['addDesignFilterEnrollmentKey'] = addDesignFilterEnrollmentKey;
	var removeDesignFilterEnrollmentKey = $formValues.find('.removeDesignFilterEnrollmentKey').prop('checked');
	if(removeDesignFilterEnrollmentKey != null && removeDesignFilterEnrollmentKey !== '')
		vals['removeDesignFilterEnrollmentKey'] = removeDesignFilterEnrollmentKey;

	var valueDesignEnrollmentSortMonthDayOfBirth = $formValues.find('.valueDesignEnrollmentSortMonthDayOfBirth').prop('checked');
	var removeDesignEnrollmentSortMonthDayOfBirth = $formValues.find('.removeDesignEnrollmentSortMonthDayOfBirth').val() === 'true';
	var valueDesignEnrollmentSortMonthDayOfBirthSelectVal = $formValues.find('select.setDesignEnrollmentSortMonthDayOfBirth').val();
	var valueDesignEnrollmentSortMonthDayOfBirth = null;
	if(valueDesignEnrollmentSortMonthDayOfBirthSelectVal != null && valueDesignEnrollmentSortMonthDayOfBirthSelectVal !== '')
		valueDesignEnrollmentSortMonthDayOfBirth = valueDesignEnrollmentSortMonthDayOfBirthSelectVal == 'true';
	var setDesignEnrollmentSortMonthDayOfBirth = removeDesignEnrollmentSortMonthDayOfBirth ? null : valueDesignEnrollmentSortMonthDayOfBirth;
	var addDesignEnrollmentSortMonthDayOfBirth = $formValues.find('.addDesignEnrollmentSortMonthDayOfBirth').prop('checked');
	if(removeDesignEnrollmentSortMonthDayOfBirth || setDesignEnrollmentSortMonthDayOfBirth != null && setDesignEnrollmentSortMonthDayOfBirth !== '')
		vals['setDesignEnrollmentSortMonthDayOfBirth'] = setDesignEnrollmentSortMonthDayOfBirth;
	if(addDesignEnrollmentSortMonthDayOfBirth != null && addDesignEnrollmentSortMonthDayOfBirth !== '')
		vals['addDesignEnrollmentSortMonthDayOfBirth'] = addDesignEnrollmentSortMonthDayOfBirth;
	var removeDesignEnrollmentSortMonthDayOfBirth = $formValues.find('.removeDesignEnrollmentSortMonthDayOfBirth').prop('checked');
	if(removeDesignEnrollmentSortMonthDayOfBirth != null && removeDesignEnrollmentSortMonthDayOfBirth !== '')
		vals['removeDesignEnrollmentSortMonthDayOfBirth'] = removeDesignEnrollmentSortMonthDayOfBirth;

	var valueDesignEnrollmentSortGroupName = $formValues.find('.valueDesignEnrollmentSortGroupName').prop('checked');
	var removeDesignEnrollmentSortGroupName = $formValues.find('.removeDesignEnrollmentSortGroupName').val() === 'true';
	var valueDesignEnrollmentSortGroupNameSelectVal = $formValues.find('select.setDesignEnrollmentSortGroupName').val();
	var valueDesignEnrollmentSortGroupName = null;
	if(valueDesignEnrollmentSortGroupNameSelectVal != null && valueDesignEnrollmentSortGroupNameSelectVal !== '')
		valueDesignEnrollmentSortGroupName = valueDesignEnrollmentSortGroupNameSelectVal == 'true';
	var setDesignEnrollmentSortGroupName = removeDesignEnrollmentSortGroupName ? null : valueDesignEnrollmentSortGroupName;
	var addDesignEnrollmentSortGroupName = $formValues.find('.addDesignEnrollmentSortGroupName').prop('checked');
	if(removeDesignEnrollmentSortGroupName || setDesignEnrollmentSortGroupName != null && setDesignEnrollmentSortGroupName !== '')
		vals['setDesignEnrollmentSortGroupName'] = setDesignEnrollmentSortGroupName;
	if(addDesignEnrollmentSortGroupName != null && addDesignEnrollmentSortGroupName !== '')
		vals['addDesignEnrollmentSortGroupName'] = addDesignEnrollmentSortGroupName;
	var removeDesignEnrollmentSortGroupName = $formValues.find('.removeDesignEnrollmentSortGroupName').prop('checked');
	if(removeDesignEnrollmentSortGroupName != null && removeDesignEnrollmentSortGroupName !== '')
		vals['removeDesignEnrollmentSortGroupName'] = removeDesignEnrollmentSortGroupName;

	var valueDesignEnrollmentSortChildName = $formValues.find('.valueDesignEnrollmentSortChildName').prop('checked');
	var removeDesignEnrollmentSortChildName = $formValues.find('.removeDesignEnrollmentSortChildName').val() === 'true';
	var valueDesignEnrollmentSortChildNameSelectVal = $formValues.find('select.setDesignEnrollmentSortChildName').val();
	var valueDesignEnrollmentSortChildName = null;
	if(valueDesignEnrollmentSortChildNameSelectVal != null && valueDesignEnrollmentSortChildNameSelectVal !== '')
		valueDesignEnrollmentSortChildName = valueDesignEnrollmentSortChildNameSelectVal == 'true';
	var setDesignEnrollmentSortChildName = removeDesignEnrollmentSortChildName ? null : valueDesignEnrollmentSortChildName;
	var addDesignEnrollmentSortChildName = $formValues.find('.addDesignEnrollmentSortChildName').prop('checked');
	if(removeDesignEnrollmentSortChildName || setDesignEnrollmentSortChildName != null && setDesignEnrollmentSortChildName !== '')
		vals['setDesignEnrollmentSortChildName'] = setDesignEnrollmentSortChildName;
	if(addDesignEnrollmentSortChildName != null && addDesignEnrollmentSortChildName !== '')
		vals['addDesignEnrollmentSortChildName'] = addDesignEnrollmentSortChildName;
	var removeDesignEnrollmentSortChildName = $formValues.find('.removeDesignEnrollmentSortChildName').prop('checked');
	if(removeDesignEnrollmentSortChildName != null && removeDesignEnrollmentSortChildName !== '')
		vals['removeDesignEnrollmentSortChildName'] = removeDesignEnrollmentSortChildName;

	var valueSearchYears = $formValues.find('.valueSearchYears').prop('checked');
	var removeSearchYears = $formValues.find('.removeSearchYears').val() === 'true';
	var valueSearchYearsSelectVal = $formValues.find('select.setSearchYears').val();
	var valueSearchYears = null;
	if(valueSearchYearsSelectVal != null && valueSearchYearsSelectVal !== '')
		valueSearchYears = valueSearchYearsSelectVal == 'true';
	var setSearchYears = removeSearchYears ? null : valueSearchYears;
	var addSearchYears = $formValues.find('.addSearchYears').prop('checked');
	if(removeSearchYears || setSearchYears != null && setSearchYears !== '')
		vals['setSearchYears'] = setSearchYears;
	if(addSearchYears != null && addSearchYears !== '')
		vals['addSearchYears'] = addSearchYears;
	var removeSearchYears = $formValues.find('.removeSearchYears').prop('checked');
	if(removeSearchYears != null && removeSearchYears !== '')
		vals['removeSearchYears'] = removeSearchYears;

	var valueSearchPayments = $formValues.find('.valueSearchPayments').prop('checked');
	var removeSearchPayments = $formValues.find('.removeSearchPayments').val() === 'true';
	var valueSearchPaymentsSelectVal = $formValues.find('select.setSearchPayments').val();
	var valueSearchPayments = null;
	if(valueSearchPaymentsSelectVal != null && valueSearchPaymentsSelectVal !== '')
		valueSearchPayments = valueSearchPaymentsSelectVal == 'true';
	var setSearchPayments = removeSearchPayments ? null : valueSearchPayments;
	var addSearchPayments = $formValues.find('.addSearchPayments').prop('checked');
	if(removeSearchPayments || setSearchPayments != null && setSearchPayments !== '')
		vals['setSearchPayments'] = setSearchPayments;
	if(addSearchPayments != null && addSearchPayments !== '')
		vals['addSearchPayments'] = addSearchPayments;
	var removeSearchPayments = $formValues.find('.removeSearchPayments').prop('checked');
	if(removeSearchPayments != null && removeSearchPayments !== '')
		vals['removeSearchPayments'] = removeSearchPayments;

	var valueParentDesignKeys = $formValues.find('input.valueParentDesignKeys:checked').val();
	if(valueParentDesignKeys != null && valueParentDesignKeys !== '')
		vals['addParentDesignKeys'] = valueParentDesignKeys;

	var valueHtmlPartKeys = $formValues.find('input.valueHtmlPartKeys:checked').val();
	if(valueHtmlPartKeys != null && valueHtmlPartKeys !== '')
		vals['addHtmlPartKeys'] = valueHtmlPartKeys;

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

		var $filterDesignAdminCheckbox = $formFilters.find('input.valueDesignAdmin[type = "checkbox"]');
		var $filterDesignAdminSelect = $formFilters.find('select.valueDesignAdmin');
		var filterDesignAdmin = $filterDesignAdminSelect.length ? $filterDesignAdminSelect.val() : $filterDesignAdminCheckbox.prop('checked');
		var filterDesignAdminSelectVal = $formFilters.find('select.filterDesignAdmin').val();
		var filterDesignAdmin = null;
		if(filterDesignAdminSelectVal !== '')
			filterDesignAdmin = filterDesignAdminSelectVal == 'true';
		if(filterDesignAdmin != null && filterDesignAdmin === true)
			filters.push({ name: 'fq', value: 'designAdmin:' + filterDesignAdmin });

		var $filterDesignIgnoreEmptyChildNameCheckbox = $formFilters.find('input.valueDesignIgnoreEmptyChildName[type = "checkbox"]');
		var $filterDesignIgnoreEmptyChildNameSelect = $formFilters.find('select.valueDesignIgnoreEmptyChildName');
		var filterDesignIgnoreEmptyChildName = $filterDesignIgnoreEmptyChildNameSelect.length ? $filterDesignIgnoreEmptyChildNameSelect.val() : $filterDesignIgnoreEmptyChildNameCheckbox.prop('checked');
		var filterDesignIgnoreEmptyChildNameSelectVal = $formFilters.find('select.filterDesignIgnoreEmptyChildName').val();
		var filterDesignIgnoreEmptyChildName = null;
		if(filterDesignIgnoreEmptyChildNameSelectVal !== '')
			filterDesignIgnoreEmptyChildName = filterDesignIgnoreEmptyChildNameSelectVal == 'true';
		if(filterDesignIgnoreEmptyChildName != null && filterDesignIgnoreEmptyChildName === true)
			filters.push({ name: 'fq', value: 'designIgnoreEmptyChildName:' + filterDesignIgnoreEmptyChildName });

		var $filterDesignIgnorePaymentsNotPastDueCheckbox = $formFilters.find('input.valueDesignIgnorePaymentsNotPastDue[type = "checkbox"]');
		var $filterDesignIgnorePaymentsNotPastDueSelect = $formFilters.find('select.valueDesignIgnorePaymentsNotPastDue');
		var filterDesignIgnorePaymentsNotPastDue = $filterDesignIgnorePaymentsNotPastDueSelect.length ? $filterDesignIgnorePaymentsNotPastDueSelect.val() : $filterDesignIgnorePaymentsNotPastDueCheckbox.prop('checked');
		var filterDesignIgnorePaymentsNotPastDueSelectVal = $formFilters.find('select.filterDesignIgnorePaymentsNotPastDue').val();
		var filterDesignIgnorePaymentsNotPastDue = null;
		if(filterDesignIgnorePaymentsNotPastDueSelectVal !== '')
			filterDesignIgnorePaymentsNotPastDue = filterDesignIgnorePaymentsNotPastDueSelectVal == 'true';
		if(filterDesignIgnorePaymentsNotPastDue != null && filterDesignIgnorePaymentsNotPastDue === true)
			filters.push({ name: 'fq', value: 'designIgnorePaymentsNotPastDue:' + filterDesignIgnorePaymentsNotPastDue });

		var $filterDesignIgnorePaymentsPastDueCheckbox = $formFilters.find('input.valueDesignIgnorePaymentsPastDue[type = "checkbox"]');
		var $filterDesignIgnorePaymentsPastDueSelect = $formFilters.find('select.valueDesignIgnorePaymentsPastDue');
		var filterDesignIgnorePaymentsPastDue = $filterDesignIgnorePaymentsPastDueSelect.length ? $filterDesignIgnorePaymentsPastDueSelect.val() : $filterDesignIgnorePaymentsPastDueCheckbox.prop('checked');
		var filterDesignIgnorePaymentsPastDueSelectVal = $formFilters.find('select.filterDesignIgnorePaymentsPastDue').val();
		var filterDesignIgnorePaymentsPastDue = null;
		if(filterDesignIgnorePaymentsPastDueSelectVal !== '')
			filterDesignIgnorePaymentsPastDue = filterDesignIgnorePaymentsPastDueSelectVal == 'true';
		if(filterDesignIgnorePaymentsPastDue != null && filterDesignIgnorePaymentsPastDue === true)
			filters.push({ name: 'fq', value: 'designIgnorePaymentsPastDue:' + filterDesignIgnorePaymentsPastDue });

		var $filterDesignFilterEnrollmentKeyCheckbox = $formFilters.find('input.valueDesignFilterEnrollmentKey[type = "checkbox"]');
		var $filterDesignFilterEnrollmentKeySelect = $formFilters.find('select.valueDesignFilterEnrollmentKey');
		var filterDesignFilterEnrollmentKey = $filterDesignFilterEnrollmentKeySelect.length ? $filterDesignFilterEnrollmentKeySelect.val() : $filterDesignFilterEnrollmentKeyCheckbox.prop('checked');
		var filterDesignFilterEnrollmentKeySelectVal = $formFilters.find('select.filterDesignFilterEnrollmentKey').val();
		var filterDesignFilterEnrollmentKey = null;
		if(filterDesignFilterEnrollmentKeySelectVal !== '')
			filterDesignFilterEnrollmentKey = filterDesignFilterEnrollmentKeySelectVal == 'true';
		if(filterDesignFilterEnrollmentKey != null && filterDesignFilterEnrollmentKey === true)
			filters.push({ name: 'fq', value: 'designFilterEnrollmentKey:' + filterDesignFilterEnrollmentKey });

		var $filterDesignEnrollmentSortMonthDayOfBirthCheckbox = $formFilters.find('input.valueDesignEnrollmentSortMonthDayOfBirth[type = "checkbox"]');
		var $filterDesignEnrollmentSortMonthDayOfBirthSelect = $formFilters.find('select.valueDesignEnrollmentSortMonthDayOfBirth');
		var filterDesignEnrollmentSortMonthDayOfBirth = $filterDesignEnrollmentSortMonthDayOfBirthSelect.length ? $filterDesignEnrollmentSortMonthDayOfBirthSelect.val() : $filterDesignEnrollmentSortMonthDayOfBirthCheckbox.prop('checked');
		var filterDesignEnrollmentSortMonthDayOfBirthSelectVal = $formFilters.find('select.filterDesignEnrollmentSortMonthDayOfBirth').val();
		var filterDesignEnrollmentSortMonthDayOfBirth = null;
		if(filterDesignEnrollmentSortMonthDayOfBirthSelectVal !== '')
			filterDesignEnrollmentSortMonthDayOfBirth = filterDesignEnrollmentSortMonthDayOfBirthSelectVal == 'true';
		if(filterDesignEnrollmentSortMonthDayOfBirth != null && filterDesignEnrollmentSortMonthDayOfBirth === true)
			filters.push({ name: 'fq', value: 'designEnrollmentSortMonthDayOfBirth:' + filterDesignEnrollmentSortMonthDayOfBirth });

		var $filterDesignEnrollmentSortGroupNameCheckbox = $formFilters.find('input.valueDesignEnrollmentSortGroupName[type = "checkbox"]');
		var $filterDesignEnrollmentSortGroupNameSelect = $formFilters.find('select.valueDesignEnrollmentSortGroupName');
		var filterDesignEnrollmentSortGroupName = $filterDesignEnrollmentSortGroupNameSelect.length ? $filterDesignEnrollmentSortGroupNameSelect.val() : $filterDesignEnrollmentSortGroupNameCheckbox.prop('checked');
		var filterDesignEnrollmentSortGroupNameSelectVal = $formFilters.find('select.filterDesignEnrollmentSortGroupName').val();
		var filterDesignEnrollmentSortGroupName = null;
		if(filterDesignEnrollmentSortGroupNameSelectVal !== '')
			filterDesignEnrollmentSortGroupName = filterDesignEnrollmentSortGroupNameSelectVal == 'true';
		if(filterDesignEnrollmentSortGroupName != null && filterDesignEnrollmentSortGroupName === true)
			filters.push({ name: 'fq', value: 'designEnrollmentSortGroupName:' + filterDesignEnrollmentSortGroupName });

		var $filterDesignEnrollmentSortChildNameCheckbox = $formFilters.find('input.valueDesignEnrollmentSortChildName[type = "checkbox"]');
		var $filterDesignEnrollmentSortChildNameSelect = $formFilters.find('select.valueDesignEnrollmentSortChildName');
		var filterDesignEnrollmentSortChildName = $filterDesignEnrollmentSortChildNameSelect.length ? $filterDesignEnrollmentSortChildNameSelect.val() : $filterDesignEnrollmentSortChildNameCheckbox.prop('checked');
		var filterDesignEnrollmentSortChildNameSelectVal = $formFilters.find('select.filterDesignEnrollmentSortChildName').val();
		var filterDesignEnrollmentSortChildName = null;
		if(filterDesignEnrollmentSortChildNameSelectVal !== '')
			filterDesignEnrollmentSortChildName = filterDesignEnrollmentSortChildNameSelectVal == 'true';
		if(filterDesignEnrollmentSortChildName != null && filterDesignEnrollmentSortChildName === true)
			filters.push({ name: 'fq', value: 'designEnrollmentSortChildName:' + filterDesignEnrollmentSortChildName });

		var $filterSearchYearsCheckbox = $formFilters.find('input.valueSearchYears[type = "checkbox"]');
		var $filterSearchYearsSelect = $formFilters.find('select.valueSearchYears');
		var filterSearchYears = $filterSearchYearsSelect.length ? $filterSearchYearsSelect.val() : $filterSearchYearsCheckbox.prop('checked');
		var filterSearchYearsSelectVal = $formFilters.find('select.filterSearchYears').val();
		var filterSearchYears = null;
		if(filterSearchYearsSelectVal !== '')
			filterSearchYears = filterSearchYearsSelectVal == 'true';
		if(filterSearchYears != null && filterSearchYears === true)
			filters.push({ name: 'fq', value: 'searchYears:' + filterSearchYears });

		var $filterSearchPaymentsCheckbox = $formFilters.find('input.valueSearchPayments[type = "checkbox"]');
		var $filterSearchPaymentsSelect = $formFilters.find('select.valueSearchPayments');
		var filterSearchPayments = $filterSearchPaymentsSelect.length ? $filterSearchPaymentsSelect.val() : $filterSearchPaymentsCheckbox.prop('checked');
		var filterSearchPaymentsSelectVal = $formFilters.find('select.filterSearchPayments').val();
		var filterSearchPayments = null;
		if(filterSearchPaymentsSelectVal !== '')
			filterSearchPayments = filterSearchPaymentsSelectVal == 'true';
		if(filterSearchPayments != null && filterSearchPayments === true)
			filters.push({ name: 'fq', value: 'searchPayments:' + filterSearchPayments });

		var filterParentDesignKeys = $formFilters.find('.valueParentDesignKeys').val();
		if(filterParentDesignKeys != null && filterParentDesignKeys !== '')
			filters.push({ name: 'fq', value: 'parentDesignKeys:' + filterParentDesignKeys });

		var filterHtmlPartKeys = $formFilters.find('.valueHtmlPartKeys').val();
		if(filterHtmlPartKeys != null && filterHtmlPartKeys !== '')
			filters.push({ name: 'fq', value: 'htmlPartKeys:' + filterHtmlPartKeys });

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

		var $filterDesignAdminCheckbox = $formFilters.find('input.valueDesignAdmin[type = "checkbox"]');
		var $filterDesignAdminSelect = $formFilters.find('select.valueDesignAdmin');
		var filterDesignAdmin = $filterDesignAdminSelect.length ? $filterDesignAdminSelect.val() : $filterDesignAdminCheckbox.prop('checked');
		var filterDesignAdminSelectVal = $formFilters.find('select.filterDesignAdmin').val();
		var filterDesignAdmin = null;
		if(filterDesignAdminSelectVal !== '')
			filterDesignAdmin = filterDesignAdminSelectVal == 'true';
		if(filterDesignAdmin != null && filterDesignAdmin === true)
			filters.push({ name: 'fq', value: 'designAdmin:' + filterDesignAdmin });

		var $filterDesignIgnoreEmptyChildNameCheckbox = $formFilters.find('input.valueDesignIgnoreEmptyChildName[type = "checkbox"]');
		var $filterDesignIgnoreEmptyChildNameSelect = $formFilters.find('select.valueDesignIgnoreEmptyChildName');
		var filterDesignIgnoreEmptyChildName = $filterDesignIgnoreEmptyChildNameSelect.length ? $filterDesignIgnoreEmptyChildNameSelect.val() : $filterDesignIgnoreEmptyChildNameCheckbox.prop('checked');
		var filterDesignIgnoreEmptyChildNameSelectVal = $formFilters.find('select.filterDesignIgnoreEmptyChildName').val();
		var filterDesignIgnoreEmptyChildName = null;
		if(filterDesignIgnoreEmptyChildNameSelectVal !== '')
			filterDesignIgnoreEmptyChildName = filterDesignIgnoreEmptyChildNameSelectVal == 'true';
		if(filterDesignIgnoreEmptyChildName != null && filterDesignIgnoreEmptyChildName === true)
			filters.push({ name: 'fq', value: 'designIgnoreEmptyChildName:' + filterDesignIgnoreEmptyChildName });

		var $filterDesignIgnorePaymentsNotPastDueCheckbox = $formFilters.find('input.valueDesignIgnorePaymentsNotPastDue[type = "checkbox"]');
		var $filterDesignIgnorePaymentsNotPastDueSelect = $formFilters.find('select.valueDesignIgnorePaymentsNotPastDue');
		var filterDesignIgnorePaymentsNotPastDue = $filterDesignIgnorePaymentsNotPastDueSelect.length ? $filterDesignIgnorePaymentsNotPastDueSelect.val() : $filterDesignIgnorePaymentsNotPastDueCheckbox.prop('checked');
		var filterDesignIgnorePaymentsNotPastDueSelectVal = $formFilters.find('select.filterDesignIgnorePaymentsNotPastDue').val();
		var filterDesignIgnorePaymentsNotPastDue = null;
		if(filterDesignIgnorePaymentsNotPastDueSelectVal !== '')
			filterDesignIgnorePaymentsNotPastDue = filterDesignIgnorePaymentsNotPastDueSelectVal == 'true';
		if(filterDesignIgnorePaymentsNotPastDue != null && filterDesignIgnorePaymentsNotPastDue === true)
			filters.push({ name: 'fq', value: 'designIgnorePaymentsNotPastDue:' + filterDesignIgnorePaymentsNotPastDue });

		var $filterDesignIgnorePaymentsPastDueCheckbox = $formFilters.find('input.valueDesignIgnorePaymentsPastDue[type = "checkbox"]');
		var $filterDesignIgnorePaymentsPastDueSelect = $formFilters.find('select.valueDesignIgnorePaymentsPastDue');
		var filterDesignIgnorePaymentsPastDue = $filterDesignIgnorePaymentsPastDueSelect.length ? $filterDesignIgnorePaymentsPastDueSelect.val() : $filterDesignIgnorePaymentsPastDueCheckbox.prop('checked');
		var filterDesignIgnorePaymentsPastDueSelectVal = $formFilters.find('select.filterDesignIgnorePaymentsPastDue').val();
		var filterDesignIgnorePaymentsPastDue = null;
		if(filterDesignIgnorePaymentsPastDueSelectVal !== '')
			filterDesignIgnorePaymentsPastDue = filterDesignIgnorePaymentsPastDueSelectVal == 'true';
		if(filterDesignIgnorePaymentsPastDue != null && filterDesignIgnorePaymentsPastDue === true)
			filters.push({ name: 'fq', value: 'designIgnorePaymentsPastDue:' + filterDesignIgnorePaymentsPastDue });

		var $filterDesignFilterEnrollmentKeyCheckbox = $formFilters.find('input.valueDesignFilterEnrollmentKey[type = "checkbox"]');
		var $filterDesignFilterEnrollmentKeySelect = $formFilters.find('select.valueDesignFilterEnrollmentKey');
		var filterDesignFilterEnrollmentKey = $filterDesignFilterEnrollmentKeySelect.length ? $filterDesignFilterEnrollmentKeySelect.val() : $filterDesignFilterEnrollmentKeyCheckbox.prop('checked');
		var filterDesignFilterEnrollmentKeySelectVal = $formFilters.find('select.filterDesignFilterEnrollmentKey').val();
		var filterDesignFilterEnrollmentKey = null;
		if(filterDesignFilterEnrollmentKeySelectVal !== '')
			filterDesignFilterEnrollmentKey = filterDesignFilterEnrollmentKeySelectVal == 'true';
		if(filterDesignFilterEnrollmentKey != null && filterDesignFilterEnrollmentKey === true)
			filters.push({ name: 'fq', value: 'designFilterEnrollmentKey:' + filterDesignFilterEnrollmentKey });

		var $filterDesignEnrollmentSortMonthDayOfBirthCheckbox = $formFilters.find('input.valueDesignEnrollmentSortMonthDayOfBirth[type = "checkbox"]');
		var $filterDesignEnrollmentSortMonthDayOfBirthSelect = $formFilters.find('select.valueDesignEnrollmentSortMonthDayOfBirth');
		var filterDesignEnrollmentSortMonthDayOfBirth = $filterDesignEnrollmentSortMonthDayOfBirthSelect.length ? $filterDesignEnrollmentSortMonthDayOfBirthSelect.val() : $filterDesignEnrollmentSortMonthDayOfBirthCheckbox.prop('checked');
		var filterDesignEnrollmentSortMonthDayOfBirthSelectVal = $formFilters.find('select.filterDesignEnrollmentSortMonthDayOfBirth').val();
		var filterDesignEnrollmentSortMonthDayOfBirth = null;
		if(filterDesignEnrollmentSortMonthDayOfBirthSelectVal !== '')
			filterDesignEnrollmentSortMonthDayOfBirth = filterDesignEnrollmentSortMonthDayOfBirthSelectVal == 'true';
		if(filterDesignEnrollmentSortMonthDayOfBirth != null && filterDesignEnrollmentSortMonthDayOfBirth === true)
			filters.push({ name: 'fq', value: 'designEnrollmentSortMonthDayOfBirth:' + filterDesignEnrollmentSortMonthDayOfBirth });

		var $filterDesignEnrollmentSortGroupNameCheckbox = $formFilters.find('input.valueDesignEnrollmentSortGroupName[type = "checkbox"]');
		var $filterDesignEnrollmentSortGroupNameSelect = $formFilters.find('select.valueDesignEnrollmentSortGroupName');
		var filterDesignEnrollmentSortGroupName = $filterDesignEnrollmentSortGroupNameSelect.length ? $filterDesignEnrollmentSortGroupNameSelect.val() : $filterDesignEnrollmentSortGroupNameCheckbox.prop('checked');
		var filterDesignEnrollmentSortGroupNameSelectVal = $formFilters.find('select.filterDesignEnrollmentSortGroupName').val();
		var filterDesignEnrollmentSortGroupName = null;
		if(filterDesignEnrollmentSortGroupNameSelectVal !== '')
			filterDesignEnrollmentSortGroupName = filterDesignEnrollmentSortGroupNameSelectVal == 'true';
		if(filterDesignEnrollmentSortGroupName != null && filterDesignEnrollmentSortGroupName === true)
			filters.push({ name: 'fq', value: 'designEnrollmentSortGroupName:' + filterDesignEnrollmentSortGroupName });

		var $filterDesignEnrollmentSortChildNameCheckbox = $formFilters.find('input.valueDesignEnrollmentSortChildName[type = "checkbox"]');
		var $filterDesignEnrollmentSortChildNameSelect = $formFilters.find('select.valueDesignEnrollmentSortChildName');
		var filterDesignEnrollmentSortChildName = $filterDesignEnrollmentSortChildNameSelect.length ? $filterDesignEnrollmentSortChildNameSelect.val() : $filterDesignEnrollmentSortChildNameCheckbox.prop('checked');
		var filterDesignEnrollmentSortChildNameSelectVal = $formFilters.find('select.filterDesignEnrollmentSortChildName').val();
		var filterDesignEnrollmentSortChildName = null;
		if(filterDesignEnrollmentSortChildNameSelectVal !== '')
			filterDesignEnrollmentSortChildName = filterDesignEnrollmentSortChildNameSelectVal == 'true';
		if(filterDesignEnrollmentSortChildName != null && filterDesignEnrollmentSortChildName === true)
			filters.push({ name: 'fq', value: 'designEnrollmentSortChildName:' + filterDesignEnrollmentSortChildName });

		var $filterSearchYearsCheckbox = $formFilters.find('input.valueSearchYears[type = "checkbox"]');
		var $filterSearchYearsSelect = $formFilters.find('select.valueSearchYears');
		var filterSearchYears = $filterSearchYearsSelect.length ? $filterSearchYearsSelect.val() : $filterSearchYearsCheckbox.prop('checked');
		var filterSearchYearsSelectVal = $formFilters.find('select.filterSearchYears').val();
		var filterSearchYears = null;
		if(filterSearchYearsSelectVal !== '')
			filterSearchYears = filterSearchYearsSelectVal == 'true';
		if(filterSearchYears != null && filterSearchYears === true)
			filters.push({ name: 'fq', value: 'searchYears:' + filterSearchYears });

		var $filterSearchPaymentsCheckbox = $formFilters.find('input.valueSearchPayments[type = "checkbox"]');
		var $filterSearchPaymentsSelect = $formFilters.find('select.valueSearchPayments');
		var filterSearchPayments = $filterSearchPaymentsSelect.length ? $filterSearchPaymentsSelect.val() : $filterSearchPaymentsCheckbox.prop('checked');
		var filterSearchPaymentsSelectVal = $formFilters.find('select.filterSearchPayments').val();
		var filterSearchPayments = null;
		if(filterSearchPaymentsSelectVal !== '')
			filterSearchPayments = filterSearchPaymentsSelectVal == 'true';
		if(filterSearchPayments != null && filterSearchPayments === true)
			filters.push({ name: 'fq', value: 'searchPayments:' + filterSearchPayments });

		var filterParentDesignKeys = $formFilters.find('.valueParentDesignKeys').val();
		if(filterParentDesignKeys != null && filterParentDesignKeys !== '')
			filters.push({ name: 'fq', value: 'parentDesignKeys:' + filterParentDesignKeys });

		var filterHtmlPartKeys = $formFilters.find('.valueHtmlPartKeys').val();
		if(filterHtmlPartKeys != null && filterHtmlPartKeys !== '')
			filters.push({ name: 'fq', value: 'htmlPartKeys:' + filterHtmlPartKeys });

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


	filters.push({ name: 'sort', value: 'pageDesignCompleteName asc' });
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
			var $i = $('<i>').attr('class', 'far fa-drafting-compass ');
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
			var $i = $('<i>').attr('class', 'far fa-drafting-compass ');
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
			var $i = $('<i>').attr('class', 'far fa-puzzle-piece ');
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

// AdminSearch //

async function adminsearchPageDesign($formFilters, success, error) {
	var filters = adminsearchPageDesignFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchPageDesignVals(filters, success, error);
}

function adminsearchPageDesignFilters($formFilters) {
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

		var $filterDesignAdminCheckbox = $formFilters.find('input.valueDesignAdmin[type = "checkbox"]');
		var $filterDesignAdminSelect = $formFilters.find('select.valueDesignAdmin');
		var filterDesignAdmin = $filterDesignAdminSelect.length ? $filterDesignAdminSelect.val() : $filterDesignAdminCheckbox.prop('checked');
		var filterDesignAdminSelectVal = $formFilters.find('select.filterDesignAdmin').val();
		var filterDesignAdmin = null;
		if(filterDesignAdminSelectVal !== '')
			filterDesignAdmin = filterDesignAdminSelectVal == 'true';
		if(filterDesignAdmin != null && filterDesignAdmin === true)
			filters.push({ name: 'fq', value: 'designAdmin:' + filterDesignAdmin });

		var $filterDesignIgnoreEmptyChildNameCheckbox = $formFilters.find('input.valueDesignIgnoreEmptyChildName[type = "checkbox"]');
		var $filterDesignIgnoreEmptyChildNameSelect = $formFilters.find('select.valueDesignIgnoreEmptyChildName');
		var filterDesignIgnoreEmptyChildName = $filterDesignIgnoreEmptyChildNameSelect.length ? $filterDesignIgnoreEmptyChildNameSelect.val() : $filterDesignIgnoreEmptyChildNameCheckbox.prop('checked');
		var filterDesignIgnoreEmptyChildNameSelectVal = $formFilters.find('select.filterDesignIgnoreEmptyChildName').val();
		var filterDesignIgnoreEmptyChildName = null;
		if(filterDesignIgnoreEmptyChildNameSelectVal !== '')
			filterDesignIgnoreEmptyChildName = filterDesignIgnoreEmptyChildNameSelectVal == 'true';
		if(filterDesignIgnoreEmptyChildName != null && filterDesignIgnoreEmptyChildName === true)
			filters.push({ name: 'fq', value: 'designIgnoreEmptyChildName:' + filterDesignIgnoreEmptyChildName });

		var $filterDesignIgnorePaymentsNotPastDueCheckbox = $formFilters.find('input.valueDesignIgnorePaymentsNotPastDue[type = "checkbox"]');
		var $filterDesignIgnorePaymentsNotPastDueSelect = $formFilters.find('select.valueDesignIgnorePaymentsNotPastDue');
		var filterDesignIgnorePaymentsNotPastDue = $filterDesignIgnorePaymentsNotPastDueSelect.length ? $filterDesignIgnorePaymentsNotPastDueSelect.val() : $filterDesignIgnorePaymentsNotPastDueCheckbox.prop('checked');
		var filterDesignIgnorePaymentsNotPastDueSelectVal = $formFilters.find('select.filterDesignIgnorePaymentsNotPastDue').val();
		var filterDesignIgnorePaymentsNotPastDue = null;
		if(filterDesignIgnorePaymentsNotPastDueSelectVal !== '')
			filterDesignIgnorePaymentsNotPastDue = filterDesignIgnorePaymentsNotPastDueSelectVal == 'true';
		if(filterDesignIgnorePaymentsNotPastDue != null && filterDesignIgnorePaymentsNotPastDue === true)
			filters.push({ name: 'fq', value: 'designIgnorePaymentsNotPastDue:' + filterDesignIgnorePaymentsNotPastDue });

		var $filterDesignIgnorePaymentsPastDueCheckbox = $formFilters.find('input.valueDesignIgnorePaymentsPastDue[type = "checkbox"]');
		var $filterDesignIgnorePaymentsPastDueSelect = $formFilters.find('select.valueDesignIgnorePaymentsPastDue');
		var filterDesignIgnorePaymentsPastDue = $filterDesignIgnorePaymentsPastDueSelect.length ? $filterDesignIgnorePaymentsPastDueSelect.val() : $filterDesignIgnorePaymentsPastDueCheckbox.prop('checked');
		var filterDesignIgnorePaymentsPastDueSelectVal = $formFilters.find('select.filterDesignIgnorePaymentsPastDue').val();
		var filterDesignIgnorePaymentsPastDue = null;
		if(filterDesignIgnorePaymentsPastDueSelectVal !== '')
			filterDesignIgnorePaymentsPastDue = filterDesignIgnorePaymentsPastDueSelectVal == 'true';
		if(filterDesignIgnorePaymentsPastDue != null && filterDesignIgnorePaymentsPastDue === true)
			filters.push({ name: 'fq', value: 'designIgnorePaymentsPastDue:' + filterDesignIgnorePaymentsPastDue });

		var $filterDesignFilterEnrollmentKeyCheckbox = $formFilters.find('input.valueDesignFilterEnrollmentKey[type = "checkbox"]');
		var $filterDesignFilterEnrollmentKeySelect = $formFilters.find('select.valueDesignFilterEnrollmentKey');
		var filterDesignFilterEnrollmentKey = $filterDesignFilterEnrollmentKeySelect.length ? $filterDesignFilterEnrollmentKeySelect.val() : $filterDesignFilterEnrollmentKeyCheckbox.prop('checked');
		var filterDesignFilterEnrollmentKeySelectVal = $formFilters.find('select.filterDesignFilterEnrollmentKey').val();
		var filterDesignFilterEnrollmentKey = null;
		if(filterDesignFilterEnrollmentKeySelectVal !== '')
			filterDesignFilterEnrollmentKey = filterDesignFilterEnrollmentKeySelectVal == 'true';
		if(filterDesignFilterEnrollmentKey != null && filterDesignFilterEnrollmentKey === true)
			filters.push({ name: 'fq', value: 'designFilterEnrollmentKey:' + filterDesignFilterEnrollmentKey });

		var $filterDesignEnrollmentSortMonthDayOfBirthCheckbox = $formFilters.find('input.valueDesignEnrollmentSortMonthDayOfBirth[type = "checkbox"]');
		var $filterDesignEnrollmentSortMonthDayOfBirthSelect = $formFilters.find('select.valueDesignEnrollmentSortMonthDayOfBirth');
		var filterDesignEnrollmentSortMonthDayOfBirth = $filterDesignEnrollmentSortMonthDayOfBirthSelect.length ? $filterDesignEnrollmentSortMonthDayOfBirthSelect.val() : $filterDesignEnrollmentSortMonthDayOfBirthCheckbox.prop('checked');
		var filterDesignEnrollmentSortMonthDayOfBirthSelectVal = $formFilters.find('select.filterDesignEnrollmentSortMonthDayOfBirth').val();
		var filterDesignEnrollmentSortMonthDayOfBirth = null;
		if(filterDesignEnrollmentSortMonthDayOfBirthSelectVal !== '')
			filterDesignEnrollmentSortMonthDayOfBirth = filterDesignEnrollmentSortMonthDayOfBirthSelectVal == 'true';
		if(filterDesignEnrollmentSortMonthDayOfBirth != null && filterDesignEnrollmentSortMonthDayOfBirth === true)
			filters.push({ name: 'fq', value: 'designEnrollmentSortMonthDayOfBirth:' + filterDesignEnrollmentSortMonthDayOfBirth });

		var $filterDesignEnrollmentSortGroupNameCheckbox = $formFilters.find('input.valueDesignEnrollmentSortGroupName[type = "checkbox"]');
		var $filterDesignEnrollmentSortGroupNameSelect = $formFilters.find('select.valueDesignEnrollmentSortGroupName');
		var filterDesignEnrollmentSortGroupName = $filterDesignEnrollmentSortGroupNameSelect.length ? $filterDesignEnrollmentSortGroupNameSelect.val() : $filterDesignEnrollmentSortGroupNameCheckbox.prop('checked');
		var filterDesignEnrollmentSortGroupNameSelectVal = $formFilters.find('select.filterDesignEnrollmentSortGroupName').val();
		var filterDesignEnrollmentSortGroupName = null;
		if(filterDesignEnrollmentSortGroupNameSelectVal !== '')
			filterDesignEnrollmentSortGroupName = filterDesignEnrollmentSortGroupNameSelectVal == 'true';
		if(filterDesignEnrollmentSortGroupName != null && filterDesignEnrollmentSortGroupName === true)
			filters.push({ name: 'fq', value: 'designEnrollmentSortGroupName:' + filterDesignEnrollmentSortGroupName });

		var $filterDesignEnrollmentSortChildNameCheckbox = $formFilters.find('input.valueDesignEnrollmentSortChildName[type = "checkbox"]');
		var $filterDesignEnrollmentSortChildNameSelect = $formFilters.find('select.valueDesignEnrollmentSortChildName');
		var filterDesignEnrollmentSortChildName = $filterDesignEnrollmentSortChildNameSelect.length ? $filterDesignEnrollmentSortChildNameSelect.val() : $filterDesignEnrollmentSortChildNameCheckbox.prop('checked');
		var filterDesignEnrollmentSortChildNameSelectVal = $formFilters.find('select.filterDesignEnrollmentSortChildName').val();
		var filterDesignEnrollmentSortChildName = null;
		if(filterDesignEnrollmentSortChildNameSelectVal !== '')
			filterDesignEnrollmentSortChildName = filterDesignEnrollmentSortChildNameSelectVal == 'true';
		if(filterDesignEnrollmentSortChildName != null && filterDesignEnrollmentSortChildName === true)
			filters.push({ name: 'fq', value: 'designEnrollmentSortChildName:' + filterDesignEnrollmentSortChildName });

		var $filterSearchYearsCheckbox = $formFilters.find('input.valueSearchYears[type = "checkbox"]');
		var $filterSearchYearsSelect = $formFilters.find('select.valueSearchYears');
		var filterSearchYears = $filterSearchYearsSelect.length ? $filterSearchYearsSelect.val() : $filterSearchYearsCheckbox.prop('checked');
		var filterSearchYearsSelectVal = $formFilters.find('select.filterSearchYears').val();
		var filterSearchYears = null;
		if(filterSearchYearsSelectVal !== '')
			filterSearchYears = filterSearchYearsSelectVal == 'true';
		if(filterSearchYears != null && filterSearchYears === true)
			filters.push({ name: 'fq', value: 'searchYears:' + filterSearchYears });

		var $filterSearchPaymentsCheckbox = $formFilters.find('input.valueSearchPayments[type = "checkbox"]');
		var $filterSearchPaymentsSelect = $formFilters.find('select.valueSearchPayments');
		var filterSearchPayments = $filterSearchPaymentsSelect.length ? $filterSearchPaymentsSelect.val() : $filterSearchPaymentsCheckbox.prop('checked');
		var filterSearchPaymentsSelectVal = $formFilters.find('select.filterSearchPayments').val();
		var filterSearchPayments = null;
		if(filterSearchPaymentsSelectVal !== '')
			filterSearchPayments = filterSearchPaymentsSelectVal == 'true';
		if(filterSearchPayments != null && filterSearchPayments === true)
			filters.push({ name: 'fq', value: 'searchPayments:' + filterSearchPayments });

		var filterParentDesignKeys = $formFilters.find('.valueParentDesignKeys').val();
		if(filterParentDesignKeys != null && filterParentDesignKeys !== '')
			filters.push({ name: 'fq', value: 'parentDesignKeys:' + filterParentDesignKeys });

		var filterHtmlPartKeys = $formFilters.find('.valueHtmlPartKeys').val();
		if(filterHtmlPartKeys != null && filterHtmlPartKeys !== '')
			filters.push({ name: 'fq', value: 'htmlPartKeys:' + filterHtmlPartKeys });

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

		var filterPageDesignKey = $formFilters.find('.valuePageDesignKey').val();
		if(filterPageDesignKey != null && filterPageDesignKey !== '')
			filters.push({ name: 'fq', value: 'pageDesignKey:' + filterPageDesignKey });

		var filterChildDesignKeys = $formFilters.find('.valueChildDesignKeys').val();
		if(filterChildDesignKeys != null && filterChildDesignKeys !== '')
			filters.push({ name: 'fq', value: 'childDesignKeys:' + filterChildDesignKeys });
	}
	return filters;
}

function adminsearchPageDesignVals(filters, success, error) {


	filters.push({ name: 'sort', value: 'pageDesignCompleteName asc' });
	$.ajax({
		url: '/api/admin/page-design?' + $.param(filters)
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
			var $i = $('<i>').attr('class', 'far fa-drafting-compass ');
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
			var $i = $('<i>').attr('class', 'far fa-drafting-compass ');
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
			var $i = $('<i>').attr('class', 'far fa-puzzle-piece ');
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
			var pkPage = $('#PageDesignForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
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

		window.eventBus.registerHandler('websocketPageDesign', function (error, message) {
			$('#Page_childDesignKeys').trigger('oninput');
			$('#Page_childDesignKeys_add').text('add a page design');
			$('#Page_childDesignKeys_add').removeClass('w3-disabled');
			$('#Page_childDesignKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketPageDesign', function (error, message) {
			$('#Page_parentDesignKeys').trigger('oninput');
			$('#Page_parentDesignKeys_add').text('add a page design');
			$('#Page_parentDesignKeys_add').removeClass('w3-disabled');
			$('#Page_parentDesignKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketHtmlPart', function (error, message) {
			$('#Page_htmlPartKeys').trigger('oninput');
			$('#Page_htmlPartKeys_add').text('add an HTML part');
			$('#Page_htmlPartKeys_add').removeClass('w3-disabled');
			$('#Page_htmlPartKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketPageDesign', function (error, message) {
			$('#Page_childDesignKeys').trigger('oninput');
			$('#Page_childDesignKeys_add').text('add a page design');
			$('#Page_childDesignKeys_add').removeClass('w3-disabled');
			$('#Page_childDesignKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketPageDesign', function (error, message) {
			$('#Page_parentDesignKeys').trigger('oninput');
			$('#Page_parentDesignKeys_add').text('add a page design');
			$('#Page_parentDesignKeys_add').removeClass('w3-disabled');
			$('#Page_parentDesignKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketHtmlPart', function (error, message) {
			$('#Page_htmlPartKeys').trigger('oninput');
			$('#Page_htmlPartKeys_add').text('add an HTML part');
			$('#Page_htmlPartKeys_add').removeClass('w3-disabled');
			$('#Page_htmlPartKeys_add').attr('disabled', false);
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
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputPageDesign' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputPageDesign' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputPageDesign' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputPageDesign' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputPageDesign' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputPageDesign' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'Deleted'));
			}
			var val = o['pageDesignCompleteName'];
			if(vars.includes('pageDesignCompleteName')) {
				$('.inputPageDesign' + pk + 'PageDesignCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'PageDesignCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'PageDesignCompleteName'));
			}
			var val = o['designHidden'];
			if(vars.includes('designHidden')) {
				$('.inputPageDesign' + pk + 'DesignHidden').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'DesignHidden').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'DesignHidden'));
			}
			var val = o['designAdmin'];
			if(vars.includes('designAdmin')) {
				$('.inputPageDesign' + pk + 'DesignAdmin').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'DesignAdmin').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'DesignAdmin'));
			}
			var val = o['designIgnoreEmptyChildName'];
			if(vars.includes('designIgnoreEmptyChildName')) {
				$('.inputPageDesign' + pk + 'DesignIgnoreEmptyChildName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'DesignIgnoreEmptyChildName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'DesignIgnoreEmptyChildName'));
			}
			var val = o['designIgnorePaymentsNotPastDue'];
			if(vars.includes('designIgnorePaymentsNotPastDue')) {
				$('.inputPageDesign' + pk + 'DesignIgnorePaymentsNotPastDue').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'DesignIgnorePaymentsNotPastDue').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'DesignIgnorePaymentsNotPastDue'));
			}
			var val = o['designIgnorePaymentsPastDue'];
			if(vars.includes('designIgnorePaymentsPastDue')) {
				$('.inputPageDesign' + pk + 'DesignIgnorePaymentsPastDue').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'DesignIgnorePaymentsPastDue').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'DesignIgnorePaymentsPastDue'));
			}
			var val = o['designFilterEnrollmentKey'];
			if(vars.includes('designFilterEnrollmentKey')) {
				$('.inputPageDesign' + pk + 'DesignFilterEnrollmentKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'DesignFilterEnrollmentKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'DesignFilterEnrollmentKey'));
			}
			var val = o['designEnrollmentSortMonthDayOfBirth'];
			if(vars.includes('designEnrollmentSortMonthDayOfBirth')) {
				$('.inputPageDesign' + pk + 'DesignEnrollmentSortMonthDayOfBirth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'DesignEnrollmentSortMonthDayOfBirth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'DesignEnrollmentSortMonthDayOfBirth'));
			}
			var val = o['designEnrollmentSortGroupName'];
			if(vars.includes('designEnrollmentSortGroupName')) {
				$('.inputPageDesign' + pk + 'DesignEnrollmentSortGroupName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'DesignEnrollmentSortGroupName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'DesignEnrollmentSortGroupName'));
			}
			var val = o['designEnrollmentSortChildName'];
			if(vars.includes('designEnrollmentSortChildName')) {
				$('.inputPageDesign' + pk + 'DesignEnrollmentSortChildName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'DesignEnrollmentSortChildName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'DesignEnrollmentSortChildName'));
			}
			var val = o['searchYears'];
			if(vars.includes('searchYears')) {
				$('.inputPageDesign' + pk + 'SearchYears').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'SearchYears').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'SearchYears'));
			}
			var val = o['searchPayments'];
			if(vars.includes('searchPayments')) {
				$('.inputPageDesign' + pk + 'SearchPayments').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'SearchPayments').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'SearchPayments'));
			}
			var val = o['parentDesignKeys'];
			if(vars.includes('parentDesignKeys')) {
				$('.inputPageDesign' + pk + 'ParentDesignKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'ParentDesignKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'ParentDesignKeys'));
			}
			var val = o['htmlPartKeys'];
			if(vars.includes('htmlPartKeys')) {
				$('.inputPageDesign' + pk + 'HtmlPartKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'HtmlPartKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'HtmlPartKeys'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputPageDesign' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputPageDesign' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputPageDesign' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputPageDesign' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputPageDesign' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputPageDesign' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputPageDesign' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputPageDesign' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputPageDesign' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputPageDesign' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputPageDesign' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputPageDesign' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputPageDesign' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputPageDesign' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputPageDesign' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'PageUrlApi'));
			}
			var val = o['pageDesignKey'];
			if(vars.includes('pageDesignKey')) {
				$('.inputPageDesign' + pk + 'PageDesignKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'PageDesignKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'PageDesignKey'));
			}
			var val = o['childDesignKeys'];
			if(vars.includes('childDesignKeys')) {
				$('.inputPageDesign' + pk + 'ChildDesignKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varPageDesign' + pk + 'ChildDesignKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputPageDesign' + pk + 'ChildDesignKeys'));
			}
		});
	}
}
