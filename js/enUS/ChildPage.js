
// POST //

async function postSchoolChild($formValues, success, error) {
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

	var valuePersonBirthDate = $formValues.find('.valuePersonBirthDate').val();
	if(valuePersonBirthDate != null && valuePersonBirthDate !== '')
		vals['personBirthDate'] = valuePersonBirthDate;

	var valuePersonAgeInSeptember = $formValues.find('.valuePersonAgeInSeptember').val();
	if(valuePersonAgeInSeptember != null && valuePersonAgeInSeptember !== '')
		vals['personAgeInSeptember'] = valuePersonAgeInSeptember;

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
		url: '/api/child'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSchoolChildVals(vals, success, error) {
	$.ajax({
		url: '/api/child'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportSchoolChild($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportSchoolChildVals(JSON.parse(json), success, error);
}

function putimportSchoolChildVals(json, success, error) {
	$.ajax({
		url: '/api/child/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeSchoolChild($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeSchoolChildVals(JSON.parse(json), success, error);
}

function putmergeSchoolChildVals(json, success, error) {
	$.ajax({
		url: '/api/child/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopySchoolChild($formValues, pk, success, error) {
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

	var valuePersonBirthDate = $formValues.find('.valuePersonBirthDate').val();
	if(valuePersonBirthDate != null && valuePersonBirthDate !== '')
		vals['personBirthDate'] = valuePersonBirthDate;

	var valuePersonAgeInSeptember = $formValues.find('.valuePersonAgeInSeptember').val();
	if(valuePersonAgeInSeptember != null && valuePersonAgeInSeptember !== '')
		vals['personAgeInSeptember'] = valuePersonAgeInSeptember;

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

	putcopySchoolChildVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopySchoolChildVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/child/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSchoolChild($formFilters, $formValues, pk, success, error) {
	var filters = patchSchoolChildFilters($formFilters);

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

	var valuePersonBirthDate = $formValues.find('.valuePersonBirthDate').val();
	var removePersonBirthDate = $formValues.find('.removePersonBirthDate').val() === 'true';
	var setPersonBirthDate = removePersonBirthDate ? null : $formValues.find('.setPersonBirthDate').val();
	var addPersonBirthDate = $formValues.find('.addPersonBirthDate').val();
	var setMoment = setPersonBirthDate ? moment(setPersonBirthDate, 'MM/DD/YYYY') : null; 
	var addMoment = addPersonBirthDate ? moment(addPersonBirthDate, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setPersonBirthDate = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addPersonBirthDate = s;
	} 
	if(removePersonBirthDate || setPersonBirthDate != null && setPersonBirthDate !== '')
		vals['setPersonBirthDate'] = setPersonBirthDate;
	if(addPersonBirthDate != null && addPersonBirthDate !== '')
		vals['addPersonBirthDate'] = addPersonBirthDate;
	var removePersonBirthDate = $formValues.find('.removePersonBirthDate').val();
	if(removePersonBirthDate != null && removePersonBirthDate !== '')
		vals['removePersonBirthDate'] = removePersonBirthDate;

	var valuePersonAgeInSeptember = $formValues.find('.valuePersonAgeInSeptember').val();
	var removePersonAgeInSeptember = $formValues.find('.removePersonAgeInSeptember').val() === 'true';
	var setPersonAgeInSeptember = removePersonAgeInSeptember ? null : $formValues.find('.setPersonAgeInSeptember').val();
	var addPersonAgeInSeptember = $formValues.find('.addPersonAgeInSeptember').val();
	if(removePersonAgeInSeptember || setPersonAgeInSeptember != null && setPersonAgeInSeptember !== '')
		vals['setPersonAgeInSeptember'] = setPersonAgeInSeptember;
	if(addPersonAgeInSeptember != null && addPersonAgeInSeptember !== '')
		vals['addPersonAgeInSeptember'] = addPersonAgeInSeptember;
	var removePersonAgeInSeptember = $formValues.find('.removePersonAgeInSeptember').val();
	if(removePersonAgeInSeptember != null && removePersonAgeInSeptember !== '')
		vals['removePersonAgeInSeptember'] = removePersonAgeInSeptember;

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

	patchSchoolChildVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSchoolChildFilters($formFilters) {
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

		var filterPersonBirthDate = $formFilters.find('.valuePersonBirthDate').val();
		if(filterPersonBirthDate != null && filterPersonBirthDate !== '')
			filters.push({ name: 'fq', value: 'personBirthDate:' + filterPersonBirthDate });

		var filterPersonAgeInSeptember = $formFilters.find('.valuePersonAgeInSeptember').val();
		if(filterPersonAgeInSeptember != null && filterPersonAgeInSeptember !== '')
			filters.push({ name: 'fq', value: 'personAgeInSeptember:' + filterPersonAgeInSeptember });

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

		var filterChildKey = $formFilters.find('.valueChildKey').val();
		if(filterChildKey != null && filterChildKey !== '')
			filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

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

		var filterPersonBirthDateYear = $formFilters.find('.valuePersonBirthDateYear').val();
		if(filterPersonBirthDateYear != null && filterPersonBirthDateYear !== '')
			filters.push({ name: 'fq', value: 'personBirthDateYear:' + filterPersonBirthDateYear });

		var filterPersonBirthDateMonthOfYear = $formFilters.find('.valuePersonBirthDateMonthOfYear').val();
		if(filterPersonBirthDateMonthOfYear != null && filterPersonBirthDateMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'personBirthDateMonthOfYear:' + filterPersonBirthDateMonthOfYear });

		var filterPersonBirthDateDayOfWeek = $formFilters.find('.valuePersonBirthDateDayOfWeek').val();
		if(filterPersonBirthDateDayOfWeek != null && filterPersonBirthDateDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'personBirthDateDayOfWeek:' + filterPersonBirthDateDayOfWeek });

		var filterChildCompleteName = $formFilters.find('.valueChildCompleteName').val();
		if(filterChildCompleteName != null && filterChildCompleteName !== '')
			filters.push({ name: 'fq', value: 'childCompleteName:' + filterChildCompleteName });
	}
	return filters;
}

function patchSchoolChildVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSchoolChildVals(filters, vals, success, error);
}

function patchSchoolChildVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/child?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSchoolChild(pk) {
	$.ajax({
		url: '/api/child/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSchoolChild($formFilters, success, error) {
	var filters = searchSchoolChildFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolChildVals(filters, success, error);
}

function searchSchoolChildFilters($formFilters) {
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

		var filterPersonBirthDate = $formFilters.find('.valuePersonBirthDate').val();
		if(filterPersonBirthDate != null && filterPersonBirthDate !== '')
			filters.push({ name: 'fq', value: 'personBirthDate:' + filterPersonBirthDate });

		var filterPersonAgeInSeptember = $formFilters.find('.valuePersonAgeInSeptember').val();
		if(filterPersonAgeInSeptember != null && filterPersonAgeInSeptember !== '')
			filters.push({ name: 'fq', value: 'personAgeInSeptember:' + filterPersonAgeInSeptember });

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

		var filterChildKey = $formFilters.find('.valueChildKey').val();
		if(filterChildKey != null && filterChildKey !== '')
			filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

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

		var filterPersonBirthDateYear = $formFilters.find('.valuePersonBirthDateYear').val();
		if(filterPersonBirthDateYear != null && filterPersonBirthDateYear !== '')
			filters.push({ name: 'fq', value: 'personBirthDateYear:' + filterPersonBirthDateYear });

		var filterPersonBirthDateMonthOfYear = $formFilters.find('.valuePersonBirthDateMonthOfYear').val();
		if(filterPersonBirthDateMonthOfYear != null && filterPersonBirthDateMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'personBirthDateMonthOfYear:' + filterPersonBirthDateMonthOfYear });

		var filterPersonBirthDateDayOfWeek = $formFilters.find('.valuePersonBirthDateDayOfWeek').val();
		if(filterPersonBirthDateDayOfWeek != null && filterPersonBirthDateDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'personBirthDateDayOfWeek:' + filterPersonBirthDateDayOfWeek });

		var filterChildCompleteName = $formFilters.find('.valueChildCompleteName').val();
		if(filterChildCompleteName != null && filterChildCompleteName !== '')
			filters.push({ name: 'fq', value: 'childCompleteName:' + filterChildCompleteName });
	}
	return filters;
}

function searchSchoolChildVals(filters, success, error) {
	$.ajax({
		url: '/api/child?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolChildObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-child ');
			var $span = $('<span>').attr('class', '').text(o['childCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolChildVals($formFilters, success, error);
}

function suggestSchoolChildEnrollmentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['childKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_childKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEnrollmentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_childKey_" + o['pk'] + "'); patchSchoolChildVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolChildForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolEnrollmentVals(filters, success, error);
}

// AdminSearch //

async function adminsearchSchoolChild($formFilters, success, error) {
	var filters = adminsearchSchoolChildFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchSchoolChildVals(filters, success, error);
}

function adminsearchSchoolChildFilters($formFilters) {
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

		var filterPersonBirthDate = $formFilters.find('.valuePersonBirthDate').val();
		if(filterPersonBirthDate != null && filterPersonBirthDate !== '')
			filters.push({ name: 'fq', value: 'personBirthDate:' + filterPersonBirthDate });

		var filterPersonAgeInSeptember = $formFilters.find('.valuePersonAgeInSeptember').val();
		if(filterPersonAgeInSeptember != null && filterPersonAgeInSeptember !== '')
			filters.push({ name: 'fq', value: 'personAgeInSeptember:' + filterPersonAgeInSeptember });

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

		var filterChildKey = $formFilters.find('.valueChildKey').val();
		if(filterChildKey != null && filterChildKey !== '')
			filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

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

		var filterPersonBirthDateYear = $formFilters.find('.valuePersonBirthDateYear').val();
		if(filterPersonBirthDateYear != null && filterPersonBirthDateYear !== '')
			filters.push({ name: 'fq', value: 'personBirthDateYear:' + filterPersonBirthDateYear });

		var filterPersonBirthDateMonthOfYear = $formFilters.find('.valuePersonBirthDateMonthOfYear').val();
		if(filterPersonBirthDateMonthOfYear != null && filterPersonBirthDateMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'personBirthDateMonthOfYear:' + filterPersonBirthDateMonthOfYear });

		var filterPersonBirthDateDayOfWeek = $formFilters.find('.valuePersonBirthDateDayOfWeek').val();
		if(filterPersonBirthDateDayOfWeek != null && filterPersonBirthDateDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'personBirthDateDayOfWeek:' + filterPersonBirthDateDayOfWeek });

		var filterChildCompleteName = $formFilters.find('.valueChildCompleteName').val();
		if(filterChildCompleteName != null && filterChildCompleteName !== '')
			filters.push({ name: 'fq', value: 'childCompleteName:' + filterChildCompleteName });
	}
	return filters;
}

function adminsearchSchoolChildVals(filters, success, error) {
	$.ajax({
		url: '/api/admin/child?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolChildObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-child ');
			var $span = $('<span>').attr('class', '').text(o['childCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolChildVals($formFilters, success, error);
}

function suggestSchoolChildEnrollmentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['childKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_childKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEnrollmentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_childKey_" + o['pk'] + "'); patchSchoolChildVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#SchoolChildForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolEnrollmentVals(filters, success, error);
}

async function websocketSchoolChild(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSchoolChild', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SchoolChildForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-orange ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-child w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify children');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-orange ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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
async function websocketSchoolChildInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSchoolChildVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputSchoolChild' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSchoolChild' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSchoolChild' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSchoolChild' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSchoolChild' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSchoolChild' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'Deleted'));
			}
			var val = o['personFirstName'];
			if(vars.includes('personFirstName')) {
				$('.inputSchoolChild' + pk + 'PersonFirstName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'PersonFirstName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'PersonFirstName'));
			}
			var val = o['familyName'];
			if(vars.includes('familyName')) {
				$('.inputSchoolChild' + pk + 'FamilyName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'FamilyName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'FamilyName'));
			}
			var val = o['personFirstNamePreferred'];
			if(vars.includes('personFirstNamePreferred')) {
				$('.inputSchoolChild' + pk + 'PersonFirstNamePreferred').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'PersonFirstNamePreferred').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'PersonFirstNamePreferred'));
			}
			var val = o['personBirthDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('personBirthDate')) {
				$('.inputSchoolChild' + pk + 'PersonBirthDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'PersonBirthDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'PersonBirthDate'));
			}
			var val = o['personAgeInSeptember'];
			if(vars.includes('personAgeInSeptember')) {
				$('.inputSchoolChild' + pk + 'PersonAgeInSeptember').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'PersonAgeInSeptember').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'PersonAgeInSeptember'));
			}
			var val = o['photo'];
			if(vars.includes('photo')) {
				if(val === undefined)
					val = null;
				$('.imgSchoolChild' + pk + 'Photo').each(function() {
					if(val !== $(this).attr('src'))
						$(this).attr('src', val);
				});
				$('.inputSchoolChild' + pk + 'Photo').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'Photo').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'Photo'));
			}
			var val = o['enrollmentKeys'];
			if(vars.includes('enrollmentKeys')) {
				$('.inputSchoolChild' + pk + 'EnrollmentKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'EnrollmentKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'EnrollmentKeys'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSchoolChild' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSchoolChild' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSchoolChild' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSchoolChild' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSchoolChild' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSchoolChild' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputSchoolChild' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSchoolChild' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSchoolChild' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSchoolChild' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputSchoolChild' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputSchoolChild' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputSchoolChild' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputSchoolChild' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputSchoolChild' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'PageUrlApi'));
			}
			var val = o['childKey'];
			if(vars.includes('childKey')) {
				$('.inputSchoolChild' + pk + 'ChildKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'ChildKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'ChildKey'));
			}
			var val = o['familySort'];
			if(vars.includes('familySort')) {
				$('.inputSchoolChild' + pk + 'FamilySort').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'FamilySort').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'FamilySort'));
			}
			var val = o['schoolSort'];
			if(vars.includes('schoolSort')) {
				$('.inputSchoolChild' + pk + 'SchoolSort').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'SchoolSort').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'SchoolSort'));
			}
			var val = o['userKeys'];
			if(vars.includes('userKeys')) {
				$('.inputSchoolChild' + pk + 'UserKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'UserKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'UserKeys'));
			}
			var val = o['schoolKeys'];
			if(vars.includes('schoolKeys')) {
				$('.inputSchoolChild' + pk + 'SchoolKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'SchoolKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'SchoolKeys'));
			}
			var val = o['yearKeys'];
			if(vars.includes('yearKeys')) {
				$('.inputSchoolChild' + pk + 'YearKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'YearKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'YearKeys'));
			}
			var val = o['seasonKeys'];
			if(vars.includes('seasonKeys')) {
				$('.inputSchoolChild' + pk + 'SeasonKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'SeasonKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'SeasonKeys'));
			}
			var val = o['sessionKeys'];
			if(vars.includes('sessionKeys')) {
				$('.inputSchoolChild' + pk + 'SessionKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'SessionKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'SessionKeys'));
			}
			var val = o['ageKeys'];
			if(vars.includes('ageKeys')) {
				$('.inputSchoolChild' + pk + 'AgeKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'AgeKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'AgeKeys'));
			}
			var val = o['personCompleteName'];
			if(vars.includes('personCompleteName')) {
				$('.inputSchoolChild' + pk + 'PersonCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'PersonCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'PersonCompleteName'));
			}
			var val = o['personCompleteNamePreferred'];
			if(vars.includes('personCompleteNamePreferred')) {
				$('.inputSchoolChild' + pk + 'PersonCompleteNamePreferred').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'PersonCompleteNamePreferred').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'PersonCompleteNamePreferred'));
			}
			var val = o['personFormalName'];
			if(vars.includes('personFormalName')) {
				$('.inputSchoolChild' + pk + 'PersonFormalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'PersonFormalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'PersonFormalName'));
			}
			var val = o['personBirthDateYear'];
			if(vars.includes('personBirthDateYear')) {
				$('.inputSchoolChild' + pk + 'PersonBirthDateYear').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'PersonBirthDateYear').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'PersonBirthDateYear'));
			}
			var val = o['personBirthDateMonthOfYear'];
			if(vars.includes('personBirthDateMonthOfYear')) {
				$('.inputSchoolChild' + pk + 'PersonBirthDateMonthOfYear').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'PersonBirthDateMonthOfYear').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'PersonBirthDateMonthOfYear'));
			}
			var val = o['personBirthDateDayOfWeek'];
			if(vars.includes('personBirthDateDayOfWeek')) {
				$('.inputSchoolChild' + pk + 'PersonBirthDateDayOfWeek').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'PersonBirthDateDayOfWeek').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'PersonBirthDateDayOfWeek'));
			}
			var val = o['childCompleteName'];
			if(vars.includes('childCompleteName')) {
				$('.inputSchoolChild' + pk + 'ChildCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolChild' + pk + 'ChildCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolChild' + pk + 'ChildCompleteName'));
			}
		});
	}
}
