
// POST //

async function postSchoolBlock($formValues, success, error) {
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

	var valueBlockStartTime = $formValues.find('.valueBlockStartTime').val();
	if(valueBlockStartTime != null && valueBlockStartTime !== '')
		vals['blockStartTime'] = valueBlockStartTime;

	var valueBlockEndTime = $formValues.find('.valueBlockEndTime').val();
	if(valueBlockEndTime != null && valueBlockEndTime !== '')
		vals['blockEndTime'] = valueBlockEndTime;

	var valueBlockPricePerMonth = $formValues.find('.valueBlockPricePerMonth').val();
	if(valueBlockPricePerMonth != null && valueBlockPricePerMonth !== '')
		vals['blockPricePerMonth'] = valueBlockPricePerMonth;

	var valueBlockMonday = $formValues.find('.valueBlockMonday').prop('checked');
	if(valueBlockMonday != null && valueBlockMonday !== '')
		vals['blockMonday'] = valueBlockMonday;

	var valueBlockTuesday = $formValues.find('.valueBlockTuesday').prop('checked');
	if(valueBlockTuesday != null && valueBlockTuesday !== '')
		vals['blockTuesday'] = valueBlockTuesday;

	var valueBlockWednesday = $formValues.find('.valueBlockWednesday').prop('checked');
	if(valueBlockWednesday != null && valueBlockWednesday !== '')
		vals['blockWednesday'] = valueBlockWednesday;

	var valueBlockThursday = $formValues.find('.valueBlockThursday').prop('checked');
	if(valueBlockThursday != null && valueBlockThursday !== '')
		vals['blockThursday'] = valueBlockThursday;

	var valueBlockFriday = $formValues.find('.valueBlockFriday').prop('checked');
	if(valueBlockFriday != null && valueBlockFriday !== '')
		vals['blockFriday'] = valueBlockFriday;

	var valueAgeKey = $formValues.find('.valueAgeKey').val();
	if(valueAgeKey != null && valueAgeKey !== '')
		vals['ageKey'] = valueAgeKey;

	var valueEnrollmentKeys = [];
	$formValues.find('input.valueEnrollmentKeys:checked').each(function(index) {
		valueEnrollmentKeys.push($(this).val());
	});
	if(valueEnrollmentKeys.length > 0)
		vals['enrollmentKeys'] = valueEnrollmentKeys;

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

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
		vals['schoolAddress'] = valueSchoolAddress;

	$.ajax({
		url: '/api/block'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSchoolBlockVals(vals, success, error) {
	$.ajax({
		url: '/api/block'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportSchoolBlock($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportSchoolBlockVals(JSON.parse(json), success, error);
}

function putimportSchoolBlockVals(json, success, error) {
	$.ajax({
		url: '/api/block/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeSchoolBlock($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeSchoolBlockVals(JSON.parse(json), success, error);
}

function putmergeSchoolBlockVals(json, success, error) {
	$.ajax({
		url: '/api/block/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopySchoolBlock($formValues, pk, success, error) {
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

	var valueBlockStartTime = $formValues.find('.valueBlockStartTime').val();
	if(valueBlockStartTime != null && valueBlockStartTime !== '')
		vals['blockStartTime'] = valueBlockStartTime;

	var valueBlockEndTime = $formValues.find('.valueBlockEndTime').val();
	if(valueBlockEndTime != null && valueBlockEndTime !== '')
		vals['blockEndTime'] = valueBlockEndTime;

	var valueBlockPricePerMonth = $formValues.find('.valueBlockPricePerMonth').val();
	if(valueBlockPricePerMonth != null && valueBlockPricePerMonth !== '')
		vals['blockPricePerMonth'] = valueBlockPricePerMonth;

	var valueBlockMonday = $formValues.find('.valueBlockMonday').prop('checked');
	if(valueBlockMonday != null && valueBlockMonday !== '')
		vals['blockMonday'] = valueBlockMonday;

	var valueBlockTuesday = $formValues.find('.valueBlockTuesday').prop('checked');
	if(valueBlockTuesday != null && valueBlockTuesday !== '')
		vals['blockTuesday'] = valueBlockTuesday;

	var valueBlockWednesday = $formValues.find('.valueBlockWednesday').prop('checked');
	if(valueBlockWednesday != null && valueBlockWednesday !== '')
		vals['blockWednesday'] = valueBlockWednesday;

	var valueBlockThursday = $formValues.find('.valueBlockThursday').prop('checked');
	if(valueBlockThursday != null && valueBlockThursday !== '')
		vals['blockThursday'] = valueBlockThursday;

	var valueBlockFriday = $formValues.find('.valueBlockFriday').prop('checked');
	if(valueBlockFriday != null && valueBlockFriday !== '')
		vals['blockFriday'] = valueBlockFriday;

	var valueAgeKey = $formValues.find('input.valueAgeKey:checked').val();
	if(valueAgeKey != null && valueAgeKey !== '')
		vals['ageKey'] = valueAgeKey;

	var valueEnrollmentKeys = $formValues.find('input.valueEnrollmentKeys:checked').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['enrollmentKeys'] = [valueEnrollmentKeys];

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

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
		vals['schoolAddress'] = valueSchoolAddress;

	putcopySchoolBlockVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopySchoolBlockVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/block/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSchoolBlock($formFilters, $formValues, pk, success, error) {
	var filters = patchSchoolBlockFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	var removePk = $formValues.find('.removePk').val() === 'true';
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
	var removeCreated = $formValues.find('.removeCreated').val() === 'true';
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
	var removeModified = $formValues.find('.removeModified').val() === 'true';
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
	var removeObjectId = $formValues.find('.removeObjectId').val() === 'true';
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
	var removeArchived = $formValues.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	var valueArchived = null;
	if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
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
	var removeDeleted = $formValues.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	var valueDeleted = null;
	if(valueDeletedSelectVal != null && valueDeletedSelectVal !== '')
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

	var valueBlockStartTime = $formValues.find('.valueBlockStartTime').val();
	var removeBlockStartTime = $formValues.find('.removeBlockStartTime').val() === 'true';
	var setBlockStartTime = removeBlockStartTime ? null : $formValues.find('.setBlockStartTime').val();
	if(removeBlockStartTime || setBlockStartTime != null && setBlockStartTime !== '')
		vals['setBlockStartTime'] = setBlockStartTime;
	var addBlockStartTime = $formValues.find('.addBlockStartTime').val();
	if(addBlockStartTime != null && addBlockStartTime !== '')
		vals['addBlockStartTime'] = addBlockStartTime;
	var removeBlockStartTime = $formValues.find('.removeBlockStartTime').val();
	if(removeBlockStartTime != null && removeBlockStartTime !== '')
		vals['removeBlockStartTime'] = removeBlockStartTime;

	var valueBlockEndTime = $formValues.find('.valueBlockEndTime').val();
	var removeBlockEndTime = $formValues.find('.removeBlockEndTime').val() === 'true';
	var setBlockEndTime = removeBlockEndTime ? null : $formValues.find('.setBlockEndTime').val();
	if(removeBlockEndTime || setBlockEndTime != null && setBlockEndTime !== '')
		vals['setBlockEndTime'] = setBlockEndTime;
	var addBlockEndTime = $formValues.find('.addBlockEndTime').val();
	if(addBlockEndTime != null && addBlockEndTime !== '')
		vals['addBlockEndTime'] = addBlockEndTime;
	var removeBlockEndTime = $formValues.find('.removeBlockEndTime').val();
	if(removeBlockEndTime != null && removeBlockEndTime !== '')
		vals['removeBlockEndTime'] = removeBlockEndTime;

	var valueBlockPricePerMonth = $formValues.find('.valueBlockPricePerMonth').val();
	var removeBlockPricePerMonth = $formValues.find('.removeBlockPricePerMonth').val() === 'true';
	var setBlockPricePerMonth = removeBlockPricePerMonth ? null : $formValues.find('.setBlockPricePerMonth').val();
	if(removeBlockPricePerMonth || setBlockPricePerMonth != null && setBlockPricePerMonth !== '')
		vals['setBlockPricePerMonth'] = setBlockPricePerMonth;
	var addBlockPricePerMonth = $formValues.find('.addBlockPricePerMonth').val();
	if(addBlockPricePerMonth != null && addBlockPricePerMonth !== '')
		vals['addBlockPricePerMonth'] = addBlockPricePerMonth;
	var removeBlockPricePerMonth = $formValues.find('.removeBlockPricePerMonth').val();
	if(removeBlockPricePerMonth != null && removeBlockPricePerMonth !== '')
		vals['removeBlockPricePerMonth'] = removeBlockPricePerMonth;

	var valueBlockMonday = $formValues.find('.valueBlockMonday').prop('checked');
	var removeBlockMonday = $formValues.find('.removeBlockMonday').val() === 'true';
	var valueBlockMondaySelectVal = $formValues.find('select.setBlockMonday').val();
	var valueBlockMonday = null;
	if(valueBlockMondaySelectVal != null && valueBlockMondaySelectVal !== '')
		valueBlockMonday = valueBlockMondaySelectVal == 'true';
	setBlockMonday = removeBlockMonday ? null : valueBlockMonday;
	if(removeBlockMonday || setBlockMonday != null && setBlockMonday !== '')
		vals['setBlockMonday'] = setBlockMonday;
	var addBlockMonday = $formValues.find('.addBlockMonday').prop('checked');
	if(addBlockMonday != null && addBlockMonday !== '')
		vals['addBlockMonday'] = addBlockMonday;
	var removeBlockMonday = $formValues.find('.removeBlockMonday').prop('checked');
	if(removeBlockMonday != null && removeBlockMonday !== '')
		vals['removeBlockMonday'] = removeBlockMonday;

	var valueBlockTuesday = $formValues.find('.valueBlockTuesday').prop('checked');
	var removeBlockTuesday = $formValues.find('.removeBlockTuesday').val() === 'true';
	var valueBlockTuesdaySelectVal = $formValues.find('select.setBlockTuesday').val();
	var valueBlockTuesday = null;
	if(valueBlockTuesdaySelectVal != null && valueBlockTuesdaySelectVal !== '')
		valueBlockTuesday = valueBlockTuesdaySelectVal == 'true';
	setBlockTuesday = removeBlockTuesday ? null : valueBlockTuesday;
	if(removeBlockTuesday || setBlockTuesday != null && setBlockTuesday !== '')
		vals['setBlockTuesday'] = setBlockTuesday;
	var addBlockTuesday = $formValues.find('.addBlockTuesday').prop('checked');
	if(addBlockTuesday != null && addBlockTuesday !== '')
		vals['addBlockTuesday'] = addBlockTuesday;
	var removeBlockTuesday = $formValues.find('.removeBlockTuesday').prop('checked');
	if(removeBlockTuesday != null && removeBlockTuesday !== '')
		vals['removeBlockTuesday'] = removeBlockTuesday;

	var valueBlockWednesday = $formValues.find('.valueBlockWednesday').prop('checked');
	var removeBlockWednesday = $formValues.find('.removeBlockWednesday').val() === 'true';
	var valueBlockWednesdaySelectVal = $formValues.find('select.setBlockWednesday').val();
	var valueBlockWednesday = null;
	if(valueBlockWednesdaySelectVal != null && valueBlockWednesdaySelectVal !== '')
		valueBlockWednesday = valueBlockWednesdaySelectVal == 'true';
	setBlockWednesday = removeBlockWednesday ? null : valueBlockWednesday;
	if(removeBlockWednesday || setBlockWednesday != null && setBlockWednesday !== '')
		vals['setBlockWednesday'] = setBlockWednesday;
	var addBlockWednesday = $formValues.find('.addBlockWednesday').prop('checked');
	if(addBlockWednesday != null && addBlockWednesday !== '')
		vals['addBlockWednesday'] = addBlockWednesday;
	var removeBlockWednesday = $formValues.find('.removeBlockWednesday').prop('checked');
	if(removeBlockWednesday != null && removeBlockWednesday !== '')
		vals['removeBlockWednesday'] = removeBlockWednesday;

	var valueBlockThursday = $formValues.find('.valueBlockThursday').prop('checked');
	var removeBlockThursday = $formValues.find('.removeBlockThursday').val() === 'true';
	var valueBlockThursdaySelectVal = $formValues.find('select.setBlockThursday').val();
	var valueBlockThursday = null;
	if(valueBlockThursdaySelectVal != null && valueBlockThursdaySelectVal !== '')
		valueBlockThursday = valueBlockThursdaySelectVal == 'true';
	setBlockThursday = removeBlockThursday ? null : valueBlockThursday;
	if(removeBlockThursday || setBlockThursday != null && setBlockThursday !== '')
		vals['setBlockThursday'] = setBlockThursday;
	var addBlockThursday = $formValues.find('.addBlockThursday').prop('checked');
	if(addBlockThursday != null && addBlockThursday !== '')
		vals['addBlockThursday'] = addBlockThursday;
	var removeBlockThursday = $formValues.find('.removeBlockThursday').prop('checked');
	if(removeBlockThursday != null && removeBlockThursday !== '')
		vals['removeBlockThursday'] = removeBlockThursday;

	var valueBlockFriday = $formValues.find('.valueBlockFriday').prop('checked');
	var removeBlockFriday = $formValues.find('.removeBlockFriday').val() === 'true';
	var valueBlockFridaySelectVal = $formValues.find('select.setBlockFriday').val();
	var valueBlockFriday = null;
	if(valueBlockFridaySelectVal != null && valueBlockFridaySelectVal !== '')
		valueBlockFriday = valueBlockFridaySelectVal == 'true';
	setBlockFriday = removeBlockFriday ? null : valueBlockFriday;
	if(removeBlockFriday || setBlockFriday != null && setBlockFriday !== '')
		vals['setBlockFriday'] = setBlockFriday;
	var addBlockFriday = $formValues.find('.addBlockFriday').prop('checked');
	if(addBlockFriday != null && addBlockFriday !== '')
		vals['addBlockFriday'] = addBlockFriday;
	var removeBlockFriday = $formValues.find('.removeBlockFriday').prop('checked');
	if(removeBlockFriday != null && removeBlockFriday !== '')
		vals['removeBlockFriday'] = removeBlockFriday;

	var valueAgeKey = $formValues.find('input.valueAgeKey:checked').val();
	if(valueAgeKey != null && valueAgeKey !== '')
		vals['setAgeKey'] = valueAgeKey;

	var valueEnrollmentKeys = $formValues.find('input.valueEnrollmentKeys:checked').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['addEnrollmentKeys'] = valueEnrollmentKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	var removeInheritPk = $formValues.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	var removeSessionId = $formValues.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	var addSessionId = $formValues.find('.addSessionId').val();
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formValues.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	var removeUserId = $formValues.find('.removeUserId').val() === 'true';
	var setUserId = removeUserId ? null : $formValues.find('.setUserId').val();
	if(removeUserId || setUserId != null && setUserId !== '')
		vals['setUserId'] = setUserId;
	var addUserId = $formValues.find('.addUserId').val();
	if(addUserId != null && addUserId !== '')
		vals['addUserId'] = addUserId;
	var removeUserId = $formValues.find('.removeUserId').val();
	if(removeUserId != null && removeUserId !== '')
		vals['removeUserId'] = removeUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	var removeUserKey = $formValues.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	var addUserKey = $formValues.find('.addUserKey').val();
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	var removeSchoolAddress = $formValues.find('.removeSchoolAddress').val() === 'true';
	var setSchoolAddress = removeSchoolAddress ? null : $formValues.find('.setSchoolAddress').val();
	if(removeSchoolAddress || setSchoolAddress != null && setSchoolAddress !== '')
		vals['setSchoolAddress'] = setSchoolAddress;
	var addSchoolAddress = $formValues.find('.addSchoolAddress').val();
	if(addSchoolAddress != null && addSchoolAddress !== '')
		vals['addSchoolAddress'] = addSchoolAddress;
	var removeSchoolAddress = $formValues.find('.removeSchoolAddress').val();
	if(removeSchoolAddress != null && removeSchoolAddress !== '')
		vals['removeSchoolAddress'] = removeSchoolAddress;

	patchSchoolBlockVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSchoolBlockFilters($formFilters) {
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

		var filterBlockStartTime = $formFilters.find('.valueBlockStartTime').val();
		if(filterBlockStartTime != null && filterBlockStartTime !== '')
			filters.push({ name: 'fq', value: 'blockStartTime:' + filterBlockStartTime });

		var filterBlockEndTime = $formFilters.find('.valueBlockEndTime').val();
		if(filterBlockEndTime != null && filterBlockEndTime !== '')
			filters.push({ name: 'fq', value: 'blockEndTime:' + filterBlockEndTime });

		var filterBlockPricePerMonth = $formFilters.find('.valueBlockPricePerMonth').val();
		if(filterBlockPricePerMonth != null && filterBlockPricePerMonth !== '')
			filters.push({ name: 'fq', value: 'blockPricePerMonth:' + filterBlockPricePerMonth });

		var $filterBlockMondayCheckbox = $formFilters.find('input.valueBlockMonday[type = "checkbox"]');
		var $filterBlockMondaySelect = $formFilters.find('select.valueBlockMonday');
		var filterBlockMonday = $filterBlockMondaySelect.length ? $filterBlockMondaySelect.val() : $filterBlockMondayCheckbox.prop('checked');
		var filterBlockMondaySelectVal = $formFilters.find('select.filterBlockMonday').val();
		var filterBlockMonday = null;
		if(filterBlockMondaySelectVal !== '')
			filterBlockMonday = filterBlockMondaySelectVal == 'true';
		if(filterBlockMonday != null && filterBlockMonday === true)
			filters.push({ name: 'fq', value: 'blockMonday:' + filterBlockMonday });

		var $filterBlockTuesdayCheckbox = $formFilters.find('input.valueBlockTuesday[type = "checkbox"]');
		var $filterBlockTuesdaySelect = $formFilters.find('select.valueBlockTuesday');
		var filterBlockTuesday = $filterBlockTuesdaySelect.length ? $filterBlockTuesdaySelect.val() : $filterBlockTuesdayCheckbox.prop('checked');
		var filterBlockTuesdaySelectVal = $formFilters.find('select.filterBlockTuesday').val();
		var filterBlockTuesday = null;
		if(filterBlockTuesdaySelectVal !== '')
			filterBlockTuesday = filterBlockTuesdaySelectVal == 'true';
		if(filterBlockTuesday != null && filterBlockTuesday === true)
			filters.push({ name: 'fq', value: 'blockTuesday:' + filterBlockTuesday });

		var $filterBlockWednesdayCheckbox = $formFilters.find('input.valueBlockWednesday[type = "checkbox"]');
		var $filterBlockWednesdaySelect = $formFilters.find('select.valueBlockWednesday');
		var filterBlockWednesday = $filterBlockWednesdaySelect.length ? $filterBlockWednesdaySelect.val() : $filterBlockWednesdayCheckbox.prop('checked');
		var filterBlockWednesdaySelectVal = $formFilters.find('select.filterBlockWednesday').val();
		var filterBlockWednesday = null;
		if(filterBlockWednesdaySelectVal !== '')
			filterBlockWednesday = filterBlockWednesdaySelectVal == 'true';
		if(filterBlockWednesday != null && filterBlockWednesday === true)
			filters.push({ name: 'fq', value: 'blockWednesday:' + filterBlockWednesday });

		var $filterBlockThursdayCheckbox = $formFilters.find('input.valueBlockThursday[type = "checkbox"]');
		var $filterBlockThursdaySelect = $formFilters.find('select.valueBlockThursday');
		var filterBlockThursday = $filterBlockThursdaySelect.length ? $filterBlockThursdaySelect.val() : $filterBlockThursdayCheckbox.prop('checked');
		var filterBlockThursdaySelectVal = $formFilters.find('select.filterBlockThursday').val();
		var filterBlockThursday = null;
		if(filterBlockThursdaySelectVal !== '')
			filterBlockThursday = filterBlockThursdaySelectVal == 'true';
		if(filterBlockThursday != null && filterBlockThursday === true)
			filters.push({ name: 'fq', value: 'blockThursday:' + filterBlockThursday });

		var $filterBlockFridayCheckbox = $formFilters.find('input.valueBlockFriday[type = "checkbox"]');
		var $filterBlockFridaySelect = $formFilters.find('select.valueBlockFriday');
		var filterBlockFriday = $filterBlockFridaySelect.length ? $filterBlockFridaySelect.val() : $filterBlockFridayCheckbox.prop('checked');
		var filterBlockFridaySelectVal = $formFilters.find('select.filterBlockFriday').val();
		var filterBlockFriday = null;
		if(filterBlockFridaySelectVal !== '')
			filterBlockFriday = filterBlockFridaySelectVal == 'true';
		if(filterBlockFriday != null && filterBlockFriday === true)
			filters.push({ name: 'fq', value: 'blockFriday:' + filterBlockFriday });

		var filterAgeKey = $formFilters.find('.valueAgeKey').val();
		if(filterAgeKey != null && filterAgeKey !== '')
			filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

		var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
		if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
			filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

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

		var filterBlockKey = $formFilters.find('.valueBlockKey').val();
		if(filterBlockKey != null && filterBlockKey !== '')
			filters.push({ name: 'fq', value: 'blockKey:' + filterBlockKey });

		var filterChildKey = $formFilters.find('.valueChildKey').val();
		if(filterChildKey != null && filterChildKey !== '')
			filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

		var filterEducationSort = $formFilters.find('.valueEducationSort').val();
		if(filterEducationSort != null && filterEducationSort !== '')
			filters.push({ name: 'fq', value: 'educationSort:' + filterEducationSort });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterYearSort = $formFilters.find('.valueYearSort').val();
		if(filterYearSort != null && filterYearSort !== '')
			filters.push({ name: 'fq', value: 'yearSort:' + filterYearSort });

		var filterSeasonSort = $formFilters.find('.valueSeasonSort').val();
		if(filterSeasonSort != null && filterSeasonSort !== '')
			filters.push({ name: 'fq', value: 'seasonSort:' + filterSeasonSort });

		var filterSessionSort = $formFilters.find('.valueSessionSort').val();
		if(filterSessionSort != null && filterSessionSort !== '')
			filters.push({ name: 'fq', value: 'sessionSort:' + filterSessionSort });

		var filterAgeSort = $formFilters.find('.valueAgeSort').val();
		if(filterAgeSort != null && filterAgeSort !== '')
			filters.push({ name: 'fq', value: 'ageSort:' + filterAgeSort });

		var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
		if(filterSchoolKey != null && filterSchoolKey !== '')
			filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

		var filterYearKey = $formFilters.find('.valueYearKey').val();
		if(filterYearKey != null && filterYearKey !== '')
			filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

		var filterSessionKey = $formFilters.find('.valueSessionKey').val();
		if(filterSessionKey != null && filterSessionKey !== '')
			filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

		var filterSchoolName = $formFilters.find('.valueSchoolName').val();
		if(filterSchoolName != null && filterSchoolName !== '')
			filters.push({ name: 'fq', value: 'schoolName:' + filterSchoolName });

		var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
		if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
			filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });

		var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
		if(filterSchoolLocation != null && filterSchoolLocation !== '')
			filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

		var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
		if(filterSchoolAddress != null && filterSchoolAddress !== '')
			filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

		var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
		if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

		var filterSchoolForm = $formFilters.find('.valueSchoolForm').val();
		if(filterSchoolForm != null && filterSchoolForm !== '')
			filters.push({ name: 'fq', value: 'schoolForm:' + filterSchoolForm });

		var filterSchoolNumber = $formFilters.find('.valueSchoolNumber').val();
		if(filterSchoolNumber != null && filterSchoolNumber !== '')
			filters.push({ name: 'fq', value: 'schoolNumber:' + filterSchoolNumber });

		var filterSchoolAdministratorName = $formFilters.find('.valueSchoolAdministratorName').val();
		if(filterSchoolAdministratorName != null && filterSchoolAdministratorName !== '')
			filters.push({ name: 'fq', value: 'schoolAdministratorName:' + filterSchoolAdministratorName });

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

		var filterAgeShortName = $formFilters.find('.valueAgeShortName').val();
		if(filterAgeShortName != null && filterAgeShortName !== '')
			filters.push({ name: 'fq', value: 'ageShortName:' + filterAgeShortName });

		var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
		if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
			filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });

		var filterAgeStart = $formFilters.find('.valueAgeStart').val();
		if(filterAgeStart != null && filterAgeStart !== '')
			filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

		var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
		if(filterAgeEnd != null && filterAgeEnd !== '')
			filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

		var $filterBlockSundayCheckbox = $formFilters.find('input.valueBlockSunday[type = "checkbox"]');
		var $filterBlockSundaySelect = $formFilters.find('select.valueBlockSunday');
		var filterBlockSunday = $filterBlockSundaySelect.length ? $filterBlockSundaySelect.val() : $filterBlockSundayCheckbox.prop('checked');
		var filterBlockSundaySelectVal = $formFilters.find('select.filterBlockSunday').val();
		var filterBlockSunday = null;
		if(filterBlockSundaySelectVal !== '')
			filterBlockSunday = filterBlockSundaySelectVal == 'true';
		if(filterBlockSunday != null && filterBlockSunday === true)
			filters.push({ name: 'fq', value: 'blockSunday:' + filterBlockSunday });

		var $filterBlockSaturdayCheckbox = $formFilters.find('input.valueBlockSaturday[type = "checkbox"]');
		var $filterBlockSaturdaySelect = $formFilters.find('select.valueBlockSaturday');
		var filterBlockSaturday = $filterBlockSaturdaySelect.length ? $filterBlockSaturdaySelect.val() : $filterBlockSaturdayCheckbox.prop('checked');
		var filterBlockSaturdaySelectVal = $formFilters.find('select.filterBlockSaturday').val();
		var filterBlockSaturday = null;
		if(filterBlockSaturdaySelectVal !== '')
			filterBlockSaturday = filterBlockSaturdaySelectVal == 'true';
		if(filterBlockSaturday != null && filterBlockSaturday === true)
			filters.push({ name: 'fq', value: 'blockSaturday:' + filterBlockSaturday });

		var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
		if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
			filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

		var filterBlockShortName = $formFilters.find('.valueBlockShortName').val();
		if(filterBlockShortName != null && filterBlockShortName !== '')
			filters.push({ name: 'fq', value: 'blockShortName:' + filterBlockShortName });

		var filterBlockAdminName = $formFilters.find('.valueBlockAdminName').val();
		if(filterBlockAdminName != null && filterBlockAdminName !== '')
			filters.push({ name: 'fq', value: 'blockAdminName:' + filterBlockAdminName });

		var filterBlockCompleteName = $formFilters.find('.valueBlockCompleteName').val();
		if(filterBlockCompleteName != null && filterBlockCompleteName !== '')
			filters.push({ name: 'fq', value: 'blockCompleteName:' + filterBlockCompleteName });
	}
	return filters;
}

function patchSchoolBlockVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSchoolBlockVals(filters, vals, success, error);
}

function patchSchoolBlockVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/block?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSchoolBlock(pk) {
	$.ajax({
		url: '/api/block/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSchoolBlock($formFilters, success, error) {
	var filters = searchSchoolBlockFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolBlockVals(filters, success, error);
}

function searchSchoolBlockFilters($formFilters) {
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

		var filterBlockStartTime = $formFilters.find('.valueBlockStartTime').val();
		if(filterBlockStartTime != null && filterBlockStartTime !== '')
			filters.push({ name: 'fq', value: 'blockStartTime:' + filterBlockStartTime });

		var filterBlockEndTime = $formFilters.find('.valueBlockEndTime').val();
		if(filterBlockEndTime != null && filterBlockEndTime !== '')
			filters.push({ name: 'fq', value: 'blockEndTime:' + filterBlockEndTime });

		var filterBlockPricePerMonth = $formFilters.find('.valueBlockPricePerMonth').val();
		if(filterBlockPricePerMonth != null && filterBlockPricePerMonth !== '')
			filters.push({ name: 'fq', value: 'blockPricePerMonth:' + filterBlockPricePerMonth });

		var $filterBlockMondayCheckbox = $formFilters.find('input.valueBlockMonday[type = "checkbox"]');
		var $filterBlockMondaySelect = $formFilters.find('select.valueBlockMonday');
		var filterBlockMonday = $filterBlockMondaySelect.length ? $filterBlockMondaySelect.val() : $filterBlockMondayCheckbox.prop('checked');
		var filterBlockMondaySelectVal = $formFilters.find('select.filterBlockMonday').val();
		var filterBlockMonday = null;
		if(filterBlockMondaySelectVal !== '')
			filterBlockMonday = filterBlockMondaySelectVal == 'true';
		if(filterBlockMonday != null && filterBlockMonday === true)
			filters.push({ name: 'fq', value: 'blockMonday:' + filterBlockMonday });

		var $filterBlockTuesdayCheckbox = $formFilters.find('input.valueBlockTuesday[type = "checkbox"]');
		var $filterBlockTuesdaySelect = $formFilters.find('select.valueBlockTuesday');
		var filterBlockTuesday = $filterBlockTuesdaySelect.length ? $filterBlockTuesdaySelect.val() : $filterBlockTuesdayCheckbox.prop('checked');
		var filterBlockTuesdaySelectVal = $formFilters.find('select.filterBlockTuesday').val();
		var filterBlockTuesday = null;
		if(filterBlockTuesdaySelectVal !== '')
			filterBlockTuesday = filterBlockTuesdaySelectVal == 'true';
		if(filterBlockTuesday != null && filterBlockTuesday === true)
			filters.push({ name: 'fq', value: 'blockTuesday:' + filterBlockTuesday });

		var $filterBlockWednesdayCheckbox = $formFilters.find('input.valueBlockWednesday[type = "checkbox"]');
		var $filterBlockWednesdaySelect = $formFilters.find('select.valueBlockWednesday');
		var filterBlockWednesday = $filterBlockWednesdaySelect.length ? $filterBlockWednesdaySelect.val() : $filterBlockWednesdayCheckbox.prop('checked');
		var filterBlockWednesdaySelectVal = $formFilters.find('select.filterBlockWednesday').val();
		var filterBlockWednesday = null;
		if(filterBlockWednesdaySelectVal !== '')
			filterBlockWednesday = filterBlockWednesdaySelectVal == 'true';
		if(filterBlockWednesday != null && filterBlockWednesday === true)
			filters.push({ name: 'fq', value: 'blockWednesday:' + filterBlockWednesday });

		var $filterBlockThursdayCheckbox = $formFilters.find('input.valueBlockThursday[type = "checkbox"]');
		var $filterBlockThursdaySelect = $formFilters.find('select.valueBlockThursday');
		var filterBlockThursday = $filterBlockThursdaySelect.length ? $filterBlockThursdaySelect.val() : $filterBlockThursdayCheckbox.prop('checked');
		var filterBlockThursdaySelectVal = $formFilters.find('select.filterBlockThursday').val();
		var filterBlockThursday = null;
		if(filterBlockThursdaySelectVal !== '')
			filterBlockThursday = filterBlockThursdaySelectVal == 'true';
		if(filterBlockThursday != null && filterBlockThursday === true)
			filters.push({ name: 'fq', value: 'blockThursday:' + filterBlockThursday });

		var $filterBlockFridayCheckbox = $formFilters.find('input.valueBlockFriday[type = "checkbox"]');
		var $filterBlockFridaySelect = $formFilters.find('select.valueBlockFriday');
		var filterBlockFriday = $filterBlockFridaySelect.length ? $filterBlockFridaySelect.val() : $filterBlockFridayCheckbox.prop('checked');
		var filterBlockFridaySelectVal = $formFilters.find('select.filterBlockFriday').val();
		var filterBlockFriday = null;
		if(filterBlockFridaySelectVal !== '')
			filterBlockFriday = filterBlockFridaySelectVal == 'true';
		if(filterBlockFriday != null && filterBlockFriday === true)
			filters.push({ name: 'fq', value: 'blockFriday:' + filterBlockFriday });

		var filterAgeKey = $formFilters.find('.valueAgeKey').val();
		if(filterAgeKey != null && filterAgeKey !== '')
			filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

		var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
		if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
			filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

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

		var filterBlockKey = $formFilters.find('.valueBlockKey').val();
		if(filterBlockKey != null && filterBlockKey !== '')
			filters.push({ name: 'fq', value: 'blockKey:' + filterBlockKey });

		var filterChildKey = $formFilters.find('.valueChildKey').val();
		if(filterChildKey != null && filterChildKey !== '')
			filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

		var filterEducationSort = $formFilters.find('.valueEducationSort').val();
		if(filterEducationSort != null && filterEducationSort !== '')
			filters.push({ name: 'fq', value: 'educationSort:' + filterEducationSort });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterYearSort = $formFilters.find('.valueYearSort').val();
		if(filterYearSort != null && filterYearSort !== '')
			filters.push({ name: 'fq', value: 'yearSort:' + filterYearSort });

		var filterSeasonSort = $formFilters.find('.valueSeasonSort').val();
		if(filterSeasonSort != null && filterSeasonSort !== '')
			filters.push({ name: 'fq', value: 'seasonSort:' + filterSeasonSort });

		var filterSessionSort = $formFilters.find('.valueSessionSort').val();
		if(filterSessionSort != null && filterSessionSort !== '')
			filters.push({ name: 'fq', value: 'sessionSort:' + filterSessionSort });

		var filterAgeSort = $formFilters.find('.valueAgeSort').val();
		if(filterAgeSort != null && filterAgeSort !== '')
			filters.push({ name: 'fq', value: 'ageSort:' + filterAgeSort });

		var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
		if(filterSchoolKey != null && filterSchoolKey !== '')
			filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

		var filterYearKey = $formFilters.find('.valueYearKey').val();
		if(filterYearKey != null && filterYearKey !== '')
			filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

		var filterSessionKey = $formFilters.find('.valueSessionKey').val();
		if(filterSessionKey != null && filterSessionKey !== '')
			filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

		var filterSchoolName = $formFilters.find('.valueSchoolName').val();
		if(filterSchoolName != null && filterSchoolName !== '')
			filters.push({ name: 'fq', value: 'schoolName:' + filterSchoolName });

		var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
		if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
			filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });

		var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
		if(filterSchoolLocation != null && filterSchoolLocation !== '')
			filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

		var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
		if(filterSchoolAddress != null && filterSchoolAddress !== '')
			filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

		var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
		if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

		var filterSchoolForm = $formFilters.find('.valueSchoolForm').val();
		if(filterSchoolForm != null && filterSchoolForm !== '')
			filters.push({ name: 'fq', value: 'schoolForm:' + filterSchoolForm });

		var filterSchoolNumber = $formFilters.find('.valueSchoolNumber').val();
		if(filterSchoolNumber != null && filterSchoolNumber !== '')
			filters.push({ name: 'fq', value: 'schoolNumber:' + filterSchoolNumber });

		var filterSchoolAdministratorName = $formFilters.find('.valueSchoolAdministratorName').val();
		if(filterSchoolAdministratorName != null && filterSchoolAdministratorName !== '')
			filters.push({ name: 'fq', value: 'schoolAdministratorName:' + filterSchoolAdministratorName });

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

		var filterAgeShortName = $formFilters.find('.valueAgeShortName').val();
		if(filterAgeShortName != null && filterAgeShortName !== '')
			filters.push({ name: 'fq', value: 'ageShortName:' + filterAgeShortName });

		var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
		if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
			filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });

		var filterAgeStart = $formFilters.find('.valueAgeStart').val();
		if(filterAgeStart != null && filterAgeStart !== '')
			filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

		var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
		if(filterAgeEnd != null && filterAgeEnd !== '')
			filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

		var $filterBlockSundayCheckbox = $formFilters.find('input.valueBlockSunday[type = "checkbox"]');
		var $filterBlockSundaySelect = $formFilters.find('select.valueBlockSunday');
		var filterBlockSunday = $filterBlockSundaySelect.length ? $filterBlockSundaySelect.val() : $filterBlockSundayCheckbox.prop('checked');
		var filterBlockSundaySelectVal = $formFilters.find('select.filterBlockSunday').val();
		var filterBlockSunday = null;
		if(filterBlockSundaySelectVal !== '')
			filterBlockSunday = filterBlockSundaySelectVal == 'true';
		if(filterBlockSunday != null && filterBlockSunday === true)
			filters.push({ name: 'fq', value: 'blockSunday:' + filterBlockSunday });

		var $filterBlockSaturdayCheckbox = $formFilters.find('input.valueBlockSaturday[type = "checkbox"]');
		var $filterBlockSaturdaySelect = $formFilters.find('select.valueBlockSaturday');
		var filterBlockSaturday = $filterBlockSaturdaySelect.length ? $filterBlockSaturdaySelect.val() : $filterBlockSaturdayCheckbox.prop('checked');
		var filterBlockSaturdaySelectVal = $formFilters.find('select.filterBlockSaturday').val();
		var filterBlockSaturday = null;
		if(filterBlockSaturdaySelectVal !== '')
			filterBlockSaturday = filterBlockSaturdaySelectVal == 'true';
		if(filterBlockSaturday != null && filterBlockSaturday === true)
			filters.push({ name: 'fq', value: 'blockSaturday:' + filterBlockSaturday });

		var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
		if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
			filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

		var filterBlockShortName = $formFilters.find('.valueBlockShortName').val();
		if(filterBlockShortName != null && filterBlockShortName !== '')
			filters.push({ name: 'fq', value: 'blockShortName:' + filterBlockShortName });

		var filterBlockAdminName = $formFilters.find('.valueBlockAdminName').val();
		if(filterBlockAdminName != null && filterBlockAdminName !== '')
			filters.push({ name: 'fq', value: 'blockAdminName:' + filterBlockAdminName });

		var filterBlockCompleteName = $formFilters.find('.valueBlockCompleteName').val();
		if(filterBlockCompleteName != null && filterBlockCompleteName !== '')
			filters.push({ name: 'fq', value: 'blockCompleteName:' + filterBlockCompleteName });
	}
	return filters;
}

function searchSchoolBlockVals(filters, success, error) {
	$.ajax({
		url: '/api/block?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolBlockObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-bell ');
			var $span = $('<span>').attr('class', '').text(o['blockCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolBlockVals($formFilters, success, error);
}

function suggestSchoolBlockEnrollmentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['blockKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_blockKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEnrollmentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_blockKeys_" + o['pk'] + "'); patchSchoolBlockVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolBlockForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolEnrollmentVals(filters, success, error);
}

function suggestSchoolBlockAgeKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-birthday-cake ');
			var $span = $('<span>').attr('class', '').text(o['ageCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['blockKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_ageKey_' + pk + '_blockKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueAgeKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_ageKey_" + pk + "_blockKeys_" + o['pk'] + "'); patchSchoolBlockVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'AgeKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolBlockForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolAgeVals(filters, success, error);
}

async function websocketSchoolBlock(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSchoolBlock', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SchoolBlockForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = json['numFound'];
			var numPATCH = json['numPATCH'];
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-indigo ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-bell w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify blocks');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-indigo ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketSchoolEnrollment', function (error, message) {
			$('#Page_enrollmentKeys').trigger('oninput');
			$('#Page_enrollmentKeys_add').text('add an enrollment');
			$('#Page_enrollmentKeys_add').removeClass('w3-disabled');
			$('#Page_enrollmentKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSchoolAge', function (error, message) {
			$('#Page_ageKey').trigger('oninput');
			$('#Page_ageKey_add').text('add an age');
			$('#Page_ageKey_add').removeClass('w3-disabled');
			$('#Page_ageKey_add').attr('disabled', false);
		});
	}
}
async function websocketSchoolBlockInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSchoolBlockVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputSchoolBlock' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSchoolBlock' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSchoolBlock' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSchoolBlock' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSchoolBlock' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSchoolBlock' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'Deleted'));
			}
			var val = o['blockStartTime'];
			if(val != null) {
				var t = moment(val, 'HH:mm');
				if(t)
					val = t.format('h:mm a');
			}
			if(vars.includes('blockStartTime')) {
				$('.inputSchoolBlock' + pk + 'BlockStartTime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'BlockStartTime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'BlockStartTime'));
			}
			var val = o['blockEndTime'];
			if(val != null) {
				var t = moment(val, 'HH:mm');
				if(t)
					val = t.format('h:mm a');
			}
			if(vars.includes('blockEndTime')) {
				$('.inputSchoolBlock' + pk + 'BlockEndTime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'BlockEndTime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'BlockEndTime'));
			}
			var val = o['blockPricePerMonth'];
			if(vars.includes('blockPricePerMonth')) {
				$('.inputSchoolBlock' + pk + 'BlockPricePerMonth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'BlockPricePerMonth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'BlockPricePerMonth'));
			}
			var val = o['blockMonday'];
			if(vars.includes('blockMonday')) {
				$('.inputSchoolBlock' + pk + 'BlockMonday').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'BlockMonday').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'BlockMonday'));
			}
			var val = o['blockTuesday'];
			if(vars.includes('blockTuesday')) {
				$('.inputSchoolBlock' + pk + 'BlockTuesday').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'BlockTuesday').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'BlockTuesday'));
			}
			var val = o['blockWednesday'];
			if(vars.includes('blockWednesday')) {
				$('.inputSchoolBlock' + pk + 'BlockWednesday').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'BlockWednesday').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'BlockWednesday'));
			}
			var val = o['blockThursday'];
			if(vars.includes('blockThursday')) {
				$('.inputSchoolBlock' + pk + 'BlockThursday').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'BlockThursday').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'BlockThursday'));
			}
			var val = o['blockFriday'];
			if(vars.includes('blockFriday')) {
				$('.inputSchoolBlock' + pk + 'BlockFriday').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'BlockFriday').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'BlockFriday'));
			}
			var val = o['ageKey'];
			if(vars.includes('ageKey')) {
				$('.inputSchoolBlock' + pk + 'AgeKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'AgeKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'AgeKey'));
			}
			var val = o['enrollmentKeys'];
			if(vars.includes('enrollmentKeys')) {
				$('.inputSchoolBlock' + pk + 'EnrollmentKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'EnrollmentKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'EnrollmentKeys'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSchoolBlock' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSchoolBlock' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSchoolBlock' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSchoolBlock' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSchoolBlock' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSchoolBlock' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputSchoolBlock' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSchoolBlock' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSchoolBlock' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSchoolBlock' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputSchoolBlock' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputSchoolBlock' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputSchoolBlock' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputSchoolBlock' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputSchoolBlock' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'PageUrlApi'));
			}
			var val = o['blockKey'];
			if(vars.includes('blockKey')) {
				$('.inputSchoolBlock' + pk + 'BlockKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'BlockKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'BlockKey'));
			}
			var val = o['childKey'];
			if(vars.includes('childKey')) {
				$('.inputSchoolBlock' + pk + 'ChildKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'ChildKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'ChildKey'));
			}
			var val = o['educationSort'];
			if(vars.includes('educationSort')) {
				$('.inputSchoolBlock' + pk + 'EducationSort').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'EducationSort').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'EducationSort'));
			}
			var val = o['schoolSort'];
			if(vars.includes('schoolSort')) {
				$('.inputSchoolBlock' + pk + 'SchoolSort').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'SchoolSort').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'SchoolSort'));
			}
			var val = o['yearSort'];
			if(vars.includes('yearSort')) {
				$('.inputSchoolBlock' + pk + 'YearSort').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'YearSort').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'YearSort'));
			}
			var val = o['seasonSort'];
			if(vars.includes('seasonSort')) {
				$('.inputSchoolBlock' + pk + 'SeasonSort').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'SeasonSort').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'SeasonSort'));
			}
			var val = o['sessionSort'];
			if(vars.includes('sessionSort')) {
				$('.inputSchoolBlock' + pk + 'SessionSort').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'SessionSort').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'SessionSort'));
			}
			var val = o['ageSort'];
			if(vars.includes('ageSort')) {
				$('.inputSchoolBlock' + pk + 'AgeSort').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'AgeSort').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'AgeSort'));
			}
			var val = o['schoolKey'];
			if(vars.includes('schoolKey')) {
				$('.inputSchoolBlock' + pk + 'SchoolKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'SchoolKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'SchoolKey'));
			}
			var val = o['yearKey'];
			if(vars.includes('yearKey')) {
				$('.inputSchoolBlock' + pk + 'YearKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'YearKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'YearKey'));
			}
			var val = o['sessionKey'];
			if(vars.includes('sessionKey')) {
				$('.inputSchoolBlock' + pk + 'SessionKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'SessionKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'SessionKey'));
			}
			var val = o['schoolName'];
			if(vars.includes('schoolName')) {
				$('.inputSchoolBlock' + pk + 'SchoolName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'SchoolName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'SchoolName'));
			}
			var val = o['schoolCompleteName'];
			if(vars.includes('schoolCompleteName')) {
				$('.inputSchoolBlock' + pk + 'SchoolCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'SchoolCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'SchoolCompleteName'));
			}
			var val = o['schoolLocation'];
			if(vars.includes('schoolLocation')) {
				$('.inputSchoolBlock' + pk + 'SchoolLocation').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'SchoolLocation').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'SchoolLocation'));
			}
			var val = o['schoolAddress'];
			if(vars.includes('schoolAddress')) {
				$('.inputSchoolBlock' + pk + 'SchoolAddress').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'SchoolAddress').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'SchoolAddress'));
			}
			var val = o['schoolPhoneNumber'];
			if(vars.includes('schoolPhoneNumber')) {
				$('.inputSchoolBlock' + pk + 'SchoolPhoneNumber').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'SchoolPhoneNumber').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'SchoolPhoneNumber'));
			}
			var val = o['schoolForm'];
			if(vars.includes('schoolForm')) {
				$('.inputSchoolBlock' + pk + 'SchoolForm').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'SchoolForm').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'SchoolForm'));
			}
			var val = o['schoolNumber'];
			if(vars.includes('schoolNumber')) {
				$('.inputSchoolBlock' + pk + 'SchoolNumber').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'SchoolNumber').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'SchoolNumber'));
			}
			var val = o['schoolAdministratorName'];
			if(vars.includes('schoolAdministratorName')) {
				$('.inputSchoolBlock' + pk + 'SchoolAdministratorName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'SchoolAdministratorName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'SchoolAdministratorName'));
			}
			var val = o['yearStart'];
			if(vars.includes('yearStart')) {
				$('.inputSchoolBlock' + pk + 'YearStart').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'YearStart').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'YearStart'));
			}
			var val = o['yearEnd'];
			if(vars.includes('yearEnd')) {
				$('.inputSchoolBlock' + pk + 'YearEnd').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'YearEnd').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'YearEnd'));
			}
			var val = o['seasonStartDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('seasonStartDate')) {
				$('.inputSchoolBlock' + pk + 'SeasonStartDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'SeasonStartDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'SeasonStartDate'));
			}
			var val = o['yearEnrollmentFee'];
			if(vars.includes('yearEnrollmentFee')) {
				$('.inputSchoolBlock' + pk + 'YearEnrollmentFee').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'YearEnrollmentFee').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'YearEnrollmentFee'));
			}
			var val = o['sessionStartDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('sessionStartDate')) {
				$('.inputSchoolBlock' + pk + 'SessionStartDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'SessionStartDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'SessionStartDate'));
			}
			var val = o['sessionEndDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('sessionEndDate')) {
				$('.inputSchoolBlock' + pk + 'SessionEndDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'SessionEndDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'SessionEndDate'));
			}
			var val = o['ageShortName'];
			if(vars.includes('ageShortName')) {
				$('.inputSchoolBlock' + pk + 'AgeShortName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'AgeShortName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'AgeShortName'));
			}
			var val = o['ageCompleteName'];
			if(vars.includes('ageCompleteName')) {
				$('.inputSchoolBlock' + pk + 'AgeCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'AgeCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'AgeCompleteName'));
			}
			var val = o['ageStart'];
			if(vars.includes('ageStart')) {
				$('.inputSchoolBlock' + pk + 'AgeStart').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'AgeStart').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'AgeStart'));
			}
			var val = o['ageEnd'];
			if(vars.includes('ageEnd')) {
				$('.inputSchoolBlock' + pk + 'AgeEnd').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'AgeEnd').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'AgeEnd'));
			}
			var val = o['blockSunday'];
			if(vars.includes('blockSunday')) {
				$('.inputSchoolBlock' + pk + 'BlockSunday').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'BlockSunday').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'BlockSunday'));
			}
			var val = o['blockSaturday'];
			if(vars.includes('blockSaturday')) {
				$('.inputSchoolBlock' + pk + 'BlockSaturday').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'BlockSaturday').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'BlockSaturday'));
			}
			var val = o['blockTotalPrice'];
			if(vars.includes('blockTotalPrice')) {
				$('.inputSchoolBlock' + pk + 'BlockTotalPrice').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'BlockTotalPrice').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'BlockTotalPrice'));
			}
			var val = o['blockShortName'];
			if(vars.includes('blockShortName')) {
				$('.inputSchoolBlock' + pk + 'BlockShortName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'BlockShortName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'BlockShortName'));
			}
			var val = o['blockAdminName'];
			if(vars.includes('blockAdminName')) {
				$('.inputSchoolBlock' + pk + 'BlockAdminName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'BlockAdminName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'BlockAdminName'));
			}
			var val = o['blockCompleteName'];
			if(vars.includes('blockCompleteName')) {
				$('.inputSchoolBlock' + pk + 'BlockCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolBlock' + pk + 'BlockCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolBlock' + pk + 'BlockCompleteName'));
			}
		});
	}
}
