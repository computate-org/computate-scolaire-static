
// POST //

async function postSchoolMom($formValues, success, error) {
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

	var valuePersonReceiveEmail = $formValues.find('.valuePersonReceiveEmail').prop('checked');
	if(valuePersonReceiveEmail != null && valuePersonReceiveEmail !== '')
		vals['personReceiveEmail'] = valuePersonReceiveEmail;

	var valuePersonEmergencyContact = $formValues.find('.valuePersonEmergencyContact').prop('checked');
	if(valuePersonEmergencyContact != null && valuePersonEmergencyContact !== '')
		vals['personEmergencyContact'] = valuePersonEmergencyContact;

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
		url: '/api/mom'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSchoolMomVals(vals, success, error) {
	$.ajax({
		url: '/api/mom'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportSchoolMom($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportSchoolMomVals(JSON.parse(json), success, error);
}

function putimportSchoolMomVals(json, success, error) {
	$.ajax({
		url: '/api/mom/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeSchoolMom($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeSchoolMomVals(JSON.parse(json), success, error);
}

function putmergeSchoolMomVals(json, success, error) {
	$.ajax({
		url: '/api/mom/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopySchoolMom($formValues, pk, success, error) {
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

	var valuePersonReceiveEmail = $formValues.find('.valuePersonReceiveEmail').prop('checked');
	if(valuePersonReceiveEmail != null && valuePersonReceiveEmail !== '')
		vals['personReceiveEmail'] = valuePersonReceiveEmail;

	var valuePersonEmergencyContact = $formValues.find('.valuePersonEmergencyContact').prop('checked');
	if(valuePersonEmergencyContact != null && valuePersonEmergencyContact !== '')
		vals['personEmergencyContact'] = valuePersonEmergencyContact;

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

	putcopySchoolMomVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopySchoolMomVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/mom/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSchoolMom($formFilters, $formValues, pk, success, error) {
	var filters = patchSchoolMomFilters($formFilters);

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

	patchSchoolMomVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSchoolMomFilters($formFilters) {
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

		var $filterPersonReceiveEmailCheckbox = $formFilters.find('input.valuePersonReceiveEmail[type = "checkbox"]');
		var $filterPersonReceiveEmailSelect = $formFilters.find('select.valuePersonReceiveEmail');
		var filterPersonReceiveEmail = $filterPersonReceiveEmailSelect.length ? $filterPersonReceiveEmailSelect.val() : $filterPersonReceiveEmailCheckbox.prop('checked');
		var filterPersonReceiveEmailSelectVal = $formFilters.find('select.filterPersonReceiveEmail').val();
		var filterPersonReceiveEmail = null;
		if(filterPersonReceiveEmailSelectVal !== '')
			filterPersonReceiveEmail = filterPersonReceiveEmailSelectVal == 'true';
		if(filterPersonReceiveEmail != null && filterPersonReceiveEmail === true)
			filters.push({ name: 'fq', value: 'personReceiveEmail:' + filterPersonReceiveEmail });

		var $filterPersonEmergencyContactCheckbox = $formFilters.find('input.valuePersonEmergencyContact[type = "checkbox"]');
		var $filterPersonEmergencyContactSelect = $formFilters.find('select.valuePersonEmergencyContact');
		var filterPersonEmergencyContact = $filterPersonEmergencyContactSelect.length ? $filterPersonEmergencyContactSelect.val() : $filterPersonEmergencyContactCheckbox.prop('checked');
		var filterPersonEmergencyContactSelectVal = $formFilters.find('select.filterPersonEmergencyContact').val();
		var filterPersonEmergencyContact = null;
		if(filterPersonEmergencyContactSelectVal !== '')
			filterPersonEmergencyContact = filterPersonEmergencyContactSelectVal == 'true';
		if(filterPersonEmergencyContact != null && filterPersonEmergencyContact === true)
			filters.push({ name: 'fq', value: 'personEmergencyContact:' + filterPersonEmergencyContact });

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

		var filterMomKey = $formFilters.find('.valueMomKey').val();
		if(filterMomKey != null && filterMomKey !== '')
			filters.push({ name: 'fq', value: 'momKey:' + filterMomKey });

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

		var filterMomCompleteName = $formFilters.find('.valueMomCompleteName').val();
		if(filterMomCompleteName != null && filterMomCompleteName !== '')
			filters.push({ name: 'fq', value: 'momCompleteName:' + filterMomCompleteName });
	}
	return filters;
}

function patchSchoolMomVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSchoolMomVals(filters, vals, success, error);
}

function patchSchoolMomVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/mom?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSchoolMom(pk) {
	$.ajax({
		url: '/api/mom/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSchoolMom($formFilters, success, error) {
	var filters = searchSchoolMomFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolMomVals(filters, success, error);
}

function searchSchoolMomFilters($formFilters) {
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

		var $filterPersonReceiveEmailCheckbox = $formFilters.find('input.valuePersonReceiveEmail[type = "checkbox"]');
		var $filterPersonReceiveEmailSelect = $formFilters.find('select.valuePersonReceiveEmail');
		var filterPersonReceiveEmail = $filterPersonReceiveEmailSelect.length ? $filterPersonReceiveEmailSelect.val() : $filterPersonReceiveEmailCheckbox.prop('checked');
		var filterPersonReceiveEmailSelectVal = $formFilters.find('select.filterPersonReceiveEmail').val();
		var filterPersonReceiveEmail = null;
		if(filterPersonReceiveEmailSelectVal !== '')
			filterPersonReceiveEmail = filterPersonReceiveEmailSelectVal == 'true';
		if(filterPersonReceiveEmail != null && filterPersonReceiveEmail === true)
			filters.push({ name: 'fq', value: 'personReceiveEmail:' + filterPersonReceiveEmail });

		var $filterPersonEmergencyContactCheckbox = $formFilters.find('input.valuePersonEmergencyContact[type = "checkbox"]');
		var $filterPersonEmergencyContactSelect = $formFilters.find('select.valuePersonEmergencyContact');
		var filterPersonEmergencyContact = $filterPersonEmergencyContactSelect.length ? $filterPersonEmergencyContactSelect.val() : $filterPersonEmergencyContactCheckbox.prop('checked');
		var filterPersonEmergencyContactSelectVal = $formFilters.find('select.filterPersonEmergencyContact').val();
		var filterPersonEmergencyContact = null;
		if(filterPersonEmergencyContactSelectVal !== '')
			filterPersonEmergencyContact = filterPersonEmergencyContactSelectVal == 'true';
		if(filterPersonEmergencyContact != null && filterPersonEmergencyContact === true)
			filters.push({ name: 'fq', value: 'personEmergencyContact:' + filterPersonEmergencyContact });

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

		var filterMomKey = $formFilters.find('.valueMomKey').val();
		if(filterMomKey != null && filterMomKey !== '')
			filters.push({ name: 'fq', value: 'momKey:' + filterMomKey });

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

		var filterMomCompleteName = $formFilters.find('.valueMomCompleteName').val();
		if(filterMomCompleteName != null && filterMomCompleteName !== '')
			filters.push({ name: 'fq', value: 'momCompleteName:' + filterMomCompleteName });
	}
	return filters;
}

function searchSchoolMomVals(filters, success, error) {
	$.ajax({
		url: '/api/mom?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolMomObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-female ');
			var $span = $('<span>').attr('class', '').text(o['momCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolMomVals($formFilters, success, error);
}

function suggestSchoolMomEnrollmentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['momKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_momKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEnrollmentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_momKeys_" + o['pk'] + "'); patchSchoolMomVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolMomForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolEnrollmentVals(filters, success, error);
}

// AdminSearch //

async function adminsearchSchoolMom($formFilters, success, error) {
	var filters = adminsearchSchoolMomFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchSchoolMomVals(filters, success, error);
}

function adminsearchSchoolMomFilters($formFilters) {
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

		var $filterPersonReceiveEmailCheckbox = $formFilters.find('input.valuePersonReceiveEmail[type = "checkbox"]');
		var $filterPersonReceiveEmailSelect = $formFilters.find('select.valuePersonReceiveEmail');
		var filterPersonReceiveEmail = $filterPersonReceiveEmailSelect.length ? $filterPersonReceiveEmailSelect.val() : $filterPersonReceiveEmailCheckbox.prop('checked');
		var filterPersonReceiveEmailSelectVal = $formFilters.find('select.filterPersonReceiveEmail').val();
		var filterPersonReceiveEmail = null;
		if(filterPersonReceiveEmailSelectVal !== '')
			filterPersonReceiveEmail = filterPersonReceiveEmailSelectVal == 'true';
		if(filterPersonReceiveEmail != null && filterPersonReceiveEmail === true)
			filters.push({ name: 'fq', value: 'personReceiveEmail:' + filterPersonReceiveEmail });

		var $filterPersonEmergencyContactCheckbox = $formFilters.find('input.valuePersonEmergencyContact[type = "checkbox"]');
		var $filterPersonEmergencyContactSelect = $formFilters.find('select.valuePersonEmergencyContact');
		var filterPersonEmergencyContact = $filterPersonEmergencyContactSelect.length ? $filterPersonEmergencyContactSelect.val() : $filterPersonEmergencyContactCheckbox.prop('checked');
		var filterPersonEmergencyContactSelectVal = $formFilters.find('select.filterPersonEmergencyContact').val();
		var filterPersonEmergencyContact = null;
		if(filterPersonEmergencyContactSelectVal !== '')
			filterPersonEmergencyContact = filterPersonEmergencyContactSelectVal == 'true';
		if(filterPersonEmergencyContact != null && filterPersonEmergencyContact === true)
			filters.push({ name: 'fq', value: 'personEmergencyContact:' + filterPersonEmergencyContact });

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

		var filterMomKey = $formFilters.find('.valueMomKey').val();
		if(filterMomKey != null && filterMomKey !== '')
			filters.push({ name: 'fq', value: 'momKey:' + filterMomKey });

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

		var filterMomCompleteName = $formFilters.find('.valueMomCompleteName').val();
		if(filterMomCompleteName != null && filterMomCompleteName !== '')
			filters.push({ name: 'fq', value: 'momCompleteName:' + filterMomCompleteName });
	}
	return filters;
}

function adminsearchSchoolMomVals(filters, success, error) {
	$.ajax({
		url: '/api/admin/mom?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolMomObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-female ');
			var $span = $('<span>').attr('class', '').text(o['momCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolMomVals($formFilters, success, error);
}

function suggestSchoolMomEnrollmentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['momKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_momKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEnrollmentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_momKeys_" + o['pk'] + "'); patchSchoolMomVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolMomForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolEnrollmentVals(filters, success, error);
}

async function websocketSchoolMom(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSchoolMom', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SchoolMomForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-pink ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-female w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify moms');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-pink ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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
async function websocketSchoolMomInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSchoolMomVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputSchoolMom' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSchoolMom' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSchoolMom' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSchoolMom' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSchoolMom' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSchoolMom' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'Deleted'));
			}
			var val = o['personFirstName'];
			if(vars.includes('personFirstName')) {
				$('.inputSchoolMom' + pk + 'PersonFirstName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'PersonFirstName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'PersonFirstName'));
			}
			var val = o['familyName'];
			if(vars.includes('familyName')) {
				$('.inputSchoolMom' + pk + 'FamilyName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'FamilyName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'FamilyName'));
			}
			var val = o['personFirstNamePreferred'];
			if(vars.includes('personFirstNamePreferred')) {
				$('.inputSchoolMom' + pk + 'PersonFirstNamePreferred').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'PersonFirstNamePreferred').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'PersonFirstNamePreferred'));
			}
			var val = o['personEmail'];
			if(vars.includes('personEmail')) {
				$('.inputSchoolMom' + pk + 'PersonEmail').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'PersonEmail').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'PersonEmail'));
			}
			var val = o['personPhoneNumber'];
			if(vars.includes('personPhoneNumber')) {
				$('.inputSchoolMom' + pk + 'PersonPhoneNumber').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'PersonPhoneNumber').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'PersonPhoneNumber'));
			}
			var val = o['personOccupation'];
			if(vars.includes('personOccupation')) {
				$('.inputSchoolMom' + pk + 'PersonOccupation').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'PersonOccupation').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'PersonOccupation'));
			}
			var val = o['personSms'];
			if(vars.includes('personSms')) {
				$('.inputSchoolMom' + pk + 'PersonSms').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'PersonSms').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'PersonSms'));
			}
			var val = o['personReceiveEmail'];
			if(vars.includes('personReceiveEmail')) {
				$('.inputSchoolMom' + pk + 'PersonReceiveEmail').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'PersonReceiveEmail').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'PersonReceiveEmail'));
			}
			var val = o['personEmergencyContact'];
			if(vars.includes('personEmergencyContact')) {
				$('.inputSchoolMom' + pk + 'PersonEmergencyContact').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'PersonEmergencyContact').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'PersonEmergencyContact'));
			}
			var val = o['personPickup'];
			if(vars.includes('personPickup')) {
				$('.inputSchoolMom' + pk + 'PersonPickup').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'PersonPickup').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'PersonPickup'));
			}
			var val = o['photo'];
			if(vars.includes('photo')) {
				if(val === undefined)
					val = null;
				$('.imgSchoolMom' + pk + 'Photo').each(function() {
					if(val !== $(this).attr('src'))
						$(this).attr('src', val);
				});
				$('.inputSchoolMom' + pk + 'Photo').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'Photo').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'Photo'));
			}
			var val = o['enrollmentKeys'];
			if(vars.includes('enrollmentKeys')) {
				$('.inputSchoolMom' + pk + 'EnrollmentKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'EnrollmentKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'EnrollmentKeys'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSchoolMom' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSchoolMom' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSchoolMom' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSchoolMom' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSchoolMom' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSchoolMom' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputSchoolMom' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSchoolMom' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSchoolMom' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSchoolMom' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputSchoolMom' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputSchoolMom' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputSchoolMom' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputSchoolMom' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputSchoolMom' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'PageUrlApi'));
			}
			var val = o['momKey'];
			if(vars.includes('momKey')) {
				$('.inputSchoolMom' + pk + 'MomKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'MomKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'MomKey'));
			}
			var val = o['familySort'];
			if(vars.includes('familySort')) {
				$('.inputSchoolMom' + pk + 'FamilySort').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'FamilySort').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'FamilySort'));
			}
			var val = o['schoolSort'];
			if(vars.includes('schoolSort')) {
				$('.inputSchoolMom' + pk + 'SchoolSort').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'SchoolSort').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'SchoolSort'));
			}
			var val = o['userKeys'];
			if(vars.includes('userKeys')) {
				$('.inputSchoolMom' + pk + 'UserKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'UserKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'UserKeys'));
			}
			var val = o['schoolKeys'];
			if(vars.includes('schoolKeys')) {
				$('.inputSchoolMom' + pk + 'SchoolKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'SchoolKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'SchoolKeys'));
			}
			var val = o['yearKeys'];
			if(vars.includes('yearKeys')) {
				$('.inputSchoolMom' + pk + 'YearKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'YearKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'YearKeys'));
			}
			var val = o['seasonKeys'];
			if(vars.includes('seasonKeys')) {
				$('.inputSchoolMom' + pk + 'SeasonKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'SeasonKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'SeasonKeys'));
			}
			var val = o['sessionKeys'];
			if(vars.includes('sessionKeys')) {
				$('.inputSchoolMom' + pk + 'SessionKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'SessionKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'SessionKeys'));
			}
			var val = o['ageKeys'];
			if(vars.includes('ageKeys')) {
				$('.inputSchoolMom' + pk + 'AgeKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'AgeKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'AgeKeys'));
			}
			var val = o['personCompleteName'];
			if(vars.includes('personCompleteName')) {
				$('.inputSchoolMom' + pk + 'PersonCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'PersonCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'PersonCompleteName'));
			}
			var val = o['personCompleteNamePreferred'];
			if(vars.includes('personCompleteNamePreferred')) {
				$('.inputSchoolMom' + pk + 'PersonCompleteNamePreferred').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'PersonCompleteNamePreferred').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'PersonCompleteNamePreferred'));
			}
			var val = o['personFormalName'];
			if(vars.includes('personFormalName')) {
				$('.inputSchoolMom' + pk + 'PersonFormalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'PersonFormalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'PersonFormalName'));
			}
			var val = o['personRelation'];
			if(vars.includes('personRelation')) {
				$('.inputSchoolMom' + pk + 'PersonRelation').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'PersonRelation').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'PersonRelation'));
			}
			var val = o['momCompleteName'];
			if(vars.includes('momCompleteName')) {
				$('.inputSchoolMom' + pk + 'MomCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolMom' + pk + 'MomCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolMom' + pk + 'MomCompleteName'));
			}
		});
	}
}
