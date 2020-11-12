
// POST //

async function postSchoolPayment($formValues, success, error) {
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

	var valuePaymentCash = $formValues.find('.valuePaymentCash').prop('checked');
	if(valuePaymentCash != null && valuePaymentCash !== '')
		vals['paymentCash'] = valuePaymentCash;

	var valuePaymentCheck = $formValues.find('.valuePaymentCheck').prop('checked');
	if(valuePaymentCheck != null && valuePaymentCheck !== '')
		vals['paymentCheck'] = valuePaymentCheck;

	var valuePaymentECheck = $formValues.find('.valuePaymentECheck').prop('checked');
	if(valuePaymentECheck != null && valuePaymentECheck !== '')
		vals['paymentECheck'] = valuePaymentECheck;

	var valuePaymentSystem = $formValues.find('.valuePaymentSystem').prop('checked');
	if(valuePaymentSystem != null && valuePaymentSystem !== '')
		vals['paymentSystem'] = valuePaymentSystem;

	var valuePaymentDescription = $formValues.find('.valuePaymentDescription').val();
	if(valuePaymentDescription != null && valuePaymentDescription !== '')
		vals['paymentDescription'] = valuePaymentDescription;

	var valuePaymentBy = $formValues.find('.valuePaymentBy').val();
	if(valuePaymentBy != null && valuePaymentBy !== '')
		vals['paymentBy'] = valuePaymentBy;

	var valueEnrollmentPaymentEachMonth = $formValues.find('.valueEnrollmentPaymentEachMonth').prop('checked');
	if(valueEnrollmentPaymentEachMonth != null && valueEnrollmentPaymentEachMonth !== '')
		vals['enrollmentPaymentEachMonth'] = valueEnrollmentPaymentEachMonth;

	var valueTransactionId = $formValues.find('.valueTransactionId').val();
	if(valueTransactionId != null && valueTransactionId !== '')
		vals['transactionId'] = valueTransactionId;

	var valueCustomerProfileId = $formValues.find('.valueCustomerProfileId').val();
	if(valueCustomerProfileId != null && valueCustomerProfileId !== '')
		vals['customerProfileId'] = valueCustomerProfileId;

	var valueTransactionStatus = $formValues.find('.valueTransactionStatus').val();
	if(valueTransactionStatus != null && valueTransactionStatus !== '')
		vals['transactionStatus'] = valueTransactionStatus;

	var valuePaymentRecieved = $formValues.find('.valuePaymentRecieved').prop('checked');
	if(valuePaymentRecieved != null && valuePaymentRecieved !== '')
		vals['paymentRecieved'] = valuePaymentRecieved;

	var valueChargeAmount = $formValues.find('.valueChargeAmount').val();
	if(valueChargeAmount != null && valueChargeAmount !== '')
		vals['chargeAmount'] = valueChargeAmount;

	var valueChargeFirstLast = $formValues.find('.valueChargeFirstLast').prop('checked');
	if(valueChargeFirstLast != null && valueChargeFirstLast !== '')
		vals['chargeFirstLast'] = valueChargeFirstLast;

	var valueChargeEnrollment = $formValues.find('.valueChargeEnrollment').prop('checked');
	if(valueChargeEnrollment != null && valueChargeEnrollment !== '')
		vals['chargeEnrollment'] = valueChargeEnrollment;

	var valueChargeMonth = $formValues.find('.valueChargeMonth').prop('checked');
	if(valueChargeMonth != null && valueChargeMonth !== '')
		vals['chargeMonth'] = valueChargeMonth;

	var valueChargeLateFee = $formValues.find('.valueChargeLateFee').prop('checked');
	if(valueChargeLateFee != null && valueChargeLateFee !== '')
		vals['chargeLateFee'] = valueChargeLateFee;

	var valueEnrollmentKey = $formValues.find('.valueEnrollmentKey').val();
	if(valueEnrollmentKey != null && valueEnrollmentKey !== '')
		vals['enrollmentKey'] = valueEnrollmentKey;

	var valueLateFeeDate = $formValues.find('.valueLateFeeDate').val();
	if(valueLateFeeDate != null && valueLateFeeDate !== '')
		vals['lateFeeDate'] = valueLateFeeDate;

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
		url: '/api/payment'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSchoolPaymentVals(vals, success, error) {
	$.ajax({
		url: '/api/payment'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportSchoolPayment($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportSchoolPaymentVals(JSON.parse(json), success, error);
}

function putimportSchoolPaymentVals(json, success, error) {
	$.ajax({
		url: '/api/payment/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeSchoolPayment($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeSchoolPaymentVals(JSON.parse(json), success, error);
}

function putmergeSchoolPaymentVals(json, success, error) {
	$.ajax({
		url: '/api/payment/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopySchoolPayment($formValues, pk, success, error) {
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

	var valuePaymentCash = $formValues.find('.valuePaymentCash').prop('checked');
	if(valuePaymentCash != null && valuePaymentCash !== '')
		vals['paymentCash'] = valuePaymentCash;

	var valuePaymentCheck = $formValues.find('.valuePaymentCheck').prop('checked');
	if(valuePaymentCheck != null && valuePaymentCheck !== '')
		vals['paymentCheck'] = valuePaymentCheck;

	var valuePaymentECheck = $formValues.find('.valuePaymentECheck').prop('checked');
	if(valuePaymentECheck != null && valuePaymentECheck !== '')
		vals['paymentECheck'] = valuePaymentECheck;

	var valuePaymentSystem = $formValues.find('.valuePaymentSystem').prop('checked');
	if(valuePaymentSystem != null && valuePaymentSystem !== '')
		vals['paymentSystem'] = valuePaymentSystem;

	var valuePaymentDescription = $formValues.find('.valuePaymentDescription').val();
	if(valuePaymentDescription != null && valuePaymentDescription !== '')
		vals['paymentDescription'] = valuePaymentDescription;

	var valuePaymentBy = $formValues.find('.valuePaymentBy').val();
	if(valuePaymentBy != null && valuePaymentBy !== '')
		vals['paymentBy'] = valuePaymentBy;

	var valueEnrollmentPaymentEachMonth = $formValues.find('.valueEnrollmentPaymentEachMonth').prop('checked');
	if(valueEnrollmentPaymentEachMonth != null && valueEnrollmentPaymentEachMonth !== '')
		vals['enrollmentPaymentEachMonth'] = valueEnrollmentPaymentEachMonth;

	var valueTransactionId = $formValues.find('.valueTransactionId').val();
	if(valueTransactionId != null && valueTransactionId !== '')
		vals['transactionId'] = valueTransactionId;

	var valueCustomerProfileId = $formValues.find('.valueCustomerProfileId').val();
	if(valueCustomerProfileId != null && valueCustomerProfileId !== '')
		vals['customerProfileId'] = valueCustomerProfileId;

	var valueTransactionStatus = $formValues.find('.valueTransactionStatus').val();
	if(valueTransactionStatus != null && valueTransactionStatus !== '')
		vals['transactionStatus'] = valueTransactionStatus;

	var valuePaymentRecieved = $formValues.find('.valuePaymentRecieved').prop('checked');
	if(valuePaymentRecieved != null && valuePaymentRecieved !== '')
		vals['paymentRecieved'] = valuePaymentRecieved;

	var valueChargeAmount = $formValues.find('.valueChargeAmount').val();
	if(valueChargeAmount != null && valueChargeAmount !== '')
		vals['chargeAmount'] = valueChargeAmount;

	var valueChargeFirstLast = $formValues.find('.valueChargeFirstLast').prop('checked');
	if(valueChargeFirstLast != null && valueChargeFirstLast !== '')
		vals['chargeFirstLast'] = valueChargeFirstLast;

	var valueChargeEnrollment = $formValues.find('.valueChargeEnrollment').prop('checked');
	if(valueChargeEnrollment != null && valueChargeEnrollment !== '')
		vals['chargeEnrollment'] = valueChargeEnrollment;

	var valueChargeMonth = $formValues.find('.valueChargeMonth').prop('checked');
	if(valueChargeMonth != null && valueChargeMonth !== '')
		vals['chargeMonth'] = valueChargeMonth;

	var valueChargeLateFee = $formValues.find('.valueChargeLateFee').prop('checked');
	if(valueChargeLateFee != null && valueChargeLateFee !== '')
		vals['chargeLateFee'] = valueChargeLateFee;

	var valueEnrollmentKey = $formValues.find('input.valueEnrollmentKey:checked').val();
	if(valueEnrollmentKey != null && valueEnrollmentKey !== '')
		vals['enrollmentKey'] = valueEnrollmentKey;

	var valueLateFeeDate = $formValues.find('.valueLateFeeDate').val();
	if(valueLateFeeDate != null && valueLateFeeDate !== '')
		vals['lateFeeDate'] = valueLateFeeDate;

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

	putcopySchoolPaymentVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopySchoolPaymentVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/payment/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSchoolPayment($formFilters, $formValues, pk, success, error) {
	var filters = patchSchoolPaymentFilters($formFilters);

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

	var valuePaymentCash = $formValues.find('.valuePaymentCash').prop('checked');
	var removePaymentCash = $formValues.find('.removePaymentCash').val() === 'true';
	var valuePaymentCashSelectVal = $formValues.find('select.setPaymentCash').val();
	var valuePaymentCash = null;
	if(valuePaymentCashSelectVal != null && valuePaymentCashSelectVal !== '')
		valuePaymentCash = valuePaymentCashSelectVal == 'true';
	var setPaymentCash = removePaymentCash ? null : valuePaymentCash;
	var addPaymentCash = $formValues.find('.addPaymentCash').prop('checked');
	if(removePaymentCash || setPaymentCash != null && setPaymentCash !== '')
		vals['setPaymentCash'] = setPaymentCash;
	if(addPaymentCash != null && addPaymentCash !== '')
		vals['addPaymentCash'] = addPaymentCash;
	var removePaymentCash = $formValues.find('.removePaymentCash').prop('checked');
	if(removePaymentCash != null && removePaymentCash !== '')
		vals['removePaymentCash'] = removePaymentCash;

	var valuePaymentCheck = $formValues.find('.valuePaymentCheck').prop('checked');
	var removePaymentCheck = $formValues.find('.removePaymentCheck').val() === 'true';
	var valuePaymentCheckSelectVal = $formValues.find('select.setPaymentCheck').val();
	var valuePaymentCheck = null;
	if(valuePaymentCheckSelectVal != null && valuePaymentCheckSelectVal !== '')
		valuePaymentCheck = valuePaymentCheckSelectVal == 'true';
	var setPaymentCheck = removePaymentCheck ? null : valuePaymentCheck;
	var addPaymentCheck = $formValues.find('.addPaymentCheck').prop('checked');
	if(removePaymentCheck || setPaymentCheck != null && setPaymentCheck !== '')
		vals['setPaymentCheck'] = setPaymentCheck;
	if(addPaymentCheck != null && addPaymentCheck !== '')
		vals['addPaymentCheck'] = addPaymentCheck;
	var removePaymentCheck = $formValues.find('.removePaymentCheck').prop('checked');
	if(removePaymentCheck != null && removePaymentCheck !== '')
		vals['removePaymentCheck'] = removePaymentCheck;

	var valuePaymentECheck = $formValues.find('.valuePaymentECheck').prop('checked');
	var removePaymentECheck = $formValues.find('.removePaymentECheck').val() === 'true';
	var valuePaymentECheckSelectVal = $formValues.find('select.setPaymentECheck').val();
	var valuePaymentECheck = null;
	if(valuePaymentECheckSelectVal != null && valuePaymentECheckSelectVal !== '')
		valuePaymentECheck = valuePaymentECheckSelectVal == 'true';
	var setPaymentECheck = removePaymentECheck ? null : valuePaymentECheck;
	var addPaymentECheck = $formValues.find('.addPaymentECheck').prop('checked');
	if(removePaymentECheck || setPaymentECheck != null && setPaymentECheck !== '')
		vals['setPaymentECheck'] = setPaymentECheck;
	if(addPaymentECheck != null && addPaymentECheck !== '')
		vals['addPaymentECheck'] = addPaymentECheck;
	var removePaymentECheck = $formValues.find('.removePaymentECheck').prop('checked');
	if(removePaymentECheck != null && removePaymentECheck !== '')
		vals['removePaymentECheck'] = removePaymentECheck;

	var valuePaymentSystem = $formValues.find('.valuePaymentSystem').prop('checked');
	var removePaymentSystem = $formValues.find('.removePaymentSystem').val() === 'true';
	var valuePaymentSystemSelectVal = $formValues.find('select.setPaymentSystem').val();
	var valuePaymentSystem = null;
	if(valuePaymentSystemSelectVal != null && valuePaymentSystemSelectVal !== '')
		valuePaymentSystem = valuePaymentSystemSelectVal == 'true';
	var setPaymentSystem = removePaymentSystem ? null : valuePaymentSystem;
	var addPaymentSystem = $formValues.find('.addPaymentSystem').prop('checked');
	if(removePaymentSystem || setPaymentSystem != null && setPaymentSystem !== '')
		vals['setPaymentSystem'] = setPaymentSystem;
	if(addPaymentSystem != null && addPaymentSystem !== '')
		vals['addPaymentSystem'] = addPaymentSystem;
	var removePaymentSystem = $formValues.find('.removePaymentSystem').prop('checked');
	if(removePaymentSystem != null && removePaymentSystem !== '')
		vals['removePaymentSystem'] = removePaymentSystem;

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

	var valuePaymentBy = $formValues.find('.valuePaymentBy').val();
	var removePaymentBy = $formValues.find('.removePaymentBy').val() === 'true';
	var setPaymentBy = removePaymentBy ? null : $formValues.find('.setPaymentBy').val();
	var addPaymentBy = $formValues.find('.addPaymentBy').val();
	if(removePaymentBy || setPaymentBy != null && setPaymentBy !== '')
		vals['setPaymentBy'] = setPaymentBy;
	if(addPaymentBy != null && addPaymentBy !== '')
		vals['addPaymentBy'] = addPaymentBy;
	var removePaymentBy = $formValues.find('.removePaymentBy').val();
	if(removePaymentBy != null && removePaymentBy !== '')
		vals['removePaymentBy'] = removePaymentBy;

	var valueEnrollmentPaymentEachMonth = $formValues.find('.valueEnrollmentPaymentEachMonth').prop('checked');
	var removeEnrollmentPaymentEachMonth = $formValues.find('.removeEnrollmentPaymentEachMonth').val() === 'true';
	var valueEnrollmentPaymentEachMonthSelectVal = $formValues.find('select.setEnrollmentPaymentEachMonth').val();
	var valueEnrollmentPaymentEachMonth = null;
	if(valueEnrollmentPaymentEachMonthSelectVal != null && valueEnrollmentPaymentEachMonthSelectVal !== '')
		valueEnrollmentPaymentEachMonth = valueEnrollmentPaymentEachMonthSelectVal == 'true';
	var setEnrollmentPaymentEachMonth = removeEnrollmentPaymentEachMonth ? null : valueEnrollmentPaymentEachMonth;
	var addEnrollmentPaymentEachMonth = $formValues.find('.addEnrollmentPaymentEachMonth').prop('checked');
	if(removeEnrollmentPaymentEachMonth || setEnrollmentPaymentEachMonth != null && setEnrollmentPaymentEachMonth !== '')
		vals['setEnrollmentPaymentEachMonth'] = setEnrollmentPaymentEachMonth;
	if(addEnrollmentPaymentEachMonth != null && addEnrollmentPaymentEachMonth !== '')
		vals['addEnrollmentPaymentEachMonth'] = addEnrollmentPaymentEachMonth;
	var removeEnrollmentPaymentEachMonth = $formValues.find('.removeEnrollmentPaymentEachMonth').prop('checked');
	if(removeEnrollmentPaymentEachMonth != null && removeEnrollmentPaymentEachMonth !== '')
		vals['removeEnrollmentPaymentEachMonth'] = removeEnrollmentPaymentEachMonth;

	var valueTransactionId = $formValues.find('.valueTransactionId').val();
	var removeTransactionId = $formValues.find('.removeTransactionId').val() === 'true';
	var setTransactionId = removeTransactionId ? null : $formValues.find('.setTransactionId').val();
	var addTransactionId = $formValues.find('.addTransactionId').val();
	if(removeTransactionId || setTransactionId != null && setTransactionId !== '')
		vals['setTransactionId'] = setTransactionId;
	if(addTransactionId != null && addTransactionId !== '')
		vals['addTransactionId'] = addTransactionId;
	var removeTransactionId = $formValues.find('.removeTransactionId').val();
	if(removeTransactionId != null && removeTransactionId !== '')
		vals['removeTransactionId'] = removeTransactionId;

	var valueCustomerProfileId = $formValues.find('.valueCustomerProfileId').val();
	var removeCustomerProfileId = $formValues.find('.removeCustomerProfileId').val() === 'true';
	var setCustomerProfileId = removeCustomerProfileId ? null : $formValues.find('.setCustomerProfileId').val();
	var addCustomerProfileId = $formValues.find('.addCustomerProfileId').val();
	if(removeCustomerProfileId || setCustomerProfileId != null && setCustomerProfileId !== '')
		vals['setCustomerProfileId'] = setCustomerProfileId;
	if(addCustomerProfileId != null && addCustomerProfileId !== '')
		vals['addCustomerProfileId'] = addCustomerProfileId;
	var removeCustomerProfileId = $formValues.find('.removeCustomerProfileId').val();
	if(removeCustomerProfileId != null && removeCustomerProfileId !== '')
		vals['removeCustomerProfileId'] = removeCustomerProfileId;

	var valueTransactionStatus = $formValues.find('.valueTransactionStatus').val();
	var removeTransactionStatus = $formValues.find('.removeTransactionStatus').val() === 'true';
	var setTransactionStatus = removeTransactionStatus ? null : $formValues.find('.setTransactionStatus').val();
	var addTransactionStatus = $formValues.find('.addTransactionStatus').val();
	if(removeTransactionStatus || setTransactionStatus != null && setTransactionStatus !== '')
		vals['setTransactionStatus'] = setTransactionStatus;
	if(addTransactionStatus != null && addTransactionStatus !== '')
		vals['addTransactionStatus'] = addTransactionStatus;
	var removeTransactionStatus = $formValues.find('.removeTransactionStatus').val();
	if(removeTransactionStatus != null && removeTransactionStatus !== '')
		vals['removeTransactionStatus'] = removeTransactionStatus;

	var valuePaymentRecieved = $formValues.find('.valuePaymentRecieved').prop('checked');
	var removePaymentRecieved = $formValues.find('.removePaymentRecieved').val() === 'true';
	var valuePaymentRecievedSelectVal = $formValues.find('select.setPaymentRecieved').val();
	var valuePaymentRecieved = null;
	if(valuePaymentRecievedSelectVal != null && valuePaymentRecievedSelectVal !== '')
		valuePaymentRecieved = valuePaymentRecievedSelectVal == 'true';
	var setPaymentRecieved = removePaymentRecieved ? null : valuePaymentRecieved;
	var addPaymentRecieved = $formValues.find('.addPaymentRecieved').prop('checked');
	if(removePaymentRecieved || setPaymentRecieved != null && setPaymentRecieved !== '')
		vals['setPaymentRecieved'] = setPaymentRecieved;
	if(addPaymentRecieved != null && addPaymentRecieved !== '')
		vals['addPaymentRecieved'] = addPaymentRecieved;
	var removePaymentRecieved = $formValues.find('.removePaymentRecieved').prop('checked');
	if(removePaymentRecieved != null && removePaymentRecieved !== '')
		vals['removePaymentRecieved'] = removePaymentRecieved;

	var valueChargeAmount = $formValues.find('.valueChargeAmount').val();
	var removeChargeAmount = $formValues.find('.removeChargeAmount').val() === 'true';
	var setChargeAmount = removeChargeAmount ? null : $formValues.find('.setChargeAmount').val();
	var addChargeAmount = $formValues.find('.addChargeAmount').val();
	if(removeChargeAmount || setChargeAmount != null && setChargeAmount !== '')
		vals['setChargeAmount'] = setChargeAmount;
	if(addChargeAmount != null && addChargeAmount !== '')
		vals['addChargeAmount'] = addChargeAmount;
	var removeChargeAmount = $formValues.find('.removeChargeAmount').val();
	if(removeChargeAmount != null && removeChargeAmount !== '')
		vals['removeChargeAmount'] = removeChargeAmount;

	var valueChargeFirstLast = $formValues.find('.valueChargeFirstLast').prop('checked');
	var removeChargeFirstLast = $formValues.find('.removeChargeFirstLast').val() === 'true';
	var valueChargeFirstLastSelectVal = $formValues.find('select.setChargeFirstLast').val();
	var valueChargeFirstLast = null;
	if(valueChargeFirstLastSelectVal != null && valueChargeFirstLastSelectVal !== '')
		valueChargeFirstLast = valueChargeFirstLastSelectVal == 'true';
	var setChargeFirstLast = removeChargeFirstLast ? null : valueChargeFirstLast;
	var addChargeFirstLast = $formValues.find('.addChargeFirstLast').prop('checked');
	if(removeChargeFirstLast || setChargeFirstLast != null && setChargeFirstLast !== '')
		vals['setChargeFirstLast'] = setChargeFirstLast;
	if(addChargeFirstLast != null && addChargeFirstLast !== '')
		vals['addChargeFirstLast'] = addChargeFirstLast;
	var removeChargeFirstLast = $formValues.find('.removeChargeFirstLast').prop('checked');
	if(removeChargeFirstLast != null && removeChargeFirstLast !== '')
		vals['removeChargeFirstLast'] = removeChargeFirstLast;

	var valueChargeEnrollment = $formValues.find('.valueChargeEnrollment').prop('checked');
	var removeChargeEnrollment = $formValues.find('.removeChargeEnrollment').val() === 'true';
	var valueChargeEnrollmentSelectVal = $formValues.find('select.setChargeEnrollment').val();
	var valueChargeEnrollment = null;
	if(valueChargeEnrollmentSelectVal != null && valueChargeEnrollmentSelectVal !== '')
		valueChargeEnrollment = valueChargeEnrollmentSelectVal == 'true';
	var setChargeEnrollment = removeChargeEnrollment ? null : valueChargeEnrollment;
	var addChargeEnrollment = $formValues.find('.addChargeEnrollment').prop('checked');
	if(removeChargeEnrollment || setChargeEnrollment != null && setChargeEnrollment !== '')
		vals['setChargeEnrollment'] = setChargeEnrollment;
	if(addChargeEnrollment != null && addChargeEnrollment !== '')
		vals['addChargeEnrollment'] = addChargeEnrollment;
	var removeChargeEnrollment = $formValues.find('.removeChargeEnrollment').prop('checked');
	if(removeChargeEnrollment != null && removeChargeEnrollment !== '')
		vals['removeChargeEnrollment'] = removeChargeEnrollment;

	var valueChargeMonth = $formValues.find('.valueChargeMonth').prop('checked');
	var removeChargeMonth = $formValues.find('.removeChargeMonth').val() === 'true';
	var valueChargeMonthSelectVal = $formValues.find('select.setChargeMonth').val();
	var valueChargeMonth = null;
	if(valueChargeMonthSelectVal != null && valueChargeMonthSelectVal !== '')
		valueChargeMonth = valueChargeMonthSelectVal == 'true';
	var setChargeMonth = removeChargeMonth ? null : valueChargeMonth;
	var addChargeMonth = $formValues.find('.addChargeMonth').prop('checked');
	if(removeChargeMonth || setChargeMonth != null && setChargeMonth !== '')
		vals['setChargeMonth'] = setChargeMonth;
	if(addChargeMonth != null && addChargeMonth !== '')
		vals['addChargeMonth'] = addChargeMonth;
	var removeChargeMonth = $formValues.find('.removeChargeMonth').prop('checked');
	if(removeChargeMonth != null && removeChargeMonth !== '')
		vals['removeChargeMonth'] = removeChargeMonth;

	var valueChargeLateFee = $formValues.find('.valueChargeLateFee').prop('checked');
	var removeChargeLateFee = $formValues.find('.removeChargeLateFee').val() === 'true';
	var valueChargeLateFeeSelectVal = $formValues.find('select.setChargeLateFee').val();
	var valueChargeLateFee = null;
	if(valueChargeLateFeeSelectVal != null && valueChargeLateFeeSelectVal !== '')
		valueChargeLateFee = valueChargeLateFeeSelectVal == 'true';
	var setChargeLateFee = removeChargeLateFee ? null : valueChargeLateFee;
	var addChargeLateFee = $formValues.find('.addChargeLateFee').prop('checked');
	if(removeChargeLateFee || setChargeLateFee != null && setChargeLateFee !== '')
		vals['setChargeLateFee'] = setChargeLateFee;
	if(addChargeLateFee != null && addChargeLateFee !== '')
		vals['addChargeLateFee'] = addChargeLateFee;
	var removeChargeLateFee = $formValues.find('.removeChargeLateFee').prop('checked');
	if(removeChargeLateFee != null && removeChargeLateFee !== '')
		vals['removeChargeLateFee'] = removeChargeLateFee;

	var valueEnrollmentKey = $formValues.find('input.valueEnrollmentKey:checked').val();
	if(valueEnrollmentKey != null && valueEnrollmentKey !== '')
		vals['setEnrollmentKey'] = valueEnrollmentKey;

	var valueLateFeeDate = $formValues.find('.valueLateFeeDate').val();
	var removeLateFeeDate = $formValues.find('.removeLateFeeDate').val() === 'true';
	var setLateFeeDate = removeLateFeeDate ? null : $formValues.find('.setLateFeeDate').val();
	var addLateFeeDate = $formValues.find('.addLateFeeDate').val();
	var setMoment = setLateFeeDate ? moment(setLateFeeDate, 'MM/DD/YYYY') : null; 
	var addMoment = addLateFeeDate ? moment(addLateFeeDate, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setLateFeeDate = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addLateFeeDate = s;
	} 
	if(removeLateFeeDate || setLateFeeDate != null && setLateFeeDate !== '')
		vals['setLateFeeDate'] = setLateFeeDate;
	if(addLateFeeDate != null && addLateFeeDate !== '')
		vals['addLateFeeDate'] = addLateFeeDate;
	var removeLateFeeDate = $formValues.find('.removeLateFeeDate').val();
	if(removeLateFeeDate != null && removeLateFeeDate !== '')
		vals['removeLateFeeDate'] = removeLateFeeDate;

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

	patchSchoolPaymentVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSchoolPaymentFilters($formFilters) {
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

		var $filterPaymentCashCheckbox = $formFilters.find('input.valuePaymentCash[type = "checkbox"]');
		var $filterPaymentCashSelect = $formFilters.find('select.valuePaymentCash');
		var filterPaymentCash = $filterPaymentCashSelect.length ? $filterPaymentCashSelect.val() : $filterPaymentCashCheckbox.prop('checked');
		var filterPaymentCashSelectVal = $formFilters.find('select.filterPaymentCash').val();
		var filterPaymentCash = null;
		if(filterPaymentCashSelectVal !== '')
			filterPaymentCash = filterPaymentCashSelectVal == 'true';
		if(filterPaymentCash != null && filterPaymentCash === true)
			filters.push({ name: 'fq', value: 'paymentCash:' + filterPaymentCash });

		var $filterPaymentCheckCheckbox = $formFilters.find('input.valuePaymentCheck[type = "checkbox"]');
		var $filterPaymentCheckSelect = $formFilters.find('select.valuePaymentCheck');
		var filterPaymentCheck = $filterPaymentCheckSelect.length ? $filterPaymentCheckSelect.val() : $filterPaymentCheckCheckbox.prop('checked');
		var filterPaymentCheckSelectVal = $formFilters.find('select.filterPaymentCheck').val();
		var filterPaymentCheck = null;
		if(filterPaymentCheckSelectVal !== '')
			filterPaymentCheck = filterPaymentCheckSelectVal == 'true';
		if(filterPaymentCheck != null && filterPaymentCheck === true)
			filters.push({ name: 'fq', value: 'paymentCheck:' + filterPaymentCheck });

		var $filterPaymentECheckCheckbox = $formFilters.find('input.valuePaymentECheck[type = "checkbox"]');
		var $filterPaymentECheckSelect = $formFilters.find('select.valuePaymentECheck');
		var filterPaymentECheck = $filterPaymentECheckSelect.length ? $filterPaymentECheckSelect.val() : $filterPaymentECheckCheckbox.prop('checked');
		var filterPaymentECheckSelectVal = $formFilters.find('select.filterPaymentECheck').val();
		var filterPaymentECheck = null;
		if(filterPaymentECheckSelectVal !== '')
			filterPaymentECheck = filterPaymentECheckSelectVal == 'true';
		if(filterPaymentECheck != null && filterPaymentECheck === true)
			filters.push({ name: 'fq', value: 'paymentECheck:' + filterPaymentECheck });

		var $filterPaymentSystemCheckbox = $formFilters.find('input.valuePaymentSystem[type = "checkbox"]');
		var $filterPaymentSystemSelect = $formFilters.find('select.valuePaymentSystem');
		var filterPaymentSystem = $filterPaymentSystemSelect.length ? $filterPaymentSystemSelect.val() : $filterPaymentSystemCheckbox.prop('checked');
		var filterPaymentSystemSelectVal = $formFilters.find('select.filterPaymentSystem').val();
		var filterPaymentSystem = null;
		if(filterPaymentSystemSelectVal !== '')
			filterPaymentSystem = filterPaymentSystemSelectVal == 'true';
		if(filterPaymentSystem != null && filterPaymentSystem === true)
			filters.push({ name: 'fq', value: 'paymentSystem:' + filterPaymentSystem });

		var filterPaymentDescription = $formFilters.find('.valuePaymentDescription').val();
		if(filterPaymentDescription != null && filterPaymentDescription !== '')
			filters.push({ name: 'fq', value: 'paymentDescription:' + filterPaymentDescription });

		var filterPaymentBy = $formFilters.find('.valuePaymentBy').val();
		if(filterPaymentBy != null && filterPaymentBy !== '')
			filters.push({ name: 'fq', value: 'paymentBy:' + filterPaymentBy });

		var $filterEnrollmentPaymentEachMonthCheckbox = $formFilters.find('input.valueEnrollmentPaymentEachMonth[type = "checkbox"]');
		var $filterEnrollmentPaymentEachMonthSelect = $formFilters.find('select.valueEnrollmentPaymentEachMonth');
		var filterEnrollmentPaymentEachMonth = $filterEnrollmentPaymentEachMonthSelect.length ? $filterEnrollmentPaymentEachMonthSelect.val() : $filterEnrollmentPaymentEachMonthCheckbox.prop('checked');
		var filterEnrollmentPaymentEachMonthSelectVal = $formFilters.find('select.filterEnrollmentPaymentEachMonth').val();
		var filterEnrollmentPaymentEachMonth = null;
		if(filterEnrollmentPaymentEachMonthSelectVal !== '')
			filterEnrollmentPaymentEachMonth = filterEnrollmentPaymentEachMonthSelectVal == 'true';
		if(filterEnrollmentPaymentEachMonth != null && filterEnrollmentPaymentEachMonth === true)
			filters.push({ name: 'fq', value: 'enrollmentPaymentEachMonth:' + filterEnrollmentPaymentEachMonth });

		var filterTransactionId = $formFilters.find('.valueTransactionId').val();
		if(filterTransactionId != null && filterTransactionId !== '')
			filters.push({ name: 'fq', value: 'transactionId:' + filterTransactionId });

		var filterCustomerProfileId = $formFilters.find('.valueCustomerProfileId').val();
		if(filterCustomerProfileId != null && filterCustomerProfileId !== '')
			filters.push({ name: 'fq', value: 'customerProfileId:' + filterCustomerProfileId });

		var filterTransactionStatus = $formFilters.find('.valueTransactionStatus').val();
		if(filterTransactionStatus != null && filterTransactionStatus !== '')
			filters.push({ name: 'fq', value: 'transactionStatus:' + filterTransactionStatus });

		var $filterPaymentRecievedCheckbox = $formFilters.find('input.valuePaymentRecieved[type = "checkbox"]');
		var $filterPaymentRecievedSelect = $formFilters.find('select.valuePaymentRecieved');
		var filterPaymentRecieved = $filterPaymentRecievedSelect.length ? $filterPaymentRecievedSelect.val() : $filterPaymentRecievedCheckbox.prop('checked');
		var filterPaymentRecievedSelectVal = $formFilters.find('select.filterPaymentRecieved').val();
		var filterPaymentRecieved = null;
		if(filterPaymentRecievedSelectVal !== '')
			filterPaymentRecieved = filterPaymentRecievedSelectVal == 'true';
		if(filterPaymentRecieved != null && filterPaymentRecieved === true)
			filters.push({ name: 'fq', value: 'paymentRecieved:' + filterPaymentRecieved });

		var filterChargeAmount = $formFilters.find('.valueChargeAmount').val();
		if(filterChargeAmount != null && filterChargeAmount !== '')
			filters.push({ name: 'fq', value: 'chargeAmount:' + filterChargeAmount });

		var $filterChargeFirstLastCheckbox = $formFilters.find('input.valueChargeFirstLast[type = "checkbox"]');
		var $filterChargeFirstLastSelect = $formFilters.find('select.valueChargeFirstLast');
		var filterChargeFirstLast = $filterChargeFirstLastSelect.length ? $filterChargeFirstLastSelect.val() : $filterChargeFirstLastCheckbox.prop('checked');
		var filterChargeFirstLastSelectVal = $formFilters.find('select.filterChargeFirstLast').val();
		var filterChargeFirstLast = null;
		if(filterChargeFirstLastSelectVal !== '')
			filterChargeFirstLast = filterChargeFirstLastSelectVal == 'true';
		if(filterChargeFirstLast != null && filterChargeFirstLast === true)
			filters.push({ name: 'fq', value: 'chargeFirstLast:' + filterChargeFirstLast });

		var $filterChargeEnrollmentCheckbox = $formFilters.find('input.valueChargeEnrollment[type = "checkbox"]');
		var $filterChargeEnrollmentSelect = $formFilters.find('select.valueChargeEnrollment');
		var filterChargeEnrollment = $filterChargeEnrollmentSelect.length ? $filterChargeEnrollmentSelect.val() : $filterChargeEnrollmentCheckbox.prop('checked');
		var filterChargeEnrollmentSelectVal = $formFilters.find('select.filterChargeEnrollment').val();
		var filterChargeEnrollment = null;
		if(filterChargeEnrollmentSelectVal !== '')
			filterChargeEnrollment = filterChargeEnrollmentSelectVal == 'true';
		if(filterChargeEnrollment != null && filterChargeEnrollment === true)
			filters.push({ name: 'fq', value: 'chargeEnrollment:' + filterChargeEnrollment });

		var $filterChargeMonthCheckbox = $formFilters.find('input.valueChargeMonth[type = "checkbox"]');
		var $filterChargeMonthSelect = $formFilters.find('select.valueChargeMonth');
		var filterChargeMonth = $filterChargeMonthSelect.length ? $filterChargeMonthSelect.val() : $filterChargeMonthCheckbox.prop('checked');
		var filterChargeMonthSelectVal = $formFilters.find('select.filterChargeMonth').val();
		var filterChargeMonth = null;
		if(filterChargeMonthSelectVal !== '')
			filterChargeMonth = filterChargeMonthSelectVal == 'true';
		if(filterChargeMonth != null && filterChargeMonth === true)
			filters.push({ name: 'fq', value: 'chargeMonth:' + filterChargeMonth });

		var $filterChargeLateFeeCheckbox = $formFilters.find('input.valueChargeLateFee[type = "checkbox"]');
		var $filterChargeLateFeeSelect = $formFilters.find('select.valueChargeLateFee');
		var filterChargeLateFee = $filterChargeLateFeeSelect.length ? $filterChargeLateFeeSelect.val() : $filterChargeLateFeeCheckbox.prop('checked');
		var filterChargeLateFeeSelectVal = $formFilters.find('select.filterChargeLateFee').val();
		var filterChargeLateFee = null;
		if(filterChargeLateFeeSelectVal !== '')
			filterChargeLateFee = filterChargeLateFeeSelectVal == 'true';
		if(filterChargeLateFee != null && filterChargeLateFee === true)
			filters.push({ name: 'fq', value: 'chargeLateFee:' + filterChargeLateFee });

		var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
		if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });

		var filterLateFeeDate = $formFilters.find('.valueLateFeeDate').val();
		if(filterLateFeeDate != null && filterLateFeeDate !== '')
			filters.push({ name: 'fq', value: 'lateFeeDate:' + filterLateFeeDate });

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

		var filterPaymentKey = $formFilters.find('.valuePaymentKey').val();
		if(filterPaymentKey != null && filterPaymentKey !== '')
			filters.push({ name: 'fq', value: 'paymentKey:' + filterPaymentKey });

		var filterSchoolNumber = $formFilters.find('.valueSchoolNumber').val();
		if(filterSchoolNumber != null && filterSchoolNumber !== '')
			filters.push({ name: 'fq', value: 'schoolNumber:' + filterSchoolNumber });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
		if(filterSchoolKey != null && filterSchoolKey !== '')
			filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

		var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
		if(filterSchoolAddress != null && filterSchoolAddress !== '')
			filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

		var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
		if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

		var filterYearKey = $formFilters.find('.valueYearKey').val();
		if(filterYearKey != null && filterYearKey !== '')
			filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

		var filterSessionKey = $formFilters.find('.valueSessionKey').val();
		if(filterSessionKey != null && filterSessionKey !== '')
			filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

		var filterAgeKey = $formFilters.find('.valueAgeKey').val();
		if(filterAgeKey != null && filterAgeKey !== '')
			filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

		var filterBlockKey = $formFilters.find('.valueBlockKey').val();
		if(filterBlockKey != null && filterBlockKey !== '')
			filters.push({ name: 'fq', value: 'blockKey:' + filterBlockKey });

		var filterChildKey = $formFilters.find('.valueChildKey').val();
		if(filterChildKey != null && filterChildKey !== '')
			filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

		var filterMomKeys = $formFilters.find('.valueMomKeys').val();
		if(filterMomKeys != null && filterMomKeys !== '')
			filters.push({ name: 'fq', value: 'momKeys:' + filterMomKeys });

		var filterDadKeys = $formFilters.find('.valueDadKeys').val();
		if(filterDadKeys != null && filterDadKeys !== '')
			filters.push({ name: 'fq', value: 'dadKeys:' + filterDadKeys });

		var filterGuardianKeys = $formFilters.find('.valueGuardianKeys').val();
		if(filterGuardianKeys != null && filterGuardianKeys !== '')
			filters.push({ name: 'fq', value: 'guardianKeys:' + filterGuardianKeys });

		var filterChildCompleteNamePreferred = $formFilters.find('.valueChildCompleteNamePreferred').val();
		if(filterChildCompleteNamePreferred != null && filterChildCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'childCompleteNamePreferred:' + filterChildCompleteNamePreferred });

		var filterChildBirthDate = $formFilters.find('.valueChildBirthDate').val();
		if(filterChildBirthDate != null && filterChildBirthDate !== '')
			filters.push({ name: 'fq', value: 'childBirthDate:' + filterChildBirthDate });

		var filterMomCompleteNamePreferred = $formFilters.find('.valueMomCompleteNamePreferred').val();
		if(filterMomCompleteNamePreferred != null && filterMomCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'momCompleteNamePreferred:' + filterMomCompleteNamePreferred });

		var filterDadCompleteNamePreferred = $formFilters.find('.valueDadCompleteNamePreferred').val();
		if(filterDadCompleteNamePreferred != null && filterDadCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'dadCompleteNamePreferred:' + filterDadCompleteNamePreferred });

		var filterSchoolName = $formFilters.find('.valueSchoolName').val();
		if(filterSchoolName != null && filterSchoolName !== '')
			filters.push({ name: 'fq', value: 'schoolName:' + filterSchoolName });

		var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
		if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
			filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });

		var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
		if(filterSchoolLocation != null && filterSchoolLocation !== '')
			filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

		var filterYearStart = $formFilters.find('.valueYearStart').val();
		if(filterYearStart != null && filterYearStart !== '')
			filters.push({ name: 'fq', value: 'yearStart:' + filterYearStart });

		var filterYearEnd = $formFilters.find('.valueYearEnd').val();
		if(filterYearEnd != null && filterYearEnd !== '')
			filters.push({ name: 'fq', value: 'yearEnd:' + filterYearEnd });

		var filterSeasonStartDate = $formFilters.find('.valueSeasonStartDate').val();
		if(filterSeasonStartDate != null && filterSeasonStartDate !== '')
			filters.push({ name: 'fq', value: 'seasonStartDate:' + filterSeasonStartDate });

		var filterYearEnrollmentFee = $formFilters.find('.valueYearEnrollmentFee').val();
		if(filterYearEnrollmentFee != null && filterYearEnrollmentFee !== '')
			filters.push({ name: 'fq', value: 'yearEnrollmentFee:' + filterYearEnrollmentFee });

		var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
		if(filterSessionStartDate != null && filterSessionStartDate !== '')
			filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

		var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
		if(filterSessionEndDate != null && filterSessionEndDate !== '')
			filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

		var filterAgeStart = $formFilters.find('.valueAgeStart').val();
		if(filterAgeStart != null && filterAgeStart !== '')
			filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

		var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
		if(filterAgeEnd != null && filterAgeEnd !== '')
			filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

		var filterBlockStartTime = $formFilters.find('.valueBlockStartTime').val();
		if(filterBlockStartTime != null && filterBlockStartTime !== '')
			filters.push({ name: 'fq', value: 'blockStartTime:' + filterBlockStartTime });

		var filterBlockEndTime = $formFilters.find('.valueBlockEndTime').val();
		if(filterBlockEndTime != null && filterBlockEndTime !== '')
			filters.push({ name: 'fq', value: 'blockEndTime:' + filterBlockEndTime });

		var filterBlockPricePerMonth = $formFilters.find('.valueBlockPricePerMonth').val();
		if(filterBlockPricePerMonth != null && filterBlockPricePerMonth !== '')
			filters.push({ name: 'fq', value: 'blockPricePerMonth:' + filterBlockPricePerMonth });

		var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
		if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
			filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

		var filterPaymentYear = $formFilters.find('.valuePaymentYear').val();
		if(filterPaymentYear != null && filterPaymentYear !== '')
			filters.push({ name: 'fq', value: 'paymentYear:' + filterPaymentYear });

		var filterPaymentType = $formFilters.find('.valuePaymentType').val();
		if(filterPaymentType != null && filterPaymentType !== '')
			filters.push({ name: 'fq', value: 'paymentType:' + filterPaymentType });

		var filterPaymentNext = $formFilters.find('.valuePaymentNext').val();
		if(filterPaymentNext != null && filterPaymentNext !== '')
			filters.push({ name: 'fq', value: 'paymentNext:' + filterPaymentNext });

		var filterChargeAmountDue = $formFilters.find('.valueChargeAmountDue').val();
		if(filterChargeAmountDue != null && filterChargeAmountDue !== '')
			filters.push({ name: 'fq', value: 'chargeAmountDue:' + filterChargeAmountDue });

		var filterChargeAmountPassed = $formFilters.find('.valueChargeAmountPassed').val();
		if(filterChargeAmountPassed != null && filterChargeAmountPassed !== '')
			filters.push({ name: 'fq', value: 'chargeAmountPassed:' + filterChargeAmountPassed });

		var filterChargeAmountNotPassed = $formFilters.find('.valueChargeAmountNotPassed').val();
		if(filterChargeAmountNotPassed != null && filterChargeAmountNotPassed !== '')
			filters.push({ name: 'fq', value: 'chargeAmountNotPassed:' + filterChargeAmountNotPassed });

		var filterChargeAmountFuture = $formFilters.find('.valueChargeAmountFuture').val();
		if(filterChargeAmountFuture != null && filterChargeAmountFuture !== '')
			filters.push({ name: 'fq', value: 'chargeAmountFuture:' + filterChargeAmountFuture });

		var filterPaymentShortName = $formFilters.find('.valuePaymentShortName').val();
		if(filterPaymentShortName != null && filterPaymentShortName !== '')
			filters.push({ name: 'fq', value: 'paymentShortName:' + filterPaymentShortName });

		var filterPaymentCompleteName = $formFilters.find('.valuePaymentCompleteName').val();
		if(filterPaymentCompleteName != null && filterPaymentCompleteName !== '')
			filters.push({ name: 'fq', value: 'paymentCompleteName:' + filterPaymentCompleteName });
	}
	return filters;
}

function patchSchoolPaymentVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSchoolPaymentVals(filters, vals, success, error);
}

function patchSchoolPaymentVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/payment?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSchoolPayment(pk) {
	$.ajax({
		url: '/api/payment/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSchoolPayment($formFilters, success, error) {
	var filters = searchSchoolPaymentFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolPaymentVals(filters, success, error);
}

function searchSchoolPaymentFilters($formFilters) {
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

		var $filterPaymentCashCheckbox = $formFilters.find('input.valuePaymentCash[type = "checkbox"]');
		var $filterPaymentCashSelect = $formFilters.find('select.valuePaymentCash');
		var filterPaymentCash = $filterPaymentCashSelect.length ? $filterPaymentCashSelect.val() : $filterPaymentCashCheckbox.prop('checked');
		var filterPaymentCashSelectVal = $formFilters.find('select.filterPaymentCash').val();
		var filterPaymentCash = null;
		if(filterPaymentCashSelectVal !== '')
			filterPaymentCash = filterPaymentCashSelectVal == 'true';
		if(filterPaymentCash != null && filterPaymentCash === true)
			filters.push({ name: 'fq', value: 'paymentCash:' + filterPaymentCash });

		var $filterPaymentCheckCheckbox = $formFilters.find('input.valuePaymentCheck[type = "checkbox"]');
		var $filterPaymentCheckSelect = $formFilters.find('select.valuePaymentCheck');
		var filterPaymentCheck = $filterPaymentCheckSelect.length ? $filterPaymentCheckSelect.val() : $filterPaymentCheckCheckbox.prop('checked');
		var filterPaymentCheckSelectVal = $formFilters.find('select.filterPaymentCheck').val();
		var filterPaymentCheck = null;
		if(filterPaymentCheckSelectVal !== '')
			filterPaymentCheck = filterPaymentCheckSelectVal == 'true';
		if(filterPaymentCheck != null && filterPaymentCheck === true)
			filters.push({ name: 'fq', value: 'paymentCheck:' + filterPaymentCheck });

		var $filterPaymentECheckCheckbox = $formFilters.find('input.valuePaymentECheck[type = "checkbox"]');
		var $filterPaymentECheckSelect = $formFilters.find('select.valuePaymentECheck');
		var filterPaymentECheck = $filterPaymentECheckSelect.length ? $filterPaymentECheckSelect.val() : $filterPaymentECheckCheckbox.prop('checked');
		var filterPaymentECheckSelectVal = $formFilters.find('select.filterPaymentECheck').val();
		var filterPaymentECheck = null;
		if(filterPaymentECheckSelectVal !== '')
			filterPaymentECheck = filterPaymentECheckSelectVal == 'true';
		if(filterPaymentECheck != null && filterPaymentECheck === true)
			filters.push({ name: 'fq', value: 'paymentECheck:' + filterPaymentECheck });

		var $filterPaymentSystemCheckbox = $formFilters.find('input.valuePaymentSystem[type = "checkbox"]');
		var $filterPaymentSystemSelect = $formFilters.find('select.valuePaymentSystem');
		var filterPaymentSystem = $filterPaymentSystemSelect.length ? $filterPaymentSystemSelect.val() : $filterPaymentSystemCheckbox.prop('checked');
		var filterPaymentSystemSelectVal = $formFilters.find('select.filterPaymentSystem').val();
		var filterPaymentSystem = null;
		if(filterPaymentSystemSelectVal !== '')
			filterPaymentSystem = filterPaymentSystemSelectVal == 'true';
		if(filterPaymentSystem != null && filterPaymentSystem === true)
			filters.push({ name: 'fq', value: 'paymentSystem:' + filterPaymentSystem });

		var filterPaymentDescription = $formFilters.find('.valuePaymentDescription').val();
		if(filterPaymentDescription != null && filterPaymentDescription !== '')
			filters.push({ name: 'fq', value: 'paymentDescription:' + filterPaymentDescription });

		var filterPaymentBy = $formFilters.find('.valuePaymentBy').val();
		if(filterPaymentBy != null && filterPaymentBy !== '')
			filters.push({ name: 'fq', value: 'paymentBy:' + filterPaymentBy });

		var $filterEnrollmentPaymentEachMonthCheckbox = $formFilters.find('input.valueEnrollmentPaymentEachMonth[type = "checkbox"]');
		var $filterEnrollmentPaymentEachMonthSelect = $formFilters.find('select.valueEnrollmentPaymentEachMonth');
		var filterEnrollmentPaymentEachMonth = $filterEnrollmentPaymentEachMonthSelect.length ? $filterEnrollmentPaymentEachMonthSelect.val() : $filterEnrollmentPaymentEachMonthCheckbox.prop('checked');
		var filterEnrollmentPaymentEachMonthSelectVal = $formFilters.find('select.filterEnrollmentPaymentEachMonth').val();
		var filterEnrollmentPaymentEachMonth = null;
		if(filterEnrollmentPaymentEachMonthSelectVal !== '')
			filterEnrollmentPaymentEachMonth = filterEnrollmentPaymentEachMonthSelectVal == 'true';
		if(filterEnrollmentPaymentEachMonth != null && filterEnrollmentPaymentEachMonth === true)
			filters.push({ name: 'fq', value: 'enrollmentPaymentEachMonth:' + filterEnrollmentPaymentEachMonth });

		var filterTransactionId = $formFilters.find('.valueTransactionId').val();
		if(filterTransactionId != null && filterTransactionId !== '')
			filters.push({ name: 'fq', value: 'transactionId:' + filterTransactionId });

		var filterCustomerProfileId = $formFilters.find('.valueCustomerProfileId').val();
		if(filterCustomerProfileId != null && filterCustomerProfileId !== '')
			filters.push({ name: 'fq', value: 'customerProfileId:' + filterCustomerProfileId });

		var filterTransactionStatus = $formFilters.find('.valueTransactionStatus').val();
		if(filterTransactionStatus != null && filterTransactionStatus !== '')
			filters.push({ name: 'fq', value: 'transactionStatus:' + filterTransactionStatus });

		var $filterPaymentRecievedCheckbox = $formFilters.find('input.valuePaymentRecieved[type = "checkbox"]');
		var $filterPaymentRecievedSelect = $formFilters.find('select.valuePaymentRecieved');
		var filterPaymentRecieved = $filterPaymentRecievedSelect.length ? $filterPaymentRecievedSelect.val() : $filterPaymentRecievedCheckbox.prop('checked');
		var filterPaymentRecievedSelectVal = $formFilters.find('select.filterPaymentRecieved').val();
		var filterPaymentRecieved = null;
		if(filterPaymentRecievedSelectVal !== '')
			filterPaymentRecieved = filterPaymentRecievedSelectVal == 'true';
		if(filterPaymentRecieved != null && filterPaymentRecieved === true)
			filters.push({ name: 'fq', value: 'paymentRecieved:' + filterPaymentRecieved });

		var filterChargeAmount = $formFilters.find('.valueChargeAmount').val();
		if(filterChargeAmount != null && filterChargeAmount !== '')
			filters.push({ name: 'fq', value: 'chargeAmount:' + filterChargeAmount });

		var $filterChargeFirstLastCheckbox = $formFilters.find('input.valueChargeFirstLast[type = "checkbox"]');
		var $filterChargeFirstLastSelect = $formFilters.find('select.valueChargeFirstLast');
		var filterChargeFirstLast = $filterChargeFirstLastSelect.length ? $filterChargeFirstLastSelect.val() : $filterChargeFirstLastCheckbox.prop('checked');
		var filterChargeFirstLastSelectVal = $formFilters.find('select.filterChargeFirstLast').val();
		var filterChargeFirstLast = null;
		if(filterChargeFirstLastSelectVal !== '')
			filterChargeFirstLast = filterChargeFirstLastSelectVal == 'true';
		if(filterChargeFirstLast != null && filterChargeFirstLast === true)
			filters.push({ name: 'fq', value: 'chargeFirstLast:' + filterChargeFirstLast });

		var $filterChargeEnrollmentCheckbox = $formFilters.find('input.valueChargeEnrollment[type = "checkbox"]');
		var $filterChargeEnrollmentSelect = $formFilters.find('select.valueChargeEnrollment');
		var filterChargeEnrollment = $filterChargeEnrollmentSelect.length ? $filterChargeEnrollmentSelect.val() : $filterChargeEnrollmentCheckbox.prop('checked');
		var filterChargeEnrollmentSelectVal = $formFilters.find('select.filterChargeEnrollment').val();
		var filterChargeEnrollment = null;
		if(filterChargeEnrollmentSelectVal !== '')
			filterChargeEnrollment = filterChargeEnrollmentSelectVal == 'true';
		if(filterChargeEnrollment != null && filterChargeEnrollment === true)
			filters.push({ name: 'fq', value: 'chargeEnrollment:' + filterChargeEnrollment });

		var $filterChargeMonthCheckbox = $formFilters.find('input.valueChargeMonth[type = "checkbox"]');
		var $filterChargeMonthSelect = $formFilters.find('select.valueChargeMonth');
		var filterChargeMonth = $filterChargeMonthSelect.length ? $filterChargeMonthSelect.val() : $filterChargeMonthCheckbox.prop('checked');
		var filterChargeMonthSelectVal = $formFilters.find('select.filterChargeMonth').val();
		var filterChargeMonth = null;
		if(filterChargeMonthSelectVal !== '')
			filterChargeMonth = filterChargeMonthSelectVal == 'true';
		if(filterChargeMonth != null && filterChargeMonth === true)
			filters.push({ name: 'fq', value: 'chargeMonth:' + filterChargeMonth });

		var $filterChargeLateFeeCheckbox = $formFilters.find('input.valueChargeLateFee[type = "checkbox"]');
		var $filterChargeLateFeeSelect = $formFilters.find('select.valueChargeLateFee');
		var filterChargeLateFee = $filterChargeLateFeeSelect.length ? $filterChargeLateFeeSelect.val() : $filterChargeLateFeeCheckbox.prop('checked');
		var filterChargeLateFeeSelectVal = $formFilters.find('select.filterChargeLateFee').val();
		var filterChargeLateFee = null;
		if(filterChargeLateFeeSelectVal !== '')
			filterChargeLateFee = filterChargeLateFeeSelectVal == 'true';
		if(filterChargeLateFee != null && filterChargeLateFee === true)
			filters.push({ name: 'fq', value: 'chargeLateFee:' + filterChargeLateFee });

		var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
		if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });

		var filterLateFeeDate = $formFilters.find('.valueLateFeeDate').val();
		if(filterLateFeeDate != null && filterLateFeeDate !== '')
			filters.push({ name: 'fq', value: 'lateFeeDate:' + filterLateFeeDate });

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

		var filterPaymentKey = $formFilters.find('.valuePaymentKey').val();
		if(filterPaymentKey != null && filterPaymentKey !== '')
			filters.push({ name: 'fq', value: 'paymentKey:' + filterPaymentKey });

		var filterSchoolNumber = $formFilters.find('.valueSchoolNumber').val();
		if(filterSchoolNumber != null && filterSchoolNumber !== '')
			filters.push({ name: 'fq', value: 'schoolNumber:' + filterSchoolNumber });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
		if(filterSchoolKey != null && filterSchoolKey !== '')
			filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

		var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
		if(filterSchoolAddress != null && filterSchoolAddress !== '')
			filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

		var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
		if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

		var filterYearKey = $formFilters.find('.valueYearKey').val();
		if(filterYearKey != null && filterYearKey !== '')
			filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

		var filterSessionKey = $formFilters.find('.valueSessionKey').val();
		if(filterSessionKey != null && filterSessionKey !== '')
			filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

		var filterAgeKey = $formFilters.find('.valueAgeKey').val();
		if(filterAgeKey != null && filterAgeKey !== '')
			filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

		var filterBlockKey = $formFilters.find('.valueBlockKey').val();
		if(filterBlockKey != null && filterBlockKey !== '')
			filters.push({ name: 'fq', value: 'blockKey:' + filterBlockKey });

		var filterChildKey = $formFilters.find('.valueChildKey').val();
		if(filterChildKey != null && filterChildKey !== '')
			filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

		var filterMomKeys = $formFilters.find('.valueMomKeys').val();
		if(filterMomKeys != null && filterMomKeys !== '')
			filters.push({ name: 'fq', value: 'momKeys:' + filterMomKeys });

		var filterDadKeys = $formFilters.find('.valueDadKeys').val();
		if(filterDadKeys != null && filterDadKeys !== '')
			filters.push({ name: 'fq', value: 'dadKeys:' + filterDadKeys });

		var filterGuardianKeys = $formFilters.find('.valueGuardianKeys').val();
		if(filterGuardianKeys != null && filterGuardianKeys !== '')
			filters.push({ name: 'fq', value: 'guardianKeys:' + filterGuardianKeys });

		var filterChildCompleteNamePreferred = $formFilters.find('.valueChildCompleteNamePreferred').val();
		if(filterChildCompleteNamePreferred != null && filterChildCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'childCompleteNamePreferred:' + filterChildCompleteNamePreferred });

		var filterChildBirthDate = $formFilters.find('.valueChildBirthDate').val();
		if(filterChildBirthDate != null && filterChildBirthDate !== '')
			filters.push({ name: 'fq', value: 'childBirthDate:' + filterChildBirthDate });

		var filterMomCompleteNamePreferred = $formFilters.find('.valueMomCompleteNamePreferred').val();
		if(filterMomCompleteNamePreferred != null && filterMomCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'momCompleteNamePreferred:' + filterMomCompleteNamePreferred });

		var filterDadCompleteNamePreferred = $formFilters.find('.valueDadCompleteNamePreferred').val();
		if(filterDadCompleteNamePreferred != null && filterDadCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'dadCompleteNamePreferred:' + filterDadCompleteNamePreferred });

		var filterSchoolName = $formFilters.find('.valueSchoolName').val();
		if(filterSchoolName != null && filterSchoolName !== '')
			filters.push({ name: 'fq', value: 'schoolName:' + filterSchoolName });

		var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
		if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
			filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });

		var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
		if(filterSchoolLocation != null && filterSchoolLocation !== '')
			filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

		var filterYearStart = $formFilters.find('.valueYearStart').val();
		if(filterYearStart != null && filterYearStart !== '')
			filters.push({ name: 'fq', value: 'yearStart:' + filterYearStart });

		var filterYearEnd = $formFilters.find('.valueYearEnd').val();
		if(filterYearEnd != null && filterYearEnd !== '')
			filters.push({ name: 'fq', value: 'yearEnd:' + filterYearEnd });

		var filterSeasonStartDate = $formFilters.find('.valueSeasonStartDate').val();
		if(filterSeasonStartDate != null && filterSeasonStartDate !== '')
			filters.push({ name: 'fq', value: 'seasonStartDate:' + filterSeasonStartDate });

		var filterYearEnrollmentFee = $formFilters.find('.valueYearEnrollmentFee').val();
		if(filterYearEnrollmentFee != null && filterYearEnrollmentFee !== '')
			filters.push({ name: 'fq', value: 'yearEnrollmentFee:' + filterYearEnrollmentFee });

		var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
		if(filterSessionStartDate != null && filterSessionStartDate !== '')
			filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

		var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
		if(filterSessionEndDate != null && filterSessionEndDate !== '')
			filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

		var filterAgeStart = $formFilters.find('.valueAgeStart').val();
		if(filterAgeStart != null && filterAgeStart !== '')
			filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

		var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
		if(filterAgeEnd != null && filterAgeEnd !== '')
			filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

		var filterBlockStartTime = $formFilters.find('.valueBlockStartTime').val();
		if(filterBlockStartTime != null && filterBlockStartTime !== '')
			filters.push({ name: 'fq', value: 'blockStartTime:' + filterBlockStartTime });

		var filterBlockEndTime = $formFilters.find('.valueBlockEndTime').val();
		if(filterBlockEndTime != null && filterBlockEndTime !== '')
			filters.push({ name: 'fq', value: 'blockEndTime:' + filterBlockEndTime });

		var filterBlockPricePerMonth = $formFilters.find('.valueBlockPricePerMonth').val();
		if(filterBlockPricePerMonth != null && filterBlockPricePerMonth !== '')
			filters.push({ name: 'fq', value: 'blockPricePerMonth:' + filterBlockPricePerMonth });

		var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
		if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
			filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

		var filterPaymentYear = $formFilters.find('.valuePaymentYear').val();
		if(filterPaymentYear != null && filterPaymentYear !== '')
			filters.push({ name: 'fq', value: 'paymentYear:' + filterPaymentYear });

		var filterPaymentType = $formFilters.find('.valuePaymentType').val();
		if(filterPaymentType != null && filterPaymentType !== '')
			filters.push({ name: 'fq', value: 'paymentType:' + filterPaymentType });

		var filterPaymentNext = $formFilters.find('.valuePaymentNext').val();
		if(filterPaymentNext != null && filterPaymentNext !== '')
			filters.push({ name: 'fq', value: 'paymentNext:' + filterPaymentNext });

		var filterChargeAmountDue = $formFilters.find('.valueChargeAmountDue').val();
		if(filterChargeAmountDue != null && filterChargeAmountDue !== '')
			filters.push({ name: 'fq', value: 'chargeAmountDue:' + filterChargeAmountDue });

		var filterChargeAmountPassed = $formFilters.find('.valueChargeAmountPassed').val();
		if(filterChargeAmountPassed != null && filterChargeAmountPassed !== '')
			filters.push({ name: 'fq', value: 'chargeAmountPassed:' + filterChargeAmountPassed });

		var filterChargeAmountNotPassed = $formFilters.find('.valueChargeAmountNotPassed').val();
		if(filterChargeAmountNotPassed != null && filterChargeAmountNotPassed !== '')
			filters.push({ name: 'fq', value: 'chargeAmountNotPassed:' + filterChargeAmountNotPassed });

		var filterChargeAmountFuture = $formFilters.find('.valueChargeAmountFuture').val();
		if(filterChargeAmountFuture != null && filterChargeAmountFuture !== '')
			filters.push({ name: 'fq', value: 'chargeAmountFuture:' + filterChargeAmountFuture });

		var filterPaymentShortName = $formFilters.find('.valuePaymentShortName').val();
		if(filterPaymentShortName != null && filterPaymentShortName !== '')
			filters.push({ name: 'fq', value: 'paymentShortName:' + filterPaymentShortName });

		var filterPaymentCompleteName = $formFilters.find('.valuePaymentCompleteName').val();
		if(filterPaymentCompleteName != null && filterPaymentCompleteName !== '')
			filters.push({ name: 'fq', value: 'paymentCompleteName:' + filterPaymentCompleteName });
	}
	return filters;
}

