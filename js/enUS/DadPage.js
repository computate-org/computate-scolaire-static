
// POST //

async function postSchoolDad($formValues, success, error) {
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

	var valuePersonFirstName = $formValues.find('.valuePersonFirstName').val();
	if(valuePersonFirstName != null && valuePersonFirstName !== '')
		vals['personFirstName'] = valuePersonFirstName;

	var valueFamilyName = $formValues.find('.valueFamilyName').val();
	if(valueFamilyName != null && valueFamilyName !== '')
		vals['familyName'] = valueFamilyName;

	var valuePersonFirstNamePreferred = $formValues.find('.valuePersonFirstNamePreferred').val();
	if(valuePersonFirstNamePreferred != null && valuePersonFirstNamePreferred !== '')
		vals['personFirstNamePreferred'] = valuePersonFirstNamePreferred;

	var valuePersonEmail = $formValues.find('.valuePersonEmail').val();
	if(valuePersonEmail != null && valuePersonEmail !== '')
		vals['personEmail'] = valuePersonEmail;

	var valuePersonPhoneNumber = $formValues.find('.valuePersonPhoneNumber').val();
	if(valuePersonPhoneNumber != null && valuePersonPhoneNumber !== '')
		vals['personPhoneNumber'] = valuePersonPhoneNumber;

	var valuePersonOccupation = $formValues.find('.valuePersonOccupation').val();
	if(valuePersonOccupation != null && valuePersonOccupation !== '')
		vals['personOccupation'] = valuePersonOccupation;

	var valuePersonSms = $formValues.find('.valuePersonSms').prop('checked');
	if(valuePersonSms != null && valuePersonSms !== '')
		vals['personSms'] = valuePersonSms;

	var valuePersonEmergencyContact = $formValues.find('.valuePersonEmergencyContact').prop('checked');
	if(valuePersonEmergencyContact != null && valuePersonEmergencyContact !== '')
		vals['personEmergencyContact'] = valuePersonEmergencyContact;

	var valuePersonReceiveEmail = $formValues.find('.valuePersonReceiveEmail').prop('checked');
	if(valuePersonReceiveEmail != null && valuePersonReceiveEmail !== '')
		vals['personReceiveEmail'] = valuePersonReceiveEmail;

	var valuePersonPickup = $formValues.find('.valuePersonPickup').prop('checked');
	if(valuePersonPickup != null && valuePersonPickup !== '')
		vals['personPickup'] = valuePersonPickup;

	var valuePhoto = $formValues.find('.valuePhoto').val();
	if(valuePhoto != null && valuePhoto !== '')
		vals['photo'] = valuePhoto;

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

	$.ajax({
		url: '/api/dad'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSchoolDadVals(vals, success, error) {
	$.ajax({
		url: '/api/dad'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportSchoolDad($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportSchoolDadVals(JSON.parse(json), success, error);
}

function putimportSchoolDadVals(json, success, error) {
	$.ajax({
		url: '/api/dad/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeSchoolDad($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeSchoolDadVals(JSON.parse(json), success, error);
}

function putmergeSchoolDadVals(json, success, error) {
	$.ajax({
		url: '/api/dad/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopySchoolDad($formValues, pk, success, error) {
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

	var valuePersonFirstName = $formValues.find('.valuePersonFirstName').val();
	if(valuePersonFirstName != null && valuePersonFirstName !== '')
		vals['personFirstName'] = valuePersonFirstName;

	var valueFamilyName = $formValues.find('.valueFamilyName').val();
	if(valueFamilyName != null && valueFamilyName !== '')
		vals['familyName'] = valueFamilyName;

	var valuePersonFirstNamePreferred = $formValues.find('.valuePersonFirstNamePreferred').val();
	if(valuePersonFirstNamePreferred != null && valuePersonFirstNamePreferred !== '')
		vals['personFirstNamePreferred'] = valuePersonFirstNamePreferred;

	var valuePersonEmail = $formValues.find('.valuePersonEmail').val();
	if(valuePersonEmail != null && valuePersonEmail !== '')
		vals['personEmail'] = valuePersonEmail;

	var valuePersonPhoneNumber = $formValues.find('.valuePersonPhoneNumber').val();
	if(valuePersonPhoneNumber != null && valuePersonPhoneNumber !== '')
		vals['personPhoneNumber'] = valuePersonPhoneNumber;

	var valuePersonOccupation = $formValues.find('.valuePersonOccupation').val();
	if(valuePersonOccupation != null && valuePersonOccupation !== '')
		vals['personOccupation'] = valuePersonOccupation;

	var valuePersonSms = $formValues.find('.valuePersonSms').prop('checked');
	if(valuePersonSms != null && valuePersonSms !== '')
		vals['personSms'] = valuePersonSms;

	var valuePersonEmergencyContact = $formValues.find('.valuePersonEmergencyContact').prop('checked');
	if(valuePersonEmergencyContact != null && valuePersonEmergencyContact !== '')
		vals['personEmergencyContact'] = valuePersonEmergencyContact;

	var valuePersonReceiveEmail = $formValues.find('.valuePersonReceiveEmail').prop('checked');
	if(valuePersonReceiveEmail != null && valuePersonReceiveEmail !== '')
		vals['personReceiveEmail'] = valuePersonReceiveEmail;

	var valuePersonPickup = $formValues.find('.valuePersonPickup').prop('checked');
	if(valuePersonPickup != null && valuePersonPickup !== '')
		vals['personPickup'] = valuePersonPickup;

	var valuePhoto = $formValues.find('.valuePhoto').val();
	if(valuePhoto != null && valuePhoto !== '')
		vals['photo'] = valuePhoto;

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

	putcopySchoolDadVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopySchoolDadVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/dad/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSchoolDad($formFilters, $formValues, pk, success, error) {
	var filters = patchSchoolDadFilters($formFilters);

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

	var valuePersonFirstName = $formValues.find('.valuePersonFirstName').val();
	var removePersonFirstName = $formValues.find('.removePersonFirstName').val() === 'true';
	var setPersonFirstName = removePersonFirstName ? null : $formValues.find('.setPersonFirstName').val();
	var addPersonFirstName = $formValues.find('.addPersonFirstName').val();
	if(removePersonFirstName || setPersonFirstName != null && setPersonFirstName !== '')
		vals['setPersonFirstName'] = setPersonFirstName;
	if(addPersonFirstName != null && addPersonFirstName !== '')
		vals['addPersonFirstName'] = addPersonFirstName;
	var removePersonFirstName = $formValues.find('.removePersonFirstName').val();
	if(removePersonFirstName != null && removePersonFirstName !== '')
		vals['removePersonFirstName'] = removePersonFirstName;

	var valueFamilyName = $formValues.find('.valueFamilyName').val();
	var removeFamilyName = $formValues.find('.removeFamilyName').val() === 'true';
	var setFamilyName = removeFamilyName ? null : $formValues.find('.setFamilyName').val();
	var addFamilyName = $formValues.find('.addFamilyName').val();
	if(removeFamilyName || setFamilyName != null && setFamilyName !== '')
		vals['setFamilyName'] = setFamilyName;
	if(addFamilyName != null && addFamilyName !== '')
		vals['addFamilyName'] = addFamilyName;
	var removeFamilyName = $formValues.find('.removeFamilyName').val();
	if(removeFamilyName != null && removeFamilyName !== '')
		vals['removeFamilyName'] = removeFamilyName;

	var valuePersonFirstNamePreferred = $formValues.find('.valuePersonFirstNamePreferred').val();
	var removePersonFirstNamePreferred = $formValues.find('.removePersonFirstNamePreferred').val() === 'true';
	var setPersonFirstNamePreferred = removePersonFirstNamePreferred ? null : $formValues.find('.setPersonFirstNamePreferred').val();
	var addPersonFirstNamePreferred = $formValues.find('.addPersonFirstNamePreferred').val();
	if(removePersonFirstNamePreferred || setPersonFirstNamePreferred != null && setPersonFirstNamePreferred !== '')
		vals['setPersonFirstNamePreferred'] = setPersonFirstNamePreferred;
	if(addPersonFirstNamePreferred != null && addPersonFirstNamePreferred !== '')
		vals['addPersonFirstNamePreferred'] = addPersonFirstNamePreferred;
	var removePersonFirstNamePreferred = $formValues.find('.removePersonFirstNamePreferred').val();
	if(removePersonFirstNamePreferred != null && removePersonFirstNamePreferred !== '')
		vals['removePersonFirstNamePreferred'] = removePersonFirstNamePreferred;

	var valuePersonEmail = $formValues.find('.valuePersonEmail').val();
	var removePersonEmail = $formValues.find('.removePersonEmail').val() === 'true';
	var setPersonEmail = removePersonEmail ? null : $formValues.find('.setPersonEmail').val();
	var addPersonEmail = $formValues.find('.addPersonEmail').val();
	if(removePersonEmail || setPersonEmail != null && setPersonEmail !== '')
		vals['setPersonEmail'] = setPersonEmail;
	if(addPersonEmail != null && addPersonEmail !== '')
		vals['addPersonEmail'] = addPersonEmail;
	var removePersonEmail = $formValues.find('.removePersonEmail').val();
	if(removePersonEmail != null && removePersonEmail !== '')
		vals['removePersonEmail'] = removePersonEmail;

	var valuePersonPhoneNumber = $formValues.find('.valuePersonPhoneNumber').val();
	var removePersonPhoneNumber = $formValues.find('.removePersonPhoneNumber').val() === 'true';
	var setPersonPhoneNumber = removePersonPhoneNumber ? null : $formValues.find('.setPersonPhoneNumber').val();
	var addPersonPhoneNumber = $formValues.find('.addPersonPhoneNumber').val();
	if(removePersonPhoneNumber || setPersonPhoneNumber != null && setPersonPhoneNumber !== '')
		vals['setPersonPhoneNumber'] = setPersonPhoneNumber;
	if(addPersonPhoneNumber != null && addPersonPhoneNumber !== '')
		vals['addPersonPhoneNumber'] = addPersonPhoneNumber;
	var removePersonPhoneNumber = $formValues.find('.removePersonPhoneNumber').val();
	if(removePersonPhoneNumber != null && removePersonPhoneNumber !== '')
		vals['removePersonPhoneNumber'] = removePersonPhoneNumber;

	var valuePersonOccupation = $formValues.find('.valuePersonOccupation').val();
	var removePersonOccupation = $formValues.find('.removePersonOccupation').val() === 'true';
	var setPersonOccupation = removePersonOccupation ? null : $formValues.find('.setPersonOccupation').val();
	var addPersonOccupation = $formValues.find('.addPersonOccupation').val();
	if(removePersonOccupation || setPersonOccupation != null && setPersonOccupation !== '')
		vals['setPersonOccupation'] = setPersonOccupation;
	if(addPersonOccupation != null && addPersonOccupation !== '')
		vals['addPersonOccupation'] = addPersonOccupation;
	var removePersonOccupation = $formValues.find('.removePersonOccupation').val();
	if(removePersonOccupation != null && removePersonOccupation !== '')
		vals['removePersonOccupation'] = removePersonOccupation;

	var valuePersonSms = $formValues.find('.valuePersonSms').prop('checked');
	var removePersonSms = $formValues.find('.removePersonSms').val() === 'true';
	var valuePersonSmsSelectVal = $formValues.find('select.setPersonSms').val();
	var valuePersonSms = null;
	if(valuePersonSmsSelectVal != null && valuePersonSmsSelectVal !== '')
		valuePersonSms = valuePersonSmsSelectVal == 'true';
	var setPersonSms = removePersonSms ? null : valuePersonSms;
	var addPersonSms = $formValues.find('.addPersonSms').prop('checked');
	if(removePersonSms || setPersonSms != null && setPersonSms !== '')
		vals['setPersonSms'] = setPersonSms;
	if(addPersonSms != null && addPersonSms !== '')
		vals['addPersonSms'] = addPersonSms;
	var removePersonSms = $formValues.find('.removePersonSms').prop('checked');
	if(removePersonSms != null && removePersonSms !== '')
		vals['removePersonSms'] = removePersonSms;

	var valuePersonEmergencyContact = $formValues.find('.valuePersonEmergencyContact').prop('checked');
	var removePersonEmergencyContact = $formValues.find('.removePersonEmergencyContact').val() === 'true';
	var valuePersonEmergencyContactSelectVal = $formValues.find('select.setPersonEmergencyContact').val();
	var valuePersonEmergencyContact = null;
	if(valuePersonEmergencyContactSelectVal != null && valuePersonEmergencyContactSelectVal !== '')
		valuePersonEmergencyContact = valuePersonEmergencyContactSelectVal == 'true';
	var setPersonEmergencyContact = removePersonEmergencyContact ? null : valuePersonEmergencyContact;
	var addPersonEmergencyContact = $formValues.find('.addPersonEmergencyContact').prop('checked');
	if(removePersonEmergencyContact || setPersonEmergencyContact != null && setPersonEmergencyContact !== '')
		vals['setPersonEmergencyContact'] = setPersonEmergencyContact;
	if(addPersonEmergencyContact != null && addPersonEmergencyContact !== '')
		vals['addPersonEmergencyContact'] = addPersonEmergencyContact;
	var removePersonEmergencyContact = $formValues.find('.removePersonEmergencyContact').prop('checked');
	if(removePersonEmergencyContact != null && removePersonEmergencyContact !== '')
		vals['removePersonEmergencyContact'] = removePersonEmergencyContact;

	var valuePersonReceiveEmail = $formValues.find('.valuePersonReceiveEmail').prop('checked');
	var removePersonReceiveEmail = $formValues.find('.removePersonReceiveEmail').val() === 'true';
	var valuePersonReceiveEmailSelectVal = $formValues.find('select.setPersonReceiveEmail').val();
	var valuePersonReceiveEmail = null;
	if(valuePersonReceiveEmailSelectVal != null && valuePersonReceiveEmailSelectVal !== '')
		valuePersonReceiveEmail = valuePersonReceiveEmailSelectVal == 'true';
	var setPersonReceiveEmail = removePersonReceiveEmail ? null : valuePersonReceiveEmail;
	var addPersonReceiveEmail = $formValues.find('.addPersonReceiveEmail').prop('checked');
	if(removePersonReceiveEmail || setPersonReceiveEmail != null && setPersonReceiveEmail !== '')
		vals['setPersonReceiveEmail'] = setPersonReceiveEmail;
	if(addPersonReceiveEmail != null && addPersonReceiveEmail !== '')
		vals['addPersonReceiveEmail'] = addPersonReceiveEmail;
	var removePersonReceiveEmail = $formValues.find('.removePersonReceiveEmail').prop('checked');
	if(removePersonReceiveEmail != null && removePersonReceiveEmail !== '')
		vals['removePersonReceiveEmail'] = removePersonReceiveEmail;

	var valuePersonPickup = $formValues.find('.valuePersonPickup').prop('checked');
	var removePersonPickup = $formValues.find('.removePersonPickup').val() === 'true';
	var valuePersonPickupSelectVal = $formValues.find('select.setPersonPickup').val();
	var valuePersonPickup = null;
	if(valuePersonPickupSelectVal != null && valuePersonPickupSelectVal !== '')
		valuePersonPickup = valuePersonPickupSelectVal == 'true';
	var setPersonPickup = removePersonPickup ? null : valuePersonPickup;
	var addPersonPickup = $formValues.find('.addPersonPickup').prop('checked');
	if(removePersonPickup || setPersonPickup != null && setPersonPickup !== '')
		vals['setPersonPickup'] = setPersonPickup;
	if(addPersonPickup != null && addPersonPickup !== '')
		vals['addPersonPickup'] = addPersonPickup;
	var removePersonPickup = $formValues.find('.removePersonPickup').prop('checked');
	if(removePersonPickup != null && removePersonPickup !== '')
		vals['removePersonPickup'] = removePersonPickup;

	var valuePhoto = $formValues.find('.valuePhoto').val();
	var removePhoto = $formValues.find('.removePhoto').val() === 'true';
	var setPhoto = removePhoto ? null : $formValues.find('.setPhoto').val();
	var addPhoto = $formValues.find('.addPhoto').val();
	if(removePhoto || setPhoto != null && setPhoto !== '')
		vals['setPhoto'] = setPhoto;
	if(addPhoto != null && addPhoto !== '')
		vals['addPhoto'] = addPhoto;
	var removePhoto = $formValues.find('.removePhoto').val();
	if(removePhoto != null && removePhoto !== '')
		vals['removePhoto'] = removePhoto;

	var valueEnrollmentKeys = $formValues.find('input.valueEnrollmentKeys:checked').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['addEnrollmentKeys'] = valueEnrollmentKeys;

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

	patchSchoolDadVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSchoolDadFilters($formFilters) {
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

		var filterPersonFirstName = $formFilters.find('.valuePersonFirstName').val();
		if(filterPersonFirstName != null && filterPersonFirstName !== '')
			filters.push({ name: 'fq', value: 'personFirstName:' + filterPersonFirstName });

		var filterFamilyName = $formFilters.find('.valueFamilyName').val();
		if(filterFamilyName != null && filterFamilyName !== '')
			filters.push({ name: 'fq', value: 'familyName:' + filterFamilyName });

		var filterPersonFirstNamePreferred = $formFilters.find('.valuePersonFirstNamePreferred').val();
		if(filterPersonFirstNamePreferred != null && filterPersonFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'personFirstNamePreferred:' + filterPersonFirstNamePreferred });

		var filterPersonEmail = $formFilters.find('.valuePersonEmail').val();
		if(filterPersonEmail != null && filterPersonEmail !== '')
			filters.push({ name: 'fq', value: 'personEmail:' + filterPersonEmail });

		var filterPersonPhoneNumber = $formFilters.find('.valuePersonPhoneNumber').val();
		if(filterPersonPhoneNumber != null && filterPersonPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'personPhoneNumber:' + filterPersonPhoneNumber });

		var filterPersonOccupation = $formFilters.find('.valuePersonOccupation').val();
		if(filterPersonOccupation != null && filterPersonOccupation !== '')
			filters.push({ name: 'fq', value: 'personOccupation:' + filterPersonOccupation });

		var $filterPersonSmsCheckbox = $formFilters.find('input.valuePersonSms[type = "checkbox"]');
		var $filterPersonSmsSelect = $formFilters.find('select.valuePersonSms');
		var filterPersonSms = $filterPersonSmsSelect.length ? $filterPersonSmsSelect.val() : $filterPersonSmsCheckbox.prop('checked');
		var filterPersonSmsSelectVal = $formFilters.find('select.filterPersonSms').val();
		var filterPersonSms = null;
		if(filterPersonSmsSelectVal !== '')
			filterPersonSms = filterPersonSmsSelectVal == 'true';
		if(filterPersonSms != null && filterPersonSms === true)
			filters.push({ name: 'fq', value: 'personSms:' + filterPersonSms });

		var $filterPersonEmergencyContactCheckbox = $formFilters.find('input.valuePersonEmergencyContact[type = "checkbox"]');
		var $filterPersonEmergencyContactSelect = $formFilters.find('select.valuePersonEmergencyContact');
		var filterPersonEmergencyContact = $filterPersonEmergencyContactSelect.length ? $filterPersonEmergencyContactSelect.val() : $filterPersonEmergencyContactCheckbox.prop('checked');
		var filterPersonEmergencyContactSelectVal = $formFilters.find('select.filterPersonEmergencyContact').val();
		var filterPersonEmergencyContact = null;
		if(filterPersonEmergencyContactSelectVal !== '')
			filterPersonEmergencyContact = filterPersonEmergencyContactSelectVal == 'true';
		if(filterPersonEmergencyContact != null && filterPersonEmergencyContact === true)
			filters.push({ name: 'fq', value: 'personEmergencyContact:' + filterPersonEmergencyContact });

		var $filterPersonReceiveEmailCheckbox = $formFilters.find('input.valuePersonReceiveEmail[type = "checkbox"]');
		var $filterPersonReceiveEmailSelect = $formFilters.find('select.valuePersonReceiveEmail');
		var filterPersonReceiveEmail = $filterPersonReceiveEmailSelect.length ? $filterPersonReceiveEmailSelect.val() : $filterPersonReceiveEmailCheckbox.prop('checked');
		var filterPersonReceiveEmailSelectVal = $formFilters.find('select.filterPersonReceiveEmail').val();
		var filterPersonReceiveEmail = null;
		if(filterPersonReceiveEmailSelectVal !== '')
			filterPersonReceiveEmail = filterPersonReceiveEmailSelectVal == 'true';
		if(filterPersonReceiveEmail != null && filterPersonReceiveEmail === true)
			filters.push({ name: 'fq', value: 'personReceiveEmail:' + filterPersonReceiveEmail });

		var $filterPersonPickupCheckbox = $formFilters.find('input.valuePersonPickup[type = "checkbox"]');
		var $filterPersonPickupSelect = $formFilters.find('select.valuePersonPickup');
		var filterPersonPickup = $filterPersonPickupSelect.length ? $filterPersonPickupSelect.val() : $filterPersonPickupCheckbox.prop('checked');
		var filterPersonPickupSelectVal = $formFilters.find('select.filterPersonPickup').val();
		var filterPersonPickup = null;
		if(filterPersonPickupSelectVal !== '')
			filterPersonPickup = filterPersonPickupSelectVal == 'true';
		if(filterPersonPickup != null && filterPersonPickup === true)
			filters.push({ name: 'fq', value: 'personPickup:' + filterPersonPickup });

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

		var filterDadKey = $formFilters.find('.valueDadKey').val();
		if(filterDadKey != null && filterDadKey !== '')
			filters.push({ name: 'fq', value: 'dadKey:' + filterDadKey });

		var filterFamilySort = $formFilters.find('.valueFamilySort').val();
		if(filterFamilySort != null && filterFamilySort !== '')
			filters.push({ name: 'fq', value: 'familySort:' + filterFamilySort });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterSchoolKeys = $formFilters.find('.valueSchoolKeys').val();
		if(filterSchoolKeys != null && filterSchoolKeys !== '')
			filters.push({ name: 'fq', value: 'schoolKeys:' + filterSchoolKeys });

		var filterYearKeys = $formFilters.find('.valueYearKeys').val();
		if(filterYearKeys != null && filterYearKeys !== '')
			filters.push({ name: 'fq', value: 'yearKeys:' + filterYearKeys });

		var filterSeasonKeys = $formFilters.find('.valueSeasonKeys').val();
		if(filterSeasonKeys != null && filterSeasonKeys !== '')
			filters.push({ name: 'fq', value: 'seasonKeys:' + filterSeasonKeys });

		var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
		if(filterSessionKeys != null && filterSessionKeys !== '')
			filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

		var filterAgeKeys = $formFilters.find('.valueAgeKeys').val();
		if(filterAgeKeys != null && filterAgeKeys !== '')
			filters.push({ name: 'fq', value: 'ageKeys:' + filterAgeKeys });

		var filterPersonCompleteName = $formFilters.find('.valuePersonCompleteName').val();
		if(filterPersonCompleteName != null && filterPersonCompleteName !== '')
			filters.push({ name: 'fq', value: 'personCompleteName:' + filterPersonCompleteName });

		var filterPersonCompleteNamePreferred = $formFilters.find('.valuePersonCompleteNamePreferred').val();
		if(filterPersonCompleteNamePreferred != null && filterPersonCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'personCompleteNamePreferred:' + filterPersonCompleteNamePreferred });

		var filterPersonFormalName = $formFilters.find('.valuePersonFormalName').val();
		if(filterPersonFormalName != null && filterPersonFormalName !== '')
			filters.push({ name: 'fq', value: 'personFormalName:' + filterPersonFormalName });

		var filterPersonRelation = $formFilters.find('.valuePersonRelation').val();
		if(filterPersonRelation != null && filterPersonRelation !== '')
			filters.push({ name: 'fq', value: 'personRelation:' + filterPersonRelation });

		var filterDadCompleteName = $formFilters.find('.valueDadCompleteName').val();
		if(filterDadCompleteName != null && filterDadCompleteName !== '')
			filters.push({ name: 'fq', value: 'dadCompleteName:' + filterDadCompleteName });
	}
	return filters;
}

function patchSchoolDadVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSchoolDadVals(filters, vals, success, error);
}

function patchSchoolDadVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/dad?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSchoolDad(pk) {
	$.ajax({
		url: '/api/dad/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSchoolDad($formFilters, success, error) {
	var filters = searchSchoolDadFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolDadVals(filters, success, error);
}

function searchSchoolDadFilters($formFilters) {
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

		var filterPersonFirstName = $formFilters.find('.valuePersonFirstName').val();
		if(filterPersonFirstName != null && filterPersonFirstName !== '')
			filters.push({ name: 'fq', value: 'personFirstName:' + filterPersonFirstName });

		var filterFamilyName = $formFilters.find('.valueFamilyName').val();
		if(filterFamilyName != null && filterFamilyName !== '')
			filters.push({ name: 'fq', value: 'familyName:' + filterFamilyName });

		var filterPersonFirstNamePreferred = $formFilters.find('.valuePersonFirstNamePreferred').val();
		if(filterPersonFirstNamePreferred != null && filterPersonFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'personFirstNamePreferred:' + filterPersonFirstNamePreferred });

		var filterPersonEmail = $formFilters.find('.valuePersonEmail').val();
		if(filterPersonEmail != null && filterPersonEmail !== '')
			filters.push({ name: 'fq', value: 'personEmail:' + filterPersonEmail });

		var filterPersonPhoneNumber = $formFilters.find('.valuePersonPhoneNumber').val();
		if(filterPersonPhoneNumber != null && filterPersonPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'personPhoneNumber:' + filterPersonPhoneNumber });

		var filterPersonOccupation = $formFilters.find('.valuePersonOccupation').val();
		if(filterPersonOccupation != null && filterPersonOccupation !== '')
			filters.push({ name: 'fq', value: 'personOccupation:' + filterPersonOccupation });

		var $filterPersonSmsCheckbox = $formFilters.find('input.valuePersonSms[type = "checkbox"]');
		var $filterPersonSmsSelect = $formFilters.find('select.valuePersonSms');
		var filterPersonSms = $filterPersonSmsSelect.length ? $filterPersonSmsSelect.val() : $filterPersonSmsCheckbox.prop('checked');
		var filterPersonSmsSelectVal = $formFilters.find('select.filterPersonSms').val();
		var filterPersonSms = null;
		if(filterPersonSmsSelectVal !== '')
			filterPersonSms = filterPersonSmsSelectVal == 'true';
		if(filterPersonSms != null && filterPersonSms === true)
			filters.push({ name: 'fq', value: 'personSms:' + filterPersonSms });

		var $filterPersonEmergencyContactCheckbox = $formFilters.find('input.valuePersonEmergencyContact[type = "checkbox"]');
		var $filterPersonEmergencyContactSelect = $formFilters.find('select.valuePersonEmergencyContact');
		var filterPersonEmergencyContact = $filterPersonEmergencyContactSelect.length ? $filterPersonEmergencyContactSelect.val() : $filterPersonEmergencyContactCheckbox.prop('checked');
		var filterPersonEmergencyContactSelectVal = $formFilters.find('select.filterPersonEmergencyContact').val();
		var filterPersonEmergencyContact = null;
		if(filterPersonEmergencyContactSelectVal !== '')
			filterPersonEmergencyContact = filterPersonEmergencyContactSelectVal == 'true';
		if(filterPersonEmergencyContact != null && filterPersonEmergencyContact === true)
			filters.push({ name: 'fq', value: 'personEmergencyContact:' + filterPersonEmergencyContact });

		var $filterPersonReceiveEmailCheckbox = $formFilters.find('input.valuePersonReceiveEmail[type = "checkbox"]');
		var $filterPersonReceiveEmailSelect = $formFilters.find('select.valuePersonReceiveEmail');
		var filterPersonReceiveEmail = $filterPersonReceiveEmailSelect.length ? $filterPersonReceiveEmailSelect.val() : $filterPersonReceiveEmailCheckbox.prop('checked');
		var filterPersonReceiveEmailSelectVal = $formFilters.find('select.filterPersonReceiveEmail').val();
		var filterPersonReceiveEmail = null;
		if(filterPersonReceiveEmailSelectVal !== '')
			filterPersonReceiveEmail = filterPersonReceiveEmailSelectVal == 'true';
		if(filterPersonReceiveEmail != null && filterPersonReceiveEmail === true)
			filters.push({ name: 'fq', value: 'personReceiveEmail:' + filterPersonReceiveEmail });

		var $filterPersonPickupCheckbox = $formFilters.find('input.valuePersonPickup[type = "checkbox"]');
		var $filterPersonPickupSelect = $formFilters.find('select.valuePersonPickup');
		var filterPersonPickup = $filterPersonPickupSelect.length ? $filterPersonPickupSelect.val() : $filterPersonPickupCheckbox.prop('checked');
		var filterPersonPickupSelectVal = $formFilters.find('select.filterPersonPickup').val();
		var filterPersonPickup = null;
		if(filterPersonPickupSelectVal !== '')
			filterPersonPickup = filterPersonPickupSelectVal == 'true';
		if(filterPersonPickup != null && filterPersonPickup === true)
			filters.push({ name: 'fq', value: 'personPickup:' + filterPersonPickup });

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

		var filterDadKey = $formFilters.find('.valueDadKey').val();
		if(filterDadKey != null && filterDadKey !== '')
			filters.push({ name: 'fq', value: 'dadKey:' + filterDadKey });

		var filterFamilySort = $formFilters.find('.valueFamilySort').val();
		if(filterFamilySort != null && filterFamilySort !== '')
			filters.push({ name: 'fq', value: 'familySort:' + filterFamilySort });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterSchoolKeys = $formFilters.find('.valueSchoolKeys').val();
		if(filterSchoolKeys != null && filterSchoolKeys !== '')
			filters.push({ name: 'fq', value: 'schoolKeys:' + filterSchoolKeys });

		var filterYearKeys = $formFilters.find('.valueYearKeys').val();
		if(filterYearKeys != null && filterYearKeys !== '')
			filters.push({ name: 'fq', value: 'yearKeys:' + filterYearKeys });

		var filterSeasonKeys = $formFilters.find('.valueSeasonKeys').val();
		if(filterSeasonKeys != null && filterSeasonKeys !== '')
			filters.push({ name: 'fq', value: 'seasonKeys:' + filterSeasonKeys });

		var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
		if(filterSessionKeys != null && filterSessionKeys !== '')
			filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

		var filterAgeKeys = $formFilters.find('.valueAgeKeys').val();
		if(filterAgeKeys != null && filterAgeKeys !== '')
			filters.push({ name: 'fq', value: 'ageKeys:' + filterAgeKeys });

		var filterPersonCompleteName = $formFilters.find('.valuePersonCompleteName').val();
		if(filterPersonCompleteName != null && filterPersonCompleteName !== '')
			filters.push({ name: 'fq', value: 'personCompleteName:' + filterPersonCompleteName });

		var filterPersonCompleteNamePreferred = $formFilters.find('.valuePersonCompleteNamePreferred').val();
		if(filterPersonCompleteNamePreferred != null && filterPersonCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'personCompleteNamePreferred:' + filterPersonCompleteNamePreferred });

		var filterPersonFormalName = $formFilters.find('.valuePersonFormalName').val();
		if(filterPersonFormalName != null && filterPersonFormalName !== '')
			filters.push({ name: 'fq', value: 'personFormalName:' + filterPersonFormalName });

		var filterPersonRelation = $formFilters.find('.valuePersonRelation').val();
		if(filterPersonRelation != null && filterPersonRelation !== '')
			filters.push({ name: 'fq', value: 'personRelation:' + filterPersonRelation });

		var filterDadCompleteName = $formFilters.find('.valueDadCompleteName').val();
		if(filterDadCompleteName != null && filterDadCompleteName !== '')
			filters.push({ name: 'fq', value: 'dadCompleteName:' + filterDadCompleteName });
	}
	return filters;
}

function searchSchoolDadVals(filters, success, error) {
	$.ajax({
		url: '/api/dad?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolDadObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-male ');
			var $span = $('<span>').attr('class', '').text(o['dadCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolDadVals($formFilters, success, error);
}

function suggestSchoolDadEnrollmentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['dadKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_dadKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEnrollmentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_dadKeys_" + o['pk'] + "'); patchSchoolDadVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolDadForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolEnrollmentVals(filters, success, error);
}

// AdminSearch //

async function adminsearchSchoolDad($formFilters, success, error) {
	var filters = adminsearchSchoolDadFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchSchoolDadVals(filters, success, error);
}

function adminsearchSchoolDadFilters($formFilters) {
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

		var filterPersonFirstName = $formFilters.find('.valuePersonFirstName').val();
		if(filterPersonFirstName != null && filterPersonFirstName !== '')
			filters.push({ name: 'fq', value: 'personFirstName:' + filterPersonFirstName });

		var filterFamilyName = $formFilters.find('.valueFamilyName').val();
		if(filterFamilyName != null && filterFamilyName !== '')
			filters.push({ name: 'fq', value: 'familyName:' + filterFamilyName });

		var filterPersonFirstNamePreferred = $formFilters.find('.valuePersonFirstNamePreferred').val();
		if(filterPersonFirstNamePreferred != null && filterPersonFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'personFirstNamePreferred:' + filterPersonFirstNamePreferred });

		var filterPersonEmail = $formFilters.find('.valuePersonEmail').val();
		if(filterPersonEmail != null && filterPersonEmail !== '')
			filters.push({ name: 'fq', value: 'personEmail:' + filterPersonEmail });

		var filterPersonPhoneNumber = $formFilters.find('.valuePersonPhoneNumber').val();
		if(filterPersonPhoneNumber != null && filterPersonPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'personPhoneNumber:' + filterPersonPhoneNumber });

		var filterPersonOccupation = $formFilters.find('.valuePersonOccupation').val();
		if(filterPersonOccupation != null && filterPersonOccupation !== '')
			filters.push({ name: 'fq', value: 'personOccupation:' + filterPersonOccupation });

		var $filterPersonSmsCheckbox = $formFilters.find('input.valuePersonSms[type = "checkbox"]');
		var $filterPersonSmsSelect = $formFilters.find('select.valuePersonSms');
		var filterPersonSms = $filterPersonSmsSelect.length ? $filterPersonSmsSelect.val() : $filterPersonSmsCheckbox.prop('checked');
		var filterPersonSmsSelectVal = $formFilters.find('select.filterPersonSms').val();
		var filterPersonSms = null;
		if(filterPersonSmsSelectVal !== '')
			filterPersonSms = filterPersonSmsSelectVal == 'true';
		if(filterPersonSms != null && filterPersonSms === true)
			filters.push({ name: 'fq', value: 'personSms:' + filterPersonSms });

		var $filterPersonEmergencyContactCheckbox = $formFilters.find('input.valuePersonEmergencyContact[type = "checkbox"]');
		var $filterPersonEmergencyContactSelect = $formFilters.find('select.valuePersonEmergencyContact');
		var filterPersonEmergencyContact = $filterPersonEmergencyContactSelect.length ? $filterPersonEmergencyContactSelect.val() : $filterPersonEmergencyContactCheckbox.prop('checked');
		var filterPersonEmergencyContactSelectVal = $formFilters.find('select.filterPersonEmergencyContact').val();
		var filterPersonEmergencyContact = null;
		if(filterPersonEmergencyContactSelectVal !== '')
			filterPersonEmergencyContact = filterPersonEmergencyContactSelectVal == 'true';
		if(filterPersonEmergencyContact != null && filterPersonEmergencyContact === true)
			filters.push({ name: 'fq', value: 'personEmergencyContact:' + filterPersonEmergencyContact });

		var $filterPersonReceiveEmailCheckbox = $formFilters.find('input.valuePersonReceiveEmail[type = "checkbox"]');
		var $filterPersonReceiveEmailSelect = $formFilters.find('select.valuePersonReceiveEmail');
		var filterPersonReceiveEmail = $filterPersonReceiveEmailSelect.length ? $filterPersonReceiveEmailSelect.val() : $filterPersonReceiveEmailCheckbox.prop('checked');
		var filterPersonReceiveEmailSelectVal = $formFilters.find('select.filterPersonReceiveEmail').val();
		var filterPersonReceiveEmail = null;
		if(filterPersonReceiveEmailSelectVal !== '')
			filterPersonReceiveEmail = filterPersonReceiveEmailSelectVal == 'true';
		if(filterPersonReceiveEmail != null && filterPersonReceiveEmail === true)
			filters.push({ name: 'fq', value: 'personReceiveEmail:' + filterPersonReceiveEmail });

		var $filterPersonPickupCheckbox = $formFilters.find('input.valuePersonPickup[type = "checkbox"]');
		var $filterPersonPickupSelect = $formFilters.find('select.valuePersonPickup');
		var filterPersonPickup = $filterPersonPickupSelect.length ? $filterPersonPickupSelect.val() : $filterPersonPickupCheckbox.prop('checked');
		var filterPersonPickupSelectVal = $formFilters.find('select.filterPersonPickup').val();
		var filterPersonPickup = null;
		if(filterPersonPickupSelectVal !== '')
			filterPersonPickup = filterPersonPickupSelectVal == 'true';
		if(filterPersonPickup != null && filterPersonPickup === true)
			filters.push({ name: 'fq', value: 'personPickup:' + filterPersonPickup });

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

		var filterDadKey = $formFilters.find('.valueDadKey').val();
		if(filterDadKey != null && filterDadKey !== '')
			filters.push({ name: 'fq', value: 'dadKey:' + filterDadKey });

		var filterFamilySort = $formFilters.find('.valueFamilySort').val();
		if(filterFamilySort != null && filterFamilySort !== '')
			filters.push({ name: 'fq', value: 'familySort:' + filterFamilySort });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterSchoolKeys = $formFilters.find('.valueSchoolKeys').val();
		if(filterSchoolKeys != null && filterSchoolKeys !== '')
			filters.push({ name: 'fq', value: 'schoolKeys:' + filterSchoolKeys });

		var filterYearKeys = $formFilters.find('.valueYearKeys').val();
		if(filterYearKeys != null && filterYearKeys !== '')
			filters.push({ name: 'fq', value: 'yearKeys:' + filterYearKeys });

		var filterSeasonKeys = $formFilters.find('.valueSeasonKeys').val();
		if(filterSeasonKeys != null && filterSeasonKeys !== '')
			filters.push({ name: 'fq', value: 'seasonKeys:' + filterSeasonKeys });

		var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
		if(filterSessionKeys != null && filterSessionKeys !== '')
			filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

		var filterAgeKeys = $formFilters.find('.valueAgeKeys').val();
		if(filterAgeKeys != null && filterAgeKeys !== '')
			filters.push({ name: 'fq', value: 'ageKeys:' + filterAgeKeys });

		var filterPersonCompleteName = $formFilters.find('.valuePersonCompleteName').val();
		if(filterPersonCompleteName != null && filterPersonCompleteName !== '')
			filters.push({ name: 'fq', value: 'personCompleteName:' + filterPersonCompleteName });

		var filterPersonCompleteNamePreferred = $formFilters.find('.valuePersonCompleteNamePreferred').val();
		if(filterPersonCompleteNamePreferred != null && filterPersonCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'personCompleteNamePreferred:' + filterPersonCompleteNamePreferred });

		var filterPersonFormalName = $formFilters.find('.valuePersonFormalName').val();
		if(filterPersonFormalName != null && filterPersonFormalName !== '')
			filters.push({ name: 'fq', value: 'personFormalName:' + filterPersonFormalName });

		var filterPersonRelation = $formFilters.find('.valuePersonRelation').val();
		if(filterPersonRelation != null && filterPersonRelation !== '')
			filters.push({ name: 'fq', value: 'personRelation:' + filterPersonRelation });

		var filterDadCompleteName = $formFilters.find('.valueDadCompleteName').val();
		if(filterDadCompleteName != null && filterDadCompleteName !== '')
			filters.push({ name: 'fq', value: 'dadCompleteName:' + filterDadCompleteName });
	}
	return filters;
}

function adminsearchSchoolDadVals(filters, success, error) {
	$.ajax({
		url: '/api/admin/dad?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolDadObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-male ');
			var $span = $('<span>').attr('class', '').text(o['dadCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolDadVals($formFilters, success, error);
}

function suggestSchoolDadEnrollmentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['dadKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_dadKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEnrollmentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_dadKeys_" + o['pk'] + "'); patchSchoolDadVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolDadForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolEnrollmentVals(filters, success, error);
}

async function websocketSchoolDad(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSchoolDad', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SchoolDadForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-light-blue ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-male w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify dads');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-light-blue ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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
			$('#Page_enrollmentKeys').trigger('oninput');
			$('#Page_enrollmentKeys_add').text('add an enrollment');
			$('#Page_enrollmentKeys_add').removeClass('w3-disabled');
			$('#Page_enrollmentKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSchoolEnrollment', function (error, message) {
			$('#Page_enrollmentKeys').trigger('oninput');
			$('#Page_enrollmentKeys_add').text('add an enrollment');
			$('#Page_enrollmentKeys_add').removeClass('w3-disabled');
			$('#Page_enrollmentKeys_add').attr('disabled', false);
		});
	}
}
async function websocketSchoolDadInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSchoolDadVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputSchoolDad' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSchoolDad' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSchoolDad' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSchoolDad' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSchoolDad' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSchoolDad' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'Deleted'));
			}
			var val = o['personFirstName'];
			if(vars.includes('personFirstName')) {
				$('.inputSchoolDad' + pk + 'PersonFirstName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'PersonFirstName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'PersonFirstName'));
			}
			var val = o['familyName'];
			if(vars.includes('familyName')) {
				$('.inputSchoolDad' + pk + 'FamilyName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'FamilyName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'FamilyName'));
			}
			var val = o['personFirstNamePreferred'];
			if(vars.includes('personFirstNamePreferred')) {
				$('.inputSchoolDad' + pk + 'PersonFirstNamePreferred').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'PersonFirstNamePreferred').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'PersonFirstNamePreferred'));
			}
			var val = o['personEmail'];
			if(vars.includes('personEmail')) {
				$('.inputSchoolDad' + pk + 'PersonEmail').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'PersonEmail').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'PersonEmail'));
			}
			var val = o['personPhoneNumber'];
			if(vars.includes('personPhoneNumber')) {
				$('.inputSchoolDad' + pk + 'PersonPhoneNumber').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'PersonPhoneNumber').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'PersonPhoneNumber'));
			}
			var val = o['personOccupation'];
			if(vars.includes('personOccupation')) {
				$('.inputSchoolDad' + pk + 'PersonOccupation').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'PersonOccupation').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'PersonOccupation'));
			}
			var val = o['personSms'];
			if(vars.includes('personSms')) {
				$('.inputSchoolDad' + pk + 'PersonSms').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'PersonSms').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'PersonSms'));
			}
			var val = o['personEmergencyContact'];
			if(vars.includes('personEmergencyContact')) {
				$('.inputSchoolDad' + pk + 'PersonEmergencyContact').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'PersonEmergencyContact').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'PersonEmergencyContact'));
			}
			var val = o['personReceiveEmail'];
			if(vars.includes('personReceiveEmail')) {
				$('.inputSchoolDad' + pk + 'PersonReceiveEmail').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'PersonReceiveEmail').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'PersonReceiveEmail'));
			}
			var val = o['personPickup'];
			if(vars.includes('personPickup')) {
				$('.inputSchoolDad' + pk + 'PersonPickup').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'PersonPickup').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'PersonPickup'));
			}
			var val = o['photo'];
			if(vars.includes('photo')) {
				if(val === undefined)
					val = null;
				$('.imgSchoolDad' + pk + 'Photo').each(function() {
					if(val !== $(this).attr('src'))
						$(this).attr('src', val);
				});
				$('.inputSchoolDad' + pk + 'Photo').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'Photo').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'Photo'));
			}
			var val = o['enrollmentKeys'];
			if(vars.includes('enrollmentKeys')) {
				$('.inputSchoolDad' + pk + 'EnrollmentKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'EnrollmentKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'EnrollmentKeys'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSchoolDad' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSchoolDad' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSchoolDad' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSchoolDad' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSchoolDad' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSchoolDad' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputSchoolDad' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSchoolDad' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSchoolDad' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSchoolDad' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputSchoolDad' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputSchoolDad' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputSchoolDad' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputSchoolDad' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputSchoolDad' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'PageUrlApi'));
			}
			var val = o['dadKey'];
			if(vars.includes('dadKey')) {
				$('.inputSchoolDad' + pk + 'DadKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'DadKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'DadKey'));
			}
			var val = o['familySort'];
			if(vars.includes('familySort')) {
				$('.inputSchoolDad' + pk + 'FamilySort').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'FamilySort').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'FamilySort'));
			}
			var val = o['schoolSort'];
			if(vars.includes('schoolSort')) {
				$('.inputSchoolDad' + pk + 'SchoolSort').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'SchoolSort').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'SchoolSort'));
			}
			var val = o['userKeys'];
			if(vars.includes('userKeys')) {
				$('.inputSchoolDad' + pk + 'UserKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'UserKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'UserKeys'));
			}
			var val = o['schoolKeys'];
			if(vars.includes('schoolKeys')) {
				$('.inputSchoolDad' + pk + 'SchoolKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'SchoolKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'SchoolKeys'));
			}
			var val = o['yearKeys'];
			if(vars.includes('yearKeys')) {
				$('.inputSchoolDad' + pk + 'YearKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'YearKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'YearKeys'));
			}
			var val = o['seasonKeys'];
			if(vars.includes('seasonKeys')) {
				$('.inputSchoolDad' + pk + 'SeasonKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'SeasonKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'SeasonKeys'));
			}
			var val = o['sessionKeys'];
			if(vars.includes('sessionKeys')) {
				$('.inputSchoolDad' + pk + 'SessionKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'SessionKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'SessionKeys'));
			}
			var val = o['ageKeys'];
			if(vars.includes('ageKeys')) {
				$('.inputSchoolDad' + pk + 'AgeKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'AgeKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'AgeKeys'));
			}
			var val = o['personCompleteName'];
			if(vars.includes('personCompleteName')) {
				$('.inputSchoolDad' + pk + 'PersonCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'PersonCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'PersonCompleteName'));
			}
			var val = o['personCompleteNamePreferred'];
			if(vars.includes('personCompleteNamePreferred')) {
				$('.inputSchoolDad' + pk + 'PersonCompleteNamePreferred').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'PersonCompleteNamePreferred').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'PersonCompleteNamePreferred'));
			}
			var val = o['personFormalName'];
			if(vars.includes('personFormalName')) {
				$('.inputSchoolDad' + pk + 'PersonFormalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'PersonFormalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'PersonFormalName'));
			}
			var val = o['personRelation'];
			if(vars.includes('personRelation')) {
				$('.inputSchoolDad' + pk + 'PersonRelation').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'PersonRelation').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'PersonRelation'));
			}
			var val = o['dadCompleteName'];
			if(vars.includes('dadCompleteName')) {
				$('.inputSchoolDad' + pk + 'DadCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolDad' + pk + 'DadCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolDad' + pk + 'DadCompleteName'));
			}
		});
	}
}