function searchSchoolPaymentVals(filters, success, error) {


	filters.push({ name: 'sort', value: 'paymentDate desc' });
	filters.push({ name: 'sort', value: 'paymentBy desc' });
	$.ajax({
		url: '/api/payment?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolPaymentObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fas fa-search-dollar ');
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
	searchSchoolPaymentVals($formFilters, success, error);
}

function suggestSchoolPaymentEnrollmentKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['paymentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKey_' + pk + '_paymentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEnrollmentKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enrollmentKey_" + pk + "_paymentKeys_" + o['pk'] + "'); patchSchoolPaymentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'EnrollmentKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolPaymentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolEnrollmentVals(filters, success, error);
}

async function websocketSchoolPayment(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSchoolPayment', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SchoolPaymentForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-green ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fas fa-search-dollar w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify payments');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-green ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketSchoolEnrollment', function (error, message) {
			$('#Page_enrollmentKey').trigger('oninput');
			$('#Page_enrollmentKey_add').text('add an enrollment');
			$('#Page_enrollmentKey_add').removeClass('w3-disabled');
			$('#Page_enrollmentKey_add').attr('disabled', false);
		});
	}
}
async function websocketSchoolPaymentInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSchoolPaymentVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputSchoolPayment' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSchoolPayment' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSchoolPayment' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSchoolPayment' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSchoolPayment' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSchoolPayment' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'Deleted'));
			}
			var val = o['paymentDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('paymentDate')) {
				$('.inputSchoolPayment' + pk + 'PaymentDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'PaymentDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'PaymentDate'));
			}
			var val = o['paymentAmount'];
			if(vars.includes('paymentAmount')) {
				$('.inputSchoolPayment' + pk + 'PaymentAmount').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'PaymentAmount').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'PaymentAmount'));
			}
			var val = o['paymentCash'];
			if(vars.includes('paymentCash')) {
				$('.inputSchoolPayment' + pk + 'PaymentCash').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'PaymentCash').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'PaymentCash'));
			}
			var val = o['paymentCheck'];
			if(vars.includes('paymentCheck')) {
				$('.inputSchoolPayment' + pk + 'PaymentCheck').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'PaymentCheck').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'PaymentCheck'));
			}
			var val = o['paymentECheck'];
			if(vars.includes('paymentECheck')) {
				$('.inputSchoolPayment' + pk + 'PaymentECheck').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'PaymentECheck').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'PaymentECheck'));
			}
			var val = o['paymentSystem'];
			if(vars.includes('paymentSystem')) {
				$('.inputSchoolPayment' + pk + 'PaymentSystem').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'PaymentSystem').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'PaymentSystem'));
			}
			var val = o['paymentDescription'];
			if(vars.includes('paymentDescription')) {
				$('.inputSchoolPayment' + pk + 'PaymentDescription').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'PaymentDescription').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'PaymentDescription'));
			}
			var val = o['paymentBy'];
			if(vars.includes('paymentBy')) {
				$('.inputSchoolPayment' + pk + 'PaymentBy').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'PaymentBy').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'PaymentBy'));
			}
			var val = o['enrollmentPaymentEachMonth'];
			if(vars.includes('enrollmentPaymentEachMonth')) {
				$('.inputSchoolPayment' + pk + 'EnrollmentPaymentEachMonth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'EnrollmentPaymentEachMonth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'EnrollmentPaymentEachMonth'));
			}
			var val = o['transactionId'];
			if(vars.includes('transactionId')) {
				$('.inputSchoolPayment' + pk + 'TransactionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'TransactionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'TransactionId'));
			}
			var val = o['customerProfileId'];
			if(vars.includes('customerProfileId')) {
				$('.inputSchoolPayment' + pk + 'CustomerProfileId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'CustomerProfileId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'CustomerProfileId'));
			}
			var val = o['transactionStatus'];
			if(vars.includes('transactionStatus')) {
				$('.inputSchoolPayment' + pk + 'TransactionStatus').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'TransactionStatus').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'TransactionStatus'));
			}
			var val = o['paymentRecieved'];
			if(vars.includes('paymentRecieved')) {
				$('.inputSchoolPayment' + pk + 'PaymentRecieved').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'PaymentRecieved').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'PaymentRecieved'));
			}
			var val = o['chargeAmount'];
			if(vars.includes('chargeAmount')) {
				$('.inputSchoolPayment' + pk + 'ChargeAmount').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'ChargeAmount').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'ChargeAmount'));
			}
			var val = o['chargeFirstLast'];
			if(vars.includes('chargeFirstLast')) {
				$('.inputSchoolPayment' + pk + 'ChargeFirstLast').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'ChargeFirstLast').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'ChargeFirstLast'));
			}
			var val = o['chargeEnrollment'];
			if(vars.includes('chargeEnrollment')) {
				$('.inputSchoolPayment' + pk + 'ChargeEnrollment').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'ChargeEnrollment').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'ChargeEnrollment'));
			}
			var val = o['chargeMonth'];
			if(vars.includes('chargeMonth')) {
				$('.inputSchoolPayment' + pk + 'ChargeMonth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'ChargeMonth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'ChargeMonth'));
			}
			var val = o['chargeLateFee'];
			if(vars.includes('chargeLateFee')) {
				$('.inputSchoolPayment' + pk + 'ChargeLateFee').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'ChargeLateFee').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'ChargeLateFee'));
			}
			var val = o['enrollmentKey'];
			if(vars.includes('enrollmentKey')) {
				$('.inputSchoolPayment' + pk + 'EnrollmentKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'EnrollmentKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'EnrollmentKey'));
			}
			var val = o['lateFeeDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('lateFeeDate')) {
				$('.inputSchoolPayment' + pk + 'LateFeeDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'LateFeeDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'LateFeeDate'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSchoolPayment' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSchoolPayment' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSchoolPayment' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSchoolPayment' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSchoolPayment' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSchoolPayment' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputSchoolPayment' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSchoolPayment' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSchoolPayment' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSchoolPayment' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputSchoolPayment' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputSchoolPayment' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputSchoolPayment' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputSchoolPayment' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputSchoolPayment' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'PageUrlApi'));
			}
			var val = o['paymentKey'];
			if(vars.includes('paymentKey')) {
				$('.inputSchoolPayment' + pk + 'PaymentKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'PaymentKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'PaymentKey'));
			}
			var val = o['schoolNumber'];
			if(vars.includes('schoolNumber')) {
				$('.inputSchoolPayment' + pk + 'SchoolNumber').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'SchoolNumber').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'SchoolNumber'));
			}
			var val = o['userKeys'];
			if(vars.includes('userKeys')) {
				$('.inputSchoolPayment' + pk + 'UserKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'UserKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'UserKeys'));
			}
			var val = o['schoolKey'];
			if(vars.includes('schoolKey')) {
				$('.inputSchoolPayment' + pk + 'SchoolKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'SchoolKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'SchoolKey'));
			}
			var val = o['schoolAddress'];
			if(vars.includes('schoolAddress')) {
				$('.inputSchoolPayment' + pk + 'SchoolAddress').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'SchoolAddress').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'SchoolAddress'));
			}
			var val = o['schoolPhoneNumber'];
			if(vars.includes('schoolPhoneNumber')) {
				$('.inputSchoolPayment' + pk + 'SchoolPhoneNumber').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'SchoolPhoneNumber').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'SchoolPhoneNumber'));
			}
			var val = o['yearKey'];
			if(vars.includes('yearKey')) {
				$('.inputSchoolPayment' + pk + 'YearKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'YearKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'YearKey'));
			}
			var val = o['sessionKey'];
			if(vars.includes('sessionKey')) {
				$('.inputSchoolPayment' + pk + 'SessionKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'SessionKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'SessionKey'));
			}
			var val = o['ageKey'];
			if(vars.includes('ageKey')) {
				$('.inputSchoolPayment' + pk + 'AgeKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'AgeKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'AgeKey'));
			}
			var val = o['blockKey'];
			if(vars.includes('blockKey')) {
				$('.inputSchoolPayment' + pk + 'BlockKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'BlockKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'BlockKey'));
			}
			var val = o['childKey'];
			if(vars.includes('childKey')) {
				$('.inputSchoolPayment' + pk + 'ChildKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'ChildKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'ChildKey'));
			}
			var val = o['momKeys'];
			if(vars.includes('momKeys')) {
				$('.inputSchoolPayment' + pk + 'MomKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'MomKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'MomKeys'));
			}
			var val = o['dadKeys'];
			if(vars.includes('dadKeys')) {
				$('.inputSchoolPayment' + pk + 'DadKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'DadKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'DadKeys'));
			}
			var val = o['guardianKeys'];
			if(vars.includes('guardianKeys')) {
				$('.inputSchoolPayment' + pk + 'GuardianKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'GuardianKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'GuardianKeys'));
			}
			var val = o['childCompleteNamePreferred'];
			if(vars.includes('childCompleteNamePreferred')) {
				$('.inputSchoolPayment' + pk + 'ChildCompleteNamePreferred').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'ChildCompleteNamePreferred').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'ChildCompleteNamePreferred'));
			}
			var val = o['childBirthDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('childBirthDate')) {
				$('.inputSchoolPayment' + pk + 'ChildBirthDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'ChildBirthDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'ChildBirthDate'));
			}
			var val = o['momCompleteNamePreferred'];
			if(vars.includes('momCompleteNamePreferred')) {
				$('.inputSchoolPayment' + pk + 'MomCompleteNamePreferred').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'MomCompleteNamePreferred').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'MomCompleteNamePreferred'));
			}
			var val = o['dadCompleteNamePreferred'];
			if(vars.includes('dadCompleteNamePreferred')) {
				$('.inputSchoolPayment' + pk + 'DadCompleteNamePreferred').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'DadCompleteNamePreferred').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'DadCompleteNamePreferred'));
			}
			var val = o['schoolName'];
			if(vars.includes('schoolName')) {
				$('.inputSchoolPayment' + pk + 'SchoolName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'SchoolName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'SchoolName'));
			}
			var val = o['schoolCompleteName'];
			if(vars.includes('schoolCompleteName')) {
				$('.inputSchoolPayment' + pk + 'SchoolCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'SchoolCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'SchoolCompleteName'));
			}
			var val = o['schoolLocation'];
			if(vars.includes('schoolLocation')) {
				$('.inputSchoolPayment' + pk + 'SchoolLocation').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'SchoolLocation').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'SchoolLocation'));
			}
			var val = o['yearStart'];
			if(vars.includes('yearStart')) {
				$('.inputSchoolPayment' + pk + 'YearStart').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'YearStart').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'YearStart'));
			}
			var val = o['yearEnd'];
			if(vars.includes('yearEnd')) {
				$('.inputSchoolPayment' + pk + 'YearEnd').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'YearEnd').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'YearEnd'));
			}
			var val = o['seasonStartDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('seasonStartDate')) {
				$('.inputSchoolPayment' + pk + 'SeasonStartDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'SeasonStartDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'SeasonStartDate'));
			}
			var val = o['yearEnrollmentFee'];
			if(vars.includes('yearEnrollmentFee')) {
				$('.inputSchoolPayment' + pk + 'YearEnrollmentFee').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'YearEnrollmentFee').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'YearEnrollmentFee'));
			}
			var val = o['sessionStartDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('sessionStartDate')) {
				$('.inputSchoolPayment' + pk + 'SessionStartDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'SessionStartDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'SessionStartDate'));
			}
			var val = o['sessionEndDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('sessionEndDate')) {
				$('.inputSchoolPayment' + pk + 'SessionEndDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'SessionEndDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'SessionEndDate'));
			}
			var val = o['ageStart'];
			if(vars.includes('ageStart')) {
				$('.inputSchoolPayment' + pk + 'AgeStart').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'AgeStart').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'AgeStart'));
			}
			var val = o['ageEnd'];
			if(vars.includes('ageEnd')) {
				$('.inputSchoolPayment' + pk + 'AgeEnd').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'AgeEnd').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'AgeEnd'));
			}
			var val = o['blockStartTime'];
			if(val != null) {
				var t = moment(val, 'HH:mm');
				if(t)
					val = t.format('h:mm a');
			}
			if(vars.includes('blockStartTime')) {
				$('.inputSchoolPayment' + pk + 'BlockStartTime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'BlockStartTime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'BlockStartTime'));
			}
			var val = o['blockEndTime'];
			if(val != null) {
				var t = moment(val, 'HH:mm');
				if(t)
					val = t.format('h:mm a');
			}
			if(vars.includes('blockEndTime')) {
				$('.inputSchoolPayment' + pk + 'BlockEndTime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'BlockEndTime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'BlockEndTime'));
			}
			var val = o['blockPricePerMonth'];
			if(vars.includes('blockPricePerMonth')) {
				$('.inputSchoolPayment' + pk + 'BlockPricePerMonth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'BlockPricePerMonth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'BlockPricePerMonth'));
			}
			var val = o['blockTotalPrice'];
			if(vars.includes('blockTotalPrice')) {
				$('.inputSchoolPayment' + pk + 'BlockTotalPrice').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'BlockTotalPrice').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'BlockTotalPrice'));
			}
			var val = o['paymentYear'];
			if(vars.includes('paymentYear')) {
				$('.inputSchoolPayment' + pk + 'PaymentYear').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'PaymentYear').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'PaymentYear'));
			}
			var val = o['paymentType'];
			if(vars.includes('paymentType')) {
				$('.inputSchoolPayment' + pk + 'PaymentType').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'PaymentType').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'PaymentType'));
			}
			var val = o['paymentNext'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('paymentNext')) {
				$('.inputSchoolPayment' + pk + 'PaymentNext').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'PaymentNext').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'PaymentNext'));
			}
			var val = o['chargeAmountDue'];
			if(vars.includes('chargeAmountDue')) {
				$('.inputSchoolPayment' + pk + 'ChargeAmountDue').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'ChargeAmountDue').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'ChargeAmountDue'));
			}
			var val = o['chargeAmountPassed'];
			if(vars.includes('chargeAmountPassed')) {
				$('.inputSchoolPayment' + pk + 'ChargeAmountPassed').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'ChargeAmountPassed').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'ChargeAmountPassed'));
			}
			var val = o['chargeAmountNotPassed'];
			if(vars.includes('chargeAmountNotPassed')) {
				$('.inputSchoolPayment' + pk + 'ChargeAmountNotPassed').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'ChargeAmountNotPassed').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'ChargeAmountNotPassed'));
			}
			var val = o['chargeAmountFuture'];
			if(vars.includes('chargeAmountFuture')) {
				$('.inputSchoolPayment' + pk + 'ChargeAmountFuture').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'ChargeAmountFuture').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'ChargeAmountFuture'));
			}
			var val = o['paymentShortName'];
			if(vars.includes('paymentShortName')) {
				$('.inputSchoolPayment' + pk + 'PaymentShortName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'PaymentShortName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'PaymentShortName'));
			}
			var val = o['paymentCompleteName'];
			if(vars.includes('paymentCompleteName')) {
				$('.inputSchoolPayment' + pk + 'PaymentCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolPayment' + pk + 'PaymentCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolPayment' + pk + 'PaymentCompleteName'));
			}
		});
	}
}
